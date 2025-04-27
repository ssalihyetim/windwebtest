import React from "react";
import { Helmet } from "react-helmet-async";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Tobro Tech | CNC Machining Istanbul</title>
        <meta name="description" content="Contact Tobro Tech. ISO 9001 certified CNC machine shop in Istanbul, Turkey. Phone, email, address, and business hours." />
      </Helmet>
      <section style={{padding:'2rem',textAlign:'center',maxWidth:'600px',margin:'0 auto'}}>
        <h1>Contact Us</h1>
        <p>Email: <a href="mailto:info@tobrotech.com">info@tobrotech.com</a></p>
        <p>Phone: +90 212 123 4567</p>
        <p>Address: Istanbul, Turkey</p>
        <p>Business Hours: Mon-Fri, 08:00-18:00</p>
        <div style={{margin:'2rem 0'}}>
          <iframe
            title="Tobro Tech Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12040.123456789!2d28.9784!3d41.0082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0:0x0!2zSXRhbGll!5e0!3m2!1str!2str!4v1680000000000!5m2!1str!2str"
            width="100%"
            height="250"
            style={{border:0,borderRadius:'8px'}}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </>
  );
}
