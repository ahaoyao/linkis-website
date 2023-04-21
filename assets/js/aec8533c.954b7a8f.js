"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[8006],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>h});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},s=Object.keys(e);for(i=0;i<s.length;i++)t=s[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)t=s[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=i.createContext({}),c=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=c(e.components);return i.createElement(l.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},g=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(t),g=a,h=p["".concat(l,".").concat(g)]||p[g]||u[g]||s;return t?i.createElement(h,r(r({ref:n},d),{},{components:t})):i.createElement(h,r({ref:n},d))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,r=new Array(s);r[0]=g;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[p]="string"==typeof e?e:a,r[1]=o;for(var c=2;c<s;c++)r[c]=t[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}g.displayName="MDXCreateElement"},63068:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var i=t(87462),a=(t(67294),t(3905));const s={title:"Debug Guide",sidebar_position:5},r=void 0,o={unversionedId:"development/debug",id:"development/debug",title:"Debug Guide",description:"Introduction: This article records in detail how to configure and start various microservices of Linkis in IDEA, and implement the submission and execution of scripts such as JDBC, Python, and Shell. On Mac OS, each microservice of Linkis supports local debugging.",source:"@site/docs/development/debug.md",sourceDirName:"development",slug:"/development/debug",permalink:"/docs/1.4.0/development/debug",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/docs/development/debug.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Debug Guide",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"How to Build Docker Image",permalink:"/docs/1.4.0/development/build-docker"},next:{title:"Development & Debugging with Kubernetes",permalink:"/docs/1.4.0/development/debug-with-helm-charts"}},l={},c=[{value:"1. Code debugging environment",id:"1-code-debugging-environment",level:2},{value:"2. Prepare the code and compile",id:"2-prepare-the-code-and-compile",level:2},{value:"3. Configure and start the service",id:"3-configure-and-start-the-service",level:2},{value:"3.1 add mysql-connector-java to the classpath",id:"31-add-mysql-connector-java-to-the-classpath",level:3},{value:"3.2 Adjust log4j2.xml configuration",id:"32-adjust-log4j2xml-configuration",level:3},{value:"3.3 Start the eureka service",id:"33-start-the-eureka-service",level:3},{value:"3.4 Start linkis-mg-gateway",id:"34-start-linkis-mg-gateway",level:3},{value:"3.5 Start linkis-ps-publicservice",id:"35-start-linkis-ps-publicservice",level:3},{value:"3.6 Start linkis-cg-linkismanager",id:"36-start-linkis-cg-linkismanager",level:3},{value:"3.7 Start linkis-cg-entrance",id:"37-start-linkis-cg-entrance",level:3},{value:"3.8 Start linkis-cg-engineconnmanager",id:"38-start-linkis-cg-engineconnmanager",level:3},{value:"3.9 Key Configuration Modifications",id:"39-key-configuration-modifications",level:3},{value:"3.9.1 conf/linkis.properties",id:"391-conflinkisproperties",level:4},{value:"3.9.2 conf/linkis-cg-entrance.properties",id:"392-conflinkis-cg-entranceproperties",level:4},{value:"3.9.3 conf/linkis-cg-engineconnmanager.properties",id:"393-conflinkis-cg-engineconnmanagerproperties",level:4},{value:"3.9.4 conf/linkis-cg-engineplugin.properties",id:"394-conflinkis-cg-enginepluginproperties",level:4},{value:"3.10 Set sudo password-free for the current user",id:"310-set-sudo-password-free-for-the-current-user",level:3},{value:"3.11 Service Test",id:"311-service-test",level:3},{value:"4. Remote debugging service guide",id:"4-remote-debugging-service-guide",level:2},{value:"4.1 Open the remote debugging port",id:"41-open-the-remote-debugging-port",level:3},{value:"4.2 Enter ${LINKIS_HOME}/sbin/ext, modify the module configuration file to open the remote call port",id:"42-enter-linkis_homesbinext-modify-the-module-configuration-file-to-open-the-remote-call-port",level:3},{value:"4.3 Restart the service that needs to be debugged",id:"43-restart-the-service-that-needs-to-be-debugged",level:3},{value:"4.4 Compiler configuration remote debugging",id:"44-compiler-configuration-remote-debugging",level:3},{value:"4.5 Start debugging",id:"45-start-debugging",level:3}],d={toc:c},p="wrapper";function u(e){let{components:n,...s}=e;return(0,a.kt)(p,(0,i.Z)({},d,s,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Introduction: This article records in detail how to configure and start various microservices of Linkis in IDEA, and implement the submission and execution of scripts such as JDBC, Python, and Shell. On Mac OS, each microservice of Linkis supports local debugging.\nHowever, on Windows OS, the linkis-cg-engineconnmanager service does not support local debugging for the time being. You can refer to the remote debugging documentation in Section 4 below for debugging.")),(0,a.kt)("h4",null,(0,a.kt)("font",{color:"red"},"Linkis before version 1.0.3 has not yet entered the apache incubation, the organization still belongs to webank, the package name of the main class is `com.webank.wedatasphere.linkis`, when debugging, pay attention to the distinction . ")),(0,a.kt)("h2",{id:"1-code-debugging-environment"},"1. Code debugging environment"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"jdk1.8"),(0,a.kt)("li",{parentName:"ul"},"maven3.5+")),(0,a.kt)("h2",{id:"2-prepare-the-code-and-compile"},"2. Prepare the code and compile"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"git clone git@github.com:apache/linkis.git\ncd linkis\ngit checkout dev-1.2.0\n")),(0,a.kt)("p",null,"Clone the source code of Linkis to the local and open it with IDEA. When you open the project for the first time, the dependency jar package required for the compilation of the Linkis project will be downloaded from the maven repository. When the dependent jar package is loaded, run the following compile and package command."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"##If the corresponding version has been released, you can skip this step. The released version-related dependencies have been deployed to the maven central repository\nmvn -N install\nmvn clean install -DskipTests\n")),(0,a.kt)("p",null,"After the compilation command runs successfully, the compiled installation package can be found in the directory linkis/linkis-dist/target/: apache-linkis-version-incubating-bin.tar.gz"),(0,a.kt)("h2",{id:"3-configure-and-start-the-service"},"3. Configure and start the service"),(0,a.kt)("h3",{id:"31-add-mysql-connector-java-to-the-classpath"},"3.1 add mysql-connector-java to the classpath"),(0,a.kt)("p",null,"If the mysql driver class cannot be found during the service startup process, you can add mysql-connector-java-version.jar to the classpath of the corresponding service module."),(0,a.kt)("p",null,"At present, the services that rely on mysql and the corresponding pom.xml paths are as follows:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"linkis-mg-gateway: linkis-spring-cloud-services/linkis-service-gateway/linkis-gateway-server-support/pom.xml"),(0,a.kt)("li",{parentName:"ul"},"linkis-ps-publicservice: linkis-public-enhancements/pom.xml"),(0,a.kt)("li",{parentName:"ul"},"linkis-cg-linkismanage: linkis-computation-governance/linkis-manager/linkis-application-manager/pom.xml"),(0,a.kt)("li",{parentName:"ul"},"linkis-cg-engineplugin: linkis-computation-governance/linkis-engineconn/linkis-engineconn-plugin-server/pom.xml")),(0,a.kt)("p",null,"The way to add to the dependency is as follows, modify the pom.xml file of the corresponding service to add the mysql dependency,"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n      <groupId>mysql</groupId>\n      <artifactId>mysql-connector-java</artifactId>\n      <version>${mysql.connector.version}</version>\n</dependency>\n")),(0,a.kt)("p",null,"At the same time, it is necessary to keep whether the scope of mysql-connector-java dependency is set to test according to the ",(0,a.kt)("inlineCode",{parentName:"p"},"<dependencyManagement>")," of pom.xml. If so, comments are required for local debugging"),(0,a.kt)("h3",{id:"32-adjust-log4j2xml-configuration"},"3.2 Adjust log4j2.xml configuration"),(0,a.kt)("p",null,"Under the Linkis source code folder, in the subdirectory linkis-dist/package/conf, are some default configuration files of Linkis. First, edit the log4j2.xml file, and add the configuration of log output to the console."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"log4j2.xml",src:t(22269).Z,width:"2970",height:"1292"})),(0,a.kt)("p",null,"Only the configuration content that needs to be added is posted here."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<configuration status="error" monitorInterval="30">\n    <appenders>\n        <Console name="Console" target="SYSTEM_OUT">\n            <ThresholdFilter level="INFO" onMatch="ACCEPT" onMismatch="DENY"/>\n            <PatternLayout pattern="%d{yyyy-MM-dd HH:mm:ss.SSS} %-5level [%t] %logger{36} %L %M - %msg%xEx%n"/>\n        </Console>\n    </appenders>\n    <loggers>\n        <root level="INFO">\n            <appender-ref ref="Console"/>\n        </root>\n    </loggers>\n</configuration>\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:"),"linkis.properties needs to modify the parameters of the corresponding jdbc"),(0,a.kt)("h3",{id:"33-start-the-eureka-service"},"3.3 Start the eureka service"),(0,a.kt)("p",null,"Linkis' services rely on Eureka as the registry, so we need to start the Eureka service first. The Eureka service can be started locally or remotely. After ensuring that each service can access Eureka's IP and port, you can start to start other microservices."),(0,a.kt)("p",null,"Inside Linkis, the application name and configuration file are set through the -DserviceName parameter, so -DserviceName is a VM startup parameter that must be specified."),(0,a.kt)("p",null,'You can use the "-Xbootclasspath/a: configuration file path" command to append the configuration file to the end of the bootstrap class path, that is, add the dependent configuration file to the classpath.'),(0,a.kt)("p",null,'By checking Include dependencies with "Provided" scope, you can introduce provided-level dependency packages during debugging.'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"eureka",src:t(46988).Z,width:"2110",height:"1378"})),(0,a.kt)("p",null,"Parameter explanation:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"[service name]\nlinkis-mg-eureka\n\n[Use classpath of module]\nlinkis-eureka\n\n[Main Class]\norg.apache.linkis.eureka.SpringCloudEurekaApplication\n\n[VM Opitons]\n-DserviceName=linkis-mg-eureka -Xbootclasspath/a:{YourPathPrefix}/linkis/linkis-dist/package/conf\n\n[Program arguments]\n--spring.profiles.active=eureka --eureka.instance.preferIpAddress=true\n")),(0,a.kt)("p",null,"Note that the local path involved in the debugging configuration needs to be modified to the path set by yourself;\nThe path writing rule in Windows is: D:","{","YourPathPrefix}\\linkis\\linkis-dist\\package\\conf\n(The same applies to the following microservices)"),(0,a.kt)("p",null,"If you don't want the default 20303 port, you can modify the port configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"File path: conf/application-eureka.yml\nModify the port:\nserver:\n  port: 8080 ##Starting port\n")),(0,a.kt)("p",null,"After the above settings are completed, run the Application directly. After successful startup, you can view the eureka service list through http://localhost:20303/."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"eureka-web",src:t(34432).Z,width:"2260",height:"742"})),(0,a.kt)("h3",{id:"34-start-linkis-mg-gateway"},"3.4 Start linkis-mg-gateway"),(0,a.kt)("p",null,"linkis-mg-gateway is the service gateway of Linkis, and all requests will be forwarded to the corresponding service through the gateway.\nBefore starting the server, you first need to edit the conf/linkis-mg-gateway.properties configuration file and add the administrator username and password. The username must be the same as the mac username you are currently logged in to."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"wds.linkis.admin.user=leojie\nwds.linkis.admin.password=123456\n")),(0,a.kt)("p",null,"Set the startup Application of linkis-mg-gateway"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"gateway-app",src:t(1163).Z,width:"2062",height:"1060"})),(0,a.kt)("p",null,"Parameter explanation:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"[Service Name]\nlinkis-mg-gateway\n\n[Use classpath of module]\nlinkis-gateway-server-support\n\n[VM Opitons]\n-DserviceName=linkis-mg-gateway -Xbootclasspath/a:{YourPathPrefix}/linkis/linkis-dist/package/conf\n\n[main Class]\norg.apache.linkis.gateway.springcloud.LinkisGatewayApplication\n")),(0,a.kt)("p",null,"After the above settings are completed, the Application can be run directly."),(0,a.kt)("h3",{id:"35-start-linkis-ps-publicservice"},"3.5 Start linkis-ps-publicservice"),(0,a.kt)("p",null,"publicservice is a public enhancement service of Linkis, a module that provides functions such as unified configuration management, context service, material library, data source management, microservice management and historical task query for other microservice modules."),(0,a.kt)("p",null,"Set the startup Application of linkis-ps-publicservice"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"publicservice-app",src:t(45081).Z,width:"2056",height:"1126"})),(0,a.kt)("p",null,"Parameter explanation:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'[Service Name]\nlinkis-ps-publicservice\n\n[Module Name]\nlinkis-public-enhancements\n\n[VM Opitons]\n-DserviceName=linkis-ps-publicservice -Xbootclasspath/a:{YourPathPrefix}/linkis/linkis-dist/package/conf\n\n[main Class]\norg.apache.linkis.filesystem.LinkisPublicServiceApp\n\n[Add provided scope to classpath]\nBy checking Include dependencies with "Provided" scope, you can introduce provided-level dependency packages during debugging.\n')),(0,a.kt)("p",null,"When starting publicservice directly, you may encounter the following errors:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"publicservice-debug-error",src:t(88211).Z,width:"2118",height:"500"})),(0,a.kt)("p",null,"You need to add the publicly dependent modules to the classpath of the linkis-public-enhancements module, and modify the pom of pes to add the following dependencies:\nlinkis-public-enhancements/pom.xml"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"}," <dependency>\n      <groupId>org.apache.linkis</groupId>\n      <artifactId>linkis-dist</artifactId>\n      <version>${project.version}</version>\n    </dependency>\n\n    <dependency>\n      <groupId>mysql</groupId>\n      <artifactId>mysql-connector-java</artifactId>\n      <version>${mysql.connector.version}</version>\n</dependency>\n\n")),(0,a.kt)("p",null,"After completing the above configuration, restart the Application of publicservice"),(0,a.kt)("h3",{id:"36-start-linkis-cg-linkismanager"},"3.6 Start linkis-cg-linkismanager"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"cg-linkismanager-APP",src:t(21186).Z,width:"2046",height:"1094"})),(0,a.kt)("p",null,"Parameter explanation:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'[Service Name]\nlinkis-cg-linkismanager\n\n[Use classpath of module]\nlinkis-application-manager\n\n[VM Opitons]\n-DserviceName=linkis-cg-linkismanager -Xbootclasspath/a:{YourPathPrefix}/linkis/linkis-dist/package/conf\n\n[main Class]\norg.apache.linkis.manager.am.LinkisManagerApplication\n\n[Add provided scope to classpath]\nBy checking Include dependencies with "Provided" scope, you can introduce provided-level dependency packages during debugging.\n')),(0,a.kt)("h3",{id:"37-start-linkis-cg-entrance"},"3.7 Start linkis-cg-entrance"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"cg-entrance-APP",src:t(4149).Z,width:"2062",height:"1134"})),(0,a.kt)("p",null,"Parameter explanation:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'[Service Name]\nlinkis-cg-entrance\n\n[Use classpath of module]\nlinkis-entrance\n\n[VM Opitons]\n-DserviceName=linkis-cg-entrance -Xbootclasspath/a:D:\\yourDir\\linkis\\linkis-dist\\package\\conf\n\n[main Class]\norg.apache.linkis.entrance.LinkisEntranceApplication\n\n[Add provided scope to classpath]\nBy checking Include dependencies with "Provided" scope, you can introduce provided-level dependency packages during debugging.\n')),(0,a.kt)("h3",{id:"38-start-linkis-cg-engineconnmanager"},"3.8 Start linkis-cg-engineconnmanager"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"engineconnmanager-app",src:t(87501).Z,width:"2064",height:"1118"})),(0,a.kt)("p",null,"Parameter explanation:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'[Service Name]\nlinkis-cg-engineconnmanager\n\n[Use classpath of module]\nlinkis-engineconn-manager-server\n\n[VM Opitons]\n-DserviceName=linkis-cg-engineconnmanager -Xbootclasspath/a:{YourPathPrefix}/linkis/linkis-dist/package/conf -DJAVA_HOME=/Library/Java/JavaVirtualMachines/zulu-8.jdk/Contents/Home/\n\n[main Class]\norg.apache.linkis.ecm.server.LinkisECMApplication\n\n[Add provided scope to classpath]\nBy checking Include dependencies with "Provided" scope, you can introduce provided-level dependency packages during debugging.\n')),(0,a.kt)("p",null,"-DJAVA_HOME is to specify the path of the java command used by ecm to start the engine. If the version in the default JAVA environment variable meets your needs, this configuration can be omitted."),(0,a.kt)("p",null,"Debugging the linkis-cg-engineconnmanager module only supports Mac OS and Linux systems."),(0,a.kt)("h3",{id:"39-key-configuration-modifications"},"3.9 Key Configuration Modifications"),(0,a.kt)("p",null,"The above operation only completes the configuration of the application startup of each Linkis microservice. In addition, in the configuration file loaded when the Linkis service starts, some key configurations also need to be modified in a targeted manner, otherwise the process of starting the service or script execution Some errors will be encountered. The key configuration modifications are summarized as follows:"),(0,a.kt)("h4",{id:"391-conflinkisproperties"},"3.9.1 conf/linkis.properties"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"# linkis underlying database connection parameter configuration\nwds.linkis.server.mybatis.datasource.url=jdbc:mysql://yourip:3306/linkis?characterEncoding=UTF-8\nwds.linkis.server.mybatis.datasource.username=your username\nwds.linkis.server.mybatis.datasource.password=your password\n\n# Set the bml material storage path to not hdfs\nwds.linkis.bml.is.hdfs=false\nwds.linkis.bml.local.prefix=/Users/leojie/software/linkis/data/bml\n\nwds.linkis.home=/Users/leojie/software/linkis\n\n# Set the administrator username, your local username\nwds.linkis.governance.station.admin=leojie\n\n# Set the prefer ip address\nlinkis.discovery.prefer-ip-address=true\n\n# Set the debug enable\nwds.linkis.engineconn.debug.enable=true\n")),(0,a.kt)("p",null,"Before configuring linkis underlying database connection parameters, please create linkis database and run linkis-dist/package/db/linkis_ddl.sql and linkis-dist/package/db/linkis_dml.sql to initialize all tables and data."),(0,a.kt)("p",null,"The directory structure of wds.linkis.home={YourPathPrefix}/linkis is as follows, only the lib directory and the conf directory are placed in it. When the engine process starts, the conf and lib paths in wds.linkis.home will be added to the classpath. If wds.linkis.home is not specified, an exception that the directory cannot be found may be encountered."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"linkis-home",src:t(30655).Z,width:"1448",height:"130"})),(0,a.kt)("h4",{id:"392-conflinkis-cg-entranceproperties"},"3.9.2 conf/linkis-cg-entrance.properties"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"# The log directory of the entrance service execution task\nwds.linkis.entrance.config.log.path=file:///{YourPathPrefix}/linkis/data/entranceConfigLog\n\n# The result set is saved in the directory, the local user needs read and write permissions\nwds.linkis.resultSet.store.path=file:///{YourPathPrefix}/linkis/data/resultSetDir\n")),(0,a.kt)("h4",{id:"393-conflinkis-cg-engineconnmanagerproperties"},"3.9.3 conf/linkis-cg-engineconnmanager.properties"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"wds.linkis.engineconn.root.dir={YourPathPrefix}/linkis/data/engineconnRootDir\n")),(0,a.kt)("p",null,"If you do not modify it, you may encounter an exception that the path does not exist."),(0,a.kt)("h4",{id:"394-conflinkis-cg-enginepluginproperties"},"3.9.4 conf/linkis-cg-engineplugin.properties"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"wds.linkis.engineconn.home={YourPathPrefix}/linkis/linkis-engineconn-plugins/shell/target/out\n\nwds.linkis.engineconn.plugin.loader.store.path={YourPathPrefix}/linkis/linkis-engineconn-plugins/shell/target/out\n")),(0,a.kt)("p",null,"The two configurations here are mainly to specify the root directory of the engine storage, and the main purpose of specifying it as target/out is that after the engine-related code or configuration changes, the engineplugin service can be restarted directly to take effect."),(0,a.kt)("h3",{id:"310-set-sudo-password-free-for-the-current-user"},"3.10 Set sudo password-free for the current user"),(0,a.kt)("p",null,"When the engine is started, sudo needs to be used to execute the shell command to start the engine process. The current user on the mac generally needs to enter a password when using sudo. Therefore, it is necessary to set the sudo password-free for the current user. The setting method is as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"sudo chmod u-w /etc/sudoers\nsudo visudo\nReplace #%admin ALL=(ALL) AL with %admin ALL=(ALL) NOPASSWD: ALL\nsave file exit\n")),(0,a.kt)("h3",{id:"311-service-test"},"3.11 Service Test"),(0,a.kt)("p",null,"Make sure that the above services are all successfully started, and then test and submit the shell script job in postman."),(0,a.kt)("p",null,"First visit the login interface to generate a cookie:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"login",src:t(48606).Z,width:"1680",height:"540"})),(0,a.kt)("p",null,"Then submit the shell code for execution"),(0,a.kt)("p",null,"POST: ",(0,a.kt)("a",{parentName:"p",href:"http://127.0.0.1:9001/api/rest_j/v1/entrance/submit"},"http://127.0.0.1:9001/api/rest_j/v1/entrance/submit")),(0,a.kt)("p",null,"body parameter:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "executionContent": {\n    "code": "echo \'hello\'",\n    "runType": "shell"\n  },\n  "params": {\n    "variable": {\n      "testvar": "hello"\n    },\n    "configuration": {\n      "runtime": {},\n      "startup": {}\n    }\n  },\n  "source": {\n    "scriptPath": "file:///tmp/hadoop/test.sql"\n  },\n  "labels": {\n    "engineType": "shell-1",\n    "userCreator": "leojie-IDE"\n  }\n}\n')),(0,a.kt)("p",null,"Results of the:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "method": "/api/entrance/submit",\n    "status": 0,\n    "message": "OK",\n    "data": {\n        "taskID": 1,\n        "execID": "exec_id018017linkis-cg-entrance127.0.0.1:9104IDE_leojie_shell_0"\n    }\n}\n')),(0,a.kt)("p",null,"Finally, check the running status of the task and get the running result set:"),(0,a.kt)("p",null,"GET ",(0,a.kt)("a",{parentName:"p",href:"http://127.0.0.1:9001/api/rest_j/v1/entrance/exec_id018017linkis-cg-entrance127.0.0.1:9104IDE_leojie_shell_0/progress"},"http://127.0.0.1:9001/api/rest_j/v1/entrance/exec_id018017linkis-cg-entrance127.0.0.1:9104IDE_leojie_shell_0/progress")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "method": "/api/entrance/exec_id018017linkis-cg-entrance127.0.0.1:9104IDE_leojie_shell_0/progress",\n    "status": 0,\n    "message": "OK",\n    "data": {\n        "progress": 1,\n        "progressInfo": [],\n        "execID": "exec_id018017linkis-cg-entrance127.0.0.1:9104IDE_leojie_shell_0"\n    }\n}\n')),(0,a.kt)("p",null,"GET ",(0,a.kt)("a",{parentName:"p",href:"http://127.0.0.1:9001/api/rest_j/v1/jobhistory/1/get"},"http://127.0.0.1:9001/api/rest_j/v1/jobhistory/1/get")),(0,a.kt)("p",null,"GET ",(0,a.kt)("a",{parentName:"p",href:"http://127.0.0.1:9001/api/rest_j/v1/filesystem/openFile?path=file:///Users/leojie/software/linkis/data/resultSetDir/leojie/linkis/2022-07-16/"},"http://127.0.0.1:9001/api/rest_j/v1/filesystem/openFile?path=file:///Users/leojie/software/linkis/data/resultSetDir/leojie/linkis/2022-07-16/")," 214859/IDE/1/1_0.dolphin"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "method": "/api/filesystem/openFile",\n    "status": 0,\n    "message": "OK",\n    "data": {\n        "metadata": "NULL",\n        "totalPage": 0,\n        "totalLine": 1,\n        "page": 1,\n        "type": "1",\n        "fileContent": [\n            [\n                "hello"\n            ]\n        ]\n    }\n}\n')),(0,a.kt)("h2",{id:"4-remote-debugging-service-guide"},"4. Remote debugging service guide"),(0,a.kt)("h3",{id:"41-open-the-remote-debugging-port"},"4.1 Open the remote debugging port"),(0,a.kt)("p",null,"Identify the service where the package that needs to be debugged is located, and determine the service to which it belongs according to the location of the code to be debugged"),(0,a.kt)("h3",{id:"42-enter-linkis_homesbinext-modify-the-module-configuration-file-to-open-the-remote-call-port"},"4.2 Enter ${LINKIS_HOME}/sbin/ext, modify the module configuration file to open the remote call port"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"c-port",src:t(5022).Z,width:"653",height:"236"})),(0,a.kt)("h3",{id:"43-restart-the-service-that-needs-to-be-debugged"},"4.3 Restart the service that needs to be debugged"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"sh linkis-daemon.sh restart ps-publicservice\n")),(0,a.kt)("p",null,"(If you are not sure about the service name, check in ${LINKIS_HOME}/sbin/linkis-start-all.sh )"),(0,a.kt)("h3",{id:"44-compiler-configuration-remote-debugging"},"4.4 Compiler configuration remote debugging"),(0,a.kt)("p",null,"Open the window as shown below and configure the remote debugging port, service, and module\n",(0,a.kt)("img",{alt:"c-debug",src:t(83220).Z,width:"1047",height:"703"})),(0,a.kt)("h3",{id:"45-start-debugging"},"4.5 Start debugging"),(0,a.kt)("p",null,"Click the debug button, and the following information appears, indicating that you can start debugging\n",(0,a.kt)("img",{alt:"debug",src:t(84329).Z,width:"1339",height:"631"})))}u.isMDXComponent=!0},83220:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/c-debug-3f79fbf39fb7c59a4b24d8cb4c38857d.png"},5022:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/c-port-a72db513ea540a74ce7804735c2dbba9.png"},84329:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/debug-c8c33e7646736309d970a37ec9229e59.png"},4149:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/cg-entrance-APP-f0c937755fc868ac51548de8e5c790d5.png"},21186:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/cg-linkismanager-APP-e49c0332d64c00dcd142db174b63c680.png"},87501:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/engineconnmanager-app-cfc54344d2615db56fdaf790af6b7050.png"},34432:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/eureka-web-2376b442cf152211c2281756f7ad5bf4.png"},46988:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/eureka-b5633ec1272b5fd4416cd71c92fbe6e1.png"},1163:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/gateway-daa58482c3f13ea3e0929051a0586ce4.png"},30655:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/linkis-home-773bce7056eb86683dfecbd1862c0283.png"},22269:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/log4j-a8e64d5a053e47ea50ba44f512b6e3ab.png"},48606:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/login-84e518976ef0b4fec8701c02d3aa072e.png"},88211:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/publicservice-debug-error-cf31cfa4d3006a760b65e69f97632072.png"},45081:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/publicservice-d20c48a47309a442fc16e33699d71ed1.png"}}]);