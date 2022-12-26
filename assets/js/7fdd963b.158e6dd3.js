"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[99688],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,g=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(g,o(o({ref:t},l),{},{components:r})):n.createElement(g,o({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},35316:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const i={title:"Spark Engine Parameter Adjustment",sidebar_position:4},o=void 0,s={unversionedId:"user-guide/control-panel/spark-param",id:"user-guide/control-panel/spark-param",title:"Spark Engine Parameter Adjustment",description:"This article describes how to adjust the parameters of the Spark engine.",source:"@site/docs/user-guide/control-panel/spark-param.md",sourceDirName:"user-guide/control-panel",slug:"/user-guide/control-panel/spark-param",permalink:"/docs/1.3.1/user-guide/control-panel/spark-param",draft:!1,editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/docs/user-guide/control-panel/spark-param.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Spark Engine Parameter Adjustment",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Global Variable",permalink:"/docs/1.3.1/user-guide/control-panel/global-variable"},next:{title:"ECM Management",permalink:"/docs/1.3.1/user-guide/control-panel/ecm-management"}},c={},p=[{value:"1. Adjust engine parameters",id:"1-adjust-engine-parameters",level:2},{value:"2. Increase engine execution speed",id:"2-increase-engine-execution-speed",level:2},{value:"3. Driver handles big data",id:"3-driver-handles-big-data",level:2}],l={toc:p};function u(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This article describes how to adjust the parameters of the Spark engine."),(0,a.kt)("h2",{id:"1-adjust-engine-parameters"},"1. Adjust engine parameters"),(0,a.kt)("p",null,'Users can adjust Spark parameters on the management console according to their needs. Linkis management console == "parameter setting ==" select the corresponding application == "click the Spark engine to display the parameters that can be set by Spark.'),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(6271).Z,width:"1262",height:"700"})),(0,a.kt)("h2",{id:"2-increase-engine-execution-speed"},"2. Increase engine execution speed"),(0,a.kt)("p",null,"If you want the engine to execute faster, you can adjust the number of executors. The more executor cores, the higher the execution efficiency."),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(68179).Z,width:"1260",height:"733"})),(0,a.kt)("h2",{id:"3-driver-handles-big-data"},"3. Driver handles big data"),(0,a.kt)("p",null,"If you need to pull large data and then process it with the Driver, you need to adjust the driver memory parameters."),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(81339).Z,width:"1263",height:"737"})))}u.isMDXComponent=!0},68179:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/executor-count-e70ff6b7d87fcebfdbc3b295fc492efb.png"},81339:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/executor-memory-ea91a9654078bbf9f74215586e742039.png"},6271:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/set-spark-param-048643d5814d7eb6e416bc710c47417f.png"}}]);