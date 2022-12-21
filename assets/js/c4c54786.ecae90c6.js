"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[70079],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>p});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(a),p=r,v=d["".concat(c,".").concat(p)]||d[p]||m[p]||i;return a?n.createElement(v,l(l({ref:t},u),{},{components:a})):n.createElement(v,l({ref:t},u))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},36250:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const i={title:"Overview",sidebar_position:0},l="PublicEnhencementService (PS) architecture design",o={unversionedId:"architecture/public-enhancement-services/overview",id:"version-1.0.3/architecture/public-enhancement-services/overview",title:"Overview",description:"PublicEnhancementService (PS): Public enhancement service, a module that provides functions such as unified configuration management, context service, physical library, data source management, microservice management, and historical task query for other microservice modules.",source:"@site/versioned_docs/version-1.0.3/architecture/public-enhancement-services/overview.md",sourceDirName:"architecture/public-enhancement-services",slug:"/architecture/public-enhancement-services/overview",permalink:"/docs/1.0.3/architecture/public-enhancement-services/overview",draft:!1,editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/versioned_docs/version-1.0.3/architecture/public-enhancement-services/overview.md",tags:[],version:"1.0.3",sidebarPosition:0,frontMatter:{title:"Overview",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Linkis-Client Architecture",permalink:"/docs/1.0.3/architecture/computation-governance-services/linkis-cli"},next:{title:"Public Service",permalink:"/docs/1.0.3/architecture/public-enhancement-services/public-service"}},c={},s=[{value:"BML material library",id:"bml-material-library",level:2},{value:"Unified configuration management",id:"unified-configuration-management",level:2},{value:"ContextService context service",id:"contextservice-context-service",level:2},{value:"Datasource data source management",id:"datasource-data-source-management",level:2},{value:"InstanceLabel microservice management",id:"instancelabel-microservice-management",level:2},{value:"Jobhistory historical task management",id:"jobhistory-historical-task-management",level:2},{value:"Variable user-defined variable management",id:"variable-user-defined-variable-management",level:2},{value:"UDF user-defined function management",id:"udf-user-defined-function-management",level:2}],u={toc:s};function m(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"publicenhencementservice-ps-architecture-design"},"PublicEnhencementService (PS) architecture design"),(0,r.kt)("p",null,"PublicEnhancementService (PS): Public enhancement service, a module that provides functions such as unified configuration management, context service, physical library, data source management, microservice management, and historical task query for other microservice modules."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(37463).Z,width:"1280",height:"720"})),(0,r.kt)("h1",{id:"introduction-to-the-second-level-module"},"Introduction to the second-level module:"),(0,r.kt)("h2",{id:"bml-material-library"},"BML material library"),(0,r.kt)("p",null,"It is the linkis material management system, which is mainly used to store various file data of users, including user scripts, resource files, third-party Jar packages, etc., and can also store class libraries that need to be used when the engine runs."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Core Class"),(0,r.kt)("th",{parentName:"tr",align:null},"Core Function"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"UploadService"),(0,r.kt)("td",{parentName:"tr",align:null},"Provide resource upload service")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DownloadService"),(0,r.kt)("td",{parentName:"tr",align:null},"Provide resource download service")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ResourceManager"),(0,r.kt)("td",{parentName:"tr",align:null},"Provides a unified management entry for uploading and downloading resources")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"VersionManager"),(0,r.kt)("td",{parentName:"tr",align:null},"Provides resource version marking and version management functions")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ProjectManager"),(0,r.kt)("td",{parentName:"tr",align:null},"Provides project-level resource management and control capabilities")))),(0,r.kt)("h2",{id:"unified-configuration-management"},"Unified configuration management"),(0,r.kt)("p",null,'Configuration provides a "user-engine-application" three-level configuration management solution, which provides users with the function of configuring custom engine parameters under various access applications.'),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Core Class"),(0,r.kt)("th",{parentName:"tr",align:null},"Core Function"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CategoryService"),(0,r.kt)("td",{parentName:"tr",align:null},"Provides management services for application and engine catalogs")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ConfigurationService"),(0,r.kt)("td",{parentName:"tr",align:null},"Provides a unified management service for user configuration")))),(0,r.kt)("h2",{id:"contextservice-context-service"},"ContextService context service"),(0,r.kt)("p",null,"ContextService is used to solve the problem of data and information sharing across multiple systems in a data application development process."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Core Class"),(0,r.kt)("th",{parentName:"tr",align:null},"Core Function"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ContextCacheService"),(0,r.kt)("td",{parentName:"tr",align:null},"Provides a cache service for context information")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ContextClient"),(0,r.kt)("td",{parentName:"tr",align:null},"Provides the ability for other microservices to interact with the CSServer group")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ContextHAManager"),(0,r.kt)("td",{parentName:"tr",align:null},"Provide high-availability capabilities for ContextService")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ListenerManager"),(0,r.kt)("td",{parentName:"tr",align:null},"The ability to provide a message bus")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ContextSearch"),(0,r.kt)("td",{parentName:"tr",align:null},"Provides query entry")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ContextService"),(0,r.kt)("td",{parentName:"tr",align:null},"Implements the overall execution logic of the context service")))),(0,r.kt)("h2",{id:"datasource-data-source-management"},"Datasource data source management"),(0,r.kt)("p",null,"Datasource provides the ability to connect to different data sources for other microservices."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Core Class"),(0,r.kt)("th",{parentName:"tr",align:null},"Core Function"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"datasource-server"),(0,r.kt)("td",{parentName:"tr",align:null},"Provide the ability to connect to different data sources")))),(0,r.kt)("h2",{id:"instancelabel-microservice-management"},"InstanceLabel microservice management"),(0,r.kt)("p",null,"InstanceLabel provides registration and labeling functions for other microservices connected to linkis."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Core Class"),(0,r.kt)("th",{parentName:"tr",align:null},"Core Function"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"InsLabelService"),(0,r.kt)("td",{parentName:"tr",align:null},"Provides microservice registration and label management functions")))),(0,r.kt)("h2",{id:"jobhistory-historical-task-management"},"Jobhistory historical task management"),(0,r.kt)("p",null,"Jobhistory provides users with linkis historical task query, progress, log display related functions, and provides a unified historical task view for administrators."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Core Class"),(0,r.kt)("th",{parentName:"tr",align:null},"Core Function"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"JobHistoryQueryService"),(0,r.kt)("td",{parentName:"tr",align:null},"Provide historical task query service")))),(0,r.kt)("h2",{id:"variable-user-defined-variable-management"},"Variable user-defined variable management"),(0,r.kt)("p",null,"Variable provides users with functions related to the storage and use of custom variables."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Core Class"),(0,r.kt)("th",{parentName:"tr",align:null},"Core Function"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"VariableService"),(0,r.kt)("td",{parentName:"tr",align:null},"Provides functions related to the storage and use of custom variables")))),(0,r.kt)("h2",{id:"udf-user-defined-function-management"},"UDF user-defined function management"),(0,r.kt)("p",null,"UDF provides users with the function of custom functions, which can be introduced by users when writing code."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Core Class"),(0,r.kt)("th",{parentName:"tr",align:null},"Core Function"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"UDFService"),(0,r.kt)("td",{parentName:"tr",align:null},"Provide user-defined function service")))))}m.isMDXComponent=!0},37463:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/PublicEnhencementArchitecture-db0c27e2d15a4827045f158ce30b45ca.png"}}]);