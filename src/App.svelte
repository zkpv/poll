/* Baseado na redefinição de CSS personalizada de Josh W. Comeau: https://www.joshwcomeau.com/css/custom-css-reset/ */

:root {
  --primary: #5c73c4; /* Cor primária */
  --primary-dark: #1d4ed8; /* Cor primária escura */
  --secondary: #a7393d; /* Cor secundária */
  --secondary-dark: #7c2d32; /* Cor secundária escura */
}

/* Use um modelo de box-sizing mais intuitivo. */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Remover margem padrão */
* {
  margin: 0;
  font-family: "Cutive Mono", monospace; /* Fonte padrão */
}

/* Adicionar altura de linha acessível e melhorar a renderização do texto */
body {
  line-height: 1.5; /* Altura da linha */
  -webkit-font-smoothing: antialiased; /* Suavização de fonte */
  font-family: "Courier New", Courier, "Lucida Sans Typewriter", "Lucida Typewriter", monospace; /* Fonte do corpo */
  background-color: aliceblue; /* Cor de fundo */
}

/* Melhorar os padrões de mídia */
img,
picture,
video,
canvas,
svg {
  display: block; /* Exibir como bloco */
  max-width: 100%; /* Limitar a largura máxima */
}

/* Remover estilos de tipografia padrão de formulários */
input,
button,
textarea,
select {
  font: inherit; /* Herdar fonte */
}

/* Evitar transbordamentos de texto */
p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word; /* Quebrar palavras longas */
}

/* Criar um contexto de empilhamento raiz */
#root {
  isolation: isolate; /* Isolamento de contexto */
}

/* Remover estilos padrão de botões */
button {
  background: none; /* Sem fundo */
  border: none; /* Sem borda */
  padding: 0; /* Sem preenchimento */
}

/* Remover estilos padrão de listas */
ul,
ol {
  list-style: none; /* Sem estilo de lista */
}

/* Remover estilos padrão de tabelas */
table {
  border-collapse: collapse; /* Colapsar bordas */
  border-spacing: 0; /* Sem espaçamento de bordas */
}

/* Remover borda padrão em elementos focados */
*:focus {
  outline: none; /* Sem contorno */
}