import { defineArrayMember, defineField, defineType } from 'sanity';

export default defineType({
  name: 'useCaseCard',
  title: 'Use Case Card',
  type: 'document',
  fields: [
    defineField({ name: 'id', title: 'ID (slug-friendly)', type: 'string' }),
    defineField({ name: 'name', title: 'Name', type: 'string' }),
    defineField({
      name: 'href',
      title: 'Link (href)',
      type: 'string',
      readOnly: true,
      initialValue: (props) => {
        // Use id as slug if available, else fallback to name
        const slug = props.parent?.id || props.parent?.name?.toLowerCase().replace(/\s+/g, '-');
        return `/use-cases/${slug || ''}`;
      },
      description: 'Auto-generated link to the use case page.',
      // options: { layout: 'fullWidth' }
    }),
    defineField({ name: 'icon', title: 'Icon (emoji or short text)', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
    defineField({ name: 'description_2', title: 'Description 2 (Below Image)', type: 'text', rows: 3 }),
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
