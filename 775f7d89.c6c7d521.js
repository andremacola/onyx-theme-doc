(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{124:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return c})),t.d(r,"rightToc",(function(){return s})),t.d(r,"default",(function(){return l}));var n=t(2),a=t(6),o=(t(0),t(152)),i={id:"mail",title:"Configura\xe7\xf5es para wp_mail();",sidebar_label:"Email"},c={id:"mail",isDocsHomePage:!1,title:"Configura\xe7\xf5es para wp_mail();",description:"Nunca envie emails sem antes configurar um servidor SMTP. No arquivo ./core/config/mail.php voc\xea registra os par\xe2metros que a fun\xe7\xe3o wp_mail() do WordPress ir\xe1 utilizar. N\xe3o h\xe1 necessidade usar plugins de terceiros salvo em casos de autoriza\xe7\xe3o via API.",source:"@site/docs/mail.md",permalink:"/onyx-theme-doc/docs/mail",editUrl:"https://github.com/andremacola/onyx-theme-doc/edit/master/website/docs/mail.md",sidebar_label:"Email",sidebar:"Sidebar",previous:{title:"Customiza\xe7\xe3o das Thumbnails",permalink:"/onyx-theme-doc/docs/images"},next:{title:"Registro de Sidebars",permalink:"/onyx-theme-doc/docs/sidebars"}},s=[],p={rightToc:s};function l(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Nunca envie emails sem antes configurar um servidor SMTP. No arquivo ",Object(o.b)("inlineCode",{parentName:"p"},"./core/config/mail.php")," voc\xea registra os par\xe2metros que a fun\xe7\xe3o ",Object(o.b)("inlineCode",{parentName:"p"},"wp_mail()")," do WordPress ir\xe1 utilizar. N\xe3o h\xe1 necessidade usar plugins de terceiros salvo em casos de autoriza\xe7\xe3o via API."),Object(o.b)("p",null,"OBS: Voc\xea precisa ativar o hook ",Object(o.b)("inlineCode",{parentName:"p"},"[ 'phpmailer_init', 'onyx_smtp_config' ]")," dentro dos ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"hooks"}),"Hooks"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"return [\n  'from'   => 'email@domain.tld',\n  'name'   => 'Client Name',\n  'host'   => 'smtp.gmail.com',\n  'port'   => 465,\n  'secure' => 'ssl',\n  'auth'   => true,\n  'user'   => 'username',\n  'pass'   => 'password',\n];\n")))}l.isMDXComponent=!0},152:function(e,r,t){"use strict";t.d(r,"a",(function(){return u})),t.d(r,"b",(function(){return f}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),l=function(e){var r=a.a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},u=function(e){var r=l(e.components);return a.a.createElement(p.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},d=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(t),d=n,f=u["".concat(i,".").concat(d)]||u[d]||m[d]||o;return t?a.a.createElement(f,c(c({ref:r},p),{},{components:t})):a.a.createElement(f,c({ref:r},p))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=d;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<o;p++)i[p]=t[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);