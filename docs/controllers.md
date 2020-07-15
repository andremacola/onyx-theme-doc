---
id: controllers
title: Controllers e Views
sidebar_label: Controllers
---

## Introdução

Seguindo o padrão de ***Hierarquia de templates*** do próprio WordPress que [pode ser vista aqui](https://wphierarchy.com/), o Onyx Theme carrega seus controllers de acordo com a existencia desses arquivos seguido do *sufixo* `Controller` dentro da pasta `./core/app/Controllers`.

Os controllers são responsáveis por fazer a consulta/queries no banco e carregar as [Views](views). Você pode ver os **exemplos práticos** nos controllers que acompanham o tema.

:::info
A não existência de nenhum controller em cima da **hierarquia**, os templates padrões do WordPress são carregados normalmente.
:::

Por padrão o tema vem com os seguintes controllers no padrão **PSR4**: 

- ./core/app/Controllers/
  - **ArchiveController.php**  
  - **CategoryController.php**  
  - **Error404Controller.php**: <sup>**Exclusivamente o controller do 404 foge do padrão**</sup>
  - **HomeController.php**  
  - **PageController.php**  
  - **SearchController.php**  
  - **SingleController.php**  

---

## Nomeação de arquivos

Segue uma tabela com exemplos de nomeação dos controllers carregados em ordem.

Os arquivos dos controllers são baseados nos templates da hierarquia do WordPress e transformados de acordo com o [PSR4](https://www.php-fig.org/psr/psr-4/).

| Tipo       | Arquivos                                                                                                                                             |
|------------|------------------------------------------------------------------------------------------------------------------------------------------------------|
| Home       | `HomeController.php` <br /> `IndexController.php`                                                                                                    |
| Single     | `Single{$PostType}{$Slug}Controller.php` <br /> `Single{$PostType}Controller.php` <br /> `SingleController.php`                                      |
| Pages      | `Page{$Slug}Controller.php` <br /> `Page{$ID}Controller.php` <br /> `PageController.php`                                                             |
| Categories | `Category{$Slug}Controller.php` <br /> `Category{$ID}Controller.php` <br /> `CategoryController.php` <br /> `ArchiveController.php`                  |
| Tags       | `Tag{$Slug}Controller.php` <br /> `Tag{$ID}Controller.php` <br /> `TagController.php` <br /> `TagController.php` <br /> `ArchiveController.php`      |
| Taxonomies | `Taxonomy{$taxonomy}{$term}Controller.php` <br /> `Taxonomy{$taxonomy}Controller.php` <br /> `TaxonomyController.php` <br /> `ArchiveController.php` |
| Author     | `Author{$Author}Controller.php` <br /> `Author{$ID}Controller.php` <br /> `AuthorController.php` <br /> `ArchiveController.php`                      |
| CPT        | `Archive{$PostType}Controller.php` <br /> `ArchiveController.php` <br /> `IndexController.php`                                                       |

:::note
**Dica:** Você poderá utilizar um **[`var_dump( O::get_hierarchy() );`](helpers/#oget_hierarchy)** para verificar os templates da página atual.
:::

Para mais informações sobre o funcionamento do padrão de hierarquia do WordPress visite [Page-template-files](https://developer.wordpress.org/themes/template-files-section/Page-template-files/) e [wphierarchy](https://wphierarchy.com/).

---

## Nomeação das classes

As classes dos controllers são nomeadas de acordo com o [PSR4](https://www.php-fig.org/psr/psr-4/) relacionadas aos arquivos de controllers carregados.

Segue uma tabela com exemplos de nomeação das classes.

| Arquivo                   | Classe               |
|---------------------------|----------------------|
| HomeController.php        | HomeController       |
| SingleController.php      | SingleController     |
| SinglePostController.php  | SinglePostController |
| PageController.php        | PageController       |
| Page{$Slug}Controller.php | Page{Slug}Controller |
| CategoryController.php    | CategoryController   |

---

## Instanciando um controller

Todos os controllers devem extender a classe principal `\Onyx\Controller` e executar o método `initialize()`.

```php
namespace Onyx\Controllers;

use Onyx\Controller;

class HomeController extends Controller  {

  public function initialize() {
    // realizar carregamento de templates
    // realizar carregamento do contexto do Timber
    // carregar métodos desejados
  }

}
```

---

## Views: Setando as os Templates

Existem 3 maneiras básicas de se chamar as views. Todos os arquivos obrigatoriamente devem ficar na pasta `./views/`.

Os templates são carregados por ordem de existência na hierarquia.

```php
namespace Onyx\Controllers;

use Onyx\Controller;

class PageProductController extends Controller  {

  public function initialize() {

    /*
    |--------------------------------------------------------------------------
    | Método 1: chamando um dos métodos da classe Controller
    | Neste caso o Onyx carregará as views de acordo com a hierarquia de templates do WordPress
    | https://developer.wordpress.org/themes/basics/template-hierarchy/
    |--------------------------------------------------------------------------
    */
    $this->set_page_templates( $prefix = 'default' );                          /* or */
    $this->set_archive_templates( $prefix = 'archive', $folder = 'pages' );    /* or */
    $this->set_post_types_templates( $prefix = 'archive', $folder = 'pages' ); /* or */
    $this->set_taxonomy_templates( $prefix = 'archive', $folder = 'pages' );

    /*
    |--------------------------------------------------------------------------
    | Método 2: Setando os templates diretamente na propriedade $templates
    | com o método `set_templates()`.
    |--------------------------------------------------------------------------
    */
    $this->set_templates( [ 'pages/index.twig', 'pages/home.twig' ] );

    /*
    |--------------------------------------------------------------------------
    | Método 3: Criando um método com uma lógica própria para alterar
    | a propriedade $templates da classe.
    |--------------------------------------------------------------------------
    */
    $post = $this->get_post();
    $this->set_context( 'post', $this->get_post() ); // Veja mais a seguir
    $this->set_my_own_template_logic( $post );

  }

  /**
   * Setar templates personalizados
   *
   * @param \Timber\Post $post Objeto do Post
   * @return void
  */
  protected function set_my_own_template_logic( $post ) {
    $this->templates = [
      "pages/myTemplate-$post->ID.twig",
      "pages/myTemplate-$post->post_type.twig",
      "pages/myTemplate-$post->slug.twig",
      "pages/myTemplate.twig",
    ];
  }

}
```

---

## Views: Cancelar renderização

Por padrão os Controllers no *Onyx Theme* renderiza automaticamente as views. Caso deseje um controle maior sobre elas, podemos cancelar o método `render_view()` passando um método no `initialize()`.

```php
namespace Onyx\Controllers;

use Onyx\Controller;

class SingleController extends Controller  {

  public function initialize() {
		$this->set_page_templates( 'page' );
		$this->set_context( 'post', $this->get_post() );

    // cancelar renderização
    $this->no_render();

    // renderizar manualmente
    Timber::render( $this->templates, $this->context );
  }

}
```

---

## Contexto: Queries e Consultas

As views do Timber\Twig trabalham recebendo as [variáveis de contexto](https://timber.github.io/docs/v2/guides/context/) para renderizar as informações na tela.

Você pode passar uma ou várias queries/consultas para o contexto caso necessário e também utilizar o hook [`timber/context`](https://timber.github.io/docs/v2/hooks/filters/#timber/context) parra repassar contextos globais da aplicação.

Além das queries, você pode passar qualquer tipo de informação junto com o `contexto` para o *Timber*. Como um campo personalizado com alguma informação importante.

:::info
Para saber como utilizar o ***Twig***, visite a documentação do [Timber](https://timber.github.io/docs/v2/getting-started/a-post-archive/) ou do [Twig](https://twig.symfony.com/). E veja os exemplos que acompanham o **Onyx Theme**
:::

```php
namespace Onyx\Controllers;

use Onyx\Controller;
use Timber\PostQuery;

class ArchiveProductController extends Controller  {

  public function initialize() {

    /*
    |--------------------------------------------------------------------------
    | Escolher templates
    |--------------------------------------------------------------------------
    */
    $this->templates = [ 'pages/index.twig', 'pages/home.twig' ];

    /*
    |--------------------------------------------------------------------------
    | Capturar e setar contexto da query/loop principal
    |--------------------------------------------------------------------------
    */
    $this->context['posts'] = $this->get_posts();

    /*
    |--------------------------------------------------------------------------
    | Consultar e setar contexto das queries secundárias
    |--------------------------------------------------------------------------
    */
    $this->context['featured']    = $this->get_featured_products();
    $this->context['promotions']  = $this->get_promotions_products();

    /*
    |--------------------------------------------------------------------------
    | Mandar um custom field junto com o contexto usando o ACF
    |--------------------------------------------------------------------------
    */
    $this->context['promotion_banner'] = get_field('promotion_banner', 'options');

  }

  /**
   * Pegar produtos em destaque
   *
   * @return object
  */
  protected function get_featured_products() {
    return new PostQuery([
      'post_type'      => 'products',
      'category_name'  => 'featured',
      'posts_per_page' => 10,
    ]);
  }

  /**
   * Pegar produtos em promocão
   *
   * @return object
  */
  protected function get_promotions_products() {
    return new PostQuery([
      'post_type'      => 'products',
      'category_name'  => 'promotion',
      'posts_per_page' => 10,
    ]);
  }

}
```

:::note
Neste exemplo, não utilizamos os helpers `set_context()`, `set_templates()` ou `set_{type}_templates()` e injetamos os templates e contextos ***diretamente nas propriedades***.
:::
