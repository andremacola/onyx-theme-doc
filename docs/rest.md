---
id: rest
title: API Rest Controllers
sidebar_label: API Rest Controllers
---

## Introdução

O Onyx oferece uma simples classe `RestController` para facilitar a escrita da [REST API's](https://developer.wordpress.org/rest-api/) do WordPress. Veja mais informações na função [register_rest_route()](https://developer.wordpress.org/reference/functions/register_rest_route/) e em [custom endpoints](https://developer.wordpress.org/rest-api/extending-the-rest-api/adding-custom-endpoints/)

---

## Funcionamento

Todas os controllers para a REST API são criados dentro da pasta `./core/app/Api`, tem como seu namespace `Onyx\Controllers` e extendem a classe `Onyx\RestController`.

---

## Registrando

Após a criação do controller, é necessário registrá-lo em `./core/config/rest.php` como no exemplo abaixo.

```php
namespace Onyx\Controllers;

return [
  ExampleRestController::class,
  MyOtherRestController::class,
];
```

---

## Parâmetros e Métodos

| Variável     | Tipo           | Descrição         | Obrigatório |
|--------------|----------------|-------------------|-------------|
| `$namespace` | *string/array* | Namespace da Rota | ✔           |

É obrigatório setar a propriedade `namespace` da classe assim como inicializar o método `$this->initialize()` como podemos ver no exemplo a seguir.

**Métodos Helpers**

- [`RestController->route()`](#route)
- [`RestController->response()`](#response)

---

## Criando um REST API Controller

Neste exemplo criaremos o endpoint `/(api|wp-json)/onyx/v1/example` com os métodos POST e GET.

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

## Métodos Helpers

### `route()`

| Variável    | Tipo                   | Descrição                                   | Obrigatório |
|-------------|------------------------|---------------------------------------------|-------------|
| `$method`   | *WP_Rest_Server/mixed* | (GET, POST, PUT, PATCH, DELETE)             | ✔           |
| `$route`    | *string*               | O Endpoint da rota                          | ✔           |
| `$callback` | *callable*             | Método do controller callback para executar | ✔           |
| `$options`  | *array*                | Opções do endpoint                          | ✘           |
| `$override` | *bool*                 | Substituir rota existente. Padrão: falso    | ✘           |

`@return bool`  
`@throws \Exception` Se não existir [`$namespace`](#parâmetros-e-métodos)

### `rest_response()`

Alias para [\WP_REST_Response](https://developer.wordpress.org/reference/classes/wp_rest_response/)
