import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'homeCard',
  title: 'Homepage Product Card',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string', options: { layout: 'fullWidth' } }),
    defineField({ name: 'title', title: 'Title', type: 'string', options: { layout: 'fullWidth' } }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 3, options: { layout: 'fullWidth' } }),
    defineField({ name: 'icon', title: 'Icon (emoji or short text)', type: 'string', options: { layout: 'fullWidth' } }),
    defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
    defineField({
      name: 'productCard',
      title: 'Linked Product Card',
      type: 'reference',
      to: [{ type: 'productCard' }],
      description: 'Select the Product Card this homepage card should link to.'
    }),
    defineField({ name: 'href', title: 'Link (href)', type: 'string', options: { layout: 'fullWidth' } }),
    defineField({ name: 'order', title: 'Order', type: 'number' }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'description' },
  },
});
