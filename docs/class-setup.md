---
id: class-setup
title: \Onyx\Setup
sidebar_label: Setup
---

## Proriedades

| Variável   | Tipo    | Descrição                        |
|------------|---------|----------------------------------|
| `$env`      | *array* | Variáveis de ambiente           |
| `$classes`  | *array* | Funcionalidades do APP          |
| `$assets`   | *array* | Assets do tema                  |
| `$images`   | *array* | Tamanhos de Thumbnail/Imagens   |
| `$mail`     | *array* | Consiguração do SMTP de email   |
| `$sidebars` | *array* | Registrar sidebars do WordPress |
| `$support`  | *array* | Recursos do WordPress no Tema   |
| `$cpts`     | *array* | Post types personalizados       |
| `$taxs`     | *array* | Taxonomias personalizadas       |

---
 
 ## Métodos

 ### __construct()
 ### setup()
 ### register_theme_support()
 ### register_image_sizes()
 ### register_sidebars()
 ### register_app_features()
 ### register_post_types()
 ### register_taxonomies()
 ### manage_actions()
 ### manage_filters()
 ### load_text_domain()
 ### get_hook_params()
 ### load_tests_if_exist()
 ### version()
