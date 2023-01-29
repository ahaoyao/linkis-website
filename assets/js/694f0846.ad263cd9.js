"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[23302],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=s(n),u=a,d=g["".concat(p,".").concat(u)]||g[u]||k[u]||i;return n?r.createElement(d,o(o({ref:t},c),{},{components:n})):r.createElement(d,o({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=g;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},69851:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>k,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={title:"Interface Error Troubleshooting",sidebar_position:3},o=void 0,l={unversionedId:"tuning-and-troubleshooting/error-guide/interface",id:"version-1.3.1/tuning-and-troubleshooting/error-guide/interface",title:"Interface Error Troubleshooting",description:"How to quickly locate interfaces and query logs for interface errors",source:"@site/versioned_docs/version-1.3.1/tuning-and-troubleshooting/error-guide/interface.md",sourceDirName:"tuning-and-troubleshooting/error-guide",slug:"/tuning-and-troubleshooting/error-guide/interface",permalink:"/docs/latest/tuning-and-troubleshooting/error-guide/interface",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/versioned_docs/version-1.3.1/tuning-and-troubleshooting/error-guide/interface.md",tags:[],version:"1.3.1",sidebarPosition:3,frontMatter:{title:"Interface Error Troubleshooting",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Error Code",permalink:"/docs/latest/tuning-and-troubleshooting/error-guide/error-code"},next:{title:"Upgrade From 0.X To 1.0",permalink:"/docs/latest/upgrade/upgrade-from-0.X-to-1.0-guide"}},p={},s=[{value:"How to locate",id:"how-to-locate",level:2},{value:"1.Front end F12 interface error",id:"1front-end-f12-interface-error",level:3},{value:"2. App name found",id:"2-app-name-found",level:3},{value:"Correspondence between application name and microservice",id:"correspondence-between-application-name-and-microservice",level:4},{value:"3. Find log path",id:"3-find-log-path",level:3},{value:"4. view log",id:"4-view-log",level:3},{value:"5.Exception location",id:"5exception-location",level:3}],c={toc:s};function k(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"How to quickly locate interfaces and query logs for interface errors"),(0,a.kt)("h2",{id:"how-to-locate"},"How to locate"),(0,a.kt)("h3",{id:"1front-end-f12-interface-error"},"1.Front end F12 interface error"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Error information troubleshooting"),"\n",(0,a.kt)("img",{src:n(58915).Z,width:"1916",height:"890"}),"\nIf an error message is found, press f12--network-- filter the request information fetch/xhr-- check the single request --priview-- locate the error reporting request"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Find URL"),"\n",(0,a.kt)("img",{src:n(20877).Z,width:"1156",height:"438"}),"\nClick the headers of a single request, and you will see general. Here you will see the request address:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Request URL \uff1aXXXXX /api/rest_j/v1/data-source-manager/op/connect/json")),(0,a.kt)("h3",{id:"2-app-name-found"},"2. App name found"),(0,a.kt)("p",null,"When an interface request reports an error, the URL specification locates the application name.\nThe linkis interface URL follows the design specification:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"/api/rest_j/v1/{applicationName}/.")),(0,a.kt)("p",null,"ApplicationName is the application name. Find the microservice to which you belong through the application name, and view the log under the corresponding microservice."),(0,a.kt)("h4",{id:"correspondence-between-application-name-and-microservice"},"Correspondence between application name and microservice"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"ApplicationName"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Microservice"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"linkismanager"),(0,a.kt)("td",{parentName:"tr",align:"center"},"cg-linkismanager")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"engineplugin"),(0,a.kt)("td",{parentName:"tr",align:"center"},"cg-engineplugin")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"cg-engineconnmanager"),(0,a.kt)("td",{parentName:"tr",align:"center"},"cg-engineconnmanager")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"entrance"),(0,a.kt)("td",{parentName:"tr",align:"center"},"cg-entrance")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"bml"),(0,a.kt)("td",{parentName:"tr",align:"center"},"ps-bml")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"contextservice"),(0,a.kt)("td",{parentName:"tr",align:"center"},"ps-cs")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"datasource"),(0,a.kt)("td",{parentName:"tr",align:"center"},"ps-datasource")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"configuration"),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"microservice"),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"jobhistory"),(0,a.kt)("td",{parentName:"tr",align:"center"},"ps-publicservice")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"variable"),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"udf"),(0,a.kt)("td",{parentName:"tr",align:"center"})))),(0,a.kt)("h3",{id:"3-find-log-path"},"3. Find log path"),(0,a.kt)("p",null,"The user service address is different. We need to locate the log address first"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"ps -ef | grep  ps-datasource")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(35598).Z,width:"1669",height:"87"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"cg-linkismanager\uff1a"),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"GC log\uff1a",(0,a.kt)("inlineCode",{parentName:"p"}," /${LINKIS_HOME}/logs/linkis/linkis-cg-linkismanager-gc.log")),(0,a.kt)("p",{parentName:"blockquote"},"Service log\uff1a",(0,a.kt)("inlineCode",{parentName:"p"}," /${LINKIS_HOME}/logs/linkis/linkis-cg-linkismanager.log")),(0,a.kt)("p",{parentName:"blockquote"},"System out log\uff1a",(0,a.kt)("inlineCode",{parentName:"p"}," /${LINKIS_HOME}/logs/linkis/linkis-cg-linkismanager.out")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"cg-engineplugin\uff1a"),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"GC log\uff1a",(0,a.kt)("inlineCode",{parentName:"p"}," /${LINKIS_HOME}/logs/linkis/linkis-cg-engineplugin-gc.log")),(0,a.kt)("p",{parentName:"blockquote"},"Service log\uff1a",(0,a.kt)("inlineCode",{parentName:"p"}," /${LINKIS_HOME}/logs/linkis/linkis-cg-engineplugin.log")),(0,a.kt)("p",{parentName:"blockquote"},"System out log\uff1a",(0,a.kt)("inlineCode",{parentName:"p"}," /${LINKIS_HOME}/logs/linkis/linkis-cg-engineplugin.out")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"cg-engineconnmanager\uff1a"),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"GC log\uff1a",(0,a.kt)("inlineCode",{parentName:"p"}," /${LINKIS_HOME}/logs/linkis/linkis-cg-engineconnmanager-gc.log")),(0,a.kt)("p",{parentName:"blockquote"},"Service log\uff1a",(0,a.kt)("inlineCode",{parentName:"p"}," /${LINKIS_HOME}/logs/linkis/linkis-cg-engineconnmanager.log")),(0,a.kt)("p",{parentName:"blockquote"},"System out log\uff1a",(0,a.kt)("inlineCode",{parentName:"p"}," /${LINKIS_HOME}/logs/linkis/linkis-cg-engineconnmanager.out")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"cg-entrance\uff1a"),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"GC log\uff1a",(0,a.kt)("inlineCode",{parentName:"p"}," /${LINKIS_HOME}/logs/linkis/linkis-cg-entrance-gc.log")),(0,a.kt)("p",{parentName:"blockquote"},"Service log\uff1a",(0,a.kt)("inlineCode",{parentName:"p"}," /${LINKIS_HOME}/logs/linkis/linkis-cg-entrance.log")),(0,a.kt)("p",{parentName:"blockquote"},"System out log\uff1a",(0,a.kt)("inlineCode",{parentName:"p"}," /${LINKIS_HOME}/logs/linkis/linkis-cg-entrance.out")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"ps-bml\uff1a"),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"GC log\uff1a",(0,a.kt)("inlineCode",{parentName:"p"}," /${LINKIS_HOME}/logs/linkis/linkis-ps-bml-gc.log")),(0,a.kt)("p",{parentName:"blockquote"},"Service log\uff1a",(0,a.kt)("inlineCode",{parentName:"p"}," /${LINKIS_HOME}/logs/linkis/linkis-ps-bml.log")),(0,a.kt)("p",{parentName:"blockquote"},"System out log\uff1a",(0,a.kt)("inlineCode",{parentName:"p"}," /${LINKIS_HOME}/logs/linkis/linkis-ps-bml.out")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"ps-cs\uff1a"),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"GC log\uff1a",(0,a.kt)("inlineCode",{parentName:"p"}," /${LINKIS_HOME}/logs/linkis/linkis-ps-cs-gc.log")),(0,a.kt)("p",{parentName:"blockquote"},"Service log\uff1a",(0,a.kt)("inlineCode",{parentName:"p"}," /${LINKIS_HOME}/logs/linkis/linkis-ps-cs.log")),(0,a.kt)("p",{parentName:"blockquote"},"System out log\uff1a",(0,a.kt)("inlineCode",{parentName:"p"}," /${LINKIS_HOME}/logs/linkis/linkis-ps-cs.out")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"ps-datasource\uff1a"),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"GC log\uff1a",(0,a.kt)("inlineCode",{parentName:"p"}," /${LINKIS_HOME}/logs/linkis/linkis-ps-datasource-gc.log")),(0,a.kt)("p",{parentName:"blockquote"},"Service log\uff1a",(0,a.kt)("inlineCode",{parentName:"p"}," /${LINKIS_HOME}/logs/linkis/linkis-ps-datasource.log")),(0,a.kt)("p",{parentName:"blockquote"},"System out log\uff1a",(0,a.kt)("inlineCode",{parentName:"p"}," /${LINKIS_HOME}/logs/linkis/linkis-ps-datasource.out")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"ps-publicservice\uff1a"),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"GC log\uff1a",(0,a.kt)("inlineCode",{parentName:"p"}," /${LINKIS_HOME}/logs/linkis/linkis-ps-publicservice-gc.log")),(0,a.kt)("p",{parentName:"blockquote"},"Service log\uff1a",(0,a.kt)("inlineCode",{parentName:"p"}," /${LINKIS_HOME}/logs/linkis/linkis-ps-publicservice.log")),(0,a.kt)("p",{parentName:"blockquote"},"System out log\uff1a",(0,a.kt)("inlineCode",{parentName:"p"}," /${LINKIS_HOME}/logs/linkis/linkis-ps-publicservice.out"))))),(0,a.kt)("h3",{id:"4-view-log"},"4. view log"),(0,a.kt)("p",null,"Display the error message corresponding to the interface"),(0,a.kt)("p",null,"Find the request log, in which other services called by the service are displayed, or the logical logs processed in their own services are displayed"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"tail -fn200 linkis-ps-data-source-manager.log")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(6260).Z,width:"1646",height:"137"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"The above figure shows the logs of service calling other services. You can query the logs of other services based on this information")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"The following figure shows the service logs that actually report errors")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"tail -fn200 linkis-ps-metadataquery.log")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(34333).Z,width:"1640",height:"288"})),(0,a.kt)("p",null,"Front end error reporting display"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(58915).Z,width:"1916",height:"890"})),(0,a.kt)("h3",{id:"5exception-location"},"5.Exception location"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'ECMResourceClear failed, ecm current resource:bdpuje\ns110003:9102{"instance":0,"memory":"0.0 B","cpu":0} org.apache.linkis.manager.exception.PersistenceErrorException: errCode: 210001 ,desc: label not found, this label may be removed a\nlready. , ip: localhost110003 ,port: 9101 ,serviceKind: linkis-cg-linkismanager')),(0,a.kt)("p",null,"Where IP and port are the corresponding service addresses, and servicekind is the corresponding service name. If the RPC call log fails, you can use this information to find the corresponding service"))}k.isMDXComponent=!0},6260:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/datasourcemanager-6c67b0e0cf0848327577a0c05f8e4747.png"},58915:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/errorMsg-88d1f6cc5014a71c29b3b82b37488145.png"},34333:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/errorMsgFromMeta-f6d29bacd8e9e014f069ac53600ec35e.png"},20877:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/findUrl-f95a232e17346ffde45cab3be9b66921.png"},35598:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/logs-1dc64535371b2f8171457d30629f9d69.png"}}]);