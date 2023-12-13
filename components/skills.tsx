"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion, AnimatePresence } from "framer-motion";

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

const modalAnimationVariants = {
  initial: { opacity: 0, y: -50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 },
};

export default function Skills() {
  const { ref } = useSectionInView("Amores");
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const openModal = (skill: string) => {
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
            {skill}
          </motion.li>
        ))}
      </ul>
      {/* Modal */}
      <AnimatePresence>
        {selectedSkill && (
          <motion.div
            className="modal-overlay"
            variants={modalAnimationVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <motion.div className="modal-content">
              <h2>{selectedSkill}</h2>
              {/* Add your image and centered description here */}
              <button onClick={closeModal}>Close</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
