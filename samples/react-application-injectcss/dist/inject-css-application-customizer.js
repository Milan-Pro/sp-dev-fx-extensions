define("5a1fcffd-dfeb-4844-b478-1feb4325a5a7_0.0.1",["@microsoft/decorators","@microsoft/sp-core-library","@microsoft/sp-application-base","InjectCssApplicationCustomizerStrings"],function(t,e,n,r){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=0)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(1),o=(n.n(r),n(2)),i=(n.n(o),n(3)),c=(n.n(i),n(4)),s=(n.n(c),this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}()),u=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,c=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(c=(i<3?o(c):i>3?o(e,n,c):o(e,n))||c);return i>3&&c&&Object.defineProperty(e,n,c),c},f=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return s(e,t),e.prototype.onInit=function(){o.Log.info("InjectCssApplicationCustomizer","Initialized "+c.Title);var t=this.properties.cssurl;if(t){var e=document.getElementsByTagName("head")[0]||document.documentElement,n=document.createElement("link");n.href=t,n.rel="stylesheet",n.type="text/css",e.insertAdjacentElement("beforeEnd",n)}return Promise.resolve()},u([r.override],e.prototype,"onInit",null),e}(i.BaseApplicationCustomizer);e.default=f},function(e,n){e.exports=t},function(t,n){t.exports=e},function(t,e){t.exports=n},function(t,e){t.exports=r}])});