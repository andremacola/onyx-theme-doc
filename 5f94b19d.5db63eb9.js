(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{113:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return s}));var n=a(2),r=a(6),o=(a(0),a(146)),c={id:"hooks",title:"Configura\xe7\xe3o de Actions e Filters (Hooks)",sidebar_label:"Hooks"},i={id:"hooks",isDocsHomePage:!1,title:"Configura\xe7\xe3o de Actions e Filters (Hooks)",description:"Todos os Hooks (actions e filters) do WordPress s\xe3o registrados neste arquivo de configura\xe7\xe3o. Voc\xea pode utilizar a forma padr\xe3o do WordPress em seus arquivos por\xe9m para manter um padr\xe3o de desenvolvimento, recomendamos registrar todos os Hooks aqui.",source:"@site/docs/hooks.md",permalink:"/onyx-theme-doc/docs/hooks",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/hooks.md",sidebar_label:"Hooks",sidebar:"Sidebar",previous:{title:"Registro de Assets",permalink:"/onyx-theme-doc/docs/assets"},next:{title:"Customiza\xe7\xe3o das Thumbnails",permalink:"/onyx-theme-doc/docs/images"}},b=[{value:"Par\xe2metros",id:"par\xe2metros",children:[]},{value:"Exemplo de Uso",id:"exemplo-de-uso",children:[]},{value:"Closures",id:"closures",children:[]}],l={rightToc:b};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Todos os Hooks (actions e filters) do WordPress s\xe3o registrados neste arquivo de configura\xe7\xe3o. ",Object(o.b)("strong",{parentName:"p"},"Voc\xea pode utilizar a forma padr\xe3o do WordPress")," em seus arquivos por\xe9m para manter um padr\xe3o de desenvolvimento, recomendamos registrar todos os ",Object(o.b)("em",{parentName:"p"},"Hooks")," aqui."),Object(o.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Por favor, ",Object(o.b)("strong",{parentName:"p"},"n\xe3o adicione")," fun\xe7\xf5es neste arquivo com exce\xe7\xe3o de ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"#closures"}),"closures"),". Coloque suas fun\xe7\xf5es em algum arquivo na pasta ",Object(o.b)("inlineCode",{parentName:"p"},"./core/includes")," e fa\xe7a o require em ",Object(o.b)("inlineCode",{parentName:"p"},"functions.php"),"."))),Object(o.b)("p",null,"Este arquivo retorna um ",Object(o.b)("inlineCode",{parentName:"p"},"Array")," que \xe9 carregado no setup do tema com os seguinte par\xe2metros:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"filters"),":",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"add"),": alias para a fun\xe7\xe3o ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.wordpress.org/reference/functions/add_filter/"}),"add_filter")," do WordPress"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"remove"),": alias para a fun\xe7\xe3o ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.wordpress.org/reference/functions/remove_filter/"}),"remove_filter")," do WordPress"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"apply")))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"actions"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"add"),": alias para a fun\xe7\xe3o ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.wordpress.org/reference/functions/add_action/"}),"add_action")," do WordPress"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"remove"),": alias para a fun\xe7\xe3o ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.wordpress.org/reference/functions/remove_action/"}),"remove_action")," do WordPress")))),Object(o.b)("hr",null),Object(o.b)("h2",{id:"par\xe2metros"},"Par\xe2metros"),Object(o.b)("p",null,"O ",Object(o.b)("em",{parentName:"p"},"Array")," dos hooks carregam em ordem adicionada e recebem at\xe9 4 (quatro) par\xe2metros:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Param"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Tipo"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Descri\xe7\xe3o"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Obrigat\xf3rio"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"$tag")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("em",{parentName:"td"},"string")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"tag do Filtro/Action"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2714")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"$function_to_add")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("em",{parentName:"td"},"callable")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Fun\xe7\xe3o para chamar"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2714")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"$priority")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("em",{parentName:"td"},"int")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Prioridade (padr\xe3o: 10)"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2718")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"$accepted_args")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("em",{parentName:"td"},"int")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Quantidade de argumentos (padr\xe3o: 1)"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2718")))),Object(o.b)("h2",{id:"exemplo-de-uso"},"Exemplo de Uso"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"'filters' => [\n  ...\n  'remove' => [\n    ...\n    ['the_content', 'my_custom_filter_function', 10, 2],\n  ]\n],\n\n'actions' => [\n  ...\n  'add' => [\n    ...\n    ['wp_head', 'my_custom_action_function', 10, 2],\n  ]\n]\n")),Object(o.b)("hr",null),Object(o.b)("h2",{id:"closures"},"Closures"),Object(o.b)("p",null,"Voc\xea tamb\xe9m pode adicionar filtros ou actions utilizando uma fun\xe7\xe3o an\xf4nima."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"'filters' => [\n  ...\n  'remove' => [\n    ...\n    ['the_content', function($param1) {\n      return $param1.$param2;\n    }, 10],\n  ]\n],\n\n'actions' => [\n  ...\n  'add' => [\n    ...\n    ['wp_head', function($param1, $param2) {\n      echo \"$Param1 and $param2\";\n    }, 10, 2],\n  ]\n]\n")))}s.isMDXComponent=!0},146:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),s=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),p=s(a),m=n,u=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return a?r.a.createElement(u,i(i({ref:t},l),{},{components:a})):r.a.createElement(u,i({ref:t},l))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=m;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<o;l++)c[l]=a[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);