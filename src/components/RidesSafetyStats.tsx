import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export const RidesSafetyStats: React.FC = () => {
  return (
    <section id="features" className="w-full bg-white dark:bg-black text-black dark:text-white py-32 lg:py-44 relative overflow-hidden transition-colors duration-150">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-4xl mb-24">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-black dark:text-white leading-tight">
            Engineered for <span className="text-black dark:text-white">zero emissions</span> and <span className="text-black dark:text-white">certified driver excellence</span> on every city mile
          </h2>
        </div>

        {/* Hero Stat: 100M+ Clean Electric Miles */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="py-16 mb-24"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-baseline">
            <div className="lg:col-span-7">
              <div className="text-7xl sm:text-8xl md:text-9xl font-black tracking-tighter text-black dark:text-white leading-none mb-3">
                100<span className="text-3xl sm:text-5xl font-light text-black dark:text-white ml-2">million+ clean miles</span>
              </div>
              <div className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
                <span>Over 45,000 metric tons of CO₂ prevented from polluting urban skies</span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <p className="text-lg sm:text-xl text-neutral-700 dark:text-gray-300 font-normal leading-relaxed">
                Our 100% all-electric vehicle fleet has completed over 100 million zero-emission miles. Paired with rigorously vetted professional drivers, DigiVolt offers unmatched safety and environmental responsibility.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Two Supporting Safety Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="p-8 sm:p-10 rounded-3xl bg-neutral-50 dark:bg-neutral-950 shadow-lg flex flex-col justify-between hover:shadow-xl transition-all"
          >
            <div>
              <h3 className="text-2xl font-bold tracking-tight text-black dark:text-white mb-4">
                Rigorously Vetted Drivers
              </h3>
              <p className="text-base text-neutral-700 dark:text-gray-300 font-normal leading-relaxed">
                Every driver undergoes comprehensive criminal and background screening, continuous DMV monitoring, in-person hospitality and safety training, and adherence to zero-tolerance policies.
              </p>
            </div>
            <div className="pt-8">
              <a
                href="#safety"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-black dark:text-white hover:opacity-80 transition-opacity"
              >
                <span>Read our safety vetting standards</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="p-8 sm:p-10 rounded-3xl bg-neutral-50 dark:bg-neutral-950 shadow-lg flex flex-col justify-between hover:shadow-xl transition-all"
          >
            <div>
              <h3 className="text-2xl font-bold tracking-tight text-black dark:text-white mb-4">
                5-Star EV Safety Architecture
              </h3>
              <p className="text-base text-neutral-700 dark:text-gray-300 font-normal leading-relaxed">
                Our modern electric vehicles feature low centers of gravity for roll-over resistance, reinforced passenger safety cells, advanced driver-assistance systems (ADAS), and live telemetry.
              </p>
            </div>
            <div className="pt-8">
              <a
                href="#safety"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-black dark:text-white hover:opacity-80 transition-opacity"
              >
                <span>Learn about our safety platform</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
