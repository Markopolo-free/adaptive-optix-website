import Link from 'next/link';
import Button from '@/components/Button';
import { config } from '@/data/config';
import { PortableText } from '@portabletext/react';

const defaultAPI = {
  name: 'API Solution',
  description: 'A comprehensive API solution for modern integrations.',
  icon: '🔗',
  benefits: [
    'RESTful & GraphQL APIs',
    'Comprehensive documentation',
    'Rate limiting & throttling',
  ],
};

const api = config.solutions.find((s) => s.id === 'api') || defaultAPI;

export const metadata = {
  title: `${api.name} - Adaptive Optix`,
  description: api.description,
};

export default function APIPage() {
  return (
    <main style={{ backgroundColor: '#000029ff', color: '#ffffff' }}>
      {/* Hero */}
      <section className="hero-banner text-white flex items-center justify-center" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="max-w-6xl px-6 sm:px-8 lg:px-12 w-full">
          <div className="text-center">
            <Button href="/" label="← Home" />
            <div className="text-5xl mb-6">{api.icon}</div>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight" style={{ marginBottom: '32px' }}>
              {api.name}
            </h1>
            <div className="text-lg md:text-xl text-blue-100 leading-relaxed" style={{ marginBottom: '48px' }}>
              {typeof api.description === 'string' ? (
                <p>{api.description}</p>
              ) : Array.isArray(api.description) ? (
                <PortableText value={api.description} />
              ) : (
                <p>{String(api.description || '')}</p>
              )}
            </div>
            <Button href="#contact" label="Request Demo" />
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="flex items-center justify-center" style={{ paddingTop: '120px', paddingBottom: '120px', backgroundColor: '#000029ff' }}>
        <div className="max-w-6xl px-6 sm:px-8 lg:px-12 w-full">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white" style={{ marginBottom: '32px' }}>
              Comprehensive API Suite
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <p className="text-base text-white leading-relaxed mb-6">
              Connect Adaptive Optix with your existing systems and third-party applications through our powerful, well-documented APIs. Build custom integrations that work exactly how you need them.
            </p>
            <p className="text-base text-white leading-relaxed">
              From REST to GraphQL, webhooks to SDKs, we provide the tools and documentation needed to integrate seamlessly into your technology stack.
            </p>
          </div>
        </div>
      </section>

      {/* API Types */}
      <section className="flex items-center justify-center" style={{ paddingTop: '120px', paddingBottom: '120px', backgroundColor: '#000029ff' }}>
        <div className="max-w-6xl px-6 sm:px-8 lg:px-12 w-full">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-white" style={{ marginBottom: '32px' }}>
              API Options
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[ 
              {
                title: 'REST API',
                description: 'Industry-standard HTTP-based API for simple integrations',
                features: ['JSON responses', 'Standard HTTP methods', 'CORS enabled'],
              },
              {
                title: 'GraphQL API',
                description: 'Query only the data you need with flexible queries',
                features: ['Flexible queries', 'Strongly typed', 'Real-time subscriptions'],
              },
              {
                title: 'Webhooks',
                description: 'Receive real-time notifications of events',
                features: ['Event-driven', 'Custom payloads', 'Retry logic'],
              },
            ].map((apiType, index) => (
              <div key={index} className="bg-[#14143A] border-t-4 border-blue-600 rounded-lg hover:shadow-lg transition" style={{ padding: '32px 48px 32px 32px' }}>
                <h3 className="text-lg font-bold text-white mb-2">{apiType.title}</h3>
                <p className="text-white mb-4 text-sm">{apiType.description}</p>
                <ul className="space-y-2">
                  {apiType.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-white">
                      <span className="mr-2">✓</span>{feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="flex items-center justify-center" style={{ paddingTop: '120px', paddingBottom: '120px', backgroundColor: '#000029ff' }}>
        <div className="max-w-6xl px-6 sm:px-8 lg:px-12 w-full">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-white" style={{ marginBottom: '32px' }}>
              Key Benefits
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {api.benefits && api.benefits.map((benefit, index) => (
              <div key={index} className="bg-[#14143A] border-t-4 border-blue-600 rounded-lg hover:shadow-lg transition" style={{ padding: '32px 48px 32px 32px' }}>
                <h3 className="text-lg font-bold text-white mb-3">{benefit}</h3>
                <p className="text-white leading-relaxed text-sm">
                  Build custom integrations that work with your technology stack.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Developer Resources */}
      <section className="flex items-center justify-center" style={{ paddingTop: '120px', paddingBottom: '120px', backgroundColor: '#000029ff' }}>
        <div className="max-w-6xl px-6 sm:px-8 lg:px-12 w-full">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-white" style={{ marginBottom: '32px' }}>
              Developer Resources
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: 'API Documentation',
                description: 'Comprehensive documentation with code examples',
              },
              {
                title: 'SDKs',
                description: 'Official SDKs for JavaScript, Python, Java, and more',
              },
              {
                title: 'Postman Collection',
                description: 'Pre-built requests for quick API exploration',
              },
              {
                title: 'Code Samples',
                description: 'Real-world examples and integration patterns',
              },
              {
                title: 'API Playground',
                description: 'Test API endpoints directly in your browser',
              },
              {
                title: 'Developer Dashboard',
                description: 'Manage API keys and monitor usage metrics',
              },
            ].map((resource, index) => (
              <div key={index} className="bg-[#14143A] border-t-4 border-blue-600 rounded-lg hover:shadow-lg transition" style={{ padding: '32px 48px 32px 32px' }}>
                <h3 className="text-lg font-bold text-white mb-2">{resource.title}</h3>
                <p className="text-white leading-relaxed text-sm">{resource.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Reliability */}
      <section className="flex items-center justify-center" style={{ paddingTop: '120px', paddingBottom: '120px', backgroundColor: '#000029ff' }}>
        <div className="max-w-6xl px-6 sm:px-8 lg:px-12 w-full">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-white" style={{ marginBottom: '32px' }}>
              Security & Reliability
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              {
                title: 'API Key Authentication',
                description: 'Secure your API calls with industry-standard authentication',
              },
              {
                title: 'Rate Limiting',
                description: 'Fair usage policies with generous rate limits',
              },
              {
                title: 'Throttling',
                description: 'Prevent overload with intelligent request throttling',
              },
              {
                title: 'SSL/TLS Encryption',
                description: 'All API communications are encrypted in transit',
              },
            ].map((feature, index) => (
              <div key={index} className="bg-[#14143A] border-t-4 border-blue-600 rounded-lg hover:shadow-lg transition" style={{ padding: '32px 48px 32px 32px' }}>
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-white leading-relaxed text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-banner text-white flex items-center justify-center" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
        <div className="max-w-6xl px-6 sm:px-8 lg:px-12 w-full">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Start Integrating</h2>
            <p className="text-lg text-blue-100 mb-10 leading-relaxed">
              Connect Adaptive Optix to your business systems and unlock powerful automation capabilities.
            </p>
            <Button href="#contact" label="Get API Access" />
          </div>
        </div>
      </section>
    </main>
  );
}
