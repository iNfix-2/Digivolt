import React from 'react';
import { motion } from 'framer-motion';

interface AppShowcaseProps {
  onGetApp?: () => void;
}

export const AppShowcase: React.FC<AppShowcaseProps> = ({ onGetApp }) => {
  const showcaseItems = [
    {
      category: 'Real-Time Navigation',
      title: 'Live GPS Telemetry & Booking',
      desc: 'Watch your zero-emission Nammi EV navigate city streets in real time with transparent upfront pricing and optimal smart routing.',
      buttonText: 'Book a ride',
      mockupSrc: '/campaign/mockup_map_booking.jpg',
    },
    {
      category: 'Effortless Commutes',
      title: 'Onboarding & Fleet Experience',
      desc: 'Book a ride in seconds with no noise, zero stress, and complete confidence. Every trip delivers whisper-quiet sanctuary.',
      buttonText: 'Get the app',
      mockupSrc: '/campaign/mockup_onboarding.jpg',
    },
    {
      category: 'Enterprise Security',
      title: 'Secure Account Authentication',
      desc: 'Fast, secure login with one-tap Google authentication, saved destinations, and encrypted corporate and personal payment methods.',
      buttonText: 'Sign up free',
      mockupSrc: '/campaign/mockup_login.jpg',
    },
    {
      category: 'Transparent Billing',
      title: 'Instant Ride Review & Confirmation',
      desc: 'Clear flight and pickup checkpoints, guaranteed arrival windows, stored payment credentials, and transparent fare receipts.',
      buttonText: 'View ride options',
      mockupSrc: '/campaign/mockup_checkout_light.jpg',
    },
  ];

  return (
    <section id="app-showcase" className="w-full bg-white dark:bg-black text-black dark:text-white py-14 sm:py-24 lg:py-36 transition-colors duration-150">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-[#00401A] dark:text-emerald-400 leading-[1.05] mb-3 sm:mb-4">
            Designed for effortless transit.
          </h2>

          <p className="text-xs sm:text-lg md:text-xl text-neutral-700 dark:text-gray-300 font-normal leading-relaxed">
            Experience the new standard of electric ride-hailing across Nigeria. Explore real-time GPS tracking, transparent fixed fares, and instant driver verification right from your phone.
          </p>
        </div>

        {/* Showcase Items: Spacious stacked layout on mobile, alternating zigzag on desktop */}
        <div className="space-y-16 sm:space-y-20 md:space-y-24 lg:space-y-32">
          {showcaseItems.map((item, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <motion.div
                key={item.title}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.7, delay: 0.08 * idx, ease: [0.16, 1, 0.3, 1] }}
                className={`flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-10 lg:gap-16 ${
                  isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* 1. Image: Full width on mobile with generous aspect ratio, 50% on desktop */}
                <div className="w-full md:w-1/2 shrink-0">
                  <div
                    onClick={onGetApp}
                    className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[16/10] bg-neutral-100 dark:bg-neutral-900 shadow-lg border border-neutral-200/70 dark:border-neutral-800/80 cursor-pointer group select-none"
                  >
                    <img
                      src={item.mockupSrc}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* 2. Content: Spacious and legible on mobile, 50% on desktop */}
                <div className="w-full md:w-1/2 flex flex-col justify-center mt-1 sm:mt-0">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#00401A] dark:text-emerald-400 font-semibold mb-1.5 sm:mb-2 block">
                    {item.category}
                  </span>

                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-[#00401A] dark:text-emerald-400 mb-2 sm:mb-3 leading-snug sm:leading-tight">
                    {item.title}
                  </h3>

                  <p className="text-sm sm:text-base text-neutral-600 dark:text-gray-300 font-normal leading-relaxed mb-4 sm:mb-6">
                    {item.desc}
                  </p>

                  <div>
                    <button
                      onClick={onGetApp}
                      className="inline-flex items-center justify-center bg-black text-white dark:bg-white dark:text-black hover:opacity-90 text-xs sm:text-sm font-semibold px-6 py-2.5 sm:px-7 sm:py-3 rounded-full transition-all shadow-md cursor-pointer whitespace-nowrap"
                    >
                      {item.buttonText}
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
