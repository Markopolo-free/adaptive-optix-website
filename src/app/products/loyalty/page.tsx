import Link from 'next/link';
import Button from '@/components/Button';
import { config } from '@/data/config';

const loyalty = config.products.find((p) => p.id === 'loyalty')!;

export const metadata = {
  title: `${loyalty.name} - Adaptive Optix`,
  description: loyalty.description,
};

export default function LoyaltyPage() {
  return (
    <main style={{ backgroundColor: '#000029ff', color: '#ffffff' }}>
      {/* Hero */}
      <section className="hero-banner text-white flex items-center justify-center" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="max-w-6xl px-6 sm:px-8 lg:px-12 w-full">
          <div className="text-center">
            <Link href="/" style={{ display: 'inline-block', marginBottom: '24px', padding: '10px 24px', backgroundColor: 'white', color: '#000029ff', fontWeight: '600', borderRadius: '8px', textDecoration: 'none', fontSize: '14px', border: 'none', cursor: 'pointer' }}>
              ← Home
            </Link>
            <div className="text-5xl mb-6">{loyalty.icon}</div>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight" style={{ marginBottom: '32px' }}>
              {loyalty.name}
            </h1>
            <p className="text-lg md:text-xl text-blue-100 leading-relaxed" style={{ marginBottom: '48px' }}>
              {loyalty.description}
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
              Comprehensive loyalty management designed to increase customer lifetime value.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {loyalty.features.map((feature, index) => (
              <div key={index} className="bg-[#14143A] border-t-4 border-blue-600 rounded-lg shadow-sm mr-4" style={{ padding: '24px 40px 24px 24px' }}>
                <h3 className="text-lg font-bold text-white mb-3">{feature}</h3>
                <p className="text-white leading-relaxed text-sm">
                  Comprehensive loyalty management designed to increase customer lifetime value.
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
              Why Our Loyalty Program?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Increase Retention',
                description: 'Keep customers engaged with personalized rewards and exclusive benefits',
              },
              {
                title: 'Boost Lifetime Value',
                description: 'Encourage repeat purchases and higher transaction values',
              },
              {
                title: 'Flexible Tiers',
                description: 'Create multiple membership levels to reward your best customers',
              },
              {
                title: 'Real-Time Analytics',
                description: 'Track program performance and customer behavior in real-time',
              },
              {
                title: 'Gamification',
                description: 'Make rewards fun with points, badges, and achievements',
              },
              {
                title: 'Multi-Channel',
                description: 'Reward customers across web, mobile, and in-store channels',
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
                title: 'Retail',
                description: 'Drive foot traffic and repeat purchases with compelling member benefits',
              },
              {
                title: 'Banking & Finance',
                description: 'Increase product adoption and customer engagement across services',
              },
              {
                title: 'Hospitality',
                description: 'Build loyal guest communities with tier-based benefits and perks',
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
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Transform Customer Loyalty</h2>
            <p className="text-lg text-blue-100 mb-10 leading-relaxed">
              Discover how our loyalty platform can improve customer retention and lifetime value.
            </p>
            <Link
              href="#contact"
              style={{ display: 'inline-block', padding: '10px 24px', backgroundColor: 'white', color: '#000029ff', fontWeight: '600', borderRadius: '8px', textDecoration: 'none', fontSize: '14px', border: 'none', cursor: 'pointer' }}
            >
              Request a Demo
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
