---
id: cpts
title: Post Types Personalizados
sidebar_label: Post Types
---

O *Onyx* provê a possibilidade de criação de Post Types personalizados que podem ser feitas de duas formas. A primeira por meio deste arquivo `./core/config/cpts.php` e a outra é instanciando um objeto da classe [`\Onyx\Cpt()`](class-cpt).

---

## Parâmetros

O único parâmetro obrigatório é o `name(s)` do post type podendo ser uma *string* como podemos ver no [*Exemplo 1*](#criando-post-types) ou um *array* como no [*Exemplo 2*](#criando-post-types). O Onyx vai extrair automaticamente `slug`, `labels`, `options` caso não sejam fornecidos assim como tentará aplicar o *plural* nas labels necessárias.

:::caution
Caso **não fornecido**, o parâmetro `slug` será utilizado para criação do post type e é ele que deverá ser utilizado para queries e relacionamentos. Por padrão o `slug` é extraído do valor `name` transformado para o plural.

*Ex: 'Gêneros de Filme' terá como plural 'Gêneros de Filmes' e slug 'generos-de-filmes'.*
:::

| Param     | Tipo           | Descrição                                 | Obrigatório |
|-----------|----------------|-------------------------------------------|-------------|
| `name(s)` | *string/array* | Nome do Post Type                         | ✔           |
| `icon`    | *string*       | Ícone do Post Type                        | ✘           |
| `labels`  | *array*        | Labels customizadas                       | ✘           |
| `options` | *array*        | Argumentos de funcionamento               | ✘           |
| `filters` | *array*        | Filtros de pesquisa (selects) no admin    | ✘           |
| `columns` | *array*        | Registrar colunas personalizadas no admin | ✘           |

:::info
Para saber as opções das `labels` e `options`, visite a documentação do WordPress [register_post_type()](https://developer.wordpress.org/reference/functions/register_post_type/) e [get_post_type_labels()](https://developer.wordpress.org/reference/functions/get_post_type_labels/)
:::

:::info
Ao adicionar parâmetros como `labels` ou `options`, você não precisa incluir todas as opções. Somente os parâmetros que você determinar serão substituídos no modelo.
:::

---

## Criando Post Types

Utilizando este método, você **não precisa** instanciar a classe [`\Onyx\Cpt()`](cpts#instanciando-um-post-type).

```php
  /*
  |--------------------------------------------------------------------------
  | My First Post Type (example 1)
  |--------------------------------------------------------------------------
  */
  [ 'My First CPT' ],

  /*
  |--------------------------------------------------------------------------
  | My Second Post Type (example 2)
  |--------------------------------------------------------------------------
  */
  [
    'names'   => [
      'name'   => 'Product',   // required
      'plural' => 'Products' , // optional
      'slug'   => 'products' , // optional
    ],
    'icon' => 'dashicons-admin-post',
    'labels'  => [
      // all labels options from
      // https://developer.wordpress.org/reference/functions/get_post_type_labels/
    ],
    'options' => [
      // all available arguments from `register_post_type` except `labels`
      // https://developer.wordpress.org/reference/functions/register_post_type/
    ],
  ],
```

---

## Filtros de Pesquisa

Ao registrar uma [Taxonomia](taxonomies) personalizada, você pode também adicionar filtros de pesquisa na tabela de listagem do admin do WordPress

```php

  /*
  |--------------------------------------------------------------------------
  | Post type with custom admin filters
  |--------------------------------------------------------------------------
  */
  [
    'My First CPT',
    'filters' => [ 'my-custom-tax', 'other-custom-tax' ],
  ],

```

---

## Colunas Personalizadas

Você pode **incluir**, **remover** ou **reordenar** colunas personalizadas na tabela de listagem do admin do WordPress ao registrar um Post Type. Isso é bem útil quando você tem *custom fields* ou *taxonomias personalizadas*

:::info
Para adicionar colunas de **taxonomias**, ver registro em [Taxonomia](taxonomies).
:::

| Param   | Tipo    | Descrição              | Obrigatório |
|---------|---------|------------------------|-------------|
| `add`   | *array* | Colunas para adicionar | ✘           |
| `order` | *array* | Ordenação das colunas  | ✘           |
| `hide`  | *array* | Remover colunas        | ✘           |

### add

| Param      | Tipo       | Descrição                                           | Obrigatório |
|------------|------------|-----------------------------------------------------|-------------|
| `label`    | *string*   | Label da coluna                                     | ✔           |
| `populate` | *callable* | Função que recebe 2 valores `fn($column, $post_id)` | ✔           |
| `sort`     | *string*   | Meta Key para ordenação                             | ✘           |
| `numeric`  | *bool*     | Ordenar via numeral ou string                       | ✘           |

### order

Um array com a `chave ou nome da coluna`. As colunas na tabela irão aparecer na ordem de inclusão do array.

### hide

Um array contendo a `chave ou nome da coluna`. As colunas adicionadas aqui serão removidas da tabela de listagem do admin.

### Exemplo de Uso

```php

  /*
  |--------------------------------------------------------------------------
  | Products Post Type with Custom Columns
  |--------------------------------------------------------------------------
  */
  [
    'names'   => [
      'name'   => 'Product',   // required
      'slug'   => 'produtct' , // optional
    ],
    'columns' => [
      'add'   => [
        'column-1' => [
          'label'    => 'Column 1',           // column label
          'sort'     => 'meta_field_1',       // sort by meta_field_1
          'numeric'  => false,                // is alphabetically
          'populate' => 'get_meta_field_1',   // get content from get_meta_field_1() function
        ],
        'column-2' => [
          'label'    => 'Column 2',           // column label
          'sort'     => 'meta_field_2',       // sort by meta_field_1
          'numeric'  => true,                 // is numeric
          'populate' => 'get_meta_field_2',   // get content from get_meta_field_2() function
        ],
      ],
      'order' => [
        'my-custom-tax', // first column
        'column-1',      // second column
        'title',         // third column
      ],
      'hide'  => [ 'author' ], // hide author column
    ],
  ],

```

```php
// Populate Column 1 with ACF
function get_meta_field_1($column, $post_id) {
  return get_field('meta_field_1', $post_id);
}

// Populate Column 2 with ACF
function get_meta_field_2($column, $post_id) {
  return get_field('meta_field_2', $post_id);
}
```

---

## Regras de Capacidades

Ao criar um post type, você poderá definir [capacidades](https://developer.wordpress.org/reference/functions/register_post_type/#capability_type) personalizadas caso necessário.

### capability_type

O atributo `capability_type` cria automaticamente as capacidades primitivas do WordPress baseadas no valor passado *(edit_MYCPT, edit_others_MYCPT, delete_MYCPT, publish_MYCPT, read_private_MYCPT)*

```php
  /*
  |--------------------------------------------------------------------------
  | My Custom Cap CPT
  |--------------------------------------------------------------------------
  */
  [
    'names'   => [
      'name'   => 'Cap',
      'plural' => 'Caps' ,
      'slug'   => 'caps' ,
    ],
    'icon' => 'dashicons-admin-post',
    'options' => [
      'capability_type' => 'cap'
    ],
  ],
```

Este exemplo irá setar:

- *`edit_post` como* ***`edit_cap`***
- *`read_post` como* ***`read_cap`***
- *`delete_post` como* ***`delete_cap`***
- *`edit_posts` como* ***`edit_caps`***
- *`edit_others_posts` como* ***`edit_others_caps`***
- *`delete_posts` como* ***`delete_caps`***
- *`publish_posts` como* ***`publish_caps`***
- *`read_private_posts` como* ***`read_private_caps`***
- *`create_posts` como* ***`edit_caps`***

### custom_caps

O atributo `custom_caps` adiciona automaticamente todas as capacidades primitivas ***extras*** do WordPress baseadas no valor passado. Ao usar `custom_caps`, não é necessário passar o parâmetro `capability_type`. O Onyx theme usará o `name` do Post Type para gerar as capacidades.

```php
  /*
  |--------------------------------------------------------------------------
  | My Advanced Custom Cap CPT
  |--------------------------------------------------------------------------
  */
  [
    'names'   => [
      'name'   => 'Product',
      'plural' => 'Products' ,
      'slug'   => 'products' ,
    ],
    'icon' => 'dashicons-admin-post',
    'options' => [
      'custom_caps' => true
    ],
  ],
```

Este exemplo irá setar regras mais completas:

- `edit_product`
- `read_product`
- `delete_product`
- `edit_products`
- `edit_others_products`
- `publish_products`
- `read_private_products`
- `create_products`
- `read_products`
- `delete_products`
- `delete_private_products`
- `delete_published_products`
- `delete_others_products`
- `edit_private_products`
- `edit_published_products`

:::info
Se você precisar de regras mais personalizadas, utilize o atributo [***capabilities***](https://developer.wordpress.org/reference/functions/register_post_type/#capabilities) padrão do WordPress e determine manualmente todas as capacidades necessárias.
:::

---

## Instanciando um Post Type

Além de poder criar um Post Type utilizando o registro no arquivo `./core/config/cpts.php`, você pode instanciar um objeto e criar manualmente seu CPT usando a classe [`\Onyx\Cpt`](class-cpt)

Caso esteja extendendo a classe `\Onyx\Cpt` você ainda pode utilizar os métodos [`add_action`](class-cpt#add_action) e [`add_filter`](class-cpt#add_filter) personalizados para criar hooks do wordpress dentro de seu objeto mais facilmente.

:::info
somente o parâmetro **`name(s)`** é obrigatório, podentro ser uma *string* ou um *array*.
:::

### Criando o Objeto

```php
  $cpt = new \Onyx\Cpt();

  // assign post type names
  $cpt->names([
    'name'   => 'Product',
    'plural' => 'Products',
    'slug'   => 'product',
  ]);

  // assign post type arguments
  $cpt->options([
    'show_in_rest'  => true,
    'menu_position' => 10,
    'supports'      => ['title', 'editor', 'thumbnail'],
  ]);

  // set post type icon
  $cpt->icon('dashicons-admin-page');

  // add search taxonomy filters
  $cpt->filters( ['my-custom-taxonomy', 'my-other-taxonomy'] );

  // METHOD 1: Add Columns
  $cpt->columns()->register_columns([
    'column-1' => [
      'label'    => 'Column 1',           // column label
      'sort'     => 'meta_field_1',       // sort by meta_field_1
      'numeric'  => false,                // is alphabetically
      'populate' => 'get_meta_field_1',   // get content from get_meta_field_1() function
    ],
  ]);
	
  // METHOD 2: Add Columns
  $cpt->columns()->add('Column 2');
  $cpt->columns()->populate('Column 2', 'get_meta_field_2');
  $cpt->columns()->set_sortable( [
    'Column 2'  => [ 'meta_field_2', true ],
  ]);
	
  // hide columns
  $cpt->columns()->hide( [ 'author' ] );
	
  // change columns order
  $cpt->columns()->order([
    'Date',
    'Column 1',
    'Column 2',
    'Title',
  ]);

  // register post type
  $cpt->register();
```

### Extendendo a classe

```php
namespace Paper\Types;

use Onyx\Cpt;

class CptCapas extends Cpt {

  /**
   * Constructor
   *
   * @return void
   */
  public function __construct() {
    $this->names( 'Capa' );

    $this->options([
      'rewrite'             => [
        'with_front' => false,
        'feeds'      => false,
      ],
      'custom_caps'         => true,
      'capability_type'     => 'capa',
      'menu_position'       => 5,
      'supports'            => [ 'title' ],
      'exclude_from_search' => true,
      'query_var'           => true,
      'can_export'          => true,
    ]);

    $this->labels([
      'add_new'            => 'Adicionar nova',
      'add_new_item'       => 'Adicionar nova capa',
      'not_found'          => 'Nenhuma capa encontrada',
      'not_found_in_trash' => 'Nenhuma capa encontrada na lixeira',
    ]);

    $this->icon( 'dashicons-admin-page' );

    $this->add_action( 'post_type_link', 'custom_permalink', 1, 3 );
    $this->add_action( 'init', 'custom_rewrite_rules' );
    $this->register();
  }

  /**
   * Custom permalink structure for CPT
   * Replace default /capas/title-slug/ for /capas/$post-ID/
   *
   * @param string $url The original URL of the post type Capas
   * @param object $post Post Object from Type Capas 
   * 
   * @return string|null
   */
  public function custom_permalink( $url, $post = 0 ) {
    if ( $post->post_type === $this->slug ) {
      return home_url( $this->slug . '/' . $post->ID . '/' );
    } else {
      return $url;
    }
  }

  /**
   * Custom Rewrite for 'custom_permalink' to work
   * 
   * @return void
   */
  public function custom_rewrite_rules() {
    add_rewrite_rule( $this->slug . '/([0-9]+)?$', 'index.php?post_type=' . $this->key . '&p=$matches[1]', 'top' );
  }

}
```

Após a criação do post type, não esqueça de necessário registrá-lo em `./core/config/app.php` como no exemplo abaixo.

```php
return [
  \Paper\Types\CptCapas::class,
];
```
