---
id: introduction
title: Introdução
sidebar_label: Introdução
slug: /
---

O [Onyx Theme](https://github.com/andremacola/onyx-theme) tem um modo específico de funcionamento e estrutura de pastas. Ele não segue a estrutura padrão de desenvolvimento do WordPress.

Todos as queries e templates **são gerenciados** pelos `controllers`/`timber` que relacionam com as `views`. Veja mais informações em [Views](views).

Nenhuma dependência além do Timber é requerida. Todo o funcionamento do Onyx se mantém nas **bases originais** do WordPress.

---

## Estrutura de Pastas

- **`core/`** - <sup>É onde reside toda a estrutura principal do tema</sup>
  - `./app` - <sup>Classes para funcionamento do tema</sup>
    - `./Api` - <sup>Controllers dos endpoints da WP REST API</sup>
    - `./Controllers` - <sup>Controllers das requisições</sup>
    - `./Onyx` - <sup>Classes do Onyx</sup>
  - `./config` - <sup>Reside todas as principais configurações de funcionamento do seu projeto.</sup>
  - `./includes` - <sup>Suas funções e classes próprias.</sup>
  - `./lang` - <sup>Traduções</sup>

- **`src/`** - <sup>Arquivos fontes para estilos e javascripts.</sup>
  - `./sass`
  - `./js`

- **`views/`** - <sup>Templates Twig</sup>

---

## Timber

Todos os templates são criados utilizando o [Twig](https://twig.symfony.com/) por meio do plugin [Timber](https://www.upstatement.com/timber/). Para ter mais informações e uma documentação mais detalhada sobre o Timber/Twig ***[acesse este link.](https://timber.github.io/docs/v2/)***

O *Onyx theme* possui controladores em cima do *Timber*, então antes de consultar a documentação do Timber, verifique se as classes e métodos utilizados pelo Onyx atendem as suas necessidades.

## Projetos Utilizando

Alguns projetos que utilizam o [Onyx Theme](https://github.com/andremacola/onyx-theme) como principal ferramenta de produção.

- [O Imparcial](https://oimparcial.com.br/)
- [Rofe Distribuidora](https://www.rofedistribuidora.com.br/)
- [Linhares Jr](https://linharesjr.com)
- [Marrapa](https://marrapa.com/)
- [Grupo Dimensão](http://grupodimensao.com/) (legacy version)
- [Jornal Pequeno](https://jornalpequeno.com.br/) (legacy version)
