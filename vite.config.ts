import fs from 'fs';
import path from 'path';
import {defineConfig} from 'vite';

const ketosanaDir = path.resolve(__dirname, 'ketosana');
const distDir = path.resolve(__dirname, 'dist');

export default defineConfig({
  root: ketosanaDir,
  base: './',
  publicDir: false,
  plugins: [
    {
      name: 'copy-static-presell-files',
      apply: 'build',
      closeBundle(error?: Error): void {
        if (error || !fs.existsSync(distDir)) {
          return;
        }
        const configFile = path.join(ketosanaDir, 'configuracoes.js');
        if (fs.existsSync(configFile)) {
          fs.copyFileSync(configFile, path.join(distDir, 'configuracoes.js'));
        }
        const imagesDir = path.join(ketosanaDir, 'imagens');
        if (fs.existsSync(imagesDir)) {
          fs.cpSync(imagesDir, path.join(distDir, 'imagens'), {
            recursive: true,
            force: true,
          });
        }
      },
    },
  ],
  build: {
    outDir: distDir,
    emptyOutDir: true,
  },
  server: {
    hmr: process.env.DISABLE_HMR !== 'true',
    watch: process.env.DISABLE_HMR === 'true' ? null : {},
  },
});
