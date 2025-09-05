import React from 'react';
import { motion } from 'framer-motion';

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2 + 0.5,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const items = [
    <motion.h1 key="1" custom={1} initial="hidden" animate="visible" variants={variants} className="text-teal-300 font-mono text-md md:text-lg mb-4">
      Hi, my name is
    </motion.h1>,
    <motion.h2 key="2" custom={2} initial="hidden" animate="visible" variants={variants} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-100">
      Ashwin Sridharan.
    </motion.h2>,
    <motion.h3 key="3" custom={3} initial="hidden" animate="visible" variants={variants} className="mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-400">
      I build solutions for the cloud.
    </motion.h3>,
    <motion.p key="4" custom={4} initial="hidden" animate="visible" variants={variants} className="mt-6 max-w-xl text-slate-400">
      I'm a Site Reliability Engineer who loves building reliable systems and making complex processes simpler. My curiosity often takes me into the world of AI — from MLOps pipelines to the latest in LLMOps — where I explore how to connect infrastructure with intelligence. For me, engineering is about resilience, creativity, and always learning something new.
    </motion.p>,
    <motion.div key="5" custom={5} initial="hidden" animate="visible" variants={variants} className="mt-12">
       <button
          onClick={scrollToContact}
          className="cursor-pointer border border-teal-300 text-teal-300 px-8 py-4 rounded-md text-lg font-mono hover:bg-teal-300/10 transition-colors duration-300"
        >
          Get In Touch
        </button>
    </motion.div>
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-start">
      <div>
        {items}
      </div>
    </section>
  );
}