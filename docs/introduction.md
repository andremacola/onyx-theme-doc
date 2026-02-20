---
id: introduction
title: Introduction
sidebar_label: Introduction
---

The [Onyx Theme](https://github.com/andremacola/onyx-theme) has a specific mode of operation and folder structure. It does not follow the standard WordPress development.

All queries and templates **are managed** by the `controllers` /` timber` that relate to the `views`. See more information in [Views](views).

No dependency other than Timber is required. The entire operation of Onyx remains on the **original bases** of WordPress.

---

## Folder Structure

- **`core/`** - <sup>This is where the main structure of the theme resides</sup>
  - `./app` - <sup>Classes for theme operation</sup>
    - `./Api` - <sup>WP REST API endpoint controllers</sup>
    - `./Controllers` - <sup>Requisition Controllers</sup>
    - `./Onyx` - <sup>Onyx classes</sup>
  - `./config` - <sup>Resides all the main functional configurations of your project</sup>
  - `./includes` - <sup>Your own functions and classes</sup>
  - `./lang` - <sup>Translations</sup>

- **`src/`** - <sup>Source files for styles and javascripts</sup>
  - `./sass`
  - `./js`

- **`views/`** - <sup>Twig Templates</sup>

---

## Timber

All templates are created using [Twig](https://twig.symfony.com/) through the [Timber](https://www.upstatement.com/timber/) plugin. For more information and more detailed documentation on Timber/Twig ***[access this link.](Https://timber.github.io/docs/v2/)***

*Onyx theme* has controllers on top of *Timber*, so before consulting the Timber documentation, check if the classes and methods used by Onyx meet your needs.

## Projects Using

Some projects that use the [Onyx Theme](https://github.com/andremacola/onyx-theme) as the main production tool.

- [O Imparcial](https://oimparcial.com.br/)
- [Rofe Distribuidora](https://www.rofedistribuidora.com.br/)
- [Linhares Jr](https://linharesjr.com)
- [Grupo Dimensão](http://grupodimensao.com/) (legacy version)
- [Jornal Pequeno](https://jornalpequeno.com.br/) (legacy version)
