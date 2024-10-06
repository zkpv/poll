import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

export default {
  // Consulte https://svelte.dev/docs#compile-time-svelte-preprocess
  // para mais informações sobre preprocessadores
  preprocess: vitePreprocess(),
};