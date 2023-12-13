"use client";

import React, { Fragment, useRef, useState } from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { Dialog, Transition } from "@headlessui/react";

const skillsData = [
  {
    skill: "Mi Novia",
    image: "https://cs-people.bu.edu/ddavydov/assets/images/novia.jpeg",
    disc: "Uno de los mejores momentos de mi vida fue cuando conocí a mi novia. Ella es la luz de mi vida. Recientemente, celebramos nuestro aniversario de dos años, y no puedo esperar para pasar la vida juntos.",
  },
  {
    skill: "Mi Madre",
    image: "https://cs-people.bu.edu/ddavydov/assets/images/mom.JPG",
    disc: "Mi mamá es un héroe en mis ojos. Ella nos crió solamente (imagina criar trillizos por ti mismo, es imposible). Mi madre es mi mejor amiga y mi sistema de apoyo. Te amo mamá.",
  },
  {
    skill: "Sonya (Mi Hermana Mayor)",
    image: "https://cs-people.bu.edu/ddavydov/assets/images/triplet.png",
    disc: "Sonya (la niña a mi izquierda - estoy en el medio) es la mejor hermana mayor. A veces no vemos ojos a ojos, pero sé que ella siempre me ama. Ella puede lograr cualquiera cosa que se quiera.",
  },
  {
    skill: "Lana (Mi Hermana Menor)",
    image: "https://cs-people.bu.edu/ddavydov/assets/images/us.png",
    disc: "Lana (la niña a mi izquierda - estoy en el medio) es la mejor hermana menor. Ella es una de mis mejores amigas y gran parte de mi sistema de apoyo. Lana es una de las personas más inteligentes y creativas que conozco. No puedo esperar para ver lo que ella logra.",
  },
  {
    skill: "Programación",
    image: "https://cs-people.bu.edu/ddavydov/assets/images/programming.png",
    disc: "Me encanta la programación. Es una de mis actividades favoritas, especialmente en mi tiempo libre. Programación es mi pasión. No podría estar más feliz con mi decisión de cambiar mi concentración a ciencias de la computación.",
  },
  {
    skill: "Gatitos",
    image: "https://i.ytimg.com/vi/eXwZMAz9Vh8/maxresdefault.jpg",
    disc: "Los gatitos son majestuosos y adorables. Me relaciono con ellos porque mis actividades favoritas también son dormir y comer. En el futuro voy a tener gatitos y perritos.",
  },
  {
    skill: "Perritos",
    image: "https://cs-people.bu.edu/ddavydov/assets/images/puppy.png",
    disc: "Los perritos también son majestuosos y adorables. Siempre he querido perritos. En el futuro voy a tener muchos gatitos y perritos.",
  },
  {
    skill: "Comida",
    image:
      "https://www.foodandwine.com/thmb/mR4dCbYi3gOxonFdHrD1jvA4RwE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/marcella-hazan-bolognese-meat-sauce-FT-RECIPE0420-06b71bb3fdb64dcba93654c98eaa353d.jpg",
    disc: "Soy un gran “foodie”. Me encanta probar comidas nuevas siempre que puedo. Mi cocina favorita es Italiano. Siempre tengo espacio para pizza o pasta.",
  },
  {
    skill: "Game of Thrones",
    image: "https://images2.alphacoders.com/126/1260061.jpg",
    disc: "Recientemente, terminé de ver la mejor serie en el mundo, Game of Thrones. La historia y la actuación son increíbles. No puedo esperar para la segunda temporada de House of Dragon.",
  },
  {
    skill: "Dormir",
    image:
      "https://yt3.googleusercontent.com/YsC558TL1z90w0KdcfW6n-pSocY-ShXuVqM5VTFGNX4jcJZAxqdtlPWOO4G1BQ2wwR0Xt5uU_hI=s900-c-k-c0x00ffffff-no-rj",
    disc: "Como comer, dormir es una de mis actividades favoritas. Aunque no duermo mucho ahora porque tengo mucho trabajo para mis clases, estoy emocionado por las vacaciones de invierno porque dormiré mucho.",
  },
  {
    skill: "Minecraft",
    image: "https://cs-people.bu.edu/ddavydov/assets/images/minecraft.jpeg",
    disc: "Minecraft es mi videojuego favorito. Cuando era joven jugué Minecraft con mis amigos, y todavía juego con mis amigos y mi primito.",
  },
] as const;

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
    scale: 1, // Initial scale
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1, // Final scale
    transition: {
      delay: 0.05 * index,
    },
  }),
  hover: {
    scale: 1.05, // Scale when hovered
  },
};

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  skill: string;
  disc?: string;
  image?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  skill,
  disc,
  image,
}) => {
  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={isOpen} as={React.Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 flex items-center justify-center"
        initialFocus={cancelButtonRef}
        onClose={onClose}
      >
        <Transition.Child
          as={React.Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="relative z-10 w-full max-w-lg p-4">
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <Dialog.Panel className="overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all">
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <Dialog.Title
                      as="h3"
                      className="text-base font-semibold leading-6 text-gray-900 text-center"
                    >
                      {skill}
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        {/* Display skill disc and image */}
                        {disc && <p>{disc}</p>}
                        {image && (
                          <img
                            src={image}
                            alt={`${skill} Image`}
                            className="rounded-lg"
                          />
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="button"
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                  onClick={onClose}
                  ref={cancelButtonRef}
                >
                  Close
                </button>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default function Test() {
  const { ref } = useSectionInView("Amores");
  const [selectedSkill, setSelectedSkill] = useState<
    (typeof skillsData)[number] | null
  >(null);

  const openModal = (skill: (typeof skillsData)[number]) => {
    setSelectedSkill(skill);
  };

  const closeModal = () => {
    setSelectedSkill(null);
  };

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 scroll-mt-28 max-w-[53rem] text-center sm:mb-40"
    >
      <SectionHeading>Amores</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800 cursor-pointer">
        {skillsData.map((skill, index) => (
          <motion.li
            key={index}
            className="bg-white border border-black/[0.1] rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            whileHover="hover"
            viewport={{ once: false }}
            custom={index}
            onClick={() => openModal(skill)}
          >
            {skill.skill}
          </motion.li>
        ))}
      </ul>

      {/* Render the modal */}
      {selectedSkill && (
        <Modal
          isOpen={selectedSkill !== null}
          onClose={closeModal}
          skill={selectedSkill.skill}
          disc={selectedSkill.disc}
          image={selectedSkill.image}
        />
      )}
    </section>
  );
}
