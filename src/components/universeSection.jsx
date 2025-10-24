import React from "react";

const UniverseSection = () => {
  return (
    <section
      id="universo"
      className="px-8 py-20 bg-gradient-to-b from-gray-900 to-black"
    >
      <h2 className="text-4xl font-bold text-yellow-400 mb-8 text-center">
        O Universo da Fundação
      </h2>

      <p className="text-lg text-gray-300 max-w-4xl mx-auto text-center leading-relaxed">
        Em um futuro distante, a humanidade se espalhou por milhões de mundos, 
        sustentada por um império em decadência. O brilhante <strong>Hari Seldon </strong> 
        prevê o colapso inevitável através da <strong>psico-história</strong>, uma ciência capaz 
        de calcular o destino coletivo das civilizações. <br /><br />
        Da poeira dos impérios em ruína nasce a <strong>Fundação</strong>: um refúgio 
        para o conhecimento e um plano para restaurar a luz em meio à escuridão.
        Cada planeta, cada personagem e cada escolha são fragmentos de um plano maior,
        o sonho de que o saber humano pode sobreviver ao próprio tempo.
      </p>
    </section>
  );
};

export default UniverseSection;
