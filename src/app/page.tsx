'use client';

import Link from 'next/link';
import { config } from '@/data/config';
import ContactForm from '@/components/ContactForm';
import Header from '@/components/Header';
import Button from '@/components/Button';
import { useEffect, useState } from 'react';
import { PortableText } from '@portabletext/react';
import { portableTextComponents } from '@/sanity/lib/portableTextComponents';

// Version: v2.0.0 - Contains Use Cases, Consultancy, and Pricing Management sections

type HomeProductCard = {
  name: string;
  title?: string;
  description?: string;
  icon?: string;
  image?: any;
  href?: string;
  order?: number;
  productCard?: {
    _id: string;
    href?: string;
    icon?: string;
  } | null;
};

type CardContent = {
  homeProductCards: HomeProductCard[];
  whyChooseUs: typeof config.whyChooseUs;
  products: typeof config.products;
  solutions: typeof config.solutions;
  useCases: typeof config.useCases;
  consultancy: typeof config.consultancy;
  pricingManagement: typeof config.pricingManagement;
  contactUsCards: Array<{ icon?: string; title: string; description?: string }>;
  homeCopy?: {
    heroTitle?: string;
    heroSubheading?: string;
    productsHeading?: string;
    productsSubheading?: string;
    solutionsHeading?: string;
    solutionsSubheading?: string;
    whyHeading?: string;
    whySubheading?: string;
    ctaHeading?: string;
    ctaSubheading?: string;
    ctaButtonLabel?: string;
  };
  source?: string;
};

export default function Home() {
  const [showPortalModal, setShowPortalModal] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [cardContent, setCardContent] = useState<CardContent | null>(null);
  const [refreshing, setRefreshing] = useState(false);

  const openPortalModal = () => {
    setLightboxIndex(null);
    setShowPortalModal(true);
  };

  const closePortalModal = () => {
    setLightboxIndex(null);
    setShowPortalModal(false);
  };

  // Content now sourced from config.homeProductCards

  const staffScreens = [
    '/staff-portal/screen1.jpg',
    '/staff-portal/screen2.jpg',
    '/staff-portal/screen3.jpg',
    '/staff-portal/screen4.jpg',
  ];

  const refreshContent = async () => {
    try {
      setRefreshing(true);
      const res = await fetch('/api/content/cards', { cache: 'no-store' });
      if (!res.ok) return;
      const data: CardContent = await res.json();
      
      // Ensure all descriptions are strings
      if (data.homeProductCards) {
        data.homeProductCards = data.homeProductCards.map(card => ({
          ...card,
          description: typeof card.description === 'string' ? card.description : String(card.description || ''),
        }));
      }
      
      setCardContent(data);
    } catch (error) {
      console.error('Failed to fetch Sanity content', error);
    } finally {
      setRefreshing(false);
    }
  };

  useEffect(() => {
    refreshContent();
  }, []);

  useEffect(() => {
    if (cardContent) {
      // Debug: log useCases to console
      // eslint-disable-next-line no-console
      console.log('DEBUG useCases:', cardContent.useCases);
      // Print each use case's name and href for clarity
      cardContent.useCases?.forEach((uc, i) => {
        // eslint-disable-next-line no-console
        console.log(`UseCase[${i}]: name='${uc.name}', href='${uc.href}'`);
      });
    }
  }, [cardContent]);

  // Fetch product feature cards from useCaseCards (Studio-driven)
  // Filter useCases to get only those that are product features (e.g., by a naming convention or a flag)
  // For now, assume product feature cards are the first N useCaseCards, or use a property if available
  // Example: useCaseCard with id starting with 'product-' or a specific field
  // Here, we select the first 4 as product features for demonstration
  const productFeatureCards = (cardContent?.useCases ?? config.useCases).slice(0, 4);
  const whyChooseUs = cardContent?.whyChooseUs ?? config.whyChooseUs;
  const products = cardContent?.products ?? config.products;
  const solutions = cardContent?.solutions ?? config.solutions;
  const useCases = cardContent?.useCases ?? config.useCases;
  const consultancy = cardContent?.consultancy ?? config.consultancy;
  const pricingManagement = cardContent?.pricingManagement ?? config.pricingManagement;
  const heroTitle = cardContent?.homeCopy?.heroTitle ?? config.homeCopy?.heroTitle ?? 'Adaptive Optix';
  const heroSubheading = cardContent?.homeCopy?.heroSubheading ?? config.homeCopy?.heroSubheading ?? 'Empower your organization with data-driven pricing insights';
  const productsHeading = cardContent?.homeCopy?.productsHeading ?? config.homeCopy?.productsHeading ?? 'The power of pricing';
  const productsSubheading = cardContent?.homeCopy?.productsSubheading ?? config.homeCopy?.productsSubheading;
  const solutionsHeading = cardContent?.homeCopy?.solutionsHeading ?? config.homeCopy?.solutionsHeading ?? 'Solutions';
  const solutionsSubheading = cardContent?.homeCopy?.solutionsSubheading ?? config.homeCopy?.solutionsSubheading ?? 'Comprehensive approaches to modernize your financial operations';
  const whyHeading = cardContent?.homeCopy?.whyHeading ?? config.homeCopy?.whyHeading ?? 'Why Adaptive Optix';
  const whySubheading = cardContent?.homeCopy?.whySubheading ?? config.homeCopy?.whySubheading ?? 'Proven expertise built on years of successful eMobility implementation';
  const ctaHeading = cardContent?.homeCopy?.ctaHeading ?? config.homeCopy?.ctaHeading ?? 'Ready to Transform Your Operations?';
  const ctaSubheading = cardContent?.homeCopy?.ctaSubheading ?? config.homeCopy?.ctaSubheading ?? 'Connect with our team to discuss how Adaptive Optix can support your business goals.';
  const ctaButtonLabel = cardContent?.homeCopy?.ctaButtonLabel ?? config.homeCopy?.ctaButtonLabel ?? 'Schedule a Demo';

  const contactCards = cardContent?.contactUsCards ?? [];

  return (
    <main>
      {/* Staff Portal Modal */}
      {showPortalModal && (
        <>
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
            onClick={closePortalModal}
          >
            <div
              className="bg-white rounded-lg shadow-2xl max-w-4xl w-full p-8"
              onClick={(e) => e.stopPropagation()}
              style={{ borderTop: '4px solid #6B5B95' }}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Staff Portal Screenshots</h3>
                <button
                  onClick={closePortalModal}
                  className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
                  aria-label="Close screenshots modal"
                >
                  ×
                </button>
              </div>
              <div className="space-y-4">
                <p className="text-gray-600 mb-4">
                  Click any image to open a lightbox viewer.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {staffScreens.map((src, idx) => (
                    <button
                      key={src}
                      type="button"
                      className="w-full overflow-hidden rounded-lg border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      onClick={(e) => {
                        e.stopPropagation();
                        setLightboxIndex(idx);
                      }}
                    >
                      <img
                        src={src}
                        alt={`Staff portal screenshot ${idx + 1}`}
                        className="w-full h-56 object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
              <div className="mt-6 flex justify-end">
                <button
                  onClick={closePortalModal}
                  className="px-6 py-3 text-white font-semibold rounded-lg hover:opacity-90 transition"
                  style={{ backgroundColor: '#6B5B95' }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>

          {lightboxIndex !== null && (
            <div
              className="fixed inset-0 flex items-center justify-center p-4"
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.9)', zIndex: 60 }}
              onClick={() => setLightboxIndex(null)}
            >
              <div className="relative max-w-5xl w-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
                <img
                  src={staffScreens[lightboxIndex]}
                  alt={`Staff portal screenshot ${lightboxIndex + 1}`}
                  className="max-h-[80vh] w-auto max-w-full object-contain rounded-lg shadow-2xl"
                />
                <button
                  type="button"
                  aria-label="Previous screenshot"
                  className="absolute left-2 md:left-4 px-3 md:px-4 py-2 md:py-3 text-white bg-black/50 hover:bg-black/70 rounded-full"
                  onClick={() => setLightboxIndex((prev) => (prev === null ? prev : (prev - 1 + staffScreens.length) % staffScreens.length))}
                >
                  ‹
                </button>
                <button
                  type="button"
                  aria-label="Next screenshot"
                  className="absolute right-2 md:right-4 px-3 md:px-4 py-2 md:py-3 text-white bg-black/50 hover:bg-black/70 rounded-full"
                  onClick={() => setLightboxIndex((prev) => (prev === null ? prev : (prev + 1) % staffScreens.length))}
                >
                  ›
                </button>
                <button
                  type="button"
                  aria-label="Close lightbox"
                  className="absolute top-2 right-2 md:top-4 md:right-4 px-3 py-2 text-white bg-black/60 hover:bg-black/80 rounded-full"
                  onClick={() => setLightboxIndex(null)}
                >
                  ×
                </button>
              </div>
            </div>
          )}
        </>
      )}

      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="hero-banner text-white flex items-center justify-center" style={{ paddingTop: '0px', paddingBottom: '0px' }}>
        <div className="max-w-6xl px-6 sm:px-8 lg:px-12 w-full">
        </div>
      </section>
      <section style={{ backgroundColor: '#000029ff', padding: 0, margin: 0 }}>
        <hr style={{ border: 'none', borderTop: '6px solid #FFA500', margin: 0, width: '100%' }} />
      </section>

      {/* Products Section (now using productFeatureCards from useCaseCard schema) */}
      <section style={{ backgroundColor: '#000029ff', padding: 0, margin: 0 }}>
        <hr style={{ border: 'none', borderTop: '6px solid #FFA500', margin: 0, width: '100%' }} />
      </section>
      <section id="products" className="flex items-center justify-center" style={{ paddingTop: '120px', paddingBottom: '120px', backgroundColor: '#000029ff' }}>
        <div className="max-w-6xl px-6 sm:px-8 lg:px-12 w-full">
          <div style={{ marginBottom: '120px' }}>
            <h2 className="text-2xl md:text-3xl font-bold text-white" style={{ marginBottom: '32px' }}>
              {productsHeading}
            </h2>
            <p className="text-base text-white leading-relaxed mt-2">
              {productsSubheading}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {productFeatureCards.map((card, index) => (
              <div key={index} className="bg-[#14143A] border-t-4 border-blue-500 rounded-2xl hover:shadow-lg transition" style={{ padding: '36px', minHeight: '260px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div className="text-4xl mb-6">{card.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    {card.name}
                  </h3>
                  <div className="text-white leading-relaxed text-base">
                    {typeof card.description === 'string' ? (
                      <p>{card.description}</p>
                    ) : Array.isArray(card.description) ? (
                      <PortableText value={card.description} components={portableTextComponents} />
                    ) : (
                      <p>{String(card.description || '')}</p>
                    )}
                  </div>
                </div>
                {card.href && (
                  <div className="mt-8">
                    <a href={card.href} className="inline-block px-6 py-2 rounded bg-blue-500 text-white font-semibold hover:bg-blue-600 transition" style={{ marginTop: '16px' }}>
                      Find out more
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section style={{ backgroundColor: '#000029ff', padding: 0, margin: 0 }}>
        <hr style={{ border: 'none', borderTop: '6px solid #FFA500', margin: 0, width: '100%' }} />
      </section>
      <section id="solutions" className="flex items-center justify-center" style={{ paddingTop: '120px', paddingBottom: '260px', backgroundColor: '#000029ff' }}>
        <div className="max-w-6xl px-6 sm:px-8 lg:px-12 w-full">
          <div className="mb-24">
            <h2 className="text-2xl md:text-3xl font-bold text-white" style={{ marginBottom: '32px' }}>
              {solutionsHeading}
            </h2>
            <p className="text-base text-white leading-relaxed mt-2">
              {solutionsSubheading}
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2"
            style={{ gap: '24px', marginTop: '48px' }}
          >
            {solutions.map((solution: any, index: number) => (
              <div key={index} className="bg-[#14143A] border-t-4 border-blue-500 rounded-2xl hover:shadow-lg transition" style={{ padding: '36px', minHeight: '260px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div className="text-4xl mb-6">{solution.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    {solution.name}
                  </h3>
                  <div className="text-white leading-relaxed text-base">
                    {typeof solution.description === 'string' ? (
                      <p>{solution.description}</p>
                    ) : Array.isArray(solution.description) ? (
                      <PortableText value={solution.description} components={portableTextComponents} />
                    ) : (
                      <p>{String(solution.description || '')}</p>
                    )}
                  </div>
                </div>
                <div className="mt-8">
                  {solution.href && (
                    <Link href={solution.href} className="inline-block px-6 py-2 rounded bg-blue-500 text-white font-semibold hover:bg-blue-600 transition" style={{ marginTop: '16px' }}>
                      Find out more
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section style={{ backgroundColor: '#000029ff', padding: 0, margin: 0 }}>
        <hr style={{ border: 'none', borderTop: '6px solid #FFA500', margin: 0, width: '100%' }} />
      </section>
      <section id="use-cases" className="flex items-center justify-center" style={{ paddingTop: '120px', paddingBottom: '120px', backgroundColor: '#000029ff' }}>
        <div className="max-w-6xl px-6 sm:px-8 lg:px-12 w-full">
          <div className="mb-24">
            <h2 className="text-2xl md:text-3xl font-bold text-white" style={{ marginBottom: '32px' }}>
              Use Cases
            </h2>
            <p className="text-base text-white leading-relaxed mt-2">
              Real-world applications of our solutions
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2"
            style={{ gap: '24px', marginTop: '48px' }}
          >
            {useCases.map((useCase: any, index: number) => (
              useCase.href ? (
                <div key={index} className="bg-[#14143A] border-t-4 border-blue-500 rounded-2xl hover:shadow-lg transition" style={{ padding: '36px', minHeight: '260px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div className="text-4xl mb-6">{useCase.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-4">
                      {useCase.name}
                    </h3>
                    <div className="text-white leading-relaxed text-base">
                      {typeof useCase.description === 'string' ? (
                        <p>{useCase.description}</p>
                      ) : Array.isArray(useCase.description) ? (
                        <PortableText value={useCase.description} components={portableTextComponents} />
                      ) : (
                        <p>{String(useCase.description || '')}</p>
                      )}
                    </div>
                  </div>
                  <div className="mt-8">
                    <Link href={useCase.href} className="inline-block px-6 py-2 rounded bg-blue-500 text-white font-semibold hover:bg-blue-600 transition" style={{ marginTop: '16px' }}>
                      Find out more
                    </Link>
                  </div>
                </div>
              ) : (
                <div key={index} className="bg-[#14143A] border-t-4 border-blue-500 rounded-2xl" style={{ padding: '36px', minHeight: '260px' }}>
                  <div className="text-4xl mb-6">{useCase.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    {useCase.name}
                  </h3>
                  <div className="text-white leading-relaxed text-base">
                    {typeof useCase.description === 'string' ? (
                      <p>{useCase.description}</p>
                    ) : Array.isArray(useCase.description) ? (
                      <PortableText value={useCase.description} components={portableTextComponents} />
                    ) : (
                      <p>{String(useCase.description || '')}</p>
                    )}
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      </section>

      {/* Consultancy Section */}
      <section style={{ backgroundColor: '#000029ff', padding: 0, margin: 0 }}>
        <hr style={{ border: 'none', borderTop: '6px solid #FFA500', margin: 0, width: '100%' }} />
      </section>
      <section id="consultancy" className="flex items-center justify-center" style={{ paddingTop: '120px', paddingBottom: '120px', backgroundColor: '#000029ff' }}>
        <div className="max-w-6xl px-6 sm:px-8 lg:px-12 w-full">
          <div className="mb-24">
            <h2 className="text-2xl md:text-3xl font-bold text-white" style={{ marginBottom: '32px' }}>
              Consultancy
            </h2>
            <p className="text-base text-white leading-relaxed mt-2">
              Expert guidance and strategic insights
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2"
            style={{ gap: '24px', marginTop: '48px' }}
          >
            {consultancy.map((service: any, index: number) => (
              service.href ? (
                <Link key={index} href={service.href}>
                  <div className="bg-[#14143A] border-t-4 border-blue-500 rounded-2xl hover:shadow-lg transition cursor-pointer" style={{ padding: '36px', minHeight: '260px' }}>
                    <div className="text-4xl mb-6">{service.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-4">
                      {service.name}
                    </h3>
                    <div className="text-white leading-relaxed text-base">
                      {typeof service.description === 'string' ? (
                        <p>{service.description}</p>
                      ) : Array.isArray(service.description) ? (
                        <PortableText value={service.description} components={portableTextComponents} />
                      ) : (
                        <p>{String(service.description || '')}</p>
                      )}
                    </div>
                  </div>
                </Link>
              ) : (
                <div key={index} className="bg-[#14143A] border-t-4 border-blue-500 rounded-2xl" style={{ padding: '36px', minHeight: '260px' }}>
                  <div className="text-4xl mb-6">{service.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    {service.name}
                  </h3>
                  <div className="text-white leading-relaxed text-base">
                    {typeof service.description === 'string' ? (
                      <p>{service.description}</p>
                    ) : Array.isArray(service.description) ? (
                      <PortableText value={service.description} components={portableTextComponents} />
                    ) : (
                      <p>{String(service.description || '')}</p>
                    )}
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      </section>

      {/* Orange divider between Consultancy and Pricing Management Solutions */}
      <hr style={{ border: 'none', borderTop: '6px solid #FFA500', margin: '0', width: '100%' }} />
      {/* Pricing Management Solutions Section */}
      <section id="pricing-management" className="flex items-center justify-center" style={{ paddingTop: '120px', paddingBottom: '120px', backgroundColor: '#000029ff' }}>
        <div className="max-w-6xl px-6 sm:px-8 lg:px-12 w-full">
          <div className="mb-24">
            <h2 className="text-2xl md:text-3xl font-bold text-white" style={{ marginBottom: '32px' }}>
              Pricing Management Solutions
            </h2>
            <p className="text-base text-white leading-relaxed mt-2">
              Comprehensive pricing strategies and tools
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2"
            style={{ gap: '24px', marginTop: '48px' }}
          >
            {pricingManagement.map((solution: any, index: number) => (
              solution.href ? (
                <Link key={index} href={solution.href}>
                  <div className="bg-[#14143A] border-t-4 border-blue-500 rounded-2xl hover:shadow-lg transition cursor-pointer" style={{ padding: '36px', minHeight: '260px' }}>
                    <div className="text-4xl mb-6">{solution.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-4">
                      {solution.name}
                    </h3>
                    <div className="text-white leading-relaxed text-base">
                      {typeof solution.description === 'string' ? (
                        <p>{solution.description}</p>
                      ) : Array.isArray(solution.description) ? (
                        <PortableText value={solution.description} components={portableTextComponents} />
                      ) : (
                        <p>{String(solution.description || '')}</p>
                      )}
                    </div>
                  </div>
                </Link>
              ) : (
                <div key={index} className="bg-[#14143A] border-t-4 border-blue-500 rounded-2xl" style={{ padding: '36px', minHeight: '260px' }}>
                  <div className="text-4xl mb-6">{solution.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    {solution.name}
                  </h3>
                  <div className="text-white leading-relaxed text-base">
                    {typeof solution.description === 'string' ? (
                      <p>{solution.description}</p>
                    ) : Array.isArray(solution.description) ? (
                      <PortableText value={solution.description} components={portableTextComponents} />
                    ) : (
                      <p>{String(solution.description || '')}</p>
                    )}
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      </section>

      {/* Orange divider between Pricing Management Solutions and Contact Us */}
      <hr style={{ border: 'none', borderTop: '6px solid #FFA500', margin: '0', width: '100%' }} />
      {/* Contact Us Section */}
      <section id="contact-us" className="flex items-center justify-center" style={{ paddingTop: '120px', paddingBottom: '120px', backgroundColor: '#000029ff' }}>
        <div className="max-w-6xl px-6 sm:px-8 lg:px-12 w-full">
          <div className="mb-24">
            <h2 className="text-2xl md:text-3xl font-bold text-white" style={{ marginBottom: '32px' }}>
              Contact Us
            </h2>
            <p className="text-base text-white leading-relaxed mt-2">
              Get in touch with our team for support, inquiries, or feedback
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2"
            style={{ gap: '24px', marginTop: '48px' }}
          >
            {contactCards.map((card, index) => (
              <div key={index} className="bg-[#14143A] border-t-4 border-blue-500 rounded-2xl" style={{ padding: '36px', minHeight: '260px' }}>
                <div className="text-4xl mb-6">{card.icon}</div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {card.title}
                </h3>
                <div className="text-white leading-relaxed text-base">
                  {typeof card.description === 'string' ? (
                    <p>{card.description}</p>
                  ) : Array.isArray(card.description) ? (
                    <PortableText value={card.description} components={portableTextComponents} />
                  ) : (
                    <p>{String(card.description || '')}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
        <hr style={{ border: 'none', borderTop: '6px solid #FFA500', margin: '0', width: '100%' }} />
      <section id="why-choose-us" className="flex items-center justify-center" style={{ paddingTop: '120px', paddingBottom: '120px', backgroundColor: '#000029ff' }}>
        <div className="max-w-6xl px-6 sm:px-8 lg:px-12 w-full">
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-white" style={{ marginBottom: '32px' }}>
              {whyHeading}
            </h2>
            <p className="text-base text-white leading-relaxed mt-2">
              {whySubheading}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyChooseUs.map((item, index) => {
              // Only render icon if it exists (for type safety)
              const icon = (item as any).icon;
              return (
                <div
                  key={index}
                  className={`bg-[#14143A] border-t-4 border-blue-500 rounded-2xl hover:shadow-lg transition ${item.clickable ? 'cursor-pointer' : ''}`}
                  style={{ padding: '36px', minHeight: '260px' }}
                  onClick={() => item.clickable && openPortalModal()}
                >
                  {icon && <div className="text-4xl mb-6">{icon}</div>}
                  <h3 className="text-xl font-bold text-white mb-4">
                    {item.title}
                    {item.clickable && (
                      <button
                        className="ml-2 text-sm px-3 py-1 rounded hover:opacity-80 transition"
                        style={{ backgroundColor: '#6B5B95', color: 'white' }}
                      >
                        View Screenshots →
                      </button>
                    )}
                  </h3>
                  <div className="text-white leading-relaxed text-base">
                    {typeof item.description === 'string' ? (
                      <p>{item.description}</p>
                    ) : Array.isArray(item.description) ? (
                      <PortableText value={item.description} components={portableTextComponents} />
                    ) : (
                      <p>{String(item.description || '')}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="hero-banner text-white flex items-center justify-center" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
        <div className="max-w-6xl px-6 sm:px-8 lg:px-12 w-full">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              {ctaHeading}
            </h2>
            <p className="text-lg text-blue-100 mb-10 leading-relaxed">
              {ctaSubheading}
            </p>
            <Button href="#contact" label={ctaButtonLabel} />
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />
    </main>
  );
}
