---
id: styles
title: Styles
sidebar_label: Styles
---

The [Onyx Theme](https://github.com/andremacola/onyx-theme) uses [SASS](https://sass-lang.com/) for CSS development.

The source files are located in the `src/scss` folder and already have an initial structure for creation that you can change according to your needs.

To load styles from the `node_modules` folder, you do not need to set the full path.

See the following example:

```scss
// load style from file
// ./node_modules/@fancyapps/fancybox/dist/jquery.fancybox.min.css
@import '@fancyapps/fancybox/dist/jquery.fancybox.min';

// load local style
@import 'components/forms'
```

To load external files or add a new tag `<link rel='stylesheet' />`  check the **[Assets](assets)** doc section.

---
