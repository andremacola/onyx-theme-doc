---
id: images
title: Thumbnails Customization
sidebar_label: Images
---

Use `./core/config/images.php` to register custom fizes for images/thumbnails.

| Param     | Type         | Description  | Required |
|-----------|--------------|--------------|----------|
| `$width`  | *int*        | Image width  | ✔        |
| `$height` | *int*        | Image height | ✘        |
| `$crop`   | *bool/array* | Image crop   | ✘        |

```php
return [
  'My Custom Size' => [ 300, 200, true ],
  'My Other Size'  => [ 500, 500, true ],
];

// load the image normally
the_post_thumbnail('My Custom Size');
```

More info: [add_image_size](https://developer.wordpress.org/reference/functions/add_image_size/).
