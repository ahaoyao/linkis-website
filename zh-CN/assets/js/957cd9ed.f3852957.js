"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[27174],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,h=m["".concat(o,".").concat(d)]||m[d]||u[d]||i;return n?a.createElement(h,s(s({ref:t},c),{},{components:n})):a.createElement(h,s({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var p=2;p<i;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},21561:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),s=["components"],l={title:"\u5982\u4f55\u7f16\u5199\u5355\u5143\u6d4b\u8bd5\u4ee3\u7801",sidebar_position:10},o=void 0,p={unversionedId:"how-to-write-unit-test-code",id:"how-to-write-unit-test-code",title:"\u5982\u4f55\u7f16\u5199\u5355\u5143\u6d4b\u8bd5\u4ee3\u7801",description:"\u6846\u67b6\u9009\u578b",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs-community/current/how-to-write-unit-test-code.md",sourceDirName:".",slug:"/how-to-write-unit-test-code",permalink:"/zh-CN/community/how-to-write-unit-test-code",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/i18n/zh-CN/how-to-write-unit-test-code.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"\u5982\u4f55\u7f16\u5199\u5355\u5143\u6d4b\u8bd5\u4ee3\u7801",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Release-Notes \u7f16\u5199\u89c4\u8303",permalink:"/zh-CN/community/development-specification/release-notes"},next:{title:"\u5fae\u670d\u52a1\u7684\u5212\u5206",permalink:"/zh-CN/community/microservice-division"}},c=[{value:"\u6846\u67b6\u9009\u578b",id:"\u6846\u67b6\u9009\u578b",children:[{value:"\u914d\u7f6eIDEA\u7684Junit\u7684\u6a21\u677f",id:"\u914d\u7f6eidea\u7684junit\u7684\u6a21\u677f",children:[],level:3}],level:2},{value:"\u5355\u5143\u6d4b\u8bd5\u51c6\u5219",id:"\u5355\u5143\u6d4b\u8bd5\u51c6\u5219",children:[{value:"\u76ee\u5f55\u4ee5\u53ca\u547d\u540d\u51c6\u5219",id:"\u76ee\u5f55\u4ee5\u53ca\u547d\u540d\u51c6\u5219",children:[],level:3},{value:"\u7f16\u5199\u51c6\u5219",id:"\u7f16\u5199\u51c6\u5219",children:[],level:3}],level:2},{value:"\u65ad\u8a00\u7684\u4f7f\u7528",id:"\u65ad\u8a00\u7684\u4f7f\u7528",children:[{value:"Junit5\u5e38\u89c4\u65ad\u8a00",id:"junit5\u5e38\u89c4\u65ad\u8a00",children:[],level:3},{value:"Junit5\u7ec4\u5408\u65ad\u8a00\u548c\u5f02\u5e38\u65ad\u8a00",id:"junit5\u7ec4\u5408\u65ad\u8a00\u548c\u5f02\u5e38\u65ad\u8a00",children:[],level:3},{value:"\u65ad\u8a00\u4f7f\u7528\u51c6\u5219",id:"\u65ad\u8a00\u4f7f\u7528\u51c6\u5219",children:[],level:3}],level:2},{value:"\u5355\u5143\u6d4b\u8bd5\u7684\u7f16\u5199",id:"\u5355\u5143\u6d4b\u8bd5\u7684\u7f16\u5199",children:[{value:"\u7c7b\u7684\u5212\u5206",id:"\u7c7b\u7684\u5212\u5206",children:[],level:3},{value:"Controller\u7c7b\u7684\u5355\u5143\u6d4b\u8bd5",id:"controller\u7c7b\u7684\u5355\u5143\u6d4b\u8bd5",children:[],level:3},{value:"Server \u7c7b\u7684\u5355\u5143\u6d4b\u8bd5",id:"server-\u7c7b\u7684\u5355\u5143\u6d4b\u8bd5",children:[],level:3},{value:"Dao \u7c7b\u7684\u5355\u5143\u6d4b\u8bd5",id:"dao-\u7c7b\u7684\u5355\u5143\u6d4b\u8bd5",children:[],level:3}],level:2}],u={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u6846\u67b6\u9009\u578b"},"\u6846\u67b6\u9009\u578b"),(0,i.kt)("p",null,"Junit5+Mockito+jacoco+h2\u672c\u5730\u6570\u636e\u5e93\nIdea\u589e\u5f3a\u63d2\u4ef6 "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"JUnitGenerator V2.\u200b0  \u7528\u4e8e\u751f\u6210\u6d4b\u8bd5\u7528\u4f8b\u7684\u6807\u51c6\u6a21\u5757"),(0,i.kt)("li",{parentName:"ul"},"GenerateAllSet   \u7528\u4e8e\u5feb\u901fnew\u521b\u5efa\u5bf9\u8c61\uff0c\u5e76\u8bbe\u7f6e\u9ed8\u8ba4\u503c"),(0,i.kt)("li",{parentName:"ul"},"MybatisX  ado\u4e0emapper\u7684\u5173\u8054\u6620\u5c04 \u65b9\u4fbf\u67e5\u770b")),(0,i.kt)("h3",{id:"\u914d\u7f6eidea\u7684junit\u7684\u6a21\u677f"},"\u914d\u7f6eIDEA\u7684Junit\u7684\u6a21\u677f"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-properties"},'######################################################################################## \n## \n## Available variables: \n##         $entryList.methodList - List of method composites \n##         $entryList.privateMethodList - List of private method composites \n##         $entryList.fieldList - ArrayList of class scope field names \n##         $entryList.className - class name \n##         $entryList.packageName - package name \n##         $today - Todays date in MM/dd/yyyy format \n## \n##            MethodComposite variables: \n##                $method.name - Method Name \n##                $method.signature - Full method signature in String form \n##                $method.reflectionCode - list of strings representing commented out reflection code to access method (Private Methods) \n##                $method.paramNames - List of Strings representing the method\'s parameters\' names \n##                $method.paramClasses - List of Strings representing the method\'s parameters\' classes \n## \n## You can configure the output class name using "testClass" variable below. \n## Here are some examples: \n## Test${entry.ClassName} - will produce TestSomeClass \n## ${entry.className}Test - will produce SomeClassTest \n## \n######################################################################################## \n## \n## \u9996\u5b57\u6bcd\u5927\u5199 \n#macro (cap $strIn)$strIn.valueOf($strIn.charAt(0)).toUpperCase()$strIn.substring(1)#end \n## \u9996\u5b57\u6bcd\u5c0f\u5199 \u81ea\u5b9a\u4e49down\n#macro (down $strIn)$strIn.valueOf($strIn.charAt(0)).toLowerCase()$strIn.substring(1)#end\n## Iterate through the list and generate testcase for every entry. \n#foreach ($entry in $entryList) \n#set( $testClass="${entry.className}Test") \n##\n\n/*\n * Licensed to the Apache Software Foundation (ASF) under one or more\n * contributor license agreements.  See the NOTICE file distributed with\n * this work for additional information regarding copyright ownership.\n * The ASF licenses this file to You under the Apache License, Version 2.0\n * (the "License"); you may not use this file except in compliance with\n * the License.  You may obtain a copy of the License at\n *\n *    http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an "AS IS" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n\npackage $entry.packageName; \n \nimport org.junit.jupiter.api.AfterEach;\nimport org.junit.jupiter.api.BeforeEach;\nimport org.junit.jupiter.api.DisplayName;\nimport org.junit.jupiter.api.Test;\nimport org.springframework.beans.factory.annotation.Autowired;\n\n/** \n * ${entry.className} Tester\n*/ \npublic class $testClass { \n \n    @Autowired\n    private ${entry.className} #down(${entry.className});\n \n    @BeforeEach\n    @DisplayName("Each unit test method is executed once before execution")\n    public void before() throws Exception {\n    }\n \n    @AfterEach\n    @DisplayName("Each unit test method is executed once before execution")\n    public void after() throws Exception {\n    }\n \n#foreach($method in $entry.methodList) \n \n    @Test\n    @DisplayName("Method description: ...")\n    public void test#cap(${method.name})() throws Exception { \n        //TODO: Test goes here... \n    } \n \n#end \n \n#foreach($method in $entry.privateMethodList) \n\n    @Test\n    @DisplayName("Method description: ...")\n    public void test#cap(${method.name})() throws Exception { \n        //TODO: Test goes here... \n    #foreach($string in $method.reflectionCode) \n    $string \n    #end \n    } \n \n#end \n} \n#end\n\n')),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/29391030/155080741-7e6b89db-0ee6-48e1-a858-4123d5bbf2f0.png",alt:"test-0"})," "),(0,i.kt)("p",null,"1.\u914d\u7f6e\u914d\u7f6e\u6d4b\u8bd5\u7c7b\u751f\u6210\u8def\u5f84",(0,i.kt)("br",{parentName:"p"}),"\n","\u539f\u914d\u7f6e\uff1a${SOURCEPATH}/test/${PACKAGE}/${FILENAME}\n\u4fee\u6539\u540e\u914d\u7f6e\uff1a${SOURCEPATH}/../../test/java/${PACKAGE}/${FILENAME}\n\u5982\u56fe\uff1a\n",(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/29391030/155080336-476feba6-2790-43b5-a572-ee0aa6a9586f.png",alt:"test-1"}),"\n2.\u9009\u62e9\u7c7b\u2014\u2014>\u53f3\u952e\u2014\u2014>Generate\u2014\u2014>Junit Test\uff0c\u751f\u6210\u6d4b\u8bd5\u7c7b",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/29391030/155080650-4fa68c66-5d7c-4e9f-ba63-0c7fc62d9df2.png",alt:"test-2"})),(0,i.kt)("h2",{id:"\u5355\u5143\u6d4b\u8bd5\u51c6\u5219"},"\u5355\u5143\u6d4b\u8bd5\u51c6\u5219"),(0,i.kt)("h3",{id:"\u76ee\u5f55\u4ee5\u53ca\u547d\u540d\u51c6\u5219"},"\u76ee\u5f55\u4ee5\u53ca\u547d\u540d\u51c6\u5219"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"1.\u5355\u5143\u6d4b\u8bd5\u4ee3\u7801\u76ee\u5f55\n\u5fc5\u987b\u5199\u5728\u5982\u4e0b\u5de5\u7a0b\u76ee\u5f55\uff1asrc/test/java\uff0c\u4e0d\u5141\u8bb8\u5199\u5728\u4e1a\u52a1\u4ee3\u7801\u76ee\u5f55\u4e0b\u3002",(0,i.kt)("br",{parentName:"p"}),"\n","\u8bf4\u660e\uff1a\u6e90\u7801\u7f16\u8bd1\u65f6\u4f1a\u8df3\u8fc7\u6b64\u76ee\u5f55\uff0c\u800c\u5355\u5143\u6d4b\u8bd5\u6846\u67b6\u9ed8\u8ba4\u662f\u626b\u63cf\u6b64\u76ee\u5f55\uff0c\u6d4b\u8bd5\u7684\u914d\u7f6e\u6587\u4ef6\u5fc5\u987b\u653e\u5728:src/test/resources\u6587\u4ef6\u4e0b")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"2.\u6d4b\u8bd5\u7c7b\u6240\u5728\u7684\u5305\u540d\u5e94\u8be5\u548c\u88ab\u6d4b\u8bd5\u7c7b\u6240\u5728\u7684\u5305\u540d\u4fdd\u6301\u4e00\u81f4",(0,i.kt)("br",{parentName:"p"}),"\n","\u793a\u4f8b:",(0,i.kt)("br",{parentName:"p"}),"\n","\u4e1a\u52a1\u7c7b       src/main/java/org/apache/linkis/jobhistory/dao/JobDetailMapper.java",(0,i.kt)("br",{parentName:"p"}),"\n","\u5bf9\u5e94\u7684\u6d4b\u8bd5\u7c7b src/test/java/org/apache/linkis/jobhistory/dao/JobDetailMapperTest.java")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"3.\u6d4b\u8bd5\u7c7b\u7684\u547d\u540d\u5b9a\u4e49\u89c4\u8303\uff1a\u4f7f\u7528Test\u4f5c\u4e3a\u7c7b\u540d\u7684\u540e\u7f00",(0,i.kt)("br",{parentName:"p"}),"\n","\u6d4b\u8bd5\u7c7b\u7684\u547d\u540d\u5982\u4e0b\uff1a",(0,i.kt)("br",{parentName:"p"}),"\n","\u88ab\u6d4b\u8bd5\u7684\u4e1a\u52a1+Test\u3001\u88ab\u6d4b\u8bd5\u7684\u63a5\u53e3+Test\u3001\u88ab\u6d4b\u8bd5\u7684\u7c7b+Test")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"4.\u6d4b\u8bd5\u7528\u4f8b\u7684\u547d\u540d\u5b9a\u4e49\u89c4\u8303\uff1a\u4f7f\u7528test\u4f5c\u4e3a\u65b9\u6cd5\u540d\u7684\u524d\u7f00",(0,i.kt)("br",{parentName:"p"}),"\n","\u6d4b\u8bd5\u7528\u4f8b\u7684\u547d\u540d\u89c4\u5219\u662f\uff1atest+\u65b9\u6cd5\u540d\u3002\u907f\u514d\u4f7f\u7528test1\u3001test2\u6ca1\u6709\u542b\u4e49\u7684\u540d\u79f0\uff0c\u5176\u6b21\u9700\u8981\u6709\u5fc5\u8981\u7684\u51fd\u6570\u65b9\u6cd5\u6ce8\u91ca\u3002"))),(0,i.kt)("h3",{id:"\u7f16\u5199\u51c6\u5219"},"\u7f16\u5199\u51c6\u5219"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"1.\u5355\u5143\u6d4b\u8bd5\u4e2d\u4e0d\u51c6\u4f7f\u7528 System.out \u6765\u8fdb\u884c\u4eba\u8089\u9a8c\u8bc1\uff0c\u6216\u5219if\u5224\u65ad\u6765\u9a8c\u8bc1\uff08\u53ef\u4ee5\u4f7f\u7528log\u8fdb\u884c\u5173\u952e\u65e5\u5fd7\u8f93\u51fa\uff09\uff0c\u5fc5\u987b\u4f7f\u7528\u65ad\u8a00 assert \u6765\u9a8c\u8bc1\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"2.\u4fdd\u6301\u5355\u5143\u6d4b\u8bd5\u7684\u72ec\u7acb\u6027\u3002\u4e3a\u4e86\u4fdd\u8bc1\u5355\u5143\u6d4b\u8bd5\u7a33\u5b9a\u53ef\u9760\u4e14\u4fbf\u4e8e\u7ef4\u62a4\uff0c\u5355\u5143\u6d4b\u8bd5\u7528\u4f8b\u4e4b\u95f4\u51b3\u4e0d\u80fd\u4e92\u76f8\u8c03\u7528\uff0c\u4e5f\u4e0d\u80fd\u4f9d\u8d56\u6267\u884c\u7684\u5148\u540e\u6b21\u5e8f\u3002",(0,i.kt)("br",{parentName:"p"}),"\n","\u53cd\u4f8b\uff1amethod2 \u9700\u8981\u4f9d\u8d56 method1 \u7684\u6267\u884c\uff0c\u5c06\u6267\u884c\u7ed3\u679c\u4f5c\u4e3a method2 \u7684\u8f93\u5165")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"3.\u5355\u5143\u6d4b\u8bd5\u5fc5\u987b\u53ef\u4ee5\u91cd\u590d\u6267\u884c\u7684\uff0c\u4e0d\u80fd\u53d7\u5230\u5916\u754c\u73af\u5883\u7684\u5f71\u54cd\u3002\n\u8bf4\u660e\uff1a\u5355\u5143\u6d4b\u8bd5\u901a\u5e38\u4f1a\u88ab\u653e\u5230\u6301\u7eed\u96c6\u6210\u4e2d\uff0c\u6bcf\u6b21\u6709\u4ee3\u7801 check in \u65f6\u5355\u5143\u6d4b\u8bd5\u90fd\u4f1a\u88ab\u6267\u884c\u3002\u5982\u679c\u5355\u6d4b\u5bf9\u5916\u90e8\u73af\u5883\uff08\u7f51\u7edc\u3001\u670d\u52a1\u3001\u4e2d\u95f4\u4ef6\u7b49\uff09\u6709\u4f9d\u8d56\uff0c\u5bb9\u6613\u5bfc\u81f4\u6301\u7eed\u96c6\u6210\u673a\u5236\u7684\u4e0d\u53ef\u7528\u3002",(0,i.kt)("br",{parentName:"p"}),"\n","\u6b63\u4f8b\uff1a\u4e3a\u4e86\u4e0d\u53d7\u5916\u754c\u73af\u5883\u5f71\u54cd\uff0c\u8981\u6c42\u8bbe\u8ba1\u4ee3\u7801\u65f6\u5c31\u628a\u88ab\u6d4b\u7c7b\u7684\u76f8\u5173\u4f9d\u8d56\u6539\u6210\u6ce8\u5165\uff0c\u5728\u6d4b\u8bd5\u65f6\u7528 spring \u8fd9\u6837\u7684\u4f9d\u8d56\u6ce8\u5165\u6846\u67b6\u6ce8\u5165\u4e00\u4e2a\u672c\u5730\uff08\u5185\u5b58\uff09\u5b9e\u73b0\u6216\u8005 Mock \u5b9e\u73b0\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"4.\u589e\u91cf\u4ee3\u7801\u786e\u4fdd\u5355\u5143\u6d4b\u8bd5\u901a\u8fc7\u3002",(0,i.kt)("br",{parentName:"p"}),"\n","\u8bf4\u660e\uff1a\u65b0\u589e\u4ee3\u7801\u5fc5\u987b\u8865\u5145\u5355\u5143\u6d4b\u8bd5\uff0c\u5982\u679c\u65b0\u589e\u4ee3\u7801\u5f71\u54cd\u4e86\u539f\u6709\u5355\u5143\u6d4b\u8bd5\uff0c\u8bf7\u4fee\u6b63")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"5.\u5bf9\u4e8e\u5355\u5143\u6d4b\u8bd5\uff0c\u8981\u4fdd\u8bc1\u6d4b\u8bd5\u7c92\u5ea6\u8db3\u591f\u5c0f\uff0c\u6709\u52a9\u4e8e\u7cbe\u786e\u5b9a\u4f4d\u95ee\u9898\u3002\u5355\u6d4b\u7c92\u5ea6\u4e00\u822c\u90fd\u662f\u65b9\u6cd5\u7ea7\u522b(\u5de5\u5177\u7c7b\u6216\u5219\u679a\u4e3e\u7c7b\u7b49\u6781\u5c11\u573a\u666f\u53ef\u4ee5\u662f\u7c7b\u7ea7\u522b)\u3002",(0,i.kt)("br",{parentName:"p"}),"\n","\u8bf4\u660e\uff1a\u53ea\u6709\u6d4b\u8bd5\u7c92\u5ea6\u5c0f\u624d\u80fd\u5728\u51fa\u9519\u65f6\u5c3d\u5feb\u5b9a\u4f4d\u5230\u51fa\u9519\u4f4d\u7f6e\u3002\u5355\u6d4b\u4e0d\u8d1f\u8d23\u68c0\u67e5\u8de8\u7c7b\u6216\u8005\u8de8\u7cfb\u7edf\u7684\u4ea4\u4e92\u903b\u8f91\uff0c\u90a3\u662f\u96c6\u6210\u6d4b\u8bd5\u7684\u9886\u57df\u3002"))),(0,i.kt)("h2",{id:"\u65ad\u8a00\u7684\u4f7f\u7528"},"\u65ad\u8a00\u7684\u4f7f\u7528"),(0,i.kt)("p",null,"\u6240\u6709\u7684\u6d4b\u8bd5\u7528\u4f8b\u7684\u7ed3\u679c\u9a8c\u8bc1\u90fd\u5fc5\u987b\u4f7f\u7528\u65ad\u8a00\u6a21\u5f0f\n\u4f18\u5148\u4f7f\u7528Junit5\u7684Assertions\u65ad\u8a00\uff0c\u6781\u5c11\u6570\u573a\u666f\u5141\u8bb8\u4f7f\u7528AssertJ\u7684\u65ad\u8a00  "),(0,i.kt)("h3",{id:"junit5\u5e38\u89c4\u65ad\u8a00"},"Junit5\u5e38\u89c4\u65ad\u8a00"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u65b9\u6cd5"),(0,i.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,i.kt)("th",{parentName:"tr",align:null},"\u5907\u6ce8"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"assertEquals"),(0,i.kt)("td",{parentName:"tr",align:null},"\u5224\u65ad\u4e24\u4e2a\u5bf9\u8c61\u6216\u4e24\u4e2a\u539f\u59cb\u7c7b\u578b\u662f\u5426\u76f8\u7b49"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"assertNotEquals"),(0,i.kt)("td",{parentName:"tr",align:null},"\u5224\u65ad\u4e24\u4e2a\u5bf9\u8c61\u6216\u4e24\u4e2a\u539f\u59cb\u7c7b\u578b\u662f\u5426\u4e0d\u76f8\u7b49"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"assertTrue"),(0,i.kt)("td",{parentName:"tr",align:null},"\u5224\u65ad\u7ed9\u5b9a\u7684\u5e03\u5c14\u503c\u662f\u5426\u4e3a true"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"assertFalse"),(0,i.kt)("td",{parentName:"tr",align:null},"\u5224\u65ad\u7ed9\u5b9a\u7684\u5e03\u5c14\u503c\u662f\u5426\u4e3a false"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"assertNull"),(0,i.kt)("td",{parentName:"tr",align:null},"\u5224\u65ad\u7ed9\u5b9a\u7684\u5bf9\u8c61\u5f15\u7528\u662f\u5426\u4e3a null"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"assertNotNull"),(0,i.kt)("td",{parentName:"tr",align:null},"\u5224\u65ad\u7ed9\u5b9a\u7684\u5bf9\u8c61\u5f15\u7528\u662f\u5426\u4e0d\u4e3a null"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"assertAll"),(0,i.kt)("td",{parentName:"tr",align:null},"\u5c06\u591a\u4e2a\u5224\u65ad\u903b\u8f91\u653e\u5728\u4e00\u8d77\u5904\u7406\uff0c\u53ea\u8981\u6709\u4e00\u4e2a\u62a5\u9519\u5c31\u4f1a\u5bfc\u81f4\u6574\u4f53\u6d4b\u8bd5\u4e0d\u901a\u8fc7"),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("h3",{id:"junit5\u7ec4\u5408\u65ad\u8a00\u548c\u5f02\u5e38\u65ad\u8a00"},"Junit5\u7ec4\u5408\u65ad\u8a00\u548c\u5f02\u5e38\u65ad\u8a00"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u7ec4\u5408\u65ad\u8a00"),"\nassertAll\u65b9\u6cd5\u53ef\u4ee5\u5c06\u591a\u4e2a\u5224\u65ad\u903b\u8f91\u653e\u5728\u4e00\u8d77\u5904\u7406\uff0c\u53ea\u8981\u6709\u4e00\u4e2a\u62a5\u9519\u5c31\u4f1a\u5bfc\u81f4\u6574\u4f53\u6d4b\u8bd5\u4e0d\u901a\u8fc7\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'    @Test\n    @DisplayName("assert all")\n    public void all() {\n    //\u5c06\u591a\u4e2a\u5224\u65ad\u653e\u5728\u4e00\u8d77\u6267\u884c\uff0c\u53ea\u6709\u5168\u90e8\u901a\u8fc7\u624d\u7b97\u901a\u8fc7\n     assertAll("Math",\n        () -> assertEquals(2, 1 + 1),\n        () -> assertTrue(1 > 0)\n     );\n    }\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u5f02\u5e38\u65ad\u8a00 "),"\nAssertions.assertThrows\u65b9\u6cd5\uff0c\u7528\u6765\u6d4b\u8bd5Executable\u5b9e\u4f8b\u6267\u884cexecute\u65b9\u6cd5\u65f6\u662f\u5426\u629b\u51fa\u6307\u5b9a\u7c7b\u578b\u7684\u5f02\u5e38\uff1b\n\u5982\u679cexecute\u65b9\u6cd5\u6267\u884c\u65f6\u4e0d\u629b\u51fa\u5f02\u5e38\uff0c\u6216\u8005\u629b\u51fa\u7684\u5f02\u5e38\u4e0e\u671f\u671b\u7c7b\u578b\u4e0d\u4e00\u81f4\uff0c\u90fd\u4f1a\u5bfc\u81f4\u6d4b\u8bd5\u5931\u8d25\uff1b\n\u793a\u4f8b:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'    @Test\n    @DisplayName("\u5f02\u5e38\u7684\u65ad\u8a00")\n    void exceptionTesting() {\n        // \u5176execute\u65b9\u6cd5\u6267\u884c\u65f6\uff0c\u5982\u679c\u629b\u51fa\u4e86\u5f02\u5e38\uff0c\u5e76\u4e14\u5f02\u5e38\u7684\u7c7b\u578b\u662fassertThrows\u7684\u7b2c\u4e00\u4e2a\u53c2\u6570(\u8fd9\u91cc\u662fArithmeticException.class)\uff0c\n        // \u8fd4\u56de\u503c\u662f\u5f02\u5e38\u7684\u5b9e\u4f8b\n        Exception exception = assertThrows(ArithmeticException.class, () -> Math.floorDiv(1,0));\n        log.info("assertThrows\u901a\u8fc7\u540e\uff0c\u8fd4\u56de\u7684\u5f02\u5e38\u5b9e\u4f8b\uff1a{}", exception.getMessage());\n    }\n')),(0,i.kt)("h3",{id:"\u65ad\u8a00\u4f7f\u7528\u51c6\u5219"},"\u65ad\u8a00\u4f7f\u7528\u51c6\u5219"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u5bf9\u8c61\u5b9e\u4f8b\u662f\u5426\u76f8\u7b49\u65ad\u8a00"),(0,i.kt)("br",{parentName:"p"}),"\n","1.\u662f\u5426\u662f\u540c\u4e00\u4e2a\u5bf9\u8c61\u5b9e\u4f8b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"  \u4f7f\u7528Junitd\u7684Assertions.assertEquals\n  Assertions.assertEquals(expectedJobDetail, actualJobDetail)\n")),(0,i.kt)("p",null,"  \u4e0d\u662f\u540c\u4e00\u4e2a\u5b9e\u4f8b\uff0c\u4f46\u662f\u6bd4\u8f83\u5b9e\u4f8b\u7684\u5c5e\u6027\u503c\u662f\u5426\u5b8c\u5168\u76f8\u7b49\nAssertJ"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"  \u5e38\u7528\u573a\u666f \u6570\u636e\u5e93\u66f4\u65b0\u64cd\u4f5c\u524d/\u540e\u7684\u5bf9\u8c61\u6bd4\u8f83\n  \u4f7f\u7528AssertJ\u7684assertThat\u65ad\u8a00usingRecursiveComparison\u6a21\u5f0f\n  Assertions.assertThat(actualObject).usingRecursiveComparison().isEqualTo(expectedObject);\n")),(0,i.kt)("p",null,"2.list\u7b49\u96c6\u5408\u7ed3\u679c\u7684\u65ad\u8a00\n\u7ed3\u679c\u96c6\u96c6\u5408\u7684\u5927\u5c0f\u9700\u8981\u65ad\u8a00\n\u8303\u56f4\u6216\u5219\u5177\u4f53\u5927size "),(0,i.kt)("p",null,"  \u7ed3\u679c\u96c6\u96c6\u5408\u4e2d\u7684\u6bcf\u4e2a\u5bf9\u8c61\u9700\u8981\u65ad\u8a00,\u63a8\u8350\u7ed3\u5408stream\u6a21\u5f0f\u7684Predicate\u8fdb\u884c\u4f7f\u7528\n\u793a\u4f8b:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"  ArrayList<JobRespProtocol> jobRespProtocolArrayList=service.batchChange(jobDetailReqBatchUpdate);\n  //list\u914d\u548cstream\u7684predicate\u8fdb\u884c\u65ad\u8a00\u5224\u65ad\n  Predicate<JobRespProtocol> statusPrecate = e -> e.getStatus()==0;\n  assertEquals(2, jobRespProtocolArrayList.size());\n  assertTrue(jobRespProtocolArrayList.stream().anyMatch(statusPrecate));\n")),(0,i.kt)("h2",{id:"\u5355\u5143\u6d4b\u8bd5\u7684\u7f16\u5199"},"\u5355\u5143\u6d4b\u8bd5\u7684\u7f16\u5199"),(0,i.kt)("h3",{id:"\u7c7b\u7684\u5212\u5206"},"\u7c7b\u7684\u5212\u5206"),(0,i.kt)("p",null,"\u6309\u7c7b\u7684\u5927\u529f\u80fd\u53ef\u4ee5\u5927\u4f53\u5206\u7c7b"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Controller  \u63d0\u4f9bhttp\u670d\u52a1\u7684controller \u914d\u5408mockmvc\u505a\u5355\u5143\u6d4b\u8bd5 "),(0,i.kt)("li",{parentName:"ul"},"Service   \u4e1a\u52a1\u903b\u8f91\u4ee3\u7801\u7684service\u5c42"),(0,i.kt)("li",{parentName:"ul"},"Dao \u4e0e\u6570\u636e\u5e93\u64cd\u4f5c\u7684Dao\u5c42"),(0,i.kt)("li",{parentName:"ul"},"util\u5de5\u5177\u529f\u80fd\u7c7b \u5e38\u7528\u7684\u529f\u80fd\u5de5\u5177"),(0,i.kt)("li",{parentName:"ul"},"exception\u7c7b  \u81ea\u5b9a\u4e49\u7684\u5f02\u5e38\u7c7b"),(0,i.kt)("li",{parentName:"ul"},"enum\u7c7b \u679a\u4e3e\u7c7b   "),(0,i.kt)("li",{parentName:"ul"},"entity\u7c7b  \u7528\u4e8eDB\u4ea4\u4e92\u4ee5\u53ca\u65b9\u6cd5\u5904\u7406\u7684\u53c2\u6570VO\u5bf9\u8c61\u7b49\u5b9e\u4f53\u7c7b\uff08\u82e5\u9664\u4e86\u6b63\u5e38\u5f97get set\u5916\u8fd8\u6709\u5176\u4ed6\u81ea\u5b9a\u4e49\u51fd\u6570\u7684\u9700\u8981\u8fdb\u884c\u5355\u5143\u6d4b\u8bd5\uff09")),(0,i.kt)("h3",{id:"controller\u7c7b\u7684\u5355\u5143\u6d4b\u8bd5"},"Controller\u7c7b\u7684\u5355\u5143\u6d4b\u8bd5"),(0,i.kt)("p",null,"\u4f7f\u7528Mockmvc\n\u4e3b\u8981\u9a8c\u8bc1 \u63a5\u53e3\u8bf7\u6c42RequestMethod\u65b9\u5f0f\uff0c\u57fa\u672c\u53c2\u6570\uff0c\u4ee5\u53ca\u8fd4\u56de\u7ed3\u679c\u9884\u671f\u3002\n\u4e3b\u8981\u573a\u666f:\u5e26\u4e0a\u975e\u5fc5\u8981\u53c2\u6570\u548c\u4e0d\u5e26\u975e\u5fc5\u8981\u53c2\u6570\u7684\u573a\u666f \u5f02\u5e38"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},' @Test\n    public void testList() throws Exception {\n        //\u5e26\u4e0a\u975e\u5fc5\u8981\u53c2\u6570\n        MultiValueMap<String, String> paramsMap = new LinkedMultiValueMap<>();\n        paramsMap.add("startDate", String.valueOf(System.currentTimeMillis()));\n        MvcResult mvcResult = mockMvc.perform(get("/jobhistory/list")\n                .params(paramsMap))\n                .andExpect(status().isOk())\n                .andExpect(content().contentType(MediaType.APPLICATION_JSON))\n                .andReturn();\n\n        Message res = JsonUtils.jackson().readValue(mvcResult.getResponse().getContentAsString(), Message.class);\n        assertEquals(res.getStatus(), MessageStatus.SUCCESS());\n        logger.info(mvcResult.getResponse().getContentAsString());\n\n        //\u4e0d\u5e26\u975e\u5fc5\u8981\u53c2\u6570\n        mvcResult = mockMvc.perform(get("/jobhistory/list"))\n                .andExpect(status().isOk())\n                .andExpect(content().contentType(MediaType.APPLICATION_JSON))\n                .andReturn();\n\n        res = JsonUtils.jackson().readValue(mvcResult.getResponse().getContentAsString(), Message.class);\n        assertEquals(res.getStatus(), MessageStatus.SUCCESS());\n\n        logger.info(mvcResult.getResponse().getContentAsString());\n    }\n\n')),(0,i.kt)("h3",{id:"server-\u7c7b\u7684\u5355\u5143\u6d4b\u8bd5"},"Server \u7c7b\u7684\u5355\u5143\u6d4b\u8bd5"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"//todo\n")),(0,i.kt)("h3",{id:"dao-\u7c7b\u7684\u5355\u5143\u6d4b\u8bd5"},"Dao \u7c7b\u7684\u5355\u5143\u6d4b\u8bd5"),(0,i.kt)("p",null,"\u4f7f\u7528H2\u6570\u636e\u5e93\uff0c\u914d\u7f6e\u6587\u4ef6\u4e2dapplication.properties\u4e2d\u9700\u8981\u914d\u7f6eH2\u6570\u636e\u5e93\u7684\u57fa\u672c\u4fe1\u606f\uff0c\u4ee5\u53camybatis\u7684\u76f8\u5173\u8def\u5f84\u4fe1\u606f"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-properties"},"#h2\u6570\u636e\u5e93\u914d\u7f6e\nspring.datasource.driver-class-name=org.h2.Driver\n#\u8fde\u63a5\u6570\u636e\u5e93\nspring.datasource.url=jdbc:h2:mem:test;MODE=MySQL;DB_CLOSE_DELAY=-1;DATABASE_TO_LOWER=true\n#\u521d\u59cb\u5316\u6570\u636e\u5e93\u8868\u7684\u811a\u672c\nspring.datasource.schema=classpath:create.sql\n#\u521d\u59cb\u5316\u6570\u636e\u5e93\u8868\u4e2d\u7684\u6570\u636e\u7684\u811a\u672c\nspring.datasource.data=classpath:data.sql\nspring.datasource.username=sa\nspring.datasource.password=\nspring.datasource.hikari.connection-test-query=select 1\nspring.datasource.hikari.minimum-idle=5\nspring.datasource.hikari.auto-commit=true\nspring.datasource.hikari.validation-timeout=3000\nspring.datasource.hikari.pool-name=linkis-test\nspring.datasource.hikari.maximum-pool-size=50\nspring.datasource.hikari.connection-timeout=30000\nspring.datasource.hikari.idle-timeout=600000\nspring.datasource.hikari.leak-detection-threshold=0\nspring.datasource.hikari.initialization-fail-timeout=1\n\n#\u914d\u7f6emybatis-plus\u7684mapper\u4fe1\u606f \u56e0\u4e3a\u4f7f\u7528\u7684\u662fmybatis-plus\uff0c\u4f7f\u7528mybatis-plus\u6d45\u9189\nmybatis-plus.mapper-locations=classpath:org/apache/linkis/jobhistory/dao/impl/JobDetailMapper.xml,classpath:org/apache/linkis/jobhistory/dao/impl/JobHistoryMapper.xml\nmybatis-plus.type-aliases-package=org.apache.linkis.jobhistory.entity\nmybatis-plus.configuration.log-impl=org.apache.ibatis.logging.stdout.StdOutImpl\n")),(0,i.kt)("p",null,"\u7f16\u5199\u89c4\u8303 "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u4f7f\u7528@Transactional\u4ee5\u53ca@Rollback \u5b9e\u73b0\u6570\u636e\u56de\u6eda\uff0c\u907f\u514d\u6570\u636e\u6c61\u67d3"),(0,i.kt)("li",{parentName:"ol"},"\u6bcf\u4e00\u4e2aDaoTest\u5e94\u8be5\u6709\u4e00\u4e2a\u521b\u5efa\u521d\u59cb\u5316\u6570\u636e\u516c\u5171\u65b9\u6cd5\uff08\u6216\u5bfc\u5165\u6570\u636e\u7684\u65b9\u5f0fcsv\uff09\u6765\u51c6\u5907\u6570\u636e,\u76f8\u5173\u7684\u67e5\u8be2\uff0c\u66f4\u65b0\uff0c\u5220\u9664\u7b49\u64cd\u4f5c\u90fd\u5e94\u8be5\u5148\u8c03\u7528\u8be5\u516c\u5171\u65b9\u6cd5\u8fdb\u884c\u6570\u636e\u7684\u51c6\u5907"),(0,i.kt)("li",{parentName:"ol"},"\u521b\u5efa\u6d4b\u8bd5\u7684\u6570\u636e\uff0c\u5982\u679c\u67d0\u5c5e\u6027\u503c\u662f\u81ea\u589eid\uff0c\u5219\u4e0d\u5e94\u8be5\u8fdb\u884c\u8d4b\u503c"),(0,i.kt)("li",{parentName:"ol"},"\u521b\u5efa\u7684\u6d4b\u8bd5\u6570\u636e\uff0c\u5e94\u5c3d\u53ef\u80fd\u548c\u5b9e\u9645\u6837\u4f8b\u6570\u636e\u4fdd\u6301\u4e00\u81f4"),(0,i.kt)("li",{parentName:"ol"},"\u66f4\u65b0\u6570\u636e\u6d4b\u8bd5\u65f6\uff0c\u5982\u679c\u5b57\u6bb5\u5141\u8bb8\uff0c\u8bf7\u5e26\u4e0a",(0,i.kt)("inlineCode",{parentName:"li"},"modify-\u539f\u59cb\u503c"),"\u524d\u7f00")))}m.isMDXComponent=!0}}]);