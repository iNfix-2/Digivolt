import React, { useState } from 'react';
import { MapPin, ArrowUpRight } from 'lucide-react';

interface CityInfo {
  name: string;
  state?: string;
  x: number; // percentage
  y: number; // percentage
  status: 'serving' | 'up_next';
  partner?: string;
}

export const RidesMap: React.FC = () => {
  const [activeCountry, setActiveCountry] = useState<'nigeria' | 'usa' | 'japan' | 'uk'>('nigeria');
  const [selectedGroup, setSelectedGroup] = useState<'all' | 'serving' | 'up_next'>('all');
  const [hoveredCity, setHoveredCity] = useState<CityInfo | null>(null);

  const nigeriaCities: CityInfo[] = [
    // Serving Riders In Kaduna
    { name: 'Kaduna Central', state: 'Kaduna State', x: 47.0, y: 34.0, status: 'serving' },
    { name: 'Barnawa District', state: 'Kaduna State', x: 50.5, y: 38.0, status: 'serving' },
    { name: 'Millennium City', state: 'Kaduna State', x: 54.0, y: 35.0, status: 'serving' },
    { name: 'Independence Way Hub', state: 'Kaduna State', x: 46.5, y: 36.5, status: 'serving' },

    // Up Next
    { name: 'Abuja Central', state: 'FCT', x: 48.5, y: 49.0, status: 'up_next' },
    { name: 'Maitama & Wuse', state: 'Abuja FCT', x: 50.0, y: 47.5, status: 'up_next' },
    { name: 'Victoria Island', state: 'Lagos', x: 26.0, y: 78.0, status: 'up_next' },
    { name: 'Ikeja Tech Hub', state: 'Lagos', x: 25.0, y: 76.0, status: 'up_next' },
    { name: 'Kano Commercial Center', state: 'Kano', x: 57.0, y: 22.0, status: 'up_next' },
    { name: 'Port Harcourt', state: 'Rivers', x: 45.0, y: 84.0, status: 'up_next' },
    { name: 'Ibadan Urban Core', state: 'Oyo', x: 31.0, y: 72.0, status: 'up_next' },
  ];

  const usCities: CityInfo[] = [
    // Serving Riders In
    { name: 'San Francisco Bay Area', state: 'CA', x: 11.5, y: 45.2, status: 'serving' },
    { name: 'Los Angeles', state: 'CA', x: 15.2, y: 62.8, status: 'serving' },
    { name: 'San Diego', state: 'CA', x: 17.5, y: 68.5, status: 'serving' },
    { name: 'Phoenix', state: 'AZ', x: 24.3, y: 65.8, status: 'serving' },
    { name: 'Denver', state: 'CO', x: 34.7, y: 44.5, status: 'serving' },
    { name: 'San Antonio', state: 'TX', x: 46.0, y: 87.0, status: 'serving' },
    { name: 'Austin', state: 'TX', x: 48.0, y: 80.0, status: 'serving', partner: 'Ride on Uber' },
    { name: 'Dallas', state: 'TX', x: 50.0, y: 73.0, status: 'serving' },
    { name: 'Houston', state: 'TX', x: 52.0, y: 85.5, status: 'serving' },
    { name: 'Atlanta', state: 'GA', x: 73.2, y: 65.4, status: 'serving', partner: 'Ride on Uber' },
    { name: 'Nashville', state: 'TN', x: 68.5, y: 58.2, status: 'serving' },
    { name: 'Tampa', state: 'FL', x: 79.4, y: 82.5, status: 'serving' },
    { name: 'Orlando', state: 'FL', x: 81.2, y: 79.1, status: 'serving' },
    { name: 'Miami', state: 'FL', x: 84.5, y: 89.2, status: 'serving' },

    // Up Next
    { name: 'Seattle', state: 'WA', x: 15.8, y: 14.5, status: 'up_next' },
    { name: 'Portland', state: 'OR', x: 14.5, y: 22.0, status: 'up_next' },
    { name: 'Sacramento', state: 'CA', x: 13.0, y: 42.0, status: 'up_next' },
    { name: 'Las Vegas', state: 'NV', x: 21.2, y: 54.5, status: 'up_next' },
    { name: 'Minneapolis', state: 'MN', x: 55.0, y: 21.0, status: 'up_next' },
    { name: 'St. Louis', state: 'MO', x: 61.0, y: 45.0, status: 'up_next' },
    { name: 'Chicago', state: 'IL', x: 65.0, y: 31.5, status: 'up_next' },
    { name: 'Detroit', state: 'MI', x: 72.9, y: 29.8, status: 'up_next' },
    { name: 'New Orleans', state: 'LA', x: 61.5, y: 81.0, status: 'up_next' },
    { name: 'Charlotte', state: 'NC', x: 78.5, y: 58.4, status: 'up_next' },
    { name: 'Pittsburgh', state: 'PA', x: 77.5, y: 38.0, status: 'up_next' },
    { name: 'Washington', state: 'DC', x: 84.1, y: 43.8, status: 'up_next' },
    { name: 'Baltimore', state: 'MD', x: 85.2, y: 42.1, status: 'up_next' },
    { name: 'Philadelphia', state: 'PA', x: 87.2, y: 38.6, status: 'up_next' },
    { name: 'New York', state: 'NY', x: 89.5, y: 35.2, status: 'up_next' },
    { name: 'Boston', state: 'MA', x: 92.4, y: 28.5, status: 'up_next' },
  ];

  const activeCities = activeCountry === 'nigeria' ? nigeriaCities : usCities;
  const servingList = activeCities.filter((c) => c.status === 'serving');
  const upNextList = activeCities.filter((c) => c.status === 'up_next');

  const visibleCities =
    selectedGroup === 'all'
      ? activeCities
      : selectedGroup === 'serving'
      ? servingList
      : upNextList;

  return (
    <section id="rides-map" className="w-full bg-white dark:bg-black text-black dark:text-white py-28 sm:py-36 transition-colors duration-150">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-black dark:text-white leading-tight">
              Where DigiVolt is <span className="text-black dark:text-white">driving</span>
            </h2>
          </div>

          {/* Country Switcher */}
          <div className="flex flex-wrap items-center gap-2 bg-neutral-100 dark:bg-neutral-900 p-1.5 rounded-full shadow-sm w-fit">
            <button
              onClick={() => {
                setActiveCountry('nigeria');
                setHoveredCity(null);
              }}
              className={`px-5 py-2 rounded-full text-xs font-semibold tracking-tight transition-colors cursor-pointer ${
                activeCountry === 'nigeria' ? 'bg-black text-white dark:bg-white dark:text-black shadow-sm' : 'text-neutral-700 dark:text-gray-300 hover:text-black dark:hover:text-white'
              }`}
            >
              Nigeria (Live in Kaduna)
            </button>
            <button
              onClick={() => {
                setActiveCountry('usa');
                setHoveredCity(null);
              }}
              className={`px-5 py-2 rounded-full text-xs font-semibold tracking-tight transition-colors cursor-pointer ${
                activeCountry === 'usa' ? 'bg-black text-white dark:bg-white dark:text-black' : 'text-neutral-700 dark:text-gray-300 hover:text-black dark:hover:text-white'
              }`}
            >
              United States
            </button>
            <button
              onClick={() => {
                setActiveCountry('japan');
                setHoveredCity(null);
              }}
              className={`px-5 py-2 rounded-full text-xs font-semibold tracking-tight transition-colors cursor-pointer ${
                activeCountry === 'japan' ? 'bg-black text-white dark:bg-white dark:text-black' : 'text-neutral-700 dark:text-gray-300 hover:text-black dark:hover:text-white'
              }`}
            >
              Japan
            </button>
            <button
              onClick={() => {
                setActiveCountry('uk');
                setHoveredCity(null);
              }}
              className={`px-5 py-2 rounded-full text-xs font-semibold tracking-tight transition-colors cursor-pointer ${
                activeCountry === 'uk' ? 'bg-black text-white dark:bg-white dark:text-black' : 'text-neutral-700 dark:text-gray-300 hover:text-black dark:hover:text-white'
              }`}
            >
              United Kingdom
            </button>
          </div>
        </div>

        {/* Map Container & Interactive Surface */}
        <div className="bg-neutral-50 dark:bg-neutral-950 rounded-3xl sm:rounded-[36px] p-6 sm:p-10 lg:p-12 shadow-lg mb-14">
          
          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setSelectedGroup('all')}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  selectedGroup === 'all'
                    ? 'bg-black text-white dark:bg-white dark:text-black'
                    : 'bg-white dark:bg-black text-neutral-700 dark:text-gray-300'
                }`}
              >
                All Markets ({usCities.length})
              </button>
              <button
                onClick={() => setSelectedGroup('serving')}
                className={`px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                  selectedGroup === 'serving'
                    ? 'bg-black text-white dark:bg-white dark:text-black'
                    : 'bg-white dark:bg-black text-neutral-700 dark:text-gray-300'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-black dark:bg-white" />
                <span>Serving Riders In ({servingList.length})</span>
              </button>
              <button
                onClick={() => setSelectedGroup('up_next')}
                className={`px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                  selectedGroup === 'up_next'
                    ? 'bg-black text-white dark:bg-white dark:text-black'
                    : 'bg-white dark:bg-black text-neutral-700 dark:text-gray-300'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-neutral-400 dark:bg-neutral-600" />
                <span>Up Next ({upNextList.length})</span>
              </button>
            </div>

            {hoveredCity && (
              <div className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-black text-xs font-mono text-black dark:text-white">
                <MapPin className="w-3.5 h-3.5 text-black dark:text-white" />
                <span className="font-semibold">{hoveredCity.name}, {hoveredCity.state}</span>
                <span className="text-neutral-400">|</span>
                <span className="text-black dark:text-white font-bold">
                  {hoveredCity.status === 'serving' ? 'Serving Riders In' : 'Up Next'}
                </span>
                {hoveredCity.partner && (
                  <span className="bg-black text-white dark:bg-white dark:text-black px-2 py-0.5 rounded text-[10px] ml-1">
                    {hoveredCity.partner}
                  </span>
                )}
              </div>
            )}
          </div>

          {/* Graphical Map Board */}
          <div className="relative w-full aspect-[16/9] min-h-[340px] max-h-[580px] bg-gradient-to-b from-gray-50/60 to-white dark:from-neutral-900/60 dark:to-black rounded-2xl overflow-hidden flex items-center justify-center p-4">
            {/* Nigeria Operational Map Board */}
            {activeCountry === 'nigeria' && (
              <div className="relative w-full h-full flex flex-col items-center justify-center select-none">
                {/* SVG Outline Schematic of Nigeria with State Boundaries */}
                <svg
                  viewBox="0 0 800 500"
                  className="w-full h-full max-h-[500px] object-contain text-neutral-300 dark:text-neutral-800 opacity-60"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <circle cx="400" cy="250" r="220" stroke="currentColor" strokeDasharray="4 6" opacity="0.4" />
                  <circle cx="400" cy="250" r="140" stroke="currentColor" strokeDasharray="3 3" opacity="0.3" />
                  <path
                    d="M180,360 L210,380 L280,395 L340,410 L410,405 L470,390 L520,380 L580,340 L640,300 L680,240 L660,190 L630,150 L560,110 L490,100 L430,95 L370,105 L300,120 L240,150 L190,190 L160,250 L155,300 Z"
                    fill="currentColor"
                    fillOpacity="0.08"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  {/* Kaduna Operational Zone Highlight Box */}
                  <rect
                    x="340"
                    y="140"
                    width="120"
                    height="90"
                    rx="12"
                    fill="currentColor"
                    fillOpacity="0.15"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeDasharray="4 2"
                  />
                  <text x="400" y="132" textAnchor="middle" fill="currentColor" fontSize="10" fontFamily="monospace" fontWeight="bold">
                    KADUNA METRO SERVICE ZONE
                  </text>
                </svg>
              </div>
            )}

            {/* Real Official Map Graphic for USA */}
            {activeCountry === 'usa' && (
              <img
                src="https://lh3.googleusercontent.com/AX0BsT8-NtpxgUaCI4DSeL5J6iqqcpEJ85L-RUTKn1_8uck15vtGsH4cpQyRNEGXDzMOQUuMGGWYcl6fFgnvRgnFQOTf-02CN10=e365-s1000"
                alt="Map of USA"
                className="w-full h-full object-contain opacity-75 select-none pointer-events-none"
              />
            )}
            {activeCountry === 'japan' && (
              <div className="flex flex-col items-center justify-center text-center p-8">
                <img
                  src="https://lh3.googleusercontent.com/bYW-wApvLTVMdcr4esK99dTa6qU1IxolF7fDqWcuF5_eUaZakdvm9tGgPT47q6G_WC_2Cav16vp1d5uMu09Vm-dIKfPzYk7kP-Q=e365-s1000"
                  alt="Map of Japan"
                  className="max-h-80 object-contain mb-4"
                />
                <span className="text-sm font-semibold text-black dark:text-white">Tokyo, Japan</span>
                <span className="text-xs text-neutral-600 dark:text-neutral-400 font-mono mt-1">Fleet Electrification & Up Next</span>
              </div>
            )}
            {activeCountry === 'uk' && (
              <div className="flex flex-col items-center justify-center text-center p-8">
                <img
                  src="https://lh3.googleusercontent.com/SZUdRzGH2IpHsIy_uA-ERgABNNReLcIv1ePlbBHic2s8QEcf_rZx80r2HlSzyqjY7pR7AtUwd9_pZxw2bsm-w2QCGmtPOMnbcQ=e365-s1000"
                  alt="Map of UK"
                  className="max-h-80 object-contain mb-4"
                />
                <span className="text-sm font-semibold text-black dark:text-white">London, UK</span>
                <span className="text-xs text-neutral-600 dark:text-neutral-400 font-mono mt-1">EV Hub Infrastructure & Up Next</span>
              </div>
            )}

            {/* Interactive City Pins on Map for Nigeria and USA */}
            {(activeCountry === 'nigeria' || activeCountry === 'usa') &&
              visibleCities.map((city) => {
                const isHovered = hoveredCity?.name === city.name;
                const isServing = city.status === 'serving';

                return (
                  <div
                    key={city.name}
                    style={{ left: `${city.x}%`, top: `${city.y}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 z-20 group cursor-pointer"
                    onMouseEnter={() => setHoveredCity(city)}
                    onMouseLeave={() => setHoveredCity(null)}
                  >
                    {/* Pin Marker */}
                    <div
                      className={`relative flex items-center justify-center rounded-full transition-transform duration-150 ${
                        isHovered ? 'scale-150' : 'hover:scale-125'
                      } ${
                        isServing
                          ? 'w-4 h-4 bg-black dark:bg-white shadow-md'
                          : 'w-3 h-3 bg-neutral-400 dark:bg-neutral-600 shadow'
                      }`}
                    >
                      {isServing && (
                        <span className="absolute -inset-1 rounded-full bg-black/30 dark:bg-white/30 animate-ping" />
                      )}
                    </div>

                    {/* Popover Bubble */}
                    <div
                      className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 rounded-xl bg-black text-white text-[11px] font-sans font-medium whitespace-nowrap shadow-xl pointer-events-none transition-all ${
                        isHovered ? 'opacity-100 scale-100 -translate-y-1' : 'opacity-0 scale-95'
                      }`}
                    >
                      <div className="flex items-center gap-1.5">
                        <span>{city.name}, {city.state}</span>
                        {city.partner && (
                          <span className="text-[9px] bg-white/20 px-1 rounded">{city.partner}</span>
                        )}
                      </div>
                      <div className="text-[9px] text-gray-300 font-mono">
                        {isServing ? 'Serving Riders In' : 'Up Next'}
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>

        </div>

        {/* City Listings Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Serving Column */}
          <div className="bg-neutral-50 dark:bg-neutral-950 rounded-3xl p-8 shadow-sm">
            <h3 className="text-xl font-bold tracking-tight text-black dark:text-white mb-4">
              Serving Riders In
            </h3>
            <p className="text-xs text-neutral-600 dark:text-gray-400 mb-6 font-normal">
              100% electric rides with professional vetted drivers are open to the general public right now. Download the DigiVolt One app.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {servingList.map((city) => (
                <div
                  key={city.name}
                  className="p-3 rounded-2xl bg-white dark:bg-black transition-colors flex items-center justify-between"
                  onMouseEnter={() => setHoveredCity(city)}
                >
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-black dark:bg-white" />
                    <span className="text-sm font-medium text-black dark:text-white">{city.name}, {city.state}</span>
                  </div>
                  {city.partner ? (
                    <span className="text-[10px] font-semibold bg-black text-white dark:bg-white dark:text-black px-2 py-0.5 rounded-full flex items-center gap-1">
                      <span>{city.partner}</span>
                      <ArrowUpRight className="w-2.5 h-2.5 text-white dark:text-black" />
                    </span>
                  ) : (
                    <span className="text-[10px] font-mono text-black dark:text-white font-bold">Active</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Up Next Column */}
          <div className="bg-neutral-50 dark:bg-neutral-950 rounded-3xl p-8 shadow-sm">
            <h3 className="text-xl font-bold tracking-tight text-black dark:text-white mb-4">
              Up Next
            </h3>
            <p className="text-xs text-neutral-600 dark:text-gray-400 mb-6 font-normal">
              Fleet electrification, rapid charging hubs, and driver onboarding are underway in these expansion metros.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-[380px] overflow-y-auto pr-2">
              {upNextList.map((city) => (
                <div
                  key={city.name}
                  className="p-3 rounded-2xl bg-white dark:bg-black transition-colors flex items-center justify-between"
                  onMouseEnter={() => setHoveredCity(city)}
                >
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-500" />
                    <span className="text-sm font-medium text-neutral-800 dark:text-gray-200">{city.name}, {city.state}</span>
                  </div>
                  <span className="text-[10px] font-mono text-neutral-600 dark:text-neutral-400 font-medium">Coming Soon</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
