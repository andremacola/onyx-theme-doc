---
id: styles
title: Estilos
sidebar_label: Estilos
---

O [Onyx Theme](https://github.com/andremacola/onyx-theme) utiliza o [SASS](https://sass-lang.com/) para desenvolvimento do CSS.

Os arquivos fontes estão localizados na pasta `src/sass` e já conta com uma estrutura inicial para criação que você pode alterar conforme as suas necessidades.

Para carregar estilos provenientes da pasta `node_modules`, você não precisa setar o caminho completo. Veja o exemplo a seguir

```scss
// carregar estilo do arquivo
// ./node_modules/@fancyapps/fancybox/dist/jquery.fancybox.min.css
@import '@fancyapps/fancybox/dist/jquery.fancybox.min';

// carregar estilo local
@import 'components/forms'
```

Para carregar arquivos externos ou adicionar uma nova tag `<link rel='stylesheet' />`  
verifique a seção de **Configurações** - [Hooks](hooks) da documentação.

---