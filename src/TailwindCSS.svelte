<script lang="ts">
  import { onMount } from 'svelte';

  onMount(() => {
    // Inicializa o TailwindCSS
    import('tailwindcss/tailwind.css');
  });
</script>

<style>
  /* Estilos adicionais podem ser definidos aqui */
</style>

<slot></slot> <!-- Permite a inserção de conteúdo filho -->