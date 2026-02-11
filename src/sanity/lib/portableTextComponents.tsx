import { PortableTextComponents } from '@portabletext/react';
import React from 'react';

export const portableTextComponents: PortableTextComponents = {
  types: {
    hardBreak: () => <br />,
  },
  block: {
    // Each block gets natural spacing - respects Sanity's block structure
    // Empty blocks will still render with spacing to preserve Sanity's layout
    normal: ({ children }) => {
      const hasContent = React.Children.toArray(children).some(
        child => typeof child === 'string' ? child.trim().length > 0 : true
      );
      return <p className="mb-6" style={{ minHeight: hasContent ? 'auto' : '0.5rem' }}>{children}</p>;
    },
    h1: ({ children }) => <h1 className="text-2xl font-bold mb-4">{children}</h1>,
    h2: ({ children }) => <h2 className="text-xl font-bold mb-4">{children}</h2>,
    h3: ({ children }) => <h3 className="text-lg font-bold mb-4">{children}</h3>,
    blockquote: ({ children }) => <blockquote className="border-l-4 pl-4 italic mb-4">{children}</blockquote>,
  },
  marks: {
    // Marks stay inline - don't force block display
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    underline: ({ children }) => <span className="underline">{children}</span>,
    code: ({ children }) => <code className="bg-gray-800 px-1 rounded text-sm">{children}</code>,
    link: ({ children, value }) => <a href={value?.href} className="text-blue-400 underline" target="_blank" rel="noopener noreferrer">{children}</a>,
  },
};
