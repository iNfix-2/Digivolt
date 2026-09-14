import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AppShowcaseProps {
  onGetApp?: () => void;
}

export const AppShowcase: React.FC<AppShowcaseProps> = ({ onGetApp }) => {
  const [activeStep, setActiveStep] = useState(0);

  const mockups = [
    {
      title: 'Live GPS Telemetry & Booking',
      desc: 'Watch your zero-emission Nammi EV navigate city streets in real time with transparent upfront pricing and optimal smart routing.',
      mockupSrc: '/campaign/mockup_map_booking.jpg',
    },
    {
      title: 'Onboarding & Fleet Experience',
      desc: 'Book a ride in seconds with no noise, zero stress, and complete confidence. Every trip delivers whisper-quiet sanctuary.',
      mockupSrc: '/campaign/mockup_onboarding.jpg',
    },
    {
      title: 'Secure Account Authentication',
      desc: 'Fast, secure login with one-tap Google authentication, saved destinations, and encrypted corporate and personal payment methods.',
      mockupSrc: '/campaign/mockup_login.jpg',
    },
    {
      title: 'Instant Ride Review & Confirmation',
      desc: 'Clear flight and pickup checkpoints, guaranteed arrival windows, stored payment credentials, and free cancellation policies.',
      mockupSrc: '/campaign/mockup_checkout_light.jpg',
    },
  ];

  const currentMockup = mockups[activeStep];

  return (
    <section id="app-showcase" className="w-full bg-white dark:bg-black text-black dark:text-white py-28 sm:py-36 transition-colors duration-150">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-black dark:text-white leading-[1.05] mb-4">
            Designed for <span className="text-black dark:text-white">effortless transit</span>.
          </h2>

          <p className="text-xs sm:text-lg md:text-xl text-neutral-700 dark:text-gray-300 font-normal leading-relaxed">
            Experience the new standard of electric ride-hailing across Nigeria. Explore real-time GPS tracking, transparent fixed fares, and instant driver verification right from your phone.
          </p>
        </div>

        {/* Grid: Interactive Controls & Mockup Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Screen Selector Tabs */}
          <div className="lg:col-span-5 space-y-4">
            {mockups.map((m, idx) => {
              const isSelected = activeStep === idx;
              return (
                <div
                  key={m.title}
                  onClick={() => setActiveStep(idx)}
                  className={`p-5 sm:p-6 rounded-2xl transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-neutral-100 dark:bg-neutral-900 shadow-lg scale-[1.01]'
                      : 'bg-white dark:bg-black hover:bg-neutral-50 dark:hover:bg-neutral-950'
                  }`}
                >
                  <h4 className="text-base font-bold text-black dark:text-white tracking-tight">
                    {m.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-gray-400 mt-1 font-normal leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              );
            })}

            <div className="pt-4">
              <button
                onClick={onGetApp}
                className="w-full sm:w-auto bg-black text-white dark:bg-white dark:text-black font-semibold px-8 py-3.5 rounded-full flex items-center justify-center transition-all hover:opacity-90 shadow-lg cursor-pointer text-sm"
              >
                Get the DigiVolt App
              </button>
            </div>
          </div>

          {/* Right Column: Perspective Product Mockup Stage */}
          <div className="lg:col-span-7">
            <motion.div
              layout
              className="relative rounded-3xl overflow-hidden aspect-[16/9] shadow-2xl bg-neutral-950"
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentMockup.mockupSrc}
                  src={currentMockup.mockupSrc}
                  alt={currentMockup.title}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </AnimatePresence>

              {/* Bottom Subtle Overlay */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 flex items-end justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    {currentMockup.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};
