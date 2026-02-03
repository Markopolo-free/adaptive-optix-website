import { defineArrayMember, defineField, defineType } from 'sanity';

export default defineType({
  name: 'productCard',
  title: 'Product Card',
  type: 'document',
  fields: [
    defineField({
      name: 'id',
      title: 'ID (slug-friendly)',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
      validation: Rule => Rule.required(),
    }),
    defineField({ name: 'name', title: 'Name', type: 'string' }),
    defineField({
      name: 'href',
      title: 'Link (href)',
      type: 'string',
      readOnly: true,
      initialValue: (props) => `/products/${props.parent?.id?.current || ''}`,
      // options: { layout: 'fullWidth' }
    }),
    defineField({
      name: 'icon',
      title: 'Icon (emoji or short text)',
      type: 'string',
      initialValue: '📦',
      // options: { layout: 'fullWidth' }
    }),
    defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'shortDescription', title: 'Short Description', type: 'text', rows: 2 }),
    defineField({ name: 'description', title: 'Long Description', type: 'text', rows: 4 }),
    defineField({ name: 'description_2', title: 'Description 2 (Below Image)', type: 'text', rows: 3 }),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
    }),
    defineField({
      name: 'body',
      title: 'Body Content',
      type: 'array',
      of: [
        defineArrayMember({ type: 'block' }),
        defineArrayMember({ type: 'image' })
      ],
      description: 'Main content for the product page (rich text, images, etc.)',
    }),
    defineField({ name: 'order', title: 'Order', type: 'number' }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'shortDescription' },
  },
});
