import React from "react";
import { Helmet } from "react-helmet-async";

export default function MaterialExpertise() {
  return (
    <>
      <Helmet>
        <title>CNC Machining for Aluminum, Brass, Stainless Steel, Titanium</title>
        <meta name="description" content="Tobro Tech specializes in CNC machining for aluminum, brass, stainless steel, titanium, and other advanced materials." />
      </Helmet>
      <section style={{padding:'2rem',textAlign:'center'}}>
        <h1>Material Expertise</h1>
        <ul style={{textAlign:'left',maxWidth:'600px',margin:'2rem auto'}}>
          <li>Aluminum</li>
          <li>Brass</li>
          <li>Stainless Steel (304, 316, 17-4PH)</li>
          <li>Titanium (Grade 2, Grade 5)</li>
          <li>Other exotic metals and engineering plastics</li>
        </ul>
      </section>
    </>
  );
}
