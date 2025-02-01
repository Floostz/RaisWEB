import { Component } from 'solid-js';
import styles from './Navbar.module.css';

const Navbar: Component = () => {
  return (
    <nav class={styles.navbar}>
      <div class={styles.logo}>
        <span class={styles.logoText}>M</span>
        Metabag
      </div>
      <div class={styles.navLinks}>
        <a href="#profile">Profile</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <a href="#setting">Setting</a>
      </div>
      <div class={styles.auth}>
        <button class={styles.loginBtn}>Login</button>
        <button class={styles.signUpBtn}>Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;