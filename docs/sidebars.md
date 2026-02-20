---
id: sidebars
title: Register Sidebars
sidebar_label: Sidebars
---

Register custom Sidebars for *Appearances -> Widgets* with this file `./core/config/sidebars.php`

---

## Parameters

| Param            | Type     | Description                                            | Required |
|------------------|----------|------------------------------------------------------|-------------|
| `$name`          | *string* | Default: $name                                        | ✔           |
| `$id`            | *bool*   | Default: $id                                          | ✘           |
| `$description`   | *string* | Default: ' '                                          | ✘           |
| `$class`         | *bool*   | Default: widget-$id                                   | ✘           |
| `$before_widget` | *string* | Default: &lt;div id="%1$s" class="side-section %2$s"> | ✘           |
| `$after_widget`  | *bool*   | Default: &lt;/div>                                    | ✘           |
| `$before_title`  | *string* | Default: &lt;h6 class='side-title'>                   | ✘           |
| `$after_title`   | *bool*   | Default: &lt;/h6>                                     | ✘           |

Somente o parâmetro **name é obrigatório**.

---

## Example of use

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
