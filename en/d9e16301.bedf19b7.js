(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{133:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return u}));var n=r(2),o=r(6),a=(r(0),r(141)),c={id:"support",title:"Theme Features",sidebar_label:"Theme Features"},i={id:"support",isDocsHomePage:!1,title:"Theme Features",description:"Use ./core/config/support.php to add or remove WordPress theme feature. More informantion: addthemesupport.",source:"@site/docs/support.md",permalink:"/onyx-theme-doc/en/docs/support",editUrl:"https://github.com/andremacola/onyx-theme-doc/edit/master/website/docs/support.md",sidebar_label:"Theme Features",sidebar:"Sidebar",previous:{title:"Register Sidebars",permalink:"/onyx-theme-doc/en/docs/sidebars"},next:{title:"Post Types Personalizados",permalink:"/onyx-theme-doc/en/docs/cpts"}},p=[],s={rightToc:p};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Use ",Object(a.b)("inlineCode",{parentName:"p"},"./core/config/support.php")," to add or remove WordPress theme feature. More informantion: ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.wordpress.org/reference/functions/add_theme_support/"}),"add_theme_support"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"return [\n\n  /*\n  |--------------------------------------------------------------------------\n  | WORDPRESS FEATURES SUPPORT\n  |--------------------------------------------------------------------------\n  */\n  'menus',\n  'post-thumbnails',\n  'automatic-feed-links',\n  'title-tag',\n  'custom-logo',\n\n  /*\n  |--------------------------------------------------------------------------\n  | GUTENBERG SUPPORT\n  |--------------------------------------------------------------------------\n  */\n  'editor-styles',\n  'wp-block-styles',\n  'align-wide',\n  'responsive-embeds',\n\n];\n")))}u.isMDXComponent=!0},141:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),l=u(r),m=n,f=l["".concat(c,".").concat(m)]||l[m]||d[m]||a;return r?o.a.createElement(f,i(i({ref:t},s),{},{components:r})):o.a.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<a;s++)c[s]=r[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);