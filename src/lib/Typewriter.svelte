<script lang="ts">
  export let text: string = ''; // Propriedade para o texto a ser exibido
  export let speed: number = 50; // Velocidade de digitação em milissegundos

  let displayedText: string = ''; // Texto que será exibido progressivamente

  // Função para simular a digitação
  function type() {
    let index = 0;

    const interval = setInterval(() => {
      if (index < text.length) {
        displayedText += text.charAt(index); // Adiciona o próximo caractere
        index++;
      } else {
        clearInterval(interval); // Para a digitação quando o texto completo é exibido
      }
    }, speed);
  }

  // Inicia a digitação quando o componente é montado
  import { onMount } from 'svelte';
  onMount(() => {
    type();
  });
</script>

<style>
  .typewriter {
    font-family: 'Courier New', monospace; /* Fonte de máquina de escrever */
    white-space: nowrap; /* Mantém o texto em uma linha */
    overflow: hidden; /* Oculta o texto que não está visível */
    border-right: 2px solid var(--primary); /* Cursor de digitação */
    animation: blink 0.75s step-end infinite; /* Animação do cursor */
  }

  @keyframes blink {
    50% {
      border-color: transparent; /* Faz o cursor piscar */
    }
  }
</style>

<div class="typewriter">{displayedText}</div> <!-- Exibindo o texto digitado -->