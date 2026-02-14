import { sanityClient } from '@/sanity/lib/client';
import { footerCardQuery } from '@/sanity/lib/queries';
import FooterConnect from './FooterConnect';

export default async function Footer() {
  if (!sanityClient) return null;

  const footerCard = await sanityClient.fetch(footerCardQuery);
  if (!footerCard) return null;

  const connectTitle = footerCard.connectTitle || 'Connect';
  const connectText = footerCard.connectText || '';
  const email = footerCard.email;
  const linkedInUrl = footerCard.linkedInUrl;
  const instagramUrl = footerCard.instagramUrl;
  const twitterUrl = footerCard.twitterUrl;
  const tiktokUrl = footerCard.tiktokUrl;
  const facebookUrl = footerCard.facebookUrl;

  // Create pairs of social links
  const socialLinks = [
    { label: 'Email', url: email ? `mailto:${email}` : null, icon: '✉️', isEmail: true },
    { label: 'LinkedIn', url: linkedInUrl, icon: '💼' },
    { label: 'Instagram', url: instagramUrl, icon: '📸' },
    { label: 'X (Twitter)', url: twitterUrl, icon: '𝕏' },
    { label: 'TikTok', url: tiktokUrl, icon: '🎵' },
    { label: 'Facebook', url: facebookUrl, icon: 'f' },
  ].filter(link => link.url);

  return (
    <footer className="bg-gray-900 text-gray-100 py-16">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Connect */}
          <FooterConnect connectTitle={connectTitle} socialLinks={socialLinks} />
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
