"use client";

import Link from 'next/link';
import Button from '@/components/Button';
import { useEffect, useState } from 'react';
import { PortableText } from '@portabletext/react';
import { portableTextComponents } from '@/sanity/lib/portableTextComponents';

export default function SolutionFeaturesPage() {
  const [solutions, setSolutions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchSolutions() {
      try {
        const res = await fetch('/api/solution-feature-cards', { cache: 'no-store' });
        if (!res.ok) throw new Error('Failed to fetch solution features');
        const data = await res.json();
        setSolutions(data);
      } catch (err: any) {
        setError(err.message || 'Unknown error');
      } finally {
        setLoading(false);
      }
    }
    fetchSolutions();
  }, []);

  return (
    <main style={{ backgroundColor: '#000029ff', color: '#fff', minHeight: '100vh', padding: '60px 0', position: 'relative', zIndex: 1 }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-12">Solution Features</h1>
        {loading ? (
          <div className="text-white">Loading...</div>
        ) : error ? (
          <div className="text-red-400">{error}</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {solutions.length === 0 ? (
              <div className="text-white">No solution features found.</div>
            ) : (
              solutions.map((solution, index) => (
                <div key={index} className="bg-[#14143A] border-t-4 border-blue-500 rounded-2xl hover:shadow-lg transition flex flex-col justify-between cursor-pointer" style={{ padding: '36px', minHeight: '260px' }}>
                  <div>
                    {solution.icon && (
                      <div style={{ fontSize: '48px', marginBottom: '16px' }}>{solution.icon}</div>
                    )}
                    {solution.image && (
                      <img src={solution.image} alt={solution.title} style={{ width: '100%', height: 'auto', marginBottom: '16px', borderRadius: '8px' }} />
                    )}
                    <h3 className="text-xl font-bold text-white mb-4">{solution.title}</h3>
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
                  <div className="mt-8 flex justify-end">
                    {/* Use shared Button component for consistency */}
                    <Button href={solution.href} label="Find out more" variant="primary" className="" />
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </main>
  );
}
