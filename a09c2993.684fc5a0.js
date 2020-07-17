(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{132:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return s}));var a=n(2),r=n(6),o=(n(0),n(152)),i={id:"introduction",title:"Introdu\xe7\xe3o",sidebar_label:"Introdu\xe7\xe3o"},c={id:"introduction",isDocsHomePage:!0,title:"Introdu\xe7\xe3o",description:"O Onyx Theme tem um modo espec\xedfico de funcionamento e estrutura de pastas. Ele n\xe3o segue a estrutura padr\xe3o de desenvolvimento do WordPress.",source:"@site/docs/introduction.md",permalink:"/onyx-theme-doc/docs/",editUrl:"https://github.com/andremacola/onyx-theme-doc/edit/master/website/docs/introduction.md",sidebar_label:"Introdu\xe7\xe3o",sidebar:"Sidebar",next:{title:"Instala\xe7\xe3o",permalink:"/onyx-theme-doc/docs/install"}},b=[{value:"Estrutura de Pastas",id:"estrutura-de-pastas",children:[]},{value:"Timber",id:"timber",children:[]},{value:"Projetos Utilizando",id:"projetos-utilizando",children:[]}],l={rightToc:b};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"O ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/andremacola/onyx-theme"}),"Onyx Theme")," tem um modo espec\xedfico de funcionamento e estrutura de pastas. Ele n\xe3o segue a estrutura padr\xe3o de desenvolvimento do WordPress."),Object(o.b)("p",null,"Todos as queries e templates ",Object(o.b)("strong",{parentName:"p"},"s\xe3o gerenciados")," pelos ",Object(o.b)("inlineCode",{parentName:"p"},"controllers"),"/",Object(o.b)("inlineCode",{parentName:"p"},"timber")," que relacionam com as ",Object(o.b)("inlineCode",{parentName:"p"},"views"),". Veja mais informa\xe7\xf5es em ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"views"}),"Views"),"."),Object(o.b)("p",null,"Nenhuma depend\xeancia al\xe9m do Timber \xe9 requerida. Todo o funcionamento do Onyx se mant\xe9m nas ",Object(o.b)("strong",{parentName:"p"},"bases originais")," do WordPress."),Object(o.b)("hr",null),Object(o.b)("h2",{id:"estrutura-de-pastas"},"Estrutura de Pastas"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"core/"))," - ",Object(o.b)("sup",null,"\xc9 onde reside toda a estrutura principal do tema")),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"./app")," - ",Object(o.b)("sup",null,"Classes para funcionamento do tema"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"./Api")," - ",Object(o.b)("sup",null,"Controllers dos endpoints da WP REST API")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"./Controllers")," - ",Object(o.b)("sup",null,"Controllers das requisi\xe7\xf5es")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"./Onyx")," - ",Object(o.b)("sup",null,"Classes do Onyx")))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"./config")," - ",Object(o.b)("sup",null,"Reside todas as principais configura\xe7\xf5es de funcionamento do seu projeto.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"./includes")," - ",Object(o.b)("sup",null,"Suas fun\xe7\xf5es e classes pr\xf3prias.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"./lang")," - ",Object(o.b)("sup",null,"Tradu\xe7\xf5es")))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"src/"))," - ",Object(o.b)("sup",null,"Arquivos fontes para estilos e javascripts.")),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"./sass")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"./js")))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"views/"))," - ",Object(o.b)("sup",null,"Templates Twig")))),Object(o.b)("hr",null),Object(o.b)("h2",{id:"timber"},"Timber"),Object(o.b)("p",null,"Todos os templates s\xe3o criados utilizando o ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://twig.symfony.com/"}),"Twig")," por meio do plugin ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.upstatement.com/timber/"}),"Timber"),". Para ter mais informa\xe7\xf5es e uma documenta\xe7\xe3o mais detalhada sobre o Timber/Twig ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},Object(o.b)("a",Object(a.a)({parentName:"em"},{href:"https://timber.github.io/docs/v2/"}),"acesse este link.")))),Object(o.b)("p",null,"O ",Object(o.b)("em",{parentName:"p"},"Onyx theme")," possui controladores em cima do ",Object(o.b)("em",{parentName:"p"},"Timber"),", ent\xe3o antes de consultar a documenta\xe7\xe3o do Timber, verifique se as classes e m\xe9todos utilizados pelo Onyx atendem as suas necessidades."),Object(o.b)("h2",{id:"projetos-utilizando"},"Projetos Utilizando"),Object(o.b)("p",null,"Alguns projetos que utilizam o ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/andremacola/onyx-theme"}),"Onyx Theme")," como principal ferramenta de produ\xe7\xe3o."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://oimparcial.com.br/"}),"O Imparcial")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.rofedistribuidora.com.br/"}),"Rofe Distribuidora")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://linharesjr.com"}),"Linhares Jr")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"http://grupodimensao.com/"}),"Grupo Dimens\xe3o")," (legacy version)"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://jornalpequeno.com.br/"}),"Jornal Pequeno")," (legacy version)")))}s.isMDXComponent=!0},152:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),s=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,d=p["".concat(i,".").concat(m)]||p[m]||u[m]||o;return n?r.a.createElement(d,c(c({ref:t},l),{},{components:n})):r.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);