import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://narayanaravada.github.io/E-lib',
  base: 'E-Lib',
  integrations: [
    starlight({
      title: 'E-Library',
      customCss: [
        './src/fonts/font-face.css',
        './src/styles/custom.css',
      ],
      social: {
        github: 'https://github.com/NarayanaRavada/E-Lib.git',
      },
    }),
  ],
});
