import { writable } from 'svelte/store'; // Importando a função writable do Svelte

// Armazenando o estado da votação
export const didVote = writable(false); // Indica se o usuário já votou
export const count = writable(0); // Contagem total de votos
export const candidateCount1 = writable(3); // Contagem de candidatos
export const voterCount1 = writable(3); // Contagem de eleitores
export const candidatesStore = writable([]); // Armazenamento da lista de candidatos
export const votersStore = writable([]); // Armazenamento da lista de eleitores
export const electionStore = writable([]); // Armazenamento das informações da eleição
export const winnerStore = writable(''); // Armazenamento do vencedor da eleição

// Exemplo de dados para teste
// const electionStore = [
//   { name: 'blue', votes: [5, 8, 7] },
//   { name: 'purple', votes: [7, 8, 5] },
//   { name: 'green', votes: [5, 7, 8] },
//   { name: 'orange', votes: [3, 5, 12] },
// ];