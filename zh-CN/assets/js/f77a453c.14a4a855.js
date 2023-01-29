"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[72086],{3905:(e,n,t)=>{t.d(n,{Zo:()=>k,kt:()=>c});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=a.createContext({}),d=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},k=function(e){var n=d(e.components);return a.createElement(o.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,k=p(e,["components","mdxType","originalType","parentName"]),m=d(t),c=i,u=m["".concat(o,".").concat(c)]||m[c]||s[c]||l;return t?a.createElement(u,r(r({ref:n},k),{},{components:t})):a.createElement(u,r({ref:n},k))}));function c(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,r=new Array(l);r[0]=m;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p.mdxType="string"==typeof e?e:i,r[1]=p;for(var d=2;d<l;d++)r[d]=t[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},58207:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>s,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var a=t(87462),i=(t(67294),t(3905));const l={title:"Flink",sidebar_position:6},r="Flink \u5f15\u64ce\u4f7f\u7528\u6587\u6863",p={unversionedId:"engine-usage/flink",id:"version-1.3.1/engine-usage/flink",title:"Flink",description:"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u5728 Linkis \u4e2d\uff0cflink \u5f15\u64ce\u63d2\u4ef6\u7684\u5b89\u88c5\u3001\u4f7f\u7528\u548c\u914d\u7f6e\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.3.1/engine-usage/flink.md",sourceDirName:"engine-usage",slug:"/engine-usage/flink",permalink:"/zh-CN/docs/latest/engine-usage/flink",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.3.1/engine-usage/flink.md",tags:[],version:"1.3.1",sidebarPosition:6,frontMatter:{title:"Flink",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"JDBC",permalink:"/zh-CN/docs/latest/engine-usage/jdbc"},next:{title:"openLooKeng",permalink:"/zh-CN/docs/latest/engine-usage/openlookeng"}},o={},d=[{value:"1. \u524d\u7f6e\u5de5\u4f5c",id:"1-\u524d\u7f6e\u5de5\u4f5c",level:2},{value:"1.1 \u5f15\u64ce\u73af\u5883\u914d\u7f6e",id:"11-\u5f15\u64ce\u73af\u5883\u914d\u7f6e",level:3},{value:"1.2 \u5f15\u64ce\u9a8c\u8bc1",id:"12-\u5f15\u64ce\u9a8c\u8bc1",level:3},{value:"2. \u5f15\u64ce\u63d2\u4ef6\u5b89\u88c5",id:"2-\u5f15\u64ce\u63d2\u4ef6\u5b89\u88c5",level:2},{value:"2.1 \u5f15\u64ce\u63d2\u4ef6\u51c6\u5907\uff08\u4e8c\u9009\u4e00\uff09\u975e\u9ed8\u8ba4\u5f15\u64ce",id:"21-\u5f15\u64ce\u63d2\u4ef6\u51c6\u5907\u4e8c\u9009\u4e00\u975e\u9ed8\u8ba4\u5f15\u64ce",level:3},{value:"2.2 \u5f15\u64ce\u63d2\u4ef6\u7684\u4e0a\u4f20\u548c\u52a0\u8f7d",id:"22-\u5f15\u64ce\u63d2\u4ef6\u7684\u4e0a\u4f20\u548c\u52a0\u8f7d",level:3},{value:"2.3 \u5f15\u64ce\u5237\u65b0",id:"23-\u5f15\u64ce\u5237\u65b0",level:3},{value:"2.3.1 \u91cd\u542f\u5237\u65b0",id:"231-\u91cd\u542f\u5237\u65b0",level:4},{value:"2.3.2 \u68c0\u67e5\u5f15\u64ce\u662f\u5426\u5237\u65b0\u6210\u529f",id:"232-\u68c0\u67e5\u5f15\u64ce\u662f\u5426\u5237\u65b0\u6210\u529f",level:3},{value:"3. Flink\u5f15\u64ce\u7684\u4f7f\u7528",id:"3-flink\u5f15\u64ce\u7684\u4f7f\u7528",level:2},{value:"3.1 \u901a\u8fc7 <code>Linkis-cli</code> \u63d0\u4ea4\u4efb\u52a1",id:"31-\u901a\u8fc7-linkis-cli-\u63d0\u4ea4\u4efb\u52a1",level:3},{value:"3.2 \u901a\u8fc7 <code>ComputationEngineConn</code> \u63d0\u4ea4\u4efb\u52a1",id:"32-\u901a\u8fc7-computationengineconn-\u63d0\u4ea4\u4efb\u52a1",level:3},{value:"3.3 \u901a\u8fc7 <code>OnceEngineConn</code> \u63d0\u4ea4\u4efb\u52a1",id:"33-\u901a\u8fc7-onceengineconn-\u63d0\u4ea4\u4efb\u52a1",level:3}],k={toc:d};function s(e){let{components:n,...l}=e;return(0,i.kt)("wrapper",(0,a.Z)({},k,l,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"flink-\u5f15\u64ce\u4f7f\u7528\u6587\u6863"},"Flink \u5f15\u64ce\u4f7f\u7528\u6587\u6863"),(0,i.kt)("p",null,"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"Linkis")," \u4e2d\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"flink")," \u5f15\u64ce\u63d2\u4ef6\u7684\u5b89\u88c5\u3001\u4f7f\u7528\u548c\u914d\u7f6e\u3002"),(0,i.kt)("h2",{id:"1-\u524d\u7f6e\u5de5\u4f5c"},"1. \u524d\u7f6e\u5de5\u4f5c"),(0,i.kt)("h3",{id:"11-\u5f15\u64ce\u73af\u5883\u914d\u7f6e"},"1.1 \u5f15\u64ce\u73af\u5883\u914d\u7f6e"),(0,i.kt)("p",null,"\u5982\u679c\u60a8\u5e0c\u671b\u5728\u60a8\u7684\u670d\u52a1\u5668\u4e0a\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"Flink")," \u5f15\u64ce\uff0c\u60a8\u9700\u8981\u4fdd\u8bc1\u4ee5\u4e0b\u7684\u73af\u5883\u53d8\u91cf\u5df2\u7ecf\u8bbe\u7f6e\u6b63\u786e\u5e76\u4e14\u5f15\u64ce\u7684\u542f\u52a8\u7528\u6237\u662f\u6709\u8fd9\u4e9b\u73af\u5883\u53d8\u91cf\u7684\u3002"),(0,i.kt)("h3",{id:"12-\u5f15\u64ce\u9a8c\u8bc1"},"1.2 \u5f15\u64ce\u9a8c\u8bc1"),(0,i.kt)("p",null,"\u5f3a\u70c8\u5efa\u8bae\u60a8\u5728\u6267\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},"Flink")," \u4efb\u52a1\u4e4b\u524d\uff0c\u68c0\u67e5\u4e0b\u6267\u884c\u7528\u6237\u7684\u8fd9\u4e9b\u73af\u5883\u53d8\u91cf\u3002\u5177\u4f53\u65b9\u5f0f\u662f"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sudo su - ${username}\necho ${JAVA_HOME}\necho ${FLINK_HOME}\n")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u73af\u5883\u53d8\u91cf\u540d"),(0,i.kt)("th",{parentName:"tr",align:null},"\u73af\u5883\u53d8\u91cf\u5185\u5bb9"),(0,i.kt)("th",{parentName:"tr",align:null},"\u5907\u6ce8"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"JAVA_HOME"),(0,i.kt)("td",{parentName:"tr",align:null},"JDK\u5b89\u88c5\u8def\u5f84"),(0,i.kt)("td",{parentName:"tr",align:null},"\u5fc5\u987b")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"HADOOP_HOME"),(0,i.kt)("td",{parentName:"tr",align:null},"Hadoop\u5b89\u88c5\u8def\u5f84"),(0,i.kt)("td",{parentName:"tr",align:null},"\u5fc5\u987b")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"HADOOP_CONF_DIR"),(0,i.kt)("td",{parentName:"tr",align:null},"Hadoop\u914d\u7f6e\u8def\u5f84"),(0,i.kt)("td",{parentName:"tr",align:null},"Linkis\u542f\u52a8Flink\u5f15\u64ce\u91c7\u7528\u7684Flink on yarn\u7684\u6a21\u5f0f,\u6240\u4ee5\u9700\u8981yarn\u7684\u652f\u6301\u3002")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"FLINK_HOME"),(0,i.kt)("td",{parentName:"tr",align:null},"Flink\u5b89\u88c5\u8def\u5f84"),(0,i.kt)("td",{parentName:"tr",align:null},"\u5fc5\u987b")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"FLINK_CONF_DIR"),(0,i.kt)("td",{parentName:"tr",align:null},"Flink\u914d\u7f6e\u8def\u5f84"),(0,i.kt)("td",{parentName:"tr",align:null},"\u5fc5\u987b,\u5982 ${FLINK_HOME}/conf")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"FLINK_LIB_DIR"),(0,i.kt)("td",{parentName:"tr",align:null},"Flink\u5305\u8def\u5f84"),(0,i.kt)("td",{parentName:"tr",align:null},"\u5fc5\u987b,${FLINK_HOME}/lib")))),(0,i.kt)("h2",{id:"2-\u5f15\u64ce\u63d2\u4ef6\u5b89\u88c5"},"2. \u5f15\u64ce\u63d2\u4ef6\u5b89\u88c5"),(0,i.kt)("h3",{id:"21-\u5f15\u64ce\u63d2\u4ef6\u51c6\u5907\u4e8c\u9009\u4e00\u975e\u9ed8\u8ba4\u5f15\u64ce"},"2.1 \u5f15\u64ce\u63d2\u4ef6\u51c6\u5907\uff08\u4e8c\u9009\u4e00\uff09",(0,i.kt)("a",{parentName:"h3",href:"/zh-CN/docs/latest/engine-usage/overview"},"\u975e\u9ed8\u8ba4\u5f15\u64ce")),(0,i.kt)("p",null,"\u65b9\u5f0f\u4e00\uff1a\u76f4\u63a5\u4e0b\u8f7d\u5f15\u64ce\u63d2\u4ef6\u5305"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://linkis.apache.org/zh-CN/blog/2022/04/15/how-to-download-engineconn-plugin"},"Linkis \u5f15\u64ce\u63d2\u4ef6\u4e0b\u8f7d")),(0,i.kt)("p",null,"\u65b9\u5f0f\u4e8c\uff1a\u5355\u72ec\u7f16\u8bd1\u5f15\u64ce\u63d2\u4ef6\uff08\u9700\u8981\u6709 ",(0,i.kt)("inlineCode",{parentName:"p"},"maven")," \u73af\u5883\uff09"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"# \u7f16\u8bd1\ncd ${linkis_code_dir}/linkis-engineconn-plugins/flink/\nmvn clean install\n# \u7f16\u8bd1\u51fa\u6765\u7684\u5f15\u64ce\u63d2\u4ef6\u5305\uff0c\u4f4d\u4e8e\u5982\u4e0b\u76ee\u5f55\u4e2d\n${linkis_code_dir}/linkis-engineconn-plugins/flink/target/out/\n")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/latest/deployment/install-engineconn"},"EngineConnPlugin \u5f15\u64ce\u63d2\u4ef6\u5b89\u88c5")),(0,i.kt)("h3",{id:"22-\u5f15\u64ce\u63d2\u4ef6\u7684\u4e0a\u4f20\u548c\u52a0\u8f7d"},"2.2 \u5f15\u64ce\u63d2\u4ef6\u7684\u4e0a\u4f20\u548c\u52a0\u8f7d"),(0,i.kt)("p",null,"\u5c06 2.1 \u4e2d\u7684\u5f15\u64ce\u63d2\u4ef6\u5305\u4e0a\u4f20\u5230\u670d\u52a1\u5668\u7684\u5f15\u64ce\u76ee\u5f55\u4e0b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"${LINKIS_HOME}/lib/linkis-engineplugins\n")),(0,i.kt)("p",null,"\u4e0a\u4f20\u540e\u76ee\u5f55\u7ed3\u6784\u5982\u4e0b\u6240\u793a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"linkis-engineconn-plugins/\n\u251c\u2500\u2500 flink\n\u2502\xa0\xa0 \u251c\u2500\u2500 dist\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 v1.12.2\n\u2502\xa0\xa0 \u2502\xa0\xa0     \u251c\u2500\u2500 conf\n\u2502\xa0\xa0 \u2502\xa0\xa0     \u2514\u2500\u2500 lib\n\u2502\xa0\xa0 \u2514\u2500\u2500 plugin\n\u2502\xa0\xa0     \u2514\u2500\u2500 1.12.2\n")),(0,i.kt)("h3",{id:"23-\u5f15\u64ce\u5237\u65b0"},"2.3 \u5f15\u64ce\u5237\u65b0"),(0,i.kt)("h4",{id:"231-\u91cd\u542f\u5237\u65b0"},"2.3.1 \u91cd\u542f\u5237\u65b0"),(0,i.kt)("p",null,"\u901a\u8fc7\u91cd\u542f ",(0,i.kt)("inlineCode",{parentName:"p"},"linkis-cg-linkismanager")," \u670d\u52a1\u5237\u65b0\u5f15\u64ce"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd ${LINKIS_HOME}/sbin\nsh linkis-daemon.sh restart cg-linkismanager\n")),(0,i.kt)("h3",{id:"232-\u68c0\u67e5\u5f15\u64ce\u662f\u5426\u5237\u65b0\u6210\u529f"},"2.3.2 \u68c0\u67e5\u5f15\u64ce\u662f\u5426\u5237\u65b0\u6210\u529f"),(0,i.kt)("p",null,"\u53ef\u4ee5\u67e5\u770b\u6570\u636e\u5e93\u4e2d\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"linkis_engine_conn_plugin_bml_resources")," \u8fd9\u5f20\u8868\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"last_update_time")," \u662f\u5426\u4e3a\u89e6\u53d1\u5237\u65b0\u7684\u65f6\u95f4\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"#\u767b\u9646\u5230linkis\u7684\u6570\u636e\u5e93 \nselect * from linkis_cg_engine_conn_plugin_bml_resources;\n")),(0,i.kt)("h2",{id:"3-flink\u5f15\u64ce\u7684\u4f7f\u7528"},"3. Flink\u5f15\u64ce\u7684\u4f7f\u7528"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Linkis")," \u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"Flink")," \u5f15\u64ce\u662f\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"flink on yarn")," \u7684\u65b9\u5f0f\u8fdb\u884c\u542f\u52a8\u7684,\u6240\u4ee5\u9700\u8981\u6307\u5b9a\u7528\u6237\u4f7f\u7528\u7684\u961f\u5217\uff0c\u5982\u4e0b\u56fe\u6240\u793a\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"yarn",src:t(88308).Z,width:"1296",height:"556"}),"  "),(0,i.kt)("h3",{id:"31-\u901a\u8fc7-linkis-cli-\u63d0\u4ea4\u4efb\u52a1"},"3.1 \u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"h3"},"Linkis-cli")," \u63d0\u4ea4\u4efb\u52a1"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'sh ./bin/linkis-cli -engineType flink-1.12.2 \\\n-codeType sql -code "show tables"  \\\n-submitUser hadoop -proxyUser hadoop\n')),(0,i.kt)("p",null,"\u66f4\u591a ",(0,i.kt)("inlineCode",{parentName:"p"},"Linkis-Cli")," \u547d\u4ee4\u53c2\u6570\u53c2\u8003\uff1a ",(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/latest/user-guide/linkiscli-manual"},(0,i.kt)("inlineCode",{parentName:"a"},"Linkis-Cli")," \u4f7f\u7528")),(0,i.kt)("h3",{id:"32-\u901a\u8fc7-computationengineconn-\u63d0\u4ea4\u4efb\u52a1"},"3.2 \u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"h3"},"ComputationEngineConn")," \u63d0\u4ea4\u4efb\u52a1"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"FlinkSQL")," \u53ef\u4ee5\u652f\u6301\u591a\u79cd\u6570\u636e\u6e90,\u4f8b\u5982 ",(0,i.kt)("inlineCode",{parentName:"p"},"binlog")," , ",(0,i.kt)("inlineCode",{parentName:"p"},"kafka")," , ",(0,i.kt)("inlineCode",{parentName:"p"},"hive")," \u7b49,\u5982\u679c\u60a8\u60f3\u8981\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"Flink")," \u4ee3\u7801\u4e2d\u4f7f\u7528\u8fd9\u4e9b\u6570\u636e\u6e90\uff0c\u60a8\u9700\u8981\u5c06\u8fd9\u4e9b ",(0,i.kt)("inlineCode",{parentName:"p"},"connector")," \u7684\u63d2\u4ef6 ",(0,i.kt)("inlineCode",{parentName:"p"},"jar")," \u5305\u653e\u7f6e\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"Flink")," \u5f15\u64ce\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"lib")," \u4e2d\uff0c\u5e76\u91cd\u542f\u4e0b ",(0,i.kt)("inlineCode",{parentName:"p"},"Linkis")," \u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"EnginePlugin")," \u670d\u52a1\u3002\u5982\u4f60\u60f3\u8981\u5728\u60a8\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"FlinkSQL")," \u4e2d\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"binlog")," \u4f5c\u4e3a\u6570\u636e\u6e90\uff0c\u90a3\u4e48\u60a8\u9700\u8981\u5c06 ",(0,i.kt)("inlineCode",{parentName:"p"},"flink-connector-mysql-cdc-1.1.1.jar")," \u653e\u7f6e\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"Flink")," \u5f15\u64ce\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"lib")," \u4e2d\u3002"),(0,i.kt)("p",null,"\u4e3a\u4e86\u65b9\u4fbf\u5927\u5bb6\u8fdb\u884c\u91c7\u6837\u8c03\u8bd5\uff0c\u6211\u4eec\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"Scriptis")," \u65b0\u589e\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"fql")," \u7684\u811a\u672c\u7c7b\u578b\uff0c\u4e13\u95e8\u7528\u4e8e\u6267\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},"FlinkSQL")," \u3002\u4f46\u662f\u9700\u8981\u4fdd\u8bc1\u60a8\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"DSS")," \u5df2\u7ecf\u5347\u7ea7\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"DSS1.0.0")," \u3002\u5347\u7ea7\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"DSS1.0.0")," \u4e4b\u540e\uff0c\u60a8\u53ef\u4ee5\u76f4\u63a5\u8fdb\u5165 ",(0,i.kt)("inlineCode",{parentName:"p"},"Scriptis")," \uff0c\u65b0\u5efa ",(0,i.kt)("inlineCode",{parentName:"p"},"fql")," \u811a\u672c\u8fdb\u884c\u7f16\u8f91\u548c\u6267\u884c\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"FlinkSQL")," \u7684\u7f16\u5199\u793a\u4f8b,\u4ee5 ",(0,i.kt)("inlineCode",{parentName:"p"},"binlog")," \u4e3a\u4f8b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE mysql_binlog (\n id INT NOT NULL,\n name STRING,\n age INT\n) WITH (\n 'connector' = 'mysql-cdc',\n 'hostname' = 'ip',\n 'port' = 'port',\n 'username' = 'username',\n 'password' = 'password',\n 'database-name' = 'dbname',\n 'table-name' = 'tablename',\n 'debezium.snapshot.locking.mode' = 'none' --\u5efa\u8bae\u6dfb\u52a0,\u4e0d\u7136\u4f1a\u8981\u6c42\u9501\u8868\n);\nselect * from mysql_binlog where id > 10;\n")),(0,i.kt)("p",null,"\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"Scriptis")," \u4e2d\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"select")," \u8bed\u6cd5\u8fdb\u884c\u8c03\u8bd5\u7684\u65f6\u5019\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"Flink")," \u5f15\u64ce\u4f1a\u6709\u4e00\u4e2a\u81ea\u52a8 ",(0,i.kt)("inlineCode",{parentName:"p"},"cancel")," \u7684\u673a\u5236\uff0c\u5373\u5230\u4e86\u6307\u5b9a\u7684\u65f6\u95f4\u6216\u8005\u91c7\u6837\u7684\u884c\u6570\u5230\u4e86\u6307\u5b9a\u7684\u6570\u91cf\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"Flink")," \u5f15\u64ce\u5c06\u4f1a\u4e3b\u52a8\u5c06\u4efb\u52a1 ",(0,i.kt)("inlineCode",{parentName:"p"},"cancel")," \uff0c\u5e76\u4e14\u5c06\u5df2\u7ecf\u83b7\u53d6\u5230\u7684\u7ed3\u679c\u96c6\u6301\u4e45\u5316\uff0c\u7136\u540e\u524d\u7aef\u4f1a\u8c03\u7528\u6253\u5f00\u7ed3\u679c\u96c6\u7684\u63a5\u53e3\u5c06\u7ed3\u679c\u96c6\u5728\u524d\u7aef\u8fdb\u884c\u5c55\u793a\u3002"),(0,i.kt)("h3",{id:"33-\u901a\u8fc7-onceengineconn-\u63d0\u4ea4\u4efb\u52a1"},"3.3 \u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"h3"},"OnceEngineConn")," \u63d0\u4ea4\u4efb\u52a1"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"OnceEngineConn")," \u7684\u4f7f\u7528\u65b9\u5f0f\u662f\u7528\u4e8e\u6b63\u5f0f\u542f\u52a8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Flink")," \u7684\u6d41\u5f0f\u5e94\u7528,\u5177\u4f53\u7684\u662f\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"LinkisManagerClient")," \u8c03\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"LinkisManager")," ",(0,i.kt)("inlineCode",{parentName:"p"},"\u7684createEngineConn")," \u7684\u63a5\u53e3\uff0c\u5e76\u5c06\u4ee3\u7801\u53d1\u7ed9\u521b\u5efa\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"Flink")," \u5f15\u64ce\uff0c\u7136\u540e ",(0,i.kt)("inlineCode",{parentName:"p"},"Flink")," \u5f15\u64ce\u5c31\u5f00\u59cb\u6267\u884c\uff0c\u6b64\u65b9\u5f0f\u53ef\u4ee5\u88ab\u5176\u4ed6\u7cfb\u7edf\u8fdb\u884c\u8c03\u7528\uff0c\u6bd4\u5982 ",(0,i.kt)("inlineCode",{parentName:"p"},"Streamis")," \u3002 ",(0,i.kt)("inlineCode",{parentName:"p"},"Client")," \u7684\u4f7f\u7528\u65b9\u5f0f\u4e5f\u5f88\u7b80\u5355\uff0c\u9996\u5148\u65b0\u5efa\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"maven")," \u9879\u76ee\uff0c\u6216\u8005\u5728\u60a8\u7684\u9879\u76ee\u4e2d\u5f15\u5165\u4ee5\u4e0b\u7684\u4f9d\u8d56\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>org.apache.linkis</groupId>\n    <artifactId>linkis-computation-client</artifactId>\n    <version>${linkis.version}</version>\n</dependency>\n")),(0,i.kt)("p",null,"\u7136\u540e\u65b0\u5efa ",(0,i.kt)("inlineCode",{parentName:"p"},"scala")," \u6d4b\u8bd5\u6587\u4ef6,\u70b9\u51fb\u6267\u884c\uff0c\u5c31\u5b8c\u6210\u4e86\u4ece\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"binlog")," \u6570\u636e\u8fdb\u884c\u89e3\u6790\u5e76\u63d2\u5165\u5230\u53e6\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"mysql")," \u6570\u636e\u5e93\u7684\u8868\u4e2d\u3002\u4f46\u662f\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u60a8\u5fc5\u987b\u8981\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"maven")," \u9879\u76ee\u4e2d\u65b0\u5efa\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"resources")," \u76ee\u5f55\uff0c\u653e\u7f6e\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"linkis.properties")," \u6587\u4ef6\uff0c\u5e76\u6307\u5b9a ",(0,i.kt)("inlineCode",{parentName:"p"},"linkis")," \u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"gateway")," \u5730\u5740\u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"api")," \u7248\u672c\uff0c\u5982"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-properties"},"wds.linkis.server.version=v1\nwds.linkis.gateway.url=http://ip:9001/\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"object OnceJobTest {\n  def main(args: Array[String]): Unit = {\n    val sql = \"\"\"CREATE TABLE mysql_binlog (\n                | id INT NOT NULL,\n                | name STRING,\n                | age INT\n                |) WITH (\n                | 'connector' = 'mysql-cdc',\n                | 'hostname' = 'ip',\n                | 'port' = 'port',\n                | 'username' = '${username}',\n                | 'password' = '${password}',\n                | 'database-name' = '${database}',\n                | 'table-name' = '${tablename}',\n                | 'debezium.snapshot.locking.mode' = 'none'\n                |);\n                |CREATE TABLE sink_table (\n                | id INT NOT NULL,\n                | name STRING,\n                | age INT,\n                | primary key(id) not enforced\n                |) WITH (\n                |  'connector' = 'jdbc',\n                |  'url' = 'jdbc:mysql://${ip}:port/${database}',\n                |  'table-name' = '${tablename}',\n                |  'driver' = 'com.mysql.jdbc.Driver',\n                |  'username' = '${username}',\n                |  'password' = '${password}'\n                |);\n                |INSERT INTO sink_table SELECT id, name, age FROM mysql_binlog;\n                |\"\"\".stripMargin\n    val onceJob = SimpleOnceJob.builder().setCreateService(\"Flink-Test\").addLabel(LabelKeyUtils.ENGINE_TYPE_LABEL_KEY, \"flink-1.12.2\")\n      .addLabel(LabelKeyUtils.USER_CREATOR_LABEL_KEY, \"hadoop-Streamis\").addLabel(LabelKeyUtils.ENGINE_CONN_MODE_LABEL_KEY, \"once\")\n      .addStartupParam(Configuration.IS_TEST_MODE.key, true)\n      //    .addStartupParam(\"label.\" + LabelKeyConstant.CODE_TYPE_KEY, \"sql\")\n      .setMaxSubmitTime(300000)\n      .addExecuteUser(\"hadoop\").addJobContent(\"runType\", \"sql\").addJobContent(\"code\", sql).addSource(\"jobName\", \"OnceJobTest\")\n      .build()\n    onceJob.submit()\n    println(onceJob.getId)\n    onceJob.waitForCompleted()\n    System.exit(0)\n  }\n}\n")))}s.isMDXComponent=!0},88308:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/yarn-conf-395feb3695fdbf71df62544d5df21ad3.png"}}]);