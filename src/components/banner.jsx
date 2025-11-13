import React from "react";
import banner from "../images/bannerfundacao.webp";

const Banner = () => (
  <header id="inicio" className="hero hero--static">
    <div className="hero-media" aria-hidden="true">
      <img
        src={banner}
        alt=""
        className="hero-img hero-img--static"
        loading="eager"
      />
      <div className="hero-overlay" />
    </div>
    <div className="hero-content">
      <h1 className="hero-title">FOUNDATION</h1>
      <p className="hero-sub">
        Inspirado na obra de <strong>Isaac Asimov</strong> e na série Foundation da Apple TV+ (minha saga e série favorita). Uma jornada pela queda
        e renascimento da humanidade.
      </p>
      <a href="#timeline" className="scroll-down" aria-label="Ir para linha do tempo">
        <span className="chev" />
      </a>
    </div>
  </header>
);

export default Banner;
