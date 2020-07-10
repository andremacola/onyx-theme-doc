---
id: images
title: Customização das Thumbnails
sidebar_label: Imagens
---

Para registrar imagens/thumbnails com tamanhos personalizados.

| Param     | Tipo         | Descrição         | Obrigatório |
|-----------|--------------|-------------------|-------------|
| `$width`  | *int*        | Largura da Imagem | ✔           |
| `$height` | *int*        | Altura da Imagem  | ✘           |
| `$crop`   | *bool|array* | Crop da Imagem    | ✘           |

```php
return [
  'My Custom Size' => [ 300, 200, true ],
  'My Other Size'  => [ 500, 500, true ],
];

// carregue a imagem normalmente
the_post_thumbnail('My Custom Size');
```

Mais informações em [add_image_size](https://developer.wordpress.org/reference/functions/add_image_size/).
