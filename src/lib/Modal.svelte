<script lang="ts">
  export let isOpen: boolean = false; // Propriedade para controlar a visibilidade do modal
  export let title: string = 'Título Padrão'; // Título do modal
  export let content: string = 'Conteúdo padrão do modal'; // Conteúdo do modal

  // Função para fechar o modal
  function closeModal() {
    isOpen = false; // Atualiza o estado para fechar o modal
  }
</script>

<style>
  .modal {
    position: fixed; /* Fixa o modal na tela */
    top: 0;
    left: 0;
    width: 100%; /* Largura total da tela */
    height: 100%; /* Altura total da tela */
    background-color: rgba(0, 0, 0, 0.5); /* Fundo semi-transparente */
    display: flex; /* Usando flexbox para centralizar o conteúdo */
    align-items: center; /* Alinhamento vertical central */
    justify-content: center; /* Alinhamento horizontal central */
    z-index: 1000; /* Camada superior */
  }

  .modal-content {
    background-color: white; /* Fundo branco para o conteúdo do modal */
    border-radius: 0.5rem; /* Bordas arredondadas */
    padding: 2rem; /* Espaçamento interno */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Sombra */
  }

  .close-button {
    background-color: var(--secondary); /* Cor do botão de fechar */
    color: white; /* Cor do texto */
    border: none; /* Sem borda */
    border-radius: 0.25rem; /* Bordas arredondadas */
    padding: 0.5rem 1rem; /* Espaçamento interno */
    cursor: pointer; /* Cursor de mão ao passar sobre o botão */
  }
</style>

{#if isOpen}
  <div class="modal">
    <div class="modal-content">
      <h2>{title}</h2> <!-- Exibe o título do modal -->
      <p>{content}</p> <!-- Exibe o conteúdo do modal -->
      <button class="close-button" on:click={closeModal}>Fechar</button> <!-- Botão para fechar o modal -->
    </div>
  </div>
{/if}