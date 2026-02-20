---
id: taxonomies
title: Custom Taxonomies
sidebar_label: Taxonomies
---

## Parameters

The `name (s)` of the taxonomy can be a *string* as we can see in [*Example 1*](#creating-a-taxonomy) or an *array* as in [*Example 2*](#creating-a-taxonomy). Onyx will automatically extract `slug`, `labels`, `options` if they are not provided as well as try to apply *plural* to the necessary labels.

:::caution
If **not provided**, the parameter `slug` will be used to create the post type and it is the one that should be used for queries and relationships. By default, `slug` is extracted from the value` name` transformed to the plural.

*Ex: 'Custom Product' plural will be 'Custom Products' and slug 'custom-products'.*
:::

| Param     | Type           | Description             | Required |
|-----------|----------------|-------------------------|----------|
| `name(s)` | *string/array* | Taxonomy name           | ✔        |
| `types`   | *array*        | Related Post Types      | ✔        |
| `options` | *array*        | Arguments for operation | ✘        |
| `labels`  | *array*        | Custom labels           | ✘        |

:::info
For options on `labels` and` options`, visit the WordPress documentation [register_taxonomy()](https://codex.wordpress.org/Function_Reference/register_taxonomy)
:::

:::info
When adding parameters like `labels` or` options`, you do not need to include all options. Only the parameters you determine will be replaced in the model.
:::

---

## Creating a Taxonomy

Using this method, you **don't need** to instantiate the [`\Onyx\Taxonomy()`](#instantiating-a-taxonomy) class.

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

## Instantiating a Taxonomy

In addition to being able to create a taxonomy using the register in the `./core/config/taxonomies.php` file, you can instantiate an object and manually create its Taxonomy using the class [`\Onyx\Taxonomy`](class-taxonomy)

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
