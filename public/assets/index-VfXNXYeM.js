var Af=Object.defineProperty;var Rf=(n,e,t)=>e in n?Af(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var As=(n,e,t)=>(Rf(n,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function de(){}const ko=n=>n;function Wc(n){return n()}function Ya(){return Object.create(null)}function Fe(n){n.forEach(Wc)}function Tr(n){return typeof n=="function"}function Ir(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}function Pf(n){return Object.keys(n).length===0}function Sf(n,...e){if(n==null){for(const r of e)r(void 0);return de}const t=n.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function Cf(n,e,t){n.$$.on_destroy.push(Sf(e,t))}const Hc=typeof window<"u";let zc=Hc?()=>window.performance.now():()=>Date.now(),Do=Hc?n=>requestAnimationFrame(n):de;const an=new Set;function Gc(n){an.forEach(e=>{e.c(n)||(an.delete(e),e.f())}),an.size!==0&&Do(Gc)}function Kc(n){let e;return an.size===0&&Do(Gc),{promise:new Promise(t=>{an.add(e={c:n,f:t})}),abort(){an.delete(e)}}}function O(n,e){n.appendChild(e)}function Qc(n){if(!n)return document;const e=n.getRootNode?n.getRootNode():n.ownerDocument;return e&&e.host?e:n.ownerDocument}function bf(n){const e=N("style");return e.textContent="/* empty */",kf(Qc(n),e),e.sheet}function kf(n,e){return O(n.head||n,e),e.sheet}function j(n,e,t){n.insertBefore(e,t||null)}function $(n){n.parentNode&&n.parentNode.removeChild(n)}function Df(n,e){for(let t=0;t<n.length;t+=1)n[t]&&n[t].d(e)}function N(n){return document.createElement(n)}function nt(n){return document.createTextNode(n)}function X(){return nt(" ")}function se(n,e,t,r){return n.addEventListener(e,t,r),()=>n.removeEventListener(e,t,r)}function Of(n){return function(e){return e.preventDefault(),n.call(this,e)}}function I(n,e,t){t==null?n.removeAttribute(e):n.getAttribute(e)!==t&&n.setAttribute(e,t)}function Nf(n){return Array.from(n.childNodes)}function pn(n,e){e=""+e,n.data!==e&&(n.data=e)}function Se(n,e){n.value=e??""}function Vf(n,e,{bubbles:t=!1,cancelable:r=!1}={}){return new CustomEvent(n,{detail:e,bubbles:t,cancelable:r})}const hi=new Map;let di=0;function Mf(n){let e=5381,t=n.length;for(;t--;)e=(e<<5)-e^n.charCodeAt(t);return e>>>0}function Lf(n,e){const t={stylesheet:bf(e),rules:{}};return hi.set(n,t),t}function Yc(n,e,t,r,i,s,o,a=0){const u=16.666/r;let c=`{
`;for(let p=0;p<=1;p+=u){const T=e+(t-e)*s(p);c+=p*100+`%{${o(T,1-T)}}
`}const l=c+`100% {${o(t,1-t)}}
}`,h=`__svelte_${Mf(l)}_${a}`,d=Qc(n),{stylesheet:f,rules:_}=hi.get(d)||Lf(d,n);_[h]||(_[h]=!0,f.insertRule(`@keyframes ${h} ${l}`,f.cssRules.length));const y=n.style.animation||"";return n.style.animation=`${y?`${y}, `:""}${h} ${r}ms linear ${i}ms 1 both`,di+=1,h}function zs(n,e){const t=(n.style.animation||"").split(", "),r=t.filter(e?s=>s.indexOf(e)<0:s=>s.indexOf("__svelte")===-1),i=t.length-r.length;i&&(n.style.animation=r.join(", "),di-=i,di||xf())}function xf(){Do(()=>{di||(hi.forEach(n=>{const{ownerNode:e}=n.stylesheet;e&&$(e)}),hi.clear())})}let tr;function Kn(n){tr=n}function Uf(){if(!tr)throw new Error("Function called outside component initialization");return tr}function Ff(n){Uf().$$.on_mount.push(n)}const tn=[],Gs=[];let un=[];const Xa=[],Xc=Promise.resolve();let Ks=!1;function Jc(){Ks||(Ks=!0,Xc.then(Zc))}function Bf(){return Jc(),Xc}function Ut(n){un.push(n)}const Rs=new Set;let Xt=0;function Zc(){if(Xt!==0)return;const n=tr;do{try{for(;Xt<tn.length;){const e=tn[Xt];Xt++,Kn(e),$f(e.$$)}}catch(e){throw tn.length=0,Xt=0,e}for(Kn(null),tn.length=0,Xt=0;Gs.length;)Gs.pop()();for(let e=0;e<un.length;e+=1){const t=un[e];Rs.has(t)||(Rs.add(t),t())}un.length=0}while(tn.length);for(;Xa.length;)Xa.pop()();Ks=!1,Rs.clear(),Kn(n)}function $f(n){if(n.fragment!==null){n.update(),Fe(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(Ut)}}function qf(n){const e=[],t=[];un.forEach(r=>n.indexOf(r)===-1?e.push(r):t.push(r)),t.forEach(r=>r()),un=e}let Mn;function el(){return Mn||(Mn=Promise.resolve(),Mn.then(()=>{Mn=null})),Mn}function fi(n,e,t){n.dispatchEvent(Vf(`${e?"intro":"outro"}${t}`))}const ti=new Set;let mt;function tl(){mt={r:0,c:[],p:mt}}function nl(){mt.r||Fe(mt.c),mt=mt.p}function qe(n,e){n&&n.i&&(ti.delete(n),n.i(e))}function Mt(n,e,t,r){if(n&&n.o){if(ti.has(n))return;ti.add(n),mt.c.push(()=>{ti.delete(n),r&&(t&&n.d(1),r())}),n.o(e)}else r&&r()}const rl={duration:0};function Ja(n,e,t){const r={direction:"in"};let i=e(n,t,r),s=!1,o,a,u=0;function c(){o&&zs(n,o)}function l(){const{delay:d=0,duration:f=300,easing:_=ko,tick:y=de,css:p}=i||rl;p&&(o=Yc(n,0,1,f,d,_,p,u++)),y(0,1);const T=zc()+d,C=T+f;a&&a.abort(),s=!0,Ut(()=>fi(n,!0,"start")),a=Kc(k=>{if(s){if(k>=C)return y(1,0),fi(n,!0,"end"),c(),s=!1;if(k>=T){const H=_((k-T)/f);y(H,1-H)}}return s})}let h=!1;return{start(){h||(h=!0,zs(n),Tr(i)?(i=i(r),el().then(l)):l())},invalidate(){h=!1},end(){s&&(c(),s=!1)}}}function Za(n,e,t){const r={direction:"out"};let i=e(n,t,r),s=!0,o;const a=mt;a.r+=1;let u;function c(){const{delay:l=0,duration:h=300,easing:d=ko,tick:f=de,css:_}=i||rl;_&&(o=Yc(n,1,0,h,l,d,_));const y=zc()+l,p=y+h;Ut(()=>fi(n,!1,"start")),"inert"in n&&(u=n.inert,n.inert=!0),Kc(T=>{if(s){if(T>=p)return f(0,1),fi(n,!1,"end"),--a.r||Fe(a.c),!1;if(T>=y){const C=d((T-y)/h);f(1-C,C)}}return s})}return Tr(i)?el().then(()=>{i=i(r),c()}):c(),{end(l){l&&"inert"in n&&(n.inert=u),l&&i.tick&&i.tick(1,0),s&&(o&&zs(n,o),s=!1)}}}function eu(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function Oo(n){n&&n.c()}function Fi(n,e,t){const{fragment:r,after_update:i}=n.$$;r&&r.m(e,t),Ut(()=>{const s=n.$$.on_mount.map(Wc).filter(Tr);n.$$.on_destroy?n.$$.on_destroy.push(...s):Fe(s),n.$$.on_mount=[]}),i.forEach(Ut)}function Bi(n,e){const t=n.$$;t.fragment!==null&&(qf(t.after_update),Fe(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function jf(n,e){n.$$.dirty[0]===-1&&(tn.push(n),Jc(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function $i(n,e,t,r,i,s,o=null,a=[-1]){const u=tr;Kn(n);const c=n.$$={fragment:null,ctx:[],props:s,update:de,not_equal:i,bound:Ya(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(u?u.$$.context:[])),callbacks:Ya(),dirty:a,skip_bound:!1,root:e.target||u.$$.root};o&&o(c.root);let l=!1;if(c.ctx=t?t(n,e.props||{},(h,d,...f)=>{const _=f.length?f[0]:d;return c.ctx&&i(c.ctx[h],c.ctx[h]=_)&&(!c.skip_bound&&c.bound[h]&&c.bound[h](_),l&&jf(n,h)),d}):[],c.update(),l=!0,Fe(c.before_update),c.fragment=r?r(c.ctx):!1,e.target){if(e.hydrate){const h=Nf(e.target);c.fragment&&c.fragment.l(h),h.forEach($)}else c.fragment&&c.fragment.c();e.intro&&qe(n.$$.fragment),Fi(n,e.target,e.anchor),Zc()}Kn(u)}class qi{constructor(){As(this,"$$");As(this,"$$set")}$destroy(){Bi(this,1),this.$destroy=de}$on(e,t){if(!Tr(t))return de;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(t),()=>{const i=r.indexOf(t);i!==-1&&r.splice(i,1)}}$set(e){this.$$set&&!Pf(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Wf="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Wf);var tu={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const il=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Hf=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],o=n[t++],a=n[t++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=n[t++],o=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},sl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,a=o?n[i+1]:0,u=i+2<n.length,c=u?n[i+2]:0,l=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|c>>6,f=c&63;u||(f=64,o||(d=64)),r.push(t[l],t[h],t[d],t[f])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(il(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Hf(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const c=i<n.length?t[n.charAt(i)]:64;++i;const h=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||a==null||c==null||h==null)throw new zf;const d=s<<2|a>>4;if(r.push(d),c!==64){const f=a<<4&240|c>>2;if(r.push(f),h!==64){const _=c<<6&192|h;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class zf extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Gf=function(n){const e=il(n);return sl.encodeByteArray(e,!0)},mi=function(n){return Gf(n).replace(/\./g,"")},ol=function(n){try{return sl.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kf(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qf=()=>Kf().__FIREBASE_DEFAULTS__,Yf=()=>{if(typeof process>"u"||typeof tu>"u")return;const n=tu.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Xf=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&ol(n[1]);return e&&JSON.parse(e)},No=()=>{try{return Qf()||Yf()||Xf()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},al=n=>{var e,t;return(t=(e=No())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Jf=n=>{const e=al(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},ul=()=>{var n;return(n=No())===null||n===void 0?void 0:n.config},cl=n=>{var e;return(e=No())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function em(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n),a="";return[mi(JSON.stringify(t)),mi(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function tm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ee())}function nm(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function rm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function im(){const n=Ee();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function sm(){try{return typeof indexedDB=="object"}catch{return!1}}function om(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const am="FirebaseError";class at extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=am,Object.setPrototypeOf(this,at.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ar.prototype.create)}}class Ar{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?um(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new at(i,a,r)}}function um(n,e){return n.replace(cm,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const cm=/\{\$([^}]+)}/g;function lm(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function pi(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],o=e[i];if(nu(s)&&nu(o)){if(!pi(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function nu(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rr(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function $n(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function qn(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function hm(n,e){const t=new dm(n,e);return t.subscribe.bind(t)}class dm{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");fm(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=Ps),i.error===void 0&&(i.error=Ps),i.complete===void 0&&(i.complete=Ps);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function fm(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Ps(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pe(n){return n&&n._delegate?n._delegate:n}class Ft{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mm{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Zf;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(gm(e))try{this.getOrInitializeService({instanceIdentifier:bt})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=bt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=bt){return this.instances.has(e)}getOptions(e=bt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:pm(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=bt){return this.component?this.component.multipleInstances?e:bt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function pm(n){return n===bt?void 0:n}function gm(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _m{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new mm(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var M;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(M||(M={}));const ym={debug:M.DEBUG,verbose:M.VERBOSE,info:M.INFO,warn:M.WARN,error:M.ERROR,silent:M.SILENT},vm=M.INFO,wm={[M.DEBUG]:"log",[M.VERBOSE]:"log",[M.INFO]:"info",[M.WARN]:"warn",[M.ERROR]:"error"},Em=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=wm[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Vo{constructor(e){this.name=e,this._logLevel=vm,this._logHandler=Em,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in M))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ym[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,M.DEBUG,...e),this._logHandler(this,M.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,M.VERBOSE,...e),this._logHandler(this,M.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,M.INFO,...e),this._logHandler(this,M.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,M.WARN,...e),this._logHandler(this,M.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,M.ERROR,...e),this._logHandler(this,M.ERROR,...e)}}const Tm=(n,e)=>e.some(t=>n instanceof t);let ru,iu;function Im(){return ru||(ru=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Am(){return iu||(iu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ll=new WeakMap,Qs=new WeakMap,hl=new WeakMap,Ss=new WeakMap,Mo=new WeakMap;function Rm(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(gt(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&ll.set(t,n)}).catch(()=>{}),Mo.set(e,n),e}function Pm(n){if(Qs.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});Qs.set(n,e)}let Ys={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Qs.get(n);if(e==="objectStoreNames")return n.objectStoreNames||hl.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return gt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Sm(n){Ys=n(Ys)}function Cm(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Cs(this),e,...t);return hl.set(r,e.sort?e.sort():[e]),gt(r)}:Am().includes(n)?function(...e){return n.apply(Cs(this),e),gt(ll.get(this))}:function(...e){return gt(n.apply(Cs(this),e))}}function bm(n){return typeof n=="function"?Cm(n):(n instanceof IDBTransaction&&Pm(n),Tm(n,Im())?new Proxy(n,Ys):n)}function gt(n){if(n instanceof IDBRequest)return Rm(n);if(Ss.has(n))return Ss.get(n);const e=bm(n);return e!==n&&(Ss.set(n,e),Mo.set(e,n)),e}const Cs=n=>Mo.get(n);function km(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(n,e),a=gt(o);return r&&o.addEventListener("upgradeneeded",u=>{r(gt(o.result),u.oldVersion,u.newVersion,gt(o.transaction),u)}),t&&o.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Dm=["get","getKey","getAll","getAllKeys","count"],Om=["put","add","delete","clear"],bs=new Map;function su(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(bs.get(e))return bs.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=Om.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Dm.includes(t)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),i&&u.done]))[0]};return bs.set(e,s),s}Sm(n=>({...n,get:(e,t,r)=>su(e,t)||n.get(e,t,r),has:(e,t)=>!!su(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nm{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Vm(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Vm(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Xs="@firebase/app",ou="0.9.23";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bt=new Vo("@firebase/app"),Mm="@firebase/app-compat",Lm="@firebase/analytics-compat",xm="@firebase/analytics",Um="@firebase/app-check-compat",Fm="@firebase/app-check",Bm="@firebase/auth",$m="@firebase/auth-compat",qm="@firebase/database",jm="@firebase/database-compat",Wm="@firebase/functions",Hm="@firebase/functions-compat",zm="@firebase/installations",Gm="@firebase/installations-compat",Km="@firebase/messaging",Qm="@firebase/messaging-compat",Ym="@firebase/performance",Xm="@firebase/performance-compat",Jm="@firebase/remote-config",Zm="@firebase/remote-config-compat",ep="@firebase/storage",tp="@firebase/storage-compat",np="@firebase/firestore",rp="@firebase/firestore-compat",ip="firebase",sp="10.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Js="[DEFAULT]",op={[Xs]:"fire-core",[Mm]:"fire-core-compat",[xm]:"fire-analytics",[Lm]:"fire-analytics-compat",[Fm]:"fire-app-check",[Um]:"fire-app-check-compat",[Bm]:"fire-auth",[$m]:"fire-auth-compat",[qm]:"fire-rtdb",[jm]:"fire-rtdb-compat",[Wm]:"fire-fn",[Hm]:"fire-fn-compat",[zm]:"fire-iid",[Gm]:"fire-iid-compat",[Km]:"fire-fcm",[Qm]:"fire-fcm-compat",[Ym]:"fire-perf",[Xm]:"fire-perf-compat",[Jm]:"fire-rc",[Zm]:"fire-rc-compat",[ep]:"fire-gcs",[tp]:"fire-gcs-compat",[np]:"fire-fst",[rp]:"fire-fst-compat","fire-js":"fire-js",[ip]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gi=new Map,Zs=new Map;function ap(n,e){try{n.container.addComponent(e)}catch(t){Bt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function gn(n){const e=n.name;if(Zs.has(e))return Bt.debug(`There were multiple attempts to register component ${e}.`),!1;Zs.set(e,n);for(const t of gi.values())ap(t,n);return!0}function Lo(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const up={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},_t=new Ar("app","Firebase",up);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cp{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ft("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw _t.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rn=sp;function dl(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Js,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw _t.create("bad-app-name",{appName:String(i)});if(t||(t=ul()),!t)throw _t.create("no-options");const s=gi.get(i);if(s){if(pi(t,s.options)&&pi(r,s.config))return s;throw _t.create("duplicate-app",{appName:i})}const o=new _m(i);for(const u of Zs.values())o.addComponent(u);const a=new cp(t,r,o);return gi.set(i,a),a}function fl(n=Js){const e=gi.get(n);if(!e&&n===Js&&ul())return dl();if(!e)throw _t.create("no-app",{appName:n});return e}function yt(n,e,t){var r;let i=(r=op[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Bt.warn(a.join(" "));return}gn(new Ft(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lp="firebase-heartbeat-database",hp=1,nr="firebase-heartbeat-store";let ks=null;function ml(){return ks||(ks=km(lp,hp,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(nr)}}}).catch(n=>{throw _t.create("idb-open",{originalErrorMessage:n.message})})),ks}async function dp(n){try{return await(await ml()).transaction(nr).objectStore(nr).get(pl(n))}catch(e){if(e instanceof at)Bt.warn(e.message);else{const t=_t.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Bt.warn(t.message)}}}async function au(n,e){try{const r=(await ml()).transaction(nr,"readwrite");await r.objectStore(nr).put(e,pl(n)),await r.done}catch(t){if(t instanceof at)Bt.warn(t.message);else{const r=_t.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Bt.warn(r.message)}}}function pl(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fp=1024,mp=30*24*60*60*1e3;class pp{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new _p(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e;const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=uu();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const o=new Date(s.date).valueOf();return Date.now()-o<=mp}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=uu(),{heartbeatsToSend:r,unsentEntries:i}=gp(this._heartbeatsCache.heartbeats),s=mi(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function uu(){return new Date().toISOString().substring(0,10)}function gp(n,e=fp){const t=[];let r=n.slice();for(const i of n){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),cu(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),cu(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class _p{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return sm()?om().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await dp(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return au(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return au(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function cu(n){return mi(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yp(n){gn(new Ft("platform-logger",e=>new Nm(e),"PRIVATE")),gn(new Ft("heartbeat",e=>new pp(e),"PRIVATE")),yt(Xs,ou,n),yt(Xs,ou,"esm2017"),yt("fire-js","")}yp("");var vp="firebase",wp="10.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */yt(vp,wp,"app");var Ep=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},v,xo=xo||{},S=Ep||self;function ji(n){var e=typeof n;return e=e!="object"?e:n?Array.isArray(n)?"array":e:"null",e=="array"||e=="object"&&typeof n.length=="number"}function Pr(n){var e=typeof n;return e=="object"&&n!=null||e=="function"}function Tp(n){return Object.prototype.hasOwnProperty.call(n,Ds)&&n[Ds]||(n[Ds]=++Ip)}var Ds="closure_uid_"+(1e9*Math.random()>>>0),Ip=0;function Ap(n,e,t){return n.call.apply(n.bind,arguments)}function Rp(n,e,t){if(!n)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),n.apply(e,i)}}return function(){return n.apply(e,arguments)}}function ve(n,e,t){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ve=Ap:ve=Rp,ve.apply(null,arguments)}function zr(n,e){var t=Array.prototype.slice.call(arguments,1);return function(){var r=t.slice();return r.push.apply(r,arguments),n.apply(this,r)}}function ae(n,e){function t(){}t.prototype=e.prototype,n.$=e.prototype,n.prototype=new t,n.prototype.constructor=n,n.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function It(){this.s=this.s,this.o=this.o}var Pp=0;It.prototype.s=!1;It.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),Pp!=0)&&Tp(this)};It.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const gl=Array.prototype.indexOf?function(n,e){return Array.prototype.indexOf.call(n,e,void 0)}:function(n,e){if(typeof n=="string")return typeof e!="string"||e.length!=1?-1:n.indexOf(e,0);for(let t=0;t<n.length;t++)if(t in n&&n[t]===e)return t;return-1};function Uo(n){const e=n.length;if(0<e){const t=Array(e);for(let r=0;r<e;r++)t[r]=n[r];return t}return[]}function lu(n,e){for(let t=1;t<arguments.length;t++){const r=arguments[t];if(ji(r)){const i=n.length||0,s=r.length||0;n.length=i+s;for(let o=0;o<s;o++)n[i+o]=r[o]}else n.push(r)}}function we(n,e){this.type=n,this.g=this.target=e,this.defaultPrevented=!1}we.prototype.h=function(){this.defaultPrevented=!0};var Sp=function(){if(!S.addEventListener||!Object.defineProperty)return!1;var n=!1,e=Object.defineProperty({},"passive",{get:function(){n=!0}});try{S.addEventListener("test",()=>{},e),S.removeEventListener("test",()=>{},e)}catch{}return n}();function rr(n){return/^[\s\xa0]*$/.test(n)}function Wi(){var n=S.navigator;return n&&(n=n.userAgent)?n:""}function $e(n){return Wi().indexOf(n)!=-1}function Fo(n){return Fo[" "](n),n}Fo[" "]=function(){};function Cp(n,e){var t=wg;return Object.prototype.hasOwnProperty.call(t,n)?t[n]:t[n]=e(n)}var bp=$e("Opera"),_n=$e("Trident")||$e("MSIE"),_l=$e("Edge"),eo=_l||_n,yl=$e("Gecko")&&!(Wi().toLowerCase().indexOf("webkit")!=-1&&!$e("Edge"))&&!($e("Trident")||$e("MSIE"))&&!$e("Edge"),kp=Wi().toLowerCase().indexOf("webkit")!=-1&&!$e("Edge");function vl(){var n=S.document;return n?n.documentMode:void 0}var to;e:{var Os="",Ns=function(){var n=Wi();if(yl)return/rv:([^\);]+)(\)|;)/.exec(n);if(_l)return/Edge\/([\d\.]+)/.exec(n);if(_n)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(kp)return/WebKit\/(\S+)/.exec(n);if(bp)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(Ns&&(Os=Ns?Ns[1]:""),_n){var Vs=vl();if(Vs!=null&&Vs>parseFloat(Os)){to=String(Vs);break e}}to=Os}var no;if(S.document&&_n){var hu=vl();no=hu||parseInt(to,10)||void 0}else no=void 0;var Dp=no;function ir(n,e){if(we.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var t=this.type=n.type,r=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=e,e=n.relatedTarget){if(yl){e:{try{Fo(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else t=="mouseover"?e=n.fromElement:t=="mouseout"&&(e=n.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:Op[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&ir.$.h.call(this)}}ae(ir,we);var Op={2:"touch",3:"pen",4:"mouse"};ir.prototype.h=function(){ir.$.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var Sr="closure_listenable_"+(1e6*Math.random()|0),Np=0;function Vp(n,e,t,r,i){this.listener=n,this.proxy=null,this.src=e,this.type=t,this.capture=!!r,this.la=i,this.key=++Np,this.fa=this.ia=!1}function Hi(n){n.fa=!0,n.listener=null,n.proxy=null,n.src=null,n.la=null}function Bo(n,e,t){for(const r in n)e.call(t,n[r],r,n)}function Mp(n,e){for(const t in n)e.call(void 0,n[t],t,n)}function wl(n){const e={};for(const t in n)e[t]=n[t];return e}const du="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function El(n,e){let t,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(t in r)n[t]=r[t];for(let s=0;s<du.length;s++)t=du[s],Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}}function zi(n){this.src=n,this.g={},this.h=0}zi.prototype.add=function(n,e,t,r,i){var s=n.toString();n=this.g[s],n||(n=this.g[s]=[],this.h++);var o=io(n,e,r,i);return-1<o?(e=n[o],t||(e.ia=!1)):(e=new Vp(e,this.src,s,!!r,i),e.ia=t,n.push(e)),e};function ro(n,e){var t=e.type;if(t in n.g){var r=n.g[t],i=gl(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Hi(e),n.g[t].length==0&&(delete n.g[t],n.h--))}}function io(n,e,t,r){for(var i=0;i<n.length;++i){var s=n[i];if(!s.fa&&s.listener==e&&s.capture==!!t&&s.la==r)return i}return-1}var $o="closure_lm_"+(1e6*Math.random()|0),Ms={};function Tl(n,e,t,r,i){if(r&&r.once)return Al(n,e,t,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)Tl(n,e[s],t,r,i);return null}return t=Wo(t),n&&n[Sr]?n.O(e,t,Pr(r)?!!r.capture:!!r,i):Il(n,e,t,!1,r,i)}function Il(n,e,t,r,i,s){if(!e)throw Error("Invalid event type");var o=Pr(i)?!!i.capture:!!i,a=jo(n);if(a||(n[$o]=a=new zi(n)),t=a.add(e,t,r,o,s),t.proxy)return t;if(r=Lp(),t.proxy=r,r.src=n,r.listener=t,n.addEventListener)Sp||(i=o),i===void 0&&(i=!1),n.addEventListener(e.toString(),r,i);else if(n.attachEvent)n.attachEvent(Pl(e.toString()),r);else if(n.addListener&&n.removeListener)n.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return t}function Lp(){function n(t){return e.call(n.src,n.listener,t)}const e=xp;return n}function Al(n,e,t,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)Al(n,e[s],t,r,i);return null}return t=Wo(t),n&&n[Sr]?n.P(e,t,Pr(r)?!!r.capture:!!r,i):Il(n,e,t,!0,r,i)}function Rl(n,e,t,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)Rl(n,e[s],t,r,i);else r=Pr(r)?!!r.capture:!!r,t=Wo(t),n&&n[Sr]?(n=n.i,e=String(e).toString(),e in n.g&&(s=n.g[e],t=io(s,t,r,i),-1<t&&(Hi(s[t]),Array.prototype.splice.call(s,t,1),s.length==0&&(delete n.g[e],n.h--)))):n&&(n=jo(n))&&(e=n.g[e.toString()],n=-1,e&&(n=io(e,t,r,i)),(t=-1<n?e[n]:null)&&qo(t))}function qo(n){if(typeof n!="number"&&n&&!n.fa){var e=n.src;if(e&&e[Sr])ro(e.i,n);else{var t=n.type,r=n.proxy;e.removeEventListener?e.removeEventListener(t,r,n.capture):e.detachEvent?e.detachEvent(Pl(t),r):e.addListener&&e.removeListener&&e.removeListener(r),(t=jo(e))?(ro(t,n),t.h==0&&(t.src=null,e[$o]=null)):Hi(n)}}}function Pl(n){return n in Ms?Ms[n]:Ms[n]="on"+n}function xp(n,e){if(n.fa)n=!0;else{e=new ir(e,this);var t=n.listener,r=n.la||n.src;n.ia&&qo(n),n=t.call(r,e)}return n}function jo(n){return n=n[$o],n instanceof zi?n:null}var Ls="__closure_events_fn_"+(1e9*Math.random()>>>0);function Wo(n){return typeof n=="function"?n:(n[Ls]||(n[Ls]=function(e){return n.handleEvent(e)}),n[Ls])}function oe(){It.call(this),this.i=new zi(this),this.S=this,this.J=null}ae(oe,It);oe.prototype[Sr]=!0;oe.prototype.removeEventListener=function(n,e,t,r){Rl(this,n,e,t,r)};function fe(n,e){var t,r=n.J;if(r)for(t=[];r;r=r.J)t.push(r);if(n=n.S,r=e.type||e,typeof e=="string")e=new we(e,n);else if(e instanceof we)e.target=e.target||n;else{var i=e;e=new we(r,n),El(e,i)}if(i=!0,t)for(var s=t.length-1;0<=s;s--){var o=e.g=t[s];i=Gr(o,r,!0,e)&&i}if(o=e.g=n,i=Gr(o,r,!0,e)&&i,i=Gr(o,r,!1,e)&&i,t)for(s=0;s<t.length;s++)o=e.g=t[s],i=Gr(o,r,!1,e)&&i}oe.prototype.N=function(){if(oe.$.N.call(this),this.i){var n=this.i,e;for(e in n.g){for(var t=n.g[e],r=0;r<t.length;r++)Hi(t[r]);delete n.g[e],n.h--}}this.J=null};oe.prototype.O=function(n,e,t,r){return this.i.add(String(n),e,!1,t,r)};oe.prototype.P=function(n,e,t,r){return this.i.add(String(n),e,!0,t,r)};function Gr(n,e,t,r){if(e=n.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==t){var a=o.listener,u=o.la||o.src;o.ia&&ro(n.i,o),i=a.call(u,r)!==!1&&i}}return i&&!r.defaultPrevented}var Ho=S.JSON.stringify;class Up{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function Fp(){var n=zo;let e=null;return n.g&&(e=n.g,n.g=n.g.next,n.g||(n.h=null),e.next=null),e}class Bp{constructor(){this.h=this.g=null}add(e,t){const r=Sl.get();r.set(e,t),this.h?this.h.next=r:this.g=r,this.h=r}}var Sl=new Up(()=>new $p,n=>n.reset());class $p{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function qp(n){var e=1;n=n.split(":");const t=[];for(;0<e&&n.length;)t.push(n.shift()),e--;return n.length&&t.push(n.join(":")),t}function jp(n){S.setTimeout(()=>{throw n},0)}let sr,or=!1,zo=new Bp,Cl=()=>{const n=S.Promise.resolve(void 0);sr=()=>{n.then(Wp)}};var Wp=()=>{for(var n;n=Fp();){try{n.h.call(n.g)}catch(t){jp(t)}var e=Sl;e.j(n),100>e.h&&(e.h++,n.next=e.g,e.g=n)}or=!1};function Gi(n,e){oe.call(this),this.h=n||1,this.g=e||S,this.j=ve(this.qb,this),this.l=Date.now()}ae(Gi,oe);v=Gi.prototype;v.ga=!1;v.T=null;v.qb=function(){if(this.ga){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-n):(this.T&&(this.g.clearTimeout(this.T),this.T=null),fe(this,"tick"),this.ga&&(Go(this),this.start()))}};v.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Go(n){n.ga=!1,n.T&&(n.g.clearTimeout(n.T),n.T=null)}v.N=function(){Gi.$.N.call(this),Go(this),delete this.g};function Ko(n,e,t){if(typeof n=="function")t&&(n=ve(n,t));else if(n&&typeof n.handleEvent=="function")n=ve(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:S.setTimeout(n,e||0)}function bl(n){n.g=Ko(()=>{n.g=null,n.i&&(n.i=!1,bl(n))},n.j);const e=n.h;n.h=null,n.m.apply(null,e)}class Hp extends It{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:bl(this)}N(){super.N(),this.g&&(S.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ar(n){It.call(this),this.h=n,this.g={}}ae(ar,It);var fu=[];function kl(n,e,t,r){Array.isArray(t)||(t&&(fu[0]=t.toString()),t=fu);for(var i=0;i<t.length;i++){var s=Tl(e,t[i],r||n.handleEvent,!1,n.h||n);if(!s)break;n.g[s.key]=s}}function Dl(n){Bo(n.g,function(e,t){this.g.hasOwnProperty(t)&&qo(e)},n),n.g={}}ar.prototype.N=function(){ar.$.N.call(this),Dl(this)};ar.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Ki(){this.g=!0}Ki.prototype.Ea=function(){this.g=!1};function zp(n,e,t,r,i,s){n.info(function(){if(n.g)if(s)for(var o="",a=s.split("&"),u=0;u<a.length;u++){var c=a[u].split("=");if(1<c.length){var l=c[0];c=c[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+c+"&"):o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+t+`
`+o})}function Gp(n,e,t,r,i,s,o){n.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+t+`
`+s+" "+o})}function on(n,e,t,r){n.info(function(){return"XMLHTTP TEXT ("+e+"): "+Qp(n,t)+(r?" "+r:"")})}function Kp(n,e){n.info(function(){return"TIMEOUT: "+e})}Ki.prototype.info=function(){};function Qp(n,e){if(!n.g)return e;if(!e)return null;try{var t=JSON.parse(e);if(t){for(n=0;n<t.length;n++)if(Array.isArray(t[n])){var r=t[n];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Ho(t)}catch{return e}}var Kt={},mu=null;function Qi(){return mu=mu||new oe}Kt.Ta="serverreachability";function Ol(n){we.call(this,Kt.Ta,n)}ae(Ol,we);function ur(n){const e=Qi();fe(e,new Ol(e))}Kt.STAT_EVENT="statevent";function Nl(n,e){we.call(this,Kt.STAT_EVENT,n),this.stat=e}ae(Nl,we);function Ae(n){const e=Qi();fe(e,new Nl(e,n))}Kt.Ua="timingevent";function Vl(n,e){we.call(this,Kt.Ua,n),this.size=e}ae(Vl,we);function Cr(n,e){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return S.setTimeout(function(){n()},e)}var Yi={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Ml={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Qo(){}Qo.prototype.h=null;function pu(n){return n.h||(n.h=n.i())}function Ll(){}var br={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Yo(){we.call(this,"d")}ae(Yo,we);function Xo(){we.call(this,"c")}ae(Xo,we);var so;function Xi(){}ae(Xi,Qo);Xi.prototype.g=function(){return new XMLHttpRequest};Xi.prototype.i=function(){return{}};so=new Xi;function kr(n,e,t,r){this.l=n,this.j=e,this.m=t,this.W=r||1,this.U=new ar(this),this.P=Yp,n=eo?125:void 0,this.V=new Gi(n),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new xl}function xl(){this.i=null,this.g="",this.h=!1}var Yp=45e3,oo={},_i={};v=kr.prototype;v.setTimeout=function(n){this.P=n};function ao(n,e,t){n.L=1,n.v=Zi(rt(e)),n.s=t,n.S=!0,Ul(n,null)}function Ul(n,e){n.G=Date.now(),Dr(n),n.A=rt(n.v);var t=n.A,r=n.W;Array.isArray(r)||(r=[String(r)]),zl(t.i,"t",r),n.C=0,t=n.l.J,n.h=new xl,n.g=fh(n.l,t?e:null,!n.s),0<n.O&&(n.M=new Hp(ve(n.Pa,n,n.g),n.O)),kl(n.U,n.g,"readystatechange",n.nb),e=n.I?wl(n.I):{},n.s?(n.u||(n.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",n.g.ha(n.A,n.u,n.s,e)):(n.u="GET",n.g.ha(n.A,n.u,null,e)),ur(),zp(n.j,n.u,n.A,n.m,n.W,n.s)}v.nb=function(n){n=n.target;const e=this.M;e&&je(n)==3?e.l():this.Pa(n)};v.Pa=function(n){try{if(n==this.g)e:{const l=je(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>l)&&(l!=3||eo||this.g&&(this.h.h||this.g.ja()||vu(this.g)))){this.J||l!=4||e==7||(e==8||0>=h?ur(3):ur(2)),Ji(this);var t=this.g.da();this.ca=t;t:if(Fl(this)){var r=vu(this.g);n="";var i=r.length,s=je(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Dt(this),Qn(this);var o="";break t}this.h.i=new S.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,n+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=n,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=t==200,Gp(this.j,this.u,this.A,this.m,this.W,l,t),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!rr(a)){var c=a;break t}}c=null}if(t=c)on(this.j,this.m,t,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,uo(this,t);else{this.i=!1,this.o=3,Ae(12),Dt(this),Qn(this);break e}}this.S?(Bl(this,l,o),eo&&this.i&&l==3&&(kl(this.U,this.V,"tick",this.mb),this.V.start())):(on(this.j,this.m,o,null),uo(this,o)),l==4&&Dt(this),this.i&&!this.J&&(l==4?ch(this.l,this):(this.i=!1,Dr(this)))}else _g(this.g),t==400&&0<o.indexOf("Unknown SID")?(this.o=3,Ae(12)):(this.o=0,Ae(13)),Dt(this),Qn(this)}}}catch{}finally{}};function Fl(n){return n.g?n.u=="GET"&&n.L!=2&&n.l.Ha:!1}function Bl(n,e,t){let r=!0,i;for(;!n.J&&n.C<t.length;)if(i=Xp(n,t),i==_i){e==4&&(n.o=4,Ae(14),r=!1),on(n.j,n.m,null,"[Incomplete Response]");break}else if(i==oo){n.o=4,Ae(15),on(n.j,n.m,t,"[Invalid Chunk]"),r=!1;break}else on(n.j,n.m,i,null),uo(n,i);Fl(n)&&i!=_i&&i!=oo&&(n.h.g="",n.C=0),e!=4||t.length!=0||n.h.h||(n.o=1,Ae(16),r=!1),n.i=n.i&&r,r?0<t.length&&!n.ba&&(n.ba=!0,e=n.l,e.g==n&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+t.length),ra(e),e.M=!0,Ae(11))):(on(n.j,n.m,t,"[Invalid Chunked Response]"),Dt(n),Qn(n))}v.mb=function(){if(this.g){var n=je(this.g),e=this.g.ja();this.C<e.length&&(Ji(this),Bl(this,n,e),this.i&&n!=4&&Dr(this))}};function Xp(n,e){var t=n.C,r=e.indexOf(`
`,t);return r==-1?_i:(t=Number(e.substring(t,r)),isNaN(t)?oo:(r+=1,r+t>e.length?_i:(e=e.slice(r,r+t),n.C=r+t,e)))}v.cancel=function(){this.J=!0,Dt(this)};function Dr(n){n.Y=Date.now()+n.P,$l(n,n.P)}function $l(n,e){if(n.B!=null)throw Error("WatchDog timer not null");n.B=Cr(ve(n.lb,n),e)}function Ji(n){n.B&&(S.clearTimeout(n.B),n.B=null)}v.lb=function(){this.B=null;const n=Date.now();0<=n-this.Y?(Kp(this.j,this.A),this.L!=2&&(ur(),Ae(17)),Dt(this),this.o=2,Qn(this)):$l(this,this.Y-n)};function Qn(n){n.l.H==0||n.J||ch(n.l,n)}function Dt(n){Ji(n);var e=n.M;e&&typeof e.sa=="function"&&e.sa(),n.M=null,Go(n.V),Dl(n.U),n.g&&(e=n.g,n.g=null,e.abort(),e.sa())}function uo(n,e){try{var t=n.l;if(t.H!=0&&(t.g==n||co(t.i,n))){if(!n.K&&co(t.i,n)&&t.H==3){try{var r=t.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!t.u){if(t.g)if(t.g.G+3e3<n.G)wi(t),ns(t);else break e;na(t),Ae(18)}}else t.Fa=i[1],0<t.Fa-t.V&&37500>i[2]&&t.G&&t.A==0&&!t.v&&(t.v=Cr(ve(t.ib,t),6e3));if(1>=Ql(t.i)&&t.oa){try{t.oa()}catch{}t.oa=void 0}}else Ot(t,11)}else if((n.K||t.g==n)&&wi(t),!rr(e))for(i=t.Ja.g.parse(e),e=0;e<i.length;e++){let c=i[e];if(t.V=c[0],c=c[1],t.H==2)if(c[0]=="c"){t.K=c[1],t.pa=c[2];const l=c[3];l!=null&&(t.ra=l,t.l.info("VER="+t.ra));const h=c[4];h!=null&&(t.Ga=h,t.l.info("SVER="+t.Ga));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,t.L=r,t.l.info("backChannelRequestTimeoutMs_="+r)),r=t;const f=n.g;if(f){const _=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_){var s=r.i;s.g||_.indexOf("spdy")==-1&&_.indexOf("quic")==-1&&_.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Jo(s,s.h),s.h=null))}if(r.F){const y=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(r.Da=y,z(r.I,r.F,y))}}t.H=3,t.h&&t.h.Ba(),t.ca&&(t.S=Date.now()-n.G,t.l.info("Handshake RTT: "+t.S+"ms")),r=t;var o=n;if(r.wa=dh(r,r.J?r.pa:null,r.Y),o.K){Yl(r.i,o);var a=o,u=r.L;u&&a.setTimeout(u),a.B&&(Ji(a),Dr(a)),r.g=o}else ah(r);0<t.j.length&&rs(t)}else c[0]!="stop"&&c[0]!="close"||Ot(t,7);else t.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Ot(t,7):ta(t):c[0]!="noop"&&t.h&&t.h.Aa(c),t.A=0)}}ur(4)}catch{}}function Jp(n){if(n.Z&&typeof n.Z=="function")return n.Z();if(typeof Map<"u"&&n instanceof Map||typeof Set<"u"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(ji(n)){for(var e=[],t=n.length,r=0;r<t;r++)e.push(n[r]);return e}e=[],t=0;for(r in n)e[t++]=n[r];return e}function Zp(n){if(n.ta&&typeof n.ta=="function")return n.ta();if(!n.Z||typeof n.Z!="function"){if(typeof Map<"u"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set<"u"&&n instanceof Set)){if(ji(n)||typeof n=="string"){var e=[];n=n.length;for(var t=0;t<n;t++)e.push(t);return e}e=[],t=0;for(const r in n)e[t++]=r;return e}}}function ql(n,e){if(n.forEach&&typeof n.forEach=="function")n.forEach(e,void 0);else if(ji(n)||typeof n=="string")Array.prototype.forEach.call(n,e,void 0);else for(var t=Zp(n),r=Jp(n),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],t&&t[s],n)}var jl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function eg(n,e){if(n){n=n.split("&");for(var t=0;t<n.length;t++){var r=n[t].indexOf("="),i=null;if(0<=r){var s=n[t].substring(0,r);i=n[t].substring(r+1)}else s=n[t];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Lt(n){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,n instanceof Lt){this.h=n.h,yi(this,n.j),this.s=n.s,this.g=n.g,vi(this,n.m),this.l=n.l;var e=n.i,t=new cr;t.i=e.i,e.g&&(t.g=new Map(e.g),t.h=e.h),gu(this,t),this.o=n.o}else n&&(e=String(n).match(jl))?(this.h=!1,yi(this,e[1]||"",!0),this.s=jn(e[2]||""),this.g=jn(e[3]||"",!0),vi(this,e[4]),this.l=jn(e[5]||"",!0),gu(this,e[6]||"",!0),this.o=jn(e[7]||"")):(this.h=!1,this.i=new cr(null,this.h))}Lt.prototype.toString=function(){var n=[],e=this.j;e&&n.push(Wn(e,_u,!0),":");var t=this.g;return(t||e=="file")&&(n.push("//"),(e=this.s)&&n.push(Wn(e,_u,!0),"@"),n.push(encodeURIComponent(String(t)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t=this.m,t!=null&&n.push(":",String(t))),(t=this.l)&&(this.g&&t.charAt(0)!="/"&&n.push("/"),n.push(Wn(t,t.charAt(0)=="/"?rg:ng,!0))),(t=this.i.toString())&&n.push("?",t),(t=this.o)&&n.push("#",Wn(t,sg)),n.join("")};function rt(n){return new Lt(n)}function yi(n,e,t){n.j=t?jn(e,!0):e,n.j&&(n.j=n.j.replace(/:$/,""))}function vi(n,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);n.m=e}else n.m=null}function gu(n,e,t){e instanceof cr?(n.i=e,og(n.i,n.h)):(t||(e=Wn(e,ig)),n.i=new cr(e,n.h))}function z(n,e,t){n.i.set(e,t)}function Zi(n){return z(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function jn(n,e){return n?e?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function Wn(n,e,t){return typeof n=="string"?(n=encodeURI(n).replace(e,tg),t&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function tg(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var _u=/[#\/\?@]/g,ng=/[#\?:]/g,rg=/[#\?]/g,ig=/[#\?@]/g,sg=/#/g;function cr(n,e){this.h=this.g=null,this.i=n||null,this.j=!!e}function At(n){n.g||(n.g=new Map,n.h=0,n.i&&eg(n.i,function(e,t){n.add(decodeURIComponent(e.replace(/\+/g," ")),t)}))}v=cr.prototype;v.add=function(n,e){At(this),this.i=null,n=Pn(this,n);var t=this.g.get(n);return t||this.g.set(n,t=[]),t.push(e),this.h+=1,this};function Wl(n,e){At(n),e=Pn(n,e),n.g.has(e)&&(n.i=null,n.h-=n.g.get(e).length,n.g.delete(e))}function Hl(n,e){return At(n),e=Pn(n,e),n.g.has(e)}v.forEach=function(n,e){At(this),this.g.forEach(function(t,r){t.forEach(function(i){n.call(e,i,r,this)},this)},this)};v.ta=function(){At(this);const n=Array.from(this.g.values()),e=Array.from(this.g.keys()),t=[];for(let r=0;r<e.length;r++){const i=n[r];for(let s=0;s<i.length;s++)t.push(e[r])}return t};v.Z=function(n){At(this);let e=[];if(typeof n=="string")Hl(this,n)&&(e=e.concat(this.g.get(Pn(this,n))));else{n=Array.from(this.g.values());for(let t=0;t<n.length;t++)e=e.concat(n[t])}return e};v.set=function(n,e){return At(this),this.i=null,n=Pn(this,n),Hl(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[e]),this.h+=1,this};v.get=function(n,e){return n?(n=this.Z(n),0<n.length?String(n[0]):e):e};function zl(n,e,t){Wl(n,e),0<t.length&&(n.i=null,n.g.set(Pn(n,e),Uo(t)),n.h+=t.length)}v.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],e=Array.from(this.g.keys());for(var t=0;t<e.length;t++){var r=e[t];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),n.push(i)}}return this.i=n.join("&")};function Pn(n,e){return e=String(e),n.j&&(e=e.toLowerCase()),e}function og(n,e){e&&!n.j&&(At(n),n.i=null,n.g.forEach(function(t,r){var i=r.toLowerCase();r!=i&&(Wl(this,r),zl(this,i,t))},n)),n.j=e}var ag=class{constructor(n,e){this.g=n,this.map=e}};function Gl(n){this.l=n||ug,S.PerformanceNavigationTiming?(n=S.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(S.g&&S.g.Ka&&S.g.Ka()&&S.g.Ka().dc),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var ug=10;function Kl(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function Ql(n){return n.h?1:n.g?n.g.size:0}function co(n,e){return n.h?n.h==e:n.g?n.g.has(e):!1}function Jo(n,e){n.g?n.g.add(e):n.h=e}function Yl(n,e){n.h&&n.h==e?n.h=null:n.g&&n.g.has(e)&&n.g.delete(e)}Gl.prototype.cancel=function(){if(this.i=Xl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function Xl(n){if(n.h!=null)return n.i.concat(n.h.F);if(n.g!=null&&n.g.size!==0){let e=n.i;for(const t of n.g.values())e=e.concat(t.F);return e}return Uo(n.i)}var cg=class{stringify(n){return S.JSON.stringify(n,void 0)}parse(n){return S.JSON.parse(n,void 0)}};function lg(){this.g=new cg}function hg(n,e,t){const r=t||"";try{ql(n,function(i,s){let o=i;Pr(i)&&(o=Ho(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function dg(n,e){const t=new Ki;if(S.Image){const r=new Image;r.onload=zr(Kr,t,r,"TestLoadImage: loaded",!0,e),r.onerror=zr(Kr,t,r,"TestLoadImage: error",!1,e),r.onabort=zr(Kr,t,r,"TestLoadImage: abort",!1,e),r.ontimeout=zr(Kr,t,r,"TestLoadImage: timeout",!1,e),S.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=n}else e(!1)}function Kr(n,e,t,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Or(n){this.l=n.ec||null,this.j=n.ob||!1}ae(Or,Qo);Or.prototype.g=function(){return new es(this.l,this.j)};Or.prototype.i=function(n){return function(){return n}}({});function es(n,e){oe.call(this),this.F=n,this.u=e,this.m=void 0,this.readyState=Zo,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ae(es,oe);var Zo=0;v=es.prototype;v.open=function(n,e){if(this.readyState!=Zo)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=e,this.readyState=1,lr(this)};v.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(e.body=n),(this.F||S).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};v.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Nr(this)),this.readyState=Zo};v.$a=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,lr(this)),this.g&&(this.readyState=3,lr(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof S.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Jl(this)}else n.text().then(this.Za.bind(this),this.ka.bind(this))};function Jl(n){n.j.read().then(n.Xa.bind(n)).catch(n.ka.bind(n))}v.Xa=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var e=n.value?n.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!n.done}))&&(this.response=this.responseText+=e)}n.done?Nr(this):lr(this),this.readyState==3&&Jl(this)}};v.Za=function(n){this.g&&(this.response=this.responseText=n,Nr(this))};v.Ya=function(n){this.g&&(this.response=n,Nr(this))};v.ka=function(){this.g&&Nr(this)};function Nr(n){n.readyState=4,n.l=null,n.j=null,n.A=null,lr(n)}v.setRequestHeader=function(n,e){this.v.append(n,e)};v.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};v.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],e=this.h.entries();for(var t=e.next();!t.done;)t=t.value,n.push(t[0]+": "+t[1]),t=e.next();return n.join(`\r
`)};function lr(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(es.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var fg=S.JSON.parse;function Y(n){oe.call(this),this.headers=new Map,this.u=n||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Zl,this.L=this.M=!1}ae(Y,oe);var Zl="",mg=/^https?$/i,pg=["POST","PUT"];v=Y.prototype;v.Oa=function(n){this.M=n};v.ha=function(n,e,t,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+n);e=e?e.toUpperCase():"GET",this.I=n,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():so.g(),this.C=this.u?pu(this.u):pu(so),this.g.onreadystatechange=ve(this.La,this);try{this.G=!0,this.g.open(e,String(n),!0),this.G=!1}catch(s){yu(this,s);return}if(n=t||"",t=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)t.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())t.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(t.keys()).find(s=>s.toLowerCase()=="content-type"),i=S.FormData&&n instanceof S.FormData,!(0<=gl(pg,e))||r||i||t.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of t)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{nh(this),0<this.B&&((this.L=gg(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ve(this.ua,this)):this.A=Ko(this.ua,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(s){yu(this,s)}};function gg(n){return _n&&typeof n.timeout=="number"&&n.ontimeout!==void 0}v.ua=function(){typeof xo<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,fe(this,"timeout"),this.abort(8))};function yu(n,e){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=e,n.m=5,eh(n),ts(n)}function eh(n){n.F||(n.F=!0,fe(n,"complete"),fe(n,"error"))}v.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,fe(this,"complete"),fe(this,"abort"),ts(this))};v.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ts(this,!0)),Y.$.N.call(this)};v.La=function(){this.s||(this.G||this.v||this.l?th(this):this.kb())};v.kb=function(){th(this)};function th(n){if(n.h&&typeof xo<"u"&&(!n.C[1]||je(n)!=4||n.da()!=2)){if(n.v&&je(n)==4)Ko(n.La,0,n);else if(fe(n,"readystatechange"),je(n)==4){n.h=!1;try{const o=n.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var t;if(!(t=e)){var r;if(r=o===0){var i=String(n.I).match(jl)[1]||null;!i&&S.self&&S.self.location&&(i=S.self.location.protocol.slice(0,-1)),r=!mg.test(i?i.toLowerCase():"")}t=r}if(t)fe(n,"complete"),fe(n,"success");else{n.m=6;try{var s=2<je(n)?n.g.statusText:""}catch{s=""}n.j=s+" ["+n.da()+"]",eh(n)}}finally{ts(n)}}}}function ts(n,e){if(n.g){nh(n);const t=n.g,r=n.C[0]?()=>{}:null;n.g=null,n.C=null,e||fe(n,"ready");try{t.onreadystatechange=r}catch{}}}function nh(n){n.g&&n.L&&(n.g.ontimeout=null),n.A&&(S.clearTimeout(n.A),n.A=null)}v.isActive=function(){return!!this.g};function je(n){return n.g?n.g.readyState:0}v.da=function(){try{return 2<je(this)?this.g.status:-1}catch{return-1}};v.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};v.Wa=function(n){if(this.g){var e=this.g.responseText;return n&&e.indexOf(n)==0&&(e=e.substring(n.length)),fg(e)}};function vu(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.K){case Zl:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}function _g(n){const e={};n=(n.g&&2<=je(n)&&n.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<n.length;r++){if(rr(n[r]))continue;var t=qp(n[r]);const i=t[0];if(t=t[1],typeof t!="string")continue;t=t.trim();const s=e[i]||[];e[i]=s,s.push(t)}Mp(e,function(r){return r.join(", ")})}v.Ia=function(){return this.m};v.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function rh(n){let e="";return Bo(n,function(t,r){e+=r,e+=":",e+=t,e+=`\r
`}),e}function ea(n,e,t){e:{for(r in t){var r=!1;break e}r=!0}r||(t=rh(t),typeof n=="string"?t!=null&&encodeURIComponent(String(t)):z(n,e,t))}function Ln(n,e,t){return t&&t.internalChannelParams&&t.internalChannelParams[n]||e}function ih(n){this.Ga=0,this.j=[],this.l=new Ki,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Ln("failFast",!1,n),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Ln("baseRetryDelayMs",5e3,n),this.hb=Ln("retryDelaySeedMs",1e4,n),this.eb=Ln("forwardChannelMaxRetries",2,n),this.xa=Ln("forwardChannelRequestTimeoutMs",2e4,n),this.va=n&&n.xmlHttpFactory||void 0,this.Ha=n&&n.useFetchStreams||!1,this.L=void 0,this.J=n&&n.supportsCrossDomainXhr||!1,this.K="",this.i=new Gl(n&&n.concurrentRequestLimit),this.Ja=new lg,this.P=n&&n.fastHandshake||!1,this.O=n&&n.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=n&&n.bc||!1,n&&n.Ea&&this.l.Ea(),n&&n.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&n&&n.detectBufferingProxy||!1,this.qa=void 0,n&&n.longPollingTimeout&&0<n.longPollingTimeout&&(this.qa=n.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}v=ih.prototype;v.ra=8;v.H=1;function ta(n){if(sh(n),n.H==3){var e=n.W++,t=rt(n.I);if(z(t,"SID",n.K),z(t,"RID",e),z(t,"TYPE","terminate"),Vr(n,t),e=new kr(n,n.l,e),e.L=2,e.v=Zi(rt(t)),t=!1,S.navigator&&S.navigator.sendBeacon)try{t=S.navigator.sendBeacon(e.v.toString(),"")}catch{}!t&&S.Image&&(new Image().src=e.v,t=!0),t||(e.g=fh(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Dr(e)}hh(n)}function ns(n){n.g&&(ra(n),n.g.cancel(),n.g=null)}function sh(n){ns(n),n.u&&(S.clearTimeout(n.u),n.u=null),wi(n),n.i.cancel(),n.m&&(typeof n.m=="number"&&S.clearTimeout(n.m),n.m=null)}function rs(n){if(!Kl(n.i)&&!n.m){n.m=!0;var e=n.Na;sr||Cl(),or||(sr(),or=!0),zo.add(e,n),n.C=0}}function yg(n,e){return Ql(n.i)>=n.i.j-(n.m?1:0)?!1:n.m?(n.j=e.F.concat(n.j),!0):n.H==1||n.H==2||n.C>=(n.cb?0:n.eb)?!1:(n.m=Cr(ve(n.Na,n,e),lh(n,n.C)),n.C++,!0)}v.Na=function(n){if(this.m)if(this.m=null,this.H==1){if(!n){this.W=Math.floor(1e5*Math.random()),n=this.W++;const i=new kr(this,this.l,n);let s=this.s;if(this.U&&(s?(s=wl(s),El(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,t=0;t<this.j.length;t++){t:{var r=this.j[t];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=t;break e}if(e===4096||t===this.j.length-1){e=t+1;break e}}e=1e3}else e=1e3;e=oh(this,i,e),t=rt(this.I),z(t,"RID",n),z(t,"CVER",22),this.F&&z(t,"X-HTTP-Session-Id",this.F),Vr(this,t),s&&(this.O?e="headers="+encodeURIComponent(String(rh(s)))+"&"+e:this.o&&ea(t,this.o,s)),Jo(this.i,i),this.bb&&z(t,"TYPE","init"),this.P?(z(t,"$req",e),z(t,"SID","null"),i.aa=!0,ao(i,t,null)):ao(i,t,e),this.H=2}}else this.H==3&&(n?wu(this,n):this.j.length==0||Kl(this.i)||wu(this))};function wu(n,e){var t;e?t=e.m:t=n.W++;const r=rt(n.I);z(r,"SID",n.K),z(r,"RID",t),z(r,"AID",n.V),Vr(n,r),n.o&&n.s&&ea(r,n.o,n.s),t=new kr(n,n.l,t,n.C+1),n.o===null&&(t.I=n.s),e&&(n.j=e.F.concat(n.j)),e=oh(n,t,1e3),t.setTimeout(Math.round(.5*n.xa)+Math.round(.5*n.xa*Math.random())),Jo(n.i,t),ao(t,r,e)}function Vr(n,e){n.na&&Bo(n.na,function(t,r){z(e,r,t)}),n.h&&ql({},function(t,r){z(e,r,t)})}function oh(n,e,t){t=Math.min(n.j.length,t);var r=n.h?ve(n.h.Va,n.h,n):null;e:{var i=n.j;let s=-1;for(;;){const o=["count="+t];s==-1?0<t?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let u=0;u<t;u++){let c=i[u].g;const l=i[u].map;if(c-=s,0>c)s=Math.max(0,i[u].g-100),a=!1;else try{hg(l,o,"req"+c+"_")}catch{r&&r(l)}}if(a){r=o.join("&");break e}}}return n=n.j.splice(0,t),e.F=n,r}function ah(n){if(!n.g&&!n.u){n.ba=1;var e=n.Ma;sr||Cl(),or||(sr(),or=!0),zo.add(e,n),n.A=0}}function na(n){return n.g||n.u||3<=n.A?!1:(n.ba++,n.u=Cr(ve(n.Ma,n),lh(n,n.A)),n.A++,!0)}v.Ma=function(){if(this.u=null,uh(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var n=2*this.S;this.l.info("BP detection timer enabled: "+n),this.B=Cr(ve(this.jb,this),n)}};v.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Ae(10),ns(this),uh(this))};function ra(n){n.B!=null&&(S.clearTimeout(n.B),n.B=null)}function uh(n){n.g=new kr(n,n.l,"rpc",n.ba),n.o===null&&(n.g.I=n.s),n.g.O=0;var e=rt(n.wa);z(e,"RID","rpc"),z(e,"SID",n.K),z(e,"AID",n.V),z(e,"CI",n.G?"0":"1"),!n.G&&n.qa&&z(e,"TO",n.qa),z(e,"TYPE","xmlhttp"),Vr(n,e),n.o&&n.s&&ea(e,n.o,n.s),n.L&&n.g.setTimeout(n.L);var t=n.g;n=n.pa,t.L=1,t.v=Zi(rt(e)),t.s=null,t.S=!0,Ul(t,n)}v.ib=function(){this.v!=null&&(this.v=null,ns(this),na(this),Ae(19))};function wi(n){n.v!=null&&(S.clearTimeout(n.v),n.v=null)}function ch(n,e){var t=null;if(n.g==e){wi(n),ra(n),n.g=null;var r=2}else if(co(n.i,e))t=e.F,Yl(n.i,e),r=1;else return;if(n.H!=0){if(e.i)if(r==1){t=e.s?e.s.length:0,e=Date.now()-e.G;var i=n.C;r=Qi(),fe(r,new Vl(r,t)),rs(n)}else ah(n);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&yg(n,e)||r==2&&na(n)))switch(t&&0<t.length&&(e=n.i,e.i=e.i.concat(t)),i){case 1:Ot(n,5);break;case 4:Ot(n,10);break;case 3:Ot(n,6);break;default:Ot(n,2)}}}function lh(n,e){let t=n.ab+Math.floor(Math.random()*n.hb);return n.isActive()||(t*=2),t*e}function Ot(n,e){if(n.l.info("Error code "+e),e==2){var t=null;n.h&&(t=null);var r=ve(n.pb,n);t||(t=new Lt("//www.google.com/images/cleardot.gif"),S.location&&S.location.protocol=="http"||yi(t,"https"),Zi(t)),dg(t.toString(),r)}else Ae(2);n.H=0,n.h&&n.h.za(e),hh(n),sh(n)}v.pb=function(n){n?(this.l.info("Successfully pinged google.com"),Ae(2)):(this.l.info("Failed to ping google.com"),Ae(1))};function hh(n){if(n.H=0,n.ma=[],n.h){const e=Xl(n.i);(e.length!=0||n.j.length!=0)&&(lu(n.ma,e),lu(n.ma,n.j),n.i.i.length=0,Uo(n.j),n.j.length=0),n.h.ya()}}function dh(n,e,t){var r=t instanceof Lt?rt(t):new Lt(t);if(r.g!="")e&&(r.g=e+"."+r.g),vi(r,r.m);else{var i=S.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Lt(null);r&&yi(s,r),e&&(s.g=e),i&&vi(s,i),t&&(s.l=t),r=s}return t=n.F,e=n.Da,t&&e&&z(r,t,e),z(r,"VER",n.ra),Vr(n,r),r}function fh(n,e,t){if(e&&!n.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t&&n.Ha&&!n.va?new Y(new Or({ob:!0})):new Y(n.va),e.Oa(n.J),e}v.isActive=function(){return!!this.h&&this.h.isActive(this)};function mh(){}v=mh.prototype;v.Ba=function(){};v.Aa=function(){};v.za=function(){};v.ya=function(){};v.isActive=function(){return!0};v.Va=function(){};function Ei(){if(_n&&!(10<=Number(Dp)))throw Error("Environmental error: no available transport.")}Ei.prototype.g=function(n,e){return new ke(n,e)};function ke(n,e){oe.call(this),this.g=new ih(e),this.l=n,this.h=e&&e.messageUrlParams||null,n=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(n?n["X-WebChannel-Content-Type"]=e.messageContentType:n={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(n?n["X-WebChannel-Client-Profile"]=e.Ca:n={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=n,(n=e&&e.cc)&&!rr(n)&&(this.g.o=n),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!rr(e)&&(this.g.F=e,n=this.h,n!==null&&e in n&&(n=this.h,e in n&&delete n[e])),this.j=new Sn(this)}ae(ke,oe);ke.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var n=this.g,e=this.l,t=this.h||void 0;Ae(0),n.Y=e,n.na=t||{},n.G=n.aa,n.I=dh(n,null,n.Y),rs(n)};ke.prototype.close=function(){ta(this.g)};ke.prototype.u=function(n){var e=this.g;if(typeof n=="string"){var t={};t.__data__=n,n=t}else this.v&&(t={},t.__data__=Ho(n),n=t);e.j.push(new ag(e.fb++,n)),e.H==3&&rs(e)};ke.prototype.N=function(){this.g.h=null,delete this.j,ta(this.g),delete this.g,ke.$.N.call(this)};function ph(n){Yo.call(this),n.__headers__&&(this.headers=n.__headers__,this.statusCode=n.__status__,delete n.__headers__,delete n.__status__);var e=n.__sm__;if(e){e:{for(const t in e){n=t;break e}n=void 0}(this.i=n)&&(n=this.i,e=e!==null&&n in e?e[n]:void 0),this.data=e}else this.data=n}ae(ph,Yo);function gh(){Xo.call(this),this.status=1}ae(gh,Xo);function Sn(n){this.g=n}ae(Sn,mh);Sn.prototype.Ba=function(){fe(this.g,"a")};Sn.prototype.Aa=function(n){fe(this.g,new ph(n))};Sn.prototype.za=function(n){fe(this.g,new gh)};Sn.prototype.ya=function(){fe(this.g,"b")};function vg(){this.blockSize=-1}function xe(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}ae(xe,vg);xe.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function xs(n,e,t){t||(t=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(t++)|e.charCodeAt(t++)<<8|e.charCodeAt(t++)<<16|e.charCodeAt(t++)<<24;else for(i=0;16>i;++i)r[i]=e[t++]|e[t++]<<8|e[t++]<<16|e[t++]<<24;e=n.g[0],t=n.g[1],i=n.g[2];var s=n.g[3],o=e+(s^t&(i^s))+r[0]+3614090360&4294967295;e=t+(o<<7&4294967295|o>>>25),o=s+(i^e&(t^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(t^s&(e^t))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=t+(e^i&(s^e))+r[3]+3250441966&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(s^t&(i^s))+r[4]+4118548399&4294967295,e=t+(o<<7&4294967295|o>>>25),o=s+(i^e&(t^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(t^s&(e^t))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=t+(e^i&(s^e))+r[7]+4249261313&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(s^t&(i^s))+r[8]+1770035416&4294967295,e=t+(o<<7&4294967295|o>>>25),o=s+(i^e&(t^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(t^s&(e^t))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=t+(e^i&(s^e))+r[11]+2304563134&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(s^t&(i^s))+r[12]+1804603682&4294967295,e=t+(o<<7&4294967295|o>>>25),o=s+(i^e&(t^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(t^s&(e^t))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=t+(e^i&(s^e))+r[15]+1236535329&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(t^i))+r[1]+4129170786&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^i&(e^t))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(i^s))+r[0]+3921069994&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(t^i))+r[5]+3593408605&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^i&(e^t))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(i^s))+r[4]+3889429448&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(t^i))+r[9]+568446438&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^i&(e^t))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(i^s))+r[8]+1163531501&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(t^i))+r[13]+2850285829&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^i&(e^t))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(i^s))+r[12]+2368359562&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(t^i^s)+r[5]+4294588738&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^t)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=t+(i^s^e)+r[14]+4259657740&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(t^i^s)+r[1]+2763975236&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^t)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=t+(i^s^e)+r[10]+3200236656&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(t^i^s)+r[13]+681279174&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^t)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=t+(i^s^e)+r[6]+76029189&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(t^i^s)+r[9]+3654602809&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^t)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=t+(i^s^e)+r[2]+3299628645&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(i^(t|~s))+r[0]+4096336452&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~t))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=t+(s^(i|~e))+r[5]+4237533241&4294967295,t=i+(o<<21&4294967295|o>>>11),o=e+(i^(t|~s))+r[12]+1700485571&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~t))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=t+(s^(i|~e))+r[1]+2240044497&4294967295,t=i+(o<<21&4294967295|o>>>11),o=e+(i^(t|~s))+r[8]+1873313359&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~t))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=t+(s^(i|~e))+r[13]+1309151649&4294967295,t=i+(o<<21&4294967295|o>>>11),o=e+(i^(t|~s))+r[4]+4149444226&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~t))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=t+(s^(i|~e))+r[9]+3951481745&4294967295,n.g[0]=n.g[0]+e&4294967295,n.g[1]=n.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,n.g[2]=n.g[2]+i&4294967295,n.g[3]=n.g[3]+s&4294967295}xe.prototype.j=function(n,e){e===void 0&&(e=n.length);for(var t=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=t;)xs(this,n,s),s+=this.blockSize;if(typeof n=="string"){for(;s<e;)if(r[i++]=n.charCodeAt(s++),i==this.blockSize){xs(this,r),i=0;break}}else for(;s<e;)if(r[i++]=n[s++],i==this.blockSize){xs(this,r),i=0;break}}this.h=i,this.i+=e};xe.prototype.l=function(){var n=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);n[0]=128;for(var e=1;e<n.length-8;++e)n[e]=0;var t=8*this.i;for(e=n.length-8;e<n.length;++e)n[e]=t&255,t/=256;for(this.j(n),n=Array(16),e=t=0;4>e;++e)for(var r=0;32>r;r+=8)n[t++]=this.g[e]>>>r&255;return n};function W(n,e){this.h=e;for(var t=[],r=!0,i=n.length-1;0<=i;i--){var s=n[i]|0;r&&s==e||(t[i]=s,r=!1)}this.g=t}var wg={};function ia(n){return-128<=n&&128>n?Cp(n,function(e){return new W([e|0],0>e?-1:0)}):new W([n|0],0>n?-1:0)}function We(n){if(isNaN(n)||!isFinite(n))return cn;if(0>n)return le(We(-n));for(var e=[],t=1,r=0;n>=t;r++)e[r]=n/t|0,t*=lo;return new W(e,0)}function _h(n,e){if(n.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(n.charAt(0)=="-")return le(_h(n.substring(1),e));if(0<=n.indexOf("-"))throw Error('number format error: interior "-" character');for(var t=We(Math.pow(e,8)),r=cn,i=0;i<n.length;i+=8){var s=Math.min(8,n.length-i),o=parseInt(n.substring(i,i+s),e);8>s?(s=We(Math.pow(e,s)),r=r.R(s).add(We(o))):(r=r.R(t),r=r.add(We(o)))}return r}var lo=4294967296,cn=ia(0),ho=ia(1),Eu=ia(16777216);v=W.prototype;v.ea=function(){if(Oe(this))return-le(this).ea();for(var n=0,e=1,t=0;t<this.g.length;t++){var r=this.D(t);n+=(0<=r?r:lo+r)*e,e*=lo}return n};v.toString=function(n){if(n=n||10,2>n||36<n)throw Error("radix out of range: "+n);if(Je(this))return"0";if(Oe(this))return"-"+le(this).toString(n);for(var e=We(Math.pow(n,6)),t=this,r="";;){var i=Ii(t,e).g;t=Ti(t,i.R(e));var s=((0<t.g.length?t.g[0]:t.h)>>>0).toString(n);if(t=i,Je(t))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};v.D=function(n){return 0>n?0:n<this.g.length?this.g[n]:this.h};function Je(n){if(n.h!=0)return!1;for(var e=0;e<n.g.length;e++)if(n.g[e]!=0)return!1;return!0}function Oe(n){return n.h==-1}v.X=function(n){return n=Ti(this,n),Oe(n)?-1:Je(n)?0:1};function le(n){for(var e=n.g.length,t=[],r=0;r<e;r++)t[r]=~n.g[r];return new W(t,~n.h).add(ho)}v.abs=function(){return Oe(this)?le(this):this};v.add=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(n.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(n.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,t[i]=o<<16|s}return new W(t,t[t.length-1]&-2147483648?-1:0)};function Ti(n,e){return n.add(le(e))}v.R=function(n){if(Je(this)||Je(n))return cn;if(Oe(this))return Oe(n)?le(this).R(le(n)):le(le(this).R(n));if(Oe(n))return le(this.R(le(n)));if(0>this.X(Eu)&&0>n.X(Eu))return We(this.ea()*n.ea());for(var e=this.g.length+n.g.length,t=[],r=0;r<2*e;r++)t[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<n.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=n.D(i)>>>16,u=n.D(i)&65535;t[2*r+2*i]+=o*u,Qr(t,2*r+2*i),t[2*r+2*i+1]+=s*u,Qr(t,2*r+2*i+1),t[2*r+2*i+1]+=o*a,Qr(t,2*r+2*i+1),t[2*r+2*i+2]+=s*a,Qr(t,2*r+2*i+2)}for(r=0;r<e;r++)t[r]=t[2*r+1]<<16|t[2*r];for(r=e;r<2*e;r++)t[r]=0;return new W(t,0)};function Qr(n,e){for(;(n[e]&65535)!=n[e];)n[e+1]+=n[e]>>>16,n[e]&=65535,e++}function xn(n,e){this.g=n,this.h=e}function Ii(n,e){if(Je(e))throw Error("division by zero");if(Je(n))return new xn(cn,cn);if(Oe(n))return e=Ii(le(n),e),new xn(le(e.g),le(e.h));if(Oe(e))return e=Ii(n,le(e)),new xn(le(e.g),e.h);if(30<n.g.length){if(Oe(n)||Oe(e))throw Error("slowDivide_ only works with positive integers.");for(var t=ho,r=e;0>=r.X(n);)t=Tu(t),r=Tu(r);var i=Jt(t,1),s=Jt(r,1);for(r=Jt(r,2),t=Jt(t,2);!Je(r);){var o=s.add(r);0>=o.X(n)&&(i=i.add(t),s=o),r=Jt(r,1),t=Jt(t,1)}return e=Ti(n,i.R(e)),new xn(i,e)}for(i=cn;0<=n.X(e);){for(t=Math.max(1,Math.floor(n.ea()/e.ea())),r=Math.ceil(Math.log(t)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=We(t),o=s.R(e);Oe(o)||0<o.X(n);)t-=r,s=We(t),o=s.R(e);Je(s)&&(s=ho),i=i.add(s),n=Ti(n,o)}return new xn(i,n)}v.gb=function(n){return Ii(this,n).h};v.and=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0;r<e;r++)t[r]=this.D(r)&n.D(r);return new W(t,this.h&n.h)};v.or=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0;r<e;r++)t[r]=this.D(r)|n.D(r);return new W(t,this.h|n.h)};v.xor=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0;r<e;r++)t[r]=this.D(r)^n.D(r);return new W(t,this.h^n.h)};function Tu(n){for(var e=n.g.length+1,t=[],r=0;r<e;r++)t[r]=n.D(r)<<1|n.D(r-1)>>>31;return new W(t,n.h)}function Jt(n,e){var t=e>>5;e%=32;for(var r=n.g.length-t,i=[],s=0;s<r;s++)i[s]=0<e?n.D(s+t)>>>e|n.D(s+t+1)<<32-e:n.D(s+t);return new W(i,n.h)}Ei.prototype.createWebChannel=Ei.prototype.g;ke.prototype.send=ke.prototype.u;ke.prototype.open=ke.prototype.m;ke.prototype.close=ke.prototype.close;Yi.NO_ERROR=0;Yi.TIMEOUT=8;Yi.HTTP_ERROR=6;Ml.COMPLETE="complete";Ll.EventType=br;br.OPEN="a";br.CLOSE="b";br.ERROR="c";br.MESSAGE="d";oe.prototype.listen=oe.prototype.O;Y.prototype.listenOnce=Y.prototype.P;Y.prototype.getLastError=Y.prototype.Sa;Y.prototype.getLastErrorCode=Y.prototype.Ia;Y.prototype.getStatus=Y.prototype.da;Y.prototype.getResponseJson=Y.prototype.Wa;Y.prototype.getResponseText=Y.prototype.ja;Y.prototype.send=Y.prototype.ha;Y.prototype.setWithCredentials=Y.prototype.Oa;xe.prototype.digest=xe.prototype.l;xe.prototype.reset=xe.prototype.reset;xe.prototype.update=xe.prototype.j;W.prototype.add=W.prototype.add;W.prototype.multiply=W.prototype.R;W.prototype.modulo=W.prototype.gb;W.prototype.compare=W.prototype.X;W.prototype.toNumber=W.prototype.ea;W.prototype.toString=W.prototype.toString;W.prototype.getBits=W.prototype.D;W.fromNumber=We;W.fromString=_h;var Eg=function(){return new Ei},Tg=function(){return Qi()},Us=Yi,Ig=Ml,Ag=Kt,Iu={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Rg=Or,Yr=Ll,Pg=Y,Sg=xe,ln=W;const Au="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}_e.UNAUTHENTICATED=new _e(null),_e.GOOGLE_CREDENTIALS=new _e("google-credentials-uid"),_e.FIRST_PARTY=new _e("first-party-uid"),_e.MOCK_USER=new _e("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cn="10.5.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $t=new Vo("@firebase/firestore");function Un(){return $t.logLevel}function E(n,...e){if($t.logLevel<=M.DEBUG){const t=e.map(sa);$t.debug(`Firestore (${Cn}): ${n}`,...t)}}function it(n,...e){if($t.logLevel<=M.ERROR){const t=e.map(sa);$t.error(`Firestore (${Cn}): ${n}`,...t)}}function yn(n,...e){if($t.logLevel<=M.WARN){const t=e.map(sa);$t.warn(`Firestore (${Cn}): ${n}`,...t)}}function sa(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P(n="Unexpected state"){const e=`FIRESTORE (${Cn}) INTERNAL ASSERTION FAILED: `+n;throw it(e),new Error(e)}function K(n,e){n||P()}function D(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class w extends at{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Cg{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(_e.UNAUTHENTICATED))}shutdown(){}}class bg{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class kg{constructor(e){this.t=e,this.currentUser=_e.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let r=this.i;const i=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let s=new tt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new tt,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{E("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(E("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new tt)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(E("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(K(typeof r.accessToken=="string"),new yh(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return K(e===null||typeof e=="string"),new _e(e)}}class Dg{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=_e.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Og{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new Dg(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(_e.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ng{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Vg{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){const r=s=>{s.error!=null&&E("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,E("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{E("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):E("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(K(typeof t.token=="string"),this.R=t.token,new Ng(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mg(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=Mg(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%e.length))}return r}}function B(n,e){return n<e?-1:n>e?1:0}function vn(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new w(m.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new w(m.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new w(m.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new w(m.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ne.fromMillis(Date.now())}static fromDate(e){return ne.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new ne(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?B(this.nanoseconds,e.nanoseconds):B(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(e){this.timestamp=e}static fromTimestamp(e){return new b(e)}static min(){return new b(new ne(0,0))}static max(){return new b(new ne(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(e,t,r){t===void 0?t=0:t>e.length&&P(),r===void 0?r=e.length-t:r>e.length-t&&P(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return hr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof hr?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=e.get(i),o=t.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class G extends hr{construct(e,t,r){return new G(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new w(m.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new G(t)}static emptyPath(){return new G([])}}const Lg=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class he extends hr{construct(e,t,r){return new he(e,t,r)}static isValidIdentifier(e){return Lg.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),he.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new he(["__name__"])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new w(m.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new w(m.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new w(m.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new w(m.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new he(t)}static emptyPath(){return new he([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(e){this.path=e}static fromPath(e){return new A(G.fromString(e))}static fromName(e){return new A(G.fromString(e).popFirst(5))}static empty(){return new A(G.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&G.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return G.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new A(new G(e.slice()))}}function xg(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=b.fromTimestamp(r===1e9?new ne(t+1,0):new ne(t,r));return new wt(i,A.empty(),e)}function Ug(n){return new wt(n.readTime,n.key,-1)}class wt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new wt(b.min(),A.empty(),-1)}static max(){return new wt(b.max(),A.empty(),-1)}}function Fg(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=A.comparator(n.documentKey,e.documentKey),t!==0?t:B(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bg="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class $g{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mr(n){if(n.code!==m.FAILED_PRECONDITION||n.message!==Bg)throw n;E("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&P(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new g((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof g?t:g.resolve(t)}catch(t){return g.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):g.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):g.reject(t)}static resolve(e){return new g((t,r)=>{t(e)})}static reject(e){return new g((t,r)=>{r(e)})}static waitFor(e){return new g((t,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&t()},u=>r(u))}),o=!0,s===i&&t()})}static or(e){let t=g.resolve(!1);for(const r of e)t=t.next(i=>i?g.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new g((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const c=u;t(e[c]).next(l=>{o[c]=l,++a,a===s&&r(o)},l=>i(l))}})}static doWhile(e,t){return new g((r,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}}function Lr(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.se(r),this.oe=r=>t.writeSequenceNumber(r))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}oa._e=-1;function is(n){return n==null}function Ai(n){return n===0&&1/n==-1/0}function qg(n){return typeof n=="number"&&Number.isInteger(n)&&!Ai(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ru(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function bn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function wh(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e,t){this.comparator=e,this.root=t||ce.EMPTY}insert(e,t){return new Q(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ce.BLACK,null,null))}remove(e){return new Q(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ce.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Xr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Xr(this.root,e,this.comparator,!1)}getReverseIterator(){return new Xr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Xr(this.root,e,this.comparator,!0)}}class Xr{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ce{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??ce.RED,this.left=i??ce.EMPTY,this.right=s??ce.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new ce(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ce.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return ce.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ce.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ce.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw P();const e=this.left.check();if(e!==this.right.check())throw P();return e+(this.isRed()?0:1)}}ce.EMPTY=null,ce.RED=!0,ce.BLACK=!1;ce.EMPTY=new class{constructor(){this.size=0}get key(){throw P()}get value(){throw P()}get color(){throw P()}get left(){throw P()}get right(){throw P()}copy(e,t,r,i,s){return this}insert(e,t,r){return new ce(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e){this.comparator=e,this.data=new Q(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Pu(this.data.getIterator())}getIteratorFrom(e){return new Pu(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof me)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new me(this.comparator);return t.data=e,t}}class Pu{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e){this.fields=e,e.sort(he.comparator)}static empty(){return new Me([])}unionWith(e){let t=new me(he.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Me(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return vn(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Eh("Invalid base64 string: "+s):s}}(e);return new Te(t)}static fromUint8Array(e){const t=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Te(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return B(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Te.EMPTY_BYTE_STRING=new Te("");const jg=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Et(n){if(K(!!n),typeof n=="string"){let e=0;const t=jg.exec(n);if(K(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Z(n.seconds),nanos:Z(n.nanos)}}function Z(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function qt(n){return typeof n=="string"?Te.fromBase64String(n):Te.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aa(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function ua(n){const e=n.mapValue.fields.__previous_value__;return aa(e)?ua(e):e}function dr(n){const e=Et(n.mapValue.fields.__local_write_time__.timestampValue);return new ne(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wg{constructor(e,t,r,i,s,o,a,u,c){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c}}class fr{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new fr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof fr&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function jt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?aa(n)?4:Hg(n)?9007199254740991:10:P()}function Ye(n,e){if(n===e)return!0;const t=jt(n);if(t!==jt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return dr(n).isEqual(dr(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Et(i.timestampValue),a=Et(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return qt(i.bytesValue).isEqual(qt(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return Z(i.geoPointValue.latitude)===Z(s.geoPointValue.latitude)&&Z(i.geoPointValue.longitude)===Z(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Z(i.integerValue)===Z(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Z(i.doubleValue),a=Z(s.doubleValue);return o===a?Ai(o)===Ai(a):isNaN(o)&&isNaN(a)}return!1}(n,e);case 9:return vn(n.arrayValue.values||[],e.arrayValue.values||[],Ye);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(Ru(o)!==Ru(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!Ye(o[u],a[u])))return!1;return!0}(n,e);default:return P()}}function mr(n,e){return(n.values||[]).find(t=>Ye(t,e))!==void 0}function wn(n,e){if(n===e)return 0;const t=jt(n),r=jt(e);if(t!==r)return B(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return B(n.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Z(s.integerValue||s.doubleValue),u=Z(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(n,e);case 3:return Su(n.timestampValue,e.timestampValue);case 4:return Su(dr(n),dr(e));case 5:return B(n.stringValue,e.stringValue);case 6:return function(s,o){const a=qt(s),u=qt(o);return a.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),u=o.split("/");for(let c=0;c<a.length&&c<u.length;c++){const l=B(a[c],u[c]);if(l!==0)return l}return B(a.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,o){const a=B(Z(s.latitude),Z(o.latitude));return a!==0?a:B(Z(s.longitude),Z(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],u=o.values||[];for(let c=0;c<a.length&&c<u.length;++c){const l=wn(a[c],u[c]);if(l)return l}return B(a.length,u.length)}(n.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===Jr.mapValue&&o===Jr.mapValue)return 0;if(s===Jr.mapValue)return 1;if(o===Jr.mapValue)return-1;const a=s.fields||{},u=Object.keys(a),c=o.fields||{},l=Object.keys(c);u.sort(),l.sort();for(let h=0;h<u.length&&h<l.length;++h){const d=B(u[h],l[h]);if(d!==0)return d;const f=wn(a[u[h]],c[l[h]]);if(f!==0)return f}return B(u.length,l.length)}(n.mapValue,e.mapValue);default:throw P()}}function Su(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return B(n,e);const t=Et(n),r=Et(e),i=B(t.seconds,r.seconds);return i!==0?i:B(t.nanos,r.nanos)}function En(n){return fo(n)}function fo(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Et(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return qt(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return A.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const s of t.values||[])i?i=!1:r+=",",r+=fo(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${fo(t.fields[o])}`;return i+"}"}(n.mapValue):P()}function Cu(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function mo(n){return!!n&&"integerValue"in n}function ca(n){return!!n&&"arrayValue"in n}function bu(n){return!!n&&"nullValue"in n}function ku(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ni(n){return!!n&&"mapValue"in n}function Yn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return bn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Yn(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Yn(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Hg(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e){this.value=e}static empty(){return new Ne({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!ni(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Yn(t)}setAll(e){let t=he.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const u=this.getFieldsMap(t);this.applyChanges(u,r,i),r={},i=[],t=a.popLast()}o?r[a.lastSegment()]=Yn(o):i.push(a.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());ni(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ye(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];ni(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){bn(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Ne(Yn(this.value))}}function Th(n){const e=[];return bn(n.fields,(t,r)=>{const i=new he([t]);if(ni(r)){const s=Th(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Me(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e,t,r,i,s,o,a){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new ye(e,0,b.min(),b.min(),b.min(),Ne.empty(),0)}static newFoundDocument(e,t,r,i){return new ye(e,1,t,b.min(),r,i,0)}static newNoDocument(e,t){return new ye(e,2,t,b.min(),b.min(),Ne.empty(),0)}static newUnknownDocument(e,t){return new ye(e,3,t,b.min(),b.min(),Ne.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(b.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ne.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ne.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=b.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ye&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ye(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(e,t){this.position=e,this.inclusive=t}}function Du(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],o=n.position[i];if(s.field.isKeyField()?r=A.comparator(A.fromName(o.referenceValue),t.key):r=wn(o,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ou(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Ye(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(e,t="asc"){this.field=e,this.dir=t}}function zg(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih{}class ee extends Ih{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Kg(e,t,r):t==="array-contains"?new Xg(e,r):t==="in"?new Jg(e,r):t==="not-in"?new Zg(e,r):t==="array-contains-any"?new e_(e,r):new ee(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Qg(e,r):new Yg(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(wn(t,this.value)):t!==null&&jt(this.value)===jt(t)&&this.matchesComparison(wn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return P()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ue extends Ih{constructor(e,t){super(),this.filters=e,this.op=t,this.ue=null}static create(e,t){return new Ue(e,t)}matches(e){return Ah(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function Ah(n){return n.op==="and"}function Rh(n){return Gg(n)&&Ah(n)}function Gg(n){for(const e of n.filters)if(e instanceof Ue)return!1;return!0}function po(n){if(n instanceof ee)return n.field.canonicalString()+n.op.toString()+En(n.value);if(Rh(n))return n.filters.map(e=>po(e)).join(",");{const e=n.filters.map(t=>po(t)).join(",");return`${n.op}(${e})`}}function Ph(n,e){return n instanceof ee?function(r,i){return i instanceof ee&&r.op===i.op&&r.field.isEqual(i.field)&&Ye(r.value,i.value)}(n,e):n instanceof Ue?function(r,i){return i instanceof Ue&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&Ph(o,i.filters[a]),!0):!1}(n,e):void P()}function Sh(n){return n instanceof ee?function(t){return`${t.field.canonicalString()} ${t.op} ${En(t.value)}`}(n):n instanceof Ue?function(t){return t.op.toString()+" {"+t.getFilters().map(Sh).join(" ,")+"}"}(n):"Filter"}class Kg extends ee{constructor(e,t,r){super(e,t,r),this.key=A.fromName(r.referenceValue)}matches(e){const t=A.comparator(e.key,this.key);return this.matchesComparison(t)}}class Qg extends ee{constructor(e,t){super(e,"in",t),this.keys=Ch("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Yg extends ee{constructor(e,t){super(e,"not-in",t),this.keys=Ch("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Ch(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>A.fromName(r.referenceValue))}class Xg extends ee{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ca(t)&&mr(t.arrayValue,this.value)}}class Jg extends ee{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&mr(this.value.arrayValue,t)}}class Zg extends ee{constructor(e,t){super(e,"not-in",t)}matches(e){if(mr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!mr(this.value.arrayValue,t)}}class e_ extends ee{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ca(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>mr(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_{constructor(e,t=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ce=null}}function Nu(n,e=null,t=[],r=[],i=null,s=null,o=null){return new t_(n,e,t,r,i,s,o)}function la(n){const e=D(n);if(e.ce===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>po(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),is(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>En(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>En(r)).join(",")),e.ce=t}return e.ce}function ha(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!zg(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Ph(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Ou(n.startAt,e.startAt)&&Ou(n.endAt,e.endAt)}function go(n){return A.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e,t=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function n_(n,e,t,r,i,s,o,a){return new kn(n,e,t,r,i,s,o,a)}function ss(n){return new kn(n)}function Vu(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function bh(n){return n.collectionGroup!==null}function Xn(n){const e=D(n);if(e.le===null){e.le=[];const t=new Set;for(const s of e.explicitOrderBy)e.le.push(s),t.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new me(he.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.le.push(new pr(s,r))}),t.has(he.keyField().canonicalString())||e.le.push(new pr(he.keyField(),r))}return e.le}function He(n){const e=D(n);return e.he||(e.he=r_(e,Xn(n))),e.he}function r_(n,e){if(n.limitType==="F")return Nu(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new pr(i.field,s)});const t=n.endAt?new Ri(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Ri(n.startAt.position,n.startAt.inclusive):null;return Nu(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function _o(n,e){const t=n.filters.concat([e]);return new kn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function yo(n,e,t){return new kn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function os(n,e){return ha(He(n),He(e))&&n.limitType===e.limitType}function kh(n){return`${la(He(n))}|lt:${n.limitType}`}function nn(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>Sh(i)).join(", ")}]`),is(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>En(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>En(i)).join(",")),`Target(${r})`}(He(n))}; limitType=${n.limitType})`}function as(n,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):A.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,e)&&function(r,i){for(const s of Xn(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(o,a,u){const c=Du(o,a,u);return o.inclusive?c<=0:c<0}(r.startAt,Xn(r),i)||r.endAt&&!function(o,a,u){const c=Du(o,a,u);return o.inclusive?c>=0:c>0}(r.endAt,Xn(r),i))}(n,e)}function i_(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Dh(n){return(e,t)=>{let r=!1;for(const i of Xn(n)){const s=s_(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function s_(n,e,t){const r=n.field.isKeyField()?A.comparator(e.key,t.key):function(s,o,a){const u=o.data.field(s),c=a.data.field(s);return u!==null&&c!==null?wn(u,c):P()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return P()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){bn(this.inner,(t,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return wh(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o_=new Q(A.comparator);function st(){return o_}const Oh=new Q(A.comparator);function Hn(...n){let e=Oh;for(const t of n)e=e.insert(t.key,t);return e}function Nh(n){let e=Oh;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Nt(){return Jn()}function Vh(){return Jn()}function Jn(){return new Dn(n=>n.toString(),(n,e)=>n.isEqual(e))}const a_=new Q(A.comparator),u_=new me(A.comparator);function V(...n){let e=u_;for(const t of n)e=e.add(t);return e}const c_=new me(B);function l_(){return c_}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mh(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ai(e)?"-0":e}}function Lh(n){return{integerValue:""+n}}function h_(n,e){return qg(e)?Lh(e):Mh(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(){this._=void 0}}function d_(n,e,t){return n instanceof gr?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&aa(s)&&(s=ua(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(t,e):n instanceof _r?Uh(n,e):n instanceof yr?Fh(n,e):function(i,s){const o=xh(i,s),a=Mu(o)+Mu(i.Ie);return mo(o)&&mo(i.Ie)?Lh(a):Mh(i.serializer,a)}(n,e)}function f_(n,e,t){return n instanceof _r?Uh(n,e):n instanceof yr?Fh(n,e):t}function xh(n,e){return n instanceof Pi?function(r){return mo(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class gr extends us{}class _r extends us{constructor(e){super(),this.elements=e}}function Uh(n,e){const t=Bh(e);for(const r of n.elements)t.some(i=>Ye(i,r))||t.push(r);return{arrayValue:{values:t}}}class yr extends us{constructor(e){super(),this.elements=e}}function Fh(n,e){let t=Bh(e);for(const r of n.elements)t=t.filter(i=>!Ye(i,r));return{arrayValue:{values:t}}}class Pi extends us{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function Mu(n){return Z(n.integerValue||n.doubleValue)}function Bh(n){return ca(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m_{constructor(e,t){this.field=e,this.transform=t}}function p_(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof _r&&i instanceof _r||r instanceof yr&&i instanceof yr?vn(r.elements,i.elements,Ye):r instanceof Pi&&i instanceof Pi?Ye(r.Ie,i.Ie):r instanceof gr&&i instanceof gr}(n.transform,e.transform)}class g_{constructor(e,t){this.version=e,this.transformResults=t}}class ze{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ze}static exists(e){return new ze(void 0,e)}static updateTime(e){return new ze(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ri(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class cs{}function $h(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new jh(n.key,ze.none()):new xr(n.key,n.data,ze.none());{const t=n.data,r=Ne.empty();let i=new me(he.comparator);for(let s of e.fields)if(!i.has(s)){let o=t.field(s);o===null&&s.length>1&&(s=s.popLast(),o=t.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Qt(n.key,r,new Me(i.toArray()),ze.none())}}function __(n,e,t){n instanceof xr?function(i,s,o){const a=i.value.clone(),u=xu(i.fieldTransforms,s,o.transformResults);a.setAll(u),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(n,e,t):n instanceof Qt?function(i,s,o){if(!ri(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=xu(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(qh(i)),u.setAll(a),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(n,e,t):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function Zn(n,e,t,r){return n instanceof xr?function(s,o,a,u){if(!ri(s.precondition,o))return a;const c=s.value.clone(),l=Uu(s.fieldTransforms,u,o);return c.setAll(l),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(n,e,t,r):n instanceof Qt?function(s,o,a,u){if(!ri(s.precondition,o))return a;const c=Uu(s.fieldTransforms,u,o),l=o.data;return l.setAll(qh(s)),l.setAll(c),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(n,e,t,r):function(s,o,a){return ri(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(n,e,t)}function y_(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),s=xh(r.transform,i||null);s!=null&&(t===null&&(t=Ne.empty()),t.set(r.field,s))}return t||null}function Lu(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&vn(r,i,(s,o)=>p_(s,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class xr extends cs{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Qt extends cs{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function qh(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function xu(n,e,t){const r=new Map;K(n.length===t.length);for(let i=0;i<t.length;i++){const s=n[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,f_(o,a,t[i]))}return r}function Uu(n,e,t){const r=new Map;for(const i of n){const s=i.transform,o=t.data.field(i.field);r.set(i.field,d_(s,o,e))}return r}class jh extends cs{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class v_ extends cs{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w_{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&__(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Zn(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Zn(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Vh();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=t.has(i.key)?null:a;const u=$h(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(b.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),V())}isEqual(e){return this.batchId===e.batchId&&vn(this.mutations,e.mutations,(t,r)=>Lu(t,r))&&vn(this.baseMutations,e.baseMutations,(t,r)=>Lu(t,r))}}class da{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){K(e.mutations.length===r.length);let i=function(){return a_}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new da(e,t,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E_{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T_{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var J,x;function I_(n){switch(n){default:return P();case m.CANCELLED:case m.UNKNOWN:case m.DEADLINE_EXCEEDED:case m.RESOURCE_EXHAUSTED:case m.INTERNAL:case m.UNAVAILABLE:case m.UNAUTHENTICATED:return!1;case m.INVALID_ARGUMENT:case m.NOT_FOUND:case m.ALREADY_EXISTS:case m.PERMISSION_DENIED:case m.FAILED_PRECONDITION:case m.ABORTED:case m.OUT_OF_RANGE:case m.UNIMPLEMENTED:case m.DATA_LOSS:return!0}}function Wh(n){if(n===void 0)return it("GRPC error has no .code"),m.UNKNOWN;switch(n){case J.OK:return m.OK;case J.CANCELLED:return m.CANCELLED;case J.UNKNOWN:return m.UNKNOWN;case J.DEADLINE_EXCEEDED:return m.DEADLINE_EXCEEDED;case J.RESOURCE_EXHAUSTED:return m.RESOURCE_EXHAUSTED;case J.INTERNAL:return m.INTERNAL;case J.UNAVAILABLE:return m.UNAVAILABLE;case J.UNAUTHENTICATED:return m.UNAUTHENTICATED;case J.INVALID_ARGUMENT:return m.INVALID_ARGUMENT;case J.NOT_FOUND:return m.NOT_FOUND;case J.ALREADY_EXISTS:return m.ALREADY_EXISTS;case J.PERMISSION_DENIED:return m.PERMISSION_DENIED;case J.FAILED_PRECONDITION:return m.FAILED_PRECONDITION;case J.ABORTED:return m.ABORTED;case J.OUT_OF_RANGE:return m.OUT_OF_RANGE;case J.UNIMPLEMENTED:return m.UNIMPLEMENTED;case J.DATA_LOSS:return m.DATA_LOSS;default:return P()}}(x=J||(J={}))[x.OK=0]="OK",x[x.CANCELLED=1]="CANCELLED",x[x.UNKNOWN=2]="UNKNOWN",x[x.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",x[x.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",x[x.NOT_FOUND=5]="NOT_FOUND",x[x.ALREADY_EXISTS=6]="ALREADY_EXISTS",x[x.PERMISSION_DENIED=7]="PERMISSION_DENIED",x[x.UNAUTHENTICATED=16]="UNAUTHENTICATED",x[x.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",x[x.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",x[x.ABORTED=10]="ABORTED",x[x.OUT_OF_RANGE=11]="OUT_OF_RANGE",x[x.UNIMPLEMENTED=12]="UNIMPLEMENTED",x[x.INTERNAL=13]="INTERNAL",x[x.UNAVAILABLE=14]="UNAVAILABLE",x[x.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A_(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R_=new ln([4294967295,4294967295],0);function Fu(n){const e=A_().encode(n),t=new Sg;return t.update(e),new Uint8Array(t.digest())}function Bu(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new ln([t,r],0),new ln([i,s],0)]}class fa{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new zn(`Invalid padding: ${t}`);if(r<0)throw new zn(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new zn(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new zn(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ee=ln.fromNumber(this.Te)}de(e,t,r){let i=e.add(t.multiply(ln.fromNumber(r)));return i.compare(R_)===1&&(i=new ln([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const t=Fu(e),[r,i]=Bu(t);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);if(!this.Ae(o))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new fa(s,i,t);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const t=Fu(e),[r,i]=Bu(t);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);this.Re(o)}}Re(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class zn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,Ur.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new ls(b.min(),i,new Q(B),st(),V())}}class Ur{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Ur(r,t,V(),V(),V())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e,t,r,i){this.Ve=e,this.removedTargetIds=t,this.key=r,this.me=i}}class Hh{constructor(e,t){this.targetId=e,this.fe=t}}class zh{constructor(e,t,r=Te.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class $u{constructor(){this.ge=0,this.pe=ju(),this.ye=Te.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=V(),t=V(),r=V();return this.pe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:P()}}),new Ur(this.ye,this.we,e,t,r)}Fe(){this.Se=!1,this.pe=ju()}Me(e,t){this.Se=!0,this.pe=this.pe.insert(e,t)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1}Be(){this.Se=!0,this.we=!0}}class P_{constructor(e){this.Le=e,this.ke=new Map,this.qe=st(),this.Qe=qu(),this.Ke=new Q(B)}$e(e){for(const t of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(t,e.me):this.We(t,e.key,e.me);for(const t of e.removedTargetIds)this.We(t,e.key,e.me)}Ge(e){this.forEachTarget(e,t=>{const r=this.ze(t);switch(e.state){case 0:this.je(t)&&r.Ce(e.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(e.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(t);break;case 3:this.je(t)&&(r.Be(),r.Ce(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),r.Ce(e.resumeToken));break;default:P()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ke.forEach((r,i)=>{this.je(i)&&t(i)})}Je(e){const t=e.targetId,r=e.fe.count,i=this.Ye(t);if(i){const s=i.target;if(go(s))if(r===0){const o=new A(s.path);this.We(t,o,ye.newNoDocument(o,b.min()))}else K(r===1);else{const o=this.Ze(t);if(o!==r){const a=this.Xe(e),u=a?this.et(a,e,o):1;if(u!==0){this.He(t);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,c)}}}}}Xe(e){const t=e.fe.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=t;let o,a;try{o=qt(r).toUint8Array()}catch(u){if(u instanceof Eh)return yn("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new fa(o,i,s)}catch(u){return yn(u instanceof zn?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Te===0?null:a}et(e,t,r){return t.fe.count===r-this.rt(e,t.targetId)?0:2}rt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let i=0;return r.forEach(s=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.We(t,s,null),i++)}),i}it(e){const t=new Map;this.ke.forEach((s,o)=>{const a=this.Ye(o);if(a){if(s.current&&go(a.target)){const u=new A(a.target.path);this.qe.get(u)!==null||this.st(o,u)||this.We(o,u,ye.newNoDocument(u,e))}s.De&&(t.set(o,s.ve()),s.Fe())}});let r=V();this.Qe.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.Ye(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.qe.forEach((s,o)=>o.setReadTime(e));const i=new ls(e,t,this.Ke,this.qe,r);return this.qe=st(),this.Qe=qu(),this.Ke=new Q(B),i}Ue(e,t){if(!this.je(e))return;const r=this.st(e,t.key)?2:0;this.ze(e).Me(t.key,r),this.qe=this.qe.insert(t.key,t),this.Qe=this.Qe.insert(t.key,this.ot(t.key).add(e))}We(e,t,r){if(!this.je(e))return;const i=this.ze(e);this.st(e,t)?i.Me(t,1):i.xe(t),this.Qe=this.Qe.insert(t,this.ot(t).delete(e)),r&&(this.qe=this.qe.insert(t,r))}removeTarget(e){this.ke.delete(e)}Ze(e){const t=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let t=this.ke.get(e);return t||(t=new $u,this.ke.set(e,t)),t}ot(e){let t=this.Qe.get(e);return t||(t=new me(B),this.Qe=this.Qe.insert(e,t)),t}je(e){const t=this.Ye(e)!==null;return t||E("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){const t=this.ke.get(e);return t&&t.be?null:this.Le._t(e)}He(e){this.ke.set(e,new $u),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}st(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function qu(){return new Q(A.comparator)}function ju(){return new Q(A.comparator)}const S_={asc:"ASCENDING",desc:"DESCENDING"},C_={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},b_={and:"AND",or:"OR"};class k_{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function vo(n,e){return n.useProto3Json||is(e)?e:{value:e}}function Si(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Gh(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function D_(n,e){return Si(n,e.toTimestamp())}function Ge(n){return K(!!n),b.fromTimestamp(function(t){const r=Et(t);return new ne(r.seconds,r.nanos)}(n))}function ma(n,e){return function(r){return new G(["projects",r.projectId,"databases",r.database])}(n).child("documents").child(e).canonicalString()}function Kh(n){const e=G.fromString(n);return K(Jh(e)),e}function wo(n,e){return ma(n.databaseId,e.path)}function Fs(n,e){const t=Kh(e);if(t.get(1)!==n.databaseId.projectId)throw new w(m.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new w(m.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new A(Qh(t))}function Eo(n,e){return ma(n.databaseId,e)}function O_(n){const e=Kh(n);return e.length===4?G.emptyPath():Qh(e)}function To(n){return new G(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Qh(n){return K(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Wu(n,e,t){return{name:wo(n,e),fields:t.value.mapValue.fields}}function N_(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:P()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,l){return c.useProto3Json?(K(l===void 0||typeof l=="string"),Te.fromBase64String(l||"")):(K(l===void 0||l instanceof Uint8Array),Te.fromUint8Array(l||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?m.UNKNOWN:Wh(c.code);return new w(l,c.message||"")}(o);t=new zh(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Fs(n,r.document.name),s=Ge(r.document.updateTime),o=r.document.createTime?Ge(r.document.createTime):b.min(),a=new Ne({mapValue:{fields:r.document.fields}}),u=ye.newFoundDocument(i,s,o,a),c=r.targetIds||[],l=r.removedTargetIds||[];t=new ii(c,l,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Fs(n,r.document),s=r.readTime?Ge(r.readTime):b.min(),o=ye.newNoDocument(i,s),a=r.removedTargetIds||[];t=new ii([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Fs(n,r.document),s=r.removedTargetIds||[];t=new ii([],s,i,null)}else{if(!("filter"in e))return P();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new T_(i,s),a=r.targetId;t=new Hh(a,o)}}return t}function V_(n,e){let t;if(e instanceof xr)t={update:Wu(n,e.key,e.value)};else if(e instanceof jh)t={delete:wo(n,e.key)};else if(e instanceof Qt)t={update:Wu(n,e.key,e.data),updateMask:j_(e.fieldMask)};else{if(!(e instanceof v_))return P();t={verify:wo(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof gr)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof _r)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof yr)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Pi)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw P()}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:D_(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:P()}(n,e.precondition)),t}function M_(n,e){return n&&n.length>0?(K(e!==void 0),n.map(t=>function(i,s){let o=i.updateTime?Ge(i.updateTime):Ge(s);return o.isEqual(b.min())&&(o=Ge(s)),new g_(o,i.transformResults||[])}(t,e))):[]}function L_(n,e){return{documents:[Eo(n,e.path)]}}function x_(n,e){const t={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(t.parent=Eo(n,r),t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(t.parent=Eo(n,r.popLast()),t.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(u){if(u.length!==0)return Xh(Ue.create(u,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const s=function(u){if(u.length!==0)return u.map(c=>function(h){return{field:rn(h.field),direction:B_(h.dir)}}(c))}(e.orderBy);s&&(t.structuredQuery.orderBy=s);const o=vo(n,e.limit);return o!==null&&(t.structuredQuery.limit=o),e.startAt&&(t.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),t}function U_(n){let e=O_(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){K(r===1);const l=t.from[0];l.allDescendants?i=l.collectionId:e=e.child(l.collectionId)}let s=[];t.where&&(s=function(h){const d=Yh(h);return d instanceof Ue&&Rh(d)?d.getFilters():[d]}(t.where));let o=[];t.orderBy&&(o=function(h){return h.map(d=>function(_){return new pr(sn(_.field),function(p){switch(p){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(_.direction))}(d))}(t.orderBy));let a=null;t.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,is(d)?null:d}(t.limit));let u=null;t.startAt&&(u=function(h){const d=!!h.before,f=h.values||[];return new Ri(f,d)}(t.startAt));let c=null;return t.endAt&&(c=function(h){const d=!h.before,f=h.values||[];return new Ri(f,d)}(t.endAt)),n_(e,i,o,s,a,"F",u,c)}function F_(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return P()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Yh(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=sn(t.unaryFilter.field);return ee.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=sn(t.unaryFilter.field);return ee.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=sn(t.unaryFilter.field);return ee.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=sn(t.unaryFilter.field);return ee.create(o,"!=",{nullValue:"NULL_VALUE"});default:return P()}}(n):n.fieldFilter!==void 0?function(t){return ee.create(sn(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return P()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Ue.create(t.compositeFilter.filters.map(r=>Yh(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return P()}}(t.compositeFilter.op))}(n):P()}function B_(n){return S_[n]}function $_(n){return C_[n]}function q_(n){return b_[n]}function rn(n){return{fieldPath:n.canonicalString()}}function sn(n){return he.fromServerFormat(n.fieldPath)}function Xh(n){return n instanceof ee?function(t){if(t.op==="=="){if(ku(t.value))return{unaryFilter:{field:rn(t.field),op:"IS_NAN"}};if(bu(t.value))return{unaryFilter:{field:rn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(ku(t.value))return{unaryFilter:{field:rn(t.field),op:"IS_NOT_NAN"}};if(bu(t.value))return{unaryFilter:{field:rn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:rn(t.field),op:$_(t.op),value:t.value}}}(n):n instanceof Ue?function(t){const r=t.getFilters().map(i=>Xh(i));return r.length===1?r[0]:{compositeFilter:{op:q_(t.op),filters:r}}}(n):P()}function j_(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Jh(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e,t,r,i,s=b.min(),o=b.min(),a=Te.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(e){return new pt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new pt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new pt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new pt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W_{constructor(e){this.ut=e}}function H_(n){const e=U_({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?yo(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z_{constructor(){this.on=new G_}addToCollectionParentIndex(e,t){return this.on.add(t),g.resolve()}getCollectionParents(e,t){return g.resolve(this.on.getEntries(t))}addFieldIndex(e,t){return g.resolve()}deleteFieldIndex(e,t){return g.resolve()}deleteAllFieldIndexes(e){return g.resolve()}createTargetIndexes(e,t){return g.resolve()}getDocumentsMatchingTarget(e,t){return g.resolve(null)}getIndexType(e,t){return g.resolve(0)}getFieldIndexes(e,t){return g.resolve([])}getNextCollectionGroupToUpdate(e){return g.resolve(null)}getMinOffset(e,t){return g.resolve(wt.min())}getMinOffsetFromCollectionGroup(e,t){return g.resolve(wt.min())}updateCollectionGroup(e,t,r){return g.resolve()}updateIndexEntries(e,t){return g.resolve()}}class G_{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new me(G.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new me(G.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static On(){return new Tn(0)}static Nn(){return new Tn(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K_{constructor(){this.changes=new Dn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ye.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?g.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q_{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y_{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&Zn(r.mutation,i,Me.empty(),ne.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,V()).next(()=>r))}getLocalViewOfDocuments(e,t,r=V()){const i=Nt();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let o=Hn();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=Nt();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,V()))}populateOverlays(e,t,r){const i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{t.set(o,a)})})}computeViews(e,t,r,i){let s=st();const o=Jn(),a=function(){return Jn()}();return t.forEach((u,c)=>{const l=r.get(c.key);i.has(c.key)&&(l===void 0||l.mutation instanceof Qt)?s=s.insert(c.key,c):l!==void 0?(o.set(c.key,l.mutation.getFieldMask()),Zn(l.mutation,c,l.mutation.getFieldMask(),ne.now())):o.set(c.key,Me.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,l)=>o.set(c,l)),t.forEach((c,l)=>{var h;return a.set(c,new Q_(l,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,t){const r=Jn();let i=new Q((o,a)=>o-a),s=V();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=t.get(u);if(c===null)return;let l=r.get(u)||Me.empty();l=a.applyToLocalView(c,l),r.set(u,l);const h=(i.get(a.batchId)||V()).add(u);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,l=u.value,h=Vh();l.forEach(d=>{if(!s.has(d)){const f=$h(t.get(d),r.get(d));f!==null&&h.set(d,f),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return g.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(o){return A.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):bh(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):g.resolve(Nt());let a=-1,u=s;return o.next(c=>g.forEach(c,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(l)?g.resolve():this.remoteDocumentCache.getEntry(e,l).next(d=>{u=u.insert(l,d)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,V())).next(l=>({batchId:a,changes:Nh(l)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new A(t)).next(r=>{let i=Hn();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const s=t.collectionGroup;let o=Hn();return this.indexManager.getCollectionParents(e,s).next(a=>g.forEach(a,u=>{const c=function(h,d){return new kn(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(t,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(l=>{l.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,i))).next(o=>{s.forEach((u,c)=>{const l=c.getKey();o.get(l)===null&&(o=o.insert(l,ye.newInvalidDocument(l)))});let a=Hn();return o.forEach((u,c)=>{const l=s.get(u);l!==void 0&&Zn(l.mutation,c,Me.empty(),ne.now()),as(t,c)&&(a=a.insert(u,c))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X_{constructor(e){this.serializer=e,this.ur=new Map,this.cr=new Map}getBundleMetadata(e,t){return g.resolve(this.ur.get(t))}saveBundleMetadata(e,t){return this.ur.set(t.id,function(i){return{id:i.id,version:i.version,createTime:Ge(i.createTime)}}(t)),g.resolve()}getNamedQuery(e,t){return g.resolve(this.cr.get(t))}saveNamedQuery(e,t){return this.cr.set(t.name,function(i){return{name:i.name,query:H_(i.bundledQuery),readTime:Ge(i.readTime)}}(t)),g.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J_{constructor(){this.overlays=new Q(A.comparator),this.lr=new Map}getOverlay(e,t){return g.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Nt();return g.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.lt(e,t,s)}),g.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.lr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.lr.delete(r)),g.resolve()}getOverlaysForCollection(e,t,r){const i=Nt(),s=t.length+1,o=new A(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!t.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return g.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new Q((c,l)=>c-l);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===t&&c.largestBatchId>r){let l=s.get(c.largestBatchId);l===null&&(l=Nt(),s=s.insert(c.largestBatchId,l)),l.set(c.getKey(),c)}}const a=Nt(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,l)=>a.set(c,l)),!(a.size()>=i)););return g.resolve(a)}lt(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.lr.get(i.largestBatchId).delete(r.key);this.lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new E_(t,r));let s=this.lr.get(t);s===void 0&&(s=V(),this.lr.set(t,s)),this.lr.set(t,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(){this.hr=new me(ie.Pr),this.Ir=new me(ie.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(e,t){const r=new ie(e,t);this.hr=this.hr.add(r),this.Ir=this.Ir.add(r)}Er(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.dr(new ie(e,t))}Ar(e,t){e.forEach(r=>this.removeReference(r,t))}Rr(e){const t=new A(new G([])),r=new ie(t,e),i=new ie(t,e+1),s=[];return this.Ir.forEachInRange([r,i],o=>{this.dr(o),s.push(o.key)}),s}Vr(){this.hr.forEach(e=>this.dr(e))}dr(e){this.hr=this.hr.delete(e),this.Ir=this.Ir.delete(e)}mr(e){const t=new A(new G([])),r=new ie(t,e),i=new ie(t,e+1);let s=V();return this.Ir.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const t=new ie(e,0),r=this.hr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class ie{constructor(e,t){this.key=e,this.gr=t}static Pr(e,t){return A.comparator(e.key,t.key)||B(e.gr,t.gr)}static Tr(e,t){return B(e.gr,t.gr)||A.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z_{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.pr=1,this.yr=new me(ie.Pr)}checkEmpty(e){return g.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new w_(s,t,r,i);this.mutationQueue.push(o);for(const a of i)this.yr=this.yr.add(new ie(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return g.resolve(o)}lookupMutationBatch(e,t){return g.resolve(this.wr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.Sr(r),s=i<0?0:i;return g.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return g.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(e){return g.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new ie(t,0),i=new ie(t,Number.POSITIVE_INFINITY),s=[];return this.yr.forEachInRange([r,i],o=>{const a=this.wr(o.gr);s.push(a)}),g.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new me(B);return t.forEach(i=>{const s=new ie(i,0),o=new ie(i,Number.POSITIVE_INFINITY);this.yr.forEachInRange([s,o],a=>{r=r.add(a.gr)})}),g.resolve(this.br(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;A.isDocumentKey(s)||(s=s.child(""));const o=new ie(new A(s),0);let a=new me(B);return this.yr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(u.gr)),!0)},o),g.resolve(this.br(a))}br(e){const t=[];return e.forEach(r=>{const i=this.wr(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){K(this.Dr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.yr;return g.forEach(t.mutations,i=>{const s=new ie(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.yr=r})}Fn(e){}containsKey(e,t){const r=new ie(t,0),i=this.yr.firstAfterOrEqual(r);return g.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,g.resolve()}Dr(e,t){return this.Sr(e)}Sr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}wr(e){const t=this.Sr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ey{constructor(e){this.Cr=e,this.docs=function(){return new Q(A.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,o=this.Cr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return g.resolve(r?r.document.mutableCopy():ye.newInvalidDocument(t))}getEntries(e,t){let r=st();return t.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():ye.newInvalidDocument(i))}),g.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=st();const o=t.path,a=new A(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:l}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||Fg(Ug(l),r)<=0||(i.has(l.key)||as(t,l))&&(s=s.insert(l.key,l.mutableCopy()))}return g.resolve(s)}getAllFromCollectionGroup(e,t,r,i){P()}vr(e,t){return g.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new ty(this)}getSize(e){return g.resolve(this.size)}}class ty extends K_{constructor(e){super(),this._r=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this._r.addEntry(e,i)):this._r.removeEntry(r)}),g.waitFor(t)}getFromCache(e,t){return this._r.getEntry(e,t)}getAllFromCache(e,t){return this._r.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ny{constructor(e){this.persistence=e,this.Fr=new Dn(t=>la(t),ha),this.lastRemoteSnapshotVersion=b.min(),this.highestTargetId=0,this.Mr=0,this.Or=new pa,this.targetCount=0,this.Nr=Tn.On()}forEachTarget(e,t){return this.Fr.forEach((r,i)=>t(i)),g.resolve()}getLastRemoteSnapshotVersion(e){return g.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return g.resolve(this.Mr)}allocateTargetId(e){return this.highestTargetId=this.Nr.next(),g.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Mr&&(this.Mr=t),g.resolve()}kn(e){this.Fr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Nr=new Tn(t),this.highestTargetId=t),e.sequenceNumber>this.Mr&&(this.Mr=e.sequenceNumber)}addTargetData(e,t){return this.kn(t),this.targetCount+=1,g.resolve()}updateTargetData(e,t){return this.kn(t),g.resolve()}removeTargetData(e,t){return this.Fr.delete(t.target),this.Or.Rr(t.targetId),this.targetCount-=1,g.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=t&&r.get(a.targetId)===null&&(this.Fr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),g.waitFor(s).next(()=>i)}getTargetCount(e){return g.resolve(this.targetCount)}getTargetData(e,t){const r=this.Fr.get(t)||null;return g.resolve(r)}addMatchingKeys(e,t,r){return this.Or.Er(t,r),g.resolve()}removeMatchingKeys(e,t,r){this.Or.Ar(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),g.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.Or.Rr(t),g.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Or.mr(t);return g.resolve(r)}containsKey(e,t){return g.resolve(this.Or.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ry{constructor(e,t){this.Br={},this.overlays={},this.Lr=new oa(0),this.kr=!1,this.kr=!0,this.referenceDelegate=e(this),this.qr=new ny(this),this.indexManager=new z_,this.remoteDocumentCache=function(i){return new ey(i)}(r=>this.referenceDelegate.Qr(r)),this.serializer=new W_(t),this.Kr=new X_(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new J_,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Br[e.toKey()];return r||(r=new Z_(t,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(e,t,r){E("MemoryPersistence","Starting transaction:",e);const i=new iy(this.Lr.next());return this.referenceDelegate.$r(),r(i).next(s=>this.referenceDelegate.Ur(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Wr(e,t){return g.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,t)))}}class iy extends $g{constructor(e){super(),this.currentSequenceNumber=e}}class ga{constructor(e){this.persistence=e,this.Gr=new pa,this.zr=null}static jr(e){return new ga(e)}get Hr(){if(this.zr)return this.zr;throw P()}addReference(e,t,r){return this.Gr.addReference(r,t),this.Hr.delete(r.toString()),g.resolve()}removeReference(e,t,r){return this.Gr.removeReference(r,t),this.Hr.add(r.toString()),g.resolve()}markPotentiallyOrphaned(e,t){return this.Hr.add(t.toString()),g.resolve()}removeTarget(e,t){this.Gr.Rr(t.targetId).forEach(i=>this.Hr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.Hr.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}$r(){this.zr=new Set}Ur(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return g.forEach(this.Hr,r=>{const i=A.fromPath(r);return this.Jr(e,i).next(s=>{s||t.removeEntry(i,b.min())})}).next(()=>(this.zr=null,t.apply(e)))}updateLimboDocument(e,t){return this.Jr(e,t).next(r=>{r?this.Hr.delete(t.toString()):this.Hr.add(t.toString())})}Qr(e){return 0}Jr(e,t){return g.or([()=>g.resolve(this.Gr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Wr(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.ki=r,this.qi=i}static Qi(e,t){let r=V(),i=V();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new _a(e,t.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sy{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oy{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(e,t){this.Gi=e,this.indexManager=t,this.Ki=!0}getDocumentsMatchingQuery(e,t,r,i){const s={result:null};return this.zi(e,t).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ji(e,t,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new sy;return this.Hi(e,t,o).next(a=>{if(s.result=a,this.$i)return this.Ji(e,t,o,a.size)})}).next(()=>s.result)}Ji(e,t,r,i){return r.documentReadCount<this.Ui?(Un()<=M.DEBUG&&E("QueryEngine","SDK will not create cache indexes for query:",nn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),g.resolve()):(Un()<=M.DEBUG&&E("QueryEngine","Query:",nn(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Wi*i?(Un()<=M.DEBUG&&E("QueryEngine","The SDK decides to create cache indexes for query:",nn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,He(t))):g.resolve())}zi(e,t){if(Vu(t))return g.resolve(null);let r=He(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=yo(t,null,"F"),r=He(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=V(...s);return this.Gi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.Yi(t,a);return this.Zi(t,c,o,u.readTime)?this.zi(e,yo(t,null,"F")):this.Xi(e,c,t,u)}))})))}ji(e,t,r,i){return Vu(t)||i.isEqual(b.min())?g.resolve(null):this.Gi.getDocuments(e,r).next(s=>{const o=this.Yi(t,s);return this.Zi(t,o,r,i)?g.resolve(null):(Un()<=M.DEBUG&&E("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),nn(t)),this.Xi(e,o,t,xg(i,-1)).next(a=>a))})}Yi(e,t){let r=new me(Dh(e));return t.forEach((i,s)=>{as(e,s)&&(r=r.add(s))}),r}Zi(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Hi(e,t,r){return Un()<=M.DEBUG&&E("QueryEngine","Using full collection scan to execute query:",nn(t)),this.Gi.getDocumentsMatchingQuery(e,t,wt.min(),r)}Xi(e,t,r,i){return this.Gi.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ay{constructor(e,t,r,i){this.persistence=e,this.es=t,this.serializer=i,this.ts=new Q(B),this.ns=new Dn(s=>la(s),ha),this.rs=new Map,this.ss=e.getRemoteDocumentCache(),this.qr=e.getTargetCache(),this.Kr=e.getBundleCache(),this.os(r)}os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Y_(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.ts))}}function uy(n,e,t,r){return new ay(n,e,t,r)}async function Zh(n,e){const t=D(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.os(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=V();for(const c of i){o.push(c.batchId);for(const l of c.mutations)u=u.add(l.key)}for(const c of s){a.push(c.batchId);for(const l of c.mutations)u=u.add(l.key)}return t.localDocuments.getDocuments(r,u).next(c=>({_s:c,removedBatchIds:o,addedBatchIds:a}))})})}function cy(n,e){const t=D(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=t.ss.newChangeBuffer({trackRemovals:!0});return function(a,u,c,l){const h=c.batch,d=h.keys();let f=g.resolve();return d.forEach(_=>{f=f.next(()=>l.getEntry(u,_)).next(y=>{const p=c.docVersions.get(_);K(p!==null),y.version.compareTo(p)<0&&(h.applyToRemoteDocument(y,c),y.isValidDocument()&&(y.setReadTime(c.commitVersion),l.addEntry(y)))})}),f.next(()=>a.mutationQueue.removeMutationBatch(u,h))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=V();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(u=u.add(a.batch.mutations[c].key));return u}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function ed(n){const e=D(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.qr.getLastRemoteSnapshotVersion(t))}function ly(n,e){const t=D(n),r=e.snapshotVersion;let i=t.ts;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=t.ss.newChangeBuffer({trackRemovals:!0});i=t.ts;const a=[];e.targetChanges.forEach((l,h)=>{const d=i.get(h);if(!d)return;a.push(t.qr.removeMatchingKeys(s,l.removedDocuments,h).next(()=>t.qr.addMatchingKeys(s,l.addedDocuments,h)));let f=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?f=f.withResumeToken(Te.EMPTY_BYTE_STRING,b.min()).withLastLimboFreeSnapshotVersion(b.min()):l.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(l.resumeToken,r)),i=i.insert(h,f),function(y,p,T){return y.resumeToken.approximateByteSize()===0||p.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:T.addedDocuments.size+T.modifiedDocuments.size+T.removedDocuments.size>0}(d,f,l)&&a.push(t.qr.updateTargetData(s,f))});let u=st(),c=V();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(s,l))}),a.push(hy(s,o,e.documentUpdates).next(l=>{u=l.us,c=l.cs})),!r.isEqual(b.min())){const l=t.qr.getLastRemoteSnapshotVersion(s).next(h=>t.qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(l)}return g.waitFor(a).next(()=>o.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(t.ts=i,s))}function hy(n,e,t){let r=V(),i=V();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let o=st();return t.forEach((a,u)=>{const c=s.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(b.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):E("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{us:o,cs:i}})}function dy(n,e){const t=D(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function fy(n,e){const t=D(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.qr.getTargetData(r,e).next(s=>s?(i=s,g.resolve(i)):t.qr.allocateTargetId(r).next(o=>(i=new pt(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.ts.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.ts=t.ts.insert(r.targetId,r),t.ns.set(e,r.targetId)),r})}async function Io(n,e,t){const r=D(n),i=r.ts.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Lr(o))throw o;E("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ts=r.ts.remove(e),r.ns.delete(i.target)}function Hu(n,e,t){const r=D(n);let i=b.min(),s=V();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,l){const h=D(u),d=h.ns.get(l);return d!==void 0?g.resolve(h.ts.get(d)):h.qr.getTargetData(c,l)}(r,o,He(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.qr.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.es.getDocumentsMatchingQuery(o,e,t?i:b.min(),t?s:V())).next(a=>(my(r,i_(e),a),{documents:a,ls:s})))}function my(n,e,t){let r=n.rs.get(e)||b.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.rs.set(e,r)}class zu{constructor(){this.activeTargetIds=l_()}ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}As(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Es(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class py{constructor(){this.eo=new zu,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e){return this.eo.ds(e),this.no[e]||"not-current"}updateQueryState(e,t,r){this.no[e]=t}removeLocalQueryTarget(e){this.eo.As(e)}isLocalQueryTarget(e){return this.eo.activeTargetIds.has(e)}clearQueryState(e){delete this.no[e]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(e){return this.eo.activeTargetIds.has(e)}start(){return this.eo=new zu,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gy{ro(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(e){this.ao.push(e)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){E("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ao)e(0)}_o(){E("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ao)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zr=null;function Bs(){return Zr===null?Zr=function(){return 268435456+Math.round(2147483648*Math.random())}():Zr++,"0x"+Zr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _y={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yy{constructor(e){this.co=e.co,this.lo=e.lo}ho(e){this.Po=e}Io(e){this.To=e}onMessage(e){this.Eo=e}close(){this.lo()}send(e){this.co(e)}Ao(){this.Po()}Ro(e){this.To(e)}Vo(e){this.Eo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ge="WebChannelConnection";class vy extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.mo=r+"://"+t.host,this.fo=`projects/${i}/databases/${s}`,this.po=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get yo(){return!1}wo(t,r,i,s,o){const a=Bs(),u=this.So(t,r);E("RestConnection",`Sending RPC '${t}' ${a}:`,u,i);const c={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(c,s,o),this.Do(t,u,c,i).then(l=>(E("RestConnection",`Received RPC '${t}' ${a}: `,l),l),l=>{throw yn("RestConnection",`RPC '${t}' ${a} failed with error: `,l,"url: ",u,"request:",i),l})}Co(t,r,i,s,o,a){return this.wo(t,r,i,s,o)}bo(t,r,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Cn}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>t[o]=s),i&&i.headers.forEach((s,o)=>t[o]=s)}So(t,r){const i=_y[t];return`${this.mo}/v1/${r}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Do(e,t,r,i){const s=Bs();return new Promise((o,a)=>{const u=new Pg;u.setWithCredentials(!0),u.listenOnce(Ig.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Us.NO_ERROR:const l=u.getResponseJson();E(ge,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(l)),o(l);break;case Us.TIMEOUT:E(ge,`RPC '${e}' ${s} timed out`),a(new w(m.DEADLINE_EXCEEDED,"Request time out"));break;case Us.HTTP_ERROR:const h=u.getStatus();if(E(ge,`RPC '${e}' ${s} failed with status:`,h,"response text:",u.getResponseText()),h>0){let d=u.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const _=function(p){const T=p.toLowerCase().replace(/_/g,"-");return Object.values(m).indexOf(T)>=0?T:m.UNKNOWN}(f.status);a(new w(_,f.message))}else a(new w(m.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new w(m.UNAVAILABLE,"Connection failed."));break;default:P()}}finally{E(ge,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);E(ge,`RPC '${e}' ${s} sending request:`,i),u.send(t,"POST",c,r,15)})}vo(e,t,r){const i=Bs(),s=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Eg(),a=Tg(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.xmlHttpFactory=new Rg({})),this.bo(u.initMessageHeaders,t,r),u.encodeInitMessageHeaders=!0;const l=s.join("");E(ge,`Creating RPC '${e}' stream ${i}: ${l}`,u);const h=o.createWebChannel(l,u);let d=!1,f=!1;const _=new yy({co:p=>{f?E(ge,`Not sending because RPC '${e}' stream ${i} is closed:`,p):(d||(E(ge,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),E(ge,`RPC '${e}' stream ${i} sending:`,p),h.send(p))},lo:()=>h.close()}),y=(p,T,C)=>{p.listen(T,k=>{try{C(k)}catch(H){setTimeout(()=>{throw H},0)}})};return y(h,Yr.EventType.OPEN,()=>{f||E(ge,`RPC '${e}' stream ${i} transport opened.`)}),y(h,Yr.EventType.CLOSE,()=>{f||(f=!0,E(ge,`RPC '${e}' stream ${i} transport closed`),_.Ro())}),y(h,Yr.EventType.ERROR,p=>{f||(f=!0,yn(ge,`RPC '${e}' stream ${i} transport errored:`,p),_.Ro(new w(m.UNAVAILABLE,"The operation could not be completed")))}),y(h,Yr.EventType.MESSAGE,p=>{var T;if(!f){const C=p.data[0];K(!!C);const k=C,H=k.error||((T=k[0])===null||T===void 0?void 0:T.error);if(H){E(ge,`RPC '${e}' stream ${i} received error:`,H);const Ie=H.status;let U=function(L){const F=J[L];if(F!==void 0)return Wh(F)}(Ie),pe=H.message;U===void 0&&(U=m.INTERNAL,pe="Unknown error status: "+Ie+" with message "+H.message),f=!0,_.Ro(new w(U,pe)),h.close()}else E(ge,`RPC '${e}' stream ${i} received:`,C),_.Vo(C)}}),y(a,Ag.STAT_EVENT,p=>{p.stat===Iu.PROXY?E(ge,`RPC '${e}' stream ${i} detected buffering proxy`):p.stat===Iu.NOPROXY&&E(ge,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{_.Ao()},0),_}}function $s(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hs(n){return new k_(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(e,t,r=1e3,i=1.5,s=6e4){this.si=e,this.timerId=t,this.Fo=r,this.Mo=i,this.xo=s,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(e){this.cancel();const t=Math.floor(this.Oo+this.qo()),r=Math.max(0,Date.now()-this.Bo),i=Math.max(0,t-r);i>0&&E("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Oo} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,i,()=>(this.Bo=Date.now(),e())),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){this.No!==null&&(this.No.skipDelay(),this.No=null)}cancel(){this.No!==null&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd{constructor(e,t,r,i,s,o,a,u){this.si=e,this.Ko=r,this.$o=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new td(e,t)}jo(){return this.state===1||this.state===5||this.Ho()}Ho(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&this.Wo===null&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,()=>this.Xo()))}e_(e){this.t_(),this.stream.send(e)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(e,t){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,e!==4?this.zo.reset():t&&t.code===m.RESOURCE_EXHAUSTED?(it(t.toString()),it("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):t&&t.code===m.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.r_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Io(t)}r_(){}auth(){this.state=1;const e=this.i_(this.Uo),t=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Uo===t&&this.s_(r,i)},r=>{e(()=>{const i=new w(m.UNKNOWN,"Fetching auth token failed: "+r.message);return this.o_(i)})})}s_(e,t){const r=this.i_(this.Uo);this.stream=this.__(e,t),this.stream.ho(()=>{r(()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,()=>(this.Ho()&&(this.state=3),Promise.resolve())),this.listener.ho()))}),this.stream.Io(i=>{r(()=>this.o_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Jo(){this.state=5,this.zo.ko(async()=>{this.state=0,this.start()})}o_(e){return E("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}i_(e){return t=>{this.si.enqueueAndForget(()=>this.Uo===e?t():(E("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class wy extends nd{constructor(e,t,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s}__(e,t){return this.connection.vo("Listen",e,t)}onMessage(e){this.zo.reset();const t=N_(this.serializer,e),r=function(s){if(!("targetChange"in s))return b.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?b.min():o.readTime?Ge(o.readTime):b.min()}(e);return this.listener.a_(t,r)}u_(e){const t={};t.database=To(this.serializer),t.addTarget=function(s,o){let a;const u=o.target;if(a=go(u)?{documents:L_(s,u)}:{query:x_(s,u)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Gh(s,o.resumeToken);const c=vo(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(b.min())>0){a.readTime=Si(s,o.snapshotVersion.toTimestamp());const c=vo(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=F_(this.serializer,e);r&&(t.labels=r),this.e_(t)}c_(e){const t={};t.database=To(this.serializer),t.removeTarget=e,this.e_(t)}}class Ey extends nd{constructor(e,t,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s,this.l_=!1}get h_(){return this.l_}start(){this.l_=!1,this.lastStreamToken=void 0,super.start()}r_(){this.l_&&this.P_([])}__(e,t){return this.connection.vo("Write",e,t)}onMessage(e){if(K(!!e.streamToken),this.lastStreamToken=e.streamToken,this.l_){this.zo.reset();const t=M_(e.writeResults,e.commitTime),r=Ge(e.commitTime);return this.listener.I_(r,t)}return K(!e.writeResults||e.writeResults.length===0),this.l_=!0,this.listener.T_()}E_(){const e={};e.database=To(this.serializer),this.e_(e)}P_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>V_(this.serializer,r))};this.e_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ty extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.d_=!1}A_(){if(this.d_)throw new w(m.FAILED_PRECONDITION,"The client has already been terminated.")}wo(e,t,r){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.wo(e,t,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===m.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new w(m.UNKNOWN,i.toString())})}Co(e,t,r,i){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Co(e,t,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===m.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new w(m.UNKNOWN,s.toString())})}terminate(){this.d_=!0}}class Iy{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){this.V_===0&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve())))}w_(e){this.state==="Online"?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.p_("Offline")))}set(e){this.S_(),this.V_=0,e==="Online"&&(this.f_=!1),this.p_(e)}p_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}y_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?(it(t),this.f_=!1):E("OnlineStateTracker",t)}S_(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ay{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=s,this.F_.ro(o=>{r.enqueueAndForget(async()=>{Yt(this)&&(E("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=D(u);c.C_.add(4),await Fr(c),c.M_.set("Unknown"),c.C_.delete(4),await ds(c)}(this))})}),this.M_=new Iy(r,i)}}async function ds(n){if(Yt(n))for(const e of n.v_)await e(!0)}async function Fr(n){for(const e of n.v_)await e(!1)}function rd(n,e){const t=D(n);t.D_.has(e.targetId)||(t.D_.set(e.targetId,e),wa(t)?va(t):On(t).Ho()&&ya(t,e))}function id(n,e){const t=D(n),r=On(t);t.D_.delete(e),r.Ho()&&sd(t,e),t.D_.size===0&&(r.Ho()?r.Zo():Yt(t)&&t.M_.set("Unknown"))}function ya(n,e){if(n.x_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(b.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}On(n).u_(e)}function sd(n,e){n.x_.Oe(e),On(n).c_(e)}function va(n){n.x_=new P_({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>n.D_.get(e)||null,nt:()=>n.datastore.serializer.databaseId}),On(n).start(),n.M_.g_()}function wa(n){return Yt(n)&&!On(n).jo()&&n.D_.size>0}function Yt(n){return D(n).C_.size===0}function od(n){n.x_=void 0}async function Ry(n){n.D_.forEach((e,t)=>{ya(n,e)})}async function Py(n,e){od(n),wa(n)?(n.M_.w_(e),va(n)):n.M_.set("Unknown")}async function Sy(n,e,t){if(n.M_.set("Online"),e instanceof zh&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.D_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.D_.delete(a),i.x_.removeTarget(a))}(n,e)}catch(r){E("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ci(n,r)}else if(e instanceof ii?n.x_.$e(e):e instanceof Hh?n.x_.Je(e):n.x_.Ge(e),!t.isEqual(b.min()))try{const r=await ed(n.localStore);t.compareTo(r)>=0&&await function(s,o){const a=s.x_.it(o);return a.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const l=s.D_.get(c);l&&s.D_.set(c,l.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,c)=>{const l=s.D_.get(u);if(!l)return;s.D_.set(u,l.withResumeToken(Te.EMPTY_BYTE_STRING,l.snapshotVersion)),sd(s,u);const h=new pt(l.target,u,c,l.sequenceNumber);ya(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(n,t)}catch(r){E("RemoteStore","Failed to raise snapshot:",r),await Ci(n,r)}}async function Ci(n,e,t){if(!Lr(e))throw e;n.C_.add(1),await Fr(n),n.M_.set("Offline"),t||(t=()=>ed(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{E("RemoteStore","Retrying IndexedDB access"),await t(),n.C_.delete(1),await ds(n)})}function ad(n,e){return e().catch(t=>Ci(n,t,e))}async function fs(n){const e=D(n),t=Tt(e);let r=e.b_.length>0?e.b_[e.b_.length-1].batchId:-1;for(;Cy(e);)try{const i=await dy(e.localStore,r);if(i===null){e.b_.length===0&&t.Zo();break}r=i.batchId,by(e,i)}catch(i){await Ci(e,i)}ud(e)&&cd(e)}function Cy(n){return Yt(n)&&n.b_.length<10}function by(n,e){n.b_.push(e);const t=Tt(n);t.Ho()&&t.h_&&t.P_(e.mutations)}function ud(n){return Yt(n)&&!Tt(n).jo()&&n.b_.length>0}function cd(n){Tt(n).start()}async function ky(n){Tt(n).E_()}async function Dy(n){const e=Tt(n);for(const t of n.b_)e.P_(t.mutations)}async function Oy(n,e,t){const r=n.b_.shift(),i=da.from(r,e,t);await ad(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await fs(n)}async function Ny(n,e){e&&Tt(n).h_&&await async function(r,i){if(function(o){return I_(o)&&o!==m.ABORTED}(i.code)){const s=r.b_.shift();Tt(r).Yo(),await ad(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await fs(r)}}(n,e),ud(n)&&cd(n)}async function Ku(n,e){const t=D(n);t.asyncQueue.verifyOperationInProgress(),E("RemoteStore","RemoteStore received new credentials");const r=Yt(t);t.C_.add(3),await Fr(t),r&&t.M_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.C_.delete(3),await ds(t)}async function Vy(n,e){const t=D(n);e?(t.C_.delete(2),await ds(t)):e||(t.C_.add(2),await Fr(t),t.M_.set("Unknown"))}function On(n){return n.O_||(n.O_=function(t,r,i){const s=D(t);return s.A_(),new wy(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{ho:Ry.bind(null,n),Io:Py.bind(null,n),a_:Sy.bind(null,n)}),n.v_.push(async e=>{e?(n.O_.Yo(),wa(n)?va(n):n.M_.set("Unknown")):(await n.O_.stop(),od(n))})),n.O_}function Tt(n){return n.N_||(n.N_=function(t,r,i){const s=D(t);return s.A_(),new Ey(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{ho:ky.bind(null,n),Io:Ny.bind(null,n),T_:Dy.bind(null,n),I_:Oy.bind(null,n)}),n.v_.push(async e=>{e?(n.N_.Yo(),await fs(n)):(await n.N_.stop(),n.b_.length>0&&(E("RemoteStore",`Stopping write stream with ${n.b_.length} pending writes`),n.b_=[]))})),n.N_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new tt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,s){const o=Date.now()+r,a=new Ea(e,t,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new w(m.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ta(n,e){if(it("AsyncQueue",`${e}: ${n}`),Lr(n))return new w(m.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e){this.comparator=e?(t,r)=>e(t,r)||A.comparator(t.key,r.key):(t,r)=>A.comparator(t.key,r.key),this.keyedMap=Hn(),this.sortedSet=new Q(this.comparator)}static emptySet(e){return new hn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof hn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new hn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu{constructor(){this.B_=new Q(A.comparator)}track(e){const t=e.doc.key,r=this.B_.get(t);r?e.type!==0&&r.type===3?this.B_=this.B_.insert(t,e):e.type===3&&r.type!==1?this.B_=this.B_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.B_=this.B_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.B_=this.B_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.B_=this.B_.remove(t):e.type===1&&r.type===2?this.B_=this.B_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.B_=this.B_.insert(t,{type:2,doc:e.doc}):P():this.B_=this.B_.insert(t,e)}L_(){const e=[];return this.B_.inorderTraversal((t,r)=>{e.push(r)}),e}}class In{constructor(e,t,r,i,s,o,a,u,c){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,t,r,i,s){const o=[];return t.forEach(a=>{o.push({type:0,doc:a})}),new In(e,t,hn.emptySet(t),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&os(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class My{constructor(){this.k_=void 0,this.listeners=[]}}class Ly{constructor(){this.queries=new Dn(e=>kh(e),os),this.onlineState="Unknown",this.q_=new Set}}async function Ia(n,e){const t=D(n),r=e.query;let i=!1,s=t.queries.get(r);if(s||(i=!0,s=new My),i)try{s.k_=await t.onListen(r)}catch(o){const a=Ta(o,`Initialization of query '${nn(e.query)}' failed`);return void e.onError(a)}t.queries.set(r,s),s.listeners.push(e),e.Q_(t.onlineState),s.k_&&e.K_(s.k_)&&Ra(t)}async function Aa(n,e){const t=D(n),r=e.query;let i=!1;const s=t.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return t.queries.delete(r),t.onUnlisten(r)}function xy(n,e){const t=D(n);let r=!1;for(const i of e){const s=i.query,o=t.queries.get(s);if(o){for(const a of o.listeners)a.K_(i)&&(r=!0);o.k_=i}}r&&Ra(t)}function Uy(n,e,t){const r=D(n),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(t);r.queries.delete(e)}function Ra(n){n.q_.forEach(e=>{e.next()})}class Pa{constructor(e,t,r){this.query=e,this.U_=t,this.W_=!1,this.G_=null,this.onlineState="Unknown",this.options=r||{}}K_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new In(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.W_?this.z_(e)&&(this.U_.next(e),t=!0):this.j_(e,this.onlineState)&&(this.H_(e),t=!0),this.G_=e,t}onError(e){this.U_.error(e)}Q_(e){this.onlineState=e;let t=!1;return this.G_&&!this.W_&&this.j_(this.G_,e)&&(this.H_(this.G_),t=!0),t}j_(e,t){if(!e.fromCache)return!0;const r=t!=="Offline";return(!this.options.J_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}z_(e){if(e.docChanges.length>0)return!0;const t=this.G_&&this.G_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}H_(e){e=In.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.W_=!0,this.U_.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ld{constructor(e){this.key=e}}class hd{constructor(e){this.key=e}}class Fy{constructor(e,t){this.query=e,this.ia=t,this.sa=null,this.hasCachedResults=!1,this.current=!1,this.oa=V(),this.mutatedKeys=V(),this._a=Dh(e),this.aa=new hn(this._a)}get ua(){return this.ia}ca(e,t){const r=t?t.la:new Qu,i=t?t.aa:this.aa;let s=t?t.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((l,h)=>{const d=i.get(l),f=as(this.query,h)?h:null,_=!!d&&this.mutatedKeys.has(d.key),y=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let p=!1;d&&f?d.data.isEqual(f.data)?_!==y&&(r.track({type:3,doc:f}),p=!0):this.ha(d,f)||(r.track({type:2,doc:f}),p=!0,(u&&this._a(f,u)>0||c&&this._a(f,c)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),p=!0):d&&!f&&(r.track({type:1,doc:d}),p=!0,(u||c)&&(a=!0)),p&&(f?(o=o.add(f),s=y?s.add(l):s.delete(l)):(o=o.delete(l),s=s.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),s=s.delete(l.key),r.track({type:1,doc:l})}return{aa:o,la:r,Zi:a,mutatedKeys:s}}ha(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r){const i=this.aa;this.aa=e.aa,this.mutatedKeys=e.mutatedKeys;const s=e.la.L_();s.sort((c,l)=>function(d,f){const _=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return P()}};return _(d)-_(f)}(c.type,l.type)||this._a(c.doc,l.doc)),this.Pa(r);const o=t?this.Ia():[],a=this.oa.size===0&&this.current?1:0,u=a!==this.sa;return this.sa=a,s.length!==0||u?{snapshot:new In(this.query,e.aa,i,s,e.mutatedKeys,a===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ta:o}:{Ta:o}}Q_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({aa:this.aa,la:new Qu,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{Ta:[]}}Ea(e){return!this.ia.has(e)&&!!this.aa.has(e)&&!this.aa.get(e).hasLocalMutations}Pa(e){e&&(e.addedDocuments.forEach(t=>this.ia=this.ia.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.ia=this.ia.delete(t)),this.current=e.current)}Ia(){if(!this.current)return[];const e=this.oa;this.oa=V(),this.aa.forEach(r=>{this.Ea(r.key)&&(this.oa=this.oa.add(r.key))});const t=[];return e.forEach(r=>{this.oa.has(r)||t.push(new hd(r))}),this.oa.forEach(r=>{e.has(r)||t.push(new ld(r))}),t}da(e){this.ia=e.ls,this.oa=V();const t=this.ca(e.documents);return this.applyChanges(t,!0)}Aa(){return In.fromInitialDocuments(this.query,this.aa,this.mutatedKeys,this.sa===0,this.hasCachedResults)}}class By{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class $y{constructor(e){this.key=e,this.Ra=!1}}class qy{constructor(e,t,r,i,s,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Va={},this.ma=new Dn(a=>kh(a),os),this.fa=new Map,this.ga=new Set,this.pa=new Q(A.comparator),this.ya=new Map,this.wa=new pa,this.Sa={},this.ba=new Map,this.Da=Tn.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return this.Ca===!0}}async function jy(n,e){const t=Zy(n);let r,i;const s=t.ma.get(e);if(s)r=s.targetId,t.sharedClientState.addLocalQueryTarget(r),i=s.view.Aa();else{const o=await fy(t.localStore,He(e)),a=t.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await Wy(t,e,r,a==="current",o.resumeToken),t.isPrimaryClient&&rd(t.remoteStore,o)}return i}async function Wy(n,e,t,r,i){n.va=(h,d,f)=>async function(y,p,T,C){let k=p.view.ca(T);k.Zi&&(k=await Hu(y.localStore,p.query,!1).then(({documents:U})=>p.view.ca(U,k)));const H=C&&C.targetChanges.get(p.targetId),Ie=p.view.applyChanges(k,y.isPrimaryClient,H);return Xu(y,p.targetId,Ie.Ta),Ie.snapshot}(n,h,d,f);const s=await Hu(n.localStore,e,!0),o=new Fy(e,s.ls),a=o.ca(s.documents),u=Ur.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),c=o.applyChanges(a,n.isPrimaryClient,u);Xu(n,t,c.Ta);const l=new By(e,t,o);return n.ma.set(e,l),n.fa.has(t)?n.fa.get(t).push(e):n.fa.set(t,[e]),c.snapshot}async function Hy(n,e){const t=D(n),r=t.ma.get(e),i=t.fa.get(r.targetId);if(i.length>1)return t.fa.set(r.targetId,i.filter(s=>!os(s,e))),void t.ma.delete(e);t.isPrimaryClient?(t.sharedClientState.removeLocalQueryTarget(r.targetId),t.sharedClientState.isActiveQueryTarget(r.targetId)||await Io(t.localStore,r.targetId,!1).then(()=>{t.sharedClientState.clearQueryState(r.targetId),id(t.remoteStore,r.targetId),Ao(t,r.targetId)}).catch(Mr)):(Ao(t,r.targetId),await Io(t.localStore,r.targetId,!0))}async function zy(n,e,t){const r=ev(n);try{const i=await function(o,a){const u=D(o),c=ne.now(),l=a.reduce((f,_)=>f.add(_.key),V());let h,d;return u.persistence.runTransaction("Locally write mutations","readwrite",f=>{let _=st(),y=V();return u.ss.getEntries(f,l).next(p=>{_=p,_.forEach((T,C)=>{C.isValidDocument()||(y=y.add(T))})}).next(()=>u.localDocuments.getOverlayedDocuments(f,_)).next(p=>{h=p;const T=[];for(const C of a){const k=y_(C,h.get(C.key).overlayedDocument);k!=null&&T.push(new Qt(C.key,k,Th(k.value.mapValue),ze.exists(!0)))}return u.mutationQueue.addMutationBatch(f,c,T,a)}).next(p=>{d=p;const T=p.applyToLocalDocumentSet(h,y);return u.documentOverlayCache.saveOverlays(f,p.batchId,T)})}).then(()=>({batchId:d.batchId,changes:Nh(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,u){let c=o.Sa[o.currentUser.toKey()];c||(c=new Q(B)),c=c.insert(a,u),o.Sa[o.currentUser.toKey()]=c}(r,i.batchId,t),await Br(r,i.changes),await fs(r.remoteStore)}catch(i){const s=Ta(i,"Failed to persist write");t.reject(s)}}async function dd(n,e){const t=D(n);try{const r=await ly(t.localStore,e);e.targetChanges.forEach((i,s)=>{const o=t.ya.get(s);o&&(K(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ra=!0:i.modifiedDocuments.size>0?K(o.Ra):i.removedDocuments.size>0&&(K(o.Ra),o.Ra=!1))}),await Br(t,r,e)}catch(r){await Mr(r)}}function Yu(n,e,t){const r=D(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.ma.forEach((s,o)=>{const a=o.view.Q_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const u=D(o);u.onlineState=a;let c=!1;u.queries.forEach((l,h)=>{for(const d of h.listeners)d.Q_(a)&&(c=!0)}),c&&Ra(u)}(r.eventManager,e),i.length&&r.Va.a_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Gy(n,e,t){const r=D(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.ya.get(e),s=i&&i.key;if(s){let o=new Q(A.comparator);o=o.insert(s,ye.newNoDocument(s,b.min()));const a=V().add(s),u=new ls(b.min(),new Map,new Q(B),o,a);await dd(r,u),r.pa=r.pa.remove(s),r.ya.delete(e),Sa(r)}else await Io(r.localStore,e,!1).then(()=>Ao(r,e,t)).catch(Mr)}async function Ky(n,e){const t=D(n),r=e.batch.batchId;try{const i=await cy(t.localStore,e);md(t,r,null),fd(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Br(t,i)}catch(i){await Mr(i)}}async function Qy(n,e,t){const r=D(n);try{const i=await function(o,a){const u=D(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return u.mutationQueue.lookupMutationBatch(c,a).next(h=>(K(h!==null),l=h.keys(),u.mutationQueue.removeMutationBatch(c,h))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,l,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>u.localDocuments.getDocuments(c,l))})}(r.localStore,e);md(r,e,t),fd(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Br(r,i)}catch(i){await Mr(i)}}function fd(n,e){(n.ba.get(e)||[]).forEach(t=>{t.resolve()}),n.ba.delete(e)}function md(n,e,t){const r=D(n);let i=r.Sa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.Sa[r.currentUser.toKey()]=i}}function Ao(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.fa.get(e))n.ma.delete(r),t&&n.Va.Fa(r,t);n.fa.delete(e),n.isPrimaryClient&&n.wa.Rr(e).forEach(r=>{n.wa.containsKey(r)||pd(n,r)})}function pd(n,e){n.ga.delete(e.path.canonicalString());const t=n.pa.get(e);t!==null&&(id(n.remoteStore,t),n.pa=n.pa.remove(e),n.ya.delete(t),Sa(n))}function Xu(n,e,t){for(const r of t)r instanceof ld?(n.wa.addReference(r.key,e),Yy(n,r)):r instanceof hd?(E("SyncEngine","Document no longer in limbo: "+r.key),n.wa.removeReference(r.key,e),n.wa.containsKey(r.key)||pd(n,r.key)):P()}function Yy(n,e){const t=e.key,r=t.path.canonicalString();n.pa.get(t)||n.ga.has(r)||(E("SyncEngine","New document in limbo: "+t),n.ga.add(r),Sa(n))}function Sa(n){for(;n.ga.size>0&&n.pa.size<n.maxConcurrentLimboResolutions;){const e=n.ga.values().next().value;n.ga.delete(e);const t=new A(G.fromString(e)),r=n.Da.next();n.ya.set(r,new $y(t)),n.pa=n.pa.insert(t,r),rd(n.remoteStore,new pt(He(ss(t.path)),r,"TargetPurposeLimboResolution",oa._e))}}async function Br(n,e,t){const r=D(n),i=[],s=[],o=[];r.ma.isEmpty()||(r.ma.forEach((a,u)=>{o.push(r.va(u,e,t).then(c=>{if((c||t)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(u.targetId,c!=null&&c.fromCache?"not-current":"current"),c){i.push(c);const l=_a.Qi(u.targetId,c);s.push(l)}}))}),await Promise.all(o),r.Va.a_(i),await async function(u,c){const l=D(u);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>g.forEach(c,d=>g.forEach(d.ki,f=>l.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>g.forEach(d.qi,f=>l.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!Lr(h))throw h;E("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const d=h.targetId;if(!h.fromCache){const f=l.ts.get(d),_=f.snapshotVersion,y=f.withLastLimboFreeSnapshotVersion(_);l.ts=l.ts.insert(d,y)}}}(r.localStore,s))}async function Xy(n,e){const t=D(n);if(!t.currentUser.isEqual(e)){E("SyncEngine","User change. New user:",e.toKey());const r=await Zh(t.localStore,e);t.currentUser=e,function(s,o){s.ba.forEach(a=>{a.forEach(u=>{u.reject(new w(m.CANCELLED,o))})}),s.ba.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Br(t,r._s)}}function Jy(n,e){const t=D(n),r=t.ya.get(e);if(r&&r.Ra)return V().add(r.key);{let i=V();const s=t.fa.get(e);if(!s)return i;for(const o of s){const a=t.ma.get(o);i=i.unionWith(a.view.ua)}return i}}function Zy(n){const e=D(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=dd.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Jy.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Gy.bind(null,e),e.Va.a_=xy.bind(null,e.eventManager),e.Va.Fa=Uy.bind(null,e.eventManager),e}function ev(n){const e=D(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Ky.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Qy.bind(null,e),e}class Ju{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=hs(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return uy(this.persistence,new oy,e.initialUser,this.serializer)}createPersistence(e){return new ry(ga.jr,this.serializer)}createSharedClientState(e){return new py}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class tv{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Yu(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Xy.bind(null,this.syncEngine),await Vy(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Ly}()}createDatastore(e){const t=hs(e.databaseInfo.databaseId),r=function(s){return new vy(s)}(e.databaseInfo);return function(s,o,a,u){return new Ty(s,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,s,o,a){return new Ay(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,t=>Yu(this.syncEngine,t,0),function(){return Gu.D()?new Gu:new gy}())}createSyncEngine(e,t){return function(i,s,o,a,u,c,l){const h=new qy(i,s,o,a,u,c);return l&&(h.Ca=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(t){const r=D(t);E("RemoteStore","RemoteStore shutting down."),r.C_.add(5),await Fr(r),r.F_.shutdown(),r.M_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Oa(this.observer.next,e)}error(e){this.observer.error?this.Oa(this.observer.error,e):it("Uncaught Error in snapshot listener:",e.toString())}Na(){this.muted=!0}Oa(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nv{constructor(e,t,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=_e.UNAUTHENTICATED,this.clientId=vh.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{E("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(E("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new w(m.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new tt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Ta(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function qs(n,e){n.asyncQueue.verifyOperationInProgress(),E("FirestoreClient","Initializing OfflineComponentProvider");const t=await n.getConfiguration();await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Zh(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Zu(n,e){n.asyncQueue.verifyOperationInProgress();const t=await iv(n);E("FirestoreClient","Initializing OnlineComponentProvider");const r=await n.getConfiguration();await e.initialize(t,r),n.setCredentialChangeListener(i=>Ku(e.remoteStore,i)),n.setAppCheckTokenChangeListener((i,s)=>Ku(e.remoteStore,s)),n._onlineComponents=e}function rv(n){return n.name==="FirebaseError"?n.code===m.FAILED_PRECONDITION||n.code===m.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function iv(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){E("FirestoreClient","Using user provided OfflineComponentProvider");try{await qs(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!rv(t))throw t;yn("Error using user provided cache. Falling back to memory cache: "+t),await qs(n,new Ju)}}else E("FirestoreClient","Using default OfflineComponentProvider"),await qs(n,new Ju);return n._offlineComponents}async function gd(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(E("FirestoreClient","Using user provided OnlineComponentProvider"),await Zu(n,n._uninitializedComponentsProvider._online)):(E("FirestoreClient","Using default OnlineComponentProvider"),await Zu(n,new tv))),n._onlineComponents}function sv(n){return gd(n).then(e=>e.syncEngine)}async function bi(n){const e=await gd(n),t=e.eventManager;return t.onListen=jy.bind(null,e.syncEngine),t.onUnlisten=Hy.bind(null,e.syncEngine),t}function ov(n,e,t={}){const r=new tt;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const l=new Ca({next:d=>{o.enqueueAndForget(()=>Aa(s,h));const f=d.docs.has(a);!f&&d.fromCache?c.reject(new w(m.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&d.fromCache&&u&&u.source==="server"?c.reject(new w(m.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(d)},error:d=>c.reject(d)}),h=new Pa(ss(a.path),l,{includeMetadataChanges:!0,J_:!0});return Ia(s,h)}(await bi(n),n.asyncQueue,e,t,r)),r.promise}function av(n,e,t={}){const r=new tt;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const l=new Ca({next:d=>{o.enqueueAndForget(()=>Aa(s,h)),d.fromCache&&u.source==="server"?c.reject(new w(m.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(d)},error:d=>c.reject(d)}),h=new Pa(a,l,{includeMetadataChanges:!0,J_:!0});return Ia(s,h)}(await bi(n),n.asyncQueue,e,t,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _d(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ec=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yd(n,e,t){if(!t)throw new w(m.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function uv(n,e,t,r){if(e===!0&&r===!0)throw new w(m.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function tc(n){if(!A.isDocumentKey(n))throw new w(m.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function nc(n){if(A.isDocumentKey(n))throw new w(m.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function ms(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":P()}function Le(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new w(m.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=ms(n);throw new w(m.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new w(m.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new w(m.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}uv("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=_d((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new w(m.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new w(m.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new w(m.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ps{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new rc({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new w(m.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new w(m.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new rc(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Cg;switch(r.type){case"firstParty":return new Og(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new w(m.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=ec.get(t);r&&(E("ComponentProvider","Removing Datastore"),ec.delete(t),r.terminate())}(this),Promise.resolve()}}function cv(n,e,t,r={}){var i;const s=(n=Le(n,ps))._getSettings(),o=`${e}:${t}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&yn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=_e.MOCK_USER;else{a=em(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new w(m.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new _e(c)}n._authCredentials=new bg(new yh(a,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Rt(this.firestore,e,this._query)}}class Re{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new vt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Re(this.firestore,e,this._key)}}class vt extends Rt{constructor(e,t,r){super(e,t,ss(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Re(this.firestore,null,new A(e))}withConverter(e){return new vt(this.firestore,e,this._path)}}function Ro(n,e,...t){if(n=Pe(n),yd("collection","path",e),n instanceof ps){const r=G.fromString(e,...t);return nc(r),new vt(n,null,r)}{if(!(n instanceof Re||n instanceof vt))throw new w(m.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(G.fromString(e,...t));return nc(r),new vt(n.firestore,null,r)}}function gs(n,e,...t){if(n=Pe(n),arguments.length===1&&(e=vh.newId()),yd("doc","path",e),n instanceof ps){const r=G.fromString(e,...t);return tc(r),new Re(n,null,new A(r))}{if(!(n instanceof Re||n instanceof vt))throw new w(m.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(G.fromString(e,...t));return tc(r),new Re(n.firestore,n instanceof vt?n.converter:null,new A(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lv{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new td(this,"async_queue_retry"),this.iu=()=>{const t=$s();t&&E("AsyncQueue","Visibility state changed to "+t.visibilityState),this.zo.Qo()};const e=$s();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.su(),this.ou(e)}enterRestrictedMode(e){if(!this.Za){this.Za=!0,this.nu=e||!1;const t=$s();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.iu)}}enqueue(e){if(this.su(),this.Za)return new Promise(()=>{});const t=new tt;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ya.push(e),this._u()))}async _u(){if(this.Ya.length!==0){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(e){if(!Lr(e))throw e;E("AsyncQueue","Operation failed with retryable error: "+e)}this.Ya.length>0&&this.zo.ko(()=>this._u())}}ou(e){const t=this.Ja.then(()=>(this.tu=!0,e().catch(r=>{this.eu=r,this.tu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw it("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.tu=!1,r))));return this.Ja=t,t}enqueueAfterDelay(e,t,r){this.su(),this.ru.indexOf(e)>-1&&(t=0);const i=Ea.createAndSchedule(this,e,t,r,s=>this.au(s));return this.Xa.push(i),i}su(){this.eu&&P()}verifyOperationInProgress(){}async uu(){let e;do e=this.Ja,await e;while(e!==this.Ja)}cu(e){for(const t of this.Xa)if(t.timerId===e)return!0;return!1}lu(e){return this.uu().then(()=>{this.Xa.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Xa)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.uu()})}hu(e){this.ru.push(e)}au(e){const t=this.Xa.indexOf(e);this.Xa.splice(t,1)}}function ic(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const i=t;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(n,["next","error","complete"])}class Wt extends ps{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=function(){return new lv}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||wd(this),this._firestoreClient.terminate()}}function vd(n,e){const t=typeof n=="object"?n:fl(),r=typeof n=="string"?n:e||"(default)",i=Lo(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Jf("firestore");s&&cv(i,...s)}return i}function _s(n){return n._firestoreClient||wd(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function wd(n){var e,t,r;const i=n._freezeSettings(),s=function(a,u,c,l){return new Wg(a,u,c,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,_d(l.experimentalLongPollingOptions),l.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._firestoreClient=new nv(n._authCredentials,n._appCheckCredentials,n._queue,s),!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e){this._byteString=e}static fromBase64String(e){try{return new An(Te.fromBase64String(e))}catch(t){throw new w(m.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new An(Te.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new w(m.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new he(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new w(m.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new w(m.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return B(this._lat,e._lat)||B(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hv=/^__.*__$/;class dv{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Qt(e,this.data,this.fieldMask,t,this.fieldTransforms):new xr(e,this.data,t,this.fieldTransforms)}}function Ed(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw P()}}class Oa{constructor(e,t,r,i,s,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Pu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Iu(){return this.settings.Iu}Tu(e){return new Oa(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Eu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Tu({path:r,du:!1});return i.Au(e),i}Ru(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Tu({path:r,du:!1});return i.Pu(),i}Vu(e){return this.Tu({path:void 0,du:!0})}mu(e){return ki(e,this.settings.methodName,this.settings.fu||!1,this.path,this.settings.gu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Pu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Au(this.path.get(e))}Au(e){if(e.length===0)throw this.mu("Document fields must not be empty");if(Ed(this.Iu)&&hv.test(e))throw this.mu('Document fields cannot begin and end with "__"')}}class fv{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||hs(e)}pu(e,t,r,i=!1){return new Oa({Iu:e,methodName:t,gu:r,path:he.emptyPath(),du:!1,fu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Na(n){const e=n._freezeSettings(),t=hs(n._databaseId);return new fv(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Td(n,e,t,r,i,s={}){const o=n.pu(s.merge||s.mergeFields?2:0,e,t,i);Rd("Data must be an object, but it was:",o,r);const a=Id(r,o);let u,c;if(s.merge)u=new Me(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const l=[];for(const h of s.mergeFields){const d=pv(e,h,t);if(!o.contains(d))throw new w(m.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);_v(l,d)||l.push(d)}u=new Me(l),c=o.fieldTransforms.filter(h=>u.covers(h.field))}else u=null,c=o.fieldTransforms;return new dv(new Ne(a),u,c)}class Va extends ka{_toFieldTransform(e){return new m_(e.path,new gr)}isEqual(e){return e instanceof Va}}function mv(n,e,t,r=!1){return Ma(t,n.pu(r?4:3,e))}function Ma(n,e){if(Ad(n=Pe(n)))return Rd("Unsupported field value:",e,n),Id(n,e);if(n instanceof ka)return function(r,i){if(!Ed(i.Iu))throw i.mu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.mu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.du&&e.Iu!==4)throw e.mu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let u=Ma(a,i.Vu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(n,e)}return function(r,i){if((r=Pe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return h_(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=ne.fromDate(r);return{timestampValue:Si(i.serializer,s)}}if(r instanceof ne){const s=new ne(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Si(i.serializer,s)}}if(r instanceof Da)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof An)return{bytesValue:Gh(i.serializer,r._byteString)};if(r instanceof Re){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:ma(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.mu(`Unsupported field value: ${ms(r)}`)}(n,e)}function Id(n,e){const t={};return wh(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):bn(n,(r,i)=>{const s=Ma(i,e.Eu(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function Ad(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ne||n instanceof Da||n instanceof An||n instanceof Re||n instanceof ka)}function Rd(n,e,t){if(!Ad(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const r=ms(t);throw r==="an object"?e.mu(n+" a custom object"):e.mu(n+" "+r)}}function pv(n,e,t){if((e=Pe(e))instanceof ba)return e._internalPath;if(typeof e=="string")return Pd(n,e);throw ki("Field path arguments must be of type string or ",n,!1,void 0,t)}const gv=new RegExp("[~\\*/\\[\\]]");function Pd(n,e,t){if(e.search(gv)>=0)throw ki(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new ba(...e.split("."))._internalPath}catch{throw ki(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function ki(n,e,t,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new w(m.INVALID_ARGUMENT,a+n+u)}function _v(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sd{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Re(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new yv(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(ys("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class yv extends Sd{data(){return super.data()}}function ys(n,e){return typeof e=="string"?Pd(n,e):e instanceof ba?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cd(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new w(m.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class La{}class bd extends La{}function kd(n,e,...t){let r=[];e instanceof La&&r.push(e),r=r.concat(t),function(s){const o=s.filter(u=>u instanceof xa).length,a=s.filter(u=>u instanceof vs).length;if(o>1||o>0&&a>0)throw new w(m.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class vs extends bd{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new vs(e,t,r)}_apply(e){const t=this._parse(e);return Dd(e._query,t),new Rt(e.firestore,e.converter,_o(e._query,t))}_parse(e){const t=Na(e.firestore);return function(s,o,a,u,c,l,h){let d;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new w(m.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){oc(h,l);const f=[];for(const _ of h)f.push(sc(u,s,_));d={arrayValue:{values:f}}}else d=sc(u,s,h)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||oc(h,l),d=mv(a,o,h,l==="in"||l==="not-in");return ee.create(c,l,d)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function vv(n,e,t){const r=e,i=ys("where",n);return vs._create(i,r,t)}class xa extends La{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new xa(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:Ue.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const u of a)Dd(o,u),o=_o(o,u)}(e._query,t),new Rt(e.firestore,e.converter,_o(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Ua extends bd{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Ua(e,t)}_apply(e){const t=function(i,s,o){if(i.startAt!==null)throw new w(m.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new w(m.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new pr(s,o)}(e._query,this._field,this._direction);return new Rt(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new kn(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,t))}}function wv(n,e="asc"){const t=e,r=ys("orderBy",n);return Ua._create(r,t)}function sc(n,e,t){if(typeof(t=Pe(t))=="string"){if(t==="")throw new w(m.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!bh(e)&&t.indexOf("/")!==-1)throw new w(m.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(G.fromString(t));if(!A.isDocumentKey(r))throw new w(m.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Cu(n,new A(r))}if(t instanceof Re)return Cu(n,t._key);throw new w(m.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ms(t)}.`)}function oc(n,e){if(!Array.isArray(n)||n.length===0)throw new w(m.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Dd(n,e){const t=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new w(m.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new w(m.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class Ev{convertValue(e,t="none"){switch(jt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Z(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(qt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw P()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return bn(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertGeoPoint(e){return new Da(Z(e.latitude),Z(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=ua(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(dr(e));default:return null}}convertTimestamp(e){const t=Et(e);return new ne(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=G.fromString(e);K(Jh(r));const i=new fr(r.get(1),r.get(3)),s=new A(r.popFirst(5));return i.isEqual(t)||it(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Od(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Nd extends Sd{constructor(e,t,r,i,s,o){super(e,t,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new si(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(ys("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class si extends Nd{data(e={}){return super.data(e)}}class Vd{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new Gn(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new si(this._firestore,this._userDataWriter,r.key,r,new Gn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new w(m.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const u=new si(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Gn(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const u=new si(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Gn(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,l=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),l=o.indexOf(a.doc.key)),{type:Tv(a.type),doc:u,oldIndex:c,newIndex:l}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function Tv(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return P()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Md(n){n=Le(n,Re);const e=Le(n.firestore,Wt);return ov(_s(e),n._key).then(t=>xd(e,n,t))}class Fa extends Ev{constructor(e){super(),this.firestore=e}convertBytes(e){return new An(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Re(this.firestore,null,t)}}function Iv(n){n=Le(n,Rt);const e=Le(n.firestore,Wt),t=_s(e),r=new Fa(e);return Cd(n._query),av(t,n._query).then(i=>new Vd(e,r,n,i))}function Av(n,e,t){n=Le(n,Re);const r=Le(n.firestore,Wt),i=Od(n.converter,e,t);return Ld(r,[Td(Na(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,ze.none())])}function Rv(n,e){const t=Le(n.firestore,Wt),r=gs(n),i=Od(n.converter,e);return Ld(t,[Td(Na(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,ze.exists(!1))]).then(()=>r)}function Pv(n,...e){var t,r,i;n=Pe(n);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||ic(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(ic(e[o])){const h=e[o];e[o]=(t=h.next)===null||t===void 0?void 0:t.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let u,c,l;if(n instanceof Re)c=Le(n.firestore,Wt),l=ss(n._key.path),u={next:h=>{e[o]&&e[o](xd(c,n,h))},error:e[o+1],complete:e[o+2]};else{const h=Le(n,Rt);c=Le(h.firestore,Wt),l=h._query;const d=new Fa(c);u={next:f=>{e[o]&&e[o](new Vd(c,d,h,f))},error:e[o+1],complete:e[o+2]},Cd(n._query)}return function(d,f,_,y){const p=new Ca(y),T=new Pa(f,p,_);return d.asyncQueue.enqueueAndForget(async()=>Ia(await bi(d),T)),()=>{p.Na(),d.asyncQueue.enqueueAndForget(async()=>Aa(await bi(d),T))}}(_s(c),l,a,u)}function Ld(n,e){return function(r,i){const s=new tt;return r.asyncQueue.enqueueAndForget(async()=>zy(await sv(r),i,s)),s.promise}(_s(n),e)}function xd(n,e,t){const r=t.docs.get(e._key),i=new Fa(n);return new Nd(n,i,e._key,r,new Gn(t.hasPendingWrites,t.fromCache),e.converter)}function Sv(){return new Va("serverTimestamp")}(function(e,t=!0){(function(i){Cn=i})(Rn),gn(new Ft("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Wt(new kg(r.getProvider("auth-internal")),new Vg(r.getProvider("app-check-internal")),function(c,l){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new w(m.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new fr(c.options.projectId,l)}(o,i),o);return s=Object.assign({useFetchStreams:t},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),yt(Au,"4.3.2",e),yt(Au,"4.3.2","esm2017")})();function Ba(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function Ud(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Cv=Ud,Fd=new Ar("auth","Firebase",Ud());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Di=new Vo("@firebase/auth");function bv(n,...e){Di.logLevel<=M.WARN&&Di.warn(`Auth (${Rn}): ${n}`,...e)}function oi(n,...e){Di.logLevel<=M.ERROR&&Di.error(`Auth (${Rn}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ve(n,...e){throw $a(n,...e)}function Ke(n,...e){return $a(n,...e)}function Bd(n,e,t){const r=Object.assign(Object.assign({},Cv()),{[e]:t});return new Ar("auth","Firebase",r).create(e,{appName:n.name})}function kv(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&Ve(n,"argument-error"),Bd(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function $a(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Fd.create(n,...e)}function R(n,e,...t){if(!n)throw $a(e,...t)}function Ze(n){const e="INTERNAL ASSERTION FAILED: "+n;throw oi(e),new Error(e)}function ot(n,e){n||Ze(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Po(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Dv(){return ac()==="http:"||ac()==="https:"}function ac(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ov(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Dv()||nm()||"connection"in navigator)?navigator.onLine:!0}function Nv(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(e,t){this.shortDelay=e,this.longDelay=t,ot(t>e,"Short delay should be less than long delay!"),this.isMobile=tm()||rm()}get(){return Ov()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qa(n,e){ot(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ze("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ze("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ze("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vv={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mv=new $r(3e4,6e4);function Pt(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function St(n,e,t,r,i={}){return qd(n,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Rr(Object.assign({key:n.config.apiKey},o)).slice(1),u=await n._getAdditionalHeaders();return u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode),$d.fetch()(jd(n,n.config.apiHost,t,a),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},s))})}async function qd(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},Vv),e);try{const i=new xv(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ei(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,c]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw ei(n,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw ei(n,"email-already-in-use",o);if(u==="USER_DISABLED")throw ei(n,"user-disabled",o);const l=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Bd(n,l,c);Ve(n,l)}}catch(i){if(i instanceof at)throw i;Ve(n,"network-request-failed",{message:String(i)})}}async function qr(n,e,t,r,i={}){const s=await St(n,e,t,r,i);return"mfaPendingCredential"in s&&Ve(n,"multi-factor-auth-required",{_serverResponse:s}),s}function jd(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?qa(n.config,i):`${n.config.apiScheme}://${i}`}function Lv(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class xv{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Ke(this.auth,"network-request-failed")),Mv.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ei(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=Ke(n,e,r);return i.customData._tokenResponse=t,i}function uc(n){return n!==void 0&&n.enterprise!==void 0}class Uv{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Lv(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Fv(n,e){return St(n,"GET","/v2/recaptchaConfig",Pt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bv(n,e){return St(n,"POST","/v1/accounts:delete",e)}async function $v(n,e){return St(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function er(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function qv(n,e=!1){const t=Pe(n),r=await t.getIdToken(e),i=ja(r);R(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:er(js(i.auth_time)),issuedAtTime:er(js(i.iat)),expirationTime:er(js(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function js(n){return Number(n)*1e3}function ja(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return oi("JWT malformed, contained fewer than 3 sections"),null;try{const i=ol(t);return i?JSON.parse(i):(oi("Failed to decode base64 JWT payload"),null)}catch(i){return oi("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function jv(n){const e=ja(n);return R(e,"internal-error"),R(typeof e.exp<"u","internal-error"),R(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vr(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof at&&Wv(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Wv({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hv{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=er(this.lastLoginAt),this.creationTime=er(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oi(n){var e;const t=n.auth,r=await n.getIdToken(),i=await vr(n,$v(t,{idToken:r}));R(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Kv(s.providerUserInfo):[],a=Gv(n.providerData,o),u=n.isAnonymous,c=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),l=u?c:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Wd(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(n,h)}async function zv(n){const e=Pe(n);await Oi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Gv(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Kv(n){return n.map(e=>{var{providerId:t}=e,r=Ba(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qv(n,e){const t=await qd(n,{},async()=>{const r=Rr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,o=jd(n,i,"/v1/token",`key=${s}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",$d.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Yv(n,e){return St(n,"POST","/v2/accounts:revokeToken",Pt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){R(e.idToken,"internal-error"),R(typeof e.idToken<"u","internal-error"),R(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):jv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return R(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await Qv(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,o=new wr;return r&&(R(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(R(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(R(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new wr,this.toJSON())}_performRefresh(){return Ze("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(n,e){R(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class xt{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=Ba(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Hv(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Wd(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await vr(this,this.stsTokenManager.getToken(this.auth,e));return R(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return qv(this,e)}reload(){return zv(this)}_assign(e){this!==e&&(R(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new xt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){R(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Oi(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await vr(this,Bv(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,o,a,u,c,l;const h=(r=t.displayName)!==null&&r!==void 0?r:void 0,d=(i=t.email)!==null&&i!==void 0?i:void 0,f=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,_=(o=t.photoURL)!==null&&o!==void 0?o:void 0,y=(a=t.tenantId)!==null&&a!==void 0?a:void 0,p=(u=t._redirectEventId)!==null&&u!==void 0?u:void 0,T=(c=t.createdAt)!==null&&c!==void 0?c:void 0,C=(l=t.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:k,emailVerified:H,isAnonymous:Ie,providerData:U,stsTokenManager:pe}=t;R(k&&pe,e,"internal-error");const Ce=wr.fromJSON(this.name,pe);R(typeof k=="string",e,"internal-error"),ct(h,e.name),ct(d,e.name),R(typeof H=="boolean",e,"internal-error"),R(typeof Ie=="boolean",e,"internal-error"),ct(f,e.name),ct(_,e.name),ct(y,e.name),ct(p,e.name),ct(T,e.name),ct(C,e.name);const L=new xt({uid:k,auth:e,email:d,emailVerified:H,displayName:h,isAnonymous:Ie,photoURL:_,phoneNumber:f,tenantId:y,stsTokenManager:Ce,createdAt:T,lastLoginAt:C});return U&&Array.isArray(U)&&(L.providerData=U.map(F=>Object.assign({},F))),p&&(L._redirectEventId=p),L}static async _fromIdTokenResponse(e,t,r=!1){const i=new wr;i.updateFromServerResponse(t);const s=new xt({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Oi(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cc=new Map;function et(n){ot(n instanceof Function,"Expected a class definition");let e=cc.get(n);return e?(ot(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,cc.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Hd.type="NONE";const lc=Hd;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ai(n,e,t){return`firebase:${n}:${e}:${t}`}class dn{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ai(this.userKey,i.apiKey,s),this.fullPersistenceKey=ai("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?xt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new dn(et(lc),e,r);const i=(await Promise.all(t.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||et(lc);const o=ai(r,e.config.apiKey,e.name);let a=null;for(const c of t)try{const l=await c._get(o);if(l){const h=xt._fromJSON(e,l);c!==s&&(a=h),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new dn(s,e,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(t.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new dn(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hc(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Kd(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(zd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Yd(e))return"Blackberry";if(Xd(e))return"Webos";if(Wa(e))return"Safari";if((e.includes("chrome/")||Gd(e))&&!e.includes("edge/"))return"Chrome";if(Qd(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function zd(n=Ee()){return/firefox\//i.test(n)}function Wa(n=Ee()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Gd(n=Ee()){return/crios\//i.test(n)}function Kd(n=Ee()){return/iemobile/i.test(n)}function Qd(n=Ee()){return/android/i.test(n)}function Yd(n=Ee()){return/blackberry/i.test(n)}function Xd(n=Ee()){return/webos/i.test(n)}function ws(n=Ee()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Xv(n=Ee()){var e;return ws(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Jv(){return im()&&document.documentMode===10}function Jd(n=Ee()){return ws(n)||Qd(n)||Xd(n)||Yd(n)||/windows phone/i.test(n)||Kd(n)}function Zv(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zd(n,e=[]){let t;switch(n){case"Browser":t=hc(Ee());break;case"Worker":t=`${hc(Ee())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Rn}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ew{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((o,a)=>{try{const u=e(s);o(u)}catch(u){a(u)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tw(n,e={}){return St(n,"GET","/v2/passwordPolicy",Pt(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nw=6;class rw{constructor(e){var t,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:nw,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,s,o,a;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(t=u.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(a=u.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),u}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iw{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new dc(this),this.idTokenSubscription=new dc(this),this.beforeStateQueue=new ew(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Fd,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=et(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await dn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return R(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Oi(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Nv()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Pe(e):null;return t&&R(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&R(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(et(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await tw(this),t=new rw(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ar("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await Yv(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&et(e)||this._popupRedirectResolver;R(t,this,"argument-error"),this.redirectPersistenceManager=await dn.create(this,[et(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(R(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(t);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return R(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Zd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&bv(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Ct(n){return Pe(n)}class dc{constructor(e){this.auth=e,this.observer=null,this.addObserver=hm(t=>this.observer=t)}get next(){return R(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sw(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function ef(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=Ke("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",sw().appendChild(r)})}function ow(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const aw="https://www.google.com/recaptcha/enterprise.js?render=",uw="recaptcha-enterprise",cw="NO_RECAPTCHA";class lw{constructor(e){this.type=uw,this.auth=Ct(e)}async verify(e="verify",t=!1){async function r(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{Fv(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new Uv(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{a(u)})})}function i(s,o,a){const u=window.grecaptcha;uc(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(cw)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!t&&uc(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}ef(aw+a).then(()=>{i(a,s,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function fc(n,e,t,r=!1){const i=new lw(n);let s;try{s=await i.verify(t)}catch{s=await i.verify(t,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function So(n,e,t,r){var i;if(!((i=n._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await fc(n,e,t,t==="getOobCode");return r(n,s)}else return r(n,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await fc(n,e,t,t==="getOobCode");return r(n,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hw(n,e){const t=Lo(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(pi(s,e??{}))return i;Ve(i,"already-initialized")}return t.initialize({options:e})}function dw(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(et);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function fw(n,e,t){const r=Ct(n);R(r._canInitEmulator,r,"emulator-config-failed"),R(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(t!=null&&t.disableWarnings),s=tf(e),{host:o,port:a}=mw(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||pw()}function tf(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function mw(n){const e=tf(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:mc(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:mc(o)}}}function mc(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function pw(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ze("not implemented")}_getIdTokenResponse(e){return Ze("not implemented")}_linkToIdToken(e,t){return Ze("not implemented")}_getReauthenticationResolver(e){return Ze("not implemented")}}async function gw(n,e){return St(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _w(n,e){return qr(n,"POST","/v1/accounts:signInWithPassword",Pt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yw(n,e){return qr(n,"POST","/v1/accounts:signInWithEmailLink",Pt(n,e))}async function vw(n,e){return qr(n,"POST","/v1/accounts:signInWithEmailLink",Pt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er extends Ha{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new Er(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Er(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return So(e,t,"signInWithPassword",_w);case"emailLink":return yw(e,{email:this._email,oobCode:this._password});default:Ve(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return So(e,r,"signUpPassword",gw);case"emailLink":return vw(e,{idToken:t,email:this._email,oobCode:this._password});default:Ve(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fn(n,e){return qr(n,"POST","/v1/accounts:signInWithIdp",Pt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ww="http://localhost";class Ht extends Ha{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ht(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ve("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=Ba(t,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Ht(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return fn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,fn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,fn(e,t)}buildRequest(){const e={requestUri:ww,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Rr(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ew(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Tw(n){const e=$n(qn(n)).link,t=e?$n(qn(e)).deep_link_id:null,r=$n(qn(n)).deep_link_id;return(r?$n(qn(r)).link:null)||r||t||e||n}class za{constructor(e){var t,r,i,s,o,a;const u=$n(qn(e)),c=(t=u.apiKey)!==null&&t!==void 0?t:null,l=(r=u.oobCode)!==null&&r!==void 0?r:null,h=Ew((i=u.mode)!==null&&i!==void 0?i:null);R(c&&l&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=l,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=u.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=Tw(e);try{return new za(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(){this.providerId=Nn.PROVIDER_ID}static credential(e,t){return Er._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=za.parseLink(t);return R(r,"argument-error"),Er._fromEmailAndCode(e,r.code,r.tenantId)}}Nn.PROVIDER_ID="password";Nn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Nn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr extends Ga{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht extends jr{constructor(){super("facebook.com")}static credential(e){return Ht._fromParams({providerId:ht.PROVIDER_ID,signInMethod:ht.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ht.credentialFromTaggedObject(e)}static credentialFromError(e){return ht.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ht.credential(e.oauthAccessToken)}catch{return null}}}ht.FACEBOOK_SIGN_IN_METHOD="facebook.com";ht.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe extends jr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ht._fromParams({providerId:Xe.PROVIDER_ID,signInMethod:Xe.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Xe.credentialFromTaggedObject(e)}static credentialFromError(e){return Xe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Xe.credential(t,r)}catch{return null}}}Xe.GOOGLE_SIGN_IN_METHOD="google.com";Xe.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt extends jr{constructor(){super("github.com")}static credential(e){return Ht._fromParams({providerId:dt.PROVIDER_ID,signInMethod:dt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return dt.credentialFromTaggedObject(e)}static credentialFromError(e){return dt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return dt.credential(e.oauthAccessToken)}catch{return null}}}dt.GITHUB_SIGN_IN_METHOD="github.com";dt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft extends jr{constructor(){super("twitter.com")}static credential(e,t){return Ht._fromParams({providerId:ft.PROVIDER_ID,signInMethod:ft.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ft.credentialFromTaggedObject(e)}static credentialFromError(e){return ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return ft.credential(t,r)}catch{return null}}}ft.TWITTER_SIGN_IN_METHOD="twitter.com";ft.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Iw(n,e){return qr(n,"POST","/v1/accounts:signUp",Pt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await xt._fromIdTokenResponse(e,r,i),o=pc(r);return new zt({user:s,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=pc(r);return new zt({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function pc(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni extends at{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ni.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new Ni(e,t,r,i)}}function nf(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ni._fromErrorAndOperation(n,s,e,r):s})}async function Aw(n,e,t=!1){const r=await vr(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return zt._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rw(n,e,t=!1){const{auth:r}=n,i="reauthenticate";try{const s=await vr(n,nf(r,i,e,n),t);R(s.idToken,r,"internal-error");const o=ja(s.idToken);R(o,r,"internal-error");const{sub:a}=o;return R(n.uid===a,r,"user-mismatch"),zt._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Ve(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rf(n,e,t=!1){const r="signIn",i=await nf(n,r,e),s=await zt._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}async function Pw(n,e){return rf(Ct(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sf(n){const e=Ct(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Sw(n,e,t){const r=Ct(n),o=await So(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Iw).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&sf(n),u}),a=await zt._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function Cw(n,e,t){return Pw(Pe(n),Nn.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&sf(n),r})}function bw(n,e,t,r){return Pe(n).onIdTokenChanged(e,t,r)}function kw(n,e,t){return Pe(n).beforeAuthStateChanged(e,t)}function Dw(n,e,t,r){return Pe(n).onAuthStateChanged(e,t,r)}const Vi="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Vi,"1"),this.storage.removeItem(Vi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ow(){const n=Ee();return Wa(n)||ws(n)}const Nw=1e3,Vw=10;class af extends of{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Ow()&&Zv(),this.fallbackToPolling=Jd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}const i=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Jv()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Vw):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Nw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}af.type="LOCAL";const Mw=af;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf extends of{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}uf.type="SESSION";const cf=uf;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lw(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new Es(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(t.origin,s)),u=await Lw(a);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Es.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ka(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xw{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const c=Ka("",20);i.port1.start();const l=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(l),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(l),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(){return window}function Uw(n){Qe().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lf(){return typeof Qe().WorkerGlobalScope<"u"&&typeof Qe().importScripts=="function"}async function Fw(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Bw(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function $w(){return lf()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hf="firebaseLocalStorageDb",qw=1,Mi="firebaseLocalStorage",df="fbase_key";class Wr{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ts(n,e){return n.transaction([Mi],e?"readwrite":"readonly").objectStore(Mi)}function jw(){const n=indexedDB.deleteDatabase(hf);return new Wr(n).toPromise()}function Co(){const n=indexedDB.open(hf,qw);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Mi,{keyPath:df})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Mi)?e(r):(r.close(),await jw(),e(await Co()))})})}async function gc(n,e,t){const r=Ts(n,!0).put({[df]:e,value:t});return new Wr(r).toPromise()}async function Ww(n,e){const t=Ts(n,!1).get(e),r=await new Wr(t).toPromise();return r===void 0?null:r.value}function _c(n,e){const t=Ts(n,!0).delete(e);return new Wr(t).toPromise()}const Hw=800,zw=3;class ff{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Co(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>zw)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return lf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Es._getInstance($w()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Fw(),!this.activeServiceWorker)return;this.sender=new xw(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Bw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Co();return await gc(e,Vi,"1"),await _c(e,Vi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>gc(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Ww(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>_c(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Ts(i,!1).getAll();return new Wr(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Hw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ff.type="LOCAL";const Gw=ff;new $r(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mf(n,e){return e?et(e):(R(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa extends Ha{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return fn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return fn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return fn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Kw(n){return rf(n.auth,new Qa(n),n.bypassAuthState)}function Qw(n){const{auth:e,user:t}=n;return R(t,e,"internal-error"),Rw(t,new Qa(n),n.bypassAuthState)}async function Yw(n){const{auth:e,user:t}=n;return R(t,e,"internal-error"),Aw(t,new Qa(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Kw;case"linkViaPopup":case"linkViaRedirect":return Yw;case"reauthViaPopup":case"reauthViaRedirect":return Qw;default:Ve(this.auth,"internal-error")}}resolve(e){ot(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ot(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xw=new $r(2e3,1e4);async function Jw(n,e,t){const r=Ct(n);kv(n,e,Ga);const i=mf(r,t);return new Vt(r,"signInViaPopup",e,i).executeNotNull()}class Vt extends pf{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Vt.currentPopupAction&&Vt.currentPopupAction.cancel(),Vt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return R(e,this.auth,"internal-error"),e}async onExecution(){ot(this.filter.length===1,"Popup operations only handle one event");const e=Ka();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ke(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ke(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Vt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ke(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Xw.get())};e()}}Vt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zw="pendingRedirect",ui=new Map;class eE extends pf{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=ui.get(this.auth._key());if(!e){try{const r=await tE(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}ui.set(this.auth._key(),e)}return this.bypassAuthState||ui.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function tE(n,e){const t=iE(e),r=rE(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function nE(n,e){ui.set(n._key(),e)}function rE(n){return et(n._redirectPersistence)}function iE(n){return ai(Zw,n.config.apiKey,n.name)}async function sE(n,e,t=!1){const r=Ct(n),i=mf(r,e),o=await new eE(r,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oE=10*60*1e3;class aE{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!uE(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!gf(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Ke(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=oE&&this.cachedEventUids.clear(),this.cachedEventUids.has(yc(e))}saveEventToCache(e){this.cachedEventUids.add(yc(e)),this.lastProcessedEventTime=Date.now()}}function yc(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function gf({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function uE(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return gf(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cE(n,e={}){return St(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,hE=/^https?/;async function dE(n){if(n.config.emulator)return;const{authorizedDomains:e}=await cE(n);for(const t of e)try{if(fE(t))return}catch{}Ve(n,"unauthorized-domain")}function fE(n){const e=Po(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!hE.test(t))return!1;if(lE.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mE=new $r(3e4,6e4);function vc(){const n=Qe().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function pE(n){return new Promise((e,t)=>{var r,i,s;function o(){vc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{vc(),t(Ke(n,"network-request-failed"))},timeout:mE.get()})}if(!((i=(r=Qe().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Qe().gapi)===null||s===void 0)&&s.load)o();else{const a=ow("iframefcb");return Qe()[a]=()=>{gapi.load?o():t(Ke(n,"network-request-failed"))},ef(`https://apis.google.com/js/api.js?onload=${a}`).catch(u=>t(u))}}).catch(e=>{throw ci=null,e})}let ci=null;function gE(n){return ci=ci||pE(n),ci}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _E=new $r(5e3,15e3),yE="__/auth/iframe",vE="emulator/auth/iframe",wE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},EE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function TE(n){const e=n.config;R(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?qa(e,vE):`https://${n.config.authDomain}/${yE}`,r={apiKey:e.apiKey,appName:n.name,v:Rn},i=EE.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${Rr(r).slice(1)}`}async function IE(n){const e=await gE(n),t=Qe().gapi;return R(t,n,"internal-error"),e.open({where:document.body,url:TE(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:wE,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Ke(n,"network-request-failed"),a=Qe().setTimeout(()=>{s(o)},_E.get());function u(){Qe().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},RE=500,PE=600,SE="_blank",CE="http://localhost";class wc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function bE(n,e,t,r=RE,i=PE){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},AE),{width:r.toString(),height:i.toString(),top:s,left:o}),c=Ee().toLowerCase();t&&(a=Gd(c)?SE:t),zd(c)&&(e=e||CE,u.scrollbars="yes");const l=Object.entries(u).reduce((d,[f,_])=>`${d}${f}=${_},`,"");if(Xv(c)&&a!=="_self")return kE(e||"",a),new wc(null);const h=window.open(e||"",a,l);R(h,n,"popup-blocked");try{h.focus()}catch{}return new wc(h)}function kE(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DE="__/auth/handler",OE="emulator/auth/handler",NE=encodeURIComponent("fac");async function Ec(n,e,t,r,i,s){R(n.config.authDomain,n,"auth-domain-config-required"),R(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Rn,eventId:i};if(e instanceof Ga){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",lm(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,h]of Object.entries(s||{}))o[l]=h}if(e instanceof jr){const l=e.getScopes().filter(h=>h!=="");l.length>0&&(o.scopes=l.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];const u=await n._getAppCheckToken(),c=u?`#${NE}=${encodeURIComponent(u)}`:"";return`${VE(n)}?${Rr(a).slice(1)}${c}`}function VE({config:n}){return n.emulator?qa(n,OE):`https://${n.authDomain}/${DE}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ws="webStorageSupport";class ME{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=cf,this._completeRedirectFn=sE,this._overrideRedirectResult=nE}async _openPopup(e,t,r,i){var s;ot((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Ec(e,t,r,Po(),i);return bE(e,o,Ka())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await Ec(e,t,r,Po(),i);return Uw(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(ot(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await IE(e),r=new aE(e);return t.register("authEvent",i=>(R(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ws,{type:Ws},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Ws];o!==void 0&&t(!!o),Ve(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=dE(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Jd()||Wa()||ws()}}const LE=ME;var Tc="@firebase/auth",Ic="1.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xE{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){R(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UE(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function FE(n){gn(new Ft("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;R(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Zd(n)},c=new iw(r,i,s,u);return dw(c,t),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),gn(new Ft("auth-internal",e=>{const t=Ct(e.getProvider("auth").getImmediate());return(r=>new xE(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),yt(Tc,Ic,UE(n)),yt(Tc,Ic,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BE=5*60,$E=cl("authIdTokenMaxAge")||BE;let Ac=null;const qE=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>$E)return;const i=t==null?void 0:t.token;Ac!==i&&(Ac=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function jE(n=fl()){const e=Lo(n,"auth");if(e.isInitialized())return e.getImmediate();const t=hw(n,{popupRedirectResolver:LE,persistence:[Gw,Mw,cf]}),r=cl("authTokenSyncURL");if(r){const s=qE(r);kw(t,s,()=>s(t.currentUser)),bw(t,o=>s(o))}const i=al("auth");return i&&fw(t,`http://${i}`),t}FE("Browser");const WE={apiKey:"AIzaSyCldh53pXf3OCZPpDuZYMZkoVP7T9yMfoM",authDomain:"members-only-2.firebaseapp.com",projectId:"members-only-2",storageBucket:"members-only-2.appspot.com",messagingSenderId:"92995088639",appId:"1:92995088639:web:5ca7b4095b2fb2fed99cca",measurementId:"G-NFF9ERM3SD"},_f=dl(WE),mn=vd(_f),Vn=jE(_f),HE=new Xe;function zE(){return Jw(Vn,HE)}function GE(n,e){return Sw(Vn,n,e)}function KE(){return Vn.signOut()}async function QE(n){const e=Ro(mn,"users"),t=kd(e,vv("username","==",n)),r=await Iv(t);return r.empty?null:r.docs[0].data().email}async function Rc(n,e){let t=n;if(!n.includes("@")){const r=await QE(n);if(!r)throw new Error("User not found");t=r}return Cw(Vn,t,e)}async function Pc(n,e,t=null){const r=gs(mn,"users",n),i={username:e};t&&(i.email=t),await Av(r,i)}function Li(n){"@babel/helpers - typeof";return Li=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Li(n)}function Gt(n){if(n===null||n===!0||n===!1)return NaN;var e=Number(n);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function ue(n,e){if(e.length<n)throw new TypeError(n+" argument"+(n>1?"s":"")+" required, but only "+e.length+" present")}function Be(n){ue(1,arguments);var e=Object.prototype.toString.call(n);return n instanceof Date||Li(n)==="object"&&e==="[object Date]"?new Date(n.getTime()):typeof n=="number"||e==="[object Number]"?new Date(n):((typeof n=="string"||e==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function YE(n,e){ue(2,arguments);var t=Be(n).getTime(),r=Gt(e);return new Date(t+r)}var XE={};function Is(){return XE}function JE(n){var e=new Date(Date.UTC(n.getFullYear(),n.getMonth(),n.getDate(),n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds()));return e.setUTCFullYear(n.getFullYear()),n.getTime()-e.getTime()}function Sc(n){ue(1,arguments);var e=Be(n);return e.setHours(0,0,0,0),e}function yf(n,e){ue(2,arguments);var t=Sc(n),r=Sc(e);return t.getTime()===r.getTime()}function ZE(n){return ue(1,arguments),n instanceof Date||Li(n)==="object"&&Object.prototype.toString.call(n)==="[object Date]"}function vf(n){if(ue(1,arguments),!ZE(n)&&typeof n!="number")return!1;var e=Be(n);return!isNaN(Number(e))}function eT(n,e){ue(2,arguments);var t=Gt(e);return YE(n,-t)}var tT=864e5;function nT(n){ue(1,arguments);var e=Be(n),t=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var r=e.getTime(),i=t-r;return Math.floor(i/tT)+1}function xi(n){ue(1,arguments);var e=1,t=Be(n),r=t.getUTCDay(),i=(r<e?7:0)+r-e;return t.setUTCDate(t.getUTCDate()-i),t.setUTCHours(0,0,0,0),t}function wf(n){ue(1,arguments);var e=Be(n),t=e.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(t+1,0,4),r.setUTCHours(0,0,0,0);var i=xi(r),s=new Date(0);s.setUTCFullYear(t,0,4),s.setUTCHours(0,0,0,0);var o=xi(s);return e.getTime()>=i.getTime()?t+1:e.getTime()>=o.getTime()?t:t-1}function rT(n){ue(1,arguments);var e=wf(n),t=new Date(0);t.setUTCFullYear(e,0,4),t.setUTCHours(0,0,0,0);var r=xi(t);return r}var iT=6048e5;function sT(n){ue(1,arguments);var e=Be(n),t=xi(e).getTime()-rT(e).getTime();return Math.round(t/iT)+1}function Ui(n,e){var t,r,i,s,o,a,u,c;ue(1,arguments);var l=Is(),h=Gt((t=(r=(i=(s=e==null?void 0:e.weekStartsOn)!==null&&s!==void 0?s:e==null||(o=e.locale)===null||o===void 0||(a=o.options)===null||a===void 0?void 0:a.weekStartsOn)!==null&&i!==void 0?i:l.weekStartsOn)!==null&&r!==void 0?r:(u=l.locale)===null||u===void 0||(c=u.options)===null||c===void 0?void 0:c.weekStartsOn)!==null&&t!==void 0?t:0);if(!(h>=0&&h<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var d=Be(n),f=d.getUTCDay(),_=(f<h?7:0)+f-h;return d.setUTCDate(d.getUTCDate()-_),d.setUTCHours(0,0,0,0),d}function Ef(n,e){var t,r,i,s,o,a,u,c;ue(1,arguments);var l=Be(n),h=l.getUTCFullYear(),d=Is(),f=Gt((t=(r=(i=(s=e==null?void 0:e.firstWeekContainsDate)!==null&&s!==void 0?s:e==null||(o=e.locale)===null||o===void 0||(a=o.options)===null||a===void 0?void 0:a.firstWeekContainsDate)!==null&&i!==void 0?i:d.firstWeekContainsDate)!==null&&r!==void 0?r:(u=d.locale)===null||u===void 0||(c=u.options)===null||c===void 0?void 0:c.firstWeekContainsDate)!==null&&t!==void 0?t:1);if(!(f>=1&&f<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var _=new Date(0);_.setUTCFullYear(h+1,0,f),_.setUTCHours(0,0,0,0);var y=Ui(_,e),p=new Date(0);p.setUTCFullYear(h,0,f),p.setUTCHours(0,0,0,0);var T=Ui(p,e);return l.getTime()>=y.getTime()?h+1:l.getTime()>=T.getTime()?h:h-1}function oT(n,e){var t,r,i,s,o,a,u,c;ue(1,arguments);var l=Is(),h=Gt((t=(r=(i=(s=e==null?void 0:e.firstWeekContainsDate)!==null&&s!==void 0?s:e==null||(o=e.locale)===null||o===void 0||(a=o.options)===null||a===void 0?void 0:a.firstWeekContainsDate)!==null&&i!==void 0?i:l.firstWeekContainsDate)!==null&&r!==void 0?r:(u=l.locale)===null||u===void 0||(c=u.options)===null||c===void 0?void 0:c.firstWeekContainsDate)!==null&&t!==void 0?t:1),d=Ef(n,e),f=new Date(0);f.setUTCFullYear(d,0,h),f.setUTCHours(0,0,0,0);var _=Ui(f,e);return _}var aT=6048e5;function uT(n,e){ue(1,arguments);var t=Be(n),r=Ui(t,e).getTime()-oT(t,e).getTime();return Math.round(r/aT)+1}function q(n,e){for(var t=n<0?"-":"",r=Math.abs(n).toString();r.length<e;)r="0"+r;return t+r}var cT={y:function(e,t){var r=e.getUTCFullYear(),i=r>0?r:1-r;return q(t==="yy"?i%100:i,t.length)},M:function(e,t){var r=e.getUTCMonth();return t==="M"?String(r+1):q(r+1,2)},d:function(e,t){return q(e.getUTCDate(),t.length)},a:function(e,t){var r=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return r.toUpperCase();case"aaa":return r;case"aaaaa":return r[0];case"aaaa":default:return r==="am"?"a.m.":"p.m."}},h:function(e,t){return q(e.getUTCHours()%12||12,t.length)},H:function(e,t){return q(e.getUTCHours(),t.length)},m:function(e,t){return q(e.getUTCMinutes(),t.length)},s:function(e,t){return q(e.getUTCSeconds(),t.length)},S:function(e,t){var r=t.length,i=e.getUTCMilliseconds(),s=Math.floor(i*Math.pow(10,r-3));return q(s,t.length)}};const lt=cT;var Zt={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},lT={G:function(e,t,r){var i=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return r.era(i,{width:"abbreviated"});case"GGGGG":return r.era(i,{width:"narrow"});case"GGGG":default:return r.era(i,{width:"wide"})}},y:function(e,t,r){if(t==="yo"){var i=e.getUTCFullYear(),s=i>0?i:1-i;return r.ordinalNumber(s,{unit:"year"})}return lt.y(e,t)},Y:function(e,t,r,i){var s=Ef(e,i),o=s>0?s:1-s;if(t==="YY"){var a=o%100;return q(a,2)}return t==="Yo"?r.ordinalNumber(o,{unit:"year"}):q(o,t.length)},R:function(e,t){var r=wf(e);return q(r,t.length)},u:function(e,t){var r=e.getUTCFullYear();return q(r,t.length)},Q:function(e,t,r){var i=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(i);case"QQ":return q(i,2);case"Qo":return r.ordinalNumber(i,{unit:"quarter"});case"QQQ":return r.quarter(i,{width:"abbreviated",context:"formatting"});case"QQQQQ":return r.quarter(i,{width:"narrow",context:"formatting"});case"QQQQ":default:return r.quarter(i,{width:"wide",context:"formatting"})}},q:function(e,t,r){var i=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(i);case"qq":return q(i,2);case"qo":return r.ordinalNumber(i,{unit:"quarter"});case"qqq":return r.quarter(i,{width:"abbreviated",context:"standalone"});case"qqqqq":return r.quarter(i,{width:"narrow",context:"standalone"});case"qqqq":default:return r.quarter(i,{width:"wide",context:"standalone"})}},M:function(e,t,r){var i=e.getUTCMonth();switch(t){case"M":case"MM":return lt.M(e,t);case"Mo":return r.ordinalNumber(i+1,{unit:"month"});case"MMM":return r.month(i,{width:"abbreviated",context:"formatting"});case"MMMMM":return r.month(i,{width:"narrow",context:"formatting"});case"MMMM":default:return r.month(i,{width:"wide",context:"formatting"})}},L:function(e,t,r){var i=e.getUTCMonth();switch(t){case"L":return String(i+1);case"LL":return q(i+1,2);case"Lo":return r.ordinalNumber(i+1,{unit:"month"});case"LLL":return r.month(i,{width:"abbreviated",context:"standalone"});case"LLLLL":return r.month(i,{width:"narrow",context:"standalone"});case"LLLL":default:return r.month(i,{width:"wide",context:"standalone"})}},w:function(e,t,r,i){var s=uT(e,i);return t==="wo"?r.ordinalNumber(s,{unit:"week"}):q(s,t.length)},I:function(e,t,r){var i=sT(e);return t==="Io"?r.ordinalNumber(i,{unit:"week"}):q(i,t.length)},d:function(e,t,r){return t==="do"?r.ordinalNumber(e.getUTCDate(),{unit:"date"}):lt.d(e,t)},D:function(e,t,r){var i=nT(e);return t==="Do"?r.ordinalNumber(i,{unit:"dayOfYear"}):q(i,t.length)},E:function(e,t,r){var i=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return r.day(i,{width:"abbreviated",context:"formatting"});case"EEEEE":return r.day(i,{width:"narrow",context:"formatting"});case"EEEEEE":return r.day(i,{width:"short",context:"formatting"});case"EEEE":default:return r.day(i,{width:"wide",context:"formatting"})}},e:function(e,t,r,i){var s=e.getUTCDay(),o=(s-i.weekStartsOn+8)%7||7;switch(t){case"e":return String(o);case"ee":return q(o,2);case"eo":return r.ordinalNumber(o,{unit:"day"});case"eee":return r.day(s,{width:"abbreviated",context:"formatting"});case"eeeee":return r.day(s,{width:"narrow",context:"formatting"});case"eeeeee":return r.day(s,{width:"short",context:"formatting"});case"eeee":default:return r.day(s,{width:"wide",context:"formatting"})}},c:function(e,t,r,i){var s=e.getUTCDay(),o=(s-i.weekStartsOn+8)%7||7;switch(t){case"c":return String(o);case"cc":return q(o,t.length);case"co":return r.ordinalNumber(o,{unit:"day"});case"ccc":return r.day(s,{width:"abbreviated",context:"standalone"});case"ccccc":return r.day(s,{width:"narrow",context:"standalone"});case"cccccc":return r.day(s,{width:"short",context:"standalone"});case"cccc":default:return r.day(s,{width:"wide",context:"standalone"})}},i:function(e,t,r){var i=e.getUTCDay(),s=i===0?7:i;switch(t){case"i":return String(s);case"ii":return q(s,t.length);case"io":return r.ordinalNumber(s,{unit:"day"});case"iii":return r.day(i,{width:"abbreviated",context:"formatting"});case"iiiii":return r.day(i,{width:"narrow",context:"formatting"});case"iiiiii":return r.day(i,{width:"short",context:"formatting"});case"iiii":default:return r.day(i,{width:"wide",context:"formatting"})}},a:function(e,t,r){var i=e.getUTCHours(),s=i/12>=1?"pm":"am";switch(t){case"a":case"aa":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"aaa":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return r.dayPeriod(s,{width:"narrow",context:"formatting"});case"aaaa":default:return r.dayPeriod(s,{width:"wide",context:"formatting"})}},b:function(e,t,r){var i=e.getUTCHours(),s;switch(i===12?s=Zt.noon:i===0?s=Zt.midnight:s=i/12>=1?"pm":"am",t){case"b":case"bb":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"bbb":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return r.dayPeriod(s,{width:"narrow",context:"formatting"});case"bbbb":default:return r.dayPeriod(s,{width:"wide",context:"formatting"})}},B:function(e,t,r){var i=e.getUTCHours(),s;switch(i>=17?s=Zt.evening:i>=12?s=Zt.afternoon:i>=4?s=Zt.morning:s=Zt.night,t){case"B":case"BB":case"BBB":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"BBBBB":return r.dayPeriod(s,{width:"narrow",context:"formatting"});case"BBBB":default:return r.dayPeriod(s,{width:"wide",context:"formatting"})}},h:function(e,t,r){if(t==="ho"){var i=e.getUTCHours()%12;return i===0&&(i=12),r.ordinalNumber(i,{unit:"hour"})}return lt.h(e,t)},H:function(e,t,r){return t==="Ho"?r.ordinalNumber(e.getUTCHours(),{unit:"hour"}):lt.H(e,t)},K:function(e,t,r){var i=e.getUTCHours()%12;return t==="Ko"?r.ordinalNumber(i,{unit:"hour"}):q(i,t.length)},k:function(e,t,r){var i=e.getUTCHours();return i===0&&(i=24),t==="ko"?r.ordinalNumber(i,{unit:"hour"}):q(i,t.length)},m:function(e,t,r){return t==="mo"?r.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):lt.m(e,t)},s:function(e,t,r){return t==="so"?r.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):lt.s(e,t)},S:function(e,t){return lt.S(e,t)},X:function(e,t,r,i){var s=i._originalDate||e,o=s.getTimezoneOffset();if(o===0)return"Z";switch(t){case"X":return bc(o);case"XXXX":case"XX":return kt(o);case"XXXXX":case"XXX":default:return kt(o,":")}},x:function(e,t,r,i){var s=i._originalDate||e,o=s.getTimezoneOffset();switch(t){case"x":return bc(o);case"xxxx":case"xx":return kt(o);case"xxxxx":case"xxx":default:return kt(o,":")}},O:function(e,t,r,i){var s=i._originalDate||e,o=s.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+Cc(o,":");case"OOOO":default:return"GMT"+kt(o,":")}},z:function(e,t,r,i){var s=i._originalDate||e,o=s.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+Cc(o,":");case"zzzz":default:return"GMT"+kt(o,":")}},t:function(e,t,r,i){var s=i._originalDate||e,o=Math.floor(s.getTime()/1e3);return q(o,t.length)},T:function(e,t,r,i){var s=i._originalDate||e,o=s.getTime();return q(o,t.length)}};function Cc(n,e){var t=n>0?"-":"+",r=Math.abs(n),i=Math.floor(r/60),s=r%60;if(s===0)return t+String(i);var o=e||"";return t+String(i)+o+q(s,2)}function bc(n,e){if(n%60===0){var t=n>0?"-":"+";return t+q(Math.abs(n)/60,2)}return kt(n,e)}function kt(n,e){var t=e||"",r=n>0?"-":"+",i=Math.abs(n),s=q(Math.floor(i/60),2),o=q(i%60,2);return r+s+t+o}const hT=lT;var kc=function(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}},Tf=function(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}},dT=function(e,t){var r=e.match(/(P+)(p+)?/)||[],i=r[1],s=r[2];if(!s)return kc(e,t);var o;switch(i){case"P":o=t.dateTime({width:"short"});break;case"PP":o=t.dateTime({width:"medium"});break;case"PPP":o=t.dateTime({width:"long"});break;case"PPPP":default:o=t.dateTime({width:"full"});break}return o.replace("{{date}}",kc(i,t)).replace("{{time}}",Tf(s,t))},fT={p:Tf,P:dT};const mT=fT;var pT=["D","DD"],gT=["YY","YYYY"];function _T(n){return pT.indexOf(n)!==-1}function yT(n){return gT.indexOf(n)!==-1}function Dc(n,e,t){if(n==="YYYY")throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(t,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(n==="YY")throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(t,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(n==="D")throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(t,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(n==="DD")throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(t,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var vT={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},wT=function(e,t,r){var i,s=vT[e];return typeof s=="string"?i=s:t===1?i=s.one:i=s.other.replace("{{count}}",t.toString()),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"in "+i:i+" ago":i};const ET=wT;function Hs(n){return function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.width?String(e.width):n.defaultWidth,r=n.formats[t]||n.formats[n.defaultWidth];return r}}var TT={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},IT={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},AT={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},RT={date:Hs({formats:TT,defaultWidth:"full"}),time:Hs({formats:IT,defaultWidth:"full"}),dateTime:Hs({formats:AT,defaultWidth:"full"})};const PT=RT;var ST={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},CT=function(e,t,r,i){return ST[e]};const bT=CT;function Fn(n){return function(e,t){var r=t!=null&&t.context?String(t.context):"standalone",i;if(r==="formatting"&&n.formattingValues){var s=n.defaultFormattingWidth||n.defaultWidth,o=t!=null&&t.width?String(t.width):s;i=n.formattingValues[o]||n.formattingValues[s]}else{var a=n.defaultWidth,u=t!=null&&t.width?String(t.width):n.defaultWidth;i=n.values[u]||n.values[a]}var c=n.argumentCallback?n.argumentCallback(e):e;return i[c]}}var kT={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},DT={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},OT={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},NT={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},VT={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},MT={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},LT=function(e,t){var r=Number(e),i=r%100;if(i>20||i<10)switch(i%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}return r+"th"},xT={ordinalNumber:LT,era:Fn({values:kT,defaultWidth:"wide"}),quarter:Fn({values:DT,defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:Fn({values:OT,defaultWidth:"wide"}),day:Fn({values:NT,defaultWidth:"wide"}),dayPeriod:Fn({values:VT,defaultWidth:"wide",formattingValues:MT,defaultFormattingWidth:"wide"})};const UT=xT;function Bn(n){return function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=t.width,i=r&&n.matchPatterns[r]||n.matchPatterns[n.defaultMatchWidth],s=e.match(i);if(!s)return null;var o=s[0],a=r&&n.parsePatterns[r]||n.parsePatterns[n.defaultParseWidth],u=Array.isArray(a)?BT(a,function(h){return h.test(o)}):FT(a,function(h){return h.test(o)}),c;c=n.valueCallback?n.valueCallback(u):u,c=t.valueCallback?t.valueCallback(c):c;var l=e.slice(o.length);return{value:c,rest:l}}}function FT(n,e){for(var t in n)if(n.hasOwnProperty(t)&&e(n[t]))return t}function BT(n,e){for(var t=0;t<n.length;t++)if(e(n[t]))return t}function $T(n){return function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.match(n.matchPattern);if(!r)return null;var i=r[0],s=e.match(n.parsePattern);if(!s)return null;var o=n.valueCallback?n.valueCallback(s[0]):s[0];o=t.valueCallback?t.valueCallback(o):o;var a=e.slice(i.length);return{value:o,rest:a}}}var qT=/^(\d+)(th|st|nd|rd)?/i,jT=/\d+/i,WT={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},HT={any:[/^b/i,/^(a|c)/i]},zT={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},GT={any:[/1/i,/2/i,/3/i,/4/i]},KT={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},QT={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},YT={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},XT={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},JT={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},ZT={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},eI={ordinalNumber:$T({matchPattern:qT,parsePattern:jT,valueCallback:function(e){return parseInt(e,10)}}),era:Bn({matchPatterns:WT,defaultMatchWidth:"wide",parsePatterns:HT,defaultParseWidth:"any"}),quarter:Bn({matchPatterns:zT,defaultMatchWidth:"wide",parsePatterns:GT,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:Bn({matchPatterns:KT,defaultMatchWidth:"wide",parsePatterns:QT,defaultParseWidth:"any"}),day:Bn({matchPatterns:YT,defaultMatchWidth:"wide",parsePatterns:XT,defaultParseWidth:"any"}),dayPeriod:Bn({matchPatterns:JT,defaultMatchWidth:"any",parsePatterns:ZT,defaultParseWidth:"any"})};const tI=eI;var nI={code:"en-US",formatDistance:ET,formatLong:PT,formatRelative:bT,localize:UT,match:tI,options:{weekStartsOn:0,firstWeekContainsDate:1}};const rI=nI;var iI=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,sI=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,oI=/^'([^]*?)'?$/,aI=/''/g,uI=/[a-zA-Z]/;function bo(n,e,t){var r,i,s,o,a,u,c,l,h,d,f,_,y,p,T,C,k,H;ue(2,arguments);var Ie=String(e),U=Is(),pe=(r=(i=t==null?void 0:t.locale)!==null&&i!==void 0?i:U.locale)!==null&&r!==void 0?r:rI,Ce=Gt((s=(o=(a=(u=t==null?void 0:t.firstWeekContainsDate)!==null&&u!==void 0?u:t==null||(c=t.locale)===null||c===void 0||(l=c.options)===null||l===void 0?void 0:l.firstWeekContainsDate)!==null&&a!==void 0?a:U.firstWeekContainsDate)!==null&&o!==void 0?o:(h=U.locale)===null||h===void 0||(d=h.options)===null||d===void 0?void 0:d.firstWeekContainsDate)!==null&&s!==void 0?s:1);if(!(Ce>=1&&Ce<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var L=Gt((f=(_=(y=(p=t==null?void 0:t.weekStartsOn)!==null&&p!==void 0?p:t==null||(T=t.locale)===null||T===void 0||(C=T.options)===null||C===void 0?void 0:C.weekStartsOn)!==null&&y!==void 0?y:U.weekStartsOn)!==null&&_!==void 0?_:(k=U.locale)===null||k===void 0||(H=k.options)===null||H===void 0?void 0:H.weekStartsOn)!==null&&f!==void 0?f:0);if(!(L>=0&&L<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!pe.localize)throw new RangeError("locale must contain localize property");if(!pe.formatLong)throw new RangeError("locale must contain formatLong property");var F=Be(n);if(!vf(F))throw new RangeError("Invalid time value");var re=JE(F),te=eT(F,re),De={firstWeekContainsDate:Ce,weekStartsOn:L,locale:pe,_originalDate:F},If=Ie.match(sI).map(function(be){var ut=be[0];if(ut==="p"||ut==="P"){var Hr=mT[ut];return Hr(be,pe.formatLong)}return be}).join("").match(iI).map(function(be){if(be==="''")return"'";var ut=be[0];if(ut==="'")return cI(be);var Hr=hT[ut];if(Hr)return!(t!=null&&t.useAdditionalWeekYearTokens)&&yT(be)&&Dc(be,e,String(n)),!(t!=null&&t.useAdditionalDayOfYearTokens)&&_T(be)&&Dc(be,e,String(n)),Hr(te,be,pe.localize,De);if(ut.match(uI))throw new RangeError("Format string contains an unescaped latin alphabet character `"+ut+"`");return be}).join("");return If}function cI(n){var e=n.match(oI);return e?e[1].replace(aI,"'"):n}function lI(n){return ue(1,arguments),yf(n,Date.now())}function Oc(n){let e,t=n[0].author+"",r,i,s,o=n[2](n[0].timestamp)+"",a;return{c(){e=N("div"),r=nt(t),i=X(),s=N("span"),a=nt(o),I(s,"class","text-gray-500 text-sm normal-case mx-1"),I(e,"class","font-semibold")},m(u,c){j(u,e,c),O(e,r),O(e,i),O(e,s),O(s,a)},p(u,c){c&1&&t!==(t=u[0].author+"")&&pn(r,t),c&1&&o!==(o=u[2](u[0].timestamp)+"")&&pn(a,o)},d(u){u&&$(e)}}}function hI(n){let e,t,r,i=n[0].text+"",s,o=!n[1]&&Oc(n);return{c(){e=N("div"),o&&o.c(),t=X(),r=N("p"),s=nt(i),I(e,"class","p-4 my-2 bg-gray-800 rounded shadow")},m(a,u){j(a,e,u),o&&o.m(e,null),O(e,t),O(e,r),O(r,s)},p(a,[u]){a[1]?o&&(o.d(1),o=null):o?o.p(a,u):(o=Oc(a),o.c(),o.m(e,t)),u&1&&i!==(i=a[0].text+"")&&pn(s,i)},i:de,o:de,d(a){a&&$(e),o&&o.d()}}}function dI(n,e,t){let{message:r}=e,{hideAuthor:i}=e;function s(o){if(!o)return"Sending...";try{const a=o.toDate?o.toDate():new Date(o);return`${lI(a)?"Today":bo(a,"MM/dd/yyyy")} at ${bo(a,"h:mma").toLowerCase()}`}catch(a){return console.error("Invalid timestamp:",a),""}}return n.$$set=o=>{"message"in o&&t(0,r=o.message),"hideAuthor"in o&&t(1,i=o.hideAuthor)},[r,i,s]}class fI extends qi{constructor(e){super(),$i(this,e,dI,hI,Ir,{message:0,hideAuthor:1})}}function Nc(n,e,t){const r=n.slice();return r[14]=e[t],r[16]=t,r}function Vc(n){let e,t=n[6](n[14].timestamp)+"",r;return{c(){e=N("div"),r=nt(t),I(e,"class","text-center text-gray-400 my-2")},m(i,s){j(i,e,s),O(e,r)},p(i,s){s&1&&t!==(t=i[6](i[14].timestamp)+"")&&pn(r,t)},d(i){i&&$(e)}}}function Mc(n){let e=n[7](n[14],n[16]),t,r,i,s=e&&Vc(n);return r=new fI({props:{message:n[14],hideAuthor:!n[3]}}),{c(){s&&s.c(),t=X(),Oo(r.$$.fragment)},m(o,a){s&&s.m(o,a),j(o,t,a),Fi(r,o,a),i=!0},p(o,a){a&1&&(e=o[7](o[14],o[16])),e?s?s.p(o,a):(s=Vc(o),s.c(),s.m(t.parentNode,t)):s&&(s.d(1),s=null);const u={};a&1&&(u.message=o[14]),a&8&&(u.hideAuthor=!o[3]),r.$set(u)},i(o){i||(qe(r.$$.fragment,o),i=!0)},o(o){Mt(r.$$.fragment,o),i=!1},d(o){o&&$(t),s&&s.d(o),Bi(r,o)}}}function Lc(n){let e,t,r,i,s,o;return{c(){e=N("div"),t=N("input"),r=X(),i=N("button"),i.textContent="Send",I(t,"class","flex-grow p-2 bg-gray-800 border border-gray-700 rounded"),I(t,"type","text"),I(t,"placeholder","Type a message..."),I(i,"class","ml-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"),I(e,"class","flex p-4 border-t border-gray-800")},m(a,u){j(a,e,u),O(e,t),Se(t,n[1]),O(e,r),O(e,i),s||(o=[se(t,"input",n[9]),se(t,"keydown",n[5]),se(i,"click",n[4])],s=!0)},p(a,u){u&2&&t.value!==a[1]&&Se(t,a[1])},d(a){a&&$(e),s=!1,Fe(o)}}}function mI(n){let e,t,r,i,s=eu(n[0]),o=[];for(let c=0;c<s.length;c+=1)o[c]=Mc(Nc(n,s,c));const a=c=>Mt(o[c],1,1,()=>{o[c]=null});let u=n[3]&&Lc(n);return{c(){e=N("div"),t=N("div");for(let c=0;c<o.length;c+=1)o[c].c();r=X(),u&&u.c(),I(t,"class","flex-1 overflow-y-auto p-4 max-w-2xl w-full mx-auto"),I(e,"class","flex flex-col h-full")},m(c,l){j(c,e,l),O(e,t);for(let h=0;h<o.length;h+=1)o[h]&&o[h].m(t,null);n[8](t),O(e,r),u&&u.m(e,null),i=!0},p(c,[l]){if(l&201){s=eu(c[0]);let h;for(h=0;h<s.length;h+=1){const d=Nc(c,s,h);o[h]?(o[h].p(d,l),qe(o[h],1)):(o[h]=Mc(d),o[h].c(),qe(o[h],1),o[h].m(t,null))}for(tl(),h=s.length;h<o.length;h+=1)a(h);nl()}c[3]?u?u.p(c,l):(u=Lc(c),u.c(),u.m(e,null)):u&&(u.d(1),u=null)},i(c){if(!i){for(let l=0;l<s.length;l+=1)qe(o[l]);i=!0}},o(c){o=o.filter(Boolean);for(let l=0;l<o.length;l+=1)Mt(o[l]);i=!1},d(c){c&&$(e),Df(o,c),n[8](null),u&&u.d()}}}function pI(n,e,t){let r=[],i="",s,o=null,a="";Vn.onAuthStateChanged(async p=>{if(t(3,o=p),o){const T=gs(mn,"users",o.uid),C=await Md(T);C.exists()&&C.data().username?a=C.data().username:a="",u()}else a=""});function u(){const p=kd(Ro(mn,"messages"),wv("timestamp"));Pv(p,T=>{t(0,r=T.docs.map(C=>{const k=C.data();return{id:C.id,text:k.text,author:k.author,timestamp:k.timestamp?k.timestamp.toDate():null}})),h()})}Ff(u);async function c(){if(!(!o||i.trim()===""))try{await Rv(Ro(mn,"messages"),{text:i,author:a||"Anonymous",timestamp:Sv()}),t(1,i=""),h()}catch(p){console.error("Error sending message: ",p)}}function l(p){p.key==="Enter"&&(p.preventDefault(),c())}async function h(){await Bf(),s&&t(2,s.scrollTop=s.scrollHeight,s)}function d(p){return!p||!vf(p)?"":bo(p,"MMMM d")}function f(p,T){if(T===0||!p.timestamp)return!0;const C=p.timestamp,k=r[T-1].timestamp;return!yf(C,k)}function _(p){Gs[p?"unshift":"push"](()=>{s=p,t(2,s)})}function y(){i=this.value,t(1,i)}return[r,i,s,o,c,l,d,f,_,y]}class gI extends qi{constructor(e){super(),$i(this,e,pI,mI,Ir,{})}}function _I(n){const e=n-1;return e*e*e+1}function xc(n,{delay:e=0,duration:t=400,easing:r=ko}={}){const i=+getComputedStyle(n).opacity;return{delay:e,duration:t,easing:r,css:s=>`opacity: ${s*i}`}}function Uc(n,{delay:e=0,duration:t=400,easing:r=_I,start:i=0,opacity:s=0}={}){const o=getComputedStyle(n),a=+o.opacity,u=o.transform==="none"?"":o.transform,c=1-i,l=a*(1-s);return{delay:e,duration:t,easing:r,css:(h,d)=>`
			transform: ${u} scale(${1-c*d});
			opacity: ${a-l*d}
		`}}const yI="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'%20standalone='no'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='-0.5%200%2048%2048'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3ctitle%3eGoogle-color%3c/title%3e%3cdesc%3eCreated%20with%20Sketch.%3c/desc%3e%3cdefs%3e%3c/defs%3e%3cg%20id='Icons'%20stroke='none'%20stroke-width='1'%20fill='none'%20fill-rule='evenodd'%3e%3cg%20id='Color-'%20transform='translate(-401.000000,%20-860.000000)'%3e%3cg%20id='Google'%20transform='translate(401.000000,%20860.000000)'%3e%3cpath%20d='M9.82727273,24%20C9.82727273,22.4757333%2010.0804318,21.0144%2010.5322727,19.6437333%20L2.62345455,13.6042667%20C1.08206818,16.7338667%200.213636364,20.2602667%200.213636364,24%20C0.213636364,27.7365333%201.081,31.2608%202.62025,34.3882667%20L10.5247955,28.3370667%20C10.0772273,26.9728%209.82727273,25.5168%209.82727273,24'%20id='Fill-1'%20fill='%23FBBC05'%3e%3c/path%3e%3cpath%20d='M23.7136364,10.1333333%20C27.025,10.1333333%2030.0159091,11.3066667%2032.3659091,13.2266667%20L39.2022727,6.4%20C35.0363636,2.77333333%2029.6954545,0.533333333%2023.7136364,0.533333333%20C14.4268636,0.533333333%206.44540909,5.84426667%202.62345455,13.6042667%20L10.5322727,19.6437333%20C12.3545909,14.112%2017.5491591,10.1333333%2023.7136364,10.1333333'%20id='Fill-2'%20fill='%23EB4335'%3e%3c/path%3e%3cpath%20d='M23.7136364,37.8666667%20C17.5491591,37.8666667%2012.3545909,33.888%2010.5322727,28.3562667%20L2.62345455,34.3946667%20C6.44540909,42.1557333%2014.4268636,47.4666667%2023.7136364,47.4666667%20C29.4455,47.4666667%2034.9177955,45.4314667%2039.0249545,41.6181333%20L31.5177727,35.8144%20C29.3995682,37.1488%2026.7323182,37.8666667%2023.7136364,37.8666667'%20id='Fill-3'%20fill='%2334A853'%3e%3c/path%3e%3cpath%20d='M46.1454545,24%20C46.1454545,22.6133333%2045.9318182,21.12%2045.6113636,19.7333333%20L23.7136364,19.7333333%20L23.7136364,28.8%20L36.3181818,28.8%20C35.6879545,31.8912%2033.9724545,34.2677333%2031.5177727,35.8144%20L39.0249545,41.6181333%20C43.3393409,37.6138667%2046.1454545,31.6490667%2046.1454545,24'%20id='Fill-4'%20fill='%234285F4'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e";function Fc(n){let e,t=(n[6]||n[7])+"",r;return{c(){e=N("p"),r=nt(t),I(e,"class","text-red-500 text-sm mb-2")},m(i,s){j(i,e,s),O(e,r)},p(i,s){s&192&&t!==(t=(i[6]||i[7])+"")&&pn(r,t)},d(i){i&&$(e)}}}function vI(n){let e,t,r,i,s,o,a;return{c(){e=N("input"),t=X(),r=N("input"),i=X(),s=N("button"),s.textContent="Log In",I(e,"class","border p-2 rounded w-full mb-4 text-gray-800"),I(e,"type","email"),I(e,"placeholder","Email"),I(r,"class","border p-2 rounded w-full mb-4 text-gray-800"),I(r,"type","password"),I(r,"placeholder","Password"),I(s,"class","bg-blue-500 text-white p-2 rounded w-full mb-4 hover:bg-blue-600"),I(s,"type","submit")},m(u,c){j(u,e,c),Se(e,n[1]),j(u,t,c),j(u,r,c),Se(r,n[2]),j(u,i,c),j(u,s,c),o||(a=[se(e,"input",n[17]),se(r,"input",n[18])],o=!0)},p(u,c){c&2&&e.value!==u[1]&&Se(e,u[1]),c&4&&r.value!==u[2]&&Se(r,u[2])},d(u){u&&($(e),$(t),$(r),$(i),$(s)),o=!1,Fe(a)}}}function wI(n){let e,t,r,i,s,o,a,u,c,l,h;return{c(){e=N("input"),t=X(),r=N("input"),i=X(),s=N("input"),o=X(),a=N("input"),u=X(),c=N("button"),c.textContent="Sign Up",I(e,"class","border p-2 rounded w-full mb-4 text-gray-800"),I(e,"type","email"),I(e,"placeholder","Email"),I(r,"class","border p-2 rounded w-full mb-4 text-gray-800"),I(r,"type","password"),I(r,"placeholder","Create a password"),I(s,"class","border p-2 rounded w-full mb-4 text-gray-800"),I(s,"type","password"),I(s,"placeholder","Retype password"),I(a,"class","border p-2 rounded w-full mb-4 text-gray-800"),I(a,"type","text"),I(a,"placeholder","Username"),I(c,"class","bg-blue-500 text-white p-2 rounded w-full mb-4 hover:bg-blue-600"),I(c,"type","submit")},m(d,f){j(d,e,f),Se(e,n[1]),j(d,t,f),j(d,r,f),Se(r,n[2]),j(d,i,f),j(d,s,f),Se(s,n[3]),j(d,o,f),j(d,a,f),Se(a,n[4]),j(d,u,f),j(d,c,f),l||(h=[se(e,"input",n[13]),se(r,"input",n[14]),se(s,"input",n[15]),se(a,"input",n[16])],l=!0)},p(d,f){f&2&&e.value!==d[1]&&Se(e,d[1]),f&4&&r.value!==d[2]&&Se(r,d[2]),f&8&&s.value!==d[3]&&Se(s,d[3]),f&16&&a.value!==d[4]&&Se(a,d[4])},d(d){d&&($(e),$(t),$(r),$(i),$(s),$(o),$(a),$(u),$(c)),l=!1,Fe(h)}}}function Bc(n){let e,t,r,i,s,o,a;return{c(){e=N("button"),e.innerHTML=`<img src="${yI}" alt="Google logo" class="h-6 mr-2"/>
          Sign In with Google`,t=X(),r=N("p"),i=nt(`Already a member? 
          `),s=N("a"),s.textContent="Log in",I(e,"class","flex items-center justify-center bg-white text-gray-700 p-2 rounded w-full mb-4 border border-gray-300 hover:bg-gray-100"),I(s,"href","javascript:void(0)"),I(s,"class","text-blue-500 underline"),I(r,"class","text-center text-sm text-gray-600")},m(u,c){j(u,e,c),j(u,t,c),j(u,r,c),O(r,i),O(r,s),o||(a=[se(e,"click",n[8]),se(s,"click",n[9])],o=!0)},p:de,d(u){u&&($(e),$(t),$(r)),o=!1,Fe(a)}}}function $c(n){let e,t,r,i,s;return{c(){e=N("p"),t=nt(`Need an account? 
          `),r=N("a"),r.textContent="Sign Up",I(r,"href","javascript:void(0)"),I(r,"class","text-blue-500 underline"),I(e,"class","text-center text-sm text-gray-600")},m(o,a){j(o,e,a),O(e,t),O(e,r),i||(s=se(r,"click",n[10]),i=!0)},p:de,d(o){o&&$(e),i=!1,s()}}}function EI(n){let e,t,r,i=n[5]?"Log In":"Sign Up",s,o,a,u,c,l,h,d,f,_,y,p,T,C,k,H,Ie,U=(n[6]||n[7])&&Fc(n);function pe(te,De){return te[5]?vI:wI}let Ce=pe(n),L=Ce(n),F=!n[5]&&Bc(n),re=n[5]&&$c(n);return{c(){e=N("div"),t=N("div"),r=N("h2"),s=nt(i),o=X(),a=N("button"),a.textContent="✕",u=X(),c=N("form"),U&&U.c(),l=X(),L.c(),h=X(),d=N("div"),d.innerHTML='<hr class="flex-grow border-t border-gray-300"/> <span class="mx-4 text-gray-500">or</span> <hr class="flex-grow border-t border-gray-300"/>',f=X(),F&&F.c(),_=X(),re&&re.c(),I(r,"id","signInSignUpDialogTitle"),I(r,"class","text-lg text-gray-800 font-bold mb-4"),I(a,"class","absolute top-0 right-0 mt-2 mr-2 text-gray-600 hover:text-gray-800"),I(a,"aria-label","Close"),I(d,"class","flex items-center my-4"),I(t,"class","bg-white rounded-lg p-6 max-w-sm mx-auto relative"),I(t,"role","dialog"),I(t,"aria-modal","true"),I(t,"aria-labelledby","signInSignUpDialogTitle"),I(e,"class","modal-background fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center")},m(te,De){j(te,e,De),O(e,t),O(t,r),O(r,s),O(t,o),O(t,a),O(t,u),O(t,c),U&&U.m(c,null),O(c,l),L.m(c,null),O(c,h),O(c,d),O(c,f),F&&F.m(c,null),O(c,_),re&&re.m(c,null),k=!0,H||(Ie=[se(a,"click",function(){Tr(n[0])&&n[0].apply(this,arguments)}),se(c,"submit",Of(n[12])),se(t,"click",TI),se(e,"click",n[11])],H=!0)},p(te,[De]){n=te,(!k||De&32)&&i!==(i=n[5]?"Log In":"Sign Up")&&pn(s,i),n[6]||n[7]?U?U.p(n,De):(U=Fc(n),U.c(),U.m(c,l)):U&&(U.d(1),U=null),Ce===(Ce=pe(n))&&L?L.p(n,De):(L.d(1),L=Ce(n),L&&(L.c(),L.m(c,h))),n[5]?F&&(F.d(1),F=null):F?F.p(n,De):(F=Bc(n),F.c(),F.m(c,_)),n[5]?re?re.p(n,De):(re=$c(n),re.c(),re.m(c,null)):re&&(re.d(1),re=null)},i(te){k||(te&&Ut(()=>{k&&(p&&p.end(1),y=Ja(t,Uc,{duration:300}),y.start())}),te&&Ut(()=>{k&&(C&&C.end(1),T=Ja(e,xc,{duration:300}),T.start())}),k=!0)},o(te){y&&y.invalidate(),te&&(p=Za(t,Uc,{duration:300})),T&&T.invalidate(),te&&(C=Za(e,xc,{duration:300})),k=!1},d(te){te&&$(e),U&&U.d(),L.d(),F&&F.d(),re&&re.d(),te&&p&&p.end(),te&&C&&C.end(),H=!1,Fe(Ie)}}}function qc(n){return/\S+@\S+\.\S+/.test(n)}const TI=n=>n.stopPropagation();function II(n,e,t){vd();let{closeModal:r}=e,i="",s="",o="",a="",u=!1,c="",l="";function h(){return t(7,l=""),u?!i||!s?(t(7,l="Please fill out all fields."),!1):qc(i)?!0:(t(7,l="Invalid email format."),!1):!i||!s||!o||!a?(t(7,l="Please fill out all fields."),!1):qc(i)?s.length<6?(t(7,l="Password must be at least 6 characters long."),!1):s!==o?(t(7,l="Passwords do not match."),!1):!0:(t(7,l="Invalid email format."),!1)}async function d(){if(t(6,c=""),!!h())try{const F=(await GE(i,s)).user.uid;await Pc(F,a,i),await Rc(i,s),r()}catch(L){t(6,c="Error signing up: "+L.message)}}async function f(){if(t(6,c=""),!!h())try{await Rc(i,s),r()}catch(L){t(6,c="Error logging in: "+L.message)}}async function _(L){L.preventDefault();try{const F=await zE(),re=F.user.uid,te=F.user.email,De=F.user.displayName||"GoogleUser";await Pc(re,De,te),r()}catch(F){t(6,c="Error signing in with Google: "+F.message)}}function y(){t(5,u=!0)}function p(){t(5,u=!1)}function T(L){L.target.classList.contains("modal-background")&&r()}async function C(L){L.preventDefault(),u?await f():await d()}function k(){i=this.value,t(1,i)}function H(){s=this.value,t(2,s)}function Ie(){o=this.value,t(3,o)}function U(){a=this.value,t(4,a)}function pe(){i=this.value,t(1,i)}function Ce(){s=this.value,t(2,s)}return n.$$set=L=>{"closeModal"in L&&t(0,r=L.closeModal)},[r,i,s,o,a,u,c,l,_,y,p,T,C,k,H,Ie,U,pe,Ce]}class AI extends qi{constructor(e){super(),$i(this,e,II,EI,Ir,{closeModal:0})}}const en=[];function RI(n,e=de){let t;const r=new Set;function i(a){if(Ir(n,a)&&(n=a,t)){const u=!en.length;for(const c of r)c[1](),en.push(c,n);if(u){for(let c=0;c<en.length;c+=2)en[c][0](en[c+1]);en.length=0}}}function s(a){i(a(n))}function o(a,u=de){const c=[a,u];return r.add(c),r.size===1&&(t=e(i,s)||de),a(n),()=>{r.delete(c),r.size===0&&t&&(t(),t=null)}}return{set:i,update:s,subscribe:o}}const li=RI(null);Dw(Vn,async n=>{if(n){const e=gs(mn,"users",n.uid),t=await Md(e);t.exists()?li.set({...n,username:t.data().username}):li.set({...n,username:""})}else li.set(null)});function PI(n){let e,t,r;return{c(){e=N("button"),e.textContent="Login / Sign Up",I(e,"class","px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600")},m(i,s){j(i,e,s),t||(r=se(e,"click",n[3]),t=!0)},p:de,d(i){i&&$(e),t=!1,r()}}}function SI(n){let e,t,r;return{c(){e=N("button"),e.textContent="Logout",I(e,"class","px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600")},m(i,s){j(i,e,s),t||(r=se(e,"click",n[2]),t=!0)},p:de,d(i){i&&$(e),t=!1,r()}}}function jc(n){let e,t;return e=new AI({props:{closeModal:n[4]}}),{c(){Oo(e.$$.fragment)},m(r,i){Fi(e,r,i),t=!0},p:de,i(r){t||(qe(e.$$.fragment,r),t=!0)},o(r){Mt(e.$$.fragment,r),t=!1},d(r){Bi(e,r)}}}function CI(n){let e,t,r,i,s,o,a,u,c,l;function h(y,p){return y[1]?SI:PI}let d=h(n),f=d(n),_=n[0]&&jc(n);return c=new gI({}),{c(){e=N("main"),t=N("header"),r=N("span"),r.textContent="Chat App",i=X(),s=N("div"),f.c(),o=X(),_&&_.c(),a=X(),u=N("div"),Oo(c.$$.fragment),I(t,"class","bg-gray-900 border-b border-gray-800 text-lg font-bold p-4 flex justify-between items-center"),I(u,"class","flex-grow overflow-hidden"),I(e,"class","flex flex-col h-screen bg-gray-900 text-white")},m(y,p){j(y,e,p),O(e,t),O(t,r),O(t,i),O(t,s),f.m(s,null),O(e,o),_&&_.m(e,null),O(e,a),O(e,u),Fi(c,u,null),l=!0},p(y,[p]){d===(d=h(y))&&f?f.p(y,p):(f.d(1),f=d(y),f&&(f.c(),f.m(s,null))),y[0]?_?(_.p(y,p),p&1&&qe(_,1)):(_=jc(y),_.c(),qe(_,1),_.m(e,a)):_&&(tl(),Mt(_,1,1,()=>{_=null}),nl())},i(y){l||(qe(_),qe(c.$$.fragment,y),l=!0)},o(y){Mt(_),Mt(c.$$.fragment,y),l=!1},d(y){y&&$(e),f.d(),_&&_.d(),Bi(c)}}}function bI(n,e,t){let r;Cf(n,li,u=>t(1,r=u));let i=!1;async function s(){try{await KE()}catch(u){console.error("Logout failed",u)}}function o(){t(0,i=!0)}function a(){t(0,i=!1)}return[i,r,s,o,a]}class kI extends qi{constructor(e){super(),$i(this,e,bI,CI,Ir,{})}}new kI({target:document.getElementById("app")});
