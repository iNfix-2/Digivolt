import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Menu, X, ChevronDown, ArrowUpRight, Sun, Moon } from 'lucide-react';
import { Logo } from './Logo';

export type NavTab = 'overview' | 'rides' | 'about' | 'support';

interface NavbarProps {
  activeTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
  onOpenAppModal: () => void;
  darkMode?: boolean;
  onToggleDarkMode?: () => void;
}

interface MegamenuItem {
  id: string;
  title: string;
  tabKey?: NavTab;
  headline: string;
  links: { text: string; action?: () => void; href?: string }[];
  image: string;
  imageAlt: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  onSelectTab,
  onOpenAppModal,
  darkMode = false,
  onToggleDarkMode,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedMobileTab, setExpandedMobileTab] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (tabId: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setHoveredTab(tabId);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setHoveredTab(null);
    }, 160);
  };

  const handleNavClick = (tabId: string) => {
    setHoveredTab(null);
    if (tabId === 'rides') onSelectTab('rides');
    else if (tabId === 'about') onSelectTab('about');
    else if (tabId === 'support') onSelectTab('support');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Megamenu content definitions for DIGIVOLT - The Future of Ride-Hailing is Electric
  const menuData: Record<string, MegamenuItem> = {
    rides: {
      id: 'rides',
      title: 'Rides',
      tabKey: 'rides',
      headline: '100% Electric, whisper-quiet rides with vetted professional drivers',
      links: [
        {
          text: 'Our Electric Service',
          action: () => {
            onSelectTab('rides');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          },
        },
        {
          text: 'How It Works',
          action: () => {
            onSelectTab('rides');
            setTimeout(() => {
              document.getElementById('rides-how-it-works')?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          },
        },
        {
          text: 'Whisper-Quiet Comfort',
          action: () => {
            onSelectTab('rides');
            setTimeout(() => {
              document.getElementById('rides-experience')?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          },
        },
      ],
      image: '/campaign/digivolt-ride-pickup.jpg',
      imageAlt: 'DigiVolt electric vehicle with chauffeur and passenger',
    },
    about: {
      id: 'about',
      title: 'About',
      tabKey: 'about',
      headline: 'Our Mission, EV Platform & Sustainable Future',
      links: [
        {
          text: 'Our Journey & Story',
          action: () => {
            onSelectTab('about');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          },
        },
        {
          text: 'The EV Platform & Architecture',
          action: () => {
            onSelectTab('about');
            setTimeout(() => {
              document.getElementById('about-technology')?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          },
        },
        {
          text: 'Pioneering Timeline',
          action: () => {
            onSelectTab('about');
          },
        },
        {
          text: 'Renewable Charging Hubs',
          action: () => {
            onSelectTab('about');
          },
        },
      ],
      image:
        'https://lh3.googleusercontent.com/zRpqLUgCQvULzBn-XIpFeWWLjHvOC09QFT0zUDh8vclC5AnybvRiqePEcbLOyLEa8v9HKmake_gnKfTZVQXMq4o-Co-QmDxIjwakwA=s0-e365',
      imageAlt: 'DigiVolt electric vehicle in city sunset',
    },
    support: {
      id: 'support',
      title: 'Support',
      tabKey: 'support',
      headline: '24/7 Help Desk, Terms, Rider Policies & FAQs',
      links: [
        {
          text: 'Help Center & FAQs',
          action: () => {
            onSelectTab('support');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          },
        },
        {
          text: 'Terms & Conditions',
          action: () => {
            onSelectTab('support');
            setTimeout(() => {
              document.getElementById('support-terms')?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          },
        },
        {
          text: 'Rider Policies & Safety',
          action: () => {
            onSelectTab('support');
            setTimeout(() => {
              document.getElementById('support-policies')?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          },
        },
        {
          text: 'Contact 24/7 Support Desk',
          action: () => {
            onSelectTab('support');
            setTimeout(() => {
              document.getElementById('support-contact')?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          },
        },
      ],
      image:
        'https://lh3.googleusercontent.com/v-nEn2qP2bc7jpXSbAG2YRQdi8JCo8vax4HPO9qxkjxuITxPAKinVAXd5lIIu0BagL_PGQQ6jyz-4WL01DctVvEX9EhlQpXajrxwW3Y=s0-e365',
      imageAlt: 'DigiVolt passenger support and customer care',
    },
  };

  const currentMenu = hoveredTab ? menuData[hoveredTab] : null;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        darkMode ? 'bg-black' : 'bg-white'
      } ${isScrolled ? 'shadow-lg shadow-black/20' : ''}`}
      onMouseLeave={handleMouseLeave}
    >
      {/* Main Navigation Top Bar */}
      <div
        className={`w-full transition-colors duration-200 ${
          darkMode ? 'bg-black text-white' : 'bg-white text-black'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-14 sm:h-16 lg:h-20 flex items-center justify-between gap-2">
          
          {/* Official DIGIVOLT Logo */}
          <button
            onClick={() => {
              onSelectTab('overview');
              setHoveredTab(null);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center group cursor-pointer focus:outline-none shrink-0"
            aria-label="DIGIVOLT Home"
          >
            <Logo
              variant="horizontal"
              theme={darkMode ? 'dark' : 'light'}
              className="h-4 sm:h-5 sm:h-6 lg:h-7 w-auto hover:opacity-90 transition-opacity"
              alt="DIGIVOLT"
            />
          </button>

          {/* Desktop Navigation Links matching Screenshot */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 h-full">
            {[
              { id: 'rides', label: 'Rides' },
              { id: 'about', label: 'About' },
              { id: 'support', label: 'Support' },
            ].map((tab) => {
              const isHovered = hoveredTab === tab.id;
              const isSelected = activeTab === tab.id;

              return (
                <div
                  key={tab.id}
                  className="relative h-full flex items-center"
                  onMouseEnter={() => handleMouseEnter(tab.id)}
                >

                  <button
                    onClick={() => handleNavClick(tab.id)}
                    className={`text-[13px] font-medium tracking-tight transition-colors py-2 cursor-pointer ${
                      darkMode
                        ? isHovered || isSelected
                          ? 'text-white font-semibold'
                          : 'text-gray-300 hover:text-white'
                        : isHovered || isSelected
                        ? 'text-black font-semibold'
                        : 'text-gray-800 hover:text-black'
                    }`}
                  >
                    {tab.label}
                  </button>
                </div>
              );
            })}

            {/* Search Icon */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className={`p-1.5 transition-colors cursor-pointer ${
                darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'
              }`}
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Dark Mode Toggle Button */}
            <button
              onClick={onToggleDarkMode}
              className={`p-1.5 px-3 rounded-full transition-colors flex items-center gap-1.5 text-xs font-mono font-medium cursor-pointer ${
                darkMode
                  ? 'bg-black text-white hover:bg-neutral-900'
                  : 'bg-white text-black hover:bg-gray-100'
              }`}
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? (
                <>
                  <Sun className="w-3.5 h-3.5 text-amber-400" />
                  <span className="text-[11px]">Light</span>
                </>
              ) : (
                <>
                  <Moon className="w-3.5 h-3.5 text-gray-700" />
                  <span className="text-[11px]">Dark</span>
                </>
              )}
            </button>
          </nav>

          {/* Right Action: Mobile Hamburger + Theme Toggle + "Get the app" */}
          <div className="flex items-center gap-2 sm:gap-2.5 lg:hidden shrink-0">
            <button
              onClick={onToggleDarkMode}
              className={`p-1.5 rounded-full transition-colors flex items-center justify-center cursor-pointer ${
                darkMode ? 'bg-black text-white' : 'bg-white text-black'
              }`}
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-gray-700" />}
            </button>
            <button
              onClick={onOpenAppModal}
              className={`text-[11px] sm:text-xs font-semibold px-3 py-1.5 sm:px-4 sm:py-2 rounded-full transition-colors whitespace-nowrap shadow-sm cursor-pointer ${
                darkMode
                  ? 'bg-white text-black hover:bg-neutral-200'
                  : 'bg-black text-white hover:bg-neutral-800'
              }`}
            >
              Get app
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-1.5 rounded-full transition-colors cursor-pointer ${
                darkMode ? 'text-white hover:bg-neutral-900' : 'text-black hover:bg-gray-100'
              }`}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Full-Width Megamenu Dropdown matching exact Reference Screenshot */}
      <AnimatePresence>
        {hoveredTab && currentMenu && (
          <motion.div
            key={currentMenu.id}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className={`absolute top-full left-0 right-0 shadow-2xl z-50 overflow-hidden ${
              darkMode ? 'bg-black text-white' : 'bg-white text-black'
            }`}
            onMouseEnter={() => {
              if (timeoutRef.current) clearTimeout(timeoutRef.current);
            }}
            onMouseLeave={handleMouseLeave}
          >
            <div className="max-w-7xl mx-auto px-6 sm:px-8 py-10 sm:py-14">
              <div className="grid grid-cols-12 gap-8 items-center">
                
                {/* Column 1 (Left): Tab Title + DigiVolt Emblem */}
                <div className="col-span-3 flex flex-col justify-between self-stretch">
                  <h2 className="text-4xl sm:text-5xl font-light tracking-tight">
                    {currentMenu.title}
                  </h2>

                  {/* DigiVolt signature emblem */}
                  <div className="mt-8">
                    <Logo
                      variant="stacked"
                      theme={darkMode ? 'dark' : 'light'}
                      className="h-12 sm:h-14 w-auto"
                      alt="DIGIVOLT"
                    />
                  </div>
                </div>

                {/* Column 2 (Middle): Headline + Sublinks List */}
                <div className="col-span-5 flex flex-col justify-center pr-6">
                  <h3 className="text-base sm:text-lg font-semibold tracking-tight mb-5">
                    {currentMenu.headline}
                  </h3>

                  <ul className="space-y-3">
                    {currentMenu.links.map((lnk) => (
                      <li key={lnk.text}>
                        {lnk.action ? (
                          <button
                            onClick={() => {
                              lnk.action?.();
                              setHoveredTab(null);
                            }}
                            className={`text-sm font-light transition-colors text-left cursor-pointer ${
                              darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'
                            }`}
                          >
                            {lnk.text}
                          </button>
                        ) : (
                          <a
                            href={lnk.href}
                            className={`text-sm font-light transition-colors inline-flex items-center gap-1 ${
                              darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'
                            }`}
                          >
                            <span>{lnk.text}</span>
                            <ArrowUpRight className="w-3.5 h-3.5 text-gray-400" />
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Column 3 (Right): Transparent Photographic Cutout Image */}
                <div className="col-span-4 flex justify-end items-center">
                  <div className="relative w-full max-w-sm sm:max-w-md h-48 sm:h-56 flex items-center justify-end">
                    {darkMode ? (
                      <img
                        src={currentMenu.image}
                        alt={currentMenu.imageAlt}
                        className="max-h-full max-w-full object-contain drop-shadow-sm select-none"
                        loading="lazy"
                      />
                    ) : (
                      <div className="rounded-2xl overflow-hidden bg-black shadow-md border border-neutral-200 flex items-center justify-center p-1">
                        <img
                          src={currentMenu.image}
                          alt={currentMenu.imageAlt}
                          className="max-h-44 sm:max-h-48 max-w-full object-contain select-none"
                          loading="lazy"
                        />
                      </div>
                    )}
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search Overlay Bar if clicked */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`w-full px-6 sm:px-8 py-4 ${
              darkMode ? 'bg-black text-white' : 'bg-gray-50 text-black'
            }`}
          >
            <div className="max-w-3xl mx-auto flex items-center gap-3">
              <Search className="w-5 h-5 text-gray-400 flex-shrink-0" />
              <input
                type="text"
                placeholder="Search DIGIVOLT (e.g., safety report, cities, technology)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full bg-transparent text-sm placeholder-gray-400 focus:outline-none focus:ring-0 ${
                  darkMode ? 'text-white' : 'text-black'
                }`}
                autoFocus
              />
              <button
                onClick={() => setSearchOpen(false)}
                className={`text-xs font-semibold px-2 py-1 cursor-pointer ${
                  darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-black'
                }`}
              >
                Close
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Accordion Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className={`fixed inset-0 z-50 lg:hidden flex flex-col justify-between overflow-hidden ${
              darkMode ? 'bg-black text-white' : 'bg-white text-black'
            }`}
          >
            {/* Mobile Drawer Top Header with Cancel (X) Button */}
            <div className={`h-14 sm:h-16 px-4 sm:px-8 flex items-center justify-between shrink-0 ${
              darkMode ? 'bg-black' : 'bg-white'
            }`}>
              <button
                onClick={() => {
                  onSelectTab('overview');
                  setMobileMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="flex items-center group cursor-pointer"
                aria-label="DIGIVOLT Home"
              >
                <Logo
                  variant="horizontal"
                  theme={darkMode ? 'dark' : 'light'}
                  className="h-4 sm:h-5 w-auto"
                  alt="DIGIVOLT"
                />
              </button>

              <div className="flex items-center gap-2">
                <button
                  onClick={onToggleDarkMode}
                  className={`p-1.5 rounded-full transition-colors flex items-center justify-center cursor-pointer ${
                    darkMode ? 'bg-black text-white' : 'bg-white text-black'
                  }`}
                  aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                >
                  {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-gray-700" />}
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAppModal();
                  }}
                  className={`text-[11px] font-semibold px-3 py-1.5 rounded-full transition-colors whitespace-nowrap cursor-pointer ${
                    darkMode
                      ? 'bg-white text-black hover:bg-neutral-200'
                      : 'bg-black text-white hover:bg-neutral-800'
                  }`}
                >
                  Get app
                </button>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className={`p-1.5 rounded-full transition-colors flex items-center justify-center cursor-pointer ${
                    darkMode ? 'text-white hover:bg-neutral-900' : 'text-black hover:bg-gray-100'
                  }`}
                  aria-label="Close navigation menu"
                >
                  <X className="w-6 h-6 stroke-[2.2]" />
                </button>
              </div>
            </div>

            {/* Scrollable Accordion Links */}
            <div className="flex-1 overflow-y-auto px-5 sm:px-8 py-5 flex flex-col justify-between">
              <div className="space-y-3">
                {[
                  { id: 'rides', label: 'Rides' },
                  { id: 'about', label: 'About' },
                  { id: 'support', label: 'Support' },
                ].map((item) => {
                  const isExpanded = expandedMobileTab === item.id;
                  const menu = menuData[item.id];

                  return (
                    <div key={item.id} className="pb-2.5">
                      <div className="flex items-center justify-between py-1.5">
                        <button
                          onClick={() => {
                            handleNavClick(item.id);
                            setMobileMenuOpen(false);
                          }}
                          className={`text-xl font-bold tracking-tight text-left transition-colors cursor-pointer ${
                            darkMode ? 'text-white hover:text-neutral-300' : 'text-black hover:text-neutral-600'
                          }`}
                        >
                          {item.label}
                        </button>

                        {menu && (
                          <button
                            onClick={() =>
                              setExpandedMobileTab(isExpanded ? null : item.id)
                            }
                            className={`p-2 cursor-pointer ${
                              darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-black'
                            }`}
                            aria-label={`Expand ${item.label}`}
                          >
                            <ChevronDown
                              className={`w-5 h-5 transition-transform ${
                                isExpanded ? 'rotate-180' : ''
                              }`}
                            />
                          </button>
                        )}
                      </div>

                      {/* Sublinks in mobile */}
                      {menu && isExpanded && (
                        <div className={`pl-4 py-2 space-y-2 text-sm rounded-xl p-3 mt-2 ${
                          darkMode ? 'bg-neutral-950 text-gray-300' : 'bg-gray-50 text-gray-600'
                        }`}>
                          <p className="text-xs text-gray-400 font-medium mb-1">
                            {menu.headline}
                          </p>
                          {menu.links.map((lnk) => (
                            <div
                              key={lnk.text}
                              onClick={() => {
                                if (lnk.action) lnk.action();
                                else if (lnk.href) window.open(lnk.href, '_blank');
                                setMobileMenuOpen(false);
                              }}
                              className={`py-1 flex items-center justify-between cursor-pointer ${
                                darkMode ? 'text-gray-200 hover:text-white' : 'text-gray-700 hover:text-black'
                              }`}
                            >
                              <span>{lnk.text}</span>
                              <ArrowUpRight className="w-3.5 h-3.5 text-gray-400" />
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Bottom Drawer CTA */}
              <div className="pt-6 pb-6 mt-6 space-y-3">
                <button
                  onClick={onToggleDarkMode}
                  className={`w-full py-3 rounded-full font-medium text-xs font-mono flex items-center justify-center gap-2 cursor-pointer transition-colors ${
                    darkMode ? 'bg-black text-white hover:bg-neutral-900' : 'bg-white text-black hover:bg-gray-100'
                  }`}
                >
                  {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-gray-700" />}
                  <span>Switch to {darkMode ? 'Light' : 'Dark'} Mode</span>
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAppModal();
                  }}
                  className={`w-full py-3.5 rounded-full font-semibold text-center text-sm transition-colors shadow-md cursor-pointer ${
                    darkMode
                      ? 'bg-white text-black hover:bg-neutral-200'
                      : 'bg-black text-white hover:bg-neutral-800'
                  }`}
                >
                  Get the DigiVolt app
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
