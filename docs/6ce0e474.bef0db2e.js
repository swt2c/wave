(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{170:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return l}));var n=r(2),a=r(6),c=(r(0),r(313)),o=r(315),i={title:"Graphics / Clock",keywords:["graphics"]},s={unversionedId:"examples/graphics-clock",id:"examples/graphics-clock",isDocsHomePage:!1,title:"Graphics / Clock",description:"Use the graphics API to make a clock.",source:"@site/docs/examples/graphics-clock.md",slug:"/examples/graphics-clock",permalink:"/wave/docs/examples/graphics-clock",editUrl:"https://github.com/h2oai/wave/edit/master/website/docs/examples/graphics-clock.md",version:"current",sidebar:"someSidebar",previous:{title:"Graphics / Spline",permalink:"/wave/docs/examples/graphics-spline"},next:{title:"Graphics / Path",permalink:"/wave/docs/examples/graphics-path"}},p=[],u={rightToc:p};function l(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},u,i,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Use the graphics API to make a clock.\nSource: ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://codepen.io/dudleystorey/pen/HLBki"}),"https://codepen.io/dudleystorey/pen/HLBki")),Object(c.b)("div",{className:"cover",style:{backgroundImage:"url("+r(405).default+")"}}),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"import time\nimport datetime\nfrom h2o_wave import site, ui, graphics as g\n\npage = site['/demo']\npage['example'] = ui.graphics_card(\n    box='1 1 2 3', view_box='0 0 100 100', width='100%', height='100%',\n    stage=g.stage(\n        face=g.circle(cx='50', cy='50', r='45', fill='#111', stroke_width='2px', stroke='#f55'),\n    ),\n    scene=g.scene(\n        hour=g.rect(x='47.5', y='12.5', width='5', height='40', rx='2.5', fill='#333', stroke='#555'),\n        min=g.rect(x='48.5', y='12.5', width='3', height='40', rx='2', fill='#333', stroke='#555'),\n        sec=g.line(x1='50', y1='50', x2='50', y2='16', stroke='#f55', stroke_width='1px'),\n    ),\n)\n\npage.save()\n\n\ndef rotate(deg):\n    return f'rotate({deg} 50 50)'\n\n\nscene = page['example'].scene\nwhile True:\n    time.sleep(1)\n    now = datetime.datetime.now()\n    g.draw(scene.hour, transform=rotate(30 * (now.hour % 12) + now.minute / 2))\n    g.draw(scene.min, transform=rotate(6 * now.minute))\n    g.draw(scene.sec, transform=rotate(6 * now.second))\n    page.save()\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Tags"),": \u2002",Object(c.b)("a",{href:Object(o.a)("docs/examples/tags#graphics")},"graphics")))}l.isMDXComponent=!0},313:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(r),d=n,m=l["".concat(o,".").concat(d)]||l[d]||f[d]||c;return r?a.a.createElement(m,i(i({ref:t},p),{},{components:r})):a.a.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var p=2;p<c;p++)o[p]=r[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},314:function(e,t,r){"use strict";var n=r(0),a=r(19);t.a=function(){var e=Object(n.useContext)(a.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},315:function(e,t,r){"use strict";r.d(t,"b",(function(){return c})),r.d(t,"a",(function(){return o}));var n=r(314),a=r(316);function c(){var e=Object(n.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,c=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var c=void 0===n?{}:n,o=c.forcePrependBaseUrl,i=void 0!==o&&o,s=c.absolute,p=void 0!==s&&s;if(!r)return r;if(r.startsWith("#"))return r;if(Object(a.b)(r))return r;if(i)return t+r;var u=r.startsWith(t)?r:t+r.replace(/^\//,"");return p?e+u:u}(c,r,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,c().withBaseUrl)(e,t)}},316:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return a}))},405:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/graphics-clock-fb82cce5ac3fca365e9cd43ba116c948.png"}}]);