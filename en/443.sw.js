"use strict";(self.webpackChunktancloud=self.webpackChunktancloud||[]).push([[443],{443:(e,t,s)=>{s.r(t),s.d(t,{default:()=>o});s(524),s(120),s(188),s(80);s(989);var c=s(917);s(491),s(486);var n=s(125),a=s(951);s(119),s(873);const r={cacheWillUpdate:async({response:e})=>200===e.status||0===e.status?e:null};s(902);class u extends a._{constructor(e={}){super(e),this.plugins.some((e=>"cacheWillUpdate"in e))||this.plugins.unshift(r)}async _handle(e,t){const s=t.fetchAndCachePut(e).catch((()=>{}));t.waitUntil(s);let c,a=await t.cacheMatch(e);if(a)0;else{0;try{a=await s}catch(e){e instanceof Error&&(c=e)}}if(!a)throw new n.V("no-response",{url:e.url,error:c});return a}}s(54);function o(e){e.debug&&console.log("[WebdriverIO-PWA][SW]: running swCustom code",e),(0,c.X)((e=>[/graph\.facebook\.com\/.*\/picture/,/netlify\.com\/img/,/avatars1\.githubusercontent/].some((t=>e.url.href.match(t)))),new u)}}}]);