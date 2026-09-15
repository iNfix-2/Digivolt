import React from 'react';
import { motion } from 'framer-motion';

interface RidesOmniCtaProps {
  onOpenAppModal: () => void;
}

export const RidesOmniCta: React.FC<RidesOmniCtaProps> = ({ onOpenAppModal }) => {
  return (
    <section
      id="rides-made-simple"
      className="relative w-full overflow-hidden bg-black text-white pt-24 sm:pt-32 pb-20 sm:pb-28 transition-colors duration-150"
    >
      {/* Subtle radial ambient light behind mockup */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-emerald-950/20 blur-[150px] pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-8 text-center flex flex-col items-center">

        {/* Main Headline (reduced by 20%) */}
        <motion.h2
          initial={{ y: 25, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-4 leading-tight"
        >
          Rides made simple.
        </motion.h2>

        {/* Supporting Description (reduced by 20%) */}
        <motion.p
          initial={{ y: 25, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-xs sm:text-lg md:text-xl text-neutral-400 max-w-xl mx-auto mb-8 leading-relaxed font-normal"
        >
          Download the app and experience the future of ride-hailing with 100% electric vehicles. Simply enter your details and secure your ride in seconds.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ y: 25, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 sm:mb-14"
        >
          <button
            onClick={onOpenAppModal}
            className="bg-white text-black text-sm sm:text-base px-8 py-3.5 rounded-full font-semibold shadow-xl flex items-center gap-2 group transition-all hover:bg-neutral-200 cursor-pointer"
          >
            <span>Download and ride today</span>
          </button>
        </motion.div>

        {/* 3D Perspective Phone Mockup - Fully visible, bigger, no clipping */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          onClick={onOpenAppModal}
          className="relative w-full max-w-5xl lg:max-w-6xl mx-auto flex justify-center cursor-pointer select-none"
        >
          <img
            src="/campaign/digivolt_mockup_perspective.jpg"
            alt="DigiVolt mobile app - Book a ride in seconds"
            className="w-full h-auto object-contain drop-shadow-[0_25px_60px_rgba(0,0,0,0.95)] hover:scale-[1.015] transition-transform duration-500 ease-out"
            loading="lazy"
          />
        </motion.div>

      </div>
    </section>
  );
};
