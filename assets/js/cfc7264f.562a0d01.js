"use strict";(self.webpackChunkapio_core=self.webpackChunkapio_core||[]).push([[2026],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>c});var a=n(67294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var p=a.createContext({}),d=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=d(t.components);return a.createElement(p.Provider,{value:e},t.children)},m="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,p=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),m=d(n),k=l,c=m["".concat(p,".").concat(k)]||m[k]||s[k]||r;return n?a.createElement(c,i(i({ref:e},u),{},{components:n})):a.createElement(c,i({ref:e},u))}));function c(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,i=new Array(r);i[0]=k;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[m]="string"==typeof t?t:l,i[1]=o;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},75149:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var a=n(87462),l=(n(67294),n(3905));const r={sidebar_position:2},i="Templates",o={unversionedId:"workflows/templates",id:"workflows/templates",title:"Templates",description:"Most fields in the nodes can be evaluated as templates. The template engine is Jinja2 and expose all the buit-in's of the language.",source:"@site/docs/workflows/templates.md",sourceDirName:"workflows",slug:"/workflows/templates",permalink:"/apio-core-docs/docs/workflows/templates",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Nodes",permalink:"/apio-core-docs/docs/workflows/nodes"},next:{title:"Zen",permalink:"/apio-core-docs/docs/workflows/zen"}},p={},d=[{value:"Filters",id:"filters",level:2},{value:"Tests",id:"tests",level:2},{value:"Functions",id:"functions",level:2},{value:"Variables",id:"variables",level:2}],u={toc:d},m="wrapper";function s(t){let{components:e,...n}=t;return(0,l.kt)(m,(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"templates"},"Templates"),(0,l.kt)("p",null,"Most fields in the nodes can be evaluated as templates. The template engine is ",(0,l.kt)("a",{parentName:"p",href:"https://jinja.palletsprojects.com/"},"Jinja2")," and expose all the ",(0,l.kt)("a",{parentName:"p",href:"https://jinja.palletsprojects.com/en/3.1.x/templates/#list-of-builtin-filters"},"buit-in's")," of the language."),(0,l.kt)("p",null,"To debug easily such fields, you can use the ",(0,l.kt)("a",{href:"/../../help/template-playground",target:"_blank"},"playground"),"."),(0,l.kt)("p",null,"It is extended with the following elements."),(0,l.kt)("h2",{id:"filters"},"Filters"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://jinja.palletsprojects.com/en/3.1.x/templates/#list-of-builtin-filters"},"From Jinja2")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Filter"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Sample"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pp_dict"),(0,l.kt)("td",{parentName:"tr",align:null},"turn an object into a pretty-printed JSON string representation"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"{","{"," ","{","'a': 1, 'b': 2} ","|"," pp_dict }}"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dict_filter"),(0,l.kt)("td",{parentName:"tr",align:null},"filter a dictionary with a set of keys"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"{","{"," ","{","'a': 1, 'b': 2, 'c': 3} ","|"," dict_filter(","['a', 'b']",") }}"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"json_query"),(0,l.kt)("td",{parentName:"tr",align:null},"inspect a JSON object with a JMESPath query"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"{","{"," ","{","'a': 1, 'b': 2, 'c': 3} ","|"," json_query('a') }}"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"url_qs"),(0,l.kt)("td",{parentName:"tr",align:null},"parse a URL query string into a dictionary"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"{","{"," 'a=1&b=2&c=3' ","|"," url_qs }}"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"url_raw_query"),(0,l.kt)("td",{parentName:"tr",align:null},"parse a URL query string"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"{","{"," 'a=1&b=2&c=3' ","|"," url_raw_query }}"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"json"),(0,l.kt)("td",{parentName:"tr",align:null},"parse a JSON string into a dictionary"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"{","{"," '","{",'"a": 1, "b": 2, "c": 3}\' ',"|"," json }}"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"url_path"),(0,l.kt)("td",{parentName:"tr",align:null},"extract the path from a URL"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"{","{"," 'http://localhost:8080/api/v01/public/demo' ","|"," url_path }}"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"combine"),(0,l.kt)("td",{parentName:"tr",align:null},"merge dictionaries"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"{","{"," ","{","'a': 1, 'b': 2} ","|"," combine(","{","'c': 3}) }}"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"rest2dict"),(0,l.kt)("td",{parentName:"tr",align:null},"parse a REST call response into a dictionary (note: it automatically parse a ",(0,l.kt)("inlineCode",{parentName:"td"},"body")," property as a JSON string into an object)"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"{","{"," rest2dict(rest) }}"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"regex_replace"),(0,l.kt)("td",{parentName:"tr",align:null},"use a regular expression to replace a string"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"{","{"," 'hello, world' ","|"," regex_replace('hello', 'goodbye') }}"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"regex_findall"),(0,l.kt)("td",{parentName:"tr",align:null},"use a regular expression to find all matches in a string"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"{","{"," 'hello, world' ","|"," regex_findall('l') }}"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"regex_search"),(0,l.kt)("td",{parentName:"tr",align:null},"use a regular expression to search a string"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"{","{"," 'hello, world' ","|"," regex_search('l') }}"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"unique"),(0,l.kt)("td",{parentName:"tr",align:null},"exclude duplicates from a list"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"{","{"," ","[1, 2, 3, 1, 2, 3]"," ","|"," unique }}"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"intersect"),(0,l.kt)("td",{parentName:"tr",align:null},"intersect two lists"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"{","{"," ","[1, 2, 3]"," ","|"," intersect(","[2, 3, 4]",") }}"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"difference"),(0,l.kt)("td",{parentName:"tr",align:null},"difference between two lists"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"{","{"," ","[1, 2, 3]"," ","|"," difference(","[2, 3, 4]",") }}"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"union"),(0,l.kt)("td",{parentName:"tr",align:null},"union of two lists"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"{","{"," ","[1, 2, 3]"," ","|"," union(","[2, 3, 4]",") }}"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"min"),(0,l.kt)("td",{parentName:"tr",align:null},"minimum value of a list"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"{","{"," ","[1, 2, 3]"," ","|"," min }}"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"max"),(0,l.kt)("td",{parentName:"tr",align:null},"maximum value of a list"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"{","{"," ","[1, 2, 3]"," ","|"," max }}"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"b64encode"),(0,l.kt)("td",{parentName:"tr",align:null},"base64 encode a string"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"{","{"," 'hello, world' ","|"," b64encode }}"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"b64decode"),(0,l.kt)("td",{parentName:"tr",align:null},"base64 decode a string"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"{","{"," 'aGVsbG8sIHdvcmxk' ","|"," b64decode }}"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"phonenumber_valid"),(0,l.kt)("td",{parentName:"tr",align:null},"check if a phone number is valid"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"{","{"," '+33612345678' ","|"," phonenumber_valid }}"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"phonenumber_e164"),(0,l.kt)("td",{parentName:"tr",align:null},"convert a phone number to E164 format"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"{","{"," '+33612345678' ","|"," phonenumber_e164 }}"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"phonenumber_cc"),(0,l.kt)("td",{parentName:"tr",align:null},"extract the country code from a phone number"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"{","{"," '+33612345678' ","|"," phonenumber_cc }}"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"phonenumber_cca"),(0,l.kt)("td",{parentName:"tr",align:null},"extract the country code from a phone number in alpha-2 format"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"{","{"," '+33612345678' ","|"," phonenumber_cca }}"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"phonenumber_type"),(0,l.kt)("td",{parentName:"tr",align:null},"extract the type of a phone number"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"{","{"," '+33612345678' ","|"," phonenumber_type }}"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"strftime"),(0,l.kt)("td",{parentName:"tr",align:null},"format a date"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"{","{"," '2021-01-01' ","|"," strftime('%Y-%m-%d') }}"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"to_datetime"),(0,l.kt)("td",{parentName:"tr",align:null},"convert a string to a datetime object"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"{","{"," '2021-01-01' ","|"," to_datetime }}"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"to_bool"),(0,l.kt)("td",{parentName:"tr",align:null},'convert a string to a boolean (evaluate to true: "yes", "on", "1", "true", 1)'),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"{","{"," 'true' ","|"," to_bool }}"))))),(0,l.kt)("h2",{id:"tests"},"Tests"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://jinja.palletsprojects.com/en/3.1.x/templates/#list-of-builtin-tests"},"From Jinja2")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Test"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Sample"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"startswith"),(0,l.kt)("td",{parentName:"tr",align:null},"check if a string starts with a substring"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"{","{"," 'hello, world' ","|"," startswith('hello') }}"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"endswith"),(0,l.kt)("td",{parentName:"tr",align:null},"check if a string ends with a substring"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"{","{"," 'hello, world' ","|"," endswith('world') }}"))))),(0,l.kt)("h2",{id:"functions"},"Functions"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Function"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Sample"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"now"),(0,l.kt)("td",{parentName:"tr",align:null},"compute the current date and time"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"{","{"," now() }}"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"timedelta"),(0,l.kt)("td",{parentName:"tr",align:null},"apply a delta to a date"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"{","{"," now() ","|"," timedelta(days=1) }}"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"utcnow"),(0,l.kt)("td",{parentName:"tr",align:null},"compute the current date and time in UTC"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"{","{"," utcnow() }}"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uuid"),(0,l.kt)("td",{parentName:"tr",align:null},"generate a UUID"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"{","{"," uuid() }}"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"randint"),(0,l.kt)("td",{parentName:"tr",align:null},"generate a random integer"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"{","{"," randint(1, 10) }}"))))),(0,l.kt)("h2",{id:"variables"},"Variables"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://jinja.palletsprojects.com/en/3.1.x/templates/#assignments"},"Assignments from Jinja2")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Variable"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"request"),(0,l.kt)("td",{parentName:"tr",align:null},"the current request object.",(0,l.kt)("br",null)," Use ",(0,l.kt)("code",null,"{","{"," (request.body ","|"," rest2dict).","<","property",">"," }}")," to access request body triggered by an HTTP custom endpoint")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"instance"),(0,l.kt)("td",{parentName:"tr",align:null},"the current instance object running a workflow with the following attributes: ",(0,l.kt)("ul",null,(0,l.kt)("li",null,"id"),(0,l.kt)("li",null,"guid"),(0,l.kt)("li",null,"callback_task_id"),(0,l.kt)("li",null,"user_id"),(0,l.kt)("li",null,"original_request_id"),(0,l.kt)("li",null,"label")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"context"),(0,l.kt)("td",{parentName:"tr",align:null},"a key-value map attached to the current workflow instance")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tasks"),(0,l.kt)("td",{parentName:"tr",align:null},"tasks ran until there with their status")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sub_instances_responses"),(0,l.kt)("td",{parentName:"tr",align:null},'"callback" responses produced by sub-instances')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"parent_instance_context"),(0,l.kt)("td",{parentName:"tr",align:null},"context of the parent instance (only filled in sub-instance)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"settings"),(0,l.kt)("td",{parentName:"tr",align:null},"a dictionary containing the settings of the platform (sensitive content are removed for security reason)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"env"),(0,l.kt)("td",{parentName:"tr",align:null},"a dictionary containing the environment variables of the platform")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"proxy_name"),(0,l.kt)("td",{parentName:"tr",align:null},"the name of the proxy (only filled in processes started with proxy binding)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"worker_env"),(0,l.kt)("td",{parentName:"tr",align:null},"a dictionary containing the environment variables of the worker process (note: it allows to attach different values depending on the running location)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"user"),(0,l.kt)("td",{parentName:"tr",align:null},"the user object of the current user (only filled when the instance has an owner defined)")))))}s.isMDXComponent=!0}}]);