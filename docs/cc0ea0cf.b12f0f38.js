(window.webpackJsonp=window.webpackJsonp||[]).push([[204],{259:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return u})),t.d(r,"rightToc",(function(){return s})),t.d(r,"default",(function(){return l}));var n=t(2),a=t(6),o=(t(0),t(313)),i=t(315),c={title:"Form / Separator",keywords:["form","separator"]},u={unversionedId:"examples/separator",id:"examples/separator",isDocsHomePage:!1,title:"Form / Separator",description:"Use a separator to visually separate content into groups.",source:"@site/docs/examples/separator.md",slug:"/examples/separator",permalink:"/wave/docs/examples/separator",editUrl:"https://github.com/h2oai/wave/edit/master/website/docs/examples/separator.md",version:"current",sidebar:"someSidebar",previous:{title:"Form / Tabs",permalink:"/wave/docs/examples/tabs"},next:{title:"Form / File Upload",permalink:"/wave/docs/examples/file-upload"}},s=[],p={rightToc:s};function l(e){var r=e.components,c=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,c,{components:r,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Use a separator to visually separate content into groups."),Object(o.b)("div",{className:"cover",style:{backgroundImage:"url("+t(475).default+")"}}),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"from h2o_wave import site, ui\n\npage = site['/demo']\n\npage['example'] = ui.form_card(\n    box='1 1 2 5',\n    items=[\n        ui.separator(label='Separator 1'),\n        ui.text('The quick brown fox jumps over the lazy dog.'),\n        ui.separator(label='Separator 2'),\n        ui.text('The quick brown fox jumps over the lazy dog.'),\n        ui.separator(label='Separator 3'),\n        ui.text('The quick brown fox jumps over the lazy dog.'),\n    ]\n)\n\npage.save()\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Tags"),": \u2002",Object(o.b)("a",{href:Object(i.a)("docs/examples/tags#form")},"form")," \u2002",Object(o.b)("a",{href:Object(i.a)("docs/examples/tags#separator")},"separator")))}l.isMDXComponent=!0},313:function(e,r,t){"use strict";t.d(r,"a",(function(){return l})),t.d(r,"b",(function(){return d}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),p=function(e){var r=a.a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},l=function(e){var r=p(e.components);return a.a.createElement(s.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},b=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),l=p(t),b=n,d=l["".concat(i,".").concat(b)]||l[b]||f[b]||o;return t?a.a.createElement(d,c(c({ref:r},s),{},{components:t})):a.a.createElement(d,c({ref:r},s))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=b;var c={};for(var u in r)hasOwnProperty.call(r,u)&&(c[u]=r[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},314:function(e,r,t){"use strict";var n=t(0),a=t(19);r.a=function(){var e=Object(n.useContext)(a.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},315:function(e,r,t){"use strict";t.d(r,"b",(function(){return o})),t.d(r,"a",(function(){return i}));var n=t(314),a=t(316);function o(){var e=Object(n.a)().siteConfig,r=(e=void 0===e?{}:e).baseUrl,t=void 0===r?"/":r,o=e.url;return{withBaseUrl:function(e,r){return function(e,r,t,n){var o=void 0===n?{}:n,i=o.forcePrependBaseUrl,c=void 0!==i&&i,u=o.absolute,s=void 0!==u&&u;if(!t)return t;if(t.startsWith("#"))return t;if(Object(a.b)(t))return t;if(c)return r+t;var p=t.startsWith(r)?t:r+t.replace(/^\//,"");return s?e+p:p}(o,t,e,r)}}}function i(e,r){return void 0===r&&(r={}),(0,o().withBaseUrl)(e,r)}},316:function(e,r,t){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}t.d(r,"b",(function(){return n})),t.d(r,"a",(function(){return a}))},475:function(e,r,t){"use strict";t.r(r),r.default=t.p+"assets/images/separator-761eab53dd3e94f7cae3fc78ce5f36b7.png"}}]);