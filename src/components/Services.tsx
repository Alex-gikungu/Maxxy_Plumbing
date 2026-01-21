// src/components/Services.tsx
import React from "react";
import "../styles/Services.css";

const serviceCategories = [
  {
    category: "Plumbing & Sanitary Installations",
    services: [
      {
        title: "Water Closet Repair & Installation",
        desc: "Expert installation and repair of toilets with same-day and next-day service.",
        img: "/images/closset.jpeg",
      },
      {
        title: "Washroom Basin Repair & Installation",
        desc: "Repairs and installations tailored for accessibility and aging-in-place solutions.",
        img: "/images/toilet.jpeg",
      },
      {
        title: "Wash Hand Basins Installation",
        desc: "Professional installation and repair of wash hand basins for homes and businesses.",
        img: "/images/wash_hand.jpeg",
      },
      {
        title: "Table Top Wash Hand Basins",
        desc: "Stylish and functional table top basin installations with durable fittings.",
        img: "/images/top.jpeg",
      },
      {
        title: "Sewage Pipeline Repair & Installation",
        desc: "Complete sewage system solutions including repairs, installations, and maintenance.",
        img: "/images/sewage.jpeg",
      },
    ],
  },
  {
    category: "Water & Energy Systems",
    services: [
      {
        title: "Solar Water Heating System",
        desc: "Design and installation of energy-efficient solar water heating systems.",
        img: "/images/solar.jpeg",
      },
      {
        title: "Meter Installation & Repair",
        desc: "Installation and servicing of water meters with precision and reliability.",
        img: "/images/meter.jpeg",
      },
      {
        title: "Pressurized Piping Systems",
        desc: "Installation and repair of pressurized piping for commercial and industrial use.",
        img: "/images/piping.jpeg",
      },
    ],
  },
  {
    category: "Outdoor & Utility Installations",
    services: [
      {
        title: "Irrigation Piping & Installation",
        desc: "Custom irrigation piping solutions for residential and commercial landscapes.",
        img: "/images/irrigation.jpeg",
      },
      {
        title: "Grab Rails Installation",
        desc: "Secure grab rails for bathrooms and toilets to improve accessibility and safety.",
        img: "/images/rail.jpeg",
      },
    ],
  },
  {
    category: "Finishing & Maintenance",
    services: [
      {
        title: "Painting Installation",
        desc: "Fast, high-quality painting services for interior and exterior projects.",
        img: "https://imgs.search.brave.com/ly8SYS_aJfU-sSNtM7aMf0wcAjkpLymf43Aoba0C1Cs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zb2xj/aXR5aW50ZXJpb3Jz/LmNvLmtlL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIzLzAyL1Bh/aW50aW5nLVNlcnZp/Y2VzLWluLU5haXJv/YmktS2VueWEtMS5q/cGc",
      },
      {
        title: "Emergency Plumbing Services",
        desc: "Rapid response to urgent plumbing issues including leaks, blockages, and burst pipes.",
        img: "https://t4.ftcdn.net/jpg/01/44/41/51/360_F_144415112_A6Lp1H5Fdr2tIRWUM2073cvDwTbTupMu.jpg",
      },
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center fw-bold mb-4">Our Services</h2>
        <p className="text-center text-muted mb-5">
          We offer a comprehensive range of plumbing, water systems, and maintenance services tailored to your needs.
        </p>

        {serviceCategories.map((cat, idx) => (
          <div key={idx} className="mb-5">
            <h3 className="fw-semibold mb-4 text-primary">{cat.category}</h3>
            <div className="row">
              {cat.services.map((s, i) => (
                <div key={i} className="col-md-6 col-lg-4 mb-4">
                  <div className="card h-100 shadow-sm border-0 service-card">
                    <div className="card-img-wrapper">
                      <img
                        src={s.img}
                        alt={s.title}
                        className="card-img-top"
                      />
                    </div>
                    <div className="card-body text-center">
                      <h5 className="card-title fw-semibold">{s.title}</h5>
                      <p className="card-text text-muted">{s.desc}</p>
                      <a href="#contact" className="btn btn-primary btn-sm mt-2">
                        Request Service
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="text-center mt-5">
          <h4 className="fw-bold">Need help choosing a service?</h4>
          <p className="text-muted">
            Contact us today for a free consultation and let’s find the right solution for you.
          </p>
          <a href="#contact" className="btn btn-outline-primary">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
