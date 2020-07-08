---
id: javascripts
title: Javascripts
sidebar_label: Javascripts
---

Utilize somente [ES6 Modules](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/import) ou CommonJS para carregar suas dependências. Verifique o arquivo `src/js/app.js`

```js
import defaultExport from 'module-name';
// or
const myModule = require('module-name');
```

Para carregar arquivos externos ou adicionar uma nova tag `<script />`  
verifique a seção de **Configurações** - [Hooks](hooks) da documentação.

---

### Algumas opções

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