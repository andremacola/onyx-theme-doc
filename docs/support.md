---
id: support
title: Theme Features
sidebar_label: Theme Features
---

Use `./core/config/support.php` to add or remove WordPress theme feature. More informantion: [add_theme_support](https://developer.wordpress.org/reference/functions/add_theme_support/).

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
