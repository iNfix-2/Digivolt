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
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-black dark:text-white leading-[1.05] mb-3 sm:mb-4">
            Designed for <span className="text-black dark:text-white">effortless transit</span>.
          </h2>

          <p className="text-xs sm:text-lg md:text-xl text-neutral-700 dark:text-gray-300 font-normal leading-relaxed">
            Experience the new standard of electric ride-hailing across Nigeria. Explore real-time GPS tracking, transparent fixed fares, and instant driver verification right from your phone.
          </p>
        </div>

        {/* Alternating Zigzag Showcase (Structured across both mobile and larger screens) */}
        <div className="space-y-8 sm:space-y-16 lg:space-y-24">
          {showcaseItems.map((item, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <motion.div
                key={item.title}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.7, delay: 0.08 * idx, ease: [0.16, 1, 0.3, 1] }}
                className={`flex items-center gap-3 sm:gap-8 lg:gap-14 ${
                  isEven ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* 1. Image Half */}
                <div className="w-1/2 shrink-0">
                  <div
                    onClick={onGetApp}
                    className="relative rounded-xl sm:rounded-3xl overflow-hidden aspect-[4/3] sm:aspect-[16/10] bg-neutral-100 dark:bg-neutral-900 shadow-md border border-neutral-200/70 dark:border-neutral-800/80 cursor-pointer group select-none"
                  >
                    <img
                      src={item.mockupSrc}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* 2. Content Half */}
                <div className="w-1/2 flex flex-col justify-center">
                  <span className="text-[9px] sm:text-xs font-mono uppercase tracking-wider text-emerald-700 dark:text-emerald-400 font-semibold mb-0.5 sm:mb-1.5 block">
                    {item.category}
                  </span>

                  <h3 className="text-xs sm:text-2xl lg:text-3xl font-bold tracking-tight text-black dark:text-white mb-1 sm:mb-2.5 leading-snug sm:leading-tight">
                    {item.title}
                  </h3>

                  <p className="text-[10px] sm:text-sm lg:text-base text-neutral-600 dark:text-gray-300 font-normal leading-snug sm:leading-relaxed mb-2 sm:mb-4 line-clamp-3 sm:line-clamp-none">
                    {item.desc}
                  </p>

                  <div>
                    <button
                      onClick={onGetApp}
                      className="inline-flex items-center justify-center bg-emerald-700 hover:bg-emerald-600 dark:bg-emerald-600 dark:hover:bg-emerald-500 text-white text-[10px] sm:text-xs lg:text-sm font-semibold px-2.5 py-1 sm:px-5 sm:py-2 rounded-full transition-all shadow-sm hover:shadow cursor-pointer whitespace-nowrap"
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
