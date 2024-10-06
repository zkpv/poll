<script lang="ts">
  export let candidates: Array<{ name: string; votes: number }> = []; // Lista de candidatos com seus votos
  export let totalVotes: number = 0; // Total de votos

  // Função para calcular o vencedor com base no sistema STV
  function calculateWinner() {
    const sortedCandidates = [...candidates].sort((a, b) => b.votes - a.votes); // Ordena os candidatos por número de votos
    const winner = sortedCandidates[0]; // O candidato com mais votos é o vencedor

    return winner;
  }

  // Função para determinar se há um vencedor
  function hasWinner() {
    const winner = calculateWinner();
    if (winner.votes > totalVotes / 2) {
      return winner.name; // Retorna o nome do vencedor se ele tiver mais da metade dos votos
    }
    return null; // Caso contrário, não há vencedor
  }
</script>

<style>
  .winner {
    font-weight: bold; /* Destaca o vencedor */
    color: var(--primary); /* Cor primária para o texto do vencedor */
  }
</style>

<div>
  <h2>Vencedor:</h2>
  {#if hasWinner()}
    <p class="winner">{hasWinner()}</p> <!-- Exibe o nome do vencedor -->
  {:else}
    <p>Nenhum vencedor definido ainda.</p> <!-- Mensagem caso não haja vencedor -->
  {/if}
</div>