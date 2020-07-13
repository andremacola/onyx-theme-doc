---
id: install
title: Instalação
sidebar_label: Instalação
---

Para Instalar o [Onyx Theme](https://github.com/andremacola/onyx-theme) baixe a versão desejada na área de [releases](https://github.com/andremacola/onyx-theme/releases) do Github ou diretamente da [branch principal.](https://github.com/andremacola/onyx-theme/zipball/master)

---

## Dependências

Verifique se todas as dependências foram instaladas antes de prosseguir:

> - [WordPress](https://wordpress.org/) >= 4.7
> - [PHP](https://www.php.net/manual/en/install.php) >= 7.2
> - [Composer](https://getcomposer.org/download/)
> - [Node JS](https://nodejs.org/)
> - [Yarn](https://classic.yarnpkg.com/en/docs/install) ^1.22.4

---

## Passo a Passo

***1 |*** Extraia os arquios do tema na pasta `themes` do seu WordPress  
***2 |*** Em seu terminal execute os seguinte comandos:  

```bash
# @ themes/onyx-theme/
composer install
yarn install
```
***3 |*** Renomeie o arquivo da pasta `.env.example` para `.env` e atualize as informações de desenvolvimento local caso necessário  
***4 |*** Ative o tema em seu painel do WordPress  
***5 |*** Inicie o desenvolvimento rodando o comando abaixo:  

```bash
yarn serve
```
