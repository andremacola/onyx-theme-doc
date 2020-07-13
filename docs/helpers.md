---
id: helpers
title: Helper Methods
sidebar_label: Helpers
---

O [Onyx Theme](https://github.com/andremacola/onyx-theme) é munido de diversas funções de ajuda para o desenvolvimento do projeto.

Essas funções são métodos estáticos da classe `\Onyx\Helpers` que tem como alias `\Onyx\O`.

:::info
Para resolver problemas com o intelisense, sempre utilize o alias `O` para a classe Helpers.
```php
use Onyx\Helpers as O;
```
:::

```php
// Exemplo
\Onyx\O::conf('app')->version;
```

---

## Métodos

### `O::conf()`

*Retorna variáveis de ambiente. Use com cautela.*  
*O retorno somente funciona caso o arquivo ja tenha sido previamente carregado pela [`\Onyx\O::load()`](#método-load-file-obj--true-)*

`\Onyx\O::conf( $name = false )`

|Param | Tipo | Descrição                       | Obrigatório
|------|------|---------------------------------|------------|
| `$name` | *string* | Arquivo de configuração* | ✘          |

`@return object|false`

***Variável de configuração:*** pode ser o nome qualquer arquivo que se encontre na pasta `./core/config/`  
Ex: `app | assets | hooks | images | mail | support`

Verifique os arquivos para retornar.

```php
// Exemplos de uso

namespace Onyx;
O::conf('app')                    // Todos os parâmetro do arquivo ./core/config/app.php
O::conf('app')->version;          // 1.0
O::conf('app')->dir_uri;          // http://site.onyx.local/app/themes/onyx
O::conf('app')->desc;             // My Site Description
O::conf('assets')->css;           // Objeto|Array dos estilos carregados
O::conf('hooks')->filters['add']; // Objeto|Array dos filtros adicionados
```

---

### `O::load()`

*Carrega arquivos de configuração. O arquivo precisa retornar um* ***array***.  
*Método utilizado para **fazer o setup** do tema pela classe `\Onyx\Setup`*

`\Onyx\O::load( $file, $obj = true )`  

| Param   | Tipo      | Descrição            | Obrigatório |
|---------|-----------|----------------------|-------------|
| `$file` | *string*  | Nome do Arquivo*     | ✔           |
| `$obj`  | *boolean* | Retornar como objeto | ✘           |

`@return array|object|false`

***Nome do Arquivo:*** o arquivo obrigatoriamente tem que estar na pasta `./core/config/`  

```php
// Exemplos de uso

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

*Setar hierarquia de templates carregados no boot*

`O::set_hierarchy( $hierarchy = [] )`

---

### `O::get_hierarchy()`

*Capturar hierarquia de templates carregados no boot*  
*Coloque o sufixo `-controller` no nome do arquivo para pegar o arquivo do controller*

```php
// Exemplo de uso
var_dump( O::get_hierarchy() );
```

---

### `O::array_filter_keys()`

*Filtrar array multidimensional recursivamente removendo as chaves passadas como parâmetro.*

`O::array_filter_keys( $arr, $filter )`

| Param     | Tipo    | Descrição           | Obrigatório |
|-----------|---------|---------------------|-------------|
| `$arr`    | *array* | Array de origem     | ✔           |
| `$filter` | *array* | Chaves para remover | ✔           |

`@return array`

```php
// Exemplos de uso

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

*Método para funcionamento do plugin [AMP](https://br.wordpress.org/plugins/amp/). Verifica se a página atual é uma página* **AMP**.

`@return bool`

```php
// Exemplo de uso
namespace Onyx;
if (O::is_amp()) {
  echo "Esta é uma página AMP";
}
```

---

### `O::valid_url()`

*Validar uma url a partir de uma* **string**.

`O::valid_url( $uri )`

| Param  | Tipo     | Descrição       | Obrigatório |
|--------|----------|-----------------|-------------|
| `$uri` | *string* | Um endereço web | ✔           |

`@return bool`

```php
// Exemplo de uso
namespace Onyx;
if (O::valid_url('https://github.com')) {
  echo "Esta é uma URL válida";
}
```

---

### `O::static_path()`

*Retorna o caminho da url do `asset` baseado na localização do arquivo*  
*se é um arquivo remoto ou local. Usa o método* [static_uri](#ostatic_uri).

`O::static_path( $file )`

| Param   | Tipo     | Descrição                         | Obrigatório |
|---------|----------|-----------------------------------|-------------|
| `$file` | *string* | Localização do arquivo ou uma URL | ✔           |

`@return string`

```php
// Exemplo de uso
namespace Onyx;
O::static_path( 'assets/css/home.css' ) // http://site.onyx.local/app/themes/onyx/assets/css/home.css
```

---

### `O::static_uri()`

*Retorna o diretório dos `assets` de acordo com a constante de ambiente `ONYX_STATIC`*  
*(definida no parâmetro `static` em `./core/config/app.php`).*

*O padrão do subdomínio será: `//{$subdomain}.domain.tld/THEME_FOLDER/assets`*

:::info
Para utilizar a constante ***ONIX_STATIC*** você precisará configurar um cdn ou um subdomínio apontando para a pasta `themes` do WordPress em seu servidor.
:::

:::caution
Prefira utilizar o método [`O::static_path()`](#static_path)  
Utilize este método caso queira personalizar o retorno em uma função própria. Para mais informações veja a declaração do método *static_path()* no arquivo [`class-onyx-helpers.php`](https://github.com/andremacola/onyx-theme/blob/8d1633d9b6b0814ce9ead8a8fd0deb8c138ffe57/core/app/class-onyx-helpers.php#L103)
:::

```php
// @return string
O::static_uri( $uri, $subdomain = 'static' )
```

---

### `O::get_img()`

*Retornar uma imagem do diretório do tema*

`O::get_img( $img, $title = null, $w = null, $h = null )`

| Param    | Tipo     | Descrição         | Obrigatório |
|----------|----------|-------------------|-------------|
| `$img`   | *string* | Caminho da Imagem | ✔           |
| `$title` | *string* | Título da Imagem  | ✘           |
| `$w`     | *string* | Largura da Imagem | ✘           |
| `$h`     | *string* | Altura da Imagem  | ✘           |

`@return string`

```php
// Exemplo de uso
namespace Onyx;
$img = O::get_img( 'assets/images/logo.jpg' );
```

---

### `O::img()`

*Alias do método [`O::get_img()`](#oget_img) porém imprime na tela*

`O::img( $img, $title = null, $w = null, $h = null )`

`@echo string`

---

### `O::css()`

*Imprime uma tag `<link rel="stylesheet" href="{$css}">`*

`O::css( $css, $home = false )`

| Param   | Tipo     | Descrição                | Obrigatório |
|---------|----------|--------------------------|-------------|
| `$css`  | *string* | Caminho do css           | ✔           |
| `$home` | *bool*   | Aparecer somente na Home | ✘           |

`@echo string`

```php
// Exemplo de uso
<head>
  \Onyx\O::css( 'assets/css/main.css' );
</head>
```

---

### `O::js()`

*Imprime uma tag `<script src="{$js}"></script>`*

`O::js( $js, $home = false )`

| Param   | Tipo     | Descrição                | Obrigatório |
|---------|----------|--------------------------|-------------|
| `$js`   | *string* | Caminho do js            | ✔           |
| `$home` | *bool*   | Aparecer somente na Home | ✘           |

`@echo string`

```php
// Exemplo de uso
<head>
  \Onyx\O::js( 'assets/js/app.js' );
</head>
```

---

### `O::livereload()`

*Método para chamar o script do Live Reload (veja [gulpfile.js](https://github.com/andremacola/onyx-theme/blob/master/gulpfile.js)).*

`O::livereload( $port = 3010 )`

`@return void|false`

---

### `O::gtag()`

*Adicionar html do script do google analytics (método principal)*  
*Utiliza `gtag.js` to Google*

`O::gtag( $uax, $script = false )`

| Param     | Tipo     | Descrição                                                            | Obrigatório |
|-----------|----------|----------------------------------------------------------------------|-------------|
| `$uax`    | *string* | Google UA ID                                                         | ✔           |
| `$script` | *bool*   | Carregar o script `https://www.googletagmanager.com/gtag/js?id=$uax` | ✘           |

`@echo <script />`

```php
// Exemplo de uso
<footer>
  \Onyx\O::gtag( 'UA-XXXXXXX-X', true );
</footer>
```

---

### `O::analytics()`

*Adicionar html do script do google analytics (legado)*  
*Utiliza `analytics.js` to Google*

`O::gtag( $uax, $script = false )`

| Param     | Tipo     | Descrição                                                         | Obrigatório |
|-----------|----------|-------------------------------------------------------------------|-------------|
| `$uax`    | *string* | Google UA ID                                                      | ✔           |
| `$script` | *bool*   | Carregar o script `https://www.google-analytics.com/analytics.js` | ✘           |

`@echo <script />`

```php
// Exemplo de uso
<footer>
  \Onyx\O::analytics( 'UA-XXXXXXX-X', true );
</footer>
```

---

### `O::print()`

*Imprime uma variável tipo `string` de ambiente do `app`*

`O::print( $key )`

`@echo string`

```php
// Exemplo de uso
namespace Onyx;
O::print( 'version' ); // 1.0
```

---

### `O::is_dev()`

*Verifica se o usuário logado é um desenvolvedor*
*Use com cautela, método usado somente para desenvolvimento/debug*

`O::is_dev()`

`@return bool`

```php
// Exemplo de uso
namespace Onyx;
if ( O::is_dev() ) {
  echo "É um desenvolvedor";
}
```

:::info
Adicione os emails dos desenvolvedores em `./core/config/app.php`
:::

---

## WordPress

### `O::section_title()`

*Retornar o título da seção atual, dependendo do tipo da rota da seção do WordPress*

`O::section_title( $echo = true, $prefix = '' )`

| Param     | Tipo     | Descrição            | Obrigatório |
|-----------|----------|----------------------|-------------|
| `$echo`   | *bool*   | Imprimir ou retornar | ✘           |
| `$prefix` | *string* | Prefixo              | ✘           |

`@return void|string`

```php
/**
 * Exemplo de uso. Dependendo da área, pode retornar:
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

*Retorna o tipo da página no WordPress. Ex: is_page, is_home, is_archive etc...*

`O::section_type()`

`@return string`

---

### `O::menu()`

*Mostar menu de navegação*

`O::menu( $menu = null )`

| Param   | Tipo     | Descrição    | Obrigatório |
|---------|----------|--------------|-------------|
| `$menu` | *string* | Nome do Menu | ✔           |

`@return void`

```php
// Exemplo de Uso
<ul>
  \Onyx\O::menu('Menu Topo');
</ul>
```

---

### `O::pagenavi()`

*Onyx Pagenavi. Mostrar menu de paginação de posts/paginas*

`O::pagenavi( $query = null )`

| Param    | Tipo     | Descrição       | Obrigatório |
|----------|----------|-----------------|-------------|
| `$query` | *object* | Objeto da Query | ✘           |

`@return void`

:::info
Caso nenhum parâmetro de query seja passado, irá utilizar a query global do WordPress
:::

```php
// Exemplo de Uso
<div class='pagination'>
  \Onyx\O::pagenavi();
</div>
```

---
