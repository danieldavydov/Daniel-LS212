import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaFlask, FaBabyCarriage, FaCode, FaHeart } from "react-icons/fa";

export const links = [
  {
    name: "Inicio",
    hash: "#home",
  },
  {
    name: "Sobre mi",
    hash: "#about",
  },
  {
    name: "N-Reinas",
    hash: "#projects",
  },
  {
    name: "Amores",
    hash: "#skills",
  },
  {
    name: "Fechas",
    hash: "#experience",
  },
] as const;

export const experiencesData = [
  {
    title: "Mi Primer Día",
    location: "Nueva York, NY",
    description:
      "Nací en la ciudad de Nueva York, el 6 de agosto de 2003.",
    icon: React.createElement(FaBabyCarriage),
    date: "Aug 6, 2003",
  },
  {
    title: "Mi Primer Semestre",
    location: "Boston, MA",
    description:
      "Estudié biología en mi primer semestre, pero me di cuenta de que no era lo que quería hacer.",
    icon: React.createElement(FaFlask),
    date: "Sep 2021 - Dec 2021",
  },
  {
    title: "Conociendo a mi Novia",
    location: "Boston, MA",
    description:
      "Mientras esperaba a que empezara mi clase, conocí a mi novia. Ella es la mejor persona que he conocido y me ha ayudado a crecer como persona.",
    icon: React.createElement(FaHeart),
    date: "Oct 15, 2021",
  },
  {
    title: "Cambiando mi Concentración",
    location: "Boston, MA",
    description:
      "Cambié mi concentración a ciencias de la computación. Ahora estoy aprendiendo sobre temas que me interesan.",
    icon: React.createElement(FaCode),
    date: "Jan 2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "",
    description:
      "Probablemente estás pensando \“ese es un extraño título\”, pero la historia detrás de ello muestra la belleza y complejidad de la pregunta \“quién soy yo\". Este título es una juega de palabras en el famoso problema en ciencias de la computación: el problema de \“N-reinas\”, el cual utiliza el concepto de retroceso recursivo (un importante proceso en programación donde construimos y comparamos combinaciones diferentes). En cierto modo usamos este concepto cada día cuando tomamos decisiones y elegimos nuestros caminos. Yo lo usé para formar un mayor parte de mi identidad hace dos años.",
    tags: [],
    imageUrl: "",
  },
  {
    title: "",
    description:
      "Ir a la universidad es un miedo específicamente para estudiantes que no saben qué quieren estudiar. Yo fui uno de ellos, así que consulté con mi madre. Mi madre quería que estudiemos medicina en la universidad porque “es necesario tener doctores en nuestra familia”, así que elegía estudiar la biología.",
    tags: [],
    imageUrl: "",
  },
  {
    title: "",
    description:
      "A mobile for employee to submit permits, annual leaves, and recording attendance. Already used in five companies under Tancorp.",
    tags: [],
    imageUrl: "",
  },
  {
    title: "",
    description:
      "Central Kitchen system for managing multiple restaurants centrally alongside with Point of Sales System for transaction on outlet.",
    tags: [],
    imageUrl: "",
  },
] as const;

export const skillsData = [
  "Mi Novia",
  "Mi Madre",
  "Sonya (mi hermana mayor)",
  "Lana (mi hermana menor)",
  "Programación",
  "Gatitos",
  "Perritos",
  "Comida",
  "Musica",
  "Game of Thrones",
  "Dormir",
  "Matemáticas",
  "Minecraft",
] as const;