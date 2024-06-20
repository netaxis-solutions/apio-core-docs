"use strict";(self.webpackChunkapio_core=self.webpackChunkapio_core||[]).push([[2098],{33747:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var s=o(85893),t=o(11151);const i={sidebar_position:3},r="Webhooks",c={id:"administration/webhooks",title:"Webhooks",description:"Some requests processed by APIO core can trigger webhooks. A webhook is a HTTP request sent to a specific URL. The URL is configured in the Webhooks section of the settings menu.",source:"@site/docs/administration/webhooks.md",sourceDirName:"administration",slug:"/administration/webhooks",permalink:"/apio-core-docs/docs/administration/webhooks",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Server configuration",permalink:"/apio-core-docs/docs/administration/server_configuration"},next:{title:"Templates",permalink:"/apio-core-docs/docs/administration/templates"}},a={},l=[{value:"Configuration",id:"configuration",level:2},{value:"Events",id:"events",level:2},{value:"Payload",id:"payload",level:2}];function h(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"webhooks",children:"Webhooks"}),"\n",(0,s.jsx)(n.p,{children:"Some requests processed by APIO core can trigger webhooks. A webhook is a HTTP request sent to a specific URL. The URL is configured in the Webhooks section of the settings menu."}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsxs)(n.p,{children:["Webhooks require an extra process to be started. This process is called ",(0,s.jsx)(n.code,{children:"webhooks"}),". It is not started by default. You must add it manually."]})}),"\n",(0,s.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsx)(n.p,{children:"The webhook configuration is composed of the following fields:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Active"}),": If the webhook is active or not."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Name"}),": The name of the webhook."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Target"}),": The URL of the webhook."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Secret"}),": An optional secret used to be included in the webhook payload. This secret can be used to authenticate the webhook."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Custom header"}),": An optional custom header to be included in the webhook payload."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Custom header value"}),": The value of the custom header."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Basic auth. username"}),": An optional username to be used for basic authentication."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Basic auth. password"}),": An optional password to be used for basic authentication."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Events"}),": The events that trigger the webhook."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"events",children:"Events"}),"\n",(0,s.jsx)(n.p,{children:"Any custom route call can trigger a webhook. The webhook is triggered when the custom route call is completed and successful."}),"\n",(0,s.jsx)(n.p,{children:"A webhook event is configured with the following fields:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Label"}),": The name of the event."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Method"}),": The HTTP method of the custom route call."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"URL"}),": A regular expression matching the URL of the custom route call."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"payload",children:"Payload"}),"\n",(0,s.jsx)(n.p,{children:"The webhook payload is a JSON object containing the following fields:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"event"}),": The webhook event definition with its id and label."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"id"}),": A unique id for the webhook call visible in the webhook history."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"request"}),": The request received by the custom route call."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"response"}),": The response sent by the custom route call."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"secret"}),": The secret configured in the webhook definition (if any)."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n    "event": {"id": 1, "label": "event-1"},\n    "id": "70195486-8934-4a31-a504-a97a72c7f322",\n    "request": {\n        "tag": "tag-1",\n        "method": "post",\n        "url": "/api/v01/some/url/path",\n        "body": {"foo": "bar"}\n    },\n    "response": {"status": 200, "body": {}},\n    "secret": "secret-1"\n}\n'})})]})}function d(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},11151:(e,n,o)=>{o.d(n,{Z:()=>c,a:()=>r});var s=o(67294);const t={},i=s.createContext(t);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);