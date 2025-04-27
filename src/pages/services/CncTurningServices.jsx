import React from "react";
import { Helmet } from "react-helmet-async";

export default function CncTurningServices() {
  return (
    <>
      <Helmet>
        <title>CNC Turning Services | Precision Lathe Machining | Tobro Tech</title>
        <meta name="description" content="ISO 9001 certified CNC turning services for custom parts in aerospace, defense, and industrial applications." />
      </Helmet>
      <section style={{padding:'2rem',textAlign:'center'}}>
        <h1>CNC Turning Services</h1>
        <p>Precision CNC lathe machining for custom parts and prototypes. Tight tolerances, fast turnaround, and ISO 9001 quality.</p>
        <ul style={{textAlign:'left',maxWidth:'600px',margin:'2rem auto'}}>
          <li>Supported diameters: Up to 400mm</li>
          <li>Supported lengths: Up to 1000mm</li>
          <li>Industries served: Aerospace, Defense, Industrial, Robotics</li>
        </ul>
      </section>
    </>
  );
}
