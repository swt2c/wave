(window.webpackJsonp=window.webpackJsonp||[]).push([[207],{261:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),o=(n(0),n(313)),i=n(315),u={title:"Uploads / UI",keywords:["form","upload"]},c={unversionedId:"examples/upload-ui",id:"examples/upload-ui",isDocsHomePage:!1,title:"Uploads / UI",description:"Accept files from the user.",source:"@site/docs/examples/upload-ui.md",slug:"/examples/upload-ui",permalink:"/wave/docs/examples/upload-ui",editUrl:"https://github.com/h2oai/wave/edit/master/website/docs/examples/upload-ui.md",version:"current",sidebar:"someSidebar",previous:{title:"Uploads / Async",permalink:"/wave/docs/examples/upload-async"},next:{title:"Uploads / Download",permalink:"/wave/docs/examples/upload-download"}},l=[],s={rightToc:l};function p(e){var t=e.components,u=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,u,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Accept files from the user."),Object(o.b)("div",{className:"cover",style:{backgroundImage:"url("+n(501).default+")"}}),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-py"}),"import os\nfrom h2o_wave import main, app, Q, ui\nimport os.path\n\n\ndef make_link_list(links):\n    # Make a markdown list of links.\n    return '\\n'.join([f'- [{os.path.basename(link)}]({link})' for link in links])\n\n\n@app('/demo')\nasync def serve(q: Q):\n    if q.args.user_files:\n        q.page['example'].items = [\n            ui.text_xl('Files uploaded!'),\n            ui.text(make_link_list(q.args.user_files)),\n            ui.button(name='back', label='Back', primary=True),\n        ]\n    else:\n        q.page['example'] = ui.form_card(box='1 1 4 10', items=[\n            ui.text_xl('Upload some files'),\n            ui.file_upload(name='user_files', label='Upload', multiple=True),\n        ])\n    await q.page.save()\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Tags"),": \u2002",Object(o.b)("a",{href:Object(i.a)("docs/examples/tags#form")},"form")," \u2002",Object(o.b)("a",{href:Object(i.a)("docs/examples/tags#upload")},"upload")))}p.isMDXComponent=!0},313:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},p=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,m=p["".concat(i,".").concat(d)]||p[d]||f[d]||o;return n?a.a.createElement(m,u(u({ref:t},l),{},{components:n})):a.a.createElement(m,u({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},314:function(e,t,n){"use strict";var r=n(0),a=n(19);t.a=function(){var e=Object(r.useContext)(a.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},315:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));var r=n(314),a=n(316);function o(){var e=Object(r.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,i=o.forcePrependBaseUrl,u=void 0!==i&&i,c=o.absolute,l=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(u)return t+n;var s=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+s:s}(o,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},316:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))},501:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/upload-ui-ce3af4e53ce2d7a546aa933667f7758a.png"}}]);