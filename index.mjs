// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-positive-zero@esm/index.mjs";function r(s,r,n){var a,i;return s<=0?NaN:1===s||0===n?r[0]:(n<0?(a=r[(1-s)*n],i=r[0]):(a=r[0],i=r[(s-1)*n]),e(a)||e(i)?NaN:a===i?t(a)||t(i)?0:a:a>i?a:i)}function n(s,r,n,a){var i,d;return s<=0?NaN:1===s||0===n?r[0]:(i=r[a],d=r[a+(s-1)*n],e(i)||e(d)?NaN:i===d?t(i)||t(d)?0:i:i>d?i:d)}s(r,"ndarray",n);export{r as default,n as ndarray};
//# sourceMappingURL=index.mjs.map
