---
id: controllers
title: Controllers and Views
sidebar_label: Controllers
---

## Introduction

Following the pattern of ***Hierarchy of templates*** from WordPress itself [can be seen here](https://wphierarchy.com/), Onyx Theme loads its controllers according to the existence of these files followed by *suffix* `Controller` inside the `./core/app/Controllers` folder.

The controllers are responsible for making the query / queries and loading the [Views](views). You can see the **practical examples** on the controllers that accompany the theme.

:::info
In the absence of any controller above the **hierarchy**, the standard WordPress templates are loaded normally.
:::

By default the theme comes with the following controllers in the **PSR4** standard:   

- ./core/app/Controllers/
  - **ArchiveController.php**  
  - **CategoryController.php**  
  - **Error404Controller.php**: <sup>**Exclusively the 404 controller ignores the standard**</sup>
  - **HomeController.php**  
  - **PageController.php**  
  - **SearchController.php**  
  - **SingleController.php**  

---

## File naming

Following is a table with examples of naming the controllers loaded in order.

The controller files are based on the WordPress hierarchy templates and transformed according to [PSR4](https://www.php-fig.org/psr/psr-4/).

| Type       | File(s)                                                                                                                                              |
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
**Tip:** You can use **[`var_dump( O::get_hierarchy() );`](helpers/#oget_hierarchy)** to check the templates of the current page.
:::

For more information on how the WordPress hierarchy pattern works, visit [page-template-files](https://developer.wordpress.org/themes/template-files-section/page-template-files/) and [wphierarchy](https://wphierarchy.com/).

---

## Class naming

Controller classes are named according to [PSR4](https://www.php-fig.org/psr/psr-4/) related to the loaded controller files.

A table with examples of class naming follows.

| File                      | Class                |
|---------------------------|----------------------|
| HomeController.php        | HomeController       |
| SingleController.php      | SingleController     |
| SinglePostController.php  | SinglePostController |
| PageController.php        | PageController       |
| Page{$Slug}Controller.php | Page{Slug}Controller |
| CategoryController.php    | CategoryController   |

---

## Creating a controller

All controllers must extend the main `\Onyx\Controller` class and execute the `initialize()` method.

```php
namespace Onyx\Controllers;

use Onyx\Controller;

class HomeController extends Controller  {

  public function initialize() {
    // load templates
    // load Timber context
    // load desired methods
  }

}
```

---

## Views: Setting the Templates

There are 3 basic ways to call views. All files must be in the `./views/` folder.

Templates are loaded in order of existence in the hierarchy.

```php
namespace Onyx\Controllers;

use Onyx\Controller;

class PageProductController extends Controller  {

  public function initialize() {

    /*
    |--------------------------------------------------------------------------
    | Method 1: calling one of the Controller class methods
    | In this case Onyx will load the views according to the WordPress template hierarchy
    | https://developer.wordpress.org/themes/basics/template-hierarchy/
    |--------------------------------------------------------------------------
    */
    $this->set_page_templates( $prefix = 'default' );                          /* or */
    $this->set_archive_templates( $prefix = 'archive', $folder = 'pages' );    /* or */
    $this->set_post_types_templates( $prefix = 'archive', $folder = 'pages' ); /* or */
    $this->set_taxonomy_templates( $prefix = 'archive', $folder = 'pages' );

    /*
    |--------------------------------------------------------------------------
    | Method 2: Setting the templates directly in the $templates
    | with the `set_templates()` method.
    |--------------------------------------------------------------------------
    */
    $this->set_templates( [ 'pages/index.twig', 'pages/home.twig' ] );

    /*
    |--------------------------------------------------------------------------
    | Method 3: Creating a method with its own logic to change
    | the $templates property of the class.
    |--------------------------------------------------------------------------
    */
    $post = $this->get_post();
    $this->set_context( 'post', $this->get_post() ); // See more below
    $this->set_my_own_template_logic( $post );

  }

  /**
   * Set custom templates
   *
   * @param \Timber\Post $post Post Object
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

## Views: Cancel rendering

By default Controllers in *Onyx Theme* automatically render views. If you want more control over them, we can cancel the `render_view ()` method by passing a method in `initialize ()`.

```php
namespace Onyx\Controllers;

use Onyx\Controller;

class SingleController extends Controller  {

  public function initialize() {
    $this->set_page_templates( 'page' );
    $this->set_context( 'post', $this->get_post() );

    // cancel rendering
    $this->no_render();

    // render manually
    Timber::render( $this->templates, $this->context );
  }

}
```

---

## Context: Queries

Timber\Twig views work by receiving [context variables](https://timber.github.io/docs/v2/guides/context/) to render the information on the screen.

You can pass one or several queries to the context if necessary and also use the hook [`timber/context`](https://timber.github.io/docs/v2/hooks/filters/#timber/context) to review global application contexts.

In addition to queries, you can pass any type of information along with the `context` to *Timber*. As a custom field with some important information.

:::info
To learn how to use ***Twig***, visit the [Timber](https://timber.github.io/docs/v2/getting-started/a-post-archive/) or [Twig ](https://twig.symfony.com/) documentation and see the examples that come with **Onyx Theme**
:::

```php
namespace Onyx\Controllers;

use Onyx\Controller;
use Timber\PostQuery;

class ArchiveProductController extends Controller  {

  public function initialize() {

    /*
    |--------------------------------------------------------------------------
    | Choose templates
    |--------------------------------------------------------------------------
    */
    $this->templates = [ 'pages/index.twig', 'pages/home.twig' ];

    /*
    |--------------------------------------------------------------------------
    | Capture and set main query/loop context
    |--------------------------------------------------------------------------
    */
    $this->context['posts'] = $this->get_posts();

    /*
    |--------------------------------------------------------------------------
    | Consult and set context of secondary queries
    |--------------------------------------------------------------------------
    */
    $this->context['featured']    = $this->get_featured_products();
    $this->context['promotions']  = $this->get_promotions_products();

    /*
    |--------------------------------------------------------------------------
    | Send a custom field along with the context using ACF
    |--------------------------------------------------------------------------
    */
    $this->context['promotion_banner'] = get_field('promotion_banner', 'options');

  }

  /**
   * Get featured products
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
   * Get promotional products
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
In this example, we do not use the helpers `set_context ()`, `set_templates ()` or `set_{type} _templates ()` and inject the templates and contexts ***directly into the $templates property***.
:::
