import React from "react";

const timelineCards = [
  {
    title: "Início (12.067 EI)",
    items: [
      {
        heading: "Chegada a Trantor",
        text: "Gaal Dornick chega ao planeta central do Império para trabalhar com Seldon."
      },
      {
        heading: "Acusação e Exílio",
        text: "Seldon e Gaal são julgados por heresia e exilados em Terminus, onde a Fundação é criada para preservar o conhecimento humano e acelerar a reconstrução após a queda do Império."
      }
    ]
  },
  {
    title: "Desenrolar do Plano",
    items: [
      {
        heading: "Decaimento do Império",
        text: "O Império Galáctico entra em declínio, culminando em caos e guerras por cerca de 30.000 anos."
      },
      {
        heading: "Intervenção de Seldon",
        text: "Em momentos de crise, o holograma de Seldon aparece para orientar a Fundação através de suas previsões psico-históricas, mostrando que as crises são desvios do plano original e oferecendo conselhos para superá-las."
      },
      {
        heading: "Redução do Período de Anarquia",
        text: "O objetivo da Fundação é reduzir o período de anarquia para 1.000 anos."
      }
    ]
  },
  {
    title: "Pontos Chave e Conflitos",
    items: [
      {
        heading: "O Plano é a Distração",
        text: "A criação da Fundação não é apenas um catálogo de conhecimento, mas um meio para substituir o Império Galáctico."
      },
      {
        heading: "Desafios",
        text: "A Fundação enfrenta vários desafios, como o ataque de Cleon XVII a Terminus, que serve como um teste para o plano de Seldon."
      },
      {
        heading: "O Mulo",
        text: "A ascensão do Mulo, um personagem que desafia a psico-história, representa uma grande ameaça ao plano. O Mulo, com seus poderes mentais, tenta encontrar a Segunda Fundação e é impedido pela Fundação."
      },
      {
        heading: "O Legado de Demerzel",
        text: "O plano de Seldon está intimamente ligado a Demerzel, um robô que serve a dinastia imperial e age como seu protetor e servo."
      },
      {
        heading: "A Segunda Fundação",
        text: "A Segunda Fundação é uma organização secreta que manipula a psico-história para garantir que o plano Seldon permaneça no curso."
      }
    ]
  }
];

export default function Timeline() {
  return (
    <section id="timeline" className="section timeline">
      <div className="container">
        <h2 className="text-3xl font-semibold mb-4">Linha do Tempo de Seldon</h2>
        <p className="muted mb-8">
          A linha do tempo do cientista Seldon, o ponto central da saga Fundação, começa no ano de 12.067 da Era Imperial com a chegada da cientista Gaal Dornick a Trantor e a prisão de ambos por heresia. O plano de Seldon é minimizar a era de anarquia que se seguirá à queda do Império Galáctico (prevista para acontecer em 300 anos). Ele cria a Fundação para reunir o conhecimento da galáxia e reduzir os 30.000 anos de caos para 1.000 anos.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {timelineCards.map((card, i) => (
            <article key={i} className="timeline-card bg-[var(--panel)] p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-medium mb-3">{card.title}</h3>
              <div className="space-y-3">
                {card.items.map((it, j) => (
                  <div key={j}>
                    <h4 className="font-semibold">{it.heading}</h4>
                    <p className="muted text-sm">{it.text}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}