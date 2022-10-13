---
id: assets
title: Registro de Assets
sidebar_label: Assets
---

Para adicionar Javascripts e Estilos utilize este arquivo `./core/config/assets.php`. É recomendável gerenciar suas dependencias pelo [Gulp](gulp) e não pelas funções *wp\_enqueue\_* do WordPress

Segue os princípios das funçõs [wp_enqueue_style](https://developer.wordpress.org/reference/functions/wp_enqueue_style/), [wp_enqueue_script](https://developer.wordpress.org/reference/functions/wp_enqueue_script/) e do hook [wp_enqueue_scripts](https://developer.wordpress.org/reference/hooks/wp_enqueue_scripts/)

---

## Adicionar CSS

O *Array* de estilos carrega na ordem adicionada e recebe alguns parâmetros:

`$handler => [ $src = '', $home = false, $deps = [], $ver = false, $media = 'all' ]`

| Param      | Tipo                 | Descrição                    | Obrigatório |
|------------|----------------------|------------------------------|-------------|
| `$handler` | *string*             | Nome único do estilo         | ✔           |
| `$src`     | *string*             | Caminho ou URL do css        | ✔           |
| `$home`    | *bool*               | Aparecer **somente** na Home | ✘           |
| `$deps`    | *array*              | Dependências                 | ✘           |
| `$ver`     | *string\|bool\|null* | Versão                       | ✘           |
| `$media`   | *string*             | 'all', 'print' e 'screen'    | ✘           |

```php {9}
/*
|--------------------------------------------------------------------------
| LOAD CSS
|--------------------------------------------------------------------------
*/
'css' => [
  'main-style'   => [ 'assets/css/main.css' ],
  'home-style'   => [ 'assets/css/home.css', true ],
  'custom-style' => [ 'assets/css/myCustomStyle.css'],
  'select2'      => [ 'https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.13/css/select2.min.css' ],
],
```

---

## Adicionar Javascript

O *Array* de javascript carrega na ordem adicionada e recebe alguns parâmetros:

`$handler => [ $src = '', $home = false, $deps = [], $ver = false, $in_footer = true ]`

| Param        | Tipo                 | Descrição                    | Obrigatório |
|--------------|----------------------|------------------------------|-------------|
| `$handler`   | *string*             | Nome único do estilo         | ✔           |
| `$src`       | *string*             | Caminho ou URL do js         | ✔           |
| `$home`      | *bool*               | Aparecer **somente** na Home | ✘           |
| `$deps`      | *array*              | Dependências                 | ✘           |
| `$ver`       | *string\|bool\|null* | Versão                       | ✘           |
| `$in_footer` | *bool*               | Aparecer no footer ou header | ✘           |

```php {9}
/*
|--------------------------------------------------------------------------
| LOAD JAVASCRIPTS
|--------------------------------------------------------------------------
*/
'js'  => [
  'select2'       => [ 'https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.13/js/select2.min.js' ],
  'app-script'    => [ 'assets/js/app.min.js' ],
  'home-script'   => [ 'assets/js/home.min.js', true ],
  'custom-script' => [ 'assets/js/myCustomScript.js' ],
],
```
