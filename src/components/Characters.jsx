import React from "react";
import gaalImg from "../images/Gaal Dornick.jpg";
import seldonImg from "../images/hariseldon.jpg";
import salvorImg from "../images/salvorhardin.jpg";
import mallowImg from "../images/hobermallow.webp";
import demerzelImg from "../images/demerzel.webp";
import cleonsImg from "../images/cleons.jpg";
import irmaoCrepusculoImg from "../images/irmaocrepusculo.webp";
import irmaoAlvoradaImg from "../images/irmaoalvorada.jpg";
import raychImg from "../images/Raych Seldon.jpg";

const CHARACTERS = [
  { id: "gaal", name: "Gaal Dornick", role: "Matemática", image: gaalImg, quote: "Quando os fatos parecem beirar à incredibilidade, a fantasia torna-se tranquilizadoramente sólida." },
  { id: "seldon", name: "Hari Seldon", role: "Pai da Psico-história", image: seldonImg, quote: "Prever o futuro para reduzir o sofrimento da humanidade." },
  { id: "salvor", name: "Salvor Hardin", role: "Líder da Fundação", image: salvorImg, quote: "A política exige coragem prática e sacrifícios difíceis." },
  { id: "mallow", name: "Hober Mallow", role: "Comerciante", image: mallowImg, quote: "A vida é como colecionar joias em uma sacola. E no fim, você não quer que a sacola esteja cheia, quer que ela esteja vazia, porque você deu todas elas." },
  { id: "demerzel", name: "Demerzel", role: "O império", image: demerzelImg, quote: "Não fazer nada é uma opção que pode ter mais consequências do que agir" },
  { 
    id: "irmao-crepusculo", 
    name: "Irmão Crepúsculo", 
    role: "Patriarca da Dinastia", 
    image: irmaoCrepusculoImg, 
    quote: "As sombras da dinastia pesam mais quando já vimos o império repetir seus próprios erros."},
  { 
    id: "irmao-alvorada", 
    name: "Irmão Alvorada", 
    role: "sucessor em formação", 
    image: irmaoAlvoradaImg, 
    quote: "Nasci para seguir um padrão perfeito, mas descubro que minhas falhas são mais verdadeiras que o molde." 
  },
  { id: "irmaodia", name: "Irmão Dia", role: "Imperador", image: cleonsImg, quote: "Bem-vindo a Trantor, o coração do império. Por favor, respeitem e apreciem a paz." },
  { 
    id: "raych",
    name: "Raych Seldon",
    role: "Filho de Hari Seldon",
    image: raychImg,
    quote: "Ele me pediu para fazer isso."
  }
];

function svgAvatar(name, a = "#222", b = "#FFD54C") {
  const initials = name.split(" ").map(n => n[0] || "").slice(0,2).join("");
  const svg = `
    <svg xmlns='http://www.w3.org/2000/svg' width='720' height='720' viewBox='0 0 720 720'>
      <defs><linearGradient id='g' x1='0' x2='1'><stop offset='0' stop-color='${a}' /><stop offset='1' stop-color='${b}' /></linearGradient></defs>
      <rect width='100%' height='100%' rx='48' fill='url(#g)'/>
      <g fill='rgba(255,255,255,0.98)' font-family='Inter, system-ui, sans-serif' font-weight='700' text-anchor='middle'>
        <text x='360' y='360' font-size='260' font-weight='800'>${initials}</text>
        <text x='360' y='530' font-size='34' fill='rgba(255,255,255,0.88)'>${name}</text>
      </g>
    </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

export default function Characters() {
  return (
    <section id="personagens" className="section section--dark">
      <div className="container">
        <div className="grid grid--chars" role="list">
          {CHARACTERS.map((c) => (
            <article
              key={c.id}
              role="listitem"
              className="char-card"
              aria-labelledby={`char-${c.id}-name`}
            >
              <div className="char-thumb">
                <img
                  src={c.image}
                  alt={c.name}
                  loading="lazy"
                  onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = svgAvatar(c.name); }}
                />
              </div>

              <div className="char-body">
                <h3 id={`char-${c.id}-name`}>{c.name}</h3>
                <p className="muted">{c.role}</p>
                <p className="char-quote">“{c.quote}”</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
