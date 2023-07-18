"use strict";(self.webpackChunkapio_core=self.webpackChunkapio_core||[]).push([[6516],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>f});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",v={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(o),d=r,f=u["".concat(l,".").concat(d)]||u[d]||v[d]||i;return o?n.createElement(f,a(a({ref:t},p),{},{components:o})):n.createElement(f,a({ref:t},p))}));function f(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,a[1]=s;for(var c=2;c<i;c++)a[c]=o[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},17474:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>v,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=o(87462),r=(o(67294),o(3905));const i={sidebar_position:3},a="Versions",s={unversionedId:"workflows/advanced/versioning",id:"workflows/advanced/versioning",title:"Versions",description:"It can be useful to keep track of the different versions of a workflow. For example, you might want to keep a version of a workflow that is currently in production or which you are certain it is working, and a version that is being tested.",source:"@site/docs/workflows/advanced/versioning.md",sourceDirName:"workflows/advanced",slug:"/workflows/advanced/versioning",permalink:"/apio-core-docs/docs/workflows/advanced/versioning",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Entities",permalink:"/apio-core-docs/docs/workflows/advanced/entities"},next:{title:"Triggers",permalink:"/apio-core-docs/docs/category/triggers"}},l={},c=[{value:"Create a version",id:"create-a-version",level:2},{value:"Naming a version",id:"naming-a-version",level:3},{value:"Activate a version",id:"activate-a-version",level:2},{value:"Rename or delete a version",id:"rename-or-delete-a-version",level:2}],p={toc:c},u="wrapper";function v(e){let{components:t,...o}=e;return(0,r.kt)(u,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"versions"},"Versions"),(0,r.kt)("p",null,"It can be useful to keep track of the different versions of a workflow. For example, you might want to keep a version of a workflow that is currently in production or which you are certain it is working, and a version that is being tested."),(0,r.kt)("p",null,"A version is a snapshot of a workflow and it cannot be modified. It can be used to create a new workflow, or to restore a previous version of a workflow."),(0,r.kt)("p",null,"A workflow has always one and only version that is active. This is the version that is used when the workflow is triggered."),(0,r.kt)("p",null,"The active version of the working version (the only version that can be modified) are not necessarily the same. For example, you might want to work on a new version of a workflow while the previous version is still active."),(0,r.kt)("h2",{id:"create-a-version"},"Create a version"),(0,r.kt)("p",null,"In the workflow editor, on the current working version, click on the button ",(0,r.kt)("inlineCode",{parentName:"p"},"Commit"),", choose a name and a description."),(0,r.kt)("h3",{id:"naming-a-version"},"Naming a version"),(0,r.kt)("p",null,"Despite there is no restriction on the name of a version, it is recommended to use a naming convention that allows you to easily identify the version."),(0,r.kt)("p",null,"For example, you might want to use the following convention:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<product-API-name>-<semver-version-number>\n")),(0,r.kt)("h2",{id:"activate-a-version"},"Activate a version"),(0,r.kt)("p",null,"In the workflow editor, on the version you want to activate, click on the button ",(0,r.kt)("inlineCode",{parentName:"p"},"Activate"),"."),(0,r.kt)("p",null,"The next instance of the workflow will use this version."),(0,r.kt)("h2",{id:"rename-or-delete-a-version"},"Rename or delete a version"),(0,r.kt)("p",null,"In the workflow editor, on the bottom of the page, you can see a list of all the versions of the workflow."),(0,r.kt)("p",null,"You can rename or delete a version by clicking on the corresponding button on the right."))}v.isMDXComponent=!0}}]);