(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{107:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return s}));var n=r(2),a=r(6),o=(r(0),r(313)),i=r(315),c={title:"Plot / Interval / Theta",keywords:["interval","plot"]},l={unversionedId:"examples/plot-interval-theta",id:"examples/plot-interval-theta",isDocsHomePage:!1,title:"Plot / Interval / Theta",description:'Make a "racetrack" plot (a bar plot in polar coordinates, transposed).',source:"@site/docs/examples/plot-interval-theta.md",slug:"/examples/plot-interval-theta",permalink:"/wave/docs/examples/plot-interval-theta",editUrl:"https://github.com/h2oai/wave/edit/master/website/docs/examples/plot-interval-theta.md",version:"current",sidebar:"someSidebar",previous:{title:"Plot / Interval / Polar / Stacked",permalink:"/wave/docs/examples/plot-interval-polar-stacked"},next:{title:"Plot / Interval / Helix",permalink:"/wave/docs/examples/plot-interval-helix"}},u=[],p={rightToc:u};function s(e){var t=e.components,c=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,c,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,'Make a "racetrack" plot (a bar plot in polar coordinates, transposed).'),Object(o.b)("div",{className:"cover",style:{backgroundImage:"url("+r(364).default+")"}}),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"from synth import FakeMultiCategoricalSeries\nfrom h2o_wave import site, data, ui\n\npage = site['/demo']\n\nn = 10\nk = 5\nf = FakeMultiCategoricalSeries(groups=k)\nv = page.add('example', ui.plot_card(\n    box='1 1 4 5',\n    title='Intervals, theta, stacked',\n    data=data('country product price', n * k),\n    plot=ui.plot([\n        ui.mark(coord='theta', type='interval', x='=product', y='=price', color='=country', stack='auto', y_min=0)])\n))\nv.data = [(g, t, x) for x in [f.next() for _ in range(n)] for g, t, x, dx in x]\n\npage.save()\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Tags"),": \u2002",Object(o.b)("a",{href:Object(i.a)("docs/examples/tags#interval")},"interval")," \u2002",Object(o.b)("a",{href:Object(i.a)("docs/examples/tags#plot")},"plot")))}s.isMDXComponent=!0},313:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return v}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(r),f=n,v=s["".concat(i,".").concat(f)]||s[f]||d[f]||o;return r?a.a.createElement(v,c(c({ref:t},u),{},{components:r})):a.a.createElement(v,c({ref:t},u))}));function v(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},314:function(e,t,r){"use strict";var n=r(0),a=r(19);t.a=function(){var e=Object(n.useContext)(a.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},315:function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return i}));var n=r(314),a=r(316);function o(){var e=Object(n.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var o=void 0===n?{}:n,i=o.forcePrependBaseUrl,c=void 0!==i&&i,l=o.absolute,u=void 0!==l&&l;if(!r)return r;if(r.startsWith("#"))return r;if(Object(a.b)(r))return r;if(c)return t+r;var p=r.startsWith(t)?r:t+r.replace(/^\//,"");return u?e+p:p}(o,r,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},316:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return a}))},364:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/plot-interval-theta-ecd6315a48713f45d162e64c4414325c.png"}}]);