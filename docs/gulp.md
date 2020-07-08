---
id: gulp
title: Configuração do Gulp e LiveReload
sidebar_label: Configuração
---

Para o desenvolvimento o [Onyx Theme](https://github.com/andremacola/onyx-theme) utiliza o [Gulp](https://gulpjs.com/) para automação de javascripts e scss. Junto com o Gulp, utilizamos o [Live Reload](https://github.com/livereload/livereload-js) para fazer a sincronia de refresh com o navegador. Em nossos testes e configurações, tivemos uma maior performance/resposta e menos latência em comparação com o *Browser Sync*

## Comandos Gulp

|Commandos         | Funcionalidades                            |
|------------------|--------------------------------------------|
| *yarn serve*       | Escutar e processar os arquivos em cada alteração
| *yarn serve:prod*  | O mesmo que o comando `serve` porém utilizando ambiente de produção
| *yarn build*       | Gerar o build para produção

***OBS***: É necessário um domínio `.local` para funcionar o Live Reload.

---

## Live Reload

Configure as variáveis no arquivo `.env` localizado na raiz da pasta do tema.

:::info
Para o Live Reload funcionar, o domínio de desenvolvimento ***obrigatoriamente*** precisará ser ***.local***
:::

Após configurado, caso esteja com o projeto aberto no navegador, atualize a página para carregar o Live Reload pela primeira vez e teste.

## Arquivos estáticos

Todos os arquivos fontes tanto do javascript quanto do sass estão localizados na pasta `src/`. Os arquivos compilados estarão em suas respectivas pastas localizadas em `assets/`

Nesta versão o ***Onyx Theme*** não faz tratamento de imagens