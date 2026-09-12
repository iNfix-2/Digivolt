import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

export const RidesFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How much does a DigiVolt ride cost?',
      a: 'Pricing is calculated upfront in the DigiVolt One app based on estimated distance and duration, highly competitive with standard ride-hailing services. You will always see the guaranteed fare before confirming your ride, with no hidden surge surprises.',
    },
    {
      q: 'Who is driving the vehicle?',
      a: 'Every DigiVolt ride is piloted by a certified, professionally vetted chauffeur. Our drivers undergo rigorous criminal and DMV background screening, in-person hospitality training, and road safety validation.',
    },
    {
      q: 'How safe is riding in a DigiVolt electric vehicle?',
      a: 'Safety is our highest priority. In addition to our vetted chauffeurs, our 100% all-electric vehicles feature 5-star structural crash safety ratings, automatic emergency braking, active ADAS collision avoidance, and 24/7 telematics monitoring.',
    },
    {
      q: 'Are DigiVolt rides truly 100% electric?',
      a: 'Yes. Our entire fleet is 100% battery-electric with zero tailpipe emissions. Every mile traveled prevents harmful carbon and particulate matter from entering urban air.',
    },
    {
      q: 'How do I book and verify my ride?',
      a: 'Open the DigiVolt One app, enter your destination, and confirm your ride. You will immediately receive your chauffeur’s photo, verified name, vehicle license plate, and a digital security PIN.',
    },
    {
      q: 'What happens if I need assistance during my trip?',
      a: 'Our Rider Care team is available 24/7. You can instantly connect with a live representative via the in-app support button or speak with your courteous chauffeur directly.',
    },
  ];

  return (
    <section id="have-more-questions-about-riding-with-digivolt" className="w-full bg-white dark:bg-black text-black dark:text-white py-32 lg:py-40 transition-colors duration-150">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Heading & Video */}
          <div className="lg:col-span-5">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tighter text-black dark:text-white leading-tight mb-6">
              Have more questions about riding with <span className="text-black dark:text-white">DigiVolt</span>?
            </h2>

            <p className="text-lg text-neutral-700 dark:text-gray-300 font-normal mb-8">
              Everything you need to know about our 100% electric fleet, vetted chauffeurs, zero-emission sustainability, and booking.
            </p>

            <a
              href="#rides-how-it-works"
              className="px-6 py-3.5 rounded-full bg-black text-white dark:bg-white dark:text-black font-semibold text-sm inline-flex items-center gap-2 transition-all hover:opacity-90 shadow-md mb-10 cursor-pointer"
            >
              <span>Explore How It Works</span>
            </a>

            {/* Official FAQ Video */}
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-3xl overflow-hidden aspect-[4/3] shadow-lg bg-neutral-100 dark:bg-neutral-900 relative"
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source
                  src="https://storage.googleapis.com/waymo-prod-cdn/uploads/053c3502ad3f2417d1b52190aef008e3-FAQ-Girl.compressed.mp4#t=0.001"
                  type="video/mp4"
                />
                <source
                  src="https://storage.googleapis.com/waymo-prod-cdn/uploads/943d6424c5e4b8469784d394f69cf807-FAQ-Girl.webm#t=0.001"
                  type="video/webm"
                />
                Your web browser does not support this video.
              </video>
            </motion.div>
          </div>

          {/* Right Column: Interactive Accordion */}
          <div className="lg:col-span-7 space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={faq.q}
                  className="rounded-2xl overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 bg-white dark:bg-black hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors cursor-pointer"
                  >
                    <span className="text-lg font-semibold tracking-tight text-black dark:text-white transition-colors">
                      {faq.q}
                    </span>
                    <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-neutral-100 dark:bg-neutral-900 text-black dark:text-white">
                      {isOpen ? (
                        <Minus className="w-4 h-4 text-black dark:text-white" />
                      ) : (
                        <Plus className="w-4 h-4 text-black dark:text-white" />
                      )}
                    </div>
                  </button>

                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6 pt-2 bg-neutral-50 dark:bg-neutral-950 text-neutral-700 dark:text-gray-300 font-normal leading-relaxed"
                    >
                      <p className="text-base">{faq.a}</p>
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
