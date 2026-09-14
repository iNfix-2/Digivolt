import React from 'react';
import { motion } from 'framer-motion';
import { MediaPlaceholder } from './MediaPlaceholder';
import { ArrowRight, ShieldCheck, Sparkles, Sliders } from 'lucide-react';

interface AlternatingGridProps {
  onExploreSafety?: () => void;
  onExploreCabin?: () => void;
  onExploreSensors?: () => void;
}

export const AlternatingGrid: React.FC<AlternatingGridProps> = ({
  onExploreSafety,
  onExploreCabin,
  onExploreSensors,
}) => {
  // Motion transition profile matching DigiVolt's smooth spring/cubic-bezier physics
  const springVariant = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section id="digivolt-one" className="w-full bg-white relative overflow-hidden">
      {/* Container with spacious layout and responsive gutters */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* ROW 1: Image Left, Text Right */}
        <div className="py-28 sm:py-32 lg:py-40">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            {/* Left Media (MediaPlaceholder) */}
            <motion.div
              variants={springVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="order-1"
            >
              <MediaPlaceholder
                type="image"
                src="https://placeholder.image.jpg"
                alt="DigiVolt electric vehicle on city streets"
                aspectRatio="aspect-[4/3] sm:aspect-[16/11]"
                variant="vehicle"
                badgeText="DigiVolt EV Fleet"
              />
            </motion.div>

            {/* Right Text Block */}
            <motion.div
              variants={springVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="order-2 flex flex-col items-start"
            >
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-black dark:text-white mb-4 font-semibold">
                <ShieldCheck className="w-4 h-4 text-black dark:text-white" />
                <span>Vetted Driver Standards</span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-black leading-[1.05] mb-6">
                Professional drivers. 5-star standard every time.
              </h2>

              <p className="text-lg sm:text-xl text-gray-600 font-light leading-relaxed mb-8 max-w-xl">
                Every DigiVolt driver undergoes comprehensive background checks, defensive-driving certification, and continuous safety telemetry scoring to guarantee a smooth, safe, and dependable journey.
              </p>

              <button
                onClick={onExploreSafety}
                className="btn-pill-evergreen group flex items-center gap-2"
              >
                <span>Learn about our safety standards</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>
          </div>
        </div>

        {/* ROW 2: Text Left, Image Right */}
        <div className="py-28 sm:py-32 lg:py-40">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            {/* Left Text Block */}
            <motion.div
              variants={springVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="order-2 lg:order-1 flex flex-col items-start"
            >
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-black dark:text-white mb-4 font-semibold">
                <Sparkles className="w-4 h-4 text-black dark:text-white" />
                <span>The Cabin Experience</span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-black leading-[1.05] mb-6">
                Your quiet sanctuary in motion.
              </h2>

              <p className="text-lg sm:text-xl text-gray-600 font-light leading-relaxed mb-8 max-w-xl">
                No engine vibration, no exhaust fumes, no unexpected braking. 
                Custom-set your cabin climate, enjoy acoustic glass insulation under 52dB, or simply relax in total comfort while DigiVolt takes you to your destination.
              </p>

              <button
                onClick={onExploreCabin}
                className="btn-pill-secondary group flex items-center gap-2"
              >
                <span>Experience the interior</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>

            {/* Right Media (MediaPlaceholder) */}
            <motion.div
              variants={springVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="order-1 lg:order-2"
            >
              <MediaPlaceholder
                type="image"
                src="https://placeholder.image.jpg"
                alt="DigiVolt cabin interior view"
                aspectRatio="aspect-[4/3] sm:aspect-[16/11]"
                variant="interior"
                badgeText="DigiVolt EV Cabin"
              />
            </motion.div>
          </div>
        </div>

        {/* ROW 3: Image Left, Text Right (Video Asset) */}
        <div className="py-28 sm:py-32 lg:py-40">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            {/* Left Media (Video MediaPlaceholder) */}
            <motion.div
              variants={springVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="order-1"
            >
              <MediaPlaceholder
                type="video"
                src="https://placeholder.video.mp4"
                alt="DigiVolt 800V EV powertrain in operation"
                aspectRatio="aspect-[4/3] sm:aspect-[16/11]"
                variant="sensor"
                badgeText="800V Architecture"
              />
            </motion.div>

            {/* Right Text Block */}
            <motion.div
              variants={springVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="order-2 flex flex-col items-start"
            >
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-black dark:text-white mb-4 font-semibold">
                <Sliders className="w-4 h-4 text-black dark:text-white" />
                <span>Zero-Emission Performance</span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-black leading-[1.05] mb-6">
                Engineered for cleaner, greener cities.
              </h2>

              <p className="text-lg sm:text-xl text-gray-600 font-light leading-relaxed mb-8 max-w-xl">
                Powered by high-efficiency 800V architecture and 100% renewable energy grids. Each trip produces zero grams of tailpipe emissions and reduces urban sound pollution.
              </p>

              <button
                onClick={onExploreSensors}
                className="btn-pill-evergreen group flex items-center gap-2"
              >
                <span>Discover the EV platform</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
};
