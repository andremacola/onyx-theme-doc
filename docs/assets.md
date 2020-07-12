---
id: assets
title: Registro de Assets
sidebar_label: Assets
---

Para adicionar Javascripts e Estilos utilize este arquivo `./core/config/assets.php`. É recomendável gerenciar suas dependencias pelo [Gulp](gulp) e não pelas funções *wp\_enqueue\_* do WordPress

---

## Adicionar CSS

O *Array* de estilos carrega na ordem adicionada e recebe 2 (dois) parâmetros:

| Param   | Tipo     | Descrição                | Obrigatório |
|---------|----------|--------------------------|-------------|
| `$css`  | *string* | Caminho ou URL do css    | ✔           |
| `$home` | *bool*   | Aparecer somente na Home | ✘           |

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

## Adicionar Javascript

O *Array* de javascript carrega na ordem adicionada e recebe 2 (dois) parâmetros:

| Param   | Tipo     | Descrição                    | Obrigatório |
|---------|----------|------------------------------|-------------|
| `$js`   | *string* | Caminho ou URL do javascript | ✔           |
| `$home` | *bool*   | Aparecer somente na Home     | ✘           |

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
