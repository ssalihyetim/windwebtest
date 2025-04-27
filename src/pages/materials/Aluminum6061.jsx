import React from "react";
import { Helmet } from "react-helmet-async";

const materialData = [
  {
    name: "6061 Aluminum",
    slug: "aluminum-6061",
    parent: "Aluminum",
    summary: "6061 is a versatile, medium-to-high strength aluminum alloy with excellent machinability and weldability. Used in aerospace, automotive, and general engineering.",
    properties: [
      "Yield Strength: ~276 MPa",
      "Corrosion resistance: Good",
      "Machinability: Excellent",
      "Weldability: Excellent"
    ],
    useAreas: [
      "Aerospace fittings",
      "Automotive parts",
      "Bike frames",
      "General structural components"
    ],
    machinability: "Very good. Produces excellent surface finish and chips easily."
  },
  {
    name: "7075 Aluminum",
    slug: "aluminum-7075",
    parent: "Aluminum",
    summary: "7075 is a high-strength aluminum alloy, commonly used in aerospace and defense. Noted for its strength-to-weight ratio.",
    properties: [
      "Yield Strength: ~503 MPa",
      "Corrosion resistance: Moderate",
      "Machinability: Good",
      "Weldability: Poor"
    ],
    useAreas: [
      "Aircraft structures",
      "Missile parts",
      "High-stress components"
    ],
    machinability: "Good, but can be more difficult than 6061. Not recommended for welding."
  },
  {
    name: "2024 Aluminum",
    slug: "aluminum-2024",
    parent: "Aluminum",
    summary: "2024 is known for its high strength and fatigue resistance. Used in aerospace and military applications.",
    properties: [
      "Yield Strength: ~324 MPa",
      "Corrosion resistance: Poor",
      "Machinability: Good",
      "Weldability: Poor"
    ],
    useAreas: [
      "Aircraft structures",
      "Truck wheels",
      "Military vehicles"
    ],
    machinability: "Good, but susceptible to corrosion. Often coated or anodized."
  }
  // Add more material types as needed
];

export default function Aluminum6061() {
  const mat = materialData.find(m => m.slug === "aluminum-6061");
  return (
    <div style={{maxWidth:'750px',margin:'2rem auto',background:'#fff',borderRadius:'10px',boxShadow:'0 2px 16px #00336622',padding:'2.5rem'}}>
      <Helmet>
        <title>{mat.name} | Material Properties & Machinability</title>
        <meta name="description" content={`Properties, uses, and machinability of ${mat.name}.`} />
      </Helmet>
      <h1 style={{color:'#003366',fontSize:'2.1rem',marginBottom:'0.5rem'}}>{mat.name}</h1>
      <h2 style={{color:'#666',fontSize:'1.2rem',marginBottom:'1.5rem'}}>{mat.parent} Alloy</h2>
      <p style={{fontSize:'1.1rem',marginBottom:'1.7rem',color:'#222'}}>{mat.summary}</p>
      <h3 style={{color:'#003366',marginBottom:'0.6rem'}}>Key Properties</h3>
      <ul style={{marginBottom:'1.3rem',color:'#003366',fontSize:'1.09rem'}}>
        {mat.properties.map(p => <li key={p}>{p}</li>)}
      </ul>
      <h3 style={{color:'#003366',marginBottom:'0.6rem'}}>Typical Use Areas</h3>
      <ul style={{marginBottom:'1.3rem',color:'#003366',fontSize:'1.09rem'}}>
        {mat.useAreas.map(u => <li key={u}>{u}</li>)}
      </ul>
      <h3 style={{color:'#003366',marginBottom:'0.6rem'}}>Machinability</h3>
      <p style={{color:'#222',fontSize:'1.08rem'}}>{mat.machinability}</p>
    </div>
  );
}
