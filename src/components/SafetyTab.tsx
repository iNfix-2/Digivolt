import React from 'react';

interface SafetyTabProps {
  onRideClick: () => void;
}

export const SafetyTab: React.FC<SafetyTabProps> = ({ onRideClick }) => {
  const safetyMetrics = [
    {
      stat: '100%',
      label: 'Vetted Professional Drivers',
      desc: 'Multi-tiered criminal background screening, DMV record checks, and continuous safety audits.',
    },
    {
      stat: '0g',
      label: 'Tailpipe Emissions per Mile',
      desc: 'Pure electric vehicle operations with zero tailpipe smog or particulate matter emissions.',
    },
    {
      stat: '100M+',
      label: 'Clean Electric Miles',
      desc: 'Decarbonized, whisper-quiet passenger travel safely completed across our service markets.',
    },
    {
      stat: '5-Star',
      label: 'EV Crash Safety Architecture',
      desc: 'Rigid battery safety cages, low center-of-gravity stability, and automated emergency braking.',
    },
  ];

  const safetyPillars = [
    {
      title: 'Vetted Driver Excellence',
      desc: 'Every driver undergoes thorough multi-stage background checks, in-person driving exams, and continuous safety & hospitality certifications.',
    },
    {
      title: 'Active ADAS Collision Avoidance',
      desc: 'Equipped with forward collision warning, automatic emergency braking, blind spot monitoring, and pedestrian collision mitigation.',
    },
    {
      title: '24/7 Support & Security PIN',
      desc: 'Live trip telemetry, digital ride verification PINs, and around-the-clock emergency support specialists at the touch of a button.',
    },
  ];

  return (
    <div className="w-full bg-white dark:bg-black text-black dark:text-white transition-colors duration-150">
      {/* Header */}
      <section className="pt-20 sm:pt-40 pb-12 sm:pb-20 px-4 sm:px-10 lg:px-16 max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold tracking-tighter text-black dark:text-white leading-[1.02] sm:leading-[0.98] mb-6 sm:mb-8 max-w-5xl">
          Safety at <span className="text-black dark:text-white">DigiVolt</span>
        </h1>
        <p className="text-lg sm:text-2xl text-neutral-700 dark:text-gray-300 font-normal leading-relaxed max-w-3xl mb-8 sm:mb-10">
          Our mission is to make urban transit cleaner and safer than ever before. By combining 100% electric vehicle safety engineering with thoroughly vetted professional drivers, DigiVolt establishes a new benchmark for urban mobility.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <button
            onClick={onRideClick}
            className="bg-black text-white dark:bg-white dark:text-black text-sm sm:text-base px-7 sm:px-8 py-3.5 rounded-full font-semibold transition-all hover:opacity-90 shadow-lg cursor-pointer"
          >
            Ride with DigiVolt One
          </button>
        </div>
      </section>

      {/* Metrics Grid */}
      <section className="py-14 sm:py-24 px-4 sm:px-10 lg:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {safetyMetrics.map((m) => (
            <div key={m.label} className="p-6 sm:p-8 rounded-3xl bg-neutral-50 dark:bg-neutral-950 transition-all hover:shadow-lg">
              <div className="text-4xl sm:text-6xl font-black tracking-tighter text-black dark:text-white mb-2">
                {m.stat}
              </div>
              <h3 className="text-base font-bold tracking-tight text-black dark:text-white mb-2">
                {m.label}
              </h3>
              <p className="text-xs text-neutral-600 dark:text-gray-400 font-normal leading-relaxed">
                {m.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Safety Framework Pillars */}
      <section className="py-16 sm:py-32 px-4 sm:px-10 lg:px-16 max-w-7xl mx-auto">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tighter text-black dark:text-white leading-tight mb-4">
            Our Safety Methodologies
          </h2>
          <p className="text-lg text-neutral-600 dark:text-gray-400 font-normal">
            A comprehensive, layered safety framework combining driver certification, ADAS collision avoidance, and 5-star electric vehicle integrity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {safetyPillars.map((p) => (
            <div key={p.title} className="p-8 rounded-3xl bg-neutral-50 dark:bg-neutral-950 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold tracking-tight text-black dark:text-white mb-3">
                  {p.title}
                </h3>
                <p className="text-sm text-neutral-700 dark:text-gray-300 font-normal leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Real-World Safety Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="rounded-3xl overflow-hidden bg-neutral-900 shadow-xl group">
            <div className="aspect-[16/10] overflow-hidden relative">
              <img
                src="/campaign/lekki_nightlife.jpg"
                alt="Safe Night Commute with live safety shield"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div className="p-6 sm:p-8 bg-neutral-50 dark:bg-neutral-950">
              <h3 className="text-xl font-bold tracking-tight text-black dark:text-white mb-2">
                Live GPS Tracking & Emergency Shield
              </h3>
              <p className="text-sm text-neutral-600 dark:text-gray-400 font-normal leading-relaxed">
                Every journey features continuous satellite route monitoring, automated speed compliance, and an active digital security PIN to ensure you always board the right vehicle.
              </p>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden bg-neutral-900 shadow-xl group">
            <div className="aspect-[16/10] overflow-hidden relative">
              <img
                src="/campaign/pickup_business.jpg"
                alt="Professional Driver greeting passenger"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div className="p-6 sm:p-8 bg-neutral-50 dark:bg-neutral-950">
              <h3 className="text-xl font-bold tracking-tight text-black dark:text-white mb-2">
                Executive Driver Hospitality
              </h3>
              <p className="text-sm text-neutral-600 dark:text-gray-400 font-normal leading-relaxed">
                Our drivers are trained professionals in defensive EV handling and VIP hospitality. Biometric identification and continuous feedback guarantee consistent 5-star service.
              </p>
            </div>
          </div>
        </div>

        {/* White Papers Box */}
        <div className="p-8 sm:p-12 rounded-3xl bg-neutral-100 dark:bg-neutral-950 text-black dark:text-white flex flex-col md:flex-row md:items-center justify-between gap-8 shadow-2xl">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-black dark:text-white mb-2">
              Explore our Safety & Sustainability Standards
            </h3>
            <p className="text-sm text-neutral-700 dark:text-gray-300 font-normal max-w-xl">
              Read our driver vetting guidelines, vehicle maintenance standards, and clean air impact metrics.
            </p>
          </div>

          <button
            onClick={onRideClick}
            className="bg-black text-white dark:bg-white dark:text-black text-sm px-7 py-3.5 rounded-full font-semibold flex items-center gap-2 flex-shrink-0 transition-all hover:opacity-90 shadow-md cursor-pointer"
          >
            <span>Read Safety Guidelines</span>
          </button>
        </div>
      </section>
    </div>
  );
};
