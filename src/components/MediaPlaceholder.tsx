import React, { useState } from 'react';
import { Eye, Shield, Cpu, Compass, Wifi } from 'lucide-react';

interface MediaPlaceholderProps {
  type: 'video' | 'image';
  src?: string;
  alt?: string;
  className?: string;
  aspectRatio?: string;
  variant?: 'vehicle' | 'interior' | 'sensor' | 'city' | 'hardware';
  badgeText?: string;
}

export const MediaPlaceholder: React.FC<MediaPlaceholderProps> = ({
  type,
  src = type === 'video' ? 'https://placeholder.video.mp4' : 'https://placeholder.image.jpg',
  alt = 'DigiVolt electric vehicle media asset',
  className = '',
  aspectRatio = 'aspect-[16/10]',
  variant = 'vehicle',
  badgeText,
}) => {
  const [loadError, setLoadError] = useState(false);

  // Variant aesthetic styling and graphics for fallback representation
  const getVariantContent = () => {
    switch (variant) {
      case 'vehicle':
        return (
          <div className="relative w-full h-full bg-gradient-to-br from-gray-100 via-gray-50 to-gray-200 flex flex-col items-center justify-center p-8 overflow-hidden">
            {/* Electric vehicle outline & telemetry visualization */}
            <div className="absolute inset-0 opacity-15">
              <svg className="w-full h-full" viewBox="0 0 400 300" fill="none">
                <circle cx="200" cy="150" r="120" stroke="#000000" strokeWidth="1" strokeDasharray="4 4" />
                <circle cx="200" cy="150" r="80" stroke="#000000" strokeWidth="1" />
                <circle cx="200" cy="150" r="40" stroke="#000000" strokeWidth="1.5" />
                <line x1="200" y1="0" x2="200" y2="300" stroke="#000000" strokeWidth="0.5" strokeDasharray="3 3" />
                <line x1="0" y1="150" x2="400" y2="150" stroke="#000000" strokeWidth="0.5" strokeDasharray="3 3" />
              </svg>
            </div>
            
            {/* Clean Electric Car silhouette */}
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-24 h-24 mb-4 rounded-full bg-black text-white flex items-center justify-center shadow-lg">
                <Compass className="w-10 h-10 animate-spin" style={{ animationDuration: '18s' }} />
              </div>
              <span className="text-xs uppercase tracking-widest font-mono text-black dark:text-white mb-1 font-semibold">
                Electric Vehicle Platform
              </span>
              <p className="text-xl font-medium tracking-tight text-black">
                DigiVolt EV Platform
              </p>
            </div>

            {/* Telemetry chips */}
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-[11px] font-mono text-gray-500 pt-3">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-black dark:bg-white animate-pulse"></span>
                PERCEPTION ACTIVE
              </span>
              <span className="text-gray-400">SRC: {src.replace('https://', '')}</span>
            </div>
          </div>
        );

      case 'interior':
        return (
          <div className="relative w-full h-full bg-[#161616] text-white flex flex-col items-center justify-center p-8 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
            
            <div className="relative z-10 flex flex-col items-center text-center max-w-sm">
              <div className="w-16 h-16 mb-4 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <span className="text-xs uppercase tracking-widest font-mono text-gray-400 mb-1">
                Cabin Experience
              </span>
              <p className="text-2xl font-light tracking-tight text-white mb-2">
                Pure Personal Space
              </p>
              <p className="text-sm text-gray-400">
                Whisper-quiet electric drive, customized dual-zone climate, and vetted driver professionalism.
              </p>
            </div>

            <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[11px] font-mono text-gray-300">
              <Wifi className="w-3 h-3 text-white" /> PASSENGER AUDIO & AMBIENT
            </div>
          </div>
        );

      case 'sensor':
        return (
          <div className="relative w-full h-full bg-white dark:bg-black text-black dark:text-white flex flex-col items-center justify-center p-8 overflow-hidden transition-colors duration-150">
            {/* EV Telemetry simulation */}
            <div className="absolute inset-0 flex items-center justify-center opacity-30">
              <div className="w-80 h-80 rounded-full bg-black/5 dark:bg-white/5 animate-ping" style={{ animationDuration: '4s' }} />
              <div className="absolute w-60 h-60 rounded-full bg-black/5 dark:bg-white/5" />
              <div className="absolute w-40 h-40 rounded-full bg-black/5 dark:bg-white/5" />
              <div className="absolute w-20 h-20 rounded-full bg-black/5 dark:bg-white/5" />
            </div>

            <div className="relative z-10 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center text-black dark:text-white">
                <Cpu className="w-8 h-8" />
              </div>
              <span className="text-xs font-mono uppercase tracking-widest text-black dark:text-white font-bold">
                EV Powertrain & Safety Telemetry
              </span>
              <h4 className="text-xl font-semibold tracking-tight text-black dark:text-white mt-1 mb-2">
                800V Smart Energy & ADAS
              </h4>
              <p className="text-xs font-mono text-neutral-600 dark:text-gray-400">
                Continuous battery thermal monitoring & active collision avoidance
              </p>
            </div>

            <div className="absolute bottom-4 right-4 text-[10px] font-mono text-neutral-500 dark:text-neutral-400">
              [EV_TELEMETRY_STREAM_ACTIVE]
            </div>
          </div>
        );

      default:
        return (
          <div className="relative w-full h-full bg-gray-100 flex flex-col items-center justify-center p-8 text-center">
            <Shield className="w-12 h-12 text-black mb-3 stroke-1" />
            <span className="text-xs font-mono tracking-widest text-black dark:text-white uppercase font-semibold">DigiVolt Media</span>
            <p className="text-lg font-medium text-black mt-1">Electric Mobility</p>
            <span className="text-xs text-gray-500 mt-2 font-mono">{src}</span>
          </div>
        );
    }
  };

  return (
    <div className={`relative overflow-hidden rounded-3xl ${aspectRatio} bg-gray-100 group ${className}`}>
      {/* Badge label */}
      {badgeText && (
        <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-medium tracking-wide text-black shadow-sm">
          {badgeText}
        </div>
      )}

      {/* The Actual Video / Image element as requested */}
      {type === 'video' ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          src={src}
          onError={() => setLoadError(true)}
          className={`w-full h-full object-cover transition-opacity duration-700 ${
            loadError ? 'opacity-0 absolute inset-0' : 'opacity-100'
          }`}
        />
      ) : (
        <img
          src={src}
          alt={alt}
          onError={() => setLoadError(true)}
          className={`w-full h-full object-cover transition-opacity duration-700 ${
            loadError ? 'opacity-0 absolute inset-0' : 'opacity-100'
          }`}
        />
      )}

      {/* Fallback Graphic UI if placeholder URL is not yet substituted or unreachable */}
      {loadError && (
        <div className="absolute inset-0 w-full h-full">
          {getVariantContent()}
        </div>
      )}
    </div>
  );
};
