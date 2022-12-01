// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,n;t=this,n=function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty,r=Object.prototype,e=r.toString,o=r.__defineGetter__,i=r.__defineSetter__,u=r.__lookupGetter__,a=r.__lookupSetter__,f=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?n:function(t,n,f){var c,l,y,p;if("object"!=typeof t||null===t||"[object Array]"===e.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof f||null===f||"[object Array]"===e.call(f))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+f+"`.");if((l="value"in f)&&(u.call(t,n)||a.call(t,n)?(c=t.__proto__,t.__proto__=r,delete t[n],t[n]=f.value,t.__proto__=c):t[n]=f.value),y="get"in f,p="set"in f,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&o&&o.call(t,n,f.get),p&&i&&i.call(t,n,f.set),t};function c(t,n,r){f(t,n,{configurable:!1,enumerable:!1,writable:!1,value:r})}function l(t){return t!=t}var y=Math.floor,p=Math.ceil;function b(t){return t<0?p(t):y(t)}var v=Number.NEGATIVE_INFINITY,s=Number.POSITIVE_INFINITY;function d(t){return t===s||t===v}var A,_="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),w=Object.prototype.toString,m=Object.prototype.hasOwnProperty,h="function"==typeof Symbol?Symbol.toStringTag:"",N=_&&"symbol"==typeof Symbol.toStringTag?function(t){var n,r,e,o,i;if(null==t)return w.call(t);r=t[h],i=h,n=null!=(o=t)&&m.call(o,i);try{t[h]=void 0}catch(n){return w.call(t)}return e=w.call(t),n?t[h]=r:delete t[h],e}:function(t){return w.call(t)},U="function"==typeof Uint32Array,g="function"==typeof Uint32Array?Uint32Array:null,j="function"==typeof Uint32Array?Uint32Array:void 0;A=function(){var t,n,r;if("function"!=typeof g)return!1;try{n=new g(n=[1,3.14,-3.14,4294967296,4294967297]),r=n,t=(U&&r instanceof Uint32Array||"[object Uint32Array]"===N(r))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?j:function(){throw new Error("not implemented")};var I,O=A,S="function"==typeof Float64Array,E="function"==typeof Float64Array?Float64Array:null,F="function"==typeof Float64Array?Float64Array:void 0;I=function(){var t,n,r;if("function"!=typeof E)return!1;try{n=new E([1,3.14,-3.14,NaN]),r=n,t=(S&&r instanceof Float64Array||"[object Float64Array]"===N(r))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){t=!1}return t}()?F:function(){throw new Error("not implemented")};var T,H=I,G="function"==typeof Uint8Array,P="function"==typeof Uint8Array?Uint8Array:null,L="function"==typeof Uint8Array?Uint8Array:void 0;T=function(){var t,n,r;if("function"!=typeof P)return!1;try{n=new P(n=[1,3.14,-3.14,256,257]),r=n,t=(G&&r instanceof Uint8Array||"[object Uint8Array]"===N(r))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?L:function(){throw new Error("not implemented")};var V,W=T,x="function"==typeof Uint16Array,M="function"==typeof Uint16Array?Uint16Array:null,k="function"==typeof Uint16Array?Uint16Array:void 0;V=function(){var t,n,r;if("function"!=typeof M)return!1;try{n=new M(n=[1,3.14,-3.14,65536,65537]),r=n,t=(x&&r instanceof Uint16Array||"[object Uint16Array]"===N(r))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?k:function(){throw new Error("not implemented")};var Y,C={uint16:V,uint8:W};(Y=new C.uint16(1))[0]=4660;var q,z,B=52===new C.uint8(Y.buffer)[0];!0===B?(q=1,z=0):(q=0,z=1);var D={HIGH:q,LOW:z},J=new H(1),K=new O(J.buffer),Q=D.HIGH,R=D.LOW;function X(t,n,r,e){return J[0]=t,n[e]=K[Q],n[e+r]=K[R],n}function Z(t){return X(t,[0,0],1,0)}c(Z,"assign",X);var $,tt,nt=!0===B?1:0,rt=new H(1),et=new O(rt.buffer);function ot(t){return rt[0]=t,et[nt]}!0===B?($=1,tt=0):($=0,tt=1);var it={HIGH:$,LOW:tt},ut=new H(1),at=new O(ut.buffer),ft=it.HIGH,ct=it.LOW;function lt(t,n){return at[ft]=t,at[ct]=n,ut[0]}var yt=[0,0];function pt(t,n,r,e){return l(t)||d(t)?(n[e]=t,n[e+r]=0,n):0!==t&&function(t){return Math.abs(t)}(t)<22250738585072014e-324?(n[e]=4503599627370496*t,n[e+r]=-52,n):(n[e]=t,n[e+r]=0,n)}c((function(t){return pt(t,[0,0],1,0)}),"assign",pt);var bt=[0,0],vt=[0,0];function st(t,n){var r,e,o,i,u,a;return 0===n||0===t||l(t)||d(t)?t:(pt(t,bt,1,0),n+=bt[1],n+=function(t){var n=ot(t);return(n=(2146435072&n)>>>20)-1023|0}(t=bt[0]),n<-1074?(o=0,i=t,Z.assign(o,yt,1,0),u=yt[0],u&=2147483647,a=ot(i),lt(u|=a&=2147483648,yt[1])):n>1023?t<0?v:s:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,Z.assign(t,vt,1,0),r=vt[0],r&=2148532223,e*lt(r|=n+1023<<20,vt[1])))}var dt=1.4426950408889634,At=1/(1<<28);function _t(t){var n;return l(t)||t===s?t:t===v?0:t>709.782712893384?s:t<-745.1332191019411?0:t>-3.725290298461914e-9&&t<At?1+t:function(t,n,r){var e,o,i,u;return st(1-(n-(e=t-n)*(i=e-(o=e*e)*(0===(u=o)?.16666666666666602:.16666666666666602+u*(u*(6613756321437934e-20+u*(4.1381367970572385e-8*u-16533902205465252e-22))-.0027777777777015593)))/(2-i)-t),r)}(t-.6931471803691238*(n=b(t<0?dt*t-.5:dt*t+.5)),1.9082149292705877e-10*n,n)}function wt(t,n,r){return l(t)||l(n)||l(r)||r<0?NaN:0===r?t<n?0:1:1/(1+_t(-(t-n)/r))}function mt(t){return function(){return t}}function ht(t){return l(t)?mt(NaN):function(n){return l(n)?NaN:n<t?0:1}}return c((function(t,n){return l(t)||l(n)?NaN:t<n?0:1}),"factory",ht),c(wt,"factory",(function(t,n){return l(t)||l(n)||n<0?mt(NaN):0===n?ht(t):function(r){return l(r)?NaN:1/(1+_t(-(r-t)/n))}})),wt},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).cdf=n();
//# sourceMappingURL=index.js.map
