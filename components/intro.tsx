"use client";

import React from "react";
import Image from "next/image";
import AvatarImage from "@/public/profile.jpeg";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsLinkedin, BsInstagram, BsLink } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import IntroAudio from "./introaudio";

const LINKEDIN_URL = "https://www.linkedin.com/in/daniel-davydov/";
const INSTAGRAM_URL = "https://www.instagram.com/danieldavydov0/?hl=en";

export default function Intro() {
  const { ref } = useSectionInView("Inicio", 0.5);
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <section
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-96"
      ref={ref}
    >
      <div className="flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "tween", duration: 0.2 }}
        >
          <Image
            src={AvatarImage}
            alt="Avatar Image"
            width={800}
            height={800}
            quality={95}
            priority={true}
            className="h-48 w-48 rounded-full object-cover border-[0.2rem] border-white shadow-lg hover:scale-105 transition-all"
          />
        </motion.div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-xl font-medium !leading-[1.5] sm:text-2xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-semibold">
          Hola, soy Daniel. ¡Bienvenidos a mi sitio web! Espero que disfrutes tu
          estadía. Presiona el botón de reproducción en la esquina inferior
          derecha y disfruta de algo de música agradable mientras navegas.{" "}
          <span style={{ display: "inline-flex", alignItems: "center" }}>
            <IntroAudio />
          </span>
        </span>
      </motion.h1>
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <a
          href={LINKEDIN_URL}
          target="_blank"
          className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition border border-black/10  dark:bg-white/10 dark:text-white/60"
        >
          LinkedIn <BsLinkedin />
        </a>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition border border-black/10  dark:bg-white/10 dark:text-white/60"
        >
          Instagram <BsInstagram />
        </a>
      </motion.div>
    </section>
  );
}
