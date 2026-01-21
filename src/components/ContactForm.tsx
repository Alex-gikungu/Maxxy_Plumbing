// src/components/ContactForm.tsx
import React from "react";
import "../styles/ContactForm.css";

export default function ContactForm() {
  return (
    <section id="contact" className="contact-section py-5">
      <div className="container">
        <h2 className="text-center fw-bold mb-4 contact-heading">Get in Touch</h2>
        <p className="text-center text-muted mb-5">
          We’d love to hear from you! Reach out through the form, or connect with us directly.
        </p>

        <div className="row align-items-start">
          {/* Image aligned to top */}
          <div className="col-md-5 d-flex justify-content-center">
            <img
              src="https://imgs.search.brave.com/_fcBVTHScGQ0omhBBpB2x14nK2quxm5BYiwdd1jb7A4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTU2/MDY4NzgxMi9waG90/by9waG9uZS1jYWxs/LWZvci1wbHVtYmlu/Zy1zZXJ2aWNlLXdv/bWFuLWluLWJhdGhy/b29tLWFuZC1oZWxw/LWZyb20tZXhwZXJ0/LWNvbnRyYWN0b3It/dG8tZml4LWxlYWsu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PTlfdlVua1ljMk11/ZmVtTy11NHFJdTc5/dG50ei0xXy1XTm1t/OXpuTFQxUE09" // Replace with your actual image
              alt="Customer making a phone call"
              className="img-fluid rounded shadow contact-side-img"
            />
          </div>

          {/* Contact Form */}
          <div className="col-md-7">
            <form className="contact-form shadow-sm p-4 rounded bg-white">
              <div className="mb-3">
                <label htmlFor="name" className="form-label fw-semibold">Full Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter your name" required />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-semibold">Email Address</label>
                <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label fw-semibold">Phone Number</label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  placeholder="Enter your phone number"
                  pattern="[0-9]{10,}"
                  title="Please enter a valid phone number (numbers only)"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label fw-semibold">Message</label>
                <textarea className="form-control" id="message" rows={4} placeholder="Tell us about your plumbing needs..." required></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-primary btn-lg px-5">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
