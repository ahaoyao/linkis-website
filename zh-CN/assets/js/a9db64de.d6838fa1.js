"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[66933],{3905:(e,t,n)=>{n.d(t,{Zo:()=>k,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},k=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,k=o(e,["components","mdxType","originalType","parentName"]),u=c(n),g=r,m=u["".concat(p,".").concat(g)]||u[g]||s[g]||i;return n?a.createElement(m,l(l({ref:t},k),{},{components:n})):a.createElement(m,l({ref:t},k))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},10324:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={title:"\u63a5\u53e3\u9519\u8bef\u6392\u67e5",sidebar_position:3},l=void 0,o={unversionedId:"tuning-and-troubleshooting/error-guide/interface",id:"tuning-and-troubleshooting/error-guide/interface",title:"\u63a5\u53e3\u9519\u8bef\u6392\u67e5",description:"\u9488\u5bf9\u63a5\u53e3\u9519\u8bef\uff0c\u5982\u4f55\u5feb\u901f\u5b9a\u4f4d\u63a5\u53e3\uff0c\u5feb\u901f\u67e5\u8be2\u65e5\u5fd7\uff0c\u8fdb\u884c\u4ecb\u7ecd",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/tuning-and-troubleshooting/error-guide/interface.md",sourceDirName:"tuning-and-troubleshooting/error-guide",slug:"/tuning-and-troubleshooting/error-guide/interface",permalink:"/zh-CN/docs/1.3.2/tuning-and-troubleshooting/error-guide/interface",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/current/tuning-and-troubleshooting/error-guide/interface.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"\u63a5\u53e3\u9519\u8bef\u6392\u67e5",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u5e38\u89c1\u9519\u8bef\u7801\u53ca\u5904\u7406\u65b9\u6cd5",permalink:"/zh-CN/docs/1.3.2/tuning-and-troubleshooting/error-guide/error-code"},next:{title:"0.x\u52301.0\u7684\u5347\u7ea7\u6307\u5357",permalink:"/zh-CN/docs/1.3.2/upgrade/upgrade-from-0.X-to-1.0-guide"}},p={},c=[{value:"\u5982\u4f55\u5b9a\u4f4d",id:"\u5982\u4f55\u5b9a\u4f4d",level:2},{value:"1. \u524d\u7aefF12 \u63a5\u53e3\u62a5\u9519",id:"1-\u524d\u7aeff12-\u63a5\u53e3\u62a5\u9519",level:3},{value:"2. \u627e\u5230\u5e94\u7528\u540d",id:"2-\u627e\u5230\u5e94\u7528\u540d",level:3},{value:"\u5e94\u7528\u540d\u548c\u5fae\u670d\u52a1\u7684\u5bf9\u5e94\u5173\u7cfb",id:"\u5e94\u7528\u540d\u548c\u5fae\u670d\u52a1\u7684\u5bf9\u5e94\u5173\u7cfb",level:4},{value:"3. \u627e\u5230\u65e5\u5fd7\u8def\u5f84",id:"3-\u627e\u5230\u65e5\u5fd7\u8def\u5f84",level:3},{value:"4. \u67e5\u770b\u65e5\u5fd7",id:"4-\u67e5\u770b\u65e5\u5fd7",level:3},{value:"5. \u5f02\u5e38\u5b9a\u4f4d",id:"5-\u5f02\u5e38\u5b9a\u4f4d",level:3}],k={toc:c};function s(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},k,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u9488\u5bf9\u63a5\u53e3\u9519\u8bef\uff0c\u5982\u4f55\u5feb\u901f\u5b9a\u4f4d\u63a5\u53e3\uff0c\u5feb\u901f\u67e5\u8be2\u65e5\u5fd7\uff0c\u8fdb\u884c\u4ecb\u7ecd"),(0,r.kt)("h2",{id:"\u5982\u4f55\u5b9a\u4f4d"},"\u5982\u4f55\u5b9a\u4f4d"),(0,r.kt)("h3",{id:"1-\u524d\u7aeff12-\u63a5\u53e3\u62a5\u9519"},"1. \u524d\u7aefF12 \u63a5\u53e3\u62a5\u9519"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u9519\u8bef\u4fe1\u606f\u6392\u67e5"),"\n",(0,r.kt)("img",{src:n(58915).Z,width:"1916",height:"890"}),"\n\u53d1\u73b0\u9519\u8bef\u4fe1\u606f\uff0c\u6309F12--network--\u8fc7\u6ee4\u8bf7\u6c42\u4fe1\u606fFetch/XHR--\u5bf9\u5355\u6b21\u8bf7\u6c42\u8fdb\u884c\u68c0\u67e5--priview--\u5b9a\u4f4d\u62a5\u9519\u8bf7\u6c42"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u67e5\u627eurl"),"\n",(0,r.kt)("img",{src:n(20877).Z,width:"1156",height:"438"}),"\n\u70b9\u51fb\u5355\u6b21\u8bf7\u6c42\u7684Headers\uff0c\u5c31\u4f1a\u770b\u5230general \u8fd9\u91cc\u5c06\u4f1a\u770b\u5230\u8bf7\u6c42\u5730\u5740\uff1a"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Request URL \uff1aXXXXX /api/rest_j/v1/data-source-manager/op/connect/json")),(0,r.kt)("h3",{id:"2-\u627e\u5230\u5e94\u7528\u540d"},"2. \u627e\u5230\u5e94\u7528\u540d"),(0,r.kt)("p",null,"\u67d0\u4e2a\u63a5\u53e3\u8bf7\u6c42\u62a5\u9519\uff0cURL\u89c4\u8303\u8fdb\u884c\u5b9a\u4f4d\u5e94\u7528\u540d\u3002\nLinkis\u63a5\u53e3URL\u9075\u5faa\u8bbe\u8ba1\u89c4\u8303\uff1a"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"/api/rest_j/v1/{applicationName}/.")),(0,r.kt)("p",null,"applicationName\u662f\u5e94\u7528\u540d\uff0c\u901a\u8fc7\u5e94\u7528\u540d\u67e5\u627e\u5f52\u5c5e\u7684\u5fae\u670d\u52a1\uff0c\u53bb\u5bf9\u5e94\u7684\u5fae\u670d\u52a1\u4e0b\u67e5\u770blog\u65e5\u5fd7\u3002"),(0,r.kt)("h4",{id:"\u5e94\u7528\u540d\u548c\u5fae\u670d\u52a1\u7684\u5bf9\u5e94\u5173\u7cfb"},"\u5e94\u7528\u540d\u548c\u5fae\u670d\u52a1\u7684\u5bf9\u5e94\u5173\u7cfb"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"ApplicationName\uff08\u5e94\u7528\u540d\uff09"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Microservice\uff08\u5fae\u670d\u52a1\uff09"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"linkismanager"),(0,r.kt)("td",{parentName:"tr",align:"center"},"cg-linkismanager")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"engineplugin"),(0,r.kt)("td",{parentName:"tr",align:"center"},"cg-engineplugin")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"cg-engineconnmanager"),(0,r.kt)("td",{parentName:"tr",align:"center"},"cg-engineconnmanager")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"entrance"),(0,r.kt)("td",{parentName:"tr",align:"center"},"cg-entrance")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"bml"),(0,r.kt)("td",{parentName:"tr",align:"center"},"ps-bml")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"contextservice"),(0,r.kt)("td",{parentName:"tr",align:"center"},"ps-cs")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"datasource"),(0,r.kt)("td",{parentName:"tr",align:"center"},"ps-datasource")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"configuration"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"microservice"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"jobhistory"),(0,r.kt)("td",{parentName:"tr",align:"center"},"ps-publicservice")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"variable"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"udf"),(0,r.kt)("td",{parentName:"tr",align:"center"})))),(0,r.kt)("h3",{id:"3-\u627e\u5230\u65e5\u5fd7\u8def\u5f84"},"3. \u627e\u5230\u65e5\u5fd7\u8def\u5f84"),(0,r.kt)("p",null,"\u7528\u6237\u670d\u52a1\u5730\u5740\u5b58\u5728\u4e0d\u4e00\u6837\u7684\u60c5\u51b5\uff0c\u6211\u4eec\u9700\u5148\u5b9a\u4f4d\u65e5\u5fd7\u5730\u5740"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"ps -ef | grep  ps-datasource")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(35598).Z,width:"1669",height:"87"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"cg-linkismanager\uff1a"),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"GC\u65e5\u5fd7\uff1a",(0,r.kt)("inlineCode",{parentName:"p"}," /${LINKIS_HOME}/logs/linkis/linkis-cg-linkismanager-gc.log")),(0,r.kt)("p",{parentName:"blockquote"},"\u670d\u52a1\u65e5\u5fd7\uff1a",(0,r.kt)("inlineCode",{parentName:"p"}," /${LINKIS_HOME}/logs/linkis/linkis-cg-linkismanager.log")),(0,r.kt)("p",{parentName:"blockquote"},"\u670d\u52a1\u7684System.out\u65e5\u5fd7\uff1a",(0,r.kt)("inlineCode",{parentName:"p"}," /${LINKIS_HOME}/logs/linkis/linkis-cg-linkismanager.out")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"cg-engineplugin\uff1a"),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"GC\u65e5\u5fd7\uff1a",(0,r.kt)("inlineCode",{parentName:"p"}," /${LINKIS_HOME}/logs/linkis/linkis-cg-engineplugin-gc.log")),(0,r.kt)("p",{parentName:"blockquote"},"\u670d\u52a1\u65e5\u5fd7\uff1a",(0,r.kt)("inlineCode",{parentName:"p"}," /${LINKIS_HOME}/logs/linkis/linkis-cg-engineplugin.log")),(0,r.kt)("p",{parentName:"blockquote"},"\u670d\u52a1\u7684System.out\u65e5\u5fd7\uff1a",(0,r.kt)("inlineCode",{parentName:"p"}," /${LINKIS_HOME}/logs/linkis/linkis-cg-engineplugin.out")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"cg-engineconnmanager\uff1a"),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"GC\u65e5\u5fd7\uff1a",(0,r.kt)("inlineCode",{parentName:"p"}," /${LINKIS_HOME}/logs/linkis/linkis-cg-engineconnmanager-gc.log")),(0,r.kt)("p",{parentName:"blockquote"},"\u670d\u52a1\u65e5\u5fd7\uff1a",(0,r.kt)("inlineCode",{parentName:"p"}," /${LINKIS_HOME}/logs/linkis/linkis-cg-engineconnmanager.log")),(0,r.kt)("p",{parentName:"blockquote"},"\u670d\u52a1\u7684System.out\u65e5\u5fd7\uff1a",(0,r.kt)("inlineCode",{parentName:"p"}," /${LINKIS_HOME}/logs/linkis/linkis-cg-engineconnmanager.out")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"cg-entrance\uff1a"),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"GC\u65e5\u5fd7\uff1a",(0,r.kt)("inlineCode",{parentName:"p"}," /${LINKIS_HOME}/logs/linkis/linkis-cg-entrance-gc.log")),(0,r.kt)("p",{parentName:"blockquote"},"\u670d\u52a1\u65e5\u5fd7\uff1a",(0,r.kt)("inlineCode",{parentName:"p"}," /${LINKIS_HOME}/logs/linkis/linkis-cg-entrance.log")),(0,r.kt)("p",{parentName:"blockquote"},"\u670d\u52a1\u7684System.out\u65e5\u5fd7\uff1a",(0,r.kt)("inlineCode",{parentName:"p"}," /${LINKIS_HOME}/logs/linkis/linkis-cg-entrance.out")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"ps-bml\uff1a"),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"GC\u65e5\u5fd7\uff1a",(0,r.kt)("inlineCode",{parentName:"p"}," /${LINKIS_HOME}/logs/linkis/linkis-ps-bml-gc.log")),(0,r.kt)("p",{parentName:"blockquote"},"\u670d\u52a1\u65e5\u5fd7\uff1a",(0,r.kt)("inlineCode",{parentName:"p"}," /${LINKIS_HOME}/logs/linkis/linkis-ps-bml.log")),(0,r.kt)("p",{parentName:"blockquote"},"\u670d\u52a1\u7684System.out\u65e5\u5fd7\uff1a",(0,r.kt)("inlineCode",{parentName:"p"}," /${LINKIS_HOME}/logs/linkis/linkis-ps-bml.out")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"ps-cs\uff1a"),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"GC\u65e5\u5fd7\uff1a",(0,r.kt)("inlineCode",{parentName:"p"}," /${LINKIS_HOME}/logs/linkis/linkis-ps-cs-gc.log")),(0,r.kt)("p",{parentName:"blockquote"},"\u670d\u52a1\u65e5\u5fd7\uff1a",(0,r.kt)("inlineCode",{parentName:"p"}," /${LINKIS_HOME}/logs/linkis/linkis-ps-cs.log")),(0,r.kt)("p",{parentName:"blockquote"},"\u670d\u52a1\u7684System.out\u65e5\u5fd7\uff1a",(0,r.kt)("inlineCode",{parentName:"p"}," /${LINKIS_HOME}/logs/linkis/linkis-ps-cs.out")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"ps-datasource\uff1a"),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"GC\u65e5\u5fd7\uff1a",(0,r.kt)("inlineCode",{parentName:"p"}," /${LINKIS_HOME}/logs/linkis/linkis-ps-datasource-gc.log")),(0,r.kt)("p",{parentName:"blockquote"},"\u670d\u52a1\u65e5\u5fd7\uff1a",(0,r.kt)("inlineCode",{parentName:"p"}," /${LINKIS_HOME}/logs/linkis/linkis-ps-datasource.log")),(0,r.kt)("p",{parentName:"blockquote"},"\u670d\u52a1\u7684System.out\u65e5\u5fd7\uff1a",(0,r.kt)("inlineCode",{parentName:"p"}," /${LINKIS_HOME}/logs/linkis/linkis-ps-datasource.out")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"ps-publicservice\uff1a"),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"GC\u65e5\u5fd7\uff1a",(0,r.kt)("inlineCode",{parentName:"p"}," /${LINKIS_HOME}/logs/linkis/linkis-ps-publicservice-gc.log")),(0,r.kt)("p",{parentName:"blockquote"},"\u670d\u52a1\u65e5\u5fd7\uff1a",(0,r.kt)("inlineCode",{parentName:"p"}," /${LINKIS_HOME}/logs/linkis/linkis-ps-publicservice.log")),(0,r.kt)("p",{parentName:"blockquote"},"\u670d\u52a1\u7684System.out\u65e5\u5fd7\uff1a",(0,r.kt)("inlineCode",{parentName:"p"}," /${LINKIS_HOME}/logs/linkis/linkis-ps-publicservice.out"))))),(0,r.kt)("h3",{id:"4-\u67e5\u770b\u65e5\u5fd7"},"4. \u67e5\u770b\u65e5\u5fd7"),(0,r.kt)("p",null,"\u5c55\u793a\u63a5\u53e3\u5bf9\u5e94\u7684\u62a5\u9519\u4fe1\u606f"),(0,r.kt)("p",null,"\u627e\u5230\u8bf7\u6c42\u65e5\u5fd7\uff0c\u65e5\u5fd7\u4e2d\u4f1a\u5c55\u793a\u51fa\u670d\u52a1\u8c03\u7528\u7684\u5176\u4ed6\u670d\u52a1\uff0c\u6216\u8005\u5c55\u793a\u81ea\u5df1\u670d\u52a1\u4e2d\u5904\u7406\u7684\u903b\u8f91\u65e5\u5fd7"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"tail -fn200 linkis-ps-data-source-manager.log")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(6260).Z,width:"1646",height:"137"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u4e0a\u56fe\u5c55\u793a\u7684\u662f\u670d\u52a1\u8c03\u7528\u5176\u4ed6\u670d\u52a1\u7684\u65e5\u5fd7\uff0c\u53ef\u6839\u636e\u6b64\u4fe1\u606f\u67e5\u8be2\u53e6\u5916\u670d\u52a1\u7684\u65e5\u5fd7")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u4e0b\u56fe\u5c55\u793a\u7684\u662f\u771f\u6b63\u62a5\u9519\u7684\u670d\u52a1\u65e5\u5fd7")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"tail -fn200 linkis-ps-metadataquery.log")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(34333).Z,width:"1640",height:"288"})),(0,r.kt)("p",null,"\u524d\u7aef\u62a5\u9519\u5c55\u793a"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(58915).Z,width:"1916",height:"890"})),(0,r.kt)("h3",{id:"5-\u5f02\u5e38\u5b9a\u4f4d"},"5. \u5f02\u5e38\u5b9a\u4f4d"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'ECMResourceClear failed, ecm current resource:bdpuje\ns110003:9102{"instance":0,"memory":"0.0 B","cpu":0} org.apache.linkis.manager.exception.PersistenceErrorException: errCode: 210001 ,desc: label not found, this label may be removed a\nlready. , ip: localhost110003 ,port: 9101 ,serviceKind: linkis-cg-linkismanager')),(0,r.kt)("p",null,"\u5176\u4e2dIP\u548c\u7aef\u53e3\u662f\u5bf9\u5e94\u7684\u670d\u52a1\u5730\u5740\uff0cserviceKind\u662f\u5bf9\u5e94\u7684\u670d\u52a1\u540d\u79f0\uff0c\u5982\u679c\u662fRPC\u8c03\u7528\u7684\u65e5\u5fd7\u5931\u8d25\uff0c\u53ef\u4ee5\u901a\u8fc7\u8fd9\u4e2a\u4fe1\u606f\u627e\u5230\u5bf9\u5e94\u7684\u670d\u52a1"))}s.isMDXComponent=!0},6260:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/datasourcemanager-6c67b0e0cf0848327577a0c05f8e4747.png"},58915:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/errorMsg-88d1f6cc5014a71c29b3b82b37488145.png"},34333:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/errorMsgFromMeta-f6d29bacd8e9e014f069ac53600ec35e.png"},20877:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/findUrl-f95a232e17346ffde45cab3be9b66921.png"},35598:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/logs-1dc64535371b2f8171457d30629f9d69.png"}}]);