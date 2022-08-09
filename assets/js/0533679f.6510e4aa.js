"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[51576],{3905:function(t,e,a){a.d(e,{Zo:function(){return s},kt:function(){return c}});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function d(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var u=r.createContext({}),o=function(t){var e=r.useContext(u),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},s=function(t){var e=o(t.components);return r.createElement(u.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,u=t.parentName,s=d(t,["components","mdxType","originalType","parentName"]),p=o(a),c=n,k=p["".concat(u,".").concat(c)]||p[c]||m[c]||l;return a?r.createElement(k,i(i({ref:e},s),{},{components:a})):r.createElement(k,i({ref:e},s))}));function c(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=p;var d={};for(var u in e)hasOwnProperty.call(e,u)&&(d[u]=e[u]);d.originalType=t,d.mdxType="string"==typeof t?t:n,i[1]=d;for(var o=2;o<l;o++)i[o]=a[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},8450:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return d},contentTitle:function(){return u},metadata:function(){return o},toc:function(){return s},default:function(){return p}});var r=a(87462),n=a(63366),l=(a(67294),a(3905)),i=["components"],d={title:"Data Source Management Service Architecture",sidebar_position:3},u=void 0,o={unversionedId:"architecture/public-enhancement-services/datasource-manager",id:"version-1.1.2/architecture/public-enhancement-services/datasource-manager",isDocsHomePage:!1,title:"Data Source Management Service Architecture",description:"Background",source:"@site/versioned_docs/version-1.1.2/architecture/public-enhancement-services/datasource-manager.md",sourceDirName:"architecture/public-enhancement-services",slug:"/architecture/public-enhancement-services/datasource-manager",permalink:"/docs/latest/architecture/public-enhancement-services/datasource-manager",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/versioned_docs/version-1.1.2/architecture/public-enhancement-services/datasource-manager.md",tags:[],version:"1.1.2",sidebarPosition:3,frontMatter:{title:"Data Source Management Service Architecture",sidebar_position:3},sidebar:"version-1.1.2/tutorialSidebar",previous:{title:"CS Search Architecture",permalink:"/docs/latest/architecture/public-enhancement-services/context-service/context-service-search"},next:{title:"Data Source Management Service Architecture",permalink:"/docs/latest/architecture/public-enhancement-services/metadata-manager"}},s=[{value:"Background",id:"background",children:[]},{value:"Architecture Diagram",id:"architecture-diagram",children:[]},{value:"Architecture Description",id:"architecture-description",children:[{value:"Core Process",id:"core-process",children:[]}]},{value:"Entity Object",id:"entity-object",children:[]},{value:"<strong>Database Design</strong>",id:"database-design",children:[]}],m={toc:s};function p(t){var e=t.components,d=(0,n.Z)(t,i);return(0,l.kt)("wrapper",(0,r.Z)({},m,d,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"background"},"Background"),(0,l.kt)("p",null,"Exchangis0.x and Linkis0.x in earlier versions both have integrated data source modules. In order to manage the ability to reuse data sources, Linkis reconstructs the data source module based on linkis-datasource (refer to related documents), and converts the data source Management unpacks into data source management services and metadata management services\u3002"),(0,l.kt)("p",null,"This article mainly involves the DataSource Manager Server data source management service, which provides the following functions:"),(0,l.kt)("p",null,"1\uff09\u3001Linkis unified management service startup and deployment, does not increase operation and maintenance costs, reuse Linkis service capabilities;"),(0,l.kt)("p",null,"2\uff09\u3001Provide management services of graphical interface through Linkis Web. The interface provides management services such as new data source, data source query, data source update, connectivity test and so on;"),(0,l.kt)("p",null,"3\uff09\u3001 the service is stateless, multi-instance deployment, so that the service is highly available. When the system is deployed, multiple instances can be deployed. Each instance provides services independently to the outside world without interfering with each other. All information is stored in the database for sharing."),(0,l.kt)("p",null,"4\uff09\u3001Provide full life cycle management of data sources, including new, query, update, test, and expiration management."),(0,l.kt)("p",null,"5\uff09\u3001Multi-version data source management, historical data sources will be saved in the database, and data source expiration management is provided. "),(0,l.kt)("p",null,"6\uff09\u3001The Restful interface provides functions, a detailed list: data source type query, data source detailed information query, data source information query based on version, data source version query, get data source parameter list, multi-dimensional data source search, get data source environment query and Update, add data source, data source parameter configuration, data source expiration setting, data source connectivity test."),(0,l.kt)("h2",{id:"architecture-diagram"},"Architecture Diagram"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"datasource Architecture diagram",src:a(74608).Z})),(0,l.kt)("h2",{id:"architecture-description"},"Architecture Description"),(0,l.kt)("p",null,"1\u3001The service is registered in the Linkis-Eureak-Service service and managed in a unified manner with other Linkis microservices. The client can obtain the data source management service by connecting the Linkis-GateWay-Service service and the service name data-source-manager."),(0,l.kt)("p",null,"2\u3001The interface layer provides other applications through the Restful interface, providing additions, deletions, and changes to data sources and data source environments, data source link and dual link tests, data source version management and expiration operations;"),(0,l.kt)("p",null,"3\u3001The Service layer is mainly for the service management of the database and the material library, and permanently retains the relevant information of the data source;"),(0,l.kt)("p",null,"4\u3001The link test of the data source is done through the linkis metastore server service, which now provides the mysql\\es\\kafka\\hive service"),(0,l.kt)("h3",{id:"core-process"},"Core Process"),(0,l.kt)("p",null,"1\u3001To create a new data source, firstly, the user of the new data source will be obtained from the request to determine whether the user is valid. The next step will be to verify the relevant field information of the data source. The data source name and data source type cannot be empty. The data source name is used to confirm whether the data source exists. If it does not exist, it will be inserted in the database, and the data source ID number will be returned."),(0,l.kt)("p",null,"2\u3001 To update the data source, firstly, the user of the new data source will be obtained from the request to determine whether the user is valid. The next step will be to verify the relevant field information of the new data source. The data source name and data source type cannot be empty. It will confirm whether the data source exists according to the data source ID number. If it does not exist, an exception will be returned. If it exists, it will be further judged whether the user has update permission for the data source. The user is the administrator or the owner of the data source. Only have permission to update. If you have permission, the data source will be updated and the data source ID will be returned."),(0,l.kt)("p",null,"3\u3001 To update the data source parameters, firstly, the user of the new data source will be obtained from the request to determine whether the user is valid, and the detailed data source information will be obtained according to the passed parameter data source ID, and then it will be determined whether the user is the owner of the changed data source or not. For the administrator, if there is any, the modified parameters will be further verified, and the parameters will be updated after passing, and the versionId will be returned."),(0,l.kt)("h2",{id:"entity-object"},"Entity Object"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Class Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Describe"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DataSourceType"),(0,l.kt)("td",{parentName:"tr",align:null},"Indicates the type of data source")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DataSourceParamKeyDefinition"),(0,l.kt)("td",{parentName:"tr",align:null},"Declare data source property configuration definitions")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DataSource"),(0,l.kt)("td",{parentName:"tr",align:null},"Data source object entity class, including permission tags and attribute configuration definitions")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DataSourceEnv"),(0,l.kt)("td",{parentName:"tr",align:null},"Data source environment object entity class, which also contains attribute configuration definitions")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DataSourceParameter"),(0,l.kt)("td",{parentName:"tr",align:null},"Data source specific parameter configuration")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DatasourceVersion"),(0,l.kt)("td",{parentName:"tr",align:null},"Data source version details")))),(0,l.kt)("h2",{id:"database-design"},(0,l.kt)("strong",{parentName:"h2"},"Database Design")),(0,l.kt)("h5",{id:"database-diagram"},"Database Diagram\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(73934).Z})),(0,l.kt)("h5",{id:"data-table-definition"},"Data Table Definition\uff1a"),(0,l.kt)("p",null,"Table\uff1alinkis_ps_dm_datatsource <--\x3eObject\uff1aDataSource"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Serial Number"),(0,l.kt)("th",{parentName:"tr",align:null},"Column"),(0,l.kt)("th",{parentName:"tr",align:null},"Describe"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},"Data source ID")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"datasource_name"),(0,l.kt)("td",{parentName:"tr",align:null},"Data source name")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"datasource_desc"),(0,l.kt)("td",{parentName:"tr",align:null},"Data source detailed description")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"datasource_type_id"),(0,l.kt)("td",{parentName:"tr",align:null},"Data source type ID")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"create_identify"),(0,l.kt)("td",{parentName:"tr",align:null},"create identify")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"6"),(0,l.kt)("td",{parentName:"tr",align:null},"create_system"),(0,l.kt)("td",{parentName:"tr",align:null},"System for creating data sources")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"7"),(0,l.kt)("td",{parentName:"tr",align:null},"parameter"),(0,l.kt)("td",{parentName:"tr",align:null},"Data source parameters")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"8"),(0,l.kt)("td",{parentName:"tr",align:null},"create_time"),(0,l.kt)("td",{parentName:"tr",align:null},"Data source creation time")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"9"),(0,l.kt)("td",{parentName:"tr",align:null},"modify_time"),(0,l.kt)("td",{parentName:"tr",align:null},"Data source modification time")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"10"),(0,l.kt)("td",{parentName:"tr",align:null},"create_user"),(0,l.kt)("td",{parentName:"tr",align:null},"Data source create user")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"11"),(0,l.kt)("td",{parentName:"tr",align:null},"modify_user"),(0,l.kt)("td",{parentName:"tr",align:null},"Data source modify user")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"12"),(0,l.kt)("td",{parentName:"tr",align:null},"labels"),(0,l.kt)("td",{parentName:"tr",align:null},"Data source label")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"13"),(0,l.kt)("td",{parentName:"tr",align:null},"version_id"),(0,l.kt)("td",{parentName:"tr",align:null},"Data source version ID")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"14"),(0,l.kt)("td",{parentName:"tr",align:null},"expire"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether the data source is out of date")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"15"),(0,l.kt)("td",{parentName:"tr",align:null},"published_version_id"),(0,l.kt)("td",{parentName:"tr",align:null},"Data source release version number")))),(0,l.kt)("p",null,"Table Name\uff1alinkis_ps_dm_datasource_type <--\x3eObject\uff1aDataSourceType"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Serial Number"),(0,l.kt)("th",{parentName:"tr",align:null},"Column"),(0,l.kt)("th",{parentName:"tr",align:null},"Describe"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},"Data source type ID")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"Data source type name")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"description"),(0,l.kt)("td",{parentName:"tr",align:null},"Data source type description")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"option"),(0,l.kt)("td",{parentName:"tr",align:null},"Type of data source")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"classifier"),(0,l.kt)("td",{parentName:"tr",align:null},"Data source type classifier")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"6"),(0,l.kt)("td",{parentName:"tr",align:null},"icon"),(0,l.kt)("td",{parentName:"tr",align:null},"Data source image display path")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"7"),(0,l.kt)("td",{parentName:"tr",align:null},"layers"),(0,l.kt)("td",{parentName:"tr",align:null},"Data source type hierarchy")))),(0,l.kt)("p",null,"Table\uff1alinkis_ps_dm_datasource_env <--\x3eObject\uff1aDataSourceEnv"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Serial Number"),(0,l.kt)("th",{parentName:"tr",align:null},"Column"),(0,l.kt)("th",{parentName:"tr",align:null},"Describe"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},"Data source environment ID")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"env_name"),(0,l.kt)("td",{parentName:"tr",align:null},"Data source environment name")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"env_desc"),(0,l.kt)("td",{parentName:"tr",align:null},"Data source environment description")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"datasource_type_id"),(0,l.kt)("td",{parentName:"tr",align:null},"Data source type ID")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"parameter"),(0,l.kt)("td",{parentName:"tr",align:null},"Data source environment parameters")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"6"),(0,l.kt)("td",{parentName:"tr",align:null},"create_time"),(0,l.kt)("td",{parentName:"tr",align:null},"Data source environment creation time")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"7"),(0,l.kt)("td",{parentName:"tr",align:null},"create_user"),(0,l.kt)("td",{parentName:"tr",align:null},"Data source environment create user")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"8"),(0,l.kt)("td",{parentName:"tr",align:null},"modify_time"),(0,l.kt)("td",{parentName:"tr",align:null},"Data source modification time")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"9"),(0,l.kt)("td",{parentName:"tr",align:null},"modify_user"),(0,l.kt)("td",{parentName:"tr",align:null},"Data source modify user")))),(0,l.kt)("p",null,"Table\uff1alinkis_ps_dm_datasource_type_key <--\x3eObject\uff1aDataSourceParamKeyDefinition"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Serial Number"),(0,l.kt)("th",{parentName:"tr",align:null},"Column"),(0,l.kt)("th",{parentName:"tr",align:null},"Describe"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},"Key-value type ID")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"data_source_type_id"),(0,l.kt)("td",{parentName:"tr",align:null},"Data source type ID")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"key"),(0,l.kt)("td",{parentName:"tr",align:null},"Data source parameter key value")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"Data source parameter name")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"default_value"),(0,l.kt)("td",{parentName:"tr",align:null},"Data source parameter default value")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"6"),(0,l.kt)("td",{parentName:"tr",align:null},"value_type"),(0,l.kt)("td",{parentName:"tr",align:null},"Data source parameter type")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"7"),(0,l.kt)("td",{parentName:"tr",align:null},"scope"),(0,l.kt)("td",{parentName:"tr",align:null},"Data source parameter range")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"8"),(0,l.kt)("td",{parentName:"tr",align:null},"require"),(0,l.kt)("td",{parentName:"tr",align:null},"Is the data source parameter required?")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"9"),(0,l.kt)("td",{parentName:"tr",align:null},"description"),(0,l.kt)("td",{parentName:"tr",align:null},"Data source parameter description")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"10"),(0,l.kt)("td",{parentName:"tr",align:null},"value_regex"),(0,l.kt)("td",{parentName:"tr",align:null},"Regular data source parameters")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"11"),(0,l.kt)("td",{parentName:"tr",align:null},"ref_id"),(0,l.kt)("td",{parentName:"tr",align:null},"Data source parameter association ID")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"12"),(0,l.kt)("td",{parentName:"tr",align:null},"ref_value"),(0,l.kt)("td",{parentName:"tr",align:null},"Data source parameter associated value")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"13"),(0,l.kt)("td",{parentName:"tr",align:null},"data_source"),(0,l.kt)("td",{parentName:"tr",align:null},"Data source")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"14"),(0,l.kt)("td",{parentName:"tr",align:null},"update_time"),(0,l.kt)("td",{parentName:"tr",align:null},"update time")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"15"),(0,l.kt)("td",{parentName:"tr",align:null},"create_time"),(0,l.kt)("td",{parentName:"tr",align:null},"Create Time")))),(0,l.kt)("p",null,"Table\uff1alinkis_ps_dm_datasource_version <--\x3eObject\uff1aDatasourceVersion"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Serial Number"),(0,l.kt)("th",{parentName:"tr",align:null},"Column"),(0,l.kt)("th",{parentName:"tr",align:null},"Describe"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"version_id"),(0,l.kt)("td",{parentName:"tr",align:null},"Data source version ID")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"datasource_id"),(0,l.kt)("td",{parentName:"tr",align:null},"Data source ID")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"parameter"),(0,l.kt)("td",{parentName:"tr",align:null},"The version parameter of the data source")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"comment"),(0,l.kt)("td",{parentName:"tr",align:null},"comment")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"create_time"),(0,l.kt)("td",{parentName:"tr",align:null},"Create Time")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"6"),(0,l.kt)("td",{parentName:"tr",align:null},"create_user"),(0,l.kt)("td",{parentName:"tr",align:null},"Create User")))))}p.isMDXComponent=!0},73934:function(t,e,a){e.Z=a.p+"assets/images/dn-db-3b608322e777f894eb7e82829f54a8e9.png"},74608:function(t,e,a){e.Z=a.p+"assets/images/linkis-datasource-server-eaf9427b76af0f7befa600b166f04e28.png"}}]);