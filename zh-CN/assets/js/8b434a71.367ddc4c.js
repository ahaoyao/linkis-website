"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[11482],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),h=p(n),m=r,k=h["".concat(i,".").concat(m)]||h[m]||u[m]||c;return n?a.createElement(k,l(l({ref:t},s),{},{components:n})):a.createElement(k,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,l=new Array(c);l[0]=h;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<c;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},83709:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>c,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const c={title:"CS Cache \u67b6\u6784",sidebar_position:7},l=void 0,o={unversionedId:"architecture/feature/public-enhancement-services/context-service/context-service-cache",id:"version-1.3.1/architecture/feature/public-enhancement-services/context-service/context-service-cache",title:"CS Cache \u67b6\u6784",description:"CSCache\u67b6\u6784",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.3.1/architecture/feature/public-enhancement-services/context-service/context-service-cache.md",sourceDirName:"architecture/feature/public-enhancement-services/context-service",slug:"/architecture/feature/public-enhancement-services/context-service/context-service-cache",permalink:"/zh-CN/docs/latest/architecture/feature/public-enhancement-services/context-service/context-service-cache",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.3.1/architecture/feature/public-enhancement-services/context-service/context-service-cache.md",tags:[],version:"1.3.1",sidebarPosition:7,frontMatter:{title:"CS Cache \u67b6\u6784",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"CS Search \u67b6\u6784",permalink:"/zh-CN/docs/latest/architecture/feature/public-enhancement-services/context-service/context-service-search"},next:{title:"CS \u6e05\u7406\u63a5\u53e3\u7279\u6027",permalink:"/zh-CN/docs/latest/architecture/feature/public-enhancement-services/context-service/content-service-cleanup"}},i={},p=[{value:"<strong>CSCache\u67b6\u6784</strong>",id:"cscache\u67b6\u6784",level:2},{value:"<strong>\u9700\u8981\u89e3\u51b3\u7684\u95ee\u9898</strong>",id:"\u9700\u8981\u89e3\u51b3\u7684\u95ee\u9898",level:3},{value:"1.1. \u5185\u5b58\u7ed3\u6784\u9700\u8981\u89e3\u51b3\u7684\u95ee\u9898\uff1a",id:"11-\u5185\u5b58\u7ed3\u6784\u9700\u8981\u89e3\u51b3\u7684\u95ee\u9898",level:3},{value:"1.2 \u52a0\u8f7d\u4e0e\u89e3\u6790\u9700\u8981\u89e3\u51b3\u7684\u95ee\u9898\uff1a",id:"12-\u52a0\u8f7d\u4e0e\u89e3\u6790\u9700\u8981\u89e3\u51b3\u7684\u95ee\u9898",level:3},{value:"1.3 Metric\u548c\u6e05\u7406\u673a\u5236\u9700\u8981\u89e3\u51b3\u7684\u95ee\u9898\uff1a",id:"13-metric\u548c\u6e05\u7406\u673a\u5236\u9700\u8981\u89e3\u51b3\u7684\u95ee\u9898",level:3},{value:"<strong>ContextCache\u67b6\u6784</strong>",id:"contextcache\u67b6\u6784",level:2},{value:"<strong>ContextCache\u5b58\u50a8\u7ed3\u6784\u8bbe\u8ba1</strong>",id:"contextcache\u5b58\u50a8\u7ed3\u6784\u8bbe\u8ba1",level:2},{value:"<strong>ContextCache UML\u7c7b\u56fe\u8bbe\u8ba1</strong>",id:"contextcache-uml\u7c7b\u56fe\u8bbe\u8ba1",level:2},{value:"<strong>ContextCache \u65f6\u5e8f\u56fe</strong>",id:"contextcache-\u65f6\u5e8f\u56fe",level:2},{value:"<strong>KeyWord\u89e3\u6790\u903b\u8f91</strong>",id:"keyword\u89e3\u6790\u903b\u8f91",level:2}],s={toc:p};function u(e){let{components:t,...c}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,c,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"cscache\u67b6\u6784"},(0,r.kt)("strong",{parentName:"h2"},"CSCache\u67b6\u6784")),(0,r.kt)("h3",{id:"\u9700\u8981\u89e3\u51b3\u7684\u95ee\u9898"},(0,r.kt)("strong",{parentName:"h3"},"\u9700\u8981\u89e3\u51b3\u7684\u95ee\u9898")),(0,r.kt)("h3",{id:"11-\u5185\u5b58\u7ed3\u6784\u9700\u8981\u89e3\u51b3\u7684\u95ee\u9898"},"1.1. \u5185\u5b58\u7ed3\u6784\u9700\u8981\u89e3\u51b3\u7684\u95ee\u9898\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u652f\u6301\u6309ContextType\u8fdb\u884c\u62c6\u5206\uff1a\u52a0\u5feb\u5b58\u50a8\u548c\u67e5\u8be2\u6027\u80fd")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u652f\u6301\u6309\u4e0d\u540c\u7684ContextID\u8fdb\u884c\u62c6\u5206\uff1a\u9700\u8981\u5b8c\u6210ContextID\u95f4\u5143\u6570\u636e\u9694\u79bb")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u652f\u6301LRU\uff1a\u6309\u7167\u7279\u5b9a\u7b97\u6cd5\u8fdb\u884c\u56de\u6536")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u652f\u6301\u6309\u5173\u952e\u5b57\u8fdb\u884c\u68c0\u7d22\uff1a\u652f\u6301\u901a\u8fc7\u5173\u952e\u5b57\u8fdb\u884c\u7d22\u5f15")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u652f\u6301\u7d22\u5f15\uff1a\u652f\u6301\u76f4\u63a5\u901a\u8fc7ContextKey\u8fdb\u884c\u7d22\u5f15")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u652f\u6301\u904d\u5386\uff1a\u9700\u8981\u652f\u6301\u901a\u8fc7\u6309\u7167ContextID\u3001ContextType\u8fdb\u884c\u904d\u5386"))),(0,r.kt)("h3",{id:"12-\u52a0\u8f7d\u4e0e\u89e3\u6790\u9700\u8981\u89e3\u51b3\u7684\u95ee\u9898"},"1.2 \u52a0\u8f7d\u4e0e\u89e3\u6790\u9700\u8981\u89e3\u51b3\u7684\u95ee\u9898\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u652f\u6301\u5c06ContextValue\u89e3\u6790\u6210\u5185\u5b58\u6570\u636e\u7ed3\u6784\uff1a\u9700\u8981\u5b8c\u6210\u5bf9ContextKey\u548cvalue\u89e3\u6790\u51fa\u5bf9\u5e94\u7684\u5173\u952e\u5b57\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u9700\u8981\u4e0e\u4e0ePersistence\u6a21\u5757\u8fdb\u884c\u5bf9\u63a5\u5b8c\u6210ContextID\u5185\u5bb9\u7684\u52a0\u8f7d\u4e0e\u89e3\u6790"))),(0,r.kt)("h3",{id:"13-metric\u548c\u6e05\u7406\u673a\u5236\u9700\u8981\u89e3\u51b3\u7684\u95ee\u9898"},"1.3 Metric\u548c\u6e05\u7406\u673a\u5236\u9700\u8981\u89e3\u51b3\u7684\u95ee\u9898\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5f53JVM\u5185\u5b58\u4e0d\u591f\u65f6\u80fd\u591f\u57fa\u4e8e\u5185\u5b58\u4f7f\u7528\u548c\u4f7f\u7528\u9891\u7387\u7684\u6e05\u7406")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u652f\u6301\u7edf\u8ba1\u6bcf\u4e2aContextID\u7684\u5185\u5b58\u4f7f\u7528\u60c5\u51b5")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u652f\u6301\u7edf\u8ba1\u6bcf\u4e2aContextID\u7684\u4f7f\u7528\u9891\u7387"))),(0,r.kt)("h2",{id:"contextcache\u67b6\u6784"},(0,r.kt)("strong",{parentName:"h2"},"ContextCache\u67b6\u6784")),(0,r.kt)("p",null,"ContextCache\u7684\u67b6\u6784\u5982\u4e0b\u56fe\u5c55\u793a\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(33340).Z,width:"594",height:"461"})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"ContextService\uff1a\u5b8c\u6210\u5bf9\u5916\u63a5\u53e3\u7684\u63d0\u4f9b\uff0c\u5305\u62ec\u589e\u5220\u6539\u67e5\uff1b")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Cache\uff1a\u5b8c\u6210\u5bf9\u4e0a\u4e0b\u6587\u4fe1\u606f\u7684\u5b58\u50a8\uff0c\u901a\u8fc7ContextKey\u548cContextValue\u8fdb\u884c\u6620\u5c04\u5b58\u50a8")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Index\uff1a\u5efa\u7acb\u7684\u5173\u952e\u5b57\u7d22\u5f15\uff0c\u5b58\u50a8\u7684\u662f\u4e0a\u4e0b\u6587\u4fe1\u606f\u7684\u5173\u952e\u5b57\u548cContextKey\u7684\u6620\u5c04\uff1b")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Parser\uff1a\u5b8c\u6210\u5bf9\u4e0a\u4e0b\u6587\u4fe1\u606f\u7684\u5173\u952e\u5b57\u89e3\u6790\uff1b")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"LoadModule\u5f53ContextCache\u6ca1\u6709\u5bf9\u5e94\u7684ContextID\u4fe1\u606f\u65f6\u4ece\u6301\u4e45\u5c42\u5b8c\u6210\u4fe1\u606f\u7684\u52a0\u8f7d\uff1b")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"AutoClear\uff1a\u5f53Jvm\u5185\u5b58\u4e0d\u8db3\u65f6\u5b8c\u6210\u5bf9ContextCache\u8fdb\u884c\u6309\u9700\u6e05\u7406\uff1b")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Listener\uff1a\u7528\u4e8e\u76d1\u542cContextCache\u7684Metric\u4fe1\u606f\uff0c\u5982\uff1a\u5185\u5b58\u5360\u7528\u3001\u8bbf\u95ee\u6b21\u6570\u3002"))),(0,r.kt)("h2",{id:"contextcache\u5b58\u50a8\u7ed3\u6784\u8bbe\u8ba1"},(0,r.kt)("strong",{parentName:"h2"},"ContextCache\u5b58\u50a8\u7ed3\u6784\u8bbe\u8ba1")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(46836).Z,width:"650",height:"555"})),(0,r.kt)("p",null,"ContextCache\u7684\u5b58\u50a8\u7ed3\u6784\u5212\u5206\u4e3a\u4e86\u4e09\u5c42\u7ed3\u6784\uff1a"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ContextCach\uff1a"),"\u5b58\u50a8\u4e86ContextID\u548cContextIDValue\u7684\u6620\u5c04\u5173\u7cfb\uff0c\u5e76\u80fd\u591f\u5b8c\u6210ContextID\u6309\u7167LRU\u7b97\u6cd5\u8fdb\u884c\u56de\u6536\uff1b"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ContextIDValue\uff1a"),"\u62e5\u6709\u5b58\u50a8\u4e86ContextID\u7684\u6240\u6709\u4e0a\u4e0b\u6587\u4fe1\u606f\u548c\u7d22\u5f15\u7684CSKeyValueContext\u3002\u5e76\u7edf\u8ba1ContextID\u7684\u5185\u5b58\u548c\u4f7f\u7528\u8bb0\u5f55\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"CSKeyValueContext\uff1a"),"\u5305\u542b\u4e86\u6309\u7167\u7c7b\u578b\u5b58\u50a8\u5e76\u652f\u6301\u5173\u952e\u8bcd\u7684CSInvertedIndexSet\u7d22\u5f15\u96c6\uff0c\u8fd8\u5305\u542b\u4e86\u5b58\u50a8ContextKey\u548cContextValue\u7684\u5b58\u50a8\u96c6CSKeyValueMapSet\u3002"),(0,r.kt)("p",null,"CSInvertedIndexSet\uff1a\u901a\u8fc7CSType\u8fdb\u884c\u5206\u7c7b\u5b58\u50a8\u5173\u952e\u8bcd\u7d22\u5f15"),(0,r.kt)("p",null,"CSKeyValueMapSet\uff1a\u901a\u8fc7CSType\u8fdb\u884c\u5206\u7c7b\u5b58\u50a8\u4e0a\u4e0b\u6587\u4fe1\u606f"),(0,r.kt)("h2",{id:"contextcache-uml\u7c7b\u56fe\u8bbe\u8ba1"},(0,r.kt)("strong",{parentName:"h2"},"ContextCache UML\u7c7b\u56fe\u8bbe\u8ba1")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(90513).Z,width:"1927",height:"1419"})),(0,r.kt)("h2",{id:"contextcache-\u65f6\u5e8f\u56fe"},(0,r.kt)("strong",{parentName:"h2"},"ContextCache \u65f6\u5e8f\u56fe")),(0,r.kt)("p",null,"\u4e0b\u9762\u7684\u56fe\u7ed8\u5236\u4e86\u4ee5ContextID\u3001KeyWord\u3001ContextType\u53bbContextCache\u4e2d\u67e5\u5bf9\u5e94\u7684ContextKeyValue\u7684\u6574\u4f53\u6d41\u7a0b\u3002\n",(0,r.kt)("img",{src:n(53175).Z,width:"1417",height:"635"})),(0,r.kt)("p",null,"\u8bf4\u660e\uff1a\u5176\u4e2dContextIDValueGenerator\u4f1a\u53bb\u6301\u4e45\u5c42\u62c9\u53d6ContextID\u7684Array","[ContextKeyValue]","\uff0c\u5e76\u901a\u8fc7ContextKeyValueParser\u89e3\u6790ContextKeyValue\u7684\u5173\u952e\u5b57\u5b58\u50a8\u7d22\u5f15\u548c\u5185\u5bb9\u3002"),(0,r.kt)("p",null,"ContextCacheService\u63d0\u4f9b\u7684\u5176\u4ed6\u63a5\u53e3\u6d41\u7a0b\u7c7b\u4f3c\uff0c\u8fd9\u91cc\u4e0d\u518d\u8d58\u8ff0\u3002"),(0,r.kt)("h2",{id:"keyword\u89e3\u6790\u903b\u8f91"},(0,r.kt)("strong",{parentName:"h2"},"KeyWord\u89e3\u6790\u903b\u8f91")),(0,r.kt)("p",null,"ContextValue\u5177\u4f53\u7684\u5b9e\u4f53Bean\u9700\u8981\u5728\u5bf9\u5e94\u53ef\u4ee5\u4f5c\u4e3akeyword\u7684get\u65b9\u6cd5\u4e0a\u9762\u4f7f\u7528\u6ce8\u89e3\\@keywordMethod,\u6bd4\u5982Table\u7684getTableName\u65b9\u6cd5\u5fc5\u987b\u52a0\u4e0a\\@keywordMethod\u6ce8\u89e3\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(59257).Z,width:"316",height:"105"})),(0,r.kt)("p",null,"ContextKeyValueParser\u5728\u89e3\u6790ContextKeyValue\u7684\u65f6\u5019\uff0c\u4f1a\u53bb\u626b\u63cf\u4f20\u5165\u7684\u5177\u4f53\u5bf9\u8c61\u7684\u6240\u6709\u88abKeywordMethod\u4fee\u9970\u7684\u6ce8\u89e3\u5e76\u8c03\u7528\u8be5get\u65b9\u6cd5\u83b7\u5f97\u8fd4\u56de\u5bf9\u8c61toString\u5e76\u4f1a\u901a\u8fc7\u7528\u6237\u53ef\u9009\u7684\u89c4\u5219\u8fdb\u884c\u89e3\u6790\uff0c\u5b58\u5165keyword\u96c6\u5408\u91cc\u9762\u3002\u89c4\u5219\u6709\u5206\u9694\u7b26\uff0c\u548c\u6b63\u5219\u8868\u8fbe\u5f0f"),(0,r.kt)("p",null,"\u6ce8\u610f\u4e8b\u9879\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u8be5\u6ce8\u89e3\u4f1a\u5b9a\u4e49\u5230cs\u7684core\u6a21\u5757")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u88ab\u4fee\u9970\u7684Get\u65b9\u6cd5\u4e0d\u80fd\u5e26\u53c2\u6570")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Get\u65b9\u6cd5\u7684\u8fd4\u56de\u5bf9\u8c61\u7684toSting\u65b9\u6cd5\u5fc5\u987b\u8fd4\u56de\u7684\u662f\u5173\u952e\u5b57"))))}u.isMDXComponent=!0},33340:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/linkis-contextservice-cache-01-f88da12027f01881d55746cb0ea160e4.png"},46836:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/linkis-contextservice-cache-02-141cbbb9fd040b22838d97aa342ceaa8.png"},90513:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/linkis-contextservice-cache-03-f43df4b6ed2844192de9058e9bc0d376.png"},53175:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/linkis-contextservice-cache-04-0a5c853730499dbb674bb4e172cc88d6.png"},59257:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,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"}}]);