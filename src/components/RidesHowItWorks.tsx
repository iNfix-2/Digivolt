import React, { useRef, useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { APP_STORE_URL, PLAY_STORE_URL } from '../utils/appLinks';

interface RidesHowItWorksProps {
  onDownloadApp?: () => void;
}

export const RidesHowItWorks: React.FC<RidesHowItWorksProps> = ({ onDownloadApp: _onDownloadApp }) => {
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
      image: '/how-it-works/slide1_duo_dark.png',
    },
    {
      num: '02',
      title: 'Tell us where you want to go',
      description: "Choose your destination and we'll select the safest spots to pick you up and drop you off.",
      mediaType: 'hand_phone',
      image: '/how-it-works/slide3_hand_phone.png',
    },
    {
      num: '03',
      title: 'Hop in the vehicle',
      description: "Up to four passengers can ride at a time. We'll let you know when your car is ready. Unlock the door with the app and buckle up.",
      mediaType: 'car',
      lightImage: '/how-it-works/slide2_digivolt_box.png',
      darkImage: '/how-it-works/slide2_digivolt_box.png',
    },
    {
      num: '04',
      title: 'Enjoy the ride!',
      description: 'Hit “Start Ride” and follow along with what the DigiVolt Driver sees and the route it’s taking on the passenger screen.',
      mediaType: 'circle',
      image: '/how-it-works/slide4_passenger_digivolt.png',
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
            
            {/* Far Left Vertical Margin Eyebrow: 'HOW IT WORKS' - High-Visibility Architectural Outline Style */}
            <div className="flex flex-col items-center justify-center shrink-0 pr-2 sm:pr-6 lg:pr-10 select-none">
              <div 
                className="[writing-mode:vertical-rl] rotate-180 text-base sm:text-2xl lg:text-3xl font-semibold uppercase tracking-[0.28em] select-none text-neutral-400 dark:text-neutral-600"
              >
                HOW IT WORKS
              </div>
              <div className="w-px h-8 sm:h-16 bg-neutral-300 dark:bg-neutral-700 mt-3 sm:mt-6" />
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
                    
                    {/* SLIDE 01: Dual Smartphone Mockup (Play Store & App Store) */}
                    {current.mediaType === 'phone' && (
                      <div className="relative flex items-center justify-center max-w-[220px] sm:max-w-[270px] lg:max-w-[310px]">
                        {/* Light Mode: Sleek Studio Card */}
                        <div className="relative w-full flex items-center justify-center dark:hidden rounded-3xl overflow-hidden bg-black shadow-2xl p-2 border border-neutral-200">
                          <img
                            src={current.image}
                            alt="DigiVolt App Store and Play Store Availability"
                            className="w-full h-auto object-contain"
                          />
                        </div>

                        {/* Dark Mode: Pure Borderless Floating Duo Mockup Seamlessly on Pure Black */}
                        <div className="hidden dark:flex items-center justify-center w-full">
                          <img
                            src={current.image}
                            alt="DigiVolt App Store and Play Store Availability"
                            className="w-full h-auto object-contain"
                          />
                        </div>
                      </div>
                    )}

                    {/* SLIDE 02: DigiVolt Nammi BOX Autonomous Electric Vehicle */}
                    {current.mediaType === 'car' && (
                      <div className="relative w-full max-w-[320px] sm:max-w-[450px] lg:max-w-[520px] flex items-center justify-center">
                        {/* Light Mode: Studio Display Frame with Soft Shadow */}
                        <div className="relative w-full flex items-center justify-center dark:hidden rounded-3xl overflow-hidden bg-black shadow-2xl p-2 sm:p-3 border border-neutral-200">
                          <img
                            src={current.lightImage}
                            alt="DigiVolt Nammi BOX Autonomous Electric Vehicle"
                            className="w-full h-auto object-contain"
                          />
                        </div>

                        {/* Dark Mode: Pure Borderless Studio Vehicle Seamlessly Floating on Pure Black */}
                        <div className="hidden dark:flex flex-col items-center justify-center relative w-full">
                          {/* Subtle Emerald Ambient Backlight Halo */}
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 sm:w-80 h-32 sm:h-40 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

                          {/* Vehicle Image */}
                          <img
                            src={current.darkImage}
                            alt="DigiVolt Nammi BOX Autonomous Electric Vehicle"
                            className="relative z-10 w-full h-auto object-contain"
                          />
                        </div>
                      </div>
                    )}

                    {/* SLIDE 03: Hand Holding DigiVolt Booking Phone Mockup */}
                    {current.mediaType === 'hand_phone' && (
                      <div className="relative w-full max-w-[280px] sm:max-w-[390px] lg:max-w-[460px] flex items-center justify-center">
                        <img
                          src={current.image}
                          alt={current.title}
                          className="w-full h-auto object-contain drop-shadow-2xl"
                        />
                      </div>
                    )}

                    {/* SLIDE 04: Circular Masked Visual Hero (Exact Waymo Circle Style) */}
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
                      <p className="text-xs sm:text-lg md:text-xl text-neutral-700 dark:text-gray-300 font-normal leading-relaxed mb-6 sm:mb-8 max-w-lg">
                        {current.description}
                      </p>

                      {/* Official App Store & Google Play Badges on Step 01 */}
                      {activeStep === 0 && (
                        <div className="flex flex-wrap items-center gap-3.5 pt-2">
                          {/* Apple App Store Official Badge */}
                          <a
                            href={APP_STORE_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block hover:opacity-85 transition-opacity active:scale-95"
                          >
                            <img
                              src="/how-it-works/app_store_badge.svg"
                              alt="Download on the App Store"
                              className="h-10 sm:h-11 md:h-12 w-auto object-contain rounded-lg shadow-sm"
                            />
                          </a>

                          {/* Google Play Official Badge */}
                          <a
                            href={PLAY_STORE_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block hover:opacity-85 transition-opacity active:scale-95"
                          >
                            <img
                              src="/how-it-works/google_play_badge.svg"
                              alt="Get it on Google Play"
                              className="h-10 sm:h-11 md:h-12 w-auto object-contain rounded-lg shadow-sm"
                            />
                          </a>
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>



              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
