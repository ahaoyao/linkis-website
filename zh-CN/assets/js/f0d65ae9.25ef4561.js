"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[76531],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>k});var l=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,l,i=function(e,n){if(null==e)return{};var t,l,i={},a=Object.keys(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=l.createContext({}),s=function(e){var n=l.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=s(e.components);return l.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},d=l.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(t),k=i,h=d["".concat(p,".").concat(k)]||d[k]||c[k]||a;return t?l.createElement(h,r(r({ref:n},u),{},{components:t})):l.createElement(h,r({ref:n},u))}));function k(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,r=new Array(a);r[0]=d;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var s=2;s<a;s++)r[s]=t[s];return l.createElement.apply(null,r)}return l.createElement.apply(null,t)}d.displayName="MDXCreateElement"},60512:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var l=t(87462),i=(t(67294),t(3905));const a={title:"Shell",sidebar_position:4},r=void 0,o={unversionedId:"engine-usage/shell",id:"version-1.3.1/engine-usage/shell",title:"Shell",description:"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u5728 Linkis \u4e2d\uff0c Shell \u5f15\u64ce\u63d2\u4ef6\u7684\u5b89\u88c5\u3001\u4f7f\u7528\u548c\u914d\u7f6e\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.3.1/engine-usage/shell.md",sourceDirName:"engine-usage",slug:"/engine-usage/shell",permalink:"/zh-CN/docs/latest/engine-usage/shell",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.3.1/engine-usage/shell.md",tags:[],version:"1.3.1",sidebarPosition:4,frontMatter:{title:"Shell",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Python",permalink:"/zh-CN/docs/latest/engine-usage/python"},next:{title:"JDBC",permalink:"/zh-CN/docs/latest/engine-usage/jdbc"}},p={},s=[{value:"1. \u524d\u7f6e\u5de5\u4f5c",id:"1-\u524d\u7f6e\u5de5\u4f5c",level:2},{value:"1.1 \u73af\u5883\u5b89\u88c5",id:"11-\u73af\u5883\u5b89\u88c5",level:3},{value:"1.2 \u73af\u5883\u9a8c\u8bc1",id:"12-\u73af\u5883\u9a8c\u8bc1",level:3},{value:"2. \u5f15\u64ce\u63d2\u4ef6\u5b89\u88c5 \u9ed8\u8ba4\u5f15\u64ce",id:"2-\u5f15\u64ce\u63d2\u4ef6\u5b89\u88c5-\u9ed8\u8ba4\u5f15\u64ce",level:2},{value:"3. \u5f15\u64ce\u7684\u4f7f\u7528",id:"3-\u5f15\u64ce\u7684\u4f7f\u7528",level:2},{value:"3.1 \u901a\u8fc7 <code>Linkis-cli</code> \u63d0\u4ea4\u4efb\u52a1",id:"31-\u901a\u8fc7-linkis-cli-\u63d0\u4ea4\u4efb\u52a1",level:3},{value:"3.2 \u901a\u8fc7Linkis SDK\u63d0\u4ea4\u4efb\u52a1",id:"32-\u901a\u8fc7linkis-sdk\u63d0\u4ea4\u4efb\u52a1",level:3},{value:"4. \u5f15\u64ce\u914d\u7f6e\u8bf4\u660e",id:"4-\u5f15\u64ce\u914d\u7f6e\u8bf4\u660e",level:2}],u={toc:s};function c(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,l.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"Linkis")," \u4e2d\uff0c ",(0,i.kt)("inlineCode",{parentName:"p"},"Shell")," \u5f15\u64ce\u63d2\u4ef6\u7684\u5b89\u88c5\u3001\u4f7f\u7528\u548c\u914d\u7f6e\u3002"),(0,i.kt)("h2",{id:"1-\u524d\u7f6e\u5de5\u4f5c"},"1. \u524d\u7f6e\u5de5\u4f5c"),(0,i.kt)("h3",{id:"11-\u73af\u5883\u5b89\u88c5"},"1.1 \u73af\u5883\u5b89\u88c5"),(0,i.kt)("p",null,"\u5982\u679c\u60a8\u5e0c\u671b\u5728\u60a8\u7684\u670d\u52a1\u5668\u4e0a\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"Shell")," \u5f15\u64ce\uff0c\u60a8\u9700\u8981\u4fdd\u8bc1\u7528\u6237\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"PATH")," \u4e2d\u662f\u6709 ",(0,i.kt)("inlineCode",{parentName:"p"},"bash")," \u7684\u6267\u884c\u76ee\u5f55\u548c\u6267\u884c\u6743\u9650\u3002"),(0,i.kt)("h3",{id:"12-\u73af\u5883\u9a8c\u8bc1"},"1.2 \u73af\u5883\u9a8c\u8bc1"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"echo $SHELL\n")),(0,i.kt)("p",null,"\u8f93\u51fa\u5982\u4e0b\u4fe1\u606f\u4ee3\u8868shell\u73af\u5883\u53ef\u7528"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/bin/bash\n")),(0,i.kt)("p",null,"\u6216"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/bin/sh\n")),(0,i.kt)("h2",{id:"2-\u5f15\u64ce\u63d2\u4ef6\u5b89\u88c5-\u9ed8\u8ba4\u5f15\u64ce"},"2. \u5f15\u64ce\u63d2\u4ef6\u5b89\u88c5 ",(0,i.kt)("a",{parentName:"h2",href:"/zh-CN/docs/latest/engine-usage/overview"},"\u9ed8\u8ba4\u5f15\u64ce")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Linkis")," \u53d1\u5e03\u7684\u4e8c\u8fdb\u5236\u5b89\u88c5\u5305\u4e2d\u9ed8\u8ba4\u5305\u542b\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"Shell")," \u5f15\u64ce\u63d2\u4ef6\uff0c\u7528\u6237\u65e0\u9700\u989d\u5916\u5b89\u88c5\u3002"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/latest/deployment/install-engineconn"},"EngineConnPlugin\u5f15\u64ce\u63d2\u4ef6\u5b89\u88c5")),(0,i.kt)("h2",{id:"3-\u5f15\u64ce\u7684\u4f7f\u7528"},"3. \u5f15\u64ce\u7684\u4f7f\u7528"),(0,i.kt)("h3",{id:"31-\u901a\u8fc7-linkis-cli-\u63d0\u4ea4\u4efb\u52a1"},"3.1 \u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"h3"},"Linkis-cli")," \u63d0\u4ea4\u4efb\u52a1"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'sh ./bin/linkis-cli -engineType shell-1 \\\n-codeType shell -code "echo \\"hello\\" " \\\n-submitUser hadoop -proxyUser hadoop\n')),(0,i.kt)("p",null,"\u66f4\u591a ",(0,i.kt)("inlineCode",{parentName:"p"},"Linkis-Cli")," \u547d\u4ee4\u53c2\u6570\u53c2\u8003\uff1a ",(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/latest/user-guide/linkiscli-manual"},"Linkis-Cli \u4f7f\u7528")),(0,i.kt)("h3",{id:"32-\u901a\u8fc7linkis-sdk\u63d0\u4ea4\u4efb\u52a1"},"3.2 \u901a\u8fc7Linkis SDK\u63d0\u4ea4\u4efb\u52a1"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Linkis")," \u63d0\u4f9b\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"Java")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"Scala")," \u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"SDK")," \u5411 ",(0,i.kt)("inlineCode",{parentName:"p"},"Linkis")," \u670d\u52a1\u7aef\u63d0\u4ea4\u4efb\u52a1\u3002\u5177\u4f53\u53ef\u4ee5\u53c2\u8003 ",(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/latest/user-guide/sdk-manual"},"JAVA SDK Manual"),"\u3002 \u5bf9\u4e8e ",(0,i.kt)("inlineCode",{parentName:"p"},"Shell")," \u4efb\u52a1\u60a8\u53ea\u9700\u8981\u4fee\u6539 ",(0,i.kt)("inlineCode",{parentName:"p"},"Demo")," \u4e2d\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"EngineConnType")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"CodeType")," \u53c2\u6570\u5373\u53ef:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'Map<String, Object> labels = new HashMap<String, Object>();\nlabels.put(LabelKeyConstant.ENGINE_TYPE_KEY, "shell-1"); // required engineType Label\nlabels.put(LabelKeyConstant.USER_CREATOR_TYPE_KEY, "hadoop-IDE");// required execute user and creator\nlabels.put(LabelKeyConstant.CODE_TYPE_KEY, "shell"); // required codeType\n')),(0,i.kt)("h2",{id:"4-\u5f15\u64ce\u914d\u7f6e\u8bf4\u660e"},"4. \u5f15\u64ce\u914d\u7f6e\u8bf4\u660e"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Shell")," \u5f15\u64ce\u4e00\u822c\u53ef\u4ee5\u8bbe\u7f6e\u5f15\u64ce ",(0,i.kt)("inlineCode",{parentName:"p"},"JVM")," \u7684\u6700\u5927\u5185\u5b58\u3002"))}c.isMDXComponent=!0}}]);