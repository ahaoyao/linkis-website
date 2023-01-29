"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[43485],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>p});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=i.createContext({}),l=function(e){var t=i.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return i.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),h=l(n),p=a,m=h["".concat(o,".").concat(p)]||h[p]||u[p]||r;return n?i.createElement(m,s(s({ref:t},d),{},{components:n})):i.createElement(m,s({ref:t},d))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=h;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var l=2;l<r;l++)s[l]=n[l];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},71093:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var i=n(87462),a=(n(67294),n(3905));const r={title:"CS HA Design",sidebar_position:3},s=void 0,c={unversionedId:"architecture/feature/public-enhancement-services/context-service/context-service-highavailable",id:"version-1.3.1/architecture/feature/public-enhancement-services/context-service/context-service-highavailable",title:"CS HA Design",description:"CS HA Architecture Design",source:"@site/versioned_docs/version-1.3.1/architecture/feature/public-enhancement-services/context-service/context-service-highavailable.md",sourceDirName:"architecture/feature/public-enhancement-services/context-service",slug:"/architecture/feature/public-enhancement-services/context-service/context-service-highavailable",permalink:"/docs/latest/architecture/feature/public-enhancement-services/context-service/context-service-highavailable",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/versioned_docs/version-1.3.1/architecture/feature/public-enhancement-services/context-service/context-service-highavailable.md",tags:[],version:"1.3.1",sidebarPosition:3,frontMatter:{title:"CS HA Design",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"CS Client Design",permalink:"/docs/latest/architecture/feature/public-enhancement-services/context-service/context-service-client"},next:{title:"CS Listener Architecture",permalink:"/docs/latest/architecture/feature/public-enhancement-services/context-service/context-service-listener"}},o={},l=[{value:"<strong>CS HA Architecture Design</strong>",id:"cs-ha-architecture-design",level:2},{value:"1, CS HA architecture summary",id:"1-cs-ha-architecture-summary",level:3},{value:"(1) CS HA architecture diagram",id:"1-cs-ha-architecture-diagram",level:4},{value:"(2) Problems to be solved",id:"2-problems-to-be-solved",level:4},{value:"(3) Main design ideas",id:"3-main-design-ideas",level:4},{value:"2, module design",id:"2-module-design",level:3},{value:"(1) Module diagram",id:"1-module-diagram",level:4},{value:"(2) Specific modules",id:"2-specific-modules",level:4},{value:"3. UML Class Diagram",id:"3-uml-class-diagram",level:3},{value:"4. HA module operation sequence diagram",id:"4-ha-module-operation-sequence-diagram",level:3}],d={toc:l};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,i.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"cs-ha-architecture-design"},(0,a.kt)("strong",{parentName:"h2"},"CS HA Architecture Design")),(0,a.kt)("h3",{id:"1-cs-ha-architecture-summary"},"1, CS HA architecture summary"),(0,a.kt)("h4",{id:"1-cs-ha-architecture-diagram"},"(1) CS HA architecture diagram"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(14592).Z,width:"556",height:"288"})),(0,a.kt)("h4",{id:"2-problems-to-be-solved"},"(2) Problems to be solved"),(0,a.kt)("p",null,"-HA of Context instance object"),(0,a.kt)("p",null,"-Client generates CSID request when creating workflow"),(0,a.kt)("p",null,"-List of aliases of CS Server"),(0,a.kt)("p",null,"-Unified CSID generation and analysis rules"),(0,a.kt)("h4",{id:"3-main-design-ideas"},"(3) Main design ideas"),(0,a.kt)("p",null,"\u2460 Load balancing"),(0,a.kt)("p",null,"When the client creates a new workflow, it randomly requests the HA module of a certain server to generate a new HAID with equal probability. The HAID information includes the main server information (hereinafter referred to as the main instance), and the candidate instance, where the candidate instance is The instance with the lowest load among the remaining servers, and a corresponding ContextID. The generated HAID is bound to the workflow and is persisted to the database, and then all change operation requests of the workflow will be sent to the main instance to achieve uniform load distribution."),(0,a.kt)("p",null,"\u2461High availability"),(0,a.kt)("p",null,"In subsequent operations, when the client or gateway determines that the main instance is unavailable, the operation request is forwarded to the standby instance for processing, thereby achieving high service availability. The HA module of the standby instance will first verify the validity of the request based on the HAID information."),(0,a.kt)("p",null,"\u2462Alias \u200b\u200bmechanism"),(0,a.kt)("p",null,"The alias mechanism is adopted for the machine, the Instance information contained in the HAID adopts a custom alias, and the alias mapping queue is maintained in the background. It is that the client uses HAID when interacting with other components in the background, and uses ContextID when interacting with other components in the background. When implementing specific operations, a dynamic proxy mechanism is used to convert HAID to ContextID for processing."),(0,a.kt)("h3",{id:"2-module-design"},"2, module design"),(0,a.kt)("h4",{id:"1-module-diagram"},"(1) Module diagram"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(17790).Z,width:"1102",height:"620"})),(0,a.kt)("h4",{id:"2-specific-modules"},"(2) Specific modules"),(0,a.kt)("p",null,"\u2460ContextHAManager module"),(0,a.kt)("p",null,"Provide interface for CS Server to call to generate CSID and HAID, and provide alias conversion interface based on dynamic proxy;"),(0,a.kt)("p",null,"Call the persistence module interface to persist CSID information;"),(0,a.kt)("p",null,"\u2461AbstractContextHAManager module"),(0,a.kt)("p",null,"The abstraction of ContextHAManager can support the realization of multiple ContextHAManager;"),(0,a.kt)("p",null,"\u2462InstanceAliasManager module"),(0,a.kt)("p",null,"RPC module provides Instance and alias conversion interface, maintains alias mapping queue, and provides alias and CS\nServer instance query; provide an interface to verify whether the host is valid;"),(0,a.kt)("p",null,"\u2463HAContextIDGenerator module"),(0,a.kt)("p",null,"Generate a new HAID and encapsulate it into the client's agreed format and return it to the client. The HAID structure is as follows:"),(0,a.kt)("p",null,"\\${length of first instance}\\${length of second instance}{instance alias 1} {instance alias 2} {actual ID}, the actual ID is set as ContextID\nKey;"),(0,a.kt)("p",null,"\u2464ContextHAChecker module"),(0,a.kt)("p",null,"Provide HAID verification interface. Each request received will verify whether the ID format is valid, and whether the current host is the primary instance or the secondary instance: if it is the primary instance, the verification is passed; if it is the secondary instance, verify whether the primary instance is invalid and the primary instance is invalid The verification is passed."),(0,a.kt)("p",null,"\u2465BackupInstanceGenerator module"),(0,a.kt)("p",null,"Generate a backup instance and attach it to the CSID information;"),(0,a.kt)("p",null,"\u2466MultiTenantBackupInstanceGenerator interface"),(0,a.kt)("p",null,"(Reserved interface, not implemented yet)"),(0,a.kt)("h3",{id:"3-uml-class-diagram"},"3. UML Class Diagram"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(58908).Z,width:"1504",height:"798"})),(0,a.kt)("h3",{id:"4-ha-module-operation-sequence-diagram"},"4. HA module operation sequence diagram"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(99269).Z,width:"980",height:"621"})),(0,a.kt)("p",null,"CSID generated for the first time:\nThe client sends a request, and the Gateway forwards it to any server. The HA module generates the HAID, including the main instance, the backup instance and the CSID, and completes the binding of the workflow and the HAID."),(0,a.kt)("p",null,"When the client sends a change request, Gateway determines that the main Instance is invalid, and then forwards the request to the standby Instance for processing. After the instance on the standby Instance verifies that the HAID is valid, it loads the instance and processes the request."))}u.isMDXComponent=!0},14592:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/linkis-contextservice-ha-01-8d53a160ccc35de3efa7058995e3b8f5.png"},17790:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/linkis-contextservice-ha-02-9971bf8fd601ded6ece61eac35587e87.png"},58908:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/linkis-contextservice-ha-03-475fca11203bd6af5a18568a7d4a7868.png"},99269:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/linkis-contextservice-ha-04-28863b2ccc23df1b509ee9906d0596b6.png"}}]);