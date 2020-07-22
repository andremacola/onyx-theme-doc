(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{136:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(2),a=r(6),o=(r(0),r(141)),c={id:"routes",title:"Routes",sidebar_label:"Routes"},i={id:"routes",isDocsHomePage:!1,title:"Routes",description:"The Onyx theme does not manage routes other than Controllers and Rest API Endpoints.",source:"@site/docs/routes.md",permalink:"/onyx-theme-doc/en/docs/routes",editUrl:"https://github.com/andremacola/onyx-theme-doc/edit/master/website/docs/routes.md",sidebar_label:"Routes",sidebar:"Sidebar",previous:{title:"Helper Methods",permalink:"/onyx-theme-doc/en/docs/helpers"},next:{title:"\\Onyx\\Boot",permalink:"/onyx-theme-doc/en/docs/class-boot"}},l=[],p={rightToc:l};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The Onyx theme does not manage routes other than ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"controllers"}),"Controllers")," and ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"rest"}),"Rest API Endpoints"),"."),Object(o.b)("p",null,"If you need to create custom routes for your theme or application, consider using one of the WordPress functions and filters:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.wordpress.org/reference/functions/add_rewrite_rule/"}),Object(o.b)("inlineCode",{parentName:"a"},"add_rewrite_rule()"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.wordpress.org/reference/functions/add_rewrite_tag/"}),Object(o.b)("inlineCode",{parentName:"a"},"add_rewrite_tag()"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://codex.wordpress.org/Plugin_API/Action_Reference/generate_rewrite_rules"}),Object(o.b)("inlineCode",{parentName:"a"},"generate_rewrite_rules"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://codex.wordpress.org/Plugin_API/Filter_Reference/rewrite_rules_array"}),Object(o.b)("inlineCode",{parentName:"a"},"rewrite_rules_array"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.wordpress.org/reference/hooks/template_include/"}),Object(o.b)("inlineCode",{parentName:"a"},"template_include"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://codex.wordpress.org/Plugin_API/Action_Reference/template_redirect"}),Object(o.b)("inlineCode",{parentName:"a"},"template_redirect"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://codex.wordpress.org/Plugin_API/Action_Reference/parse_request"}),Object(o.b)("inlineCode",{parentName:"a"},"parse_request"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://codex.wordpress.org/Plugin_API/Filter_Reference/request"}),Object(o.b)("inlineCode",{parentName:"a"},"request")))),Object(o.b)("p",null,"You can also use some of the solutions below:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/Upstatement/routes"}),"Upstatement/routes")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/Rareloop/router"}),"Rareloop/router")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/Brain-WP/Cortex"}),"Brain-WP/Cortex"))))}s.isMDXComponent=!0},141:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},b=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=s(r),d=n,m=b["".concat(c,".").concat(d)]||b[d]||u[d]||o;return r?a.a.createElement(m,i(i({ref:t},p),{},{components:r})):a.a.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var p=2;p<o;p++)c[p]=r[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);