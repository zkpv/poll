/// <reference types="svelte" />
/// <reference types="vite/client" />

declare module '*.svelte' {
  import type { SvelteComponentTyped } from 'svelte';
  const component: SvelteComponentTyped<{}, {}, any>;
  export default component;
}