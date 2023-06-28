"use strict";(self.webpackChunkapio_core=self.webpackChunkapio_core||[]).push([[7775],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),d=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(r),b=a,m=u["".concat(c,".").concat(b)]||u[b]||p[b]||o;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},7857:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:2},i="Scheduled jobs",l={unversionedId:"triggers/scheduled_jobs",id:"triggers/scheduled_jobs",title:"Scheduled jobs",description:"A scheduled job is a job that is executed periodically. It is used to execute a task periodically. (e.g reporting, data synchronization, etc.)",source:"@site/docs/triggers/scheduled_jobs.md",sourceDirName:"triggers",slug:"/triggers/scheduled_jobs",permalink:"/apio-core-docs/docs/triggers/scheduled_jobs",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Custom routes",permalink:"/apio-core-docs/docs/triggers/custom_routes"},next:{title:"Configuration",permalink:"/apio-core-docs/docs/category/configuration"}},c={},d=[{value:"Definition",id:"definition",level:2}],s={toc:d},u="wrapper";function p(e){let{components:t,...o}=e;return(0,a.kt)(u,(0,n.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"scheduled-jobs"},"Scheduled jobs"),(0,a.kt)("p",null,"A scheduled job is a job that is executed periodically. It is used to execute a task periodically. (e.g reporting, data synchronization, etc.)"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Scheduled jobs have no owner user. They are executed by the system.")),(0,a.kt)("h2",{id:"definition"},"Definition"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Scheduled job definition",src:r(7517).Z,width:"605",height:"586"})),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Job id"),(0,a.kt)("td",{parentName:"tr",align:null},"The id of the job. It is used to identify the job.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Enabled"),(0,a.kt)("td",{parentName:"tr",align:null},"If the job is enabled, it will be executed periodically.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Scheduler entry"),(0,a.kt)("td",{parentName:"tr",align:null},"The expression that defines when the job is executed.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Activity"),(0,a.kt)("td",{parentName:"tr",align:null},"The activity that is executed by the job.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Request body"),(0,a.kt)("td",{parentName:"tr",align:null},"The request body of the activity.")))))}p.isMDXComponent=!0},7517:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/new-scheduled-job-9a7bd5a32f254f4ec941e499113a7aac.png"}}]);