'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

interface Submission {
  id: number;
  name: string;
  email: string;
  company: string | null;
  phone: string | null;
  interest: string;
  message: string | null;
  created_at: string;
}

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
);

export default function SubmissionsPage() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchSubmissions();
  }, []);

  async function fetchSubmissions() {
    try {
      const { data, error: fetchError } = await supabase
        .from('submissions')
        .select('*')
        .order('created_at', { ascending: false });

      if (fetchError) throw fetchError;
      setSubmissions(data || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load submissions');
    } finally {
      setLoading(false);
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getInterestLabel = (interest: string) => {
    const labels: Record<string, string> = {
      'fx-pricing': 'FX Pricing',
      'loyalty': 'Loyalty & Rewards',
      'offers-campaigns': 'Offers & Campaigns',
      'baas': 'Banking as a Service (BaaS)',
      'saas': 'Software as a Service (SaaS)',
      'api': 'APIs & Integration',
      'general': 'General Inquiry',
    };
    return labels[interest] || interest;
  };

  return (
    <div style={{ backgroundColor: '#F5E6D3', minHeight: '100vh', paddingTop: '120px', paddingBottom: '120px' }}>
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Contact Form Submissions</h1>
          <p className="text-gray-600">
            Total submissions: <strong>{submissions.length}</strong>
          </p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 border-l-4 rounded-lg" style={{ borderLeftColor: '#dc2626' }}>
            <p className="text-red-900 font-semibold">Error: {error}</p>
          </div>
        )}

        {loading ? (
          <div className="text-center py-12">
            <p className="text-gray-600">Loading submissions...</p>
          </div>
        ) : submissions.length === 0 ? (
          <div className="bg-white rounded-lg p-8 text-center">
            <p className="text-gray-600">No submissions yet</p>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr style={{ backgroundColor: '#6B5B95' }}>
                    <th className="px-6 py-4 text-left text-white font-semibold">Date</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Name</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Email</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Company</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Phone</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Interest</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Message</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {submissions.map((submission, index) => (
                    <tr key={submission.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
                        {formatDate(submission.created_at)}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                        {submission.name}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        <a href={`mailto:${submission.email}`} className="hover:underline" style={{ color: '#6B5B95' }}>
                          {submission.email}
                        </a>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {submission.company || '-'}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {submission.phone || '-'}
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <span
                          className="px-3 py-1 rounded-full text-white font-semibold"
                          style={{ backgroundColor: '#6B5B95' }}
                        >
                          {getInterestLabel(submission.interest)}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600 max-w-xs">
                        <div className="truncate" title={submission.message || ''}>
                          {submission.message ? submission.message.substring(0, 50) + '...' : '-'}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        <div className="mt-8 text-center">
          <a
            href="/"
            className="inline-block px-6 py-3 text-white font-semibold rounded-lg hover:opacity-90 transition"
            style={{ backgroundColor: '#6B5B95' }}
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
