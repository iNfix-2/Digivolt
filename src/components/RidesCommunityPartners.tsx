import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export const RidesCommunityPartners: React.FC = () => {
  return (
    <section id="rides-community-partners" className="w-full bg-white dark:bg-black py-28 sm:py-36 transition-colors duration-150">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        <div className="bg-[#F8F9FA] dark:bg-black rounded-3xl sm:rounded-[36px] p-8 sm:p-14 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7">
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tighter text-black dark:text-white leading-tight mb-6">
                Thank you to our community partners
              </h2>

              <p className="text-lg text-neutral-600 dark:text-gray-300 font-light leading-relaxed mb-8 max-w-xl">
                We work closely with local disability advocates, transit agencies, environmental non-profits, first responders, and civic leaders across every city where we operate.
              </p>

              <a
                href="#company"
                className="btn-pill-primary inline-flex items-center gap-2 group"
              >
                <span>Learn more about community partnerships</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Graphic Illustration */}
            <div className="lg:col-span-5 flex justify-center">
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="w-full max-w-sm rounded-3xl overflow-hidden shadow-md bg-white dark:bg-black p-6"
              >
                <img
                  src="https://lh3.googleusercontent.com/5Hb_yHKNX0Tp1JMJBD4mhM1hxSciDHd81-Giss7HYQxYAJ5H7DpOfcYCKLuY4NvI_nW5wv86zEY3GmNutLYAIMlmN45kA_nvm2E=e365-s420"
                  alt="DigiVolt community collaboration"
                  className="w-full h-auto rounded-2xl object-cover mb-4"
                />
                <div className="flex items-center justify-between text-xs font-mono text-neutral-600 dark:text-gray-300 pt-2">
                  <span>500+ COMMUNITY ORGANIZATIONS</span>
                  <span className="text-black dark:text-white font-semibold">CO-DESIGNED</span>
                </div>
              </motion.div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
