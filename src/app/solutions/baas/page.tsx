import Link from 'next/link';
import { config } from '@/data/config';

const baas = config.solutions.find((s) => s.id === 'baas')!;

export const metadata = {
  title: `${baas.name} - Adaptive Optix`,
  description: baas.description,
};

export default function BaaSPage() {
  return (
    <main style={{ backgroundColor: '#000029ff', color: '#ffffff' }}>
      {/* Hero */}
      <section className="hero-banner text-white flex items-center justify-center" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="max-w-6xl px-6 sm:px-8 lg:px-12 w-full">
          <div className="text-center">
            <Link href="/" style={{ display: 'inline-block', marginBottom: '24px', padding: '10px 24px', backgroundColor: 'white', color: '#000029ff', fontWeight: '600', borderRadius: '8px', textDecoration: 'none', fontSize: '14px', border: 'none', cursor: 'pointer' }}>
              ← Home
            </Link>
            <div className="text-5xl mb-6">{baas.icon}</div>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight" style={{ marginBottom: '32px' }}>
              {baas.name}
            </h1>
            <p className="text-lg md:text-xl text-blue-100 leading-relaxed" style={{ marginBottom: '48px' }}>
              {baas.description}
            </p>
            <Link
              href="#contact"
              style={{ display: 'inline-block', padding: '10px 24px', backgroundColor: 'white', color: '#000029ff', fontWeight: '600', borderRadius: '8px', textDecoration: 'none', fontSize: '14px', border: 'none', cursor: 'pointer' }}
            >
              Request Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="flex items-center justify-center" style={{ paddingTop: '120px', paddingBottom: '120px', backgroundColor: '#000029ff' }}>
        <div className="max-w-6xl px-6 sm:px-8 lg:px-12 w-full">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white" style={{ marginBottom: '32px' }}>
              What is {baas.name}?
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <p className="text-base text-white leading-relaxed mb-6">
              Backend as a Service (BaaS) eliminates the complexity of managing infrastructure. Instead of building and maintaining servers, databases, and APIs from scratch, our managed BaaS platform provides everything you need out of the box.
            </p>
            <p className="text-base text-white leading-relaxed">
              Focus on your application logic while we handle the heavy lifting of infrastructure management, security, scalability, and compliance.
            </p>
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
            {baas.benefits.map((benefit, index) => (
              <div key={index} className="bg-[#14143A] border-t-4 border-blue-600 rounded-lg hover:shadow-lg transition" style={{ padding: '32px 48px 32px 32px' }}>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{benefit}</h3>
                <p className="text-gray-700 leading-relaxed text-sm">
                  Enterprise-grade infrastructure with minimal operational overhead.
                </p>
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
              Platform Features
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: 'Real-Time Database',
                description: 'Sync data across all clients in real-time',
              },
              {
                title: 'Authentication',
                description: 'Built-in user authentication and authorization',
              },
              {
                title: 'Cloud Storage',
                description: 'Secure file storage with access controls',
              },
              {
                title: 'Cloud Functions',
                description: 'Run custom logic without managing servers',
              },
              {
                title: 'Webhooks',
                description: 'Trigger external systems on events',
              },
              {
                title: 'Analytics',
                description: 'Track usage and performance metrics',
              },
            ].map((feature, index) => (
              <div key={index} className="bg-[#14143A] rounded-lg hover:shadow-lg transition" style={{ borderTopWidth: '4px', borderTopColor: '#6B5B95', padding: '32px 48px 32px 32px' }}>
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
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
              Perfect For
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: 'Startup MVPs',
                description: 'Launch quickly without enterprise infrastructure costs',
              },
              {
                title: 'Mobile Apps',
                description: 'Sync data seamlessly across iOS, Android, and web',
              },
              {
                title: 'Real-Time Apps',
                description: 'Build collaborative apps with real-time synchronization',
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
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Get Started with {baas.name}</h2>
            <p className="text-lg text-blue-100 mb-10 leading-relaxed">
              Eliminate infrastructure complexity. Build faster. Scale effortlessly.
            </p>
            <Link
              href="#contact"
              style={{ display: 'inline-block', padding: '10px 24px', backgroundColor: 'white', color: '#000029ff', fontWeight: '600', borderRadius: '8px', textDecoration: 'none', fontSize: '14px', border: 'none', cursor: 'pointer' }}
            >
              Schedule a Demo
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
