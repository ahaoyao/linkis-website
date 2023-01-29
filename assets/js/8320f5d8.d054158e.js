"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[66435],{3905:(e,n,i)=>{i.d(n,{Zo:()=>p,kt:()=>d});var a=i(67294);function t(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function s(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,a)}return i}function l(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?s(Object(i),!0).forEach((function(n){t(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function o(e,n){if(null==e)return{};var i,a,t=function(e,n){if(null==e)return{};var i,a,t={},s=Object.keys(e);for(a=0;a<s.length;a++)i=s[a],n.indexOf(i)>=0||(t[i]=e[i]);return t}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)i=s[a],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(t[i]=e[i])}return t}var r=a.createContext({}),c=function(e){var n=a.useContext(r),i=n;return e&&(i="function"==typeof e?e(n):l(l({},n),e)),i},p=function(e){var n=c(e.components);return a.createElement(r.Provider,{value:n},e.children)},g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var i=e.components,t=e.mdxType,s=e.originalType,r=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(i),d=t,k=u["".concat(r,".").concat(d)]||u[d]||g[d]||s;return i?a.createElement(k,l(l({ref:n},p),{},{components:i})):a.createElement(k,l({ref:n},p))}));function d(e,n){var i=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var s=i.length,l=new Array(s);l[0]=u;var o={};for(var r in n)hasOwnProperty.call(n,r)&&(o[r]=n[r]);o.originalType=e,o.mdxType="string"==typeof e?e:t,l[1]=o;for(var c=2;c<s;c++)l[c]=i[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,i)}u.displayName="MDXCreateElement"},29953:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var a=i(87462),t=(i(67294),i(3905));const s={title:"Linkis Debug",sidebar_position:2},l="Debugging related",o={unversionedId:"development/linkis-debug",id:"version-1.0.3/development/linkis-debug",title:"Linkis Debug",description:"Because linkis itself has many modules, it is difficult to debug, the following will guide you how to perform a local service debugging (based on version 1.0.3).",source:"@site/versioned_docs/version-1.0.3/development/linkis-debug.md",sourceDirName:"development",slug:"/development/linkis-debug",permalink:"/docs/1.0.3/development/linkis-debug",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/versioned_docs/version-1.0.3/development/linkis-debug.md",tags:[],version:"1.0.3",sidebarPosition:2,frontMatter:{title:"Linkis Debug",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Compile And Package",permalink:"/docs/1.0.3/development/linkis-compile-and-package"},next:{title:"How To Quickly Implement A New Engine",permalink:"/docs/1.0.3/development/new-engine-conn"}},r={},c=[{value:"step 1 Prepare source code and compile",id:"step-1-prepare-source-code-and-compile",level:2},{value:"step2 Necessary parameter configuration",id:"step2-necessary-parameter-configuration",level:2},{value:"step3 Adjust log4j.xml configuration",id:"step3-adjust-log4jxml-configuration",level:2},{value:"step 4 Overall debugging plan",id:"step-4-overall-debugging-plan",level:2},{value:"Start of linkis-mg-eureka",id:"start-of-linkis-mg-eureka",level:3},{value:"Linkis-mg-gateway startup configuration",id:"linkis-mg-gateway-startup-configuration",level:3},{value:"Linkis-ps-publicservice startup configuration",id:"linkis-ps-publicservice-startup-configuration",level:3},{value:"Linkis-ps-cs startup configuration",id:"linkis-ps-cs-startup-configuration",level:3},{value:"linkis-cg-linkismanager start",id:"linkis-cg-linkismanager-start",level:3},{value:"linkis-cg-entrance start",id:"linkis-cg-entrance-start",level:3},{value:"Remote debugging service steps",id:"remote-debugging-service-steps",level:2}],p={toc:c};function g(e){let{components:n,...s}=e;return(0,t.kt)("wrapper",(0,a.Z)({},p,s,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"debugging-related"},"Debugging related"),(0,t.kt)("blockquote",null,(0,t.kt)("p",{parentName:"blockquote"},"Because linkis itself has many modules, it is difficult to debug, the following will guide you how to perform a local service debugging (based on version 1.0.3).")),(0,t.kt)("h4",null,(0,t.kt)("font",{color:"red"},"Before version 1.0.3, linkis has not yet entered apache incubation. The organization still belongs to webank. The package name of the main class is `org.apache.linkis`. Pay attention to the distinction when debugging. ")),(0,t.kt)("h2",{id:"step-1-prepare-source-code-and-compile"},"step 1 Prepare source code and compile"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-plain"},"git clone https://github.com/apache/linkis.git\ncd linkis\n#If needed, you can switch to the corresponding branch\n#git checkout dev-xxx\nmvn -N install\nmvn clean install\n")),(0,t.kt)("h2",{id:"step2-necessary-parameter-configuration"},"step2 Necessary parameter configuration"),(0,t.kt)("p",null,"For the configuration file under linkis/assembly-combined-package/assembly-combined/conf/, you need to configure the database and hive meta and other necessary startup parameters."),(0,t.kt)("h2",{id:"step3-adjust-log4jxml-configuration"},"step3 Adjust log4j.xml configuration"),(0,t.kt)("p",null,"In order to facilitate the printing of logs to the console during debugging, you need to modify the default log4j2.xml file and modify the appender to default to console. You need to remove the append of the default RollingFile and add the appender of the console, as shown below:\n",(0,t.kt)("img",{src:i(94952).Z,width:"1890",height:"690"}),"\nlog4j2.xml path linkis/assembly-combined-package/assembly-combined/conf/log4j2.xml"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-plain"},' <?xml version="1.0" encoding="UTF-8"?>\n<configuration status="error" monitorInterval="30">\n<appenders>\n    <RollingFile name="RollingFile" append="false" fileName="logs/${sys:serviceName}.log"\n                 filePattern="logs/$${date:yyyy-MM}/${sys:serviceName}/linkis-log-%d{yyyy-MM-dd}-%i.log">\n        <PatternLayout pattern="%d{yyyy-MM-dd HH:mm:ss.SSS} [%-5level] [%-40t] %c{1.} (%L) [%M]-%msg%xEx %n"/>\n        <SizeBasedTriggeringPolicy size="100MB"/>\n        <DefaultRolloverStrategy max="10"/>\n    </RollingFile>\n    \n    <Console name="Console" target="SYSTEM_OUT">\n        <ThresholdFilter level="INFO" onMatch="ACCEPT" onMismatch="DENY"/>\n        <PatternLayout pattern="%d{yyyy-MM-dd HH:mm:ss.SSS} %-5level [%t] %logger{36} %L %M-%msg%xEx%n"/>\n    </Console>\n</appenders>\n<loggers>\n    <root level="INFO">\n        <appender-ref ref="RollingFile"/>\n        <appender-ref ref="Console"/>\n    </root>\n</loggers>\n</configuration>\n')),(0,t.kt)("h2",{id:"step-4-overall-debugging-plan"},"step 4 Overall debugging plan"),(0,t.kt)("p",null,"Both Linkis and DSS services rely on Eureka, so you need to start the Eureka service first, and the Eureka service can also use the Eureka you have started. After Eureka is started, other services can be started."),(0,t.kt)("p",null,"Because linkis internally uses the -DserviceName parameter to set the application name and the configuration file used, so -DserviceName is a necessary startup VM parameter"),(0,t.kt)("p",null,'You can use the "-Xbootclasspath/a: configuration file path" command. Append the configuration file to the end of the search path of the bootloader class, and add the dependent configuration file to the classpath'),(0,t.kt)("p",null,'By checking Include dependencies with "Provided" scope, you can introduce provided-level dependency packages during debugging.'),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Microservice Governance Services component")),(0,t.kt)("h3",{id:"start-of-linkis-mg-eureka"},"Start of linkis-mg-eureka"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-plain"},"[main Class]\norg.apache.linkis.eureka.SpringCloudEurekaApplication\n\n[VM Opitons]\n-DserviceName=linkis-mg-eureka -Xbootclasspath/a:D:\\yourDir\\linkis\\assembly-combined-package\\assembly-combined\\conf\n\n[Program arguments]\n--spring.profiles.active=eureka --eureka.instance.preferIpAddress=true\n\n[User classpath of module]\nlinkis-eureka\n")),(0,t.kt)("p",null,"If you don\u2019t want the default port 20303, you can modify the port configuration:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-yml"},"File path: conf/application-eureka.yml\nModify the port:\nserver:\n  port: 8080 ##Started port\n")),(0,t.kt)("p",null,"The specific configuration is as follows\n",(0,t.kt)("img",{src:i(44118).Z,width:"1060",height:"684"})),(0,t.kt)("p",null,"After startup, you can view the list of eureka services through ",(0,t.kt)("a",{parentName:"p",href:"http://localhost:20303/"},"http://localhost:20303/"),"\n",(0,t.kt)("img",{src:i(1370).Z,width:"1901",height:"960"})),(0,t.kt)("h3",{id:"linkis-mg-gateway-startup-configuration"},"Linkis-mg-gateway startup configuration"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-plain"},"[main Class]\norg.apache.linkis.gateway.springcloud.LinkisGatewayApplication\n\n[VM Opitons]\n-DserviceName=linkis-mg-gateway -Xbootclasspath/a:D:\\yourDir\\linkis\\assembly-combined-package\\assembly-combined\\conf\n\n[User classpath of module]\nlinkis-gateway-server-support\n\n")),(0,t.kt)("p",null,"Note If there is a problem of'org.apache.logging.log4j.LoggingException: log4j-slf4j-impl cannot be present with log4j-to-slf4j'\nPlease exclude, the dependency on spring-boot-starter-logging"),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Public Enhancement Services component")),(0,t.kt)("h3",{id:"linkis-ps-publicservice-startup-configuration"},"Linkis-ps-publicservice startup configuration"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-plain"},"[main Class]\norg.apache.linkis.jobhistory.LinkisPublicServiceApp\n\n[VM Opitons]\n-DserviceName=linkis-ps-publicservice -Xbootclasspath/a:D:\\yourDir\\linkis\\assembly-combined-package\\assembly-combined\\conf\n\n[User classpath of module]\nlinkis-jobhistory\n")),(0,t.kt)("h3",{id:"linkis-ps-cs-startup-configuration"},"Linkis-ps-cs startup configuration"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-plain"},"[main Class]\norg.apache.linkis.cs.server.LinkisCSApplication\n\n[VM Opitons]\n-DserviceName=linkis-ps-cs -Xbootclasspath/a:D:\\yourDir\\linkis\\assembly-combined-package\\assembly-combined\\conf\n\n[User classpath of module]\nlinkis-cs-server\n\n")),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Computation Governance Services component")),(0,t.kt)("h3",{id:"linkis-cg-linkismanager-start"},"linkis-cg-linkismanager start"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-plain"},"[main Class]\norg.apache.linkis.manager.am.LinkisManagerApplication\n\n[VM Opitons]\n-DserviceName=linkis-cg-linkismanager -Xbootclasspath/a:D:\\yourDir\\linkis\\assembly-combined-package\\assembly-combined\\conf\n\n[User classpath of module]\nlinkis-application-manager\n")),(0,t.kt)("h3",{id:"linkis-cg-entrance-start"},"linkis-cg-entrance start"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-plain"},"[main Class]\norg.apache.linkis.entrance.LinkisEntranceApplication\n\n[VM Opitons]\n-DserviceName=linkis-cg-entrance -Xbootclasspath/a:D:\\yourDir\\linkis\\assembly-combined-package\\assembly-combined\\conf\n\n[User classpath of module]\nlinkis-entrance\n")),(0,t.kt)("h4",null,(0,t.kt)("font",{color:"red"},"Note: Windows local debugging service is not currently supported")),(0,t.kt)("p",null,"linkis-cg-engineplugin(ecp): Need to read local ecp materials, local debugging needs to prepare the corresponding materials first, it is recommended to debug remotely"),(0,t.kt)("p",null,"linkis-cg-engineconnmanager(ecm): temporarily ecm starts the engine using the unix method and does not support the windows environment"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"The following are the specific detailed command parameters for starting the linkis service after a normal and successful installation\n\nLinkisInstallDir: complete linkis installation directory\n\n[linkis-mg-eureka]\nnohup java -DserviceName=linkis-mg-eureka -Xmx512M -XX:+UseG1GC -Xloggc:/data/LinkisInstallDir/logs/linkis-mg-eureka-gc.log -cp /data/LinkisInstallDir/conf/:/data/LinkisInstallDir /lib/linkis-spring-cloud-services/linkis-mg-eureka/* org.apache.linkis.eureka.SpringCloudEurekaApplication --eureka.instance.hostname=localhost110001 --spring.profiles.active=eureka 2>&1> / data/LinkisInstallDir/logs/linkis-mg-eureka.out &\n\n[linkis-mg-gateway]\nnohup java -DserviceName=linkis-mg-gateway -Xmx512M -XX:+UseG1GC -Xloggc:/data/LinkisInstallDir/logs/linkis-mg-gateway-gc.log -cp /data/LinkisInstallDir/conf/:/data/LinkisInstallDir /lib/linkis-spring-cloud-services/linkis-mg-gateway/* org.apache.linkis.gateway.springcloud.LinkisGatewayApplication 2>&1> /data/LinkisInstallDir/logs/linkis-mg-gateway.out &\n\n[linkis-ps-publicservice]\nnohup java -DserviceName=linkis-ps-publicservice -Xmx512M -XX:+UseG1GC -Xloggc:/data/LinkisInstallDir/logs/linkis-ps-publicservice-gc.log -cp /data/LinkisInstallDir/conf/:/data/LinkisInstallDir /lib/linkis-commons/public-module/*:/data/LinkisInstallDir/lib/linkis-public-enhancements/linkis-ps-publicservice/* org.apache.linkis.jobhistory.LinkisPublicServiceApp 2>&1> /data/LinkisInstallDir /logs/linkis-ps-publicservice.out &\n\n[linkis-cg-linkismanager]\nnohup java -DserviceName=linkis-cg-linkismanager -Xmx512M -XX:+UseG1GC -Xloggc:/data/LinkisInstallDir/logs/linkis-cg-linkismanager-gc.log -cp /data/LinkisInstallDir/conf/:/data/LinkisInstallDir /lib/linkis-commons/public-module/*:/data/LinkisInstallDir/lib/linkis-computation-governance/linkis-cg-linkismanager/* org.apache.linkis.manager.am.LinkisManagerApplication 2>&1> /data /LinkisInstallDir/logs/linkis-cg-linkismanager.out &\n\n[linkis-ps-cs]\nnohup java -DserviceName=linkis-ps-cs -Xmx512M -XX:+UseG1GC -Xloggc:/data/LinkisInstallDir/logs/linkis-ps-cs-gc.log -cp /data/LinkisInstallDir/conf/:/data/LinkisInstallDir /lib/linkis-commons/public-module/*:/data/LinkisInstallDir/lib/linkis-public-enhancements/linkis-ps-cs/* org.apache.linkis.cs.server.LinkisCSApplication 2>&1> /data /LinkisInstallDir/logs/linkis-ps-cs.out &\n\n[linkis-cg-entrance]\nnohup java -DserviceName=linkis-cg-entrance -Xmx512M -XX:+UseG1GC -Xloggc:/data/LinkisInstallDir/logs/linkis-cg-entrance-gc.log -cp /data/LinkisInstallDir/conf/:/data/LinkisInstallDir /lib/linkis-commons/public-module/*:/data/LinkisInstallDir/lib/linkis-computation-governance/linkis-cg-entrance/* org.apache.linkis.entrance.LinkisEntranceApplication 2>&1> /data/LinkisInstallDir /logs/linkis-cg-entrance.out &\n\n[linkis-cg-engineconnmanager]\nnohup java -DserviceName=linkis-cg-engineconnmanager -Xmx512M -XX:+UseG1GC -Xloggc:/data/LinkisInstallDir/logs/linkis-cg-engineconnmanager-gc.log -cp /data/LinkisInstallDir/conf/:/data/LinkisInstallDir /lib/linkis-commons/public-module/*:/data/LinkisInstallDir/lib/linkis-computation-governance/linkis-cg-engineconnmanager/* org.apache.linkis.ecm.server.LinkisECMApplication 2>&1> /data /LinkisInstallDir/logs/linkis-cg-engineconnmanager.out &\n\n[linkis-cg-engineplugin]\nnohup java -DserviceName=linkis-cg-engineplugin -Xmx512M -XX:+UseG1GC -Xloggc:/data/LinkisInstallDir/logs/linkis-cg-engineplugin-gc.log -cp /data/LinkisInstallDir/conf/:/data/LinkisInstallDir /lib/linkis-commons/public-module/*:/data/LinkisInstallDir/lib/linkis-computation-governance/linkis-cg-engineplugin/* org.apache.linkis.engineplugin.server.LinkisEngineConnPluginServer 2>&1> /data /LinkisInstallDir/logs/linkis-cg-engineplugin.out &\n")),(0,t.kt)("h2",{id:"remote-debugging-service-steps"},"Remote debugging service steps"),(0,t.kt)("p",null,"todo"))}g.isMDXComponent=!0},44118:(e,n,i)=>{i.d(n,{Z:()=>a});const a=i.p+"assets/images/debug_application-86cec1114b39f4b3062a9ee0f012f70c.png"},1370:(e,n,i)=>{i.d(n,{Z:()=>a});const a=i.p+"assets/images/debug_eureka-37fd89e3fa3b354ee4dcf046e847fd12.png"},94952:(e,n,i)=>{i.d(n,{Z:()=>a});const a=i.p+"assets/images/debug_log-0a9fd2e59cff71b638015d97369aa9ea.png"}}]);