(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{141:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return m}));var n=a(2),r=a(6),o=(a(0),a(146)),c={id:"images",title:"Customiza\xe7\xe3o das Thumbnails",sidebar_label:"Imagens"},i={id:"images",isDocsHomePage:!1,title:"Customiza\xe7\xe3o das Thumbnails",description:"Para registrar imagens/thumbnails com tamanhos personalizados.",source:"@site/docs/images.md",permalink:"/onyx-theme-doc/docs/images",editUrl:"https://github.com/andremacola/onyx-theme-doc/edit/master/website/docs/images.md",sidebar_label:"Imagens",sidebar:"Sidebar",previous:{title:"Configura\xe7\xe3o de Actions e Filters (Hooks)",permalink:"/onyx-theme-doc/docs/hooks"},next:{title:"Configura\xe7\xf5es para wp_mail();",permalink:"/onyx-theme-doc/docs/mail"}},l=[],b={rightToc:l};function m(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Para registrar imagens/thumbnails com tamanhos personalizados."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Param"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Tipo"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Descri\xe7\xe3o"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Obrigat\xf3rio"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"$width")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("em",{parentName:"td"},"int")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Largura da Imagem"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2714")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"$height")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("em",{parentName:"td"},"int")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Altura da Imagem"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2718")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"$crop")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"*bool"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"array*"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Crop da Imagem")))),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"return [\n  'My Custom Size' => [ 300, 200, true ],\n  'My Other Size'  => [ 500, 500, true ],\n];\n\n// carregue a imagem normalmente\nthe_post_thumbnail('My Custom Size');\n")),Object(o.b)("p",null,"Mais informa\xe7\xf5es em ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.wordpress.org/reference/functions/add_image_size/"}),"add_image_size"),"."))}m.isMDXComponent=!0},146:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),m=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=m(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),p=m(a),s=n,d=p["".concat(c,".").concat(s)]||p[s]||u[s]||o;return a?r.a.createElement(d,i(i({ref:t},b),{},{components:a})):r.a.createElement(d,i({ref:t},b))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=s;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var b=2;b<o;b++)c[b]=a[b];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"}}]);