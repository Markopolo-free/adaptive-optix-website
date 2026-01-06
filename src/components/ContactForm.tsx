'use client';

import { useState, FormEvent } from 'react';

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      console.log('Form submitted:', formData);
      setSubmitted(true);
      setLoading(false);
      setFormData({ name: '', email: '', company: '', phone: '', interest: '', message: '' });

      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="bg-white py-36 md:py-52">
      <div className="flex flex-col items-center justify-center">
        <div className="text-center mb-14 max-w-2xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-base text-gray-600 leading-relaxed">
            Register your interest in our products and solutions. We'll get back to you shortly.
          </p>
        </div>

          {submitted && (
            <div className="mb-8 p-4 bg-green-50 border-l-4 border-green-600 rounded-lg max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">
              <p className="text-green-900 font-semibold text-center">
                ✓ Thank you! We've received your inquiry and will contact you soon.
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} suppressHydrationWarning className="bg-white rounded-lg shadow-md border border-gray-200 p-10 space-y-6 max-w-3xl w-full mx-auto px-6 sm:px-8 lg:px-12\">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label htmlFor="name" className="block text-base font-bold text-gray-900 mb-3">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  suppressHydrationWarning
                  className="w-full px-5 py-3.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-gray-900 text-base"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-base font-bold text-gray-900 mb-3">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  suppressHydrationWarning
                  className="w-full px-5 py-3.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-gray-900 text-base"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-base font-bold text-gray-900 mb-3">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  suppressHydrationWarning
                  className="w-full px-5 py-3.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-gray-900 text-base"
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-base font-bold text-gray-900 mb-3">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  suppressHydrationWarning
                  className="w-full px-5 py-3.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-gray-900 text-base"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
            </div>

            <div>
              <label htmlFor="interest" className="block text-base font-bold text-gray-900 mb-3">
                Product/Solution Interest *
              </label>
              <select
                id="interest"
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                required
                suppressHydrationWarning
                className="w-full px-5 py-3.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-gray-900 text-base"
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
              <label htmlFor="message" className="block text-sm font-bold text-gray-900 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                suppressHydrationWarning
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-gray-900 text-sm resize-none"
                placeholder="Tell us about your requirements or interests..."
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              suppressHydrationWarning
              className="w-full px-6 py-2.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed shadow-md text-sm"
            >
              {loading ? 'Sending...' : 'Register Interest'}
            </button>

            <p className="text-xs text-gray-600 text-center leading-relaxed">
              We respect your privacy. Your information will only be used to contact you about your inquiry.
            </p>
          </form>

      </div>
    </section>
  );
}
