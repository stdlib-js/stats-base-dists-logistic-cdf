"use strict";var c=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var o=c(function(O,f){
var a=require('@stdlib/math-base-assert-is-nan/dist'),N=require('@stdlib/math-base-special-exp/dist');function p(e,r,t){var n;return a(e)||a(r)||a(t)||t<0?NaN:t===0?e<r?0:1:(n=(e-r)/t,1/(1+N(-n)))}f.exports=p
});var q=c(function(R,v){
var y=require('@stdlib/utils-constant-function/dist'),d=require('@stdlib/stats-base-dists-degenerate-cdf/dist').factory,i=require('@stdlib/math-base-assert-is-nan/dist'),x=require('@stdlib/math-base-special-exp/dist');function z(e,r){if(i(e)||i(r)||r<0)return y(NaN);if(r===0)return d(e);return t;function t(n){var u;return i(n)?NaN:(u=(n-e)/r,1/(1+x(-u)))}}v.exports=z
});var g=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),s=o(),l=q();g(s,"factory",l);module.exports=s;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
