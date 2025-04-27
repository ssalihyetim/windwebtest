import React from "react";
import { Helmet } from "react-helmet-async";

export default function Terms() {
  return (
    <>
      <Helmet>
        <title>Terms & Conditions | Tobro Tech</title>
        <meta name="description" content="Terms and conditions for using the Tobro Tech CNC machining services website." />
      </Helmet>
      <section style={{padding:'2rem',maxWidth:'700px',margin:'0 auto'}}>
        <h1>Terms & Conditions</h1>
        <p>By using this website, you agree to the following terms and conditions:</p>
        <ul>
          <li>This website is for informational purposes only.</li>
          <li>All content is owned by Tobro Tech and may not be reproduced without permission.</li>
          <li>Quotes are subject to review and acceptance of our terms.</li>
        </ul>
      </section>
    </>
  );
}
