import React from "react";
import { Helmet } from "react-helmet-async";

const aluminumAlloys = [
  {
    name: "6061 Aluminum",
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
];

export default function AluminumPage() {
  return (
    <div style={{maxWidth:'900px',margin:'2rem auto',background:'#fff',borderRadius:'10px',boxShadow:'0 2px 16px #00336622',padding:'2.5rem'}}>
      <Helmet>
        <title>Aluminum Alloys | Properties, Uses & Machinability</title>
        <meta name="description" content="Properties, uses, and machinability of various aluminum alloys used in CNC machining." />
      </Helmet>
      <h1 style={{color:'#003366',fontSize:'2.2rem',marginBottom:'0.7rem'}}>Aluminum Alloys for CNC Machining</h1>
      <p style={{fontSize:'1.16rem',marginBottom:'2.1rem',color:'#222'}}>
        Aluminum is one of the most popular materials for CNC machining due to its excellent strength-to-weight ratio, corrosion resistance, and machinability. Below are some of the most common aluminum alloys used in precision manufacturing, along with their key properties, typical applications, and machinability notes.
      </p>
      {aluminumAlloys.map((alloy, idx) => (
        <div key={alloy.name} style={{marginBottom: idx !== aluminumAlloys.length-1 ? '2.5rem' : 0, paddingBottom: '2rem', borderBottom: idx !== aluminumAlloys.length-1 ? '1px solid #e0e0e0' : 'none'}}>
          <h2 style={{color:'#003366',fontSize:'1.45rem',marginBottom:'0.4rem'}}>{alloy.name}</h2>
          <p style={{fontSize:'1.09rem',marginBottom:'1.1rem',color:'#222'}}>{alloy.summary}</p>
          <h3 style={{color:'#003366',marginBottom:'0.3rem',fontSize:'1.08rem'}}>Key Properties</h3>
          <ul style={{marginBottom:'1.1rem',color:'#003366',fontSize:'1.03rem'}}>
            {alloy.properties.map(p => <li key={p}>{p}</li>)}
          </ul>
          <h3 style={{color:'#003366',marginBottom:'0.3rem',fontSize:'1.08rem'}}>Typical Use Areas</h3>
          <ul style={{marginBottom:'1.1rem',color:'#003366',fontSize:'1.03rem'}}>
            {alloy.useAreas.map(u => <li key={u}>{u}</li>)}
          </ul>
          <h3 style={{color:'#003366',marginBottom:'0.3rem',fontSize:'1.08rem'}}>Machinability</h3>
          <p style={{color:'#222',fontSize:'1.05rem'}}>{alloy.machinability}</p>
        </div>
      ))}
    </div>
  );
}
