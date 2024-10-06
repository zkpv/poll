<script lang="ts">
  export let items: string[] = []; // Propriedade para receber uma lista de itens

  // Função para dividir os itens em partes
  function splitItems() {
    return items.reduce((acc, item, index) => {
      const chunkIndex = Math.floor(index / 2); // Dividindo em grupos de 2
      if (!acc[chunkIndex]) {
        acc[chunkIndex] = []; // Inicializa o array se não existir
      }
      acc[chunkIndex].push(item); // Adiciona o item ao grupo correspondente
      return acc;
    }, [] as string[][]);
  }
</script>

<style>
  .split-container {
    display: flex; /* Usando flexbox para layout */
    flex-direction: column; /* Direção das colunas */
    gap: 1rem; /* Espaçamento entre os grupos */
  }

  .split-group {
    border: 1px solid var(--primary); /* Borda com a cor primária */
    border-radius: 0.5rem; /* Bordas arredondadas */
    padding: 1rem; /* Espaçamento interno */
    background-color: #f9f9f9; /* Cor de fundo */
  }
</style>

<div class="split-container">
  {#each splitItems() as group}
    <div class="split-group">
      {#each group as item}
        <p>{item}</p> <!-- Exibindo cada item -->
      {/each}
    </div>
  {/each}
</div>