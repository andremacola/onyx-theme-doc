---
id: routes
title: Routes
sidebar_label: Routes
---

The Onyx theme does not manage routes other than [Controllers](controllers) and [Rest API Endpoints](rest).

If you need to create custom routes for your theme or application, consider using one of the WordPress functions and filters:

- [`add_rewrite_rule()`](https://developer.wordpress.org/reference/functions/add_rewrite_rule/)
- [`add_rewrite_tag()`](https://developer.wordpress.org/reference/functions/add_rewrite_tag/)
- [`generate_rewrite_rules`](https://codex.wordpress.org/Plugin_API/Action_Reference/generate_rewrite_rules)
- [`rewrite_rules_array`](https://codex.wordpress.org/Plugin_API/Filter_Reference/rewrite_rules_array)
- [`template_include`](https://developer.wordpress.org/reference/hooks/template_include/)
- [`template_redirect`](https://codex.wordpress.org/Plugin_API/Action_Reference/template_redirect)
- [`parse_request`](https://codex.wordpress.org/Plugin_API/Action_Reference/parse_request)
- [`request`](https://codex.wordpress.org/Plugin_API/Filter_Reference/request)

You can also use some of the solutions below:

- [Upstatement/routes](https://github.com/Upstatement/routes)
- [Rareloop/router](https://github.com/Rareloop/router)
- [Brain-WP/Cortex](https://github.com/Brain-WP/Cortex)
