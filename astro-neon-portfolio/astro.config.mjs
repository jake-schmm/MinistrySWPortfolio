import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://jake-schmm.github.io',
  output: 'static',
  integrations: [mdx()]
});
