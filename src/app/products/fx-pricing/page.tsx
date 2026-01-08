import Link from 'next/link';
import Button from '@/components/Button';
import { config } from '@/data/config';

const fxPricing = config.products.find((p) => p.id === 'fx-pricing')!;

export const metadata = {
  title: `${fxPricing.name} - Adaptive Optix`,
  description: fxPricing.description,
};

export default function FXPricingPage() {
  return (
    <main style={{ backgroundColor: '#000029ff', color: '#ffffff' }}>
      {/* Hero */}
      <section className="hero-banner text-white flex items-center justify-center" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="max-w-6xl px-6 sm:px-8 lg:px-12 w-full">
          <div className="text-center">
            <Button href="/" label="← Home" variant="home" />
            <div className="text-5xl mb-6">{fxPricing.icon}</div>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight" style={{ marginBottom: '32px' }}>
              {fxPricing.name}
            </h1>
            <p className="text-lg md:text-xl text-blue-100 leading-relaxed" style={{ marginBottom: '48px' }}>
              {fxPricing.description}
            </p>
            <Button href="#contact" label="Request Demo" />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="flex items-center justify-center" style={{ paddingTop: '120px', paddingBottom: '120px', backgroundColor: '#000029ff' }}>
        <div className="max-w-6xl px-6 sm:px-8 lg:px-12 w-full">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-white" style={{ marginBottom: '32px' }}>
              Key Features
            </h2>
            <p className="text-base text-white leading-relaxed mt-2">
              Advanced capabilities built into every feature for maximum efficiency.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {fxPricing.features.map((feature, index) => (
              <div key={index} className="bg-[#14143A] border-t-4 border-blue-600 rounded-lg shadow-sm mr-4" style={{ padding: '24px 40px 24px 24px' }}>
                <h3 className="text-lg font-bold text-white mb-3">{feature}</h3>
                <p className="text-white leading-relaxed text-sm">
                  Advanced capabilities built into every feature for maximum efficiency.
                </p>
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
              Why FX Pricing?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Real-Time Accuracy',
                description: 'Get the most current market rates with millisecond precision',
              },
              {
                title: 'Multi-Currency Support',
                description: 'Handle transactions in any currency with automatic conversion',
              },
              {
                title: 'Risk Management',
                description: 'Built-in tools to hedge and manage foreign exchange risk',
              },
              {
                title: 'Compliance Ready',
                description: 'Full audit trails and regulatory compliance reporting',
              },
              {
                title: 'API Driven',
                description: 'Seamlessly integrate with your existing systems',
              },
              {
                title: '24/7 Availability',
                description: 'Global market support round the clock',
              },
            ].map((benefit, index) => (
              <div key={index} className="bg-[#14143A] border-t-4 border-blue-600 rounded-lg hover:shadow-lg transition mr-4" style={{ padding: '32px 48px 32px 32px' }}>
                <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-white leading-relaxed text-sm">{benefit.description}</p>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'International Payments',
                description: 'Process cross-border payments with competitive rates and instant settlement',
              },
              {
                title: 'Travel & Tourism',
                description: 'Provide real-time currency conversion for better customer experience',
              },
              {
                title: 'E-Commerce',
                description: 'Accept payments in multiple currencies with automatic conversion',
              },
            ].map((useCase, index) => (
              <div key={index} className="bg-[#14143A] border-t-4 border-blue-600 rounded-lg hover:shadow-lg transition mr-4" style={{ padding: '32px 48px 32px 32px' }}>
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
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-lg text-blue-100 mb-10 leading-relaxed">
              Let us show you how FX Pricing can transform your business.
            </p>
            <Button href="#contact" label="Request a Demo" />
          </div>
        </div>
      </section>
    </main>
  );
}
