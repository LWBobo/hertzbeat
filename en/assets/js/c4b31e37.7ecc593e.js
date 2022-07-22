"use strict";(self.webpackChunktancloud=self.webpackChunktancloud||[]).push([[4945],{4137:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),g=o,m=u["".concat(s,".").concat(g)]||u[g]||d[g]||i;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1458:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7294),n(4137));const i={id:"alert_dingtalk",title:"Alert DingDing robot notification",sidebar_label:"Alert DingDing robot notification"},a=void 0,l={unversionedId:"help/alert_dingtalk",id:"help/alert_dingtalk",title:"Alert DingDing robot notification",description:"After the threshold is triggered send alarm information and notify the recipient by DingDing robot.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/help/alert_dingtalk.md",sourceDirName:"help",slug:"/help/alert_dingtalk",permalink:"/en/docs/help/alert_dingtalk",draft:!1,editUrl:"https://github.com/dromara/hertzbeat/edit/master/home/i18n/en/docusaurus-plugin-content-docs/current/help/alert_dingtalk.md",tags:[],version:"current",frontMatter:{id:"alert_dingtalk",title:"Alert DingDing robot notification",sidebar_label:"Alert DingDing robot notification"},sidebar:"docs",previous:{title:"Alert enterprise Wechat notification",permalink:"/en/docs/help/alert_wework"},next:{title:"Alert FeiShu robot notification",permalink:"/en/docs/help/alert_feishu"}},s={},c=[{value:"Operation steps",id:"operation-steps",level:3},{value:"DingDing robot common issues",id:"dingding-robot-common-issues",level:3}],p={toc:c};function d(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"After the threshold is triggered send alarm information and notify the recipient by DingDing robot.      ")),(0,o.kt)("h3",{id:"operation-steps"},"Operation steps"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"\u3010DingDing desktop client\u3011-> \u3010Group settings\u3011-> \u3010Intelligent group assistant\u3011-> \u3010Add new robot-select custom\u3011-> \u3010Set robot name and avatar\u3011-> \u3010Note\u26a0\ufe0fSet custom keywords: HertzBeat\u3011 ->\u3010Copy its webhook address after adding successfully\u3011"))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note\u26a0\ufe0f When adding a robot, its custom keywords need to be set in the security setting block: HertzBeat. Other security settings or the IP segment don't need to be filled in.    ")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"email",src:n(7338).Z,width:"2060",height:"1054"}),"     "),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"\u3010Save access_token value of the WebHook address of the robot\u3011"))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"eg\uff1a webHook address\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"https://oapi.dingtalk.com/robot/send?access_token=43aac28a236e001285ed84e473f8eabee70f63c7a70287acb0e0f8b65fade64f"),(0,o.kt)("br",{parentName:"p"}),"\n","Its robot access_token value is ",(0,o.kt)("inlineCode",{parentName:"p"},"43aac28a236e001285ed84e473f8eabee70f63c7a70287acb0e0f8b65fade64f"))),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"\u3010Alarm notification\u3011->\u3010Add new recipient\u3011 ->\u3010Select DingDing robot notification method\u3011->\u3010Set DingDing robot ACCESS_TOKEN\u3011-> \u3010Confirm\u3011"))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"email",src:n(5672).Z,width:"3776",height:"978"})),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Configure the associated alarm notification strategy\u26a0\ufe0f \u3010Add new notification strategy\u3011-> \u3010Associate the recipient just set\u3011-> \u3010Confirm\u3011"),"  ")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note\u26a0\ufe0f Adding a new recipient does not mean that it is effective to receive alarm information. It is also necessary to configure the associated alarm notification strategy, that is, to specify which messages are sent to which recipients."),"   ")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"email",src:n(6862).Z,width:"3756",height:"1288"}),"    "),(0,o.kt)("h3",{id:"dingding-robot-common-issues"},"DingDing robot common issues"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"DingDing group did not receive the robot alarm notification.  ",(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"Please check whether there is any triggered alarm information in the alarm center.",(0,o.kt)("br",{parentName:"p"}),"\n","Please check whether DingDing robot is configured with security custom keywords \uff1aHertzBeat.",(0,o.kt)("br",{parentName:"p"}),"\n","Please check whether the robot ACCESS_TOKEN is configured correctly and whether the alarm strategy association is configured.")))),(0,o.kt)("p",null,"Other issues can be fed back through the communication group ISSUE!"))}d.isMDXComponent=!0},6862:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/alert-notice-4-7b968f3d348ff468ad66fd59466be545.png"},7338:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/alert-notice-8-197567d52f856c256a3ea2fe098f9c71.png"},5672:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/alert-notice-9-fceafe37c9566f50bf6dd2b151b0dcb8.png"}}]);