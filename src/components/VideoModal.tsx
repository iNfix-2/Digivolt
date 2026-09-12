import React from 'react';
import { X } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  videoSrc?: string;
  imageSrc?: string;
  subtitle?: string;
  description?: string;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  title,
  videoSrc,
  imageSrc,
  subtitle,
  description,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl bg-black rounded-3xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4">
          <div>
            <span className="text-sm font-semibold text-white tracking-tight">{title}</span>
            {subtitle && (
              <span className="text-xs text-neutral-400 ml-2">{subtitle}</span>
            )}
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Media Content */}
        {imageSrc ? (
          <div className="relative aspect-[16/9] w-full bg-black flex flex-col justify-end overflow-hidden">
            <img
              src={imageSrc}
              alt={title}
              className="w-full h-full object-cover"
            />
            {description && (
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/80 to-transparent p-6 sm:p-8">
                <p className="text-sm sm:text-base text-neutral-100 max-w-2xl font-medium leading-relaxed">
                  {description}
                </p>
              </div>
            )}
          </div>
        ) : (
          <div className="relative aspect-[16/9] w-full bg-black">
            <video
              autoPlay
              controls
              playsInline
              src={videoSrc || 'https://storage.googleapis.com/gweb-mobius-waymo-cdn/waymo/uploads/a823001d2abee90c35f92d689141d845c4c4a49d.mp4'}
              className="w-full h-full object-contain"
            />
          </div>
        )}
      </div>
    </div>
  );
};
