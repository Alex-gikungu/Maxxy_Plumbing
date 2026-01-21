// src/components/Navbar.tsx
import React from "react";
import "../styles/Navbar.css";
// Make sure you install bootstrap-icons: npm install bootstrap-icons

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar sticky-top shadow-sm">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#">
          <i className="bi bi-tools me-2"></i> Maxxy Plumbing
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link custom-nav-link" href="#home">
                <i className="bi bi-house-door me-1"></i> Home
              </a>
            </li>
             <li className="nav-item">
              <a className="nav-link custom-nav-link" href="#about">
                <i className="bi bi-info-circle me-1"></i> About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link custom-nav-link" href="#services">
                <i className="bi bi-wrench-adjustable me-1"></i> Services
              </a>
            </li>
           
            <li className="nav-item">
              <a className="nav-link custom-nav-link" href="#contact">
                <i className="bi bi-envelope me-1"></i> Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
