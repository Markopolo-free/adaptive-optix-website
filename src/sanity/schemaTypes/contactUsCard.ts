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
      options: { layout: 'fullWidth' }
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      options: { layout: 'fullWidth' }
    },
    {
      name: 'href',
      title: 'Link (href)',
      type: 'string',
      description: 'Optional link for this card.',
      options: { layout: 'fullWidth' }
    },
    {
      name: 'icon',
      title: 'Icon (emoji or short text)',
      type: 'string',
      description: 'Emoji or icon for the card',
      options: { layout: 'fullWidth' }
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      options: { layout: 'fullWidth' }
    },
    {
      name: 'benefits',
      title: 'Benefits',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Optional list of benefits or features.'
    }
  ]
};
