
function Card({ title, desc }: { title: string; desc: string }) {
  return (
    <div style={{ background: '#23243a', borderRadius: 12, padding: '2rem 1.5rem', width: '100%', maxWidth: 320, boxShadow: '0 2px 8px rgba(0,0,0,0.08)', margin: '0 auto' }}>
      <div style={{ fontSize: '1.2rem', fontWeight: 500, marginBottom: '0.7rem', color: '#fff' }}>{title}</div>
      <div style={{ fontSize: '1rem', color: '#d1d5db' }}>{desc}</div>
    </div>
  );
}

export default function SolutionFeatures() {
  return (
    <div style={{ background: '#181A2A', minHeight: '100vh', color: '#fff', fontFamily: 'Inter, sans-serif' }}>
      <header style={{ padding: '2rem 0 1rem 3rem', fontSize: '2.5rem', fontWeight: 600 }}>Adaptive Optix</header>
      <nav style={{ display: 'flex', justifyContent: 'flex-end', gap: '2rem', padding: '0 3rem', fontSize: '1.1rem' }}>
      <Link href="/" style={{ color: '#F47C20', textDecoration: 'none', fontWeight: 500 }}>← Home</Link>
      <a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Content</a>
      <a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Partners</a>
      <a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Contact</a>
      <a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Help</a>
      </nav>
      <div style={{ height: '8px', background: '#F47C20', margin: '1.5rem 0 2.5rem 0' }} />
      <main style={{ maxWidth: 900, margin: '0 auto', padding: '2rem 1rem' }}>
        {/* Solution Features */}
        <Section title="Solution Features" desc="Leverage feature-rich capabilities to create domain-specific business strategies and capture evolving opportunities">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', justifyItems: 'center' }}>
            <Card title="Pricing Features" desc="Product, size, sales channel or timing-specific, just some of the dimensions available" />
            <Card title="Loyalty & Rewards" desc="Identify valuable customers or groups, engage directly and grow your business" />
            <Card title="Data Security" desc="Your data security is central to us - our solution approach  ensures its integrity" />
            <Card title="Visualization & Insight" desc="Visualize your business, harvest insights and capture opportunities that translate directly into strategies" />
          </div>
        </Section>

        {/* Use Cases */}
        <Section title="Use Cases" desc="User-defined configuration means our solution can accommodate your business domain – see some of the of the use-cases we support">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', justifyItems: 'center' }}>
            <Card title="Banking as a Service" desc="Provide value-add services to your financial partners and end-users" />
            <Card title="Fintech Services" desc="Personalize customer experiences directly through a range of end-user specific offerings" />
            <Card title="Billing Providers" desc="Engage and incentivize digital payment - reduce risk, missed payments and lost revenue" />
            <Card title="Mobility as a Service" desc="Consolidate price and incentive offerings from multiple service providers through a single solution" />
            <Card title="Leisure Activity Pricing" desc="Combine flexible time-based and stored value pricing with 3rd party rewards and other value incentives" />
            <Card title="3rd Party Rewards" desc="Integrate pricing and rewards with leading 3rd parties – elevating your brand and customer value" />
          </div>
        </Section>

        {/* Price Management Solutions */}
        <Section title="Price Management Solutions" desc="Whether starting from scratch or going for sophisticated – all pricing needs active management and this is where you can rely on our expertise">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', justifyItems: 'center' }}>
            <Card title="Automated Support" desc="High volumes, trend identification, dynamic pricing? Track and react will support your needs" />
            <Card title="Classical Rules" desc="Internal or external regulation, segmentation or strategy rules – once set the solution ensures adherence" />
            <Card title="Pricing Operations" desc="Consultancy to monitor and manage daily oversight – a long term or initial bootstrapping strategy" />
            <Card title="On-Call Support" desc="Flexible training through to 24×7 support – we are here to support your needs" />
          </div>
        </Section>

        {/* Integration Options */}
        <Section title="Integration Options" desc="Our industry-standard software and its integration is supported by experts at every stage to ensure a seamless experience from onboarding through to go-live">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', justifyItems: 'center', marginBottom: '2rem' }}>
            <Card title="Integration Expertise" desc="Every organization is unique – our integration patterns support a range of options and services to support" />
            <Card title="Setup & Testing" desc="Our technical SMEs work alongside your team during setup and testing to ensure smooth operations" />
          </div>
          <div style={{ fontSize: '1.1rem', color: '#d1d5db', textAlign: 'center' }}>Reach out to us and we can discuss your specific needs in more detail</div>
        </Section>

        {/* Consultancy */}
        <Section title="Consultancy" desc="As a specialist provider, we supply not only software services but also expert consultancy at every stage of your pricing journey">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', justifyItems: 'center' }}>
            <Card title="Insight Discovery" desc="Let us work with you to understand more about your core business to identify where value can be unlocked" />
            <Card title="Workflow Analysis" desc="By reviewing current processes, let us help identify efficiencies and financial opportunities" />
            <Card title="Price Book Review" desc="By analyzing your current price structures, we can define optimal baseline or advanced pricing strategies" />
            <Card title="Price Segmentation" desc="Understand your customer and add value by creating rich segmentation and personalization strategies" />
          </div>
        </Section>

        {/* Contact Us! */}
        <Section title="Contact Us!" desc="We have a wealth of knowledge and insights that we’re ready to share through a collaboration – reach out to us to find out more">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', justifyItems: 'center' }}>
            <Card title="Partnerships" desc="Our solution is always evolving – reach out if you have a use case where we might collaborate" />
            <Card title="APIs" desc="Our solution has a rich set of APIs enabling configurability, high user interaction and insight" />
            <Card title="Live Demo" desc="We're always happy to discuss our capabilities in more detail: reach out to share your use case and we can arrange" />
            <Card title="Proof Of Concept" desc="Ready to try? Reach out and we can discuss how to initiate a proof of concept" />
          </div>
        </Section>

        {/* Why Adaptive Optix? */}
        <Section title="Why Adaptive Optix?" desc="Pricing is in our DNA – something we've been passionate about for over 15 years – in which time we've delivered millions of dollars of value to businesses">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', justifyItems: 'center', marginBottom: '2rem' }}>
            <Card title="Expert Foundations" desc="Our team has a long history of delivering pricing solutions globally and brings a wealth of technical expertise and business acumen" />
            <Card title="Global Platform, Local Requirements" desc="A global platform that can be configured to serve local or global business needs while still providing flexibility and agility" />
          </div>
          <div style={{ width: '100%', borderTop: '4px solid #F47C20', margin: '2rem 0' }}></div>
          <div style={{ textAlign: 'center', fontSize: '1.3rem', color: '#d1d5db' }}>Adaptive Optix</div>
        </Section>
      </main>
    </div>
  );
}

function Section({ title, desc, children }: { title: string; desc: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: '3.5rem', width: '100%' }}>
      <h2 style={{ fontSize: '2rem', fontWeight: 400, marginBottom: '1rem' }}>{title}</h2>
      <p style={{ fontSize: '1.1rem', marginBottom: '2.5rem', color: '#d1d5db' }}>{desc}</p>
      {children}
    </section>
  );
}
import Link from 'next/link';
