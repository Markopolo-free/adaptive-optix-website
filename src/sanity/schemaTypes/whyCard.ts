import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'whyCard',
  title: 'Why Choose Us Card',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
    defineField({ name: 'clickable', title: 'Is Clickable (opens portal)', type: 'boolean', initialValue: false }),
    defineField({ name: 'order', title: 'Order', type: 'number' }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'description' },
  },
});
