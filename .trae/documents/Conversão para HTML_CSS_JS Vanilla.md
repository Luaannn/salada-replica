# Plano de Conversão: React para HTML/CSS/JS Puro

Este plano visa transformar a aplicação React atual em um site estático simples, sem dependências de build (npm, vite, node_modules), mantendo 100% da fidelidade visual e funcional.

## 1. Estruturação do HTML (`index.html`)
*   Criar um arquivo `index.html` na raiz.
*   **Unificação:** Copiar o HTML renderizado de cada componente React (`Header`, `HeroSection`, `SaladsSection`, `FeaturesSection`, `VideoPreviewSection`, `PainSection`, `BonusSection`, `NutriSection`, `PriceSection`, `Footer`) e colá-los sequencialmente dentro da tag `<body>`.
*   **Limpeza:** Remover sintaxe específica do JSX (como `className` virando `class`, fechamento de tags vazias `/>` se necessário, e remover chaves `{}`).

## 2. Consolidação do CSS (`styles.css`)
*   O projeto usa Tailwind. Para não obrigar você a instalar o Tailwind no novo projeto "simples", eu irei extrair o CSS processado final.
*   Criar um arquivo `styles.css`.
*   Copiar as regras globais atuais e as classes utilitárias geradas pelo Tailwind para este arquivo único. Isso garante que o site funcione offline e sem precisar rodar comandos de compilação.

## 3. Migração da Lógica (`script.js`)
*   Criar um arquivo `script.js`.
*   Identificar interações que usam React Hooks (`useState`) e converter para JavaScript puro:
    *   **Menu Mobile:** Lógica de abrir/fechar o menu hambúrguer.
    *   **Modal de Vídeo:** Lógica para abrir o vídeo do YouTube ao clicar e fechar ao clicar fora/no botão.
    *   **Scroll Suave:** Garantir que os links âncora funcionem nativamente (já configuramos o CSS `scroll-behavior: smooth`, então isso será automático).
    *   **Animações:** Manter a animação de "Pulse" que criamos via CSS.

## 4. Organização de Arquivos (Assets)
*   Garantir que todas as imagens referenciadas (atualmente em `public/`) estejam corretamente linkadas no novo HTML (ex: `./images/nome-da-imagem.png`).

## 5. Verificação e Limpeza
*   Abrir o `index.html` diretamente no navegador para testar.
*   Após sua aprovação, poderemos excluir os arquivos do ambiente React (`src/`, `package.json`, `vite.config.ts`, etc.), deixando a pasta limpa apenas com os arquivos essenciais.
