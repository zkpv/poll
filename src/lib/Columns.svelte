<script lang="ts">
  export let columns: Array<{ title: string; content: string }> = []; // Propriedade para receber colunas com título e conteúdo
</script>

<style>
  .columns-container {
    display: flex; /* Usando flexbox para layout */
    gap: 1rem; /* Espaçamento entre as colunas */
  }

  .column {
    flex: 1; /* Cada coluna ocupará espaço igual */
    border: 1px solid var(--primary); /* Borda com a cor primária */
    border-radius: 0.5rem; /* Bordas arredondadas */
    padding: 1rem; /* Espaçamento interno */
    background-color: #f9f9f9; /* Cor de fundo */
  }

  h3 {
    color: var(--primary); /* Cor do título da coluna */
  }
</style>

<div class="columns-container">
  {#each columns as { title, content }}
    <div class="column">
      <h3>{title}</h3> <!-- Exibindo o título da coluna -->
      <p>{content}</p> <!-- Exibindo o conteúdo da coluna -->
    </div>
  {/each}
</div>