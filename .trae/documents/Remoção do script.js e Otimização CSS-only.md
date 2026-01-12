O arquivo `script.js` **atualmente é necessário** por dois motivos principais:

1.  **Lógica do Accordion (FAQ):** Ele controla a abertura e fechamento das perguntas frequentes. Sem ele, os cliques nas perguntas não fariam nada.
2.  **Ícones Lucide:** Ele inicializa os ícones (`lucide.createIcons()`). Embora o script do Lucide possa fazer isso automaticamente em alguns casos, o código atual garante que isso aconteça.

**No entanto**, é possível **eliminar** o `script.js` e melhorar ainda mais a performance (CSS-only) refatorando o código:

# Plano de Otimização (Remoção do JS)

## 1. Refatorar FAQ para HTML5 `<details>` e `<summary>`
Substituir a implementação atual baseada em `<div>` e `button` com JavaScript pela tag semântica nativa do HTML `<details>`.
*   **Vantagem:** Funciona sem JavaScript, é mais acessível e performático.
*   **Ação:** Reescrever a seção de FAQ no `index.html`.

## 2. Ajustar Ícones no FAQ
Como a estrutura mudará, precisaremos garantir que o ícone de "seta" (chevron) gire corretamente usando apenas CSS quando o `<details>` estiver aberto (`details[open] summary svg`).

## 3. Inicialização dos Ícones Lucide
Como já adicionamos `defer` no script do Lucide no HTML, ele deve inicializar automaticamente se usarmos a tag `<script>` do CDN corretamente. Se não, podemos adicionar um pequeno script inline no final do HTML apenas para isso, eliminando a requisição extra do `script.js`.
*   **Melhoria:** Na verdade, a melhor prática é usar **SVG Inline** (como já fizemos na lista de features) para evitar layout shifts e dependência de biblioteca JS externa para ícones críticos.
*   **Plano B (Mais rápido):** Manter a biblioteca Lucide mas inicializá-la com um micro-script inline no HTML, ou confiar no auto-loader.

**Posso prosseguir com a remoção do `script.js` refatorando o FAQ para HTML/CSS puro?** Isso deixará o site ainda mais leve.