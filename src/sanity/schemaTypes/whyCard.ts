import { defineArrayMember, defineField, defineType } from 'sanity';

export default defineType({
  name: 'whyCard',
  title: 'Why Choose Us Card',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
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
    defineField({ name: 'icon', title: 'Icon (emoji or short text)', type: 'string' }),
    defineField({ name: 'href', title: 'Link (href)', type: 'string' }),
    defineField({ name: 'clickable', title: 'Is Clickable (opens portal)', type: 'boolean', initialValue: false }),
    defineField({ name: 'order', title: 'Order', type: 'number' }),
  ],
  preview: {
    select: { title: 'title', description: 'description' },
    prepare(selection: { title?: string; description?: any }) {
      const { title, description } = selection;
      const block = Array.isArray(description) && description[0];
      const subtitle = block?.children?.[0]?.text || '';
      return { title: title || '', subtitle };
    },
  },
});
