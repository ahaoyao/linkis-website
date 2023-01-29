"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[54069],{3905:(e,n,t)=>{t.d(n,{Zo:()=>k,kt:()=>u});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},p=Object.keys(e);for(a=0;a<p.length;a++)t=p[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)t=p[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=a.createContext({}),s=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},k=function(e){var n=s(e.components);return a.createElement(o.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,p=e.originalType,o=e.parentName,k=r(e,["components","mdxType","originalType","parentName"]),d=s(t),u=i,m=d["".concat(o,".").concat(u)]||d[u]||c[u]||p;return t?a.createElement(m,l(l({ref:n},k),{},{components:t})):a.createElement(m,l({ref:n},k))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var p=t.length,l=new Array(p);l[0]=d;var r={};for(var o in n)hasOwnProperty.call(n,o)&&(r[o]=n[o]);r.originalType=e,r.mdxType="string"==typeof e?e:i,l[1]=r;for(var s=2;s<p;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},47442:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>p,metadata:()=>r,toc:()=>s});var a=t(87462),i=(t(67294),t(3905));const p={title:"Linkis \u7f16\u8bd1\u6253\u5305",sidebar_position:0},l=void 0,r={unversionedId:"development/linkis-compile-and-package",id:"version-1.0.2/development/linkis-compile-and-package",title:"Linkis \u7f16\u8bd1\u6253\u5305",description:"1. \u524d\u7f6e\u51c6\u5907",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.0.2/development/linkis-compile-and-package.md",sourceDirName:"development",slug:"/development/linkis-compile-and-package",permalink:"/zh-CN/docs/1.0.2/development/linkis-compile-and-package",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.0.2/development/linkis-compile-and-package.md",tags:[],version:"1.0.2",sidebarPosition:0,frontMatter:{title:"Linkis \u7f16\u8bd1\u6253\u5305",sidebar_position:0},sidebar:"version-1.0.2/tutorialSidebar",previous:{title:"EngineConn \u65b0\u589e\u6d41\u7a0b",permalink:"/zh-CN/docs/1.0.2/architecture/add-an-engine-conn"},next:{title:"\u8c03\u8bd5\u6307\u5f15",permalink:"/zh-CN/docs/1.0.2/development/linkis-debug"}},o={},s=[{value:"1. \u524d\u7f6e\u51c6\u5907",id:"1-\u524d\u7f6e\u51c6\u5907",level:2},{value:"1.1 \u6e90\u7801\u83b7\u53d6",id:"11-\u6e90\u7801\u83b7\u53d6",level:3},{value:"2. \u5168\u91cf\u7f16\u8bd1 Linkis",id:"2-\u5168\u91cf\u7f16\u8bd1-linkis",level:2},{value:"step1 \u9996\u6b21\u7f16\u8bd1(\u975e\u9996\u6b21\u53ef\u8df3\u8fc7\u6b64\u6b65)",id:"step1-\u9996\u6b21\u7f16\u8bd1\u975e\u9996\u6b21\u53ef\u8df3\u8fc7\u6b64\u6b65",level:3},{value:"step2 \u6267\u884c\u7f16\u8bd1",id:"step2-\u6267\u884c\u7f16\u8bd1",level:3},{value:"step3 \u83b7\u53d6\u5b89\u88c5\u5305",id:"step3-\u83b7\u53d6\u5b89\u88c5\u5305",level:3},{value:"3. \u7f16\u8bd1\u5355\u4e2a\u6a21\u5757",id:"3-\u7f16\u8bd1\u5355\u4e2a\u6a21\u5757",level:2},{value:"step1 \u9996\u6b21\u7f16\u8bd1(\u975e\u9996\u6b21\u53ef\u8df3\u8fc7\u6b64\u6b65)",id:"step1-\u9996\u6b21\u7f16\u8bd1\u975e\u9996\u6b21\u53ef\u8df3\u8fc7\u6b64\u6b65-1",level:3},{value:"step2 \u8fdb\u5165\u5230\u5bf9\u5e94\u6a21\u5757\u8fdb\u884c\u7f16\u8bd1",id:"step2-\u8fdb\u5165\u5230\u5bf9\u5e94\u6a21\u5757\u8fdb\u884c\u7f16\u8bd1",level:3},{value:"step3 \u83b7\u53d6\u5b89\u88c5\u5305",id:"step3-\u83b7\u53d6\u5b89\u88c5\u5305-1",level:3},{value:"4. \u7f16\u8bd1\u67d0\u4e2a\u5f15\u64ce",id:"4-\u7f16\u8bd1\u67d0\u4e2a\u5f15\u64ce",level:2},{value:"step1 \u9996\u6b21\u7f16\u8bd1(\u975e\u9996\u6b21\u53ef\u8df3\u8fc7\u6b64\u6b65)",id:"step1-\u9996\u6b21\u7f16\u8bd1\u975e\u9996\u6b21\u53ef\u8df3\u8fc7\u6b64\u6b65-2",level:3},{value:"step2 \u8fdb\u5165\u5230\u5bf9\u5e94\u6a21\u5757\u8fdb\u884c\u7f16\u8bd1",id:"step2-\u8fdb\u5165\u5230\u5bf9\u5e94\u6a21\u5757\u8fdb\u884c\u7f16\u8bd1-1",level:3},{value:"5. \u5982\u4f55\u4fee\u6539Linkis\u7684\u4f9d\u8d56\u7684Hadoop\u3001Hive\u3001Spark\u7248\u672c",id:"5-\u5982\u4f55\u4fee\u6539linkis\u7684\u4f9d\u8d56\u7684hadoophivespark\u7248\u672c",level:2},{value:"5.1 \u5982\u4f55\u4fee\u6539 Linkis \u4f9d\u8d56\u7684 Hadoop \u7248\u672c",id:"51-\u5982\u4f55\u4fee\u6539-linkis-\u4f9d\u8d56\u7684-hadoop-\u7248\u672c",level:3},{value:"5.2 \u5982\u4f55\u4fee\u6539 Linkis \u4f9d\u8d56\u7684 Spark\u3001Hive \u7248\u672c",id:"52-\u5982\u4f55\u4fee\u6539-linkis-\u4f9d\u8d56\u7684-sparkhive-\u7248\u672c",level:3}],k={toc:s};function c(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},k,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"1-\u524d\u7f6e\u51c6\u5907"},"1. \u524d\u7f6e\u51c6\u5907"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u7f16\u8bd1\u73af\u5883\u8981\u6c42\uff1a"),"  \u5fc5\u987b ",(0,i.kt)("strong",{parentName:"p"},"JDK8")," \u4ee5\u4e0a\uff0c",(0,i.kt)("strong",{parentName:"p"},"Oracle/Sun")," \u548c ",(0,i.kt)("strong",{parentName:"p"},"OpenJDK"),"\u90fd\u652f\u6301\u3002"),(0,i.kt)("p",null,"\u4ece",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/linkis"},"github\u4ed3\u5e93")," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/linkis"},"https://github.com/apache/linkis")," \u83b7\u53d6\u9879\u76ee\u4ee3\u7801\u540e\uff0c\u4f7f\u7528 maven \u7f16\u8bd1\u9879\u76ee\u5b89\u88c5\u5305\u3002  "),(0,i.kt)("h3",{id:"11-\u6e90\u7801\u83b7\u53d6"},"1.1 \u6e90\u7801\u83b7\u53d6"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u65b9\u5f0f1\uff1a\u4ece",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis"},"github\u4ed3\u5e93")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis"},"https://github.com/apache/linkis")," \u83b7\u53d6\u9879\u76ee\u7684\u6e90\u4ee3\u7801\u3002")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u8bf7\u6ce8\u610f"),"\uff1a\u5b98\u65b9\u63a8\u8350\u4f7f\u7528 Hadoop-2.7.2\u3001Hive-1.2.1\u3001Spark-2.4.3 \u548c Scala-2.11.12 \u5bf9 Linkis \u8fdb\u884c\u7f16\u8bd1\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u60a8\u60f3\u4f7f\u7528 Hadoop\u3001Hive\u3001Spark \u7684\u5176\u4ed6\u7248\u672c\u5bf9 Linkis \u8fdb\u884c\u7f16\u8bd1\uff0c\u8bf7\u53c2\u8003\uff1a",(0,i.kt)("a",{parentName:"p",href:"#5-%E5%A6%82%E4%BD%95%E4%BF%AE%E6%94%B9linkis%E7%9A%84%E4%BE%9D%E8%B5%96%E7%9A%84hadoophivespark%E7%89%88%E6%9C%AC"},"\u5982\u4f55\u4fee\u6539Linkis\u7684\u4f9d\u8d56\u7684Hadoop\u3001Hive\u3001Spark\u7248\u672c")),(0,i.kt)("h2",{id:"2-\u5168\u91cf\u7f16\u8bd1-linkis"},"2. \u5168\u91cf\u7f16\u8bd1 Linkis"),(0,i.kt)("h3",{id:"step1-\u9996\u6b21\u7f16\u8bd1\u975e\u9996\u6b21\u53ef\u8df3\u8fc7\u6b64\u6b65"},"step1 \u9996\u6b21\u7f16\u8bd1(\u975e\u9996\u6b21\u53ef\u8df3\u8fc7\u6b64\u6b65)"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u5982\u679c\u60a8\u662f\u672c\u5730\u7b2c\u4e00\u6b21\u7f16\u8bd1\u4f7f\u7528\uff0c\u5fc5\u987b\u5728 Linkis \u6e90\u7801\u5305\u6839\u76ee\u5f55\u5148\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4"),"\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"    cd linkis-x.x.x\n    mvn -N  install\n")),(0,i.kt)("h3",{id:"step2-\u6267\u884c\u7f16\u8bd1"},"step2 \u6267\u884c\u7f16\u8bd1"),(0,i.kt)("p",null,"\u5728 Linkis \u6e90\u7801\u5305\u6839\u76ee\u5f55\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"    cd linkis-x.x.x\n    mvn clean install\n\n")),(0,i.kt)("h3",{id:"step3-\u83b7\u53d6\u5b89\u88c5\u5305"},"step3 \u83b7\u53d6\u5b89\u88c5\u5305"),(0,i.kt)("p",null,"\u7f16\u8bd1\u540e\u7684\u5b8c\u6574\u5b89\u88c5\u5305\uff0c\u5728\u5de5\u7a0b\u7684assembly-combined-package->target\u76ee\u5f55\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"    #\u8be6\u7ec6\u8def\u5f84\u5982\u4e0b\n    linkis-x.x.x/assembly-combined-package/target/wedatasphere-linkis-x.x.x-dist.tar.gz\n")),(0,i.kt)("h2",{id:"3-\u7f16\u8bd1\u5355\u4e2a\u6a21\u5757"},"3. \u7f16\u8bd1\u5355\u4e2a\u6a21\u5757"),(0,i.kt)("h3",{id:"step1-\u9996\u6b21\u7f16\u8bd1\u975e\u9996\u6b21\u53ef\u8df3\u8fc7\u6b64\u6b65-1"},"step1 \u9996\u6b21\u7f16\u8bd1(\u975e\u9996\u6b21\u53ef\u8df3\u8fc7\u6b64\u6b65)"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u5982\u679c\u60a8\u662f\u672c\u5730\u7b2c\u4e00\u6b21\u7f16\u8bd1\u4f7f\u7528\uff0c\u5fc5\u987b\u5728 Linkis \u6e90\u7801\u5305\u6839\u76ee\u5f55\u5148\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4"),"\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"    cd linkis-x.x.x\n    mvn -N  install\n")),(0,i.kt)("h3",{id:"step2-\u8fdb\u5165\u5230\u5bf9\u5e94\u6a21\u5757\u8fdb\u884c\u7f16\u8bd1"},"step2 \u8fdb\u5165\u5230\u5bf9\u5e94\u6a21\u5757\u8fdb\u884c\u7f16\u8bd1"),(0,i.kt)("p",null,"\u8fdb\u5165\u5230\u5bf9\u5e94\u6a21\u5757\u8fdb\u884c\u7f16\u8bd1\uff0c\u6bd4\u5982\u60f3\u91cd\u65b0\u7f16\u8bd1 Entrance\uff0c\u547d\u4ee4\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"    cd linkis-x.x.x/linkis-computation-governance/linkis-entrance\n    mvn clean install\n")),(0,i.kt)("h3",{id:"step3-\u83b7\u53d6\u5b89\u88c5\u5305-1"},"step3 \u83b7\u53d6\u5b89\u88c5\u5305"),(0,i.kt)("p",null,"\u83b7\u53d6\u5b89\u88c5\u5305\uff0c\u5728\u5bf9\u5e94\u6a21\u5757\u7684->target\u76ee\u5f55\u4e0b\u4f1a\u6709\u7f16\u8bd1\u597d\u7684\u5305\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"    ls linkis-x.x.x/linkis-computation-governance/linkis-entrance/target/linkis-entrance.x.x.x.jar\n")),(0,i.kt)("h2",{id:"4-\u7f16\u8bd1\u67d0\u4e2a\u5f15\u64ce"},"4. \u7f16\u8bd1\u67d0\u4e2a\u5f15\u64ce"),(0,i.kt)("p",null,"\u8fd9\u91cc\u4ee5\u7f16\u8bd1 Linkis \u7684 Spark \u5f15\u64ce\u4e3a\u4f8b\uff1a"),(0,i.kt)("h3",{id:"step1-\u9996\u6b21\u7f16\u8bd1\u975e\u9996\u6b21\u53ef\u8df3\u8fc7\u6b64\u6b65-2"},"step1 \u9996\u6b21\u7f16\u8bd1(\u975e\u9996\u6b21\u53ef\u8df3\u8fc7\u6b64\u6b65)"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u5982\u679c\u60a8\u662f\u672c\u5730\u7b2c\u4e00\u6b21\u4f7f\u7528\uff0c\u5fc5\u987b\u5728 Linkis \u6e90\u7801\u5305\u6839\u76ee\u5f55\u5148\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4"),"\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"    cd linkis-x.x.x\n    mvn -N  install\n")),(0,i.kt)("h3",{id:"step2-\u8fdb\u5165\u5230\u5bf9\u5e94\u6a21\u5757\u8fdb\u884c\u7f16\u8bd1-1"},"step2 \u8fdb\u5165\u5230\u5bf9\u5e94\u6a21\u5757\u8fdb\u884c\u7f16\u8bd1"),(0,i.kt)("p",null,"\u8fdb\u5165\u5230 Spark \u5f15\u64ce\u6240\u5728\u7684\u76ee\u5f55\u8fdb\u884c\u7f16\u8bd1\u6253\u5305\uff0c\u547d\u4ee4\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"    cd wedatasphere-linkis-x.x.x/linkis-engineconn-plugins/engineconn-plugins/spark\n    mvn clean install\n")),(0,i.kt)("p",null,"\uff083\uff09 \u83b7\u53d6\u5b89\u88c5\u5305\uff0c\u5728\u5bf9\u5e94\u6a21\u5757\u7684->target\u76ee\u5f55\u4e0b\u4f1a\u6709\u7f16\u8bd1\u597d\u7684\u5305\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"    wedatasphere-linkis-x.x.x/linkis-engineconn-plugins/engineconn-plugins/spark/target/linkis-engineplugin-spark-x.x.x.jar\n")),(0,i.kt)("p",null,"\u5982\u4f55\u5355\u72ec\u5b89\u88c5 Spark \u5f15\u64ce\uff1f \u8bf7\u53c2\u8003 ",(0,i.kt)("a",{parentName:"p",href:"../deployment/engine-conn-plugin-installation"},"Linkis \u5f15\u64ce\u63d2\u4ef6\u5b89\u88c5\u6587\u6863")),(0,i.kt)("h2",{id:"5-\u5982\u4f55\u4fee\u6539linkis\u7684\u4f9d\u8d56\u7684hadoophivespark\u7248\u672c"},"5. \u5982\u4f55\u4fee\u6539Linkis\u7684\u4f9d\u8d56\u7684Hadoop\u3001Hive\u3001Spark\u7248\u672c"),(0,i.kt)("p",null,"\u8bf7\u6ce8\u610f\uff1aHadoop \u4f5c\u4e3a\u5927\u6570\u636e\u57fa\u7840\u670d\u52a1\uff0cLinkis \u5fc5\u987b\u4f9d\u8d56 Hadoop \u8fdb\u884c\u7f16\u8bd1\uff1b\n\u800c Spark\u3001Hive\u7b49\u8ba1\u7b97\u5b58\u50a8\u5f15\u64ce\u5219\u4e0d\u7136\uff0c\u5982\u679c\u60a8\u4e0d\u60f3\u4f7f\u7528\u67d0\u4e2a\u5f15\u64ce\uff0c\u53ef\u4ee5\u65e0\u9700\u8bbe\u7f6e\u8be5\u5f15\u64ce\u7684\u7248\u672c\uff0c\u65e0\u9700\u7f16\u8bd1\u8be5\u5f15\u64ce\u63d2\u4ef6\u3002"),(0,i.kt)("p",null,"\u5177\u4f53\u800c\u8a00\uff0c\u4fee\u6539 Hadoop \u7684\u7248\u672c\u4e0e Spark\u3001Hive \u7b49\u8ba1\u7b97\u5f15\u64ce\u7684\u65b9\u5f0f\u4e0d\u540c\uff0c\u4e0b\u9762\u8be6\u7ec6\u4ecb\u7ecd\uff1a"),(0,i.kt)("h3",{id:"51-\u5982\u4f55\u4fee\u6539-linkis-\u4f9d\u8d56\u7684-hadoop-\u7248\u672c"},"5.1 \u5982\u4f55\u4fee\u6539 Linkis \u4f9d\u8d56\u7684 Hadoop \u7248\u672c"),(0,i.kt)("p",null,"\u8fdb\u5165 Linkis \u6e90\u7801\u5305\u6839\u76ee\u5f55\uff0c\u624b\u52a8\u4fee\u6539 pom.xml \u6587\u4ef6\u7684 Hadoop \u7248\u672c\u4fe1\u606f\uff0c\u5177\u4f53\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"    cd linkis-x.x.x\n    vim pom.xml\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"    <properties>\n      \n        <hadoop.version>2.7.2</hadoop.version> \x3c!--\x3e \u5728\u8fd9\u91cc\u4fee\u6539Hadoop\u7248\u672c\u53f7 <--\x3e\n        <scala.version>2.11.12</scala.version>\n        <jdk.compile.version>1.8</jdk.compile.version>\n              \n    </properties>\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u8bf7\u6ce8\u610f\uff1a\u5982\u679c\u4f60\u7684hadoop\u7248\u672c\u662fhadoop3\uff0c\u9700\u8981\u4fee\u6539linkis-hadoop-common\u7684pom\u6587\u4ef6"),"\n\u56e0\u4e3a\u5728hadoop2.8\u4ee5\u4e0b\u7684\u65f6\u5019\uff0chdfs\u76f8\u5173\u7684class\u662f\u5728hadoop-hdfs\u6a21\u5757\u4e2d\u7684\uff0c\u4f46\u662f\u5728hadoop 3.X\u4e2d\u5c06\u5bf9\u5e94\u7684class\u79fb\u52a8\u5230\u4e86\u6a21\u5757hadoop-hdfs-client\u5f53\u4e2d\uff0c\u60a8\u9700\u8981\u4fee\u6539\u4e0b\u8fd9\u4e2a\u6587\u4ef6\uff1a"),(0,i.kt)("p",null,"pom:Linkis/linkis-commons/linkis-hadoop-common/pom.xml\n\u4fee\u6539\u4f9d\u8d56hadoop-hdfs\u4e3ahadoop-hdfs-client\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"}," <dependency>\n        <groupId>org.apache.hadoop</groupId>\n        <artifactId>hadoop-hdfs</artifactId>  \x3c!-- \u53ea\u9700\u8981\u5c06\u8be5\u884c\u66ff\u6362\u5373\u53ef\uff0c\u66ff\u6362\u4e3a <artifactId>hadoop-hdfs-client</artifactId>--\x3e\n        <version>${hadoop.version}</version>\n</dependency>\n \u5c06hadoop-hdfs\u4fee\u6539\u4e3a\uff1a\n <dependency>\n        <groupId>org.apache.hadoop</groupId>\n        <artifactId>hadoop-hdfs-client</artifactId>\n        <version>${hadoop.version}</version>\n</dependency>\n")),(0,i.kt)("h3",{id:"52-\u5982\u4f55\u4fee\u6539-linkis-\u4f9d\u8d56\u7684-sparkhive-\u7248\u672c"},"5.2 \u5982\u4f55\u4fee\u6539 Linkis \u4f9d\u8d56\u7684 Spark\u3001Hive \u7248\u672c"),(0,i.kt)("p",null,"\u8fd9\u91cc\u4ee5\u4fee\u6539 Spark \u7684\u7248\u672c\u4e3a\u4f8b\u8fdb\u884c\u4ecb\u7ecd\u3002\u8fdb\u5165 Spark \u5f15\u64ce\u6240\u5728\u7684\u76ee\u5f55\uff0c\u624b\u52a8\u4fee\u6539 pom.xml \u6587\u4ef6\u7684 Spark \u7248\u672c\u4fe1\u606f\uff0c\u5177\u4f53\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"    cd linkis-x.x.x/linkis-engineconn-plugins/engineconn-plugins/spark\n    vim pom.xml\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"    <properties>\n        <spark.version>2.4.3</spark.version>  \x3c!--\x3e \u5728\u8fd9\u91cc\u4fee\u6539Spark\u7248\u672c\u53f7 <--\x3e  \n    </properties>\n")),(0,i.kt)("p",null,"\u4fee\u6539\u5176\u4ed6\u5f15\u64ce\u7684\u7248\u672c\u4e0e\u4fee\u6539 Spark \u7248\u672c\u7c7b\u4f3c\uff0c\u5148\u8fdb\u5165\u76f8\u5173\u5f15\u64ce\u6240\u5728\u7684\u76ee\u5f55\uff0c\u624b\u52a8\u4fee\u6539 pom.xml \u6587\u4ef6\u7684\u5f15\u64ce\u7248\u672c\u4fe1\u606f\u5373\u53ef\u3002"),(0,i.kt)("p",null,"\u7136\u540e\u8bf7\u53c2\u8003 ",(0,i.kt)("a",{parentName:"p",href:"#4-%E7%BC%96%E8%AF%91%E6%9F%90%E4%B8%AA%E5%BC%95%E6%93%8E"},"\u7f16\u8bd1\u67d0\u4e2a\u5f15\u64ce")))}c.isMDXComponent=!0}}]);