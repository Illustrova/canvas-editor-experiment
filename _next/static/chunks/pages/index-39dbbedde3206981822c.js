_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{"/0+H":function(t,e,r){"use strict";e.__esModule=!0,e.isInAmpMode=u,e.useAmp=function(){return u(o.default.useContext(i.AmpStateContext))};var n,o=(n=r("q1tI"))&&n.__esModule?n:{default:n},i=r("lwAK");function u(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.ampFirst,r=void 0!==e&&e,n=t.hybrid,o=void 0!==n&&n,i=t.hasQuery,u=void 0!==i&&i;return r||o&&u}},"/GRZ":function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},1:function(t,e){},2:function(t,e){},3:function(t,e){},"48fX":function(t,e,r){var n=r("qhzo");t.exports=function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&n(t,e)}},"49sm":function(t,e){var r={}.toString;t.exports=Array.isArray||function(t){return"[object Array]"==r.call(t)}},"5fIB":function(t,e,r){var n=r("7eYB");t.exports=function(t){if(Array.isArray(t))return n(t)}},"7eYB":function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}},"8Kt/":function(t,e,r){"use strict";r("oI91");e.__esModule=!0,e.defaultHead=c,e.default=void 0;var n,o=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!==typeof t&&"function"!==typeof t)return{default:t};var e=f();if(e&&e.has(t))return e.get(t);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in t)if(Object.prototype.hasOwnProperty.call(t,o)){var i=n?Object.getOwnPropertyDescriptor(t,o):null;i&&(i.get||i.set)?Object.defineProperty(r,o,i):r[o]=t[o]}r.default=t,e&&e.set(t,r);return r}(r("q1tI")),i=(n=r("Xuae"))&&n.__esModule?n:{default:n},u=r("lwAK"),a=r("FYa8"),s=r("/0+H");function f(){if("function"!==typeof WeakMap)return null;var t=new WeakMap;return f=function(){return t},t}function c(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[o.default.createElement("meta",{charSet:"utf-8"})];return t||e.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),e}function l(t,e){return"string"===typeof e||"number"===typeof e?t:e.type===o.default.Fragment?t.concat(o.default.Children.toArray(e.props.children).reduce((function(t,e){return"string"===typeof e||"number"===typeof e?t:t.concat(e)}),[])):t.concat(e)}var h=["name","httpEquiv","charSet","itemProp"];function p(t,e){return t.reduce((function(t,e){var r=o.default.Children.toArray(e.props.children);return t.concat(r)}),[]).reduce(l,[]).reverse().concat(c(e.inAmpMode)).filter(function(){var t=new Set,e=new Set,r=new Set,n={};return function(o){var i=!0,u=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){u=!0;var a=o.key.slice(o.key.indexOf("$")+1);t.has(a)?i=!1:t.add(a)}switch(o.type){case"title":case"base":e.has(o.type)?i=!1:e.add(o.type);break;case"meta":for(var s=0,f=h.length;s<f;s++){var c=h[s];if(o.props.hasOwnProperty(c))if("charSet"===c)r.has(c)?i=!1:r.add(c);else{var l=o.props[c],p=n[c]||new Set;"name"===c&&u||!p.has(l)?(p.add(l),n[c]=p):i=!1}}}return i}}()).reverse().map((function(t,e){var r=t.key||e;return o.default.cloneElement(t,{key:r})}))}function d(t){var e=t.children,r=(0,o.useContext)(u.AmpStateContext),n=(0,o.useContext)(a.HeadManagerContext);return o.default.createElement(i.default,{reduceComponentsToState:p,headManager:n,inAmpMode:(0,s.isInAmpMode)(r)},e)}d.rewind=function(){};var g=d;e.default=g},"C+bE":function(t,e){function r(e){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?t.exports=r=function(t){return typeof t}:t.exports=r=function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(e)}t.exports=r},FYa8:function(t,e,r){"use strict";var n;e.__esModule=!0,e.HeadManagerContext=void 0;var o=((n=r("q1tI"))&&n.__esModule?n:{default:n}).default.createContext({});e.HeadManagerContext=o},H7XF:function(t,e,r){"use strict";e.byteLength=function(t){var e=f(t),r=e[0],n=e[1];return 3*(r+n)/4-n},e.toByteArray=function(t){var e,r,n=f(t),u=n[0],a=n[1],s=new i(function(t,e,r){return 3*(e+r)/4-r}(0,u,a)),c=0,l=a>0?u-4:u;for(r=0;r<l;r+=4)e=o[t.charCodeAt(r)]<<18|o[t.charCodeAt(r+1)]<<12|o[t.charCodeAt(r+2)]<<6|o[t.charCodeAt(r+3)],s[c++]=e>>16&255,s[c++]=e>>8&255,s[c++]=255&e;2===a&&(e=o[t.charCodeAt(r)]<<2|o[t.charCodeAt(r+1)]>>4,s[c++]=255&e);1===a&&(e=o[t.charCodeAt(r)]<<10|o[t.charCodeAt(r+1)]<<4|o[t.charCodeAt(r+2)]>>2,s[c++]=e>>8&255,s[c++]=255&e);return s},e.fromByteArray=function(t){for(var e,r=t.length,o=r%3,i=[],u=16383,a=0,s=r-o;a<s;a+=u)i.push(c(t,a,a+u>s?s:a+u));1===o?(e=t[r-1],i.push(n[e>>2]+n[e<<4&63]+"==")):2===o&&(e=(t[r-2]<<8)+t[r-1],i.push(n[e>>10]+n[e>>4&63]+n[e<<2&63]+"="));return i.join("")};for(var n=[],o=[],i="undefined"!==typeof Uint8Array?Uint8Array:Array,u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a=0,s=u.length;a<s;++a)n[a]=u[a],o[u.charCodeAt(a)]=a;function f(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var r=t.indexOf("=");return-1===r&&(r=e),[r,r===e?0:4-r%4]}function c(t,e,r){for(var o,i,u=[],a=e;a<r;a+=3)o=(t[a]<<16&16711680)+(t[a+1]<<8&65280)+(255&t[a+2]),u.push(n[(i=o)>>18&63]+n[i>>12&63]+n[i>>6&63]+n[63&i]);return u.join("")}o["-".charCodeAt(0)]=62,o["_".charCodeAt(0)]=63},HDXh:function(t,e,r){"use strict";(function(t){var n=r("H7XF"),o=r("kVK+"),i=r("49sm");function u(){return s.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function a(t,e){if(u()<e)throw new RangeError("Invalid typed array length");return s.TYPED_ARRAY_SUPPORT?(t=new Uint8Array(e)).__proto__=s.prototype:(null===t&&(t=new s(e)),t.length=e),t}function s(t,e,r){if(!s.TYPED_ARRAY_SUPPORT&&!(this instanceof s))return new s(t,e,r);if("number"===typeof t){if("string"===typeof e)throw new Error("If encoding is specified then the first argument must be a string");return l(this,t)}return f(this,t,e,r)}function f(t,e,r,n){if("number"===typeof e)throw new TypeError('"value" argument must not be a number');return"undefined"!==typeof ArrayBuffer&&e instanceof ArrayBuffer?function(t,e,r,n){if(e.byteLength,r<0||e.byteLength<r)throw new RangeError("'offset' is out of bounds");if(e.byteLength<r+(n||0))throw new RangeError("'length' is out of bounds");e=void 0===r&&void 0===n?new Uint8Array(e):void 0===n?new Uint8Array(e,r):new Uint8Array(e,r,n);s.TYPED_ARRAY_SUPPORT?(t=e).__proto__=s.prototype:t=h(t,e);return t}(t,e,r,n):"string"===typeof e?function(t,e,r){"string"===typeof r&&""!==r||(r="utf8");if(!s.isEncoding(r))throw new TypeError('"encoding" must be a valid string encoding');var n=0|d(e,r),o=(t=a(t,n)).write(e,r);o!==n&&(t=t.slice(0,o));return t}(t,e,r):function(t,e){if(s.isBuffer(e)){var r=0|p(e.length);return 0===(t=a(t,r)).length||e.copy(t,0,0,r),t}if(e){if("undefined"!==typeof ArrayBuffer&&e.buffer instanceof ArrayBuffer||"length"in e)return"number"!==typeof e.length||(n=e.length)!==n?a(t,0):h(t,e);if("Buffer"===e.type&&i(e.data))return h(t,e.data)}var n;throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}(t,e)}function c(t){if("number"!==typeof t)throw new TypeError('"size" argument must be a number');if(t<0)throw new RangeError('"size" argument must not be negative')}function l(t,e){if(c(e),t=a(t,e<0?0:0|p(e)),!s.TYPED_ARRAY_SUPPORT)for(var r=0;r<e;++r)t[r]=0;return t}function h(t,e){var r=e.length<0?0:0|p(e.length);t=a(t,r);for(var n=0;n<r;n+=1)t[n]=255&e[n];return t}function p(t){if(t>=u())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+u().toString(16)+" bytes");return 0|t}function d(t,e){if(s.isBuffer(t))return t.length;if("undefined"!==typeof ArrayBuffer&&"function"===typeof ArrayBuffer.isView&&(ArrayBuffer.isView(t)||t instanceof ArrayBuffer))return t.byteLength;"string"!==typeof t&&(t=""+t);var r=t.length;if(0===r)return 0;for(var n=!1;;)switch(e){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":case void 0:return z(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return F(t).length;default:if(n)return z(t).length;e=(""+e).toLowerCase(),n=!0}}function g(t,e,r){var n=!1;if((void 0===e||e<0)&&(e=0),e>this.length)return"";if((void 0===r||r>this.length)&&(r=this.length),r<=0)return"";if((r>>>=0)<=(e>>>=0))return"";for(t||(t="utf8");;)switch(t){case"hex":return P(this,e,r);case"utf8":case"utf-8":return j(this,e,r);case"ascii":return S(this,e,r);case"latin1":case"binary":return C(this,e,r);case"base64":return O(this,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return T(this,e,r);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}function y(t,e,r){var n=t[e];t[e]=t[r],t[r]=n}function v(t,e,r,n,o){if(0===t.length)return-1;if("string"===typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),r=+r,isNaN(r)&&(r=o?0:t.length-1),r<0&&(r=t.length+r),r>=t.length){if(o)return-1;r=t.length-1}else if(r<0){if(!o)return-1;r=0}if("string"===typeof e&&(e=s.from(e,n)),s.isBuffer(e))return 0===e.length?-1:b(t,e,r,n,o);if("number"===typeof e)return e&=255,s.TYPED_ARRAY_SUPPORT&&"function"===typeof Uint8Array.prototype.indexOf?o?Uint8Array.prototype.indexOf.call(t,e,r):Uint8Array.prototype.lastIndexOf.call(t,e,r):b(t,[e],r,n,o);throw new TypeError("val must be string, number or Buffer")}function b(t,e,r,n,o){var i,u=1,a=t.length,s=e.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||e.length<2)return-1;u=2,a/=2,s/=2,r/=2}function f(t,e){return 1===u?t[e]:t.readUInt16BE(e*u)}if(o){var c=-1;for(i=r;i<a;i++)if(f(t,i)===f(e,-1===c?0:i-c)){if(-1===c&&(c=i),i-c+1===s)return c*u}else-1!==c&&(i-=i-c),c=-1}else for(r+s>a&&(r=a-s),i=r;i>=0;i--){for(var l=!0,h=0;h<s;h++)if(f(t,i+h)!==f(e,h)){l=!1;break}if(l)return i}return-1}function w(t,e,r,n){r=Number(r)||0;var o=t.length-r;n?(n=Number(n))>o&&(n=o):n=o;var i=e.length;if(i%2!==0)throw new TypeError("Invalid hex string");n>i/2&&(n=i/2);for(var u=0;u<n;++u){var a=parseInt(e.substr(2*u,2),16);if(isNaN(a))return u;t[r+u]=a}return u}function m(t,e,r,n){return N(z(e,t.length-r),t,r,n)}function _(t,e,r,n){return N(function(t){for(var e=[],r=0;r<t.length;++r)e.push(255&t.charCodeAt(r));return e}(e),t,r,n)}function A(t,e,r,n){return _(t,e,r,n)}function E(t,e,r,n){return N(F(e),t,r,n)}function x(t,e,r,n){return N(function(t,e){for(var r,n,o,i=[],u=0;u<t.length&&!((e-=2)<0);++u)n=(r=t.charCodeAt(u))>>8,o=r%256,i.push(o),i.push(n);return i}(e,t.length-r),t,r,n)}function O(t,e,r){return 0===e&&r===t.length?n.fromByteArray(t):n.fromByteArray(t.slice(e,r))}function j(t,e,r){r=Math.min(t.length,r);for(var n=[],o=e;o<r;){var i,u,a,s,f=t[o],c=null,l=f>239?4:f>223?3:f>191?2:1;if(o+l<=r)switch(l){case 1:f<128&&(c=f);break;case 2:128===(192&(i=t[o+1]))&&(s=(31&f)<<6|63&i)>127&&(c=s);break;case 3:i=t[o+1],u=t[o+2],128===(192&i)&&128===(192&u)&&(s=(15&f)<<12|(63&i)<<6|63&u)>2047&&(s<55296||s>57343)&&(c=s);break;case 4:i=t[o+1],u=t[o+2],a=t[o+3],128===(192&i)&&128===(192&u)&&128===(192&a)&&(s=(15&f)<<18|(63&i)<<12|(63&u)<<6|63&a)>65535&&s<1114112&&(c=s)}null===c?(c=65533,l=1):c>65535&&(c-=65536,n.push(c>>>10&1023|55296),c=56320|1023&c),n.push(c),o+=l}return function(t){var e=t.length;if(e<=R)return String.fromCharCode.apply(String,t);var r="",n=0;for(;n<e;)r+=String.fromCharCode.apply(String,t.slice(n,n+=R));return r}(n)}e.Buffer=s,e.SlowBuffer=function(t){+t!=t&&(t=0);return s.alloc(+t)},e.INSPECT_MAX_BYTES=50,s.TYPED_ARRAY_SUPPORT=void 0!==t.TYPED_ARRAY_SUPPORT?t.TYPED_ARRAY_SUPPORT:function(){try{var t=new Uint8Array(1);return t.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===t.foo()&&"function"===typeof t.subarray&&0===t.subarray(1,1).byteLength}catch(e){return!1}}(),e.kMaxLength=u(),s.poolSize=8192,s._augment=function(t){return t.__proto__=s.prototype,t},s.from=function(t,e,r){return f(null,t,e,r)},s.TYPED_ARRAY_SUPPORT&&(s.prototype.__proto__=Uint8Array.prototype,s.__proto__=Uint8Array,"undefined"!==typeof Symbol&&Symbol.species&&s[Symbol.species]===s&&Object.defineProperty(s,Symbol.species,{value:null,configurable:!0})),s.alloc=function(t,e,r){return function(t,e,r,n){return c(e),e<=0?a(t,e):void 0!==r?"string"===typeof n?a(t,e).fill(r,n):a(t,e).fill(r):a(t,e)}(null,t,e,r)},s.allocUnsafe=function(t){return l(null,t)},s.allocUnsafeSlow=function(t){return l(null,t)},s.isBuffer=function(t){return!(null==t||!t._isBuffer)},s.compare=function(t,e){if(!s.isBuffer(t)||!s.isBuffer(e))throw new TypeError("Arguments must be Buffers");if(t===e)return 0;for(var r=t.length,n=e.length,o=0,i=Math.min(r,n);o<i;++o)if(t[o]!==e[o]){r=t[o],n=e[o];break}return r<n?-1:n<r?1:0},s.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},s.concat=function(t,e){if(!i(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return s.alloc(0);var r;if(void 0===e)for(e=0,r=0;r<t.length;++r)e+=t[r].length;var n=s.allocUnsafe(e),o=0;for(r=0;r<t.length;++r){var u=t[r];if(!s.isBuffer(u))throw new TypeError('"list" argument must be an Array of Buffers');u.copy(n,o),o+=u.length}return n},s.byteLength=d,s.prototype._isBuffer=!0,s.prototype.swap16=function(){var t=this.length;if(t%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var e=0;e<t;e+=2)y(this,e,e+1);return this},s.prototype.swap32=function(){var t=this.length;if(t%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var e=0;e<t;e+=4)y(this,e,e+3),y(this,e+1,e+2);return this},s.prototype.swap64=function(){var t=this.length;if(t%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var e=0;e<t;e+=8)y(this,e,e+7),y(this,e+1,e+6),y(this,e+2,e+5),y(this,e+3,e+4);return this},s.prototype.toString=function(){var t=0|this.length;return 0===t?"":0===arguments.length?j(this,0,t):g.apply(this,arguments)},s.prototype.equals=function(t){if(!s.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===s.compare(this,t)},s.prototype.inspect=function(){var t="",r=e.INSPECT_MAX_BYTES;return this.length>0&&(t=this.toString("hex",0,r).match(/.{2}/g).join(" "),this.length>r&&(t+=" ... ")),"<Buffer "+t+">"},s.prototype.compare=function(t,e,r,n,o){if(!s.isBuffer(t))throw new TypeError("Argument must be a Buffer");if(void 0===e&&(e=0),void 0===r&&(r=t?t.length:0),void 0===n&&(n=0),void 0===o&&(o=this.length),e<0||r>t.length||n<0||o>this.length)throw new RangeError("out of range index");if(n>=o&&e>=r)return 0;if(n>=o)return-1;if(e>=r)return 1;if(this===t)return 0;for(var i=(o>>>=0)-(n>>>=0),u=(r>>>=0)-(e>>>=0),a=Math.min(i,u),f=this.slice(n,o),c=t.slice(e,r),l=0;l<a;++l)if(f[l]!==c[l]){i=f[l],u=c[l];break}return i<u?-1:u<i?1:0},s.prototype.includes=function(t,e,r){return-1!==this.indexOf(t,e,r)},s.prototype.indexOf=function(t,e,r){return v(this,t,e,r,!0)},s.prototype.lastIndexOf=function(t,e,r){return v(this,t,e,r,!1)},s.prototype.write=function(t,e,r,n){if(void 0===e)n="utf8",r=this.length,e=0;else if(void 0===r&&"string"===typeof e)n=e,r=this.length,e=0;else{if(!isFinite(e))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");e|=0,isFinite(r)?(r|=0,void 0===n&&(n="utf8")):(n=r,r=void 0)}var o=this.length-e;if((void 0===r||r>o)&&(r=o),t.length>0&&(r<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var i=!1;;)switch(n){case"hex":return w(this,t,e,r);case"utf8":case"utf-8":return m(this,t,e,r);case"ascii":return _(this,t,e,r);case"latin1":case"binary":return A(this,t,e,r);case"base64":return E(this,t,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return x(this,t,e,r);default:if(i)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),i=!0}},s.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var R=4096;function S(t,e,r){var n="";r=Math.min(t.length,r);for(var o=e;o<r;++o)n+=String.fromCharCode(127&t[o]);return n}function C(t,e,r){var n="";r=Math.min(t.length,r);for(var o=e;o<r;++o)n+=String.fromCharCode(t[o]);return n}function P(t,e,r){var n=t.length;(!e||e<0)&&(e=0),(!r||r<0||r>n)&&(r=n);for(var o="",i=e;i<r;++i)o+=L(t[i]);return o}function T(t,e,r){for(var n=t.slice(e,r),o="",i=0;i<n.length;i+=2)o+=String.fromCharCode(n[i]+256*n[i+1]);return o}function M(t,e,r){if(t%1!==0||t<0)throw new RangeError("offset is not uint");if(t+e>r)throw new RangeError("Trying to access beyond buffer length")}function B(t,e,r,n,o,i){if(!s.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>o||e<i)throw new RangeError('"value" argument is out of bounds');if(r+n>t.length)throw new RangeError("Index out of range")}function I(t,e,r,n){e<0&&(e=65535+e+1);for(var o=0,i=Math.min(t.length-r,2);o<i;++o)t[r+o]=(e&255<<8*(n?o:1-o))>>>8*(n?o:1-o)}function U(t,e,r,n){e<0&&(e=4294967295+e+1);for(var o=0,i=Math.min(t.length-r,4);o<i;++o)t[r+o]=e>>>8*(n?o:3-o)&255}function k(t,e,r,n,o,i){if(r+n>t.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function Y(t,e,r,n,i){return i||k(t,0,r,4),o.write(t,e,r,n,23,4),r+4}function H(t,e,r,n,i){return i||k(t,0,r,8),o.write(t,e,r,n,52,8),r+8}s.prototype.slice=function(t,e){var r,n=this.length;if((t=~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),(e=void 0===e?n:~~e)<0?(e+=n)<0&&(e=0):e>n&&(e=n),e<t&&(e=t),s.TYPED_ARRAY_SUPPORT)(r=this.subarray(t,e)).__proto__=s.prototype;else{var o=e-t;r=new s(o,void 0);for(var i=0;i<o;++i)r[i]=this[i+t]}return r},s.prototype.readUIntLE=function(t,e,r){t|=0,e|=0,r||M(t,e,this.length);for(var n=this[t],o=1,i=0;++i<e&&(o*=256);)n+=this[t+i]*o;return n},s.prototype.readUIntBE=function(t,e,r){t|=0,e|=0,r||M(t,e,this.length);for(var n=this[t+--e],o=1;e>0&&(o*=256);)n+=this[t+--e]*o;return n},s.prototype.readUInt8=function(t,e){return e||M(t,1,this.length),this[t]},s.prototype.readUInt16LE=function(t,e){return e||M(t,2,this.length),this[t]|this[t+1]<<8},s.prototype.readUInt16BE=function(t,e){return e||M(t,2,this.length),this[t]<<8|this[t+1]},s.prototype.readUInt32LE=function(t,e){return e||M(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},s.prototype.readUInt32BE=function(t,e){return e||M(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},s.prototype.readIntLE=function(t,e,r){t|=0,e|=0,r||M(t,e,this.length);for(var n=this[t],o=1,i=0;++i<e&&(o*=256);)n+=this[t+i]*o;return n>=(o*=128)&&(n-=Math.pow(2,8*e)),n},s.prototype.readIntBE=function(t,e,r){t|=0,e|=0,r||M(t,e,this.length);for(var n=e,o=1,i=this[t+--n];n>0&&(o*=256);)i+=this[t+--n]*o;return i>=(o*=128)&&(i-=Math.pow(2,8*e)),i},s.prototype.readInt8=function(t,e){return e||M(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},s.prototype.readInt16LE=function(t,e){e||M(t,2,this.length);var r=this[t]|this[t+1]<<8;return 32768&r?4294901760|r:r},s.prototype.readInt16BE=function(t,e){e||M(t,2,this.length);var r=this[t+1]|this[t]<<8;return 32768&r?4294901760|r:r},s.prototype.readInt32LE=function(t,e){return e||M(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},s.prototype.readInt32BE=function(t,e){return e||M(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},s.prototype.readFloatLE=function(t,e){return e||M(t,4,this.length),o.read(this,t,!0,23,4)},s.prototype.readFloatBE=function(t,e){return e||M(t,4,this.length),o.read(this,t,!1,23,4)},s.prototype.readDoubleLE=function(t,e){return e||M(t,8,this.length),o.read(this,t,!0,52,8)},s.prototype.readDoubleBE=function(t,e){return e||M(t,8,this.length),o.read(this,t,!1,52,8)},s.prototype.writeUIntLE=function(t,e,r,n){(t=+t,e|=0,r|=0,n)||B(this,t,e,r,Math.pow(2,8*r)-1,0);var o=1,i=0;for(this[e]=255&t;++i<r&&(o*=256);)this[e+i]=t/o&255;return e+r},s.prototype.writeUIntBE=function(t,e,r,n){(t=+t,e|=0,r|=0,n)||B(this,t,e,r,Math.pow(2,8*r)-1,0);var o=r-1,i=1;for(this[e+o]=255&t;--o>=0&&(i*=256);)this[e+o]=t/i&255;return e+r},s.prototype.writeUInt8=function(t,e,r){return t=+t,e|=0,r||B(this,t,e,1,255,0),s.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),this[e]=255&t,e+1},s.prototype.writeUInt16LE=function(t,e,r){return t=+t,e|=0,r||B(this,t,e,2,65535,0),s.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8):I(this,t,e,!0),e+2},s.prototype.writeUInt16BE=function(t,e,r){return t=+t,e|=0,r||B(this,t,e,2,65535,0),s.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=255&t):I(this,t,e,!1),e+2},s.prototype.writeUInt32LE=function(t,e,r){return t=+t,e|=0,r||B(this,t,e,4,4294967295,0),s.TYPED_ARRAY_SUPPORT?(this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t):U(this,t,e,!0),e+4},s.prototype.writeUInt32BE=function(t,e,r){return t=+t,e|=0,r||B(this,t,e,4,4294967295,0),s.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t):U(this,t,e,!1),e+4},s.prototype.writeIntLE=function(t,e,r,n){if(t=+t,e|=0,!n){var o=Math.pow(2,8*r-1);B(this,t,e,r,o-1,-o)}var i=0,u=1,a=0;for(this[e]=255&t;++i<r&&(u*=256);)t<0&&0===a&&0!==this[e+i-1]&&(a=1),this[e+i]=(t/u>>0)-a&255;return e+r},s.prototype.writeIntBE=function(t,e,r,n){if(t=+t,e|=0,!n){var o=Math.pow(2,8*r-1);B(this,t,e,r,o-1,-o)}var i=r-1,u=1,a=0;for(this[e+i]=255&t;--i>=0&&(u*=256);)t<0&&0===a&&0!==this[e+i+1]&&(a=1),this[e+i]=(t/u>>0)-a&255;return e+r},s.prototype.writeInt8=function(t,e,r){return t=+t,e|=0,r||B(this,t,e,1,127,-128),s.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),t<0&&(t=255+t+1),this[e]=255&t,e+1},s.prototype.writeInt16LE=function(t,e,r){return t=+t,e|=0,r||B(this,t,e,2,32767,-32768),s.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8):I(this,t,e,!0),e+2},s.prototype.writeInt16BE=function(t,e,r){return t=+t,e|=0,r||B(this,t,e,2,32767,-32768),s.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=255&t):I(this,t,e,!1),e+2},s.prototype.writeInt32LE=function(t,e,r){return t=+t,e|=0,r||B(this,t,e,4,2147483647,-2147483648),s.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24):U(this,t,e,!0),e+4},s.prototype.writeInt32BE=function(t,e,r){return t=+t,e|=0,r||B(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),s.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t):U(this,t,e,!1),e+4},s.prototype.writeFloatLE=function(t,e,r){return Y(this,t,e,!0,r)},s.prototype.writeFloatBE=function(t,e,r){return Y(this,t,e,!1,r)},s.prototype.writeDoubleLE=function(t,e,r){return H(this,t,e,!0,r)},s.prototype.writeDoubleBE=function(t,e,r){return H(this,t,e,!1,r)},s.prototype.copy=function(t,e,r,n){if(r||(r=0),n||0===n||(n=this.length),e>=t.length&&(e=t.length),e||(e=0),n>0&&n<r&&(n=r),n===r)return 0;if(0===t.length||0===this.length)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("sourceStart out of bounds");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-e<n-r&&(n=t.length-e+r);var o,i=n-r;if(this===t&&r<e&&e<n)for(o=i-1;o>=0;--o)t[o+e]=this[o+r];else if(i<1e3||!s.TYPED_ARRAY_SUPPORT)for(o=0;o<i;++o)t[o+e]=this[o+r];else Uint8Array.prototype.set.call(t,this.subarray(r,r+i),e);return i},s.prototype.fill=function(t,e,r,n){if("string"===typeof t){if("string"===typeof e?(n=e,e=0,r=this.length):"string"===typeof r&&(n=r,r=this.length),1===t.length){var o=t.charCodeAt(0);o<256&&(t=o)}if(void 0!==n&&"string"!==typeof n)throw new TypeError("encoding must be a string");if("string"===typeof n&&!s.isEncoding(n))throw new TypeError("Unknown encoding: "+n)}else"number"===typeof t&&(t&=255);if(e<0||this.length<e||this.length<r)throw new RangeError("Out of range index");if(r<=e)return this;var i;if(e>>>=0,r=void 0===r?this.length:r>>>0,t||(t=0),"number"===typeof t)for(i=e;i<r;++i)this[i]=t;else{var u=s.isBuffer(t)?t:z(new s(t,n).toString()),a=u.length;for(i=0;i<r-e;++i)this[i+e]=u[i%a]}return this};var D=/[^+\/0-9A-Za-z-_]/g;function L(t){return t<16?"0"+t.toString(16):t.toString(16)}function z(t,e){var r;e=e||1/0;for(var n=t.length,o=null,i=[],u=0;u<n;++u){if((r=t.charCodeAt(u))>55295&&r<57344){if(!o){if(r>56319){(e-=3)>-1&&i.push(239,191,189);continue}if(u+1===n){(e-=3)>-1&&i.push(239,191,189);continue}o=r;continue}if(r<56320){(e-=3)>-1&&i.push(239,191,189),o=r;continue}r=65536+(o-55296<<10|r-56320)}else o&&(e-=3)>-1&&i.push(239,191,189);if(o=null,r<128){if((e-=1)<0)break;i.push(r)}else if(r<2048){if((e-=2)<0)break;i.push(r>>6|192,63&r|128)}else if(r<65536){if((e-=3)<0)break;i.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(r<1114112))throw new Error("Invalid code point");if((e-=4)<0)break;i.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return i}function F(t){return n.toByteArray(function(t){if((t=function(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}(t).replace(D,"")).length<2)return"";for(;t.length%4!==0;)t+="=";return t}(t))}function N(t,e,r,n){for(var o=0;o<n&&!(o+r>=e.length||o>=t.length);++o)e[o+r]=t[o];return o}}).call(this,r("ntbh"))},KckH:function(t,e,r){var n=r("7eYB");t.exports=function(t,e){if(t){if("string"===typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}},Qetd:function(t,e,r){"use strict";var n=Object.assign.bind(Object);t.exports=n,t.exports.default=t.exports},RNiq:function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return v}));var n={};r.r(n),r.d(n,"textLeft",(function(){return c})),r.d(n,"textRight",(function(){return l})),r.d(n,"textCenter",(function(){return h})),r.d(n,"textJustify",(function(){return p}));var o=r("nKUr"),i=r("cpVT"),u=(r("g4pe"),r("vRNQ")),a=r.n(u),s=r("epSk"),f=r("q1tI"),c="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 333 333'%3E%3Cdefs/%3E%3Cpath d='M323 32H10C5 32 0 36 0 42s5 10 10 10h313c6 0 10-5 10-10s-4-10-10-10zM230 115H10c-5 0-10 4-10 10s5 10 10 10h220c6 0 10-5 10-10s-4-10-10-10zM323 199H10c-5 0-10 4-10 10s5 10 10 10h313c6 0 10-5 10-10s-4-10-10-10zM151 282H10c-5 0-10 4-10 10s5 10 10 10h141c6 0 10-5 10-10s-4-10-10-10z'/%3E%3C/svg%3E",l="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 333 333'%3E%3Cdefs/%3E%3Cpath d='M323 32H10C5 32 0 36 0 42s5 10 10 10h313c6 0 10-5 10-10s-4-10-10-10zM323 115H104c-5 0-10 4-10 10s5 10 10 10h219c6 0 10-5 10-10s-4-10-10-10zM323 199H10c-5 0-10 4-10 10s5 10 10 10h313c6 0 10-5 10-10s-4-10-10-10zM323 282H182c-5 0-10 4-10 10s5 10 10 10h141c6 0 10-5 10-10s-4-10-10-10z'/%3E%3C/svg%3E",h="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 333 333'%3E%3Cdefs/%3E%3Cpath d='M323 32H10C5 32 0 36 0 42s5 10 10 10h313c6 0 10-5 10-10s-4-10-10-10zM276 115H56c-5 0-10 4-10 10s5 10 10 10h220c6 0 10-5 10-10s-4-10-10-10zM323 199H10c-5 0-10 4-10 10s5 10 10 10h313c6 0 10-5 10-10s-4-10-10-10zM234 282H93c-5 0-10 4-10 10s5 10 10 10h141c6 0 10-5 10-10s-4-10-10-10z'/%3E%3C/svg%3E",p="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 333 333'%3E%3Cdefs/%3E%3Cpath d='M323 32H10C5 32 0 36 0 42s5 10 10 10h313c6 0 10-5 10-10s-4-10-10-10zM323 115H10c-5 0-10 4-10 10s5 10 10 10h313c6 0 10-5 10-10s-4-10-10-10zM323 199H10c-5 0-10 4-10 10s5 10 10 10h313c6 0 10-5 10-10s-4-10-10-10zM323 282H10c-5 0-10 4-10 10s5 10 10 10h313c6 0 10-5 10-10s-4-10-10-10z'/%3E%3C/svg%3E";function d(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function g(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?d(Object(r),!0).forEach((function(e){Object(i.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var y={color1:"#ffffff",color2:"#000000"};function v(){var t=Object(f.useState)(),e=t[0],r=t[1],u=Object(f.useState)([]),c=(u[0],u[1]),l=Object(f.useState)(!1),h=l[0],p=l[1],d=Object(f.useState)(y),v=d[0],b=d[1];function m(t){var e=document.createElement("img");return e.src=t,function(t,r,n,o,i){var u=this.cornerSize;t.save(),t.translate(r,n),t.rotate(s.fabric.util.degreesToRadians(i.angle)),t.drawImage(e,-u/2,-u/2,u,u),t.restore()}}var _=["textLeft","textCenter","textRight","textJustify"];Object(f.useEffect)((function(){r(new s.fabric.Canvas(A.current,{renderOnAddRemove:!0}))}),[r]),Object(f.useEffect)((function(){e&&(function(t){t.on("selection:cleared",(function(){c([])})),t.on("selection:created",(function(t){c(t.selected)})),t.on("selection:updated",(function(t){c(t.selected)})),t.on("selection:changed",(function(t){c(t.selected)}))}(e),function(){var t=function(t){return 24*(t-_.length/2)+12};_.forEach((function(e,r){s.fabric.Textbox.prototype.controls[e]=new s.fabric.Control({x:0,y:-.5,offsetY:-25,offsetX:t(r),cursorStyle:"pointer",mouseUpHandler:function(){return O.alignText(e.substring(4).toLowerCase())},render:m(n[e]),cornerSize:20})}))}())}),[e]);var A=Object(f.useRef)(null),E=Object(f.useRef)(null),x=Object(f.useRef)(null),O=w(e),j=function(t,e){b(g(g({},v),{},Object(i.a)({},t,e))),O.setFill(v)};return Object(o.jsxs)("div",{className:a.a.container,children:[Object(o.jsxs)("div",{className:a.a.buttons,children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("button",{onClick:function(){return O.addText("")},children:"Add Text"}),Object(o.jsx)("label",{htmlFor:"file-upload",className:a.a.fileupload,children:"Add Image"}),Object(o.jsx)("input",{ref:E,id:"file-upload",type:"file",style:{display:"none"},onChange:function(){var t=E.current;if(t.files&&t.files[0]){var e=new FileReader;e.onload=function(t){var e=new Image;e.src=event.target.result,e.onload=function(){O.addImage(e)}},e.readAsDataURL(t.files[0])}}}),Object(o.jsx)("button",{onClick:function(){return O.setSelectionStyle("fontWeight")},children:"Bold"}),Object(o.jsx)("button",{onClick:function(){return O.setSelectionStyle("fontStyle")},children:"Italic"}),Object(o.jsx)("button",{onClick:function(){return O.setSelectionStyle("underline")},children:"Underline"}),Object(o.jsx)("button",{onClick:function(){return O.setSelectionStyle("linethrough")},children:"Strikethrough"}),Object(o.jsx)("button",{onClick:function(){return O.align("left")},children:"Align left"}),Object(o.jsx)("button",{onClick:function(){return O.align("center")},children:"Center"}),Object(o.jsx)("button",{onClick:function(){return O.align("right")},children:"Align right"}),Object(o.jsx)("button",{onClick:function(){return O.deleteAll()},children:"Delete selected"}),Object(o.jsx)("button",{onClick:function(){return O.deleteAll()},children:"Clear all"})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("input",{type:"range",min:"100",max:"1000",defaultValue:"700",step:"100",onChange:function(t){return e=t.target.value,O.resize(e),void(x.current.innerHTML=e);var e}}),Object(o.jsx)("span",{ref:x,children:"700"}),Object(o.jsx)("label",{htmlFor:"head",children:" Fill color: "}),Object(o.jsx)("input",{type:"color",id:"head",name:"head",value:"#e66465",onChange:function(t){return O.setFill(t.target.value)}}),Object(o.jsx)("label",{htmlFor:"grad",children:" Use gradient "}),Object(o.jsx)("input",{type:"checkbox",id:"grad",checked:h,onChange:function(t){return p(t.target.checked)}}),h&&Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("label",{htmlFor:"cs1",children:"color 1"}),Object(o.jsx)("input",{type:"color",id:"color1",name:"head",defaultValue:"#ffffff",onChange:function(t){return j(t.target.id,t.target.value)}}),Object(o.jsx)("label",{htmlFor:"cs2",children:"color 2"}),Object(o.jsx)("input",{type:"color",id:"color2",name:"head",defaultValue:"#000000",onChange:function(t){return j(t.target.id,t.target.value)}})]})]})]}),Object(o.jsx)("canvas",{ref:A,width:"700",height:"400",style:{border:"solid 1px black"}})]})}var b={fontWeight:["bold","normal"],linethrough:[!0,!1],underline:[!0,!1],fontStyle:["italic","normal"]},w=function(t){return{canvas:t,addText:function(e){var r=new s.fabric.Textbox(e,{left:200,top:200,width:350,fontSize:24,fill:"#000"});r.setControlsVisibility({mb:!1,mt:!1}),t.add(r),t.renderAll(),t.setActiveObject(r),r.enterEditing()},addImage:function(e){var r=new s.fabric.Image(e,{width:500,height:500});t.add(r),t.renderAll},deleteSelected:function(){t.getActiveObjects().forEach((function(e){return t.remove(e)})),t.discardActiveObject(),t.renderAll()},deleteAll:function(){t.getObjects().forEach((function(e){return t.remove(e)})),t.discardActiveObject(),t.renderAll()},_getMostFrequentValue:function(t,e){if(!(t.length<1))return t.sort((function(r,n){return t.filter((function(t){return t[e]===r[e]})).length-t.filter((function(t){return t[e]===n[e]})).length})).pop()[e]},_getToggledValue:function(t,e){return b[t].find((function(t){return t!==e}))},setSelectionStyle:function(e){var r=this,n=t.getActiveObjects();if(!(n.length<1)){if(1===n.length){var o=n[0];if(o.selectionStart!==o.selectionEnd){var u,a=this._getMostFrequentValue(o.getSelectionStyles(),e),s=this._getToggledValue(e,a);o.styles[0]=null!==(u=o.styles[0])&&void 0!==u?u:{};for(var f=o.selectionStart;f<o.selectionEnd;f++)o.styles[0][f]=Object(i.a)({},e,s);t.renderAll()}else console.log("\ud83d\ude80 ~ file: index.js ~ line 205 ~ setSelectionStyle ~ object",o),o.set(Object(i.a)({},e,this._getToggledValue(e,o[e])))}else n.map((function(t){t.set(Object(i.a)({},e,r._getToggledValue(e,t[e])))}));t.renderAll()}},align:function(e){var r=t.getActiveObjects();""!=e&&r.length>0&&r.map((function(r){"left"===e?r.set({left:0}):"right"===e?r.set({left:t.width-r.width*r.scaleX}):"center"===e&&r.set({left:t.width/2-r.width*r.scaleX/2}),r.setCoords()})),t.renderAll()},alignText:function(e){(null===t||void 0===t?void 0:t.getActiveObjects()).map((function(t){return t.set("textAlign",e)})),t.renderAll()},resize:function(e){if(t.width!=e){var r=e/t.width,n=t.getObjects();for(var o in n)n[o].scaleX=n[o].scaleX*r,n[o].scaleY=n[o].scaleY*r,n[o].left=n[o].left*r,n[o].top=n[o].top*r,n[o].setCoords();var i=t.backgroundImage;i&&(i.scaleX=i.scaleX*r,i.scaleY=i.scaleY*r),t.discardActiveObject(),t.setWidth(t.getWidth()*r),t.setHeight(t.getHeight()*r),t.renderAll(),t.calcOffset()}},setFill:function(e){if("string"===typeof e||e instanceof String)t.backgroundColor=e;else{if("object"!==typeof e||null===e)return;var r=new s.fabric.Gradient({type:"linear",gradientUnits:"pixels",coords:{x1:0,y1:0,x2:t.width,y2:0},colorStops:[{offset:0,color:e.color1},{offset:1,color:e.color2}]});t.backgroundColor=r.toLive(t.contextContainer)}t.renderAll()}}}},T0f4:function(t,e){function r(e){return t.exports=r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},r(e)}t.exports=r},Xuae:function(t,e,r){"use strict";var n=r("mPvQ"),o=r("/GRZ"),i=r("i2R6"),u=(r("qXWd"),r("48fX")),a=r("tCBg"),s=r("T0f4");function f(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=s(t);if(e){var o=s(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return a(this,r)}}e.__esModule=!0,e.default=void 0;var c=r("q1tI"),l=function(t){u(r,t);var e=f(r);function r(t){var i;return o(this,r),(i=e.call(this,t))._hasHeadManager=void 0,i.emitChange=function(){i._hasHeadManager&&i.props.headManager.updateHead(i.props.reduceComponentsToState(n(i.props.headManager.mountedInstances),i.props))},i._hasHeadManager=i.props.headManager&&i.props.headManager.mountedInstances,i}return i(r,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),r}(c.Component);e.default=l},cpVT:function(t,e,r){"use strict";function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r.d(e,"a",(function(){return n}))},g4pe:function(t,e,r){t.exports=r("8Kt/")},i2R6:function(t,e){function r(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}t.exports=function(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}},kG2m:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},"kVK+":function(t,e){e.read=function(t,e,r,n,o){var i,u,a=8*o-n-1,s=(1<<a)-1,f=s>>1,c=-7,l=r?o-1:0,h=r?-1:1,p=t[e+l];for(l+=h,i=p&(1<<-c)-1,p>>=-c,c+=a;c>0;i=256*i+t[e+l],l+=h,c-=8);for(u=i&(1<<-c)-1,i>>=-c,c+=n;c>0;u=256*u+t[e+l],l+=h,c-=8);if(0===i)i=1-f;else{if(i===s)return u?NaN:1/0*(p?-1:1);u+=Math.pow(2,n),i-=f}return(p?-1:1)*u*Math.pow(2,i-n)},e.write=function(t,e,r,n,o,i){var u,a,s,f=8*i-o-1,c=(1<<f)-1,l=c>>1,h=23===o?Math.pow(2,-24)-Math.pow(2,-77):0,p=n?0:i-1,d=n?1:-1,g=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(a=isNaN(e)?1:0,u=c):(u=Math.floor(Math.log(e)/Math.LN2),e*(s=Math.pow(2,-u))<1&&(u--,s*=2),(e+=u+l>=1?h/s:h*Math.pow(2,1-l))*s>=2&&(u++,s/=2),u+l>=c?(a=0,u=c):u+l>=1?(a=(e*s-1)*Math.pow(2,o),u+=l):(a=e*Math.pow(2,l-1)*Math.pow(2,o),u=0));o>=8;t[r+p]=255&a,p+=d,a/=256,o-=8);for(u=u<<o|a,f+=o;f>0;t[r+p]=255&u,p+=d,u/=256,f-=8);t[r+p-d]|=128*g}},lwAK:function(t,e,r){"use strict";var n;e.__esModule=!0,e.AmpStateContext=void 0;var o=((n=r("q1tI"))&&n.__esModule?n:{default:n}).default.createContext({});e.AmpStateContext=o},mPvQ:function(t,e,r){var n=r("5fIB"),o=r("rlHP"),i=r("KckH"),u=r("kG2m");t.exports=function(t){return n(t)||o(t)||i(t)||u()}},ntbh:function(t,e){(function(e){t.exports=function(){var t={149:function(t){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(r){"object"===typeof window&&(e=window)}t.exports=e}},r={};function n(e){if(r[e])return r[e].exports;var o=r[e]={exports:{}},i=!0;try{t[e](o,o.exports,n),i=!1}finally{i&&delete r[e]}return o.exports}return n.ab=e+"/",n(149)}()}).call(this,"/")},oI91:function(t,e){t.exports=function(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}},qXWd:function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},qhzo:function(t,e){function r(e,n){return t.exports=r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},r(e,n)}t.exports=r},rlHP:function(t,e){t.exports=function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},tCBg:function(t,e,r){var n=r("C+bE"),o=r("qXWd");t.exports=function(t,e){return!e||"object"!==n(e)&&"function"!==typeof e?o(t):e}},vRNQ:function(t,e,r){t.exports={container:"Home_container__1EcsU",buttons:"Home_buttons__f55Jx",fileupload:"Home_fileupload__3DNsR",footer:"Home_footer__1WdhD",title:"Home_title__3DjR7",description:"Home_description__17Z4F",code:"Home_code__axx2Y",grid:"Home_grid__2Ei2F",card:"Home_card__2SdtB",logo:"Home_logo__1YbrH"}},vlRD:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r("RNiq")}])}},[["vlRD",0,1,3]]]);