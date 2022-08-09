"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[664],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),u=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),f=r,g=p["".concat(l,".").concat(f)]||p[f]||d[f]||a;return n?i.createElement(g,o(o({ref:t},c),{},{components:n})):i.createElement(g,o({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<a;u++)o[u]=n[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},23729:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return p}});var i=n(87462),r=n(63366),a=(n(67294),n(3905)),o=["components"],s={title:"Upgrade From 0.X To 1.0 Guide",sidebar_position:1},l=void 0,u={unversionedId:"upgrade/upgrade-from-0.X-to-1.0-guide",id:"upgrade/upgrade-from-0.X-to-1.0-guide",isDocsHomePage:!1,title:"Upgrade From 0.X To 1.0 Guide",description:"This article briefly introduces the precautions for upgrading Linkis from 0.X to 1.0. Linkis 1.0 has adjusted several Linkis services with major changes. This article will introduce the precautions for upgrading from 0.X to 1.X.",source:"@site/docs/upgrade/upgrade-from-0.X-to-1.0-guide.md",sourceDirName:"upgrade",slug:"/upgrade/upgrade-from-0.X-to-1.0-guide",permalink:"/docs/1.1.3/upgrade/upgrade-from-0.X-to-1.0-guide",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/docs/upgrade/upgrade-from-0.X-to-1.0-guide.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Upgrade From 0.X To 1.0 Guide",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Swwager Annotation Instructions",permalink:"/docs/1.1.3/development/swwager-instructions"},next:{title:"Version upgrades above 1.0.3",permalink:"/docs/1.1.3/upgrade/upgrade-guide"}},c=[{value:"1.Precautions",id:"1precautions",children:[]},{value:"2. Service upgrade installation",id:"2-service-upgrade-installation",children:[]},{value:"3. Database upgrade",id:"3-database-upgrade",children:[{value:"3.1 Table structure modification part:",id:"31-table-structure-modification-part",children:[]},{value:"3.2 Need newly executed sql\uff1a",id:"32-need-newly-executed-sql",children:[]},{value:"3.3 Publicservice-Configuration table modification",id:"33-publicservice-configuration-table-modification",children:[]}]},{value:"4. Installation and startup Linkis1.0",id:"4-installation-and-startup-linkis10",children:[]}],d={toc:c};function p(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This article briefly introduces the precautions for upgrading Linkis from 0.X to 1.0. Linkis 1.0 has adjusted several Linkis services with major changes. This article will introduce the precautions for upgrading from 0.X to 1.X.")),(0,a.kt)("h2",{id:"1precautions"},"1.Precautions"),(0,a.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",(0,a.kt)("strong",{parentName:"p"},"If you are using Linkis for the first time, you can ignore this chapter; if you are already a user of Linkis, it is recommended to read it before installing or upgrading\uff1a",(0,a.kt)("a",{parentName:"strong",href:"/docs/1.1.3/architecture/difference-between-1.0-and-0.x"},"Brief description of the difference between Linkis1.0 and Linkis0.X")),"."),(0,a.kt)("h2",{id:"2-service-upgrade-installation"},"2. Service upgrade installation"),(0,a.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","  Because linkis 1.0 basically upgraded all services, including service names, all services need to be reinstalled when upgrading from 0.X to 1.X."),(0,a.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","  If you need to keep 0.X data during the upgrade, you must select 1 to skip the table building statement (see the code below)."),(0,a.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","  For the installation of Linkis1.0, please refer to ",(0,a.kt)("a",{parentName:"p",href:"/docs/1.1.3/deployment/quick-deploy"},"Quick Deployment Linkis1.0")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Do you want to clear Linkis table information in the database?\n1: Do not execute table-building statements\n2: Dangerous! Clear all data and rebuild the tables\nother: exit\n\nPlease input the choice: ## choice 1\n")),(0,a.kt)("h2",{id:"3-database-upgrade"},"3. Database upgrade"),(0,a.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","  After the service is installed, the database structure needs to be modified, including table structure changes and new tables and data:"),(0,a.kt)("h3",{id:"31-table-structure-modification-part"},"3.1 Table structure modification part:"),(0,a.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","  linkis_task: The submit_user and label_json fields are added to the table. The update statement is\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-mysql-sql"},"ALTER TABLE linkis_task ADD submit_user varchar(50) DEFAULT NULL COMMENT 'submitUser name';\nALTER TABLE linkis_task ADD `label_json` varchar(200) DEFAULT NULL COMMENT 'label json';\n")),(0,a.kt)("h3",{id:"32-need-newly-executed-sql"},"3.2 Need newly executed sql\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-mysql-sql"},"cd db/module\n## Add the tables that the enginePlugin service depends on\uff1a\nsource linkis_ecp.sql\n## Add a table that the public service-instanceLabel service depends on\nsource linkis_instance_label.sql\n## Added tables that the linkis-manager service depends on\nsource linkis-manager.sql\n")),(0,a.kt)("h3",{id:"33-publicservice-configuration-table-modification"},"3.3 Publicservice-Configuration table modification"),(0,a.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","  In order to support the full labeling capability of Linkis 1.X, all the data tables related to the configuration module have been upgraded to labeling, which is completely different from the 0.X Configuration table. It is necessary to re-execute the table creation statement and the initialization statement."),(0,a.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","  This means that ",(0,a.kt)("strong",{parentName:"p"},"Linkis0.X users' existing engine configuration parameters can no longer be migrated to Linkis1.0")," (it is recommended that users reconfigure the engine parameters once)."),(0,a.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","  The execution of the table building statement is as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-mysql-sql"},"source linkis_configuration.sql\n")),(0,a.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","  Because Linkis 1.0 supports multiple versions of the engine, it is necessary to modify the version of the engine when executing the initialization statement, as shown below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-mysql-sql"},'vim linkis_configuration_dml.sql\n## Modify the default version of the corresponding engine\nSET @SPARK_LABEL="spark-2.4.3";\nSET @HIVE_LABEL="hive-1.2.1";\n## Execute the initialization statement\nsource linkis_configuration_dml.sql\n')),(0,a.kt)("h2",{id:"4-installation-and-startup-linkis10"},"4. Installation and startup Linkis1.0"),(0,a.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","  Start Linkis 1.0  to verify whether the service has been started normally and provide external services. For details, please refer to: ",(0,a.kt)("a",{parentName:"p",href:"/docs/1.1.3/deployment/quick-deploy"},"Quick Deployment Linkis1.0")))}p.isMDXComponent=!0}}]);