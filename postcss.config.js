module.exports = {
  plugins: {
    'postcss-import': {}, // Permite a importação de arquivos CSS
    'postcss-nested': {}, // Suporta regras CSS aninhadas
    'autoprefixer': {}, // Adiciona prefixos automaticamente para compatibilidade com navegadores
    'cssnano': {preset: 'default'}, // Minifica o CSS para produção
  }
};