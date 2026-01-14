'use client';

import { useState } from 'react';

export default function SeedTrigger() {
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const triggerSeed = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/sanity/seed', {
        method: 'POST',
      });
      const data = await response.json();
      setResult(data);
    } catch (error: any) {
      setResult({ error: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif' }}>
      <h1>Seed Sanity from Config</h1>
      <p>Click the button below to sync data from config.ts to Sanity CMS.</p>
      <button
        onClick={triggerSeed}
        disabled={loading}
        style={{
          padding: '12px 24px',
          fontSize: '16px',
          backgroundColor: '#6B5B95',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: loading ? 'not-allowed' : 'pointer',
          opacity: loading ? 0.6 : 1,
        }}
      >
        {loading ? 'Seeding...' : 'Seed Sanity'}
      </button>
      {result && (
        <div style={{ marginTop: '20px', padding: '16px', backgroundColor: '#f5f5f5', borderRadius: '4px' }}>
          <h3>Result:</h3>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
