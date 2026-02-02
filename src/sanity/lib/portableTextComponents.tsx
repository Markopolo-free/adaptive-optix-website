import { PortableTextComponents } from '@portabletext/react';

export const portableTextComponents: PortableTextComponents = {
  types: {},
  block: {
    normal: ({ children }) => <p className="mb-6">{children}</p>,
    h1: ({ children }) => <h1 className="text-2xl font-bold mb-4">{children}</h1>,
    h2: ({ children }) => <h2 className="text-xl font-bold mb-4">{children}</h2>,
    h3: ({ children }) => <h3 className="text-lg font-bold mb-4">{children}</h3>,
    blockquote: ({ children }) => <blockquote className="border-l-4 pl-4 italic mb-4">{children}</blockquote>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    underline: ({ children }) => <span className="underline">{children}</span>,
    code: ({ children }) => <code className="bg-gray-800 px-1 rounded text-sm">{children}</code>,
    link: ({ children, value }) => <a href={value?.href} className="text-blue-400 underline" target="_blank" rel="noopener noreferrer">{children}</a>,
  },
};
