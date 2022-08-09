"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[71591],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),g=l(t),m=i,d=g["".concat(s,".").concat(m)]||g[m]||p[m]||a;return t?r.createElement(d,o(o({ref:n},u),{},{components:t})):r.createElement(d,o({ref:n},u))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=g;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},22403:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return g}});var r=t(87462),i=t(63366),a=(t(67294),t(3905)),o=["components"],c={title:"Overview",sidebar_position:0},s=void 0,l={unversionedId:"architecture/computation-governance-services/overview",id:"version-1.1.2/architecture/computation-governance-services/overview",isDocsHomePage:!1,title:"Overview",description:"Background",source:"@site/versioned_docs/version-1.1.2/architecture/computation-governance-services/overview.md",sourceDirName:"architecture/computation-governance-services",slug:"/architecture/computation-governance-services/overview",permalink:"/docs/latest/architecture/computation-governance-services/overview",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/versioned_docs/version-1.1.2/architecture/computation-governance-services/overview.md",tags:[],version:"1.1.2",sidebarPosition:0,frontMatter:{title:"Overview",sidebar_position:0},sidebar:"version-1.1.2/tutorialSidebar",previous:{title:"RPC Module",permalink:"/docs/latest/architecture/commons/rpc"},next:{title:"Overview",permalink:"/docs/latest/architecture/computation-governance-services/linkis-manager/overview"}},u=[{value:"Background",id:"background",children:[]},{value:"Architecture Diagram",id:"architecture-diagram",children:[]},{value:"Architecture Description",id:"architecture-description",children:[{value:"1. Entrance",id:"1-entrance",children:[]},{value:"2. Orchestrator",id:"2-orchestrator",children:[]},{value:"3. LinkisManager",id:"3-linkismanager",children:[]},{value:"4. Engine Manager",id:"4-engine-manager",children:[]},{value:"5. EngineConn",id:"5-engineconn",children:[]}]}],p={toc:u};function g(e){var n=e.components,c=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,c,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"background"},"Background"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"The architecture of Linkis0.X mainly has the following problems"),"  "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The boundary between the core processing flow and the hierarchical module is blurred:  ")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Entrance and EngineManager function boundaries are blurred.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The main process of task submission and execution is not clear enough.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"It is troublesome to extend the new engine, and it needs to implement the code of multiple modules.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Only support computing request scenarios, storage request scenarios and resident service mode (Cluster) are difficult to support.  "))),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Demands for richer and more powerful computing governance functions:  ")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Insufficient support for computing task management strategies.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The labeling capability is not strong enough, which restricts computing strategies and resource managemen.  "))),(0,a.kt)("p",null,"The new architecture of Linkis1.0 computing governance service can solve these problems well.  "),(0,a.kt)("h2",{id:"architecture-diagram"},"Architecture Diagram"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"linkis Computation Gov",src:t(94337).Z}),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Operation process optimization:")," Linkis1.0 will optimize the overall execution process of the job, from submission \u2014",">"," preparation \u2014",">","\nPerform three stages to fully upgrade Linkis's Job execution architecture, as shown in the following figure:",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("img",{src:t(16985).Z}),"  "),(0,a.kt)("h2",{id:"architecture-description"},"Architecture Description"),(0,a.kt)("h3",{id:"1-entrance"},"1. Entrance"),(0,a.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","Entrance, as the submission portal for computing tasks, provides task reception, scheduling and job information forwarding capabilities. It is a native capability split from Linkis0.X's Entrance.",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{parentName:"p",href:"/docs/latest/architecture/computation-governance-services/entrance"},"Entrance Architecture Design"),"  "),(0,a.kt)("h3",{id:"2-orchestrator"},"2. Orchestrator"),(0,a.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","Orchestrator, as the entrance to the preparation phase, inherits the capabilities of parsing Jobs, applying for Engines, and submitting execution from Entrance of Linkis0.X; at the same time, Orchestrator will provide powerful orchestration and computing strategy capabilities to meet multiple activities, active backups, transactions, and replays. , Current limiting, heterogeneous and mixed computing and other application scenarios.  "),(0,a.kt)("h3",{id:"3-linkismanager"},"3. LinkisManager"),(0,a.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","As the management brain of Linkis, LinkisManager is mainly composed of AppManager, ResourceManager, LabelManager and EngineConnPlugin.  "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"ResourceManager not only has Linkis0.X's resource management capabilities for Yarn and Linkis EngineManager, but also provides tag-based multi-level resource allocation and recycling capabilities, allowing ResourceManager to have full resource management capabilities across clusters and across computing resource types;"),(0,a.kt)("li",{parentName:"ol"},"AppManager will coordinate and manage all EngineConnManager and EngineConn. The life cycle of EngineConn application, reuse, creation, switching, and destruction will be handed over to AppManager for management; and LabelManager will provide cross-IDC and cross-cluster based on multi-level combined tags EngineConn and EngineConnManager routing and management capabilities;"),(0,a.kt)("li",{parentName:"ol"},"EngineConnPlugin is mainly used to reduce the access cost of new computing storage, so that users can access a new computing storage engine only by implementing one class.",(0,a.kt)("br",{parentName:"li"}),(0,a.kt)("a",{parentName:"li",href:"/docs/latest/architecture/computation-governance-services/linkis-manager/overview"},"Enter LinkisManager Architecture Design"),"  ")),(0,a.kt)("h3",{id:"4-engine-manager"},"4. Engine Manager"),(0,a.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","Engine conn Manager (ECM) is a simplified and upgraded version of linkis0. X engine manager. The ECM under linkis1.0 removes the application ability of the engine, and the whole microservice is completely stateless. It will focus on supporting the startup and destruction of all kinds of enginecon.",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{parentName:"p",href:"/docs/latest/architecture/computation-governance-services/engine/engine-conn-manager"},"Enter EngineConnManager Architecture Design"),"  "),(0,a.kt)("h3",{id:"5-engineconn"},"5. EngineConn"),(0,a.kt)("p",null," ","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","EngineConn is an optimized and upgraded version of Linkis0.X Engine. It will provide EngineConn and Executor two modules. EngineConn is used to connect the underlying computing storage engine and provide a session session that connects the underlying computing storage engines; Executor is based on this Session session , Provide full-stack computing support for interactive computing, streaming computing, offline computing, and data storage.",(0,a.kt)("br",{parentName:"p"}),"\n","",(0,a.kt)("a",{parentName:"p",href:"/docs/latest/architecture/computation-governance-services/engine/engine-conn"},"Enter EngineConn Architecture Design")))}g.isMDXComponent=!0},16985:function(e,n,t){n.Z=t.p+"assets/images/linkis-computation-gov-02-e8e6f0c0c5dac91502b72888007ee4bf.png"},94337:function(e,n,t){n.Z=t.p+"assets/images/Linkis_1.0_architecture-e91c8fbabb890c6beaf4317cf22f5151.png"}}]);