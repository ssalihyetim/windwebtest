import React from "react";
import { Helmet } from "react-helmet-async";

export default function CustomMachiningServices() {
  return (
    <>
      <Helmet>
        <title>Custom CNC Machining Services | Prototype & Small Batch Production</title>
        <meta name="description" content="Custom CNC machining, prototyping, and small batch production with fast turnaround and precision for critical industries." />
      </Helmet>
      <section style={{padding:'2rem',textAlign:'center'}}>
        <h1>Custom Machining Services</h1>
        <p>Prototyping, small-batch, and custom CNC machining for unique requirements. Fast, flexible, and ISO 9001 certified.</p>
        <ul style={{textAlign:'left',maxWidth:'600px',margin:'2rem auto'}}>
          <li>Prototyping and one-off parts</li>
          <li>Small batch production</li>
          <li>Engineering support for design for manufacturability</li>
        </ul>
      </section>
    </>
  );
}
