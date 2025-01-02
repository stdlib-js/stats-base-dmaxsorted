"use strict";var u=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var n=u(function(b,d){
var v=require('@stdlib/math-base-assert-is-nan/dist'),o=require('@stdlib/math-base-assert-is-positive-zero/dist');function p(e,r,i,s){var t,a;return e<=0?NaN:e===1||i===0?r[0]:(t=r[s],a=r[s+(e-1)*i],v(t)||v(a)?NaN:t===a?o(t)||o(a)?0:t:t>a?t:a)}d.exports=p
});var q=u(function(g,f){
var y=require('@stdlib/strided-base-stride2offset/dist'),l=n();function N(e,r,i){return l(e,r,i,y(e,i))}f.exports=N
});var m=u(function(h,x){
var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),c=q(),P=n();O(c,"ndarray",P);x.exports=c
});var R=m();module.exports=R;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
