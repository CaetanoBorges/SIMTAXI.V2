import { defineConfig } from 'vite';

export default defineConfig({
    // Vanilla JS — sem framework
    // index.html na raiz é o entry point padrão do Vite
    build: {
        sourcemap: false,
    },
    optimizeDeps: {
        exclude: ['./components/polyfill/webcomponents-bundle.js'],
    },
});
