import React from "react";
import { BsVolumeUp } from "react-icons/bs";
import ReactPlayer from "react-player";

const IntroAudio = () => {
  const audioURL = "https://cs-people.bu.edu/ddavydov/assets/intro.mp3";

  const playAudio = () => {
    const audio = new Audio(audioURL);
    audio.play();
  };

  return (
    <div>
      <button
        onClick={playAudio}
        className="bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all"
      >
        <BsVolumeUp />
      </button>
    </div>
  );
};

export default IntroAudio;
