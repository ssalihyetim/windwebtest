import React from "react";
import { Helmet } from "react-helmet-async";

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Tobro Tech | Precision CNC Machining Company</title>
        <meta name="description" content="Learn about Tobro Tech: our mission, commitment to quality, and the story behind our ISO 9001 certified CNC machine shop in Istanbul." />
      </Helmet>
      <section style={{padding:'2rem',textAlign:'center'}}>
        <h1>About Tobro Tech</h1>
        <p>Tobro Tech is an ISO 9001 certified CNC machine shop based in Istanbul, Turkey. We are dedicated to delivering precision, quality, and reliability for demanding industries worldwide.</p>
        <h2 style={{color:'#003366'}}>Our Mission</h2>
        <p>To provide world-class CNC machining services with a relentless focus on quality, customer satisfaction, and continuous improvement.</p>
        <h2 style={{color:'#003366'}}>Our Story</h2>
        <p>Founded by engineers passionate about manufacturing, Tobro Tech has grown into a trusted partner for aerospace, defense, industrial, and robotics clients. Our team and facility reflect our commitment to excellence and innovation.</p>
        <img src="/assets/facility-photo.jpg" alt="Tobro Tech CNC facility and team" style={{maxWidth:'100%',borderRadius:'8px',marginTop:'2rem'}} />
      </section>
    </>
  );
}
