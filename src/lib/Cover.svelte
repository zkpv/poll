<script lang="ts">
  export let title: string = 'Título Padrão'; // Propriedade para o título
  export let subtitle: string = 'Subtítulo Padrão'; // Propriedade para o subtítulo
</script>

<style>
  .cover {
    display: flex; /* Usando flexbox para centralizar o conteúdo */
    flex-direction: column; /* Direção das colunas */
    align-items: center; /* Alinhamento centralizado */
    justify-content: center; /* Justificação centralizada */
    height: 100vh; /* Altura total da viewport */
    background-color: var(--primary); /* Cor de fundo com a cor primária */
    color: white; /* Cor do texto */
    text-align: center; /* Centraliza o texto */
  }

  h1 {
    font-size: 2.5rem; /* Tamanho da fonte do título */
    margin: 0; /* Remove margem padrão */
  }

  h2 {
    font-size: 1.5rem; /* Tamanho da fonte do subtítulo */
    margin: 0; /* Remove margem padrão */
  }
</style>

<div class="cover">
  <h1>{title}</h1> <!-- Exibindo o título -->
  <h2>{subtitle}</h2> <!-- Exibindo o subtítulo -->
</div>