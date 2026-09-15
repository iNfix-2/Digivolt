import React from 'react';
import { motion } from 'framer-motion';

export const HomeWhyHere: React.FC = () => {
  const stats = [
    {
      num: '1.5B Tons',
      desc: 'of toxic CO₂ pumped into urban atmospheres every year by conventional fossil fuel vehicles.',
    },
    {
      num: '0g Smog',
      desc: 'tailpipe emissions across every single mile completed by our 100% all-electric fleet.',
    },
    {
      num: '100% Vetted',
      desc: 'comprehensive background screening, safety certs, and active driver assistance telemetry.',
    },
  ];

  return (
    <section id="why-were-here" className="w-full bg-white dark:bg-black text-black dark:text-white py-14 sm:py-24 lg:py-36 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        
        <div className="max-w-4xl mb-8 sm:mb-14 lg:mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tighter text-black dark:text-white leading-tight mb-4 sm:mb-6">
            Why we’re here
          </h2>
          <p className="text-xs sm:text-lg md:text-xl text-neutral-700 dark:text-neutral-300 font-normal leading-relaxed">
            Urban transit faces two urgent crises: suffocating emissions polluting our cities, and inconsistent rider safety from unvetted gig services. DigiVolt is redefining urban mobility by merging 100% all-electric vehicles with rigorously screened, professional drivers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {stats.map((s, idx) => {
            return (
              <motion.div
                key={s.num}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.8, delay: 0.1 * idx, ease: [0.16, 1, 0.3, 1] }}
                className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-neutral-50 dark:bg-neutral-950 flex flex-col justify-between transition-all hover:shadow-lg group"
              >
                <div>
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tighter text-black dark:text-white mb-2 sm:mb-3">
                    {s.num}
                  </div>
                  <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 font-light leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
