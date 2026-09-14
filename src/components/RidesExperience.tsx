import React from 'react';
import { motion } from 'framer-motion';

export const RidesExperience: React.FC = () => {
  const features = [
    {
      title: 'Meticulously Cleaned Sanctuary',
      description: 'Our fully-electric fleet features spacious, spotless interiors sanitized daily, providing total comfort whatever the weather outside.',
      image: '/campaign/rainy_commute.jpg',
    },
    {
      title: 'Vetted Driver & Luggage Care',
      description: 'Instant driver identity verification, luggage assistance, and digital security PINs ensure absolute confidence on every journey.',
      image: '/campaign/airport_trunk.jpg',
    },
    {
      title: 'Dynamic Smart Routing',
      description: 'Real-time telemetry and smart dispatch optimize your route through city traffic with upfront pricing and zero delay.',
      image: '/campaign/mockup_map_booking.jpg',
    },
    {
      title: 'Cabin Climate & Connectivity',
      description: 'Spacious climate-controlled cabin with dedicated USB power ports to keep your devices charged while you commute in peace.',
      image: '/campaign/creatives_commute.jpg',
    },
    {
      title: 'Safe Night Commute & Live Shield',
      description: 'Reliable evening transit with live GPS trip sharing, emergency response, and warm interior ambient lighting across the city.',
      image: '/campaign/lekki_nightlife.jpg',
    },
    {
      title: '100% Electric & Solar Charging',
      description: 'Every mile is powered by clean renewable energy with zero tailpipe smog. High-speed rapid charging guarantees fleet readiness.',
      image: '/campaign/charging_hub.jpg',
    },
  ];

  return (
    <section id="rides-an-experience-second-to-none" className="w-full bg-white dark:bg-black text-black dark:text-white py-32 lg:py-44 transition-colors duration-150">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section 1: Reclaim Your Commute Hero Banner */}
        <div className="mb-32">
          <div className="max-w-4xl mb-14">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter text-black dark:text-white leading-tight mb-6">
              Reclaim your <span className="text-black dark:text-white">commute</span>.
            </h2>
            <p className="text-xs sm:text-lg md:text-xl text-neutral-700 dark:text-gray-300 font-normal leading-relaxed">
              DigiVolt gives you a peaceful private sanctuary to focus on more meaningful things. 
              Rely on a consistent, whisper-quiet electric experience with professional drivers that eliminate the stresses of driving.
            </p>
          </div>

          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-3xl sm:rounded-[36px] overflow-hidden aspect-[16/9] shadow-xl bg-neutral-100 dark:bg-neutral-900"
          >
            <img
              src="/campaign/peaceful_sanctuary.jpg"
              alt="Passenger enjoying a peaceful private sanctuary in DigiVolt EV cabin with laptop and coffee"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>
        </div>

        {/* Section 2: A Better Way to Get There Grid */}
        <div id="rides-a-better-way-to-get-there">
          <div className="max-w-3xl mb-16">
            <h3 className="text-4xl sm:text-5xl font-bold tracking-tighter text-black dark:text-white leading-tight mb-4">
              A better way to get there
            </h3>
            <p className="text-xs sm:text-lg md:text-xl text-neutral-600 dark:text-gray-400 font-normal leading-relaxed">
              Elevate the way you move through life with zero emissions, vetted safety, and serene cabin comfort.
            </p>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {features.map((feature, idx) => {
              return (
                <motion.div
                  key={feature.title}
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.8, delay: 0.08 * idx, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-neutral-50 dark:bg-neutral-950 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group"
                >
                  <div className="p-8">
                    <h4 className="text-xl font-bold tracking-tight text-black dark:text-white mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-neutral-700 dark:text-gray-300 font-normal leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  <div className="aspect-[16/10] bg-neutral-100 dark:bg-neutral-900 overflow-hidden">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Full-width Video Feature Showcase */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-3xl sm:rounded-[36px] overflow-hidden aspect-[16/9] shadow-2xl bg-neutral-100 dark:bg-neutral-900 relative"
          >
            <img
              src="/campaign/inside_youth.jpg"
              alt="Passenger relaxing in whisper-quiet DigiVolt Nammi EV cabin"
              className="w-full h-full object-cover"
              loading="lazy"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex items-end p-8 sm:p-14">
              <div className="max-w-xl text-white">
                <p className="text-2xl sm:text-3xl font-light tracking-tight text-white">
                  Zero engine rattle. Zero tailpipe emissions. Pure quiet comfort to focus on what matters most to you.
                </p>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
