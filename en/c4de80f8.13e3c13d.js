(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{164:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(9),o=(n(0),n(179)),c={id:"install",title:"Installation",sidebar_label:"Installation"},l={id:"install",isDocsHomePage:!1,title:"Installation",description:"To install Onyx Theme download the desired version in the releases Github area or directly from main branch.",source:"@site/docs/install.md",permalink:"/onyx-theme-doc/en/docs/install",editUrl:"https://github.com/andremacola/onyx-theme-doc/edit/master/website/docs/install.md",sidebar_label:"Installation",sidebar:"Sidebar",previous:{title:"Introduction",permalink:"/onyx-theme-doc/en/docs/"},next:{title:"Configuring Gulp and LiveReload",permalink:"/onyx-theme-doc/en/docs/gulp"}},i=[{value:"Dependencies",id:"dependencies",children:[]},{value:"Step by step",id:"step-by-step",children:[]}],b={rightToc:i};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"To install ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/andremacola/onyx-theme"}),"Onyx Theme")," download the desired version in the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/andremacola/onyx-theme/releases"}),"releases")," Github area or directly from ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"Https://github.com/andremacola/onyx-theme/zipball/master"}),"main branch.")),Object(o.b)("hr",null),Object(o.b)("h2",{id:"dependencies"},"Dependencies"),Object(o.b)("p",null,"Verify that all dependencies have been installed before proceeding:"),Object(o.b)("blockquote",null,Object(o.b)("ul",{parentName:"blockquote"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://wordpress.org/"}),"WordPress")," >= 4.7"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.php.net/manual/en/install.php"}),"PHP")," >= 7.2"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://getcomposer.org/download/"}),"Composer")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://nodejs.org/"}),"Node JS")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://classic.yarnpkg.com/en/docs/install"}),"Yarn")," ^1.22.4"))),Object(o.b)("hr",null),Object(o.b)("h2",{id:"step-by-step"},"Step by step"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"1 |"))," Extract the theme files in your WordPress ",Object(o.b)("inlineCode",{parentName:"p"},"themes")," folder",Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"2 |"))," In terminal, execute the following commands:  "),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"# @ themes/onyx-theme/\ncomposer install\nyarn install\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"3 |"))," Rename the file ",Object(o.b)("inlineCode",{parentName:"p"},".env.example")," to",Object(o.b)("inlineCode",{parentName:"p"}," .env")," and update the development parameters if necessary",Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"4 |"))," Activate the theme in your WordPress dashboard",Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"5 |"))," Start the development by running the command below:  "),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"yarn serve\n")))}p.isMDXComponent=!0},179:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),s=p(n),d=r,u=s["".concat(c,".").concat(d)]||s[d]||m[d]||o;return n?a.a.createElement(u,l(l({ref:t},b),{},{components:n})):a.a.createElement(u,l({ref:t},b))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var b=2;b<o;b++)c[b]=n[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);