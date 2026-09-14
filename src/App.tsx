import { useState, useEffect } from 'react';
import { Navbar, NavTab } from './components/Navbar';
import { HomeHero } from './components/HomeHero';
import { HomeFeatures } from './components/HomeFeatures';
import { HomeRiderStories } from './components/HomeRiderStories';
import { HomeWhyHere } from './components/HomeWhyHere';
import { HomeMission } from './components/HomeMission';
import { RidesHero } from './components/RidesHero';
import { RidesHowItWorks } from './components/RidesHowItWorks';
import { RidesExperience } from './components/RidesExperience';
import { RidesFAQ } from './components/RidesFAQ';
import { RidesOmniCta } from './components/RidesOmniCta';
import { SupportTab } from './components/SupportTab';
import { AboutTab } from './components/AboutTab';
import { Footer } from './components/Footer';
import { AppModal } from './components/AppModal';
import { AppShowcase } from './components/AppShowcase';
import { VideoModal } from './components/VideoModal';
import { isMobileDevice, getDirectStoreUrl } from './utils/appLinks';

export function App() {
  const [activeTab, setActiveTab] = useState<NavTab>('overview');
  const [isAppModalOpen, setIsAppModalOpen] = useState(false);
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('digivolt_theme');
      if (saved) return saved === 'dark';
    }
    return true;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('digivolt_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('digivolt_theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const [videoModalData, setVideoModalData] = useState<{
    isOpen: boolean;
    title: string;
    videoSrc?: string;
    imageSrc?: string;
    subtitle?: string;
    description?: string;
  }>({
    isOpen: false,
    title: 'DigiVolt Film',
  });

  // Synchronize URL hash with activeTab & support browser back/forward and anchor jumps
  useEffect(() => {
    const handleHashChange = () => {
      const rawHash = window.location.hash.replace('#', '');
      if (!rawHash) return;

      // Direct Tab Keys
      if (['overview', 'rides', 'about', 'support'].includes(rawHash)) {
        setActiveTab(rawHash as NavTab);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      // Technology or About sub-anchors -> redirect to about tab and scroll to section
      if (rawHash === 'technology' || rawHash === 'about-technology' || rawHash === 'about-charging') {
        setActiveTab('about');
        setTimeout(() => {
          document.getElementById(rawHash)?.scrollIntoView({ behavior: 'smooth' });
        }, 120);
        return;
      }

      // Support sub-anchors (faq, terms, policies, contact)
      if (rawHash.startsWith('support')) {
        setActiveTab('support');
        setTimeout(() => {
          document.getElementById(rawHash)?.scrollIntoView({ behavior: 'smooth' });
        }, 120);
        return;
      }

      // Sub-anchors inside rides
      if (['rides-how-it-works', 'rides-experience', 'have-more-questions-about-riding-with-digivolt', 'rides-made-simple'].includes(rawHash)) {
        setActiveTab('rides');
        setTimeout(() => {
          document.getElementById(rawHash)?.scrollIntoView({ behavior: 'smooth' });
        }, 120);
        return;
      }

      // Sub-anchors inside overview
      if (['app-showcase', 'why-they-ride-with-digivolt', 'why-digivolt-is-here', 'our-mission-be-the-worlds-most-trusted-driver', 'features'].includes(rawHash)) {
        setActiveTab('overview');
        setTimeout(() => {
          document.getElementById(rawHash)?.scrollIntoView({ behavior: 'smooth' });
        }, 120);
        return;
      }

      setActiveTab('overview');
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);

    // Universal smart link handler for /download
    if (window.location.pathname === '/download' || window.location.hash === '#download') {
      window.location.replace(getDirectStoreUrl());
    }

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleTabSelect = (tab: NavTab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenAppModal = () => {
    if (isMobileDevice()) {
      window.location.href = getDirectStoreUrl();
    } else {
      setIsAppModalOpen(true);
    }
  };

  const handleCloseAppModal = () => {
    setIsAppModalOpen(false);
  };

  const handleOpenFilm = () => {
    setVideoModalData({
      isOpen: true,
      title: 'Redefining Urban Mobility in Kaduna',
      videoSrc: 'https://storage.googleapis.com/waymo-prod-cdn/uploads/797b1a896b36484b3fc9391673befa8d-rides_hero.mp4',
      subtitle: 'Official Fleet Film',
      description: 'Experience how DigiVolt is delivering quiet, clean, zero-emission transportation with professional vetted drivers across Kaduna.',
    });
  };

  return (
    <div className={`min-h-screen font-sans ${darkMode ? 'dark bg-black text-white' : 'bg-white text-black'} transition-colors duration-150`}>
      {/* Universal Desktop & Mobile Header */}
      <Navbar
        activeTab={activeTab}
        onSelectTab={handleTabSelect}
        onOpenAppModal={handleOpenAppModal}
        darkMode={darkMode}
        onToggleDarkMode={toggleDarkMode}
      />

      <main>
        {/* TAB 1: OVERVIEW / HOMEPAGE */}
        {activeTab === 'overview' && (
          <>
            <HomeHero
              onWatchFilm={handleOpenFilm}
              onFindRide={() => handleTabSelect('rides')}
              onGetApp={handleOpenAppModal}
            />
            <RidesHowItWorks onDownloadApp={handleOpenAppModal} />
            <HomeFeatures onDownloadApp={handleOpenAppModal} />
            <AppShowcase onGetApp={handleOpenAppModal} />
            <HomeRiderStories />
            <HomeWhyHere />
            <HomeMission
              onExploreAbout={() => handleTabSelect('about')}
            />
            <RidesOmniCta onOpenAppModal={handleOpenAppModal} />
          </>
        )}

        {/* TAB 2: RIDES */}
        {activeTab === 'rides' && (
          <>
            <RidesHero onRideClick={handleOpenAppModal} />
            <RidesHowItWorks onDownloadApp={handleOpenAppModal} />
            <RidesExperience />
            <AppShowcase onGetApp={handleOpenAppModal} />
            <RidesFAQ />
            <RidesOmniCta onOpenAppModal={handleOpenAppModal} />
          </>
        )}

        {/* TAB 3: ABOUT (WITH INTEGRATED TECHNOLOGY) */}
        {activeTab === 'about' && (
          <AboutTab onRideClick={() => handleTabSelect('rides')} />
        )}

        {/* TAB 4: SUPPORT */}
        {activeTab === 'support' && (
          <SupportTab onOpenAppModal={handleOpenAppModal} />
        )}
      </main>

      {/* Structured Multi-Column DigiVolt Footer */}
      <Footer
        darkMode={darkMode}
        onSelectTab={handleTabSelect}
        onOpenAppModal={handleOpenAppModal}
      />

      {/* App Download Modal */}
      <AppModal isOpen={isAppModalOpen} onClose={handleCloseAppModal} darkMode={darkMode} />

      {/* Video / Film / Scenario Modal */}
      <VideoModal
        isOpen={videoModalData.isOpen}
        onClose={() => setVideoModalData({ ...videoModalData, isOpen: false })}
        title={videoModalData.title}
        videoSrc={videoModalData.videoSrc}
        imageSrc={videoModalData.imageSrc}
        subtitle={videoModalData.subtitle}
        description={videoModalData.description}
      />
    </div>
  );
}

export default App;
