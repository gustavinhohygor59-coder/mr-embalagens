# MR Embalagens

Aplicação Next.js com React e Yarn. As rotas da aplicação são:

- `/` — página inicial
- `/catalogo` — catálogo
- `/contato` — contato
- `/cadastro` — cadastro de cliente
- `/anuncios` — painel do lojista

As páginas originais ficam em `public/legacy` e são carregadas pelas rotas Next.js para preservar o visual e os fluxos existentes durante a migração gradual para componentes React.

## Requisitos

- Node.js 20.9 ou superior
- Yarn 1.22.22

## Desenvolvimento

```sh
yarn install
yarn dev
```

Para validar ou executar a versão de produção:

```sh
yarn typecheck
yarn build
yarn start
```
