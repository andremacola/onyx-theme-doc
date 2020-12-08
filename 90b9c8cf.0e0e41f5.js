(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{111:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,d=u["".concat(c,".").concat(m)]||u[m]||b[m]||o;return n?a.a.createElement(d,s(s({ref:t},l),{},{components:n})):a.a.createElement(d,s({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var l=2;l<o;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},92:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(111)),c={id:"styles",title:"Estilos",sidebar_label:"Estilos"},s={unversionedId:"styles",id:"styles",isDocsHomePage:!1,title:"Estilos",description:"O Onyx Theme utiliza o SASS para desenvolvimento do CSS.",source:"@site/docs/styles.md",slug:"/styles",permalink:"/onyx-theme-doc/docs/styles",editUrl:"https://github.com/andremacola/onyx-theme-doc/edit/master/website/docs/styles.md",version:"current",sidebar_label:"Estilos",sidebar:"Sidebar",previous:{title:"Javascripts",permalink:"/onyx-theme-doc/docs/javascripts"},next:{title:"Configura\xe7\xf5es de ambiente APP",permalink:"/onyx-theme-doc/docs/environment"}},i=[],l={rightToc:i};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"O ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/andremacola/onyx-theme"}),"Onyx Theme")," utiliza o ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://sass-lang.com/"}),"SASS")," para desenvolvimento do CSS."),Object(o.b)("p",null,"Os arquivos fontes est\xe3o localizados na pasta ",Object(o.b)("inlineCode",{parentName:"p"},"src/sass")," e j\xe1 conta com uma estrutura inicial para cria\xe7\xe3o que voc\xea pode alterar conforme as suas necessidades."),Object(o.b)("p",null,"Para carregar estilos provenientes da pasta ",Object(o.b)("inlineCode",{parentName:"p"},"node_modules"),", voc\xea n\xe3o precisa setar o caminho completo."),Object(o.b)("p",null,"Veja o exemplo a seguir:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-scss"}),"// carregar estilo do arquivo\n// ./node_modules/@fancyapps/fancybox/dist/jquery.fancybox.min.css\n@import '@fancyapps/fancybox/dist/jquery.fancybox.min';\n\n// carregar estilo local\n@import 'components/forms'\n")),Object(o.b)("p",null,"Para carregar arquivos externos ou adicionar uma nova tag ",Object(o.b)("inlineCode",{parentName:"p"},"<link rel='stylesheet' />"),Object(o.b)("br",{parentName:"p"}),"\n","verifique a se\xe7\xe3o de ",Object(o.b)("strong",{parentName:"p"},"Configura\xe7\xf5es")," - ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"assets"}),"Assets")," da documenta\xe7\xe3o."),Object(o.b)("hr",null))}p.isMDXComponent=!0}}]);