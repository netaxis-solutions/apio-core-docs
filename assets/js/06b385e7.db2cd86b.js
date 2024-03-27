"use strict";(self.webpackChunkapio_core=self.webpackChunkapio_core||[]).push([[6516],{74493:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var i=n(85893),t=n(11151);const r={sidebar_position:3},s="Versions",a={id:"workflows/advanced/versioning",title:"Versions",description:"It can be useful to keep track of the different versions of a workflow. For example, you might want to keep a version of a workflow that is currently in production or which you are certain it is working, and a version that is being tested.",source:"@site/docs/workflows/advanced/versioning.md",sourceDirName:"workflows/advanced",slug:"/workflows/advanced/versioning",permalink:"/apio-core-docs/docs/workflows/advanced/versioning",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Entities",permalink:"/apio-core-docs/docs/workflows/advanced/entities"},next:{title:"Triggers",permalink:"/apio-core-docs/docs/category/triggers"}},c={},d=[{value:"Create a version",id:"create-a-version",level:2},{value:"Naming a version",id:"naming-a-version",level:3},{value:"Activate a version",id:"activate-a-version",level:2},{value:"Rename or delete a version",id:"rename-or-delete-a-version",level:2}];function l(e){const o={code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.h1,{id:"versions",children:"Versions"}),"\n",(0,i.jsx)(o.p,{children:"It can be useful to keep track of the different versions of a workflow. For example, you might want to keep a version of a workflow that is currently in production or which you are certain it is working, and a version that is being tested."}),"\n",(0,i.jsx)(o.p,{children:"A version is a snapshot of a workflow and it cannot be modified. It can be used to create a new workflow, or to restore a previous version of a workflow."}),"\n",(0,i.jsx)(o.p,{children:"A workflow has always one and only version that is active. This is the version that is used when the workflow is triggered."}),"\n",(0,i.jsx)(o.p,{children:"The active version of the working version (the only version that can be modified) are not necessarily the same. For example, you might want to work on a new version of a workflow while the previous version is still active."}),"\n",(0,i.jsx)(o.h2,{id:"create-a-version",children:"Create a version"}),"\n",(0,i.jsxs)(o.p,{children:["In the workflow editor, on the current working version, click on the button ",(0,i.jsx)(o.code,{children:"Commit"}),", choose a name and a description."]}),"\n",(0,i.jsx)(o.h3,{id:"naming-a-version",children:"Naming a version"}),"\n",(0,i.jsx)(o.p,{children:"Despite there is no restriction on the name of a version, it is recommended to use a naming convention that allows you to easily identify the version."}),"\n",(0,i.jsx)(o.p,{children:"For example, you might want to use the following convention:"}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{children:"<product-API-name>-<semver-version-number>\n"})}),"\n",(0,i.jsx)(o.h2,{id:"activate-a-version",children:"Activate a version"}),"\n",(0,i.jsxs)(o.p,{children:["In the workflow editor, on the version you want to activate, click on the button ",(0,i.jsx)(o.code,{children:"Activate"}),"."]}),"\n",(0,i.jsx)(o.p,{children:"The next instance of the workflow will use this version."}),"\n",(0,i.jsx)(o.p,{children:(0,i.jsx)(o.img,{alt:"activate version",src:n(6219).Z+"",title:"activate version",width:"1024",height:"101"})}),"\n",(0,i.jsx)(o.h2,{id:"rename-or-delete-a-version",children:"Rename or delete a version"}),"\n",(0,i.jsx)(o.p,{children:"In the workflow editor, on the bottom of the page, you can see a list of all the versions of the workflow."}),"\n",(0,i.jsx)(o.p,{children:"You can rename or delete a version by clicking on the corresponding button on the right."}),"\n",(0,i.jsx)(o.p,{children:(0,i.jsx)(o.img,{alt:"rename delete versions",src:n(38948).Z+"",title:"rename delete versions",width:"1368",height:"452"})})]})}function h(e={}){const{wrapper:o}={...(0,t.a)(),...e.components};return o?(0,i.jsx)(o,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},6219:(e,o,n)=>{n.d(o,{Z:()=>i});const i=n.p+"assets/images/activate-version-28157631ae2726a718ab8fa91a30f4df.png"},38948:(e,o,n)=>{n.d(o,{Z:()=>i});const i=n.p+"assets/images/rename-delete-versions-555ed9f0375fc10b82621ce7db337579.png"},11151:(e,o,n)=>{n.d(o,{a:()=>s});var i=n(67294);const t={},r=i.createContext(t);function s(e){const o=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}}}]);