"use strict";(self.webpackChunkapio_core=self.webpackChunkapio_core||[]).push([[1299],{43740:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>l,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var t=o(85893),r=o(11151);const s={sidebar_position:7},i="Migrations",a={id:"migrations",title:"Migrations",description:"Some versions need some changes to the server configuration or the database.",source:"@site/docs/migrations.md",sourceDirName:".",slug:"/migrations",permalink:"/apio-core-docs/docs/migrations",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Database",permalink:"/apio-core-docs/docs/administration/database"}},p={},c=[{value:"&lt; 2.10.0 to &gt;= 2.11.0",id:"-2100-to--2110",level:2},{value:"&lt; 0.23.2 to &gt;= 2.10.x",id:"-0232-to--210x",level:2},{value:"In 2 steps",id:"in-2-steps",level:3},{value:"Supervisord",id:"supervisord",level:3},{value:"Docker",id:"docker",level:3}];function d(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"migrations",children:"Migrations"}),"\n",(0,t.jsx)(n.p,{children:"Some versions need some changes to the server configuration or the database."}),"\n",(0,t.jsx)(n.h2,{id:"-2100-to--2110",children:"< 2.10.0 to >= 2.11.0"}),"\n",(0,t.jsxs)(n.p,{children:["The encryption 'Fernet32' is not supported anymore. So the internal key ",(0,t.jsx)(n.code,{children:"document-storage"})," is not valid anymore.\nYou can force the migration to the new encryption by running the following command directly on the database:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"UPDATE keys SET label = 'document-storage-old' WHERE label = 'document-storage';\n"})}),"\n",(0,t.jsx)(n.h2,{id:"-0232-to--210x",children:"< 0.23.2 to >= 2.10.x"}),"\n",(0,t.jsx)(n.p,{children:"Because the engine was entirely rewritten, the database schema has changed. The last version of the database structure in the 0.x branch is required before upgrading to 2.x versions."}),"\n",(0,t.jsx)(n.p,{children:"Also, there is no configuration file anymore. The configuration is stored in the database."}),"\n",(0,t.jsx)(n.h3,{id:"in-2-steps",children:"In 2 steps"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Upgrade to the last version of the 0.x branch (0.23.2)"}),"\n",(0,t.jsx)(n.li,{children:"Upgrade to the 2.x version"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"supervisord",children:"Supervisord"}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"If possible (no customer specific limitation), it's recommended to move to Docker."})}),"\n",(0,t.jsx)(n.p,{children:"The environment and the command changed."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ini",children:'[program:api_server]\n\n; was:\nenvironment=APIO_CONFIG_FILE=/etc/apio.yml,APIO_OPENID_AUTH=n\ncommand=/opt/apio/bin/python -m broadsoft_apio_api.server\n\n; now:\n\n; note the uppercase for the variables is !important!\nenvironment=DB=postgresql://apio:secret@postgres/apio\ncommand=/usr/local/go/server -workflows -port=5000 -host=0.0.0.0 -cleanup\n\n;...\n\n[program:proxy_server]\n\n; was:\nenvironment=APIO_CONFIG_FILE=/etc/apio_p1.yml,APIO_OPENID_AUTH=n\ncommand=/opt/broadsoft_apio/bin/python -m broadsoft_apio_api.server_proxy\n\n; now:\n\nenvironment=DB=postgresql://apio:secret@postgres/apio\n; note the "proxy" mapping, the "bwks needs to match the target gateway name in the APIO core configuration in the database!\ncommand=/usr/local/go/server -workflows -port=5000 -host=0.0.0.0 -proxy=/api/v01/p1:bwks -runMigration=false\n'})}),"\n",(0,t.jsx)(n.h3,{id:"docker",children:"Docker"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'# ...\nservices:\n  # ...\n  # was:\n  apiocore:\n    command: python3 -m broadsoft_apio_api.server\n    environment:\n      - host=0.0.0.0\n      - db=postgresql://apio:secret@postgres/apio\n      - proxy_login_url=default=https://1.2.3.4:8443/api/v1/login/,p1=https://10.0.2.3/api/v1/login/\n\n  # now:\n  apiocore:\n    command: /usr/local/go/server -workflows -port=5000 -host=0.0.0.0 -cleanup\n    environment:\n      # note the uppercase for the variables is !important!\n      - DB=postgresql://apio:secret@postgres/apio\n\n  # ...\n  # was:\n  px1n:\n    command: python3 -m broadsoft_apio_api.server_proxy\n    environment:\n      - host=0.0.0.0\n      - port=5001\n      - db=postgresql://apio:secret@postgres/apio\n      - proxy_url=https://10.0.1.2/api/v1/\n      - proxy_username=username\n      - proxy_password=secret\n      - proxy_prefix=/api/v01/p1\n      - proxy_name=p1\n\n  # now:\n  px1:\n    # note the "proxy" mapping, the "bwks needs to match the target gateway name in the APIO core configuration in the database!\n    command: /usr/local/go/server -workflows -port=5000 -host=0.0.0.0 -proxy=/api/v01/p1:bwks -runMigration=false\n\n    environment:\n      # note the uppercase for the variables is !important!\n      - DB=postgresql://apio:secret@postgres/apio\n# ...\n'})})]})}function l(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,n,o)=>{o.d(n,{Z:()=>a,a:()=>i});var t=o(67294);const r={},s=t.createContext(r);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);