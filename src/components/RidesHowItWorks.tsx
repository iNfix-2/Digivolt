import React, { useRef, useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';

interface RidesHowItWorksProps {
  onDownloadApp?: () => void;
}

export const RidesHowItWorks: React.FC<RidesHowItWorksProps> = ({ onDownloadApp }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    // 4 steps mapped evenly across 0 -> 1 progress
    let nextStep = 0;
    if (latest < 0.25) nextStep = 0;
    else if (latest < 0.50) nextStep = 1;
    else if (latest < 0.75) nextStep = 2;
    else nextStep = 3;

    if (nextStep !== activeStep) {
      setActiveStep(nextStep);
    }
  });

  const steps = [
    {
      num: '01',
      title: 'Download the DigiVolt app',
      description: 'Download our ride-hailing app and create an account to get started',
      mediaType: 'phone',
      image: '/how-it-works/slide1_phone.png',
    },
    {
      num: '02',
      title: 'Tell us where you want to go',
      description: "Choose your destination and we'll select the safest spots to pick you up and drop you off.",
      mediaType: 'car',
      lightImage: '/how-it-works/slide2_car_white.png',
      darkImage: '/how-it-works/ev_front_dark.jpg',
    },
    {
      num: '03',
      title: 'Hop in the vehicle',
      description: "Up to four passengers can ride at a time. We'll let you know when your car is ready. Unlock the door with the app and buckle up.",
      mediaType: 'circle',
      image: '/how-it-works/slide3_circle.png',
    },
    {
      num: '04',
      title: 'Enjoy the ride!',
      description: 'Hit “Start Ride” and follow along with what the DigiVolt Driver sees and the route it’s taking on the passenger screen.',
      mediaType: 'circle',
      image: '/how-it-works/slide4_circle.png',
    },
  ];

  const current = steps[activeStep];

  const scrollToStep = (index: number) => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const rect = container.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    // Position comfortably into the target step's range
    const targetFraction = (index + 0.15) / 4;
    const targetY = scrollTop + rect.top + targetFraction * (rect.height - window.innerHeight);
    window.scrollTo({ top: targetY, behavior: 'smooth' });
    setActiveStep(index);
  };

  return (
    <section
      id="rides-how-it-works"
      ref={containerRef}
      className="relative w-full h-[360vh] sm:h-[400vh] bg-white dark:bg-black transition-colors duration-150"
    >
      {/* Sticky Fullscreen Viewport Window */}
      <div className="sticky top-0 h-screen w-full flex items-center bg-white dark:bg-black overflow-hidden z-10 transition-colors duration-150">
        
        {/* Subtle Right-Side Vertical Scroll Progress Indicator (Exact Waymo Scrollbar Style) */}
        <div className="absolute right-3 sm:right-6 lg:right-8 top-1/2 -translate-y-1/2 z-30 flex flex-col items-center select-none">
          <div 
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const clickY = e.clientY - rect.top;
              const ratio = Math.max(0, Math.min(1, clickY / rect.height));
              const stepIdx = Math.min(3, Math.floor(ratio * 4));
              scrollToStep(stepIdx);
            }}
            className="relative w-1.5 h-44 sm:h-56 bg-neutral-200 dark:bg-neutral-800 rounded-full cursor-pointer hover:w-2 transition-all"
            title="Scroll to navigate steps"
          >
            {/* Smooth animated scrollbar thumb */}
            <motion.div
              className="absolute left-0 right-0 bg-neutral-500 dark:bg-neutral-400 rounded-full shadow-sm"
              style={{
                height: '25%',
                top: `${activeStep * 25}%`,
              }}
              transition={{ type: 'spring', stiffness: 350, damping: 30 }}
            />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-14 w-full">
          <div className="flex items-center">
            
            {/* Far Left Vertical Margin Eyebrow: 'HOW IT WORKS' - Waymo Signature Style */}
            <div className="flex flex-col items-center justify-center shrink-0 pr-3 sm:pr-8 lg:pr-14 select-none">
              <div className="[writing-mode:vertical-rl] rotate-180 text-[10px] sm:text-xs font-mono uppercase tracking-[0.28em] text-neutral-400 dark:text-neutral-500">
                HOW IT WORKS
              </div>
              <div className="w-px h-8 sm:h-16 bg-neutral-200 dark:bg-neutral-800 mt-3 sm:mt-6" />
            </div>

            {/* Main 2-Column Content Layout: Left Media Visual, Right Copy */}
            <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-10 lg:gap-16 items-center">
              
              {/* LEFT COLUMN: Visual Media (Seamlessly floats on pure background, no bounding card) */}
              <div className="md:col-span-6 flex items-center justify-center relative min-h-[260px] sm:min-h-[380px] lg:min-h-[500px] select-none">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.03 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full h-full flex items-center justify-center relative"
                  >
                    
                    {/* SLIDE 01: Framed High-Fidelity Smartphone Mockup */}
                    {current.mediaType === 'phone' && (
                      <div className="relative flex items-center justify-center max-w-[220px] sm:max-w-[290px] lg:max-w-[340px]">
                        <img
                          src={current.image}
                          alt="DigiVolt Ride Hailing App Interface"
                          className="w-full h-auto object-contain drop-shadow-2xl"
                        />
                      </div>
                    )}

                    {/* SLIDE 02: Symmetrical Front-Facing Vehicle with Floating [PICKUP Ready | Edit] Badge */}
                    {current.mediaType === 'car' && (
                      <div className="relative w-full max-w-[280px] sm:max-w-[420px] lg:max-w-[480px] flex items-center justify-center">
                        {/* Light Mode: 100% Waymo Front-Facing Vehicle on Pure White Studio Floor */}
                        <div className="relative w-full flex items-center justify-center dark:hidden">
                          <img
                            src={current.lightImage}
                            alt="Front-Facing DigiVolt Autonomous Vehicle"
                            className="w-full h-auto object-contain"
                          />
                        </div>

                        {/* Dark Mode: Studio Dark Vehicle with Glowing Beacon Halo & Speech Badge */}
                        <div className="hidden dark:flex flex-col items-center justify-center relative w-full">
                          {/* Radiant Cyan Glow Halo */}
                          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-48 sm:w-64 h-24 sm:h-32 bg-cyan-400/30 rounded-full blur-2xl pointer-events-none animate-pulse" />

                          {/* Floating Speech-Bubble Badge */}
                          <motion.div
                            animate={{ y: [0, -3, 0] }}
                            transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                            className="relative z-20 mb-3 flex items-center gap-2 bg-neutral-900/95 backdrop-blur-md px-3.5 py-1.5 rounded-2xl border border-white/20 shadow-xl"
                          >
                            <span className="bg-blue-600 text-white text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow-sm">
                              PICKUP
                            </span>
                            <span className="text-xs font-bold text-white tracking-tight">
                              Ready
                            </span>
                            <span className="w-px h-3 bg-neutral-700" />
                            <button
                              onClick={() => onDownloadApp && onDownloadApp()}
                              className="text-[10px] text-neutral-400 hover:text-white font-medium transition-colors cursor-pointer"
                            >
                              Edit
                            </button>
                          </motion.div>

                          {/* Vehicle Image */}
                          <img
                            src={current.darkImage}
                            alt="Front-Facing DigiVolt Vehicle Dark Mode"
                            className="w-full max-h-[300px] sm:max-h-[380px] object-contain rounded-2xl shadow-2xl"
                          />
                        </div>
                      </div>
                    )}

                    {/* SLIDE 03 & SLIDE 04: Circular Masked Visual Hero (Exact Waymo Circle Style) */}
                    {current.mediaType === 'circle' && (
                      <div className="relative w-[240px] h-[240px] sm:w-[350px] sm:h-[350px] lg:w-[430px] lg:h-[430px] rounded-full overflow-hidden shadow-2xl flex items-center justify-center">
                        <img
                          src={current.image}
                          alt={current.title}
                          className="w-full h-full object-cover scale-105"
                        />
                      </div>
                    )}

                  </motion.div>
                </AnimatePresence>
              </div>

              {/* RIGHT COLUMN: Typography & Step Progression (Matches Waymo layout) */}
              <div className="md:col-span-6 flex flex-col justify-center pl-0 sm:pl-4 lg:pl-8">
                
                {/* Fixed Section Eyebrow Title: 'Hail the Future' */}
                <h3 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-black dark:text-white mb-6 sm:mb-10 lg:mb-12 leading-tight">
                  Hail the Future
                </h3>

                {/* Animated Step Details */}
                <div className="relative min-h-[160px] sm:min-h-[200px]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeStep}
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -14 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="flex flex-col items-start"
                    >
                      {/* Step Number: '01', '02', '03', '04' */}
                      <div className="text-3xl sm:text-4xl lg:text-5xl font-light text-black dark:text-white font-mono tracking-tight mb-2 sm:mb-3">
                        {current.num}
                      </div>

                      {/* Step Title */}
                      <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-black dark:text-white mb-2.5 sm:mb-3.5 leading-snug">
                        {current.title}
                      </h4>

                      {/* Step Description */}
                      <p className="text-sm sm:text-base lg:text-lg text-neutral-600 dark:text-neutral-300 font-normal leading-relaxed mb-6 sm:mb-8 max-w-lg">
                        {current.description}
                      </p>

                      {/* Official App Store & Google Play Badges on Step 01 */}
                      {activeStep === 0 && (
                        <div className="flex flex-wrap items-center gap-3 pt-1">
                          {/* Apple App Store Official Badge */}
                          <a
                            href="https://apps.apple.com/us/app/digivolt/id6766707727"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2.5 px-4 py-2 sm:px-5 sm:py-2.5 bg-black text-white rounded-xl border border-neutral-800 hover:bg-neutral-900 transition-all shadow-md group cursor-pointer"
                          >
                            <svg className="w-6 h-6 fill-current text-white shrink-0" viewBox="0 0 24 24">
                              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.61-.75 1.04-1.8 0.92-2.85-.92.04-2.02.62-2.66 1.37-.56.65-1.06 1.71-.93 2.74 1.04.08 2.07-.53 2.67-1.26z" />
                            </svg>
                            <div className="flex flex-col text-left leading-tight">
                              <span className="text-[9px] text-neutral-300 font-normal">Download on the</span>
                              <span className="text-sm sm:text-base font-semibold tracking-tight text-white">App Store</span>
                            </div>
                          </a>

                          {/* Google Play Official Badge */}
                          <a
                            href="https://play.google.com/store/apps/details?id=com.digi02.digivolt"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2.5 px-4 py-2 sm:px-5 sm:py-2.5 bg-black text-white rounded-xl border border-neutral-800 hover:bg-neutral-900 transition-all shadow-md group cursor-pointer"
                          >
                            <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24">
                              <path fill="#4285F4" d="M3.6 1.8l11.4 11.4-3.5 3.5L2.3 3.1c-.4-.7-.2-1.3 1.3-1.3z" />
                              <path fill="#34A853" d="M15 13.2l3.4-3.4 3 1.7c.9.5.9 1.4 0 1.9l-3 1.7-3.4-1.9z" />
                              <path fill="#FBBC05" d="M3.6 22.2c-.4 0-.8-.3-.8-.9 0-.4.2-.8.5-1.1l8.2-8.2 3.5 3.5-9.4 6.7c-.7.5-1.5.4-2-.0z" />
                              <path fill="#EA4335" d="M15 10.8L3.6 1.8c.5-.4 1.3-.5 2 0l9.4 6.7-3.5 3.5-.0-1.2z" />
                            </svg>
                            <div className="flex flex-col text-left leading-tight">
                              <span className="text-[8px] sm:text-[9px] text-neutral-300 uppercase tracking-wider font-normal">GET IT ON</span>
                              <span className="text-sm sm:text-base font-semibold tracking-tight text-white">Google Play</span>
                            </div>
                          </a>
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Subtle Step Navigation Bar / Progress Ticks */}
                <div className="pt-6 sm:pt-8 mt-4 sm:mt-6 border-t border-neutral-200 dark:border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2 sm:gap-3">
                    {steps.map((s, idx) => (
                      <button
                        key={s.num}
                        onClick={() => scrollToStep(idx)}
                        className={`px-3 py-1.5 rounded-full text-xs font-mono transition-all duration-200 cursor-pointer ${
                          activeStep === idx
                            ? 'bg-black text-white dark:bg-white dark:text-black font-bold shadow-sm'
                            : 'bg-neutral-100 dark:bg-neutral-900 text-neutral-500 hover:text-black dark:hover:text-white border border-neutral-200 dark:border-white/5'
                        }`}
                        aria-label={`Jump to step ${s.num}`}
                      >
                        {s.num}
                      </button>
                    ))}
                  </div>

                  <span className="text-xs font-mono text-neutral-400 dark:text-neutral-500">
                    Step {activeStep + 1} of 4
                  </span>
                </div>

              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
