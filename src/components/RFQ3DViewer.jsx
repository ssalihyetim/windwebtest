import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import * as THREE from "three";

function ModelPreview({ file }) {
  const [geometry, setGeometry] = useState();
  const [error, setError] = useState(null);

  React.useEffect(() => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = async (e) => {
      const ext = file.name.split('.').pop().toLowerCase();
      if (["stl"].includes(ext)) {
        const { STLLoader } = await import("three/examples/jsm/loaders/STLLoader.js");
        const loader = new STLLoader();
        const geometry = loader.parse(e.target.result);
        setGeometry(geometry);
      } else {
        setError("Only STL preview is supported in-browser. For STEP/X_T/IGS/STP, please upload for quote.");
      }
    };
    if (["stl"].includes(file.name.split('.').pop().toLowerCase())) {
      reader.readAsArrayBuffer(file);
    } else {
      setError("Preview only available for STL files in-browser. Other formats will be included in your quote.");
    }
  }, [file]);

  if (error) return <div style={{color:'red',margin:'1rem 0'}}>{error}</div>;
  if (!geometry) return <div>Loading 3D preview...</div>;
  return (
    <mesh geometry={geometry}>
      <meshStandardMaterial color="#ff4a1c" metalness={0.3} roughness={0.6} />
    </mesh>
  );
}

export default function RFQ3DViewer({ file }) {
  if (!file) return null;
  const ext = file.name.split('.').pop().toLowerCase();
  if (ext !== "stl") {
    return <div style={{margin:'1.5rem 0',color:'#003366',background:'#f9f9f9',padding:'1.2rem',borderRadius:8}}>
      <b>3D preview is only available for STL files.</b><br />
      Your file will still be included in your quote request.
    </div>;
  }
  return (
    <div style={{width:"100%",height:350,background:"#111",borderRadius:12,margin:"1.5rem 0"}}>
      <Canvas camera={{ position: [0, 0, 80], fov: 45 }} shadows>
        <ambientLight intensity={0.7} />
        <directionalLight position={[15, 15, 15]} intensity={0.9} />
        <Suspense fallback={null}>
          <Stage intensity={0.7}>
            <ModelPreview file={file} />
          </Stage>
        </Suspense>
        <OrbitControls enablePan enableZoom enableRotate />
      </Canvas>
    </div>
  );
}