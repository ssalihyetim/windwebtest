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

export default function Home() {
  const sectionRefs = useLazySections();
  return (
    <>
      <Helmet>
        <title>CNC Machining Services | Tobro Tech ISO 9001 Certified Shop</title>
        <meta name="description" content="Tobro Tech provides precision CNC machining, 5-axis machining, CNC milling, and turning services for aerospace, defense, and industrial clients." />
      </Helmet>
      <section className={styles.hero} style={{ backgroundImage: 'url("/assets/industrial-photo.jpg")' }}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Precision CNC Machining You Can Trust</h1>
          <div className={styles.heroSubtitle}>
            ISO 9001 Certified Excellence in Turning, Milling, and 5-Axis Machining
          </div>
          <div className={styles.heroActions}>
            <a href="/request-a-quote" className={styles.heroBtn}>Request a Quote</a>
            <a href="/services" className={styles.heroBtn + ' ' + styles.heroBtnSecondary}>View Capabilities</a>
          </div>
        </div>
      </section>
      <section className={styles.section} ref={el => (sectionRefs.current[0] = el)}>
        <div style={{display:'flex',justifyContent:'center',gap:'2rem',flexWrap:'wrap',margin:'2.5rem 0'}}>
          <div style={{background:'#fff',borderRadius:'12px',boxShadow:'0 2px 16px #00336622',padding:'2.5rem',width:'270px',textAlign:'center',transition:'transform 0.2s'}}>
            <img src="/assets/lathe-icon.svg" alt="CNC Lathe Services" height="54" />
            <h3 style={{fontSize:'1.3rem',margin:'1rem 0 0.4rem'}}>CNC Lathe Services</h3>
          </div>
          <div style={{background:'#fff',borderRadius:'12px',boxShadow:'0 2px 16px #00336622',padding:'2.5rem',width:'270px',textAlign:'center',transition:'transform 0.2s'}}>
            <img src="/assets/milling-icon.svg" alt="CNC Milling Services" height="54" />
            <h3 style={{fontSize:'1.3rem',margin:'1rem 0 0.4rem'}}>CNC Milling Services</h3>
          </div>
          <div style={{background:'#fff',borderRadius:'12px',boxShadow:'0 2px 16px #00336622',padding:'2.5rem',width:'270px',textAlign:'center',transition:'transform 0.2s'}}>
            <img src="/assets/5axis-icon.svg" alt="5-Axis Precision Machining" height="54" />
            <h3 style={{fontSize:'1.3rem',margin:'1rem 0 0.4rem'}}>5-Axis Precision Machining</h3>
          </div>
        </div>
      </section>
      <section className={styles.section} ref={el => (sectionRefs.current[1] = el)}>
        <h2 style={{color:'#003366',fontSize:'2rem',marginBottom:'1.2rem'}}>Expertise Across Aluminum, Brass, Titanium, Stainless Steel, and More</h2>
      </section>
      <section className={styles.section} ref={el => (sectionRefs.current[2] = el)} style={{background:'#e9ecef',textAlign:'center',padding:'2.5rem 0'}}>
        <h2 style={{color:'#003366',fontSize:'2rem'}}>Industries Served</h2>
        <p style={{fontSize:'1.2rem'}}>Aerospace, Medical Devices, Robotics, Defense, Industrial Machinery</p>
      </section>
      <section className={styles.section} ref={el => (sectionRefs.current[3] = el)}>
        <h2 style={{color:'#003366',fontSize:'2rem'}}>Certifications & Quality</h2>
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
        <h2 style={{color:'#003366',fontSize:'2rem'}}>Upload Your CAD Files for a Free Quotation Within 24 Hours</h2>
        <a href="/request-a-quote" className={styles.heroBtn} style={{marginTop:'1.5rem'}}>Request a Quote</a>
      </section>
    </>
  );
}
