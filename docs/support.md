---
id: support
title: Recursos de Suporte do Tema
sidebar_label: Recursos
---

Adicionar ou remover recursos do WordPress no arquivo `./core/config/support.php`. Mais informações em [add_theme_support](https://developer.wordpress.org/reference/functions/add_theme_support/).

```php
return [

  /*
  |--------------------------------------------------------------------------
  | WORDPRESS FEATURES SUPPORT
  |--------------------------------------------------------------------------
  */
  'menus',
  'post-thumbnails',
  'automatic-feed-links',
  'title-tag',
  'custom-logo',

  /*
  |--------------------------------------------------------------------------
  | GUTENBERG SUPPORT
  |--------------------------------------------------------------------------
  */
  'editor-styles',
  'wp-block-styles',
  'align-wide',
  'responsive-embeds',

];
```
