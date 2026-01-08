import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'homeCopy',
  title: 'Homepage Copy',
  type: 'document',
  fields: [
    // Hero
    defineField({ name: 'heroTitle', title: 'Hero Title', type: 'string' }),
    defineField({ name: 'heroSubheading', title: 'Hero Subheading', type: 'text', rows: 3 }),

    defineField({ name: 'productsHeading', title: 'Products Heading', type: 'string' }),
    defineField({ name: 'productsSubheading', title: 'Products Subheading', type: 'text', rows: 3 }),

    // Solutions
    defineField({ name: 'solutionsHeading', title: 'Solutions Heading', type: 'string' }),
    defineField({ name: 'solutionsSubheading', title: 'Solutions Subheading', type: 'text', rows: 3 }),

    // Why
    defineField({ name: 'whyHeading', title: 'Why Heading', type: 'string' }),
    defineField({ name: 'whySubheading', title: 'Why Subheading', type: 'text', rows: 3 }),

    // CTA
    defineField({ name: 'ctaHeading', title: 'CTA Heading', type: 'string' }),
    defineField({ name: 'ctaSubheading', title: 'CTA Subheading', type: 'text', rows: 3 }),
    defineField({ name: 'ctaButtonLabel', title: 'CTA Button Label', type: 'string' }),
  ],
  preview: {
    select: { title: 'heroTitle', subtitle: 'productsHeading' },
  },
});
