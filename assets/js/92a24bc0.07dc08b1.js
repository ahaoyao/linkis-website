"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[53040],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},s=Object.keys(e);for(i=0;i<s.length;i++)t=s[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)t=s[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=i.createContext({}),d=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=d(e.components);return i.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},p=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=d(t),m=r,g=p["".concat(l,".").concat(m)]||p[m]||c[m]||s;return t?i.createElement(g,o(o({ref:n},u),{},{components:t})):i.createElement(g,o({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,o=new Array(s);o[0]=p;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,o[1]=a;for(var d=2;d<s;d++)o[d]=t[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}p.displayName="MDXCreateElement"},39837:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var i=t(87462),r=(t(67294),t(3905));const s={title:"Session Supports Redis Shared Storage",sidebar_position:8},o=void 0,a={unversionedId:"user-guide/sso-with-redis",id:"version-1.3.0/user-guide/sso-with-redis",title:"Session Supports Redis Shared Storage",description:"1. Background",source:"@site/versioned_docs/version-1.3.0/user-guide/sso-with-redis.md",sourceDirName:"user-guide",slug:"/user-guide/sso-with-redis",permalink:"/docs/1.3.0/user-guide/sso-with-redis",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/versioned_docs/version-1.3.0/user-guide/sso-with-redis.md",tags:[],version:"1.3.0",sidebarPosition:8,frontMatter:{title:"Session Supports Redis Shared Storage",sidebar_position:8},sidebar:"version-1.3.0/tutorialSidebar",previous:{title:"Built-in Time Variable",permalink:"/docs/1.3.0/user-guide/dynamic-variables"},next:{title:"Overview",permalink:"/docs/1.3.0/engine-usage/overview"}},l={},d=[{value:"1. Background",id:"1-background",level:2},{value:"2.Implementation plan",id:"2implementation-plan",level:2},{value:"3.How to use",id:"3how-to-use",level:2}],u={toc:d};function c(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1-background"},"1. Background"),(0,r.kt)("p",null,"Because the original login session does not support distributed storage, for all requests from the same user, nginx needs to forward the requests to the same gateway instance to process the requests normally.\nThe common solution is to support it by configuring ip hash load balancing on the ingress nginx.\nHowever, in the ip hash method, if there is an expansion or contraction of the server, the hash values \u200b\u200bof all client ips need to be recalculated, which will result in session loss.\nSecondly, it is easy to cause data skew problems due to uneven node distribution.\nIn order to optimize the problems existing in the ip hash method, shared storage is implemented for the session in the login state."),(0,r.kt)("h2",{id:"2implementation-plan"},"2.Implementation plan"),(0,r.kt)("p",null,"Because session information is mainly identified by ticketId, and all external entrances are gateways, only the gateway module needs to be modified.\nFor the underlying shared storage, choose the mainstream in-memory database redis. For whether to start redis session storage, it supports configuration file control.\nThe key code change is ",(0,r.kt)("inlineCode",{parentName:"p"},"userTicketIdToLastAccessTime")," of ",(0,r.kt)("inlineCode",{parentName:"p"},"org.apache.linkis.server.security.SSOUtils"),"."),(0,r.kt)("p",null,"Request process:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"User request -> nginx -> linkis-gateway -> linkis backend service")),(0,r.kt)("h2",{id:"3how-to-use"},"3.How to use"),(0,r.kt)("p",null,"An available reids environment is required to support stand-alone redis and redis sentinel mode."),(0,r.kt)("p",null,"After installing and deploying Linkis, modify the configuration file ",(0,r.kt)("inlineCode",{parentName:"p"},"${LINKIS_HOME}/conf/linkis.properties")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"#Open redis cache configuration\nlinkis.session.redis.cache.enabled=true\n\n\n#single vision\nlinkis.session.redis.host=127.0.0.1\nlinkis.session.redis.port=6379\nlinkis.session.redis.password=test123\n\n# Sentinel mode\nlinkis.session.redis.sentinel.master=sentinel-master-name\nlinkis.session.redis.sentinel.nodes=192.168.1.1:6381,192.168.2.1:6381,192.168.3.1:6381\nlinkis.session.redis.password=test123\n\n")),(0,r.kt)("p",null,"The gateway can be enabled normally. After starting redis, for multiple gateway examples, when configuring on the nginx side, you can use the default load balancing mode of nginx."))}c.isMDXComponent=!0}}]);