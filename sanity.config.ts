// Trivial change for Vercel cache bust
//
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './src/sanity/schemaTypes';

import { refreshContentTool } from './src/sanity/tools/refreshContent';
import { syncToConfigTool } from './src/sanity/tools/syncToConfig';

export default defineConfig({
  name: 'default',
  title: 'Adaptive Optix Content',
  projectId: '2cg9komv', // <-- hardcoded
  dataset: 'production', // <-- hardcoded
  apiVersion: '2026-01-20',
  basePath: '/studio',
  plugins: [deskTool(), visionTool(), refreshContentTool(), syncToConfigTool()],
  schema: {
    types: schemaTypes,
  },
});
