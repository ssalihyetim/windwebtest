import React, { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import styles from "../styles/Home.module.css";

function useLazySections() {
  const sectionRefs = useRef([]);
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    sectionRefs.current.forEach(ref => ref && observer.observe(ref));
    return () => observer.disconnect();
  }, []);
  return sectionRefs;
}

function BannerQuoteBox() {
  // This is a simple upload form for demo; you can connect it to your backend/API as needed.
  return (
    <div className={styles.heroQuoteBox}>
      <h3>Get Instant Prototyping Quote</h3>
      <label htmlFor="banner-upload">Upload your CAD file (STEP, STL, IGES, etc.)</label>
      <input id="banner-upload" type="file" accept=".step,.stp,.stl,.igs,.iges,.prt,.sldprt,.sat,.x_t,.zip,.rar,.pdf" />
      <input type="text" placeholder="Your Name" />
      <input type="email" placeholder="Your Email" />
      <button>Request Quote</button>
    </div>
  );
}

export default function Home() {
  const sectionRefs = useLazySections();
  return (
    <>
      <Helmet>
        <title>CNC Machining Services | Tobro Tech ISO 9001 Certified Shop</title>
        <meta name="description" content="Tobro Tech provides precision CNC machining, 5-axis machining, CNC milling, and turning services for aerospace, defense, and industrial clients." />
      </Helmet>
      <section className={styles.hero} style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
        <div className={styles.heroContent} style={{flexBasis:'60%'}}>
          <h1 className={styles.heroTitle} style={{color:'#ffffff',fontSize:'3rem'}}>Precision CNC Machining You Can Trust</h1>
          <div className={styles.heroSubtitle}>
            ISO 9001 Certified Excellence in Turning, Milling, and 5-Axis Machining
          </div>
          <div className={styles.heroActions}>
            <a href="/request-a-quote" className={styles.heroBtn}>Request a Quote</a>
            <a href="/services" className={styles.heroBtn + ' ' + styles.heroBtnSecondary}>View Capabilities</a>
          </div>
        </div>
        <BannerQuoteBox style={{flexBasis:'30%',backgroundColor:'#ffffff',padding:'2rem',borderRadius:'10px',boxShadow:'0 0 10px rgba(0,0,0,0.1)'}} />
      </section>
      <section className={styles.section} ref={el => (sectionRefs.current[0] = el)}>
        <div className={styles.cardsRow}>
          <div className={styles.card}>
            <img src="/assets/lathe-icon.svg" alt="CNC Lathe Services" height="54" />
            <h3>CNC Lathe Services</h3>
          </div>
          <div className={styles.card}>
            <img src="/assets/milling-icon.svg" alt="CNC Milling Services" height="54" />
            <h3>CNC Milling Services</h3>
          </div>
          <div className={styles.card}>
            <img src="/assets/5axis-icon.svg" alt="5-Axis Precision Machining" height="54" />
            <h3>5-Axis Precision Machining</h3>
          </div>
        </div>
      </section>
      <section className={styles.section} ref={el => (sectionRefs.current[1] = el)}>
        <h2 style={{color:'#003366',fontSize:'2rem',marginBottom:'1.2rem',textAlign:'center'}}>Expertise Across Aluminum, Brass, Titanium, Stainless Steel, and More</h2>
      </section>
      <section className={styles.section} ref={el => (sectionRefs.current[2] = el)} style={{background:'#e9ecef',textAlign:'center',padding:'2.5rem 0'}}>
        <h2 style={{color:'#003366',fontSize:'2rem'}}>Industries Served</h2>
        <p style={{fontSize:'1.2rem'}}>Aerospace, Medical Devices, Robotics, Defense, Industrial Machinery</p>
      </section>
      <section className={styles.section} ref={el => (sectionRefs.current[3] = el)}>
        <h2 style={{color:'#003366',fontSize:'2rem',textAlign:'center'}}>Certifications & Quality</h2>
        <div style={{display:'flex',justifyContent:'center',gap:'2.5rem',flexWrap:'wrap',marginTop:'1.5rem'}}>
          <div>
            <img src="/iso9001-badge.svg" alt="ISO 9001 badge" height="54" />
            <div style={{fontWeight:600,marginTop:'0.6rem'}}>ISO 9001 Certified</div>
          </div>
          <div>
            <img src="/assets/inspection-icon.svg" alt="100% Inspection Available" height="54" />
            <div style={{fontWeight:600,marginTop:'0.6rem'}}>100% Inspection Available</div>
          </div>
          <div>
            <img src="/assets/traceability-icon.svg" alt="Material Traceability" height="54" />
            <div style={{fontWeight:600,marginTop:'0.6rem'}}>Material Traceability</div>
          </div>
        </div>
      </section>
      <section className={styles.section} ref={el => (sectionRefs.current[4] = el)} style={{background:'#f7f9fa',padding:'2.5rem 0'}}>
        <h2 style={{color:'#003366',fontSize:'2rem',textAlign:'center'}}>Upload Your CAD Files for a Free Quotation Within 24 Hours</h2>
        <a href="/request-a-quote" className={styles.heroBtn} style={{marginTop:'1.5rem'}}>Request a Quote</a>
      </section>
    </>
  );
}
