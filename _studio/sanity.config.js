import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';

import schemas from './schemas/schemas.js';
import settings from './schemas/structure/settings.js';
import blog from './schemas/structure/blog.js';

export default {
  title: 'Digital Productcatalogue',
  projectId: '8e703jl6',
  dataset: 'production',

  plugins: [
    deskTool({
      title: 'Blog',
      name: 'blog',
      structure: blog
    }),

    deskTool({
      title: 'Settings',
      name: 'settings',
      structure: settings
      }),

    visionTool()
  ],

  schema: {
    types: schemas,
  },
};
