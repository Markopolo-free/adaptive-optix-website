// Sanity schema for Use Case Page content
export default {
  name: 'useCasePage',
  title: 'Use Case Page',
  type: 'document',
  fields: [
    {
      name: 'slug',
      title: 'Slug',
      type: 'string',
      description: 'URL slug for this use case page (e.g. baas)',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'href',
      title: 'Link (href)',
      type: 'string',
      description: 'URL path for this use case (e.g. /use-cases/baas)',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'description_2',
      title: 'Description 2 (Below Image)',
      type: 'text',
      rows: 3,
    },
    {
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        { type: 'block' },
        { type: 'image', options: { hotspot: true } },
      ],
    },
  ],
};
