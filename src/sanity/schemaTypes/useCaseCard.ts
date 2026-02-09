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
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
          styles: [{ title: 'Normal', value: 'normal' }],
          lists: [],
          marks: {
            decorators: [
              { title: 'Bold', value: 'strong' },
              { title: 'Italic', value: 'em' },
              { title: 'Underline', value: 'underline' },
              { title: 'Code', value: 'code' },
            ],
            annotations: [],
          },
        }),
      ],
    }),
    defineField({
      name: 'description_2',
      title: 'Description 2 (Below Image)',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
          styles: [{ title: 'Normal', value: 'normal' }],
          lists: [],
          marks: {
            decorators: [
              { title: 'Bold', value: 'strong' },
              { title: 'Italic', value: 'em' },
              { title: 'Underline', value: 'underline' },
              { title: 'Code', value: 'code' },
            ],
            annotations: [],
          },
        }),
      ],
    }),
    defineField({
      name: 'benefits',
      title: 'Benefits',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
    }),
    defineField({ name: 'order', title: 'Order', type: 'number' }),
  ],
  preview: {
    select: { title: 'name', description: 'description' },
    prepare(selection: { title?: string; description?: any }) {
      const { title, description } = selection;
      const block = Array.isArray(description) && description[0];
      const subtitle = block?.children?.[0]?.text || '';
      return { title: title || '', subtitle };
    },
  },
});
