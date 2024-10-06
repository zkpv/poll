<script lang="ts">
  export let label: string = 'Clique aqui'; // Texto do botão
  export let onClick: () => void = () => {}; // Função a ser chamada ao clicar

  // Função para manipular o clique
  function handleClick(event: MouseEvent) {
    event.preventDefault(); // Previne o comportamento padrão
    onClick(); // Chama a função passada como prop
  }
</script>

<style>
  .button {
    background-color: var(--primary); /* Cor de fundo do botão */
    color: white; /* Cor do texto */
    border: none; /* Sem borda */
    border-radius: 0.5rem; /* Bordas arredondadas */
    padding: 0.5rem 1rem; /* Espaçamento interno */
    cursor: pointer; /* Cursor de mão ao passar sobre o botão */
    transition: background-color 0.3s; /* Transição suave para a cor de fundo */
  }

  .button:hover {
    background-color: var(--primary-dark); /* Cor ao passar o mouse */
  }
</style>

<button class="button" on:click={handleClick}>
  {label} <!-- Texto do botão -->
</button>