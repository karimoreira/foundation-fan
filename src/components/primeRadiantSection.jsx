import React from "react";
import bg from "../images/primeiroradiantesection.png";

const PrimeRadiantSection = () => {
  return (
    <section
      id="primeiro-radiante"
      className="section section--bg section--hero"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <h2>Primeiro radiante</h2>
        <p>
          O <strong>Primeiro Radiante</strong> é a
          chave matemática e simbólica da obra de Hari Seldon. Dentro de sua
          estrutura geométrica impossível repousam as equações da{" "}
          <strong>psico-história</strong>, condensadas para revelar apenas aos
          olhos treinados, as projeções do Plano Seldon.
          <br />
          <br />
          Projetado para ser indecifrável ao senso comum, o Radiante funciona
          como um mapa vivo do destino galáctico: ele muda, reage e se expande à
          medida que as variáveis históricas se alteram. É nele que se
          manifestam os eventos previstos, as crises inevitáveis e os caminhos
          que podem guiar a Fundação para longe da escuridão.
          <br />
          <br />
          Sua importância atravessa eras. Guardado, protegido e às vezes
          disputado, o Primeiro Radiante permanece como o elo mais direto entre
          o presente e a visão de Seldon. um lembrete de que conhecimento,
          quando ordenado e compreendido, pode moldar o futuro de trilhões.
        </p>
      </div>
    </section>
  );
};

export default PrimeRadiantSection;
