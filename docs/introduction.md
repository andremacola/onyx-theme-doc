---
id: introduction
title: Introdução
sidebar_label: Introdução
---

O [Onyx Theme](https://github.com/andremacola/onyx-theme) tem um modo específico de funcionamento e estrutura de pastas. Ele não segue a estrutura padrão de desenvolvimento do WordPress

---

## Estrutura de Pastas

- **`core/`** - <sup>é onde reside toda a estrutura principal do tema</sup>
	- `./api` - <sup>coloque todos os seus controllers/classes de integração com a REST API do WP aqui.</sup>
	- `./app` - <sup>classes do Onyx Theme, não altere nada.</sup>
	- `./config` - <sup>reside todas as principais configurações de funcionamento do seu projeto.</sup>
	- `./controllers` - <sup>controladores de requisição das páginas e relacionamento com os twig templates</sup>
	- `./includes` - <sup>suas classes e funções próprias</sup>
	- `./lang` - <sup>traduções</sup>

- **`src/`** - <sup>arquivos fontes para estilos e javascripts</sup>
	- `./sass`
	- `./js`

- **`views/`** - <sup>Twig templates</sup>

---

## Timber

Todos os templates são criados utilizando o [Twig](https://twig.symfony.com/) por meio do plugin [Timber](https://www.upstatement.com/timber/). Para ter mais informações e uma documentação mais detalhada sobre o Timber/Twig ***[acesse este link.](https://timber.github.io/docs/v2/)***

O *Onyx theme* possui controladores em cima do *Timber*, então antes de consultar a documentação do Timber, verifique se as classes e métodos utilizados pelo Onyx atendem as suas necessidades.

## Projetos Utilizando

Alguns projetos que utilizam o [Onyx Theme](https://github.com/andremacola/onyx-theme) como principal ferramenta de produção.

- [O Imparcial](https://oimparcial.com.br/)
- [Rofe Distribuidora](https://www.rofedistribuidora.com.br/)
- [Linhares Jr](https://linharesjr.com)
- [Grupo Dimensão](http://grupodimensao.com/) (legacy version)
- [Jornal Pequeno](https://jornalpequeno.com.br/) (legacy version)