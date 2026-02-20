---
id: cpts
title: Post Types Personalizados
sidebar_label: Post Types
---

*Onyx* provides the possibility of creating custom Post Types that can be done in two ways. The first through this file `./core/config/cpts.php` and the other is by instantiating an object of the class [`\Onyx\Cpt()`](class-cpt).

---

## Parameters

The only Required parameter is the `name(s)` of the post type and can be a *string* as we can see in [*Example 1*](#creating-post-types) or an *array* as in [*Example 2*](#creating-post-types). Onyx will automatically extract `slug`, `labels`, `options` if they are not provided as well as try to apply *plural* to the necessary labels.

:::caution
If **not provided**, the parameter `slug` will be used to create the post type and it is the one that should be used for queries and relationships. By default, `slug` is extracted from the value `name` transformed to the plural.

*Ex: 'Custom Product' plural will be 'Custom Products' and slug 'custom-products'.*
:::

| Param     | Type           | Description                                     | Required |
|-----------|----------------|-------------------------------------------------|----------|
| `name(s)` | *string/array* | Post Type name                                  | ✔        |
| `icon`    | *string*       | Post Type icon                                  | ✘        |
| `labels`  | *array*        | Custom labels                                   | ✘        |
| `options` | *array*        | Operating arguments                             | ✘        |
| `filters` | *array*        | Admin search filters (selects for *taxonomies*) | ✘        |
| `columns` | *array*        | Register custom columns in the admin            | ✘        |

:::info
To learn about options for `labels` and` options`, visit the WordPress instructions [register_post_type()](https://developer.wordpress.org/reference/functions/register_post_type/) and [get_post_type_labels()](https://developer.wordpress.org/reference/functions/get_post_type_labels/)
:::

:::info
When adding parameters like `labels` or` options`, you do not need to include all options. Only the parameters you determine will be replaced in the model.
:::

---

## Creating Post Types

Using this method, you **don't need** to instantiate the class  [`\Onyx\Cpt()`](instanciando-um-post-type).

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

## Search Filters

When registering a custom [Taxonomy](taxonomies), you can also add search filters to the WordPress admin listing table

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

## Custom Admin Columns

You can **include**, **remove** or **reorder** custom columns in the WordPress admin listing table when registering a Post Type. This is very useful when you have *custom fields* or *custom taxonomies*

:::info
To add columns for **taxonomies**, see entry in [Taxonomy](taxonomies).
:::

| Param   | Type    | Description    | Required |
|---------|---------|----------------|----------|
| `add`   | *array* | Columns to add | ✘        |
| `order` | *array* | Columns order  | ✘        |
| `hide`  | *array* | Remove Columns | ✘        |

### add

| Param      | Type       | Description                                             | Required |
|------------|------------|---------------------------------------------------------|----------|
| `label`    | *string*   | Column label                                            | ✔        |
| `populate` | *callable* | Function that receives 2 values `fn($column, $post_id)` | ✔        |
| `sort`     | *string*   | Meta Key for sorting                                    | ✘        |
| `numeric`  | *bool*     | Sort via numeric or string                              | ✘        |

### order

An array with the `key or column name`. The columns will appear in the order of inclusion within the array.

### hide

An array with the `key or column name`. Columns added here will be removed from the admin list table.

### Example of use

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

## Instantiating a Post Type

In addition to being able to create a Post Type using the record in the `./core/config/cpts.php` file, you can instantiate an object and manually create its CPT using the class [`\Onyx\Cpt`](class-cpt)

:::info
only the parameter **`name(s)`** is required, it can either be a *string* or an *array*.
:::

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
