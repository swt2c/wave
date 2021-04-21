(window.webpackJsonp=window.webpackJsonp||[]).push([[142],{197:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return b}));var a=n(2),r=n(6),o=(n(0),n(313)),i={title:"Migrating from 0.8"},c={unversionedId:"migrating-0-8",id:"migrating-0-8",isDocsHomePage:!1,title:"Migrating from 0.8",description:"H2O Wave v0.9.0+ introduces significant improvements to application performance and concurrency, and brings us closer to a v1.0 release. v1.0 will include the ability to increase the number of worker processes to scale apps, while preserving the simplicity of the Wave API.",source:"@site/docs/migrating-0-8.md",slug:"/migrating-0-8",permalink:"/wave/docs/migrating-0-8",editUrl:"https://github.com/h2oai/wave/edit/master/website/docs/migrating-0-8.md",version:"current",sidebar:"someSidebar",previous:{title:"Change Log",permalink:"/wave/docs/change-log"},next:{title:"Migrating from pre-alpha",permalink:"/wave/docs/migrating-0"}},p=[{value:"ASGI Compatibility",id:"asgi-compatibility",children:[{value:"Old way",id:"old-way",children:[]},{value:"New way",id:"new-way",children:[]}]}],l={rightToc:p};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"H2O Wave v0.9.0+ introduces significant improvements to application performance and concurrency, and brings us closer to a v1.0 release. v1.0 will include the ability to increase the number of worker processes to scale apps, while preserving the simplicity of the Wave API."),Object(o.b)("p",null,"Among other changes, the Wave server executable ",Object(o.b)("inlineCode",{parentName:"p"},"wave")," is now called ",Object(o.b)("inlineCode",{parentName:"p"},"waved")," (or ",Object(o.b)("inlineCode",{parentName:"p"},"waved.exe"),"), and the ",Object(o.b)("inlineCode",{parentName:"p"},"h2o-wave")," Python package ships with a new CLI named ",Object(o.b)("inlineCode",{parentName:"p"},"wave"),"."),Object(o.b)("h2",{id:"asgi-compatibility"},"ASGI Compatibility"),Object(o.b)("p",null,"Wave apps are now ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://asgi.readthedocs.io/en/latest/"}),"ASGI"),"-compatible, based on the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.techempower.com/benchmarks/#section=data-r17&hw=ph&test=fortune&l=zijzen-1"}),"high-performance")," ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.uvicorn.org"}),"Uvicorn")," / ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.starlette.io/"}),"Starlette")," duo."),Object(o.b)("p",null,"You can run Wave apps behind any ASGI server, like ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.uvicorn.org"}),"uvicorn"),", ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://gunicorn.org/"}),"gunicorn"),", ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/django/daphne/"}),"daphne"),", ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://pgjones.gitlab.io/hypercorn/"}),"hypercorn"),", etc."),Object(o.b)("h3",{id:"old-way"},"Old way"),Object(o.b)("p",null,"In versions <= v0.8.0, a skeleton app looked like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python",metastring:'title="foo.py"',title:'"foo.py"'}),"from h2o_wave import listen, Q\n\nasync def serve(q: Q):\n    pass\n\nlisten('/demo', serve)\n")),Object(o.b)("p",null,"The above app could be run like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"(venv) $ python foo.py\n")),Object(o.b)("h3",{id:"new-way"},"New way"),Object(o.b)("p",null,"In versions v0.9.0+, a skeleton app looks like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python",metastring:'{1,3} title="foo.py"',"{1,3}":!0,title:'"foo.py"'}),"from h2o_wave import main, app, Q\n\n@app('/demo')\nasync def serve(q: Q):\n    pass\n")),Object(o.b)("p",null,"Notably:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"listen(route)")," has been replaced by an ",Object(o.b)("inlineCode",{parentName:"li"},"@app(route)")," decorator on the ",Object(o.b)("inlineCode",{parentName:"li"},"serve()")," function."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"main")," needs to be imported into the file (but you don't have to do anything with the symbol ",Object(o.b)("inlineCode",{parentName:"li"},"main")," other than simply ",Object(o.b)("inlineCode",{parentName:"li"},"import")," it).")),Object(o.b)("p",null,"The above app can be run using ",Object(o.b)("inlineCode",{parentName:"p"},"wave run"),", built into the new ",Object(o.b)("inlineCode",{parentName:"p"},"wave")," command line interface. "),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"(venv) $ wave run foo\n")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"wave run")," command runs your app using live-reload, which means you can view your changes live as you code, without having to refresh your browser manually."),Object(o.b)("p",null,"To run your app without live-reload, simply pass ",Object(o.b)("inlineCode",{parentName:"p"},"--no-reload"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"(venv) $ wave run --no-reload foo\n")),Object(o.b)("p",null,"To run your app using an ASGI server like uvicorn, append ",Object(o.b)("inlineCode",{parentName:"p"},":main")," to the ",Object(o.b)("inlineCode",{parentName:"p"},"app")," argument:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"(venv) $ uvicorn foo:main\n")))}b.isMDXComponent=!0},313:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=b(n),m=a,d=s["".concat(i,".").concat(m)]||s[m]||u[m]||o;return n?r.a.createElement(d,c(c({ref:t},l),{},{components:n})):r.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);