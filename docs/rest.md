---
id: rest
title: Rest API Controllers
sidebar_label: Rest API Controllers
---

## Introduction

Onyx offers a simple `RestController` class to facilitate the WordPress's [REST API's](https://developer.wordpress.org/rest-api/). See more information at [register_rest_route()](https://developer.wordpress.org/reference/functions/register_rest_route/) and [custom endpoints](https://developer.wordpress.org/rest-api/extending-the-rest-api/adding-custom-endpoints/)

All REST API controllers are created inside the `./core/app/Api` folder, with the namespace `Onyx\Controllers` and extend the `Onyx\RestController` class.

---

## Registering

After creating the controller, it is necessary to register it in `./core/config/rest.php` as in the example below.

```php
namespace Onyx\Controllers;

return [
  ExampleRestController::class,
  MyOtherRestController::class,
];
```

---

## Parameters and Methods

| Variable     | Type           | Description     | Required |
|--------------|----------------|-----------------|----------|
| `$namespace` | *string/array* | Route Namespace | ✔        |

It is required to set the `namespace` property as well as initialize the `$this->initialize()` method as we can see in the following example.

**Helpers Methods**

- [`RestController->route()`](#route)
- [`RestController->response()`](#response)

---

## Creating a REST API Controller

In this example we will create the endpoint `/(api|wp-json)/onyx/v1/example` with the POST and GET methods.

```php
namespace Onyx\Controllers;

use \Onyx\RestController;

class ExampleRestController extends RestController {

  /**
   * The namespace for the rest endpoint api
   *
   * @var string
   */
  protected $namespace = 'onyx/v1';

  /**
   * Constructor
   *
   * @return void
   */
  public function __construct() {
    $this->initialize();
  }

  /**
   * Register routes
   *
   * @return void
   */
  public function register_routes() {
    // register examples routes
    $this->route( 'POST', '/example', 'generic_callback' );
    $this->route( 'GET', '/example', 'generic_callback' );
  }

  /**
   * Generic Callback
   *
   * @param \WP_REST_Request $req
   * @return \WP_REST_Response|mixed
   */
  public function generic_callback( \WP_REST_Request $req ) {
    return rest_ensure_response( $req->get_params(), 200 );
  }
```

---

## Methods Helpers

### `route()`

| Variable    | Type                   | Description                            | Required |
|-------------|------------------------|----------------------------------------|----------|
| `$method`   | *WP_Rest_Server/mixed* | (GET, POST, PUT, PATCH, DELETE)        | ✔        |
| `$route`    | *string*               | Route endpoint                         | ✔        |
| `$callback` | *callable*             | Controller callback method to execute  | ✔        |
| `$options`  | *array*                | Endpoint options                       | ✘        |
| `$override` | *bool*                 | Replace existing route. Default: falso | ✘        |

`@return bool`  
`@throws \Exception` If the [`$namespace`](#parâmetros-e-métodos) does not exist

### `rest_response()`

Alias for [\WP_REST_Response](https://developer.wordpress.org/reference/classes/wp_rest_response/)
