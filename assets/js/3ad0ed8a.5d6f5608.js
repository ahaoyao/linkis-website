"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[97637],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?o.createElement(f,a(a({ref:t},p),{},{components:n})):o.createElement(f,a({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},64367:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var o=n(87462),r=(n(67294),n(3905));const i={title:"Concurrent Specification",sidebar_position:5},a=void 0,c={unversionedId:"development/development-specification/concurrent",id:"version-1.3.1/development/development-specification/concurrent",title:"Concurrent Specification",description:"1. [Compulsory] Make sure getting a singleton object to be thread-safe. Operating inside singletons should also be kept thread-safe.",source:"@site/versioned_docs/version-1.3.1/development/development-specification/concurrent.md",sourceDirName:"development/development-specification",slug:"/development/development-specification/concurrent",permalink:"/docs/latest/development/development-specification/concurrent",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/versioned_docs/version-1.3.1/development/development-specification/concurrent.md",tags:[],version:"1.3.1",sidebarPosition:5,frontMatter:{title:"Concurrent Specification",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"API Specification",permalink:"/docs/latest/development/development-specification/api"},next:{title:"Path Usage Specification",permalink:"/docs/latest/development/development-specification/path-usage"}},s={},l=[],p={toc:l};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"[",(0,r.kt)("strong",{parentName:"li"},"Compulsory"),"]"," Make sure getting a singleton object to be thread-safe. Operating inside singletons should also be kept thread-safe."),(0,r.kt)("li",{parentName:"ol"},"[",(0,r.kt)("strong",{parentName:"li"},"Compulsory"),"]"," Thread resources must be provided through the thread pool, and it is not allowed to explicitly create threads in the application."),(0,r.kt)("li",{parentName:"ol"},"SimpleDateFormat is a thread-unsafe class. It is recommended to use the DataUtils utility class."),(0,r.kt)("li",{parentName:"ol"},"[",(0,r.kt)("strong",{parentName:"li"},"Compulsory"),"]"," At high concurrency, synchronous calls should consider the performance cost of locking. If you can use lockless data structures, don't use locks. If you can lock blocks, don't lock the whole method body. If you can use object locks, don't use class locks."),(0,r.kt)("li",{parentName:"ol"},"[",(0,r.kt)("strong",{parentName:"li"},"Compulsory"),"]"," Use ThreadLocal as less as possible. Everytime using ThreadLocal and it holds an object which needs to be closed, remember to close it to release.")))}u.isMDXComponent=!0}}]);