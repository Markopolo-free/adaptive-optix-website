// Sanity schema for Partner information
export default {
  name: 'partner',
  title: 'Partner',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Partner Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'websiteUrl',
      title: 'Website URL',
      type: 'url',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'logo',
      title: 'Company Logo',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    },
  ],
};
