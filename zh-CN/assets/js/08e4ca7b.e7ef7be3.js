"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[45882],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return k}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(n),k=a,d=m["".concat(p,".").concat(k)]||m[k]||s[k]||i;return n?r.createElement(d,l(l({ref:t},c),{},{components:n})):r.createElement(d,l({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},56763:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return c},default:function(){return m}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l=["components"],o={title:"\u63a5\u53e3\u89c4\u8303",sidebar_position:4},p=void 0,u={unversionedId:"development-specification/api",id:"development-specification/api",title:"\u63a5\u53e3\u89c4\u8303",description:"Contributor\u4e3aLinkis\u8d21\u732e\u65b0\u7684Restful\u63a5\u53e3\u65f6\uff0c\u9700\u9075\u5faa\u5982\u4e0b\u63a5\u53e3\u89c4\u8303\u8fdb\u884c\u63a5\u53e3\u5f00\u53d1\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs-community/current/development-specification/api.md",sourceDirName:"development-specification",slug:"/development-specification/api",permalink:"/zh-CN/community/development-specification/api",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/i18n/zh-CN/development-specification/api.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"\u63a5\u53e3\u89c4\u8303",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\u5f02\u5e38\u89c4\u8303",permalink:"/zh-CN/community/development-specification/exception-catch"},next:{title:"\u5e76\u53d1\u89c4\u8303",permalink:"/zh-CN/community/development-specification/concurrent"}},c=[{value:"1. HTTP or WebSocket ?",id:"1-http-or-websocket-",children:[],level:2},{value:"2. URL\u89c4\u8303",id:"2-url\u89c4\u8303",children:[],level:2},{value:"3. \u63a5\u53e3\u8bf7\u6c42\u683c\u5f0f",id:"3-\u63a5\u53e3\u8bf7\u6c42\u683c\u5f0f",children:[],level:2},{value:"4. \u63a5\u53e3\u8fd4\u56de\u683c\u5f0f",id:"4-\u63a5\u53e3\u8fd4\u56de\u683c\u5f0f",children:[],level:2}],s={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Contributor\u4e3aLinkis\u8d21\u732e\u65b0\u7684Restful\u63a5\u53e3\u65f6\uff0c\u9700\u9075\u5faa\u5982\u4e0b\u63a5\u53e3\u89c4\u8303\u8fdb\u884c\u63a5\u53e3\u5f00\u53d1\u3002")),(0,i.kt)("h2",{id:"1-http-or-websocket-"},"1. HTTP or WebSocket ?"),(0,i.kt)("p",null,"Linkis\u76ee\u524d\u63d0\u4f9b\u4e86\u4e24\u79cd\u63a5\u53e3\u65b9\u5f0f\uff1aHTTP\u548cWebSocket\u3002"),(0,i.kt)("p",null,"WebSocket\u76f8\u6bd4\u4e8eHTTP\u7684\u4f18\u52bf\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5bf9\u670d\u52a1\u5668\u4ea7\u751f\u7684\u538b\u529b\u66f4\u5c0f"),(0,i.kt)("li",{parentName:"ul"},"\u4fe1\u606f\u63a8\u9001\u66f4\u52a0\u53ca\u65f6"),(0,i.kt)("li",{parentName:"ul"},"\u4ea4\u4e92\u6027\u66f4\u52a0\u53cb\u597d")),(0,i.kt)("p",null,"\u76f8\u5e94\u7684\uff0cWebSocket\u4e5f\u6709\u5982\u4e0b\u7684\u52a3\u52bf\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"WebSocket\u5728\u4f7f\u7528\u65f6\u53ef\u80fd\u51fa\u73b0\u65ad\u5f00\u8fde\u63a5\u7684\u60c5\u51b5"),(0,i.kt)("li",{parentName:"ul"},"\u5bf9\u524d\u7aef\u7684\u6280\u672f\u8981\u6c42\u66f4\u9ad8"),(0,i.kt)("li",{parentName:"ul"},"\u4e00\u822c\u8981\u6c42\u524d\u7aef\u6709\u964d\u7ea7\u5904\u7406\u673a\u5236")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u5982\u975e\u5fc5\u8981\uff0c\u6211\u4eec\u901a\u5e38\u5f3a\u70c8\u5efa\u8baeContributor\u5c3d\u91cf\u5c11\u7528WebSocket\u7684\u65b9\u5f0f\u63d0\u4f9b\u63a5\u53e3\uff1b")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u5982\u60a8\u89c9\u5f97\u4f7f\u7528WebSocket\u5f88\u6709\u5fc5\u8981\uff0c\u4e14\u613f\u610f\u5c06\u5f00\u53d1\u7684\u529f\u80fd\u8d21\u732e\u7ed9Linkis\uff0c\u5efa\u8bae\u60a8\u5728\u5f00\u53d1\u524d\u4e0e\u6211\u4eec\u53d6\u5f97\u6c9f\u901a\uff0c\u591a\u8c22\uff01")),(0,i.kt)("h2",{id:"2-url\u89c4\u8303"},"2. URL\u89c4\u8303"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/api/rest_j/v1/{applicationName}/.+\n/api/rest_s/v1/{applicationName}/.+\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u7ea6\u5b9a"),"\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"rest_j\u8868\u793a\u63a5\u53e3\u7b26\u5408Jersey\u89c4\u8303"),(0,i.kt)("li",{parentName:"ul"},"rest_s\u8868\u793a\u63a5\u53e3\u7b26\u5408springMVC Rest\u89c4\u8303"),(0,i.kt)("li",{parentName:"ul"},"v1\u4e3a\u670d\u52a1\u7684\u7248\u672c\u53f7\uff0c",(0,i.kt)("strong",{parentName:"li"},"\u7248\u672c\u53f7\u4f1a\u968f\u7740Linkis\u7248\u672c\u8fdb\u884c\u5347\u7ea7")),(0,i.kt)("li",{parentName:"ul"},"{applicationName}\u4e3a\u5fae\u670d\u52a1\u540d")),(0,i.kt)("h2",{id:"3-\u63a5\u53e3\u8bf7\u6c42\u683c\u5f0f"},"3. \u63a5\u53e3\u8bf7\u6c42\u683c\u5f0f"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "method":"/api/rest_j/v1/entrance/execute",\n    "data":{},\n    "websocketTag":"37fcbd8b762d465a0c870684a0261c6e"  // WebSocket\u8bf7\u6c42\u7684\u5fc5\u9700\u53c2\u6570\uff0cHTTP\u8bf7\u6c42\u53ef\u5ffd\u7565\n}\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u7ea6\u5b9a"),"\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"method\uff1a\u8bf7\u6c42\u7684Restful API URL\u3002"),(0,i.kt)("li",{parentName:"ul"},"data\uff1a\u8bf7\u6c42\u7684\u5177\u4f53\u6570\u636e\u3002"),(0,i.kt)("li",{parentName:"ul"},"websocketTag\uff1a\u67d0\u4e00\u6b21WebSocket\u8bf7\u6c42\u7684\u552f\u4e00\u6807\u8bc6\uff0c\u540e\u53f0\u4e5f\u4f1a\u5e26\u56de\u8be5\u53c2\u6570\u7528\u4e8e\u7ed9\u524d\u7aef\u8fdb\u884c\u8bc6\u522b\u3002")),(0,i.kt)("h2",{id:"4-\u63a5\u53e3\u8fd4\u56de\u683c\u5f0f"},"4. \u63a5\u53e3\u8fd4\u56de\u683c\u5f0f"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{"method":"/api/rest_j/v1/project/create","status":0, "message":"\u521b\u5efa\u6210\u529f\uff01","data":{}}\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u7ea6\u5b9a"),"\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"method\uff1a\u8fd4\u56de\u8bf7\u6c42\u7684Restful API URL\uff0c\u4e3b\u8981\u662fwebsocket\u6a21\u5f0f\u9700\u8981\u4f7f\u7528\u3002"),(0,i.kt)("li",{parentName:"ul"},"status\uff1a\u8fd4\u56de\u72b6\u6001\u4fe1\u606f\uff0c\u5176\u4e2d\uff1a-1\u8868\u793a\u6ca1\u6709\u767b\u5f55\uff0c0\u8868\u793a\u6210\u529f\uff0c1\u8868\u793a\u9519\u8bef\uff0c2\u8868\u793a\u9a8c\u8bc1\u5931\u8d25\uff0c3\u8868\u793a\u6ca1\u8be5\u63a5\u53e3\u7684\u8bbf\u95ee\u6743\u9650\u3002"),(0,i.kt)("li",{parentName:"ul"},"data\uff1a\u8fd4\u56de\u5177\u4f53\u7684\u6570\u636e\u3002"),(0,i.kt)("li",{parentName:"ul"},"message\uff1a\u8fd4\u56de\u8bf7\u6c42\u7684\u63d0\u793a\u4fe1\u606f\u3002\u5982\u679cstatus\u975e0\u65f6\uff0cmessage\u8fd4\u56de\u7684\u662f\u9519\u8bef\u4fe1\u606f\uff0c\u5176\u4e2ddata\u6709\u53ef\u80fd\u5b58\u5728stack\u5b57\u6bb5\uff0c\u8fd4\u56de\u5177\u4f53\u7684\u5806\u6808\u4fe1\u606f\u3002 ")),(0,i.kt)("p",null,"\u53e6\uff1a\u6839\u636estatus\u7684\u4e0d\u540c\uff0cHTTP\u8bf7\u6c42\u7684\u72b6\u6001\u7801\u4e5f\u4e0d\u4e00\u6837\uff0c\u4e00\u822c\u60c5\u51b5\u4e0b\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5f53status\u4e3a0\u65f6\uff0cHTTP\u7684\u72b6\u6001\u7801\u4e3a200"),(0,i.kt)("li",{parentName:"ul"},"\u5f53status\u4e3a-1\u65f6\uff0cHTTP\u7684\u72b6\u6001\u7801\u4e3a401"),(0,i.kt)("li",{parentName:"ul"},"\u5f53status\u4e3a1\u65f6\uff0cHTTP\u7684\u72b6\u6001\u7801\u4e3a400"),(0,i.kt)("li",{parentName:"ul"},"\u5f53status\u4e3a2\u65f6\uff0cHTTP\u7684\u72b6\u6001\u7801\u4e3a412"),(0,i.kt)("li",{parentName:"ul"},"\u5f53status\u4e3a3\u65f6\uff0cHTTP\u7684\u72b6\u6001\u7801\u4e3a403")))}m.isMDXComponent=!0}}]);