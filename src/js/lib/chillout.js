/*!
 * chillout v3.1.9 - Reduce CPU usage in JavaScript
 * Copyright (c) 2017-2018 polygon planet <polygon.planet.aqua@gmail.com>
 * https://github.com/polygonplanet/chillout
 * @license MIT
 */
!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).chillout=t()}}(function(){return function u(i,f,a){function l(e,t){if(!f[e]){if(!i[e]){var n="function"==typeof require&&require;if(!t&&n)return n(e,!0);if(c)return c(e,!0);var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}var o=f[e]={exports:{}};i[e][0].call(o.exports,function(t){return l(i[e][1][t]||t)},o,o.exports,u,i,f,a)}return f[e].exports}for(var c="function"==typeof require&&require,t=0;t<a.length;t++)l(a[t]);return l}({1:[function(t,e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.forEach=function(t,e,n){return(0,i.default)(o.forEach(t,e,n))},n.repeat=function(t,e,n){return(0,i.default)(o.repeat(t,e,n))},n.till=function(t,e){return(0,i.default)(o.till(t,e))},n.forOf=function(t,e,n){return(0,i.default)(o.forOf(t,e,n))};var r,o=function(t){{if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}}(t("./iterator")),u=t("./iterate"),i=(r=u)&&r.__esModule?r:{default:r}},{"./iterate":2,"./iterator":3}],2:[function(t,e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var p=function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var n=[],r=!0,o=!1,u=void 0;try{for(var i,f=t[Symbol.iterator]();!(r=(i=f.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(t){o=!0,u=t}finally{try{!r&&f.return&&f.return()}finally{if(o)throw u}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")},o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};n.default=function(d){return new Promise(function(c,s){var y=0;(0,i.default)(function f(){var a=Date.now();var l=void 0;try{var t=function(){var t=d.next(),e=p(t,2),n=e[0],r=e[1];if((0,v.isThenable)(r))return r.then(function(t){n===b.STOP_ITERATION||!1===t?c():f()},function(t){s(t)}),{v:void 0};if(n===b.STOP_ITERATION||!1===r)return c(),{v:void 0};var o=Date.now();if(1e3<(y+=l=o-a))return"break";if(l<10)return"continue";var u=Math.min(10,Math.floor(l/10)),i=o%(10-u);return i?void 0:"break"};t:for(;;){var e=t();switch(e){case"break":break t;case"continue":continue;default:if("object"===(void 0===e?"undefined":o(e)))return e.v}}}catch(t){return void s(t)}var n=Math.sqrt(l)*Math.min(1e3,l)/80;var r=Math.min(1e3,Math.floor(n));y=0;10<r?setTimeout(f,r):(0,i.default)(f)})})};var r,u=t("./next-tick"),i=(r=u)&&r.__esModule?r:{default:r},v=t("./util"),b=t("./iterator")},{"./iterator":3,"./next-tick":4,"./util":5}],3:[function(t,e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.CONTINUE_ITERATION=n.STOP_ITERATION=void 0;var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};n.forEach=function(n,r,o){var u=0,i=void 0;if((0,a.isArrayLike)(n))return i=n.length,{next:function(){if(i<=u)return[l,null];var t=r.call(o,n[u],u,n);return u++,[c,t]}};var f=Object.keys(n);return i=f.length,{next:function(){if(i<=u)return[l,null];var t=f[u++],e=r.call(o,n[t],t,n);return[c,e]}}},n.repeat=function(t,e,n){var r=void 0,o=void 0,u=void 0;t&&"object"===(void 0===t?"undefined":i(t))?(r=t.start||0,o=t.step||1,u=t.end):(r=0,o=1,u=t);return{next:function(){var t=e.call(n,r);return u<=(r+=o)?[l,t]:[c,t]}}},n.till=function(e,n){return{next:function(){var t=e.call(n);return[c,t]}}},n.forOf=function(n,r,o){var u=n[Symbol.iterator]();return{next:function(){var t=u.next();if(t.done)return[l,null];var e=r.call(o,t.value,n);return[c,e]}}};var a=t("./util"),l=n.STOP_ITERATION={},c=n.CONTINUE_ITERATION={}},{"./util":5}],4:[function(t,e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r=function(){if("function"==typeof setImmediate)return function(t){setImmediate(t)};if("object"===("undefined"==typeof process?"undefined":o(process))&&"function"==typeof process.nextTick)return function(t){process.nextTick(t)};if("function"==typeof MessageChannel){var e=new MessageChannel,n={},r=n;return e.port1.onmessage=function(){var t=(n=n.next).task;delete n.task,t()},function(t){r=r.next={task:t},e.port2.postMessage(0)}}return function(t){setTimeout(t,0)}}();n.default=r},{}],5:[function(t,e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.isThenable=function(t){return null!=t&&"function"==typeof t.then},n.isArrayLike=function(t){return null!=t&&"number"==typeof t.length&&0<=t.length}},{}]},{},[1])(1)});