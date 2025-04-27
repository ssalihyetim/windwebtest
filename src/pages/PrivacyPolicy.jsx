import React from "react";
import { Helmet } from "react-helmet-async";

export default function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Tobro Tech</title>
        <meta name="description" content="Privacy policy for Tobro Tech CNC machining services website." />
      </Helmet>
      <section style={{padding:'2rem',maxWidth:'700px',margin:'0 auto'}}>
        <h1>Privacy Policy</h1>
        <p>Your privacy is important to us. Tobro Tech is committed to protecting your personal information and complying with all applicable data protection laws.</p>
        <ul>
          <li>We only use your data to respond to inquiries and process RFQs.</li>
          <li>Your data is never sold or shared with third parties except as required by law.</li>
          <li>We use secure methods to store and transmit any files you upload.</li>
        </ul>
      </section>
    </>
  );
}
