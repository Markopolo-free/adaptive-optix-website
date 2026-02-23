'use client';

interface SocialLink {
  label: string;
  url: string | null;
  icon: string;
  isEmail?: boolean;
}

const SocialIcon = ({ label }: { label: string }) => {
  switch (label) {
    case 'LinkedIn':
      return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.39v-1.2h-2.84v8.37h2.84v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.84M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
        </svg>
      );
    case 'Instagram':
      return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4c0 3.2-2.6 5.8-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8C2 4.6 4.6 2 7.8 2m-.3 2c-2.1 0-3.8 1.7-3.8 3.8v8.4c0 2.1 1.7 3.8 3.8 3.8h8.4c2.1 0 3.8-1.7 3.8-3.8V7.8c0-2.1-1.7-3.8-3.8-3.8H7.5m9.6 1.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m-5.1 1.5c2.8 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5 2.2-5 5-5m0 2c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3z" />
        </svg>
      );
    case 'X (Twitter)':
      return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.657l-5.207-6.802-5.974 6.802H2.423l7.723-8.835L1.029 2.25h6.847l4.713 6.231 5.579-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
    case 'TikTok':
      return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.321 5.562a5.122 5.122 0 0 1-.868-.075c.268-.875.42-1.8.42-2.755A6.701 6.701 0 0 0 12.172 0a6.701 6.701 0 0 0-6.701 6.732 6.701 6.701 0 0 0 6.701 6.732c.957 0 1.882-.153 2.755-.42V17.8a1.417 1.417 0 0 0 1.398 1.438h1.398V22a5.647 5.647 0 0 1-2.796.731c-3.13 0-5.732-2.603-5.732-5.732V7.402a3.575 3.575 0 0 0-3.576-3.585H1.42V0h3.575C10.24 0 14.69 4.45 14.69 9.95v5.647a5.122 5.122 0 0 0 3.567 1.44 5.121 5.121 0 1 0 0-10.242" />
        </svg>
      );
    case 'Email':
      return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      );
    default:
      return null;
  }
};

export default function FooterConnect({
  connectTitle,
  socialLinks,
}: {
  connectTitle: string;
  socialLinks: SocialLink[];
}) {
  const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>, emailUrl: string) => {
    e.preventDefault();
    if (typeof window !== 'undefined') {
      window.open(emailUrl, '_blank');
    }
  };

  // Filter to only show LinkedIn, Instagram, X (Twitter), and TikTok with icon-only display
  const iconOnlyLinks = socialLinks.filter(link => 
    ['LinkedIn', 'Instagram', 'X (Twitter)', 'TikTok'].includes(link.label)
  );

  // Other links (Email, Facebook) shown with label
  const labelLinks = socialLinks.filter(link => 
    !['LinkedIn', 'Instagram', 'X (Twitter)', 'TikTok'].includes(link.label)
  );

  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .social-link {
          animation: fadeInUp 0.5s ease-out;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .social-link:hover {
          transform: translateY(-4px) scale(1.15);
          color: #3b82f6;
        }
        .social-link:active {
          transform: translateY(-2px);
        }
        .icon-only {
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
      <div className="md:col-start-2 md:pl-8">
        <h3 className="font-bold text-white mb-6 text-sm uppercase tracking-wide">{connectTitle}</h3>
        <div className="flex flex-nowrap items-center gap-6 text-sm overflow-x-auto" style={{ scrollbarWidth: 'thin' }}>
          {/* Icon-only social links */}
          {iconOnlyLinks.map((link, index) => (
            <a
              key={`icon-${index}`}
              href={link.url || '#'}
              target="_blank"
              rel="noopener noreferrer"
              title={link.label}
              className="social-link icon-only text-gray-400 hover:text-blue-400 transition-colors"
            >
              <SocialIcon label={link.label} />
            </a>
          ))}

          {/* Other links with labels */}
          {labelLinks.map((link, index) => (
            <a
              key={`label-${index}`}
              href={link.url || '#'}
              target={link.isEmail ? undefined : '_blank'}
              rel={!link.isEmail ? 'noopener noreferrer' : undefined}
              onClick={(e) => link.isEmail ? handleEmailClick(e, link.url || '') : undefined}
              className="social-link text-gray-400 hover:text-blue-400 flex items-center gap-2 transition-colors whitespace-nowrap"
            >
              <SocialIcon label={link.label} />
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
