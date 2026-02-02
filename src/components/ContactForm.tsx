'use client';

import { useState, FormEvent } from 'react';
import Button from './Button';

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  interest: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    interest: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError(null);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to send inquiry');
      }

      setSubmitted(true);
      setFormData({ name: '', email: '', company: '', phone: '', interest: '', message: '' });

      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" style={{ backgroundColor: '#000029ff', paddingTop: '120px', paddingBottom: '120px' }}>
      <div className="flex flex-col items-center justify-center">
        <div className="text-center mb-14 max-w-2xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-base text-white leading-relaxed">
            Register your interest in our products and solutions. We'll get back to you shortly.
          </p>
        </div>

          {submitted && (
            <div className="mb-8 p-4 bg-green-50 border-l-4 rounded-lg max-w-3xl mx-auto px-6 sm:px-8 lg:px-12" style={{ borderLeftColor: '#6B5B95' }}>
              <p className="text-green-900 font-semibold text-center">
                ✓ Thank you! We've received your inquiry and will contact you soon.
              </p>
            </div>
          )}

          {error && (
            <div className="mb-8 p-4 bg-red-50 border-l-4 rounded-lg max-w-3xl mx-auto px-6 sm:px-8 lg:px-12" style={{ borderLeftColor: '#dc2626' }}>
              <p className="text-red-900 font-semibold text-center">
                ✕ {error}
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="bg-[#14143A] rounded-lg shadow-md border border-[#6B5B95] space-y-6 max-w-3xl w-full mx-auto" style={{ padding: '32px 48px 32px 32px' }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label htmlFor="name" className="block text-base font-bold text-white mb-3">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-3.5 border border-[#6B5B95] rounded-lg focus:outline-none transition text-gray-900 text-base bg-white"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-base font-bold text-white mb-3">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-3.5 border border-[#6B5B95] rounded-lg focus:outline-none transition text-gray-900 text-base bg-white"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-base font-bold text-white mb-3">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-5 py-3.5 border border-[#6B5B95] rounded-lg focus:outline-none transition text-gray-900 text-base bg-white"
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-base font-bold text-white mb-3">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-5 py-3.5 border border-[#6B5B95] rounded-lg focus:outline-none transition text-gray-900 text-base bg-white"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
            </div>

            <div>
              <label htmlFor="interest" className="block text-base font-bold text-white mb-3">
                Product/Solution Interest *
              </label>
              <select
                id="interest"
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                required
                className="w-full px-5 py-3.5 border border-[#6B5B95] rounded-lg focus:outline-none transition text-gray-900 text-base bg-white"
              >
                <option value="">Select an option</option>
                <optgroup label="Products">
                  <option value="fx-pricing">FX Pricing</option>
                  <option value="loyalty">Loyalty</option>
                  <option value="offers-campaigns">Offers & Campaigns</option>
                </optgroup>
                <optgroup label="Solutions">
                  <option value="baas">Backend as a Service (BaaS)</option>
                  <option value="saas">Software as a Service (SaaS)</option>
                  <option value="api">APIs & Integration</option>
                </optgroup>
                <option value="general">General Inquiry</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-bold text-white mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 border border-[#6B5B95] rounded-lg focus:outline-none transition text-gray-900 text-sm resize-none bg-white"
                placeholder="Tell us about your requirements or interests..."
              />
            </div>

            <div className="flex justify-center">
              <Button
                label={loading ? 'Sending...' : 'Register Interest'}
                type="submit"
                disabled={loading}
                className="hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
              />
            </div>

            <p className="text-xs text-gray-300 text-center leading-relaxed">
              We respect your privacy. Your information will only be used to contact you about your inquiry, stored securely, and deleted once we have provided the information you requested.
            </p>
          </form>

      </div>
    </section>
  );
}
