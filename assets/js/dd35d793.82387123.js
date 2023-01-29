"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[90782],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>u});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),p=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=p(e.components);return o.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(t),u=r,y=m["".concat(s,".").concat(u)]||m[u]||c[u]||i;return t?o.createElement(y,a(a({ref:n},d),{},{components:t})):o.createElement(y,a({ref:n},d))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var p=2;p<i;p++)a[p]=t[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},63626:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var o=t(87462),r=(t(67294),t(3905));const i={title:"Console Deployment",sidebar_position:1.2},a=void 0,l={unversionedId:"deployment/deploy-console",id:"deployment/deploy-console",title:"Console Deployment",description:"Linkis 1.0 provides a Linkis Console, which provides functions such as displaying Linkis' global history, modifying user parameters, managing ECM and microservices, etc. Before deploying the front-end management console, you need to deploy the Linkis back-end. Linkis deployment manual See: Linkis Deployment Manual",source:"@site/docs/deployment/deploy-console.md",sourceDirName:"deployment",slug:"/deployment/deploy-console",permalink:"/docs/1.3.2/deployment/deploy-console",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/docs/deployment/deploy-console.md",tags:[],version:"current",sidebarPosition:1.2,frontMatter:{title:"Console Deployment",sidebar_position:1.2},sidebar:"tutorialSidebar",previous:{title:"Cluster Deployment",permalink:"/docs/1.3.2/deployment/deploy-cluster"},next:{title:"Installation EngineConn Plugin",permalink:"/docs/1.3.2/deployment/install-engineconn"}},s={},p=[{value:"1. Preparation",id:"1-preparation",level:2},{value:"2. Deployment",id:"2-deployment",level:2},{value:"2.1 Automated deployment",id:"21-automated-deployment",level:3},{value:"2.1.1 modify config.sh file (use vim or nano)",id:"211-modify-configsh-file-use-vim-or-nano",level:4},{value:"2.1.2 execute deployment script",id:"212-execute-deployment-script",level:4},{value:"2.2 Manual deployment",id:"22-manual-deployment",level:3},{value:"3. Common problems",id:"3-common-problems",level:2}],d={toc:p};function c(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"The linkis web service uses nginx as a static resource server. The access request process is as follows :\nLinkis Management Console request -> Nginx ip:port-> Linkis-gateway ip:port-> Other services\n")),(0,r.kt)("p",null,"Linkis 1.0 provides a Linkis Console, which provides functions such as displaying Linkis' global history, modifying user parameters, managing ECM and microservices, etc. Before deploying the front-end management console, you need to deploy the Linkis back-end. Linkis deployment manual See: ",(0,r.kt)("a",{parentName:"p",href:"/docs/1.3.2/deployment/deploy-quick"},"Linkis Deployment Manual")),(0,r.kt)("h2",{id:"1-preparation"},"1. Preparation"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Download the web installation package from the release page of Linkis (",(0,r.kt)("a",{parentName:"li",href:"https://linkis.apache.org/download/main/"},"click here to enter the download page"),"), apache-linkis-xxx-incubating-web-bin. tar.gz\nManually decompress: tar -xvf apache-linkis-x.x.x-incubating-web-bin.tar.gz")),(0,r.kt)("p",null,"The decompression directory is as follows."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u251c\u2500\u2500 config.sh\n\u251c\u2500\u2500 dist\n\u251c\u2500\u2500 install.sh\n\u251c\u2500\u2500 LICENSE\n\u251c\u2500\u2500 licenses\n\u2514\u2500\u2500 NOTICE\n")),(0,r.kt)("h2",{id:"2-deployment"},"2. Deployment"),(0,r.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","There are two deployment methods, automated deployment and manual deployment"),(0,r.kt)("h3",{id:"21-automated-deployment"},"2.1 Automated deployment"),(0,r.kt)("h4",{id:"211-modify-configsh-file-use-vim-or-nano"},"2.1.1 modify config.sh file (use vim or nano)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-$xslt"},'#Configuring front-end ports\nlinkis_port="8088"\n\n#URL of the backend linkis gateway\nlinkis_url="http://localhost:9001"\n\n#linkis ip address, replace `127.0.0.1` to real ip address if neccssary\nlinkis_ipaddr=127.0.0.1\n')),(0,r.kt)("h4",{id:"212-execute-deployment-script"},"2.1.2 execute deployment script"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"   #sudo permission is required to install nginx\n   sudo sh install.sh \n")),(0,r.kt)("p",null,"After execution, you can directly access it in Google browser: ",(0,r.kt)("inlineCode",{parentName:"p"},"http://linkis_ipaddr:linkis_port")," where linkis_port is the port configured in config.sh, and linkis_ipaddr is the IP of the installation machine"),(0,r.kt)("p",null,"If the access fails: You can check the installation log which step went wrong"),(0,r.kt)("h3",{id:"22-manual-deployment"},"2.2 Manual deployment"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install Nginx: ",(0,r.kt)("inlineCode",{parentName:"p"},"sudo yum install nginx -y"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Modify the configuration file: sudo vi /etc/nginx/conf.d/linkis.conf\nAdd the following content:"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"server {\n            listen 8080;# access port\n            server_name localhost;\n            #charset koi8-r;\n            #access_log /var/log/nginx/host.access.log main;\n            location / {\n            root /appcom/Install/linkis/dist; # The directory where the front-end package is decompressed\n            index index.html index.html;\n            }\n          \n            location /api {\n            proxy_pass http://192.168.xxx.xxx:9001; # ip port of linkis-gateway service\n            proxy_set_header Host $host;\n            proxy_set_header X-Real-IP $remote_addr;\n            proxy_set_header x_real_ipP $remote_addr;\n            proxy_set_header remote_addr $remote_addr;\n            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n            proxy_http_version 1.1;\n            proxy_connect_timeout 4s;\n            proxy_read_timeout 600s;\n            proxy_send_timeout 12s;\n            proxy_set_header Upgrade $http_upgrade;\n            proxy_set_header Connection upgrade;\n            }\n            #error_page 404 /404.html;\n            # redirect server error pages to the static page /50x.html\n            #\n            error_page 500 502 503 504 /50x.html;\n            location = /50x.html {\n            root /usr/share/nginx/html;\n            }\n        }\n\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Copy the front-end package to the corresponding directory: ",(0,r.kt)("inlineCode",{parentName:"p"},"/appcom/Install/linkis/dist; # The directory where the front-end package is decompressed "))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Start the service ",(0,r.kt)("inlineCode",{parentName:"p"},"sudo systemctl restart nginx"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"After execution, you can directly access it in Google browser: ",(0,r.kt)("inlineCode",{parentName:"p"},"http://nginx_ip:nginx_port")))),(0,r.kt)("h2",{id:"3-common-problems"},"3. Common problems"),(0,r.kt)("p",null,"(1) Upload file size limit"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo vi /etc/nginx/nginx.conf\n")),(0,r.kt)("p",null,"Change upload size"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"client_max_body_size 200m\n")),(0,r.kt)("p",null," (2) Interface timeout"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo vi /etc/nginx/conf.d/linkis.conf\n")),(0,r.kt)("p",null,"Change interface timeout"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"proxy_read_timeout 600s\n")))}c.isMDXComponent=!0}}]);