// Sanity schema for Contact Us cards
export default {
  name: 'contactUsCard',
  title: 'Contact Us Card',
  type: 'document',
  fields: [
    {
      name: 'id',
      title: 'ID (slug-friendly)',
      type: 'string',
      description: 'A unique, slug-friendly identifier for this card.',
      // options: { layout: 'fullWidth' }
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      // options: { layout: 'fullWidth' }
    },
    {
      name: 'href',
      title: 'Link (href)',
      type: 'string',
      description: 'Optional link for this card.',
      // options: { layout: 'fullWidth' }
    },
    {
      name: 'icon',
      title: 'Icon (emoji or short text)',
      type: 'string',
      description: 'Emoji or icon for the card',
      // options: { layout: 'fullWidth' }
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [
        {
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
        },
      ],
      // options: { layout: 'fullWidth' }
    },
    {
      name: 'benefits',
      title: 'Benefits',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Optional list of benefits or features.'
    }
  ],
  preview: {
    select: { title: 'name', description: 'description' },
    prepare({ title, description }) {
      const block = Array.isArray(description) && description[0];
      const subtitle = block?.children?.[0]?.text || '';
      return { title, subtitle };
    },
  },
};
