"use client";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {

const words = [
  // Stream Your Reality,Live Your Passion
    { text: "Stream" }, // Each word is an object with a 'text' property
    { text: "Your" },
    { text: "Reality," },
    { text: "Live", className: "text-violet-500" }, // This word has a custom class
    { text: "Your", className: "text-violet-500" }, // This word has a custom class
    { text: "Passion", className: "text-violet-500" }, // This word has a custom class
];

  return (
    <div className="flex flex-col items-center justify-center h-[40rem]  ">
      <TypewriterEffectSmooth words={words} />       
    </div>
  );
}

