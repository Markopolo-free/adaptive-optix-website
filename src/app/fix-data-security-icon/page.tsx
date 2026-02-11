'use client';

import { useState } from 'react';
import { createClient } from '@sanity/client';

const client = createClient({
  projectId: '2cg9komv',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2026-01-20',
  token: typeof window !== 'undefined' ? localStorage.getItem('sanityToken') : null,
});

export default function FixDataSecurityIcon() {
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState('');

  const updateIcon = async () => {
    setLoading(true);
    setResult(null);
    
    try {
      const clientWithToken = createClient({
        projectId: '2cg9komv',
        dataset: 'production',
        useCdn: false,
        apiVersion: '2026-01-20',
        token: token || undefined,
      });

      // Find the Data Security card
      const cards = await clientWithToken.fetch(`*[_type == "solutionCard" && name match "Data Security*"]`);
      
      if (cards.length === 0) {
        setResult({ error: 'Data Security card not found' });
        setLoading(false);
        return;
      }

      // Update the icon
      const card = cards[0];
      await clientWithToken
        .patch(card._id)
        .set({ icon: '🛡️' })
        .commit();

      setResult({ 
        success: true, 
        message: `Updated "${card.name}" with shield icon 🛡️`,
        cardId: card._id 
      });
    } catch (error: any) {
      setResult({ error: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif', maxWidth: '600px' }}>
      <h1>Fix Data Security Icon</h1>
      <p>This will add the 🛡️ shield icon to the Data Security solution card.</p>
      
      <div style={{ marginTop: '20px' }}>
        <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
          Sanity API Token (with write permissions):
        </label>
        <input
          type="password"
          value={token}
          onChange={(e) => setToken(e.target.value)}
          placeholder="Enter your Sanity API token"
          style={{
            width: '100%',
            padding: '8px',
            fontSize: '14px',
            border: '1px solid #ccc',
            borderRadius: '4px',
          }}
        />
        <p style={{ fontSize: '12px', color: '#666', marginTop: '4px' }}>
          Get a token from{' '}
          <a href="https://www.sanity.io/manage/personal/tokens" target="_blank" rel="noopener">
            sanity.io/manage
          </a>
          {' '}(Project 2cg9komv, Editor permissions)
        </p>
      </div>

      <button
        onClick={updateIcon}
        disabled={loading || !token}
        style={{
          marginTop: '20px',
          padding: '12px 24px',
          fontSize: '16px',
          backgroundColor: token && !loading ? '#6B5B95' : '#ccc',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: token && !loading ? 'pointer' : 'not-allowed',
        }}
      >
        {loading ? 'Updating...' : 'Add Shield Icon 🛡️'}
      </button>

      {result && (
        <div style={{ 
          marginTop: '20px', 
          padding: '16px', 
          backgroundColor: result.error ? '#fee' : '#efe', 
          borderRadius: '4px',
          border: `1px solid ${result.error ? '#fcc' : '#cfc'}`
        }}>
          <h3>{result.error ? 'Error:' : 'Success!'}</h3>
          <pre style={{ whiteSpace: 'pre-wrap' }}>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
