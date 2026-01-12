Para otimizar o carregamento e as métricas de Core Web Vitals (CLS, SI, FCP, LCP, TBT), preparei um plano detalhado focado em correções críticas identificadas no código.

# Plano de Otimização de Performance

## 1. Otimização de Imagens (LCP e CLS)
**Problema:** Imagens sem dimensões explícitas causam saltos de layout (CLS) e carregam desnecessariamente (LCP).
*   **Adicionar `width` e `height` explícitos:** Em todas as tags `<img>` (logo, hero, features, produto, nutri). Isso reserva o espaço no navegador antes da imagem carregar.
*   **Lazy Loading:** Adicionar `loading="lazy"` em imagens abaixo da dobra (features, produto, nutri).
*   **Eager Loading no Hero:** Adicionar `loading="eager"` e `fetchpriority="high"` na imagem principal (Hero) para melhorar o LCP.

## 2. Otimização de Tipografia (FCP e LCP)
**Problema:** O uso de `@import` no CSS bloqueia a renderização até que a fonte seja baixada.
*   **Remover `@import` do CSS:** Substituir por tags `<link rel="preload">` e `<link rel="stylesheet">` no HTML para carregar fontes de forma assíncrona e prioritária.
*   **Display Swap:** Garantir que a fonte tenha `font-display: swap` para mostrar texto imediatamente.

## 3. Scripts e Recursos Bloqueantes (TBT e FCP)
**Problema:** Scripts carregados no `<head>` bloqueiam a renderização inicial.
*   **Deferir Scripts:** Adicionar `defer` no `script.js` e mover o script do Lucide Icons para o final do `<body>` (ou removê-lo se não for mais necessário, já que usamos SVGs inline na lista).
*   **Meta Pixel:** O pixel do Facebook já está assíncrono, o que é bom, mas vamos garantir que ele não prejudique o TBT inicial.

## 4. Estabilidade Visual e SEO
*   **Meta Description:** Adicionar uma meta description para SEO.
*   **Favicon:** Garantir que o favicon esteja linkado corretamente.

---
**Pergunta:** Posso prosseguir com a implementação dessas melhorias no `index.html` e `styles.css`?