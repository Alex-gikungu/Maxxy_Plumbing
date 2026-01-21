// src/components/About.tsx
import React from "react";
import "../styles/About.css";

export default function About() {
  return (
    <section id="about" className="about-section py-5">
      <div className="container">
        <h2 className="text-center fw-bold mb-4">About Us</h2>
        <p className="text-center text-muted mb-5">
          At Maxxy Plumbing, we pride ourselves on delivering reliable plumbing
          solutions across Ruiru & Nairobi. With years of experience, our team
          ensures every installation, repair, and maintenance job is handled
          with professionalism and care.
        </p>

        <div className="row align-items-center">
          {/* Image */}
          <div className="col-md-6 mb-4 mb-md-0">
            <img
              src="https://imgs.search.brave.com/GbyRFcPMsyMQhfxT6WRWxf7_wk6xYWAZ6Tj0te8BXZM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzIwLzIwLzQx/LzM2MF9GXzIyMDIw/NDE3NF92ZmdCMFZv/Mmk0TVo4U3Y1aG10/c3g1SXdjdnJEQ1pv/eC5qcGc" /* Replace with your actual image */
              alt="Plumbing team at work"
              className="img-fluid rounded shadow about-img"
            />
          </div>

          {/* Cards */}
          <div className="col-md-6">
            <div className="row g-3">
              <div className="col-12">
                <div className="card h-100 shadow-sm border-0 about-card">
                  <div className="card-body">
                    <h5 className="card-title fw-semibold">
                      <i className="bi bi-people-fill me-2"></i> Experienced Team
                    </h5>
                    <p className="card-text text-muted">
                      Our plumbers are trained, certified, and dedicated to
                      providing top-quality service.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12">
                <div className="card h-100 shadow-sm border-0 about-card">
                  <div className="card-body">
                    <h5 className="card-title fw-semibold">
                      <i className="bi bi-shield-check me-2"></i> Trusted Service
                    </h5>
                    <p className="card-text text-muted">
                      We value honesty, safety, and customer satisfaction in
                      every project we undertake.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12">
                <div className="card h-100 shadow-sm border-0 about-card">
                  <div className="card-body">
                    <h5 className="card-title fw-semibold">
                      <i className="bi bi-lightning-charge-fill me-2"></i> Fast Response
                    </h5>
                    <p className="card-text text-muted">
                      From emergencies to scheduled work, we respond quickly and
                      efficiently to your needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
