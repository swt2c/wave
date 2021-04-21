(window.webpackJsonp=window.webpackJsonp||[]).push([[167],{221:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(2),a=r(6),o=(r(0),r(313)),i={title:"Introduction",slug:"/guide"},c={unversionedId:"guide",id:"guide",isDocsHomePage:!1,title:"Introduction",description:"Welcome to the H2O Wave Guide! If you prefer to learn concepts step by step, you've come to the right place.",source:"@site/docs/guide.md",slug:"/guide",permalink:"/wave/docs/guide",editUrl:"https://github.com/h2oai/wave/edit/master/website/docs/guide.md",version:"current",sidebar:"someSidebar",previous:{title:"Tutorial: Todo List",permalink:"/wave/docs/tutorial-todo"},next:{title:"Architecture",permalink:"/wave/docs/architecture"}},s=[{value:"Before you start",id:"before-you-start",children:[]},{value:"Who is this for?",id:"who-is-this-for",children:[]}],u={rightToc:s};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Welcome to the H2O Wave Guide! If you prefer to learn concepts step by step, you've come to the right place. "),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"If you haven't already, it's worthwhile reading the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/wave/docs/getting-started"}),"Getting Started")," page, which offers a 5-minute overview of what H2O Wave is all about."))),Object(o.b)("h2",{id:"before-you-start"},"Before you start"),Object(o.b)("p",null,"If you prefer to learn by doing, ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/wave/docs/tutorial-hello"}),"start with our tutorials")," - they're short and simple, illustrate the most important concepts in a beginner-friendly way, and are the best way to get hands-on with Wave. Like any unfamiliar technology, Wave has a slight learning curve, but you will get the hang of it with practice and patience. "),Object(o.b)("h2",{id:"who-is-this-for"},"Who is this for?"),Object(o.b)("p",null,"This documentation assumes that you have some familiarity with the Python programming language. You don't have to be an expert, but it might be harder to learn both Wave and Python at the same time."),Object(o.b)("p",null,"If you already know Python, but have no experience authoring web apps, you'll probably find Wave a fun and easy way to get started, without the hassle of learning HTML, CSS, Javascript and client-server programming."),Object(o.b)("p",null,"If you have some experience building web apps using Python (or even other languages), you'll find that Wave offers an approach quite different from traditional client-server or request-reply programming. The mental model is much simpler, functional (in the functional programming sense), and lets you reason about your code in terms of a single tier (server-only) as opposed to two tiers (client and server). Additionally, Wave offers straightforward ways to integrate realtime features into your apps using the same programming model."))}l.isMDXComponent=!0},313:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),m=n,b=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return r?a.a.createElement(b,c(c({ref:t},u),{},{components:r})):a.a.createElement(b,c({ref:t},u))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);