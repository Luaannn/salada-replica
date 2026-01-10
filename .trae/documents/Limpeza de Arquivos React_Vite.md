# Plano de Limpeza do Projeto

Vou remover todos os arquivos e pastas relacionados ao ambiente de desenvolvimento React/Vite, mantendo apenas os arquivos da versão estática que criamos.

## Arquivos para MANTER:
*   `index.html` (O novo arquivo estático)
*   `styles.css` (O CSS extraído)
*   `script.js` (O script de interação)
*   `images/` (A pasta de imagens que criamos)

## Arquivos/Pastas para EXCLUIR:
1.  **Código Fonte React**: `src/`
2.  **Dependências**: `node_modules/`
3.  **Build Antigo**: `dist/`
4.  **Pasta Public Antiga**: `public/` (já migramos as imagens para a pasta `images/` na raiz)
5.  **Arquivos de Configuração**:
    *   `package.json` e `package-lock.json`
    *   `vite.config.ts`
    *   `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json`
    *   `eslint.config.js`
    *   `.gitignore` (criarei um novo simplificado se necessário)

## Execução
1.  Verificar conteúdo da pasta `public` para garantir que nada importante será perdido além das imagens (já copiadas).
2.  Executar os comandos de remoção.
3.  Verificar se o servidor PHP continua rodando e servindo o site corretamente.
