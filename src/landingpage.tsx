// App.tsx
import { Component } from 'solid-js';
import './landing.css';
import logo from './assets/logo.png';

const Landing: Component = () => {
  return (
    <div class="container">
      <nav class="navbar">
        <div class="logo">

          <span>RAIS STUDIO</span>
        </div>
        <div class="nav-links">
          <a href="#">Profile</a>
          <a href="#">About</a>
          <a href="#">Contact</a>

        </div>
    
      </nav>

      <main class="hero-section">
        <div class="left-section">
          <div class="floating-card dark">
            <div class="planet-icon"></div>
          </div>
          <div class="floating-card purple">
            <div class="logo-white"></div>
            <p><br /></p>
          </div>
          <div class="floating-card dark small">
            <div class="rocket-icon"></div>
            
          </div>
          <div class="floating-sphere"></div>
        </div>

        <div class="right-section">
          <h1>Rais Studio</h1>
          <p class="subtitle">
          Rais Studio is a dynamic company specializing in 3D modeling, animation, and game development. With a team of skilled artists and developers, Rais Studio brings creative ideas to life by crafting high-quality 3D models and immersive animations. Whether it's designing characters, environments, or entire game worlds, Rais Studio is committed to delivering visually stunning and interactive experiences that captivate audiences. With a passion for innovation, they continuously push the boundaries of what's possible in the world of digital entertainment.
          </p>
          <button class="explore-btn">Explore</button>

          <div class="features">
            <div class="feature">
              <div class="feature-icon quality"></div>
              <h3>3D Model</h3>
              <p>Creating Sculpting or Something!</p>
            </div>
            <div class="feature">
              <div class="feature-icon futuristic"></div>
              <h3>Game Development</h3>
              <p>Develop a game </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Landing;