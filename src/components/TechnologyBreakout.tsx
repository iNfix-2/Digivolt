import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { VolumeX, ShieldCheck } from 'lucide-react';

export const TechnologyBreakout: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'powertrain' | 'acoustic' | 'telematics' | 'safety'>('powertrain');

  const stats = [
    { value: '100M+', label: 'Clean Electric Miles', detail: 'Zero-emission miles completed across active metropolitan service areas.' },
    { value: '0g', label: 'Tailpipe Emissions', detail: '100% all-electric vehicles charged using verified renewable solar and wind.' },
    { value: '<52dB', label: 'Acoustic Comfort', detail: 'Ultra-low interior cabin noise eliminating motor drone and travel fatigue.' },
    { value: '100%', label: 'Vetted Chauffeurs', detail: 'Rigorously background-checked drivers trained in safety and hospitality.' },
  ];

  const techDetails = {
    powertrain: {
      title: '800V Electric Architecture',
      subtitle: 'Ultra-Dense Energy Storage & Rapid Charging',
      description:
        'Advanced liquid-cooled battery packs engineered for maximum safety and thermal stability. Our 800-volt charging architecture enables 10% to 80% charging turnaround in just 18 minutes, guaranteeing 24/7 fleet availability.',
      metrics: ['800V high-efficiency powertrain', '18-min fast charge (10-80%)', 'Active liquid thermal regulation'],
    },
    acoustic: {
      title: 'Whisper-Quiet Sanctuary',
      subtitle: 'Acoustic Engineering Below 52 Decibels',
      description:
        'Engineered with double-paned acoustic laminated glass, underbody aerodynamic shielding, and vibration-dampened linear torque electric motors. Enjoy an ultra-quiet cabin ideal for calls, podcasts, or peaceful relaxation.',
      metrics: ['<52dB cruising cabin acoustics', 'Acoustic laminate noise barrier', 'Zero motor vibration or gear rattle'],
    },
    telematics: {
      title: 'Smart Fleet Telematics',
      subtitle: 'Cloud-Connected Diagnostics & Routing',
      description:
        'Continuous encrypted telemetry monitors battery cell state of charge, motor efficiency, tire pressures, and traffic flow. Smart routing pairs passengers with the optimal vehicle to minimize wait times and energy consumption.',
      metrics: ['Sub-second telemetry sync', 'Predictive battery health analysis', 'Intelligent dispatch optimization'],
    },
    safety: {
      title: 'Advanced Driver Assistance (ADAS)',
      subtitle: 'Proactive Collision Avoidance & Telemetry',
      description:
        'Our vetted chauffeurs are backed by an array of intelligent safety sensors providing forward collision warning, automatic emergency braking, blind spot monitoring, and pedestrian collision mitigation.',
      metrics: ['Automated emergency braking', '360° radar & camera envelope', 'Active driver alert monitoring'],
    },
  };

  const currentTech = techDetails[activeTab];

  return (
    <section id="technology" className="w-full bg-white dark:bg-black text-black dark:text-white py-32 lg:py-44 relative overflow-hidden transition-colors duration-150">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-24">
          <motion.h2
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter text-black dark:text-white leading-tight mb-6"
          >
            The future of <span className="text-black dark:text-white">electric ride-hailing</span> architecture.
          </motion.h2>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg sm:text-xl text-neutral-700 dark:text-gray-300 font-normal leading-relaxed"
          >
            Engineered from battery chemistry to cloud telematics for urban ride-hailing excellence. 
            DigiVolt pairs high-efficiency 800V EV platforms with active collision-avoidance assistance and certified professional chauffeurs.
          </motion.p>
        </div>

        {/* Big Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-28 py-16">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, delay: 0.1 * idx, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col"
            >
              <div className="text-5xl sm:text-6xl font-extrabold tracking-tighter text-black dark:text-white mb-2">
                {stat.value}
              </div>
              <div className="text-sm font-semibold tracking-tight text-black dark:text-white uppercase mb-2">
                {stat.label}
              </div>
              <p className="text-xs text-neutral-600 dark:text-gray-400 leading-relaxed font-normal">
                {stat.detail}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Console Box */}
        <div className="bg-neutral-50 dark:bg-neutral-950 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl">
          
          {/* Tab Selection Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-10">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <button
                onClick={() => setActiveTab('powertrain')}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm tracking-tight transition-all cursor-pointer ${
                  activeTab === 'powertrain'
                    ? 'bg-black text-white dark:bg-white dark:text-black font-semibold shadow-md'
                    : 'bg-white text-black dark:bg-black dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-900'
                }`}
              >
                800V Powertrain
              </button>
              <button
                onClick={() => setActiveTab('acoustic')}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm tracking-tight transition-all cursor-pointer ${
                  activeTab === 'acoustic'
                    ? 'bg-black text-white dark:bg-white dark:text-black font-semibold shadow-md'
                    : 'bg-white text-black dark:bg-black dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-900'
                }`}
              >
                Acoustic Sanctuary
              </button>
              <button
                onClick={() => setActiveTab('telematics')}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm tracking-tight transition-all cursor-pointer ${
                  activeTab === 'telematics'
                    ? 'bg-black text-white dark:bg-white dark:text-black font-semibold shadow-md'
                    : 'bg-white text-black dark:bg-black dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-900'
                }`}
              >
                Fleet Telematics
              </button>
              <button
                onClick={() => setActiveTab('safety')}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm tracking-tight transition-all cursor-pointer ${
                  activeTab === 'safety'
                    ? 'bg-black text-white dark:bg-white dark:text-black font-semibold shadow-md'
                    : 'bg-white text-black dark:bg-black dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-900'
                }`}
              >
                ADAS Assist
              </button>
            </div>
          </div>

          {/* Interactive Visualizer Canvas + Details Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Visualizer Canvas */}
            <div className="lg:col-span-7 bg-white dark:bg-black rounded-2xl p-6 sm:p-8 relative min-h-[380px] flex flex-col justify-between overflow-hidden shadow-inner">

              {/* Dynamic Graphic Visualizer */}
              <div className="my-8 relative flex items-center justify-center h-56">
                
                {activeTab === 'powertrain' && (
                  <div className="relative w-full h-full flex flex-col items-center justify-center">
                    <div className="w-full max-w-sm space-y-4">
                      <div className="flex justify-between text-xs font-mono">
                        <span className="text-neutral-700 dark:text-gray-200">BATTERY STATE OF CHARGE</span>
                        <span className="text-black dark:text-white font-bold">92% (312 MILES)</span>
                      </div>
                      <div className="h-3 w-full bg-neutral-200 dark:bg-neutral-900 rounded-full overflow-hidden p-0.5">
                        <div className="h-full bg-black dark:bg-white rounded-full w-[92%]" />
                      </div>
                      <div className="grid grid-cols-3 gap-2 pt-2 text-center text-[10px] font-mono">
                        <div className="p-2 rounded bg-neutral-100 dark:bg-neutral-900">
                          <span className="text-neutral-600 dark:text-gray-400 block">VOLTAGE</span>
                          <span className="text-black dark:text-white font-bold">784 V</span>
                        </div>
                        <div className="p-2 rounded bg-neutral-100 dark:bg-neutral-900">
                          <span className="text-neutral-600 dark:text-gray-400 block">CELL TEMP</span>
                          <span className="text-black dark:text-white font-bold">26.4 °C</span>
                        </div>
                        <div className="p-2 rounded bg-neutral-100 dark:bg-neutral-900">
                          <span className="text-neutral-600 dark:text-gray-400 block">REGEN</span>
                          <span className="text-black dark:text-white font-bold">+18 kW</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'acoustic' && (
                  <div className="relative w-full h-full flex flex-col items-center justify-center">
                    <div className="flex items-center gap-1.5 h-24 mb-4">
                      {[32, 45, 28, 52, 40, 36, 48, 30, 24, 42, 38, 50, 33, 26, 44].map((h, idx) => (
                        <div
                          key={idx}
                          style={{ height: `${h}%` }}
                          className="w-2.5 bg-black dark:bg-white rounded-full transition-all duration-300 animate-pulse"
                        />
                      ))}
                    </div>
                    <div className="px-4 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-900 text-xs font-mono text-black dark:text-white font-bold flex items-center gap-2">
                      <VolumeX className="w-4 h-4 text-black dark:text-white" />
                      <span>PEAK CABIN NOISE: 48.2 dB (WHISPER-QUIET)</span>
                    </div>
                  </div>
                )}

                {activeTab === 'telematics' && (
                  <div className="relative w-full h-full flex flex-col items-center justify-center">
                    <div className="w-full max-w-sm space-y-2.5 font-mono text-xs text-neutral-800 dark:text-gray-200">
                      <div className="flex justify-between p-2.5 rounded bg-neutral-100 dark:bg-neutral-900">
                        <span className="text-neutral-600 dark:text-gray-400">DISPATCH COORDINATES</span>
                        <span className="text-black dark:text-white font-semibold">37.7749° N, 122.4194° W</span>
                      </div>
                      <div className="flex justify-between p-2.5 rounded bg-neutral-100 dark:bg-neutral-900">
                        <span className="text-neutral-600 dark:text-gray-400">CHAUFFEUR VERIFICATION</span>
                        <span className="text-black dark:text-white font-semibold">CERTIFIED #DV-8924</span>
                      </div>
                      <div className="flex justify-between p-2.5 rounded bg-neutral-100 dark:bg-neutral-900">
                        <span className="text-neutral-600 dark:text-gray-400">GRID CONNECTION</span>
                        <span className="text-black dark:text-white font-semibold">100% SOLAR CERTIFIED</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'safety' && (
                  <div className="relative w-full h-full flex flex-col items-center justify-center">
                    <div className="relative w-52 h-52 flex items-center justify-center">
                      <div className="absolute inset-0 rounded-full bg-black/5 dark:bg-white/5" />
                      <div className="absolute w-36 h-36 rounded-full bg-black/5 dark:bg-white/5 animate-pulse" />
                      <ShieldCheck className="w-10 h-10 text-black dark:text-white" />
                      <div className="absolute top-4 right-6 text-[10px] font-mono text-black dark:text-white bg-white dark:bg-black px-2 py-1 rounded font-semibold shadow-sm">
                        ADAS: ACTIVE BUFFER
                      </div>
                      <div className="absolute bottom-4 left-6 text-[10px] font-mono text-black dark:text-white bg-white dark:bg-black px-2 py-1 rounded font-semibold shadow-sm">
                        COLLISION MITIGATION: ON
                      </div>
                    </div>
                  </div>
                )}

              </div>

            </div>

            {/* Content description for current tab */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-black dark:text-white mb-4">
                {currentTech.title}
              </h3>
              <p className="text-neutral-700 dark:text-gray-300 leading-relaxed font-normal mb-8 text-base">
                {currentTech.description}
              </p>

              <div className="space-y-3 mb-10">
                {currentTech.metrics.map((metric) => (
                  <div key={metric} className="flex items-center gap-3 text-sm text-neutral-800 dark:text-gray-200 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-black dark:bg-white flex-shrink-0" />
                    <span>{metric}</span>
                  </div>
                ))}
              </div>

              <div>
                <a
                  href="#rides"
                  className="bg-black text-white dark:bg-white dark:text-black px-7 py-3 rounded-full text-sm font-semibold transition-all hover:opacity-90 shadow-md inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>Experience DigiVolt One</span>
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
