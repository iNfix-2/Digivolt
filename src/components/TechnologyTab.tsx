import React from 'react';
import { TechnologyBreakout } from './TechnologyBreakout';

interface TechnologyTabProps {
  onRideClick: () => void;
}

export const TechnologyTab: React.FC<TechnologyTabProps> = ({ onRideClick }) => {
  const hardwarePillars = [
    {
      title: '800V Electric Architecture',
      desc: 'High-density battery packs engineered for maximum thermal stability, 300+ mile range, and 18-minute rapid charging turnaround.',
    },
    {
      title: 'Acoustic Engineering (<52dB)',
      desc: 'Acoustic laminated glass, silent linear torque motors, and vibration-dampening chassis provide a serene, whisper-quiet cabin sanctuary.',
    },
    {
      title: 'Active ADAS & Safety Telematics',
      desc: 'Forward collision mitigation, pedestrian detection, and automatic emergency braking assist our vetted drivers on every trip.',
    },
    {
      title: 'Fleet AI & Smart Dispatch',
      desc: 'Cloud-orchestrated dispatch algorithms balance vehicle battery states of charge, minimize idle deadhead miles, and predict demand.',
    },
  ];

  return (
    <div className="w-full bg-white dark:bg-black text-black dark:text-white transition-colors duration-200">
      {/* Tab Hero Header */}
      <section className="pt-20 sm:pt-40 pb-12 sm:pb-20 px-4 sm:px-10 lg:px-16 max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold tracking-tighter text-black dark:text-white leading-[1.02] sm:leading-[0.98] mb-6 sm:mb-8 max-w-5xl">
          The DigiVolt EV Platform
        </h1>
        <p className="text-lg sm:text-2xl text-neutral-700 dark:text-neutral-300 font-light leading-relaxed max-w-3xl mb-8 sm:mb-10">
          A custom-engineered 100% electric architecture paired with advanced driver-assist safety telemetry and professional vetted drivers. Built for whisper-quiet comfort, zero emissions, and uncompromised passenger peace of mind.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <button
            onClick={onRideClick}
            className="bg-black text-white dark:bg-white dark:text-black text-sm sm:text-base px-7 sm:px-8 py-3.5 rounded-full font-semibold transition-all hover:opacity-90 shadow-md cursor-pointer"
          >
            Experience in DigiVolt One
          </button>
        </div>
      </section>

      {/* Hardware Architecture Grid */}
      <section className="py-14 sm:py-24 px-4 sm:px-10 lg:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {hardwarePillars.map((pillar) => {
            return (
              <div
                key={pillar.title}
                className="p-8 rounded-3xl bg-neutral-50 dark:bg-neutral-950 transition-all hover:shadow-md flex flex-col justify-between group"
              >
                <div>
                  <h3 className="text-xl font-bold tracking-tight text-black dark:text-white mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300 font-light leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Interactive Dark Mode Technology Visualizer */}
      <TechnologyBreakout />

      {/* Sustainability & Charging at Scale */}
      <section className="py-32 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto">
        <div className="bg-neutral-50 dark:bg-neutral-950 rounded-3xl p-8 sm:p-14 lg:p-16 shadow-sm">
          <div className="max-w-3xl">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tighter text-black dark:text-white leading-tight mb-6">
              100% Renewable charging & zero urban smog
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 font-light leading-relaxed mb-8">
              Every DigiVolt vehicle connects to verified renewable solar and wind charging depots. By integrating battery life telemetry with smart grid balancing, our fleet operates continuously without burdening local municipal power networks.
            </p>
            <div className="flex items-center gap-3 text-sm font-semibold text-black dark:text-white">
              <span>Certified 100% zero-tailpipe emission transit across all operating metros</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
