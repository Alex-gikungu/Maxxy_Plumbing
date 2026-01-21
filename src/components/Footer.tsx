// src/components/Footer.tsx
import React from "react";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer-section pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row">
          {/* Company Info */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Maxxy Plumbing</h5>
            <p className="small">
              Reliable plumbing and maintenance services across Ruiru & Nairobi.
              Quality work, trusted by families and businesses.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#home" className="footer-link">Home</a></li>
              <li><a href="#services" className="footer-link">Services</a></li>
              <li><a href="#about" className="footer-link">About</a></li>
              <li><a href="#contact" className="footer-link">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Contact Us</h5>
            <p className="small mb-1"><i className="bi bi-geo-alt-fill me-2"></i> Ruiru, Kiambu, Kenya</p>
            <p className="small mb-1"><i className="bi bi-telephone-fill me-2"></i> +254 799 906 613</p>
            <p className="small mb-3"><i className="bi bi-envelope-fill me-2"></i> kamaumaxwel4@gmail.com</p>

            {/* Social Icons */}
            <div className="footer-social">
              <a href="https://facebook.com" className="social-icon">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://wa.me/254799906613" className="social-icon">
                <i className="bi bi-whatsapp"></i>
              </a>
              <a href="mailto:kamaumaxwel4@gmail.com" className="social-icon">
                <i className="bi bi-envelope"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center border-top border-secondary pt-3 mt-3">
          <small>© {new Date().getFullYear()} Maxxy Plumbing Services. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
}
