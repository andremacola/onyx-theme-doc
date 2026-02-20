---
id: javascripts
title: Javascripts
sidebar_label: Javascripts
---

Use only [ES6 Modules](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/import) or CommonJS to load your dependencies. Check the `src/js/app.js` file

```js
import defaultExport from 'module-name';
// or
const myModule = require('module-name');
```

To load external files or add a new tag `<script />` check the **[Assets](assets)** doc section.

---

### Some options

|Dependency          | Install                      | Repository                                        |
|--------------------|------------------------------|---------------------------------------------------|
*jquery*             | yarn add jquery              | https://github.com/jquery/jquery                  |
*jquery-mask-plugin* | yarn add jquery-mask-plugin  | https://github.com/igorescobar/jQuery-Mask-Plugin |
*jquery fancybox*    | yarn add @fancyapps/fancybox | https://github.com/fancyapps/fancybox             |
*imask*              | yarn add imask               | https://github.com/uNmAnNeR/imaskjs               |
*tiny-slider*        | yarn add tiny-slider         | https://github.com/ganlanyuan/tiny-slider         |
*vanilla-lazyload*   | yarn add vanilla-lazyload    | https://github.com/verlok/vanilla-lazyload        |
*body-scroll-lock*   | yarn add body-scroll-lock    | https://github.com/willmcpo/body-scroll-lock      |
*object-fit-images*  | yarn add object-fit-images   | https://github.com/fregante/object-fit-images     |
