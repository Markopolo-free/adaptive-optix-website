'use client';

interface SocialLink {
  label: string;
  url: string | null;
  icon: string;
  isEmail?: boolean;
}

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
          transform: translateY(-4px) scale(1.05);
          color: #3b82f6;
        }
        .social-link:active {
          transform: translateY(-2px);
        }
      `}</style>
      <div className="md:col-start-2 md:pl-8">
        <h3 className="font-bold text-white mb-6 text-sm uppercase tracking-wide">{connectTitle}</h3>
        <div className="flex flex-nowrap items-center gap-8 text-sm overflow-x-auto" style={{ scrollbarWidth: 'thin' }}>
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url || '#'}
              target={link.isEmail ? undefined : '_blank'}
              rel={!link.isEmail ? 'noopener noreferrer' : undefined}
              onClick={(e) => link.isEmail ? handleEmailClick(e, link.url || '') : undefined}
              className="social-link text-gray-400 hover:text-blue-400 flex items-center gap-2 transition-colors whitespace-nowrap"
            >
              <span className="text-base">{link.icon}</span>
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
