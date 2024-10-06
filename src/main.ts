import App from './App.svelte'; // Importando o componente principal
import { start } from 'svelte/internal'; // Importando função de inicialização

const app = new App({
  target: document.getElementById('app'), // Definindo o elemento alvo para o componente
  props: {
    // Defina aqui as propriedades que devem ser passadas para o componente
  },
});

export default app; // Exportando a instância do aplicativo