import Link from 'next/link';

interface ButtonProps {
  href?: string;
  label: string;
  variant?: 'primary' | 'secondary' | 'home' | 'modal';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
}

export default function Button({ 
  href, 
  label, 
  variant = 'primary', 
  className = '',
  onClick,
  type = 'button',
  disabled = false
}: ButtonProps) {
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
    home: {
      backgroundColor: 'white',
      color: '#000029ff',
    },
    modal: {
      backgroundColor: '#6B5B95',
      color: 'white',
    },
  };

  const combinedStyles = {
    ...baseStyles,
    ...variantStyles[variant],
  };

  // If it's a link, use Link component
  if (href) {
    return (
      <Link href={href} style={combinedStyles} className={className}>
        {label}
      </Link>
    );
  }

  // Otherwise, use button element
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={combinedStyles}
      className={className}
    >
      {label}
    </button>
  );
}
