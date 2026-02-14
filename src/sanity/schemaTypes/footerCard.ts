import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'footerCard',
  title: 'Footer Card',
  type: 'document',
  fields: [
    defineField({ name: 'connectTitle', title: 'Connect Title', type: 'string' }),
    defineField({ name: 'connectText', title: 'Connect Text', type: 'text', rows: 4 }),
    defineField({ name: 'email', title: 'Email Address', type: 'string', description: 'Email address for contact (e.g., support@adaptiveoptix.com)' }),
    defineField({ name: 'linkedInUrl', title: 'LinkedIn URL', type: 'string', description: 'Full LinkedIn profile URL' }),
    defineField({ name: 'instagramUrl', title: 'Instagram URL', type: 'string', description: 'Instagram profile URL' }),
    defineField({ name: 'twitterUrl', title: 'X (Twitter) URL', type: 'string', description: 'X/Twitter profile URL' }),
    defineField({ name: 'tiktokUrl', title: 'TikTok URL', type: 'string', description: 'TikTok profile URL' }),
    defineField({ name: 'facebookUrl', title: 'Facebook URL', type: 'string', description: 'Facebook profile URL' }),
  ],
  preview: {
    select: { title: 'connectTitle' },
    prepare(selection: { title?: string }) {
      return {
        title: selection.title || 'Footer Card',
      };
    },
  },
});
