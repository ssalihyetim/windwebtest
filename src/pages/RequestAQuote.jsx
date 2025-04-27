import React, { useState, useRef } from "react";
import { Helmet } from "react-helmet-async";
import styles from "../styles/RequestAQuote.module.css";

export default function RequestAQuote() {
  const fileInput = useRef();
  const [dragActive, setDragActive] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [status, setStatus] = useState(null);

  function handleFileChange(e) {
    setSelectedFiles(Array.from(e.target.files));
  }
  function handleDragOver(e) {
    e.preventDefault();
    setDragActive(true);
  }
  function handleDragLeave(e) {
    e.preventDefault();
    setDragActive(false);
  }
  function handleDrop(e) {
    e.preventDefault();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      setSelectedFiles(Array.from(e.dataTransfer.files));
      fileInput.current.files = e.dataTransfer.files;
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
    }, 1200);
  }

  return (
    <>
      <Helmet>
        <title>Request a CNC Machining Quote | Tobro Tech</title>
        <meta name="description" content="Upload your CAD files and request a custom CNC machining quote. Fast response within 24 hours. ISO 9001 certified shop." />
      </Helmet>
      <div className={styles.rfqContainer}>
        <aside className={styles.rfqContact}>
          <h2>Contact Information</h2>
          <div className={styles.contactInfo}>
            <div><span role="img" aria-label="address">📍</span> 123 Precision Way,<br />Manufacturing City, MC 12345</div>
            <div><span role="img" aria-label="phone">📞</span> +1 (555) 123-4567</div>
            <div><span role="img" aria-label="email">✉️</span> quotes@tobrotech.com</div>
          </div>
          <div className={styles.businessHours}>
            <div>Business Hours</div>
            <div>Monday - Friday: 8:00 AM - 5:00 PM</div>
            <div>Saturday - Sunday: Closed</div>
          </div>
        </aside>
        <section className={styles.rfqFormPanel}>
          <h1>Request a Quote</h1>
          <p>Submit your project details below and our team will provide you with a competitive quote within 24 hours.</p>
          <form onSubmit={handleSubmit} encType="multipart/form-data" autoComplete="off">
            <div className={styles.rfqFields}>
              <input type="text" name="name" placeholder="Full Name *" required />
              <input type="text" name="company" placeholder="Company Name *" required />
              <input type="email" name="email" placeholder="Email Address *" required />
              <input type="tel" name="phone" placeholder="Phone Number" />
              <textarea name="message" placeholder="Project Description *" required></textarea>
            </div>
            <div
              className={`${styles.rfqUploadArea} ${dragActive ? styles.dragover : ''}`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={() => fileInput.current.click()}
              tabIndex={0}
              role="button"
              aria-label="Upload CAD Files"
            >
              <div className={styles.uploadIcon}>📤</div>
              <span className={styles.uploadText}>Drag & drop or <span className={styles.uploadLink}>browse</span> your files</span>
              <div className={styles.uploadDesc}>Accepted formats: .STEP, .IGES, .PDF, .DXF (Max 5 files, 20MB each)</div>
              <input
                ref={fileInput}
                type="file"
                name="file"
                accept=".step,.stp,.iges,.igs,.pdf,.dxf"
                multiple
                onChange={handleFileChange}
                aria-label="Upload CAD files"
              />
              <div className={styles.accepted}>
                {selectedFiles.length > 0
                  ? selectedFiles.map(f => <div key={f.name}>{f.name}</div>)
                  : "No files selected"}
              </div>
            </div>
            <button type="submit" className={styles.rfqSubmitBtn} disabled={status === "loading"}>Submit Quote Request</button>
            {status === "loading" && <div className={styles.rfqStatus} style={{color:'#003366'}}>Submitting your RFQ...</div>}
            {status === "success" && <div className={styles.rfqStatus} style={{color:'green'}}>Thank you! Your RFQ was submitted successfully.</div>}
            {status === "error" && <div className={styles.rfqStatus} style={{color:'red'}}>There was an error submitting your RFQ. Please try again later.</div>}
            <div style={{marginTop:'1.2rem',color:'#003366',fontSize:'0.98rem',textAlign:'center'}}>We respond to all quote requests within 24 hours during business days.</div>
          </form>
        </section>
      </div>
    </>
  );
}
