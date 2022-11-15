"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[72001],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,g=d["".concat(p,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(g,s(s({ref:t},u),{},{components:n})):r.createElement(g,s({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var l=2;l<i;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9410:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={title:"Spark Engine",sidebar_position:2},s=void 0,o={unversionedId:"engine-usage/spark",id:"version-0.11.0/engine-usage/spark",isDocsHomePage:!1,title:"Spark Engine",description:"1 Use of Spark Engine",source:"@site/versioned_docs/version-0.11.0/engine-usage/spark.md",sourceDirName:"engine-usage",slug:"/engine-usage/spark",permalink:"/docs/0.11.0/engine-usage/spark",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/versioned_docs/version-0.11.0/engine-usage/spark.md",tags:[],version:"0.11.0",sidebarPosition:2,frontMatter:{title:"Spark Engine",sidebar_position:2},sidebar:"version-1.0.2/tutorialSidebar",previous:{title:"Python Engine",permalink:"/docs/0.11.0/engine-usage/python"},next:{title:"Login Api",permalink:"/docs/0.11.0/api/login-api"}},p=[{value:"1 Use of Spark Engine",id:"1-use-of-spark-engine",children:[{value:"1.1 Environment variable configuration",id:"11-environment-variable-configuration",children:[]},{value:"1.2 Start dependent services",id:"12-start-dependent-services",children:[]},{value:"1.3 Custom parameter configuration",id:"13-custom-parameter-configuration",children:[]},{value:"1.4 Front-end deployment",id:"14-front-end-deployment",children:[]},{value:"1.5 spark startup parameter configuration",id:"15-spark-startup-parameter-configuration",children:[]},{value:"1.6 Running examples",id:"16-running-examples",children:[]}]},{value:"2 How the Spark engine is implemented",id:"2-how-the-spark-engine-is-implemented",children:[]},{value:"3 Spark version adaptation",id:"3-spark-version-adaptation",children:[]},{value:"4 Future goals",id:"4-future-goals",children:[]}],l={toc:p};function u(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1-use-of-spark-engine"},"1 Use of Spark Engine"),(0,a.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","Linkis's Spark execution engine provides users with the ability to submit spark jobs to the Yarn cluster and feedback logs, progress, status, and result sets."),(0,a.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","Spark execution engine supports users to submit three types of jobs: sparksql, pyspark, and scala. By default, the job is submitted by yarn-client, and the engine is used to maintain users One or more spark sessions."),(0,a.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","After the user downloads the Linkis release package and unzips and installs it, a number of specific services need to be started correctly before it can be used to execute spark operations."),(0,a.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","Here are the specific steps."),(0,a.kt)("h3",{id:"11-environment-variable-configuration"},"1.1 Environment variable configuration"),(0,a.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","Environmental variables that the Spark engine depends on: HADOOP_HOME, HADOOP_CONF_DIR, HIVE_CONF_DIR, SPARK_HOME, and SPARK_CONF_DIR."),(0,a.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","Before starting the SparkEngineManager microservice, please make sure that the above environment variables have been set."),(0,a.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","If you have not set it, please first download linkis.properties in the /home/${USER}/.bash_rc or linkis-ujes-spark-enginemanager/conf directory Set in the configuration file. As shown below"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"  HADOOP_HOME=${real hadoop home}\n  HADOOP_CONF_DIR=${Real hadoop configuration directory}\n  HIVE_CONF_DIR=${Real hive configuration directory}\n  SPARK_CONF_DIR=${Real hive configuration directory}\n  SPARK_HOME=${Real spark installation directory}\n")),(0,a.kt)("h3",{id:"12-start-dependent-services"},"1.2 Start dependent services"),(0,a.kt)("p",null,"The startup of the Spark engine requires the following Linkis microservices:"),(0,a.kt)("p",null,"-1), Eureka: Used for service registration and discovery.\n-2), Linkis-gateway: used for user request forwarding.\n-3) Linkis-publicService: Provides basic functions such as persistence and udf.\n-4) Linkis-ResourceManager: Provides Linkis resource management functions."),(0,a.kt)("h3",{id:"13-custom-parameter-configuration"},"1.3 Custom parameter configuration"),(0,a.kt)("p",null,"Before starting spark related microservices, users can set related configuration parameters about the spark engine."),(0,a.kt)("p",null,"Considering that users want to be able to set parameters more freely, Linkis provides many configuration parameters."),(0,a.kt)("p",null,"The following table has some commonly used parameters. The Spark engine supports configuring more parameters for better performance. If you have tuning needs, welcome to read the tuning manual."),(0,a.kt)("p",null,"Users can configure these parameters in linkis.properties."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter name"),(0,a.kt)("th",{parentName:"tr",align:null},"Reference value"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"wds.linkis.enginemanager.memory.max"),(0,a.kt)("td",{parentName:"tr",align:null},"40G"),(0,a.kt)("td",{parentName:"tr",align:null},"Used to specify the total memory of the client of all engines started by sparkEM")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"wds.linkis.enginemanager.cores.max"),(0,a.kt)("td",{parentName:"tr",align:null},"20"),(0,a.kt)("td",{parentName:"tr",align:null},"Used to specify the total number of CPU cores of the client for all engines started by sparkEM")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"wds.linkis.enginemanager.engine.instances.max"),(0,a.kt)("td",{parentName:"tr",align:null},"10"),(0,a.kt)("td",{parentName:"tr",align:null},"Used to specify the number of engines that sparkEM can start")))),(0,a.kt)("h3",{id:"14-front-end-deployment"},"1.4 Front-end deployment"),(0,a.kt)("p",null,"After the above microservice deployment is successfully started, if users need to submit their own sparkSQL, pyspark or Scala code through a web browser, they can deploy another open source front-end product of Weizhong ",(0,a.kt)("a",{parentName:"p",href:"https://github.com"},"Scriptis")," /WeBankFinTech/Scriptis/blob/master/docs/zh_CN/ch1/%E5%89%8D%E5%8F%B0%E9%83%A8%E7%BD%B2%E6%96%87%E6%A1% A3.md), this product allows users to edit and submit codes on web pages, and receive information from the background in real time."),(0,a.kt)("p",null,"In addition, Scriptis also has a management console function for configuring the startup parameters of the spark engine."),(0,a.kt)("h3",{id:"15-spark-startup-parameter-configuration"},"1.5 spark startup parameter configuration"),(0,a.kt)("p",null,"The Scriptis page provides us with a configuration page where we can set startup parameters. The memory size of the Driver, the number of executors, and the number of memory and CPU cores can be set. These parameters will be read and used to start a spark engine."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Spark startup parameter configuration diagram",src:n(8182).Z}),(0,a.kt)("br",null),"\nFigure 1 Management console configuration interface"),(0,a.kt)("h3",{id:"16-running-examples"},"1.6 Running examples"),(0,a.kt)("p",null,"In the web browser, open the scriptis address, and the user can create a new sql, scala or pyspark script in the workspace on the left column. After writing the script code in the script editing area, click Run to submit your code to Linkis Execute in the background. After submission, the background will push the log, progress, status and other information to the user in real time through websocket. And after finishing, show the result to the user."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Spark running effect chart 1",src:n(57183).Z}),(0,a.kt)("br",null)),(0,a.kt)("center",null,"Figure 2 Spark running effect Figure 1"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Spark running effect chart 2",src:n(78636).Z}),(0,a.kt)("br",null),"\nFigure 3 Spark running effect Figure 2"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Spark running effect chart 3",src:n(44487).Z}),(0,a.kt)("br",null),"\nFigure 4 Spark running effect Figure 3"),(0,a.kt)("h2",{id:"2-how-the-spark-engine-is-implemented"},"2 How the Spark engine is implemented"),(0,a.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","The implementation of the Linkis-Python execution engine is based on ",(0,a.kt)("a",{parentName:"p",href:"/docs/0.11.0/development/new-engine-conn"},"How to implement a new engine")," to implement the Entrance, EngineManager and Engine three The necessary interface of the module."),(0,a.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","In the EngineManager module, we chose to use the spark-submit command to start the java process, so Linkis took the rewrite of ProcessEngineBuilder's build method to configure the spark The startup parameters of is integrated with the spark-submit command to form a command to start the spark engine, and then the command is executed."),(0,a.kt)("p",null,"In the Engine module, Linkis uses the yarn-client mode by default to start spark sessions. Spark's Driver process will exist in the form of a Linkis engine and owned by the user who starts it."),(0,a.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","After obtaining the SparkSession instance, the SparkContext instance of the Driver process can be obtained through the API provided by Spark. Through the SparkContext instance, we can calculate and obtain the progress. You can cancel the user's task."),(0,a.kt)("p",null,"Spark execution engine now supports three types of spark jobs, sparksql, scala and pyspark. The code in the Engine module implements three SparkExecutors to execute separately, SQL is submitted using SparkSession, scala is submitted using Console, and pyspark is submitted using py4j."),(0,a.kt)("h2",{id:"3-spark-version-adaptation"},"3 Spark version adaptation"),(0,a.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","The release version of Linkis0.5.0 and Linkis0.6.0 only supports spark2.1.0."),(0,a.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","Starting from Linkis0.7.0, spark began to adapt to spark2.4+."),(0,a.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","Of course, if the spark version used in your cluster is not compatible with our supported version, you may need to change the spark.version variable in the top-level pom.xml , And then recompile and package."),(0,a.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","If you encounter problems starting up and running, you can join a group to consult us."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"WeChat group",src:n(39694).Z}),(0,a.kt)("br",null)),(0,a.kt)("h2",{id:"4-future-goals"},"4 Future goals"),(0,a.kt)("p",null,"-1. The deployment method is simpler, try to use the containerized method.\n-2. Support the submission of spark jar package\n-3. Better support for spark's yarn-cluster submission."))}u.isMDXComponent=!0},39694:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/group-8e93c2460f179fabea51336c34b1ddd2.png"},8182:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/spark_conf-26116fec8d022b3e44c5dab02b093aa0.png"},57183:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/spark_run1-70df1decddcfb87664f83455b1104d86.png"},78636:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/spark_run2-3f4ce5658f49cf53efecf02d866ddcea.png"},44487:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/spark_run3-d7c957f26bc7605b191d51f56d725d6d.png"}}]);