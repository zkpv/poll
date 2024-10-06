<script lang="ts">
  export let spacing: number = 1; // Propriedade para definir o espaçamento

  // Função para calcular o espaçamento baseado na unidade padrão
  function calculateSpacing() {
    return `${spacing}rem`; // Retorna o valor do espaçamento em rem
  }
</script>

<style>
  .spacer {
    margin: calc(var(--spacing-unit) * {spacing}); /* Usando a unidade de espaçamento */
  }
</style>

<div class="spacer" style="margin: {calculateSpacing()}">
  <slot></slot> <!-- Permite a inserção de conteúdo filho -->
</div>