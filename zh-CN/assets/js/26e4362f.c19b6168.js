"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[63423],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return k}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),p=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},m=function(t){var e=p(t.components);return r.createElement(c.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,c=t.parentName,m=l(t,["components","mdxType","originalType","parentName"]),u=p(n),k=a,d=u["".concat(c,".").concat(k)]||u[k]||s[k]||i;return n?r.createElement(d,o(o({ref:e},m),{},{components:n})):r.createElement(d,o({ref:e},m))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1084:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return m},default:function(){return u}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={title:"\u5f02\u5e38\u89c4\u8303",sidebar_position:3},c=void 0,p={unversionedId:"development-specification/exception-catch",id:"development-specification/exception-catch",title:"\u5f02\u5e38\u89c4\u8303",description:"1. \u5f02\u5e38\u5c42\u6b21\u5b9a\u4e49",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs-community/current/development-specification/exception-catch.md",sourceDirName:"development-specification",slug:"/development-specification/exception-catch",permalink:"/zh-CN/community/development-specification/exception-catch",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/i18n/zh-CN/development-specification/exception-catch.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"\u5f02\u5e38\u89c4\u8303",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u65e5\u5fd7\u89c4\u8303",permalink:"/zh-CN/community/development-specification/log"},next:{title:"\u63a5\u53e3\u89c4\u8303",permalink:"/zh-CN/community/development-specification/api"}},m=[{value:"1. \u5f02\u5e38\u5c42\u6b21\u5b9a\u4e49",id:"1-\u5f02\u5e38\u5c42\u6b21\u5b9a\u4e49",children:[],level:2},{value:"2. \u5f02\u5e38\u89c4\u8303",id:"2-\u5f02\u5e38\u89c4\u8303",children:[],level:2}],s={toc:m};function u(t){var e=t.components,n=(0,a.Z)(t,o);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"1-\u5f02\u5e38\u5c42\u6b21\u5b9a\u4e49"},"1. \u5f02\u5e38\u5c42\u6b21\u5b9a\u4e49"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"linkis\u5f02\u5e38\u7ee7\u627f\u5c42\u6b21\uff1a")),(0,i.kt)("p",null,"LinkisException\uff1a\u5f02\u5e38\u7ee7\u627f\u4e8eException\uff0c\u5b58\u5728\u4e09\u4e2a\u9759\u6001\u5c5e\u6027\uff0c\u662f\u670d\u52a1\u5728\u542f\u52a8\u65f6\u8fdb\u884c\u8d4b\u503c\u7684,\u8fd9\u4e09\u4e2a\u5c5e\u6027\u4e3b\u8981\u4e3a\u4e86\u5728\u8fdb\u884c\u5f02\u5e38\u6253\u5370\u65f6\uff0c\u6807\u660e\u5f02\u5e38\u6765\u81ea\u4e8e\u54ea\u4e2a\u5fae\u670d\u52a1"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"    static String applicationName;//Microservice AppName\n    static String hostname;//Microservice hostName\n    static int hostPort;//Microservice port\n")),(0,i.kt)("p",null,"\u53ef\u7ee7\u627f\u5f02\u5e38\uff1a"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"\u5f02\u5e38\u7c7b"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u6240\u5728\u670d\u52a1"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u9519\u8bef\u63cf\u8ff0"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"LinkisException"),(0,i.kt)("td",{parentName:"tr",align:"left"},"common"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u9876\u7ea7\u7236\u7c7b\uff0c\u7ee7\u627f\u81eaException,\u4e0d\u5141\u8bb8\u76f4\u63a5\u7ee7\u627f")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"LinkisRuntimeException"),(0,i.kt)("td",{parentName:"tr",align:"left"},"common"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u9876\u7ea7\u7236\u7c7b\uff0c\u7ee7\u627f\u81eaRuntimeException,\u4e0d\u5141\u8bb8\u76f4\u63a5\u7ee7\u627f")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"WarnException"),(0,i.kt)("td",{parentName:"tr",align:"left"},"common"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u6b21\u7ea7\u7236\u7c7b\uff0c\u7ee7\u627f\u81eaLinkisRuntimeException\u3002\u63d0\u793a\u7ea7\u7684\u5f02\u5e38\uff0c\u5fc5\u987b\u76f4\u63a5\u6216\u95f4\u63a5\u7ee7\u627f\u8be5\u7c7b")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"ErrorException"),(0,i.kt)("td",{parentName:"tr",align:"left"},"common"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u6b21\u7ea7\u7236\u7c7b\uff0c\u7ee7\u627f\u81eaLinkisException\u3002\u9519\u8bef\u7ea7\u7684\u5f02\u5e38\uff0c\u5fc5\u987b\u76f4\u63a5\u6216\u95f4\u63a5\u7ee7\u627f\u8be5\u7c7b")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"FatalException"),(0,i.kt)("td",{parentName:"tr",align:"left"},"common"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u6b21\u7ea7\u7236\u7c7b\uff0c\u7ee7\u627f\u81eaLinkisException\u3002\u81f4\u547d\u7ea7\u7684\u5f02\u5e38\uff0c\u5fc5\u987b\u76f4\u63a5\u6216\u95f4\u63a5\u7ee7\u627f\u8be5\u7c7b,\u51fa\u73b0\u6b64\u7c7b\u5f02\u5e38\u670d\u52a1\u9700\u8981\u5728Catch\u65f6\u8fdb\u884c\u9000\u51fa\u3002\u5982\uff1aECM\u5728\u5411LM\u6ce8\u518c\u5931\u8d25\u65f6\u9700\u8981\u9000\u51fa")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"LinkisRetryException"),(0,i.kt)("td",{parentName:"tr",align:"left"},"common"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u6b21\u7ea7\u7236\u7c7b\uff0c\u7ee7\u627f\u81eaLinkisException\u3002\u91cd\u8bd5\u7ea7\u7684\u5f02\u5e38\uff0c\u5fc5\u987b\u76f4\u63a5\u6216\u95f4\u63a5\u7ee7\u627f\u8be5\u7c7b,\u4e00\u822c\u7528\u4e8eLinkis\u5185\u90e8\uff0c\u7528\u4e8e\u6355\u83b7\u8be5\u5f02\u5e38\u8fdb\u884c\u8bf7\u6c42\u7684\u91cd\u8bd5\uff0c\u5982\uff1a\u5f15\u64ce\u542f\u52a8\u7684\u8d44\u6e90\u4e0d\u8db3\u5f02\u5e38")))),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"\u6a21\u5757\u4f7f\u7528\u5f02\u5e38\u987b\u77e5\uff1a")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u3010",(0,i.kt)("strong",{parentName:"li"},"\u5f3a\u5236"),"\u3011\u6bcf\u4e2a\u6a21\u5757\u9700\u8981\u81ea\u5b9a\u4e49\u5bf9\u5e94\u6a21\u5757\u7684\u5f02\u5e38\uff0c\u81ea\u5b9a\u4e49\u7684\u5f02\u5e38\u90fd\u5fc5\u987b\u7ee7\u627f\u81eaLinkisRetryException\u3001WarnException\u3001ErrorException\u6216FatalException\u4e4b\u4e00"),(0,i.kt)("li",{parentName:"ul"},"\u3010",(0,i.kt)("strong",{parentName:"li"},"\u5f3a\u5236"),"\u3011\u81ea\u5b9a\u4e49\u7684\u5f02\u5e38\u5fc5\u987b\u5305\u542b\u9519\u8bef\u7801\u548c\u9519\u8bef\u63cf\u8ff0\uff0c\u5982\u6709\u5fc5\u8981\uff0c\u4e5f\u53ef\u5c06\u53d1\u751f\u5f02\u5e38\u7684ip\u5730\u5740\u548c\u8fdb\u7a0b\u7aef\u53e3\u5c01\u88c5\u5230\u5f02\u5e38\u5f53\u4e2d"),(0,i.kt)("li",{parentName:"ul"},"\u3010",(0,i.kt)("strong",{parentName:"li"},"\u5f3a\u5236"),"\u3011\u614e\u7528WarnException\uff01WarnException\u629b\u51fa\u6765\u7684\u5f02\u5e38\uff0c\u5982\u679c\u5728Restful\u548cRPC\u7684Receiver\u7aef\u88ab\u6355\u83b7\uff0c\u4e0d\u4f1a\u7ed9\u524d\u7aef\u6216sender\u7aef\u629b\u51fa\u6267\u884c\u5931\u8d25\uff0c\u800c\u662f\u53ea\u8fd4\u56de\u4e00\u6761\u8b66\u544a\u4fe1\u606f\uff01"),(0,i.kt)("li",{parentName:"ul"},"\u3010",(0,i.kt)("strong",{parentName:"li"},"\u5f3a\u5236"),"\u3011WARNException\u7684\u5f02\u5e38\u7ea7\u522b\u4e3a1\uff0cErrorException\u7684\u5f02\u5e38\u7ea7\u522b\u4e3a2\uff0cFatalException\u7684\u5f02\u5e38\u7ea7\u522b\u4e3a3\uff0cLinkisRetryException\u7684\u5f02\u5e38\u7ea7\u522b\u4e3a4")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"\u9519\u8bef\u7801\u9700\u6309\u7167\u89c4\u8303\u8fdb\u884c\u5b9a\u4e49\uff0c\u9519\u8bef\u7801\u89c4\u8303\u5982\u4e0b\uff08PS\uff1a\u73b0\u6709\u4e0d\u89c4\u8303\u7684\u9519\u8bef\u7801\uff0c\u60a8\u53ef\u4ee5\u63d0PR\u8fdb\u884c\u4fee\u590d\uff09")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"## \u9519\u8bef\u7801\u5b9a\u4e49\uff1a\u6574\u4e2a\u8c03\u7528\u94fe\u8def\u7684\u9700\u8981\u6709\u89c4\u5219\nlinkis-commons:10000-11000\nlinkis-computattion-governace:11000-12000\nlinkis-engineconn-plugins:12000-13000\nlinkis-orchestrator:13000-14000\nlinkis-public-enghancements:14000-15000\nlinkis-spring-cloud-service:15100-15500\nlinkis-extensions:15500-16000\n")),(0,i.kt)("h2",{id:"2-\u5f02\u5e38\u89c4\u8303"},"2. \u5f02\u5e38\u89c4\u8303"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"[\u5f3a\u5236]"," \u7981\u6b62\u76f4\u63a5catch Throwable\uff0c\u8fd9\u79cd\u4ee3\u7801\u975e\u5e38\u5371\u9669\uff0c\u56e0\u4e3a\u4f1a\u628aError\u4e5f\u7ed9catch\u4f4f\uff0c\u50cfOOM\u7b49\u5f02\u5e38\u4f1a\u88ab\u76f4\u63a5catch\uff0c\u539f\u672cJVM\u68c0\u6d4b\u5230\u8be5\u5f02\u5e38\u4f1a\u81ea\u52a8\u505c\u6b62\u8fdb\u7a0b\uff0c\u4f46\u662f\u56e0\u4e3a\u6211\u4eeccatch\u4f4f\u4e86\uff0c\u4f1a\u5bfc\u81f4\u8fdb\u7a0b\u5b9e\u9645\u5df2\u7ecf\u65e0\u6cd5\u63d0\u4f9b\u670d\u52a1\uff0c\u4f46\u662f\u4e0d\u4f1a\u6b63\u5e38\u9000\u51fa\u3002")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'// \u5bf9\u4e8eScala\u4ee3\u7801\u5efa\u8bae\u4f7f\u7528Utils\u5de5\u5177\u7c7b\u91cc\u9762\u63d0\u4f9b\u7684\u76f8\u5173tryCatch\u65b9\u6cd5\n def tryCatch[T](tryOp: => T)(catchOp: Throwable => T): T = {\n    try tryOp catch {\n      case t: ControlThrowable => throw t\n      case fatal: FatalException =>\n        error("Fatal error, system exit...", fatal)\n        System.exit(fatal.getErrCode)\n        null.asInstanceOf[T]\n      case e: VirtualMachineError =>\n        error("Fatal error, system exit...", e)\n        System.exit(-1)\n        throw e\n      case er: Error =>\n        error("Throw error", er)\n        throw er\n      case t => catchOp(t)\n    }\n  }\n')),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"[\u5f3a\u5236]"," \u6355\u83b7\u5f02\u5e38\u540e\uff0c\u5982\u679c\u9700\u8981\u521b\u5efa\u65b0\u7684\u5f02\u5e38\uff0c\u4e00\u5b9a\u8981\u5c06cause\u8fdb\u884c\u4f20\u9012\u5bf9\u65b0\u52a0\u7684\u5f02\u5e38\u8fdb\u884cinitCause\uff0c\u9632\u6b62\u4e22\u5931\u6839\u56e0")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"// \u65b0\u751f\u6210\u7684\u5f02\u5e38\uff0c\u9700\u8981\u7ee7\u627fcacuse\npublic StorageErrorException(int errCode, String desc, Throwable t){\n        super(errCode, desc);\n        initCause(t);\n}\n")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u3010",(0,i.kt)("strong",{parentName:"p"},"\u5f3a\u5236"),"\u3011\u6bcf\u4e2a\u5c0f\u6a21\u5757\u7684\u5f02\u5e38\uff0c\u90fd\u5e94\u8be5\u5b9a\u4e49\u4e00\u4e2a\u4e13\u95e8\u7684exception\u7c7b\uff0c\u65b9\u4fbf\u540e\u7eed\u7ed9\u7528\u6237\u751f\u6210\u9519\u8bef\u7801\uff0c\u4e0d\u5141\u8bb8\u629b\u51fa\u4efb\u4f55RuntimeException\u548c\u76f4\u63a5\u629bException\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u3010\u63a8\u8350\u3011\u5c3d\u91cf\u4e0d\u8981\u5bf9\u5927\u6bb5\u4ee3\u7801\u8fdb\u884ctry-catch\uff0c\u8fd9\u662f\u4e0d\u8d1f\u8d23\u4efb\u7684\u8868\u73b0\u3002catch\u65f6\u8bf7\u5206\u6e05\u7a33\u5b9a\u4ee3\u7801\u548c\u975e\u7a33\u5b9a\u4ee3\u7801\uff0c\u7a33\u5b9a\u4ee3\u7801\u6307\u7684\u662f\u65e0\u8bba\u5982\u4f55\u4e0d\u4f1a\u51fa\u9519\u7684\u4ee3\u7801\u3002\u5bf9\u4e8e\u975e\u7a33\u5b9a\u4ee3\u7801\u7684catch\u5c3d\u53ef\u80fd\u8fdb\u884c\u533a\u5206\u5f02\u5e38\u7c7b\u578b\uff0c\u518d\u505a\u5bf9\u5e94\u7684\u5f02\u5e38\u5904\u7406\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u3010",(0,i.kt)("strong",{parentName:"p"},"\u5f3a\u5236"),"\u3011\u6355\u83b7\u5f02\u5e38\u662f\u4e3a\u4e86\u5904\u7406\u5b83\uff0c\u4e0d\u8981\u6355\u83b7\u4e86\u5374\u4ec0\u4e48\u90fd\u4e0d\u5904\u7406\u800c\u629b\u5f03\u4e4b\uff0c\u5982\u679c\u4e0d\u60f3\u5904\u7406\u5b83\uff0c\u8bf7\u5c06\u8be5\u5f02\u5e38\u629b\u7ed9\u5b83\u7684\u8c03\u7528\u8005\u3002\u6ce8\u610f\uff1a\u4ec0\u4e48\u60c5\u51b5\u4e0b\uff0c\u90fd\u4e0d\u8981\u7528e.printStackTrace()\uff01\u6700\u5916\u5c42\u7684\u4e1a\u52a1\u4f7f\u7528\u8005\uff0c\u5fc5\u987b\u5904\u7406\u5f02\u5e38\uff0c\u5c06\u5176\u8f6c\u5316\u4e3a\u7528\u6237\u53ef\u4ee5\u7406\u89e3\u7684\u5185\u5bb9\u3002"))),(0,i.kt)("p",null,"finally\u5757\u5fc5\u987b\u5bf9\u8d44\u6e90\u5bf9\u8c61\u3001\u6d41\u5bf9\u8c61\u8fdb\u884c\u5173\u95ed\uff0c\u6709\u5f02\u5e38\u4e5f\u8981\u505atry-catch\u3002"),(0,i.kt)("ol",{start:6},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u3010",(0,i.kt)("strong",{parentName:"p"},"\u5f3a\u5236"),"\u3011\u9884\u9632NullPointerException\u3002\u65b9\u6cd5\u7684\u8fd4\u56de\u503c\u53ef\u4ee5\u4e3anull\uff0c\u4e0d\u5f3a\u5236\u8fd4\u56de\u7a7a\u96c6\u5408\uff0c\u6216\u8005\u7a7a\u5bf9\u8c61\u7b49\uff0c\u4f46\u662f\u5fc5\u987b\u6dfb\u52a0\u6ce8\u91ca\u5145\u5206\u8bf4\u660e\u4ec0\u4e48\u60c5\u51b5\u4e0b\u4f1a\u8fd4\u56de null \u503c\u3002RPC\u3001SpringCloud Feign\u8c03\u7528\uff0c\u4e00\u5f8b\u8981\u6c42\u8fdb\u884c\u975e\u7a7a\u5224\u65ad\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u3010",(0,i.kt)("strong",{parentName:"p"},"\u5f3a\u5236"),"\u3011\u4e0d\u8981\u5728finally\u4e2d\u4f7f\u7528Return\u548c\u629b\u51fa\u5f02\u5e38")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u3010",(0,i.kt)("strong",{parentName:"p"},"\u5f3a\u5236"),"\u3011\u5982\u679c\u5f02\u5e38\u5df2\u7ecf\u629b\u51fa\uff0c\u7981\u6b62\u6253\u5370\u5f02\u5e38\u7684\u5806\u6808\u65e5\u5fd7\uff0c\u4f1a\u5bfc\u81f4\u65e5\u5fd7\u5197\u4f59"))))}u.isMDXComponent=!0}}]);