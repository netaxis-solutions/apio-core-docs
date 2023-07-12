"use strict";(self.webpackChunkapio_core=self.webpackChunkapio_core||[]).push([[7324],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>k});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(t),d=o,k=u["".concat(l,".").concat(d)]||u[d]||m[d]||a;return t?r.createElement(k,i(i({ref:n},p),{},{components:t})):r.createElement(k,i({ref:n},p))}));function k(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},38817:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=t(87462),o=(t(67294),t(3905));const a={sidebar_position:1},i="Setup",s={unversionedId:"administration/setup",id:"administration/setup",title:"Setup",description:"Requirements",source:"@site/docs/administration/setup.md",sourceDirName:"administration",slug:"/administration/setup",permalink:"/apio-core-docs/docs/administration/setup",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Administration",permalink:"/apio-core-docs/docs/category/administration"},next:{title:"Server configuration",permalink:"/apio-core-docs/docs/administration/server_configuration"}},l={},c=[{value:"Requirements",id:"requirements",level:2},{value:"Installation",id:"installation",level:2},{value:"docker-compose",id:"docker-compose",level:3}],p={toc:c},u="wrapper";function m(e){let{components:n,...t}=e;return(0,o.kt)(u,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"setup"},"Setup"),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("p",null,"APIO core platform is a set of microservices that can be deployed on a single server or on multiple servers."),(0,o.kt)("p",null,"The following requirements are for a single server deployment:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"4 CPU cores"),(0,o.kt)("li",{parentName:"ul"},"16 GB RAM"),(0,o.kt)("li",{parentName:"ul"},"50 GB disk space")),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"You can install APIO core platform on multiple ways:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Using ",(0,o.kt)("a",{parentName:"li",href:"#docker-compose"},"docker-compose")," with the official ",(0,o.kt)("a",{parentName:"li",href:"https://"},"docker images")),(0,o.kt)("li",{parentName:"ul"},"Using ",(0,o.kt)("a",{parentName:"li",href:"#deb-packages"},"deb packages")),(0,o.kt)("li",{parentName:"ul"},"Using ",(0,o.kt)("a",{parentName:"li",href:"#rpm-packages"},"rpm packages"))),(0,o.kt)("h3",{id:"docker-compose"},"docker-compose"),(0,o.kt)("p",null,"The below ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/"},"docker-compose")," configuration can be used to start an APIO core server with a single proxy."),(0,o.kt)("p",null,"It relies on a number of environment variables that you must set before running ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose up"),". The variables are described below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# docker-compose.yml\nversion: '3'\n\nservices:\n  nginx:\n    image: nginx:latest\n    ports:\n      - 80:80\n    volumes:\n      - ./nginx.conf:/etc/nginx/nginx.conf\n    depends_on:\n      - apio\n      - px1\n    restart: always\n  \n  apio:\n    image: docker.bxl.netaxis.be/apio:latest\n    ports:\n      - 5000:5000\n    volumes:\n      - static-www:/usr/www\n    restart: always\n\n  px1:\n    image: docker.bxl.netaxis.be/px1:latest\n    ports:\n      - 5000:5000\n    restart: always\n\nvolumes:\n    static-www:\n")),(0,o.kt)("p",null,"If processes run nodes like docker containers they require access to the host machine's Docker daemon:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# docker-compose.yml\nversion: '3'\n\nservices:\n  [...]\n  apio:\n    [...]\n+   volumes:\n+     - /var/run/docker.sock:/var/run/docker.sock\n\n  px1:\n    [...]\n+   volumes:\n+     - /var/run/docker.sock:/var/run/docker.sock\n")))}m.isMDXComponent=!0}}]);