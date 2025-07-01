import React from "react";
import { useNavigate } from "react-router-dom";
import "./Hero.css";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero" id="hero">
      <h1>Hi, I'm Lokesh 👋</h1>
      <p>Full Stack Web Developer | React | Node.js | MongoDB</p>
      <button className="cta-button" onClick={() => navigate("/projects")}>
        See My Work
      </button>
    </section>
  );
}

export default Hero;
