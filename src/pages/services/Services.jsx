import React from "react";
import { Helmet } from "react-helmet-async";

export default function Services() {
  return (
    <>
      <Helmet>
        <title>CNC Machining Services | Tobro Tech</title>
        <meta name="description" content="Explore our CNC lathe, milling, 5-axis, and custom machining services. ISO 9001 certified for aerospace, defense, and industrial sectors." />
      </Helmet>
      <section style={{padding:'2rem',textAlign:'center'}}>
        <h1>Our CNC Machining Services</h1>
        <ul style={{listStyle:'none',padding:0,fontSize:'1.2rem',marginTop:'2rem'}}>
          <li><a href="/services/cnc-milling-services">CNC Milling Services</a></li>
          <li><a href="/services/cnc-turning-services">CNC Turning Services</a></li>
          <li><a href="/services/5-axis-cnc-machining">5-Axis CNC Machining</a></li>
          <li><a href="/services/custom-machining-services">Custom Machining Services</a></li>
          <li><a href="/services/material-expertise">Material Expertise</a></li>
        </ul>
      </section>
    </>
  );
}
