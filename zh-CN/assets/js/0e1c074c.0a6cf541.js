"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[706],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),o=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=o(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),v=o(n),h=a,d=v["".concat(s,".").concat(h)]||v[h]||p[h]||i;return n?r.createElement(d,c(c({ref:t},u),{},{components:n})):r.createElement(d,c({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=v;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var o=2;o<i;o++)c[o]=n[o];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}v.displayName="MDXCreateElement"},66599:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var r=n(87462),a=(n(67294),n(3905));const i={title:"CS HA \u67b6\u6784\u8bbe\u8ba1",sidebar_position:3},c=void 0,l={unversionedId:"architecture/public-enhancement-services/context-service/context-service-highavailable",id:"version-1.0.3/architecture/public-enhancement-services/context-service/context-service-highavailable",title:"CS HA \u67b6\u6784\u8bbe\u8ba1",description:"CS HA\u67b6\u6784\u8bbe\u8ba1",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.0.3/architecture/public-enhancement-services/context-service/context-service-highavailable.md",sourceDirName:"architecture/public-enhancement-services/context-service",slug:"/architecture/public-enhancement-services/context-service/context-service-highavailable",permalink:"/zh-CN/docs/1.0.3/architecture/public-enhancement-services/context-service/context-service-highavailable",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.0.3/architecture/public-enhancement-services/context-service/context-service-highavailable.md",tags:[],version:"1.0.3",sidebarPosition:3,frontMatter:{title:"CS HA \u67b6\u6784\u8bbe\u8ba1",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"CS Client",permalink:"/zh-CN/docs/1.0.3/architecture/public-enhancement-services/context-service/context-service-client"},next:{title:"CS Listener \u67b6\u6784",permalink:"/zh-CN/docs/1.0.3/architecture/public-enhancement-services/context-service/context-service-listener"}},s={},o=[{value:"<strong>CS HA\u67b6\u6784\u8bbe\u8ba1</strong>",id:"cs-ha\u67b6\u6784\u8bbe\u8ba1",level:2},{value:"1\uff0cCS HA\u67b6\u6784\u6982\u8981",id:"1cs-ha\u67b6\u6784\u6982\u8981",level:3},{value:"\uff081\uff09CS HA\u67b6\u6784\u56fe",id:"1cs-ha\u67b6\u6784\u56fe",level:4},{value:"\uff082\uff09\u8981\u89e3\u51b3\u7684\u95ee\u9898",id:"2\u8981\u89e3\u51b3\u7684\u95ee\u9898",level:4},{value:"\uff083\uff09\u4e3b\u8981\u8bbe\u8ba1\u601d\u8def",id:"3\u4e3b\u8981\u8bbe\u8ba1\u601d\u8def",level:4},{value:"2\uff0c\u6a21\u5757\u8bbe\u8ba1",id:"2\u6a21\u5757\u8bbe\u8ba1",level:3},{value:"\uff081\uff09\u6a21\u5757\u56fe",id:"1\u6a21\u5757\u56fe",level:4},{value:"\uff082\uff09\u5177\u4f53\u6a21\u5757",id:"2\u5177\u4f53\u6a21\u5757",level:4},{value:"3. UML\u7c7b\u56fe",id:"3-uml\u7c7b\u56fe",level:3},{value:"4. HA\u6a21\u5757\u64cd\u4f5c\u65f6\u5e8f\u56fe",id:"4-ha\u6a21\u5757\u64cd\u4f5c\u65f6\u5e8f\u56fe",level:3}],u={toc:o};function p(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"cs-ha\u67b6\u6784\u8bbe\u8ba1"},(0,a.kt)("strong",{parentName:"h2"},"CS HA\u67b6\u6784\u8bbe\u8ba1")),(0,a.kt)("h3",{id:"1cs-ha\u67b6\u6784\u6982\u8981"},"1\uff0cCS HA\u67b6\u6784\u6982\u8981"),(0,a.kt)("h4",{id:"1cs-ha\u67b6\u6784\u56fe"},"\uff081\uff09CS HA\u67b6\u6784\u56fe"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(53870).Z,width:"1102",height:"620"})),(0,a.kt)("h4",{id:"2\u8981\u89e3\u51b3\u7684\u95ee\u9898"},"\uff082\uff09\u8981\u89e3\u51b3\u7684\u95ee\u9898"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Context instance\u5bf9\u8c61\u7684HA")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Client\u521b\u5efa\u5de5\u4f5c\u6d41\u65f6\u751f\u6210CSID\u8bf7\u6c42")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"CS Server\u7684\u522b\u540d\u5217\u8868")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"CSID\u7edf\u4e00\u7684\u751f\u6210\u548c\u89e3\u6790\u89c4\u5219"))),(0,a.kt)("h4",{id:"3\u4e3b\u8981\u8bbe\u8ba1\u601d\u8def"},"\uff083\uff09\u4e3b\u8981\u8bbe\u8ba1\u601d\u8def"),(0,a.kt)("p",null,"\u2460\u8d1f\u8f7d\u5747\u8861"),(0,a.kt)("p",null,"\u5f53\u5ba2\u6237\u7aef\u521b\u5efa\u65b0\u7684\u5de5\u4f5c\u6d41\u65f6\uff0c\u7b49\u6982\u7387\u968f\u673a\u8bf7\u6c42\u5230\u67d0\u53f0Server\u7684HA\u6a21\u5757\u751f\u6210\u65b0\u7684HAID\uff0cHAID\u4fe1\u606f\u5305\u542b\u8be5\u4e3bServer\u4fe1\u606f\uff08\u4ee5\u4e0b\u79f0\u4e3binstance\uff09\uff0c\u548c\u5907\u9009instance\uff0c\u5176\u4e2d\u5907\u9009instance\u4e3a\u5269\u4f59Server\u4e2d\u8d1f\u8f7d\u6700\u4f4e\u7684instance\uff0c\u4ee5\u53ca\u4e00\u4e2a\u5bf9\u5e94\u7684ContextID\u3002\u751f\u6210\u7684HAID\u4e0e\u8be5\u5de5\u4f5c\u6d41\u7ed1\u5b9a\u4e14\u88ab\u6301\u4e45\u5316\u5230\u6570\u636e\u5e93\uff0c\u5e76\u4e14\u968f\u540e\u8be5\u5de5\u4f5c\u6d41\u6240\u6709\u53d8\u66f4\u64cd\u4f5c\u8bf7\u6c42\u90fd\u5c06\u53d1\u9001\u81f3\u4e3binstance\uff0c\u5b9e\u73b0\u8d1f\u8f7d\u7684\u5747\u5300\u5206\u914d\u3002"),(0,a.kt)("p",null,"\u2461\u9ad8\u53ef\u7528"),(0,a.kt)("p",null,"\u5728\u540e\u7eed\u64cd\u4f5c\u4e2d\uff0c\u5f53\u5ba2\u6237\u7aef\u6216\u8005gateway\u5224\u5b9a\u4e3binstance\u4e0d\u53ef\u7528\u65f6\uff0c\u4f1a\u5c06\u64cd\u4f5c\u8bf7\u6c42\u8f6c\u53d1\u81f3\u5907instance\u5904\u7406\uff0c\u4ece\u800c\u5b9e\u73b0\u670d\u52a1\u7684\u9ad8\u53ef\u7528\u3002\u5907instance\u7684HA\u6a21\u5757\u4f1a\u6839\u636eHAID\u4fe1\u606f\u9996\u5148\u9a8c\u8bc1\u8bf7\u6c42\u5408\u6cd5\u6027\u3002"),(0,a.kt)("p",null,"\u2462\u522b\u540d\u673a\u5236"),(0,a.kt)("p",null,"\u5bf9\u673a\u5668\u91c7\u7528\u522b\u540d\u673a\u5236\uff0cHAID\u4e2d\u5305\u542b\u7684Instance\u4fe1\u606f\u91c7\u7528\u81ea\u5b9a\u4e49\u522b\u540d\uff0c\u540e\u53f0\u7ef4\u62a4\u522b\u540d\u6620\u5c04\u961f\u5217\u3002\u5728\u5ba2\u6237\u7aef\u4ea4\u4e92\u65f6\u91c7\u7528HAID\uff0c\u800c\u4e0e\u540e\u53f0\u5176\u5b83\u7ec4\u4ef6\u4ea4\u4e92\u5219\u91c7\u7528ContextID\uff0c\u5728\u5b9e\u73b0\u5177\u4f53\u64cd\u4f5c\u65f6\u91c7\u7528\u52a8\u6001\u4ee3\u7406\u673a\u5236\uff0c\u5c06HAID\u8f6c\u6362\u4e3aContextID\u8fdb\u884c\u5904\u7406\u3002"),(0,a.kt)("h3",{id:"2\u6a21\u5757\u8bbe\u8ba1"},"2\uff0c\u6a21\u5757\u8bbe\u8ba1"),(0,a.kt)("h4",{id:"1\u6a21\u5757\u56fe"},"\uff081\uff09\u6a21\u5757\u56fe"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(84179).Z,width:"1102",height:"620"})),(0,a.kt)("h4",{id:"2\u5177\u4f53\u6a21\u5757"},"\uff082\uff09\u5177\u4f53\u6a21\u5757"),(0,a.kt)("p",null,"\u2460ContextHAManager\u6a21\u5757"),(0,a.kt)("p",null,"\u63d0\u4f9b\u63a5\u53e3\u4f9bCS Server\u8c03\u7528\u751f\u6210CSID\u53caHAID\uff0c\u5e76\u63d0\u4f9b\u57fa\u4e8e\u52a8\u6001\u4ee3\u7406\u7684\u522b\u540d\u8f6c\u6362\u63a5\u53e3\uff1b"),(0,a.kt)("p",null,"\u8c03\u7528\u6301\u4e45\u5316\u6a21\u5757\u63a5\u53e3\u6301\u4e45\u5316CSID\u4fe1\u606f\uff1b"),(0,a.kt)("p",null,"\u2461AbstractContextHAManager\u6a21\u5757"),(0,a.kt)("p",null,"ContextHAManager\u7684\u62bd\u8c61\uff0c\u53ef\u652f\u6301\u5b9e\u73b0\u591a\u79cdContextHAManager\uff1b"),(0,a.kt)("p",null,"\u2462InstanceAliasManager\u6a21\u5757"),(0,a.kt)("p",null,"RPC\u6a21\u5757\u63d0\u4f9bInstance\u4e0e\u522b\u540d\u8f6c\u6362\u63a5\u53e3\uff0c\u7ef4\u62a4\u522b\u540d\u6620\u5c04\u961f\u5217\uff0c\u5e76\u63d0\u4f9b\u522b\u540d\u4e0eCS\nServer\u5b9e\u4f8b\u7684\u67e5\u8be2\uff1b\u63d0\u4f9b\u9a8c\u8bc1\u4e3b\u673a\u662f\u5426\u6709\u6548\u63a5\u53e3\uff1b"),(0,a.kt)("p",null,"\u2463HAContextIDGenerator\u6a21\u5757"),(0,a.kt)("p",null,"\u751f\u6210\u65b0\u7684HAID\uff0c\u5e76\u4e14\u5c01\u88c5\u6210\u5ba2\u6237\u7aef\u7ea6\u5b9a\u683c\u5f0f\u8fd4\u56de\u7ed9\u5ba2\u6237\u7aef\u3002HAID\u7ed3\u6784\u5982\u4e0b\uff1a"),(0,a.kt)("p",null,"\\${\u7b2c\u4e00\u4e2ainstance\u957f\u5ea6}\\${\u7b2c\u4e8c\u4e2ainstance\u957f\u5ea6}{instance\u522b\u540d1}{instance\u522b\u540d2}{\u5b9e\u9645ID}\uff0c\u5b9e\u9645ID\u5b9a\u4e3aContextID\nKey\uff1b"),(0,a.kt)("p",null,"\u2464ContextHAChecker\u6a21\u5757"),(0,a.kt)("p",null,"\u63d0\u4f9bHAID\u7684\u6821\u9a8c\u63a5\u53e3\u3002\u6536\u5230\u7684\u6bcf\u4e2a\u8bf7\u6c42\u4f1a\u6821\u9a8cID\u683c\u5f0f\u662f\u5426\u6709\u6548\uff0c\u4ee5\u53ca\u5f53\u524d\u4e3b\u673a\u662f\u5426\u4e3a\u4e3bInstance\u6216\u5907Instance\uff1a\u5982\u679c\u662f\u4e3bInstance\uff0c\u5219\u6821\u9a8c\u901a\u8fc7\uff1b\u5982\u679c\u4e3a\u5907Instance\uff0c\u5219\u9a8c\u8bc1\u4e3bInstance\u662f\u5426\u5931\u6548\uff0c\u4e3bInstance\u5931\u6548\u5219\u9a8c\u8bc1\u901a\u8fc7\u3002"),(0,a.kt)("p",null,"\u2465BackupInstanceGenerator\u6a21\u5757"),(0,a.kt)("p",null,"\u751f\u6210\u5907\u7528\u5b9e\u4f8b\uff0c\u9644\u52a0\u5728CSID\u4fe1\u606f\u91cc\uff1b"),(0,a.kt)("p",null,"\u2466MultiTenantBackupInstanceGenerator\u63a5\u53e3"),(0,a.kt)("p",null,"\uff08\u4fdd\u7559\u63a5\u53e3\uff0c\u6682\u4e0d\u5b9e\u73b0\uff09"),(0,a.kt)("h3",{id:"3-uml\u7c7b\u56fe"},"3. UML\u7c7b\u56fe"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(94988).Z,width:"2289",height:"1603"})),(0,a.kt)("h3",{id:"4-ha\u6a21\u5757\u64cd\u4f5c\u65f6\u5e8f\u56fe"},"4. HA\u6a21\u5757\u64cd\u4f5c\u65f6\u5e8f\u56fe"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(61340).Z,width:"1169",height:"827"})),(0,a.kt)("p",null,"\u7b2c\u4e00\u6b21\u751f\u6210CSID:\n\u7531\u5ba2\u6237\u7aef\u53d1\u51fa\u8bf7\u6c42\uff0cGateway\u8f6c\u53d1\u5230\u4efb\u4e00Server\uff0cHA\u6a21\u5757\u751f\u6210HAID\uff0c\u5305\u542b\u4e3bInstance\u548c\u5907instance\u53caCSID\uff0c\u5b8c\u6210\u5de5\u4f5c\u6d41\u4e0eHAID\u7684\u7ed1\u5b9a\u3002"),(0,a.kt)("p",null,"\u5f53\u5ba2\u6237\u7aef\u53d1\u9001\u53d8\u66f4\u8bf7\u6c42\u65f6\uff0cGateway\u5224\u5b9a\u4e3bInstance\u5931\u6548\uff0c\u5219\u5c06\u8bf7\u6c42\u8f6c\u53d1\u5230\u5907Instance\u8fdb\u884c\u5904\u7406\u3002\u5907Instance\u4e0a\u5b9e\u4f8b\u9a8c\u8bc1HAID\u6709\u6548\u540e\uff0c\u52a0\u8f7dInstance\u5e76\u5904\u7406\u8bf7\u6c42\u3002"))}p.isMDXComponent=!0},53870:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/linkis-contextservice-ha-01-67188a52f5dc0ac74a4431b9a86ca80c.png"},84179:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/linkis-contextservice-ha-02-9971bf8fd601ded6ece61eac35587e87.png"},94988:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/linkis-contextservice-ha-03-d732b58d7da28dc28bc6f909140dd15e.png"},61340:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/linkis-contextservice-ha-04-d13009eb9671bd60c9ff019ff7ba6995.png"}}]);