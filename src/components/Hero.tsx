// src/components/Hero.tsx
import React from "react";
import "../styles/Hero.css";

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Trusted Plumbing Services in Ruiru & Nairobi</h1>
          <p>
            From installations to emergency repairs, we deliver reliable plumbing
            solutions for homes and businesses. Our experienced team ensures
            quality, safety, and customer satisfaction every time.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-light btn-lg hero-btn">
              Request a Quote
            </a>
            <a href="#services" className="btn btn-primary btn-lg hero-btn">
              Explore Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
