import React, { useMemo } from 'react';
import { QrCodeModel, EccLevel } from '../utils/qrCode';

export interface QRCodeSVGProps {
  value: string;
  size?: number | string;
  level?: EccLevel;
  fgColor?: string;
  bgColor?: string;
  margin?: number;
  className?: string;
  centerBadgeText?: string;
  centerBadgeIcon?: React.ReactNode;
  centerBadgeImage?: string;
}

export const QRCodeSVG: React.FC<QRCodeSVGProps> = ({
  value,
  size = 200,
  level = 'M',
  fgColor = '#000000',
  bgColor = '#ffffff',
  margin = 2,
  className = '',
  centerBadgeText,
  centerBadgeIcon,
  centerBadgeImage,
}) => {
  const qrData = useMemo(() => {
    try {
      const qr = QrCodeModel.encodeText(value, level);
      return qr.toSvgPath(margin);
    } catch (err) {
      console.error('Failed to generate QR code:', err);
      return null;
    }
  }, [value, level, margin]);

  if (!qrData) {
    return (
      <div
        style={{ width: size, height: size }}
        className={`flex items-center justify-center bg-neutral-100 dark:bg-neutral-800 text-neutral-400 text-xs text-center p-2 rounded-xl ${className}`}
      >
        QR generation error
      </div>
    );
  }

  const { path, viewBoxSize } = qrData;
  const hasBadge = Boolean(centerBadgeIcon || centerBadgeImage || centerBadgeText);
  const centerSize = Math.floor(viewBoxSize * 0.24);
  const centerPos = (viewBoxSize - centerSize) / 2;

  return (
    <div className={`relative inline-block select-none ${className}`} style={{ width: size, height: size }}>
      <svg
        viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
        className="w-full h-full rounded-2xl overflow-hidden shadow-sm"
        xmlns="http://www.w3.org/2000/svg"
        shapeRendering="crispEdges"
      >
        {/* Quiet zone background */}
        <rect width={viewBoxSize} height={viewBoxSize} fill={bgColor} />

        {/* QR Code modules */}
        <path d={path} fill={fgColor} />

        {/* Optional Center Badge Overlay */}
        {hasBadge && (
          <g>
            {/* White outer boundary margin to isolate badge from modules */}
            <rect
              x={centerPos - 1.5}
              y={centerPos - 1.5}
              width={centerSize + 3}
              height={centerSize + 3}
              rx={centerSize * 0.28}
              fill={bgColor}
            />
            {/* Dark badge container */}
            <rect
              x={centerPos}
              y={centerPos}
              width={centerSize}
              height={centerSize}
              rx={centerSize * 0.22}
              fill={fgColor}
            />
            {centerBadgeImage && (
              <image
                href={centerBadgeImage}
                x={centerPos + centerSize * 0.12}
                y={centerPos + centerSize * 0.18}
                width={centerSize * 0.76}
                height={centerSize * 0.64}
                preserveAspectRatio="xMidYMid meet"
              />
            )}
          </g>
        )}
      </svg>

      {/* HTML Icon/Image overlay in center badge if provided */}
      {hasBadge && (
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center text-white pointer-events-none"
          style={{
            width: typeof size === 'number' ? size * 0.24 : '24%',
            height: typeof size === 'number' ? size * 0.24 : '24%',
          }}
        >
          {centerBadgeIcon ? (
            centerBadgeIcon
          ) : centerBadgeImage ? (
            <img
              src={centerBadgeImage}
              alt="DigiVolt"
              className="w-3/4 h-3/4 object-contain"
            />
          ) : (
            <span className="font-mono font-bold text-[10px] tracking-tighter">
              {centerBadgeText}
            </span>
          )}
        </div>
      )}
    </div>
  );
};
