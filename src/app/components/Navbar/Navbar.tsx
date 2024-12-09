'use client'

// Navbar.tsx
import React, { useState } from 'react';
import styles from './Navbar.module.css';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link className={styles.navbarBrand} href="#">
          <Image    src="/my.png"
            alt="Logo"
            width={75} // Specify width
            height={75} />
        </Link>

        <button
          className={styles.navbarToggler}
          onClick={toggleNavbar}
          aria-label="Toggle navigation"
        >
          <span className={styles.navbarTogglerIcon}></span>
        </button>

        <div className={`${styles.navbarLinks} ${isNavOpen ? styles.active : ''}`}>
          <ul className={styles.navList}>
            <li><a className={styles.navLink} href="#home">Home</a></li>
            <li><a className={styles.navLink} href="#about">About</a></li>
            <li><a className={styles.navLink} href="#service">Service</a></li>
            <li><a className={styles.navLink} href="#portfolio">Portfolio</a></li>
            <li><a className={styles.navLink} href="#testmonial">Testimonial</a></li>
            <li><a className={styles.navLink} href="#blog">Blog</a></li>
            <li><a className={styles.navLink} href="#contact">Contact</a></li>
            <li><a className={styles.navButton} href="components.html">Components</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
