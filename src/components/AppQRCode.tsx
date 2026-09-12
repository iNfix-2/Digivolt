import React, { useState } from 'react';
import { QRCodeSVG } from './QRCodeSVG';
import { Smartphone, Check, Copy, ExternalLink, Download, Settings, Zap } from 'lucide-react';

import digivoltIconWhite from '../assets/digivolt-icon-white.png';
import { APP_STORE_URL, PLAY_STORE_URL, getUniversalDownloadUrl } from '../utils/appLinks';

export type PlatformTarget = 'smart' | 'ios' | 'android';

interface AppQRCodeProps {
  iosUrl?: string;
  androidUrl?: string;
  smartUrl?: string;
  className?: string;
  compact?: boolean;
}

export const AppQRCode: React.FC<AppQRCodeProps> = ({
  iosUrl: initialIosUrl = APP_STORE_URL,
  androidUrl: initialAndroidUrl = PLAY_STORE_URL,
  smartUrl: initialSmartUrl = getUniversalDownloadUrl(),
  className = '',
  compact = false,
}) => {
  const [selectedPlatform, setSelectedPlatform] = useState<PlatformTarget>('smart');
  const [copied, setCopied] = useState(false);
  const [showConfig, setShowConfig] = useState(false);

  // Editable URLs so developer can test with their real IDs
  const [iosUrl, setIosUrl] = useState(initialIosUrl);
  const [androidUrl, setAndroidUrl] = useState(initialAndroidUrl);
  const [smartUrl, setSmartUrl] = useState(initialSmartUrl);

  const getActiveUrl = () => {
    switch (selectedPlatform) {
      case 'ios':
        return iosUrl;
      case 'android':
        return androidUrl;
      case 'smart':
      default:
        return smartUrl;
    }
  };

  const activeUrl = getActiveUrl();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(activeUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback if clipboard API unavailable
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleDownloadPNG = () => {
    // Render SVG into an offscreen canvas for a high-res 1024x1024 PNG download
    const svgElement = document.getElementById('active-app-qrcode')?.querySelector('svg');
    if (!svgElement) return;

    const svgString = new XMLSerializer().serializeToString(svgElement);
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 1024;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = new Image();
    const svgBlob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
    const URL = window.URL || window.webkitURL || window;
    const blobURL = URL.createObjectURL(svgBlob);

    img.onload = () => {
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, 1024, 1024);
      ctx.drawImage(img, 0, 0, 1024, 1024);
      URL.revokeObjectURL(blobURL);

      const pngURL = canvas.toDataURL('image/png');
      const downloadLink = document.createElement('a');
      downloadLink.download = `digivolt-${selectedPlatform}-qr.png`;
      downloadLink.href = pngURL;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    };
    img.src = blobURL;
  };

  if (compact) {
    return (
      <div className={`flex flex-col items-center text-center ${className}`}>
        {/* Platform tabs */}
        <div className="flex items-center gap-1.5 p-1 bg-neutral-100 dark:bg-neutral-900 rounded-full mb-3 text-[11px] font-medium">
          <button
            type="button"
            onClick={() => setSelectedPlatform('smart')}
            className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
              selectedPlatform === 'smart'
                ? 'bg-black text-white dark:bg-white dark:text-black shadow-sm font-semibold'
                : 'text-neutral-600 dark:text-gray-400 hover:text-black dark:hover:text-white'
            }`}
          >
            Universal
          </button>
          <button
            type="button"
            onClick={() => setSelectedPlatform('ios')}
            className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
              selectedPlatform === 'ios'
                ? 'bg-black text-white dark:bg-white dark:text-black shadow-sm font-semibold'
                : 'text-neutral-600 dark:text-gray-400 hover:text-black dark:hover:text-white'
            }`}
          >
            iOS
          </button>
          <button
            type="button"
            onClick={() => setSelectedPlatform('android')}
            className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
              selectedPlatform === 'android'
                ? 'bg-black text-white dark:bg-white dark:text-black shadow-sm font-semibold'
                : 'text-neutral-600 dark:text-gray-400 hover:text-black dark:hover:text-white'
            }`}
          >
            Android
          </button>
        </div>

        {/* QR Display */}
        <div id="active-app-qrcode" className="p-3 bg-white rounded-2xl shadow-md">
          <QRCodeSVG
            value={activeUrl}
            size={136}
            level="H"
            fgColor="#000000"
            bgColor="#ffffff"
            margin={2}
            centerBadgeImage={digivoltIconWhite}
          />
        </div>

        <span className="text-[10px] font-mono text-neutral-500 dark:text-neutral-400 mt-2 flex items-center gap-1">
          <Smartphone className="w-3 h-3" />
          <span>Point phone camera to scan</span>
        </span>
      </div>
    );
  }

  return (
    <div className={`w-full flex flex-col items-center ${className}`}>
      {/* Platform Toggle Pills */}
      <div className="flex items-center gap-1.5 p-1.5 bg-neutral-100 dark:bg-neutral-900 rounded-full mb-5 shadow-sm text-xs font-semibold">
        <button
          type="button"
          onClick={() => setSelectedPlatform('smart')}
          className={`px-4 py-2 rounded-full transition-all flex items-center gap-1.5 cursor-pointer ${
            selectedPlatform === 'smart'
              ? 'bg-black text-white dark:bg-white dark:text-black shadow-md'
              : 'text-neutral-600 dark:text-gray-400 hover:text-black dark:hover:text-white'
          }`}
        >
          <Zap className="w-3.5 h-3.5 fill-current" />
          <span>Universal Smart Link</span>
        </button>

        <button
          type="button"
          onClick={() => setSelectedPlatform('ios')}
          className={`px-4 py-2 rounded-full transition-all flex items-center gap-1.5 cursor-pointer ${
            selectedPlatform === 'ios'
              ? 'bg-black text-white dark:bg-white dark:text-black shadow-md'
              : 'text-neutral-600 dark:text-gray-400 hover:text-black dark:hover:text-white'
          }`}
        >
          <Smartphone className="w-3.5 h-3.5" />
          <span>Apple iOS</span>
        </button>

        <button
          type="button"
          onClick={() => setSelectedPlatform('android')}
          className={`px-4 py-2 rounded-full transition-all flex items-center gap-1.5 cursor-pointer ${
            selectedPlatform === 'android'
              ? 'bg-black text-white dark:bg-white dark:text-black shadow-md'
              : 'text-neutral-600 dark:text-gray-400 hover:text-black dark:hover:text-white'
          }`}
        >
          <Smartphone className="w-3.5 h-3.5" />
          <span>Google Android</span>
        </button>
      </div>

      {/* Main Scannable QR Container */}
      <div className="flex flex-col sm:flex-row items-center gap-6 p-6 sm:p-7 rounded-3xl bg-neutral-50 dark:bg-neutral-950 shadow-sm w-full">
        {/* Crisp QR Code Box */}
        <div
          id="active-app-qrcode"
          className="p-3.5 bg-white rounded-2xl shadow-md flex items-center justify-center flex-shrink-0"
        >
          <QRCodeSVG
            value={activeUrl}
            size={160}
            level="H"
            fgColor="#000000"
            bgColor="#ffffff"
            margin={2}
            centerBadgeImage={digivoltIconWhite}
          />
        </div>

        {/* Info & Action Panel */}
        <div className="flex-1 text-left space-y-3 w-full">
          <div className="flex items-center justify-between">
            <div className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold px-2.5 py-1 rounded-full bg-neutral-200 dark:bg-neutral-800 text-black dark:text-white uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>
                {selectedPlatform === 'smart' && 'Auto-Detects iOS & Android'}
                {selectedPlatform === 'ios' && 'Direct Apple App Store Link'}
                {selectedPlatform === 'android' && 'Direct Google Play Store Link'}
              </span>
            </div>

            <button
              type="button"
              onClick={() => setShowConfig(!showConfig)}
              className="text-neutral-400 hover:text-black dark:hover:text-white p-1 rounded-lg transition-colors cursor-pointer"
              title="Configure store URLs"
            >
              <Settings className="w-4 h-4" />
            </button>
          </div>

          <h4 className="text-base sm:text-lg font-bold text-black dark:text-white tracking-tight">
            {selectedPlatform === 'smart' && 'Scan to open on any smartphone'}
            {selectedPlatform === 'ios' && 'Scan with iPhone or iPad camera'}
            {selectedPlatform === 'android' && 'Scan with Android camera or Lens'}
          </h4>

          <p className="text-xs text-neutral-600 dark:text-gray-400 font-normal leading-relaxed">
            {selectedPlatform === 'smart' && (
              'This Universal Smart Link automatically redirects iPhone users to the Apple App Store, and Android users to the Google Play Store.'
            )}
            {selectedPlatform === 'ios' && (
              'Instantly launches the Apple App Store preview and installs DigiVolt One on compatible iOS devices.'
            )}
            {selectedPlatform === 'android' && (
              'Instantly launches Google Play Store and installs DigiVolt One on Android devices.'
            )}
          </p>

          {/* Destination URL Display with Copy and External Link buttons */}
          <div className="p-2.5 rounded-xl bg-white dark:bg-black shadow-inner flex items-center justify-between gap-2">
            <span className="text-[11px] font-mono text-neutral-700 dark:text-neutral-300 truncate select-all">
              {activeUrl}
            </span>

            <div className="flex items-center gap-1.5 flex-shrink-0">
              <button
                type="button"
                onClick={handleCopy}
                className="px-2.5 py-1 rounded-lg bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-black dark:text-white text-[11px] font-semibold flex items-center gap-1 transition-colors cursor-pointer"
                title="Copy link to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-500" />
                    <span className="text-emerald-500">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>Copy</span>
                  </>
                )}
              </button>

              <a
                href={activeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-black dark:text-white transition-colors cursor-pointer"
                title="Open link in new tab to test"
              >
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* High-res Download for Print / Marketing */}
          <div className="pt-1 flex items-center gap-3">
            <button
              type="button"
              onClick={handleDownloadPNG}
              className="text-xs font-semibold text-neutral-600 dark:text-gray-300 hover:text-black dark:hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download High-Res QR for Print (1024×1024 PNG)</span>
            </button>
          </div>
        </div>
      </div>

      {/* Optional In-Modal Store URL Configurator for developer */}
      {showConfig && (
        <div className="w-full mt-4 p-5 rounded-2xl bg-neutral-100 dark:bg-neutral-900 text-left space-y-3 text-xs animate-in fade-in duration-200">
          <div className="flex items-center justify-between">
            <span className="font-bold text-black dark:text-white font-mono uppercase tracking-wider">
              Store URLs Configuration
            </span>
            <span className="text-[11px] text-neutral-500">Updates live QR code</span>
          </div>

          <div className="space-y-2">
            <div>
              <label className="block text-[11px] font-semibold text-neutral-700 dark:text-neutral-300 mb-1">
                Universal Smart Link:
              </label>
              <input
                type="text"
                value={smartUrl}
                onChange={(e) => setSmartUrl(e.target.value)}
                className="w-full px-3 py-1.5 rounded-lg bg-white dark:bg-black text-black dark:text-white text-xs font-mono focus:outline-none"
                placeholder="https://digivolt.ng/download"
              />
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-neutral-700 dark:text-neutral-300 mb-1">
                Apple App Store URL:
              </label>
              <input
                type="text"
                value={iosUrl}
                onChange={(e) => setIosUrl(e.target.value)}
                className="w-full px-3 py-1.5 rounded-lg bg-white dark:bg-black text-black dark:text-white text-xs font-mono focus:outline-none"
                placeholder="https://apps.apple.com/app/digivolt/id..."
              />
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-neutral-700 dark:text-neutral-300 mb-1">
                Google Play Store URL:
              </label>
              <input
                type="text"
                value={androidUrl}
                onChange={(e) => setAndroidUrl(e.target.value)}
                className="w-full px-3 py-1.5 rounded-lg bg-white dark:bg-black text-black dark:text-white text-xs font-mono focus:outline-none"
                placeholder="https://play.google.com/store/apps/details?id=..."
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
