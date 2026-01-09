import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './src/sanity/schemaTypes';
import { sanityConfig } from './src/sanity/env';
import { refreshContentTool } from './src/sanity/tools/refreshContent';
import { syncToConfigTool } from './src/sanity/tools/syncToConfig';

if (!sanityConfig.projectId || !sanityConfig.dataset) {
  console.warn('Sanity config: set SANITY_PROJECT_ID/NEXT_PUBLIC_SANITY_PROJECT_ID and SANITY_DATASET/NEXT_PUBLIC_SANITY_DATASET.');
}

export default defineConfig({
  name: 'default',
  title: 'Adaptive Optix Content',
  projectId: sanityConfig.projectId as string,
  dataset: sanityConfig.dataset as string,
  apiVersion: sanityConfig.apiVersion,
  basePath: '/studio',
  plugins: [deskTool(), visionTool(), refreshContentTool(), syncToConfigTool()],
  schema: {
    types: schemaTypes,
  },
});
