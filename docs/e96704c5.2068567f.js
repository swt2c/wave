(window.webpackJsonp=window.webpackJsonp||[]).push([[231],{285:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return s}));var n=r(2),a=r(6),o=(r(0),r(313)),i=r(315),c={title:"Plot / Interval / Helix",keywords:["interval","plot"]},l={unversionedId:"examples/plot-interval-helix",id:"examples/plot-interval-helix",isDocsHomePage:!1,title:"Plot / Interval / Helix",description:"Make a bar plot in helical coordinates.",source:"@site/docs/examples/plot-interval-helix.md",slug:"/examples/plot-interval-helix",permalink:"/wave/docs/examples/plot-interval-helix",editUrl:"https://github.com/h2oai/wave/edit/master/website/docs/examples/plot-interval-helix.md",version:"current",sidebar:"someSidebar",previous:{title:"Plot / Interval / Theta",permalink:"/wave/docs/examples/plot-interval-theta"},next:{title:"Plot / Interval / Annotation",permalink:"/wave/docs/examples/plot-interval-annotation"}},u=[],p={rightToc:u};function s(e){var t=e.components,c=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,c,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Make a bar plot in helical coordinates."),Object(o.b)("div",{className:"cover",style:{backgroundImage:"url("+r(489).default+")"}}),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"from synth import FakeCategoricalSeries\nfrom h2o_wave import site, data, ui\n\npage = site['/demo']\n\nn = 200\nf = FakeCategoricalSeries()\nv = page.add('example', ui.plot_card(\n    box='1 1 4 5',\n    title='Interval, helix',\n    data=data('product price', n),\n    plot=ui.plot([ui.mark(coord='helix', type='interval', x='=product', y='=price', y_min=0)])\n))\nv.data = [(c, x) for c, x, dx in [f.next() for _ in range(n)]]\n\npage.save()\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Tags"),": \u2002",Object(o.b)("a",{href:Object(i.a)("docs/examples/tags#interval")},"interval")," \u2002",Object(o.b)("a",{href:Object(i.a)("docs/examples/tags#plot")},"plot")))}s.isMDXComponent=!0},313:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(r),d=n,b=s["".concat(i,".").concat(d)]||s[d]||f[d]||o;return r?a.a.createElement(b,c(c({ref:t},u),{},{components:r})):a.a.createElement(b,c({ref:t},u))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},314:function(e,t,r){"use strict";var n=r(0),a=r(19);t.a=function(){var e=Object(n.useContext)(a.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},315:function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return i}));var n=r(314),a=r(316);function o(){var e=Object(n.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var o=void 0===n?{}:n,i=o.forcePrependBaseUrl,c=void 0!==i&&i,l=o.absolute,u=void 0!==l&&l;if(!r)return r;if(r.startsWith("#"))return r;if(Object(a.b)(r))return r;if(c)return t+r;var p=r.startsWith(t)?r:t+r.replace(/^\//,"");return u?e+p:p}(o,r,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},316:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return a}))},489:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/plot-interval-helix-b499f18c451e87aa39d64ca154a15bdf.png"}}]);