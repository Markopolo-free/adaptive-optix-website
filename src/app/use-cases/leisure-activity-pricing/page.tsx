"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { portableTextComponents } from '@/sanity/lib/portableTextComponents';
import { urlFor } from '@/sanity/lib/imageUrl';

export default function LeisureActivityPricingUseCasePage() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('/api/use-case-page?slug=leisure-activity-pricing');
      const json = await res.json();
      setData(json);
    }
    fetchData();
  }, []);

  const imageUrl = data?.image ? urlFor(data.image) : null;
  return (
    <main style={{ backgroundColor: '#000029ff', color: '#fff', minHeight: '100vh', padding: '60px 0', position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}>
      {/* Vertical divider and left margin */}
      <div style={{ width: '1.5cm', minWidth: '1.5cm', height: '100%' }}>
        <div style={{ position: 'absolute', top: 0, bottom: 0, left: '1.5cm', width: '2px', background: 'rgba(107,91,149,0.7)', borderRadius: '2px', zIndex: 2 }} />
          <div style={{ width: '4px', borderRadius: '2px', background: 'transparent', height: '100%' }} />
      </div>
      <div className="flex flex-col items-start" style={{ flex: 1, maxWidth: '900px' }}>
        <button
          onClick={() => window.history.back()}
          className="mb-10 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          style={{ width: '120px', marginBottom: '40px' }}
        >
          ← Back
        </button>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-10" style={{ marginBottom: '40px' }}>{data?.title || 'Leisure Activity Pricing'}</h1>
        <div className="text-xl text-white bg-[#14143A] border-t-4 border-blue-500 rounded-2xl p-8 sm:p-12 lg:p-16 mb-14 w-full" style={{ boxSizing: 'border-box', wordBreak: 'break-word', marginBottom: '48px' }}>
          {data?.body ? (
            <PortableText value={data.body} components={portableTextComponents} />
          ) : (
            <p className="mb-6">Leisure Activity Pricing use case content goes here.</p>
          )}
        </div>
        <div className="bg-[#14143A] border-t-4 border-blue-500 rounded-2xl p-8 flex flex-col items-center w-full" style={{ marginTop: '0', marginBottom: '0' }}>
          {imageUrl ? (
            <Image
              src={imageUrl.toString()}
              alt={data?.title || 'Leisure Activity Pricing Diagram'}
              width={850}
              height={850}
              className="rounded-xl border-2 border-[#6B5B95] bg-white"
              style={{ objectFit: 'contain', background: '#fff' }}
            />
          ) : (
            <div style={{ width: 850, height: 400, background: '#222', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 16, border: '2px dashed #6B5B95' }}>
              No image available
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
