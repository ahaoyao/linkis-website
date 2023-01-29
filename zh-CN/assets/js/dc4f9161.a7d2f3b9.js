"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[66979],{3905:(e,A,t)=>{t.d(A,{Zo:()=>c,kt:()=>f});var n=t(67294);function r(e,A,t){return A in e?Object.defineProperty(e,A,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[A]=t,e}function s(e,A){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);A&&(n=n.filter((function(A){return Object.getOwnPropertyDescriptor(e,A).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var A=1;A<arguments.length;A++){var t=null!=arguments[A]?arguments[A]:{};A%2?s(Object(t),!0).forEach((function(A){r(e,A,t[A])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(A){Object.defineProperty(e,A,Object.getOwnPropertyDescriptor(t,A))}))}return e}function o(e,A){if(null==e)return{};var t,n,r=function(e,A){if(null==e)return{};var t,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],A.indexOf(t)>=0||(r[t]=e[t]);return r}(e,A);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],A.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var g=n.createContext({}),a=function(e){var A=n.useContext(g),t=A;return e&&(t="function"==typeof e?e(A):i(i({},A),e)),t},c=function(e){var A=a(e.components);return n.createElement(g.Provider,{value:A},e.children)},C={inlineCode:"code",wrapper:function(e){var A=e.children;return n.createElement(n.Fragment,{},A)}},p=n.forwardRef((function(e,A){var t=e.components,r=e.mdxType,s=e.originalType,g=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=a(t),f=r,u=p["".concat(g,".").concat(f)]||p[f]||C[f]||s;return t?n.createElement(u,i(i({ref:A},c),{},{components:t})):n.createElement(u,i({ref:A},c))}));function f(e,A){var t=arguments,r=A&&A.mdxType;if("string"==typeof e||r){var s=t.length,i=new Array(s);i[0]=p;var o={};for(var g in A)hasOwnProperty.call(A,g)&&(o[g]=A[g]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var a=2;a<s;a++)i[a]=t[a];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},62555:(e,A,t)=>{t.r(A),t.d(A,{assets:()=>g,contentTitle:()=>i,default:()=>C,frontMatter:()=>s,metadata:()=>o,toc:()=>a});var n=t(87462),r=(t(67294),t(3905));const s={title:"\u53c2\u6570\u914d\u7f6e",sidebar_position:3},i=void 0,o={unversionedId:"user-guide/control-panel/param-conf",id:"user-guide/control-panel/param-conf",title:"\u53c2\u6570\u914d\u7f6e",description:"\u53c2\u6570\u914d\u7f6e\u754c\u9762\u63d0\u4f9b\u4e86\u7528\u6237\u81ea\u5b9a\u4e49\u53c2\u6570\u7ba1\u7406\u7684\u529f\u80fd\uff0c\u7528\u6237\u53ef\u4ee5\u5728\u8be5\u754c\u9762\u7ba1\u7406\u5f15\u64ce\u7684\u76f8\u5173\u914d\u7f6e\u3002\u9ed8\u8ba4\u63d0\u4f9b\u4e86 IDE\u3001Visualis\u3001nodeexecution \u5e94\u7528\u7684\u5f15\u64ce\u914d\u7f6e\uff0c\u7528\u6237\u4ee5\u53ef\u4ee5\u6839\u636e\u9700\u6c42\u589e\u5220\u5e94\u7528\u548c\u5f15\u64ce\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/user-guide/control-panel/param-conf.md",sourceDirName:"user-guide/control-panel",slug:"/user-guide/control-panel/param-conf",permalink:"/zh-CN/docs/1.3.2/user-guide/control-panel/param-conf",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/current/user-guide/control-panel/param-conf.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"\u53c2\u6570\u914d\u7f6e",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u8d44\u6e90\u7ba1\u7406",permalink:"/zh-CN/docs/1.3.2/user-guide/control-panel/resource-manager"},next:{title:"\u5168\u5c40\u53d8\u91cf",permalink:"/zh-CN/docs/1.3.2/user-guide/control-panel/global-variable"}},g={},a=[{value:"1. \u53c2\u6570\u914d\u7f6e\u8bf4\u660e",id:"1-\u53c2\u6570\u914d\u7f6e\u8bf4\u660e",level:2},{value:"2. \u65b0\u589e\u5e94\u7528\uff08\u4ec5\u7ba1\u7406\u5458\uff09",id:"2-\u65b0\u589e\u5e94\u7528\u4ec5\u7ba1\u7406\u5458",level:2},{value:"3. \u65b0\u589e\u5f15\u64ce",id:"3-\u65b0\u589e\u5f15\u64ce",level:2},{value:"4. \u7f16\u8f91\u5e94\u7528\u548c\u5f15\u64ce\uff08\u4ec5\u7ba1\u7406\u5458\uff09",id:"4-\u7f16\u8f91\u5e94\u7528\u548c\u5f15\u64ce\u4ec5\u7ba1\u7406\u5458",level:2},{value:"5. \u5168\u5c40\u8bbe\u7f6e",id:"5-\u5168\u5c40\u8bbe\u7f6e",level:2},{value:"5.1 \u961f\u5217\u8bbe\u7f6e",id:"51-\u961f\u5217\u8bbe\u7f6e",level:3},{value:"6. \u5f15\u64ce\u53c2\u6570\u4fee\u6539",id:"6-\u5f15\u64ce\u53c2\u6570\u4fee\u6539",level:2}],c={toc:a};function C(e){let{components:A,...s}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,s,{components:A,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u53c2\u6570\u914d\u7f6e\u754c\u9762\u63d0\u4f9b\u4e86\u7528\u6237\u81ea\u5b9a\u4e49\u53c2\u6570\u7ba1\u7406\u7684\u529f\u80fd\uff0c\u7528\u6237\u53ef\u4ee5\u5728\u8be5\u754c\u9762\u7ba1\u7406\u5f15\u64ce\u7684\u76f8\u5173\u914d\u7f6e\u3002\u9ed8\u8ba4\u63d0\u4f9b\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"IDE"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"Visualis"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"nodeexecution")," \u5e94\u7528\u7684\u5f15\u64ce\u914d\u7f6e\uff0c\u7528\u6237\u4ee5\u53ef\u4ee5\u6839\u636e\u9700\u6c42\u589e\u5220\u5e94\u7528\u548c\u5f15\u64ce\u3002"),(0,r.kt)("h2",{id:"1-\u53c2\u6570\u914d\u7f6e\u8bf4\u660e"},"1. \u53c2\u6570\u914d\u7f6e\u8bf4\u660e"),(0,r.kt)("p",null,"\u53c2\u6570\u914d\u7f6e\u9875\u4e3b\u8981\u662f\u5bf9 ",(0,r.kt)("inlineCode",{parentName:"p"},"Linkis")," \u5404\u5f15\u64ce\u63d2\u4ef6\u7684\u53c2\u6570\u8fdb\u884c\u7ba1\u7406\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"Linkis")," \u4e2d\u5f15\u64ce\u914d\u7f6e\u662f\u901a\u8fc7\u6807\u7b7e\u8fdb\u884c\u7ba1\u7406\u7684\uff0c\u4e0d\u540c\u5e94\u7528\u4e0b\u7684\u5f15\u64ce\u914d\u7f6e\u53c2\u6570\u662f\u76f8\u4e92\u9694\u79bb\u7684\u3002\u5bf9\u4e8e\u672a\u663e\u793a\u914d\u7f6e\u7684\u5f15\u64ce\u53c2\u6570\uff0c\u6267\u884c\u4efb\u52a1\u65f6\u4f1a\u8c03\u7528\u7cfb\u7edf\u521d\u59cb\u5316\u65f6\u9ed8\u8ba4\u5f15\u64ce\u53c2\u6570\u914d\u7f6e\u3002"),(0,r.kt)("h2",{id:"2-\u65b0\u589e\u5e94\u7528\u4ec5\u7ba1\u7406\u5458"},"2. \u65b0\u589e\u5e94\u7528\uff08\u4ec5\u7ba1\u7406\u5458\uff09"),(0,r.kt)("p",null,"\u7ba1\u7406\u5458\u53ef\u4ee5\u901a\u8fc7\u65b0\u589e\u5e94\u7528\u7c7b\u578b\u6309\u94ae\uff0c\u65b0\u589e\u5e94\u7528\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(38156).Z,width:"520",height:"278"})),(0,r.kt)("h2",{id:"3-\u65b0\u589e\u5f15\u64ce"},"3. \u65b0\u589e\u5f15\u64ce"),(0,r.kt)("p",null,"\u5f15\u64ce\u662f\u8ddf\u5e94\u7528\u76f8\u5173\u8054\u7684\uff0c\u5728\u65b0\u589e\u5f15\u64ce\u524d\u5fc5\u987b\u5148\u9009\u4e2d\u5bf9\u5e94\u7684\u5f15\u7528\uff0c\u5982\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"Visualis")," \u5e94\u7528\u4e0b\u65b0\u589e\u5f15\u64ce\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(30680).Z,width:"1911",height:"767"})),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(88412).Z,width:"520",height:"336"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a"),"\u5f15\u64ce\u7248\u672c\u9700\u8981\u586b\u5199 ",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/1.3.2/user-guide/control-panel/overview"},"Linkis \u652f\u6301\u7684\u5f15\u64ce\u7248\u672c"),"\u3002\u5426\u5219\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"Linkis")," \u4efb\u52a1\u65f6\u4f1a\u62a5\u9519\u3002"),(0,r.kt)("h2",{id:"4-\u7f16\u8f91\u5e94\u7528\u548c\u5f15\u64ce\u4ec5\u7ba1\u7406\u5458"},"4. \u7f16\u8f91\u5e94\u7528\u548c\u5f15\u64ce\uff08\u4ec5\u7ba1\u7406\u5458\uff09"),(0,r.kt)("p",null,"\u7ba1\u7406\u5458\u53ef\u4ee5\u901a\u8fc7\u7f16\u8f91\u76ee\u5f55\u6309\u94ae\u5220\u9664\u5df2\u6709\u7684\u5e94\u7528\u548c\u5f15\u64ce\u914d\u7f6e\uff08\u6ce8\u610f\uff01\u76f4\u63a5\u5220\u9664\u5e94\u7528\u4f1a\u5220\u9664\u8be5\u5e94\u7528\u4e0b\u6240\u6709\u7684\u5f15\u64ce\u914d\u7f6e\uff0c\u5e76\u4e14\u4e0d\u53ef\u6062\u590d\uff09\uff0c\u6216\u8005\u6dfb\u52a0\u5f15\u64ce\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(77022).Z,width:"1886",height:"672"})),(0,r.kt)("h2",{id:"5-\u5168\u5c40\u8bbe\u7f6e"},"5. \u5168\u5c40\u8bbe\u7f6e"),(0,r.kt)("p",null,"\u5168\u5c40\u8bbe\u7f6e\u4e3b\u8981\u662f\u5bf9\u961f\u5217\u8d44\u6e90\u7684\u53c2\u6570\u8fdb\u884c\u914d\u7f6e\uff0c\u914d\u7f6e\u540e\u5bf9\u6240\u6709\u5e94\u7528\u4efb\u52a1\u751f\u6548\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(65213).Z,width:"1193",height:"615"})),(0,r.kt)("h3",{id:"51-\u961f\u5217\u8bbe\u7f6e"},"5.1 \u961f\u5217\u8bbe\u7f6e"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1. \u67e5\u770b\u53ef\u7528\u7684\u961f\u5217")),(0,r.kt)("p",null,"\u8bbf\u95ee hadoop \u96c6\u7fa4\u67e5\u770b\u53ef\u7528\u961f\u5217\uff0c\u5730\u5740\uff1ahttp://ip:port/cluster/scheduler"),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(18949).Z,width:"1274",height:"643"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2. \u8bbe\u7f6e\u961f\u5217")),(0,r.kt)("p",null,"\u8bbe\u7f6e\u6b65\u9aa41\u4e2d\u67e5\u8be2\u7684\u53ef\u7528\u961f\u5217\u540d\u79f0\uff0c\u5e76\u4fdd\u5b58\u3002\n",(0,r.kt)("img",{src:t(79541).Z,width:"1254",height:"589"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"3. \u67e5\u770b\u8bbe\u7f6e\u961f\u5217\u53ef\u7528\u8d44\u6e90")),(0,r.kt)("p",null,"\u70b9\u51fb\u53f3\u4e0b\u89d2\u6309\u94ae\u67e5\u770b\u961f\u5217\u53ef\u7528\u8d44\u6e90\u3002\n",(0,r.kt)("img",{src:t(96903).Z,width:"1271",height:"597"}),"\n",(0,r.kt)("img",{src:t(64057).Z,width:"580",height:"557"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"4. \u8bbe\u7f6e\u8d44\u6e90\u9650\u5236")),(0,r.kt)("p",null,"\u6839\u636e\u6b65\u9aa43\u4e2d\u67e5\u8be2\u7684\u961f\u5217\u53ef\u7528\u8d44\u6e90\uff08CPU\u3001\u5185\u5b58\uff09\u8bbe\u7f6e\u8d44\u6e90\u9650\u5236\uff0c\u5305\u62ec\u961f\u5217\u5b9e\u4f8b\u6700\u5927\u4e2a\u6570\u3001\u961f\u5217CPU\u4f7f\u7528\u4e0a\u9650\u3001\u961f\u5217\u5185\u5b58\u4f7f\u7528\u4e0a\u9650\u3001\u5168\u5c40\u5404\u4e2a\u5f15\u64ce\u5185\u5b58\u4f7f\u7528\u4e0a\u9650\u7b49\u3002"),(0,r.kt)("h2",{id:"6-\u5f15\u64ce\u53c2\u6570\u4fee\u6539"},"6. \u5f15\u64ce\u53c2\u6570\u4fee\u6539"),(0,r.kt)("p",null,"\u7528\u6237\u70b9\u51fb\u5bf9\u5e94\u5e94\u7528\u4e0b\u7684\u5f15\u64ce\u6807\u7b7e\u540e\uff0c\u53ef\u4ee5\u5bf9\u5f15\u64ce\u53c2\u6570\u8fdb\u884c\u4fee\u6539\uff0c\u5982\u4fee\u6539 ",(0,r.kt)("inlineCode",{parentName:"p"},"IDE")," \u5e94\u7528\u4e0b\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"JDBC")," \u5f15\u64ce\u3002\u4fee\u6539\u5b8c\u6210\u540e\u70b9\u51fb\u4fdd\u5b58\u6309\u94ae\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(75209).Z,width:"1909",height:"703"})))}C.isMDXComponent=!0},38156:(e,A,t)=>{t.d(A,{Z:()=>n});const n="data:image/png;base64,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"},30680:(e,A,t)=>{t.d(A,{Z:()=>n});const n=t.p+"assets/images/add-engine-btn-87290d85c3749f256dae7682c888fb06.png"},88412:(e,A,t)=>{t.d(A,{Z:()=>n});const n=t.p+"assets/images/add-engine-53ae53e7484b3625d83fcc8985e3cb75.png"},96903:(e,A,t)=>{t.d(A,{Z:()=>n});const n=t.p+"assets/images/click-yarn-b4df340dfb27757305cec9e431c28473.png"},77022:(e,A,t)=>{t.d(A,{Z:()=>n});const n=t.p+"assets/images/del-app-c3c95b9a968dda54a36c3730b74143b4.png"},64057:(e,A,t)=>{t.d(A,{Z:()=>n});const n=t.p+"assets/images/deque-resource-d805c6c0e48d356f142c839155baeaa8.png"},75209:(e,A,t)=>{t.d(A,{Z:()=>n});const n=t.p+"assets/images/engine-conf-6cc05d30d2a3eae58526f480fa5a2c35.png"},65213:(e,A,t)=>{t.d(A,{Z:()=>n});const n=t.p+"assets/images/global-conf-34a1f0cd5f06c0756bc1e0908ea2e777.png"},18949:(e,A,t)=>{t.d(A,{Z:()=>n});const n=t.p+"assets/images/yarn-deque-7550492b4eaa6689783df75404947b13.png"},79541:(e,A,t)=>{t.d(A,{Z:()=>n});const n=t.p+"assets/images/yarn-write-e04c5452dae4819bb6269a76b3ef3770.png"}}]);