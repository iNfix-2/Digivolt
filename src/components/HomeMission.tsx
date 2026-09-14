import React from 'react';

interface HomeMissionProps {
  onExploreAbout: () => void;
}

export const HomeMission: React.FC<HomeMissionProps> = ({ onExploreAbout }) => {
  return (
    <section id="our-mission-be-the-worlds-most-trusted-driver" className="w-full bg-white dark:bg-black text-black dark:text-white py-24 sm:py-32 transition-colors duration-150">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Our Mission: Redefining Urban Mobility */}
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-black dark:text-white leading-tight mb-8">
            Our mission: <span className="text-black dark:text-white">Redefining urban mobility</span>
          </h2>

          <p className="text-xs sm:text-lg md:text-xl text-neutral-700 dark:text-gray-300 font-normal leading-relaxed mb-10 max-w-3xl">
            At DigiVolt, we believe urban ride-hailing must be clean, silent, and dependable. Our mission is to accelerate the transition to 100% electric mobility while providing riders with the peace of mind of vetted drivers, predictable ETAs, and zero tailpipe emissions. We are passionate about improving our cities to make them cleaner and quieter for generations to come.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onExploreAbout}
              className="bg-black text-white dark:bg-white dark:text-black text-base px-8 py-3.5 font-semibold rounded-full transition-all hover:opacity-90 shadow-md cursor-pointer"
            >
              About our company
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
