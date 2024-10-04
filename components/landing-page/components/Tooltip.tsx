"use client";
import React from "react";
import { AnimatedTooltip } from "../ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "Ujjawal",
    designation: "Stream Today?",
    image:
      "https://lh3.googleusercontent.com/a/ACg8ocK82W1oaB7124s_DqCldPQRkTn_Te_hNnpoVOz2R-DjUKfygvY=s360-c-no",
  },
  {
    id: 2,
    name: "Rajveer",
    designation: "Let's Meet",
    image:
        'https://lh3.googleusercontent.com/a/ACg8ocLh9LS3EwL9pJVZDDubf_54ppl9FlnlR0D2WucW9taj-bhEI_VB=s360-c-no',
  },
  {
    id: 3,
    name: "Ankit",
    designation: "What up?",
    image:
        'https://lh3.googleusercontent.com/a/ACg8ocKZlKFk_THQY2bpFY_sKyec_Kog25i3rPTeOhxbgNdZ_X54oD4=s360-c-no',
  },
  {
    id: 4,
    name: "Harsh",
    designation: "Join Class!!",
    image:
      'https://media.licdn.com/dms/image/v2/D4D03AQG0mTt8tpQhmQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1697354988591?e=1732752000&v=beta&t=kN9I7IeZHTtOXzUiXJT9TaOJz3YiUrx6k9NXixUL7uM',
  },
  {
    id: 5,
    name: "Vikram",
    designation: "Watch my Blog",
    image:
      'https://lh3.googleusercontent.com/a/ACg8ocIFTO6vw8ATVie3qdOeyzvWdvH9UK9nXVsha8EZuH0TwNA3Ng4=s96-c-rg-br100',
  },
  {
    id: 6,
    name: "Amrit",
    designation: "Ready for Gaming",
    image:
      "https://avatars.githubusercontent.com/u/128883851?v=4&size=64",
  },
];

export function Tooltip() {
  return (
    <div className="flex flex-row items-center justify-center my-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
