'use client';

import Link from 'next/link';
import Button from '@/components/Button';
import { config } from '@/data/config';
import { useState } from 'react';

const saas = config.solutions.find((s) => s.id === 'saas')!;

export default function SaaSPage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <main style={{ backgroundColor: '#000029ff', color: '#ffffff' }}>
      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white rounded-lg shadow-2xl max-w-2xl w-full p-8"
            onClick={(e) => e.stopPropagation()}
            style={{ borderTop: '4px solid #6B5B95' }}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900">API Integration Example</h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
              >
                ×
              </button>
            </div>
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto">
              <pre className="text-sm text-green-400 font-mono">
{`// API Integration Example
const pricing = await fetch('/api/price', {
  method: 'POST',
  body: JSON.stringify({
    segment: 'corporate',
    volume: 100000,
    product: 'premium'
  })
});

const rate = await pricing.json();`}
              </pre>
            </div>
            <div className="mt-6 flex justify-end">
              <Button
                label="Close"
                variant="modal"
                onClick={() => setShowModal(false)}
              />
            </div>
          </div>
        </div>
      )}

      {/* Hero */}
      <section className="hero-banner text-white flex items-center justify-center" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="max-w-6xl px-6 sm:px-8 lg:px-12 w-full">
          <div className="text-center">
            <Button href="/" label="← Home" />
            <div className="text-5xl mb-6">{saas.icon}</div>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight" style={{ marginBottom: '32px' }}>
              {saas.name}
            </h1>
            <p className="text-lg md:text-xl text-blue-100 leading-relaxed" style={{ marginBottom: '48px' }}>
              {saas.description}
            </p>
            <Button href="#contact" label="Request Demo" variant="home" />
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="flex items-center justify-center" style={{ paddingTop: '120px', paddingBottom: '120px', backgroundColor: '#000029ff' }}>
        <div className="max-w-6xl px-6 sm:px-8 lg:px-12 w-full">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white" style={{ marginBottom: '32px' }}>
              What is {saas.name}?
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <p className="text-base text-white leading-relaxed mb-6">
              Software as a Service delivers powerful applications through your browser. No installation, no maintenance, no worries. Just log in and get to work.
            </p>
            <p className="text-base text-white leading-relaxed">
              Our SaaS solutions are designed to be intuitive, scalable, and secure, with automatic updates ensuring you always have the latest features and security patches.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="flex items-center justify-center" style={{ paddingTop: '120px', paddingBottom: '120px', backgroundColor: '#000029ff' }}>
        <div className="max-w-6xl px-6 sm:px-8 lg:px-12 w-full">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-white" style={{ marginBottom: '32px' }}>
              Key Advantages
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {saas.benefits.map((benefit, index) => (
              <div key={index} className="bg-[#14143A] border-t-4 border-blue-600 rounded-lg hover:shadow-lg transition" style={{ padding: '32px 48px 32px 32px' }}>
                <h3 className="text-lg font-bold text-white mb-3">{benefit}</h3>
                <p className="text-white leading-relaxed text-sm">
                  Cloud-based delivery with enterprise reliability and support.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Models */}
      <section className="flex items-center justify-center" style={{ paddingTop: '120px', paddingBottom: '120px', backgroundColor: '#000029ff' }}>
        <div className="max-w-6xl px-6 sm:px-8 lg:px-12 w-full">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-white" style={{ marginBottom: '32px' }}>
              Flexible Pricing Models
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: 'Freemium',
                description: 'Get started for free with core features, upgrade as you grow',
              },
              {
                title: 'Subscription',
                description: 'Predictable monthly or annual pricing with unlimited usage',
              },
              {
                title: 'Usage-Based',
                description: 'Pay only for what you use with transparent per-transaction pricing',
              },
            ].map((model, index) => (
              <div key={index} className="bg-[#14143A] border-t-4 border-blue-600 rounded-lg hover:shadow-lg transition" style={{ padding: '32px 48px 32px 32px' }}>
                <h3 className="text-lg font-bold text-white mb-2">{model.title}</h3>
                <p className="text-white leading-relaxed text-sm">{model.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="flex items-center justify-center" style={{ paddingTop: '120px', paddingBottom: '120px', backgroundColor: '#000029ff' }}>
        <div className="max-w-6xl px-6 sm:px-8 lg:px-12 w-full">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-white" style={{ marginBottom: '32px' }}>
              SaaS Platform Features
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: 'Browser-Based',
                description: 'Access from any device with an internet connection',
                clickable: false,
              },
              {
                title: 'Automatic Updates',
                description: 'Always have the latest features and security patches',
                clickable: false,
              },
              {
                title: 'Data Security',
                description: 'Enterprise-grade encryption and compliance certifications',
                clickable: false,
              },
              {
                title: 'Collaboration',
                description: 'Built-in tools for team collaboration and communication',
                clickable: false,
              },
              {
                title: 'API Access',
                description: 'Connect with other tools in your tech stack',
                clickable: true,
              },
              {
                title: '99.9% Uptime SLA',
                description: 'Reliable service with guaranteed availability',
                clickable: false,
              },
            ].map((feature, index) => (
              <div
                key={index}
                className={`bg-[#14143A] border-t-4 border-blue-600 rounded-lg hover:shadow-lg transition ${feature.clickable ? 'cursor-pointer' : ''}`}
                style={{ padding: '32px 48px 32px 32px' }}
                onClick={() => feature.clickable && setShowModal(true)}
              >
                <h3 className="text-lg font-bold text-white mb-2">
                  {feature.title}
                  {feature.clickable && <span className="ml-2 text-sm" style={{ color: '#6B5B95' }}>→</span>}
                </h3>
                <p className="text-white leading-relaxed text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="flex items-center justify-center" style={{ paddingTop: '120px', paddingBottom: '120px', backgroundColor: '#000029ff' }}>
        <div className="max-w-6xl px-6 sm:px-8 lg:px-12 w-full">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-white" style={{ marginBottom: '32px' }}>
              Use Cases
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: 'Enterprise Teams',
                description: 'Manage complex workflows with role-based access control',
              },
              {
                title: 'Distributed Teams',
                description: 'Collaborate seamlessly across time zones and locations',
              },
              {
                title: 'High-Growth Companies',
                description: 'Scale infrastructure without upfront capital investment',
              },
            ].map((useCase, index) => (
              <div key={index} className="bg-[#14143A] border-t-4 border-blue-600 rounded-lg hover:shadow-lg transition" style={{ padding: '32px 48px 32px 32px' }}>
                <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                <p className="text-white leading-relaxed text-sm">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-banner text-white flex items-center justify-center" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
        <div className="max-w-6xl px-6 sm:px-8 lg:px-12 w-full">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready for Cloud?</h2>
            <p className="text-lg text-blue-100 mb-10 leading-relaxed">
              Experience the simplicity and power of cloud-based software solutions.
            </p>
            <Button href="#contact" label="Schedule a Demo" />
          </div>
        </div>
      </section>
    </main>
  );
}
