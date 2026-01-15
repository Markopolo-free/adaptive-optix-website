'use client';

import Link from 'next/link';
import { config } from '@/data/config';
import ContactForm from '@/components/ContactForm';
import Header from '@/components/Header';
import Button from '@/components/Button';
import { useEffect, useState } from 'react';

// Version: v2.0.0 - Contains Use Cases, Consultancy, and Pricing Management sections

type CardContent = {
  homeProductCards: typeof config.homeProductCards;
  whyChooseUs: typeof config.whyChooseUs;
  products: typeof config.products;
  solutions: typeof config.solutions;
  useCases: typeof config.useCases;
  consultancy: typeof config.consultancy;
  pricingManagement: typeof config.pricingManagement;
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

  const homeProductCards = cardContent?.homeProductCards ?? config.homeProductCards;
  const whyChooseUs = cardContent?.whyChooseUs ?? config.whyChooseUs;
  const products = cardContent?.products ?? config.products;
  const solutions = cardContent?.solutions ?? config.solutions;
  const useCases = cardContent?.useCases ?? config.useCases;
  const consultancy = cardContent?.consultancy ?? config.consultancy;
  const pricingManagement = cardContent?.pricingManagement ?? config.pricingManagement;
  const heroTitle = cardContent?.homeCopy?.heroTitle ?? 'Adaptive Optix';
  const heroSubheading = cardContent?.homeCopy?.heroSubheading ?? 'Empower your organization with data-driven pricing insights';
  const productsHeading = cardContent?.homeCopy?.productsHeading ?? 'The power of pricing';
  const productsSubheading = cardContent?.homeCopy?.productsSubheading ?? 'Sub header on pricing and its significance';
  const solutionsHeading = cardContent?.homeCopy?.solutionsHeading ?? 'Solutions';
  const solutionsSubheading = cardContent?.homeCopy?.solutionsSubheading ?? 'Comprehensive approaches to modernize your financial operations';
  const whyHeading = cardContent?.homeCopy?.whyHeading ?? 'Why Adaptive Optix';
  const whySubheading = cardContent?.homeCopy?.whySubheading ?? 'Proven expertise built on years of successful eMobility implementation';
  const ctaHeading = cardContent?.homeCopy?.ctaHeading ?? 'Ready to Transform Your Operations?';
  const ctaSubheading = cardContent?.homeCopy?.ctaSubheading ?? 'Connect with our team to discuss how Adaptive Optix can support your business goals.';
  const ctaButtonLabel = cardContent?.homeCopy?.ctaButtonLabel ?? 'Schedule a Demo';

  const movedCards = products.filter((p) => ['loyalty', 'offers-campaigns'].includes(p.id));
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
      <section className="hero-banner text-white flex items-center justify-center" style={{ paddingTop: '45px', paddingBottom: '45px' }}>
        <div className="max-w-6xl px-6 sm:px-8 lg:px-12 w-full">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight" style={{ marginBottom: '48px' }}>
              {heroTitle}
            </h1>
            <p className="text-lg md:text-xl text-blue-100 leading-relaxed" style={{ marginBottom: '80px' }}>
              {heroSubheading}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="#contact" label="Get Started" />
              <Button href="/products/fx-pricing" label="Learn More" />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="flex items-center justify-center" style={{ paddingTop: '120px', paddingBottom: '120px', backgroundColor: '#000029ff' }}>
        <div className="max-w-6xl px-6 sm:px-8 lg:px-12 w-full">
          <div className="text-center" style={{ marginBottom: '120px' }}>
            <h2 className="text-2xl md:text-3xl font-bold text-white" style={{ marginBottom: '32px' }}>
              {productsHeading}
            </h2>
            <p className="text-base text-white leading-relaxed mt-2">
              {productsSubheading}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {homeProductCards.map((product, index) => (
              <div key={index} className="h-full bg-[#14143A] border-t-4 border-blue-600 rounded-lg hover:shadow-lg transition mr-4" style={{ padding: '32px 48px 32px 32px' }}>
                <div className="text-3xl mb-5">{product.icon}</div>
                <h3 className="text-lg font-bold text-white mb-4">
                  {product.name}
                </h3>
                <p className="text-white leading-relaxed text-sm">
                  {product.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="flex items-center justify-center" style={{ paddingTop: '120px', paddingBottom: '260px', backgroundColor: '#000029ff' }}>
        <div className="max-w-6xl px-6 sm:px-8 lg:px-12 w-full">
          <div className="text-center mb-24">
            <h2 className="text-2xl md:text-3xl font-bold text-white" style={{ marginBottom: '32px' }}>
              {solutionsHeading}
            </h2>
            <p className="text-base text-white leading-relaxed mt-2">
              {solutionsSubheading}
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-3"
            style={{ gap: '40px 40px', marginTop: '48px' }}
          >
            {solutions.map((solution: any, index: number) => (
              <Link key={index} href={`/solutions/${solution.name}`}>
                <div className="h-full bg-[#14143A] border-t-4 border-blue-600 rounded-lg hover:shadow-lg transition cursor-pointer" style={{ padding: '32px 48px 32px 32px' }}>
                  <div className="text-3xl mb-5">{solution.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-4">
                    {solution.name}
                  </h3>
                  <p className="text-white leading-relaxed text-sm">
                    {solution.description}
                  </p>
                </div>
              </Link>
            ))}
            {movedCards.map((product) => (
              product.href ? (
                <Link key={product.id} href={product.href} className="block h-full">
                  <div className="h-full w-full bg-[#14143A] border-t-4 border-blue-600 rounded-lg hover:shadow-lg transition cursor-pointer" style={{ padding: '32px 48px 32px 32px' }}>
                    <div className="text-3xl mb-5">{product.icon}</div>
                    <h3 className="text-lg font-bold text-white mb-4">
                      {product.name}
                    </h3>
                    <p className="text-white leading-relaxed text-sm">
                      {product.description}
                    </p>
                  </div>
                </Link>
              ) : (
                <div key={product.id} className="block h-full">
                  <div className="h-full w-full bg-[#14143A] border-t-4 border-blue-600 rounded-lg" style={{ padding: '32px 48px 32px 32px', opacity: 0.6 }}>
                    <div className="text-3xl mb-5">{product.icon}</div>
                    <h3 className="text-lg font-bold text-white mb-4">
                      {product.name}
                    </h3>
                    <p className="text-white leading-relaxed text-sm">
                      {product.description}
                    </p>
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" className="flex items-center justify-center" style={{ paddingTop: '120px', paddingBottom: '120px', backgroundColor: '#000029ff' }}>
        <div className="max-w-6xl px-6 sm:px-8 lg:px-12 w-full">
          <div className="text-center mb-24">
            <h2 className="text-2xl md:text-3xl font-bold text-white" style={{ marginBottom: '32px' }}>
              Use Cases
            </h2>
            <p className="text-base text-white leading-relaxed mt-2">
              Real-world applications of our solutions
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-3"
            style={{ gap: '40px 40px', marginTop: '48px' }}
          >
            {useCases.map((useCase: any, index: number) => (
              useCase.href ? (
                <Link key={index} href={useCase.href}>
                  <div className="h-full bg-[#14143A] border-t-4 border-blue-600 rounded-lg hover:shadow-lg transition cursor-pointer" style={{ padding: '32px 48px 32px 32px' }}>
                    <div className="text-3xl mb-5">{useCase.icon}</div>
                    <h3 className="text-lg font-bold text-white mb-4">
                      {useCase.name}
                    </h3>
                    <p className="text-white leading-relaxed text-sm">
                      {useCase.description}
                    </p>
                  </div>
                </Link>
              ) : (
                <div key={index} className="h-full bg-[#14143A] border-t-4 border-blue-600 rounded-lg" style={{ padding: '32px 48px 32px 32px' }}>
                  <div className="text-3xl mb-5">{useCase.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-4">
                    {useCase.name}
                  </h3>
                  <p className="text-white leading-relaxed text-sm">
                    {useCase.description}
                  </p>
                </div>
              )
            ))}
          </div>
        </div>
      </section>

      {/* Consultancy Section */}
      <section id="consultancy" className="flex items-center justify-center" style={{ paddingTop: '120px', paddingBottom: '120px', backgroundColor: '#000029ff' }}>
        <div className="max-w-6xl px-6 sm:px-8 lg:px-12 w-full">
          <div className="text-center mb-24">
            <h2 className="text-2xl md:text-3xl font-bold text-white" style={{ marginBottom: '32px' }}>
              Consultancy
            </h2>
            <p className="text-base text-white leading-relaxed mt-2">
              Expert guidance and strategic insights
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2"
            style={{ gap: '40px 40px', marginTop: '48px' }}
          >
            {consultancy.map((service: any, index: number) => (
              service.href ? (
                <Link key={index} href={service.href}>
                  <div className="h-full bg-[#14143A] border-t-4 border-blue-600 rounded-lg hover:shadow-lg transition cursor-pointer" style={{ padding: '32px 48px 32px 32px' }}>
                    <div className="text-3xl mb-5">{service.icon}</div>
                    <h3 className="text-lg font-bold text-white mb-4">
                      {service.name}
                    </h3>
                    <p className="text-white leading-relaxed text-sm">
                      {service.description}
                    </p>
                  </div>
                </Link>
              ) : (
                <div key={index} className="h-full bg-[#14143A] border-t-4 border-blue-600 rounded-lg" style={{ padding: '32px 48px 32px 32px' }}>
                  <div className="text-3xl mb-5">{service.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-4">
                    {service.name}
                  </h3>
                  <p className="text-white leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>
              )
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Management Solutions Section */}
      <section id="pricing-management" className="flex items-center justify-center" style={{ paddingTop: '120px', paddingBottom: '120px', backgroundColor: '#000029ff' }}>
        <div className="max-w-6xl px-6 sm:px-8 lg:px-12 w-full">
          <div className="text-center mb-24">
            <h2 className="text-2xl md:text-3xl font-bold text-white" style={{ marginBottom: '32px' }}>
              Pricing Management Solutions
            </h2>
            <p className="text-base text-white leading-relaxed mt-2">
              Comprehensive pricing strategies and tools
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2"
            style={{ gap: '40px 40px', marginTop: '48px' }}
          >
            {pricingManagement.map((solution: any, index: number) => (
              solution.href ? (
                <Link key={index} href={solution.href}>
                  <div className="h-full bg-[#14143A] border-t-4 border-blue-600 rounded-lg hover:shadow-lg transition cursor-pointer" style={{ padding: '32px 48px 32px 32px' }}>
                    <div className="text-3xl mb-5">{solution.icon}</div>
                    <h3 className="text-lg font-bold text-white mb-4">
                      {solution.name}
                    </h3>
                    <p className="text-white leading-relaxed text-sm">
                      {solution.description}
                    </p>
                  </div>
                </Link>
              ) : (
                <div key={index} className="h-full bg-[#14143A] border-t-4 border-blue-600 rounded-lg" style={{ padding: '32px 48px 32px 32px' }}>
                  <div className="text-3xl mb-5">{solution.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-4">
                    {solution.name}
                  </h3>
                  <p className="text-white leading-relaxed text-sm">
                    {solution.description}
                  </p>
                </div>
              )
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="flex items-center justify-center" style={{ paddingTop: '120px', paddingBottom: '120px', backgroundColor: '#000029ff' }}>
        <div className="max-w-6xl px-6 sm:px-8 lg:px-12 w-full">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-white" style={{ marginBottom: '32px' }}>
              {whyHeading}
            </h2>
            <p className="text-base text-white leading-relaxed mt-2">
              {whySubheading}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => {
              // Only render icon if it exists (for type safety)
              const icon = (item as any).icon;
              return (
                <div
                  key={index}
                  className={`bg-[#14143A] border-t-4 border-blue-600 rounded-lg hover:shadow-lg transition mr-4 ${item.clickable ? 'cursor-pointer' : ''}`}
                  style={{ padding: '32px 48px 32px 32px' }}
                  onClick={() => item.clickable && openPortalModal()}
                >
                  {icon && <div className="text-4xl mb-4">{icon}</div>}
                  <h3 className="text-lg font-bold text-white mb-4">
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
                  <p className="text-white leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              );
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="hero-banner text-white flex items-center justify-center" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
        <div className="max-w-6xl px-6 sm:px-8 lg:px-12 w-full">
          <div className="text-center">
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
