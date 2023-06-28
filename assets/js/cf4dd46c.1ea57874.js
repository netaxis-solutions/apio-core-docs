"use strict";(self.webpackChunkapio_core=self.webpackChunkapio_core||[]).push([[175],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),f=r,h=u["".concat(l,".").concat(f)]||u[f]||d[f]||a;return n?o.createElement(h,i(i({ref:t},p),{},{components:n})):o.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7669:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const a={sidebar_position:9},i="SSO",s={unversionedId:"configuration/sso",id:"configuration/sso",title:"SSO",description:"APIO core supports SSO (Single Sign-On) via a bunch of protocols.",source:"@site/docs/configuration/sso.md",sourceDirName:"configuration",slug:"/configuration/sso",permalink:"/apio-core-docs/docs/configuration/sso",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Password",permalink:"/apio-core-docs/docs/configuration/password"},next:{title:"Logs",permalink:"/apio-core-docs/docs/category/logs"}},l={},c=[{value:"Login page",id:"login-page",level:2},{value:"Extra rules",id:"extra-rules",level:2},{value:"User creation rules",id:"user-creation-rules",level:2},{value:"Protocols",id:"protocols",level:2},{value:"OpenID Connect",id:"openid-connect",level:3},{value:"SAML",id:"saml",level:3},{value:"Webseal",id:"webseal",level:3},{value:"Soap Token",id:"soap-token",level:3},{value:"Broadsoft",id:"broadsoft",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"sso"},"SSO"),(0,r.kt)("p",null,"APIO core supports SSO (Single Sign-On) via a bunch of protocols."),(0,r.kt)("p",null,"Single sign-on (SSO) is an authentication scheme that allows a user to log in with a single ID and password to any of several related, yet independent, software systems. True single sign-on allows the user to log in once and access services without re-entering authentication factors."),(0,r.kt)("p",null,"It allows users to authenticate themselves on one platform and then use the same credentials to access other platforms within the same organization. So they don't need to be provisioned or authenticated on each platform."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"SSO common",src:n(4874).Z,width:"906",height:"569"})),(0,r.kt)("h2",{id:"login-page"},"Login page"),(0,r.kt)("p",null,"The login page may display an SSO button to allow users to login via SSO if the provider entry is configured."),(0,r.kt)("p",null,"The button label is ",(0,r.kt)("inlineCode",{parentName:"p"},"Login with ")," followed by the name of the provider entry."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"SSO login page",src:n(9929).Z,width:"546",height:"459"})),(0,r.kt)("h2",{id:"extra-rules"},"Extra rules"),(0,r.kt)("p",null,"Even if the IdP accept the authentication, APIO core may reject it if the user doesn't match some extra rules. (e.g. the user is not in the correct group / organization)"),(0,r.kt)("p",null,"The rules are simple expression based on the element of the token IdP decoded. (e.g ",(0,r.kt)("inlineCode",{parentName:"p"},"hd == 'mycompany.com'"),")"),(0,r.kt)("h2",{id:"user-creation-rules"},"User creation rules"),(0,r.kt)("p",null,"When a user is authenticated via SSO, APIO core may create the user if it doesn't exist."),(0,r.kt)("p",null,"The rules are a mapping between the elements of the token IdP decoded and user profiles definitions."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"If no rules exists or no rule match, the user is not created. And the authentication is rejected.")),(0,r.kt)("h2",{id:"protocols"},"Protocols"),(0,r.kt)("h3",{id:"openid-connect"},"OpenID Connect"),(0,r.kt)("h3",{id:"saml"},"SAML"),(0,r.kt)("h3",{id:"webseal"},"Webseal"),(0,r.kt)("h3",{id:"soap-token"},"Soap Token"),(0,r.kt)("h3",{id:"broadsoft"},"Broadsoft"))}d.isMDXComponent=!0},9929:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/login-with-sso-cddaac24dfcbf6b0882273cc2bc29b85.png"},4874:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/new-sso-common-60972e443be07a78f4d96149cab5a889.png"}}]);