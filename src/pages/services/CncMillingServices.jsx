import React from "react";
import { Helmet } from "react-helmet-async";

export default function CncMillingServices() {
  return (
    <>
      <Helmet>
        <title>CNC Milling Services | Aluminum, Stainless Steel, Titanium Machining</title>
        <meta name="description" content="Tobro Tech offers CNC milling services for aluminum, stainless steel, titanium, and other metals, with ISO 9001 certified precision." />
      </Helmet>
      <section style={{padding:'2rem',textAlign:'center'}}>
        <h1>CNC Milling Services</h1>
        <p>Advanced 3-axis and 4-axis CNC milling for aluminum, stainless steel, titanium, and more. ISO 9001 certified precision for aerospace, defense, and industrial applications.</p>
        <ul style={{textAlign:'left',maxWidth:'600px',margin:'2rem auto'}}>
          <li>Materials: Aluminum, Stainless Steel, Titanium, Brass, Plastics</li>
          <li>Surface finish options: Anodizing, bead blasting, powder coating, and more</li>
          <li>Industries served: Aerospace, Medical Devices, Robotics, Defense</li>
        </ul>
      </section>
    </>
  );
}
