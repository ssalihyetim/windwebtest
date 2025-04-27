import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "../styles/Header.module.css";

const materialTypes = [
  {
    name: "Aluminum",
    path: "/materials/aluminum",
    children: [
      { name: "6061 Aluminum", path: "/materials/aluminum-6061" },
      { name: "7075 Aluminum", path: "/materials/aluminum-7075" },
      { name: "2024 Aluminum", path: "/materials/aluminum-2024" }
    ]
  },
  {
    name: "Steel",
    path: "/materials/steel",
    children: [
      { name: "Stainless Steel 304", path: "/materials/steel-304" },
      { name: "Stainless Steel 316", path: "/materials/steel-316" },
      { name: "Mild Steel", path: "/materials/steel-mild" }
    ]
  },
  {
    name: "Titanium",
    path: "/materials/titanium",
    children: [
      { name: "Grade 2 Titanium", path: "/materials/titanium-grade2" },
      { name: "Grade 5 Titanium", path: "/materials/titanium-grade5" }
    ]
  },
  {
    name: "Brass",
    path: "/materials/brass",
    children: [
      { name: "C360 Brass", path: "/materials/brass-c360" }
    ]
  },
  {
    name: "Plastics",
    path: "/materials/plastics",
    children: [
      { name: "Delrin (POM)", path: "/materials/plastics-delrin" },
      { name: "Nylon", path: "/materials/plastics-nylon" },
      { name: "PTFE (Teflon)", path: "/materials/plastics-ptfe" }
    ]
  }
];

function Dropdown({ label, children }) {
  return (
    <div className={styles.dropdown}>
      <span className={styles.dropbtn}>{label}</span>
      <div className={styles.dropdownContent}>{children}</div>
    </div>
  );
}

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">Tobro Tech</Link>
      </div>
      <nav className={styles.nav}>
        <Dropdown label="Services">
          <NavLink to="/services/cnc-milling-services">CNC Milling</NavLink>
          <NavLink to="/services/cnc-turning-services">CNC Turning</NavLink>
          <NavLink to="/services/5-axis-cnc-machining">5-Axis CNC</NavLink>
          <NavLink to="/services/custom-machining-services">Custom Machining</NavLink>
        </Dropdown>
        <Dropdown label="Industries">
          <NavLink to="/industries/aerospace">Aerospace</NavLink>
          <NavLink to="/industries/medical">Medical</NavLink>
          <NavLink to="/industries/robotics">Robotics</NavLink>
          <NavLink to="/industries/automotive">Automotive</NavLink>
        </Dropdown>
        <Dropdown label="Materials">
          <NavLink to="/materials/aluminum">Aluminum</NavLink>
          <NavLink to="/materials/steel">Steel</NavLink>
          <NavLink to="/materials/titanium">Titanium</NavLink>
          <NavLink to="/materials/brass">Brass</NavLink>
          <NavLink to="/materials/plastics">Plastics</NavLink>
        </Dropdown>
        <NavLink to="/about" className={({isActive}) => isActive ? styles.active : undefined}>About</NavLink>
        <NavLink to="/request-a-quote" className={({isActive}) => isActive ? styles.active : undefined}>Request a Quote</NavLink>
        <NavLink to="/contact" className={({isActive}) => isActive ? styles.active : undefined}>Contact</NavLink>
      </nav>
    </header>
  );
}
