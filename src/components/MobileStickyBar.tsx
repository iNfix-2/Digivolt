import React from 'react';
import { NavTab } from './Navbar';

interface MobileStickyBarProps {
  onGetApp: () => void;
  activeTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
  darkMode?: boolean;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({
  onGetApp,
  darkMode = false,
}) => {
  return (
    <div className="fixed bottom-3 left-3 right-3 z-40 sm:hidden">
      <div
        className={`${
          darkMode ? 'bg-black/95 text-white' : 'bg-white/95 text-black'
        } backdrop-blur-lg rounded-full py-1.5 px-4 shadow-2xl flex items-center justify-between transition-colors duration-150`}
      >
        <span className="text-xs font-semibold text-black dark:text-white tracking-tight">
          DigiVolt One
        </span>

        <button
          onClick={onGetApp}
          className="bg-black text-white dark:bg-white dark:text-black text-xs px-4 py-1.5 rounded-full font-semibold shadow-md whitespace-nowrap active:opacity-80 cursor-pointer"
        >
          Get app
        </button>
      </div>
    </div>
  );
};
