---
id: assets
title: Register Assets
sidebar_label: Assets
---

To add Javascripts and Styles, use this file `./core/config/assets.php`. It is recommended to manage your dependencies through [Gulp](gulp) and not by the WordPress functions *wp\_enqueue\_*

---

## Add CSS

The styles *Array* loads in the added order and receives 2 (two) parameters:

| Param   | Type     | Description         | Required |
|---------|----------|---------------------|----------|
| `$css`  | *string* | CSS path or URL     | ✔        |
| `$home` | *bool*   | Appear only on Home | ✘        |

```php {9}
/*
|--------------------------------------------------------------------------
| LOAD CSS
|--------------------------------------------------------------------------
*/
'css' => [
  [ 'assets/css/main.css' ],
  [ 'assets/css/home.css', true ],
  [ 'assets/css/myCustomStyle.css'],
  [ 'https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.13/css/select2.min.css' ],
],
```

---

## Add Javascript

The scripts *Array* loads in the added order and receives 2 (two) parameters:

| Param   | Type     | Description            | Required |
|---------|----------|------------------------|----------|
| `$js`   | *string* | Javascript path or URL | ✔        |
| `$home` | *bool*   | Appear only on Home    | ✘        |

```php {9}
/*
|--------------------------------------------------------------------------
| LOAD JAVASCRIPTS
|--------------------------------------------------------------------------
*/
'js'  => [
  [ 'https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.13/js/select2.min.js' ],
  [ 'assets/js/app.min.js' ],
  [ 'assets/js/home.min.js', true ],
  [ 'assets/js/myCustomScript.js'],
],
```
