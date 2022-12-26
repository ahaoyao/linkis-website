"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[24637],{3905:(t,a,n)=>{n.d(a,{Zo:()=>d,kt:()=>k});var e=n(67294);function r(t,a,n){return a in t?Object.defineProperty(t,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[a]=n,t}function l(t,a){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);a&&(e=e.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),n.push.apply(n,e)}return n}function p(t){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){r(t,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))}))}return t}function i(t,a){if(null==t)return{};var n,e,r=function(t,a){if(null==t)return{};var n,e,r={},l=Object.keys(t);for(e=0;e<l.length;e++)n=l[e],a.indexOf(n)>=0||(r[n]=t[n]);return r}(t,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(e=0;e<l.length;e++)n=l[e],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var m=e.createContext({}),u=function(t){var a=e.useContext(m),n=a;return t&&(n="function"==typeof t?t(a):p(p({},a),t)),n},d=function(t){var a=u(t.components);return e.createElement(m.Provider,{value:a},t.children)},s={inlineCode:"code",wrapper:function(t){var a=t.children;return e.createElement(e.Fragment,{},a)}},o=e.forwardRef((function(t,a){var n=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),o=u(n),k=r,g=o["".concat(m,".").concat(k)]||o[k]||s[k]||l;return n?e.createElement(g,p(p({ref:a},d),{},{components:n})):e.createElement(g,p({ref:a},d))}));function k(t,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof t||r){var l=n.length,p=new Array(l);p[0]=o;var i={};for(var m in a)hasOwnProperty.call(a,m)&&(i[m]=a[m]);i.originalType=t,i.mdxType="string"==typeof t?t:r,p[1]=i;for(var u=2;u<l;u++)p[u]=n[u];return e.createElement.apply(null,p)}return e.createElement.apply(null,n)}o.displayName="MDXCreateElement"},93274:(t,a,n)=>{n.r(a),n.d(a,{assets:()=>m,contentTitle:()=>p,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var e=n(87462),r=(n(67294),n(3905));const l={title:"\u5143\u6570\u636e\u67e5\u8be2API",sidebar_position:3},p=void 0,i={unversionedId:"api/http/linkis-ps-publicservice-api/metadatamanager-api",id:"version-1.1.3/api/http/linkis-ps-publicservice-api/metadatamanager-api",title:"\u5143\u6570\u636e\u67e5\u8be2API",description:"MetadataCoreRestful \u7c7b",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.1.3/api/http/linkis-ps-publicservice-api/metadatamanager-api.md",sourceDirName:"api/http/linkis-ps-publicservice-api",slug:"/api/http/linkis-ps-publicservice-api/metadatamanager-api",permalink:"/zh-CN/docs/1.1.3/api/http/linkis-ps-publicservice-api/metadatamanager-api",draft:!1,editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.1.3/api/http/linkis-ps-publicservice-api/metadatamanager-api.md",tags:[],version:"1.1.3",sidebarPosition:3,frontMatter:{title:"\u5143\u6570\u636e\u67e5\u8be2API",sidebar_position:3},sidebar:"version-1.1.3/tutorialSidebar",previous:{title:"\u5386\u53f2\u4f5c\u4e1aAPI",permalink:"/zh-CN/docs/1.1.3/api/http/linkis-ps-publicservice-api/jobhistory-api"},next:{title:"\u53c2\u6570\u914d\u7f6e",permalink:"/zh-CN/docs/1.1.3/api/http/linkis-ps-publicservice-api/parameter-configuration-api"}},m={},u=[{value:"getColumns",id:"getcolumns",level:2},{value:"getDatabases",id:"getdatabases",level:2},{value:"getPartitions",id:"getpartitions",level:2},{value:"getTableProps",id:"gettableprops",level:2},{value:"getPartitionProps",id:"getpartitionprops",level:2},{value:"getTables",id:"gettables",level:2}],d={toc:u};function s(t){let{components:a,...n}=t;return(0,r.kt)("wrapper",(0,e.Z)({},d,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," MetadataCoreRestful \u7c7b ")," "),(0,r.kt)("h2",{id:"getcolumns"},"getColumns"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u63a5\u53e3\u5730\u5740"),":",(0,r.kt)("inlineCode",{parentName:"p"},"/api/rest_j/v1/metadatamanager/columns/{dataSourceId}/db/{database}/table/{table}")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u65b9\u5f0f"),":",(0,r.kt)("inlineCode",{parentName:"p"},"GET")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u6570\u636e\u7c7b\u578b"),":",(0,r.kt)("inlineCode",{parentName:"p"},"application/x-www-form-urlencoded")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u54cd\u5e94\u6570\u636e\u7c7b\u578b"),":",(0,r.kt)("inlineCode",{parentName:"p"},"application/json")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u63a5\u53e3\u63cf\u8ff0"),": \u83b7\u53d6\u6570\u636e\u8868\u7684column\u4fe1\u606f"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u53c2\u6570"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf7\u6c42\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6570\u636e\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"schema"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dataSourceId"),(0,r.kt)("td",{parentName:"tr",align:null},"dataSourceId"),(0,r.kt)("td",{parentName:"tr",align:null},"path"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"database"),(0,r.kt)("td",{parentName:"tr",align:null},"database"),(0,r.kt)("td",{parentName:"tr",align:null},"path"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"system"),(0,r.kt)("td",{parentName:"tr",align:null},"system"),(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"table"),(0,r.kt)("td",{parentName:"tr",align:null},"table"),(0,r.kt)("td",{parentName:"tr",align:null},"path"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u54cd\u5e94\u793a\u4f8b"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "method": null,\n    "status": 0,\n    "message": "OK",\n    "data": {\n        "columns": [\n            {\n                "index": 1,\n                "primaryKey": true,\n                "name": "id",\n                "type": "INT"\n            },\n            {\n                "index": 2,\n                "primaryKey": false,\n                "name": "datasource_name",\n                "type": "VARCHAR"\n            },\n            {\n                "index": 3,\n                "primaryKey": false,\n                "name": "datasource_desc",\n                "type": "VARCHAR"\n            },\n            {\n                "index": 4,\n                "primaryKey": false,\n                "name": "datasource_type_id",\n                "type": "INT"\n            },\n            {\n                "index": 5,\n                "primaryKey": false,\n                "name": "create_identify",\n                "type": "VARCHAR"\n            },\n            {\n                "index": 6,\n                "primaryKey": false,\n                "name": "create_system",\n                "type": "VARCHAR"\n            },\n            {\n                "index": 7,\n                "primaryKey": false,\n                "name": "parameter",\n                "type": "VARCHAR"\n            },\n            {\n                "index": 8,\n                "primaryKey": false,\n                "name": "create_time",\n                "type": "DATETIME"\n            },\n            {\n                "index": 9,\n                "primaryKey": false,\n                "name": "modify_time",\n                "type": "DATETIME"\n            },\n            {\n                "index": 10,\n                "primaryKey": false,\n                "name": "create_user",\n                "type": "VARCHAR"\n            },\n            {\n                "index": 11,\n                "primaryKey": false,\n                "name": "modify_user",\n                "type": "VARCHAR"\n            },\n            {\n                "index": 12,\n                "primaryKey": false,\n                "name": "labels",\n                "type": "VARCHAR"\n            },\n            {\n                "index": 13,\n                "primaryKey": false,\n                "name": "version_id",\n                "type": "INT"\n            },\n            {\n                "index": 14,\n                "primaryKey": false,\n                "name": "expire",\n                "type": "TINYINT"\n            },\n            {\n                "index": 15,\n                "primaryKey": false,\n                "name": "published_version_id",\n                "type": "INT"\n            }\n        ]\n    }\n}\n')),(0,r.kt)("h2",{id:"getdatabases"},"getDatabases"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u63a5\u53e3\u5730\u5740"),":",(0,r.kt)("inlineCode",{parentName:"p"},"/api/rest_j/v1/metadatamanager/dbs/{dataSourceId}")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u65b9\u5f0f"),":",(0,r.kt)("inlineCode",{parentName:"p"},"GET")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u6570\u636e\u7c7b\u578b"),":",(0,r.kt)("inlineCode",{parentName:"p"},"application/x-www-form-urlencoded")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u54cd\u5e94\u6570\u636e\u7c7b\u578b"),":",(0,r.kt)("inlineCode",{parentName:"p"},"application/json")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u63a5\u53e3\u63cf\u8ff0"),":\u83b7\u53d6\u6570\u636e\u6e90\u7684\u6570\u636e\u5e93\u540d\u79f0\u5217\u8868"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u53c2\u6570"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf7\u6c42\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6570\u636e\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"schema"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dataSourceId"),(0,r.kt)("td",{parentName:"tr",align:null},"dataSourceId"),(0,r.kt)("td",{parentName:"tr",align:null},"path"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"system"),(0,r.kt)("td",{parentName:"tr",align:null},"system"),(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u54cd\u5e94\u793a\u4f8b"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "method": null,\n    "status": 0,\n    "message": "OK",\n    "data": {\n        "dbs": [\n            "information_schema",\n            "linkis",\n            "linkis_sit"\n        ]\n    }\n}\n')),(0,r.kt)("h2",{id:"getpartitions"},"getPartitions"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u63a5\u53e3\u5730\u5740"),":",(0,r.kt)("inlineCode",{parentName:"p"},"/api/rest_j/v1/metadatamanager/partitions/{dataSourceId}/db/{database}/table/{table}")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u65b9\u5f0f"),":",(0,r.kt)("inlineCode",{parentName:"p"},"GET")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u6570\u636e\u7c7b\u578b"),":",(0,r.kt)("inlineCode",{parentName:"p"},"application/x-www-form-urlencoded")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u54cd\u5e94\u6570\u636e\u7c7b\u578b"),":",(0,r.kt)("inlineCode",{parentName:"p"},"application/json")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u63a5\u53e3\u63cf\u8ff0"),":"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u53c2\u6570"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf7\u6c42\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6570\u636e\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"schema"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dataSourceId"),(0,r.kt)("td",{parentName:"tr",align:null},"dataSourceId"),(0,r.kt)("td",{parentName:"tr",align:null},"path"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"database"),(0,r.kt)("td",{parentName:"tr",align:null},"database"),(0,r.kt)("td",{parentName:"tr",align:null},"path"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"system"),(0,r.kt)("td",{parentName:"tr",align:null},"system"),(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"table"),(0,r.kt)("td",{parentName:"tr",align:null},"table"),(0,r.kt)("td",{parentName:"tr",align:null},"path"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"traverse"),(0,r.kt)("td",{parentName:"tr",align:null},"traverse"),(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u54cd\u5e94\u793a\u4f8b"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "method": null,\n    "status": 0,\n    "message": "OK",\n    "data": {\n        "props": {\n            "partKeys": [\n                "ds"\n            ],\n            "root": {}\n        }\n    }\n}\n')),(0,r.kt)("h2",{id:"gettableprops"},"getTableProps"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u63a5\u53e3\u5730\u5740"),":",(0,r.kt)("inlineCode",{parentName:"p"},"/api/rest_j/v1/metadatamanager/props/{dataSourceId}/db/{database}/table/{table}")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u65b9\u5f0f"),":",(0,r.kt)("inlineCode",{parentName:"p"},"GET")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u6570\u636e\u7c7b\u578b"),":",(0,r.kt)("inlineCode",{parentName:"p"},"application/x-www-form-urlencoded")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u54cd\u5e94\u6570\u636e\u7c7b\u578b"),":",(0,r.kt)("inlineCode",{parentName:"p"},"application/json")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u63a5\u53e3\u63cf\u8ff0"),":"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u53c2\u6570"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf7\u6c42\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6570\u636e\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"schema"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dataSourceId"),(0,r.kt)("td",{parentName:"tr",align:null},"dataSourceId"),(0,r.kt)("td",{parentName:"tr",align:null},"path"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"database"),(0,r.kt)("td",{parentName:"tr",align:null},"database"),(0,r.kt)("td",{parentName:"tr",align:null},"path"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"system"),(0,r.kt)("td",{parentName:"tr",align:null},"system"),(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"table"),(0,r.kt)("td",{parentName:"tr",align:null},"table"),(0,r.kt)("td",{parentName:"tr",align:null},"path"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u54cd\u5e94\u793a\u4f8b"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "method": null,\n    "status": 0,\n    "message": "OK",\n    "data": {\n        "props": {\n            "skip.header.line.count": "1",\n            "columns.types": "int:int:string:string:string:string:string:string:string:string:string:string:string:string:string:string:string:string",\n            "columns": "id,age,job,marital,education,default,balance,housing,loan,contact,day,month,duration,campaign,pdays,previous,poutcome,y",\n            "field.delim": ",",\n            "transient_lastDdlTime": "1646732554",\n            "partition_columns.types": "string",\n            "columns.comments": "\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000",\n            "bucket_count": "-1",\n            "serialization.ddl": "struct demo_data { i32 id, i32 age, string job, string marital, string education, string default, string balance, string housing, string loan, string contact, string day, string month, string duration, string campaign, string pdays, string previous, string poutcome, string y}",\n            "file.outputformat": "org.apache.hadoop.hive.ql.io.HiveIgnoreKeyTextOutputFormat",\n            "partition_columns": "ds",\n            "colelction.delim": "-",\n            "serialization.lib": "org.apache.hadoop.hive.serde2.lazy.LazySimpleSerDe",\n            "name": "dss_autotest.demo_data",\n            "location": "hdfs://bdpdev01/user/hive/warehouse/hadoop/dss_autotest.db/demo_data",\n            "mapkey.delim": ":",\n            "file.inputformat": "org.apache.hadoop.mapred.TextInputFormat",\n            "serialization.format": ",",\n            "column.name.delimiter": ","\n        }\n    }\n}\n')),(0,r.kt)("h2",{id:"getpartitionprops"},"getPartitionProps"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u63a5\u53e3\u5730\u5740"),":",(0,r.kt)("inlineCode",{parentName:"p"},"/api/rest_j/v1/metadatamanager/props/{dataSourceId}/db/{database}/table/{table}/partition/{partition}")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u65b9\u5f0f"),":",(0,r.kt)("inlineCode",{parentName:"p"},"GET")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u6570\u636e\u7c7b\u578b"),":",(0,r.kt)("inlineCode",{parentName:"p"},"application/x-www-form-urlencoded")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u54cd\u5e94\u6570\u636e\u7c7b\u578b"),":",(0,r.kt)("inlineCode",{parentName:"p"},"application/json")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u63a5\u53e3\u63cf\u8ff0"),":"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u53c2\u6570"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf7\u6c42\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6570\u636e\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"schema"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dataSourceId"),(0,r.kt)("td",{parentName:"tr",align:null},"dataSourceId"),(0,r.kt)("td",{parentName:"tr",align:null},"path"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"database"),(0,r.kt)("td",{parentName:"tr",align:null},"database"),(0,r.kt)("td",{parentName:"tr",align:null},"path"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"partition"),(0,r.kt)("td",{parentName:"tr",align:null},"partition"),(0,r.kt)("td",{parentName:"tr",align:null},"path"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"system"),(0,r.kt)("td",{parentName:"tr",align:null},"system"),(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"table"),(0,r.kt)("td",{parentName:"tr",align:null},"table"),(0,r.kt)("td",{parentName:"tr",align:null},"path"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u54cd\u5e94\u793a\u4f8b"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "data": {},\n    "message": "",\n    "method": "",\n    "status": 0\n}\n')),(0,r.kt)("h2",{id:"gettables"},"getTables"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u63a5\u53e3\u5730\u5740"),":",(0,r.kt)("inlineCode",{parentName:"p"},"/api/rest_j/v1/metadatamanager/tables/{dataSourceId}/db/{database}")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u65b9\u5f0f"),":",(0,r.kt)("inlineCode",{parentName:"p"},"GET")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u6570\u636e\u7c7b\u578b"),":",(0,r.kt)("inlineCode",{parentName:"p"},"application/x-www-form-urlencoded")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u54cd\u5e94\u6570\u636e\u7c7b\u578b"),":",(0,r.kt)("inlineCode",{parentName:"p"},"application/json")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u63a5\u53e3\u63cf\u8ff0"),": \u83b7\u53d6\u6570\u636e\u6e90\u7684\u67d0\u4e2a\u6570\u636e\u5e93\u7684\u6570\u636e\u8868\u5217\u8868"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u53c2\u6570"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf7\u6c42\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6570\u636e\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"schema"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dataSourceId"),(0,r.kt)("td",{parentName:"tr",align:null},"dataSourceId"),(0,r.kt)("td",{parentName:"tr",align:null},"path"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"database"),(0,r.kt)("td",{parentName:"tr",align:null},"database"),(0,r.kt)("td",{parentName:"tr",align:null},"path"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"system"),(0,r.kt)("td",{parentName:"tr",align:null},"system"),(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u54cd\u5e94\u793a\u4f8b"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "method": null,\n    "status": 0,\n    "message": "OK",\n    "data": {\n        "tables": [\n            "test",\n            "test_0317a",\n            "test_import_sqoop_1",\n            "test_linkis_sqoop_1",\n            "test_linkis_sqoop_2",\n            "test_linkis_sqoop_3",\n            "upload_test"\n        ]\n    }\n}\n')))}s.isMDXComponent=!0}}]);