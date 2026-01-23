'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50" style={{ backgroundColor: '#000029ff' }} suppressHydrationWarning>
      <nav className="w-full mx-auto" style={{ paddingTop: '24px', paddingBottom: '24px', paddingLeft: '48px', paddingRight: '48px' }}>
        <div className="flex items-center justify-between">
          {/* Logo - Text Only */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <span className="font-semibold text-2xl text-white">Adaptive Optix</span>
          </Link>

          {/* Desktop Navigation - Simple Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link 
              href="/studio" 
              className="text-white font-normal transition hover:text-gray-300"
              style={{ fontSize: '16px' }}
            >
              Content
            </Link>
            <Link 
              href="#partners" 
              className="text-white font-normal transition hover:text-gray-300"
              style={{ fontSize: '16px' }}
            >
              Partners
            </Link>
            <Link 
              href="#contact" 
              className="text-white font-normal transition hover:text-gray-300"
              style={{ fontSize: '16px' }}
            >
              Contact
            </Link>
            <Link 
              href="#help" 
              className="text-white font-normal transition hover:text-gray-300"
              style={{ fontSize: '16px' }}
            >
              Help
            </Link>
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
              href="/studio"
              className="block px-4 py-2 rounded-lg transition font-medium"
              style={{ color: '#ffffff' }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(242,100,25,0.15)')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
            >
              Content
            </Link>
            <Link
              href="#partners"
              className="block px-4 py-2 rounded-lg transition font-medium"
              style={{ color: '#ffffff' }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(242,100,25,0.15)')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
            >
              Partners
            </Link>
            <Link
              href="#contact"
              className="block px-4 py-2 rounded-lg transition font-medium"
              style={{ color: '#ffffff' }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(242,100,25,0.15)')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
            >
              Contact
            </Link>
            <Link
              href="#help"
              className="block px-4 py-2 rounded-lg transition font-medium"
              style={{ color: '#ffffff' }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(242,100,25,0.15)')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
            >
              Help
            </Link>
          </div>
        )}
      </nav>
      {/* Orange accent bar - wider */}
      <div style={{ height: '8px', backgroundColor: '#f26419ff', width: '100%' }}></div>
    </header>
  );
}
