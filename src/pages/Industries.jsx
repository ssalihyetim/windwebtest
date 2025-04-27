import React from "react";
import { Helmet } from "react-helmet-async";

export default function Industries() {
  return (
    <>
      <Helmet>
        <title>CNC Machining for Aerospace, Defense, Medical | Tobro Tech</title>
        <meta name="description" content="Serving aerospace, defense, medical, robotics, and industrial sectors with ISO 9001 CNC machining expertise." />
      </Helmet>
      <section style={{padding:'2rem',textAlign:'center'}}>
        <h1>Industries Served</h1>
        <ul style={{textAlign:'left',maxWidth:'600px',margin:'2rem auto'}}>
          <li>Aerospace</li>
          <li>Defense</li>
          <li>Medical Devices</li>
          <li>Robotics</li>
          <li>Industrial Machinery</li>
        </ul>
      </section>
    </>
  );
}
