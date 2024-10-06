<script lang="ts">
  // Importando o componente necessário
  import { onMount } from 'svelte';

  let message: string = 'Mensagem padrão'; // Propriedade para armazenar a mensagem

  onMount(() => {
    // Função que pode ser chamada ao montar o componente
    console.log('Componente Inline montado');
  });
</script>

<style>
  .inline {
    display: inline-block; /* Permite que o componente seja exibido em linha */
    padding: 0.5rem; /* Espaçamento interno */
    border: 1px solid var(--primary); /* Borda com a cor primária */
    border-radius: 0.25rem; /* Bordas arredondadas */
    background-color: #f0f0f0; /* Cor de fundo */
    color: var(--primary); /* Cor do texto */
  }
</style>

<div class="inline">
  {message} <!-- Exibindo a mensagem -->
</div>