(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{124:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(2),o=n(6),a=(n(0),n(141)),c={id:"styles",title:"Styles",sidebar_label:"Styles"},l={id:"styles",isDocsHomePage:!1,title:"Styles",description:"The Onyx Theme uses SASS for CSS development.",source:"@site/docs/styles.md",permalink:"/onyx-theme-doc/en/docs/styles",editUrl:"https://github.com/andremacola/onyx-theme-doc/edit/master/website/docs/styles.md",sidebar_label:"Styles",sidebar:"Sidebar",previous:{title:"Javascripts",permalink:"/onyx-theme-doc/en/docs/javascripts"},next:{title:"APP Configurations",permalink:"/onyx-theme-doc/en/docs/app"}},s=[],i={rightToc:s};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/andremacola/onyx-theme"}),"Onyx Theme")," uses ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://sass-lang.com/"}),"SASS")," for CSS development."),Object(a.b)("p",null,"The source files are located in the ",Object(a.b)("inlineCode",{parentName:"p"},"src/scss")," folder and already have an initial structure for creation that you can change according to your needs."),Object(a.b)("p",null,"To load styles from the ",Object(a.b)("inlineCode",{parentName:"p"},"node_modules")," folder, you do not need to set the full path."),Object(a.b)("p",null,"See the following example:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-scss"}),"// load style from file\n// ./node_modules/@fancyapps/fancybox/dist/jquery.fancybox.min.css\n@import '@fancyapps/fancybox/dist/jquery.fancybox.min';\n\n// load local style\n@import 'components/forms'\n")),Object(a.b)("p",null,"To load external files or add a new tag ",Object(a.b)("inlineCode",{parentName:"p"},"<link rel='stylesheet' />"),"  check the ",Object(a.b)("strong",{parentName:"p"},Object(a.b)("a",Object(r.a)({parentName:"strong"},{href:"assets"}),"Assets"))," doc section."),Object(a.b)("hr",null))}p.isMDXComponent=!0},141:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=o.a.createContext({}),p=function(e){var t=o.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(i.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,f=u["".concat(c,".").concat(d)]||u[d]||b[d]||a;return n?o.a.createElement(f,l(l({ref:t},i),{},{components:n})):o.a.createElement(f,l({ref:t},i))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var i=2;i<a;i++)c[i]=n[i];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);