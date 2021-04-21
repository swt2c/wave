(window.webpackJsonp=window.webpackJsonp||[]).push([[218],{272:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),i=(n(0),n(313)),o={title:"Security"},c={unversionedId:"security",id:"security",isDocsHomePage:!1,title:"Security",description:"HTTPS",source:"@site/docs/security.md",slug:"/security",permalink:"/wave/docs/security",editUrl:"https://github.com/h2oai/wave/edit/master/website/docs/security.md",version:"current",sidebar:"someSidebar",previous:{title:"Graphics",permalink:"/wave/docs/graphics"},next:{title:"Logging",permalink:"/wave/docs/logging"}},l=[{value:"HTTPS",id:"https",children:[{value:"Self Signed Certificate",id:"self-signed-certificate",children:[]}]},{value:"Single Sign On",id:"single-sign-on",children:[]}],s={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"https"},"HTTPS"),Object(i.b)("p",null,"To enable HTTP over TLS to secure your Wave server, pass the following flags when starting the Wave server:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"-tls-cert-file"),": path to certificate file."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"-tls-key-file"),": path to private key file.")),Object(i.b)("h3",{id:"self-signed-certificate"},"Self Signed Certificate"),Object(i.b)("p",null,"To enable TLS during development, use a self-signed certificate."),Object(i.b)("p",null,"To create a private key and a self-signed certificate from scratch, use ",Object(i.b)("inlineCode",{parentName:"p"},"openssl"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"openssl req \\\n   -newkey rsa:2048 -nodes -keyout domain.key \\\n   -x509 -days 365 -out domain.crt\n")),Object(i.b)("p",null,"The above command creates a 2048-bit private key (",Object(i.b)("inlineCode",{parentName:"p"},"domain.key"),") and a self-signed x509 certificate (",Object(i.b)("inlineCode",{parentName:"p"},"domain.crt"),") valid for 365 days."),Object(i.b)("h2",{id:"single-sign-on"},"Single Sign On"),Object(i.b)("p",null,"Wave has built-in support for ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://openid.net/connect/"}),"OpenID Connect"),"."),Object(i.b)("p",null,"To enable OpenID Connect, pass the following flags when starting the Wave server:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"-oidc-provider-url"),": URL for authentication (the identity provider's URL)."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"-oidc-redirect-url"),": URL to redirect to after authentication. It's the address of the current instance of the Wave server + ",Object(i.b)("inlineCode",{parentName:"li"},"/_auth/callback")," e.g.: ",Object(i.b)("inlineCode",{parentName:"li"},"http://localhost:10101/_auth/callback"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"-oidc-end-session-url"),": URL to log out (refer to your identity provider's documentation). This flag is optional and might not be supported by your identity provider."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"-oidc-client-id"),": Client ID (refer to your identity provider's documentation)."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"-oidc-client-secret"),":  Client secret (refer to your identity provider's documentation).")),Object(i.b)("p",null,"Once authenticated, you can access user's authentication and authorization information from your app using ",Object(i.b)("inlineCode",{parentName:"p"},"q.auth")," (see the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"api/server#auth"}),"Auth")," class for details):"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-py"}),"from h2o_wave import Q, main, app\n\n@app('/example')\nasync def serve(q: Q):\n    print(q.auth.username)\n    print(q.auth.access_token)\n")),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(i.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Note that access token is not refreshed automatically and it's not suited for long running jobs. The lifespan of a token\ndepends on a provider settings but usually it's short. Access token is refreshed each time user performs an action i.e.\nthe query handler ",Object(i.b)("inlineCode",{parentName:"p"},"serve()")," is called."))))}p.isMDXComponent=!0},313:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(n),d=r,m=b["".concat(o,".").concat(d)]||b[d]||u[d]||i;return n?a.a.createElement(m,c(c({ref:t},s),{},{components:n})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);