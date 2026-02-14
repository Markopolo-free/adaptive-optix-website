"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/imageUrl';

interface Partner {
  _id: string;
  name: string;
  websiteUrl: string;
  description?: string;
  logo?: any;
}

export default function PartnersPage() {
  const [partners, setPartners] = useState<Partner[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPartners() {
      try {
        const res = await fetch('/api/partners');
        if (!res.ok) {
          throw new Error('Failed to fetch partners');
        }
        const data = await res.json();
        setPartners(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    }
    fetchPartners();
  }, []);

  return (
    <main
      style={{
        backgroundColor: '#000029ff',
        color: '#fff',
        minHeight: '100vh',
        padding: '60px 20px',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div className="flex flex-col items-center" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <Link
          href="/"
          className="self-start mb-8 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          style={{ width: '120px', textAlign: 'center', display: 'inline-block' }}
        >
          ← Back
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Partners</h1>
        <p className="text-lg text-gray-300 mb-12 text-center">
          We work with leading firms to deliver exceptional value and solutions.
        </p>

        {loading && (
          <div className="text-xl text-gray-400">Loading partners...</div>
        )}

        {error && (
          <div className="text-xl text-red-400">Error: {error}</div>
        )}

        {!loading && !error && partners.length === 0 && (
          <div className="text-xl text-gray-400">No partners available yet.</div>
        )}

        {!loading && !error && partners.length > 0 && (
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
            style={{ marginTop: '40px' }}
          >
            {partners.map((partner) => {
              const logoUrl = partner.logo ? urlFor(partner.logo) : null;
              return (
                <div
                  key={partner._id}
                  className="bg-[#14143A] border-t-4 border-blue-500 rounded-2xl p-8 flex flex-col hover:shadow-lg transition-shadow duration-300"
                >
                  {logoUrl && (
                    <div style={{ marginBottom: '16px', minHeight: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Image
                        src={logoUrl}
                        alt={`${partner.name} logo`}
                        width={120}
                        height={60}
                        style={{ objectFit: 'contain', maxHeight: '60px' }}
                      />
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-white" style={{ marginTop: '10px', marginBottom: '12px' }}>{partner.name}</h3>
                  {partner.description && (
                    <p className="text-gray-300 flex-1 text-sm leading-relaxed" style={{ marginBottom: '16px', lineHeight: '1.6' }}>
                      {partner.description}
                    </p>
                  )}
                  <div style={{ marginTop: 'auto', paddingTop: '8px' }}>
                    <a
                      href={partner.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 font-semibold transition"
                      style={{ display: 'inline' }}
                    >
                      Visit Website → {partner.websiteUrl}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
}
