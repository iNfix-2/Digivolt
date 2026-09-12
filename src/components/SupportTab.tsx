import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  HelpCircle, 
  FileText, 
  ShieldCheck, 
  Mail, 
  Phone, 
  ChevronDown, 
  Clock, 
  CheckCircle2, 
  AlertCircle,
  ExternalLink
} from 'lucide-react';

interface SupportTabProps {
  onOpenAppModal?: () => void;
}

export const SupportTab: React.FC<SupportTabProps> = ({ onOpenAppModal }) => {
  const [activeSubTab, setActiveSubTab] = useState<'faq' | 'terms' | 'policies' | 'contact'>('faq');
  const [faqSearch, setFaqSearch] = useState('');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [faqCategory, setFaqCategory] = useState<'all' | 'booking' | 'comfort' | 'payment' | 'safety' | 'lost'>('all');

  const faqs = [
    {
      category: 'booking',
      q: 'How do I book an electric ride with DigiVolt?',
      a: 'You can book your ride instantly using the DigiVolt mobile app on iOS or Android. Simply enter your destination, choose your pickup spot, see the upfront fare and estimated arrival time, and tap "Request Car". You will be matched with a vetted chauffeur within seconds.',
    },
    {
      category: 'booking',
      q: 'Can I schedule a DigiVolt ride in advance?',
      a: 'Yes! You can reserve your electric ride up to 7 days in advance. Perfect for early morning airport transfers or critical business meetings. Your scheduled EV and chauffeur are locked in with guaranteed arrival.',
    },
    {
      category: 'booking',
      q: 'Where does DigiVolt currently operate?',
      a: 'DigiVolt currently operates across Kaduna metropolitan areas, including Kaduna Central, Barnawa, Millennium City, Independence Way, Ungwan Rimi, and Kaduna International Airport corridors, with ongoing expansion across neighboring hubs.',
    },
    {
      category: 'comfort',
      q: 'How many passengers can ride in a DigiVolt vehicle?',
      a: 'Up to 4 passengers can travel comfortably in every DigiVolt EV. Every vehicle features generous rear legroom, climate-controlled comfort, dedicated USB charging ports, and luggage capacity for up to 3 large suitcases.',
    },
    {
      category: 'comfort',
      q: 'What kind of vehicles make up the DigiVolt fleet?',
      a: 'Our fleet consists exclusively of 100% all-electric luxury and crossover SUVs. They operate with zero combustion tailpipe emissions, delivering whisper-quiet acoustics under 52dB and smooth linear electric acceleration.',
    },
    {
      category: 'payment',
      q: 'How does DigiVolt pricing and billing work?',
      a: 'DigiVolt operates with 100% upfront pricing. The price you see in the app before booking is the exact price you pay—no hidden surge multipliers or unexpected meter surprises. Payments can be processed seamlessly via debit/credit card, bank transfer, or corporate billing accounts.',
    },
    {
      category: 'payment',
      q: 'What is DigiVolt’s cancellation and refund policy?',
      a: 'You can cancel any trip free of charge within 5 minutes of booking, or anytime if your chauffeur is delayed beyond the estimated arrival window. For cancellation queries or fare adjustments, our support desk resolves disputes within 24 hours.',
    },
    {
      category: 'safety',
      q: 'Who drives DigiVolt vehicles and how are they vetted?',
      a: 'Every DigiVolt ride is operated by a certified, professionally vetted chauffeur. Drivers undergo multi-tiered criminal background screening, state motor vehicle record audits, in-person hospitality training, and defensive EV operation certification.',
    },
    {
      category: 'safety',
      q: 'Can I share my live trip status with family or colleagues?',
      a: 'Yes. Every active ride in the DigiVolt app includes a one-tap "Share Trip" feature. This generates an encrypted live tracking link showing your vehicle route, chauffeur identity, vehicle license plate, and real-time ETA.',
    },
    {
      category: 'lost',
      q: 'What should I do if I leave an item behind in a DigiVolt vehicle?',
      a: 'If you forgot a phone, bag, or personal item, use the "Trip History > Lost Item" button in the app or email support@digivolt.com immediately with your trip time and pickup location. Our dispatch team contacts your chauffeur directly to secure and safely return your property.',
    },
  ];

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCat = faqCategory === 'all' || faq.category === faqCategory;
    const matchesSearch =
      faq.q.toLowerCase().includes(faqSearch.toLowerCase()) ||
      faq.a.toLowerCase().includes(faqSearch.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="w-full bg-white dark:bg-black text-black dark:text-white transition-colors duration-150">
      
      {/* 1. Support Hero Section */}
      <section className="pt-24 sm:pt-40 pb-12 sm:pb-20 px-4 sm:px-10 lg:px-16 max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-neutral-500 mb-3 block">
            DIGIVOLT HELP CENTER & SUPPORT
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tighter text-black dark:text-white leading-[1.05] sm:leading-[1.0] mb-6">
            Here to help you ride with <span className="text-black dark:text-white">complete confidence</span>.
          </h1>
          <p className="text-lg sm:text-2xl text-neutral-700 dark:text-neutral-300 font-light leading-relaxed mb-8 sm:mb-10 max-w-3xl">
            Have questions about booking, payments, or safety? Explore our frequently asked questions, read our terms of service and passenger policies, or connect directly with our 24/7 support desk.
          </p>
        </div>

        {/* Quick Help Channels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          <div className="p-7 rounded-3xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-900 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 flex items-center justify-center mb-5">
                <HelpCircle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold tracking-tight mb-2">24/7 In-App Support</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 font-light leading-relaxed">
                Need immediate ride help? Tap the Support icon on your active trip screen for real-time dispatch assistance.
              </p>
            </div>
            <button
              onClick={onOpenAppModal}
              className="mt-6 text-sm font-semibold text-black dark:text-white inline-flex items-center gap-1.5 hover:underline cursor-pointer"
            >
              <span>Get the DigiVolt App</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="p-7 rounded-3xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-900 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 flex items-center justify-center mb-5">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold tracking-tight mb-2">Direct Help Desk</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 font-light leading-relaxed">
                Billing inquiries, corporate partnerships, or feedback. We respond within 15 minutes during operating hours.
              </p>
            </div>
            <a
              href="mailto:support@digivolt.com"
              className="mt-6 text-sm font-semibold text-black dark:text-white inline-flex items-center gap-1.5 hover:underline cursor-pointer"
            >
              <span>support@digivolt.com</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="p-7 rounded-3xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-900 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-50 dark:bg-amber-950/40 text-amber-600 flex items-center justify-center mb-5">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold tracking-tight mb-2">Lost & Found Hub</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 font-light leading-relaxed">
                Left an item in a vehicle? Our drivers promptly catalog and return forgotten property through verified custody.
              </p>
            </div>
            <button
              onClick={() => {
                setActiveSubTab('faq');
                setFaqCategory('lost');
                setTimeout(() => {
                  document.getElementById('support-sections')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="mt-6 text-sm font-semibold text-black dark:text-white inline-flex items-center gap-1.5 hover:underline cursor-pointer"
            >
              <span>Report Lost Item</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* 2. Tab Navigation Switcher */}
      <section id="support-sections" className="sticky top-16 sm:top-20 z-20 bg-white/90 dark:bg-black/90 backdrop-blur-md border-y border-neutral-200 dark:border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-16 flex items-center gap-2 sm:gap-4 overflow-x-auto py-3.5 no-scrollbar">
          {[
            { id: 'faq', label: 'Frequently Asked Questions', icon: HelpCircle },
            { id: 'terms', label: 'Terms & Conditions', icon: FileText },
            { id: 'policies', label: 'Rider Policies & Safety', icon: ShieldCheck },
            { id: 'contact', label: 'Contact Help Desk', icon: Mail },
          ].map((tab) => {
            const Icon = tab.icon;
            const isSelected = activeSubTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveSubTab(tab.id as any)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold flex items-center gap-2 whitespace-nowrap transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-black text-white dark:bg-white dark:text-black shadow-sm'
                    : 'bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* 3. SUB-TAB 1: FAQs */}
      {activeSubTab === 'faq' && (
        <section id="support-faq" className="py-16 sm:py-24 px-4 sm:px-10 lg:px-16 max-w-5xl mx-auto">
          <div className="mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300 text-base font-light mb-8">
              Find quick answers to common questions about booking, payments, electric vehicles, and rider guidelines.
            </p>

            {/* Search and Category Filter Bar */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
              <div className="relative w-full sm:w-80">
                <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search questions..."
                  value={faqSearch}
                  onChange={(e) => setFaqSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-full bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-sm focus:outline-none focus:border-black dark:focus:border-white transition-colors"
                />
              </div>

              {/* Category Pills */}
              <div className="flex items-center gap-2 overflow-x-auto w-full no-scrollbar pb-1">
                {[
                  { id: 'all', label: 'All' },
                  { id: 'booking', label: 'Booking' },
                  { id: 'comfort', label: 'Vehicles' },
                  { id: 'payment', label: 'Billing' },
                  { id: 'safety', label: 'Safety' },
                  { id: 'lost', label: 'Lost & Found' },
                ].map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setFaqCategory(cat.id as any)}
                    className={`px-3 py-1.5 rounded-full text-xs font-mono transition-colors cursor-pointer whitespace-nowrap ${
                      faqCategory === cat.id
                        ? 'bg-neutral-800 text-white dark:bg-neutral-200 dark:text-black font-bold'
                        : 'bg-neutral-100 dark:bg-neutral-900 text-neutral-500 hover:text-black dark:hover:text-white'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Accordion List */}
          <div className="space-y-4">
            {filteredFaqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={faq.q}
                  className="rounded-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden bg-white dark:bg-neutral-950 transition-colors"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="text-base sm:text-lg font-bold tracking-tight text-black dark:text-white">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-neutral-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-black dark:text-white' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                      >
                        <div className="px-6 pb-6 pt-1 text-neutral-600 dark:text-neutral-300 text-sm sm:text-base font-light leading-relaxed border-t border-neutral-100 dark:border-neutral-900">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}

            {filteredFaqs.length === 0 && (
              <div className="text-center py-16 text-neutral-500 text-sm font-mono">
                No matching questions found for "{faqSearch}". Please email support@digivolt.com for direct assistance.
              </div>
            )}
          </div>
        </section>
      )}

      {/* 4. SUB-TAB 2: Terms & Conditions */}
      {activeSubTab === 'terms' && (
        <section id="support-terms" className="py-16 sm:py-24 px-4 sm:px-10 lg:px-16 max-w-4xl mx-auto">
          <div className="mb-10 pb-6 border-b border-neutral-200 dark:border-neutral-800">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-2 block">
              LEGAL AGREEMENT & USER TERMS
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4">
              Terms & Conditions
            </h2>
            <p className="text-xs sm:text-sm font-mono text-neutral-400">
              Last updated: September 2026 • DigiVolt Technologies Limited
            </p>
          </div>

          <div className="space-y-10 text-neutral-700 dark:text-neutral-300 leading-relaxed text-sm sm:text-base font-light">
            
            <div>
              <h3 className="text-xl font-bold text-black dark:text-white tracking-tight mb-3">
                1. Acceptance of Terms & Service Scope
              </h3>
              <p>
                By downloading, accessing, or utilizing the DigiVolt mobile application, website, or ride-hailing services, you agree to be legally bound by these Terms & Conditions. DigiVolt provides zero-emission, on-demand electric passenger transportation facilitated by certified professional chauffeurs. If you do not accept these terms in full, you may not use our platforms.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-black dark:text-white tracking-tight mb-3">
                2. User Account & Eligibility
              </h3>
              <p>
                Users must be at least 18 years of age to register a personal DigiVolt account. You represent that all information submitted during account creation is accurate, current, and complete. You are exclusively responsible for maintaining the confidentiality of your credentials and all trip requests authorized through your account.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-black dark:text-white tracking-tight mb-3">
                3. Bookings, Upfront Pricing & Payments
              </h3>
              <p>
                DigiVolt operates on a transparent, upfront pricing model. Prior to booking confirmation, riders receive the exact fare for the requested journey based on distance, estimated duration, and city tolls. You authorize DigiVolt to charge your linked payment method (credit/debit card, bank transfer, or digital wallet) immediately upon completion of the trip.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-black dark:text-white tracking-tight mb-3">
                4. Cancellation & No-Show Policies
              </h3>
              <p>
                Riders may cancel any requested ride without penalty within five (5) minutes of chauffeur dispatch. Cancellations occurring after five minutes, or instances where a passenger fails to arrive at the designated pickup zone within 5 minutes of vehicle arrival, may be subject to a nominal cancellation fee to fairly compensate the driver.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-black dark:text-white tracking-tight mb-3">
                5. Vehicle Care & Cleaning Fees
              </h3>
              <p>
                DigiVolt maintains pristine, sanitized cabin environments for all passengers. Riders are expected to treat vehicles with care. Any intentional damage to vehicle hardware, upholstery, or excessive spills requiring professional detailing may incur a cleaning fee assessed to the responsible account holder.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-black dark:text-white tracking-tight mb-3">
                6. Safety & Passenger Conduct
              </h3>
              <p>
                Every passenger must wear seatbelts at all times during transit. The maximum vehicle occupancy is strictly capped at four (4) passengers. DigiVolt reserves the right to immediately terminate any ride without refund if a passenger exhibits unruly, abusive, or hazardous behavior toward the chauffeur or fellow riders.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-black dark:text-white tracking-tight mb-3">
                7. Limitation of Liability & Governing Law
              </h3>
              <p>
                To the maximum extent permitted by applicable law, DigiVolt Technologies Limited is not liable for indirect, incidental, or consequential damages resulting from delays or network interruptions. These terms are governed by and construed in accordance with the laws of the Federal Republic of Nigeria and the jurisdiction of Kaduna State.
              </p>
            </div>

          </div>
        </section>
      )}

      {/* 5. SUB-TAB 3: Policies & Safety Guidelines */}
      {activeSubTab === 'policies' && (
        <section id="support-policies" className="py-16 sm:py-24 px-4 sm:px-10 lg:px-16 max-w-4xl mx-auto">
          <div className="mb-10 pb-6 border-b border-neutral-200 dark:border-neutral-800">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-2 block">
              STANDARDS & GUIDELINES
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4">
              Rider & Service Policies
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300 text-base font-light">
              Our core policies are designed to safeguard riders, protect driver partners, and uphold clean air standards across every journey.
            </p>
          </div>

          <div className="space-y-8">
            {/* Policy 1: Privacy & Data Protection */}
            <div className="p-8 rounded-3xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-900">
              <div className="flex items-center gap-3 mb-3">
                <ShieldCheck className="w-6 h-6 text-emerald-500 shrink-0" />
                <h3 className="text-xl font-bold tracking-tight">Privacy & Data Security Policy</h3>
              </div>
              <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-light leading-relaxed">
                DigiVolt prioritizes user confidentiality. Location coordinates are collected solely to facilitate accurate pickups, optimal routing, and passenger safety. All personal identifiable information and card payment tokens are encrypted using AES-256 standards and are never sold or shared with third-party advertisers.
              </p>
            </div>

            {/* Policy 2: Zero-Tolerance Intoxication & Harassment */}
            <div className="p-8 rounded-3xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-900">
              <div className="flex items-center gap-3 mb-3">
                <AlertCircle className="w-6 h-6 text-rose-500 shrink-0" />
                <h3 className="text-xl font-bold tracking-tight">Zero-Tolerance Substance & Conduct Policy</h3>
              </div>
              <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-light leading-relaxed">
                DigiVolt enforces a strict zero-tolerance policy against smoking, vaping, open alcoholic beverages, and illicit substances inside all vehicles. Any form of harassment, discrimination, verbal hostility, or unsafe physical contact will result in permanent account deactivation and referral to local authorities.
              </p>
            </div>

            {/* Policy 3: Clean Cabin & Zero-Emission Guarantee */}
            <div className="p-8 rounded-3xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-900">
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle2 className="w-6 h-6 text-blue-500 shrink-0" />
                <h3 className="text-xl font-bold tracking-tight">100% Clean Air & Sanitization Guarantee</h3>
              </div>
              <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-light leading-relaxed">
                Every DigiVolt vehicle undergoes rigorous daily sanitization protocols, cabin air filtration maintenance, and zero tailpipe emissions operation. We guarantee whisper-quiet, clean rides that produce zero exhaust particulates in our cities.
              </p>
            </div>

            {/* Policy 4: Lost Property Custody */}
            <div className="p-8 rounded-3xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-900">
              <div className="flex items-center gap-3 mb-3">
                <Clock className="w-6 h-6 text-amber-500 shrink-0" />
                <h3 className="text-xl font-bold tracking-tight">Lost & Found Chain of Custody</h3>
              </div>
              <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-light leading-relaxed">
                Chauffeurs conduct thorough cabin inspections at the conclusion of every trip. Recovered personal belongings are logged into our dispatch registry and secured until prompt return to the verified owner. No fees are charged for retrieving lost items.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* 6. SUB-TAB 4: Contact Help Desk */}
      {activeSubTab === 'contact' && (
        <section id="support-contact" className="py-16 sm:py-24 px-4 sm:px-10 lg:px-16 max-w-4xl mx-auto">
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-2 block">
              GET IN TOUCH
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4">
              Contact Our 24/7 Help Desk
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300 text-base font-light">
              Have an urgent question or need trip support? Our dedicated customer care team is available around the clock.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="p-8 rounded-3xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-900 text-center flex flex-col items-center">
              <Mail className="w-10 h-10 text-black dark:text-white mb-4" />
              <h3 className="text-xl font-bold mb-2">Email Support</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 font-light mb-6">
                Fast responses for rider receipts, account assistance, or partner inquiries.
              </p>
              <a
                href="mailto:support@digivolt.com"
                className="px-6 py-3 rounded-full bg-black text-white dark:bg-white dark:text-black font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                support@digivolt.com
              </a>
            </div>

            <div className="p-8 rounded-3xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-900 text-center flex flex-col items-center">
              <Phone className="w-10 h-10 text-black dark:text-white mb-4" />
              <h3 className="text-xl font-bold mb-2">Emergency Dispatch Line</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 font-light mb-6">
                Direct phone hotline for active trips, urgent lost property, or roadside help.
              </p>
              <a
                href="tel:+2348000000000"
                className="px-6 py-3 rounded-full bg-neutral-200 dark:bg-neutral-800 text-black dark:text-white font-semibold text-sm hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-colors"
              >
                +234 (0) 800-DIGIVOLT
              </a>
            </div>
          </div>

          <div className="p-8 sm:p-12 rounded-3xl bg-black text-white dark:bg-neutral-900 text-center shadow-xl">
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">
              Fastest support is in the DigiVolt App
            </h3>
            <p className="text-neutral-400 text-sm sm:text-base font-light max-w-xl mx-auto mb-8">
              Track your trip history, report an issue with one tap, or chat live with our dispatch operations team directly from your smartphone.
            </p>
            <button
              onClick={onOpenAppModal}
              className="px-8 py-3.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-neutral-100 transition-colors cursor-pointer shadow-md"
            >
              Download DigiVolt App
            </button>
          </div>
        </section>
      )}

    </div>
  );
};
