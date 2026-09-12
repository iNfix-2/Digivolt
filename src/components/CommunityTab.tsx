import React from 'react';

export const CommunityTab: React.FC = () => {
  const initiatives = [
    {
      title: 'Accessible & Inclusive Transit',
      desc: 'Partnering with accessibility advocates to co-design app screen-reader optimizations, tactile vehicle aids, and curb-to-door passenger assistance.',
    },
    {
      title: 'First & Last Mile EV Hubs',
      desc: 'Connecting suburban transit deserts with regional rail and subway terminals, making electric mobility seamless and affordable.',
    },
    {
      title: '100% Renewable Urban Air',
      desc: 'Eliminating toxic tailpipe smog and particulate pollution from our downtown streets with a 100% zero-emission electric fleet.',
    },
  ];

  return (
    <div className="w-full bg-white dark:bg-black text-black dark:text-white transition-colors duration-200">
      {/* Header */}
      <section className="pt-32 sm:pt-40 pb-20 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto">
        <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tighter text-black dark:text-white leading-[0.98] mb-8 max-w-5xl">
          Mobility for Everyone
        </h1>
        <p className="text-xl sm:text-2xl text-neutral-700 dark:text-neutral-300 font-light leading-relaxed max-w-3xl">
          We collaborate with local communities, advocacy groups, and municipal transit agencies to expand clean, whisper-quiet electric mobility for everyone.
        </p>
      </section>

      {/* Initiatives Grid */}
      <section className="py-24 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {initiatives.map((item) => {
            return (
              <div key={item.title} className="p-8 sm:p-10 rounded-3xl bg-neutral-50 dark:bg-neutral-950 transition-all hover:shadow-md flex flex-col justify-between group">
                <div>
                  <h3 className="text-2xl font-bold tracking-tight text-black dark:text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-base text-neutral-600 dark:text-neutral-300 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Community Quote */}
      <section className="py-32 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto">
        <div className="bg-neutral-50 dark:bg-neutral-950 rounded-3xl p-8 sm:p-16 shadow-sm">
          <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-light text-black dark:text-white tracking-tight leading-relaxed mb-6">
            “DigiVolt delivers the quietest, cleanest rides in our neighborhoods. Knowing every ride reduces tailpipe pollution while supporting vetted local drivers makes a tangible difference in our city’s quality of life.”
          </blockquote>
          <span className="text-sm font-semibold text-neutral-700 dark:text-neutral-300">
            Urban Clean Air & Transit Coalition Partner
          </span>
        </div>
      </section>
    </div>
  );
};
