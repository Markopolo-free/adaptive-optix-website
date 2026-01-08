import Link from 'next/link';

interface ButtonProps {
  href: string;
  label: string;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export default function Button({ href, label, variant = 'primary', className = '' }: ButtonProps) {
  const baseStyles = {
    display: 'inline-block',
    padding: '10px 24px',
    fontWeight: '600',
    borderRadius: '8px',
    textDecoration: 'none',
    fontSize: '14px',
    border: 'none',
    cursor: 'pointer',
  };

  const variantStyles = {
    primary: {
      backgroundColor: '#f26419ff',
      color: 'white',
    },
    secondary: {
      backgroundColor: 'transparent',
      color: 'white',
      border: '2px solid white',
    },
  };

  const combinedStyles = {
    ...baseStyles,
    ...variantStyles[variant],
  };

  return (
    <Link href={href} style={combinedStyles} className={className}>
      {label}
    </Link>
  );
}
