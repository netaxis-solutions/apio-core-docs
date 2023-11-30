"use strict";(self.webpackChunkapio_core=self.webpackChunkapio_core||[]).push([[6342],{89459:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>d,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>h,toc:()=>c});var n=t(85893),r=t(11151);const o={sidebar_position:1},i="Custom routes",h={id:"triggers/custom_routes",title:"Custom routes",description:"APIO core supports custom HTTP routes. You can use them to expose your workflows to create your own API calls.",source:"@site/docs/triggers/custom_routes.md",sourceDirName:"triggers",slug:"/triggers/custom_routes",permalink:"/apio-core-docs/docs/triggers/custom_routes",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Triggers",permalink:"/apio-core-docs/docs/category/triggers"},next:{title:"Scheduled jobs",permalink:"/apio-core-docs/docs/triggers/scheduled_jobs"}},d={},c=[{value:"Definition",id:"definition",level:3},{value:"Synchronous vs Asynchronous routes",id:"synchronous-vs-asynchronous-routes",level:2},{value:"Error handler",id:"error-handler",level:2},{value:"Asynchronous response sample",id:"asynchronous-response-sample",level:3},{value:"Synchronous response",id:"synchronous-response",level:3},{value:"Samples Response",id:"samples-response",level:4},{value:"Authenticated routes",id:"authenticated-routes",level:2},{value:"Public routes",id:"public-routes",level:2},{value:"Proxied routes",id:"proxied-routes",level:2},{value:"API documentation",id:"api-documentation",level:3},{value:"Documentation",id:"documentation",level:2}];function a(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"custom-routes",children:"Custom routes"}),"\n",(0,n.jsx)(s.p,{children:"APIO core supports custom HTTP routes. You can use them to expose your workflows to create your own API calls."}),"\n",(0,n.jsxs)(s.p,{children:["Page: ",(0,n.jsx)(s.code,{children:"/transactions/config/startup_events"})]}),"\n",(0,n.jsx)(s.h3,{id:"definition",children:"Definition"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Custom route definition",src:t(89052).Z+"",width:"603",height:"1360"})}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Attribute"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Route"}),(0,n.jsx)(s.td,{children:"The path of the route."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Method"}),(0,n.jsx)(s.td,{children:"The HTTP method of the route."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Group"}),(0,n.jsx)(s.td,{children:"The group of the route."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"JSON Schema"}),(0,n.jsx)(s.td,{children:"The request body can be validated with a JSON schema before launching the workflow."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Output JSON Schema"}),(0,n.jsx)(s.td,{children:"The response body can be described for the OpenAPI generator."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Error handler"}),(0,n.jsxs)(s.td,{children:["The workflow to launch when a blocking error occurs (see ",(0,n.jsx)(s.a,{href:"#error-handler",children:"here"}),")."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Enabled"}),(0,n.jsx)(s.td,{children:"The route is enabled."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Sync"}),(0,n.jsxs)(s.td,{children:["The route is synchronous (see ",(0,n.jsx)(s.a,{href:"#synchronous-vs-asynchronous-routes",children:"here"}),")."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Public"}),(0,n.jsx)(s.td,{children:"The route does not require authentication."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Support bulk"}),(0,n.jsx)(s.td,{children:"The route supports bulk requests."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Bulk options"}),(0,n.jsx)(s.td,{children:"The options of the bulk requests."})]})]})]}),"\n",(0,n.jsx)(s.h2,{id:"synchronous-vs-asynchronous-routes",children:"Synchronous vs Asynchronous routes"}),"\n",(0,n.jsx)(s.p,{children:"The custom routes can be synchronous or asynchronous. The synchronous routes are executed in the same thread as the HTTP request. The asynchronous routes are executed in a separate thread."}),"\n",(0,n.jsx)(s.p,{children:"The synchronous routes are useful when the workflow is fast. The asynchronous routes are useful when the workflow is slow or long-running. In this case, the workflow can be launched in a separate thread and the HTTP request can be closed. The workflow can continue to run in the background."}),"\n",(0,n.jsxs)(s.p,{children:["When the route is asynchronous, the response is sent immediately. The response contains the ID and the GUID of the transaction. The transaction can be used to track the status of the workflow. (via the API ",(0,n.jsx)(s.code,{children:"GET /api/v01/transactions/{id}"})," or via the UI ",(0,n.jsx)(s.code,{children:"/transactions/{id}"}),")"]}),"\n",(0,n.jsx)(s.h2,{id:"error-handler",children:"Error handler"}),"\n",(0,n.jsx)(s.p,{children:"The error handler is a workflow that is executed when a blocking error occurs. You can see that as a try/catch mechanism."}),"\n",(0,n.jsxs)(s.p,{children:["It receives a ",(0,n.jsx)(s.code,{children:"{request}"})," containing the following attributes:"]}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Attribute"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"instance"}),(0,n.jsx)(s.td,{children:"the top parent instance"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"context"}),(0,n.jsx)(s.td,{children:"the top parent context"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"request"}),(0,n.jsx)(s.td,{children:"the initial request received by the custom route"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"errors"}),(0,n.jsx)(s.td,{children:"the list of errors attached to the top parent instance"})]})]})]}),"\n",(0,n.jsxs)(s.p,{children:["In case of a synchronous route, the error handler is executed before sending the response. So the response can be customized based on the error. When the error workflow completes succesfully, the context keys ",(0,n.jsx)(s.code,{children:"*response*"})," and ",(0,n.jsx)(s.code,{children:"*cb_response*"})," are moved from the error handler instance to the top parent instance, and then used to build the response."]}),"\n",(0,n.jsx)(s.p,{children:"In case of an asynchronous route, the error handler can be used to send a notification or a callback to the user or to the administrator."}),"\n",(0,n.jsx)(s.h3,{id:"asynchronous-response-sample",children:"Asynchronous response sample"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-json",children:'{\n    "id": 1,\n    "guid": "70195486-8934-4a31-a504-a97a72c7f322"\n}\n'})}),"\n",(0,n.jsx)(s.h3,{id:"synchronous-response",children:"Synchronous response"}),"\n",(0,n.jsxs)(s.p,{children:["When the route is synchronous, the response is sent when the workflow reach an ",(0,n.jsx)(s.a,{href:"../workflows/nodes#end",children:"end"})," node. The response is evaluated based on the context key ",(0,n.jsx)(s.code,{children:"*response*"})," (set with a ",(0,n.jsx)(s.a,{href:"../workflows/nodes#context-setter",children:"context setter"})," node for instance)."]}),"\n",(0,n.jsx)(s.p,{children:"The value has to be a JSON object with the following attributes:"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Attribute"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"status"}),(0,n.jsx)(s.td,{children:"The HTTP status code of the response."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"body"}),(0,n.jsx)(s.td,{children:"The body of the response. It can be a string or a JSON object."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"headers"}),(0,n.jsx)(s.td,{children:"A JSON object with the headers to be added in the response."})]})]})]}),"\n",(0,n.jsx)(s.admonition,{type:"tip",children:(0,n.jsxs)(s.p,{children:["Because there is a match in the structure of the output of ",(0,n.jsx)(s.a,{href:"../workflows/nodes#http-call",children:"http call nodes"})," and the structure of the response of the custom routes, the http call nodes can output directly in the ",(0,n.jsx)(s.code,{children:"*response*"})," context key without further processing."]})}),"\n",(0,n.jsx)(s.admonition,{type:"tip",children:(0,n.jsxs)(s.p,{children:["If the ",(0,n.jsx)(s.code,{children:"*response*"})," value is not a valid JSON object, the workflow can be closed succesfully but the response will have a status 500 (Internal Server Error)."]})}),"\n",(0,n.jsx)(s.h4,{id:"samples-response",children:"Samples Response"}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:" Description "}),(0,n.jsxs)("th",{children:[" Value of ",(0,n.jsx)(s.em,{children:"response"})," key "]}),(0,n.jsx)("th",{children:" Response "})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"JSON response"}),(0,n.jsx)("td",{children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-json",children:'{\n  "status": 200,\n  "body": {\n    "message": "hello, world"\n  }\n}\n'})})}),(0,n.jsx)("td",{children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-http",children:'HTTP/1.1 200 OK\nContent-Type: application/json\n\n{\n  "message": "hello, world"\n}\n'})})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Plain response"}),(0,n.jsx)("td",{children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-json",children:'{\n  "status": 200,\n  "body": "hello, world"\n}\n'})})}),(0,n.jsx)("td",{children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-http",children:"HTTP/1.1 200 OK\nContent-Type: text/plain\n\nhello, world\n"})})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"File attachment response"}),(0,n.jsx)("td",{children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-json",children:'{\n  "status": 200,\n  "body": "hello, world",\n  "headers": {\n      "content-disposition": "attachment; filename=\\"hello.txt\\"",\n      "content-type": "text/plain"\n  }\n}\n'})})}),(0,n.jsx)("td",{children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-http",children:'HTTP/1.1 200 OK\nContent-Type: text/plain\nContent-Disposition: attachment; filename="hello.txt"\n\nhello, world\n'})})})]})]})]}),"\n",(0,n.jsx)(s.h2,{id:"authenticated-routes",children:"Authenticated routes"}),"\n",(0,n.jsxs)(s.p,{children:["By default, all custom routes are authenticated. The authentication is done using the JWT token. The JWT token is added to the ",(0,n.jsx)(s.code,{children:"Authorization"})," header (Bearer ",(0,n.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication",children:"authentication scheme"}),") of the HTTP requests."]}),"\n",(0,n.jsxs)(s.p,{children:["Such routes are exposed under the ",(0,n.jsx)(s.code,{children:"/api/v01/custom"})," path. For example, the route ",(0,n.jsx)(s.code,{children:"/my-route"})," is exposed as ",(0,n.jsx)(s.code,{children:"https://api.example.com/api/v01/custom/my-route"}),"."]}),"\n",(0,n.jsx)(s.h2,{id:"public-routes",children:"Public routes"}),"\n",(0,n.jsxs)(s.p,{children:["The custom routes can be public. In this case, they do not require authentication. Such routes are exposed under the ",(0,n.jsx)(s.code,{children:"/api/v01/public"})," path. For example, the route ",(0,n.jsx)(s.code,{children:"/my-route"})," is exposed as ",(0,n.jsx)(s.code,{children:"https://api.example.com/public/my-route"}),"."]}),"\n",(0,n.jsx)(s.p,{children:"Public routes are useful when you want to expose your workflows to external systems in a secure environment. (e.g. a private network or health check)"}),"\n",(0,n.jsx)(s.h2,{id:"proxied-routes",children:"Proxied routes"}),"\n",(0,n.jsxs)(s.p,{children:["APIO core can be deployed with one or several proxies to intercept and/or forward some traffic to a Broadsoft gateway (Netaxis product). In this case, the proxy process will use the custom routes to ",(0,n.jsx)(s.em,{children:"overload"})," or ",(0,n.jsx)(s.em,{children:"extend"})," the Broadsoft gateway API calls."]}),"\n",(0,n.jsxs)(s.p,{children:["Proxied routes are usually exposed under the ",(0,n.jsx)(s.code,{children:"/api/v01/p{id}"})," path. For example, the route ",(0,n.jsx)(s.code,{children:"/my-route"})," is exposed as ",(0,n.jsx)(s.code,{children:"https://api.example.com/api/v01/p1/my-route"}),"."]}),"\n",(0,n.jsx)(s.p,{children:"All proxied routes require the user to be authenticated."}),"\n",(0,n.jsxs)(s.admonition,{type:"caution",children:[(0,n.jsx)(s.p,{children:"Proxied routes (not overloaded by custom routes) are executed with different user sessions depending of the originating user:"}),(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"The user is a Broadsoft user, the route is executed with the user session."}),"\n",(0,n.jsx)(s.li,{children:"The user is an APIO user, the user profile is used to allow or deny the execution of the route. If the user profile is allowed to execute the route, the route is executed with the system level session."}),"\n"]}),(0,n.jsx)(s.p,{children:"There is no risk of impersonation because the user session is always used for Broadsoft users."})]}),"\n",(0,n.jsxs)(s.p,{children:["Some nodes are especially usefull in the context of the proxied routes, e.g. ",(0,n.jsx)(s.a,{href:"../workflows/nodes/#broadsoft-proxy-session-call",children:"Proxy user session"})," node, to use the user session to make calls to the Broadsoft gateway."]}),"\n",(0,n.jsx)(s.h3,{id:"api-documentation",children:"API documentation"}),"\n",(0,n.jsxs)(s.p,{children:["The Broadsoft gateway API is described ",(0,n.jsx)(s.a,{href:"https://apio-docs.bxl.netaxis.be/",children:"here"}),"."]}),"\n",(0,n.jsxs)(s.admonition,{type:"caution",children:[(0,n.jsxs)(s.p,{children:["The documentation mention paths with a prefix ",(0,n.jsx)(s.code,{children:"/api/v1"})," but ther are exposed under the ",(0,n.jsx)(s.code,{children:"/api/v01/p{id}"})," path on the proxy."]}),(0,n.jsxs)(s.p,{children:["e.g ",(0,n.jsx)(s.code,{children:"/api/v1/tenants/"})," is exposed at ",(0,n.jsx)(s.code,{children:"/api/v01/p{id}/tenants/"}),"."]})]}),"\n",(0,n.jsx)(s.h2,{id:"documentation",children:"Documentation"}),"\n",(0,n.jsxs)(s.p,{children:["The custom routes are documented in the OpenAPI generated specification. The specification is available at the ",(0,n.jsx)(s.code,{children:"/api/v01/custom_routes.swagger.yml"})," path. For example, ",(0,n.jsx)(s.code,{children:"https://api.example.com/api/v01/custom_routes.swagger.yml"}),"."]})]})}function l(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},89052:(e,s,t)=>{t.d(s,{Z:()=>n});const n=t.p+"assets/images/new-custom-route-69aa8eb156cf13cbe4585886b1c0b0eb.png"},11151:(e,s,t)=>{t.d(s,{Z:()=>h,a:()=>i});var n=t(67294);const r={},o=n.createContext(r);function i(e){const s=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function h(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(o.Provider,{value:s},e.children)}}}]);