import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ChevronLeft, ChevronRight, Play } from 'lucide-react';

export interface ScenarioItem {
  city: string;
  title: string;
  image: string;
  tag: string;
  description: string;
}

interface HomeSafetyCompareProps {
  onSelectScenario: (scenario: ScenarioItem) => void;
}

export const HomeSafetyCompare: React.FC<HomeSafetyCompareProps> = ({ onSelectScenario }) => {
  const [[page, direction], setPage] = useState([0, 0]);

  const scenarios: ScenarioItem[] = [
    {
      city: 'Kaduna Central, Nigeria',
      title: 'Proactive Collision Avoidance',
      image: '/scenarios/kaduna_scenario_1.jpg',
      tag: 'AI DRIVER TELEMETRY',
      description: 'Active multi-lane lidar and vision perception proactively identifying intersecting traffic, crosswalks, and pedestrians along Kaduna Central corridors to prevent collisions before they can develop.',
    },
    {
      city: 'Barnawa, Kaduna',
      title: 'Nighttime Precision Telemetry',
      image: '/scenarios/kaduna_scenario_2.jpg',
      tag: 'NIGHT VISION PERCEPTION',
      description: 'Multi-spectral thermal sensing and illuminated trajectory planning enabling seamless navigation through Barnawa commercial districts during peak nighttime hours.',
    },
    {
      city: 'Millennium City, Kaduna',
      title: 'Emergency Vehicle Priority',
      image: '/scenarios/kaduna_scenario_3.jpg',
      tag: 'EMERGENCY YIELD PROTOCOL',
      description: 'Long-range acoustic and radar sensing detects approaching emergency response vehicles in Millennium City, executing autonomous smooth lane yielding to grant immediate right-of-way.',
    },
    {
      city: 'Independence Way, Kaduna',
      title: 'All-Weather Traction Control',
      image: '/scenarios/kaduna_scenario_4.jpg',
      tag: 'ALL-WEATHER TRACTION',
      description: 'Continuous millisecond tire friction monitoring and active torque vectoring maintain 99%+ surface grip across rain-slicked asphalt and sudden tropical downpours on Independence Way.',
    },
  ];

  const activeIndex = ((page % scenarios.length) + scenarios.length) % scenarios.length;
  const currentScenario = scenarios[activeIndex];

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const goToIndex = (newIndex: number) => {
    const diff = newIndex - activeIndex;
    if (diff !== 0) {
      setPage([page + diff, diff > 0 ? 1 : -1]);
    }
  };

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 240 : -240,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      zIndex: 0,
      x: dir < 0 ? 240 : -240,
      opacity: 0,
    }),
  };

  const handleDragEnd = (_: any, info: { offset: { x: number }; velocity: { x: number } }) => {
    const swipePower = Math.abs(info.offset.x) * info.velocity.x;
    if (swipePower < -8000 || info.offset.x < -45) {
      paginate(1);
    } else if (swipePower > 8000 || info.offset.x > 45) {
      paginate(-1);
    }
  };

  return (
    <section id="info" className="w-full bg-white dark:bg-black text-black dark:text-white py-16 sm:py-32 overflow-hidden transition-colors duration-150">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Top Stat Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center pb-14 sm:pb-24">
          
          {/* Left Column: 0g Emissions & Vetted Drivers */}
          <div className="lg:col-span-5">
            <div className="text-6xl sm:text-8xl lg:text-9xl font-black tracking-tighter text-black dark:text-white leading-none mb-4">
              0g
            </div>
            <h3 className="text-xl sm:text-3xl font-bold tracking-tight text-black dark:text-white mb-4">
              tailpipe emissions per mile — 100% vetted drivers*
            </h3>
            <a
              href="#safety"
              className="inline-flex items-center gap-1 text-sm font-semibold text-black dark:text-white hover:opacity-80 transition-opacity"
            >
              <span>Explore our safety standards</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <p className="text-[11px] text-neutral-500 dark:text-gray-400 font-light mt-6">
              *Compared to conventional internal combustion ride-hailing vehicles and standard unvetted gig platforms in Kaduna, Nigeria.
            </p>
          </div>

          {/* Right Column: Pill/Oval Framed Cockpit View */}
          <div className="lg:col-span-7 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-xl rounded-[32px] sm:rounded-full overflow-hidden aspect-[16/9] shadow-2xl bg-neutral-100 dark:bg-neutral-900">
              <img
                src="/scenarios/kaduna_ev_cockpit.jpg"
                alt="DigiVolt 100% electric premium vehicle cockpit navigating Kaduna, Nigeria"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

        </div>

        {/* Spacing without border line */}
        <div className="my-12 sm:my-16" />

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 gap-4">
          <div className="max-w-2xl">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-black dark:text-white">
              See how DigiVolt delivers safer, smarter journeys
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mt-2 font-normal">
              Autonomous telemetry, thermal vision, and instant priority dispatch responding in real time.
            </p>
          </div>

          {/* Top Arrows for Desktop */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={() => paginate(-1)}
              className="w-10 h-10 rounded-full bg-neutral-100 dark:bg-neutral-900 hover:bg-neutral-200 dark:hover:bg-neutral-800 flex items-center justify-center transition-all active:scale-95 text-black dark:text-white cursor-pointer shadow-sm"
              aria-label="Previous scenario"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => paginate(1)}
              className="w-10 h-10 rounded-full bg-neutral-100 dark:bg-neutral-900 hover:bg-neutral-200 dark:hover:bg-neutral-800 flex items-center justify-center transition-all active:scale-95 text-black dark:text-white cursor-pointer shadow-sm"
              aria-label="Next scenario"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Interactive Slideshow Stage */}
        <div className="relative w-full">
          <div className="overflow-hidden rounded-3xl bg-neutral-100 dark:bg-neutral-900 shadow-2xl">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={page}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 320, damping: 32 },
                  opacity: { duration: 0.22 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={handleDragEnd}
                className="cursor-grab active:cursor-grabbing w-full select-none"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
                  
                  {/* Visual Screen with Play Button */}
                  <div
                    onClick={() => onSelectScenario(currentScenario)}
                    className="lg:col-span-7 relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto min-h-[260px] sm:min-h-[340px] lg:min-h-[420px] bg-neutral-950 overflow-hidden cursor-pointer group"
                  >
                    <img
                      src={currentScenario.image}
                      alt={`${currentScenario.title} - ${currentScenario.city}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="eager"
                    />

                    {/* Center Circular Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-black/75 backdrop-blur-md shadow-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-white text-white ml-0.5" />
                      </div>
                    </div>
                  </div>

                  {/* Slide Information Panel */}
                  <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-neutral-50 dark:bg-neutral-950">
                    <div>
                      <span className="text-xs text-neutral-500 dark:text-neutral-400 block mb-2 font-medium">
                        {currentScenario.city}
                      </span>

                      <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold text-black dark:text-white tracking-tight mb-3">
                        {currentScenario.title}
                      </h4>

                      <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 font-normal leading-relaxed">
                        {currentScenario.description}
                      </p>
                    </div>

                    {/* CTA Button within slide */}
                    <div className="pt-6">
                      <button
                        type="button"
                        onClick={() => onSelectScenario(currentScenario)}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black text-white dark:bg-white dark:text-black text-xs font-semibold hover:opacity-90 transition-all shadow-md cursor-pointer active:scale-95"
                      >
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>Watch Telemetry Simulation</span>
                      </button>
                    </div>
                  </div>

                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bottom Controls: Prev/Next for Mobile + Dot Indicators */}
          <div className="flex items-center justify-between mt-5 px-1">
            <div className="flex items-center gap-2">
              <button
                onClick={() => paginate(-1)}
                className="w-10 h-10 rounded-full bg-neutral-100 dark:bg-neutral-900 hover:bg-neutral-200 dark:hover:bg-neutral-800 text-black dark:text-white flex items-center justify-center shadow-md transition-all active:scale-95 cursor-pointer"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => paginate(1)}
                className="w-10 h-10 rounded-full bg-neutral-100 dark:bg-neutral-900 hover:bg-neutral-200 dark:hover:bg-neutral-800 text-black dark:text-white flex items-center justify-center shadow-md transition-all active:scale-95 cursor-pointer"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Dot / Pill Indicators */}
            <div className="flex items-center gap-1.5">
              {scenarios.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => goToIndex(idx)}
                  className={`transition-all duration-300 rounded-full cursor-pointer ${
                    activeIndex === idx
                      ? 'w-7 h-2.5 bg-black dark:bg-white shadow-sm'
                      : 'w-2.5 h-2.5 bg-neutral-300 dark:bg-neutral-700 hover:bg-neutral-400 dark:hover:bg-neutral-600'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Thumbnail Quick Selector (Desktop & Tablet) */}
          <div className="hidden sm:grid sm:grid-cols-4 gap-3 mt-8">
            {scenarios.map((sc, idx) => {
              const isSelected = activeIndex === idx;
              return (
                <button
                  key={sc.title + idx}
                  type="button"
                  onClick={() => goToIndex(idx)}
                  className={`p-3.5 rounded-2xl text-left transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-neutral-100 dark:bg-neutral-900 shadow-lg scale-[1.02]'
                      : 'bg-neutral-50 dark:bg-neutral-950/60 hover:bg-neutral-100 dark:hover:bg-neutral-900/60 opacity-75 hover:opacity-100'
                  }`}
                >
                  <span className="text-[11px] text-neutral-500 dark:text-neutral-400 block mb-1">
                    {sc.city.split(',')[0]}
                  </span>
                  <h5 className="text-xs font-bold text-black dark:text-white tracking-tight line-clamp-1">
                    {sc.title}
                  </h5>
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
