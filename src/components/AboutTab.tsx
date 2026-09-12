import React from 'react';
import { TechnologyBreakout } from './TechnologyBreakout';

interface AboutTabProps {
  onRideClick?: () => void;
}

export const AboutTab: React.FC<AboutTabProps> = ({ onRideClick }) => {
  const milestones = [
    {
      year: '2020',
      title: 'The Clean Transit Initiative',
      desc: 'Founded to challenge fossil-fuel congestion, noisy combustion engines, and inconsistent unvetted gig ride-hailing.',
    },
    {
      year: '2021',
      title: '100% All-Electric Fleet Architecture',
      desc: 'Engineered and deployed our first dedicated fleet of zero-emission electric vehicles with integrated ADAS safety telemetry.',
    },
    {
      year: '2022',
      title: 'Professional Chauffeur Academy',
      desc: 'Launched our rigorous vetting and customer hospitality academy, ensuring every passenger travels with certified drivers.',
    },
    {
      year: '2023',
      title: 'Metro Expansion & Renewable Hubs',
      desc: 'Expanded multi-city operations supported by rapid-charging solar and wind depot infrastructure.',
    },
    {
      year: 'Today',
      title: 'Redefining Urban Ride-Hailing',
      desc: 'Hundreds of thousands of clean, whisper-quiet electric rides completed monthly with over 98% rider satisfaction.',
    },
  ];

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
      desc: 'Forward collision mitigation, pedestrian detection, and automatic emergency braking assist our vetted chauffeurs on every trip.',
    },
    {
      title: 'Fleet AI & Smart Dispatch',
      desc: 'Cloud-orchestrated dispatch algorithms balance vehicle battery states of charge, minimize idle deadhead miles, and predict demand.',
    },
  ];

  return (
    <div className="w-full bg-white dark:bg-black text-black dark:text-white transition-colors duration-150">
      {/* 1. Header Hero */}
      <section className="pt-20 sm:pt-40 pb-12 sm:pb-20 px-4 sm:px-10 lg:px-16 max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold tracking-tighter text-black dark:text-white leading-[1.02] sm:leading-[0.98] mb-6 sm:mb-8 max-w-5xl">
          Redefining <span className="text-black dark:text-white">Urban Mobility</span>
        </h1>
        <p className="text-lg sm:text-2xl text-neutral-700 dark:text-gray-300 font-normal leading-relaxed max-w-3xl mb-8 sm:mb-10">
          DigiVolt is an electric mobility company with a mission to deliver clean, whisper-quiet, and exceptionally safe ride-hailing powered by 100% electric vehicles and professional vetted chauffeurs.
        </p>

        {onRideClick && (
          <div className="flex items-center gap-4">
            <button
              onClick={onRideClick}
              className="bg-black text-white dark:bg-white dark:text-black text-sm sm:text-base px-7 sm:px-8 py-3.5 rounded-full font-semibold transition-all hover:opacity-90 shadow-md cursor-pointer"
            >
              Experience DigiVolt One
            </button>
          </div>
        )}
      </section>

      {/* 2. Timeline Section */}
      <section className="py-14 sm:py-24 px-4 sm:px-10 lg:px-16 max-w-7xl mx-auto border-t border-neutral-200 dark:border-neutral-900">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tighter text-black dark:text-white leading-tight">
            Pioneering the electric ride-hailing revolution
          </h2>
        </div>

        <div className="space-y-8">
          {milestones.map((m) => (
            <div
              key={m.year}
              className="p-8 rounded-3xl bg-neutral-50 dark:bg-neutral-950 transition-all hover:shadow-lg flex flex-col sm:flex-row sm:items-baseline gap-6"
            >
              <div className="text-4xl font-black font-mono text-black dark:text-white sm:w-28 flex-shrink-0">
                {m.year}
              </div>
              <div>
                <h3 className="text-xl font-bold text-black dark:text-white mb-1">
                  {m.title}
                </h3>
                <p className="text-base text-neutral-600 dark:text-gray-400 font-normal leading-relaxed">
                  {m.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Merged Technology & EV Platform Architecture */}
      <section id="about-technology" className="py-16 sm:py-28 px-4 sm:px-10 lg:px-16 max-w-7xl mx-auto border-t border-neutral-200 dark:border-neutral-900">
        <div className="max-w-4xl mb-14">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-neutral-500 mb-3 block">
            FLEET ARCHITECTURE & INNOVATION
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-black dark:text-white leading-tight mb-6">
            The DigiVolt EV Platform
          </h2>
          <p className="text-lg sm:text-xl text-neutral-700 dark:text-neutral-300 font-light leading-relaxed">
            Our custom-engineered 100% electric vehicle platform pairs advanced driver-assist safety telemetry with professional vetted chauffeurs. Built from the ground up for whisper-quiet comfort, zero emissions, and complete passenger peace of mind.
          </p>
        </div>

        {/* 4 Hardware Architecture Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {hardwarePillars.map((pillar) => (
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
          ))}
        </div>
      </section>

      {/* 4. Interactive Technology Visualizer */}
      <TechnologyBreakout />

      {/* 5. Sustainability & Charging at Scale */}
      <section className="py-24 sm:py-32 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto">
        <div className="bg-neutral-50 dark:bg-neutral-950 rounded-3xl p-8 sm:p-14 lg:p-16 shadow-sm border border-neutral-200 dark:border-neutral-900">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tighter text-black dark:text-white leading-tight mb-6">
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
