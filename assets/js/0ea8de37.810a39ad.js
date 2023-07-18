"use strict";(self.webpackChunkapio_core=self.webpackChunkapio_core||[]).push([[5317],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>b});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),u=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),h=n,b=p["".concat(s,".").concat(h)]||p[h]||d[h]||a;return r?o.createElement(b,i(i({ref:t},c),{},{components:r})):o.createElement(b,i({ref:t},c))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}h.displayName="MDXCreateElement"},34130:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var o=r(87462),n=(r(67294),r(3905));const a={sidebar_position:3},i="Bulks",l={unversionedId:"triggers/bulk",id:"triggers/bulk",title:"Bulks",description:"Bulk jobs are a way to run a workflow on a set of data. For example, you might want to send an email to all users who signed up in the last week. You can do this by creating a bulk job that runs a job on all users who signed up in the last week.",source:"@site/docs/triggers/bulk.md",sourceDirName:"triggers",slug:"/triggers/bulk",permalink:"/apio-core-docs/docs/triggers/bulk",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Scheduled jobs",permalink:"/apio-core-docs/docs/triggers/scheduled_jobs"},next:{title:"Configuration",permalink:"/apio-core-docs/docs/category/configuration"}},s={},u=[{value:"Bulk actions",id:"bulk-actions",level:2},{value:"Start a bulk job",id:"start-a-bulk-job",level:2},{value:"History",id:"history",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(p,(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"bulks"},"Bulks"),(0,n.kt)("p",null,"Bulk jobs are a way to run a workflow on a set of data. For example, you might want to send an email to all users who signed up in the last week. You can do this by creating a bulk job that runs a job on all users who signed up in the last week."),(0,n.kt)("h2",{id:"bulk-actions"},"Bulk actions"),(0,n.kt)("p",null,"Workflows are agnostic to the trigger that starts them. This means that you can create a workflow that runs on an API custom route for a single user, and then run that workflow on a set of users using a bulk job."),(0,n.kt)("p",null,"A bulk action is a configuration that maps data from the bulk job to the workflow. For example, if you want to send an email to all users who signed up in the last week, you would create a bulk action that maps the user's email to the workflow's ",(0,n.kt)("inlineCode",{parentName:"p"},"email")," input."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"new bulk action",src:r(26689).Z,width:"1216",height:"1256"})),(0,n.kt)("p",null,"A bulk action has the following properties:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Name"),": The name of the bulk action. This is used to identify the bulk action in the bulk job configuration."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Conversion option"),": a JSON object which may customize the transformation process turning the CSV => JSON (the object is passed as is to the library ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/rockwelln/csv2json"},"csv2json"),", you may refer to it as reference documentation)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Validation schema"),": a JSON object used to validate the JSON output of the transformation process "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Transformation playground"),': Help the user to tailor made the transformation / validation, the playground can be used to try the "conversion options" and "validation scheme" mentioned above on a CSV sample (headers + 1 row).'),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Type"),": Action to be triggered by the bulk job. Currently, only workflows are supported.")),(0,n.kt)("h2",{id:"start-a-bulk-job"},"Start a bulk job"),(0,n.kt)("p",null,"A new bulk job can be started by providing an input data file and a bulk action. The input data file must be a CSV file with a header row. The header row and the conversion options are used to map the data to the workflow instances."),(0,n.kt)("h2",{id:"history"},"History"),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Currently, users (if they have the proper right) can see all bulk jobs, even those created by other users. This will change in the future.")))}d.isMDXComponent=!0},26689:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/new-bulk-action-5435578bf75dae2cc9fc8dcbdb13df29.png"}}]);