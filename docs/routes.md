---
id: routes
title: Rotas
sidebar_label: Rotas
---

O Onyx theme não gerencia rotas além dos [Controllers](controllers).

Caso seja de sua necessidade a criação de rotas personalizadas para seu tema ou aplicação, considere utilizar uma das funções e filtros do WordPress:

- [`add_rewrite_rule()`](https://developer.wordpress.org/reference/functions/add_rewrite_rule/)
- [`add_rewrite_tag()`](https://developer.wordpress.org/reference/functions/add_rewrite_tag/)
- [`generate_rewrite_rules`](https://codex.wordpress.org/Plugin_API/Action_Reference/generate_rewrite_rules)
- [`rewrite_rules_array`](https://codex.wordpress.org/Plugin_API/Filter_Reference/rewrite_rules_array)
- [`template_include`](https://developer.wordpress.org/reference/hooks/template_include/)
- [`template_redirect`](https://codex.wordpress.org/Plugin_API/Action_Reference/template_redirect)
- [`parse_request`](https://codex.wordpress.org/Plugin_API/Action_Reference/parse_request)
- [`request`](https://codex.wordpress.org/Plugin_API/Filter_Reference/request)

Você também pode utilizar algumas das soluções abaixo:

- [Upstatement/routes](https://github.com/Upstatement/routes)
- [Rareloop/router](https://github.com/Rareloop/router)
- [Brain-WP/Cortex](https://github.com/Brain-WP/Cortex)
