'use client';

import Link from 'next/link';
import { config } from '@/data/config';
import ContactForm from '@/components/ContactForm';
import { useState } from 'react';

export default function Home() {
  const [showPortalModal, setShowPortalModal] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const productCards = [
    {
      name: 'FX Rate personalization',
      icon: '💹',
      description: 'Deliver personalized FX rates tailored to each customer segment with dynamic pricing controls.',
    },
    {
      name: 'Leverage our clean-room technology',
      icon: '🧼',
      description: 'Collaborate on sensitive data securely using privacy-preserving clean-room infrastructure.',
    },
    {
      name: 'Tiered FX Pricing',
      icon: '📊',
      description: 'Offer tiered FX rates with clear breakpoints to reward volume and loyalty while protecting margins.',
    },
  ];

  const movedCards = config.products.filter((p) => ['loyalty', 'offers-campaigns'].includes(p.id));
  return (
    <main>
      {/* Staff Portal Modal */}
      {showPortalModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
          onClick={() => setShowPortalModal(false)}
        >
          <div
            className="bg-white rounded-lg shadow-2xl max-w-4xl w-full p-8"
            onClick={(e) => e.stopPropagation()}
            style={{ borderTop: '4px solid #6B5B95' }}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Staff Portal Screenshots</h3>
              <button
                onClick={() => setShowPortalModal(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
              >
                ×
              </button>
            </div>
            <div className="space-y-4">
              <p className="text-gray-600 mb-4">
                Upload your screenshots to showcase your customizable staff portal. Screenshots will be displayed here.
              </p>
              <div className="bg-gray-100 rounded-lg p-12 text-center border-2 border-dashed border-gray-300">
                <p className="text-gray-500">Screenshot gallery will be displayed here</p>
              </div>
            </div>
            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setShowPortalModal(false)}
                className="px-6 py-3 text-white font-semibold rounded-lg hover:opacity-90 transition"
                style={{ backgroundColor: '#6B5B95' }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Navigation Bar */}
      <nav style={{ backgroundColor: 'white', padding: '20px 0', position: 'sticky', top: 0, zIndex: 1000, boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap', position: 'relative' }}>
          
          {/* Products Dropdown */}
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => setOpenDropdown(openDropdown === 'products' ? null : 'products')}
              onMouseEnter={() => setOpenDropdown('products')}
              style={{ padding: '10px 24px', backgroundColor: '#6B5B95', color: 'white', fontWeight: '600', borderRadius: '8px', fontSize: '14px', display: 'inline-flex', alignItems: 'center', gap: '8px', border: 'none', cursor: 'pointer' }}
            >
              Products
              <span style={{ fontSize: '10px' }}>▼</span>
            </button>
            {openDropdown === 'products' && (
              <div
                onMouseLeave={() => setOpenDropdown(null)}
                style={{ position: 'absolute', top: '100%', left: 0, marginTop: '8px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.15)', minWidth: '220px', zIndex: 1001 }}
              >
                <Link href="/products/fx-pricing" style={{ display: 'block', padding: '12px 20px', color: '#374151', textDecoration: 'none', fontSize: '14px', borderBottom: '1px solid #f3f4f6' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F5E6D3'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}>
                  FX Pricing
                </Link>
                <Link href="/products/loyalty" style={{ display: 'block', padding: '12px 20px', color: '#374151', textDecoration: 'none', fontSize: '14px', borderBottom: '1px solid #f3f4f6' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F5E6D3'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}>
                  Rewards and Loyalty
                </Link>
                <Link href="/products/offers-campaigns" style={{ display: 'block', padding: '12px 20px', color: '#374151', textDecoration: 'none', fontSize: '14px', borderRadius: '0 0 8px 8px' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F5E6D3'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}>
                  Offers and Campaigns
                </Link>
              </div>
            )}
          </div>

          {/* Solutions Dropdown */}
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => setOpenDropdown(openDropdown === 'solutions' ? null : 'solutions')}
              onMouseEnter={() => setOpenDropdown('solutions')}
              style={{ padding: '10px 24px', backgroundColor: '#6B5B95', color: 'white', fontWeight: '600', borderRadius: '8px', fontSize: '14px', display: 'inline-flex', alignItems: 'center', gap: '8px', border: 'none', cursor: 'pointer' }}
            >
              Solutions
              <span style={{ fontSize: '10px' }}>▼</span>
            </button>
            {openDropdown === 'solutions' && (
              <div
                onMouseLeave={() => setOpenDropdown(null)}
                style={{ position: 'absolute', top: '100%', left: 0, marginTop: '8px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.15)', minWidth: '220px', zIndex: 1001 }}
              >
                <Link href="/solutions/baas" style={{ display: 'block', padding: '12px 20px', color: '#374151', textDecoration: 'none', fontSize: '14px', borderBottom: '1px solid #f3f4f6' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F5E6D3'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}>
                  Banking as a Service
                </Link>
                <Link href="/solutions/saas" style={{ display: 'block', padding: '12px 20px', color: '#374151', textDecoration: 'none', fontSize: '14px', borderBottom: '1px solid #f3f4f6' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F5E6D3'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}>
                  Software as a Service
                </Link>
                <Link href="/solutions/api" style={{ display: 'block', padding: '12px 20px', color: '#374151', textDecoration: 'none', fontSize: '14px', borderRadius: '0 0 8px 8px' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F5E6D3'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}>
                  APIs & Integration
                </Link>
              </div>
            )}
          </div>

          <a href="#why-choose-us" style={{ padding: '10px 24px', backgroundColor: '#6B5B95', color: 'white', fontWeight: '600', borderRadius: '8px', textDecoration: 'none', fontSize: '14px', display: 'inline-block', border: 'none', cursor: 'pointer' }}>
            Why Choose Us
          </a>
          <a href="#contact" style={{ padding: '10px 24px', backgroundColor: 'white', color: '#6B5B95', fontWeight: '600', borderRadius: '8px', textDecoration: 'none', fontSize: '14px', display: 'inline-block', border: '2px solid #6B5B95', cursor: 'pointer' }}>
            Contact Us
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-white flex items-center justify-center" style={{ paddingTop: '45px', paddingBottom: '45px', backgroundImage: 'linear-gradient(to bottom right, #6B5B95, #5a4a7e, #4a3a6e)' }}>
        <div className="max-w-6xl px-6 sm:px-8 lg:px-12 w-full">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight" style={{ marginBottom: '48px' }}>
              Adaptive Optix
            </h1>
            <p className="text-lg md:text-xl text-blue-100 leading-relaxed" style={{ marginBottom: '80px' }}>
              Empower your organization with data-driven pricing insights
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#contact"
                style={{ display: 'inline-block', padding: '10px 24px', backgroundColor: 'white', color: '#2563eb', fontWeight: '600', borderRadius: '8px', textDecoration: 'none', fontSize: '14px', border: 'none', cursor: 'pointer' }}
              >
                Get Started
              </Link>
              <Link
                href="/products/fx-pricing"
                style={{ display: 'inline-block', padding: '10px 24px', backgroundColor: 'white', color: '#6B5B95', fontWeight: '600', borderRadius: '8px', textDecoration: 'none', fontSize: '14px', border: '2px solid white', cursor: 'pointer' }}
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="flex items-center justify-center" style={{ paddingTop: '120px', paddingBottom: '120px', backgroundColor: '#F5E6D3' }}>
        <div className="max-w-6xl px-6 sm:px-8 lg:px-12 w-full">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900" style={{ marginBottom: '32px' }}>
              The power of pricing
            </h2>
            <p className="text-base text-gray-600 leading-relaxed mt-2">
              Sub header on pricing and its significance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {productCards.map((product, index) => (
              <div key={index} className="h-full bg-white border-t-4 rounded-lg hover:shadow-lg transition mr-4" style={{ borderTopColor: '#6B5B95', padding: '32px 48px 32px 32px' }}>
                <div className="text-3xl mb-5">{product.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  {product.name}
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm">
                  {product.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="flex items-center justify-center" style={{ paddingTop: '120px', paddingBottom: '260px', backgroundColor: '#F5E6D3' }}>
        <div className="max-w-6xl px-6 sm:px-8 lg:px-12 w-full">
          <div className="text-center mb-24">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900" style={{ marginBottom: '32px' }}>
              Solutions
            </h2>
            <p className="text-base text-gray-600 leading-relaxed mt-2">
              Comprehensive approaches to modernize your financial operations
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-3"
            style={{ gap: '40px 40px', marginTop: '48px' }}
          >
            {config.solutions.map((solution: any, index: number) => (
              <Link key={index} href={`/solutions/${solution.name}`}>
                <div className="h-full bg-gray-50 border-t-4 rounded-lg hover:shadow-lg transition cursor-pointer" style={{ borderTopColor: '#6B5B95', padding: '32px 48px 32px 32px' }}>
                  <div className="text-3xl mb-5">{solution.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    {solution.name}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    {solution.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-3"
            style={{ gap: '40px 40px', marginTop: '128px' }}
          >
            {movedCards.map((product) => (
              <Link key={product.id} href={product.href} className="block h-full">
                <div className="h-full w-full bg-gray-50 border-t-4 rounded-lg hover:shadow-lg transition cursor-pointer" style={{ borderTopColor: '#6B5B95', padding: '32px 48px 32px 32px' }}>
                  <div className="text-3xl mb-5">{product.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    {product.name}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    {product.description}
                  </p>
                </div>
              </Link>
            ))}
            <div className="hidden md:block" />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="flex items-center justify-center" style={{ paddingTop: '120px', paddingBottom: '120px', backgroundColor: '#F5E6D3' }}>
        <div className="max-w-6xl px-6 sm:px-8 lg:px-12 w-full">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900" style={{ marginBottom: '32px' }}>
              Why Adaptive Optix
            </h2>
            <p className="text-base text-gray-600 leading-relaxed mt-2">
              Proven expertise built on years of successful eMobility implementation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Battle-Tested Architecture',
                description: 'Our solutions are built on proven eMobility technology serving millions of transactions.',
                clickable: false,
              },
              {
                title: 'Rapid Implementation',
                description: 'Fast deployment with minimal disruption to your existing operations.',
                clickable: false,
              },
              {
                title: 'Flexible Integration',
                description: 'Choose BaaS, SaaS, or API-based solutions that fit your needs.',
                clickable: false,
              },
              {
                title: 'Expert Support',
                description: 'Dedicated teams to ensure your success from day one.',
                clickable: false,
              },
              {
                title: 'Fully Customizable Staff Portal',
                description: 'Tailored portal solutions designed to meet your specific business requirements.',
                clickable: true,
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`bg-white border-t-4 rounded-lg hover:shadow-lg transition mr-4 ${item.clickable ? 'cursor-pointer' : ''}`}
                style={{ borderTopColor: '#6B5B95', padding: '32px 48px 32px 32px' }}
                onClick={() => item.clickable && setShowPortalModal(true)}
              >
                <h3 className="text-lg font-bold text-gray-900 mb-4">
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
                <p className="text-gray-700 leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-white flex items-center justify-center" style={{ paddingTop: '120px', paddingBottom: '120px', backgroundImage: 'linear-gradient(to bottom right, #6B5B95, #5a4a7e, #4a3a6e)' }}>
        <div className="max-w-6xl px-6 sm:px-8 lg:px-12 w-full">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Ready to Transform Your Operations?
            </h2>
            <p className="text-lg text-blue-100 mb-10 leading-relaxed">
              Connect with our team to discuss how Adaptive Optix can support your business goals.
            </p>
            <Link
              href="#contact"
              style={{ display: 'inline-block', padding: '10px 24px', backgroundColor: 'white', color: '#6B5B95', fontWeight: '600', borderRadius: '8px', textDecoration: 'none', fontSize: '14px', border: 'none', cursor: 'pointer' }}
            >
              Schedule a Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />
    </main>
  );
}
