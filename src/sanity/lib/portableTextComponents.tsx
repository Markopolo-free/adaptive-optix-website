import { PortableTextComponents } from '@portabletext/react';
import React from 'react';

// Custom component to render text with line breaks
const TextWithLineBreaks = ({ text }: { text: string }) => {
  if (!text) return null;
  
  const lines = text.split('\n');
  if (lines.length === 1) return <>{text}</>;
  
  return (
    <>
      {lines.map((line, index) => (
        <React.Fragment key={index}>
          {line}
          {index < lines.length - 1 && <br />}
        </React.Fragment>
      ))}
    </>
  );
};

export const portableTextComponents: PortableTextComponents = {
  types: {
    hardBreak: () => <br />,
  },
  block: {
    // Each block gets natural spacing - respects Sanity's block structure
    // Empty blocks will still render with spacing to preserve Sanity's layout
    // white-space: pre-line preserves line breaks in text
    normal: ({ children }) => {
      const hasContent = React.Children.toArray(children).some(
        child => typeof child === 'string' ? child.trim().length > 0 : true
      );
      return <p className="mb-6" style={{ minHeight: hasContent ? 'auto' : '0.5rem', whiteSpace: 'pre-line' }}>{children}</p>;
    },
    h1: ({ children }) => <h1 className="text-2xl font-bold mb-4">{children}</h1>,
    h2: ({ children }) => <h2 className="text-xl font-bold mb-4">{children}</h2>,
    h3: ({ children }) => <h3 className="text-lg font-bold mb-4">{children}</h3>,
    blockquote: ({ children }) => <blockquote className="border-l-4 pl-4 italic mb-4">{children}</blockquote>,
  },
  marks: {
    // Marks stay inline - don't force block display
    strong: ({ children }) => {
      // Handle line breaks within bold text
      if (typeof children === 'string') {
        return <strong className="font-bold"><TextWithLineBreaks text={children} /></strong>;
      }
      return <strong className="font-bold">{children}</strong>;
    },
    em: ({ children }) => {
      if (typeof children === 'string') {
        return <em className="italic"><TextWithLineBreaks text={children} /></em>;
      }
      return <em className="italic">{children}</em>;
    },
    underline: ({ children }) => {
      if (typeof children === 'string') {
        return <span className="underline"><TextWithLineBreaks text={children} /></span>;
      }
      return <span className="underline">{children}</span>;
    },
    code: ({ children }) => <code className="bg-gray-800 px-1 rounded text-sm">{children}</code>,
    link: ({ children, value }) => <a href={value?.href} className="text-blue-400 underline" target="_blank" rel="noopener noreferrer">{children}</a>,
  },
};
