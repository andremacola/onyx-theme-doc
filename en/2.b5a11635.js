/*! For license information please see 2.b5a11635.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{150:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(166),o=a(142),l=a(147);const s="",i="dark";var u=()=>{const{siteConfig:{themeConfig:{disableDarkMode:e}}={}}=Object(o.a)(),[t,a]=Object(n.useState)("undefined"!=typeof document?document.documentElement.getAttribute("data-theme"):s),r=Object(n.useCallback)(e=>{try{localStorage.setItem("theme",e)}catch(t){console.error(t)}},[a]),c=Object(n.useCallback)(()=>{a(s),r(s)},[]),l=Object(n.useCallback)(()=>{a(i),r(i)},[]);return Object(n.useEffect)(()=>{document.documentElement.setAttribute("data-theme",t)},[t]),Object(n.useEffect)(()=>{if(!e)try{const e=localStorage.getItem("theme");null!==e&&a(e)}catch(t){console.error(t)}},[a]),Object(n.useEffect)(()=>{e||window.matchMedia("(prefers-color-scheme: dark)").addListener(({matches:e})=>{a(e?i:s)})},[]),{isDarkTheme:t===i,setLightTheme:c,setDarkTheme:l}},d=a(167);var m=function(e){const{isDarkTheme:t,setLightTheme:a,setDarkTheme:n}=u();return r.a.createElement(d.a.Provider,{value:{isDarkTheme:t,setLightTheme:a,setDarkTheme:n}},e.children)};var h=()=>{const[e,t]=Object(n.useState)({}),a=Object(n.useCallback)((e,t)=>{try{localStorage.setItem("docusaurus.tab."+e,t)}catch(a){console.error(a)}},[]);return Object(n.useEffect)(()=>{try{const e={};for(let t=0;t<localStorage.length;t+=1){const a=localStorage.key(t);if(a.startsWith("docusaurus.tab.")){e[a.substring("docusaurus.tab.".length)]=localStorage.getItem(a)}}t(e)}catch(e){console.error(e)}},[]),{tabGroupChoices:e,setTabGroupChoices:(e,n)=>{t(t=>({...t,[e]:n})),a(e,n)}}};var f=()=>{const{siteConfig:{themeConfig:{announcementBar:{id:e}={}}}={}}=Object(o.a)(),[t,a]=Object(n.useState)(!0);return Object(n.useEffect)(()=>{if(!e)return;const t=localStorage.getItem("docusaurus.announcement.id"),n=e!==t;localStorage.setItem("docusaurus.announcement.id",e),n&&localStorage.setItem("docusaurus.announcement.dismiss",!1),(n||"false"===localStorage.getItem("docusaurus.announcement.dismiss"))&&a(!1)},[]),{isAnnouncementBarClosed:t,closeAnnouncementBar:()=>{localStorage.setItem("docusaurus.announcement.dismiss",!0),a(!0)}}},b=a(168);var p=function(e){const{tabGroupChoices:t,setTabGroupChoices:a}=h(),{isAnnouncementBarClosed:n,closeAnnouncementBar:c}=f();return r.a.createElement(b.a.Provider,{value:{tabGroupChoices:t,setTabGroupChoices:a,isAnnouncementBarClosed:n,closeAnnouncementBar:c}},e.children)},v=a(169),g=a(93),k=a.n(g);var E=function(){const{siteConfig:{themeConfig:{announcementBar:e={}}}={}}=Object(o.a)(),{content:t,backgroundColor:a,textColor:n}=e,{isAnnouncementBarClosed:c,closeAnnouncementBar:l}=Object(v.a)();return!t||c?null:r.a.createElement("div",{className:k.a.announcementBar,style:{backgroundColor:a,color:n},role:"banner"},r.a.createElement("div",{className:k.a.announcementBarContent,dangerouslySetInnerHTML:{__html:t}}),r.a.createElement("button",{type:"button",className:k.a.announcementBarClose,onClick:l,"aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7")))},O=a(2),_=a(143),j=a(145),y=(a(13),a(152)),C=a(170),w=a(94),N=a.n(w);var S=({handleSearchBarToggle:e,isSearchBarExpanded:t})=>{const[c,l]=Object(n.useState)(!1),s=Object(n.useRef)(null),{siteConfig:i={}}=Object(o.a)(),{themeConfig:{algolia:u}}=i,d=Object(y.b)(),{navigateToSearchPage:m}=Object(C.a)();const h=(e=!0)=>{c||Promise.all([Promise.all([a.e(3),a.e(39),a.e(42)]).then(a.t.bind(null,261,7)),a.e(24).then(a.t.bind(null,262,7))]).then(([{default:t}])=>{l(!0),window.docsearch=t,function(e){window.docsearch({appId:u.appId,apiKey:u.apiKey,indexName:u.indexName,inputSelector:"#search_input_react",algoliaOptions:u.algoliaOptions,autocompleteOptions:{openOnFocus:!0,autoselect:!1,hint:!1,tabAutocomplete:!1},handleSelected:(e,t,a)=>{t.stopPropagation();const n=document.createElement("a");n.href=a.url;const r="#__docusaurus"===n.hash?""+n.pathname:`${n.pathname}${n.hash}`;d.push(r)}}),e&&s.current.focus()}(e)})},f=Object(n.useCallback)(()=>{h(),c&&s.current.focus(),e(!t)},[t]),b=Object(n.useCallback)(()=>{e(!t)},[t]),p=Object(n.useCallback)(e=>{const t="mouseover"!==e.type;h(t)}),v=Object(n.useCallback)(e=>{e.defaultPrevented||"Enter"!==e.key||m(e.target.value)});return r.a.createElement("div",{className:"navbar__search",key:"search-box"},r.a.createElement("div",{className:N.a.searchWrapper},r.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:Object(_.a)(N.a.searchIconButton,{[N.a.searchIconButtonHidden]:t}),onClick:f,onKeyDown:f,tabIndex:0}),r.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:Object(_.a)("navbar__search-input",N.a.searchInput,{[N.a.searchInputExpanded]:t}),onMouseOver:p,onFocus:p,onBlur:b,onKeyDown:v,ref:s})))},T=a(199),B=a.n(T),x=a(95),L=a.n(x);const P=()=>r.a.createElement("span",{className:Object(_.a)(L.a.toggle,L.a.moon)}),M=()=>r.a.createElement("span",{className:Object(_.a)(L.a.toggle,L.a.sun)});var D=function(e){const{isClient:t}=Object(o.a)();return r.a.createElement(B.a,Object(O.a)({disabled:!t,icons:{checked:r.a.createElement(P,null),unchecked:r.a.createElement(M,null)}},e))},I=a(153);var A=function(e){const[t,a]=Object(n.useState)(e);return Object(n.useEffect)(()=>{const e=()=>a(window.location.hash);return window.addEventListener("hashchange",e),()=>window.removeEventListener("hashchange",e)},[]),[t,a]},X=a(171);var F=e=>{const[t,a]=Object(n.useState)(!0),[r,c]=Object(n.useState)(!1),[o,l]=Object(n.useState)(0),[s,i]=Object(n.useState)(0),u=Object(n.useCallback)(e=>{null!==e&&i(e.getBoundingClientRect().height)},[]),d=Object(y.c)(),[m,h]=A(d.hash);return Object(X.a)(({scrollY:t})=>{if(!e)return;if(0===t&&a(!0),t<s)return;if(r)return c(!1),a(!1),void l(t);const n=document.documentElement.scrollHeight-s,i=window.innerHeight;o&&t>=o?a(!1):t+i<n&&a(!0),l(t)},[o,s]),Object(n.useEffect)(()=>{e&&(a(!0),h(d.hash))},[d]),Object(n.useEffect)(()=>{e&&m&&c(!0)},[m]),{navbarRef:u,isNavbarVisible:t}},U=a(172),R=a(173),H=a(174),G=a(96),K=a.n(G);function $({activeBasePath:e,activeBaseRegex:t,to:a,href:n,label:c,activeClassName:o="navbar__link--active",prependBaseUrlToHref:s,...i}){const u=Object(l.a)(a),d=Object(l.a)(e),m=Object(l.a)(n,{forcePrependBaseUrl:!0});return r.a.createElement(j.a,Object(O.a)({},n?{target:"_blank",rel:"noopener noreferrer",href:s?m:n}:{isNavLink:!0,activeClassName:o,to:u,...e||t?{isActive:(e,a)=>t?new RegExp(t).test(a.pathname):a.pathname.startsWith(d)}:null},i),c)}function W({items:e,position:t="right",className:a,...n}){const c=(e,t=!1)=>Object(_.a)({"navbar__item navbar__link":!t,dropdown__link:t},e);return e?r.a.createElement("div",{className:Object(_.a)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===t,"dropdown--right":"right"===t})},r.a.createElement($,Object(O.a)({className:c(a)},n,{onClick:e=>e.preventDefault(),onKeyDown:e=>{"Enter"===e.key&&e.target.parentNode.classList.toggle("dropdown--show")}}),n.label),r.a.createElement("ul",{className:"dropdown__menu"},e.map(({className:e,...t},a)=>r.a.createElement("li",{key:a},r.a.createElement($,Object(O.a)({activeClassName:"dropdown__link--active",className:c(e,!0)},t)))))):r.a.createElement($,Object(O.a)({className:c(a)},n))}function Y({items:e,position:t,className:a,...n}){const c=(e,t=!1)=>Object(_.a)("menu__link",{"menu__link--sublist":t},e);return e?r.a.createElement("li",{className:"menu__list-item"},r.a.createElement($,Object(O.a)({className:c(a,!0)},n),n.label),r.a.createElement("ul",{className:"menu__list"},e.map(({className:e,...t},a)=>r.a.createElement("li",{className:"menu__list-item",key:a},r.a.createElement($,Object(O.a)({activeClassName:"menu__link--active",className:c(e)},t,{onClick:n.onClick})))))):r.a.createElement("li",{className:"menu__list-item"},r.a.createElement($,Object(O.a)({className:c(a)},n)))}var q=function(){const{siteConfig:{themeConfig:{navbar:{title:e,links:t=[],hideOnScroll:a=!1}={},disableDarkMode:c=!1}},isClient:l}=Object(o.a)(),[s,i]=Object(n.useState)(!1),[u,d]=Object(n.useState)(!1),{isDarkTheme:m,setLightTheme:h,setDarkTheme:f}=Object(I.a)(),{navbarRef:b,isNavbarVisible:p}=F(a),{logoLink:v,logoLinkProps:g,logoImageUrl:k,logoAlt:E}=Object(H.a)();Object(U.a)(s);const y=Object(n.useCallback)(()=>{i(!0)},[i]),C=Object(n.useCallback)(()=>{i(!1)},[i]),w=Object(n.useCallback)(e=>e.target.checked?f():h(),[h,f]),N=Object(R.a)();Object(n.useEffect)(()=>{N===R.b.desktop&&i(!1)},[N]);const{leftLinks:T,rightLinks:B}=function(e){return{leftLinks:e.filter(e=>{var t;return"left"===(null!==(t=e.position)&&void 0!==t?t:"right")}),rightLinks:e.filter(e=>{var t;return"right"===(null!==(t=e.position)&&void 0!==t?t:"right")})}}(t);return r.a.createElement("nav",{ref:b,className:Object(_.a)("navbar","navbar--light","navbar--fixed-top",{"navbar-sidebar--show":s,[K.a.navbarHideable]:a,[K.a.navbarHidden]:!p})},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},null!=t&&0!==t.length&&r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:y,onKeyDown:y},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement(j.a,Object(O.a)({className:"navbar__brand",to:v},g),null!=k&&r.a.createElement("img",{key:l,className:"navbar__logo",src:k,alt:E}),null!=e&&r.a.createElement("strong",{className:Object(_.a)("navbar__title",{[K.a.hideLogoText]:u})},e)),T.map((e,t)=>r.a.createElement(W,Object(O.a)({},e,{key:t})))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},B.map((e,t)=>r.a.createElement(W,Object(O.a)({},e,{key:t}))),!c&&r.a.createElement(D,{className:K.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:m,onChange:w}),r.a.createElement(S,{handleSearchBarToggle:d,isSearchBarExpanded:u}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:C}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(j.a,Object(O.a)({className:"navbar__brand",onClick:C,to:v},g),null!=k&&r.a.createElement("img",{key:l,className:"navbar__logo",src:k,alt:E}),null!=e&&r.a.createElement("strong",{className:"navbar__title"},e)),!c&&s&&r.a.createElement(D,{"aria-label":"Dark mode toggle in sidebar",checked:m,onChange:w})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},t.map((e,t)=>r.a.createElement(Y,Object(O.a)({},e,{onClick:C,key:t}))))))))},V=a(97),z=a.n(V);function J({to:e,href:t,label:a,prependBaseUrlToHref:n,...c}){const o=Object(l.a)(e),s=Object(l.a)(t,{forcePrependBaseUrl:!0});return r.a.createElement(j.a,Object(O.a)({className:"footer__link-item"},t?{target:"_blank",rel:"noopener noreferrer",href:n?s:t}:{to:o},c),a)}const Q=({url:e,alt:t})=>r.a.createElement("img",{className:"footer__logo",alt:t,src:e});var Z=function(){const e=Object(o.a)(),{siteConfig:t={}}=e,{themeConfig:a={}}=t,{footer:n}=a,{copyright:c,links:s=[],logo:i={}}=n||{},u=Object(l.a)(i.src);return n?r.a.createElement("footer",{className:Object(_.a)("footer",{"footer--dark":"dark"===n.style})},r.a.createElement("div",{className:"container"},s&&s.length>0&&r.a.createElement("div",{className:"row footer__links"},s.map((e,t)=>r.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?r.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.a.createElement("ul",{className:"footer__items"},e.items.map((e,t)=>e.html?r.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):r.a.createElement("li",{key:e.href||e.to,className:"footer__item"},r.a.createElement(J,e)))):null))),(i||c)&&r.a.createElement("div",{className:"text--center"},i&&i.src&&r.a.createElement("div",{className:"margin-bottom--sm"},i.href?r.a.createElement("a",{href:i.href,target:"_blank",rel:"noopener noreferrer",className:z.a.footerLogoLink},r.a.createElement(Q,{alt:i.alt,url:u})):r.a.createElement(Q,{alt:i.alt,url:u})),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:c}})))):null};a(98);t.a=function(e){const{siteConfig:t={}}=Object(o.a)(),{favicon:a,title:n,themeConfig:{image:s},url:i}=t,{children:u,title:d,noFooter:h,description:f,image:b,keywords:v,permalink:g,version:k}=e,O=d?`${d} | ${n}`:n,_=b||s,j=Object(l.a)(_,{absolute:!0}),y=Object(l.a)(a);return r.a.createElement(m,null,r.a.createElement(p,null,r.a.createElement(c.a,null,r.a.createElement("html",{lang:"en"}),O&&r.a.createElement("title",null,O),O&&r.a.createElement("meta",{property:"og:title",content:O}),a&&r.a.createElement("link",{rel:"shortcut icon",href:y}),f&&r.a.createElement("meta",{name:"description",content:f}),f&&r.a.createElement("meta",{property:"og:description",content:f}),k&&r.a.createElement("meta",{name:"docsearch:version",content:k}),v&&v.length&&r.a.createElement("meta",{name:"keywords",content:v.join(",")}),_&&r.a.createElement("meta",{property:"og:image",content:j}),_&&r.a.createElement("meta",{property:"twitter:image",content:j}),_&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+O}),g&&r.a.createElement("meta",{property:"og:url",content:i+g}),g&&r.a.createElement("link",{rel:"canonical",href:i+g}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),r.a.createElement(E,null),r.a.createElement(q,null),r.a.createElement("div",{className:"main-wrapper"},u),!h&&r.a.createElement(Z,null)))}},152:function(e,t,a){"use strict";var n=a(19);a.d(t,"a",(function(){return n.d})),a.d(t,"b",(function(){return n.e})),a.d(t,"c",(function(){return n.f}))},153:function(e,t,a){"use strict";var n=a(0),r=a(167);t.a=function(){return Object(n.useContext)(r.a)}},167:function(e,t,a){"use strict";var n=a(0);const r=a.n(n).a.createContext({isDarkTheme:!1,setLightTheme:()=>{},setDarkTheme:()=>{}});t.a=r},168:function(e,t,a){"use strict";var n=a(0);const r=Object(n.createContext)({tabGroupChoices:{},setTabGroupChoices:()=>{},isAnnouncementBarClosed:!1,closeAnnouncementBar:()=>{}});t.a=r},169:function(e,t,a){"use strict";var n=a(0),r=a(168);t.a=function(){return Object(n.useContext)(r.a)}},170:function(e,t,a){"use strict";var n=a(152),r=a(8),c=a(142);t.a=function(){const e=Object(n.b)(),t=Object(n.c)(),{siteConfig:{baseUrl:a}={}}=Object(c.a)();return{searchValue:r.a.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:a=>{const n=new URLSearchParams(t.search);a?n.set("q",a):n.delete("q"),e.replace({search:n.toString()})},navigateToSearchPage:t=>{e.push(`${a}search?q=${t}`)}}}},171:function(e,t,a){"use strict";var n=a(0),r=a(8);const c=()=>({scrollX:r.a.canUseDOM?window.pageXOffset:0,scrollY:r.a.canUseDOM?window.pageYOffset:0});t.a=(e,t=[])=>{const[a,r]=Object(n.useState)(c()),o=()=>{const t=c();r(t),e&&e(t)};return Object(n.useEffect)(()=>(window.addEventListener("scroll",o),()=>window.removeEventListener("scroll",o,{passive:!0})),t),a}},172:function(e,t,a){"use strict";var n=a(0);t.a=function(e=!0){Object(n.useEffect)(()=>(document.body.style.overflow=e?"hidden":"visible",()=>{document.body.style.overflow="visible"}),[e])}},173:function(e,t,a){"use strict";a.d(t,"b",(function(){return r}));var n=a(0);const r={desktop:"desktop",mobile:"mobile"};t.a=function(){const e="undefined"!=typeof window;function t(){if(e)return window.innerWidth>996?r.desktop:r.mobile}const[a,c]=Object(n.useState)(t);return Object(n.useEffect)(()=>{if(!e)return!1;function a(){c(t())}return window.addEventListener("resize",a),()=>window.removeEventListener("resize",a)},[]),a}},174:function(e,t,a){"use strict";var n=a(142),r=a(153),c=a(147),o=a(151);t.a=()=>{const{siteConfig:{themeConfig:{navbar:{logo:e={}}={}}}={}}=Object(n.a)(),{isDarkTheme:t}=Object(r.a)(),a=Object(c.a)(e.href||"/");let l={};e.target?l={target:e.target}:Object(o.a)(a)||(l={rel:"noopener noreferrer",target:"_blank"});const s=e.srcDark&&t?e.srcDark:e.src;return{logoLink:a,logoLinkProps:l,logoImageUrl:Object(c.a)(s),logoAlt:e.alt}}},199:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),c=a(0),o=m(c),l=m(a(200)),s=m(a(10)),i=m(a(201)),u=m(a(202)),d=a(203);function m(e){return e&&e.__esModule?e:{default:e}}var h=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handleClick=a.handleClick.bind(a),a.handleTouchStart=a.handleTouchStart.bind(a),a.handleTouchMove=a.handleTouchMove.bind(a),a.handleTouchEnd=a.handleTouchEnd.bind(a),a.handleFocus=a.handleFocus.bind(a),a.handleBlur=a.handleBlur.bind(a),a.previouslyChecked=!(!e.checked&&!e.defaultChecked),a.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var a=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:a})}},{key:"handleTouchStart",value:function(e){this.startX=(0,d.pointerCoord)(e).x,this.activated=!0}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,d.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var a=(0,d.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>a?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<a&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var a=this.props.icons;return a?void 0===a[e]?t.defaultProps.icons[e]:a[e]:null}},{key:"render",value:function(){var e=this,t=this.props,a=t.className,r=(t.icons,function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(t,["className","icons"])),c=(0,l.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},a);return o.default.createElement("div",{className:c,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},o.default.createElement("div",{className:"react-toggle-track"},o.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),o.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),o.default.createElement("div",{className:"react-toggle-thumb"}),o.default.createElement("input",n({},r,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(c.PureComponent);t.default=h,h.displayName="Toggle",h.defaultProps={icons:{checked:o.default.createElement(i.default,null),unchecked:o.default.createElement(u.default,null)}},h.propTypes={checked:s.default.bool,disabled:s.default.bool,defaultChecked:s.default.bool,onChange:s.default.func,onFocus:s.default.func,onBlur:s.default.func,className:s.default.string,name:s.default.string,value:s.default.string,id:s.default.string,"aria-labelledby":s.default.string,"aria-label":s.default.string,icons:s.default.oneOfType([s.default.bool,s.default.shape({checked:s.default.node,unchecked:s.default.node})])}},200:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var c=typeof n;if("string"===c||"number"===c)e.push(n);else if(Array.isArray(n)&&n.length){var o=r.apply(null,n);o&&e.push(o)}else if("object"===c)for(var l in n)a.call(n,l)&&n[l]&&e.push(l)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},201:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},c.default.createElement("title",null,"switch-check"),c.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},202:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},c.default.createElement("title",null,"switch-x"),c.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},203:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var a=t[0];return{x:a.clientX,y:a.clientY}}var n=e.pageX;if(void 0!==n)return{x:n,y:e.pageY}}return{x:0,y:0}}}}]);