import React from "react";
import { motion } from "framer-motion";
import banner from "../images/bannerfundacao.webp";

const Banner = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <img
        src={banner}
        alt="Fundação Apple TV+"
        className="w-full h-auto max-h-[90vh] object-cover object-top opacity-80"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="font-foundation text-6xl md:text-7xl font-bold tracking-[0.25em] text-yellow-300 drop-shadow-lg uppercase"
        >
          FOUNDATION
        </motion.h1>

        <p className="mt-6 max-w-3xl text-lg md:text-xl text-gray-200 leading-relaxed">
          Inspirada nas obras visionárias de <span className="text-yellow-400 font-semibold">Isaac Asimov</span>, 
          <br /> <strong>Fundação</strong> não é apenas uma série, é uma jornada pela queda e renascimento da humanidade.
          Cada episódio é uma meditação sobre destino, poder e conhecimento, onde civilizações
          se erguem e desabam em um ciclo inevitável. Para quem mergulha nesse universo,
          não é apenas ficção científica, é quase uma religião.
        </p>

        <motion.a
          href="#universo"
          className="mt-8 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-6 rounded-full transition"
          whileHover={{ scale: 1.05 }}
        >
          Explorar o Universo
        </motion.a>
      </div>
    </div>
  );
};

export default Banner;
