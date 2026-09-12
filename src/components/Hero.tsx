import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

interface HeroProps {
  onCtaClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  const [videoError, setVideoError] = useState(false);

  return (
    <section className="relative w-full h-screen min-h-[640px] flex items-center justify-center overflow-hidden bg-white dark:bg-black text-black dark:text-white transition-colors duration-150">
      {/* Background Full-Bleed Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        src="https://placeholder.video.mp4"
        onError={() => setVideoError(true)}
        className={`absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-1000 ${
          videoError ? 'opacity-0' : 'opacity-85'
        }`}
      />

      {/* Cinematic Fallback Graphic if video URL is unreachable */}
      {videoError && (
        <div className="absolute inset-0 z-0 bg-white dark:bg-black overflow-hidden">
          {/* Subtle electric grid lines and horizon perspective */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-gradient-to-t from-neutral-500/10 via-neutral-900/5 to-transparent blur-3xl rounded-full" />
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="grid-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#888888" stopOpacity="0" />
                  <stop offset="100%" stopColor="#888888" stopOpacity="0.2" />
                </linearGradient>
              </defs>
              <line x1="50%" y1="50%" x2="0%" y2="100%" stroke="url(#grid-grad)" strokeWidth="1.5" />
              <line x1="50%" y1="50%" x2="25%" y2="100%" stroke="url(#grid-grad)" strokeWidth="1" />
              <line x1="50%" y1="50%" x2="50%" y2="100%" stroke="url(#grid-grad)" strokeWidth="2" strokeDasharray="16 12" />
              <line x1="50%" y1="50%" x2="75%" y2="100%" stroke="url(#grid-grad)" strokeWidth="1" />
              <line x1="50%" y1="50%" x2="100%" y2="100%" stroke="url(#grid-grad)" strokeWidth="1.5" />
            </svg>
          </div>
          <div className="absolute top-8 right-8 z-10 hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 dark:bg-white/5 text-xs font-mono text-neutral-600 dark:text-gray-400">
            <span className="w-2 h-2 rounded-full bg-black dark:bg-white animate-pulse" />
            SRC: placeholder.video.mp4
          </div>
        </div>
      )}

      {/* Subtle Overlay */}
      <div className="absolute inset-0 z-10 bg-white/70 dark:bg-black/75 pointer-events-none transition-colors duration-150" />

      {/* Center Hero Content with Framer Motion scroll physics */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
        {/* Subtle pill eyebrow */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-white text-xs sm:text-sm font-medium tracking-wide mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-white" />
          <span>100% Electric Ride-Hailing</span>
        </motion.div>

        {/* Massive, Punchy Headline */}
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter text-white leading-[0.95] mb-8"
        >
          Make it there.
        </motion.h1>

        {/* Minimalist Subtitle */}
        <motion.p
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg sm:text-xl md:text-2xl text-gray-200 font-light max-w-2xl mx-auto mb-10 tracking-tight leading-relaxed"
        >
          Zero tailpipe emissions, whisper-quiet cabin comfort, and vetted professional chauffeurs. Available 24/7 in San Francisco, Phoenix, Los Angeles, and expanding.
        </motion.p>

        {/* Pill-Shaped CTA with Instant Color Reversal Hover State */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <button
            onClick={onCtaClick}
            className="btn-pill-light text-base sm:text-lg px-9 py-4 font-semibold tracking-tight shadow-xl flex items-center gap-3 group"
          >
            <span>Ride with DigiVolt One</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
          <a
            href="#technology"
            className="btn-pill-transparent-light text-base sm:text-lg px-8 py-4 font-normal tracking-tight"
          >
            Explore the Technology
          </a>
        </motion.div>
      </div>

      {/* Downward Scroll Cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors cursor-pointer"
        onClick={() => {
          const el = document.getElementById('digivolt-one');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span className="text-[11px] uppercase tracking-widest font-mono">Scroll</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </motion.div>
    </section>
  );
};
