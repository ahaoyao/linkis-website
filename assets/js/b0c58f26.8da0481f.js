"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[54351],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var i=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=i.createContext({}),c=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(a),h=n,d=m["".concat(s,".").concat(h)]||m[h]||p[h]||r;return a?i.createElement(d,l(l({ref:t},u),{},{components:a})):i.createElement(d,l({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var c=2;c<r;c++)l[c]=a[c];return i.createElement.apply(null,l)}return i.createElement.apply(null,a)}m.displayName="MDXCreateElement"},22660:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var i=a(87462),n=(a(67294),a(3905));const r={title:"Release Notes 1.1.0",sidebar_position:8},l=void 0,o={unversionedId:"release-notes-1.1.0",id:"release-notes-1.1.0",title:"Release Notes 1.1.0",description:"Apache Linkis(incubating) 1.1.0 includes all of Project Linkis-1.1.0.",source:"@site/download/release-notes-1.1.0.md",sourceDirName:".",slug:"/release-notes-1.1.0",permalink:"/download/release-notes-1.1.0",draft:!1,editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/download/release-notes-1.1.0.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"Release Notes 1.1.0",sidebar_position:8},sidebar:"defaultSidebar",previous:{title:"Release Notes 1.1.1",permalink:"/download/release-notes-1.1.1"},next:{title:"Release Notes 1.0.3",permalink:"/download/release-notes-1.0.3"}},s={},c=[{value:"New Feature",id:"new-feature",level:2},{value:"Enhancement",id:"enhancement",level:2},{value:"Bugs Fix",id:"bugs-fix",level:2},{value:"Credits",id:"credits",level:2}],u={toc:c};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Apache Linkis(incubating) 1.1.0 includes all of ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-linkis/projects/3"},"Project Linkis-1.1.0"),"."),(0,n.kt)("p",null,"This release mainly adds datasource and metadata source management services, supports metadata information query for hive/mysql/kafka/elasticsearch, and fixes bugs in version 1.0.3 reported by the community."),(0,n.kt)("p",null,"The following key features have been added:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Provides Restful interface to add, delete, check, and modify data sources, as well as data source connection tests."),(0,n.kt)("li",{parentName:"ul"},"Provides Restful interface for database, table, partition, column attribute query for metadata."),(0,n.kt)("li",{parentName:"ul"},"Provides Java clients for data source and metadata service management.")),(0,n.kt)("p",null,"Abbreviations:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"CGS: Computation Governance Services"),(0,n.kt)("li",{parentName:"ul"},"PES: Public Enhancement Services"),(0,n.kt)("li",{parentName:"ul"},"MGS: Microservice Governance Services"),(0,n.kt)("li",{parentName:"ul"},"EC: Engineconn"),(0,n.kt)("li",{parentName:"ul"},"ECM: EngineConnManager"),(0,n.kt)("li",{parentName:"ul"},"DMS: Data Source Manager Service"),(0,n.kt)("li",{parentName:"ul"},"MDS: MetaData Manager Service")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"new-feature"},"New Feature"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"[","DMS-Common]",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1335"},"[Linkis-1335]")," Add a new module linkis-datasource-manager-common, add datasource data structure/exception class/util class."),(0,n.kt)("li",{parentName:"ul"},"[","DMS-Common]",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1340"},"[Linkis-1340]")," Add a new module linkis-metadata-manager-common, add metadata data structure/exception class/util class."),(0,n.kt)("li",{parentName:"ul"},"[","MDS-Server]",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1352"},"[Linkis-1352]")," Add a new module linkis-datasource-manager-server to provide data source management services, provides functions such as adding, deleting, checking, and modifying data sources through the restful interface."),(0,n.kt)("li",{parentName:"ul"},"[","MDS-Server]",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1356"},"[Linkis-1356]")," Add a new module linkis-metadata-manager-server to provide metadata management services, which provides database, table, and column queries of metadata through the restful interface."),(0,n.kt)("li",{parentName:"ul"},"[","MDS-Services]",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1366"},"[Linkis-1366]")," Add a new module linkis-metadata-manager-service-es to provide elasticsearch metadata management service."),(0,n.kt)("li",{parentName:"ul"},"[","MDS-Services]",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1368"},"[Linkis-1368]")," Add a new module linkis-metadata-manager-service-hive, providing for hive Metadata management service."),(0,n.kt)("li",{parentName:"ul"},"[","MDS-Services]",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1371"},"[Linkis-1371]")," Add a new module linkis-metadata-manager-service-kafka, providing for kafka Metadata management service."),(0,n.kt)("li",{parentName:"ul"},"[","MDS-Services]",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1373"},"[Linkis-1373]")," Add a new module linkis-metadata-manager-service-mysql, provide for mysql Metadata management service."),(0,n.kt)("li",{parentName:"ul"},"[","DMS&MDS-Client]",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1418"},"[Linkis-1418]")," [","[Linkis-1434]","](",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache"},"https://github.com/apache")," /incubator-linkis/pull/1434)",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1438"},"[Linkis-1438]"),"[","[Linkis-1441]","](",(0,n.kt)("a",{parentName:"li",href:"https://github.com"},"https://github.com")," /apache/incubator-linkis/pull/1441) Add a new data source management Java client module linkis-datasource-client to facilitate data source management through sdk."),(0,n.kt)("li",{parentName:"ul"},"[","DMS&MDS-Web]",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1456"},"[Linkis-1456]")," [","[Linkis-1510]"," Added data source front-end management page, through which you can Simple creation and testing of the data source.")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"enhancement"},"Enhancement"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"[","MGS-LinkisServiceGateway]",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1377"},"[Linkis-1377]")," Introduce the Skywalking component to provide basic capabilities of distributed trace and troubleshooting"),(0,n.kt)("li",{parentName:"ul"},"[","CGS-EngineConnPlugin]",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1408"},"[Linkis-1408]")," Adjust the default maximum idle time of engine resources to 0.5h to optimize multi-user scenarios Next, the problem of waiting time for resource competition"),(0,n.kt)("li",{parentName:"ul"},"[","CGS-EngineConnPlugin]",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1535"},"[Linkis-1535]")," set JAVA_ENGINE_REQUEST_INSTANCE to constant 1"),(0,n.kt)("li",{parentName:"ul"},"[","DB]",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1554"},"[Linkis-1554]")," Add DataSource DDL and DML SQL"),(0,n.kt)("li",{parentName:"ul"},"[","MDS]",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1583"},"[Linkis-1583]")," Add functionality to get attributes of partitions in Hive datasources and fix connection issues"),(0,n.kt)("li",{parentName:"ul"},"[","MGS-LinkisServiceGateway]",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1636"},"[Linkis-1636]")," use regular expression to match gateway URL, if it matches, it will pass normally"),(0,n.kt)("li",{parentName:"ul"},"[","Commons]",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1397"},"[Linkis-1397]")," Add maven wrapper to support compiling and packaging using mvnw script"),(0,n.kt)("li",{parentName:"ul"},"[","EC]",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1425"},"[Linkis-1425]")," Unify ec's log configuration file as log4j2.xml"),(0,n.kt)("li",{parentName:"ul"},"[","Install-Script]",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1563"},"[Linkis-1563]")," Optimize linkis-cli client script, remove redundant linkis-cli- start script file"),(0,n.kt)("li",{parentName:"ul"},"[","Install-Script]",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/1559"},"[Linkis-1559]")," Optimize the installation and deployment script, add a database connection test check when installing and deploying; Before initialization, print the information of the database so that the personnel can confirm again"),(0,n.kt)("li",{parentName:"ul"},"[","Install-Script]","[Linkis-1559]","](",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/1559"},"https://github.com/apache/incubator-linkis/issues/1559"),") Add necessary deployment log information and color identification of key information, such as execution steps/create directory log, etc."),(0,n.kt)("li",{parentName:"ul"},"[","Install-Script]",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/1559"},"[Linkis-1559]")," add basic environment check for spark/hadoop/hive"),(0,n.kt)("li",{parentName:"ul"},"[","Install-Script]",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/1559"},"[Linkis-1559]")," Migrate hive metabase HIVE_META information configuration from linkis-env.sh to db. sh"),(0,n.kt)("li",{parentName:"ul"},"[","Commons]",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/1557"},"[Linkis-1557]")," Spring-boot/Spring-cloud version control uses the pom file method of the official dependency manager, Avoid introducing too many version configurations"),(0,n.kt)("li",{parentName:"ul"},"[","Commons]",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1621"},"[Linkis-1621]")," Spring upgrade, Spring-boot upgrade to 2.3.12.RELEASE, Spring-cloud upgrade to Hoxton.SR12"),(0,n.kt)("li",{parentName:"ul"},"[","Commons]",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/1558"},"[Linkis-1558]")," Unit test JUnit 4 migration upgrade to JUnit 5"),(0,n.kt)("li",{parentName:"ul"},"[","Commons&MGS-Eureka]",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/1313"},"[Linkis-1313]")," Remove unnecessary third-party dependencies and reduce packaged materials to a certain extent package size"),(0,n.kt)("li",{parentName:"ul"},"[","Commons&MGS-LinkisServiceGateway]",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1660"},"[Linkis-1660]")," Use spring-boot-starter-jetty to replace the direct introduction of jetty dependencies to avoid jetty version conflict")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"bugs-fix"},"Bugs Fix"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"[","Deployment]",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1390"},"[Linkis-1390]")," Fix the directory ",(0,n.kt)("inlineCode",{parentName:"li"},"wds.linkis.resultSet for storing Job result set files created during installation and deployment. store.path"),", the problem of insufficient permissions after switching users during use"),(0,n.kt)("li",{parentName:"ul"},"[","Commons]",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1469"},"[Linkis-1469]")," Fix the problem that SQL cannot be cut correctly when the ';' character is included in the sql script"),(0,n.kt)("li",{parentName:"ul"},"[","CGS-EngineConnPlugin-JDBC]",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1529"},"[Linkis-1529]")," Fix the abnormal problem of NullPointerException in JDBC engine authentication type parameter"),(0,n.kt)("li",{parentName:"ul"},"[","CGS-Entrance]",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1540"},"[Linkis-1540]"),' Fix the "kill" method parameter long type in linkis-entrance, which causes the null value to be unrecognized question'),(0,n.kt)("li",{parentName:"ul"},"[","Commons]",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1600"},"[Linkis-1600]")," Fix the lower version of commons-compress, resulting in an error when the result set is downloaded as excel"),(0,n.kt)("li",{parentName:"ul"},"[","CGS-Client]",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1603"},"[Linkis-1603]")," Fix the problem that the client does not support the -runtimeMap parameter"),(0,n.kt)("li",{parentName:"ul"},"[","CGS-EngineConnPlugin-JDBC]",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1610"},"[Linkis-1610]"),' Fix jdbc engine cannot support "show databases;" statement problem for postgresql'),(0,n.kt)("li",{parentName:"ul"},"[","Commons]",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1618"},"[Linkis-1618]")," Fix http response return result in xml format instead of json format"),(0,n.kt)("li",{parentName:"ul"},"[","CGS-EngineConnPlugin-JDBC]",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1646"},"[Linkis-1646]")," When JDBC engine queries complex type fields, the value is displayed as object address."),(0,n.kt)("li",{parentName:"ul"},"[","CGS-EngineConnPlugin-PYTHON]",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1731"},"[Linkis-1731]")," Fix the problem of row inversion of the result set field of the python engine's showDF function"),(0,n.kt)("li",{parentName:"ul"},"[","PES-BML]",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/1556"},"[Linkis-1556]")," Fix the HttpMessageNotWritableException that may occur in the file download interface")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"credits"},"Credits"),(0,n.kt)("p",null,"The release of Apache Linkis(incubating) 1.1.0 is inseparable from the contributors of the Linkis community. Thanks to all the community contributors, including but not limited to the following contributors for this version: Alexkun, CCweixiao, Celebrate-future, Davidhua1996, FireFoxAhri, WenxiangFan , Zosimer, aleneZeng, casionone, dddyszy, det101, ganlangjie, huapan123456, huiyuanjjjjuice, husofskyzy, iture123, jianwei2, legendtkl, peacewong, pjfanning, silent-carbon, xiaojie19852006"))}p.isMDXComponent=!0}}]);