import React from "react";
import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";

function Hero() {
  return (
    <section className="hero-section">
      <SectionTitle
        title="Modern websites for creators & businesses"
        subtitle="I design and build custom websites that look great, work smoothly, and actually help your audience understand what you do. Whether you're an artist, startup, or small business, I’ll help you bring your online presence to life."
      />
      <Button text="contact me" link="/" />
    </section>
  );
}

export default Hero;
