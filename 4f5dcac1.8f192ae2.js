(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{112:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return l}));var n=a(2),r=a(6),c=(a(0),a(147)),b={id:"assets",title:"Registro de Assets",sidebar_label:"Assets"},s={id:"assets",isDocsHomePage:!1,title:"Registro de Assets",description:"Para adicionar Javascripts e Estilos utilize este arquivo ./core/config/assets.php. \xc9 recomend\xe1vel gerenciar suas dependencias pelo Gulp e n\xe3o pelas fun\xe7\xf5es wp\\_enqueue\\_ do WordPress",source:"@site/docs/assets.md",permalink:"/onyx-theme-doc/docs/assets",editUrl:"https://github.com/andremacola/onyx-theme-doc/edit/master/website/docs/assets.md",sidebar_label:"Assets",sidebar:"Sidebar",previous:{title:"Configura\xe7\xf5es do APP",permalink:"/onyx-theme-doc/docs/app"},next:{title:"Configura\xe7\xe3o de Actions e Filters (Hooks)",permalink:"/onyx-theme-doc/docs/hooks"}},i=[{value:"Adicionar CSS",id:"adicionar-css",children:[]},{value:"Adicionar Javascript",id:"adicionar-javascript",children:[]}],o={rightToc:i};function l(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Para adicionar Javascripts e Estilos utilize este arquivo ",Object(c.b)("inlineCode",{parentName:"p"},"./core/config/assets.php"),". \xc9 recomend\xe1vel gerenciar suas dependencias pelo ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"gulp"}),"Gulp")," e n\xe3o pelas fun\xe7\xf5es ",Object(c.b)("em",{parentName:"p"},"wp","_","enqueue","_")," do WordPress"),Object(c.b)("hr",null),Object(c.b)("h2",{id:"adicionar-css"},"Adicionar CSS"),Object(c.b)("p",null,"O ",Object(c.b)("em",{parentName:"p"},"Array")," de estilos carrega na ordem adicionada e recebe 2 (dois) par\xe2metros:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Param"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Tipo"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Descri\xe7\xe3o"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Obrigat\xf3rio"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"$css")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("em",{parentName:"td"},"string")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Caminho ou URL do css"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2714")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"$home")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("em",{parentName:"td"},"bool")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Aparecer somente na Home"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2718")))),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php",metastring:"{9}","{9}":!0}),"/*\n|--------------------------------------------------------------------------\n| LOAD CSS\n|--------------------------------------------------------------------------\n*/\n'css' => [\n  [ 'assets/css/main.css' ],\n  [ 'assets/css/home.css', true ],\n  [ 'assets/css/myCustomStyle.css'],\n  [ 'https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.13/css/select2.min.css' ],\n],\n")),Object(c.b)("hr",null),Object(c.b)("h2",{id:"adicionar-javascript"},"Adicionar Javascript"),Object(c.b)("p",null,"O ",Object(c.b)("em",{parentName:"p"},"Array")," de javascript carrega na ordem adicionada e recebe 2 (dois) par\xe2metros:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Param"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Tipo"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Descri\xe7\xe3o"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Obrigat\xf3rio"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"$js")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("em",{parentName:"td"},"string")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Caminho ou URL do javascript"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2714")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"$home")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("em",{parentName:"td"},"bool")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Aparecer somente na Home"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2718")))),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php",metastring:"{9}","{9}":!0}),"/*\n|--------------------------------------------------------------------------\n| LOAD JAVASCRIPTS\n|--------------------------------------------------------------------------\n*/\n'js'  => [\n  [ 'https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.13/js/select2.min.js' ],\n  [ 'assets/js/app.min.js' ],\n  [ 'assets/js/home.min.js', true ],\n  [ 'assets/js/myCustomScript.js'],\n],\n")))}l.isMDXComponent=!0},147:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),l=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=l(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,b=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),p=l(a),m=n,u=p["".concat(b,".").concat(m)]||p[m]||d[m]||c;return a?r.a.createElement(u,s(s({ref:t},o),{},{components:a})):r.a.createElement(u,s({ref:t},o))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,b=new Array(c);b[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,b[1]=s;for(var o=2;o<c;o++)b[o]=a[o];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);