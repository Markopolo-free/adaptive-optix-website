import { sanityClient } from '@/sanity/lib/client';
import { footerCardQuery } from '@/sanity/lib/queries';

export default async function Footer() {
  if (!sanityClient) return null;

  const footerCard = await sanityClient.fetch(footerCardQuery);
  if (!footerCard) return null;

  const connectTitle = footerCard.connectTitle || 'Connect';
  const connectText = footerCard.connectText || '';
  const email = footerCard.email;
  const linkedInUrl = footerCard.linkedInUrl;

  return (
    <footer className="bg-gray-900 text-gray-100 py-16">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Connect */}
          <div className="md:col-start-2 md:pl-8">
            <h3 className="font-bold text-white mb-5 text-sm uppercase tracking-wide">{connectTitle}</h3>
            <div className="text-gray-400 text-sm leading-relaxed space-y-3">
              {email && (
                <p>
                  <span>Email: </span>
                  <a href={`mailto:${email}`} className="text-blue-400 hover:text-blue-300 transition">
                    {email}
                  </a>
                </p>
              )}
              {linkedInUrl && (
                <p>
                  <span>Find us: </span>
                  <a href={linkedInUrl} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition">
                    {linkedInUrl.replace(/^https?:\/\//, '')}
                  </a>
                </p>
              )}
            </div>
          </div>
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
