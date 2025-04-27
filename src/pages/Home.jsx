import React from "react";
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>CNC Machining Services | Tobro Tech ISO 9001 Certified Shop</title>
        <meta name="description" content="Tobro Tech provides precision CNC machining, 5-axis machining, CNC milling, and turning services for aerospace, defense, and industrial clients." />
      </Helmet>
      <section style={{background:'#003366',color:'#fff',padding:'3rem 0',textAlign:'center'}}>
        <h1 style={{fontSize:'2.5rem',marginBottom:'1rem'}}>Precision CNC Machining You Can Trust</h1>
        <p style={{fontSize:'1.25rem',marginBottom:'2rem'}}>ISO 9001 Certified Excellence in Turning, Milling, and 5-Axis Machining</p>
        <div style={{display:'flex',justifyContent:'center',gap:'1rem'}}>
          <a href="/request-a-quote" style={{background:'#C0C0C0',color:'#003366',padding:'0.75rem 1.5rem',borderRadius:'6px',fontWeight:700}}>Request a Quote</a>
          <a href="/services" style={{border:'2px solid #C0C0C0',color:'#C0C0C0',padding:'0.75rem 1.5rem',borderRadius:'6px',fontWeight:700}}>View Capabilities</a>
        </div>
      </section>
      <section style={{padding:'2rem 0',display:'flex',justifyContent:'center',gap:'2rem',background:'#f7f9fa'}}>
        <div style={{background:'#fff',borderRadius:'8px',boxShadow:'0 2px 8px #00336622',padding:'2rem',width:'250px',textAlign:'center'}}>
          <img src="/assets/lathe-icon.svg" alt="CNC Lathe Services" height="48" />
          <h3>CNC Lathe Services</h3>
        </div>
        <div style={{background:'#fff',borderRadius:'8px',boxShadow:'0 2px 8px #00336622',padding:'2rem',width:'250px',textAlign:'center'}}>
          <img src="/assets/milling-icon.svg" alt="CNC Milling Services" height="48" />
          <h3>CNC Milling Services</h3>
        </div>
        <div style={{background:'#fff',borderRadius:'8px',boxShadow:'0 2px 8px #00336622',padding:'2rem',width:'250px',textAlign:'center'}}>
          <img src="/assets/5axis-icon.svg" alt="5-Axis Precision Machining" height="48" />
          <h3>5-Axis Precision Machining</h3>
        </div>
      </section>
      <section style={{padding:'2rem',textAlign:'center'}}>
        <h2 style={{color:'#003366'}}>Expertise Across Aluminum, Brass, Titanium, Stainless Steel, and More</h2>
      </section>
      <section style={{padding:'2rem',background:'#e9ecef',textAlign:'center'}}>
        <h2 style={{color:'#003366'}}>Industries Served</h2>
        <p>Aerospace, Medical Devices, Robotics, Defense, Industrial Machinery</p>
      </section>
      <section style={{padding:'2rem',textAlign:'center'}}>
        <h2 style={{color:'#003366'}}>Certifications & Quality</h2>
        <div style={{display:'flex',justifyContent:'center',gap:'2rem',flexWrap:'wrap',marginTop:'1rem'}}>
          <div>
            <img src="/iso9001-badge.svg" alt="ISO 9001 badge" height="48" />
            <div>ISO 9001 Certified</div>
          </div>
          <div>
            <img src="/assets/inspection-icon.svg" alt="100% Inspection Available" height="48" />
            <div>100% Inspection Available</div>
          </div>
          <div>
            <img src="/assets/traceability-icon.svg" alt="Material Traceability" height="48" />
            <div>Material Traceability</div>
          </div>
        </div>
      </section>
      <section style={{padding:'2rem',textAlign:'center',background:'#f7f9fa'}}>
        <h2 style={{color:'#003366'}}>Upload Your CAD Files for a Free Quotation Within 24 Hours</h2>
        <a href="/request-a-quote" style={{background:'#003366',color:'#fff',padding:'1rem 2rem',borderRadius:'8px',fontWeight:700,display:'inline-block',marginTop:'1rem'}}>Request a Quote</a>
      </section>
    </>
  );
}
