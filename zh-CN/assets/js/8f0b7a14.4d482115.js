"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[50552],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,v=d["".concat(s,".").concat(m)]||d[m]||u[m]||l;return r?n.createElement(v,o(o({ref:t},p),{},{components:r})):n.createElement(v,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},41437:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const l={title:"\u5355\u4e2a\u670d\u52a1\u7684\u542f\u52a8",sidebar_position:1},o=void 0,i={unversionedId:"development/start-server",id:"version-0.11.0/development/start-server",title:"\u5355\u4e2a\u670d\u52a1\u7684\u542f\u52a8",description:"1 \u8df3\u8f6c\u5230\u5230\u5bf9\u5e94\u7684\u670d\u52a1\u76ee\u5f55",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.11.0/development/start-server.md",sourceDirName:"development",slug:"/development/start-server",permalink:"/zh-CN/docs/0.11.0/development/start-server",draft:!1,editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.11.0/development/start-server.md",tags:[],version:"0.11.0",sidebarPosition:1,frontMatter:{title:"\u5355\u4e2a\u670d\u52a1\u7684\u542f\u52a8",sidebar_position:1},sidebar:"version-1.0.2/tutorialSidebar",previous:{title:"\u5355\u4e2a\u670d\u52a1\u7684\u5b89\u88c5",permalink:"/zh-CN/docs/0.11.0/development/install-server"},next:{title:"\u5982\u4f55\u5b9e\u73b0\u4e00\u4e2a\u65b0\u5f15\u64ce",permalink:"/zh-CN/docs/0.11.0/development/new-engine-conn"}},s={},c=[{value:"1 \u8df3\u8f6c\u5230\u5230\u5bf9\u5e94\u7684\u670d\u52a1\u76ee\u5f55",id:"1-\u8df3\u8f6c\u5230\u5230\u5bf9\u5e94\u7684\u670d\u52a1\u76ee\u5f55",level:2},{value:"2 \u6267\u884c\u542f\u52a8",id:"2-\u6267\u884c\u542f\u52a8",level:2},{value:"3 \u542f\u52a8\u6210\u529f\u68c0\u67e5",id:"3-\u542f\u52a8\u6210\u529f\u68c0\u67e5",level:2}],p={toc:c};function u(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1-\u8df3\u8f6c\u5230\u5230\u5bf9\u5e94\u7684\u670d\u52a1\u76ee\u5f55"},"1 \u8df3\u8f6c\u5230\u5230\u5bf9\u5e94\u7684\u670d\u52a1\u76ee\u5f55"),(0,a.kt)("p",null,"\u6bd4\u5982PublicService"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"    cd linkis-publicservice\n")),(0,a.kt)("h2",{id:"2-\u6267\u884c\u542f\u52a8"},"2 \u6267\u884c\u542f\u52a8"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"    sh start-publicservice.sh\n")),(0,a.kt)("h2",{id:"3-\u542f\u52a8\u6210\u529f\u68c0\u67e5"},"3 \u542f\u52a8\u6210\u529f\u68c0\u67e5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"(1). \u5224\u65ad\u65e5\u5fd7\u53ef\u4ee5\u901a\u8fc7\u67e5\u770blinkis.out")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"    less -i logs/linkis.out\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"(2). \u901a\u8fc7\u67e5\u770bEureka\u754c\u9762")),(0,a.kt)("p",null,"\u5728Eureka\u754c\u9762\u67e5\u770b\u670d\u52a1\u542f\u52a8\u6210\u529f\u60c5\u51b5\uff0c\u67e5\u770b\u65b9\u6cd5\uff1a"),(0,a.kt)("p",null,"\u4f7f\u7528http://${EUREKA_INSTALL_IP}:${EUREKA_PORT}, \u5728\u6d4f\u89c8\u5668\u4e2d\u6253\u5f00\uff0c\u67e5\u770b\u670d\u52a1\u662f\u5426\u6ce8\u518c\u6210\u529f\u3002"),(0,a.kt)("p",null,"\u5982\u4e0b\u56fe\uff0c\u5982\u60a8\u7684Eureka\u4e3b\u9875\u51fa\u73b0\u4e86\u76f8\u5e94\u7684\u5fae\u670d\u52a1\uff0c\u5219\u8868\u793a\u670d\u52a1\u542f\u52a8\u6210\u529f\uff0c\u53ef\u4ee5\u6b63\u5e38\u5bf9\u5916\u63d0\u4f9b\u670d\u52a1\u4e86\uff1a "),(0,a.kt)("p",null," ",(0,a.kt)("img",{alt:"Eureka",src:r(57924).Z,width:"1920",height:"970"})))}u.isMDXComponent=!0},57924:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/Eureka_homepage-de09b1b756300a8b4878cfd9b547ea86.png"}}]);