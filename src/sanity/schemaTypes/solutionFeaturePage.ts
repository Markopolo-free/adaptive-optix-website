import { defineField, defineType, defineArrayMember } from 'sanity';

export default defineType({
  name: 'solutionFeaturePage',
  title: 'Solution Feature Page',
  type: 'document',
  fields: [
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 }, validation: Rule => Rule.required() }),
    defineField({ name: 'title', title: 'Title', type: 'string', validation: Rule => Rule.required() }),
    defineField({ name: 'intro', title: 'Intro', type: 'array', of: [defineArrayMember({ type: 'block' })] }),
    defineField({
      name: 'table',
      title: 'Feature Table',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            { name: 'left', title: 'Left Column', type: 'string' },
            { name: 'right', title: 'Right Column', type: 'string' },
          ],
        }),
      ],
      description: 'Rows for the feature table.'
    }),
    defineField({ name: 'body', title: 'Body', type: 'array', of: [defineArrayMember({ type: 'block' })] }),
  ],
});
