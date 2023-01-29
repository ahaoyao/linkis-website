"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[17260],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),s=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=s(a),h=i,m=u["".concat(l,".").concat(h)]||u[h]||p[h]||r;return a?n.createElement(m,o(o({ref:t},d),{},{components:a})):n.createElement(m,o({ref:t},d))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<r;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},77442:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>s});var n=a(87462),i=(a(67294),a(3905));const r={title:"Overview",sidebar_position:0},o=void 0,c={unversionedId:"architecture/feature/public-enhancement-services/context-service/overview",id:"architecture/feature/public-enhancement-services/context-service/overview",title:"Overview",description:"Background",source:"@site/docs/architecture/feature/public-enhancement-services/context-service/overview.md",sourceDirName:"architecture/feature/public-enhancement-services/context-service",slug:"/architecture/feature/public-enhancement-services/context-service/overview",permalink:"/docs/1.3.2/architecture/feature/public-enhancement-services/context-service/overview",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/docs/architecture/feature/public-enhancement-services/context-service/overview.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Overview",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"CS Architecture",permalink:"/docs/1.3.2/architecture/feature/public-enhancement-services/context-service/"},next:{title:"CS Client Design",permalink:"/docs/1.3.2/architecture/feature/public-enhancement-services/context-service/context-service-client"}},l={},s=[{value:"<strong>Background</strong>",id:"background",level:2},{value:"<strong>What is Context</strong>",id:"what-is-context",level:3},{value:"<strong>Why do you need CS (Context Service)?</strong>",id:"why-do-you-need-cs-context-service",level:3},{value:"<strong>Product Range</strong>",id:"product-range",level:2},{value:"Metadata context",id:"metadata-context",level:3},{value:"Data context",id:"data-context",level:3},{value:"Resource context",id:"resource-context",level:3},{value:"Environmental context",id:"environmental-context",level:3},{value:"Object context",id:"object-context",level:3},{value:"<strong>CS Architecture Diagram</strong>",id:"cs-architecture-diagram",level:2},{value:"<strong>Architecture Description:</strong>",id:"architecture-description",level:2},{value:"1. Client",id:"1-client",level:3},{value:"2. Service Module",id:"2-service-module",level:3},{value:"3. ContextSearch",id:"3-contextsearch",level:3},{value:"4. Listener",id:"4-listener",level:3},{value:"5. ContextCache",id:"5-contextcache",level:3},{value:"6. HighAvailable",id:"6-highavailable",level:3},{value:"7. Persistence",id:"7-persistence",level:3}],d={toc:s};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"background"},(0,i.kt)("strong",{parentName:"h2"},"Background")),(0,i.kt)("h3",{id:"what-is-context"},(0,i.kt)("strong",{parentName:"h3"},"What is Context")),(0,i.kt)("p",null,"All necessary information to keep a certain operation going on. For example: reading three books at the same time, the page number of each book has been turned is the context of continuing to read the book."),(0,i.kt)("h3",{id:"why-do-you-need-cs-context-service"},(0,i.kt)("strong",{parentName:"h3"},"Why do you need CS (Context Service)?")),(0,i.kt)("p",null,"CS is used to solve the problem of data and information sharing across multiple systems in a data application development process."),(0,i.kt)("p",null,"For example, system B needs to use a piece of data generated by system A. The usual practice is as follows:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"B system calls the data access interface developed by A system;")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"System B reads the data written by system A into a shared storage."))),(0,i.kt)("p",null,"With CS, the A and B systems only need to interact with the CS, write the data and information that need to be shared into the CS, and read the data and information that need to be read from the CS, without the need for an external system to develop and adapt. , Which greatly reduces the call complexity and coupling of information sharing between systems, and makes the boundaries of each system clearer."),(0,i.kt)("h2",{id:"product-range"},(0,i.kt)("strong",{parentName:"h2"},"Product Range")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(43399).Z,width:"2008",height:"231"})),(0,i.kt)("h3",{id:"metadata-context"},"Metadata context"),(0,i.kt)("p",null,"The metadata context defines the metadata specification."),(0,i.kt)("p",null,"Metadata context relies on data middleware, and its main functions are as follows:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open up the relationship with the data middleware, and get all user metadata information (including Hive table metadata, online database table metadata, and other NOSQL metadata such as HBase, Kafka, etc.)")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"When all nodes need to access metadata, including existing metadata and metadata in the application template, they must go through the metadata context. The metadata context records all metadata information used by the application template.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The new metadata generated by each node must be registered with the metadata context.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"When the application template is extracted, the metadata context is abstracted for the application template (mainly, the multiple library tables used are made into \\${db}. tables to avoid data permission problems) and all dependent metadata information is packaged."))),(0,i.kt)("p",null,"Metadata context is the basis of interactive workflows and the basis of application templates. Imagine: When Widget is defined, how to know the dimensions of each indicator defined by DataWrangler? How does Qualitis verify the graph report generated by Widget?"),(0,i.kt)("h3",{id:"data-context"},"Data context"),(0,i.kt)("p",null,"The data context defines the data specification."),(0,i.kt)("p",null,"The data context depends on data middleware and Linkis computing middleware. The main functions are as follows:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Get through the data middleware and get all user data information.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Get through the computing middleware and get the data storage information of all nodes.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"When all nodes need to write temporary results, they must pass through the data context and be uniformly allocated by the data context.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"When all nodes need to access data, they must pass the data context.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The data context distinguishes between dependent data and generated data. When the application template is extracted, all dependent data is abstracted and packaged for the application template."))),(0,i.kt)("h3",{id:"resource-context"},"Resource context"),(0,i.kt)("p",null,"The resource context defines the resource specification."),(0,i.kt)("p",null,"The resource context mainly interacts with Linkis computing middleware. The main functions are as follows:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"User resource files (such as Jar, Zip files, properties files, etc.)")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"User UDF")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"User algorithm package")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"User script"))),(0,i.kt)("h3",{id:"environmental-context"},"Environmental context"),(0,i.kt)("p",null,"The environmental context defines the environmental specification."),(0,i.kt)("p",null,"The main functions are as follows:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Operating System")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Software, such as Hadoop, Spark, etc.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Package dependencies, such as Mysql-JDBC."))),(0,i.kt)("h3",{id:"object-context"},"Object context"),(0,i.kt)("p",null,"The runtime context is all the context information retained when the application template (workflow) is defined and executed."),(0,i.kt)("p",null,"It is used to assist in defining the workflow/application template, prompting and perfecting all necessary information when the workflow/application template is executed."),(0,i.kt)("p",null,"The runtime workflow is mainly used by Linkis."),(0,i.kt)("h2",{id:"cs-architecture-diagram"},(0,i.kt)("strong",{parentName:"h2"},"CS Architecture Diagram")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(56476).Z,width:"729",height:"690"})),(0,i.kt)("h2",{id:"architecture-description"},(0,i.kt)("strong",{parentName:"h2"},"Architecture Description:")),(0,i.kt)("h3",{id:"1-client"},"1. Client"),(0,i.kt)("p",null,"The entrance of external access to CS, Client module provides HA function;\n",(0,i.kt)("a",{parentName:"p",href:"/docs/1.3.2/architecture/feature/public-enhancement-services/context-service/context-service-client"},"Enter Client Architecture Design")),(0,i.kt)("h3",{id:"2-service-module"},"2. Service Module"),(0,i.kt)("p",null,"Provide a Restful interface to encapsulate and process CS requests submitted by the client;\n",(0,i.kt)("a",{parentName:"p",href:"/docs/1.3.2/architecture/feature/public-enhancement-services/context-service/"},"Enter Service Architecture Design")),(0,i.kt)("h3",{id:"3-contextsearch"},"3. ContextSearch"),(0,i.kt)("p",null,"The context query module provides rich and powerful query capabilities for the client to find the key-value key-value pairs of the context;\n",(0,i.kt)("a",{parentName:"p",href:"/docs/1.3.2/architecture/feature/public-enhancement-services/context-service/context-service-search"},"Enter ContextSearch architecture design")),(0,i.kt)("h3",{id:"4-listener"},"4. Listener"),(0,i.kt)("p",null,"The CS listener module provides synchronous and asynchronous event consumption capabilities, and has the ability to notify the Client in real time once the Zookeeper-like Key-Value is updated;\n",(0,i.kt)("a",{parentName:"p",href:"/docs/1.3.2/architecture/feature/public-enhancement-services/context-service/context-service-listener"},"Enter Listener architecture design")),(0,i.kt)("h3",{id:"5-contextcache"},"5. ContextCache"),(0,i.kt)("p",null,"The context memory cache module provides the ability to quickly retrieve the context and the ability to monitor and clean up JVM memory usage;\n",(0,i.kt)("a",{parentName:"p",href:"/docs/1.3.2/architecture/feature/public-enhancement-services/context-service/context-service-cache"},"Enter ContextCache architecture design")),(0,i.kt)("h3",{id:"6-highavailable"},"6. HighAvailable"),(0,i.kt)("p",null,"Provide CS high availability capability;\n",(0,i.kt)("a",{parentName:"p",href:"/docs/1.3.2/architecture/feature/public-enhancement-services/context-service/context-service-highavailable"},"Enter HighAvailable architecture design")),(0,i.kt)("h3",{id:"7-persistence"},"7. Persistence"),(0,i.kt)("p",null,"The persistence function of CS;\n",(0,i.kt)("a",{parentName:"p",href:"/docs/1.3.2/architecture/feature/public-enhancement-services/context-service/context-service-persistence"},"Enter Persistence architecture design")))}p.isMDXComponent=!0},43399:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/linkis-contextservice-01-a932c089b228950c365304909a5f8025.png"},56476:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/linkis-contextservice-02-42287c01e204a4e04091b56b65e25972.png"}}]);