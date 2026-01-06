import Link from 'next/link';
import { config } from '@/data/config';

const api = config.solutions.find((s) => s.id === 'api')!;

export const metadata = {
  title: `${api.name} - Adaptive Optix`,
  description: api.description,
};

export default function APIPage() {
  return (
    <main className="bg-white text-gray-900">
      {/* Hero */}
      <section className="text-white flex items-center justify-center" style={{ paddingTop: '80px', paddingBottom: '80px', backgroundImage: 'linear-gradient(to bottom right, #6B5B95, #5a4a7e, #4a3a6e)' }}>
        <div className="max-w-6xl px-6 sm:px-8 lg:px-12 w-full">
          <div className="text-center">
            <Link href="/" style={{ display: 'inline-block', marginBottom: '24px', padding: '10px 24px', backgroundColor: 'white', color: '#6B5B95', fontWeight: '600', borderRadius: '8px', textDecoration: 'none', fontSize: '14px', border: 'none', cursor: 'pointer' }}>
              ← Home
            </Link>
            <div className="text-5xl mb-6">{api.icon}</div>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight" style={{ marginBottom: '32px' }}>
              {api.name}
            </h1>
            <p className="text-lg md:text-xl text-blue-100 leading-relaxed" style={{ marginBottom: '48px' }}>
              {api.description}
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
              Comprehensive API Suite
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <p className="text-base text-gray-600 leading-relaxed mb-6">
              Connect Adaptive Optix with your existing systems and third-party applications through our powerful, well-documented APIs. Build custom integrations that work exactly how you need them.
            </p>
            <p className="text-base text-gray-600 leading-relaxed">
              From REST to GraphQL, webhooks to SDKs, we provide the tools and documentation needed to integrate seamlessly into your technology stack.
            </p>
          </div>
        </div>
      </section>

      {/* API Types */}
      <section className="flex items-center justify-center" style={{ paddingTop: '120px', paddingBottom: '120px', backgroundColor: '#F5E6D3' }}>
        <div className="max-w-6xl px-6 sm:px-8 lg:px-12 w-full">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900" style={{ marginBottom: '32px' }}>
              API Options
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
              <div key={index} className="bg-white rounded-lg hover:shadow-lg transition mr-4" style={{ borderTopWidth: '4px', borderTopColor: '#6B5B95', padding: '32px 48px 32px 32px' }}>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{apiType.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{apiType.description}</p>
                <ul className="space-y-2">
                  {apiType.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-600">
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
      <section className="flex items-center justify-center" style={{ paddingTop: '120px', paddingBottom: '120px', backgroundColor: '#F5E6D3' }}>
        <div className="max-w-6xl px-6 sm:px-8 lg:px-12 w-full">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900" style={{ marginBottom: '32px' }}>
              Key Benefits
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {api.benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg hover:shadow-lg transition mr-4" style={{ borderTopWidth: '4px', borderTopColor: '#6B5B95', padding: '32px 48px 32px 32px' }}>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{benefit}</h3>
                <p className="text-gray-700 leading-relaxed text-sm">
                  Build custom integrations that work with your technology stack.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Developer Resources */}
      <section className="flex items-center justify-center" style={{ paddingTop: '120px', paddingBottom: '120px', backgroundColor: '#F5E6D3' }}>
        <div className="max-w-6xl px-6 sm:px-8 lg:px-12 w-full">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900" style={{ marginBottom: '32px' }}>
              Developer Resources
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
              <div key={index} className="bg-white rounded-lg hover:shadow-lg transition mr-4" style={{ borderTopWidth: '4px', borderTopColor: '#6B5B95', padding: '32px 48px 32px 32px' }}>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{resource.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{resource.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Reliability */}
      <section className="flex items-center justify-center" style={{ paddingTop: '120px', paddingBottom: '120px', backgroundColor: '#F5E6D3' }}>
        <div className="max-w-6xl px-6 sm:px-8 lg:px-12 w-full">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900" style={{ marginBottom: '32px' }}>
              Security & Reliability
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
              <div key={index} className="bg-white rounded-lg hover:shadow-lg transition mr-4" style={{ borderTopWidth: '4px', borderTopColor: '#6B5B95', padding: '32px 48px 32px 32px' }}>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-white flex items-center justify-center" style={{ paddingTop: '120px', paddingBottom: '120px', backgroundImage: 'linear-gradient(to bottom right, #6B5B95, #5a4a7e, #4a3a6e)' }}>
        <div className="max-w-6xl px-6 sm:px-8 lg:px-12 w-full">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Start Integrating</h2>
            <p className="text-lg text-blue-100 mb-10 leading-relaxed">
              Connect Adaptive Optix to your business systems and unlock powerful automation capabilities.
            </p>
            <Link
              href="#contact"
              style={{ display: 'inline-block', padding: '10px 24px', backgroundColor: 'white', color: '#6B5B95', fontWeight: '600', borderRadius: '8px', textDecoration: 'none', fontSize: '14px', border: 'none', cursor: 'pointer' }}
            >
              Get API Access
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
