---
id: helpers
title: Helper Methods
sidebar_label: Helpers
---

O [Onyx Theme](https://github.com/andremacola/onyx-theme) é munido de diversas funções de ajuda para o desenvolvimento do projeto.

Essas funções são métodos estáticos da classe `\Onyx\O`.

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

***Variável de configuração:*** pode ser o nome qualquer arquivo que se encontre na pasta `./config/`  
Ex: `app | assets | hooks | images | mail | support`

Verifique os arquivos para retornar.

```php
// Exemplos de uso

namespace Onyx;
O::conf('app')                    // Todos os parâmetro do arquivo ./conf/app.php
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

***Nome do Arquivo:*** o arquivo obrigatoriamente tem que estar na pasta `./config/`  

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

### `O::array_filter_keys()`

Filtrar array multidimensional recursivamente removendo as chaves passadas como parâmetro.

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

Método para funcionamento do plugin [AMP](https://br.wordpress.org/plugins/amp/). Verifica se a página atual é uma página **AMP**.

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

Valida uma url a partir de uma **string**.

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

Retorna o caminho da url do `asset` baseado na localização do arquivo  
se é um arquivo remoto ou local. Usa o método [static_uri](#ostatic_uri).

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

Retorna o diretório dos `assets` de acordo com a constante de ambiente `ONYX_STATIC`  
(definida no parâmetro `static` em `./conf/app.php`).

O padrão do subdomínio será: `//{$subdomain}.domain.tld/THEME_FOLDER/assets`

:::info
Para utilizar a constante ***ONIX_STATIC*** você precisará configurar um cdn ou um subdomínio apontando para a pasta do tema em seu servidor.
:::

:::caution
Prefira utilize o método [`O::static_path()`](#static_path)  
Utilize este método caso queira personalizar o retorno em uma função própria. Para mais informações veja a declaração do método *static_path()* no arquivo ***./app/class-onyx-helpers.php***
:::

```php
// @return string
O::static_uri( $uri, $subdomain = 'static' )
```
