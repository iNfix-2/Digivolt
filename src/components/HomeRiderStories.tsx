import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export const HomeRiderStories: React.FC = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const stories = [
    {
      name: 'Amina',
      location: 'Kaduna Central, Nigeria',
      quote:
        'The whisper-quiet electric cabin lets me work and relax during my daily commute along Ahmadu Bello Way without any engine fumes or noise. Having a courteous, vetted chauffeur provides total peace of mind.',
      tag: 'DAILY COMMUTER',
    },
    {
      name: 'Ibrahim',
      location: 'Barnawa, Kaduna',
      quote:
        'Booking DigiVolt for evening trips in Barnawa has completely changed how I move around Kaduna. The EV is pristine, zero emissions, and the drivers are certified professionals.',
      tag: 'ECO COMMUTER',
    },
    {
      name: 'Zainab',
      location: 'Millennium City, Kaduna',
      quote:
        'Knowing every ride produces zero tailpipe emissions while delivering 5-star safety is incredible. DigiVolt is setting a brand new standard for clean, reliable transportation in Kaduna.',
      tag: 'SUSTAINABILITY ADVOCATE',
    },
    {
      name: 'Farouk',
      location: 'Independence Way, Kaduna',
      quote:
        'Zero noise pollution, smooth electric acceleration, and vetted drivers who prioritize safety and punctuality. By far the cleanest and most comfortable ride in Kaduna.',
      tag: 'BUSINESS EXECUTIVE',
    },
  ];

  const activeIndex = ((page % stories.length) + stories.length) % stories.length;
  const currentStory = stories[activeIndex];

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -80 : 80,
      opacity: 0,
    }),
  };

  return (
    <section id="why-they-ride-with-digivolt" className="w-full bg-white dark:bg-black text-black dark:text-white py-20 sm:py-32 transition-colors duration-150 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Title without the 'Rider Stories' tag */}
        <div className="max-w-3xl mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-black dark:text-white leading-tight">
            Why they ride with <span className="text-black dark:text-white">DigiVolt</span>
          </h2>
        </div>

        {/* Swipable Featured Story Display Card */}
        <div className="relative bg-neutral-50 dark:bg-neutral-950 rounded-3xl sm:rounded-[36px] p-6 sm:p-14 lg:p-16 shadow-lg overflow-hidden select-none">
          <Quote className="w-10 h-10 sm:w-14 sm:h-14 text-neutral-300 dark:text-neutral-700 mb-4 sm:mb-6" />

          {/* Swipeable Track */}
          <div className="overflow-hidden relative min-h-[220px] sm:min-h-[190px]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={page}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.25 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.4}
                onDragEnd={(_, { offset, velocity }) => {
                  const swipe = Math.abs(offset.x) * velocity.x;
                  if (swipe < -400 || offset.x < -50) {
                    paginate(1);
                  } else if (swipe > 400 || offset.x > 50) {
                    paginate(-1);
                  }
                }}
                className="cursor-grab active:cursor-grabbing max-w-4xl"
              >
                <p className="text-xl sm:text-2xl lg:text-3xl font-light text-black dark:text-white tracking-tight leading-relaxed mb-6 sm:mb-8">
                  “{currentStory.quote}”
                </p>

                <div>
                  <h4 className="text-base sm:text-lg font-bold text-black dark:text-white tracking-tight">
                    {currentStory.name}
                  </h4>
                  <div className="text-sm text-neutral-600 dark:text-gray-400 mt-1">
                    <span>{currentStory.location}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bottom Pagination & Navigation Controls */}
          <div className="flex items-center justify-between pt-8 sm:pt-10 mt-6">
            {/* Interactive Dot Indicators */}
            <div className="flex items-center gap-2">
              {stories.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    const diff = idx - activeIndex;
                    if (diff !== 0) paginate(diff);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    activeIndex === idx
                      ? 'w-7 bg-black dark:bg-white'
                      : 'w-2 bg-neutral-300 dark:bg-neutral-700 hover:bg-neutral-400 dark:hover:bg-neutral-500'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Next / Prev Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => paginate(-1)}
                className="w-10 h-10 rounded-full bg-white dark:bg-neutral-900 flex items-center justify-center hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer text-black dark:text-white shadow-sm"
                aria-label="Previous rider story"
              >
                <ChevronLeft className="w-4 h-4 text-black dark:text-white" />
              </button>
              <button
                onClick={() => paginate(1)}
                className="w-10 h-10 rounded-full bg-white dark:bg-neutral-900 flex items-center justify-center hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer text-black dark:text-white shadow-sm"
                aria-label="Next rider story"
              >
                <ChevronRight className="w-4 h-4 text-black dark:text-white" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
