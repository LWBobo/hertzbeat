"use strict";(self.webpackChunktancloud=self.webpackChunktancloud||[]).push([[8251],{4137:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>c});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),s=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},d=function(t){var e=s(t.components);return r.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),m=s(n),c=a,g=m["".concat(p,".").concat(c)]||m[c]||u[c]||i;return n?r.createElement(g,l(l({ref:e},d),{},{components:n})):r.createElement(g,l({ref:e},d))}));function c(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9266:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=n(7462),a=(n(7294),n(4137));const i={id:"fullsite",title:"Monitoring\uff1aFull site monitoring",sidebar_label:"Full site monitoring"},l=void 0,o={unversionedId:"help/fullsite",id:"help/fullsite",title:"Monitoring\uff1aFull site monitoring",description:"Available or not to monitor all pages of the website.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/help/fullsite.md",sourceDirName:"help",slug:"/help/fullsite",permalink:"/en/docs/help/fullsite",draft:!1,editUrl:"https://github.com/dromara/hertzbeat/edit/master/home/i18n/en/docusaurus-plugin-content-docs/current/help/fullsite.md",tags:[],version:"current",frontMatter:{id:"fullsite",title:"Monitoring\uff1aFull site monitoring",sidebar_label:"Full site monitoring"},sidebar:"docs",previous:{title:"Port availability",permalink:"/en/docs/help/port"},next:{title:"MySQL database",permalink:"/en/docs/help/mysql"}},p={},s=[{value:"Configuration parameter",id:"configuration-parameter",level:3},{value:"Collection indicator",id:"collection-indicator",level:3},{value:"Indicator set\uff1asummary",id:"indicator-setsummary",level:4}],d={toc:s};function u(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Available or not to monitor all pages of the website.",(0,a.kt)("br",{parentName:"p"}),"\n","A website often has multiple pages provided by different services. We monitor the full site by collecting the SiteMap exposed by the website.",(0,a.kt)("br",{parentName:"p"}),"\n","Note\u26a0\ufe0f This monitoring requires your website to support SiteMap. We support SiteMap in XML and TXT formats.    ")),(0,a.kt)("h3",{id:"configuration-parameter"},"Configuration parameter"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter name"),(0,a.kt)("th",{parentName:"tr",align:null},"Parameter help description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Monitoring Host"),(0,a.kt)("td",{parentName:"tr",align:null},"Monitored IPV4, IPV6 or domain name. Note\u26a0\ufe0fWithout protocol header (eg: https://, http://)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Monitoring name"),(0,a.kt)("td",{parentName:"tr",align:null},"Identify the name of this monitoring. The name needs to be unique")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Port"),(0,a.kt)("td",{parentName:"tr",align:null},"Ports provided by website, http generally defaults to 80 and https generally defaults to 443")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"SiteMap"),(0,a.kt)("td",{parentName:"tr",align:null},"Relative path of website SiteMap address, eg\uff1a/sitemap.xml")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Enable HTTPS"),(0,a.kt)("td",{parentName:"tr",align:null},"Whether to access the website through HTTPS. Note\u26a0\ufe0fWhen HTTPS is enabled, the default corresponding port needs to be changed to 443")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Collection interval"),(0,a.kt)("td",{parentName:"tr",align:null},"Interval time of monitor periodic data collection, unit: second, and the minimum interval that can be set is 10 seconds")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Whether to detect"),(0,a.kt)("td",{parentName:"tr",align:null},"Whether to detect and check the availability of monitoring before adding monitoring. Adding and modifying operations will continue only after the detection is successful")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Description remarks"),(0,a.kt)("td",{parentName:"tr",align:null},"For more information about identifying and describing this monitoring, users can note information here")))),(0,a.kt)("h3",{id:"collection-indicator"},"Collection indicator"),(0,a.kt)("h4",{id:"indicator-setsummary"},"Indicator set\uff1asummary"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Indicator name"),(0,a.kt)("th",{parentName:"tr",align:null},"Indicator unit"),(0,a.kt)("th",{parentName:"tr",align:null},"Indicator help description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"url"),(0,a.kt)("td",{parentName:"tr",align:null},"none"),(0,a.kt)("td",{parentName:"tr",align:null},"URL path of web page")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"statusCode"),(0,a.kt)("td",{parentName:"tr",align:null},"none"),(0,a.kt)("td",{parentName:"tr",align:null},"Response HTTP status code for requesting the website")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"responseTime"),(0,a.kt)("td",{parentName:"tr",align:null},"ms"),(0,a.kt)("td",{parentName:"tr",align:null},"Website response time")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"errorMsg"),(0,a.kt)("td",{parentName:"tr",align:null},"none"),(0,a.kt)("td",{parentName:"tr",align:null},"Error message feedback after requesting the website")))))}u.isMDXComponent=!0}}]);