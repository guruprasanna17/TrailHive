import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import Testimonial from "./components/Testimonial/Testimonial";
import Explore from "./components/Explore/Explore";
import SecondTestimonial from "./components/SecondTestimonial/SecondTestimonial";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <div className="app">
      <Navbar/>
      <Hero/>
      <Features/>
      <Testimonial/>
      <Explore/>
      <SecondTestimonial/>
      <Footer/>
    </div>
  );
}

