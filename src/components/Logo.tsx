import React from 'react';
import logoHorizBlack from '../assets/digivolt-horizontal-black.png';
import logoHorizWhite from '../assets/digivolt-horizontal-white.png';
import logoFullBlack from '../assets/digivolt-logo-black.png';
import logoFullWhite from '../assets/digivolt-logo-white.png';
import iconBlack from '../assets/digivolt-icon-black.png';
import iconWhite from '../assets/digivolt-icon-white.png';

interface LogoProps {
  variant?: 'horizontal' | 'stacked' | 'icon';
  theme?: 'light' | 'dark'; // 'light' means dark logo on light background; 'dark' means white logo on dark background
  className?: string;
  alt?: string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'horizontal',
  theme = 'light',
  className = '',
  alt = 'DIGIVOLT',
}) => {
  let src = logoHorizBlack;

  if (variant === 'horizontal') {
    src = theme === 'dark' ? logoHorizWhite : logoHorizBlack;
  } else if (variant === 'stacked') {
    src = theme === 'dark' ? logoFullWhite : logoFullBlack;
  } else if (variant === 'icon') {
    src = theme === 'dark' ? iconWhite : iconBlack;
  }

  const defaultClasses =
    variant === 'horizontal'
      ? 'h-4.5 sm:h-6 lg:h-7 w-auto object-contain'
      : variant === 'stacked'
      ? 'h-12 sm:h-14 lg:h-16 w-auto object-contain'
      : 'h-5 sm:h-6 lg:h-7 w-auto object-contain';

  return (
    <img
      src={src}
      alt={alt}
      className={`${defaultClasses} ${className}`}
      loading="eager"
    />
  );
};

export default Logo;
