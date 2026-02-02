import { defineArrayMember, defineField, defineType } from 'sanity';

export default defineType({
  name: 'solutionCard',
  title: 'Solution Card',
  type: 'document',
  fields: [
    defineField({ name: 'id', title: 'ID (slug-friendly)', type: 'string' }),
    defineField({ name: 'name', title: 'Name', type: 'string', options: { layout: 'fullWidth' } }),
    defineField({ name: 'href', title: 'Link (href)', type: 'string', options: { layout: 'fullWidth' } }),
    defineField({ name: 'icon', title: 'Icon (emoji or short text)', type: 'string', options: { layout: 'fullWidth' } }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 3, options: { layout: 'fullWidth' } }),
    defineField({
      name: 'benefits',
      title: 'Benefits',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
    }),
    defineField({ name: 'order', title: 'Order', type: 'number' }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'description' },
  },
});
