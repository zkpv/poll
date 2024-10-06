<script lang="ts">
  export let title: string = 'Título Padrão'; // Propriedade para o título
  export let content: string = 'Conteúdo padrão'; // Propriedade para o conteúdo

  // Função para manipular ações, se necessário
  function handleAction() {
    // Lógica para ação
  }
</script>

<style>
  .pad-box {
    padding: 1rem; /* Espaçamento interno */
    border: 1px solid var(--primary); /* Borda com a cor primária */
    border-radius: 0.5rem; /* Bordas arredondadas */
    background-color: #f9f9f9; /* Cor de fundo */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Sombra suave */
  }

  h2 {
    color: var(--primary); /* Cor do título */
  }
</style>

<div class="pad-box">
  <h2>{title}</h2> <!-- Exibindo o título -->
  <p>{content}</p> <!-- Exibindo o conteúdo -->
  <button on:click={handleAction}>Ação</button> <!-- Botão para ação -->
</div>