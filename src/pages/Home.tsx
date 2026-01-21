// src/pages/Home.tsx
import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Reviews from "../components/Reviews";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import About from "../components/About";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Reviews />
      <ContactForm />
      <Footer />
    </>
  );
}
