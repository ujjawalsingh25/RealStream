"use client";

import React from 'react';
import { LampContainer } from '../ui/lamp';
import { motion } from "framer-motion";

const Technologies = () => {
  return (
    <section id="experience" className='py-20 w-full'>
      <h1 className='heading text-white text-center'>
        <span className='text-purple-500 text-5xl'>Technologies</span>
      </h1>
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.5,
            duration: 1,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          {/* PinCards */}
        </motion.h1>
    </LampContainer>

    </section>
  )
}

export default Technologies;
