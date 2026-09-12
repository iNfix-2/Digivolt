import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Logo } from './Logo';
import { NavTab } from './Navbar';

interface FooterProps {
  darkMode?: boolean;
  onSelectTab?: (tab: NavTab) => void;
  onOpenAppModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ darkMode, onSelectTab, onOpenAppModal: _onOpenAppModal }) => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const rawTarget = href.replace('#', '');
      if (['overview', 'rides', 'about', 'support'].includes(rawTarget)) {
        onSelectTab?.(rawTarget as NavTab);
        window.location.hash = rawTarget;
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (rawTarget.startsWith('support')) {
        onSelectTab?.('support');
        window.location.hash = rawTarget;
        setTimeout(() => {
          document.getElementById(rawTarget)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else if (rawTarget === 'about-technology') {
        onSelectTab?.('about');
        window.location.hash = rawTarget;
        setTimeout(() => {
          document.getElementById('about-technology')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else if (['rides-how-it-works', 'rides-experience'].includes(rawTarget)) {
        onSelectTab?.('rides');
        window.location.hash = rawTarget;
        setTimeout(() => {
          document.getElementById(rawTarget)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        window.location.hash = rawTarget;
      }
    }
  };
  const footerColumns = [
    {
      title: 'DigiVolt One',
      links: [
        { name: 'Electric Ride-Hailing', href: '#rides' },
        { name: 'How It Works', href: '#rides-how-it-works' },
        { name: 'Whisper-Quiet Cabin', href: '#rides-experience' },
        { name: 'DigiVolt for Business', href: '#rides' },
        { name: 'Airport Transfers', href: '#rides' },
      ],
    },
    {
      title: 'About & Innovation',
      links: [
        { name: 'About DigiVolt', href: '#about' },
        { name: 'Our Mission & Journey', href: '#about' },
        { name: 'The EV Platform & Tech', href: '#about-technology' },
        { name: '800V Architecture & Battery', href: '#about-technology' },
        { name: 'Sustainability Goals', href: '#about' },
      ],
    },
    {
      title: 'Support & Policies',
      links: [
        { name: 'Help Center & FAQs', href: '#support-faq' },
        { name: 'Terms & Conditions', href: '#support-terms' },
        { name: 'Rider Policies & Conduct', href: '#support-policies' },
        { name: 'Lost & Found Hub', href: '#support-faq' },
        { name: 'Contact 24/7 Desk', href: '#support-contact' },
      ],
    },
    {
      title: 'Apps & Help Desk',
      links: [
        { name: 'Download for iOS', href: 'https://apps.apple.com/us/app/digivolt/id6766707727' },
        { name: 'Download for Android', href: 'https://play.google.com/store/apps/details?id=com.digi02.digivolt' },
        { name: 'Frequently Asked Questions', href: '#support-faq' },
        { name: 'Email Support Desk', href: 'mailto:support@digivolt.com' },
      ],
    },
  ];

  return (
    <footer id="company" className="w-full bg-white dark:bg-black text-black dark:text-white pt-20 pb-16 transition-colors duration-150">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Top Branding and App Download Pill Buttons */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-16 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Logo
                variant="horizontal"
                theme={darkMode ? 'dark' : 'light'}
                className="h-8 sm:h-9 w-auto"
                alt="DIGIVOLT"
              />
            </div>
            <p className="text-sm text-neutral-700 dark:text-gray-300 max-w-md font-normal leading-relaxed">
              The future of ride-hailing is Electric. Redefining urban mobility with zero tailpipe emissions, whisper-quiet cabin comfort, and rigorously vetted professional chauffeurs.
            </p>
          </div>

          {/* App Store Download Pill Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://apps.apple.com/us/app/digivolt/id6766707727"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-black hover:bg-neutral-100 dark:hover:bg-neutral-900 text-black dark:text-white text-xs sm:text-sm px-5 py-3 rounded-full flex items-center gap-2.5 transition-colors font-medium shadow-sm cursor-pointer"
            >
              <svg className="w-4 h-4 fill-current text-black dark:text-white" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.92-2.85-.9.04-1.98.6-2.61 1.34-.55.63-1.03 1.68-.9 2.71 1 .08 2.02-.51 2.59-1.2" />
              </svg>
              <span>Download on App Store</span>
            </a>

            <a
              href="https://play.google.com/store/apps/details?id=com.digi02.digivolt"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white dark:bg-white dark:text-black hover:opacity-90 text-xs sm:text-sm px-5 py-3 rounded-full flex items-center gap-2.5 transition-all shadow-md font-semibold cursor-pointer"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M3.609 1.814L13.792 12 3.61 22.186c-.352-.304-.567-.75-.567-1.258V3.072c0-.508.215-.954.566-1.258zm11.238 11.241l2.453 2.453-12.012 6.938 9.559-9.391zm2.453-2.11L14.847 8.49l-9.56-9.393 12.013 6.938zm1.055.823l2.842 1.642c.799.462.799 1.218 0 1.68l-2.842 1.642-2.148-2.482 2.148-2.482z" />
              </svg>
              <span>Get it on Google Play</span>
            </a>
          </div>
        </div>

        {/* Multi-Column Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 py-16">
          {footerColumns.map((col) => (
            <div key={col.title} className="flex flex-col space-y-4">
              <h4 className="text-sm font-bold tracking-tight text-black dark:text-white uppercase font-mono">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className="text-sm text-neutral-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors font-normal flex items-center gap-1 group cursor-pointer"
                    >
                      <span>{link.name}</span>
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-black dark:text-white" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Social Icons and Legal */}
        <div className="pt-12 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-neutral-600 dark:text-gray-400 font-normal">
          {/* Social Icons */}
          <div className="flex items-center space-x-6 text-neutral-600 dark:text-gray-400">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black dark:hover:text-white transition-colors"
              aria-label="DIGIVOLT on X (Twitter)"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black dark:hover:text-white transition-colors"
              aria-label="DIGIVOLT on Instagram"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black dark:hover:text-white transition-colors"
              aria-label="DIGIVOLT on YouTube"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black dark:hover:text-white transition-colors"
              aria-label="DIGIVOLT on LinkedIn"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37h2.79V10.9H6.46M7.86 6.81a1.63 1.63 0 0 0-1.63 1.62c0 .9.73 1.63 1.63 1.63.9 0 1.63-.73 1.63-1.63 0-.9-.73-1.62-1.63-1.62z" />
              </svg>
            </a>
          </div>

          {/* Legal / Copyright */}
          <div className="flex flex-wrap items-center gap-6">
            <span>© {new Date().getFullYear()} DIGIVOLT Technologies Inc. All rights reserved.</span>
            <div className="flex items-center gap-4">
              <a href="#support-policies" onClick={(e) => handleLinkClick(e, '#support-policies')} className="hover:text-black dark:hover:text-white transition-colors cursor-pointer">Privacy & Policies</a>
              <span>•</span>
              <a href="#support-terms" onClick={(e) => handleLinkClick(e, '#support-terms')} className="hover:text-black dark:hover:text-white transition-colors cursor-pointer">Terms of Service</a>
              <span>•</span>
              <a href="#support-faq" onClick={(e) => handleLinkClick(e, '#support-faq')} className="hover:text-black dark:hover:text-white transition-colors cursor-pointer">FAQs</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
