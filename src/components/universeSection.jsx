import React, { useEffect, useRef } from "react";
import bg from "../images/universo.webp";

const UniverseSection = () => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add("visible");
      },
      { threshold: 0.2 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      id="universo"
      ref={ref}
      className="section section--bg section--hero"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="container">
        <h2>O Universo de Fundação</h2>
        <p>
          A vastidão da Galáxia é o palco de uma civilização que já alcançou seu
          ápice e agora vacila diante de séculos de decadência. Em meio ao
          declínio do enorme Império Galáctico, surge a mente extraordinária de{" "}
          <strong>Hari Seldon</strong>, criador da{" "}
          <strong>psico-história</strong>, uma ciência que une matemática,
          sociologia e estatística para prever o comportamento coletivo de
          bilhões de seres humanos.
          <br />
          <br />
          Diante da inevitável queda do Império e de uma era de trevas que
          duraria milênios, Seldon elabora um plano ousado: a criação da{" "}
          <strong>Fundação</strong>, um bastião de conhecimento destinado a
          preservar o legado humano e encurtar a escuridão que se aproxima.
          <br />
          <br />
          Em um cosmos vasto, complexo e em constante transformação, a Fundação
          torna-se a primeira faísca de esperança contra o caos. Uma tentativa
          calculada de reescrever o destino de toda a espécie.
        </p>
      </div>
    </section>
  );
};

export default UniverseSection;
