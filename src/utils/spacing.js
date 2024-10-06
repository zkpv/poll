const baseSpacing = 8; // Valor base do espaçamento em pixels

// Função para calcular o espaçamento
const spacing = (factor) => `${baseSpacing * factor}px`; // Retorna o espaçamento multiplicado pelo fator

export const spacingValues = {
  small: spacing(1),    // Espaçamento pequeno
  medium: spacing(2),   // Espaçamento médio
  large: spacing(3),    // Espaçamento grande
  extraLarge: spacing(4) // Espaçamento extra grande
};