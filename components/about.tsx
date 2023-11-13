"use client";

import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import Image from "next/image";
import Circle from "@/public/circle.png";

export default function About() {
  const { ref } = useSectionInView("Sobre mi");

  return (
    <motion.section
      id="about"
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <div className="relative w-full">
        <Image
          src={Circle}
          alt="Circle"
          width={200}
          className="absolute inset-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        ></Image>
        <SectionHeading>Sobre mi</SectionHeading>
      </div>
      <p className="mb-3 ">
        Estoy en mi tercer año en la Universidad de Boston, y estudio ciencias
        de la computación. Me apasiona la tecnología y la programación, y me
        gusta construir cosas que la gente usa.
      </p>
      <p className="mb-3">
        En mi tiempo libre me gusta pasar rato con mi novia, explorar la ciudad,
        ver peliculas y programas (acabo de terminar House of Dragon), escuchar
        musica, y jugar videojuegos.
      </p>
      <p>Desplázate hacia abajo para leer sobre cómo creo mi identidad.</p>
    </motion.section>
  );
}
