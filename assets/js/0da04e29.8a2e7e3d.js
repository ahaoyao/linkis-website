"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[88982],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=d(n),u=r,g=p["".concat(s,".").concat(u)]||p[u]||c[u]||i;return n?a.createElement(g,l(l({ref:t},m),{},{components:n})):a.createElement(g,l({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9507:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const i={title:"Engine Material Management",authors:["aiceflower"],tags:["bml","linki1.3.1"]},l="Overview",o={permalink:"/blog/2022/12/02/material-manage",editUrl:"https://github.com/apache/linkis-website/edit/dev/blog/2022-12-02-material-manage/index.md",source:"@site/blog/2022-12-02-material-manage/index.md",title:"Engine Material Management",description:"background",date:"2022-12-02T00:00:00.000Z",formattedDate:"December 2, 2022",tags:[{label:"bml",permalink:"/blog/tags/bml"},{label:"linki1.3.1",permalink:"/blog/tags/linki-1-3-1"}],readingTime:3.1,hasTruncateMarker:!1,authors:[{name:"aiceflower",title:"Development Engineer of WeBank",url:"https://github.com/aiceflower/",imageURL:"https://avatars.githubusercontent.com/u/22620332?s=400&v=4",key:"aiceflower"}],frontMatter:{title:"Engine Material Management",authors:["aiceflower"],tags:["bml","linki1.3.1"]},nextItem:{title:"Apache Linkis 1.3.0 PES(Public Enhancement Services) Some Service Merge",permalink:"/blog/2022/10/09/linkis-service-merge"}},s={authorsImageUrls:[void 0]},d=[{value:"background",id:"background",level:2},{value:"Architecture Diagram",id:"architecture-diagram",level:2},{value:"Architecture Description",id:"architecture-description",level:2},{value:"Core process",id:"core-process",level:3},{value:"Database Design",id:"database-design",level:2}],m={toc:d};function c(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"background"},"background"),(0,r.kt)("p",null,"Engine material management is the linkis engine material management system, which is mainly used to manage Linkis engine material files and store various engine files of users, including engine type, engine version and other information. The overall process is that the compressed file is uploaded to the material library (BML) through the front-end browser, and the material compressed file is decompressed and verified. If the engine does not exist locally when it needs to be executed, it needs to be searched in the material library, downloaded, installed and registered for execution."),(0,r.kt)("p",null,"Has the following function points:"),(0,r.kt)("p",null,"1) Support uploading packaged engine files. The size of uploaded files is affected by nginx configuration, and the file type is zip file type. It is not supported to package zip compressed files by yourself in the windows environment."),(0,r.kt)("p",null,"2) Support for updating existing engine materials. After updating, add a storage version of bml engine materials in BML, and the current version can be rolled back and deleted."),(0,r.kt)("p",null,"3) An engine involves two engine materials, namely lib and conf, which can be managed separately."),(0,r.kt)("h2",{id:"architecture-diagram"},"Architecture Diagram"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(76191).Z,width:"934",height:"924"})),(0,r.kt)("h2",{id:"architecture-description"},"Architecture Description"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Engine material management requires administrator privileges in the Linkis web management console, and the administrator field in the test environment needs to be set during development and debugging.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Engine material management involves adding, updating, and deleting engine material files. Material files are divided into lib and conf to store them separately. The concept of two versions is involved in the file, one is the version of the engine itself, and the other is the material version. In the update operation, if the material is modified, a new material version will be added and stored in BML, which supports the material version delete and rollback.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Use the BML Service to store the engine material files, call the BML service to store the files through RPC, and obtain the stored resource id and version and save them."))),(0,r.kt)("h3",{id:"core-process"},"Core process"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Upload the engine plug-in file of zip type, first store it in the Home directory of the engine plug-in and decompress the file, and then start the refresh program."),(0,r.kt)("li",{parentName:"ol"},"Compress the conf and lib directories in the decompressed engine file, upload it to the BML (material management system), obtain the corresponding BML resource id and resource version, and read the corresponding engine name and version information."),(0,r.kt)("li",{parentName:"ol"},"In the engine material resource table, add a new engine material record, and each upload will generate lib and conf data respectively. In addition to recording the name and type information of the engine, the most important thing is to record the information of the engine in the material management system, including the resource id and version information of the engine, which are linked to the resource table in BML.")),(0,r.kt)("h2",{id:"database-design"},"Database Design"),(0,r.kt)("p",null,"Engine Material Resource Information Table (linkis_cg_engine_conn_plugin_bml_resources)"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field name"),(0,r.kt)("th",{parentName:"tr",align:null},"Function"),(0,r.kt)("th",{parentName:"tr",align:null},"Remarks"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},"engine material package identification id"),(0,r.kt)("td",{parentName:"tr",align:null},"Primary key")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"engine_conn_type"),(0,r.kt)("td",{parentName:"tr",align:null},"The location where resources are stored"),(0,r.kt)("td",{parentName:"tr",align:null},"such as Spark")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"version"),(0,r.kt)("td",{parentName:"tr",align:null},"engine version"),(0,r.kt)("td",{parentName:"tr",align:null},"such as Spark's v2.4.3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"file_name"),(0,r.kt)("td",{parentName:"tr",align:null},"engine file name"),(0,r.kt)("td",{parentName:"tr",align:null},"such as lib.zip")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"file_size"),(0,r.kt)("td",{parentName:"tr",align:null},"engine file size"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"last_modified"),(0,r.kt)("td",{parentName:"tr",align:null},"The last modification time of the file"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bml_resource_id"),(0,r.kt)("td",{parentName:"tr",align:null},"The id of the record resource in BML (material management system)"),(0,r.kt)("td",{parentName:"tr",align:null},"The id used to identify the engine file in BML")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bml_resource_version"),(0,r.kt)("td",{parentName:"tr",align:null},"record resource version in BML"),(0,r.kt)("td",{parentName:"tr",align:null},"such as v000001")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"create_time"),(0,r.kt)("td",{parentName:"tr",align:null},"resource creation time"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"last_update_time"),(0,r.kt)("td",{parentName:"tr",align:null},"The last update time of the resource"),(0,r.kt)("td",{parentName:"tr",align:null})))))}c.isMDXComponent=!0},76191:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/bml-94c1a3494a1d7b2321ad2c911c530901.jpg"}}]);