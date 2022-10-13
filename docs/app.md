---
id: app
title: Registro de funcionalidades
sidebar_label: App
---

Este arquivo é utilizado para registrar suas classes, [*post types*](cpts#instanciando-um-post-type) ou [*taxonomies*](taxonomies#instanciando-uma-taxonomia)

```php
return [

  /*
  |--------------------------------------------------------------------------
  | Custom Classes
  |--------------------------------------------------------------------------
  */

  \MyApp\MyCustomClass::class,

  /*
  |--------------------------------------------------------------------------
  | Register Custom Post Type Classes
  |--------------------------------------------------------------------------
  */

  \MyApp\Types\MyCustomCtp::class,

  /*
  |--------------------------------------------------------------------------
  | Register Custom Taxonomies
  |--------------------------------------------------------------------------
  */

  \MyApp\Taxonomies\MyCustomTax::class,

  /*
  |--------------------------------------------------------------------------
  | REST Api Controllers
  |--------------------------------------------------------------------------
  */

  \MyApp\RestController\MyCustomRestController::class,

];
```
