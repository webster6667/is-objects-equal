"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var r=e(require("@babel/runtime/helpers/typeof"));function t(e,r){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,r){if(!e)return;if("string"==typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return n(e,r)}(e))||r&&e&&"number"==typeof e.length){t&&(e=t);var o=0,a=function(){};return{s:a,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var f,i=!0,u=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return i=e.done,e},e:function(e){u=!0,f=e},f:function(){try{i||null==t.return||t.return()}finally{if(u)throw f}}}}function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var o=function e(n,o){var a=!0;if(n&&o){if(!("object"===r.default(n)&&"object"===r.default(o)))return!1;var f=Object.keys(n),i=Object.keys(o);if(f.length===i.length){var u,c=t(f);try{for(c.s();!(u=c.n()).done;){var l=u.value,b=n[l];if(!Object.hasOwnProperty.call(o,l)){a=!1;break}var s=o[l];if("object"===r.default(b)&&"object"===r.default(s)){if(!e(b,s)){a=!1;break}}else if(s!=b){a=!1;break}}}catch(e){c.e(e)}finally{c.f()}}else a=!1}else a=!1;return a};module.exports=function(e){var t=!0;if(!Array.isArray(e))throw new Error("compared object must be in array");for(var n=0;;n++){var a=e[n],f=e[n+1];if(!a||!f){if("object"!==r.default(a))throw new Error("type of compared items must be object");break}if(!("object"===r.default(a)&&"object"===r.default(f)))throw new Error("type of compared items must be object");if(!1===(t=o(a,f)))break}return t};