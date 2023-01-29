"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[21347],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),k=s(n),d=r,g=k["".concat(p,".").concat(d)]||k[d]||m[d]||i;return n?a.createElement(g,l(l({ref:t},c),{},{components:n})):a.createElement(g,l({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},17431:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const i={title:"\u7f16\u7a0b\u89c4\u7ea6",sidebar_position:1},l=void 0,o={unversionedId:"development/development-specification/programming-specification",id:"development/development-specification/programming-specification",title:"\u7f16\u7a0b\u89c4\u7ea6",description:"1. \u547d\u540d\u89c4\u7ea6",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/development-specification/programming-specification.md",sourceDirName:"development/development-specification",slug:"/development/development-specification/programming-specification",permalink:"/zh-CN/docs/1.3.2/development/development-specification/programming-specification",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/development-specification/programming-specification.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\u7f16\u7a0b\u89c4\u7ea6",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"License \u987b\u77e5",permalink:"/zh-CN/docs/1.3.2/development/development-specification/license"},next:{title:"Commit Message \u987b\u77e5",permalink:"/zh-CN/docs/1.3.2/development/development-specification/commit-message"}},p={},s=[{value:"1. \u547d\u540d\u89c4\u7ea6",id:"1-\u547d\u540d\u89c4\u7ea6",level:2},{value:"2. \u6ce8\u91ca\u89c4\u7ea6",id:"2-\u6ce8\u91ca\u89c4\u7ea6",level:2}],c={toc:s};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1-\u547d\u540d\u89c4\u7ea6"},"1. \u547d\u540d\u89c4\u7ea6"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u3010",(0,r.kt)("strong",{parentName:"li"},"\u5f3a\u5236"),"\u3011\u4e0d\u8981\u7528\u4e2d\u6587\u62fc\u97f3\u548c\u770b\u4e0d\u61c2\u7684\u7f29\u5199"),(0,r.kt)("li",{parentName:"ol"},"\u57fa\u672c\u7684Java\u547d\u540d\u89c4\u8303\u53ef\u4ee5\u53c2\u8003",(0,r.kt)("a",{parentName:"li",href:"https://alibaba.github.io/Alibaba-Java-Coding-Guidelines/#naming-conventions"},"\u547d\u540d\u89c4\u8303")),(0,r.kt)("li",{parentName:"ol"},"\u3010\u7ea6\u675f\u3011\u5728linkis\u4e2d\u6709scalastyle\u98ce\u683c\u914d\u7f6e\u6587\u4ef6\uff0c\u5982\u679c\u4e0d\u7b26\u5408\u89c4\u8303\u7684\u9700\u8981\u6309\u7167scalastyle\u7684\u98ce\u683c\u8fdb\u884c\u547d\u540d"),(0,r.kt)("li",{parentName:"ol"},"\u3010",(0,r.kt)("strong",{parentName:"li"},"\u5f3a\u5236"),"\u3011\u914d\u7f6e\u6587\u4ef6\u547d\u4ee4\u3001\u542f\u52a8\u547d\u540d\u3001\u8fdb\u7a0b\u547d\u540d\u3001\u914d\u7f6e\u7684key\u7b49\u4e5f\u9700\u8981\u9075\u5b88\u547d\u540d\u89c4\u8303\uff0c\u89c4\u8303\u5982\u4e0b\uff1a")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u5206\u7c7b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u98ce\u683c"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u89c4\u8303"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u4f8b\u5b50"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\u914d\u7f6e\u6587\u4ef6"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5c0f\u5199'-'\u5206\u9694"),(0,r.kt)("td",{parentName:"tr",align:"left"},"linkis-\u5206\u7c7b\u5c42\u7ea7\uff08ps/cg/mg\uff09-\u670d\u52a1\u540d.propertis"),(0,r.kt)("td",{parentName:"tr",align:"left"},"linkis-cg-linkismanager.properties")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\u542f\u505c\u811a\u672c"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5c0f\u5199'-'\u5206\u9694"),(0,r.kt)("td",{parentName:"tr",align:"left"},"linkis-\u5206\u7c7b\u5c42\u7ea7-\u670d\u52a1\u540d"),(0,r.kt)("td",{parentName:"tr",align:"left"},"linkis-cg-linkismanager")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6a21\u5757\u76ee\u5f55"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5c0f\u5199'-'\u5206\u9694"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6a21\u5757\u76ee\u5f55\u5fc5\u987b\u5728\u5bf9\u5e94\u7684\u5206\u7c7b\u5c42\u7ea7\u4e0b\u9762\uff0c\u5e76\u4ee5\u6a21\u5757\u540d\u4e3a\u5b50\u76ee\u5f55"),(0,r.kt)("td",{parentName:"tr",align:"left"},"linkis-public-enhancements/linkis-bml")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\u8fdb\u7a0b\u547d\u540d"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u9a7c\u5cf0\u547d\u540d"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u4ee5Linkis\u5f00\u5934\u670d\u52a1\u540d\u7ed3\u5c3e"),(0,r.kt)("td",{parentName:"tr",align:"left"},"LinkisBMLApplication")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\u914d\u7f6eKey\u547d\u540d"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5c0f\u5199'.'\u5206\u9694"),(0,r.kt)("td",{parentName:"tr",align:"left"},"linkis+\u6a21\u5757\u540d+keyName"),(0,r.kt)("td",{parentName:"tr",align:"left"},"linkis.bml.hdfs.prefix")))),(0,r.kt)("h2",{id:"2-\u6ce8\u91ca\u89c4\u7ea6"},"2. \u6ce8\u91ca\u89c4\u7ea6"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u3010",(0,r.kt)("strong",{parentName:"li"},"\u5f3a\u5236"),"\u3011\u7c7b\u3001\u7c7b\u5c5e\u6027\u3001\u63a5\u53e3\u65b9\u6cd5\u5fc5\u987b\u52a0\u6ce8\u91ca\uff0c\u4e14\u6ce8\u91ca\u5fc5\u987b\u4f7f\u7528 Javadoc \u89c4\u8303\uff0c\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"li"},"/**\u5185\u5bb9*/"),"\u683c\u5f0f\u3002")),(0,r.kt)("p",null,"\u793a\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"/** Wrap the communication between Bml service */\npublic class BmlAppServiceImpl implements BmlAppService {\n  /** Bml client */\n  private BmlClient client;\n}\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u3010",(0,r.kt)("strong",{parentName:"p"},"\u5f3a\u5236"),"\u3011\u6240\u6709\u7684\u7c7b\u90fd\u4e0d\u8981\u6dfb\u52a0\u521b\u5efa\u8005\u3002Linkis\u9879\u76ee\u5df2\u6350\u732e\u7ed9Apache\uff0c\u65e0\u987b\u6dfb\u52a0\u4f5c\u8005\u4fe1\u606f\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u3010",(0,r.kt)("strong",{parentName:"p"},"\u5f3a\u5236"),"\u3011\u6240\u6709\u7684\u62bd\u8c61\u65b9\u6cd5\uff08\u5305\u62ec\u63a5\u53e3\u4e2d\u7684\u65b9\u6cd5\uff09\u5fc5\u987b\u8981\u7528 Javadoc \u6ce8\u91ca\u3001\u9664\u4e86\u8fd4\u56de\u503c\u3001\u53c2\u6570\u3001 \u5f02\u5e38\u8bf4\u660e\u5916\uff0c\u8fd8\u5fc5\u987b\u6307\u51fa\u8be5\u65b9\u6cd5\u505a\u4ec0\u4e48\u4e8b\u60c5\uff0c\u5b9e\u73b0\u4ec0\u4e48\u529f\u80fd\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u3010",(0,r.kt)("strong",{parentName:"p"},"\u5f3a\u5236"),"\u3011\u65b9\u6cd5\u5185\u90e8\u5355\u884c\u6ce8\u91ca\uff0c\u5728\u88ab\u6ce8\u91ca\u8bed\u53e5\u4e0a\u65b9\u53e6\u8d77\u4e00\u884c\uff0c\u4f7f\u7528 // \u6ce8\u91ca\u3002\u65b9\u6cd5\u5185\u90e8\u591a\u884c\u6ce8\u91ca\u4f7f\u7528 /* */ \u6ce8\u91ca\uff0c\u6ce8\u610f\u4e0e\u4ee3\u7801\u5bf9\u9f50\u3002"))),(0,r.kt)("p",null,"\u793a\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"    // Store the reflection relation between parameter variable like 'T' and type like\n    Map<String, Type> typeVariableReflect = new HashMap<>();\n")),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"\u3010",(0,r.kt)("strong",{parentName:"li"},"\u5f3a\u5236"),"\u3011\u6240\u6709\u7684\u679a\u4e3e\u7c7b\u578b\u5b57\u6bb5\u5fc5\u987b\u8981\u6709\u6ce8\u91ca\uff0c\u8bf4\u660e\u6bcf\u4e2a\u6570\u636e\u9879\u7684\u7528\u9014\u3002")),(0,r.kt)("p",null,"\u793a\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * \u8282\u70b9\u76d1\u63a7\u72b6\u6001\u4fe1\u606f\n * to monitor node status info\n */\npublic enum NodeHealthy {\n\n  /**\n   * \u72b6\u6001\u6b63\u5e38\n   * healthy status\n   */\n  Healthy,\n  \n  /**\n   * EM\u81ea\u5df1\u6807\u8bc6\u81ea\u5df1\u4e3aUnHealthy \u6216\u8005manager\u628a\u4ed6\u6807\u8bc6\u4e3aUnHealthy \u5904\u7406\u5f15\u64ce\u72b6\u6001\u4e0d\u6b63\u5e38\uff0c\n   * manager\u4e3b\u52a8\u8981\u6c42\u6240\u6709\u7684engine\u5f3a\u5236\u9000\u51fa\uff08engine\u81ea\u6740\uff09\n   * EM identifies itself as UnHealthy or\n   * The manager marks it as abnormal in the status of UnHealthy processing engine.\n   * The manager requests all engines to withdraw forcibly (engine suicide).\n   */\n  UnHealthy,\n\n  /**\n   * \u5f15\u64ce\u5904\u4e8e\u544a\u8b66\u72b6\u6001\uff0c\u4f46\u662f\u53ef\u4ee5\u63a5\u53d7\u4efb\u52a1\n   * The engine is in the alarm state, but can accept tasks\n   */\n  WARN,\n\n  /**\n   * \u5b58\u91cf\u53ef\u7528\u72b6\u6001\uff0c\u53ef\u4ee5\u63a5\u53d7\u4efb\u52a1\u3002\u5f53EM\u72b6\u6001\u6700\u8fd1n\u6b21\u5fc3\u8df3\u6ca1\u6709\u4e0a\u62a5\uff0c\u4f46\u662f\u5df2\u7ecf\u542f\u52a8\u7684Engine\u8fd8\u662f\u6b63\u5e38\u7684\u53ef\u4ee5\u63a5\u53d7\u4efb\u52a1\n   * The stock is available and can accept tasks. When the EM status is not reported for the last n heartbeats,\n   * the Engine that has been started is still normal and can accept tasks\n   */\n  StockAvailable,\n\n  /**\n   * \u5b58\u91cf\u4e0d\u53ef\u7528\u72b6\u6001\uff0c\u4e0d\u53ef\u4ee5\u63a5\u53d7\u4efb\u52a1\u3002\uff08\u8d85\u8fc7n+1\u6ca1\u4e0a\u62a5\u5fc3\u8df3\uff09\u6216\u8005\uff08EM\u81ea\u5df1\u5224\u65ad\uff0c\u4f46\u662f\u670d\u52a1\u6b63\u5e38\u7684\u60c5\u51b5\uff09\uff0c\n   * \u4f46\u662f\u5982\u679c\u5f80\u4e0a\u9762\u63d0\u4ea4\u4efb\u52a1\u4f1a\u51fa\u73b0error\u5931\u8d25\u60c5\u51b5 EM\u5904\u4e8eStockUnavailable\u65f6\uff0c\n   * manager\u4e3b\u52a8\u8981\u6c42\u6240\u6709\u7684engine\u975e\u5f3a\u5236\u9000\u51fa\uff0cmanager\u9700\u8981\u5c06EM\u6807\u8bc6\u4e3aUnHealthy\u3002\n   * \u5982\u679cStockUnavailable\u72b6\u6001\u5982\u679c\u8d85\u8fc7n\u5206\u949f\uff0c\u5219\u53d1\u9001IMS\u544a\u8b66\n   * The stock is not available. Tasks cannot be accepted\n   */\n  StockUnavailable;\n}\n")),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"\u3010\u63a8\u8350\u3011\u4ee3\u7801\u4fee\u6539\u7684\u540c\u65f6\uff0c\u6ce8\u91ca\u4e5f\u8981\u8fdb\u884c\u76f8\u5e94\u7684\u4fee\u6539\uff0c\u5c24\u5176\u662f\u53c2\u6570\u3001\u8fd4\u56de\u503c\u3001\u5f02\u5e38\u3001\u6838\u5fc3\u903b\u8f91\u7b49\u7684\u4fee\u6539\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u3010\u63a8\u8350\u3011\u5728\u7c7b\u4e2d\u5220\u9664\u672a\u4f7f\u7528\u7684\u4efb\u4f55\u5b57\u6bb5\u3001\u65b9\u6cd5\u3001\u5185\u90e8\u7c7b\uff1b\u5728\u65b9\u6cd5\u4e2d\u5220\u9664\u672a\u4f7f\u7528\u7684\u4efb\u4f55\u53c2\u6570\u58f0\u660e\u4e0e\u5185\u90e8\u53d8\u91cf\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u3010\u53c2\u8003\u3011\u8c28\u614e\u6ce8\u91ca\u6389\u4ee3\u7801\u3002\u5728\u4e0a\u65b9\u8be6\u7ec6\u8bf4\u660e\uff0c\u800c\u4e0d\u662f\u7b80\u5355\u5730\u6ce8\u91ca\u6389\u3002\u5982\u679c\u65e0\u7528\uff0c\u5219\u5220\u9664\u3002\u4ee3\u7801\u88ab\u6ce8\u91ca\u6389\u6709\u4e24\u79cd\u53ef\u80fd\u6027\uff1a1\uff09\u540e\u7eed\u4f1a\u6062\u590d\u6b64\u6bb5\u4ee3\u7801\u903b\u8f91\u30022\uff09\u6c38\u4e45\u4e0d\u7528\u3002\u524d\u8005\u5982\u679c\u6ca1\u6709\u5907\u6ce8\u4fe1\u606f\uff0c\u96be\u4ee5\u77e5\u6653\u6ce8\u91ca\u52a8\u673a\u3002\u540e\u8005\u5efa\u8bae\u76f4\u63a5\u5220\u6389\u5373\u53ef\uff0c\u5047\u5982\u9700\u8981\u67e5\u9605\u5386\u53f2\u4ee3\u7801\uff0c\u767b\u5f55\u4ee3\u7801\u4ed3\u5e93\u5373\u53ef\u3002")),(0,r.kt)("p",null,"\u793a\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'  public static final CommonVars<String> TUNING_CLASS =\n      CommonVars.apply(\n          "wds.linkis.cs.ha.class", "org.apache.linkis.cs.highavailable.DefaultContextHAManager");\n  // \u5e94\u8be5\u5220\u9664\u5982\u4e0b\u6ce8\u91ca\u4ee3\u7801\n  // public static final CommonVars<String> TUNING_CLASS =\n  // CommonVars.apply("wds.linkis.cs.ha.class","org.apache.linkis.cs.persistence.ProxyMethodA");\n')),(0,r.kt)("ol",{start:9},(0,r.kt)("li",{parentName:"ol"},"\u3010\u53c2\u8003\u3011\u5bf9\u4e8e\u6ce8\u91ca\u7684\u8981\u6c42\uff1a\u7b2c\u4e00\u3001\u80fd\u591f\u51c6\u786e\u53cd\u6620\u8bbe\u8ba1\u601d\u60f3\u548c\u4ee3\u7801\u903b\u8f91\uff1b\u7b2c\u4e8c\u3001\u80fd\u591f\u63cf\u8ff0\u4e1a\u52a1\u542b\u4e49\uff0c\u4f7f\u522b\u7684\u7a0b\u5e8f\u5458\u80fd\u591f\u8fc5\u901f\u4e86\u89e3\u5230\u4ee3\u7801\u80cc\u540e\u7684\u4fe1\u606f\u3002\u5b8c\u5168\u6ca1\u6709\u6ce8\u91ca\u7684\u5927\u6bb5\u4ee3\u7801\u5bf9\u4e8e\u9605\u8bfb\u8005\u5f62\u540c\u5929\u4e66\uff0c\u6ce8\u91ca\u662f\u7ed9\u81ea\u5df1\u770b\u7684\uff0c\u5373\u4f7f\u9694\u5f88\u957f\u65f6\u95f4\uff0c\u4e5f\u80fd\u6e05\u6670\u7406\u89e3\u5f53\u65f6\u7684\u601d\u8def\uff1b\u6ce8\u91ca\u4e5f\u662f\u7ed9\u7ee7\u4efb\u8005\u770b\u7684\uff0c\u4f7f\u5176\u80fd\u591f\u5feb\u901f\u63a5\u66ff\u81ea\u5df1\u7684\u5de5\u4f5c\u3002")))}m.isMDXComponent=!0}}]);