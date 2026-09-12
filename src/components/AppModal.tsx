import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { Logo } from './Logo';
import { QRCodeSVG } from './QRCodeSVG';
import { isMobileDevice, getDirectStoreUrl, getUniversalDownloadUrl } from '../utils/appLinks';
import digivoltLogoWhite from '../assets/digivolt-logo-white.png';

interface AppModalProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode?: boolean;
}

export const AppModal: React.FC<AppModalProps> = ({ isOpen, onClose, darkMode = false }) => {
  // If triggered on mobile devices, redirect directly to the respective store
  useEffect(() => {
    if (isOpen && isMobileDevice()) {
      window.location.href = getDirectStoreUrl();
      onClose();
    }
  }, [isOpen, onClose]);

  // Only render on desktop and larger screen sizes
  if (!isOpen || isMobileDevice()) return null;

  const universalUrl = getUniversalDownloadUrl();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-sm sm:max-w-md bg-white dark:bg-black text-black dark:text-white rounded-3xl p-8 sm:p-10 shadow-2xl overflow-hidden transition-colors duration-200 flex flex-col items-center text-center">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-neutral-400 hover:text-black dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* DigiVolt Logo */}
        <div className="mb-4">
          <Logo
            variant="horizontal"
            theme={darkMode ? 'dark' : 'light'}
            className="h-6 sm:h-7 w-auto"
            alt="DIGIVOLT"
          />
        </div>

        {/* Header write-up */}
        <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-black dark:text-white mb-6">
          Get the DigiVolt App
        </h3>

        {/* Universal Scannable QR Code */}
        <div className="p-4 sm:p-5 bg-white rounded-2xl shadow-lg mb-6 flex items-center justify-center">
          <QRCodeSVG
            value={universalUrl}
            size={200}
            level="H"
            fgColor="#000000"
            bgColor="#ffffff"
            margin={2}
            centerBadgeImage={digivoltLogoWhite}
          />
        </div>

        {/* Text Below */}
        <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 font-normal leading-relaxed max-w-xs">
          Scan the QR code with your phone camera to download the DigiVolt app.
        </p>
      </div>
    </div>
  );
};

