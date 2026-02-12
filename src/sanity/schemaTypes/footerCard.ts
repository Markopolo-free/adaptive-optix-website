import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'footerCard',
  title: 'Footer Card',
  type: 'document',
  fields: [
    defineField({ name: 'connectTitle', title: 'Connect Title', type: 'string' }),
    defineField({ name: 'connectText', title: 'Connect Text', type: 'text', rows: 4 }),
    defineField({ name: 'email', title: 'Email Address', type: 'string', description: 'Email address for contact (e.g., support@adaptiveoptix.com)' }),
    defineField({ name: 'linkedInUrl', title: 'LinkedIn URL', type: 'url', description: 'Full LinkedIn profile URL' }),
  ],
  preview: {
    select: { title: 'connectTitle' },
  },
});
