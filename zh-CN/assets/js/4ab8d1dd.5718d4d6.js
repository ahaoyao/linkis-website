"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[16936],{3905:function(n,e,t){t.d(e,{Zo:function(){return c},kt:function(){return d}});var i=t(67294);function l(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,i)}return t}function r(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){l(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function o(n,e){if(null==n)return{};var t,i,l=function(n,e){if(null==n)return{};var t,i,l={},a=Object.keys(n);for(i=0;i<a.length;i++)t=a[i],e.indexOf(t)>=0||(l[t]=n[t]);return l}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(i=0;i<a.length;i++)t=a[i],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(l[t]=n[t])}return l}var s=i.createContext({}),p=function(n){var e=i.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):r(r({},e),n)),t},c=function(n){var e=p(n.components);return i.createElement(s.Provider,{value:e},n.children)},k={inlineCode:"code",wrapper:function(n){var e=n.children;return i.createElement(i.Fragment,{},e)}},u=i.forwardRef((function(n,e){var t=n.components,l=n.mdxType,a=n.originalType,s=n.parentName,c=o(n,["components","mdxType","originalType","parentName"]),u=p(t),d=l,m=u["".concat(s,".").concat(d)]||u[d]||k[d]||a;return t?i.createElement(m,r(r({ref:e},c),{},{components:t})):i.createElement(m,r({ref:e},c))}));function d(n,e){var t=arguments,l=e&&e.mdxType;if("string"==typeof n||l){var a=t.length,r=new Array(a);r[0]=u;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=n,o.mdxType="string"==typeof n?n:l,r[1]=o;for(var p=2;p<a;p++)r[p]=t[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2255:function(n,e,t){t.r(e),t.d(e,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var i=t(87462),l=t(63366),a=(t(67294),t(3905)),r=["components"],o={title:"Flink \u5f15\u64ce",sidebar_position:8},s="Flink \u5f15\u64ce\u4f7f\u7528\u6587\u6863",p={unversionedId:"engine-usage/flink",id:"version-1.1.2/engine-usage/flink",isDocsHomePage:!1,title:"Flink \u5f15\u64ce",description:"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u5728Linkis1.X\u4e2d\uff0cflink\u5f15\u64ce\u7684\u914d\u7f6e\u3001\u90e8\u7f72\u548c\u4f7f\u7528\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.1.2/engine-usage/flink.md",sourceDirName:"engine-usage",slug:"/engine-usage/flink",permalink:"/zh-CN/docs/latest/engine-usage/flink",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.1.2/engine-usage/flink.md",tags:[],version:"1.1.2",sidebarPosition:8,frontMatter:{title:"Flink \u5f15\u64ce",sidebar_position:8},sidebar:"version-1.1.2/tutorialSidebar",previous:{title:"JDBC \u5f15\u64ce",permalink:"/zh-CN/docs/latest/engine-usage/jdbc"},next:{title:"openLooKeng \u5f15\u64ce",permalink:"/zh-CN/docs/latest/engine-usage/openlookeng"}},c=[{value:"1.Flink\u5f15\u64ce\u4f7f\u7528\u524d\u7684\u73af\u5883\u914d\u7f6e",id:"1flink\u5f15\u64ce\u4f7f\u7528\u524d\u7684\u73af\u5883\u914d\u7f6e",children:[]},{value:"2.Flink\u5f15\u64ce\u7684\u914d\u7f6e\u548c\u90e8\u7f72",id:"2flink\u5f15\u64ce\u7684\u914d\u7f6e\u548c\u90e8\u7f72",children:[{value:"2.1 Flink\u7248\u672c\u7684\u9009\u62e9\u548c\u7f16\u8bd1",id:"21-flink\u7248\u672c\u7684\u9009\u62e9\u548c\u7f16\u8bd1",children:[]},{value:"2.2 Flink engineConn\u90e8\u7f72\u548c\u52a0\u8f7d",id:"22-flink-engineconn\u90e8\u7f72\u548c\u52a0\u8f7d",children:[]},{value:"2.3 Flink\u5f15\u64ce\u7684\u6807\u7b7e",id:"23-flink\u5f15\u64ce\u7684\u6807\u7b7e",children:[]}]},{value:"3.Flink\u5f15\u64ce\u7684\u4f7f\u7528",id:"3flink\u5f15\u64ce\u7684\u4f7f\u7528",children:[{value:"\u51c6\u5907\u64cd\u4f5c\uff0c\u961f\u5217\u8bbe\u7f6e",id:"\u51c6\u5907\u64cd\u4f5c\u961f\u5217\u8bbe\u7f6e",children:[]},{value:"\u51c6\u5907\u77e5\u8bc6,Flink\u5f15\u64ce\u7684\u4e24\u79cd\u4f7f\u7528\u65b9\u5f0f",id:"\u51c6\u5907\u77e5\u8bc6flink\u5f15\u64ce\u7684\u4e24\u79cd\u4f7f\u7528\u65b9\u5f0f",children:[]},{value:"\u51c6\u5907\u77e5\u8bc6\uff0cFlinkSQL\u7684Connector\u63d2\u4ef6",id:"\u51c6\u5907\u77e5\u8bc6flinksql\u7684connector\u63d2\u4ef6",children:[]},{value:"3.1 ComputationEngineConn\u65b9\u5f0f",id:"31-computationengineconn\u65b9\u5f0f",children:[]},{value:"3.2 \u901a\u8fc7Linkis-cli\u8fdb\u884c\u4efb\u52a1\u63d0\u4ea4",id:"32-\u901a\u8fc7linkis-cli\u8fdb\u884c\u4efb\u52a1\u63d0\u4ea4",children:[]},{value:"3.3 OnceEngineConn\u65b9\u5f0f",id:"33-onceengineconn\u65b9\u5f0f",children:[]}]}],k={toc:c};function u(n){var e=n.components,t=(0,l.Z)(n,r);return(0,a.kt)("wrapper",(0,i.Z)({},k,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"flink-\u5f15\u64ce\u4f7f\u7528\u6587\u6863"},"Flink \u5f15\u64ce\u4f7f\u7528\u6587\u6863"),(0,a.kt)("p",null,"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u5728Linkis1.X\u4e2d\uff0cflink\u5f15\u64ce\u7684\u914d\u7f6e\u3001\u90e8\u7f72\u548c\u4f7f\u7528\u3002"),(0,a.kt)("h2",{id:"1flink\u5f15\u64ce\u4f7f\u7528\u524d\u7684\u73af\u5883\u914d\u7f6e"},"1.Flink\u5f15\u64ce\u4f7f\u7528\u524d\u7684\u73af\u5883\u914d\u7f6e"),(0,a.kt)("p",null,"\u5982\u679c\u60a8\u5e0c\u671b\u5728\u60a8\u7684\u670d\u52a1\u5668\u4e0a\u4f7f\u7528Flink\u5f15\u64ce\uff0c\u60a8\u9700\u8981\u4fdd\u8bc1\u4ee5\u4e0b\u7684\u73af\u5883\u53d8\u91cf\u5df2\u7ecf\u8bbe\u7f6e\u6b63\u786e\u5e76\u4e14\u5f15\u64ce\u7684\u542f\u52a8\u7528\u6237\u662f\u6709\u8fd9\u4e9b\u73af\u5883\u53d8\u91cf\u7684\u3002"),(0,a.kt)("p",null,"\u5f3a\u70c8\u5efa\u8bae\u60a8\u5728\u6267\u884cflink\u4efb\u52a1\u4e4b\u524d\uff0c\u68c0\u67e5\u4e0b\u6267\u884c\u7528\u6237\u7684\u8fd9\u4e9b\u73af\u5883\u53d8\u91cf\u3002\u5177\u4f53\u65b9\u5f0f\u662f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo su - ${username}\necho ${JAVA_HOME}\necho ${FLINK_HOME}\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u73af\u5883\u53d8\u91cf\u540d"),(0,a.kt)("th",{parentName:"tr",align:null},"\u73af\u5883\u53d8\u91cf\u5185\u5bb9"),(0,a.kt)("th",{parentName:"tr",align:null},"\u5907\u6ce8"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"JAVA_HOME"),(0,a.kt)("td",{parentName:"tr",align:null},"JDK\u5b89\u88c5\u8def\u5f84"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5fc5\u987b")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"HADOOP_HOME"),(0,a.kt)("td",{parentName:"tr",align:null},"Hadoop\u5b89\u88c5\u8def\u5f84"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5fc5\u987b")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"HADOOP_CONF_DIR"),(0,a.kt)("td",{parentName:"tr",align:null},"Hadoop\u914d\u7f6e\u8def\u5f84"),(0,a.kt)("td",{parentName:"tr",align:null},"Linkis\u542f\u52a8Flink\u5f15\u64ce\u91c7\u7528\u7684Flink on yarn\u7684\u6a21\u5f0f,\u6240\u4ee5\u9700\u8981yarn\u7684\u652f\u6301\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"FLINK_HOME"),(0,a.kt)("td",{parentName:"tr",align:null},"Flink\u5b89\u88c5\u8def\u5f84"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5fc5\u987b")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"FLINK_CONF_DIR"),(0,a.kt)("td",{parentName:"tr",align:null},"Flink\u914d\u7f6e\u8def\u5f84"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5fc5\u987b,\u5982 ${FLINK_HOME}/conf")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"FLINK_LIB_DIR"),(0,a.kt)("td",{parentName:"tr",align:null},"Flink\u5305\u8def\u5f84"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5fc5\u987b,${FLINK_HOME}/lib")))),(0,a.kt)("p",null,"\u88681-1 \u73af\u5883\u914d\u7f6e\u6e05\u5355"),(0,a.kt)("h2",{id:"2flink\u5f15\u64ce\u7684\u914d\u7f6e\u548c\u90e8\u7f72"},"2.Flink\u5f15\u64ce\u7684\u914d\u7f6e\u548c\u90e8\u7f72"),(0,a.kt)("h3",{id:"21-flink\u7248\u672c\u7684\u9009\u62e9\u548c\u7f16\u8bd1"},"2.1 Flink\u7248\u672c\u7684\u9009\u62e9\u548c\u7f16\u8bd1"),(0,a.kt)("p",null,"Linkis 1.0.2\u53ca\u4ee5\u4e0a\u652f\u6301\u7684Flink\u7248\u672c\u662fFlink1.12.2,\u7406\u8bba\u4e0aLinkis 1.0.2+\u53ef\u4ee5\u652f\u6301\u5404\u4e2a\u7248\u672c\u7684Flink,\u4f46\u662fFlink\u5404\u4e2a\u7248\u672c\u4e4b\u524d\u7684API\u53d8\u5316\u592a\u5927,\u53ef\u80fd\u9700\u8981\u60a8\u6309\u7167API\u7684\u53d8\u5316\u4fee\u6539Linkis\u4e2dflink\u5f15\u64ce\u7684\u4ee3\u7801\u5e76\u91cd\u65b0\u7f16\u8bd1\u3002"),(0,a.kt)("h3",{id:"22-flink-engineconn\u90e8\u7f72\u548c\u52a0\u8f7d"},"2.2 Flink engineConn\u90e8\u7f72\u548c\u52a0\u8f7d"),(0,a.kt)("p",null,"\u6ce8\u610f: \u7f16\u8bd1flink\u5f15\u64ce\u4e4b\u524d\u9700\u8981\u8fdb\u884clinkis\u9879\u76ee\u5168\u91cf\u7f16\u8bd1",(0,a.kt)("br",{parentName:"p"}),"\n","Linkis Flink\u5f15\u64ce\u9ed8\u8ba4\u5728Linkis1.0.2+\u4e0d\u4f1a\u5b89\u88c5\uff0c\u9700\u8981\u60a8\u624b\u52a8\u8fdb\u884c\u7f16\u8bd1\u5e76\u8fdb\u884c\u5b89\u88c5\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u5355\u72ec\u7f16\u8bd1flink\u7684\u65b9\u5f0f\n${linkis_code_dir}/linkis-enginepconn-lugins/engineconn-plugins/flink/\nmvn clean install\n")),(0,a.kt)("p",null,"\u5b89\u88c5\u65b9\u5f0f\u662f\u5c06\u7f16\u8bd1\u51fa\u6765\u7684\u5f15\u64ce\u5305,\u4f4d\u7f6e\u5728"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"${linkis_code_dir}/linkis-enginepconn-lugins/engineconn-plugins/flink/target/flink-engineconn.zip\n")),(0,a.kt)("p",null,"\u7136\u540e\u90e8\u7f72\u5230"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"${LINKIS_HOME}/lib/linkis-engineplugins\n")),(0,a.kt)("p",null,"\u5e76\u91cd\u542flinkis-engineplugin"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd ${LINKIS_HOME}/sbin\nsh linkis-daemon.sh restart cg-engineplugin\n")),(0,a.kt)("p",null,"engineplugin\u66f4\u8be6\u7ec6\u7684\u4ecb\u7ecd\u53ef\u4ee5\u53c2\u770b\u4e0b\u9762\u7684\u6587\u7ae0\u3002",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{parentName:"p",href:"https://linkis.apache.org/zh-CN/docs/1.1.1/deployment/engine-conn-plugin-installation"},"https://linkis.apache.org/zh-CN/docs/1.1.1/deployment/engine-conn-plugin-installation")),(0,a.kt)("h3",{id:"23-flink\u5f15\u64ce\u7684\u6807\u7b7e"},"2.3 Flink\u5f15\u64ce\u7684\u6807\u7b7e"),(0,a.kt)("p",null,"Linkis1.X\u662f\u901a\u8fc7\u6807\u7b7e\u6765\u8fdb\u884c\u7684\uff0c\u6240\u4ee5\u9700\u8981\u5728\u6211\u4eec\u6570\u636e\u5e93\u4e2d\u63d2\u5165\u6570\u636e\uff0c\u63d2\u5165\u7684\u65b9\u5f0f\u5982\u4e0b\u6587\u6240\u793a\u3002"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../deployment/engine-conn-plugin-installation"},"EngineConnPlugin\u5f15\u64ce\u63d2\u4ef6\u5b89\u88c5")," "),(0,a.kt)("h2",{id:"3flink\u5f15\u64ce\u7684\u4f7f\u7528"},"3.Flink\u5f15\u64ce\u7684\u4f7f\u7528"),(0,a.kt)("h3",{id:"\u51c6\u5907\u64cd\u4f5c\u961f\u5217\u8bbe\u7f6e"},"\u51c6\u5907\u64cd\u4f5c\uff0c\u961f\u5217\u8bbe\u7f6e"),(0,a.kt)("p",null,"Linkis1.X\u7684Flink\u5f15\u64ce\u662f\u901a\u8fc7flink on yarn\u7684\u65b9\u5f0f\u8fdb\u884c\u542f\u52a8\u7684,\u6240\u4ee5\u9700\u8981\u6307\u5b9a\u7528\u6237\u4f7f\u7528\u7684\u961f\u5217\u3002\u6307\u5b9a\u961f\u5217\u7684\u65b9\u5f0f\u5982\u56fe3-1\u6240\u793a\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/29391030/168045831-80836172-a582-48cd-b15d-c343b958cd75.png",alt:"yarn"}),"  "),(0,a.kt)("p",null,"\u56fe3-1 \u961f\u5217\u8bbe\u7f6e"),(0,a.kt)("h3",{id:"\u51c6\u5907\u77e5\u8bc6flink\u5f15\u64ce\u7684\u4e24\u79cd\u4f7f\u7528\u65b9\u5f0f"},"\u51c6\u5907\u77e5\u8bc6,Flink\u5f15\u64ce\u7684\u4e24\u79cd\u4f7f\u7528\u65b9\u5f0f"),(0,a.kt)("p",null,"Linkis\u7684Flink\u5f15\u64ce\u6709\u4e24\u79cd\u6267\u884c\u65b9\u5f0f\uff0c\u4e00\u79cd\u662fComputationEngineConn\u65b9\u5f0f\uff0c\u8be5\u65b9\u5f0f\u4e3b\u8981\u662f\u5728DSS-Scriptis\u6216\u8005Streamis-Datasource\u8fdb\u884c\u4f7f\u7528\uff0c\u7528\u4e8e\u8c03\u8bd5\u91c7\u6837\uff0c\u9a8c\u8bc1flink\u4ee3\u7801\u7684\u6b63\u786e\u6027;\u53e6\u4e00\u79cd\u65b9\u5f0f\u662fOnceEngineConn\u65b9\u5f0f\uff0c\u8be5\u65b9\u5f0f\u4e3b\u8981\u662f\u7528\u4e8e\u5728Streamis\u751f\u4ea7\u4e2d\u5fc3\u7528\u4e8e\u542f\u52a8\u4e00\u4e2a\u6d41\u5f0f\u5e94\u7528\u3002"),(0,a.kt)("h3",{id:"\u51c6\u5907\u77e5\u8bc6flinksql\u7684connector\u63d2\u4ef6"},"\u51c6\u5907\u77e5\u8bc6\uff0cFlinkSQL\u7684Connector\u63d2\u4ef6"),(0,a.kt)("p",null,"FlinkSQL\u53ef\u4ee5\u652f\u6301\u591a\u79cd\u6570\u636e\u6e90,\u4f8b\u5982binlog,kafka,hive\u7b49,\u5982\u679c\u60a8\u60f3\u8981\u5728Flink\u4ee3\u7801\u4e2d\u4f7f\u7528\u8fd9\u4e9b\u6570\u636e\u6e90\uff0c\u60a8\u9700\u8981\u5c06\u8fd9\u4e9bconnector\u7684\u63d2\u4ef6jar\u5305\u653e\u7f6e\u5230flink\u5f15\u64ce\u7684lib\u4e2d\uff0c\u5e76\u91cd\u542f\u4e0bLinkis\u7684EnginePlugin\u670d\u52a1\u3002\u5982\u4f60\u60f3\u8981\u5728\u60a8\u7684FlinkSQL\u4e2d\u4f7f\u7528binlog\u4f5c\u4e3a\u6570\u636e\u6e90\uff0c\u90a3\u4e48\u60a8\u9700\u8981\u5c06flink-connector-mysql-cdc-1.1.1.jar\u653e\u7f6e\u5230flink\u5f15\u64ce\u7684lib\u4e2d\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd ${LINKS_HOME}/sbin\nsh linkis-daemon.sh restart cg-engineplugin\n")),(0,a.kt)("h3",{id:"31-computationengineconn\u65b9\u5f0f"},"3.1 ComputationEngineConn\u65b9\u5f0f"),(0,a.kt)("p",null,"\u4e3a\u4e86\u65b9\u4fbf\u5927\u5bb6\u8fdb\u884c\u91c7\u6837\u8c03\u8bd5\uff0c\u6211\u4eec\u5728Scriptis\u65b0\u589e\u4e86fql\u7684\u811a\u672c\u7c7b\u578b\uff0c\u4e13\u95e8\u7528\u4e8e\u6267\u884cFlinkSQL\u3002\u4f46\u662f\u9700\u8981\u4fdd\u8bc1\u60a8\u7684DSS\u5df2\u7ecf\u5347\u7ea7\u5230DSS1.0.0\u3002\u5347\u7ea7\u5230DSS1.0.0\u4e4b\u540e\uff0c\u60a8\u53ef\u4ee5\u76f4\u63a5\u8fdb\u5165Scriptis\uff0c\u65b0\u5efafql\u811a\u672c\u8fdb\u884c\u7f16\u8f91\u548c\u6267\u884c\u3002"),(0,a.kt)("p",null,"FlinkSQL\u7684\u7f16\u5199\u793a\u4f8b,\u4ee5binlog\u4e3a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE mysql_binlog (\n id INT NOT NULL,\n name STRING,\n age INT\n) WITH (\n 'connector' = 'mysql-cdc',\n 'hostname' = 'ip',\n 'port' = 'port',\n 'username' = 'username',\n 'password' = 'password',\n 'database-name' = 'dbname',\n 'table-name' = 'tablename',\n 'debezium.snapshot.locking.mode' = 'none' --\u5efa\u8bae\u6dfb\u52a0,\u4e0d\u7136\u4f1a\u8981\u6c42\u9501\u8868\n);\nselect * from mysql_binlog where id > 10;\n")),(0,a.kt)("p",null,"\u5728Scriptis\u4e2d\u4f7f\u7528select\u8bed\u6cd5\u8fdb\u884c\u8c03\u8bd5\u7684\u65f6\u5019\uff0cFlink\u5f15\u64ce\u4f1a\u6709\u4e00\u4e2a\u81ea\u52a8cancel\u7684\u673a\u5236\uff0c\u5373\u5230\u4e86\u6307\u5b9a\u7684\u65f6\u95f4\u6216\u8005\u91c7\u6837\u7684\u884c\u6570\u5230\u4e86\u6307\u5b9a\u7684\u6570\u91cf\uff0cFlink\u5f15\u64ce\u5c06\u4f1a\u4e3b\u52a8\u5c06\u4efb\u52a1cancel\uff0c\u5e76\u4e14\u5c06\u5df2\u7ecf\u83b7\u53d6\u5230\u7684\u7ed3\u679c\u96c6\u6301\u4e45\u5316\uff0c\u7136\u540e\u524d\u7aef\u4f1a\u8c03\u7528\u6253\u5f00\u7ed3\u679c\u96c6\u7684\u63a5\u53e3\u5c06\u7ed3\u679c\u96c6\u5728\u524d\u7aef\u8fdb\u884c\u5c55\u793a\u3002"),(0,a.kt)("h3",{id:"32-\u901a\u8fc7linkis-cli\u8fdb\u884c\u4efb\u52a1\u63d0\u4ea4"},"3.2 \u901a\u8fc7Linkis-cli\u8fdb\u884c\u4efb\u52a1\u63d0\u4ea4"),(0,a.kt)("p",null,"Linkis 1.0\u540e\u63d0\u4f9b\u4e86cli\u7684\u65b9\u5f0f\u63d0\u4ea4\u4efb\u52a1\uff0c\u6211\u4eec\u53ea\u9700\u8981\u6307\u5b9a\u5bf9\u5e94\u7684EngineConn\u548cCodeType\u6807\u7b7e\u7c7b\u578b\u5373\u53ef\uff0cHive\u7684\u4f7f\u7528\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'sh ./bin/linkis-cli -engineType flink-1.12.2 -codeType sql -code "show tables"  -submitUser hadoop -proxyUser hadoop\n')),(0,a.kt)("p",null,"\u5177\u4f53\u4f7f\u7528\u53ef\u4ee5\u53c2\u8003\uff1a ",(0,a.kt)("a",{parentName:"p",href:"/zh-CN/docs/latest/user-guide/linkiscli-manual"},"Linkis CLI Manual"),"."),(0,a.kt)("h3",{id:"33-onceengineconn\u65b9\u5f0f"},"3.3 OnceEngineConn\u65b9\u5f0f"),(0,a.kt)("p",null,"OnceEngineConn\u7684\u4f7f\u7528\u65b9\u5f0f\u662f\u7528\u4e8e\u6b63\u5f0f\u542f\u52a8Flink\u7684\u6d41\u5f0f\u5e94\u7528,\u5177\u4f53\u7684\u662f\u901a\u8fc7LinkisManagerClient\u8c03\u7528LinkisManager\u7684createEngineConn\u7684\u63a5\u53e3\uff0c\u5e76\u5c06\u4ee3\u7801\u53d1\u7ed9\u521b\u5efa\u7684Flink\u5f15\u64ce\uff0c\u7136\u540eFlink\u5f15\u64ce\u5c31\u5f00\u59cb\u6267\u884c\uff0c\u6b64\u65b9\u5f0f\u53ef\u4ee5\u88ab\u5176\u4ed6\u7cfb\u7edf\u8fdb\u884c\u8c03\u7528\uff0c\u6bd4\u5982Streamis\u3002Client\u7684\u4f7f\u7528\u65b9\u5f0f\u4e5f\u5f88\u7b80\u5355\uff0c\u9996\u5148\u65b0\u5efa\u4e00\u4e2amaven\u9879\u76ee\uff0c\u6216\u8005\u5728\u60a8\u7684\u9879\u76ee\u4e2d\u5f15\u5165\u4ee5\u4e0b\u7684\u4f9d\u8d56"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>org.apache.linkis</groupId>\n    <artifactId>linkis-computation-client</artifactId>\n    <version>${linkis.version}</version>\n</dependency>\n")),(0,a.kt)("p",null,"\u7136\u540e\u65b0\u5efascala\u6d4b\u8bd5\u6587\u4ef6,\u70b9\u51fb\u6267\u884c\uff0c\u5c31\u5b8c\u6210\u4e86\u4ece\u4e00\u4e2abinlog\u6570\u636e\u8fdb\u884c\u89e3\u6790\u5e76\u63d2\u5165\u5230\u53e6\u4e00\u4e2amysql\u6570\u636e\u5e93\u7684\u8868\u4e2d\u3002\u4f46\u662f\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u60a8\u5fc5\u987b\u8981\u5728maven\u9879\u76ee\u4e2d\u65b0\u5efa\u4e00\u4e2aresources\u76ee\u5f55\uff0c\u653e\u7f6e\u4e00\u4e2alinkis.properties\u6587\u4ef6\uff0c\u5e76\u6307\u5b9alinkis\u7684gateway\u5730\u5740\u548capi\u7248\u672c\uff0c\u5982"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"wds.linkis.server.version=v1\nwds.linkis.gateway.url=http://ip:9001/\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"object OnceJobTest {\n  def main(args: Array[String]): Unit = {\n    val sql = \"\"\"CREATE TABLE mysql_binlog (\n                | id INT NOT NULL,\n                | name STRING,\n                | age INT\n                |) WITH (\n                | 'connector' = 'mysql-cdc',\n                | 'hostname' = 'ip',\n                | 'port' = 'port',\n                | 'username' = '${username}',\n                | 'password' = '${password}',\n                | 'database-name' = '${database}',\n                | 'table-name' = '${tablename}',\n                | 'debezium.snapshot.locking.mode' = 'none'\n                |);\n                |CREATE TABLE sink_table (\n                | id INT NOT NULL,\n                | name STRING,\n                | age INT,\n                | primary key(id) not enforced\n                |) WITH (\n                |  'connector' = 'jdbc',\n                |  'url' = 'jdbc:mysql://${ip}:port/${database}',\n                |  'table-name' = '${tablename}',\n                |  'driver' = 'com.mysql.jdbc.Driver',\n                |  'username' = '${username}',\n                |  'password' = '${password}'\n                |);\n                |INSERT INTO sink_table SELECT id, name, age FROM mysql_binlog;\n                |\"\"\".stripMargin\n    val onceJob = SimpleOnceJob.builder().setCreateService(\"Flink-Test\").addLabel(LabelKeyUtils.ENGINE_TYPE_LABEL_KEY, \"flink-1.12.2\")\n      .addLabel(LabelKeyUtils.USER_CREATOR_LABEL_KEY, \"hadoop-Streamis\").addLabel(LabelKeyUtils.ENGINE_CONN_MODE_LABEL_KEY, \"once\")\n      .addStartupParam(Configuration.IS_TEST_MODE.key, true)\n      //    .addStartupParam(\"label.\" + LabelKeyConstant.CODE_TYPE_KEY, \"sql\")\n      .setMaxSubmitTime(300000)\n      .addExecuteUser(\"hadoop\").addJobContent(\"runType\", \"sql\").addJobContent(\"code\", sql).addSource(\"jobName\", \"OnceJobTest\")\n      .build()\n    onceJob.submit()\n    println(onceJob.getId)\n    onceJob.waitForCompleted()\n    System.exit(0)\n  }\n}\n")))}u.isMDXComponent=!0}}]);