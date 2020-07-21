---
id: taxonomies
title: Taxonomias Personalizadas
sidebar_label: Taxonomias
---

## Parâmetros

O `name(s)` da taxonomia podendo ser uma *string* como podemos ver no [*Exemplo 1*](#criando-uma-taxonomia) ou um *array* como no [*Exemplo 2*](#criando-uma-taxonomia). O Onyx vai extrair automaticamente `slug`, `labels`, `options` caso não sejam fornecidos assim como tentará aplicar o *plural* nas labels necessárias.

:::caution
Caso **não fornecido**, o parâmetro `slug` será utilizado para criação do post type e é ele que deverá ser utilizado para queries e relacionamentos. Por padrão o `slug` é extraído do valor `name` transformado para o plural.

*Ex: 'Produto' terá como plural 'Produtos' e slug 'produtos'.*
:::

| Param     | Tipo           | Descrição                     | Obrigatório |
|-----------|----------------|-------------------------------|-------------|
| `name(s)` | *string/array* | Nome da Taxonomia             | ✔           |
| `types`   | *array*        | Post Types relacionados       | ✔           |
| `options` | *array*        | Argumentos para funcionamento | ✘           |
| `labels`  | *array*        | Labels customizadas           | ✘           |

:::info
Para saber as opções das `labels` e `options`, visite a documentação do WordPress [register_taxonomy()](https://codex.wordpress.org/Function_Reference/register_taxonomy)
:::

:::info
Ao adicionar parâmetros como `labels` ou `options`, você não precisa incluir todas as opções. Somente os parâmetros que você determinar serão substituídos no modelo.
:::

---

## Criando uma Taxonomia

Utilizando este método, você **não precisa** instanciar a classe [`\Onyx\Taxonomy()`](#instanciando-uma-taxonomia).

```php
  /*
  |--------------------------------------------------------------------------
  | Genre Taxonomy (example 1)
  |--------------------------------------------------------------------------
  */
  [
    'Genre',
    'types' => [ 'my-custom-post-type' ],
  ],

  /*
  |--------------------------------------------------------------------------
  | Products Taxonomy (example 2)
  |--------------------------------------------------------------------------
  */
  [
    'names'   => [
      'name'   => 'Product',
      'plural' => 'Products',
      'slug'   => 'products',
    ],
    'types'   => [ 'post', 'my-custom-post-type' ],
    'options' => [
      'show_in_rest' => true,
      'hierarchical' => false, // like tags
    ],
    'labels'  => [
      'add_new_item' => __('Add new Product', 'onyx-theme'),
    ],
  ],
```

---

## Instanciando uma Taxonomia

Além de poder criar uma taxonomia utilizando o registro no arquivo `./core/config/taxonomies.php`, você pode instanciar um objeto e criar manualmente sua Taxonomia usando a classe [`\Onyx\Taxonomy`](class-taxonomy)

```php
  $tax = new \Onyx\Taxonomy();

  // assign taxonomy names
  $tax->names([
    'name'   => 'Product',
    'plural' => 'Products',
    'slug'   => 'product',
  ]);

  // assign taxonomy arguments
  $tax->options([
    'show_in_rest'  => true,
  ]);

  // register to post types
  $tax->post_types( [ 'post', 'my-custom-post-type'] );

  // register taxonomy
  $tax->register();
```
