"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { portableTextComponents } from '@/sanity/lib/portableTextComponents';
import { urlFor } from '@/sanity/lib/imageUrl';

export default function RepeatBusinessPage() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('/api/product-page?slug=repeat-business');
      const json = await res.json();
      setData(json);
    }
    fetchData();
  }, []);

  const imageUrl = data?.imageUrl || null;
  return (
    <main style={{ backgroundColor: '#000029ff', color: '#fff', minHeight: '100vh', padding: '60px 0', position: 'relative', zIndex: 1 }}>
      <div className="flex flex-col items-start" style={{ maxWidth: '1200px', marginRight: 'auto', marginLeft: 'auto' }}>
        <button
          onClick={() => window.history.back()}
          className="mb-8 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          style={{ marginLeft: '32px', marginBottom: '24px', width: '120px' }}
        >
           Back
        </button>
        <h1 className="text-3xl md:text-4xl font-bold text-white" style={{ marginLeft: '32px', marginBottom: '48px' }}>{data?.title || 'Repeat Business'}</h1>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
            <div className="bg-[#14143A] border-t-4 border-blue-500 rounded-2xl p-6 flex flex-col items-center w-full max-w-2xl mb-8 lg:mb-0" style={{ minWidth: '650px', maxWidth: '650px' }}>
              <Image
                src={imageUrl ? imageUrl.toString() : '/Image-files/UC-BAAS-1.JPG'}
                alt={data?.title || 'Repeat Business Diagram'}
                width={650}
                height={650}
                className="rounded-xl border-2 border-[#6B5B95] bg-white"
                style={{ objectFit: 'contain', background: '#fff' }}
              />
            </div>
            <div className="text-lg text-white bg-[#14143A] border-t-4 border-blue-500 rounded-2xl p-6 sm:p-10 lg:p-14" style={{ minWidth: '650px', maxWidth: '650px', minHeight: 400 }}>
              <div className="mb-6"></div>
              {data?.body ? (
                <PortableText value={data.body} components={portableTextComponents} />
              ) : (
                <>
                  <p className="mb-6">Repeat Business product content goes here.</p>
                </>
              )}
            </div>
          </div>
        {data?.description_2 && (
          <div className="text-xl text-white bg-[#14143A] border-t-4 border-blue-500 rounded-2xl p-8 sm:p-12 lg:p-16 w-full" style={{ boxSizing: 'border-box', wordBreak: 'break-word', marginTop: '48px' }}>
            <div className="text-white leading-relaxed" style={{ whiteSpace: 'pre-line' }}>{data.description_2}</div>
          </div>
        )}
      </div>
    </main>
  );
}
