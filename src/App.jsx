import React from "react";
import Banner from "./components/banner";
import UniverseSection from "./components/universeSection";
import PrimeRadiantSection from "./components/primeRadiantSection";
import Footer from "./components/footer";


import "./styles/index.css";

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Banner />
      <UniverseSection />
      <PrimeRadiantSection />
      <Footer />
    </div>
  );
}

export default App;
