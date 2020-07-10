---
id: sidebars
title: Registro de Sidebars
sidebar_label: Sidebars
---

Criação de Sidebars personalizadas para uso em *Aparências -> Widgets* e no front-end em `./core/config/sidebars.php`

---

## Parâmetros

| Param            | Tipo     | Descrição                                            | Obrigatório |
|------------------|----------|------------------------------------------------------|-------------|
| `$name`          | *string* | Padrão: $name                                        | ✔           |
| `$id`            | *bool*   | Padrão: $id                                          | ✘           |
| `$description`   | *string* | Padrão: ' '                                          | ✘           |
| `$class`         | *bool*   | Padrão: widget-$id                                   | ✘           |
| `$before_widget` | *string* | Padrão: &lt;div id="%1$s" class="side-section %2$s"> | ✘           |
| `$after_widget`  | *bool*   | Padrão: &lt;/div>                                    | ✘           |
| `$before_title`  | *string* | Padrão: &lt;h6 class='side-title'>                   | ✘           |
| `$after_title`   | *bool*   | Padrão: &lt;/h6>                                     | ✘           |

Somente o parâmetro **name é obrigatório**.

---

## Exemplo de Uso

```php
return [
  [
    'name' => 'Sidebar',
  ],
  [
    'name'        => 'My Other Sidebar',
    'description' => 'This is my other sidebar',
    'class'       => "my-custom-class widget-$id"
  ],
];
```
