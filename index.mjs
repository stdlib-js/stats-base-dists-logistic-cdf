// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.1.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-exp@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.1.1-esm/index.mjs";import{factory as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-degenerate-cdf@v0.1.1-esm/index.mjs";function i(t,n,r){return s(t)||s(n)||s(r)||r<0?NaN:0===r?t<n?0:1:1/(1+e(-((t-n)/r)))}function d(t,i){return s(t)||s(i)||i<0?n(NaN):0===i?r(t):function(n){if(s(n))return NaN;return 1/(1+e(-((n-t)/i)))}}t(i,"factory",d);export{i as default,d as factory};
//# sourceMappingURL=index.mjs.map
