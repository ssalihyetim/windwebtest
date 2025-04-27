import React from "react";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <span>© {new Date().getFullYear()} Tobro Tech. All rights reserved.</span>
        <span className={styles.links}>
          <a href="/privacy-policy">Privacy Policy</a> |
          <a href="/terms">Terms</a>
        </span>
      </div>
      <div className={styles.trust}>
        <img src="/iso9001-badge.svg" alt="ISO 9001 Certified CNC Shop" height="32" />
        <span>ISO 9001 Certified</span>
      </div>
    </footer>
  );
}
