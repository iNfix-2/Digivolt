import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface RidesHeroProps {
  onRideClick: () => void;
}

export const RidesHero: React.FC<RidesHeroProps> = ({ onRideClick }) => {
  return (
    <section
      id="the-future-of-transportation-is-here"
      className="relative w-full min-h-[90vh] lg:min-h-screen flex flex-col justify-between pt-20 sm:pt-36 pb-8 sm:pb-12 px-4 sm:px-10 lg:px-16 bg-white dark:bg-black text-black dark:text-white transition-colors duration-150 overflow-hidden"
    >
      {/* Top Content: Eyebrow + Headline */}
      <div className="max-w-6xl mx-auto w-full">
        {/* Subtle Pill Eyebrow */}
        <motion.div
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-4 sm:mb-6"
        >
          <p className="text-xs sm:text-base text-neutral-700 dark:text-gray-300 font-medium tracking-tight">
            100% all-electric ride-hailing with professional vetted chauffeurs
          </p>
        </motion.div>

        {/* Main H1 */}
        <motion.h1
          initial={{ y: 32, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tighter text-black dark:text-white leading-[1.05] sm:leading-[1.02] max-w-5xl mb-4 sm:mb-6"
        >
          The future of ride-hailing is <span className="text-black dark:text-white">Electric</span>.
        </motion.h1>

        <motion.p
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-2xl text-neutral-600 dark:text-gray-300 font-normal max-w-3xl mb-8 sm:mb-10 leading-relaxed"
        >
          Redefining urban mobility with zero tailpipe emissions, whisper-quiet cabin comfort, and rigorously screened professional drivers.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ y: 28, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center gap-4 mb-8 sm:mb-10"
        >
          <button
            onClick={onRideClick}
            className="bg-black text-white dark:bg-white dark:text-black text-sm sm:text-lg px-7 sm:px-9 py-3.5 sm:py-4 rounded-full font-semibold flex items-center justify-center transition-all hover:opacity-90 shadow-lg cursor-pointer"
          >
            Ride with DigiVolt
          </button>
        </motion.div>
      </div>

      {/* Video Container */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-6xl mx-auto w-full relative rounded-3xl sm:rounded-[36px] overflow-hidden shadow-2xl aspect-[16/9] bg-neutral-100 dark:bg-neutral-900"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://storage.googleapis.com/waymo-prod-cdn/uploads/69962c968cb60ce62aabf7bba66dccf7-M1_hero_3.compressed.mp4#t=0.001"
            type="video/mp4"
          />
          <source
            src="https://storage.googleapis.com/waymo-prod-cdn/uploads/797b1a896b36484b3fc9391673befa8d-rides_hero.webm#t=0.001"
            type="video/webm"
          />
          Your web browser does not support this video.
        </video>
      </motion.div>

      {/* Scroll Down Cue */}
      <div className="max-w-6xl mx-auto w-full flex justify-center pt-8">
        <a
          href="#rides-how-it-works"
          className="flex items-center gap-1.5 text-xs uppercase tracking-widest text-neutral-500 dark:text-gray-400 hover:text-black dark:hover:text-white font-mono transition-colors"
        >
          <span>Explore how it works</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
