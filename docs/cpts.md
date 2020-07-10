---
id: cpts
title: Post Types Personalizados
sidebar_label: Post Types
---

O *Onyx* provê a possibilidade de criação de Post Types personalizados que podem ser feitas de duas formas. A primeira por meio deste arquivo `./core/config/cpts.php` e a outra é instanciando um objeto da classe [`\Onyx\Cpt()`](class-cpt).

---

## Parâmetros

O único parâmetro obrigatório é o `name(s)` do post type podendo ser uma *string* como podemos ver no [*Exemplo 1*](criando-post-types) ou um *array* como no [*Exemplo 2*](criando-post-types). O Onyx vai extrair automaticamente `slug`, `labels`, `options` caso não sejam fornecidos assim como tentará aplicar o *plural* nas labels necessárias.

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

Utilizando este método, você **não precisa** instanciar a classe [`\Onyx\Cpt()`](class-cpt).

```php
  /*
  |--------------------------------------------------------------------------
  | My First Post Type (exemplo 1)
  |--------------------------------------------------------------------------
  */
  [ 'My First CPT' ],

  /*
  |--------------------------------------------------------------------------
  | My Second Post Type (exemplo 2)
  |--------------------------------------------------------------------------
  */
  [
    'names'   => [
      'name'   => 'Product',   // required
      'plural' => 'Products' , // optional
      'slug'   => 'produtct' , // optional
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
Para adicionar colunas personalizadas de **taxonomias**, ver registro em [Taxonomia](taxonomies).
:::

| Param   | Tipo    | Descrição              | Obrigatório |
|---------|---------|------------------------|-------------|
| `add`   | *array* | Tabelas para adicionar | ✘           |
| `order` | *array* | Ordenação das tabelas  | ✘           |
| `hide`  | *array* | Remover tabelas        | ✘           |

### add

| Param      | Tipo       | Descrição                                          | Obrigatório |
|------------|------------|----------------------------------------------------|-------------|
| `label`    | *string*   | Label da tabela                                    | ✔           |
| `populate` | *callable* | Função que recebe 2 valores `fn($column, $post_id)` | ✔           |
| `sort`     | *string*   | Meta Key para ordenação                            | ✘           |
| `numeric`  | *bool*     | Ordenar via numeral ou string                      | ✘           |

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

## Instanciando um Post Type

Além de poder criar um Post Type utilizando o registro no arquivo `./core/config/cpts.php`, você pode instanciar um objeto e criar manualmente seu CPT usando a classe [`\Onyx\Cpt`](class-cpt)

:::info
somente o parâmetro **`name(s)`** é obrigatório, podentro ser uma *string* ou um *array*.
:::

```php
  $cpt = new \Onyx\Cpt();

  // assign post type names
  $cpt->names([
    'name'   => 'Product',
    'plural' => 'Products',
    'slug'   => 'product'
  ]);

  // assign post type arguments
  $cpt->options([
    'show_in_rest'  => true,
    'menu_position' => 10,
    'supports'      => ['title', 'editor', 'thumbnail']
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
    ]
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
    'Title'
  ]);

  $cpt->register();
```
