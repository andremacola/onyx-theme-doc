---
id: hooks
title: Actions and Filters Loader (Hooks)
sidebar_label: Hooks
---

All WordPress Hooks (actions and filters) are registered in this file `./core/config/hooks.php`. **You can use the standard way of WordPress** in your files but to maintain a standard development, we recommend registering all *Hooks* here.

:::warning
Please **do not add** functions to this file except for [closures](#closures). Place your functions in a file in the `./core/includes` folder and require in` functions.php`
:::

This file returns an `Array` which is loaded into the theme setup with the following parameters:

- `filters`:
  - `add`: [add_filter](https://developer.wordpress.org/reference/functions/add_filter/) function alias from WordPress
  - `remove`: [remove_filter](https://developer.wordpress.org/reference/functions/remove_filter/) function alias from WordPress
  - `apply`
- `actions`
  - `add`: [add_action](https://developer.wordpress.org/reference/functions/add_action/) function alias from WordPress
  - `remove`: [remove_action](https://developer.wordpress.org/reference/functions/remove_action/) function alias from WordPress

---

## Parameters

The hooks *Array*  load in an added order and receive up to 4 (four) parameters:

| Param              | Type       | Description                      | Required |
|--------------------|------------|----------------------------------|----------|
| `$tag`             | *string*   | Filter/Action tag                | ✔        |
| `$function_to_add` | *callable* | Callable function                | ✔        |
| `$priority`        | *int*      | Priority (default: 10)           | ✘        |
| `$accepted_args`   | *int*      | Number of arguments (default: 1) | ✘        |

---

## Example of use

```php
'filters' => [
  ...
  'remove' => [
    ...
    ['the_content', 'my_custom_filter_function', 10, 2],
  ]
],

'actions' => [
  ...
  'add' => [
    ...
    ['wp_head', 'my_custom_action_function', 10, 2],
  ]
]
```

---

## Closures

You can also add filters or actions using an anonymous function.

```php
'filters' => [
  ...
  'remove' => [
    ...
    ['the_content', function($param1) {
      return $param1;
    }, 10],
  ]
],

'actions' => [
  ...
  'add' => [
    ...
    ['wp_head', function($param1, $param2) {
      echo "$Param1 and $param2";
    }, 10, 2],
  ]
]
```
