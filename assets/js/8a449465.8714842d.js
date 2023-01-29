"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[95608],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var i=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,s=function(e,t){if(null==e)return{};var n,i,s={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var r=i.createContext({}),u=function(e){var t=i.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(r.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,r=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),g=s,b=d["".concat(r,".").concat(g)]||d[g]||p[g]||o;return n?i.createElement(b,a(a({ref:t},c),{},{components:n})):i.createElement(b,a({ref:t},c))}));function g(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var r in t)hasOwnProperty.call(t,r)&&(l[r]=t[r]);l.originalType=e,l.mdxType="string"==typeof e?e:s,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},41499:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var i=n(87462),s=(n(67294),n(3905));const o={title:"Linkis Client SDK",sidebar_position:2},a=void 0,l={unversionedId:"user-guide/sdk-manual",id:"version-1.3.0/user-guide/sdk-manual",title:"Linkis Client SDK",description:"Linkis provides a convenient interface for calling JAVA and SCALA. It can be used only by introducing the linkis-computation-client module. After 1.0, the method of submitting with Label is added. The following will introduce both ways that compatible with 0.X and newly added in 1.0.",source:"@site/versioned_docs/version-1.3.0/user-guide/sdk-manual.md",sourceDirName:"user-guide",slug:"/user-guide/sdk-manual",permalink:"/docs/1.3.0/user-guide/sdk-manual",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/versioned_docs/version-1.3.0/user-guide/sdk-manual.md",tags:[],version:"1.3.0",sidebarPosition:2,frontMatter:{title:"Linkis Client SDK",sidebar_position:2},sidebar:"version-1.3.0/tutorialSidebar",previous:{title:"How to Use",permalink:"/docs/1.3.0/user-guide/how-to-use"},next:{title:"Linkis-Cli Manual",permalink:"/docs/1.3.0/user-guide/linkiscli-manual"}},r={},u=[{value:"1. Introduce dependent modules",id:"1-introduce-dependent-modules",level:2},{value:"2. Java test code",id:"2-java-test-code",level:2},{value:"3. Scala test code",id:"3-scala-test-code",level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Linkis provides a convenient interface for calling JAVA and SCALA. It can be used only by introducing the linkis-computation-client module. After 1.0, the method of submitting with Label is added. The following will introduce both ways that compatible with 0.X and newly added in 1.0.")),(0,s.kt)("h2",{id:"1-introduce-dependent-modules"},"1. Introduce dependent modules"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"<dependency>\n   <groupId>org.apache.linkis</groupId>\n   <artifactId>linkis-computation-client</artifactId>\n   <version>${linkis.version}</version>\n</dependency>\nSuch as:\n<dependency>\n   <groupId>org.apache.linkis</groupId>\n   <artifactId>linkis-computation-client</artifactId>\n   <version>1.0.3</version>\n</dependency>\n")),(0,s.kt)("h2",{id:"2-java-test-code"},"2. Java test code"),(0,s.kt)("p",null,"Create the Java test class LinkisClientTest. Refer to the comments to understand the purposes of those interfaces:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'package org.apache.linkis.client.test;\n\nimport org.apache.linkis.common.utils.Utils;\nimport org.apache.linkis.httpclient.dws.authentication.StaticAuthenticationStrategy;\nimport org.apache.linkis.httpclient.dws.config.DWSClientConfig;\nimport org.apache.linkis.httpclient.dws.config.DWSClientConfigBuilder;\nimport org.apache.linkis.manager.label.constant.LabelKeyConstant;\nimport org.apache.linkis.protocol.constants.TaskConstant;\nimport org.apache.linkis.ujes.client.UJESClient;\nimport org.apache.linkis.ujes.client.UJESClientImpl;\nimport org.apache.linkis.ujes.client.request.JobSubmitAction;\nimport org.apache.linkis.ujes.client.request.JobExecuteAction;\nimport org.apache.linkis.ujes.client.request.ResultSetAction;\nimport org.apache.linkis.ujes.client.response.*;\nimport org.apache.commons.io.IOUtils;\n\nimport java.util.HashMap;\nimport java.util.Map;\nimport java.util.concurrent.TimeUnit;\n\npublic class LinkisClientTest {\n\n    // 1. build config: linkis gateway url\n    private static DWSClientConfig clientConfig = ((DWSClientConfigBuilder) (DWSClientConfigBuilder.newBuilder()\n            .addServerUrl("http://127.0.0.1:9001/")   //set linkis-mg-gateway url: http://{ip}:{port}\n            .connectionTimeout(30000)   //connectionTimeOut\n            .discoveryEnabled(false) //disable discovery\n            .discoveryFrequency(1, TimeUnit.MINUTES)  // discovery frequency\n            .loadbalancerEnabled(true)  // enable loadbalance\n            .maxConnectionSize(5)   // set max Connection\n            .retryEnabled(false) // set retry\n            .readTimeout(30000)  //set read timeout\n            .setAuthenticationStrategy(new StaticAuthenticationStrategy())   //AuthenticationStrategy Linkis authen suppory static and Token\n            .setAuthTokenKey("hadoop")  // set submit user\n            .setAuthTokenValue("hadoop")))  // set passwd or token (setAuthTokenValue("test"))\n            .setDWSVersion("v1") //linkis rest version v1\n            .build();\n\n    // 2. new Client(Linkis Client) by clientConfig\n    private static UJESClient client = new UJESClientImpl(clientConfig);\n\n    public static void main(String[] args) {\n\n        String user = "hadoop"; // execute user\n        String executeCode = "df=spark.sql(\\"show tables\\")\\n" +\n                "show(df)"; // code support:sql/hql/py/scala\n        try {\n\n            System.out.println("user : " + user + ", code : [" + executeCode + "]");\n            // 3. build job and execute\n            JobExecuteResult jobExecuteResult = toSubmit(user, executeCode);\n            System.out.println("execId: " + jobExecuteResult.getExecID() + ", taskId: " + jobExecuteResult.taskID());\n            // 4. get job jonfo\n            JobInfoResult jobInfoResult = client.getJobInfo(jobExecuteResult);\n            int sleepTimeMills = 1000;\n            int logFromLen = 0;\n            int logSize = 100;\n            while (!jobInfoResult.isCompleted()) {\n                // 5. get progress and log\n                JobProgressResult progress = client.progress(jobExecuteResult);\n                System.out.println("progress: " + progress.getProgress());\n                JobLogResult logRes = client.log(jobExecuteResult, logFromLen, logSize);\n                logFromLen = logRes.fromLine();\n                // 0: info 1: warn 2: error 3: all\n                System.out.println(logRes.log().get(3));\n                Utils.sleepQuietly(sleepTimeMills);\n                jobInfoResult = client.getJobInfo(jobExecuteResult);\n            }\n\n            JobInfoResult jobInfo = client.getJobInfo(jobExecuteResult);\n            // 6. Get the result set list (if the user submits multiple SQLs at a time,\n            // multiple result sets will be generated)\n            String resultSet = jobInfo.getResultSetList(client)[0];\n            // 7. get resultContent\n            ResultSetResult resultSetResult = client.resultSet(ResultSetAction.builder().setPath(resultSet).setUser(jobExecuteResult.getUser()).build());\n            System.out.println("metadata: " + resultSetResult.getMetadata()); // column name type\n            System.out.println("res: " + resultSetResult.getFileContent()); //row data\n        } catch (Exception e) {\n            e.printStackTrace();// please use log\n            IOUtils.closeQuietly(client);\n        }\n        IOUtils.closeQuietly(client);\n    }\n\n   \n    private static JobExecuteResult toSubmit(String user, String code) {\n        // 1. build  params\n        // set label map :EngineTypeLabel/UserCreatorLabel/EngineRunTypeLabel/Tenant\n        Map<String, Object> labels = new HashMap<String, Object>();\n        labels.put(LabelKeyConstant.ENGINE_TYPE_KEY, "spark-2.4.3"); // required engineType Label\n        labels.put(LabelKeyConstant.USER_CREATOR_TYPE_KEY, user + "-APPName");// required execute user and creator eg:hadoop-IDE\n        labels.put(LabelKeyConstant.CODE_TYPE_KEY, "py"); // required codeType\n        // set start up map :engineConn start params\n        Map<String, Object> startupMap = new HashMap<String, Object>(16);\n        // Support setting engine native parameters,For example: parameters of engines such as spark/hive\n        startupMap.put("spark.executor.instances", 2);\n        // setting linkis params\n        startupMap.put("wds.linkis.rm.yarnqueue", "dws");\n\n        // 2. build jobSubmitAction\n        JobSubmitAction jobSubmitAction = JobSubmitAction.builder()\n                .addExecuteCode(code)\n                .setStartupParams(startupMap)\n                .setUser(user) //submit user\n                .addExecuteUser(user)  // execute user\n                .setLabels(labels)\n                .build();\n        // 3. to execute\n        return client.submit(jobSubmitAction);\n    }\n}\n')),(0,s.kt)("p",null,"Run the above code to interact with Linkis"),(0,s.kt)("h2",{id:"3-scala-test-code"},"3. Scala test code"),(0,s.kt)("p",null,"Create the Scala test class LinkisClientTest. Refer to the comments to understand the purposes of those interfaces:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scala"},'package org.apache.linkis.client.test\n\nimport org.apache.commons.io.IOUtils\nimport org.apache.commons.lang3.StringUtils\nimport org.apache.linkis.common.utils.Utils\nimport org.apache.linkis.httpclient.dws.authentication.StaticAuthenticationStrategy\nimport org.apache.linkis.httpclient.dws.config.DWSClientConfigBuilder\nimport org.apache.linkis.manager.label.constant.LabelKeyConstant\nimport org.apache.linkis.ujes.client.request._\nimport org.apache.linkis.ujes.client.response._\n\nimport java.util\nimport java.util.concurrent.TimeUnit\n\nobject LinkisClientTest {\n  // 1. build config: linkis gateway url\n  val clientConfig = DWSClientConfigBuilder.newBuilder()\n    .addServerUrl("http://127.0.0.1:9001/") //set linkis-mg-gateway url: http://{ip}:{port}\n    .connectionTimeout(30000) //connectionTimeOut\n    .discoveryEnabled(false) //disable discovery\n    .discoveryFrequency(1, TimeUnit.MINUTES) // discovery frequency\n    .loadbalancerEnabled(true) // enable loadbalance\n    .maxConnectionSize(5) // set max Connection\n    .retryEnabled(false) // set retry\n    .readTimeout(30000) //set read timeout\n    .setAuthenticationStrategy(new StaticAuthenticationStrategy()) //AuthenticationStrategy Linkis authen suppory static and Token\n    .setAuthTokenKey("hadoop") // set submit user\n    .setAuthTokenValue("hadoop") // set passwd or token (setAuthTokenValue("BML-AUTH"))\n    .setDWSVersion("v1") //linkis rest version v1\n    .build();\n\n  // 2. new Client(Linkis Client) by clientConfig\n  val client = UJESClient(clientConfig)\n\n  def main(args: Array[String]): Unit = {\n    val user = "hadoop" // execute user \u7528\u6237\u9700\u8981\u548cAuthTokenKey\u7684\u503c\u4fdd\u6301\u4e00\u81f4\n    val executeCode = "df=spark.sql(\\"show tables\\")\\n" +\n      "show(df)"; // code support:sql/hql/py/scala\n    try {\n      // 3. build job and execute\n      println("user : " + user + ", code : [" + executeCode + "]")\n      // \u63a8\u8350\u4f7f\u7528submit\uff0c\u652f\u6301\u4f20\u9012\u4efb\u52a1label\n      val jobExecuteResult = toSubmit(user, executeCode)\n      println("execId: " + jobExecuteResult.getExecID + ", taskId: " + jobExecuteResult.taskID)\n      // 4. get job jonfo\n      var jobInfoResult = client.getJobInfo(jobExecuteResult)\n      var logFromLen = 0\n      val logSize = 100\n      val sleepTimeMills: Int = 1000\n      while (!jobInfoResult.isCompleted) {\n        // 5. get progress and log\n        val progress = client.progress(jobExecuteResult)\n        println("progress: " + progress.getProgress)\n        val logObj = client.log(jobExecuteResult, logFromLen, logSize)\n        logFromLen = logObj.fromLine\n        val logArray = logObj.getLog\n        // 0: info 1: warn 2: error 3: all\n        if (logArray != null && logArray.size >= 4 && StringUtils.isNotEmpty(logArray.get(3))) {\n          println(s"log: ${logArray.get(3)}")\n        }\n        Utils.sleepQuietly(sleepTimeMills)\n        jobInfoResult = client.getJobInfo(jobExecuteResult)\n      }\n      if (!jobInfoResult.isSucceed) {\n        println("Failed to execute job: " + jobInfoResult.getMessage)\n        throw new Exception(jobInfoResult.getMessage)\n      }\n\n      // 6. Get the result set list (if the user submits multiple SQLs at a time,\n      // multiple result sets will be generated)\n      val jobInfo = client.getJobInfo(jobExecuteResult)\n      val resultSetList = jobInfoResult.getResultSetList(client)\n      println("All result set list:")\n      resultSetList.foreach(println)\n      val oneResultSet = jobInfo.getResultSetList(client).head\n      // 7. get resultContent\n      val resultSetResult: ResultSetResult = client.resultSet(ResultSetAction.builder.setPath(oneResultSet).setUser(jobExecuteResult.getUser).build)\n      println("metadata: " + resultSetResult.getMetadata) // column name type\n      println("res: " + resultSetResult.getFileContent) //row data\n    } catch {\n      case e: Exception => {\n        e.printStackTrace() //please use log\n      }\n    }\n    IOUtils.closeQuietly(client)\n  }\n\n\n  def toSubmit(user: String, code: String): JobExecuteResult = {\n    // 1. build  params\n    // set label map :EngineTypeLabel/UserCreatorLabel/EngineRunTypeLabel/Tenant\n    val labels: util.Map[String, Any] = new util.HashMap[String, Any]\n    labels.put(LabelKeyConstant.ENGINE_TYPE_KEY, "spark-2.4.3"); // required engineType Label\n    labels.put(LabelKeyConstant.USER_CREATOR_TYPE_KEY, user + "-APPName"); // \u8bf7\u6c42\u7684\u7528\u6237\u548c\u5e94\u7528\u540d\uff0c\u4e24\u4e2a\u53c2\u6570\u90fd\u4e0d\u80fd\u5c11\uff0c\u5176\u4e2dAPPName\u4e0d\u80fd\u5e26\u6709"-"\u5efa\u8bae\u66ff\u6362\u4e3a"_"\n    labels.put(LabelKeyConstant.CODE_TYPE_KEY, "py"); // \u6307\u5b9a\u811a\u672c\u7c7b\u578b\n\n    val startupMap = new java.util.HashMap[String, Any]()\n    // Support setting engine native parameters,For example: parameters of engines such as spark/hive\n    startupMap.put("spark.executor.instances", 2);\n    // setting linkis params\n    startupMap.put("wds.linkis.rm.yarnqueue", "default");\n    // 2. build jobSubmitAction\n    val jobSubmitAction = JobSubmitAction.builder\n      .addExecuteCode(code)\n      .setStartupParams(startupMap)\n      .setUser(user) //submit user\n      .addExecuteUser(user) //execute user\n      .setLabels(labels)\n      .build\n    // 3. to execute\n    client.submit(jobSubmitAction)\n  }\n}\n')))}p.isMDXComponent=!0}}]);