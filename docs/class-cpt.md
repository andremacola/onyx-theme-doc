---
id: class-cpt
title: \Onyx\Cpt
sidebar_label: Cpt
---

## Properties

| Variable      | Type     | Description                                   |
|---------------|----------|-----------------------------------------------|
| $key          | *string* | Post Type key                                 |
| $names        | *array*  | Receives post type names (name, plural, slug) |
| $name         | *string* | Post type name                                |
| $plural       | *string* | Plural post type name                         |
| $slug         | *string* | Post type slug                                |
| $arguments    | *array*  | Post type arguments (options)                 |
| $labels       | *array*  | Post Type labels                              |
| $capability   | *string* | Post Type WP Capability                       |
| $capabilities | *array*  | Post Type WP Capabilities                     |
| $icon         | *string* | Post Type icon                                |
| $columns      | *array*  | Post Type custom columns                      |
| $filters      | *array*  | Select filters                                |

---

## Methods

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
