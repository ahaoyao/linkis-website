"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[75],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return k}});var r=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var c=r.createContext({}),u=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=u(t.components);return r.createElement(c.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,a=t.originalType,c=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),m=u(n),k=i,d=m["".concat(c,".").concat(k)]||m[k]||s[k]||a;return n?r.createElement(d,o(o({ref:e},p),{},{components:n})):r.createElement(d,o({ref:e},p))}));function k(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:i,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},67997:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=["components"],l={title:"Linkis Client \u67b6\u6784\u8bbe\u8ba1",sidebar_position:4},c=void 0,u={unversionedId:"architecture/computation-governance-services/linkis-cli",id:"version-1.1.2/architecture/computation-governance-services/linkis-cli",isDocsHomePage:!1,title:"Linkis Client \u67b6\u6784\u8bbe\u8ba1",description:"\u4e3a\u7528\u6237\u63d0\u4f9b\u5411Linkis\u63d0\u4ea4\u6267\u884c\u4efb\u52a1\u7684\u8f7b\u91cf\u7ea7\u5ba2\u6237\u7aef\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.1.2/architecture/computation-governance-services/linkis-cli.md",sourceDirName:"architecture/computation-governance-services",slug:"/architecture/computation-governance-services/linkis-cli",permalink:"/zh-CN/docs/1.1.2/architecture/computation-governance-services/linkis-cli",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.1.2/architecture/computation-governance-services/linkis-cli.md",tags:[],version:"1.1.2",sidebarPosition:4,frontMatter:{title:"Linkis Client \u67b6\u6784\u8bbe\u8ba1",sidebar_position:4},sidebar:"version-1.1.2/tutorialSidebar",previous:{title:"Entrance \u67b6\u6784\u8bbe\u8ba1",permalink:"/zh-CN/docs/1.1.2/architecture/computation-governance-services/entrance"},next:{title:"Proxy User Mode",permalink:"/zh-CN/docs/1.1.2/architecture/computation-governance-services/proxy-user"}},p=[],s={toc:p};function m(t){var e=t.components,l=(0,i.Z)(t,o);return(0,a.kt)("wrapper",(0,r.Z)({},s,l,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u4e3a\u7528\u6237\u63d0\u4f9b\u5411Linkis\u63d0\u4ea4\u6267\u884c\u4efb\u52a1\u7684\u8f7b\u91cf\u7ea7\u5ba2\u6237\u7aef\u3002"),(0,a.kt)("h4",{id:"linkis-client\u67b6\u6784\u56fe"},"Linkis-Client\u67b6\u6784\u56fe"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img",src:n(2996).Z})),(0,a.kt)("h4",{id:"\u4e8c\u7ea7\u6a21\u5757\u4ecb\u7ecd"},"\u4e8c\u7ea7\u6a21\u5757\u4ecb\u7ecd"),(0,a.kt)("h5",{id:"linkis-computation-client"},"Linkis-Computation-Client"),(0,a.kt)("p",null,"\u4ee5SDK\u7684\u5f62\u5f0f\u4e3a\u7528\u6237\u63d0\u4f9b\u5411Linkis\u63d0\u4ea4\u6267\u884c\u4efb\u52a1\u7684\u63a5\u53e3\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u6838\u5fc3\u7c7b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u6838\u5fc3\u529f\u80fd"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Action"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5b9a\u4e49\u4e86\u8bf7\u6c42\u7684\u5c5e\u6027\uff0c\u5305\u542b\u7684\u65b9\u6cd5\u548c\u53c2\u6570")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Result"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5b9a\u4e49\u4e86\u8fd4\u56de\u7ed3\u679c\u7684\u5c5e\u6027\uff0c\u5305\u542b\u7684\u65b9\u6cd5\u548c\u53c2\u6570")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"UJESClient"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8d1f\u8d23\u8bf7\u6c42\u7684\u63d0\u4ea4\uff0c\u6267\u884c\uff0c\u72b6\u6001\u3001\u7ed3\u679c\u548c\u76f8\u5173\u53c2\u6570\u7684\u83b7\u53d6")))),(0,a.kt)("h5",{id:"linkis-cli"},"Linkis-Cli"),(0,a.kt)("p",null,"\u4ee5shell\u547d\u4ee4\u7aef\u7684\u5f62\u5f0f\u4e3a\u7528\u6237\u63d0\u4f9b\u5411Linkis\u63d0\u4ea4\u6267\u884c\u4efb\u52a1\u7684\u65b9\u5f0f\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u6838\u5fc3\u7c7b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u6838\u5fc3\u529f\u80fd"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Common"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5b9a\u4e49\u4e86\u6307\u4ee4\u6a21\u677f\u7236\u7c7b\u3001\u6307\u4ee4\u89e3\u6790\u5b9e\u4f53\u7c7b\u3001\u4efb\u52a1\u63d0\u4ea4\u6267\u884c\u5404\u73af\u8282\u7684\u7236\u7c7b\u548c\u63a5\u53e3")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Core"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8d1f\u8d23\u89e3\u6790\u8f93\u5165\u3001\u4efb\u52a1\u6267\u884c\u548c\u5b9a\u4e49\u8f93\u51fa\u65b9\u5f0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Application"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8c03\u7528linkis-computation-client\u6267\u884c\u4efb\u52a1\uff0c\u5e76\u5b9e\u65f6\u62c9\u53d6\u65e5\u5fd7\u548c\u6700\u7ec8\u7ed3\u679c")))))}m.isMDXComponent=!0},2996:function(t,e,n){e.Z=n.p+"assets/images/linkis-client-01-741a1ba0a041967a2b2b33bbd11baa75.png"}}]);