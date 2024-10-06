import { createRouter, createWebHistory } from 'vue-router'; // Importando o roteador Vue
import Home from './views/Home.svelte'; // Importando a tela inicial
import About from './views/About.svelte'; // Importando a tela "Sobre"

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home, // Definindo o componente para a rota inicial
  },
  {
    path: '/about',
    name: 'About',
    component: About, // Definindo o componente para a rota "Sobre"
  },
];

const router = createRouter({
  history: createWebHistory(), // Configurando o histórico do navegador
  routes, // Definindo as rotas
});

export default router; // Exportando o roteador configurado