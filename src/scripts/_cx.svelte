<script lang="ts">
  export let config: { 
    // Definições de configuração do sistema STV
    apiUrl: string; // URL da API
    theme: string; // Tema do aplicativo
  };

  // Função para buscar dados da API
  async function fetchData() {
    const response = await fetch(config.apiUrl);
    if (!response.ok) {
      throw new Error('Erro ao buscar dados');
    }
    const data = await response.json();
    return data;
  }
</script>

<style>
  .container {
    padding: 2rem; /* Espaçamento interno */
    background-color: var(--background-color); /* Cor de fundo definida pelo tema */
    color: var(--text-color); /* Cor do texto definida pelo tema */
  }
</style>

<div class="container">
  <h1>Configuração do Sistema STV</h1>
  <p>Tema atual: {config.theme}</p> <!-- Exibe o tema atual -->
</div>