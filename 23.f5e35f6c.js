(window.webpackJsonp=window.webpackJsonp||[]).push([[23,24],{123:function(e,t,a){"use strict";a.r(t);a(12);var n=a(0),r=a.n(n),l=a(129),o=a(126),s=a(46),c=a(131),i=a(2),u=a(127),m=a(142),p=a(145),d=a(146),h=a(147),y=a(144),b=a(128),g=a(138),f=a(105),v=a.n(f);const k=(e,t)=>"link"===e.type?((e,t)=>{const a=e=>e.endsWith("/")?e:e+"/";return a(e)===a(t)})(e.href,t):"category"===e.type&&e.items.some(e=>k(e,t));function j({item:e,onItemClick:t,collapsible:a,activePath:l,...o}){const{items:s,label:c}=e,m=k(e,l),p=function(e){const t=Object(n.useRef)(e);return Object(n.useEffect)(()=>{t.current=e},[e]),t.current}(m),[d,h]=Object(n.useState)(()=>!!a&&(!m&&e.collapsed));Object(n.useEffect)(()=>{m&&!p&&d&&h(!1)},[m,p,d]);const y=Object(n.useCallback)(e=>{e.preventDefault(),h(e=>!e)},[h]);return 0===s.length?null:r.a.createElement("li",{className:Object(u.a)("menu__list-item",{"menu__list-item--collapsed":d}),key:c},r.a.createElement("a",Object(i.a)({className:Object(u.a)("menu__link",{"menu__link--sublist":a,"menu__link--active":a&&m,[v.a.menuLinkText]:!a}),onClick:a?y:void 0,href:a?"#!":void 0},o),c),r.a.createElement("ul",{className:"menu__list"},s.map(e=>r.a.createElement(O,{tabIndex:d?"-1":"0",key:e.label,item:e,onItemClick:t,collapsible:a,activePath:l}))))}function E({item:e,onItemClick:t,activePath:a,collapsible:n,...l}){const{href:o,label:s}=e,c=k(e,a);return r.a.createElement("li",{className:"menu__list-item",key:s},r.a.createElement(b.a,Object(i.a)({className:Object(u.a)("menu__link",{"menu__link--active":c}),to:o},Object(g.a)(o)?{isNavLink:!0,exact:!0,onClick:t}:{target:"_blank",rel:"noreferrer noopener"},l),s))}function O(e){switch(e.item.type){case"category":return r.a.createElement(j,e);case"link":default:return r.a.createElement(E,e)}}var N=function(e){const[t,a]=Object(n.useState)(!1),{siteConfig:{themeConfig:{navbar:{title:l,hideOnScroll:s=!1}={}}}={},isClient:c}=Object(o.a)(),{logoLink:g,logoLinkProps:f,logoImageUrl:k,logoAlt:j}=Object(h.a)(),{isAnnouncementBarClosed:E}=Object(m.a)(),{scrollY:N}=Object(y.a)(),{docsSidebars:C,path:x,sidebar:w,sidebarCollapsible:_}=e;Object(p.a)(t);const P=Object(d.a)();if(Object(n.useEffect)(()=>{P===d.b.desktop&&a(!1)},[P]),!w)return null;const S=C[w];if(!S)throw new Error(`Cannot find the sidebar "${w}" in the sidebar config!`);return r.a.createElement("div",{className:Object(u.a)(v.a.sidebar,{[v.a.sidebarWithHideableNavbar]:s})},s&&r.a.createElement(b.a,Object(i.a)({tabIndex:"-1",className:v.a.sidebarLogo,to:g},f),null!=k&&r.a.createElement("img",{key:c,src:k,alt:j}),null!=l&&r.a.createElement("strong",null,l)),r.a.createElement("div",{className:Object(u.a)("menu","menu--responsive",v.a.menu,{"menu--show":t,[v.a.menuWithAnnouncementBar]:!E&&0===N})},r.a.createElement("button",{"aria-label":t?"Close Menu":"Open Menu","aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:()=>{a(!t)}},t?r.a.createElement("span",{className:Object(u.a)(v.a.sidebarMenuIcon,v.a.sidebarMenuCloseIcon)},"\xd7"):r.a.createElement("svg",{"aria-label":"Menu",className:v.a.sidebarMenuIcon,xmlns:"http://www.w3.org/2000/svg",height:24,width:24,viewBox:"0 0 32 32",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement("ul",{className:"menu__list"},S.map(e=>r.a.createElement(O,{key:e.label,item:e,onItemClick:e=>{e.target.blur(),a(!1)},collapsible:_,activePath:x})))))},C=a(135),x=a(139),w=a(143),_=a(106),P=a.n(_);t.default=function(e){const{route:t,docsMetadata:a,location:n}=e,i=t.routes.find(e=>Object(w.a)(n.pathname,e))||{},{permalinkToSidebar:u,docsSidebars:m,version:p}=a,d=u[i.path],{siteConfig:{themeConfig:h={}}={},isClient:y}=Object(o.a)(),{sidebarCollapsible:b=!0}=h;return 0===Object.keys(i).length?r.a.createElement(x.default,e):r.a.createElement(c.a,{version:p,key:y},r.a.createElement("div",{className:P.a.docPage},d&&r.a.createElement("div",{className:P.a.docSidebarContainer,role:"complementary"},r.a.createElement(N,{docsSidebars:m,path:i.path,sidebar:d,sidebarCollapsible:b})),r.a.createElement("main",{className:P.a.docMainContainer},r.a.createElement(l.a,{components:C.a},Object(s.a)(t.routes)))))}},133:function(e,t,a){"use strict";const n=(e,{target:t=document.body}={})=>{const a=document.createElement("textarea"),n=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";const r=document.getSelection();let l=!1;r.rangeCount>0&&(l=r.getRangeAt(0)),t.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;let o=!1;try{o=document.execCommand("copy")}catch(s){}return a.remove(),l&&(r.removeAllRanges(),r.addRange(l)),n&&n.focus(),o};e.exports=n,e.exports.default=n},134:function(e,t){e.exports.parse=function(e){var t=e.split(",").map((function(e){return function(e){if(/^-?\d+$/.test(e))return parseInt(e,10);var t;if(t=e.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){var a=t[1],n=t[2],r=t[3];if(a&&r){var l=[],o=(a=parseInt(a))<(r=parseInt(r))?1:-1;"-"!=n&&".."!=n&&"\u2025"!=n||(r+=o);for(var s=a;s!=r;s+=o)l.push(s);return l}}return[]}(e)}));return 0===t.length?[]:1===t.length?Array.isArray(t[0])?t[0]:t:t.reduce((function(e,t){return Array.isArray(e)||(e=[e]),Array.isArray(t)||(t=[t]),e.concat(t)}))}},135:function(e,t,a){"use strict";var n=a(2),r=a(0),l=a.n(r),o=a(128),s=a(127),c={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},i={Prism:a(35).a,theme:c};function u(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var p=/\r\n|\r|\n/,d=function(e){0===e.length?e.push({types:["plain"],content:"",empty:!0}):1===e.length&&""===e[0].content&&(e[0].empty=!0)},h=function(e,t){var a=e.length;return a>0&&e[a-1]===t?e:e.concat(t)},y=function(e,t){var a=e.plain,n=Object.create(null),r=e.styles.reduce((function(e,a){var n=a.languages,r=a.style;return n&&!n.includes(t)||a.types.forEach((function(t){var a=m({},e[t],r);e[t]=a})),e}),n);return r.root=a,r.plain=m({},a,{backgroundColor:null}),r};function b(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}var g=function(e){function t(){for(var t=this,a=[],n=arguments.length;n--;)a[n]=arguments[n];e.apply(this,a),u(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var a=e.theme?y(e.theme,e.language):void 0;return t.themeDict=a})),u(this,"getLineProps",(function(e){var a=e.key,n=e.className,r=e.style,l=m({},b(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),o=t.getThemeDict(t.props);return void 0!==o&&(l.style=o.plain),void 0!==r&&(l.style=void 0!==l.style?m({},l.style,r):r),void 0!==a&&(l.key=a),n&&(l.className+=" "+n),l})),u(this,"getStyleForToken",(function(e){var a=e.types,n=e.empty,r=a.length,l=t.getThemeDict(t.props);if(void 0!==l){if(1===r&&"plain"===a[0])return n?{display:"inline-block"}:void 0;if(1===r&&!n)return l[a[0]];var o=n?{display:"inline-block"}:{},s=a.map((function(e){return l[e]}));return Object.assign.apply(Object,[o].concat(s))}})),u(this,"getTokenProps",(function(e){var a=e.key,n=e.className,r=e.style,l=e.token,o=m({},b(e,["key","className","style","token"]),{className:"token "+l.types.join(" "),children:l.content,style:t.getStyleForToken(l),key:void 0});return void 0!==r&&(o.style=void 0!==o.style?m({},o.style,r):r),void 0!==a&&(o.key=a),n&&(o.className+=" "+n),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,a=e.language,n=e.code,r=e.children,l=this.getThemeDict(this.props),o=t.languages[a];return r({tokens:function(e){for(var t=[[]],a=[e],n=[0],r=[e.length],l=0,o=0,s=[],c=[s];o>-1;){for(;(l=n[o]++)<r[o];){var i=void 0,u=t[o],m=a[o][l];if("string"==typeof m?(u=o>0?u:["plain"],i=m):(u=h(u,m.type),m.alias&&(u=h(u,m.alias)),i=m.content),"string"==typeof i){var y=i.split(p),b=y.length;s.push({types:u,content:y[0]});for(var g=1;g<b;g++)d(s),c.push(s=[]),s.push({types:u,content:y[g]})}else o++,t.push(u),a.push(i),n.push(0),r.push(i.length)}o--,t.pop(),a.pop(),n.pop(),r.pop()}return d(s),c}(void 0!==o?t.tokenize(n,o,a):[n]),className:"prism-code language-"+a,style:void 0!==l?l.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component),f=a(133),v=a.n(f),k=a(134),j=a.n(k),E=a(126),O={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},N=a(132);var C=()=>{const{siteConfig:{themeConfig:{prism:e={}}}}=Object(E.a)(),{isDarkTheme:t}=Object(N.a)(),a=e.theme||O,n=e.darkTheme||a;return t?n:a},x=a(92),w=a.n(x);const _=/{([\d,-]+)}/,P=(e=["js","jsBlock","jsx","python","html"])=>{const t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},a=["highlight-next-line","highlight-start","highlight-end"].join("|"),n=e.map(e=>`(?:${t[e].start}\\s*(${a})\\s*${t[e].end})`).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)},S=/title=".*"/;var T=({children:e,className:t,metastring:a})=>{const{siteConfig:{themeConfig:{prism:o={}}}}=Object(E.a)(),[c,u]=Object(r.useState)(!1),[m,p]=Object(r.useState)(!1);Object(r.useEffect)(()=>{p(!0)},[]);const d=Object(r.useRef)(null);let h=[],y="";const b=C();if(a&&_.test(a)){const e=a.match(_)[1];h=j.a.parse(e).filter(e=>e>0)}a&&S.test(a)&&(y=a.match(S)[0].split("title=")[1].replace(/"+/g,""));let f=t&&t.replace(/language-/,"");!f&&o.defaultLanguage&&(f=o.defaultLanguage);let k=e.replace(/\n$/,"");if(0===h.length&&void 0!==f){let t="";const a=(e=>{switch(e){case"js":case"javascript":case"ts":case"typescript":return P(["js","jsBlock"]);case"jsx":case"tsx":return P(["js","jsBlock","jsx"]);case"html":return P(["js","jsBlock","html"]);case"python":case"py":return P(["python"]);default:return P()}})(f),n=e.replace(/\n$/,"").split("\n");let r;for(let e=0;e<n.length;){const l=e+1,o=n[e].match(a);if(null!==o){switch(o.slice(1).reduce((e,t)=>e||t,void 0)){case"highlight-next-line":t+=l+",";break;case"highlight-start":r=l;break;case"highlight-end":t+=`${r}-${l-1},`}n.splice(e,1)}else e+=1}h=j.a.parse(t),k=n.join("\n")}const O=()=>{v()(k),u(!0),setTimeout(()=>u(!1),2e3)};return l.a.createElement(g,Object(n.a)({},i,{key:m,theme:b,code:k,language:f}),({className:e,style:t,tokens:a,getLineProps:r,getTokenProps:o})=>l.a.createElement(l.a.Fragment,null,y&&l.a.createElement("div",{style:t,className:w.a.codeBlockTitle},y),l.a.createElement("div",{className:w.a.codeBlockContent},l.a.createElement("button",{ref:d,type:"button","aria-label":"Copy code to clipboard",className:Object(s.a)(w.a.copyButton,{[w.a.copyButtonWithTitle]:y}),onClick:O},c?"Copied":"Copy"),l.a.createElement("div",{tabIndex:"0",className:Object(s.a)(e,w.a.codeBlock,{[w.a.codeBlockWithTitle]:y})},l.a.createElement("div",{className:w.a.codeBlockLines,style:t},a.map((e,t)=>{1===e.length&&""===e[0].content&&(e[0].content="\n");const a=r({line:e,key:t});return h.includes(t+1)&&(a.className=a.className+" docusaurus-highlight-code-line"),l.a.createElement("div",Object(n.a)({key:t},a),e.map((e,t)=>l.a.createElement("span",Object(n.a)({key:t},o({token:e,key:t})))))}))))))},L=(a(93),a(94)),B=a.n(L);var I=e=>function({id:t,...a}){const{siteConfig:{themeConfig:{navbar:{hideOnScroll:n=!1}={}}={}}={}}=Object(E.a)();return t?l.a.createElement(e,a,l.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:Object(s.a)("anchor",{[B.a.enhancedAnchor]:!n}),id:t}),a.children,l.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:"hash-link",href:"#"+t,title:"Direct link to heading"},"#")):l.a.createElement(e,a)},A=a(95),M=a.n(A);t.a={code:e=>{const{children:t}=e;return"string"==typeof t?t.includes("\n")?l.a.createElement(T,e):l.a.createElement("code",e):t},a:e=>/\.[^./]+$/.test(e.href)?l.a.createElement("a",e):l.a.createElement(o.a,e),pre:e=>l.a.createElement("div",Object(n.a)({className:M.a.mdxCodeBlock},e)),h1:I("h1"),h2:I("h2"),h3:I("h3"),h4:I("h4"),h5:I("h5"),h6:I("h6")}},139:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(131);t.default=function(){return r.a.createElement(l.a,{title:"Page Not Found"},r.a.createElement("div",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--6 col--offset-3"},r.a.createElement("h1",{className:"hero__title"},"Page Not Found"),r.a.createElement("p",null,"We could not find what you were looking for."),r.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}}}]);