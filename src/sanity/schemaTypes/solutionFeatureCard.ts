import { defineArrayMember, defineField, defineType } from 'sanity';

export default defineType({
  name: 'solutionFeatureCard',
  title: 'Solution Feature Card',
  type: 'document',
  fields: [
    defineField({ name: 'id', title: 'ID (slug-friendly)', type: 'string', validation: Rule => Rule.required() }),
    defineField({ name: 'title', title: 'Title', type: 'string', validation: Rule => Rule.required() }),
    defineField({
      name: 'href',
      title: 'Link (href)',
      type: 'string',
      readOnly: true,
      initialValue: (props) => {
        // Use id as slug if available, else fallback to title
        const slug = props.parent?.id || props.parent?.title?.toLowerCase().replace(/\s+/g, '-');
        return `/solution-features/${slug || ''}`;
      },
      description: 'Auto-generated link to the solution feature page.',
      // options: { layout: 'fullWidth' }
    }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
    defineField({ name: 'description_2', title: 'Description 2 (Below Image)', type: 'text', rows: 3 }),
    defineField({ name: 'image', title: 'Image', type: 'image' }),
    defineField({ name: 'order', title: 'Order', type: 'number' }),
  ],
});
