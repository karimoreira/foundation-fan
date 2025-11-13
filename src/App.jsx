import React from "react";
import Header from "./components/header";
import Banner from "./components/banner";
import UniverseSection from "./components/universeSection";
import PrimeRadiantSection from "./components/primeRadiantSection";
import Characters from "./components/Characters";
import Timeline from "./components/Timeline";
import Footer from "./components/footer";
import "./styles/index.css";

export default function App() {
  return (
    <div className="app-root">
      <Header />
      <main>
        <Banner />
        <UniverseSection />
        <PrimeRadiantSection />
        <Characters />
        <Timeline />
      </main>
      <Footer />
    </div>
  );
}
