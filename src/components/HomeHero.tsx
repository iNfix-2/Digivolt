import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface HomeHeroProps {
  onWatchFilm: () => void;
  onFindRide: () => void;
  onGetApp?: () => void;
}

export const HomeHero: React.FC<HomeHeroProps> = ({
  onWatchFilm,
  onFindRide,
  onGetApp,
}) => {
  return (
    <>
      <section id="hero" className="relative w-full min-h-[100dvh] flex flex-col justify-between bg-white dark:bg-black text-black dark:text-white overflow-hidden pt-14 sm:pt-20 pb-4 sm:pb-8 transition-colors duration-150">
        
        {/* Top Floating App Banner */}
        <div className="relative z-20 max-w-7xl mx-auto px-2 sm:px-8 w-full pt-2 sm:pt-4">
          <div className="mx-auto max-w-xl bg-white/95 dark:bg-black/95 backdrop-blur-md rounded-full px-3 py-1.5 sm:px-6 sm:py-2 flex items-center justify-between shadow-lg">
            <span className="text-[10.5px] sm:text-xs md:text-sm font-medium text-black dark:text-white tracking-tight whitespace-nowrap">
              The future of ride-hailing is Electric. Ride with DigiVolt.
            </span>
            <button
              onClick={onGetApp}
              className="bg-black text-white dark:bg-white dark:text-black text-[10.5px] sm:text-xs font-bold px-2.5 sm:px-4 py-1 sm:py-1.5 rounded-full hover:opacity-90 transition-opacity shrink-0 ml-1.5 sm:ml-2 whitespace-nowrap"
            >
              Sign up
            </button>
          </div>
        </div>

        {/* Center Hero Video & Content */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-8 my-auto py-10 sm:py-16">
          
          {/* Full Bleed Background Video */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source
                src="https://storage.googleapis.com/gweb-mobius-waymo-cdn/waymo/uploads/a823001d2abee90c35f92d689141d845c4c4a49d.mp4#t=0.001"
                type="video/mp4"
              />
              <source
                src="https://storage.googleapis.com/gweb-mobius-waymo-cdn/waymo/uploads/758e8aae3af0b8885258fe810b852f8ceaae3c3e.webm#t=0.001"
                type="video/webm"
              />
            </video>
            {/* Dynamic Vignette Overlay: Light vs Pitch Black */}
            <div className="absolute inset-0 bg-white/80 dark:bg-black/75 pointer-events-none transition-colors duration-150" />
          </div>

          {/* Center Title & Get Volt CTA */}
          <div className="relative z-10 max-w-4xl mx-auto px-2">
            <motion.h1
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[2.2rem] sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-black dark:text-white leading-[1.08] sm:leading-tight mb-4 sm:mb-6 max-w-xs sm:max-w-4xl mx-auto"
            >
              Redefining <span className="text-black dark:text-white">Urban Mobility</span>
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
              className="text-xs sm:text-lg md:text-xl text-neutral-700 dark:text-gray-300 font-normal max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed"
            >
              100% electric fleet. Rigorously vetted professional chauffeurs. Zero emissions, whisper-quiet cabin comfort, and uncompromising safety.
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="flex justify-center"
            >
              <button
                onClick={onGetApp || onWatchFilm}
                className="inline-flex items-center gap-2 sm:gap-2.5 px-4 py-2 sm:px-6 sm:py-3 rounded-full bg-white dark:bg-black hover:bg-neutral-100 dark:hover:bg-neutral-900 text-black dark:text-white text-xs sm:text-base font-semibold transition-all group shadow-md cursor-pointer"
              >
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-black text-white dark:bg-white dark:text-black flex items-center justify-center shrink-0 group-hover:translate-x-0.5 transition-transform">
                  <ArrowRight className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                </div>
                <span>Get Volt</span>
              </button>
            </motion.div>
          </div>

        </div>

        {/* Bottom Floating Pill Widgets on Desktop/Tablet */}
        <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-8 w-full pb-6 sm:pb-10 hidden sm:block">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Left Pill */}
            <div className="bg-white/95 dark:bg-black/95 backdrop-blur-md rounded-2xl sm:rounded-full px-6 py-4 shadow-xl flex items-center justify-center">
              <p className="text-xs sm:text-sm text-neutral-800 dark:text-gray-200 font-medium text-center">
                100% electric rides with professional vetted chauffeurs
              </p>
            </div>

            {/* Right Pill (Clickable CTA) */}
            <button
              onClick={onFindRide}
              className="bg-white/95 dark:bg-black/95 hover:bg-neutral-100 dark:hover:bg-neutral-900 backdrop-blur-md rounded-2xl sm:rounded-full px-6 py-4 shadow-xl flex items-center justify-between text-left transition-colors group cursor-pointer"
            >
              <span className="text-xs sm:text-sm text-black dark:text-white font-semibold">
                Find your electric ride
              </span>
              <ArrowRight className="w-4 h-4 text-black dark:text-white transition-transform group-hover:translate-x-1" />
            </button>

          </div>
        </div>

      </section>

      {/* Mobile-Only Pill Widgets cleanly situated below the hero fold */}
      <div className="sm:hidden bg-white dark:bg-black px-3.5 py-3.5 space-y-2 transition-colors duration-150">
        <div className="bg-white dark:bg-black rounded-2xl px-4 py-3 shadow-md flex items-center justify-center">
          <p className="text-xs text-neutral-800 dark:text-gray-200 font-medium text-center leading-relaxed">
            100% electric rides with professional vetted chauffeurs
          </p>
        </div>
        <button
          onClick={onFindRide}
          className="w-full bg-white dark:bg-black active:bg-neutral-100 dark:active:bg-neutral-900 rounded-2xl px-4 py-3 shadow-md flex items-center justify-between text-left"
        >
          <span className="text-xs text-black dark:text-white font-semibold">
            Find your electric ride
          </span>
          <ArrowRight className="w-3.5 h-3.5 text-black dark:text-white" />
        </button>
      </div>
    </>
  );
};
