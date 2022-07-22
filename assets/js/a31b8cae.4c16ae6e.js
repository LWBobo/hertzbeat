"use strict";(self.webpackChunktancloud=self.webpackChunktancloud||[]).push([[2904],{4137:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>k});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),c=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(r),k=n,u=d["".concat(p,".").concat(k)]||d[k]||m[k]||l;return r?a.createElement(u,o(o({ref:t},s),{},{components:r})):a.createElement(u,o({ref:t},s))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var c=2;c<l;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7657:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var a=r(7462),n=(r(7294),r(4137));const l={id:"quickstart",title:"\u5feb\u901f\u5f00\u59cb",sidebar_label:"\u5feb\u901f\u5f00\u59cb"},o=void 0,i={unversionedId:"start/quickstart",id:"version-v1.0.0/start/quickstart",title:"\u5feb\u901f\u5f00\u59cb",description:"\ud83d\udc15 \u5f00\u59cb\u4f7f\u7528",source:"@site/versioned_docs/version-v1.0.0/start/quickstart.md",sourceDirName:"start",slug:"/start/quickstart",permalink:"/docs/v1.0.0/start/quickstart",draft:!1,editUrl:"https://github.com/dromara/hertzbeat/edit/master/home/versioned_docs/version-v1.0.0/start/quickstart.md",tags:[],version:"v1.0.0",frontMatter:{id:"quickstart",title:"\u5feb\u901f\u5f00\u59cb",sidebar_label:"\u5feb\u901f\u5f00\u59cb"},sidebar:"docs",previous:{title:"\u4ecb\u7ecd",permalink:"/docs/v1.0.0/"},next:{title:"MYSQL\u5b89\u88c5\u521d\u59cb\u5316",permalink:"/docs/v1.0.0/start/mysql-init"}},p={},c=[{value:"\ud83d\udc15 \u5f00\u59cb\u4f7f\u7528",id:"-\u5f00\u59cb\u4f7f\u7528",level:3},{value:"\ud83d\udc35 \u4f9d\u8d56\u670d\u52a1\u90e8\u7f72",id:"-\u4f9d\u8d56\u670d\u52a1\u90e8\u7f72",level:3},{value:"\u5b89\u88c5MYSQL",id:"\u5b89\u88c5mysql",level:5},{value:"\u5b89\u88c5TDengine",id:"\u5b89\u88c5tdengine",level:5},{value:"\ud83c\udf5e HertzBeat\u5b89\u88c5",id:"-hertzbeat\u5b89\u88c5",level:3},{value:"\u65b9\u5f0f\u4e00\uff1aDocker\u65b9\u5f0f\u5feb\u901f\u5b89\u88c5",id:"\u65b9\u5f0f\u4e00docker\u65b9\u5f0f\u5feb\u901f\u5b89\u88c5",level:4},{value:"\u65b9\u5f0f\u4e8c\uff1a\u901a\u8fc7\u5b89\u88c5\u5305\u5b89\u88c5",id:"\u65b9\u5f0f\u4e8c\u901a\u8fc7\u5b89\u88c5\u5305\u5b89\u88c5",level:4},{value:"\u65b9\u5f0f\u4e09\uff1a\u672c\u5730\u4ee3\u7801\u542f\u52a8",id:"\u65b9\u5f0f\u4e09\u672c\u5730\u4ee3\u7801\u542f\u52a8",level:4},{value:"\u65b9\u5f0f\u56db\uff1aDocker-Compose\u7edf\u4e00\u5b89\u88c5hertzbeat\u53ca\u5176\u4f9d\u8d56\u670d\u52a1",id:"\u65b9\u5f0f\u56dbdocker-compose\u7edf\u4e00\u5b89\u88c5hertzbeat\u53ca\u5176\u4f9d\u8d56\u670d\u52a1",level:4}],s={toc:c};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"-\u5f00\u59cb\u4f7f\u7528"},"\ud83d\udc15 \u5f00\u59cb\u4f7f\u7528"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5982\u679c\u60a8\u4e0d\u60f3\u90e8\u7f72\u800c\u662f\u76f4\u63a5\u4f7f\u7528\uff0c\u6211\u4eec\u63d0\u4f9bSAAS\u76d1\u63a7\u4e91-",(0,n.kt)("a",{parentName:"li",href:"https://console.tancloud.cn"},"TanCloud\u63a2\u4e91"),"\uff0c\u5373\u523b",(0,n.kt)("a",{parentName:"li",href:"https://console.tancloud.cn"},"\u767b\u5f55\u6ce8\u518c"),"\u514d\u8d39\u4f7f\u7528\u3002  "),(0,n.kt)("li",{parentName:"ul"},"\u5982\u679c\u60a8\u662f\u60f3\u5c06HertzBeat\u90e8\u7f72\u5230\u5185\u7f51\u73af\u5883\u642d\u5efa\u76d1\u63a7\u7cfb\u7edf\uff0c\u8bf7\u53c2\u8003\u4e0b\u9762\u7684\u90e8\u7f72\u6587\u6863\u8fdb\u884c\u64cd\u4f5c\u3002 ")),(0,n.kt)("p",null,"\u5b89\u88c5\u90e8\u7f72\u89c6\u9891\u6559\u7a0b: ",(0,n.kt)("a",{parentName:"p",href:"https://www.bilibili.com/video/BV1GY41177YL"},"HertzBeat\u5b89\u88c5\u90e8\u7f72-BiliBili"),"   "),(0,n.kt)("h3",{id:"-\u4f9d\u8d56\u670d\u52a1\u90e8\u7f72"},"\ud83d\udc35 \u4f9d\u8d56\u670d\u52a1\u90e8\u7f72"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"HertzBeat\u6700\u5c11\u4f9d\u8d56\u4e8e \u5173\u7cfb\u578b\u6570\u636e\u5e93",(0,n.kt)("a",{parentName:"p",href:"https://www.mysql.com/"},"MYSQL5+")," \u548c \u65f6\u5e8f\u6027\u6570\u636e\u5e93",(0,n.kt)("a",{parentName:"p",href:"https://www.taosdata.com/getting-started"},"TDengine2+"))),(0,n.kt)("h5",{id:"\u5b89\u88c5mysql"},"\u5b89\u88c5MYSQL"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"docker\u5b89\u88c5MYSQl",(0,n.kt)("br",{parentName:"li"}),(0,n.kt)("inlineCode",{parentName:"li"},"docker run -d --name mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 mysql:5.7"),"   "),(0,n.kt)("li",{parentName:"ol"},"\u521b\u5efa\u540d\u79f0\u4e3ahertzbeat\u7684\u6570\u636e\u5e93  "),(0,n.kt)("li",{parentName:"ol"},"\u6267\u884c\u4f4d\u4e8e\u9879\u76ee\u4ed3\u5e93/script/sql/\u76ee\u5f55\u4e0b\u7684\u6570\u636e\u5e93\u811a\u672c ",(0,n.kt)("a",{parentName:"li",href:"https://gitee.com/dromara/hertzbeat/raw/master/script/sql/schema.sql"},"schema.sql"),"      ")),(0,n.kt)("p",null,"\u8be6\u7ec6\u6b65\u9aa4\u53c2\u8003 ",(0,n.kt)("a",{parentName:"p",href:"/docs/v1.0.0/start/mysql-init"},"\u4f9d\u8d56\u670d\u52a1MYSQL\u5b89\u88c5\u521d\u59cb\u5316"),"    "),(0,n.kt)("h5",{id:"\u5b89\u88c5tdengine"},"\u5b89\u88c5TDengine"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"docker\u5b89\u88c5TDengine",(0,n.kt)("br",{parentName:"li"}),(0,n.kt)("inlineCode",{parentName:"li"},"docker run -d -p 6030-6049:6030-6049 -p 6030-6049:6030-6049/udp --name tdengine tdengine/tdengine:2.4.0.12"),"     "),(0,n.kt)("li",{parentName:"ol"},"\u521b\u5efa\u540d\u79f0\u4e3ahertzbeat\u7684\u6570\u636e\u5e93")),(0,n.kt)("p",null,"\u8be6\u7ec6\u6b65\u9aa4\u53c2\u8003 ",(0,n.kt)("a",{parentName:"p",href:"/docs/v1.0.0/start/tdengine-init"},"\u4f9d\u8d56\u670d\u52a1TDengine\u5b89\u88c5\u521d\u59cb\u5316"),"   "),(0,n.kt)("h3",{id:"-hertzbeat\u5b89\u88c5"},"\ud83c\udf5e HertzBeat\u5b89\u88c5"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"HertzBeat\u652f\u6301\u901a\u8fc7\u6e90\u7801\u5b89\u88c5\u542f\u52a8\uff0cDocker\u5bb9\u5668\u8fd0\u884c\u548c\u5b89\u88c5\u5305\u65b9\u5f0f\u5b89\u88c5\u90e8\u7f72\u3002  ")),(0,n.kt)("h4",{id:"\u65b9\u5f0f\u4e00docker\u65b9\u5f0f\u5feb\u901f\u5b89\u88c5"},"\u65b9\u5f0f\u4e00\uff1aDocker\u65b9\u5f0f\u5feb\u901f\u5b89\u88c5"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"docker run -d -p 1157:1157 -v /opt/application.yml:/opt/hertzbeat/config/application.yml --name hertzbeat tancloud/hertzbeat:[\u7248\u672ctag]"),"  "),(0,n.kt)("p",null,"\u8be6\u7ec6\u6b65\u9aa4\u53c2\u8003 ",(0,n.kt)("a",{parentName:"p",href:"/docs/v1.0.0/start/docker-deploy"},"\u901a\u8fc7Docker\u65b9\u5f0f\u5b89\u88c5HertzBeat")," "),(0,n.kt)("h4",{id:"\u65b9\u5f0f\u4e8c\u901a\u8fc7\u5b89\u88c5\u5305\u5b89\u88c5"},"\u65b9\u5f0f\u4e8c\uff1a\u901a\u8fc7\u5b89\u88c5\u5305\u5b89\u88c5"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u4e0b\u8f7d\u60a8\u7cfb\u7edf\u73af\u5883\u5bf9\u5e94\u7684\u5b89\u88c5\u5305 ",(0,n.kt)("a",{parentName:"li",href:"https://gitee.com/dromara/hertzbeat/releases"},"GITEE Release")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/releases"},"GITHUB Release"),"  "),(0,n.kt)("li",{parentName:"ol"},"\u914d\u7f6eHertzBeat\u7684\u914d\u7f6e\u6587\u4ef6 hertzbeat/config/application.yml   "),(0,n.kt)("li",{parentName:"ol"},"\u90e8\u7f72\u542f\u52a8 ",(0,n.kt)("inlineCode",{parentName:"li"},"$ ./startup.sh "),"   ")),(0,n.kt)("p",null,"\u8be6\u7ec6\u6b65\u9aa4\u53c2\u8003 ",(0,n.kt)("a",{parentName:"p",href:"/docs/v1.0.0/start/package-deploy"},"\u901a\u8fc7\u5b89\u88c5\u5305\u5b89\u88c5HertzBeat")," "),(0,n.kt)("h4",{id:"\u65b9\u5f0f\u4e09\u672c\u5730\u4ee3\u7801\u542f\u52a8"},"\u65b9\u5f0f\u4e09\uff1a\u672c\u5730\u4ee3\u7801\u542f\u52a8"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u6b64\u4e3a\u524d\u540e\u7aef\u5206\u79bb\u9879\u76ee\uff0c\u672c\u5730\u4ee3\u7801\u8c03\u8bd5\u9700\u8981\u5206\u522b\u542f\u52a8\u540e\u7aef\u5de5\u7a0bmanager\u548c\u524d\u7aef\u5de5\u7a0bweb-app"),(0,n.kt)("li",{parentName:"ol"},"\u540e\u7aef\uff1a\u9700\u8981",(0,n.kt)("inlineCode",{parentName:"li"},"maven3+"),"\u548c",(0,n.kt)("inlineCode",{parentName:"li"},"java8+"),"\u73af\u5883\uff0c\u4fee\u6539YML\u914d\u7f6e\u4fe1\u606f\u5e76\u542f\u52a8manager\u670d\u52a1"),(0,n.kt)("li",{parentName:"ol"},"\u524d\u7aef\uff1a\u9700\u8981",(0,n.kt)("inlineCode",{parentName:"li"},"nodejs npm angular-cli"),"\u73af\u5883\uff0c\u5f85\u672c\u5730\u540e\u7aef\u542f\u52a8\u540e\uff0c\u5728web-app\u76ee\u5f55\u4e0b\u542f\u52a8 ",(0,n.kt)("inlineCode",{parentName:"li"},"ng serve --open")),(0,n.kt)("li",{parentName:"ol"},"\u6d4f\u89c8\u5668\u8bbf\u95ee localhost:4200 \u5373\u53ef\u5f00\u59cb\uff0c\u9ed8\u8ba4\u8d26\u6237\u5bc6\u7801 admin/hertzbeat  ")),(0,n.kt)("p",null,"\u8be6\u7ec6\u6b65\u9aa4\u53c2\u8003 ",(0,n.kt)("a",{parentName:"p",href:"../others/contributing"},"\u53c2\u4e0e\u8d21\u732e\u4e4b\u672c\u5730\u4ee3\u7801\u542f\u52a8")),(0,n.kt)("h4",{id:"\u65b9\u5f0f\u56dbdocker-compose\u7edf\u4e00\u5b89\u88c5hertzbeat\u53ca\u5176\u4f9d\u8d56\u670d\u52a1"},"\u65b9\u5f0f\u56db\uff1aDocker-Compose\u7edf\u4e00\u5b89\u88c5hertzbeat\u53ca\u5176\u4f9d\u8d56\u670d\u52a1"),(0,n.kt)("p",null,"\u901a\u8fc7 ",(0,n.kt)("a",{parentName:"p",href:"https://gitee.com/dromara/hertzbeat/tree/master/script/docker-compose"},"docker-compose\u90e8\u7f72\u811a\u672c")," \u4e00\u6b21\u6027\u628amysql\u6570\u636e\u5e93,tdengine\u6570\u636e\u5e93\u548chertzbeat\u5b89\u88c5\u90e8\u7f72\u3002"),(0,n.kt)("p",null,"\u8be6\u7ec6\u6b65\u9aa4\u53c2\u8003 ",(0,n.kt)("a",{parentName:"p",href:"https://gitee.com/dromara/hertzbeat/tree/master/script/docker-compose/README.md"},"docker-compose\u5b89\u88c5"),"  "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"HAVE FUN")))}m.isMDXComponent=!0}}]);