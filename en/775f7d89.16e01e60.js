(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{156:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(9),o=(n(0),n(179)),i={id:"mail",title:"Settings for wp_mail();",sidebar_label:"Email"},c={id:"mail",isDocsHomePage:!1,title:"Settings for wp_mail();",description:"Never send emails without first configuring an SMTP server. The file ./core/config/mail.php let you register the parameters that the WordPress wp_mail() function will use. There is no need to use third party plugins except in cases of authorization via API.",source:"@site/docs/mail.md",permalink:"/onyx-theme-doc/en/docs/mail",editUrl:"https://github.com/andremacola/onyx-theme-doc/edit/master/website/docs/mail.md",sidebar_label:"Email",sidebar:"Sidebar",previous:{title:"Thumbnails Customization",permalink:"/onyx-theme-doc/en/docs/images"},next:{title:"Register Sidebars",permalink:"/onyx-theme-doc/en/docs/sidebars"}},s=[],l={rightToc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Never send emails without first configuring an SMTP server. The file ",Object(o.b)("inlineCode",{parentName:"p"},"./core/config/mail.php")," let you register the parameters that the WordPress ",Object(o.b)("inlineCode",{parentName:"p"},"wp_mail()")," function will use. There is no need to use third party plugins except in cases of authorization via API."),Object(o.b)("p",null,"PS: You need to activate the hook ",Object(o.b)("inlineCode",{parentName:"p"},"[ 'phpmailer_init', 'onyx_smtp_config' ]")," inside ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"hooks"}),"Hooks"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),"return [\n  'from'   => 'email@domain.tld',\n  'name'   => 'Client Name',\n  'host'   => 'smtp.gmail.com',\n  'port'   => 465,\n  'secure' => 'ssl',\n  'auth'   => true,\n  'user'   => 'username',\n  'pass'   => 'password',\n];\n")))}p.isMDXComponent=!0},179:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),f=r,d=u["".concat(i,".").concat(f)]||u[f]||m[f]||o;return n?a.a.createElement(d,c(c({ref:t},l),{},{components:n})):a.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);