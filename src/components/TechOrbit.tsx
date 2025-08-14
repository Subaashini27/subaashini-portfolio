import React from 'react';
import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';

const orbitVariants = {
  animate: {
    rotate: 360,
    transition: {
      repeat: Infinity,
      ease: 'linear',
      duration: 40,
    },
  },
};

const pulseVariants = {
  animate: {
    scale: [1, 1.06, 1],
    transition: { repeat: Infinity, duration: 3, ease: 'easeInOut' },
  },
};

const TechOrbit: React.FC = () => {
  const techIcons: Array<{ label: string; src: string; fallbackSrc?: string }> = [
    { label: 'JavaScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { label: 'React', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { label: 'Flutter', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
    { label: 'Node.js', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { label: 'AWS', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg', fallbackSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
    { label: 'Docker', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { label: 'Git', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { label: 'MySQL', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', fallbackSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg' },
  ];

  const positions = [
    { top: '0%', left: '50%' },
    { top: '22%', left: '90%' },
    { top: '50%', left: '100%' },
    { top: '78%', left: '90%' },
    { top: '100%', left: '50%' },
    { top: '78%', left: '10%' },
    { top: '50%', left: '0%' },
    { top: '22%', left: '10%' },
  ];

  return (
    <div className="relative w-[380px] h-[380px] md:w-[460px] md:h-[460px]">
      {/* glow */}
      <motion.div
        variants={pulseVariants}
        animate="animate"
        className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-500/30 via-secondary-500/20 to-primary-700/30 blur-3xl opacity-60"
      />

      {/* core */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          <div className="w-28 h-28 rounded-full bg-gradient-to-br from-white to-neutral-100 dark:from-neutral-800 dark:to-neutral-700 border border-white/30 dark:border-neutral-700/40 shadow-2xl flex items-center justify-center">
            <Code2 className="w-10 h-10 text-primary-600 dark:text-primary-300" />
          </div>
          <div className="absolute -inset-2 rounded-full border-2 border-primary-500/30" />
        </div>
      </div>

      {/* orbit rings */}
      <motion.div variants={orbitVariants} animate="animate" className="absolute inset-0">
        <div className="absolute inset-8 rounded-full border border-white/40 dark:border-neutral-700/60" />
        <div className="absolute inset-16 rounded-full border border-primary-500/30" />
        <div className="absolute inset-24 rounded-full border border-secondary-500/30" />

        {/* orbiting tech icons */}
        {techIcons.map((tech, idx) => (
          <div
            key={tech.label}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ top: positions[idx].top, left: positions[idx].left }}
            title={tech.label}
          >
            <div className="w-12 h-12 rounded-xl bg-white/90 dark:bg-neutral-800/90 border border-neutral-200/60 dark:border-neutral-700/60 shadow-md flex items-center justify-center overflow-hidden">
              <img
                src={tech.src}
                alt={tech.label}
                className="w-7 h-7 object-contain"
                loading="lazy"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const img = e.currentTarget as HTMLImageElement;
                  if (tech.fallbackSrc && img.src !== tech.fallbackSrc) {
                    img.src = tech.fallbackSrc;
                  } else {
                    // final fallback: show a simple text glyph
                    img.style.display = 'none';
                    const parent = img.parentElement;
                    if (parent) {
                      parent.innerHTML = `<span style=\"font-size:11px;font-weight:700;color:#4b5563\">${tech.label.replace(/[^A-Z]/g,'').slice(0,3) || 'Dev'}<\/span>`;
                    }
                  }
                }}
              />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default TechOrbit;


