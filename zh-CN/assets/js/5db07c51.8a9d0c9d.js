"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[11252],{3905:(t,a,n)=>{n.d(a,{Zo:()=>N,kt:()=>g});var e=n(67294);function l(t,a,n){return a in t?Object.defineProperty(t,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[a]=n,t}function r(t,a){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);a&&(e=e.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),n.push.apply(n,e)}return n}function p(t){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){l(t,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))}))}return t}function i(t,a){if(null==t)return{};var n,e,l=function(t,a){if(null==t)return{};var n,e,l={},r=Object.keys(t);for(e=0;e<r.length;e++)n=r[e],a.indexOf(n)>=0||(l[n]=t[n]);return l}(t,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(e=0;e<r.length;e++)n=r[e],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var k=e.createContext({}),m=function(t){var a=e.useContext(k),n=a;return t&&(n="function"==typeof t?t(a):p(p({},a),t)),n},N=function(t){var a=m(t.components);return e.createElement(k.Provider,{value:a},t.children)},u={inlineCode:"code",wrapper:function(t){var a=t.children;return e.createElement(e.Fragment,{},a)}},d=e.forwardRef((function(t,a){var n=t.components,l=t.mdxType,r=t.originalType,k=t.parentName,N=i(t,["components","mdxType","originalType","parentName"]),d=m(n),g=l,o=d["".concat(k,".").concat(g)]||d[g]||u[g]||r;return n?e.createElement(o,p(p({ref:a},N),{},{components:n})):e.createElement(o,p({ref:a},N))}));function g(t,a){var n=arguments,l=a&&a.mdxType;if("string"==typeof t||l){var r=n.length,p=new Array(r);p[0]=d;var i={};for(var k in a)hasOwnProperty.call(a,k)&&(i[k]=a[k]);i.originalType=t,i.mdxType="string"==typeof t?t:l,p[1]=i;for(var m=2;m<r;m++)p[m]=n[m];return e.createElement.apply(null,p)}return e.createElement.apply(null,n)}d.displayName="MDXCreateElement"},66528:(t,a,n)=>{n.r(a),n.d(a,{assets:()=>k,contentTitle:()=>p,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>m});var e=n(87462),l=(n(67294),n(3905));const r={title:"\u4e0a\u4e0b\u6587\u5386\u53f2\u8bb0\u5f55\u670d\u52a1",sidebar_position:14},p=void 0,i={unversionedId:"api/http/linkis-ps-cs-api/context-history-service-api",id:"version-1.3.1/api/http/linkis-ps-cs-api/context-history-service-api",title:"\u4e0a\u4e0b\u6587\u5386\u53f2\u8bb0\u5f55\u670d\u52a1",description:"ContextHistoryRestfulApi \u7c7b",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.3.1/api/http/linkis-ps-cs-api/context-history-service-api.md",sourceDirName:"api/http/linkis-ps-cs-api",slug:"/api/http/linkis-ps-cs-api/context-history-service-api",permalink:"/zh-CN/docs/latest/api/http/linkis-ps-cs-api/context-history-service-api",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.3.1/api/http/linkis-ps-cs-api/context-history-service-api.md",tags:[],version:"1.3.1",sidebarPosition:14,frontMatter:{title:"\u4e0a\u4e0b\u6587\u5386\u53f2\u8bb0\u5f55\u670d\u52a1",sidebar_position:14},sidebar:"tutorialSidebar",previous:{title:"EC\u8d44\u6e90\u4fe1\u606f\u7ba1\u7406",permalink:"/zh-CN/docs/latest/api/http/linkis-cg-linkismanager-api/ec-resource-management-api"},next:{title:"\u4e0a\u4e0b\u6587API",permalink:"/zh-CN/docs/latest/api/http/linkis-ps-cs-api/context-service-api"}},k={},m=[{value:"\u521b\u5efa\u5386\u53f2\u8bb0\u5f55",id:"\u521b\u5efa\u5386\u53f2\u8bb0\u5f55",level:2},{value:"\u83b7\u53d6\u591a\u4e2a\u5386\u53f2\u8bb0\u5f55",id:"\u83b7\u53d6\u591a\u4e2a\u5386\u53f2\u8bb0\u5f55",level:2},{value:"\u83b7\u53d6\u5386\u53f2\u8bb0\u5f55",id:"\u83b7\u53d6\u5386\u53f2\u8bb0\u5f55",level:2},{value:"\u5220\u9664\u5386\u53f2\u8bb0\u5f55",id:"\u5220\u9664\u5386\u53f2\u8bb0\u5f55",level:2},{value:"\u641c\u7d22\u5386\u53f2\u8bb0\u5f55",id:"\u641c\u7d22\u5386\u53f2\u8bb0\u5f55",level:2}],N={toc:m};function u(t){let{components:a,...n}=t;return(0,l.kt)("wrapper",(0,e.Z)({},N,n,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"}," ContextHistoryRestfulApi \u7c7b ")),(0,l.kt)("h2",{id:"\u521b\u5efa\u5386\u53f2\u8bb0\u5f55"},"\u521b\u5efa\u5386\u53f2\u8bb0\u5f55"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u63a5\u53e3\u5730\u5740"),":",(0,l.kt)("inlineCode",{parentName:"p"},"/api/rest_j/v1/contextservice/createHistory")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u65b9\u5f0f"),":",(0,l.kt)("inlineCode",{parentName:"p"},"POST")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u6570\u636e\u7c7b\u578b"),":",(0,l.kt)("inlineCode",{parentName:"p"},"application/json")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u54cd\u5e94\u6570\u636e\u7c7b\u578b"),":",(0,l.kt)("inlineCode",{parentName:"p"},"*/*")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u63a5\u53e3\u63cf\u8ff0"),":",(0,l.kt)("p",null,"\u521b\u5efa\u5386\u53f2\u8bb0\u5f55")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u53c2\u6570"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf7\u6c42\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6570\u636e\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"schema"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"contextHistory"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5386\u53f2\u4e0a\u4e0b\u6587"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"contextID"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e0a\u4e0b\u6587id"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u54cd\u5e94\u72b6\u6001"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u72b6\u6001\u7801"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"schema"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"200"),(0,l.kt)("td",{parentName:"tr",align:null},"OK"),(0,l.kt)("td",{parentName:"tr",align:null},"Message")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"201"),(0,l.kt)("td",{parentName:"tr",align:null},"Created"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"401"),(0,l.kt)("td",{parentName:"tr",align:null},"Unauthorized"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"403"),(0,l.kt)("td",{parentName:"tr",align:null},"Forbidden"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"404"),(0,l.kt)("td",{parentName:"tr",align:null},"Not Found"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u54cd\u5e94\u53c2\u6570"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"schema"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"data"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u96c6"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"message"),(0,l.kt)("td",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"method"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bf7\u6c42url"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"status"),(0,l.kt)("td",{parentName:"tr",align:null},"\u72b6\u6001"),(0,l.kt)("td",{parentName:"tr",align:null},"integer(int32)"),(0,l.kt)("td",{parentName:"tr",align:null},"integer(int32)")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u54cd\u5e94\u793a\u4f8b"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "data": {},\n    "message": "",\n    "method": "",\n    "status": 0\n}\n')),(0,l.kt)("h2",{id:"\u83b7\u53d6\u591a\u4e2a\u5386\u53f2\u8bb0\u5f55"},"\u83b7\u53d6\u591a\u4e2a\u5386\u53f2\u8bb0\u5f55"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u63a5\u53e3\u5730\u5740"),":",(0,l.kt)("inlineCode",{parentName:"p"},"/api/rest_j/v1/contextservice/getHistories")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u65b9\u5f0f"),":",(0,l.kt)("inlineCode",{parentName:"p"},"POST")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u6570\u636e\u7c7b\u578b"),":",(0,l.kt)("inlineCode",{parentName:"p"},"application/json")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u54cd\u5e94\u6570\u636e\u7c7b\u578b"),":",(0,l.kt)("inlineCode",{parentName:"p"},"*/*")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u63a5\u53e3\u63cf\u8ff0"),":",(0,l.kt)("p",null,"\u83b7\u53d6\u591a\u4e2a\u5386\u53f2\u8bb0\u5f55")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u53c2\u6570"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf7\u6c42\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6570\u636e\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"schema"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"contextID"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e0a\u4e0b\u6587id"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u54cd\u5e94\u72b6\u6001"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u72b6\u6001\u7801"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"schema"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"200"),(0,l.kt)("td",{parentName:"tr",align:null},"OK"),(0,l.kt)("td",{parentName:"tr",align:null},"Message")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"201"),(0,l.kt)("td",{parentName:"tr",align:null},"Created"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"401"),(0,l.kt)("td",{parentName:"tr",align:null},"Unauthorized"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"403"),(0,l.kt)("td",{parentName:"tr",align:null},"Forbidden"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"404"),(0,l.kt)("td",{parentName:"tr",align:null},"Not Found"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u54cd\u5e94\u53c2\u6570"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"schema"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"data"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u96c6"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"message"),(0,l.kt)("td",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"method"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bf7\u6c42url"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"status"),(0,l.kt)("td",{parentName:"tr",align:null},"\u72b6\u6001"),(0,l.kt)("td",{parentName:"tr",align:null},"integer(int32)"),(0,l.kt)("td",{parentName:"tr",align:null},"integer(int32)")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u54cd\u5e94\u793a\u4f8b"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "data": {},\n    "message": "",\n    "method": "",\n    "status": 0\n}\n')),(0,l.kt)("h2",{id:"\u83b7\u53d6\u5386\u53f2\u8bb0\u5f55"},"\u83b7\u53d6\u5386\u53f2\u8bb0\u5f55"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u63a5\u53e3\u5730\u5740"),":",(0,l.kt)("inlineCode",{parentName:"p"},"/api/rest_j/v1/contextservice/getHistory")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u65b9\u5f0f"),":",(0,l.kt)("inlineCode",{parentName:"p"},"POST")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u6570\u636e\u7c7b\u578b"),":",(0,l.kt)("inlineCode",{parentName:"p"},"application/json")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u54cd\u5e94\u6570\u636e\u7c7b\u578b"),":",(0,l.kt)("inlineCode",{parentName:"p"},"*/*")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u63a5\u53e3\u63cf\u8ff0"),":",(0,l.kt)("p",null,"\u83b7\u53d6\u5386\u53f2\u8bb0\u5f55")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u53c2\u6570"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf7\u6c42\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6570\u636e\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"schema"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"contextID"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e0a\u4e0b\u6587Id"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"source"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e0a\u4e0b\u6587\u6e90"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u54cd\u5e94\u72b6\u6001"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u72b6\u6001\u7801"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"schema"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"200"),(0,l.kt)("td",{parentName:"tr",align:null},"OK"),(0,l.kt)("td",{parentName:"tr",align:null},"Message")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"201"),(0,l.kt)("td",{parentName:"tr",align:null},"Created"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"401"),(0,l.kt)("td",{parentName:"tr",align:null},"Unauthorized"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"403"),(0,l.kt)("td",{parentName:"tr",align:null},"Forbidden"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"404"),(0,l.kt)("td",{parentName:"tr",align:null},"Not Found"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u54cd\u5e94\u53c2\u6570"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"schema"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"data"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u96c6"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"message"),(0,l.kt)("td",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"method"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bf7\u6c42url"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"status"),(0,l.kt)("td",{parentName:"tr",align:null},"\u72b6\u6001"),(0,l.kt)("td",{parentName:"tr",align:null},"integer(int32)"),(0,l.kt)("td",{parentName:"tr",align:null},"integer(int32)")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u54cd\u5e94\u793a\u4f8b"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "data": {},\n    "message": "",\n    "method": "",\n    "status": 0\n}\n')),(0,l.kt)("h2",{id:"\u5220\u9664\u5386\u53f2\u8bb0\u5f55"},"\u5220\u9664\u5386\u53f2\u8bb0\u5f55"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u63a5\u53e3\u5730\u5740"),":",(0,l.kt)("inlineCode",{parentName:"p"},"/api/rest_j/v1/contextservice/removeHistory")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u65b9\u5f0f"),":",(0,l.kt)("inlineCode",{parentName:"p"},"POST")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u6570\u636e\u7c7b\u578b"),":",(0,l.kt)("inlineCode",{parentName:"p"},"application/json")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u54cd\u5e94\u6570\u636e\u7c7b\u578b"),":",(0,l.kt)("inlineCode",{parentName:"p"},"*/*")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u63a5\u53e3\u63cf\u8ff0"),":",(0,l.kt)("p",null,"\u5220\u9664\u5386\u53f2\u8bb0\u5f55")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u53c2\u6570"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf7\u6c42\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6570\u636e\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"schema"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"contextHistory"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5386\u53f2\u4e0a\u4e0b\u6587"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"contextID"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e0a\u4e0b\u6587id"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u54cd\u5e94\u72b6\u6001"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u72b6\u6001\u7801"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"schema"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"200"),(0,l.kt)("td",{parentName:"tr",align:null},"OK"),(0,l.kt)("td",{parentName:"tr",align:null},"Message")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"201"),(0,l.kt)("td",{parentName:"tr",align:null},"Created"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"401"),(0,l.kt)("td",{parentName:"tr",align:null},"Unauthorized"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"403"),(0,l.kt)("td",{parentName:"tr",align:null},"Forbidden"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"404"),(0,l.kt)("td",{parentName:"tr",align:null},"Not Found"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u54cd\u5e94\u53c2\u6570"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"schema"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"data"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u96c6"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"message"),(0,l.kt)("td",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"method"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bf7\u6c42url"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"status"),(0,l.kt)("td",{parentName:"tr",align:null},"\u72b6\u6001"),(0,l.kt)("td",{parentName:"tr",align:null},"integer(int32)"),(0,l.kt)("td",{parentName:"tr",align:null},"integer(int32)")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u54cd\u5e94\u793a\u4f8b"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "data": {},\n    "message": "",\n    "method": "",\n    "status": 0\n}\n')),(0,l.kt)("h2",{id:"\u641c\u7d22\u5386\u53f2\u8bb0\u5f55"},"\u641c\u7d22\u5386\u53f2\u8bb0\u5f55"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u63a5\u53e3\u5730\u5740"),":",(0,l.kt)("inlineCode",{parentName:"p"},"/api/rest_j/v1/contextservice/searchHistory")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u65b9\u5f0f"),":",(0,l.kt)("inlineCode",{parentName:"p"},"POST")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u6570\u636e\u7c7b\u578b"),":",(0,l.kt)("inlineCode",{parentName:"p"},"application/json")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u54cd\u5e94\u6570\u636e\u7c7b\u578b"),":",(0,l.kt)("inlineCode",{parentName:"p"},"*/*")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u63a5\u53e3\u63cf\u8ff0"),":",(0,l.kt)("p",null,"\u641c\u7d22\u5386\u53f2\u8bb0\u5f55")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u53c2\u6570"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf7\u6c42\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6570\u636e\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"schema"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"contextID"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e0a\u4e0b\u6587Id"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"keywords"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5173\u952e\u8bcd"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u54cd\u5e94\u72b6\u6001"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u72b6\u6001\u7801"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"schema"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"200"),(0,l.kt)("td",{parentName:"tr",align:null},"OK"),(0,l.kt)("td",{parentName:"tr",align:null},"Message")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"201"),(0,l.kt)("td",{parentName:"tr",align:null},"Created"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"401"),(0,l.kt)("td",{parentName:"tr",align:null},"Unauthorized"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"403"),(0,l.kt)("td",{parentName:"tr",align:null},"Forbidden"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"404"),(0,l.kt)("td",{parentName:"tr",align:null},"Not Found"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u54cd\u5e94\u53c2\u6570"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"schema"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"data"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u96c6"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"message"),(0,l.kt)("td",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"method"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bf7\u6c42url"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"status"),(0,l.kt)("td",{parentName:"tr",align:null},"\u72b6\u6001"),(0,l.kt)("td",{parentName:"tr",align:null},"integer(int32)"),(0,l.kt)("td",{parentName:"tr",align:null},"integer(int32)")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u54cd\u5e94\u793a\u4f8b"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "data": {},\n    "message": "",\n    "method": "",\n    "status": 0\n}\n')))}u.isMDXComponent=!0}}]);