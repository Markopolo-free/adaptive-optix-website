/**
 * Updated schema files with block content (rich text formatting)
 * Use these AFTER running the migration script
 */

// homeCard.ts - WITH FORMATTING
import { defineArrayMember, defineField, defineType } from 'sanity';

export default defineType({
  name: 'homeCard',
  title: 'Homepage Product Card',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string' }),
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
    defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
    defineField({
      name: 'productCard',
      title: 'Linked Product Card',
      type: 'reference',
      to: [{ type: 'productCard' }],
      description: 'Select the Product Card this homepage card should link to.'
    }),
    defineField({ name: 'href', title: 'Link (href)', type: 'string' }),
    defineField({ name: 'order', title: 'Order', type: 'number' }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'description' },
  },
});
