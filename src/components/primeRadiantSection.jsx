import React from "react";
import primeiroRadiantBanner from "../images/primeiroradiantesection.png";

const PrimeiroRadiantSection = () => {
  return (
    <section
      id="primeiro-radiante"
      className="relative px-8 py-20 bg-gradient-to-b from-black via-gray-900 to-black text-gray-200"
    >

      <div className="absolute inset-0 overflow-hidden">
        <img
          src={primeiroRadiantBanner}
          alt="Primeiro Radiante"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      <div className="relative max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-yellow-400 mb-8">
          O primeiro radiante
        </h2>

        <p className="text-lg leading-relaxed mb-8">
          Entre todos os artefatos da Fundação, nenhum é tão enigmático e
          reverenciado quanto o{" "}
          <span className="text-yellow-300 font-semibold">Primeiro Radiante</span>.
          Criado pelo lendário <strong>Hari Seldon</strong>, ele é o núcleo do
          Plano Seldon, uma joia tecnológica que contém todas as equações da{" "}
          <em>Psico-história</em>, a ciência capaz de prever o destino coletivo
          da humanidade.
        </p>

        <p className="text-lg leading-relaxed mb-8">
          Descrito como uma pequena esfera que projeta fórmulas luminosas no ar,
          o Radiante foi reinterpretado na série da Apple TV+ como um artefato
          dourado. Ele não apenas calcula o futuro,
          mas simboliza a crença de que o conhecimento, quando preservado, pode
          transcender o colapso e iluminar uma nova era.
        </p>

        <p className="text-lg leading-relaxed italic text-gray-400">
          “O Primeiro Radiante é mais do que um repositório de equações, é um
          mapa do futuro, um espelho da mente humana projetado em matemática.”<br />
          <span className="not-italic text-gray-500 text-sm">— Hari Seldon</span>
        </p>
      </div>
    </section>
  );
};

export default PrimeiroRadiantSection;
