'use client';

import Link from 'next/link';
import Button from './Button';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 shadow-sm" style={{ backgroundColor: '#000029ff' }} suppressHydrationWarning>
      <nav className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 flex-shrink-0">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#f26419ff' }}>
              <span className="text-white font-bold text-lg">AO</span>
            </div>
            <span className="font-bold text-xl text-white">Adaptive Optix</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            {/* Products Dropdown */}
            <div style={{ position: 'relative', marginRight: '16px' }}>
              <button
                onClick={() => setOpenDropdown(openDropdown === 'products' ? null : 'products')}
                onMouseEnter={() => setOpenDropdown('products')}
                className="font-semibold rounded-lg transition"
                style={{ padding: '10px 24px', backgroundColor: '#f26419ff', color: 'white', fontSize: '14px', display: 'inline-flex', alignItems: 'center', gap: '8px', border: 'none', cursor: 'pointer' }}
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
            <div style={{ position: 'relative', marginRight: '16px' }}>
              <button
                onClick={() => setOpenDropdown(openDropdown === 'solutions' ? null : 'solutions')}
                onMouseEnter={() => setOpenDropdown('solutions')}
                className="font-semibold rounded-lg transition"
                style={{ padding: '10px 24px', backgroundColor: '#f26419ff', color: 'white', fontSize: '14px', display: 'inline-flex', alignItems: 'center', gap: '8px', border: 'none', cursor: 'pointer' }}
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

            <a href="#why-choose-us" className="font-semibold rounded-lg transition" style={{ padding: '10px 24px', backgroundColor: '#f26419ff', color: 'white', textDecoration: 'none', fontSize: '14px', display: 'inline-block', border: 'none', cursor: 'pointer', marginRight: '16px' }}>
              Why Choose Us
            </a>

            <Button href="#contact" label="Contact Us" />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg transition"
            style={{ color: '#ffffff' }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2">
            <Link
              href="/products/fx-pricing"
              className="block px-4 py-2 rounded-lg transition font-medium"
              style={{ color: '#ffffff' }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(242,100,25,0.15)')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
            >
              FX Pricing
            </Link>
            <Link
              href="/products/loyalty"
              className="block px-4 py-2 rounded-lg transition font-medium"
              style={{ color: '#ffffff' }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(242,100,25,0.15)')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
            >
              Rewards and Loyalty
            </Link>
            <Link
              href="/products/offers-campaigns"
              className="block px-4 py-2 rounded-lg transition font-medium"
              style={{ color: '#ffffff' }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(242,100,25,0.15)')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
            >
              Offers and Campaigns
            </Link>
            <Link
              href="/solutions/baas"
              className="block px-4 py-2 rounded-lg transition font-medium"
              style={{ color: '#ffffff' }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(242,100,25,0.15)')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
            >
              Banking as a Service
            </Link>
            <Link
              href="/solutions/saas"
              className="block px-4 py-2 rounded-lg transition font-medium"
              style={{ color: '#ffffff' }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(242,100,25,0.15)')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
            >
              Software as a Service
            </Link>
            <Link
              href="/solutions/api"
              className="block px-4 py-2 rounded-lg transition font-medium"
              style={{ color: '#ffffff' }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(242,100,25,0.15)')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
            >
              APIs & Integration
            </Link>
            <a
              href="#why-choose-us"
              className="block px-4 py-2 rounded-lg transition font-medium"
              style={{ color: '#ffffff' }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(242,100,25,0.15)')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
            >
              Why Choose Us
            </a>
            <div className="mt-4">
              <Button href="#contact" label="Contact Us" className="w-full text-center block" />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
