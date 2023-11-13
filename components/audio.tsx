"use client";

import React, { useState, useRef, useEffect } from "react";
import { BsPlay, BsPause } from "react-icons/bs";

export default function AudioButton() {
  const [audioStatus, setAudioStatus] = useState(false);
  const audio = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (typeof Audio !== "undefined" && !audio.current) {
      audio.current = new Audio(
        "https://cs-people.bu.edu/ddavydov/assets/music.mp3"
      );
    }
  }, []);

  const startAudio = () => {
    if (audio.current) {
      audio.current.play();
      setAudioStatus(true);
    }
  };

  const pauseAudio = () => {
    if (audio.current) {
      audio.current.pause();
      setAudioStatus(false);
    }
  };

  return (
    <>
      {audioStatus ? (
        <button
          className="fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all"
          onClick={pauseAudio}
        >
          <BsPause />
        </button>
      ) : (
        <button
          className="fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all"
          onClick={startAudio}
        >
          <BsPlay />
        </button>
      )}
    </>
  );
}
