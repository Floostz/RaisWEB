import { Component } from 'solid-js';
import styles from './Hero.module.css';

const Hero: Component = () => {
  return (
    <div class={styles.hero}>
      <div class={styles.leftSection}>
        <div class={styles.imageContainer}>
          <div class={styles.floatingObject}></div>
          <div class={styles.purpleCard}>
            <div class={styles.cardLogo}>M</div>
            <p>PLACE FOR AWESOME</p>
            <p>DESIGN IN FUTURE</p>
            <div class={styles.sphereObject}></div>
          </div>
        </div>
      </div>
      <div class={styles.rightSection}>
        <h1>Find your the best design</h1>
        <p>
          Metabag's mission is to change how the world works together. Metabag connects businesses with freelancers offering digital services in 500+ categories.
        </p>
        <button class={styles.exploreBtn}>Explore</button>
        
        <div class={styles.features}>
          <div class={styles.feature}>
            <h3>Design Quality</h3>
            <p>Design quality is the value of a design to customers.</p>
          </div>
          <div class={styles.feature}>
            <h3>Design Futuristic</h3>
            <p>architectural design concepts that offers a unique modern design</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;