(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{313:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var o=n(0),r=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),d=u(n),p=o,h=d["".concat(a,".").concat(p)]||d[p]||s[p]||i;return n?r.a.createElement(h,c(c({ref:t},l),{},{components:n})):r.a.createElement(h,c({ref:t},l))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},92:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return u}));var o=n(2),r=n(6),i=(n(0),n(313)),a={title:"Module h2o_wave.ui_ext"},c={unversionedId:"api/ui_ext",id:"api/ui_ext",isDocsHomePage:!1,title:"Module h2o_wave.ui_ext",description:"Functions",source:"@site/docs/api/ui_ext.md",slug:"/api/ui_ext",permalink:"/wave/docs/api/ui_ext",editUrl:"https://github.com/h2oai/wave/edit/master/website/docs/api/ui_ext.md",version:"current",sidebar:"someSidebar",previous:{title:"Module h2o_wave.ui",permalink:"/wave/docs/api/ui"},next:{title:"Module h2o_wave.server",permalink:"/wave/docs/api/server"}},b=[{value:"Functions",id:"functions",children:[{value:'box <a name="h2o_wave.ui_ext.box"/>',id:"box",children:[]},{value:'boxes <a name="h2o_wave.ui_ext.boxes"/>',id:"boxes",children:[]}]}],l={rightToc:b};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"functions"},"Functions"),Object(i.b)("div",{className:"api"},Object(i.b)("h3",{id:"box"},"box ",Object(i.b)("a",{name:"h2o_wave.ui_ext.box"})),Object(i.b)("div",{className:"api__body"},Object(i.b)("div",{className:"api__signature"},"def ",Object(i.b)("span",{class:"ident"},"box"),"(zone:\xa0str, order:\xa0Union[int,\xa0NoneType]\xa0=\xa0None, size:\xa0Union[str,\xa0int,\xa0NoneType]\xa0=\xa0None, width:\xa0Union[str,\xa0NoneType]\xa0=\xa0None, height:\xa0Union[str,\xa0NoneType]\xa0=\xa0None) \u2011>\xa0str"),Object(i.b)("div",{className:"api__description"},Object(i.b)("p",null,"Create a specification for card's ",Object(i.b)("code",null,Object(i.b)("a",{title:"h2o_wave.ui_ext.box",href:"#h2o_wave.ui_ext.box"},"box()"))," attribute. Indicates where and how to position a card."),Object(i.b)("h5",{id:"args"},"Args"),Object(i.b)("dl",null,Object(i.b)("dt",null,Object(i.b)("code",null,"zone")),Object(i.b)("dd",null,"The name of the zone to place the card in."),Object(i.b)("dt",null,Object(i.b)("code",null,"order")),Object(i.b)("dd",null,"An number that determines the position of this card relative to other cards in the same zone. Cards in the same zone are sorted in ascending ",Object(i.b)("code",null,"order")," and then placed left to right (or top to bottom)."),Object(i.b)("dt",null,Object(i.b)("code",null,"size")),Object(i.b)("dd",null,"A number that indicates the ratio of available width or height occupied by this card. Defaults to 1 if size, width and height are not provided."),Object(i.b)("dt",null,Object(i.b)("code",null,"width")),Object(i.b)("dd",null,"The width of this card, e.g. ",Object(i.b)("code",null,"200px"),", ",Object(i.b)("code",null,"50%"),", etc."),Object(i.b)("dt",null,Object(i.b)("code",null,"height")),Object(i.b)("dd",null,"The height of this card, e.g. ",Object(i.b)("code",null,"200px"),", ",Object(i.b)("code",null,"50%"),", etc.")),Object(i.b)("h5",{id:"returns"},"Returns"),Object(i.b)("p",null,"A string intended to be used as a card's ",Object(i.b)("code",null,Object(i.b)("a",{title:"h2o_wave.ui_ext.box",href:"#h2o_wave.ui_ext.box"},"box()"))," attribute.")))),Object(i.b)("div",{className:"api"},Object(i.b)("h3",{id:"boxes"},"boxes ",Object(i.b)("a",{name:"h2o_wave.ui_ext.boxes"})),Object(i.b)("div",{className:"api__body"},Object(i.b)("div",{className:"api__signature"},"def ",Object(i.b)("span",{class:"ident"},"boxes"),"(*args:\xa0str) \u2011>\xa0str"),Object(i.b)("div",{className:"api__description"},Object(i.b)("p",null,"Create a specification for card's ",Object(i.b)("code",null,Object(i.b)("a",{title:"h2o_wave.ui_ext.box",href:"#h2o_wave.ui_ext.box"},"box()"))," attribute. Indicates where and how to position a card for various layouts."),Object(i.b)("h5",{id:"args"},"Args"),Object(i.b)("dl",null,Object(i.b)("dt",null,Object(i.b)("code",null,"args")),Object(i.b)("dd",null,"Either the name of the zone to place the card in, or a specification created using the ",Object(i.b)("code",null,Object(i.b)("a",{title:"h2o_wave.ui_ext.box",href:"#h2o_wave.ui_ext.box"},"box()"))," function.")),Object(i.b)("h5",{id:"returns"},"Returns"),Object(i.b)("p",null,"A string intended to be used as a card's ",Object(i.b)("code",null,Object(i.b)("a",{title:"h2o_wave.ui_ext.box",href:"#h2o_wave.ui_ext.box"},"box()"))," attribute.")))))}u.isMDXComponent=!0}}]);