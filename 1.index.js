(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{16:function(t,n,r){"use strict";(function(t){r.d(n,"o",(function(){return y})),r.d(n,"p",(function(){return m})),r.d(n,"a",(function(){return j})),r.d(n,"b",(function(){return k})),r.d(n,"c",(function(){return O})),r.d(n,"m",(function(){return E})),r.d(n,"f",(function(){return A})),r.d(n,"l",(function(){return P})),r.d(n,"j",(function(){return T})),r.d(n,"g",(function(){return $})),r.d(n,"i",(function(){return S})),r.d(n,"e",(function(){return M})),r.d(n,"d",(function(){return q})),r.d(n,"h",(function(){return I})),r.d(n,"k",(function(){return F})),r.d(n,"n",(function(){return z}));var e=r(17);let o=new("undefined"==typeof TextDecoder?(0,t.require)("util").TextDecoder:TextDecoder)("utf-8",{ignoreBOM:!0,fatal:!0});o.decode();let u=null;function i(){return null!==u&&u.buffer===e.x.buffer||(u=new Uint8Array(e.x.buffer)),u}function c(t,n){return o.decode(i().subarray(t,t+n))}const f=new Array(32).fill(void 0);f.push(void 0,null,!0,!1);let s=f.length;function a(t){s===f.length&&f.push(f.length+1);const n=s;return s=f[n],f[n]=t,n}function d(t){return f[t]}function l(t){const n=d(t);return function(t){t<36||(f[t]=s,s=t)}(t),n}let p=0;let h=new("undefined"==typeof TextEncoder?(0,t.require)("util").TextEncoder:TextEncoder)("utf-8");const _="function"==typeof h.encodeInto?function(t,n){return h.encodeInto(t,n)}:function(t,n){const r=h.encode(t);return n.set(r),{read:t.length,written:r.length}};function b(t,n,r){if(void 0===r){const r=h.encode(t),e=n(r.length);return i().subarray(e,e+r.length).set(r),p=r.length,e}let e=t.length,o=n(e);const u=i();let c=0;for(;c<e;c++){const n=t.charCodeAt(c);if(n>127)break;u[o+c]=n}if(c!==e){0!==c&&(t=t.slice(c)),o=r(o,e,e=c+3*t.length);const n=i().subarray(o+c,o+e);c+=_(t,n).written}return p=c,o}let g=null;function w(){return null!==g&&g.buffer===e.x.buffer||(g=new Int32Array(e.x.buffer)),g}function y(t,n){e.y(t,n)}let v=32;function m(t){try{e.z(function(t){if(1==v)throw new Error("out of js stack");return f[--v]=t,v}(t))}finally{f[v++]=void 0}}function x(t,n){if(!(t instanceof n))throw new Error("expected instance of "+n.name);return t.ptr}class j{free(){const t=this.ptr;this.ptr=0,e.i(t)}get pos_prev(){var t=e.c(this.ptr);return k.__wrap(t)}set pos_prev(t){x(t,k);var n=t.ptr;t.ptr=0,e.l(this.ptr,n)}get pos(){var t=e.b(this.ptr);return k.__wrap(t)}set pos(t){x(t,k);var n=t.ptr;t.ptr=0,e.k(this.ptr,n)}get vel(){var t=e.d(this.ptr);return k.__wrap(t)}set vel(t){x(t,k);var n=t.ptr;t.ptr=0,e.m(this.ptr,n)}get accel(){var t=e.a(this.ptr);return k.__wrap(t)}set accel(t){x(t,k);var n=t.ptr;t.ptr=0,e.j(this.ptr,n)}}class k{static __wrap(t){const n=Object.create(k.prototype);return n.ptr=t,n}free(){const t=this.ptr;this.ptr=0,e.r(t)}get x(){return e.e(this.ptr)}set x(t){e.n(this.ptr,t)}get y(){return e.f(this.ptr)}set y(t){e.o(this.ptr,t)}}class O{free(){const t=this.ptr;this.ptr=0,e.s(t)}get width(){return e.h(this.ptr)}set width(t){e.q(this.ptr,t)}get height(){return e.g(this.ptr)}set height(t){e.p(this.ptr,t)}}const E=function(t,n){return a(c(t,n))},A=function(t){console.log(d(t))},P=function(t){l(t)},T=function(t){return a(k.__wrap(t))},$=function(){return a(new Error)},S=function(t,n){var r=b(d(n).stack,e.v,e.w),o=p;w()[t/4+1]=o,w()[t/4+0]=r},M=function(t,n){try{console.error(c(t,n))}finally{e.u(t,n)}},q=(D=function(t,n,r,e){return a(d(t).call(d(n),d(r),d(e)))},function(){try{return D.apply(this,arguments)}catch(t){e.t(a(t))}});var D;const I="function"==typeof Math.random?Math.random:(J="Math.random",()=>{throw new Error(J+" is not defined")});var J;const F=function(t,n){var r=b(function t(n){const r=typeof n;if("number"==r||"boolean"==r||null==n)return""+n;if("string"==r)return`"${n}"`;if("symbol"==r){const t=n.description;return null==t?"Symbol":`Symbol(${t})`}if("function"==r){const t=n.name;return"string"==typeof t&&t.length>0?`Function(${t})`:"Function"}if(Array.isArray(n)){const r=n.length;let e="[";r>0&&(e+=t(n[0]));for(let o=1;o<r;o++)e+=", "+t(n[o]);return e+="]",e}const e=/\[object ([^\]]+)\]/.exec(toString.call(n));let o;if(!(e.length>1))return toString.call(n);if(o=e[1],"Object"==o)try{return"Object("+JSON.stringify(n)+")"}catch(t){return"Object"}return n instanceof Error?`${n.name}: ${n.message}\n${n.stack}`:o}(d(n)),e.v,e.w),o=p;w()[t/4+1]=o,w()[t/4+0]=r},z=function(t,n){throw new Error(c(t,n))}}).call(this,r(18)(t))},17:function(t,n,r){"use strict";var e=r.w[t.i];t.exports=e;r(16);e.A()},18:function(t,n){t.exports=function(t){if(!t.webpackPolyfill){var n=Object.create(t);n.children||(n.children=[]),Object.defineProperty(n,"loaded",{enumerable:!0,get:function(){return n.l}}),Object.defineProperty(n,"id",{enumerable:!0,get:function(){return n.i}}),Object.defineProperty(n,"exports",{enumerable:!0}),n.webpackPolyfill=1}return n}},19:function(t,n,r){"use strict";r.r(n);var e=r(16);r.d(n,"setup",(function(){return e.o})),r.d(n,"tick",(function(){return e.p})),r.d(n,"Particle",(function(){return e.a})),r.d(n,"Vector",(function(){return e.b})),r.d(n,"Window",(function(){return e.c})),r.d(n,"__wbindgen_string_new",(function(){return e.m})),r.d(n,"__wbg_log_975a12305b88c99f",(function(){return e.f})),r.d(n,"__wbindgen_object_drop_ref",(function(){return e.l})),r.d(n,"__wbg_vector_new",(function(){return e.j})),r.d(n,"__wbg_new_59cb74e423758ede",(function(){return e.g})),r.d(n,"__wbg_stack_558ba5917b466edd",(function(){return e.i})),r.d(n,"__wbg_error_4bb6c2a97407129a",(function(){return e.e})),r.d(n,"__wbg_call_d062df7c96e1be79",(function(){return e.d})),r.d(n,"__wbg_random_5af91a0f7daf1188",(function(){return e.h})),r.d(n,"__wbindgen_debug_string",(function(){return e.k})),r.d(n,"__wbindgen_throw",(function(){return e.n}))}}]);