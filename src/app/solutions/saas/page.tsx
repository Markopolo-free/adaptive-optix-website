import Link from 'next/link';
import { config } from '@/data/config';

const saas = config.solutions.find((s) => s.id === 'saas')!;

export const metadata = {
  title: `${saas.name} - Adaptive Optix`,
  description: saas.description,
};

export default function SaaSPage() {
  return (
    <main className="bg-white text-gray-900">
      {/* Hero */}
      <section className="text-white flex items-center justify-center" style={{ paddingTop: '80px', paddingBottom: '80px', backgroundImage: 'linear-gradient(to bottom right, #6B5B95, #5a4a7e, #4a3a6e)' }}>
        <div className="max-w-6xl px-6 sm:px-8 lg:px-12 w-full">
          <div className="text-center">
            <Link href="/" style={{ display: 'inline-block', marginBottom: '24px', padding: '10px 24px', backgroundColor: 'white', color: '#6B5B95', fontWeight: '600', borderRadius: '8px', textDecoration: 'none', fontSize: '14px', border: 'none', cursor: 'pointer' }}>
              ← Home
            </Link>
            <div className="text-5xl mb-6">{saas.icon}</div>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight" style={{ marginBottom: '32px' }}>
              {saas.name}
            </h1>
            <p className="text-lg md:text-xl text-blue-100 leading-relaxed" style={{ marginBottom: '48px' }}>
              {saas.description}
            </p>
            <Link
              href="#contact"
              style={{ display: 'inline-block', padding: '10px 24px', backgroundColor: 'white', color: '#6B5B95', fontWeight: '600', borderRadius: '8px', textDecoration: 'none', fontSize: '14px', border: 'none', cursor: 'pointer' }}
            >
              Request Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="flex items-center justify-center" style={{ paddingTop: '120px', paddingBottom: '120px', backgroundColor: '#F5E6D3' }}>
        <div className="max-w-6xl px-6 sm:px-8 lg:px-12 w-full">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900" style={{ marginBottom: '32px' }}>
              What is {saas.name}?
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <p className="text-base text-gray-600 leading-relaxed mb-6">
              Software as a Service delivers powerful applications through your browser. No installation, no maintenance, no worries. Just log in and get to work.
            </p>
            <p className="text-base text-gray-600 leading-relaxed">
              Our SaaS solutions are designed to be intuitive, scalable, and secure, with automatic updates ensuring you always have the latest features and security patches.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="flex items-center justify-center" style={{ paddingTop: '120px', paddingBottom: '120px', backgroundColor: '#F5E6D3' }}>
        <div className="max-w-6xl px-6 sm:px-8 lg:px-12 w-full">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900" style={{ marginBottom: '32px' }}>
              Key Advantages
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {saas.benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg hover:shadow-lg transition mr-4" style={{ borderTopWidth: '4px', borderTopColor: '#6B5B95', padding: '32px 48px 32px 32px' }}>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{benefit}</h3>
                <p className="text-gray-700 leading-relaxed text-sm">
                  Cloud-based delivery with enterprise reliability and support.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Models */}
      <section className="flex items-center justify-center" style={{ paddingTop: '120px', paddingBottom: '120px', backgroundColor: '#F5E6D3' }}>
        <div className="max-w-6xl px-6 sm:px-8 lg:px-12 w-full">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900" style={{ marginBottom: '32px' }}>
              Flexible Pricing Models
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
              <div key={index} className="bg-white rounded-lg hover:shadow-lg transition mr-4" style={{ borderTopWidth: '4px', borderTopColor: '#6B5B95', padding: '32px 48px 32px 32px' }}>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{model.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{model.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="flex items-center justify-center" style={{ paddingTop: '120px', paddingBottom: '120px', backgroundColor: '#F5E6D3' }}>
        <div className="max-w-6xl px-6 sm:px-8 lg:px-12 w-full">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900" style={{ marginBottom: '32px' }}>
              SaaS Platform Features
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Browser-Based',
                description: 'Access from any device with an internet connection',
              },
              {
                title: 'Automatic Updates',
                description: 'Always have the latest features and security patches',
              },
              {
                title: 'Data Security',
                description: 'Enterprise-grade encryption and compliance certifications',
              },
              {
                title: 'Collaboration',
                description: 'Built-in tools for team collaboration and communication',
              },
              {
                title: 'API Access',
                description: 'Connect with other tools in your tech stack',
              },
              {
                title: '99.9% Uptime SLA',
                description: 'Reliable service with guaranteed availability',
              },
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-lg hover:shadow-lg transition mr-4" style={{ borderTopWidth: '4px', borderTopColor: '#6B5B95', padding: '32px 48px 32px 32px' }}>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="flex items-center justify-center" style={{ paddingTop: '120px', paddingBottom: '120px', backgroundColor: '#F5E6D3' }}>
        <div className="max-w-6xl px-6 sm:px-8 lg:px-12 w-full">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900" style={{ marginBottom: '32px' }}>
              Use Cases
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
              <div key={index} className="bg-white rounded-lg hover:shadow-lg transition mr-4" style={{ borderTopWidth: '4px', borderTopColor: '#6B5B95', padding: '32px 48px 32px 32px' }}>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{useCase.title}</h3>
                <p className="text-gray-700 leading-relaxed text-sm">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-white flex items-center justify-center" style={{ paddingTop: '120px', paddingBottom: '120px', backgroundImage: 'linear-gradient(to bottom right, #6B5B95, #5a4a7e, #4a3a6e)' }}>
        <div className="max-w-6xl px-6 sm:px-8 lg:px-12 w-full">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready for Cloud?</h2>
            <p className="text-lg text-blue-100 mb-10 leading-relaxed">
              Experience the simplicity and power of cloud-based software solutions.
            </p>
            <Link
              href="#contact"
              style={{ display: 'inline-block', padding: '10px 24px', backgroundColor: 'white', color: '#6B5B95', fontWeight: '600', borderRadius: '8px', textDecoration: 'none', fontSize: '14px', border: 'none', cursor: 'pointer' }}
            >
              Schedule a Demo
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
