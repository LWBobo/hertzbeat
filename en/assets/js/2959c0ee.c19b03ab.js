"use strict";(self.webpackChunktancloud=self.webpackChunktancloud||[]).push([[8894],{4137:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),s=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(a),m=n,k=u["".concat(c,".").concat(m)]||u[m]||d[m]||l;return a?r.createElement(k,o(o({ref:t},p),{},{components:a})):r.createElement(k,o({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5642:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=a(7462),n=(a(7294),a(4137));const l={id:"quickstart",title:"Quick Start",sidebar_label:"Quick Start"},o=void 0,i={unversionedId:"start/quickstart",id:"start/quickstart",title:"Quick Start",description:"\ud83d\udc15 Quick Start",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/start/quickstart.md",sourceDirName:"start",slug:"/start/quickstart",permalink:"/en/docs/start/quickstart",draft:!1,editUrl:"https://github.com/dromara/hertzbeat/edit/master/home/i18n/en/docusaurus-plugin-content-docs/current/start/quickstart.md",tags:[],version:"current",frontMatter:{id:"quickstart",title:"Quick Start",sidebar_label:"Quick Start"},sidebar:"docs",previous:{title:"Introduce",permalink:"/en/docs/"},next:{title:"TDengine Init(optional)",permalink:"/en/docs/start/tdengine-init"}},c={},s=[{value:"\ud83d\udc15 Quick Start",id:"-quick-start",level:3},{value:"\ud83c\udf5e Install HertzBeat",id:"-install-hertzbeat",level:3},{value:"1\uff1aInstall quickly via docker",id:"1install-quickly-via-docker",level:5},{value:"2\uff1aInstall via package",id:"2install-via-package",level:5},{value:"3\uff1aStart via source code",id:"3start-via-source-code",level:5},{value:"4\uff1aInstall All(mysql+tdengine+hertzbeat) via Docker-compose",id:"4install-allmysqltdenginehertzbeat-via-docker-compose",level:5}],p={toc:s};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"-quick-start"},"\ud83d\udc15 Quick Start"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"If you don\u2019t want to deploy but use it directly, we provide ",(0,n.kt)("a",{parentName:"li",href:"https://console.tancloud.cn"},"SAAS Monitoring Cloud-TanCloud"),", ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"https://console.tancloud.cn"},"Log In And Register For Free")),"."),(0,n.kt)("li",{parentName:"ul"},"If you want to deploy HertzBeat local, please refer to the following Deployment Documentation for operation.")),(0,n.kt)("h3",{id:"-install-hertzbeat"},"\ud83c\udf5e Install HertzBeat"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"HertzBeat supports installation through source code, docker or package, cpu support X86/ARM64.")),(0,n.kt)("h5",{id:"1install-quickly-via-docker"},"1\uff1aInstall quickly via docker"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Just one command to get started: ",(0,n.kt)("inlineCode",{parentName:"p"},"docker run -d -p 1157:1157 --name hertzbeat tancloud/hertzbeat"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Access ",(0,n.kt)("inlineCode",{parentName:"p"},"localhost:1157")," to start, default account: ",(0,n.kt)("inlineCode",{parentName:"p"},"admin/hertzbeat")))),(0,n.kt)("p",null,"Detailed config refer to ",(0,n.kt)("a",{parentName:"p",href:"https://hertzbeat.com/docs/start/docker-deploy"},"Install HertzBeat via Docker")),(0,n.kt)("h5",{id:"2install-via-package"},"2\uff1aInstall via package"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Download the installation package ",(0,n.kt)("a",{parentName:"li",href:"https://gitee.com/dromara/hertzbeat/releases"},"GITEE Release")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/releases"},"GITHUB Release")),(0,n.kt)("li",{parentName:"ol"},"Need Jdk Environment, ",(0,n.kt)("inlineCode",{parentName:"li"},"jdk8 -- jdk11")),(0,n.kt)("li",{parentName:"ol"},"[optional]","Configure the HertzBeat configuration yml file ",(0,n.kt)("inlineCode",{parentName:"li"},"hertzbeat/config/application.yml")),(0,n.kt)("li",{parentName:"ol"},"Run shell ",(0,n.kt)("inlineCode",{parentName:"li"},"$ ./startup.sh ")),(0,n.kt)("li",{parentName:"ol"},"Access ",(0,n.kt)("inlineCode",{parentName:"li"},"localhost:1157")," to start, default account: ",(0,n.kt)("inlineCode",{parentName:"li"},"admin/hertzbeat"))),(0,n.kt)("p",null,"Detailed config refer to ",(0,n.kt)("a",{parentName:"p",href:"https://hertzbeat.com/docs/start/package-deploy"},"Install HertzBeat via Package")),(0,n.kt)("h5",{id:"3start-via-source-code"},"3\uff1aStart via source code"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Local source code debugging needs to start the back-end project manager and the front-end project web-app."),(0,n.kt)("li",{parentName:"ol"},"Backend\uff1aneed ",(0,n.kt)("inlineCode",{parentName:"li"},"maven3+"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"java8+"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"lombok"),", start the manager service."),(0,n.kt)("li",{parentName:"ol"},"Web\uff1aneed ",(0,n.kt)("inlineCode",{parentName:"li"},"nodejs npm angular-cli")," environment, Run ",(0,n.kt)("inlineCode",{parentName:"li"},"ng serve --open")," in ",(0,n.kt)("inlineCode",{parentName:"li"},"web-app")," directory after backend startup."),(0,n.kt)("li",{parentName:"ol"},"Access ",(0,n.kt)("inlineCode",{parentName:"li"},"localhost:4200")," to start, default account: ",(0,n.kt)("inlineCode",{parentName:"li"},"admin/hertzbeat"))),(0,n.kt)("p",null,"Detailed steps refer to ",(0,n.kt)("a",{parentName:"p",href:"../others/contributing"},"CONTRIBUTING"),"   "),(0,n.kt)("h5",{id:"4install-allmysqltdenginehertzbeat-via-docker-compose"},"4\uff1aInstall All(mysql+tdengine+hertzbeat) via Docker-compose"),(0,n.kt)("p",null,"Install and deploy the mysql database, tdengine database and hertzbeat at one time through ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/dromara/hertzbeat/tree/master/script/docker-compose"},"docker-compose deployment script"),"."),(0,n.kt)("p",null,"Detailed steps refer to ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/dromara/hertzbeat/tree/master/script/docker-compose"},"Install via Docker-Compose")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"HAVE FUN")))}d.isMDXComponent=!0}}]);