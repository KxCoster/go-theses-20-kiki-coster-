!function(e){function r(r){for(var t,c,d=r[0],b=r[1],l=r[2],i=0,s=[];i<d.length;i++)c=d[i],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&s.push(o[c][0]),o[c]=0;for(t in b)Object.prototype.hasOwnProperty.call(b,t)&&(e[t]=b[t]);for(a&&a(r);s.length;)s.shift()();return u.push.apply(u,l||[]),n()}function n(){for(var e,r=0;r<u.length;r++){for(var n=u[r],t=!0,d=1;d<n.length;d++){var b=n[d];0!==o[b]&&(t=!1)}t&&(u.splice(r--,1),e=c(c.s=n[0]))}return e}var t={},o={"viewer/bundle":0},u=[];function c(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var r=[],n=o[e];if(0!==n)if(n)r.push(n[2]);else{var t=new Promise((function(r,t){n=o[e]=[r,t]}));r.push(n[2]=t);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=function(e){return c.p+""+({}[e]||e)+"."+{3:"f75069f46170acf53b9b",6:"58b12435f9ec0b82d776",7:"07079094022f2c7a2e55",8:"1228dbbb69c6b00c8f34"}[e]+".js"}(e);var b=new Error;u=function(r){d.onerror=d.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var t=r&&("load"===r.type?"missing":r.type),u=r&&r.target&&r.target.src;b.message="Loading chunk "+e+" failed.\n("+t+": "+u+")",b.name="ChunkLoadError",b.type=t,b.request=u,n[1](b)}o[e]=void 0}};var l=setTimeout((function(){u({type:"timeout",target:d})}),12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(r)},c.m=e,c.c=t,c.d=function(e,r,n){c.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,r){if(1&r&&(e=c(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var t in e)c.d(n,t,function(r){return e[r]}.bind(null,t));return n},c.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(r,"a",r),r},c.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},c.p="https://cdn.readymag.com/6bfa1e36/dist/",c.oe=function(e){throw console.error(e),e};var d=window.webpackJsonp=window.webpackJsonp||[],b=d.push.bind(d);d.push=r,d=d.slice();for(var l=0;l<d.length;l++)r(d[l]);var a=b;u.push([4,"vendor~constructor/bundle~embed/bundle~embed2/bundle~font_preview_generator/bundle~homepage/bundle~s~31e40af7","rm~constructor/bundle~embed/bundle~embed2/bundle~font_preview_generator/bundle~homepage/bundle~scree~b2aeb57f","vendor~constructor/bundle~embed/bundle~homepage/bundle~screenshoter/bundle~viewer/bundle","vendor~constructor/bundle~homepage/bundle~screenshoter/bundle~viewer/bundle","vendor~constructor/bundle~embed2/bundle~screenshoter/bundle~viewer/bundle","vendor~constructor/bundle~screenshoter/bundle~viewer/bundle","rm~constructor/bundle~screenshoter/bundle~viewer/bundle","constructor/bundle~embed/bundle~embed2/bundle~font_preview_generator/bundle~homepage/bundle~screensh~4fa4627e","constructor/bundle~embed/bundle~homepage/bundle~screenshoter/bundle~viewer/bundle","constructor/bundle~homepage/bundle~screenshoter/bundle~viewer/bundle","constructor/bundle~embed2/bundle~screenshoter/bundle~viewer/bundle","constructor/bundle~screenshoter/bundle~viewer/bundle","constructor/bundle~homepage/bundle~viewer/bundle"]),n()}({4:function(e,r,n){n("55Il"),e.exports=n("rdHV")},rdHV:function(e,r,n){"use strict";n.r(r);n("KRV/"),n("ppX9"),n("MqNm");var t=n("xi34"),o=n("LKf3"),u=n("q1z7"),c=n.n(u),d=n("OTSC"),b=n("tcT1"),l=n("QNiq");n("YD2b");function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}RM.common=function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(n,!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(n).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}({},RM.common,{},window.viewerConfig),Object(t.a)((function(){l.a.setPageClass(),window.Backbone=Object(o.a)(c.a),RM.common.embedMode="true"===d.b.queryUrlGetParam("embedMode"),RM.common.embedDomainName=d.b.queryUrlGetParam("embedDomainName")||"",RM.common.embedDomainType=d.b.queryUrlGetParam("embedDomainType")||"",RM.viewerRouter=new b.a,window.Backbone.history.universalStart({pushState:!d.a.IS_FILE_PROTOCOL&&(!RM.config||void 0===RM.config.pushState||RM.config.pushState),root:RM.config&&RM.config.root||"/"}),Object(t.a)(window).on("load",(function(){Object(t.a)("html").addClass("page-loaded")}))}))}});