<script lang="ts">
  export let items: string[] = []; // Propriedade para receber uma lista de itens

  // Função para adicionar um novo item à pilha
  function addItem(item: string) {
    items = [...items, item]; // Atualiza a lista de itens
  }

  // Função para remover o último item da pilha
  function removeItem() {
    items = items.slice(0, -1); // Remove o último item
  }
</script>

<style>
  .stack-container {
    display: flex; /* Usando flexbox para layout */
    flex-direction: column; /* Direção das colunas */
    gap: 1rem; /* Espaçamento entre os itens */
  }

  .stack-item {
    border: 1px solid var(--primary); /* Borda com a cor primária */
    border-radius: 0.5rem; /* Bordas arredondadas */
    padding: 1rem; /* Espaçamento interno */
    background-color: #f9f9f9; /* Cor de fundo */
  }
</style>

<div class="stack-container">
  {#each items as item}
    <div class="stack-item">{item}</div> <!-- Exibindo cada item -->
  {/each}
</div>

<button on:click={() => addItem('Novo Item')}>Adicionar Item</button> <!-- Botão para adicionar item -->
<button on:click={removeItem}>Remover Item</button> <!-- Botão para remover item -->