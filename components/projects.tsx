"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import Image from "next/image";
import Code from "@/public/code.png";

export default function Projects() {
  const { ref } = useSectionInView("N-Reinas", 0.5);

  return (
    <motion.section
      id="projects"
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <div className="relative w-full">
        <Image
          src={Code}
          alt="Code"
          width={50}
          className="absolute inset-0 top-1/2 -left-2 transform -translate-x-1/2 -translate-y-1/2"
        ></Image>
        <SectionHeading>N-Reinas</SectionHeading>
      </div>
      <p className="mb-3 ">
        Probablemente estás pensando &quot;ese es un extraño título&quot;, pero
        la historia detrás de ello muestra la belleza y complejidad de la
        pregunta &quot;quién soy yo&quot;. Este título es una juega de palabras
        en el famoso problema en ciencias de la computación: el problema de
        &quot;N-reinas&quot;, el cual utiliza el concepto de retroceso recursivo
        (un importante proceso en programación donde construimos y comparamos
        combinaciones diferentes). En cierto modo usamos este concepto cada día
        cuando tomamos decisiones y elegimos nuestros caminos. Yo lo usé para
        formar un mayor parte de mi identidad hace dos años.
      </p>
      <p className="mb-3">
        Ir a la universidad es un miedo específicamente para estudiantes que no
        saben qué quieren estudiar. Yo fui uno de ellos, así que consulté con mi
        madre. Mi madre quería que estudiemos medicina en la universidad porque
        “es necesario tener doctores en nuestra familia”, así que elegía
        estudiar la biología.
      </p>
      <p className="mb-3">
        Durante mi primer semestre me faltó motivación para estudiar porque no
        me apasionaba la medicina. Hacer amigos en mis clases era difícil porque
        no tenía los mismos intereses que mis compañeros de clase.
        Constantemente me sentí estresado y aislado en mis clases, pero mi novia
        me ayudó a darme cuenta que podía elegir mi propio camino. Uno que me
        hiciera feliz, así que tuve que elegir entre dos caminos después de este
        semestre: 1) quedé en el camino de pre-medicina o 2) cambié mi
        concentración a algo que me gusto. Después de pensarlo mucho, decidí
        hacer lo que es mejor para mí, así que elegí el segundo camino y cambié
        mi especialización a ciencias de la computación.
      </p>
      <p className="mb-3">
        Ahora estoy emocionado de ir a mis clases porque cada día aprendo sobre
        temas que me apasionaba. Ahora sé que mi familia, mi novia, y mis amigos
        apoyarán mis decisiones. Ahora puedo vivir para mí y construir mi
        destino. Ahora estoy contento con mi vida. Nos enfrentamos con
        innumerables decisiones todos los días que moldean nuestras vidas e
        identidades (en ciencias de la computación denotamos grandes números
        como &quot;n&quot;, así que nos enfrentamos con n-caminos cada día). Por
        lo que, &quot;¿quién soy yo?&quot; Todavía estoy construyendo mi
        identidad.
      </p>
    </motion.section>
  );
}
