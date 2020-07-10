(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{130:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return p})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return b}));var n=a(2),r=a(6),o=(a(0),a(146)),c={id:"install",title:"Instala\xe7\xe3o",sidebar_label:"Instala\xe7\xe3o"},p={id:"install",isDocsHomePage:!1,title:"Instala\xe7\xe3o",description:"Para Instalar o Onyx Theme baixe a vers\xe3o desejada na \xe1rea de releases do Github ou diretamente da branch principal.",source:"@site/docs/install.md",permalink:"/onyx-theme-doc/docs/install",editUrl:"https://github.com/andremacola/onyx-theme-doc/edit/master/website/docs/install.md",sidebar_label:"Instala\xe7\xe3o",sidebar:"Sidebar",previous:{title:"Introdu\xe7\xe3o",permalink:"/onyx-theme-doc/docs/"},next:{title:"Configura\xe7\xe3o do Gulp e LiveReload",permalink:"/onyx-theme-doc/docs/gulp"}},s=[{value:"Depend\xeancias",id:"depend\xeancias",children:[]},{value:"Passo a Passo",id:"passo-a-passo",children:[]}],i={rightToc:s};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Para Instalar o ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/andremacola/onyx-theme"}),"Onyx Theme")," baixe a vers\xe3o desejada na \xe1rea de ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/andremacola/onyx-theme/releases"}),"releases")," do Github ou diretamente da ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/andremacola/onyx-theme/zipball/master"}),"branch principal.")),Object(o.b)("hr",null),Object(o.b)("h2",{id:"depend\xeancias"},"Depend\xeancias"),Object(o.b)("p",null,"Verifique se todas as depend\xeancias foram instaladas antes de prosseguir:"),Object(o.b)("blockquote",null,Object(o.b)("ul",{parentName:"blockquote"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://wordpress.org/"}),"WordPress")," >= 4.7"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.php.net/manual/en/install.php"}),"PHP")," >= 7.2"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://getcomposer.org/download/"}),"Composer")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://nodejs.org/"}),"Node JS")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://classic.yarnpkg.com/en/docs/install"}),"Yarn")," ^1.22.4"))),Object(o.b)("hr",null),Object(o.b)("h2",{id:"passo-a-passo"},"Passo a Passo"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"1 |"))," Extraia os arquios do tema na pasta ",Object(o.b)("inlineCode",{parentName:"p"},"themes")," do seu WordPress",Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"2 |"))," Em seu terminal execute os seguinte comandos:  "),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# @ themes/onyx-theme/\ncomposer install\nyarn install\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"3 |"))," Renomeie o arquivo da pasta ",Object(o.b)("inlineCode",{parentName:"p"},"core/conf/app.example.php")," para ",Object(o.b)("inlineCode",{parentName:"p"},"core/conf/app.php")," e atualize as informa\xe7\xf5es caso necess\xe1rio",Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"4 |"))," Renomeie o arquivo da pasta ",Object(o.b)("inlineCode",{parentName:"p"},".env.example")," para ",Object(o.b)("inlineCode",{parentName:"p"},".env")," e atualize as informa\xe7\xf5es de desenvolvimento local caso necess\xe1rio",Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"5 |"))," Ative o tema em seu painel do WordPress",Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"6 |"))," Inicie o desenvolvimento rodando o comando abaixo:  "),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"yarn serve\n")))}b.isMDXComponent=!0},146:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createContext({}),b=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},l=function(e){var t=b(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),l=b(a),d=n,u=l["".concat(c,".").concat(d)]||l[d]||m[d]||o;return a?r.a.createElement(u,p(p({ref:t},i),{},{components:a})):r.a.createElement(u,p({ref:t},i))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:n,c[1]=p;for(var i=2;i<o;i++)c[i]=a[i];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);