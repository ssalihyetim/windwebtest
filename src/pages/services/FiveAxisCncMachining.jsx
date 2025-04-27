import React from "react";
import { Helmet } from "react-helmet-async";

export default function FiveAxisCncMachining() {
  return (
    <div style={{maxWidth:'900px',margin:'2rem auto',background:'#fff',borderRadius:'10px',boxShadow:'0 2px 16px #00336622',padding:'2.5rem'}}>
      <Helmet>
        <title>5-Axis CNC Machining | Euro Metal</title>
        <meta name="description" content="Discover the advantages, applications, and expertise of Euro Metal in 5-axis CNC machining. Learn about the technology, industries served, and FAQs." />
      </Helmet>
      <h1 style={{color:'#003366',fontSize:'2.2rem',marginBottom:'0.7rem'}}>5-Axis CNC Machining</h1>
      <p style={{fontSize:'1.16rem',marginBottom:'2.1rem',color:'#222'}}>
        5-axis CNC machining is the pinnacle of precision manufacturing, enabling the creation of highly complex parts in a single setup. At Euro Metal, we leverage advanced 5-axis technology to deliver exceptional quality, tight tolerances, and rapid turnaround for demanding industries worldwide.
      </p>

      <h2 style={{color:'#003366',fontSize:'1.45rem',margin:'2.2rem 0 0.5rem'}}>What is 5-Axis CNC Machining?</h2>
      <p style={{fontSize:'1.09rem',color:'#222',marginBottom:'1.2rem'}}>
        Unlike traditional 3-axis machining, which moves a cutting tool along the X, Y, and Z axes, 5-axis CNC machines add two additional rotary axes (A and B). This allows the tool or the part to be tilted and rotated, making it possible to machine complex geometries, undercuts, and multi-face features with a single setup. The result is higher precision, better surface finish, and reduced lead times.
      </p>
      <ul style={{marginBottom:'1.5rem',color:'#003366',fontSize:'1.08rem'}}>
        <li>Simultaneous 5-axis movement for intricate shapes</li>
        <li>Reduced need for multiple setups and fixtures</li>
        <li>Improved accuracy and repeatability</li>
        <li>Enhanced surface quality and tool life</li>
      </ul>

      <h2 style={{color:'#003366',fontSize:'1.35rem',margin:'2rem 0 0.5rem'}}>Industries & Applications</h2>
      <p style={{fontSize:'1.08rem',color:'#222',marginBottom:'1.2rem'}}>
        5-axis CNC machining is essential for industries requiring complex, high-precision components:
      </p>
      <ul style={{marginBottom:'1.5rem',color:'#003366',fontSize:'1.08rem'}}>
        <li><b>Aerospace:</b> Impellers, turbine blades, brackets, housings</li>
        <li><b>Medical:</b> Surgical instruments, orthopedic implants, prosthetics</li>
        <li><b>Robotics:</b> End effectors, custom gears, multi-face components</li>
        <li><b>Automotive & Motorsport:</b> Engine parts, suspension components, lightweight structures</li>
        <li><b>Defense:</b> Optical mounts, sensor housings, missile components</li>
        <li><b>Energy:</b> Pump bodies, valve housings, flow control parts</li>
      </ul>

      <h2 style={{color:'#003366',fontSize:'1.35rem',margin:'2rem 0 0.5rem'}}>Why Euro Metal for 5-Axis CNC?</h2>
      <ul style={{marginBottom:'1.5rem',color:'#003366',fontSize:'1.08rem'}}>
        <li><b>State-of-the-art Machinery:</b> We operate the latest 5-axis CNC centers from DMG MORI, Haas, and Mazak.</li>
        <li><b>Expertise:</b> Our machinists and engineers have decades of experience in complex, multi-axis machining.</li>
        <li><b>Quality Assurance:</b> ISO 9001 certified, with full traceability and 100% inspection available.</li>
        <li><b>Material Versatility:</b> Specialists in aluminum, titanium, stainless steel, plastics, and more.</li>
        <li><b>Fast Turnaround:</b> Optimized processes for rapid prototyping and production runs.</li>
        <li><b>Global Reach:</b> Serving customers across Europe, North America, and beyond.</li>
      </ul>
      <blockquote style={{background:'#f7f9fa',borderLeft:'4px solid #003366',padding:'1.2rem 1.5rem',margin:'2rem 0',color:'#003366',fontStyle:'italic'}}>
        "Euro Metal transformed our product development with flawless 5-axis parts and unbeatable lead times."
        <br /><span style={{fontWeight:600}}>– Aerospace Customer, Germany</span>
      </blockquote>

      <h2 style={{color:'#003366',fontSize:'1.35rem',margin:'2rem 0 0.5rem'}}>Frequently Asked Questions (FAQ)</h2>
      <div style={{marginBottom:'1.5rem'}}>
        <b style={{color:'#003366'}}>Q: What tolerances can you achieve with 5-axis CNC?</b>
        <p style={{margin:'0.3rem 0 1rem 0',color:'#222'}}>We routinely achieve tolerances down to ±0.005mm, depending on material and geometry.</p>
        <b style={{color:'#003366'}}>Q: What file formats do you accept?</b>
        <p style={{margin:'0.3rem 0 1rem 0',color:'#222'}}>We accept STEP, IGES, Parasolid, and native SolidWorks files. PDF drawings are also welcome for quoting.</p>
        <b style={{color:'#003366'}}>Q: Can you handle both prototyping and production?</b>
        <p style={{margin:'0.3rem 0 1rem 0',color:'#222'}}>Absolutely. We excel at rapid prototypes as well as high-volume production runs.</p>
        <b style={{color:'#003366'}}>Q: What materials can you machine?</b>
        <p style={{margin:'0.3rem 0 1rem 0',color:'#222'}}>We machine aluminum, titanium, stainless steel, brass, plastics, and more. See our <a href="/materials/aluminum" style={{color:'#003366',textDecoration:'underline'}}>materials page</a> for details.</p>
        <b style={{color:'#003366'}}>Q: Do you offer finishing and assembly?</b>
        <p style={{margin:'0.3rem 0 0 0',color:'#222'}}>Yes, we offer anodizing, plating, bead blasting, painting, and light assembly upon request.</p>
      </div>

      <h2 style={{color:'#003366',fontSize:'1.35rem',margin:'2rem 0 0.5rem'}}>Get a Quote</h2>
      <p style={{fontSize:'1.08rem',color:'#222',marginBottom:'1.5rem'}}>Ready to start your next project? <a href="/request-a-quote" style={{color:'#003366',textDecoration:'underline'}}>Request a quote</a> today and experience the Euro Metal difference in 5-axis CNC machining.</p>
    </div>
  );
}
