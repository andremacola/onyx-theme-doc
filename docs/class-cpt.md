---
id: class-cpt
title: \Onyx\Cpt
sidebar_label: Cpt
---

## Propriedades

| Variável      | Tipo     | Descrição                                      |
|---------------|----------|------------------------------------------------|
| $key          | *string* | Guarda chave do post type                      |
| $names        | *array*  | Recebe nomes do post type (name, plural, slug) |
| $name         | *string* | Nome do post type                              |
| $plural       | *string* | Nome do post type no plural                    |
| $slug         | *string* | Slug do post type                              |
| $arguments    | *array*  | Argumentos (options) do post type              |
| $labels       | *array*  | Labels do post type                            |
| $capability   | *string* | WP Capability para o post type                 |
| $capabilities | *array*  | WP Capabilities para o post type               |
| $icon         | *string* | Ícone do post type                             |
| $columns      | *array*  | Colunas do post type                           |
| $filters      | *array*  | Filtros de select do post type                 |

---

## Métodos

### __construct()
### names()
### options()
### capability()
### capabilities()
### labels()
### icon()
### get_name()
### validate_name_params()
### create_labels()
### create_cpt_arguments()
### register_cpt()
### register()
### columns()
### manage_columns()
### custom_columns()
### sortable_columns()
### orderby_columns()
### register_columns()
### filters()
### manage_filters()
