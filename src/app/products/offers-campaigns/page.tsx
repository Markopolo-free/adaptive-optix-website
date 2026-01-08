import Link from 'next/link';
import Button from '@/components/Button';
import { config } from '@/data/config';

const offersCampaigns = config.products.find((p) => p.id === 'offers-campaigns')!;

export const metadata = {
  title: `${offersCampaigns.name} - Adaptive Optix`,
  description: offersCampaigns.description,
};

export default function OffersCampaignsPage() {
  return (
    <main style={{ backgroundColor: '#000029ff', color: '#ffffff' }}>
      {/* Hero */}
      <section className="hero-banner text-white flex items-center justify-center" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="max-w-6xl px-6 sm:px-8 lg:px-12 w-full">
          <div className="text-center">
            <Link href="/" style={{ display: 'inline-block', marginBottom: '24px', padding: '10px 24px', backgroundColor: 'white', color: '#000029ff', fontWeight: '600', borderRadius: '8px', textDecoration: 'none', fontSize: '14px', border: 'none', cursor: 'pointer' }}>
              ← Home
            </Link>
            <div className="text-5xl mb-6">{offersCampaigns.icon}</div>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight" style={{ marginBottom: '32px' }}>
              {offersCampaigns.name}
            </h1>
            <p className="text-lg md:text-xl text-blue-100 leading-relaxed" style={{ marginBottom: '48px' }}>
              {offersCampaigns.description}
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
              Powerful tools for creating and managing successful promotional campaigns.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {offersCampaigns.features.map((feature, index) => (
              <div key={index} className="bg-[#14143A] border-t-4 border-blue-600 rounded-lg shadow-sm mr-4" style={{ padding: '24px 40px 24px 24px' }}>
                <h3 className="text-lg font-bold text-white mb-3">{feature}</h3>
                <p className="text-white leading-relaxed text-sm">
                  Powerful tools for creating and managing successful promotional campaigns.
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
              Why Our Campaign Platform?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Smart Targeting',
                description: 'Reach the right customers with precise audience segmentation',
              },
              {
                title: 'Easy Creation',
                description: 'Drag-and-drop campaign builder requires no coding',
              },
              {
                title: 'A/B Testing',
                description: 'Optimize performance with built-in testing capabilities',
              },
              {
                title: 'Real-Time Metrics',
                description: 'Monitor campaign performance with live dashboards',
              },
              {
                title: 'Multi-Channel',
                description: 'Run campaigns across email, SMS, push, and web channels',
              },
              {
                title: 'Personalization',
                description: 'Deliver personalized messages based on customer behavior',
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
                title: 'Seasonal Promotions',
                description: 'Launch targeted campaigns for holidays and seasonal events',
              },
              {
                title: 'New Product Launches',
                description: 'Generate excitement and drive adoption for new offerings',
              },
              {
                title: 'Customer Re-engagement',
                description: 'Win back inactive customers with targeted offers and incentives',
              },
            ].map((useCase, index) => (
              <div key={index} className="bg-[#14143A] border-t-4 border-blue-600 rounded-lg hover:shadow-lg transition mr-4" style={{ padding: '32px 48px 32px 32px' }}>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{useCase.title}</h3>
                <p className="text-gray-700 leading-relaxed text-sm">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-banner text-white flex items-center justify-center" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
        <div className="max-w-6xl px-6 sm:px-8 lg:px-12 w-full">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Maximize Campaign ROI</h2>
            <p className="text-lg text-blue-100 mb-10 leading-relaxed">
              See how our campaign management platform can drive better results and higher conversion rates.
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
