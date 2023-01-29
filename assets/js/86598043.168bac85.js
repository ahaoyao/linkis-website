"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[14405],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,m=p["".concat(l,".").concat(d)]||p[d]||h[d]||o;return n?i.createElement(m,s(s({ref:t},u),{},{components:n})):i.createElement(m,s({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=p;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:a,s[1]=r;for(var c=2;c<o;c++)s[c]=n[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},53674:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var i=n(87462),a=(n(67294),n(3905));const o={title:"Job Submission",sidebar_position:2},s="Job submission, preparation and execution process",r={unversionedId:"architecture/computation-governance-services/job-submission-preparation-and-execution-process",id:"version-1.1.2/architecture/computation-governance-services/job-submission-preparation-and-execution-process",title:"Job Submission",description:"The submission and execution of computing tasks (Job) is the core capability provided by Linkis. It almost colludes with all modules in the Linkis computing governance architecture and occupies a core position in Linkis.",source:"@site/versioned_docs/version-1.1.2/architecture/computation-governance-services/job-submission-preparation-and-execution-process.md",sourceDirName:"architecture/computation-governance-services",slug:"/architecture/computation-governance-services/job-submission-preparation-and-execution-process",permalink:"/docs/1.1.2/architecture/computation-governance-services/job-submission-preparation-and-execution-process",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/versioned_docs/version-1.1.2/architecture/computation-governance-services/job-submission-preparation-and-execution-process.md",tags:[],version:"1.1.2",sidebarPosition:2,frontMatter:{title:"Job Submission",sidebar_position:2},sidebar:"version-1.1.2/tutorialSidebar",previous:{title:"EngineConn Design",permalink:"/docs/1.1.2/architecture/computation-governance-services/engine/engine-conn"},next:{title:"Entrance Architecture Design",permalink:"/docs/1.1.2/architecture/computation-governance-services/entrance"}},l={},c=[{value:"1. Submission Stage",id:"1-submission-stage",level:2},{value:"2. Preparation Stage",id:"2-preparation-stage",level:2},{value:"2.1 Apply to LinkisManager for available EngineConn",id:"21-apply-to-linkismanager-for-available-engineconn",level:4},{value:"2.2 Orchestrate a computing task",id:"22-orchestrate-a-computing-task",level:4},{value:"3. Execution Stage",id:"3-execution-stage",level:2}],u={toc:c};function h(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"job-submission-preparation-and-execution-process"},"Job submission, preparation and execution process"),(0,a.kt)("p",null,"The submission and execution of computing tasks (Job) is the core capability provided by Linkis. It almost colludes with all modules in the Linkis computing governance architecture and occupies a core position in Linkis."),(0,a.kt)("p",null,"The whole process, starting at submitting user's computing tasks from the client and ending with returning final results, is divided into three stages: submission -> preparation -> executing. The details are shown in the following figure."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"The overall flow chart of computing tasks",src:n(14207).Z,width:"3290",height:"1260"})),(0,a.kt)("p",null,"Among them:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Entrance, as the entrance to the submission stage, provides task reception, scheduling and job information forwarding capabilities. It is the unified entrance for all computing tasks. It will forward computing tasks to Orchestrator for scheduling and execution.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Orchestrator, as the entrance to the preparation phase, mainly provides job analysis, orchestration and execution capabilities.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Linkis Manager: The management center of computing governance capabilities. Its main responsibilities are as follows:"),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"ResourceManager\uff1aNot only has the resource management capabilities of Yarn and Linkis EngineConnManager, but also provides tag-based multi-level resource allocation and recovery capabilities, allowing ResourceManager to have full resource management capabilities across clusters and across computing resource types\uff1b"),(0,a.kt)("li",{parentName:"ol"},"AppManager:  Coordinate and manage all EngineConnManager and EngineConn, including the life cycle of EngineConn application, reuse, creation, switching, and destruction to AppManager for management;"),(0,a.kt)("li",{parentName:"ol"},"LabelManager: Based on multi-level combined labels, it will provide label support for the routing and management capabilities of EngineConn and EngineConnManager across IDC and across clusters;"),(0,a.kt)("li",{parentName:"ol"},"EngineConnPluginServer: Externally provides the resource generation capabilities required to start an EngineConn and EngineConn startup command generation capabilities."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"EngineConnManager: It is the manager of EngineConn, which provides engine life-cycle management, and at the same time reports load information and its own health status to RM.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"EngineConn: It is the actual connector between Linkis and the underlying computing storage engines. All user computing and storage tasks will eventually be submitted to the underlying computing storage engine by EngineConn. According to different user scenarios, EngineConn provides full-stack computing capability framework support for interactive computing, streaming computing, off-line computing, and data storage tasks."))),(0,a.kt)("h2",{id:"1-submission-stage"},"1. Submission Stage"),(0,a.kt)("p",null,"The submission phase is mainly the interaction of Client -> Linkis Gateway -> Entrance, and the process is as follows:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Flow chart of submission phase",src:n(8708).Z,width:"1248",height:"169"})),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"First, the Client (such as the front end or the client) initiates a Job request, and the job request information is simplified as follows (for the specific usage of Linkis, please refer to ",(0,a.kt)("a",{parentName:"li",href:"/docs/1.1.2/user-guide/how-to-use"},"How to use Linkis"),"):")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"POST /api/rest_j/v1/entrance/submit\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n     "executionContent": {"code": "show tables", "runType": "sql"},\n     "params": {"variable": {}, "configuration": {}}, //not required\n     "source": {"scriptPath": "file:///1.hql"}, //not required, only used to record code source\n     "labels": {\n         "engineType": "spark-2.4.3", //Specify engine\n         "userCreator": "username-IDE" // Specify the submission user and submission system\n     }\n}\n')),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"After Linkis-Gateway receives the request, according to the serviceName in the URI ",(0,a.kt)("inlineCode",{parentName:"li"},"/api/rest_j/v1/${serviceName}/.+"),", it will confirm the microservice name for routing and forwarding. Here Linkis-Gateway will parse out the  name as entrance and  Job is forwarded to the Entrance microservice. It should be noted that if the user specifies a routing label, the Entrance microservice instance with the corresponding label will be selected for forwarding according to the routing label instead of random forwarding."),(0,a.kt)("li",{parentName:"ol"},"After Entrance receives the Job request, it will first simply verify the legitimacy of the request, then use RPC to call JobHistory to persist the job information, and then encapsulate the Job request as a computing task, put it in the scheduling queue, and wait for it to be consumed by consumption thread."),(0,a.kt)("li",{parentName:"ol"},"The scheduling queue will open up a consumption queue and a consumption thread for each group. The consumption queue is used to store the user computing tasks that have been preliminarily encapsulated. The consumption thread will continue to take computing tasks from the consumption queue for consumption in a FIFO manner. The current default grouping method is Creator + User (that is, submission system + user). Therefore, even if it is the same user, as long as it is a computing task submitted by different systems, the actual consumption queues and consumption threads are completely different, and they are completely isolated from each other. (Reminder: Users can modify the grouping algorithm as needed)"),(0,a.kt)("li",{parentName:"ol"},"After the consuming thread takes out the calculation task, it will submit the calculation task to Orchestrator, which officially enters the preparation phase.")),(0,a.kt)("h2",{id:"2-preparation-stage"},"2. Preparation Stage"),(0,a.kt)("p",null,"There are two main processes in the preparation phase. One is to apply for an available EngineConn from LinkisManager to submit and execute the following computing tasks. The other is Orchestrator to orchestrate the computing tasks submitted by Entrance, and to convert a user's computing request into a physical execution tree and handed over to the execution phase where a computing task actually being executed. "),(0,a.kt)("h4",{id:"21-apply-to-linkismanager-for-available-engineconn"},"2.1 Apply to LinkisManager for available EngineConn"),(0,a.kt)("p",null,"If the user has a reusable EngineConn in LinkisManager, the EngineConn is directly locked and returned to Orchestrator, and the entire application process ends."),(0,a.kt)("p",null,"How to define a reusable EngineConn? It refers to those that can match all the label requirements of the computing task, and the EngineConn's own health status is Healthy (the load is low and the actual status is Idle). Then, all the EngineConn that meets the conditions are sorted and selected according to the rules, and finally the best one is locked."),(0,a.kt)("p",null,"If the user does not have a reusable EngineConn, a process to request a new EngineConn will be triggered at this time. Regarding the process, please refer to: ",(0,a.kt)("a",{parentName:"p",href:"/docs/1.1.2/architecture/computation-governance-services/engine/add-an-engine-conn"},"How to add an EngineConn"),"."),(0,a.kt)("h4",{id:"22-orchestrate-a-computing-task"},"2.2 Orchestrate a computing task"),(0,a.kt)("p",null,"Orchestrator is mainly responsible for arranging a computing task (JobReq) into a physical execution tree (PhysicalTree) that can be actually executed, and providing the execution capabilities of the Physical tree."),(0,a.kt)("p",null,"Here we first focus on Orchestrator's computing task scheduling capabilities. A flow chart is shown below:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Orchestration flow chart",src:n(63339).Z,width:"1377",height:"415"})),(0,a.kt)("p",null,"The main process is as follows:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Converter: Complete the conversion of the JobReq (task request) submitted by the user to Orchestrator's ASTJob. This step will perform parameter check and information supplementation on the calculation task submitted by the user, such as variable replacement, etc."),(0,a.kt)("li",{parentName:"ul"},"Parser: Complete the analysis of ASTJob. Split ASTJob into an AST tree composed of ASTJob and ASTStage."),(0,a.kt)("li",{parentName:"ul"},"Validator: Complete the inspection and information supplement of ASTJob and ASTStage, such as code inspection, necessary Label information supplement, etc."),(0,a.kt)("li",{parentName:"ul"},"Planner: Convert an AST tree into a Logical tree. The Logical tree at this time has been composed of LogicalTask, which contains all the execution logic of the entire computing task."),(0,a.kt)("li",{parentName:"ul"},"Optimizer: Convert a Logical tree to a Physical tree and optimize the Physical tree.")),(0,a.kt)("p",null,"In a physical tree, the majority of nodes are computing strategy logic. Only the middle ExecTask truly encapsulates the execution logic which will be further submitted to and executed at EngineConn. As shown below:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Physical Tree",src:n(87076).Z,width:"1425",height:"991"})),(0,a.kt)("p",null,"Different computing strategies have different execution logics encapsulated by JobExecTask and StageExecTask in the Physical tree."),(0,a.kt)("p",null,"The execution logic encapsulated by JobExecTask and StageExecTask in the Physical tree depends on the  specific type of computing strategy."),(0,a.kt)("p",null,"For example, under the multi-active computing strategy, for a computing task submitted by a user, the execution logic submitted to EngineConn of different clusters for execution is encapsulated in two ExecTasks, and the related strategy logic is reflected in the parent node (StageExecTask(End)) of the two ExecTasks."),(0,a.kt)("p",null,"Here, we take the multi-reading scenario under the multi-active computing strategy as an example."),(0,a.kt)("p",null,"In multi-reading scenario, only one result of ExecTask is required to return. Once the result is returned , the Physical tree can be marked as successful. However, the Physical tree only has the ability to execute sequentially according to dependencies, and cannot terminate the execution of each node. Once a node is canceled or fails to execute, the entire Physical tree will be marked as failure. At this time, StageExecTask (End) is needed to ensure that the Physical tree can not only cancel the ExecTask that failed to execute, but also continue to upload the result set generated by the Successful ExecTask, and let the Physical tree continue to execute. This is the execution logic of computing strategy  represented by StageExecTask."),(0,a.kt)("p",null,"The orchestration process of Linkis Orchestrator is similar to many SQL parsing engines (such as Spark, Hive's SQL parser). But in fact, the orchestration capability of Linkis Orchestrator is realized based on the computing governance field for the different computing governance needs of users. The SQL parsing engine is a parsing orchestration oriented to the SQL language. Here is a simple distinction:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},'What Linkis Orchestrator mainly wants to solve is the orchestration requirements caused by different computing tasks for computing strategies. For example, in order to be multi-active, Orchestrator will submit a calculation task for the user, based on the "multi-active" computing strategy requirements, compile a physical tree, so as to submit to multiple clusters to perform this calculation task. And in the process of constructing the entire Physical tree, various possible abnormal scenarios have been fully considered, and they have all been reflected in the Physical tree.'),(0,a.kt)("li",{parentName:"ol"},"The orchestration ability of Linkis Orchestrator has nothing to do with the programming language. In theory, as long as an engine has adapted to Linkis, all the programming languages it supports can be orchestrated, while the SQL parsing engine only cares about the analysis and execution of SQL, and is only responsible for parsing a piece of SQL into one executable Physical tree, and finally calculate the result."),(0,a.kt)("li",{parentName:"ol"},"Linkis Orchestrator also has the ability to parse SQL, but SQL parsing is just one of Orchestrator Parser's analytic implementations for the SQL programming language. The Parser of Linkis Orchestrator also considers introducing Apache Calcite to parse SQL. It supports splitting a user SQL that spans multiple computing engines (must be a computing engine that Linkis has docked) into multiple sub SQLs and submitting them to each corresponding engine during the execution phase. Finally, a suitable calculation engine is selected for summary calculation.")),(0,a.kt)("p",null,"After the analysis and arrangement of Linkis Orchestrator, the  computing task has been transformed into a executable physical tree. Orchestrator will submit the Physical tree to Orchestrator's Execution module and enter the final execution stage."),(0,a.kt)("h2",{id:"3-execution-stage"},"3. Execution Stage"),(0,a.kt)("p",null,"The execution stage is mainly divided into the following two steps, these two steps are the last two phases of capabilities provided by Linkis Orchestrator:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Flow chart of the execution stage",src:n(49860).Z,width:"1377",height:"415"})),(0,a.kt)("p",null,"The main process is as follows:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Execution: Analyze the dependencies of the Physical tree, and execute them sequentially from the leaf nodes according to the dependencies."),(0,a.kt)("li",{parentName:"ul"},"Reheater: Once the execution of a node in the Physical tree is completed, it will trigger a reheat. Reheating allows the physical tree to be dynamically adjusted according to the real-time execution.For example: it is detected that a leaf node fails to execute, and it supports retry (if it is caused by throwing ReTryExecption), the Physical tree will be automatically adjusted, and a retry parent node with exactly the same content is added to the leaf node .")),(0,a.kt)("p",null,"Let us go back to the Execution stage, where we focus on the execution logic of the ExecTask node that encapsulates the user computing task submitted to EngineConn."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"As mentioned earlier, the first step in the preparation phase is to obtain a usable EngineConn from LinkisManager. After ExecTask gets this EngineConn, it will submit the user's computing task to EngineConn through an RPC request."),(0,a.kt)("li",{parentName:"ol"},"After EngineConn receives the computing task, it will asynchronously submit it to the underlying computing storage engine through the thread pool, and then immediately return an execution ID."),(0,a.kt)("li",{parentName:"ol"},"After ExecTask gets this execution ID, it can then use the ID to asynchronously pull the execution status of the computing task (such as: status, progress, log, result set, etc.)."),(0,a.kt)("li",{parentName:"ol"},"At the same time, EngineConn will monitor the execution of the underlying computing storage engine in real time through multiple registered Listeners. If the computing storage engine does not support registering Listeners, EngineConn will start a daemon thread for the computing task and periodically pull the execution status from the computing storage engine."),(0,a.kt)("li",{parentName:"ol"},"EngineConn will pull the execution status back to the microservice where Orchestrator is located in real time through RCP request."),(0,a.kt)("li",{parentName:"ol"},"After the Receiver of the microservice receives the execution status, it will broadcast it through the ListenerBus, and the Orchestrator Execution will consume the event and dynamically update the execution status of the Physical tree."),(0,a.kt)("li",{parentName:"ol"},"The result set generated by the calculation task will be written to storage media such as HDFS at the EngineConn side. EngineConn returns only the result set path through RPC, Execution consumes the event, and broadcasts the obtained result set path through ListenerBus, so that the Listener registered by Entrance with Orchestrator can consume the result set path and write the result set path Persist to JobHistory."),(0,a.kt)("li",{parentName:"ol"},"After the execution of the computing task on the EngineConn side is completed, through the same logic, the Execution will be triggered to update the state of the ExecTask node of the Physical tree, so that the Physical tree will continue to execute until the entire tree is completely executed. At this time, Execution will broadcast the completion status of the calculation task through ListenerBus."),(0,a.kt)("li",{parentName:"ol"},"After the Entrance registered Listener with the Orchestrator consumes the state event, it updates the job state to JobHistory, and the entire task execution is completed.")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Finally, let's take a look at how the client side knows the state of the calculation task and obtains the calculation result in time, as shown in the following figure:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Results acquisition process",src:n(3945).Z,width:"1759",height:"867"})),(0,a.kt)("p",null,"The specific process is as follows:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The client periodically polls to request Entrance to obtain the status of the computing task."),(0,a.kt)("li",{parentName:"ol"},"Once the status is flipped to success, it sends a request for job information to JobHistory, and gets all the result set paths."),(0,a.kt)("li",{parentName:"ol"},"Initiate a query file content request to PublicService through the result set path, and obtain the content of the result set.")),(0,a.kt)("p",null,"Since then, the entire process of  job submission -> preparation -> execution have been completed."))}h.isMDXComponent=!0},49860:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/execution-7711ec693594a84b32e171e005d9f073.png"},63339:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/orchestrate-f7e1faca21e2f590630b56bf57431985.png"},14207:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/overall-e8e6f0c0c5dac91502b72888007ee4bf.png"},87076:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/physical_tree-92e2e850498bf40d168bab88337186d6.png"},3945:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/result_acquisition-bd4d33a43317f68f74bd5f1034e45b67.png"},8708:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/submission-d8d3f8ec921dd886ac413c0acb37314d.png"}}]);