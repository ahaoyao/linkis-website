"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[9025],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return n?o.createElement(h,i(i({ref:t},p),{},{components:n})):o.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8143:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var o=n(87462),r=n(63366),a=(n(67294),n(3905)),i=["components"],l={title:"Linkis Console Compile",sidebar_position:4},c=void 0,s={unversionedId:"development/web_build",id:"development/web_build",isDocsHomePage:!1,title:"Linkis Console Compile",description:"Start the process",source:"@site/docs/development/web_build.md",sourceDirName:"development",slug:"/development/web_build",permalink:"/docs/1.0.3/development/web_build",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/docs/development/web_build.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Linkis Console Compile",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"How To Quickly Implement A New Engine",permalink:"/docs/1.0.3/development/new_engine_conn"},next:{title:"Overview",permalink:"/docs/1.0.3/upgrade/overview"}},p=[{value:"Start the process",id:"start-the-process",children:[{value:"1. Install Node.js",id:"1-install-nodejs",children:[]},{value:"Second, the installation project",id:"second-the-installation-project",children:[]},{value:"Three, configuration",id:"three-configuration",children:[]},{value:"Package the project",id:"package-the-project",children:[]},{value:"Run the project",id:"run-the-project",children:[]},{value:"common problem",id:"common-problem",children:[]}]}],d={toc:p};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"start-the-process"},"Start the process"),(0,a.kt)("h3",{id:"1-install-nodejs"},"1. Install Node.js"),(0,a.kt)("p",null,"Download Node.js to your computer and install it. Download link: ",(0,a.kt)("a",{parentName:"p",href:"http://nodejs.cn/download/"},"http://nodejs.cn/download/")," (It is recommended to use the latest stable version)\n",(0,a.kt)("strong",{parentName:"p"},"This step only needs to be performed the first time you use it. ")),(0,a.kt)("h3",{id:"second-the-installation-project"},"Second, the installation project"),(0,a.kt)("p",null,"Execute the following commands in the terminal command line:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git clone git@github.com:apache/incubator-linkis.git\ncd incubator-linkis/web\nnpm install\n")),(0,a.kt)("p",null,"Introduction to the instruction:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Pull the project package from the remote git repository  to the local computer"),(0,a.kt)("li",{parentName:"ol"},"Enter the web root directory of the project: cd Linkis/web"),(0,a.kt)("li",{parentName:"ol"},"Dependencies required to install the project: npm install")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"This step only needs to be performed the first time you use it. ")),(0,a.kt)("h3",{id:"three-configuration"},"Three, configuration"),(0,a.kt)("p",null,"You need to make some configuration in the code, such as the back-end interface address, etc., such as the .env.development file in the root directory:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"// back-end interface address\nVUE_APP_MN_CONFIG_PREFIX=http://yourIp:yourPort/yourPath\n")),(0,a.kt)("p",null,"For specific explanation of the configuration, please refer to the official vue-cli document: ",(0,a.kt)("a",{parentName:"p",href:"https://cli.vuejs.org/zh/guide/mode-and-env.html#%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F%E5%92%8C%E6%A8%A1%E5%BC%8F"},"Environment Variables and Modes")),(0,a.kt)("h3",{id:"package-the-project"},"Package the project"),(0,a.kt)("p",null,"You can package the project by executing the following commands on the terminal command line to generate compressed code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm run build\n")),(0,a.kt)("p",null,'After the command is successfully executed, a "dist" folder and a "*-${getVersion()}-dist.zip" compressed file will appear in the project web directory. The directory dist/dist is the packaged code. You can Put the folder directly into your static server, or refer to the installation document and use the script to deploy and install.'),(0,a.kt)("h3",{id:"run-the-project"},"Run the project"),(0,a.kt)("p",null,"If you want to run the project on a local browser and change the code to view the effect, you need to execute the following commands in the terminal command line:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm run serve\n")),(0,a.kt)("p",null,"In the browser (Chrome browser is recommended) to access the application through the link: ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:8080/"},"http://localhost:8080/"),".\nWhen you run the project in this way, the effect of your code changes will be dynamically reflected in the browser."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note: Because the project is developed separately from the front and back ends, when running on a local browser, the browser needs to be set to cross domains to access the back-end interface:")),(0,a.kt)("p",null,"For example, the chrome browser:\nConfiguration method under windows system:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Close all chrome browsers."),(0,a.kt)("li",{parentName:"ol"},'Create a new chrome shortcut, right-click "Properties", select "Target" in the "Shortcut" tab, and add --args --disable-web-security --user-data-dir=C:\\MyChromeDevUserData'),(0,a.kt)("li",{parentName:"ol"},'Open chrome browser via shortcut\nConfiguration method under mac system:\nExecute the following command on the terminal command line (you need to replace yourname in the path, if it does not take effect, please check the location of the MyChromeDevUserData folder on your machine and copy the path to the "--user-data-dir=" in the following command)')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"open -n /Applications/Google\\ Chrome.app/ --args --disable-web-security --user-data-dir=/Users/yourname/MyChromeDevUserData/\n")),(0,a.kt)("h3",{id:"common-problem"},"common problem"),(0,a.kt)("h4",{id:"npm-install-cannot-succeed"},"npm install cannot succeed"),(0,a.kt)("p",null,"If you encounter this situation, you can use the domestic Taobao npm mirror:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm install -g cnpm --registry=https://registry.npm.taobao.org\n")),(0,a.kt)("p",null,"Then, replace the npm install command by executing the following command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cnpm install\n")),(0,a.kt)("p",null,"Note that when the project is started and packaged, you can still use the npm run build and npm run serve commands"))}u.isMDXComponent=!0}}]);