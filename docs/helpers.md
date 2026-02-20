---
id: helpers
title: Helper Methods
sidebar_label: Helpers
---

The [Onyx Theme](https://github.com/andremacola/onyx-theme) is equipped with several help functions for the development of the project.

These functions are `\Onyx\Helpers` class static methods, aliased to `\Onyx\O`.

:::info
To solve problems with intelisense, always use the alias `O` for the Helpers class.
```php
use Onyx\Helpers as O;
```
:::

```php
// Exemplo
\Onyx\O::conf('app')->version;
```

---

## Methods

### `O::conf()`

*Returns environment variables. Use with caution.*  
*The return only works if the file has already been previously loaded by [`\Onyx\O::load()`](#método-load-file-obj--true-)*

`\Onyx\O::conf( $name = false )`

| Param   | Type     | Description         | Required |
|---------|----------|---------------------|----------|
| `$name` | *string* | Configuration file* | ✘        |

`@return object|false`

***Configuration variable:*** any file in the `./core/config/` folder can be the name  
Ex: `app | assets | hooks | images | mail | support`

Check the files to return.

```php
// Example of use
namespace Onyx;
O::conf('app')                    // All parameters in the `./core/config/app.php` file
O::conf('app')->version;          // 1.0
O::conf('app')->dir_uri;          // http://site.onyx.local/app/themes/onyx
O::conf('app')->desc;             // My Site Description
O::conf('assets')->css;           // Objeto|Array loaded styles
O::conf('hooks')->filters['add']; // Objeto|Array added filters
```

---

### `O::load()`

*Load configuration files. The file must return an* ***array***.  
*Method used to **setup** the theme by the class `\Onyx\Setup`*

`\Onyx\O::load( $file, $obj = true )`  

| Param   | Type      | Description            | Required |
|---------|-----------|----------------------|-------------|
| `$file` | *string*  | File Name      | ✔           |
| `$obj`  | *boolean* | Return as object | ✘           |

`@return array|object|false`

***File Name:*** the file must be in the `./core/config/` folder  

```php
// Example of use
namespace Onyx;
$this->app      = O::load( 'app' );
$this->assets   = O::load( 'assets' );
$this->hooks    = O::load( 'hooks' );
$this->images   = O::load( 'images' );
$this->mail     = O::load( 'mail' );
$this->sidebars = O::load( 'sidebars' );
$this->support  = O::load( 'support' );
$this->cpts     = O::load( 'cpts' );
$this->taxs     = O::load( 'taxonomies' );
```
---

### `O::set_hierarchy()`

*Set hierarchy of templates loaded at boot.*

`O::set_hierarchy( $hierarchy = [] )`

---

### `O::get_hierarchy()`

*Capture hierarchy of templates loaded at boot.*  
*Put the suffix `Controller` in the file name to get the file from the controller.*

```php
// Example of use
var_dump( O::get_hierarchy() );
```

---

### `O::array_filter_keys()`

*Filter multidimensional array recursively by removing the keys passed as a parameter.*

`O::array_filter_keys( $arr, $filter )`

| Param     | Type    | Description    | Required |
|-----------|---------|----------------|----------|
| `$arr`    | *array* | Source array   | ✔        |
| `$filter` | *array* | Keys to remove | ✔        |

`@return array`

```php
// Example of use
namespace Onyx;
$app = [
  'version' => '1.0',
  'rest'    => 'wp-json',
  'user'    => wp_get_current_user()->user_email,
  'devs'    => [ 'dev@domain.tld' ],
  'uploads' => [
    'max_file_size' => 5000,
    'unset_types' => [ 'mp4|m4v', 'wmv', 'avi', 'mpeg|mpg|mpe', 'mkv' ],
  ],
];
$remove = [ 'user', 'devs', 'unset_types' ];
$app_filtered = O::array_filter_keys( $app, $remove );
```
---

### `O::is_amp()`

*Method for working with the [AMP](https://br.wordpress.org/plugins/amp/) plugin. Checks whether the current page is a* **AMP** page.

`@return bool`

```php
// Example of use
namespace Onyx;
if (O::is_amp()) {
  echo "This is an AMP page";
}
```

---

### `O::valid_url()`

*Validate a url from a* **string**.

`O::valid_url( $uri )`

| Param  | Type     | Description | Required |
|--------|----------|-------------|----------|
| `$uri` | *string* | URL Address | ✔        |

`@return bool`

```php
// Example of use
namespace Onyx;
if (O::valid_url('https://github.com')) {
  echo "This is a valid URL";
}
```

---

### `O::static_path()`

*Returns the `asset` url path based on the file location*  
*whether it is a remote or local file. Uses the method* [static_uri](#ostatic_uri).

`O::static_path( $file )`

| Param   | Type     | Description            | Required |
|---------|----------|------------------------|----------|
| `$file` | *string* | File location or a URL | ✔        |

`@return string`

```php
// Example of use
namespace Onyx;
O::static_path( 'assets/css/home.css' ) // http://site.onyx.local/app/themes/onyx/assets/css/home.css
```

---

### `O::static_uri()`

*Returns the `assets` directory according to the `ONYX_STATIC` environment constant*  
*(defined in the `static` parameter at `./core/config/app.php`).*

*The subdomain pattern will be: `//{$subdomain}.domain.tld/THEME_FOLDER/assets`*

:::info
To use the constant ***ONIX_STATIC*** you will need to configure a cdn or a subdomain pointing to the WordPress `themes` folder on your server.
:::

:::caution
Prefer to use [`O::static_path()`](#static_path)  
Use this method if you want to customize the return in a specific function. For more information see the *static_path()* method declaration in the [`Helpers.php`](https://github.com/andremacola/onyx-theme/blob/18c7d6f55f530d6bd379f025b1dcb28a5da3ad5e/core/app/Onyx/Helpers.php#L130) file
:::

```php
// @return string
O::static_uri( $uri, $subdomain = 'static' )
```

---

### `O::get_img()`

*Return an image from the theme directory*

`O::get_img( $img, $title = null, $w = null, $h = null )`

| Param    | Type     | Description  | Required |
|----------|----------|--------------|----------|
| `$img`   | *string* | Image Path   | ✔        |
| `$title` | *string* | Image Title  | ✘        |
| `$w`     | *string* | Image Width  | ✘        |
| `$h`     | *string* | Image Height | ✘        |

`@return string`

```php
// Example of use
namespace Onyx;
$img = O::get_img( 'assets/images/logo.jpg' );
```

---

### `O::img()`

*[`O::get_img()`](#oget_img) alias but prints on the screen*

`O::img( $img, $title = null, $w = null, $h = null )`

`@echo string`

---

### `O::css()`

*Print `<link rel="stylesheet" href="{$css}">` tag*

`O::css( $css, $home = false )`

| Param   | Type     | Description         | Required |
|---------|----------|---------------------|----------|
| `$css`  | *string* | CSS path or URL     | ✔        |
| `$home` | *bool*   | Appear only on Home | ✘        |

`@echo string`

```php
// Example of use
<head>
  \Onyx\O::css( 'assets/css/main.css' );
</head>
```

---

### `O::js()`

*Print `<script src="{$js}"></script>` tag*

`O::js( $js, $home = false )`

| Param   | Type     | Description            | Required |
|---------|----------|------------------------|----------|
| `$js`   | *string* | Javascript path or URL | ✔        |
| `$home` | *bool*   | Appear only on Home    | ✘        |

`@echo string`

```php
// Example of use
<head>
  \Onyx\O::js( 'assets/js/app.js' );
</head>
```

---

### `O::livereload()`

*Method to call the Live Reload script (see [gulpfile.js](https://github.com/andremacola/onyx-theme/blob/master/gulpfile.js)).*

`O::livereload( $port = 3010 )`

`@return void|false`

---

### `O::gtag()`

*Add HTML for google analytics script (main method)*  
*Uses `gtag.js` from Google*

`O::gtag( $uax, $script = false )`

| Param     | Type     | Description                                                        | Required |
|-----------|----------|--------------------------------------------------------------------|----------|
| `$uax`    | *string* | Google UA ID                                                       | ✔        |
| `$script` | *bool*   | Load the script `https://www.googletagmanager.com/gtag/js?id=$uax` | ✘        |

`@echo <script />`

```php
// Example of use
<footer>
  \Onyx\O::gtag( 'UA-XXXXXXX-X', true );
</footer>
```

---

### `O::analytics()`

*Add HTML for google analytics script (legacy)*  
*Uses `analytics.js` from Google*

`O::gtag( $uax, $script = false )`

| Param     | Type     | Description                                                     | Required |
|-----------|----------|-----------------------------------------------------------------|----------|
| `$uax`    | *string* | Google UA ID                                                    | ✔        |
| `$script` | *bool*   | Load the script `https://www.google-analytics.com/analytics.js` | ✘        |

`@echo <script />`

```php
// Example of use
<footer>
  \Onyx\O::analytics( 'UA-XXXXXXX-X', true );
</footer>
```

---

### `O::print()`

*Print an `app` enviroment parameter (string)*

`O::print( $key )`

`@echo string`

```php
// Example of use
namespace Onyx;
O::print( 'version' ); // 1.0
```

---

### `O::is_dev()`

*Checks whether the logged in user is a developer*
*Use with caution, method used only for development/debugging*

`O::is_dev()`

`@return bool`

```php
// Example of use
namespace Onyx;
if ( O::is_dev() ) {
  echo "Is a developer";
}
```

:::info
Add developer emails at `./core/config/app.php`
:::

---

## WordPress

### `O::section_title()`

*Return the title of the current section, depending on the route type of the WordPress section*

`O::section_title( $echo = true, $prefix = '' )`

| Param     | Type     | Description     | Required |
|-----------|----------|-----------------|----------|
| `$echo`   | *bool*   | Print or return | ✘        |
| `$prefix` | *string* | Prefix          | ✘        |

`@return void|string`

```php
/**
 * Example of use. Dependendo da área, pode retornar:
 * post_type_archive_title()
 * single_cat_title()
 * single_tag_title()
 * get_the_author()
 * single_term_title()
*/
<h1>
  \Onyx\O::section_title();
</h1>
```

---

### `O::section_type()`

*Returns the page type in WordPress as string. Ex: is_page, is_home, is_archive etc...*

`O::section_type()`

`@return string`

---

### `O::menu()`

*Show navigation menu*

`O::menu( $menu = null )`

| Param   | Type     | Description | Required |
|---------|----------|-------------|----------|
| `$menu` | *string* | Menu Name   | ✔        |

`@return void`

```php
// Example of use
<ul>
  \Onyx\O::menu('Top Menu');
</ul>
```

---

### `O::pagenavi()`

*Onyx Pagenavi. Show posts/pages pagination menu*

`O::pagenavi( $query = null )`

| Param    | Type     | Description  | Required |
|----------|----------|--------------|----------|
| `$query` | *object* | Query Object | ✘        |

`@return void`

:::info
If no query parameters are passed, it will use the global WordPress query
:::

```php
// Example of use
<div class='pagination'>
  \Onyx\O::pagenavi();
</div>
```

---
