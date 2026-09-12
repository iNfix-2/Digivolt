import React from 'react';
import digivoltFleetImg from '../assets/digivolt-fleet.png';

interface HomeFeaturesProps {
  onDownloadApp?: () => void;
}

export const HomeFeatures: React.FC<HomeFeaturesProps> = ({ onDownloadApp }) => {
  return (
    <section id="rides" className="w-full bg-white dark:bg-black text-black dark:text-white py-14 sm:py-32 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Meet DigiVolt Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center mb-14 sm:mb-28">
          
          {/* Left Text */}
          <div className="lg:col-span-5">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-black dark:text-white mb-3 sm:mb-4">
              Meet DigiVolt
            </h2>
            <p className="text-base sm:text-xl text-neutral-800 dark:text-neutral-200 font-light mb-6 sm:mb-8 leading-relaxed">
              The future of ride-hailing is Electric. Redefining urban mobility with zero tailpipe emissions and premium vetted chauffeurs.
            </p>
            <button
              onClick={onDownloadApp}
              className="inline-flex items-center text-sm font-semibold text-black dark:text-white hover:opacity-80 transition-opacity cursor-pointer"
            >
              Download the DigiVolt app
            </button>
          </div>

          {/* Right Image: Two DigiVolt Vehicles */}
          <div className="lg:col-span-7 flex justify-center lg:justify-end">
            <div className="w-full max-w-2xl rounded-2xl p-2 bg-neutral-50 dark:bg-neutral-950">
              <img
                src={digivoltFleetImg}
                alt="DigiVolt 100% all-electric fleet vehicles"
                className="w-full h-auto object-contain rounded-xl"
                loading="lazy"
              />
            </div>
          </div>

        </div>

        {/* 3 Core Features Below Meet DigiVolt */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6 sm:pt-12">
          
          {/* Feature 1: Sustainability */}
          <div className="flex flex-col p-6 sm:p-8 rounded-2xl bg-neutral-50 dark:bg-neutral-950">
            <h3 className="text-xl font-bold tracking-tight text-black dark:text-white mb-2">
              100% Electric & Zero Emissions
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-300 font-light leading-relaxed">
              Every mile driven produces zero tailpipe smog. Breathe cleaner air while commuting across your city in full sustainability.
            </p>
          </div>

          {/* Feature 2: Smarter & Safer */}
          <div className="flex flex-col p-6 sm:p-8 rounded-2xl bg-neutral-50 dark:bg-neutral-950">
            <h3 className="text-xl font-bold tracking-tight text-black dark:text-white mb-2">
              Vetted Professional Chauffeurs
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-300 font-light leading-relaxed">
              Rigorously background-checked, certified drivers equipped with active telemetry and advanced collision-avoidance assistance.
            </p>
          </div>

          {/* Feature 3: Whisper-Quiet Sanctuary */}
          <div className="flex flex-col p-6 sm:p-8 rounded-2xl bg-neutral-50 dark:bg-neutral-950">
            <h3 className="text-xl font-bold tracking-tight text-black dark:text-white mb-2">
              Whisper-Quiet Sanctuary
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-300 font-light leading-relaxed">
              Zero engine noise, linear acceleration, and acoustic insulation provide an unmatched peaceful, comfortable ride 24/7.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
