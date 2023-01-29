"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[48904],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>m});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),c=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=c(e.components);return n.createElement(p.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return t?n.createElement(f,i(i({ref:r},s),{},{components:t})):n.createElement(f,i({ref:r},s))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},77801:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=t(87462),a=(t(67294),t(3905));const o={title:"Spark \u5f15\u64ce\u53c2\u6570\u8c03\u6574",sidebar_position:4},i=void 0,l={unversionedId:"user-guide/control-panel/spark-param",id:"user-guide/control-panel/spark-param",title:"Spark \u5f15\u64ce\u53c2\u6570\u8c03\u6574",description:"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u5bf9 Spark \u5f15\u64ce\u8fdb\u884c\u53c2\u6570\u8c03\u6574\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/user-guide/control-panel/spark-param.md",sourceDirName:"user-guide/control-panel",slug:"/user-guide/control-panel/spark-param",permalink:"/zh-CN/docs/1.3.2/user-guide/control-panel/spark-param",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/current/user-guide/control-panel/spark-param.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Spark \u5f15\u64ce\u53c2\u6570\u8c03\u6574",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\u5168\u5c40\u53d8\u91cf",permalink:"/zh-CN/docs/1.3.2/user-guide/control-panel/global-variable"},next:{title:"ECM \u7ba1\u7406",permalink:"/zh-CN/docs/1.3.2/user-guide/control-panel/ecm-management"}},p={},c=[{value:"1. \u8c03\u6574\u5f15\u64ce\u53c2\u6570",id:"1-\u8c03\u6574\u5f15\u64ce\u53c2\u6570",level:2},{value:"2. \u589e\u52a0\u5f15\u64ce\u6267\u884c\u901f\u5ea6",id:"2-\u589e\u52a0\u5f15\u64ce\u6267\u884c\u901f\u5ea6",level:2},{value:"3. Driver \u5904\u7406\u5927\u6570\u636e",id:"3-driver-\u5904\u7406\u5927\u6570\u636e",level:2}],s={toc:c};function u(e){let{components:r,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,o,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u5bf9 Spark \u5f15\u64ce\u8fdb\u884c\u53c2\u6570\u8c03\u6574\u3002"),(0,a.kt)("h2",{id:"1-\u8c03\u6574\u5f15\u64ce\u53c2\u6570"},"1. \u8c03\u6574\u5f15\u64ce\u53c2\u6570"),(0,a.kt)("p",null,"\u7528\u6237\u53ef\u4ee5\u6839\u636e\u9700\u6c42\u5728\u7ba1\u7406\u53f0\u8c03\u6574 Spark \u53c2\u6570\u3002Linkis \u7ba1\u7406\u53f0 ==\u300b \u53c2\u6570\u8bbe\u7f6e ==\u300b \u9009\u62e9\u76f8\u5e94\u5e94\u7528 ==\u300b \u70b9\u51fb Spark \u5f15\u64ce\u4f1a\u663e\u793a Spark \u53ef\u8bbe\u7f6e\u7684\u53c2\u6570\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(48999).Z,width:"1261",height:"594"})),(0,a.kt)("h2",{id:"2-\u589e\u52a0\u5f15\u64ce\u6267\u884c\u901f\u5ea6"},"2. \u589e\u52a0\u5f15\u64ce\u6267\u884c\u901f\u5ea6"),(0,a.kt)("p",null,"\u5982\u679c\u60f3\u8981\u5f15\u64ce\u6267\u884c\u7684\u66f4\u5feb\uff0c\u53ef\u4ee5\u8c03\u6574\u6267\u884c\u5668\u4e2a\u6570\uff0c\u6267\u884c\u5668\u6838\u5fc3\u4e2a\u6570\u8d8a\u591a\u6267\u884c\u6548\u7387\u8d8a\u9ad8\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(46918).Z,width:"1272",height:"593"})),(0,a.kt)("h2",{id:"3-driver-\u5904\u7406\u5927\u6570\u636e"},"3. Driver \u5904\u7406\u5927\u6570\u636e"),(0,a.kt)("p",null,"\u5982\u679c\u9700\u8981\u62c9\u53d6\u5927\u6570\u636e\u518d Driver \u5904\u7406\uff0c\u9700\u8981\u8c03\u6574\u9a71\u52a8\u5185\u5b58\u53c2\u6570\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(39129).Z,width:"1249",height:"585"})))}u.isMDXComponent=!0},46918:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/executor-count-1dd2a1b567d3d595b1727f3130d14350.png"},39129:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/executor-memory-b93c23585c4ac139aba0e665ac8bedb5.png"},48999:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/set-spark-param-de5b1c87fe4625921692e5cd5b513aef.png"}}]);