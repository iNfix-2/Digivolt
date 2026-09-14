import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote } from 'lucide-react';

export const HomeRiderStories: React.FC = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const stories = [
    {
      name: 'Amina',
      location: 'Kaduna Central, Nigeria',
      image: '/riders/amina.jpg',
      quote:
        'The whisper-quiet electric cabin lets me work and relax during my daily commute along Ahmadu Bello Way without any engine fumes or noise. Having a courteous, vetted driver provides total peace of mind.',
      tag: 'DAILY COMMUTER',
    },
    {
      name: 'Ibrahim',
      location: 'Barnawa, Kaduna',
      image: '/riders/ibrahim.jpg',
      quote:
        'Booking DigiVolt for evening trips in Barnawa has completely changed how I move around Kaduna. The EV is pristine, zero emissions, and the drivers are certified professionals.',
      tag: 'ECO COMMUTER',
    },
    {
      name: 'Zainab',
      location: 'Millennium City, Kaduna',
      image: '/riders/zainab.jpg',
      quote:
        'Knowing every ride produces zero tailpipe emissions while delivering 5-star safety is incredible. DigiVolt is setting a brand new standard for clean, reliable transportation in Kaduna.',
      tag: 'SUSTAINABILITY ADVOCATE',
    },
    {
      name: 'Farouk',
      location: 'Independence Way, Kaduna',
      image: '/riders/farouk.jpg',
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

                {/* Rider Info with Portrait Avatar */}
                <div className="flex items-center gap-3.5 sm:gap-4">
                  <img
                    src={currentStory.image}
                    alt={currentStory.name}
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-neutral-200 dark:border-white/20 shadow-sm shrink-0"
                  />
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-black dark:text-white tracking-tight">
                      {currentStory.name}
                    </h4>
                    <div className="text-xs sm:text-sm text-neutral-600 dark:text-gray-400 mt-0.5">
                      <span>{currentStory.location}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bottom Waymo-Style Circular Avatars Switcher & Navigation Controls */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-8 sm:pt-10 mt-6 border-t border-neutral-200/80 dark:border-white/10">
            {/* Interactive Rider Avatars (Waymo Style) */}
            <div className="flex items-center gap-3 sm:gap-4">
              {stories.map((story, idx) => {
                const isActive = activeIndex === idx;
                return (
                  <button
                    key={story.name}
                    onClick={() => {
                      const diff = idx - activeIndex;
                      if (diff !== 0) paginate(diff);
                    }}
                    className={`relative rounded-full transition-all duration-300 cursor-pointer p-0.5 ${
                      isActive
                        ? 'ring-2 sm:ring-[3px] ring-black dark:ring-white ring-offset-2 dark:ring-offset-neutral-950 scale-105 sm:scale-110 opacity-100 shadow-md'
                        : 'opacity-50 hover:opacity-90 scale-95 hover:scale-100 border border-neutral-300 dark:border-neutral-700'
                    }`}
                    aria-label={`View testimonial from ${story.name}`}
                    title={`${story.name} (${story.location})`}
                  >
                    <img
                      src={story.image}
                      alt={story.name}
                      className="w-11 h-11 sm:w-13 sm:h-13 rounded-full object-cover"
                    />
                  </button>
                );
              })}
            </div>

            {/* Pagination Controls: Dots */}
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
          </div>

        </div>

      </div>
    </section>
  );
};
