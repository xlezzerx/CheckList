let e,t,r;var n,i,s,o,a,l,h,u,c,f,d,p,g,m,y,v,w,b,E,_,T,I,S,C=globalThis,x={},A={},D=C.parcelRequire94c2;null==D&&((D=function(e){if(e in x)return x[e].exports;if(e in A){var t=A[e];delete A[e];var r={id:e,exports:{}};return x[e]=r,t.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){A[e]=t},C.parcelRequire94c2=D),(0,D.register)("27Lyk",function(e,t){Object.defineProperty(e.exports,"register",{get:()=>r,set:e=>r=e,enumerable:!0,configurable:!0});var r,n=new Map;r=function(e,t){for(var r=0;r<t.length-1;r+=2)n.set(t[r],{baseUrl:e,path:t[r+1]})}}),D("27Lyk").register(new URL("",import.meta.url).toString(),JSON.parse('["7Gx3W","index.81659ee4.js","LVq70","service-worker.7763843c.js"]'));/**
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
 */var k={},N=k={};function R(){throw Error("setTimeout has not been defined")}function L(){throw Error("clearTimeout has not been defined")}function O(e){if(i===setTimeout)return setTimeout(e,0);if((i===R||!i)&&setTimeout)return i=setTimeout,setTimeout(e,0);try{return i(e,0)}catch(t){try{return i.call(null,e,0)}catch(t){return i.call(this,e,0)}}}!function(){try{i="function"==typeof setTimeout?setTimeout:R}catch(e){i=R}try{s="function"==typeof clearTimeout?clearTimeout:L}catch(e){s=L}}();var M=[],P=!1,U=-1;function B(){P&&o&&(P=!1,o.length?M=o.concat(M):U=-1,M.length&&V())}function V(){if(!P){var e=O(B);P=!0;for(var t=M.length;t;){for(o=M,M=[];++U<t;)o&&o[U].run();U=-1,t=M.length}o=null,P=!1,function(e){if(s===clearTimeout)return clearTimeout(e);if((s===L||!s)&&clearTimeout)return s=clearTimeout,clearTimeout(e);try{s(e)}catch(t){try{return s.call(null,e)}catch(t){return s.call(this,e)}}}(e)}}function F(e,t){this.fun=e,this.array=t}function j(){}N.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];M.push(new F(e,t)),1!==M.length||P||O(V)},F.prototype.run=function(){this.fun.apply(null,this.array)},N.title="browser",N.browser=!0,N.env={},N.argv=[],N.version="",N.versions={},N.on=j,N.addListener=j,N.once=j,N.off=j,N.removeListener=j,N.removeAllListeners=j,N.emit=j,N.prependListener=j,N.prependOnceListener=j,N.listeners=function(e){return[]},N.binding=function(e){throw Error("process.binding is not supported")},N.cwd=function(){return"/"},N.chdir=function(e){throw Error("process.chdir is not supported")},N.umask=function(){return 0};/**
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
 */const q=function(e){let t=[],r=0;for(let n=0;n<e.length;n++){let i=e.charCodeAt(n);i<128?t[r++]=i:(i<2048?t[r++]=i>>6|192:((64512&i)==55296&&n+1<e.length&&(64512&e.charCodeAt(n+1))==56320?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++n)),t[r++]=i>>18|240,t[r++]=i>>12&63|128):t[r++]=i>>12|224,t[r++]=i>>6&63|128),t[r++]=63&i|128)}return t},z=function(e){let t=[],r=0,n=0;for(;r<e.length;){let i=e[r++];if(i<128)t[n++]=String.fromCharCode(i);else if(i>191&&i<224){let s=e[r++];t[n++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){let s=((7&i)<<18|(63&e[r++])<<12|(63&e[r++])<<6|63&e[r++])-65536;t[n++]=String.fromCharCode(55296+(s>>10)),t[n++]=String.fromCharCode(56320+(1023&s))}else{let s=e[r++],o=e[r++];t[n++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")},$={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();let r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let t=0;t<e.length;t+=3){let i=e[t],s=t+1<e.length,o=s?e[t+1]:0,a=t+2<e.length,l=a?e[t+2]:0,h=i>>2,u=(3&i)<<4|o>>4,c=(15&o)<<2|l>>6,f=63&l;a||(f=64,s||(c=64)),n.push(r[h],r[u],r[c],r[f])}return n.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(q(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):z(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();let r=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let t=0;t<e.length;){let i=r[e.charAt(t++)],s=t<e.length?r[e.charAt(t)]:0,o=++t<e.length?r[e.charAt(t)]:64,a=++t<e.length?r[e.charAt(t)]:64;if(++t,null==i||null==s||null==o||null==a)throw new G;let l=i<<2|s>>4;if(n.push(l),64!==o){let e=s<<4&240|o>>2;if(n.push(e),64!==a){let e=o<<6&192|a;n.push(e)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class G extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const K=function(e){let t=q(e);return $.encodeByteArray(t,!0)},H=function(e){return K(e).replace(/\./g,"")},Q=function(e){try{return $.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null},W=()=>/**
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
 */(function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==C)return C;throw Error("Unable to locate global object.")})().__FIREBASE_DEFAULTS__,X=()=>{if(void 0===k||void 0===k.env)return;let e=void 0;if(e)return JSON.parse(e)},Y=()=>{let e;if("undefined"==typeof document)return;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}let t=e&&Q(e[1]);return t&&JSON.parse(t)},J=()=>{try{return W()||X()||Y()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Z=e=>{var t,r;return null===(r=null===(t=J())||void 0===t?void 0:t.emulatorHosts)||void 0===r?void 0:r[e]},ee=e=>{let t=Z(e);if(!t)return;let r=t.lastIndexOf(":");if(r<=0||r+1===t.length)throw Error(`Invalid host ${t} with no separate hostname and port!`);let n=parseInt(t.substring(r+1),10);return"["===t[0]?[t.substring(1,r-1),n]:[t.substring(0,r),n]},et=()=>{var e;return null===(e=J())||void 0===e?void 0:e.config};/**
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
 */class er{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,r))}}}class en extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name="FirebaseError",Object.setPrototypeOf(this,en.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ei.prototype.create)}}class ei{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){let r=t[0]||{},n=`${this.service}/${e}`,i=this.errors[e],s=i?i.replace(es,(e,t)=>{let n=r[t];return null!=n?String(n):`<${t}?>`}):"Error",o=`${this.serviceName}: ${s} (${n}).`;return new en(n,o,r)}}const es=/\{\$([^}]+)}/g;function eo(e,t){if(e===t)return!0;let r=Object.keys(e),n=Object.keys(t);for(let i of r){if(!n.includes(i))return!1;let r=e[i],s=t[i];if(ea(r)&&ea(s)){if(!eo(r,s))return!1}else if(r!==s)return!1}for(let e of n)if(!r.includes(e))return!1;return!0}function ea(e){return null!==e&&"object"==typeof e}/**
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
 */function el(e){return e&&e._delegate?e._delegate:e}class eh{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const eu="[DEFAULT]";/**
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
 */class ec{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let e=new er;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{let r=this.getOrInitializeService({instanceIdentifier:t});r&&e.resolve(r)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;let r=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),n=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(e){if(n)return null;throw e}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if("EAGER"===e.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:eu})}catch(e){}for(let[e,t]of this.instancesDeferred.entries()){let r=this.normalizeInstanceIdentifier(e);try{let e=this.getOrInitializeService({instanceIdentifier:r});t.resolve(e)}catch(e){}}}}clearInstance(e=eu){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=eu){return this.instances.has(e)}getOptions(e=eu){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let n=this.getOrInitializeService({instanceIdentifier:r,options:t});for(let[e,t]of this.instancesDeferred.entries())r===this.normalizeInstanceIdentifier(e)&&t.resolve(n);return n}onInit(e,t){var r;let n=this.normalizeInstanceIdentifier(t),i=null!==(r=this.onInitCallbacks.get(n))&&void 0!==r?r:new Set;i.add(e),this.onInitCallbacks.set(n,i);let s=this.instances.get(n);return s&&e(s,n),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){let r=this.onInitCallbacks.get(t);if(r)for(let n of r)try{n(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:e===eu?void 0:e,options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch(e){}return r||null}normalizeInstanceIdentifier(e=eu){return this.component?this.component.multipleInstances?e:eu:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}/**
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
 */class ef{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new ec(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const ed=[];(n=a||(a={}))[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT";const ep={debug:a.DEBUG,verbose:a.VERBOSE,info:a.INFO,warn:a.WARN,error:a.ERROR,silent:a.SILENT},eg=a.INFO,em={[a.DEBUG]:"log",[a.VERBOSE]:"log",[a.INFO]:"info",[a.WARN]:"warn",[a.ERROR]:"error"},ey=(e,t,...r)=>{if(t<e.logLevel)return;let n=new Date().toISOString(),i=em[t];if(i)console[i](`[${n}]  ${e.name}:`,...r);else throw Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class ev{constructor(e){this.name=e,this._logLevel=eg,this._logHandler=ey,this._userLogHandler=null,ed.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in a))throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?ep[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,a.DEBUG,...e),this._logHandler(this,a.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,a.VERBOSE,...e),this._logHandler(this,a.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,a.INFO,...e),this._logHandler(this,a.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,a.WARN,...e),this._logHandler(this,a.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,a.ERROR,...e),this._logHandler(this,a.ERROR,...e)}}const ew=(e,t)=>t.some(t=>e instanceof t),eb=new WeakMap,eE=new WeakMap,e_=new WeakMap,eT=new WeakMap,eI=new WeakMap;let eS={get(e,t,r){if(e instanceof IDBTransaction){if("done"===t)return eE.get(e);if("objectStoreNames"===t)return e.objectStoreNames||e_.get(e);if("store"===t)return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return eC(e[t])},set:(e,t,r)=>(e[t]=r,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function eC(r){var n;if(r instanceof IDBRequest)return function(e){let t=new Promise((t,r)=>{let n=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(eC(e.result)),n()},s=()=>{r(e.error),n()};e.addEventListener("success",i),e.addEventListener("error",s)});return t.then(t=>{t instanceof IDBCursor&&eb.set(t,e)}).catch(()=>{}),eI.set(t,e),t}(r);if(eT.has(r))return eT.get(r);let i="function"==typeof(n=r)?n!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(t||(t=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(n)?function(...e){return n.apply(ex(this),e),eC(eb.get(this))}:function(...e){return eC(n.apply(ex(this),e))}:function(e,...t){let r=n.call(ex(this),e,...t);return e_.set(r,e.sort?e.sort():[e]),eC(r)}:(n instanceof IDBTransaction&&function(e){if(eE.has(e))return;let t=new Promise((t,r)=>{let n=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),n()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)});eE.set(e,t)}(n),ew(n,e||(e=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(n,eS):n;return i!==r&&(eT.set(r,i),eI.set(i,r)),i}const ex=e=>eI.get(e),eA=["get","getKey","getAll","getAllKeys","count"],eD=["put","add","delete","clear"],ek=new Map;function eN(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(ek.get(t))return ek.get(t);let r=t.replace(/FromIndex$/,""),n=t!==r,i=eD.includes(r);if(!(r in(n?IDBIndex:IDBObjectStore).prototype)||!(i||eA.includes(r)))return;let s=async function(e,...t){let s=this.transaction(e,i?"readwrite":"readonly"),o=s.store;return n&&(o=o.index(t.shift())),(await Promise.all([o[r](...t),i&&s.done]))[0]};return ek.set(t,s),s}eS={...r=eS,get:(e,t,n)=>eN(e,t)||r.get(e,t,n),has:(e,t)=>!!eN(e,t)||r.has(e,t)};/**
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
 */class eR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(!function(e){let t=e.getComponent();return(null==t?void 0:t.type)==="VERSION"}(e))return null;{let t=e.getImmediate();return`${t.library}/${t.version}`}}).filter(e=>e).join(" ")}}const eL="@firebase/app",eO="0.10.18",eM=new ev("@firebase/app"),eP="[DEFAULT]",eU={[eL]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/data-connect":"fire-data-connect","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","@firebase/vertexai":"fire-vertex","fire-js":"fire-js",firebase:"fire-js-all"},eB=new Map,eV=new Map,eF=new Map;function ej(e,t){try{e.container.addComponent(t)}catch(r){eM.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,r)}}function eq(e){let t=e.name;if(eF.has(t))return eM.debug(`There were multiple attempts to register component ${t}.`),!1;for(let r of(eF.set(t,e),eB.values()))ej(r,e);for(let t of eV.values())ej(t,e);return!0}const ez=new ei("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});/**
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
 */class e${constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new eh("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ez.create("app-deleted",{appName:this._name})}}function eG(e,t={}){let r=e;"object"!=typeof t&&(t={name:t});let n=Object.assign({name:eP,automaticDataCollectionEnabled:!1},t),i=n.name;if("string"!=typeof i||!i)throw ez.create("bad-app-name",{appName:String(i)});if(r||(r=et()),!r)throw ez.create("no-options");let s=eB.get(i);if(s){if(eo(r,s.options)&&eo(n,s.config))return s;throw ez.create("duplicate-app",{appName:i})}let o=new ef(i);for(let e of eF.values())o.addComponent(e);let a=new e$(r,n,o);return eB.set(i,a),a}function eK(e,t,r){var n;let i=null!==(n=eU[e])&&void 0!==n?n:e;r&&(i+=`-${r}`);let s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){let e=[`Unable to register library "${i}" with version "${t}":`];s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),eM.warn(e.join(" "));return}eq(new eh(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}const eH="firebase-heartbeat-store";let eQ=null;function eW(){return eQ||(eQ=(function(e,t,{blocked:r,upgrade:n,blocking:i,terminated:s}={}){let o=indexedDB.open(e,1),a=eC(o);return n&&o.addEventListener("upgradeneeded",e=>{n(eC(o.result),e.oldVersion,e.newVersion,eC(o.transaction),e)}),r&&o.addEventListener("blocked",e=>r(e.oldVersion,e.newVersion,e)),a.then(e=>{s&&e.addEventListener("close",()=>s()),i&&e.addEventListener("versionchange",e=>i(e.oldVersion,e.newVersion,e))}).catch(()=>{}),a})("firebase-heartbeat-database",0,{upgrade:(e,t)=>{if(0===t)try{e.createObjectStore(eH)}catch(e){console.warn(e)}}}).catch(e=>{throw ez.create("idb-open",{originalErrorMessage:e.message})})),eQ}async function eX(e){try{let t=(await eW()).transaction(eH),r=await t.objectStore(eH).get(eJ(e));return await t.done,r}catch(e){if(e instanceof en)eM.warn(e.message);else{let t=ez.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});eM.warn(t.message)}}}async function eY(e,t){try{let r=(await eW()).transaction(eH,"readwrite"),n=r.objectStore(eH);await n.put(t,eJ(e)),await r.done}catch(e){if(e instanceof en)eM.warn(e.message);else{let t=ez.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});eM.warn(t.message)}}}function eJ(e){return`${e.name}!${e.options.appId}`}class eZ{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new e1(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){var e,t;try{let r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),n=e0();if((null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some(e=>e.date===n))return;return this._heartbeatsCache.heartbeats.push({date:n,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{let t=new Date(e.date).valueOf();return Date.now()-t<=2592e6}),this._storage.overwrite(this._heartbeatsCache)}catch(e){eM.warn(e)}}async getHeartbeatsHeader(){var e;try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)==null||0===this._heartbeatsCache.heartbeats.length)return"";let t=e0(),{heartbeatsToSend:r,unsentEntries:n}=function(e,t=1024){let r=[],n=e.slice();for(let i of e){let e=r.find(e=>e.agent===i.agent);if(e){if(e.dates.push(i.date),e2(r)>t){e.dates.pop();break}}else if(r.push({agent:i.agent,dates:[i.date]}),e2(r)>t){r.pop();break}n=n.slice(1)}return{heartbeatsToSend:r,unsentEntries:n}}(this._heartbeatsCache.heartbeats),i=H(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(e){return eM.warn(e),""}}}function e0(){return new Date().toISOString().substring(0,10)}class e1{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!function(){try{return"object"==typeof indexedDB}catch(e){return!1}}()&&new Promise((e,t)=>{try{let r=!0,n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),r||self.indexedDB.deleteDatabase(n),e(!0)},i.onupgradeneeded=()=>{r=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}).then(()=>!0).catch(()=>!1)}async read(){if(!await this._canUseIndexedDBPromise)return{heartbeats:[]};{let e=await eX(this.app);return(null==e?void 0:e.heartbeats)?e:{heartbeats:[]}}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){let r=await this.read();return eY(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){let r=await this.read();return eY(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}}}function e2(e){return H(JSON.stringify({version:2,heartbeats:e})).length}eq(new eh("platform-logger",e=>new eR(e),"PRIVATE")),eq(new eh("heartbeat",e=>new eZ(e),"PRIVATE")),eK(eL,eO,""),eK(eL,eO,"esm2017"),eK("fire-js",""),/**
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
 */eK("firebase","11.2.0","app");var e6="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==C?C:"undefined"!=typeof self?self:{},e5={};(function(){function e(){this.blockSize=-1,this.blockSize=64,this.g=[,,,,],this.B=Array(this.blockSize),this.o=this.h=0,this.s()}function t(e,t,r){r||(r=0);var n=Array(16);if("string"==typeof t)for(var i=0;16>i;++i)n[i]=t.charCodeAt(r++)|t.charCodeAt(r++)<<8|t.charCodeAt(r++)<<16|t.charCodeAt(r++)<<24;else for(i=0;16>i;++i)n[i]=t[r++]|t[r++]<<8|t[r++]<<16|t[r++]<<24;t=e.g[0],r=e.g[1],i=e.g[2];var s=e.g[3],o=t+(s^r&(i^s))+n[0]+0xd76aa478&0xffffffff;o=s+(i^(t=r+(o<<7&0xffffffff|o>>>25))&(r^i))+n[1]+0xe8c7b756&0xffffffff,o=i+(r^(s=t+(o<<12&0xffffffff|o>>>20))&(t^r))+n[2]+0x242070db&0xffffffff,o=r+(t^(i=s+(o<<17&0xffffffff|o>>>15))&(s^t))+n[3]+0xc1bdceee&0xffffffff,o=t+(s^(r=i+(o<<22&0xffffffff|o>>>10))&(i^s))+n[4]+0xf57c0faf&0xffffffff,o=s+(i^(t=r+(o<<7&0xffffffff|o>>>25))&(r^i))+n[5]+0x4787c62a&0xffffffff,o=i+(r^(s=t+(o<<12&0xffffffff|o>>>20))&(t^r))+n[6]+0xa8304613&0xffffffff,o=r+(t^(i=s+(o<<17&0xffffffff|o>>>15))&(s^t))+n[7]+0xfd469501&0xffffffff,o=t+(s^(r=i+(o<<22&0xffffffff|o>>>10))&(i^s))+n[8]+0x698098d8&0xffffffff,o=s+(i^(t=r+(o<<7&0xffffffff|o>>>25))&(r^i))+n[9]+0x8b44f7af&0xffffffff,o=i+(r^(s=t+(o<<12&0xffffffff|o>>>20))&(t^r))+n[10]+0xffff5bb1&0xffffffff,o=r+(t^(i=s+(o<<17&0xffffffff|o>>>15))&(s^t))+n[11]+0x895cd7be&0xffffffff,o=t+(s^(r=i+(o<<22&0xffffffff|o>>>10))&(i^s))+n[12]+0x6b901122&0xffffffff,o=s+(i^(t=r+(o<<7&0xffffffff|o>>>25))&(r^i))+n[13]+0xfd987193&0xffffffff,o=i+(r^(s=t+(o<<12&0xffffffff|o>>>20))&(t^r))+n[14]+0xa679438e&0xffffffff,o=r+(t^(i=s+(o<<17&0xffffffff|o>>>15))&(s^t))+n[15]+0x49b40821&0xffffffff,r=i+(o<<22&0xffffffff|o>>>10),o=t+(i^s&(r^i))+n[1]+0xf61e2562&0xffffffff,t=r+(o<<5&0xffffffff|o>>>27),o=s+(r^i&(t^r))+n[6]+0xc040b340&0xffffffff,s=t+(o<<9&0xffffffff|o>>>23),o=i+(t^r&(s^t))+n[11]+0x265e5a51&0xffffffff,i=s+(o<<14&0xffffffff|o>>>18),o=r+(s^t&(i^s))+n[0]+0xe9b6c7aa&0xffffffff,r=i+(o<<20&0xffffffff|o>>>12),o=t+(i^s&(r^i))+n[5]+0xd62f105d&0xffffffff,t=r+(o<<5&0xffffffff|o>>>27),o=s+(r^i&(t^r))+n[10]+0x2441453&0xffffffff,s=t+(o<<9&0xffffffff|o>>>23),o=i+(t^r&(s^t))+n[15]+0xd8a1e681&0xffffffff,i=s+(o<<14&0xffffffff|o>>>18),o=r+(s^t&(i^s))+n[4]+0xe7d3fbc8&0xffffffff,r=i+(o<<20&0xffffffff|o>>>12),o=t+(i^s&(r^i))+n[9]+0x21e1cde6&0xffffffff,t=r+(o<<5&0xffffffff|o>>>27),o=s+(r^i&(t^r))+n[14]+0xc33707d6&0xffffffff,s=t+(o<<9&0xffffffff|o>>>23),o=i+(t^r&(s^t))+n[3]+0xf4d50d87&0xffffffff,i=s+(o<<14&0xffffffff|o>>>18),o=r+(s^t&(i^s))+n[8]+0x455a14ed&0xffffffff,r=i+(o<<20&0xffffffff|o>>>12),o=t+(i^s&(r^i))+n[13]+0xa9e3e905&0xffffffff,t=r+(o<<5&0xffffffff|o>>>27),o=s+(r^i&(t^r))+n[2]+0xfcefa3f8&0xffffffff,s=t+(o<<9&0xffffffff|o>>>23),o=i+(t^r&(s^t))+n[7]+0x676f02d9&0xffffffff,i=s+(o<<14&0xffffffff|o>>>18),o=r+(s^t&(i^s))+n[12]+0x8d2a4c8a&0xffffffff,o=t+((r=i+(o<<20&0xffffffff|o>>>12))^i^s)+n[5]+0xfffa3942&0xffffffff,o=s+((t=r+(o<<4&0xffffffff|o>>>28))^r^i)+n[8]+0x8771f681&0xffffffff,o=i+((s=t+(o<<11&0xffffffff|o>>>21))^t^r)+n[11]+0x6d9d6122&0xffffffff,o=r+((i=s+(o<<16&0xffffffff|o>>>16))^s^t)+n[14]+0xfde5380c&0xffffffff,o=t+((r=i+(o<<23&0xffffffff|o>>>9))^i^s)+n[1]+0xa4beea44&0xffffffff,o=s+((t=r+(o<<4&0xffffffff|o>>>28))^r^i)+n[4]+0x4bdecfa9&0xffffffff,o=i+((s=t+(o<<11&0xffffffff|o>>>21))^t^r)+n[7]+0xf6bb4b60&0xffffffff,o=r+((i=s+(o<<16&0xffffffff|o>>>16))^s^t)+n[10]+0xbebfbc70&0xffffffff,o=t+((r=i+(o<<23&0xffffffff|o>>>9))^i^s)+n[13]+0x289b7ec6&0xffffffff,o=s+((t=r+(o<<4&0xffffffff|o>>>28))^r^i)+n[0]+0xeaa127fa&0xffffffff,o=i+((s=t+(o<<11&0xffffffff|o>>>21))^t^r)+n[3]+0xd4ef3085&0xffffffff,o=r+((i=s+(o<<16&0xffffffff|o>>>16))^s^t)+n[6]+0x4881d05&0xffffffff,o=t+((r=i+(o<<23&0xffffffff|o>>>9))^i^s)+n[9]+0xd9d4d039&0xffffffff,o=s+((t=r+(o<<4&0xffffffff|o>>>28))^r^i)+n[12]+0xe6db99e5&0xffffffff,o=i+((s=t+(o<<11&0xffffffff|o>>>21))^t^r)+n[15]+0x1fa27cf8&0xffffffff,o=r+((i=s+(o<<16&0xffffffff|o>>>16))^s^t)+n[2]+0xc4ac5665&0xffffffff,r=i+(o<<23&0xffffffff|o>>>9),o=t+(i^(r|~s))+n[0]+0xf4292244&0xffffffff,t=r+(o<<6&0xffffffff|o>>>26),o=s+(r^(t|~i))+n[7]+0x432aff97&0xffffffff,s=t+(o<<10&0xffffffff|o>>>22),o=i+(t^(s|~r))+n[14]+0xab9423a7&0xffffffff,i=s+(o<<15&0xffffffff|o>>>17),o=r+(s^(i|~t))+n[5]+0xfc93a039&0xffffffff,r=i+(o<<21&0xffffffff|o>>>11),o=t+(i^(r|~s))+n[12]+0x655b59c3&0xffffffff,t=r+(o<<6&0xffffffff|o>>>26),o=s+(r^(t|~i))+n[3]+0x8f0ccc92&0xffffffff,s=t+(o<<10&0xffffffff|o>>>22),o=i+(t^(s|~r))+n[10]+0xffeff47d&0xffffffff,i=s+(o<<15&0xffffffff|o>>>17),o=r+(s^(i|~t))+n[1]+0x85845dd1&0xffffffff,r=i+(o<<21&0xffffffff|o>>>11),o=t+(i^(r|~s))+n[8]+0x6fa87e4f&0xffffffff,t=r+(o<<6&0xffffffff|o>>>26),o=s+(r^(t|~i))+n[15]+0xfe2ce6e0&0xffffffff,s=t+(o<<10&0xffffffff|o>>>22),o=i+(t^(s|~r))+n[6]+0xa3014314&0xffffffff,i=s+(o<<15&0xffffffff|o>>>17),o=r+(s^(i|~t))+n[13]+0x4e0811a1&0xffffffff,r=i+(o<<21&0xffffffff|o>>>11),o=t+(i^(r|~s))+n[4]+0xf7537e82&0xffffffff,t=r+(o<<6&0xffffffff|o>>>26),o=s+(r^(t|~i))+n[11]+0xbd3af235&0xffffffff,s=t+(o<<10&0xffffffff|o>>>22),o=i+(t^(s|~r))+n[2]+0x2ad7d2bb&0xffffffff,i=s+(o<<15&0xffffffff|o>>>17),o=r+(s^(i|~t))+n[9]+0xeb86d391&0xffffffff,e.g[0]=e.g[0]+t&0xffffffff,e.g[1]=e.g[1]+(i+(o<<21&0xffffffff|o>>>11))&0xffffffff,e.g[2]=e.g[2]+i&0xffffffff,e.g[3]=e.g[3]+s&0xffffffff}function r(e,t){this.h=t;for(var r=[],n=!0,i=e.length-1;0<=i;i--){var s=0|e[i];n&&s==t||(r[i]=s,n=!1)}this.g=r}!function(e,t){function r(){}r.prototype=t.prototype,e.D=t.prototype,e.prototype=new r,e.prototype.constructor=e,e.C=function(e,r,n){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[r].apply(e,i)}}(e,function(){this.blockSize=-1}),e.prototype.s=function(){this.g[0]=0x67452301,this.g[1]=0xefcdab89,this.g[2]=0x98badcfe,this.g[3]=0x10325476,this.o=this.h=0},e.prototype.u=function(e,r){void 0===r&&(r=e.length);for(var n=r-this.blockSize,i=this.B,s=this.h,o=0;o<r;){if(0==s)for(;o<=n;)t(this,e,o),o+=this.blockSize;if("string"==typeof e){for(;o<r;)if(i[s++]=e.charCodeAt(o++),s==this.blockSize){t(this,i),s=0;break}}else for(;o<r;)if(i[s++]=e[o++],s==this.blockSize){t(this,i),s=0;break}}this.h=s,this.o+=r},e.prototype.v=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var r=8*this.o;for(t=e.length-8;t<e.length;++t)e[t]=255&r,r/=256;for(this.u(e),e=Array(16),t=r=0;4>t;++t)for(var n=0;32>n;n+=8)e[r++]=this.g[t]>>>n&255;return e};var n,i={};function s(e){var t;return -128<=e&&128>e?(t=function(e){return new r([0|e],0>e?-1:0)},Object.prototype.hasOwnProperty.call(i,e)?i[e]:i[e]=t(e)):new r([0|e],0>e?-1:0)}function o(e){if(isNaN(e)||!isFinite(e))return a;if(0>e)return p(o(-e));for(var t=[],n=1,i=0;e>=n;i++)t[i]=e/n|0,n*=0x100000000;return new r(t,0)}var a=s(0),u=s(1),c=s(0x1000000);function f(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function d(e){return -1==e.h}function p(e){for(var t=e.g.length,n=[],i=0;i<t;i++)n[i]=~e.g[i];return new r(n,~e.h).add(u)}function g(e,t){return e.add(p(t))}function m(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function y(e,t){this.g=e,this.h=t}function v(e,t){if(f(t))throw Error("division by zero");if(f(e))return new y(a,a);if(d(e))return t=v(p(e),t),new y(p(t.g),p(t.h));if(d(t))return t=v(e,p(t)),new y(p(t.g),t.h);if(30<e.g.length){if(d(e)||d(t))throw Error("slowDivide_ only works with positive integers.");for(var r=u,n=t;0>=n.l(e);)r=w(r),n=w(n);var i=b(r,1),s=b(n,1);for(n=b(n,2),r=b(r,2);!f(n);){var l=s.add(n);0>=l.l(e)&&(i=i.add(r),s=l),n=b(n,1),r=b(r,1)}return t=g(e,i.j(t)),new y(i,t)}for(i=a;0<=e.l(t);){for(n=48>=(n=Math.ceil(Math.log(r=Math.max(1,Math.floor(e.m()/t.m())))/Math.LN2))?1:Math.pow(2,n-48),l=(s=o(r)).j(t);d(l)||0<l.l(e);)r-=n,l=(s=o(r)).j(t);f(s)&&(s=u),i=i.add(s),e=g(e,l)}return new y(i,e)}function w(e){for(var t=e.g.length+1,n=[],i=0;i<t;i++)n[i]=e.i(i)<<1|e.i(i-1)>>>31;return new r(n,e.h)}function b(e,t){var n=t>>5;t%=32;for(var i=e.g.length-n,s=[],o=0;o<i;o++)s[o]=0<t?e.i(o+n)>>>t|e.i(o+n+1)<<32-t:e.i(o+n);return new r(s,e.h)}(n=r.prototype).m=function(){if(d(this))return-p(this).m();for(var e=0,t=1,r=0;r<this.g.length;r++){var n=this.i(r);e+=(0<=n?n:0x100000000+n)*t,t*=0x100000000}return e},n.toString=function(e){if(2>(e=e||10)||36<e)throw Error("radix out of range: "+e);if(f(this))return"0";if(d(this))return"-"+p(this).toString(e);for(var t=o(Math.pow(e,6)),r=this,n="";;){var i=v(r,t).g,s=((0<(r=g(r,i.j(t))).g.length?r.g[0]:r.h)>>>0).toString(e);if(f(r=i))return s+n;for(;6>s.length;)s="0"+s;n=s+n}},n.i=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},n.l=function(e){return d(e=g(this,e))?-1:+!f(e)},n.abs=function(){return d(this)?p(this):this},n.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0,s=0;s<=t;s++){var o=i+(65535&this.i(s))+(65535&e.i(s)),a=(o>>>16)+(this.i(s)>>>16)+(e.i(s)>>>16);i=a>>>16,o&=65535,a&=65535,n[s]=a<<16|o}return new r(n,-0x80000000&n[n.length-1]?-1:0)},n.j=function(e){if(f(this)||f(e))return a;if(d(this))return d(e)?p(this).j(p(e)):p(p(this).j(e));if(d(e))return p(this.j(p(e)));if(0>this.l(c)&&0>e.l(c))return o(this.m()*e.m());for(var t=this.g.length+e.g.length,n=[],i=0;i<2*t;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var s=0;s<e.g.length;s++){var l=this.i(i)>>>16,h=65535&this.i(i),u=e.i(s)>>>16,g=65535&e.i(s);n[2*i+2*s]+=h*g,m(n,2*i+2*s),n[2*i+2*s+1]+=l*g,m(n,2*i+2*s+1),n[2*i+2*s+1]+=h*u,m(n,2*i+2*s+1),n[2*i+2*s+2]+=l*u,m(n,2*i+2*s+2)}for(i=0;i<t;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=t;i<2*t;i++)n[i]=0;return new r(n,0)},n.A=function(e){return v(this,e).h},n.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.i(i)&e.i(i);return new r(n,this.h&e.h)},n.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.i(i)|e.i(i);return new r(n,this.h|e.h)},n.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.i(i)^e.i(i);return new r(n,this.h^e.h)},e.prototype.digest=e.prototype.v,e.prototype.reset=e.prototype.s,e.prototype.update=e.prototype.u,h=e5.Md5=e,r.prototype.add=r.prototype.add,r.prototype.multiply=r.prototype.j,r.prototype.modulo=r.prototype.A,r.prototype.compare=r.prototype.l,r.prototype.toNumber=r.prototype.m,r.prototype.toString=r.prototype.toString,r.prototype.getBits=r.prototype.i,r.fromNumber=o,r.fromString=function e(t,r){if(0==t.length)throw Error("number format error: empty string");if(2>(r=r||10)||36<r)throw Error("radix out of range: "+r);if("-"==t.charAt(0))return p(e(t.substring(1),r));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=o(Math.pow(r,8)),i=a,s=0;s<t.length;s+=8){var l=Math.min(8,t.length-s),h=parseInt(t.substring(s,s+l),r);8>l?(l=o(Math.pow(r,l)),i=i.j(l).add(o(h))):i=(i=i.j(n)).add(o(h))}return i},l=e5.Integer=r}).apply(void 0!==e6?e6:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});var e3="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==C?C:"undefined"!=typeof self?self:{},e8={};(function(){var e,t,r,n="function"==typeof Object.defineProperties?Object.defineProperty:function(e,t,r){return e==Array.prototype||e==Object.prototype||(e[t]=r.value),e},i=function(e){e=["object"==typeof globalThis&&globalThis,e,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof e3&&e3];for(var t=0;t<e.length;++t){var r=e[t];if(r&&r.Math==Math)return r}throw Error("Cannot find global object")}(this);!function(e,t){if(t)e:{var r=i;e=e.split(".");for(var s=0;s<e.length-1;s++){var o=e[s];if(!(o in r))break e;r=r[o]}(t=t(s=r[e=e[e.length-1]]))!=s&&null!=t&&n(r,e,{configurable:!0,writable:!0,value:t})}}("Array.prototype.values",function(e){return e||function(){var e,t,r,n,i;return e=this,t=function(e,t){return t},e instanceof String&&(e+=""),r=0,n=!1,(i={next:function(){if(!n&&r<e.length){var i=r++;return{value:t(i,e[i]),done:!1}}return n=!0,{done:!0,value:void 0}}})[Symbol.iterator]=function(){return i},i}});var s=s||{},o=this||self;function a(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function l(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function h(e,t,r){return e.call.apply(e.bind,arguments)}function v(e,t,r){if(!e)throw Error();if(2<arguments.length){var n=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,n),e.apply(t,r)}}return function(){return e.apply(t,arguments)}}function w(e,t,r){return(w=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?h:v).apply(null,arguments)}function b(e,t){var r=Array.prototype.slice.call(arguments,1);return function(){var t=r.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function E(e,t){function r(){}r.prototype=t.prototype,e.aa=t.prototype,e.prototype=new r,e.prototype.constructor=e,e.Qb=function(e,r,n){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[r].apply(e,i)}}function _(e){let t=e.length;if(0<t){let r=Array(t);for(let n=0;n<t;n++)r[n]=e[n];return r}return[]}function T(e,t){for(let t=1;t<arguments.length;t++){let r=arguments[t];if(a(r)){let t=e.length||0,n=r.length||0;e.length=t+n;for(let i=0;i<n;i++)e[t+i]=r[i]}else e.push(r)}}function I(e){return/^[\s\xa0]*$/.test(e)}function S(){var e=o.navigator;return e&&(e=e.userAgent)?e:""}function C(e){return C[" "](e),e}C[" "]=function(){};var x=-1!=S().indexOf("Gecko")&&!(-1!=S().toLowerCase().indexOf("webkit")&&-1==S().indexOf("Edge"))&&!(-1!=S().indexOf("Trident")||-1!=S().indexOf("MSIE"))&&-1==S().indexOf("Edge");function A(e,t,r){for(let n in e)t.call(r,e[n],n,e)}function D(e){let t={};for(let r in e)t[r]=e[r];return t}let k="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function N(e,t){let r,n;for(let t=1;t<arguments.length;t++){for(r in n=arguments[t])e[r]=n[r];for(let t=0;t<k.length;t++)r=k[t],Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}}var R=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new L,e=>e.reset());class L{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}let O,M=!1,P=new class{constructor(){this.h=this.g=null}add(e,t){let r=R.get();r.set(e,t),this.h?this.h.next=r:this.g=r,this.h=r}},U=()=>{let e=o.Promise.resolve(void 0);O=()=>{e.then(B)}};var B=()=>{let e;for(var t;e=null,P.g&&(e=P.g,P.g=P.g.next,P.g||(P.h=null),e.next=null),t=e;){try{t.h.call(t.g)}catch(e){!function(e){o.setTimeout(()=>{throw e},0)}(e)}R.j(t),100>R.h&&(R.h++,t.next=R.g,R.g=t)}M=!1};function V(){this.s=this.s,this.C=this.C}function F(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}V.prototype.s=!1,V.prototype.ma=function(){this.s||(this.s=!0,this.N())},V.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()},F.prototype.h=function(){this.defaultPrevented=!0};var j=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{let e=()=>{};o.addEventListener("test",e,t),o.removeEventListener("test",e,t)}catch(e){}return e}();function q(e,t){if(F.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var r=this.type=e.type,n=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(x){e:{try{C(t.nodeName);var i=!0;break e}catch(e){}i=!1}i||(t=null)}}else"mouseover"==r?t=e.fromElement:"mouseout"==r&&(t=e.toElement);this.relatedTarget=t,n?(this.clientX=void 0!==n.clientX?n.clientX:n.pageX,this.clientY=void 0!==n.clientY?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:z[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&q.aa.h.call(this)}}E(q,F);var z={2:"touch",3:"pen",4:"mouse"};q.prototype.h=function(){q.aa.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var $="closure_listenable_"+(1e6*Math.random()|0),G=0;function K(e,t,r,n,i){this.listener=e,this.proxy=null,this.src=t,this.type=r,this.capture=!!n,this.ha=i,this.key=++G,this.da=this.fa=!1}function H(e){e.da=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function Q(e){this.src=e,this.g={},this.h=0}function W(e,t){var r=t.type;if(r in e.g){var n,i=e.g[r],s=Array.prototype.indexOf.call(i,t,void 0);(n=0<=s)&&Array.prototype.splice.call(i,s,1),n&&(H(t),0==e.g[r].length&&(delete e.g[r],e.h--))}}function X(e,t,r,n){for(var i=0;i<e.length;++i){var s=e[i];if(!s.da&&s.listener==t&&!!r==s.capture&&s.ha==n)return i}return -1}Q.prototype.add=function(e,t,r,n,i){var s=e.toString();(e=this.g[s])||(e=this.g[s]=[],this.h++);var o=X(e,t,n,i);return -1<o?(t=e[o],r||(t.fa=!1)):((t=new K(t,this.src,s,!!n,i)).fa=r,e.push(t)),t};var Y="closure_lm_"+(1e6*Math.random()|0),J={};function Z(e,t,r,n,i,s){if(!t)throw Error("Invalid event type");var o=l(i)?!!i.capture:!!i,a=en(e);if(a||(e[Y]=a=new Q(e)),(r=a.add(t,r,n,o,s)).proxy)return r;if(n=function e(t){return er.call(e.src,e.listener,t)},r.proxy=n,n.src=e,n.listener=r,e.addEventListener)j||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),n,i);else if(e.attachEvent)e.attachEvent(et(t.toString()),n);else if(e.addListener&&e.removeListener)e.addListener(n);else throw Error("addEventListener and attachEvent are unavailable.");return r}function ee(e){if("number"!=typeof e&&e&&!e.da){var t=e.src;if(t&&t[$])W(t.i,e);else{var r=e.type,n=e.proxy;t.removeEventListener?t.removeEventListener(r,n,e.capture):t.detachEvent?t.detachEvent(et(r),n):t.addListener&&t.removeListener&&t.removeListener(n),(r=en(t))?(W(r,e),0==r.h&&(r.src=null,t[Y]=null)):H(e)}}}function et(e){return e in J?J[e]:J[e]="on"+e}function er(e,t){if(e.da)e=!0;else{t=new q(t,this);var r=e.listener,n=e.ha||e.src;e.fa&&ee(e),e=r.call(n,t)}return e}function en(e){return(e=e[Y])instanceof Q?e:null}var ei="__closure_events_fn_"+(1e9*Math.random()>>>0);function es(e){return"function"==typeof e?e:(e[ei]||(e[ei]=function(t){return e.handleEvent(t)}),e[ei])}function eo(){V.call(this),this.i=new Q(this),this.M=this,this.F=null}function ea(e,t){var r,n=e.F;if(n)for(r=[];n;n=n.F)r.push(n);if(e=e.M,n=t.type||t,"string"==typeof t)t=new F(t,e);else if(t instanceof F)t.target=t.target||e;else{var i=t;N(t=new F(n,e),i)}if(i=!0,r)for(var s=r.length-1;0<=s;s--){var o=t.g=r[s];i=el(o,n,!0,t)&&i}if(i=el(o=t.g=e,n,!0,t)&&i,i=el(o,n,!1,t)&&i,r)for(s=0;s<r.length;s++)i=el(o=t.g=r[s],n,!1,t)&&i}function el(e,t,r,n){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.da&&o.capture==r){var a=o.listener,l=o.ha||o.src;o.fa&&W(e.i,o),i=!1!==a.call(l,n)&&i}}return i&&!n.defaultPrevented}function eh(e,t,r){if("function"==typeof e)r&&(e=w(e,r));else if(e&&"function"==typeof e.handleEvent)e=w(e.handleEvent,e);else throw Error("Invalid listener argument");return 0x7fffffff<Number(t)?-1:o.setTimeout(e,t||0)}E(eo,V),eo.prototype[$]=!0,eo.prototype.removeEventListener=function(e,t,r,n){!function e(t,r,n,i,s){if(Array.isArray(r))for(var o=0;o<r.length;o++)e(t,r[o],n,i,s);else(i=l(i)?!!i.capture:!!i,n=es(n),t&&t[$])?(t=t.i,(r=String(r).toString())in t.g&&-1<(n=X(o=t.g[r],n,i,s))&&(H(o[n]),Array.prototype.splice.call(o,n,1),0==o.length&&(delete t.g[r],t.h--))):t&&(t=en(t))&&(r=t.g[r.toString()],t=-1,r&&(t=X(r,n,i,s)),(n=-1<t?r[t]:null)&&ee(n))}(this,e,t,r,n)},eo.prototype.N=function(){if(eo.aa.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var r=t.g[e],n=0;n<r.length;n++)H(r[n]);delete t.g[e],t.h--}}this.F=null},eo.prototype.K=function(e,t,r,n){return this.i.add(String(e),t,!1,r,n)},eo.prototype.L=function(e,t,r,n){return this.i.add(String(e),t,!0,r,n)};class eu extends V{constructor(e,t){super(),this.m=e,this.l=t,this.h=null,this.i=!1,this.g=null}j(e){this.h=arguments,this.g?this.i=!0:function e(t){t.g=eh(()=>{t.g=null,t.i&&(t.i=!1,e(t))},t.l);let r=t.h;t.h=null,t.m.apply(null,r)}(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ec(e){V.call(this),this.h=e,this.g={}}E(ec,V);var ef=[];function ed(e){A(e.g,function(e,t){this.g.hasOwnProperty(t)&&ee(e)},e),e.g={}}ec.prototype.N=function(){ec.aa.N.call(this),ed(this)},ec.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ep=o.JSON.stringify,eg=o.JSON.parse,em=class{stringify(e){return o.JSON.stringify(e,void 0)}parse(e){return o.JSON.parse(e,void 0)}};function ey(){}function ev(e){return e.h||(e.h=e.i())}function ew(){}ey.prototype.h=null;var eb={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function eE(){F.call(this,"d")}function e_(){F.call(this,"c")}E(eE,F),E(e_,F);var eT={},eI=null;function eS(){return eI=eI||new eo}function eC(e){F.call(this,eT.La,e)}function ex(e){let t=eS();ea(t,new eC(t))}function eA(e,t){F.call(this,eT.STAT_EVENT,e),this.stat=t}function eD(e){let t=eS();ea(t,new eA(t,e))}function ek(e,t){F.call(this,eT.Ma,e),this.size=t}function eN(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){e()},t)}function eR(){this.g=!0}function eL(e,t,r,n){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var r=JSON.parse(t);if(r){for(e=0;e<r.length;e++)if(Array.isArray(r[e])){var n=r[e];if(!(2>n.length)){var i=n[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}}return ep(r)}catch(e){return t}}(e,r)+(n?" "+n:"")})}eT.La="serverreachability",E(eC,F),eT.STAT_EVENT="statevent",E(eA,F),eT.Ma="timingevent",E(ek,F),eR.prototype.xa=function(){this.g=!1},eR.prototype.info=function(){};var eO={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},eM={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"};function eP(){}function eU(e,t,r,n){this.j=e,this.i=t,this.l=r,this.R=n||1,this.U=new ec(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new eB}function eB(){this.i=null,this.g="",this.h=!1}E(eP,ey),eP.prototype.g=function(){return new XMLHttpRequest},eP.prototype.i=function(){return{}},t=new eP;var eV={},eF={};function ej(e,t,r){e.L=1,e.v=ti(e9(t)),e.m=r,e.P=!0,eq(e,null)}function eq(e,t){e.F=Date.now(),e$(e),e.A=e9(e.v);var r=e.A,n=e.R;Array.isArray(n)||(n=[String(n)]),ty(r.i,"t",n),e.C=0,r=e.j.J,e.h=new eB,e.g=t6(e.j,r?t:null,!e.m),0<e.O&&(e.M=new eu(w(e.Y,e,e.g),e.O)),t=e.U,r=e.g,n=e.ca;var i="readystatechange";Array.isArray(i)||(i&&(ef[0]=i.toString()),i=ef);for(var s=0;s<i.length;s++){var o=function e(t,r,n,i,s){if(i&&i.once)return function e(t,r,n,i,s){if(Array.isArray(r)){for(var o=0;o<r.length;o++)e(t,r[o],n,i,s);return null}return n=es(n),t&&t[$]?t.L(r,n,l(i)?!!i.capture:!!i,s):Z(t,r,n,!0,i,s)}(t,r,n,i,s);if(Array.isArray(r)){for(var o=0;o<r.length;o++)e(t,r[o],n,i,s);return null}return n=es(n),t&&t[$]?t.K(r,n,l(i)?!!i.capture:!!i,s):Z(t,r,n,!1,i,s)}(r,i[s],n||t.handleEvent,!1,t.h||t);if(!o)break;t.g[o.key]=o}t=e.H?D(e.H):{},e.m?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.m,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),ex(),function(e,t,r,n,i,s){e.info(function(){if(e.g){if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var h=a[l].split("=");if(1<h.length){var u=h[0];h=h[1];var c=u.split("_");o=2<=c.length&&"type"==c[1]?o+(u+"=")+h+"&":o+(u+"=redacted&")}}else o=null}else o=s;return"XMLHTTP REQ ("+n+") [attempt "+i+"]: "+t+"\n"+r+"\n"+o})}(e.i,e.u,e.A,e.l,e.R,e.m)}function ez(e){return!!e.g&&"GET"==e.u&&2!=e.L&&e.j.Ca}function e$(e){e.S=Date.now()+e.I,eG(e,e.I)}function eG(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=eN(w(e.ba,e),t)}function eK(e){e.B&&(o.clearTimeout(e.B),e.B=null)}function eH(e){0==e.j.G||e.J||tJ(e.j,e)}function eQ(e){eK(e);var t=e.M;t&&"function"==typeof t.ma&&t.ma(),e.M=null,ed(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.ma())}function eW(e,t){try{var r=e.j;if(0!=r.G&&(r.g==e||e0(r.h,e))){if(!e.K&&e0(r.h,e)&&3==r.G){try{var n=r.Da.g.parse(t)}catch(e){n=null}if(Array.isArray(n)&&3==n.length){var i=n;if(0==i[0]){e:if(!r.u){if(r.g){if(r.g.F+3e3<e.F)tY(r),tj(r);else break e}tQ(r),eD(18)}}else r.za=i[1],0<r.za-r.T&&37500>i[2]&&r.F&&0==r.v&&!r.C&&(r.C=eN(w(r.Za,r),6e3));if(1>=eZ(r.h)&&r.ca){try{r.ca()}catch(e){}r.ca=void 0}}else t0(r,11)}else if((e.K||r.g==e)&&tY(r),!I(t))for(i=r.Da.g.parse(t),t=0;t<i.length;t++){let a=i[t];if(r.T=a[0],a=a[1],2==r.G){if("c"==a[0]){r.K=a[1],r.ia=a[2];let t=a[3];null!=t&&(r.la=t,r.j.info("VER="+r.la));let i=a[4];null!=i&&(r.Aa=i,r.j.info("SVER="+r.Aa));let l=a[5];null!=l&&"number"==typeof l&&0<l&&(n=1.5*l,r.L=n,r.j.info("backChannelRequestTimeoutMs_="+n)),n=r;let h=e.g;if(h){let e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=n.h;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(e1(s,s.h),s.h=null))}if(n.D){let e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(n.ya=e,tn(n.I,n.D,e))}}if(r.G=3,r.l&&r.l.ua(),r.ba&&(r.R=Date.now()-e.F,r.j.info("Handshake RTT: "+r.R+"ms")),(n=r).qa=t2(n,n.J?n.ia:null,n.W),e.K){e2(n.h,e);var o=n.L;o&&(e.I=o),e.B&&(eK(e),e$(e)),n.g=e}else tH(n);0<r.i.length&&tz(r)}else"stop"!=a[0]&&"close"!=a[0]||t0(r,7)}else 3==r.G&&("stop"==a[0]||"close"==a[0]?"stop"==a[0]?t0(r,7):tF(r):"noop"!=a[0]&&r.l&&r.l.ta(a),r.v=0)}}ex(4)}catch(e){}}eU.prototype.ca=function(e){e=e.target;let t=this.M;t&&3==tP(e)?t.j():this.Y(e)},eU.prototype.Y=function(e){try{if(e==this.g)e:{let f=tP(this.g);var t=this.g.Ba();let d=this.g.Z();if(!(3>f)&&(3!=f||this.g&&(this.h.h||this.g.oa()||tU(this.g)))){this.J||4!=f||7==t||(8==t||0>=d?ex(3):ex(2)),eK(this);var r=this.g.Z();this.X=r;t:if(ez(this)){var n=tU(this.g);e="";var i=n.length,s=4==tP(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){eQ(this),eH(this);var a="";break t}this.h.i=new o.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(n[t],{stream:!(s&&t==i-1)});n.length=0,this.h.g+=e,this.C=0,a=this.h.g}else a=this.g.oa();if(this.o=200==r,function(e,t,r,n,i,s,o){e.info(function(){return"XMLHTTP RESP ("+n+") [ attempt "+i+"]: "+t+"\n"+r+"\n"+s+" "+o})}(this.i,this.u,this.A,this.l,this.R,f,r),this.o){if(this.T&&!this.K){t:{if(this.g){var l,h=this.g;if((l=h.g?h.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!I(l)){var u=l;break t}}u=null}if(r=u)eL(this.i,this.l,r,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,eW(this,r);else{this.o=!1,this.s=3,eD(12),eQ(this),eH(this);break e}}if(this.P){let e;for(r=!0;!this.J&&this.C<a.length;)if((e=function(e,t){var r=e.C,n=t.indexOf("\n",r);return -1==n?eF:isNaN(r=Number(t.substring(r,n)))?eV:(n+=1)+r>t.length?eF:(t=t.slice(n,n+r),e.C=n+r,t)}(this,a))==eF){4==f&&(this.s=4,eD(14),r=!1),eL(this.i,this.l,null,"[Incomplete Response]");break}else if(e==eV){this.s=4,eD(15),eL(this.i,this.l,a,"[Invalid Chunk]"),r=!1;break}else eL(this.i,this.l,e,null),eW(this,e);if(ez(this)&&0!=this.C&&(this.h.g=this.h.g.slice(this.C),this.C=0),4!=f||0!=a.length||this.h.h||(this.s=1,eD(16),r=!1),this.o=this.o&&r,r){if(0<a.length&&!this.W){this.W=!0;var c=this.j;c.g==this&&c.ba&&!c.M&&(c.j.info("Great, no buffering proxy detected. Bytes received: "+a.length),tW(c),c.M=!0,eD(11))}}else eL(this.i,this.l,a,"[Invalid Chunked Response]"),eQ(this),eH(this)}else eL(this.i,this.l,a,null),eW(this,a);4==f&&eQ(this),this.o&&!this.J&&(4==f?tJ(this.j,this):(this.o=!1,e$(this)))}else(function(e){let t={};e=(e.g&&2<=tP(e)&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let n=0;n<e.length;n++){if(I(e[n]))continue;var r=function(e){var t=1;e=e.split(":");let r=[];for(;0<t&&e.length;)r.push(e.shift()),t--;return e.length&&r.push(e.join(":")),r}(e[n]);let i=r[0];if("string"!=typeof(r=r[1]))continue;r=r.trim();let s=t[i]||[];t[i]=s,s.push(r)}!function(e,t){for(let r in e)t.call(void 0,e[r],r,e)}(t,function(e){return e.join(", ")})})(this.g),400==r&&0<a.indexOf("Unknown SID")?(this.s=3,eD(12)):(this.s=0,eD(13)),eQ(this),eH(this)}}}catch(e){}finally{}},eU.prototype.cancel=function(){this.J=!0,eQ(this)},eU.prototype.ba=function(){this.B=null;let e=Date.now();0<=e-this.S?(function(e,t){e.info(function(){return"TIMEOUT: "+t})}(this.i,this.A),2!=this.L&&(ex(),eD(17)),eQ(this),this.s=2,eH(this)):eG(this,this.S-e)};var eX=class{constructor(e,t){this.g=e,this.map=t}};function eY(e){this.l=e||10,e=o.PerformanceNavigationTiming?0<(e=o.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function eJ(e){return!!e.h||!!e.g&&e.g.size>=e.j}function eZ(e){return e.h?1:e.g?e.g.size:0}function e0(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function e1(e,t){e.g?e.g.add(t):e.h=t}function e2(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function e6(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(let r of e.g.values())t=t.concat(r.D);return t}return _(e.i)}function e5(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(a(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var r=function(e){if(e.na&&"function"==typeof e.na)return e.na();if(!e.V||"function"!=typeof e.V){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(a(e)||"string"==typeof e){var t=[];e=e.length;for(var r=0;r<e;r++)t.push(r);return t}for(let n in t=[],r=0,e)t[r++]=n;return t}}}(e),n=function(e){if(e.V&&"function"==typeof e.V)return e.V();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(a(e)){for(var t=[],r=e.length,n=0;n<r;n++)t.push(e[n]);return t}for(n in t=[],r=0,e)t[r++]=e[n];return t}(e),i=n.length,s=0;s<i;s++)t.call(void 0,n[s],r&&r[s],e)}eY.prototype.cancel=function(){if(this.i=e6(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(let e of this.g.values())e.cancel();this.g.clear()}};var e4=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function e7(e){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,e instanceof e7){this.h=e.h,te(this,e.j),this.o=e.o,this.g=e.g,tt(this,e.s),this.l=e.l;var t=e.i,r=new td;r.i=t.i,t.g&&(r.g=new Map(t.g),r.h=t.h),tr(this,r),this.m=e.m}else e&&(t=String(e).match(e4))?(this.h=!1,te(this,t[1]||"",!0),this.o=ts(t[2]||""),this.g=ts(t[3]||"",!0),tt(this,t[4]),this.l=ts(t[5]||"",!0),tr(this,t[6]||"",!0),this.m=ts(t[7]||"")):(this.h=!1,this.i=new td(null,this.h))}function e9(e){return new e7(e)}function te(e,t,r){e.j=r?ts(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function tt(e,t){if(t){if(isNaN(t=Number(t))||0>t)throw Error("Bad port number "+t);e.s=t}else e.s=null}function tr(e,t,r){var n,i;t instanceof td?(e.i=t,n=e.i,(i=e.h)&&!n.j&&(tp(n),n.i=null,n.g.forEach(function(e,t){var r=t.toLowerCase();t!=r&&(tg(this,t),ty(this,r,e))},n)),n.j=i):(r||(t=to(t,tc)),e.i=new td(t,e.h))}function tn(e,t,r){e.i.set(t,r)}function ti(e){return tn(e,"zx",Math.floor(0x80000000*Math.random()).toString(36)+Math.abs(Math.floor(0x80000000*Math.random())^Date.now()).toString(36)),e}function ts(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function to(e,t,r){return"string"==typeof e?(e=encodeURI(e).replace(t,ta),r&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function ta(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}e7.prototype.toString=function(){var e=[],t=this.j;t&&e.push(to(t,tl,!0),":");var r=this.g;return(r||"file"==t)&&(e.push("//"),(t=this.o)&&e.push(to(t,tl,!0),"@"),e.push(encodeURIComponent(String(r)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(r=this.s)&&e.push(":",String(r))),(r=this.l)&&(this.g&&"/"!=r.charAt(0)&&e.push("/"),e.push(to(r,"/"==r.charAt(0)?tu:th,!0))),(r=this.i.toString())&&e.push("?",r),(r=this.m)&&e.push("#",to(r,tf)),e.join("")};var tl=/[#\/\?@]/g,th=/[#\?:]/g,tu=/[#\?]/g,tc=/[#\?@]/g,tf=/#/g;function td(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function tp(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var r=0;r<e.length;r++){var n=e[r].indexOf("="),i=null;if(0<=n){var s=e[r].substring(0,n);i=e[r].substring(n+1)}else s=e[r];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(e.i,function(t,r){e.add(decodeURIComponent(t.replace(/\+/g," ")),r)}))}function tg(e,t){tp(e),t=tv(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function tm(e,t){return tp(e),t=tv(e,t),e.g.has(t)}function ty(e,t,r){tg(e,t),0<r.length&&(e.i=null,e.g.set(tv(e,t),_(r)),e.h+=r.length)}function tv(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function tw(e,t,r,n,i){try{i&&(i.onload=null,i.onerror=null,i.onabort=null,i.ontimeout=null),n(r)}catch(e){}}function tb(){this.g=new em}function tE(e){this.l=e.Ub||null,this.j=e.eb||!1}function t_(e,t){eo.call(this),this.D=e,this.o=t,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}function tT(e){e.j.read().then(e.Pa.bind(e)).catch(e.ga.bind(e))}function tI(e){e.readyState=4,e.l=null,e.j=null,e.v=null,tS(e)}function tS(e){e.onreadystatechange&&e.onreadystatechange.call(e)}function tC(e){let t="";return A(e,function(e,r){t+=r,t+=":",t+=e,t+="\r\n"}),t}function tx(e,t,r){e:{for(n in r){var n=!1;break e}n=!0}n||(r=tC(r),"string"==typeof e?null!=r&&encodeURIComponent(String(r)):tn(e,t,r))}function tA(e){eo.call(this),this.headers=new Map,this.o=e||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}(r=td.prototype).add=function(e,t){tp(this),this.i=null,e=tv(this,e);var r=this.g.get(e);return r||this.g.set(e,r=[]),r.push(t),this.h+=1,this},r.forEach=function(e,t){tp(this),this.g.forEach(function(r,n){r.forEach(function(r){e.call(t,r,n,this)},this)},this)},r.na=function(){tp(this);let e=Array.from(this.g.values()),t=Array.from(this.g.keys()),r=[];for(let n=0;n<t.length;n++){let i=e[n];for(let e=0;e<i.length;e++)r.push(t[n])}return r},r.V=function(e){tp(this);let t=[];if("string"==typeof e)tm(this,e)&&(t=t.concat(this.g.get(tv(this,e))));else{e=Array.from(this.g.values());for(let r=0;r<e.length;r++)t=t.concat(e[r])}return t},r.set=function(e,t){return tp(this),this.i=null,tm(this,e=tv(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},r.get=function(e,t){return e&&0<(e=this.V(e)).length?String(e[0]):t},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";let e=[],t=Array.from(this.g.keys());for(var r=0;r<t.length;r++){var n=t[r];let s=encodeURIComponent(String(n)),o=this.V(n);for(n=0;n<o.length;n++){var i=s;""!==o[n]&&(i+="="+encodeURIComponent(String(o[n]))),e.push(i)}}return this.i=e.join("&")},E(tE,ey),tE.prototype.g=function(){return new t_(this.l,this.j)},tE.prototype.i=(e={},function(){return e}),E(t_,eo),(r=t_.prototype).open=function(e,t){if(0!=this.readyState)throw this.abort(),Error("Error reopening a connection");this.B=e,this.A=t,this.readyState=1,tS(this)},r.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;let t={headers:this.u,method:this.B,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||o).fetch(new Request(this.A,t)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,tI(this)),this.readyState=0},r.Sa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,tS(this)),this.g&&(this.readyState=3,tS(this),this.g))){if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(void 0!==o.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;tT(this)}else e.text().then(this.Ra.bind(this),this.ga.bind(this))}},r.Pa=function(e){if(this.g){if(this.o&&e.value)this.response.push(e.value);else if(!this.o){var t=e.value?e.value:new Uint8Array(0);(t=this.v.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?tI(this):tS(this),3==this.readyState&&tT(this)}},r.Ra=function(e){this.g&&(this.response=this.responseText=e,tI(this))},r.Qa=function(e){this.g&&(this.response=e,tI(this))},r.ga=function(){this.g&&tI(this)},r.setRequestHeader=function(e,t){this.u.append(e,t)},r.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";let e=[],t=this.h.entries();for(var r=t.next();!r.done;)e.push((r=r.value)[0]+": "+r[1]),r=t.next();return e.join("\r\n")},Object.defineProperty(t_.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}}),E(tA,eo);var tD=/^https?$/i,tk=["POST","PUT"];function tN(e,t){e.h=!1,e.g&&(e.j=!0,e.g.abort(),e.j=!1),e.l=t,e.m=5,tR(e),tO(e)}function tR(e){e.A||(e.A=!0,ea(e,"complete"),ea(e,"error"))}function tL(e){if(e.h&&void 0!==s&&(!e.v[1]||4!=tP(e)||2!=e.Z())){if(e.u&&4==tP(e))eh(e.Ea,0,e);else if(ea(e,"readystatechange"),4==tP(e)){e.h=!1;try{let s=e.Z();switch(s){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t,r,n=!0;break;default:n=!1}if(!(t=n)){if(r=0===s){var i=String(e.D).match(e4)[1]||null;!i&&o.self&&o.self.location&&(i=o.self.location.protocol.slice(0,-1)),r=!tD.test(i?i.toLowerCase():"")}t=r}if(t)ea(e,"complete"),ea(e,"success");else{e.m=6;try{var a=2<tP(e)?e.g.statusText:""}catch(e){a=""}e.l=a+" ["+e.Z()+"]",tR(e)}}finally{tO(e)}}}}function tO(e,t){if(e.g){tM(e);let r=e.g,n=e.v[0]?()=>{}:null;e.g=null,e.v=null,t||ea(e,"ready");try{r.onreadystatechange=n}catch(e){}}}function tM(e){e.I&&(o.clearTimeout(e.I),e.I=null)}function tP(e){return e.g?e.g.readyState:0}function tU(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.H){case"":case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function tB(e,t,r){return r&&r.internalChannelParams&&r.internalChannelParams[e]||t}function tV(e){this.Aa=0,this.i=[],this.j=new eR,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=tB("failFast",!1,e),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=tB("baseRetryDelayMs",5e3,e),this.cb=tB("retryDelaySeedMs",1e4,e),this.Wa=tB("forwardChannelMaxRetries",2,e),this.wa=tB("forwardChannelRequestTimeoutMs",2e4,e),this.pa=e&&e.xmlHttpFactory||void 0,this.Xa=e&&e.Tb||void 0,this.Ca=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.h=new eY(e&&e.concurrentRequestLimit),this.Da=new tb,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=e&&e.Rb||!1,e&&e.xa&&this.j.xa(),e&&e.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&e&&e.detectBufferingProxy||!1,this.ja=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.ja=e.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}function tF(e){if(tq(e),3==e.G){var t=e.U++,r=e9(e.I);if(tn(r,"SID",e.K),tn(r,"RID",t),tn(r,"TYPE","terminate"),tG(e,r),(t=new eU(e,e.j,t)).L=2,t.v=ti(e9(r)),r=!1,o.navigator&&o.navigator.sendBeacon)try{r=o.navigator.sendBeacon(t.v.toString(),"")}catch(e){}!r&&o.Image&&((new Image).src=t.v,r=!0),r||(t.g=t6(t.j,null),t.g.ea(t.v)),t.F=Date.now(),e$(t)}t1(e)}function tj(e){e.g&&(tW(e),e.g.cancel(),e.g=null)}function tq(e){tj(e),e.u&&(o.clearTimeout(e.u),e.u=null),tY(e),e.h.cancel(),e.s&&("number"==typeof e.s&&o.clearTimeout(e.s),e.s=null)}function tz(e){if(!eJ(e.h)&&!e.s){e.s=!0;var t=e.Ga;O||U(),M||(O(),M=!0),P.add(t,e),e.B=0}}function t$(e,t){var r;r=t?t.l:e.U++;let n=e9(e.I);tn(n,"SID",e.K),tn(n,"RID",r),tn(n,"AID",e.T),tG(e,n),e.m&&e.o&&tx(n,e.m,e.o),r=new eU(e,e.j,r,e.B+1),null===e.m&&(r.H=e.o),t&&(e.i=t.D.concat(e.i)),t=tK(e,r,1e3),r.I=Math.round(.5*e.wa)+Math.round(.5*e.wa*Math.random()),e1(e.h,r),ej(r,n,t)}function tG(e,t){e.H&&A(e.H,function(e,r){tn(t,r,e)}),e.l&&e5({},function(e,r){tn(t,r,e)})}function tK(e,t,r){r=Math.min(e.i.length,r);var n=e.l?w(e.l.Na,e.l,e):null;e:{var i=e.i;let t=-1;for(;;){let e=["count="+r];-1==t?0<r?(t=i[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let o=0;o<r;o++){let r=i[o].g,a=i[o].map;if(0>(r-=t))t=Math.max(0,i[o].g-100),s=!1;else try{!function(e,t,r){let n=r||"";try{e5(e,function(e,r){let i=e;l(e)&&(i=ep(e)),t.push(n+r+"="+encodeURIComponent(i))})}catch(e){throw t.push(n+"type="+encodeURIComponent("_badmap")),e}}(a,e,"req"+r+"_")}catch(e){n&&n(a)}}if(s){n=e.join("&");break e}}}return e=e.i.splice(0,r),t.D=e,n}function tH(e){if(!e.g&&!e.u){e.Y=1;var t=e.Fa;O||U(),M||(O(),M=!0),P.add(t,e),e.v=0}}function tQ(e){return!e.g&&!e.u&&!(3<=e.v)&&(e.Y++,e.u=eN(w(e.Fa,e),tZ(e,e.v)),e.v++,!0)}function tW(e){null!=e.A&&(o.clearTimeout(e.A),e.A=null)}function tX(e){e.g=new eU(e,e.j,"rpc",e.Y),null===e.m&&(e.g.H=e.o),e.g.O=0;var t=e9(e.qa);tn(t,"RID","rpc"),tn(t,"SID",e.K),tn(t,"AID",e.T),tn(t,"CI",e.F?"0":"1"),!e.F&&e.ja&&tn(t,"TO",e.ja),tn(t,"TYPE","xmlhttp"),tG(e,t),e.m&&e.o&&tx(t,e.m,e.o),e.L&&(e.g.I=e.L);var r=e.g;e=e.ia,r.L=1,r.v=ti(e9(t)),r.m=null,r.P=!0,eq(r,e)}function tY(e){null!=e.C&&(o.clearTimeout(e.C),e.C=null)}function tJ(e,t){var r=null;if(e.g==t){tY(e),tW(e),e.g=null;var n=2}else{if(!e0(e.h,t))return;r=t.D,e2(e.h,t),n=1}if(0!=e.G){if(t.o){if(1==n){r=t.m?t.m.length:0,t=Date.now()-t.F;var i,s=e.B;ea(n=eS(),new ek(n,r)),tz(e)}else tH(e)}else if(3==(s=t.s)||0==s&&0<t.X||!(1==n&&(i=t,!(eZ(e.h)>=e.h.j-+!!e.s)&&(e.s?(e.i=i.D.concat(e.i),!0):1!=e.G&&2!=e.G&&!(e.B>=(e.Va?0:e.Wa))&&(e.s=eN(w(e.Ga,e,i),tZ(e,e.B)),e.B++,!0)))||2==n&&tQ(e)))switch(r&&0<r.length&&((t=e.h).i=t.i.concat(r)),s){case 1:t0(e,5);break;case 4:t0(e,10);break;case 3:t0(e,6);break;default:t0(e,2)}}}function tZ(e,t){let r=e.Ta+Math.floor(Math.random()*e.cb);return e.isActive()||(r*=2),r*t}function t0(e,t){if(e.j.info("Error code "+t),2==t){var r=w(e.fb,e),n=e.Xa;let t=!n;n=new e7(n||"//www.google.com/images/cleardot.gif"),o.location&&"http"==o.location.protocol||te(n,"https"),ti(n),t?function(e,t){let r=new eR;if(o.Image){let n=new Image;n.onload=b(tw,r,"TestLoadImage: loaded",!0,t,n),n.onerror=b(tw,r,"TestLoadImage: error",!1,t,n),n.onabort=b(tw,r,"TestLoadImage: abort",!1,t,n),n.ontimeout=b(tw,r,"TestLoadImage: timeout",!1,t,n),o.setTimeout(function(){n.ontimeout&&n.ontimeout()},1e4),n.src=e}else t(!1)}(n.toString(),r):function(e,t){let r=new eR,n=new AbortController,i=setTimeout(()=>{n.abort(),tw(r,"TestPingServer: timeout",!1,t)},1e4);fetch(e,{signal:n.signal}).then(e=>{clearTimeout(i),e.ok?tw(r,"TestPingServer: ok",!0,t):tw(r,"TestPingServer: server error",!1,t)}).catch(()=>{clearTimeout(i),tw(r,"TestPingServer: error",!1,t)})}(n.toString(),r)}else eD(2);e.G=0,e.l&&e.l.sa(t),t1(e),tq(e)}function t1(e){if(e.G=0,e.ka=[],e.l){let t=e6(e.h);(0!=t.length||0!=e.i.length)&&(T(e.ka,t),T(e.ka,e.i),e.h.i.length=0,_(e.i),e.i.length=0),e.l.ra()}}function t2(e,t,r){var n=r instanceof e7?e9(r):new e7(r);if(""!=n.g)t&&(n.g=t+"."+n.g),tt(n,n.s);else{var i=o.location;n=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new e7(null);n&&te(s,n),t&&(s.g=t),i&&tt(s,i),r&&(s.l=r),n=s}return r=e.D,t=e.ya,r&&t&&tn(n,r,t),tn(n,"VER",e.la),tG(e,n),n}function t6(e,t,r){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return(t=new tA(e.Ca&&!e.pa?new tE({eb:r}):e.pa)).Ha(e.J),t}function t5(){}function t3(){}function t8(e,t){eo.call(this),this.g=new tV(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.o=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.va&&(e?e["X-WebChannel-Client-Profile"]=t.va:e={"X-WebChannel-Client-Profile":t.va}),this.g.S=e,(e=t&&t.Sb)&&!I(e)&&(this.g.m=e),this.v=t&&t.supportsCrossDomainXhr||!1,this.u=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!I(t)&&(this.g.D=t,null!==(e=this.h)&&t in e&&t in(e=this.h)&&delete e[t]),this.j=new t9(this)}function t4(e){eE.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(let r in t){e=r;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function t7(){e_.call(this),this.status=1}function t9(e){this.g=e}(r=tA.prototype).Ha=function(e){this.J=e},r.ea=function(e,r,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+e);r=r?r.toUpperCase():"GET",this.D=e,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():t.g(),this.v=this.o?ev(this.o):ev(t),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(r,String(e),!0),this.B=!1}catch(e){tN(this,e);return}if(e=n||"",n=new Map(this.headers),i){if(Object.getPrototypeOf(i)===Object.prototype)for(var s in i)n.set(s,i[s]);else if("function"==typeof i.keys&&"function"==typeof i.get)for(let e of i.keys())n.set(e,i.get(e));else throw Error("Unknown input type for opt_headers: "+String(i))}for(let[t,a]of(i=Array.from(n.keys()).find(e=>"content-type"==e.toLowerCase()),s=o.FormData&&e instanceof o.FormData,!(0<=Array.prototype.indexOf.call(tk,r,void 0))||i||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),n))this.g.setRequestHeader(t,a);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{tM(this),this.u=!0,this.g.send(e),this.u=!1}catch(e){tN(this,e)}},r.abort=function(e){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=e||7,ea(this,"complete"),ea(this,"abort"),tO(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),tO(this,!0)),tA.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?tL(this):this.bb())},r.bb=function(){tL(this)},r.isActive=function(){return!!this.g},r.Z=function(){try{return 2<tP(this)?this.g.status:-1}catch(e){return -1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},r.Oa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),eg(t)}},r.Ba=function(){return this.m},r.Ka=function(){return"string"==typeof this.l?this.l:String(this.l)},(r=tV.prototype).la=8,r.G=1,r.connect=function(e,t,r,n){eD(0),this.W=e,this.H=t||{},r&&void 0!==n&&(this.H.OSID=r,this.H.OAID=n),this.F=this.X,this.I=t2(this,null,this.W),tz(this)},r.Ga=function(e){if(this.s){if(this.s=null,1==this.G){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;let i=new eU(this,this.j,e),s=this.o;if(this.S&&(s?N(s=D(s),this.S):s=this.S),null!==this.m||this.O||(i.H=s,s=null),this.P)e:{for(var t=0,r=0;r<this.i.length;r++){t:{var n=this.i[r];if("__data__"in n.map&&"string"==typeof(n=n.map.__data__)){n=n.length;break t}n=void 0}if(void 0===n)break;if(4096<(t+=n)){t=r;break e}if(4096===t||r===this.i.length-1){t=r+1;break e}}t=1e3}else t=1e3;t=tK(this,i,t),tn(r=e9(this.I),"RID",e),tn(r,"CVER",22),this.D&&tn(r,"X-HTTP-Session-Id",this.D),tG(this,r),s&&(this.O?t="headers="+encodeURIComponent(String(tC(s)))+"&"+t:this.m&&tx(r,this.m,s)),e1(this.h,i),this.Ua&&tn(r,"TYPE","init"),this.P?(tn(r,"$req",t),tn(r,"SID","null"),i.T=!0,ej(i,r,null)):ej(i,r,t),this.G=2}}else 3==this.G&&(e?t$(this,e):0==this.i.length||eJ(this.h)||t$(this))}},r.Fa=function(){if(this.u=null,tX(this),this.ba&&!(this.M||null==this.g||0>=this.R)){var e=2*this.R;this.j.info("BP detection timer enabled: "+e),this.A=eN(w(this.ab,this),e)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,eD(10),tj(this),tX(this))},r.Za=function(){null!=this.C&&(this.C=null,tj(this),tQ(this),eD(19))},r.fb=function(e){e?(this.j.info("Successfully pinged google.com"),eD(2)):(this.j.info("Failed to ping google.com"),eD(1))},r.isActive=function(){return!!this.l&&this.l.isActive(this)},(r=t5.prototype).ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){},t3.prototype.g=function(e,t){return new t8(e,t)},E(t8,eo),t8.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},t8.prototype.close=function(){tF(this.g)},t8.prototype.o=function(e){var t=this.g;if("string"==typeof e){var r={};r.__data__=e,e=r}else this.u&&((r={}).__data__=ep(e),e=r);t.i.push(new eX(t.Ya++,e)),3==t.G&&tz(t)},t8.prototype.N=function(){this.g.l=null,delete this.j,tF(this.g),delete this.g,t8.aa.N.call(this)},E(t4,eE),E(t7,e_),E(t9,t5),t9.prototype.ua=function(){ea(this.g,"a")},t9.prototype.ta=function(e){ea(this.g,new t4(e))},t9.prototype.sa=function(e){ea(this.g,new t7)},t9.prototype.ra=function(){ea(this.g,"b")},t3.prototype.createWebChannel=t3.prototype.g,t8.prototype.send=t8.prototype.o,t8.prototype.open=t8.prototype.m,t8.prototype.close=t8.prototype.close,y=e8.createWebChannelTransport=function(){return new t3},m=e8.getStatEventTarget=function(){return eS()},g=e8.Event=eT,p=e8.Stat={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},eO.NO_ERROR=0,eO.TIMEOUT=8,eO.HTTP_ERROR=6,d=e8.ErrorCode=eO,eM.COMPLETE="complete",f=e8.EventType=eM,ew.EventType=eb,eb.OPEN="a",eb.CLOSE="b",eb.ERROR="c",eb.MESSAGE="d",eo.prototype.listen=eo.prototype.K,c=e8.WebChannel=ew,e8.FetchXmlHttpFactory=tE,tA.prototype.listenOnce=tA.prototype.L,tA.prototype.getLastError=tA.prototype.Ka,tA.prototype.getLastErrorCode=tA.prototype.Ba,tA.prototype.getStatus=tA.prototype.Z,tA.prototype.getResponseJson=tA.prototype.Oa,tA.prototype.getResponseText=tA.prototype.oa,tA.prototype.send=tA.prototype.ea,tA.prototype.setWithCredentials=tA.prototype.Ha,u=e8.XhrIo=tA}).apply(void 0!==e3?e3:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{}),v=function(e){var t,r,n=function(e){var t=e.length;if(t%4>0)throw Error("Invalid string. Length must be a multiple of 4");var r=e.indexOf("=");-1===r&&(r=t);var n=r===t?0:4-r%4;return[r,n]}(e),i=n[0],s=n[1],o=new e9((i+s)*3/4-s),a=0,l=s>0?i-4:i;for(r=0;r<l;r+=4)t=e7[e.charCodeAt(r)]<<18|e7[e.charCodeAt(r+1)]<<12|e7[e.charCodeAt(r+2)]<<6|e7[e.charCodeAt(r+3)],o[a++]=t>>16&255,o[a++]=t>>8&255,o[a++]=255&t;return 2===s&&(t=e7[e.charCodeAt(r)]<<2|e7[e.charCodeAt(r+1)]>>4,o[a++]=255&t),1===s&&(t=e7[e.charCodeAt(r)]<<10|e7[e.charCodeAt(r+1)]<<4|e7[e.charCodeAt(r+2)]>>2,o[a++]=t>>8&255,o[a++]=255&t),o},w=function(e){for(var t,r=e.length,n=r%3,i=[],s=0,o=r-n;s<o;s+=16383)i.push(function(e,t,r){for(var n,i=[],s=t;s<r;s+=3)i.push(e4[(n=(e[s]<<16&0xff0000)+(e[s+1]<<8&65280)+(255&e[s+2]))>>18&63]+e4[n>>12&63]+e4[n>>6&63]+e4[63&n]);return i.join("")}(e,s,s+16383>o?o:s+16383));return 1===n?i.push(e4[(t=e[r-1])>>2]+e4[t<<4&63]+"=="):2===n&&i.push(e4[(t=(e[r-2]<<8)+e[r-1])>>10]+e4[t>>4&63]+e4[t<<2&63]+"="),i.join("")};for(var e4=[],e7=[],e9="undefined"!=typeof Uint8Array?Uint8Array:Array,te="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",tt=0,tr=te.length;tt<tr;++tt)e4[tt]=te[tt],e7[te.charCodeAt(tt)]=tt;e7["-".charCodeAt(0)]=62,e7["_".charCodeAt(0)]=63,b=function(e,t,r,n,i){var s,o,a=8*i-n-1,l=(1<<a)-1,h=l>>1,u=-7,c=r?i-1:0,f=r?-1:1,d=e[t+c];for(c+=f,s=d&(1<<-u)-1,d>>=-u,u+=a;u>0;s=256*s+e[t+c],c+=f,u-=8);for(o=s&(1<<-u)-1,s>>=-u,u+=n;u>0;o=256*o+e[t+c],c+=f,u-=8);if(0===s)s=1-h;else{if(s===l)return o?NaN:1/0*(d?-1:1);o+=Math.pow(2,n),s-=h}return(d?-1:1)*o*Math.pow(2,s-n)},E=function(e,t,r,n,i,s){var o,a,l,h=8*s-i-1,u=(1<<h)-1,c=u>>1,f=5960464477539062e-23*(23===i),d=n?0:s-1,p=n?1:-1,g=+(t<0||0===t&&1/t<0);for(isNaN(t=Math.abs(t))||t===1/0?(a=+!!isNaN(t),o=u):(o=Math.floor(Math.log(t)/Math.LN2),t*(l=Math.pow(2,-o))<1&&(o--,l*=2),o+c>=1?t+=f/l:t+=f*Math.pow(2,1-c),t*l>=2&&(o++,l/=2),o+c>=u?(a=0,o=u):o+c>=1?(a=(t*l-1)*Math.pow(2,i),o+=c):(a=t*Math.pow(2,c-1)*Math.pow(2,i),o=0));i>=8;e[r+d]=255&a,d+=p,a/=256,i-=8);for(o=o<<i|a,h+=i;h>0;e[r+d]=255&o,d+=p,o/=256,h-=8);e[r+d-p]|=128*g};const tn="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;function ti(e){if(e>0x7fffffff)throw RangeError('The value "'+e+'" is invalid for option "size"');let t=new Uint8Array(e);return Object.setPrototypeOf(t,ts.prototype),t}function ts(e,t,r){if("number"==typeof e){if("string"==typeof t)throw TypeError('The "string" argument must be of type string. Received type number');return tl(e)}return to(e,t,r)}function to(e,t,r){if("string"==typeof e)return function(e,t){if(("string"!=typeof t||""===t)&&(t="utf8"),!ts.isEncoding(t))throw TypeError("Unknown encoding: "+t);let r=0|tf(e,t),n=ti(r),i=n.write(e,t);return i!==r&&(n=n.slice(0,i)),n}(e,t);if(ArrayBuffer.isView(e))return function(e){if(tM(e,Uint8Array)){let t=new Uint8Array(e);return tu(t.buffer,t.byteOffset,t.byteLength)}return th(e)}(e);if(null==e)throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(tM(e,ArrayBuffer)||e&&tM(e.buffer,ArrayBuffer)||"undefined"!=typeof SharedArrayBuffer&&(tM(e,SharedArrayBuffer)||e&&tM(e.buffer,SharedArrayBuffer)))return tu(e,t,r);if("number"==typeof e)throw TypeError('The "value" argument must not be of type number. Received type number');let n=e.valueOf&&e.valueOf();if(null!=n&&n!==e)return ts.from(n,t,r);let i=function(e){var t;if(ts.isBuffer(e)){let t=0|tc(e.length),r=ti(t);return 0===r.length||e.copy(r,0,0,t),r}return void 0!==e.length?"number"!=typeof e.length||(t=e.length)!=t?ti(0):th(e):"Buffer"===e.type&&Array.isArray(e.data)?th(e.data):void 0}(e);if(i)return i;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return ts.from(e[Symbol.toPrimitive]("string"),t,r);throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function ta(e){if("number"!=typeof e)throw TypeError('"size" argument must be of type number');if(e<0)throw RangeError('The value "'+e+'" is invalid for option "size"')}function tl(e){return ta(e),ti(e<0?0:0|tc(e))}function th(e){let t=e.length<0?0:0|tc(e.length),r=ti(t);for(let n=0;n<t;n+=1)r[n]=255&e[n];return r}function tu(e,t,r){let n;if(t<0||e.byteLength<t)throw RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(r||0))throw RangeError('"length" is outside of buffer bounds');return Object.setPrototypeOf(n=void 0===t&&void 0===r?new Uint8Array(e):void 0===r?new Uint8Array(e,t):new Uint8Array(e,t,r),ts.prototype),n}function tc(e){if(e>=0x7fffffff)throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");return 0|e}function tf(e,t){if(ts.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||tM(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);let r=e.length,n=arguments.length>2&&!0===arguments[2];if(!n&&0===r)return 0;let i=!1;for(;;)switch(t){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return tR(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return tL(e).length;default:if(i)return n?-1:tR(e).length;t=(""+t).toLowerCase(),i=!0}}function td(e,t,r){let n=!1;if((void 0===t||t<0)&&(t=0),t>this.length||((void 0===r||r>this.length)&&(r=this.length),r<=0||(r>>>=0)<=(t>>>=0)))return"";for(e||(e="utf8");;)switch(e){case"hex":return function(e,t,r){let n=e.length;(!t||t<0)&&(t=0),(!r||r<0||r>n)&&(r=n);let i="";for(let n=t;n<r;++n)i+=tP[e[n]];return i}(this,t,r);case"utf8":case"utf-8":return ty(this,t,r);case"ascii":return function(e,t,r){let n="";r=Math.min(e.length,r);for(let i=t;i<r;++i)n+=String.fromCharCode(127&e[i]);return n}(this,t,r);case"latin1":case"binary":return function(e,t,r){let n="";r=Math.min(e.length,r);for(let i=t;i<r;++i)n+=String.fromCharCode(e[i]);return n}(this,t,r);case"base64":var i,s;return i=t,s=r,0===i&&s===this.length?w(this):w(this.slice(i,s));case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return function(e,t,r){let n=e.slice(t,r),i="";for(let e=0;e<n.length-1;e+=2)i+=String.fromCharCode(n[e]+256*n[e+1]);return i}(this,t,r);default:if(n)throw TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),n=!0}}function tp(e,t,r){let n=e[t];e[t]=e[r],e[r]=n}function tg(e,t,r,n,i){var s;if(0===e.length)return -1;if("string"==typeof r?(n=r,r=0):r>0x7fffffff?r=0x7fffffff:r<-0x80000000&&(r=-0x80000000),(s=r=+r)!=s&&(r=i?0:e.length-1),r<0&&(r=e.length+r),r>=e.length){if(i)return -1;r=e.length-1}else if(r<0){if(!i)return -1;r=0}if("string"==typeof t&&(t=ts.from(t,n)),ts.isBuffer(t))return 0===t.length?-1:tm(e,t,r,n,i);if("number"==typeof t)return(t&=255,"function"==typeof Uint8Array.prototype.indexOf)?i?Uint8Array.prototype.indexOf.call(e,t,r):Uint8Array.prototype.lastIndexOf.call(e,t,r):tm(e,[t],r,n,i);throw TypeError("val must be string, number or Buffer")}function tm(e,t,r,n,i){let s,o=1,a=e.length,l=t.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(e.length<2||t.length<2)return -1;o=2,a/=2,l/=2,r/=2}function h(e,t){return 1===o?e[t]:e.readUInt16BE(t*o)}if(i){let n=-1;for(s=r;s<a;s++)if(h(e,s)===h(t,-1===n?0:s-n)){if(-1===n&&(n=s),s-n+1===l)return n*o}else -1!==n&&(s-=s-n),n=-1}else for(r+l>a&&(r=a-l),s=r;s>=0;s--){let r=!0;for(let n=0;n<l;n++)if(h(e,s+n)!==h(t,n)){r=!1;break}if(r)return s}return -1}function ty(e,t,r){r=Math.min(e.length,r);let n=[],i=t;for(;i<r;){let t=e[i],s=null,o=t>239?4:t>223?3:t>191?2:1;if(i+o<=r){let r,n,a,l;switch(o){case 1:t<128&&(s=t);break;case 2:(192&(r=e[i+1]))==128&&(l=(31&t)<<6|63&r)>127&&(s=l);break;case 3:r=e[i+1],n=e[i+2],(192&r)==128&&(192&n)==128&&(l=(15&t)<<12|(63&r)<<6|63&n)>2047&&(l<55296||l>57343)&&(s=l);break;case 4:r=e[i+1],n=e[i+2],a=e[i+3],(192&r)==128&&(192&n)==128&&(192&a)==128&&(l=(15&t)<<18|(63&r)<<12|(63&n)<<6|63&a)>65535&&l<1114112&&(s=l)}}null===s?(s=65533,o=1):s>65535&&(s-=65536,n.push(s>>>10&1023|55296),s=56320|1023&s),n.push(s),i+=o}return function(e){let t=e.length;if(t<=4096)return String.fromCharCode.apply(String,e);let r="",n=0;for(;n<t;)r+=String.fromCharCode.apply(String,e.slice(n,n+=4096));return r}(n)}function tv(e,t,r){if(e%1!=0||e<0)throw RangeError("offset is not uint");if(e+t>r)throw RangeError("Trying to access beyond buffer length")}function tw(e,t,r,n,i,s){if(!ts.isBuffer(e))throw TypeError('"buffer" argument must be a Buffer instance');if(t>i||t<s)throw RangeError('"value" argument is out of bounds');if(r+n>e.length)throw RangeError("Index out of range")}function tb(e,t,r,n,i){tA(t,n,i,e,r,7);let s=Number(t&BigInt(0xffffffff));e[r++]=s,s>>=8,e[r++]=s,s>>=8,e[r++]=s,s>>=8,e[r++]=s;let o=Number(t>>BigInt(32)&BigInt(0xffffffff));return e[r++]=o,o>>=8,e[r++]=o,o>>=8,e[r++]=o,o>>=8,e[r++]=o,r}function tE(e,t,r,n,i){tA(t,n,i,e,r,7);let s=Number(t&BigInt(0xffffffff));e[r+7]=s,s>>=8,e[r+6]=s,s>>=8,e[r+5]=s,s>>=8,e[r+4]=s;let o=Number(t>>BigInt(32)&BigInt(0xffffffff));return e[r+3]=o,o>>=8,e[r+2]=o,o>>=8,e[r+1]=o,o>>=8,e[r]=o,r+8}function t_(e,t,r,n,i,s){if(r+n>e.length||r<0)throw RangeError("Index out of range")}function tT(e,t,r,n,i){return t=+t,r>>>=0,i||t_(e,t,r,4,34028234663852886e22,-34028234663852886e22),E(e,t,r,n,23,4),r+4}function tI(e,t,r,n,i){return t=+t,r>>>=0,i||t_(e,t,r,8,17976931348623157e292,-17976931348623157e292),E(e,t,r,n,52,8),r+8}ts.TYPED_ARRAY_SUPPORT=function(){try{let e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),ts.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(ts.prototype,"parent",{enumerable:!0,get:function(){if(ts.isBuffer(this))return this.buffer}}),Object.defineProperty(ts.prototype,"offset",{enumerable:!0,get:function(){if(ts.isBuffer(this))return this.byteOffset}}),ts.poolSize=8192,ts.from=function(e,t,r){return to(e,t,r)},Object.setPrototypeOf(ts.prototype,Uint8Array.prototype),Object.setPrototypeOf(ts,Uint8Array),ts.alloc=function(e,t,r){return(ta(e),e<=0)?ti(e):void 0!==t?"string"==typeof r?ti(e).fill(t,r):ti(e).fill(t):ti(e)},ts.allocUnsafe=function(e){return tl(e)},ts.allocUnsafeSlow=function(e){return tl(e)},ts.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==ts.prototype},ts.compare=function(e,t){if(tM(e,Uint8Array)&&(e=ts.from(e,e.offset,e.byteLength)),tM(t,Uint8Array)&&(t=ts.from(t,t.offset,t.byteLength)),!ts.isBuffer(e)||!ts.isBuffer(t))throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let r=e.length,n=t.length;for(let i=0,s=Math.min(r,n);i<s;++i)if(e[i]!==t[i]){r=e[i],n=t[i];break}return r<n?-1:+(n<r)},ts.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},ts.concat=function(e,t){let r;if(!Array.isArray(e))throw TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return ts.alloc(0);if(void 0===t)for(r=0,t=0;r<e.length;++r)t+=e[r].length;let n=ts.allocUnsafe(t),i=0;for(r=0;r<e.length;++r){let t=e[r];if(tM(t,Uint8Array))i+t.length>n.length?(ts.isBuffer(t)||(t=ts.from(t)),t.copy(n,i)):Uint8Array.prototype.set.call(n,t,i);else if(ts.isBuffer(t))t.copy(n,i);else throw TypeError('"list" argument must be an Array of Buffers');i+=t.length}return n},ts.byteLength=tf,ts.prototype._isBuffer=!0,ts.prototype.swap16=function(){let e=this.length;if(e%2!=0)throw RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)tp(this,t,t+1);return this},ts.prototype.swap32=function(){let e=this.length;if(e%4!=0)throw RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)tp(this,t,t+3),tp(this,t+1,t+2);return this},ts.prototype.swap64=function(){let e=this.length;if(e%8!=0)throw RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)tp(this,t,t+7),tp(this,t+1,t+6),tp(this,t+2,t+5),tp(this,t+3,t+4);return this},ts.prototype.toString=function(){let e=this.length;return 0===e?"":0==arguments.length?ty(this,0,e):td.apply(this,arguments)},ts.prototype.toLocaleString=ts.prototype.toString,ts.prototype.equals=function(e){if(!ts.isBuffer(e))throw TypeError("Argument must be a Buffer");return this===e||0===ts.compare(this,e)},ts.prototype.inspect=function(){let e="";return e=this.toString("hex",0,50).replace(/(.{2})/g,"$1 ").trim(),this.length>50&&(e+=" ... "),"<Buffer "+e+">"},tn&&(ts.prototype[tn]=ts.prototype.inspect),ts.prototype.compare=function(e,t,r,n,i){if(tM(e,Uint8Array)&&(e=ts.from(e,e.offset,e.byteLength)),!ts.isBuffer(e))throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===r&&(r=e?e.length:0),void 0===n&&(n=0),void 0===i&&(i=this.length),t<0||r>e.length||n<0||i>this.length)throw RangeError("out of range index");if(n>=i&&t>=r)return 0;if(n>=i)return -1;if(t>=r)return 1;if(t>>>=0,r>>>=0,n>>>=0,i>>>=0,this===e)return 0;let s=i-n,o=r-t,a=Math.min(s,o),l=this.slice(n,i),h=e.slice(t,r);for(let e=0;e<a;++e)if(l[e]!==h[e]){s=l[e],o=h[e];break}return s<o?-1:+(o<s)},ts.prototype.includes=function(e,t,r){return -1!==this.indexOf(e,t,r)},ts.prototype.indexOf=function(e,t,r){return tg(this,e,t,r,!0)},ts.prototype.lastIndexOf=function(e,t,r){return tg(this,e,t,r,!1)},ts.prototype.write=function(e,t,r,n){var i,s,o,a,l,h,u,c;if(void 0===t)n="utf8",r=this.length,t=0;else if(void 0===r&&"string"==typeof t)n=t,r=this.length,t=0;else if(isFinite(t))t>>>=0,isFinite(r)?(r>>>=0,void 0===n&&(n="utf8")):(n=r,r=void 0);else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");let f=this.length-t;if((void 0===r||r>f)&&(r=f),e.length>0&&(r<0||t<0)||t>this.length)throw RangeError("Attempt to write outside buffer bounds");n||(n="utf8");let d=!1;for(;;)switch(n){case"hex":return function(e,t,r,n){let i;r=Number(r)||0;let s=e.length-r;n?(n=Number(n))>s&&(n=s):n=s;let o=t.length;for(n>o/2&&(n=o/2),i=0;i<n;++i){let n=parseInt(t.substr(2*i,2),16);if(n!=n)break;e[r+i]=n}return i}(this,e,t,r);case"utf8":case"utf-8":return i=t,s=r,tO(tR(e,this.length-i),this,i,s);case"ascii":case"latin1":case"binary":return o=t,a=r,tO(function(e){let t=[];for(let r=0;r<e.length;++r)t.push(255&e.charCodeAt(r));return t}(e),this,o,a);case"base64":return l=t,h=r,tO(tL(e),this,l,h);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return u=t,c=r,tO(function(e,t){let r,n;let i=[];for(let s=0;s<e.length&&!((t-=2)<0);++s)n=(r=e.charCodeAt(s))>>8,i.push(r%256),i.push(n);return i}(e,this.length-u),this,u,c);default:if(d)throw TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),d=!0}},ts.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},ts.prototype.slice=function(e,t){let r=this.length;e=~~e,t=void 0===t?r:~~t,e<0?(e+=r)<0&&(e=0):e>r&&(e=r),t<0?(t+=r)<0&&(t=0):t>r&&(t=r),t<e&&(t=e);let n=this.subarray(e,t);return Object.setPrototypeOf(n,ts.prototype),n},ts.prototype.readUintLE=ts.prototype.readUIntLE=function(e,t,r){e>>>=0,t>>>=0,r||tv(e,t,this.length);let n=this[e],i=1,s=0;for(;++s<t&&(i*=256);)n+=this[e+s]*i;return n},ts.prototype.readUintBE=ts.prototype.readUIntBE=function(e,t,r){e>>>=0,t>>>=0,r||tv(e,t,this.length);let n=this[e+--t],i=1;for(;t>0&&(i*=256);)n+=this[e+--t]*i;return n},ts.prototype.readUint8=ts.prototype.readUInt8=function(e,t){return e>>>=0,t||tv(e,1,this.length),this[e]},ts.prototype.readUint16LE=ts.prototype.readUInt16LE=function(e,t){return e>>>=0,t||tv(e,2,this.length),this[e]|this[e+1]<<8},ts.prototype.readUint16BE=ts.prototype.readUInt16BE=function(e,t){return e>>>=0,t||tv(e,2,this.length),this[e]<<8|this[e+1]},ts.prototype.readUint32LE=ts.prototype.readUInt32LE=function(e,t){return e>>>=0,t||tv(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+0x1000000*this[e+3]},ts.prototype.readUint32BE=ts.prototype.readUInt32BE=function(e,t){return e>>>=0,t||tv(e,4,this.length),0x1000000*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},ts.prototype.readBigUInt64LE=tU(function(e){tD(e>>>=0,"offset");let t=this[e],r=this[e+7];(void 0===t||void 0===r)&&tk(e,this.length-8);let n=t+256*this[++e]+65536*this[++e]+0x1000000*this[++e],i=this[++e]+256*this[++e]+65536*this[++e]+0x1000000*r;return BigInt(n)+(BigInt(i)<<BigInt(32))}),ts.prototype.readBigUInt64BE=tU(function(e){tD(e>>>=0,"offset");let t=this[e],r=this[e+7];(void 0===t||void 0===r)&&tk(e,this.length-8);let n=0x1000000*t+65536*this[++e]+256*this[++e]+this[++e],i=0x1000000*this[++e]+65536*this[++e]+256*this[++e]+r;return(BigInt(n)<<BigInt(32))+BigInt(i)}),ts.prototype.readIntLE=function(e,t,r){e>>>=0,t>>>=0,r||tv(e,t,this.length);let n=this[e],i=1,s=0;for(;++s<t&&(i*=256);)n+=this[e+s]*i;return n>=(i*=128)&&(n-=Math.pow(2,8*t)),n},ts.prototype.readIntBE=function(e,t,r){e>>>=0,t>>>=0,r||tv(e,t,this.length);let n=t,i=1,s=this[e+--n];for(;n>0&&(i*=256);)s+=this[e+--n]*i;return s>=(i*=128)&&(s-=Math.pow(2,8*t)),s},ts.prototype.readInt8=function(e,t){return(e>>>=0,t||tv(e,1,this.length),128&this[e])?-((255-this[e]+1)*1):this[e]},ts.prototype.readInt16LE=function(e,t){e>>>=0,t||tv(e,2,this.length);let r=this[e]|this[e+1]<<8;return 32768&r?0xffff0000|r:r},ts.prototype.readInt16BE=function(e,t){e>>>=0,t||tv(e,2,this.length);let r=this[e+1]|this[e]<<8;return 32768&r?0xffff0000|r:r},ts.prototype.readInt32LE=function(e,t){return e>>>=0,t||tv(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},ts.prototype.readInt32BE=function(e,t){return e>>>=0,t||tv(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},ts.prototype.readBigInt64LE=tU(function(e){tD(e>>>=0,"offset");let t=this[e],r=this[e+7];return(void 0===t||void 0===r)&&tk(e,this.length-8),(BigInt(this[e+4]+256*this[e+5]+65536*this[e+6]+(r<<24))<<BigInt(32))+BigInt(t+256*this[++e]+65536*this[++e]+0x1000000*this[++e])}),ts.prototype.readBigInt64BE=tU(function(e){tD(e>>>=0,"offset");let t=this[e],r=this[e+7];return(void 0===t||void 0===r)&&tk(e,this.length-8),(BigInt((t<<24)+65536*this[++e]+256*this[++e]+this[++e])<<BigInt(32))+BigInt(0x1000000*this[++e]+65536*this[++e]+256*this[++e]+r)}),ts.prototype.readFloatLE=function(e,t){return e>>>=0,t||tv(e,4,this.length),b(this,e,!0,23,4)},ts.prototype.readFloatBE=function(e,t){return e>>>=0,t||tv(e,4,this.length),b(this,e,!1,23,4)},ts.prototype.readDoubleLE=function(e,t){return e>>>=0,t||tv(e,8,this.length),b(this,e,!0,52,8)},ts.prototype.readDoubleBE=function(e,t){return e>>>=0,t||tv(e,8,this.length),b(this,e,!1,52,8)},ts.prototype.writeUintLE=ts.prototype.writeUIntLE=function(e,t,r,n){if(e=+e,t>>>=0,r>>>=0,!n){let n=Math.pow(2,8*r)-1;tw(this,e,t,r,n,0)}let i=1,s=0;for(this[t]=255&e;++s<r&&(i*=256);)this[t+s]=e/i&255;return t+r},ts.prototype.writeUintBE=ts.prototype.writeUIntBE=function(e,t,r,n){if(e=+e,t>>>=0,r>>>=0,!n){let n=Math.pow(2,8*r)-1;tw(this,e,t,r,n,0)}let i=r-1,s=1;for(this[t+i]=255&e;--i>=0&&(s*=256);)this[t+i]=e/s&255;return t+r},ts.prototype.writeUint8=ts.prototype.writeUInt8=function(e,t,r){return e=+e,t>>>=0,r||tw(this,e,t,1,255,0),this[t]=255&e,t+1},ts.prototype.writeUint16LE=ts.prototype.writeUInt16LE=function(e,t,r){return e=+e,t>>>=0,r||tw(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},ts.prototype.writeUint16BE=ts.prototype.writeUInt16BE=function(e,t,r){return e=+e,t>>>=0,r||tw(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},ts.prototype.writeUint32LE=ts.prototype.writeUInt32LE=function(e,t,r){return e=+e,t>>>=0,r||tw(this,e,t,4,0xffffffff,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},ts.prototype.writeUint32BE=ts.prototype.writeUInt32BE=function(e,t,r){return e=+e,t>>>=0,r||tw(this,e,t,4,0xffffffff,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},ts.prototype.writeBigUInt64LE=tU(function(e,t=0){return tb(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))}),ts.prototype.writeBigUInt64BE=tU(function(e,t=0){return tE(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))}),ts.prototype.writeIntLE=function(e,t,r,n){if(e=+e,t>>>=0,!n){let n=Math.pow(2,8*r-1);tw(this,e,t,r,n-1,-n)}let i=0,s=1,o=0;for(this[t]=255&e;++i<r&&(s*=256);)e<0&&0===o&&0!==this[t+i-1]&&(o=1),this[t+i]=(e/s>>0)-o&255;return t+r},ts.prototype.writeIntBE=function(e,t,r,n){if(e=+e,t>>>=0,!n){let n=Math.pow(2,8*r-1);tw(this,e,t,r,n-1,-n)}let i=r-1,s=1,o=0;for(this[t+i]=255&e;--i>=0&&(s*=256);)e<0&&0===o&&0!==this[t+i+1]&&(o=1),this[t+i]=(e/s>>0)-o&255;return t+r},ts.prototype.writeInt8=function(e,t,r){return e=+e,t>>>=0,r||tw(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},ts.prototype.writeInt16LE=function(e,t,r){return e=+e,t>>>=0,r||tw(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},ts.prototype.writeInt16BE=function(e,t,r){return e=+e,t>>>=0,r||tw(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},ts.prototype.writeInt32LE=function(e,t,r){return e=+e,t>>>=0,r||tw(this,e,t,4,0x7fffffff,-0x80000000),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},ts.prototype.writeInt32BE=function(e,t,r){return e=+e,t>>>=0,r||tw(this,e,t,4,0x7fffffff,-0x80000000),e<0&&(e=0xffffffff+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},ts.prototype.writeBigInt64LE=tU(function(e,t=0){return tb(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),ts.prototype.writeBigInt64BE=tU(function(e,t=0){return tE(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),ts.prototype.writeFloatLE=function(e,t,r){return tT(this,e,t,!0,r)},ts.prototype.writeFloatBE=function(e,t,r){return tT(this,e,t,!1,r)},ts.prototype.writeDoubleLE=function(e,t,r){return tI(this,e,t,!0,r)},ts.prototype.writeDoubleBE=function(e,t,r){return tI(this,e,t,!1,r)},ts.prototype.copy=function(e,t,r,n){if(!ts.isBuffer(e))throw TypeError("argument should be a Buffer");if(r||(r=0),n||0===n||(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<r&&(n=r),n===r||0===e.length||0===this.length)return 0;if(t<0)throw RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw RangeError("Index out of range");if(n<0)throw RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-r&&(n=e.length-t+r);let i=n-r;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,r,n):Uint8Array.prototype.set.call(e,this.subarray(r,n),t),i},ts.prototype.fill=function(e,t,r,n){let i;if("string"==typeof e){if("string"==typeof t?(n=t,t=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),void 0!==n&&"string"!=typeof n)throw TypeError("encoding must be a string");if("string"==typeof n&&!ts.isEncoding(n))throw TypeError("Unknown encoding: "+n);if(1===e.length){let t=e.charCodeAt(0);("utf8"===n&&t<128||"latin1"===n)&&(e=t)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<r)throw RangeError("Out of range index");if(r<=t)return this;if(t>>>=0,r=void 0===r?this.length:r>>>0,e||(e=0),"number"==typeof e)for(i=t;i<r;++i)this[i]=e;else{let s=ts.isBuffer(e)?e:ts.from(e,n),o=s.length;if(0===o)throw TypeError('The value "'+e+'" is invalid for argument "value"');for(i=0;i<r-t;++i)this[i+t]=s[i%o]}return this};const tS={};function tC(e,t,r){tS[e]=class extends r{constructor(){super(),Object.defineProperty(this,"message",{value:t.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${e}]`,this.stack,delete this.name}get code(){return e}set code(e){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:e,writable:!0})}toString(){return`${this.name} [${e}]: ${this.message}`}}}function tx(e){let t="",r=e.length,n=+("-"===e[0]);for(;r>=n+4;r-=3)t=`_${e.slice(r-3,r)}${t}`;return`${e.slice(0,r)}${t}`}function tA(e,t,r,n,i,s){if(e>r||e<t){let n;let i="bigint"==typeof t?"n":"";throw n=s>3?0===t||t===BigInt(0)?`>= 0${i} and < 2${i} ** ${(s+1)*8}${i}`:`>= -(2${i} ** ${(s+1)*8-1}${i}) and < 2 ** ${(s+1)*8-1}${i}`:`>= ${t}${i} and <= ${r}${i}`,new tS.ERR_OUT_OF_RANGE("value",n,e)}tD(i,"offset"),(void 0===n[i]||void 0===n[i+s])&&tk(i,n.length-(s+1))}function tD(e,t){if("number"!=typeof e)throw new tS.ERR_INVALID_ARG_TYPE(t,"number",e)}function tk(e,t,r){if(Math.floor(e)!==e)throw tD(e,r),new tS.ERR_OUT_OF_RANGE(r||"offset","an integer",e);if(t<0)throw new tS.ERR_BUFFER_OUT_OF_BOUNDS;throw new tS.ERR_OUT_OF_RANGE(r||"offset",`>= ${+!!r} and <= ${t}`,e)}tC("ERR_BUFFER_OUT_OF_BOUNDS",function(e){return e?`${e} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),tC("ERR_INVALID_ARG_TYPE",function(e,t){return`The "${e}" argument must be of type number. Received type ${typeof t}`},TypeError),tC("ERR_OUT_OF_RANGE",function(e,t,r){let n=`The value of "${e}" is out of range.`,i=r;return Number.isInteger(r)&&Math.abs(r)>0x100000000?i=tx(String(r)):"bigint"==typeof r&&(i=String(r),(r>BigInt(2)**BigInt(32)||r<-(BigInt(2)**BigInt(32)))&&(i=tx(i)),i+="n"),n+=` It must be ${t}. Received ${i}`},RangeError);const tN=/[^+/0-9A-Za-z-_]/g;function tR(e,t){let r;t=t||1/0;let n=e.length,i=null,s=[];for(let o=0;o<n;++o){if((r=e.charCodeAt(o))>55295&&r<57344){if(!i){if(r>56319||o+1===n){(t-=3)>-1&&s.push(239,191,189);continue}i=r;continue}if(r<56320){(t-=3)>-1&&s.push(239,191,189),i=r;continue}r=(i-55296<<10|r-56320)+65536}else i&&(t-=3)>-1&&s.push(239,191,189);if(i=null,r<128){if((t-=1)<0)break;s.push(r)}else if(r<2048){if((t-=2)<0)break;s.push(r>>6|192,63&r|128)}else if(r<65536){if((t-=3)<0)break;s.push(r>>12|224,r>>6&63|128,63&r|128)}else if(r<1114112){if((t-=4)<0)break;s.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}else throw Error("Invalid code point")}return s}function tL(e){return v(function(e){if((e=(e=e.split("=")[0]).trim().replace(tN,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function tO(e,t,r,n){let i;for(i=0;i<n&&!(i+r>=t.length)&&!(i>=e.length);++i)t[i+r]=e[i];return i}function tM(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}const tP=function(){let e="0123456789abcdef",t=Array(256);for(let r=0;r<16;++r){let n=16*r;for(let i=0;i<16;++i)t[n+i]=e[r]+e[i]}return t}();function tU(e){return"undefined"==typeof BigInt?tB:e}function tB(){throw Error("BigInt not supported")}const tV="@firebase/firestore";/**
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
 */class tF{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}tF.UNAUTHENTICATED=new tF(null),tF.GOOGLE_CREDENTIALS=new tF("google-credentials-uid"),tF.FIRST_PARTY=new tF("first-party-uid"),tF.MOCK_USER=new tF("mock-user");/**
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
 */let tj="11.2.0";/**
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
 */const tq=new ev("@firebase/firestore");function tz(){return tq.logLevel}function t$(e,...t){if(tq.logLevel<=a.DEBUG){let r=t.map(tH);tq.debug(`Firestore (${tj}): ${e}`,...r)}}function tG(e,...t){if(tq.logLevel<=a.ERROR){let r=t.map(tH);tq.error(`Firestore (${tj}): ${e}`,...r)}}function tK(e,...t){if(tq.logLevel<=a.WARN){let r=t.map(tH);tq.warn(`Firestore (${tj}): ${e}`,...r)}}function tH(e){if("string"==typeof e)return e;try{/**
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
 */return JSON.stringify(e)}catch(t){return e}}/**
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
 */function tQ(e="Unexpected state"){let t=`FIRESTORE (${tj}) INTERNAL ASSERTION FAILED: `+e;throw tG(t),Error(t)}/**
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
 */const tW={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class tX extends en{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class tY{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class tJ{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class tZ{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(tF.UNAUTHENTICATED))}shutdown(){}}class t0{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class t1{constructor(e){this.t=e,this.currentUser=tF.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){void 0===this.o||tQ();let r=this.i,n=e=>this.i!==r?(r=this.i,t(e)):Promise.resolve(),i=new tY;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new tY,e.enqueueRetryable(()=>n(this.currentUser))};let s=()=>{let t=i;e.enqueueRetryable(async()=>{await t.promise,await n(this.currentUser)})},o=e=>{t$("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.o&&(this.auth.addAuthTokenListener(this.o),s())};this.t.onInit(e=>o(e)),setTimeout(()=>{if(!this.auth){let e=this.t.getImmediate({optional:!0});e?o(e):(t$("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new tY)}},0),s()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(t$("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?("string"==typeof t.accessToken||tQ(),new tJ(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){let e=this.auth&&this.auth.getUid();return null===e||"string"==typeof e||tQ(),new tF(e)}}class t2{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=tF.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);let e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class t6{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new t2(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(tF.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class t5{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class t3{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){void 0===this.o||tQ();let r=e=>{null!=e.error&&t$("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);let r=e.token!==this.R;return this.R=e.token,t$("FirebaseAppCheckTokenProvider",`Received ${r?"new":"existing"} token.`),r?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>r(t))};let n=e=>{t$("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(e=>n(e)),setTimeout(()=>{if(!this.appCheck){let e=this.A.getImmediate({optional:!0});e?n(e):t$("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?("string"==typeof e.token||tQ(),this.R=e.token,new t5(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */class t8{static newId(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length,r="";for(;r.length<20;){let n=/**
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
 */function(e){let t="undefined"!=typeof self&&(self.crypto||self.msCrypto),r=new Uint8Array(40);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(r);else for(let e=0;e<40;e++)r[e]=Math.floor(256*Math.random());return r}(0);for(let i=0;i<n.length;++i)r.length<20&&n[i]<t&&(r+=e.charAt(n[i]%e.length))}return r}}function t4(e,t){return e<t?-1:+(e>t)}function t7(e,t,r){return e.length===t.length&&e.every((e,n)=>r(e,t[n]))}/**
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
 */class t9{static now(){return t9.fromMillis(Date.now())}static fromDate(e){return t9.fromMillis(e.getTime())}static fromMillis(e){let t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new t9(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0||t>=1e9)throw new tX(tW.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-0xe7791f700||e>=0x3afff44180)throw new tX(tW.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?t4(this.nanoseconds,e.nanoseconds):t4(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){return String(this.seconds- -0xe7791f700).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class re{static fromTimestamp(e){return new re(e)}static min(){return new re(new t9(0,0))}static max(){return new re(new t9(0x3afff4417f,0x3b9ac9ff))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class rt{constructor(e,t,r){void 0===t?t=0:t>e.length&&tQ(),void 0===r?r=e.length-t:r>e.length-t&&tQ(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return 0===rt.comparator(this,e)}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof rt?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let r=Math.min(e.length,t.length);for(let n=0;n<r;n++){let r=rt.compareSegments(e.get(n),t.get(n));if(0!==r)return r}return Math.sign(e.length-t.length)}static compareSegments(e,t){let r=rt.isNumericId(e),n=rt.isNumericId(t);return r&&!n?-1:!r&&n?1:r&&n?rt.extractNumericId(e).compare(rt.extractNumericId(t)):e<t?-1:+(e>t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return l.fromString(e.substring(4,e.length-2))}}class rr extends rt{construct(e,t,r){return new rr(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){let t=[];for(let r of e){if(r.indexOf("//")>=0)throw new tX(tW.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(e=>e.length>0))}return new rr(t)}static emptyPath(){return new rr([])}}const rn=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ri extends rt{construct(e,t,r){return new ri(e,t,r)}static isValidIdentifier(e){return rn.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ri.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new ri(["__name__"])}static fromServerFormat(e){let t=[],r="",n=0,i=()=>{if(0===r.length)throw new tX(tW.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""},s=!1;for(;n<e.length;){let t=e[n];if("\\"===t){if(n+1===e.length)throw new tX(tW.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let t=e[n+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new tX(tW.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=t,n+=2}else"`"===t?s=!s:"."!==t||s?r+=t:i(),n++}if(i(),s)throw new tX(tW.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ri(t)}static emptyPath(){return new ri([])}}/**
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
 */class rs{constructor(e){this.path=e}static fromPath(e){return new rs(rr.fromString(e))}static fromName(e){return new rs(rr.fromString(e).popFirst(5))}static empty(){return new rs(rr.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===rr.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return rr.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new rs(new rr(e.slice()))}}class ro{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new ro(re.min(),rs.empty(),-1)}static max(){return new ro(re.max(),rs.empty(),-1)}}class ra{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function rl(e){if(e.code!==tW.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==e.message)throw e;t$("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class rh{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&tQ(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new rh((r,n)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(r,n)},this.catchCallback=e=>{this.wrapFailure(t,e).next(r,n)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof rh?t:rh.resolve(t)}catch(e){return rh.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):rh.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):rh.reject(t)}static resolve(e){return new rh((t,r)=>{t(e)})}static reject(e){return new rh((t,r)=>{r(e)})}static waitFor(e){return new rh((t,r)=>{let n=0,i=0,s=!1;e.forEach(e=>{++n,e.next(()=>{++i,s&&i===n&&t()},e=>r(e))}),s=!0,i===n&&t()})}static or(e){let t=rh.resolve(!1);for(let r of e)t=t.next(e=>e?rh.resolve(e):r());return t}static forEach(e,t){let r=[];return e.forEach((e,n)=>{r.push(t.call(this,e,n))}),this.waitFor(r)}static mapArray(e,t){return new rh((r,n)=>{let i=e.length,s=Array(i),o=0;for(let a=0;a<i;a++){let l=a;t(e[l]).next(e=>{s[l]=e,++o===i&&r(s)},e=>n(e))}})}static doWhile(e,t){return new rh((r,n)=>{let i=()=>{!0===e()?t().next(()=>{i()},n):r()};i()})}}function ru(e){return"IndexedDbTransactionError"===e.name}/**
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
 */class rc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ie(e),this.se=e=>t.writeSequenceNumber(e))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this.se&&this.se(e),e}}function rf(e){return 0===e&&1/e==-1/0}/**
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
 */function rd(e){let t=0;for(let r in e)Object.prototype.hasOwnProperty.call(e,r)&&t++;return t}function rp(e,t){for(let r in e)Object.prototype.hasOwnProperty.call(e,r)&&t(r,e[r])}function rg(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}rc.oe=-1;/**
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
 */class rm{constructor(e,t){this.comparator=e,this.root=t||rv.EMPTY}insert(e,t){return new rm(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,rv.BLACK,null,null))}remove(e){return new rm(this.comparator,this.root.remove(e,this.comparator).copy(null,null,rv.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let r=this.comparator(e,t.key);if(0===r)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){let n=this.comparator(e,r.key);if(0===n)return t+r.left.size;n<0?r=r.left:(t+=r.left.size+1,r=r.right)}return -1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){let e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ry(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ry(this.root,e,this.comparator,!1)}getReverseIterator(){return new ry(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ry(this.root,e,this.comparator,!0)}}class ry{constructor(e,t,r,n){this.isReverse=n,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&n&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class rv{constructor(e,t,r,n,i){this.key=e,this.value=t,this.color=null!=r?r:rv.RED,this.left=null!=n?n:rv.EMPTY,this.right=null!=i?i:rv.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,n,i){return new rv(null!=e?e:this.key,null!=t?t:this.value,null!=r?r:this.color,null!=n?n:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let n=this,i=r(e,n.key);return(n=i<0?n.copy(null,null,null,n.left.insert(e,t,r),null):0===i?n.copy(null,t,null,null,null):n.copy(null,null,null,null,n.right.insert(e,t,r))).fixUp()}removeMin(){if(this.left.isEmpty())return rv.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}remove(e,t){let r,n=this;if(0>t(e,n.key))n.left.isEmpty()||n.left.isRed()||n.left.left.isRed()||(n=n.moveRedLeft()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed()&&(n=n.rotateRight()),n.right.isEmpty()||n.right.isRed()||n.right.left.isRed()||(n=n.moveRedRight()),0===t(e,n.key)){if(n.right.isEmpty())return rv.EMPTY;r=n.right.min(),n=n.copy(r.key,r.value,null,null,n.right.removeMin())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}rotateLeft(){let e=this.copy(null,null,rv.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,rv.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){return Math.pow(2,this.check())<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw tQ();let e=this.left.check();if(e!==this.right.check())throw tQ();return e+ +!this.isRed()}}rv.EMPTY=null,rv.RED=!0,rv.BLACK=!1,rv.EMPTY=new class{constructor(){this.size=0}get key(){throw tQ()}get value(){throw tQ()}get color(){throw tQ()}get left(){throw tQ()}get right(){throw tQ()}copy(e,t,r,n,i){return this}insert(e,t,r){return new rv(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class rw{constructor(e){this.comparator=e,this.data=new rm(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){let r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){let n=r.getNext();if(this.comparator(n.key,e[1])>=0)return;t(n.key)}}forEachWhile(e,t){let r;for(r=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new rb(this.data.getIterator())}getIteratorFrom(e){return new rb(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof rw)||this.size!==e.size)return!1;let t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){let e=t.getNext().key,n=r.getNext().key;if(0!==this.comparator(e,n))return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new rw(this.comparator);return t.data=e,t}}class rb{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class rE{constructor(e){this.fields=e,e.sort(ri.comparator)}static empty(){return new rE([])}unionWith(e){let t=new rw(ri.comparator);for(let e of this.fields)t=t.add(e);for(let r of e)t=t.add(r);return new rE(t.toArray())}covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return t7(this.fields,e.fields,(e,t)=>e.isEqual(t))}}/**
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
 */class r_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class rT{constructor(e){this.binaryString=e}static fromBase64String(e){return new rT(function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new r_("Invalid base64 string: "+e):e}}(e))}static fromUint8Array(e){return new rT(function(e){let t="";for(let r=0;r<e.length;++r)t+=String.fromCharCode(e[r]);return t}(e))}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return btoa(this.binaryString)}toUint8Array(){return function(e){let t=new Uint8Array(e.length);for(let r=0;r<e.length;r++)t[r]=e.charCodeAt(r);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return t4(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}rT.EMPTY_BYTE_STRING=new rT("");const rI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function rS(e){if(e||tQ(),"string"==typeof e){let t=0,r=rI.exec(e);if(r||tQ(),r[1]){let e=r[1];t=Number(e=(e+"000000000").substr(0,9))}return{seconds:Math.floor(new Date(e).getTime()/1e3),nanos:t}}return{seconds:rC(e.seconds),nanos:rC(e.nanos)}}function rC(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function rx(e){return"string"==typeof e?rT.fromBase64String(e):rT.fromUint8Array(e)}/**
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
 */function rA(e){var t,r;return"server_timestamp"===(null===(r=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===r?void 0:r.stringValue)}function rD(e){let t=e.mapValue.fields.__previous_value__;return rA(t)?rD(t):t}function rk(e){let t=rS(e.mapValue.fields.__local_write_time__.timestampValue);return new t9(t.seconds,t.nanos)}/**
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
 */class rN{constructor(e,t,r,n,i,s,o,a,l){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=n,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=l}}class rR{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new rR("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof rR&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const rL={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function rO(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?rA(e)?4:rQ(e)?0x1fffffffffffff:rK(e)?10:11:tQ()}function rM(e,t){if(e===t)return!0;let r=rO(e);if(r!==rO(t))return!1;switch(r){case 0:case 0x1fffffffffffff:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return rk(e).isEqual(rk(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;let r=rS(e.timestampValue),n=rS(t.timestampValue);return r.seconds===n.seconds&&r.nanos===n.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return rx(e.bytesValue).isEqual(rx(t.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return rC(e.geoPointValue.latitude)===rC(t.geoPointValue.latitude)&&rC(e.geoPointValue.longitude)===rC(t.geoPointValue.longitude);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return rC(e.integerValue)===rC(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){let r=rC(e.doubleValue),n=rC(t.doubleValue);return r===n?rf(r)===rf(n):isNaN(r)&&isNaN(n)}return!1}(e,t);case 9:return t7(e.arrayValue.values||[],t.arrayValue.values||[],rM);case 10:case 11:return function(e,t){let r=e.mapValue.fields||{},n=t.mapValue.fields||{};if(rd(r)!==rd(n))return!1;for(let e in r)if(r.hasOwnProperty(e)&&(void 0===n[e]||!rM(r[e],n[e])))return!1;return!0}(e,t);default:return tQ()}}function rP(e,t){return void 0!==(e.values||[]).find(e=>rM(e,t))}function rU(e,t){if(e===t)return 0;let r=rO(e),n=rO(t);if(r!==n)return t4(r,n);switch(r){case 0:case 0x1fffffffffffff:return 0;case 1:return t4(e.booleanValue,t.booleanValue);case 2:return function(e,t){let r=rC(e.integerValue||e.doubleValue),n=rC(t.integerValue||t.doubleValue);return r<n?-1:r>n?1:r===n?0:isNaN(r)?isNaN(n)?0:-1:1}(e,t);case 3:return rB(e.timestampValue,t.timestampValue);case 4:return rB(rk(e),rk(t));case 5:return t4(e.stringValue,t.stringValue);case 6:return function(e,t){let r=rx(e),n=rx(t);return r.compareTo(n)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){let r=e.split("/"),n=t.split("/");for(let e=0;e<r.length&&e<n.length;e++){let t=t4(r[e],n[e]);if(0!==t)return t}return t4(r.length,n.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){let r=t4(rC(e.latitude),rC(t.latitude));return 0!==r?r:t4(rC(e.longitude),rC(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return rV(e.arrayValue,t.arrayValue);case 10:return function(e,t){var r,n,i,s;let o=e.fields||{},a=t.fields||{},l=null===(r=o.value)||void 0===r?void 0:r.arrayValue,h=null===(n=a.value)||void 0===n?void 0:n.arrayValue,u=t4((null===(i=null==l?void 0:l.values)||void 0===i?void 0:i.length)||0,(null===(s=null==h?void 0:h.values)||void 0===s?void 0:s.length)||0);return 0!==u?u:rV(l,h)}(e.mapValue,t.mapValue);case 11:return function(e,t){if(e===rL.mapValue&&t===rL.mapValue)return 0;if(e===rL.mapValue)return 1;if(t===rL.mapValue)return -1;let r=e.fields||{},n=Object.keys(r),i=t.fields||{},s=Object.keys(i);n.sort(),s.sort();for(let e=0;e<n.length&&e<s.length;++e){let t=t4(n[e],s[e]);if(0!==t)return t;let o=rU(r[n[e]],i[s[e]]);if(0!==o)return o}return t4(n.length,s.length)}(e.mapValue,t.mapValue);default:throw tQ()}}function rB(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return t4(e,t);let r=rS(e),n=rS(t),i=t4(r.seconds,n.seconds);return 0!==i?i:t4(r.nanos,n.nanos)}function rV(e,t){let r=e.values||[],n=t.values||[];for(let e=0;e<r.length&&e<n.length;++e){let t=rU(r[e],n[e]);if(t)return t}return t4(r.length,n.length)}function rF(e){var t,r;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){let t=rS(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?rx(e.bytesValue).toBase64():"referenceValue"in e?(t=e.referenceValue,rs.fromName(t).toString()):"geoPointValue"in e?(r=e.geoPointValue,`geo(${r.latitude},${r.longitude})`):"arrayValue"in e?function(e){let t="[",r=!0;for(let n of e.values||[])r?r=!1:t+=",",t+=rF(n);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){let t=Object.keys(e.fields||{}).sort(),r="{",n=!0;for(let i of t)n?n=!1:r+=",",r+=`${i}:${rF(e.fields[i])}`;return r+"}"}(e.mapValue):tQ()}function rj(e){return!!e&&"integerValue"in e}function rq(e){return!!e&&"arrayValue"in e}function rz(e){return!!e&&"nullValue"in e}function r$(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function rG(e){return!!e&&"mapValue"in e}function rK(e){var t,r;return"__vector__"===(null===(r=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===r?void 0:r.stringValue)}function rH(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){let t={mapValue:{fields:{}}};return rp(e.mapValue.fields,(e,r)=>t.mapValue.fields[e]=rH(r)),t}if(e.arrayValue){let t={arrayValue:{values:[]}};for(let r=0;r<(e.arrayValue.values||[]).length;++r)t.arrayValue.values[r]=rH(e.arrayValue.values[r]);return t}return Object.assign({},e)}function rQ(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}/**
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
 */class rW{constructor(e){this.value=e}static empty(){return new rW({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(!rG(t=(t.mapValue.fields||{})[e.get(r)]))return null;return(t=(t.mapValue.fields||{})[e.lastSegment()])||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=rH(t)}setAll(e){let t=ri.emptyPath(),r={},n=[];e.forEach((e,i)=>{if(!t.isImmediateParentOf(i)){let e=this.getFieldsMap(t);this.applyChanges(e,r,n),r={},n=[],t=i.popLast()}e?r[i.lastSegment()]=rH(e):n.push(i.lastSegment())});let i=this.getFieldsMap(t);this.applyChanges(i,r,n)}delete(e){let t=this.field(e.popLast());rG(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return rM(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let n=t.mapValue.fields[e.get(r)];rG(n)&&n.mapValue.fields||(n={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=n),t=n}return t.mapValue.fields}applyChanges(e,t,r){for(let n of(rp(t,(t,r)=>e[t]=r),r))delete e[n]}clone(){return new rW(rH(this.value))}}/**
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
 */class rX{constructor(e,t,r,n,i,s,o){this.key=e,this.documentType=t,this.version=r,this.readTime=n,this.createTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new rX(e,0,re.min(),re.min(),re.min(),rW.empty(),0)}static newFoundDocument(e,t,r,n){return new rX(e,1,t,re.min(),r,n,0)}static newNoDocument(e,t){return new rX(e,2,t,re.min(),re.min(),rW.empty(),0)}static newUnknownDocument(e,t){return new rX(e,3,t,re.min(),re.min(),rW.empty(),2)}convertToFoundDocument(e,t){return this.createTime.isEqual(re.min())&&(2===this.documentType||0===this.documentType)&&(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=rW.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=rW.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=re.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof rX&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new rX(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class rY{constructor(e,t){this.position=e,this.inclusive=t}}function rJ(e,t,r){let n=0;for(let i=0;i<e.position.length;i++){let s=t[i],o=e.position[i];if(n=s.field.isKeyField()?rs.comparator(rs.fromName(o.referenceValue),r.key):rU(o,r.data.field(s.field)),"desc"===s.dir&&(n*=-1),0!==n)break}return n}function rZ(e,t){if(null===e)return null===t;if(null===t||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let r=0;r<e.position.length;r++)if(!rM(e.position[r],t.position[r]))return!1;return!0}/**
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
 */class r0{constructor(e,t="asc"){this.field=e,this.dir=t}}/**
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
 */class r1{}class r2 extends r1{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,r):new r8(e,t,r):"array-contains"===t?new ne(e,r):"in"===t?new nt(e,r):"not-in"===t?new nr(e,r):"array-contains-any"===t?new nn(e,r):new r2(e,t,r)}static createKeyFieldInFilter(e,t,r){return"in"===t?new r4(e,r):new r7(e,r)}matches(e){let t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(rU(t,this.value)):null!==t&&rO(this.value)===rO(t)&&this.matchesComparison(rU(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return tQ()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class r6 extends r1{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new r6(e,t)}matches(e){return r5(this)?void 0===this.filters.find(t=>!t.matches(e)):void 0!==this.filters.find(t=>t.matches(e))}getFlattenedFilters(){return null!==this.ae||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function r5(e){return"and"===e.op}function r3(e){for(let t of e.filters)if(t instanceof r6)return!1;return!0}class r8 extends r2{constructor(e,t,r){super(e,t,r),this.key=rs.fromName(r.referenceValue)}matches(e){let t=rs.comparator(e.key,this.key);return this.matchesComparison(t)}}class r4 extends r2{constructor(e,t){super(e,"in",t),this.keys=r9("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class r7 extends r2{constructor(e,t){super(e,"not-in",t),this.keys=r9("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function r9(e,t){var r;return((null===(r=t.arrayValue)||void 0===r?void 0:r.values)||[]).map(e=>rs.fromName(e.referenceValue))}class ne extends r2{constructor(e,t){super(e,"array-contains",t)}matches(e){let t=e.data.field(this.field);return rq(t)&&rP(t.arrayValue,this.value)}}class nt extends r2{constructor(e,t){super(e,"in",t)}matches(e){let t=e.data.field(this.field);return null!==t&&rP(this.value.arrayValue,t)}}class nr extends r2{constructor(e,t){super(e,"not-in",t)}matches(e){if(rP(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return null!==t&&!rP(this.value.arrayValue,t)}}class nn extends r2{constructor(e,t){super(e,"array-contains-any",t)}matches(e){let t=e.data.field(this.field);return!(!rq(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>rP(this.value.arrayValue,e))}}/**
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
 */class ni{constructor(e,t=null,r=[],n=[],i=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=n,this.limit=i,this.startAt=s,this.endAt=o,this.ue=null}}function ns(e,t=null,r=[],n=[],i=null,s=null,o=null){return new ni(e,t,r,n,i,s,o)}function no(e){if(null===e.ue){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(e=>(function e(t){if(t instanceof r2)return t.field.canonicalString()+t.op.toString()+rF(t.value);if(r3(t)&&r5(t))return t.filters.map(t=>e(t)).join(",");{let r=t.filters.map(t=>e(t)).join(",");return`${t.op}(${r})`}})(e)).join(","),t+="|ob:",t+=e.orderBy.map(e=>e.field.canonicalString()+e.dir).join(","),null==e.limit||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(e=>rF(e)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(e=>rF(e)).join(",")),e.ue=t}return e.ue}function na(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++){var r,n;if(r=e.orderBy[i],n=t.orderBy[i],!(r.dir===n.dir&&r.field.isEqual(n.field)))return!1}if(e.filters.length!==t.filters.length)return!1;for(let r=0;r<e.filters.length;r++)if(!function e(t,r){return t instanceof r2?r instanceof r2&&t.op===r.op&&t.field.isEqual(r.field)&&rM(t.value,r.value):t instanceof r6?r instanceof r6&&t.op===r.op&&t.filters.length===r.filters.length&&t.filters.reduce((t,n,i)=>t&&e(n,r.filters[i]),!0):void tQ()}(e.filters[r],t.filters[r]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!rZ(e.startAt,t.startAt)&&rZ(e.endAt,t.endAt)}function nl(e){return rs.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}/**
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
 */class nh{constructor(e,t=null,r=[],n=[],i=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=n,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function nu(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function nc(e){if(null===e.ce){let t;e.ce=[];let r=new Set;for(let t of e.explicitOrderBy)e.ce.push(t),r.add(t.field.canonicalString());let n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(t=new rw(ri.comparator),e.filters.forEach(e=>{e.getFlattenedFilters().forEach(e=>{e.isInequality()&&(t=t.add(e.field))})}),t).forEach(t=>{r.has(t.canonicalString())||t.isKeyField()||e.ce.push(new r0(t,n))}),r.has(ri.keyField().canonicalString())||e.ce.push(new r0(ri.keyField(),n))}return e.ce}function nf(e){return e.le||(e.le=function(e,t){if("F"===e.limitType)return ns(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(e=>{let t="desc"===e.dir?"asc":"desc";return new r0(e.field,t)});let r=e.endAt?new rY(e.endAt.position,e.endAt.inclusive):null,n=e.startAt?new rY(e.startAt.position,e.startAt.inclusive):null;return ns(e.path,e.collectionGroup,t,e.filters,e.limit,r,n)}}(e,nc(e))),e.le}function nd(e,t,r){return new nh(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,r,e.startAt,e.endAt)}function np(e,t){return na(nf(e),nf(t))&&e.limitType===t.limitType}function ng(e){return`${no(nf(e))}|lt:${e.limitType}`}function nm(e){var t;let r;return`Query(target=${r=(t=nf(e)).path.canonicalString(),null!==t.collectionGroup&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(e=>(function e(t){return t instanceof r2?`${t.field.canonicalString()} ${t.op} ${rF(t.value)}`:t instanceof r6?t.op.toString()+" {"+t.getFilters().map(e).join(" ,")+"}":"Filter"})(e)).join(", ")}]`),null==t.limit||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(e=>`${e.field.canonicalString()} (${e.dir})`).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(e=>rF(e)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(e=>rF(e)).join(",")),`Target(${r})`}; limitType=${e.limitType})`}function ny(e,t){return t.isFoundDocument()&&function(e,t){let r=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(r):rs.isDocumentKey(e.path)?e.path.isEqual(r):e.path.isImmediateParentOf(r)}(e,t)&&function(e,t){for(let r of nc(e))if(!r.field.isKeyField()&&null===t.data.field(r.field))return!1;return!0}(e,t)&&function(e,t){for(let r of e.filters)if(!r.matches(t))return!1;return!0}(e,t)&&(!e.startAt||!!function(e,t,r){let n=rJ(e,t,r);return e.inclusive?n<=0:n<0}(e.startAt,nc(e),t))&&(!e.endAt||!!function(e,t,r){let n=rJ(e,t,r);return e.inclusive?n>=0:n>0}(e.endAt,nc(e),t))}function nv(e){return(t,r)=>{let n=!1;for(let i of nc(e)){let e=function(e,t,r){let n=e.field.isKeyField()?rs.comparator(t.key,r.key):function(e,t,r){let n=t.data.field(e),i=r.data.field(e);return null!==n&&null!==i?rU(n,i):tQ()}(e.field,t,r);switch(e.dir){case"asc":return n;case"desc":return -1*n;default:return tQ()}}(i,t,r);if(0!==e)return e;n=n||i.field.isKeyField()}return 0}}/**
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
 */class nw{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){let t=this.mapKeyFn(e),r=this.inner[t];if(void 0!==r){for(let[t,n]of r)if(this.equalsFn(t,e))return n}}has(e){return void 0!==this.get(e)}set(e,t){let r=this.mapKeyFn(e),n=this.inner[r];if(void 0===n)return this.inner[r]=[[e,t]],void this.innerSize++;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return void(n[r]=[e,t]);n.push([e,t]),this.innerSize++}delete(e){let t=this.mapKeyFn(e),r=this.inner[t];if(void 0===r)return!1;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return 1===r.length?delete this.inner[t]:r.splice(n,1),this.innerSize--,!0;return!1}forEach(e){rp(this.inner,(t,r)=>{for(let[t,n]of r)e(t,n)})}isEmpty(){return rg(this.inner)}size(){return this.innerSize}}/**
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
 */const nb=new rm(rs.comparator),nE=new rm(rs.comparator);function n_(...e){let t=nE;for(let r of e)t=t.insert(r.key,r);return t}function nT(e){let t=nE;return e.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function nI(){return new nw(e=>e.toString(),(e,t)=>e.isEqual(t))}const nS=new rm(rs.comparator),nC=new rw(rs.comparator);function nx(...e){let t=nC;for(let r of e)t=t.add(r);return t}const nA=new rw(t4);/**
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
 */function nD(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:rf(t)?"-0":t}}function nk(e){return{integerValue:""+e}}/**
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
 */class nN{constructor(){this._=void 0}}function nR(e,t){return e instanceof nB?rj(t)||t&&"doubleValue"in t?t:{integerValue:0}:null}class nL extends nN{}class nO extends nN{constructor(e){super(),this.elements=e}}function nM(e,t){let r=nF(t);for(let t of e.elements)r.some(e=>rM(e,t))||r.push(t);return{arrayValue:{values:r}}}class nP extends nN{constructor(e){super(),this.elements=e}}function nU(e,t){let r=nF(t);for(let t of e.elements)r=r.filter(e=>!rM(e,t));return{arrayValue:{values:r}}}class nB extends nN{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function nV(e){return rC(e.integerValue||e.doubleValue)}function nF(e){return rq(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}class nj{constructor(e,t){this.version=e,this.transformResults=t}}class nq{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new nq}static exists(e){return new nq(void 0,e)}static updateTime(e){return new nq(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function nz(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class n${}function nG(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new nZ(e.key,nq.none()):new nQ(e.key,e.data,nq.none());{let r=e.data,n=rW.empty(),i=new rw(ri.comparator);for(let e of t.fields)if(!i.has(e)){let t=r.field(e);null===t&&e.length>1&&(e=e.popLast(),t=r.field(e)),null===t?n.delete(e):n.set(e,t),i=i.add(e)}return new nW(e.key,n,new rE(i.toArray()),nq.none())}}function nK(e,t,r,n){return e instanceof nQ?function(e,t,r,n){if(!nz(e.precondition,t))return r;let i=e.value.clone(),s=nJ(e.fieldTransforms,n,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,r,n):e instanceof nW?function(e,t,r,n){if(!nz(e.precondition,t))return r;let i=nJ(e.fieldTransforms,n,t),s=t.data;return(s.setAll(nX(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===r)?null:r.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,r,n):nz(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):r}function nH(e,t){var r,n;return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(r=e.fieldTransforms,n=t.fieldTransforms,!!(void 0===r&&void 0===n||!(!r||!n)&&t7(r,n,(e,t)=>{var r,n;return e.field.isEqual(t.field)&&(r=e.transform,n=t.transform,r instanceof nO&&n instanceof nO||r instanceof nP&&n instanceof nP?t7(r.elements,n.elements,rM):r instanceof nB&&n instanceof nB?rM(r.Pe,n.Pe):r instanceof nL&&n instanceof nL)})))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class nQ extends n${constructor(e,t,r,n=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=n,this.type=0}getFieldMask(){return null}}class nW extends n${constructor(e,t,r,n,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=n,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function nX(e){let t=new Map;return e.fieldMask.fields.forEach(r=>{if(!r.isEmpty()){let n=e.data.field(r);t.set(r,n)}}),t}function nY(e,t,r){var n;let i=new Map;e.length===r.length||tQ();for(let s=0;s<r.length;s++){let o=e[s],a=o.transform,l=t.data.field(o.field);i.set(o.field,(n=r[s],a instanceof nO?nM(a,l):a instanceof nP?nU(a,l):n))}return i}function nJ(e,t,r){let n=new Map;for(let i of e){let e=i.transform,s=r.data.field(i.field);n.set(i.field,e instanceof nL?function(e,t){let r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&rA(t)&&(t=rD(t)),t&&(r.fields.__previous_value__=t),{mapValue:r}}(t,s):e instanceof nO?nM(e,s):e instanceof nP?nU(e,s):function(e,t){let r=nR(e,t),n=nV(r)+nV(e.Pe);return rj(r)&&rj(e.Pe)?nk(n):nD(e.serializer,n)}(e,s))}return n}class nZ extends n${constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class n0 extends n${constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class n1{constructor(e,t,r,n){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=n}applyToRemoteDocument(e,t){let r=t.mutationResults;for(let t=0;t<this.mutations.length;t++){let i=this.mutations[t];if(i.key.isEqual(e.key)){var n;n=r[t],i instanceof nQ?function(e,t,r){let n=e.value.clone(),i=nY(e.fieldTransforms,t,r.transformResults);n.setAll(i),t.convertToFoundDocument(r.version,n).setHasCommittedMutations()}(i,e,n):i instanceof nW?function(e,t,r){if(!nz(e.precondition,t))return void t.convertToUnknownDocument(r.version);let n=nY(e.fieldTransforms,t,r.transformResults),i=t.data;i.setAll(nX(e)),i.setAll(n),t.convertToFoundDocument(r.version,i).setHasCommittedMutations()}(i,e,n):function(e,t,r){t.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}}}applyToLocalView(e,t){for(let r of this.baseMutations)r.key.isEqual(e.key)&&(t=nK(r,e,t,this.localWriteTime));for(let r of this.mutations)r.key.isEqual(e.key)&&(t=nK(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){let r=nI();return this.mutations.forEach(n=>{let i=e.get(n.key),s=i.overlayedDocument,o=this.applyToLocalView(s,i.mutatedFields),a=nG(s,o=t.has(n.key)?null:o);null!==a&&r.set(n.key,a),s.isValidDocument()||s.convertToNoDocument(re.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),nx())}isEqual(e){return this.batchId===e.batchId&&t7(this.mutations,e.mutations,(e,t)=>nH(e,t))&&t7(this.baseMutations,e.baseMutations,(e,t)=>nH(e,t))}}class n2{constructor(e,t,r,n){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=n}static from(e,t,r){e.mutations.length===r.length||tQ();let n=nS,i=e.mutations;for(let e=0;e<i.length;e++)n=n.insert(i[e].key,r[e].version);return new n2(e,t,r,n)}}/**
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
 */class n6{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class n5{constructor(e,t){this.count=e,this.unchangedNames=t}}function n3(e){if(void 0===e)return tG("GRPC error has no .code"),tW.UNKNOWN;switch(e){case _.OK:return tW.OK;case _.CANCELLED:return tW.CANCELLED;case _.UNKNOWN:return tW.UNKNOWN;case _.DEADLINE_EXCEEDED:return tW.DEADLINE_EXCEEDED;case _.RESOURCE_EXHAUSTED:return tW.RESOURCE_EXHAUSTED;case _.INTERNAL:return tW.INTERNAL;case _.UNAVAILABLE:return tW.UNAVAILABLE;case _.UNAUTHENTICATED:return tW.UNAUTHENTICATED;case _.INVALID_ARGUMENT:return tW.INVALID_ARGUMENT;case _.NOT_FOUND:return tW.NOT_FOUND;case _.ALREADY_EXISTS:return tW.ALREADY_EXISTS;case _.PERMISSION_DENIED:return tW.PERMISSION_DENIED;case _.FAILED_PRECONDITION:return tW.FAILED_PRECONDITION;case _.ABORTED:return tW.ABORTED;case _.OUT_OF_RANGE:return tW.OUT_OF_RANGE;case _.UNIMPLEMENTED:return tW.UNIMPLEMENTED;case _.DATA_LOSS:return tW.DATA_LOSS;default:return tQ()}}(T=_||(_={}))[T.OK=0]="OK",T[T.CANCELLED=1]="CANCELLED",T[T.UNKNOWN=2]="UNKNOWN",T[T.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",T[T.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",T[T.NOT_FOUND=5]="NOT_FOUND",T[T.ALREADY_EXISTS=6]="ALREADY_EXISTS",T[T.PERMISSION_DENIED=7]="PERMISSION_DENIED",T[T.UNAUTHENTICATED=16]="UNAUTHENTICATED",T[T.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",T[T.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",T[T.ABORTED=10]="ABORTED",T[T.OUT_OF_RANGE=11]="OUT_OF_RANGE",T[T.UNIMPLEMENTED=12]="UNIMPLEMENTED",T[T.INTERNAL=13]="INTERNAL",T[T.UNAVAILABLE=14]="UNAVAILABLE",T[T.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const n8=new l([0xffffffff,0xffffffff],0);function n4(e){let t=(new TextEncoder).encode(e),r=new h;return r.update(t),new Uint8Array(r.digest())}function n7(e){let t=new DataView(e.buffer),r=t.getUint32(0,!0),n=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new l([r,n],0),new l([i,s],0)]}class n9{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new ie(`Invalid padding: ${t}`);if(r<0||e.length>0&&0===this.hashCount)throw new ie(`Invalid hash count: ${r}`);if(0===e.length&&0!==t)throw new ie(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ie=l.fromNumber(this.Te)}de(e,t,r){let n=e.add(t.multiply(l.fromNumber(r)));return 1===n.compare(n8)&&(n=new l([n.getBits(0),n.getBits(1)],0)),n.modulo(this.Ie).toNumber()}Ee(e){return 0!=(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(0===this.Te)return!1;let[t,r]=n7(n4(e));for(let e=0;e<this.hashCount;e++){let n=this.de(t,r,e);if(!this.Ee(n))return!1}return!0}static create(e,t,r){let n=new n9(new Uint8Array(Math.ceil(e/8)),e%8==0?0:8-e%8,t);return r.forEach(e=>n.insert(e)),n}insert(e){if(0===this.Te)return;let[t,r]=n7(n4(e));for(let e=0;e<this.hashCount;e++){let n=this.de(t,r,e);this.Ae(n)}}Ae(e){let t=Math.floor(e/8);this.bitmap[t]|=1<<e%8}}class ie extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class it{constructor(e,t,r,n,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=n,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){let n=new Map;return n.set(e,ir.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new it(re.min(),n,new rm(t4),nb,nx())}}class ir{constructor(e,t,r,n,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=n,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new ir(r,t,nx(),nx(),nx())}}/**
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
 */class ii{constructor(e,t,r,n){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=n}}class is{constructor(e,t){this.targetId=e,this.me=t}}class io{constructor(e,t,r=rT.EMPTY_BYTE_STRING,n=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=n}}class ia{constructor(){this.fe=0,this.ge=iu(),this.pe=rT.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return 0!==this.fe}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=nx(),t=nx(),r=nx();return this.ge.forEach((n,i)=>{switch(i){case 0:e=e.add(n);break;case 2:t=t.add(n);break;case 1:r=r.add(n);break;default:tQ()}}),new ir(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=iu()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,this.fe>=0||tQ()}Ne(){this.we=!0,this.ye=!0}}class il{constructor(e){this.Be=e,this.Le=new Map,this.ke=nb,this.qe=ih(),this.Qe=ih(),this.Ke=new rm(t4)}$e(e){for(let t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(t,e.Ve):this.We(t,e.key,e.Ve);for(let t of e.removedTargetIds)this.We(t,e.key,e.Ve)}Ge(e){this.forEachTarget(e,t=>{let r=this.ze(t);switch(e.state){case 0:this.je(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.je(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),r.De(e.resumeToken));break;default:tQ()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Le.forEach((e,r)=>{this.je(r)&&t(r)})}Je(e){let t=e.targetId,r=e.me.count,n=this.Ye(t);if(n){let i=n.target;if(nl(i)){if(0===r){let e=new rs(i.path);this.We(t,e,rX.newNoDocument(e,re.min()))}else 1===r||tQ()}else{let n=this.Ze(t);if(n!==r){let r=this.Xe(e),i=r?this.et(r,e,n):1;0!==i&&(this.He(t),this.Ke=this.Ke.insert(t,2===i?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch"))}}}}Xe(e){let t,r;let n=e.me.unchangedNames;if(!n||!n.bits)return null;let{bits:{bitmap:i="",padding:s=0},hashCount:o=0}=n;try{t=rx(i).toUint8Array()}catch(e){if(e instanceof r_)return tK("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw e}try{r=new n9(t,s,o)}catch(e){return tK(e instanceof ie?"BloomFilter error: ":"Applying bloom filter failed: ",e),null}return 0===r.Te?null:r}et(e,t,r){return 2*(t.me.count!==r-this.rt(e,t.targetId))}rt(e,t){let r=this.Be.getRemoteKeysForTarget(t),n=0;return r.forEach(r=>{let i=this.Be.nt(),s=`projects/${i.projectId}/databases/${i.database}/documents/${r.path.canonicalString()}`;e.mightContain(s)||(this.We(t,r,null),n++)}),n}it(e){let t=new Map;this.Le.forEach((r,n)=>{let i=this.Ye(n);if(i){if(r.current&&nl(i.target)){let t=new rs(i.target.path);this.st(t).has(n)||this.ot(n,t)||this.We(n,t,rX.newNoDocument(t,e))}r.be&&(t.set(n,r.ve()),r.Ce())}});let r=nx();this.Qe.forEach((e,t)=>{let n=!0;t.forEachWhile(e=>{let t=this.Ye(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(n=!1,!1)}),n&&(r=r.add(e))}),this.ke.forEach((t,r)=>r.setReadTime(e));let n=new it(e,t,this.Ke,this.ke,r);return this.ke=nb,this.qe=ih(),this.Qe=ih(),this.Ke=new rm(t4),n}Ue(e,t){if(!this.je(e))return;let r=2*!!this.ot(e,t.key);this.ze(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e)),this.Qe=this.Qe.insert(t.key,this._t(t.key).add(e))}We(e,t,r){if(!this.je(e))return;let n=this.ze(e);this.ot(e,t)?n.Fe(t,1):n.Me(t),this.Qe=this.Qe.insert(t,this._t(t).delete(e)),this.Qe=this.Qe.insert(t,this._t(t).add(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Le.delete(e)}Ze(e){let t=this.ze(e).ve();return this.Be.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let t=this.Le.get(e);return t||(t=new ia,this.Le.set(e,t)),t}_t(e){let t=this.Qe.get(e);return t||(t=new rw(t4),this.Qe=this.Qe.insert(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new rw(t4),this.qe=this.qe.insert(e,t)),t}je(e){let t=null!==this.Ye(e);return t||t$("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){let t=this.Le.get(e);return t&&t.Se?null:this.Be.ut(e)}He(e){this.Le.set(e,new ia),this.Be.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}ot(e,t){return this.Be.getRemoteKeysForTarget(e).has(t)}}function ih(){return new rm(rs.comparator)}function iu(){return new rm(rs.comparator)}const ic={asc:"ASCENDING",desc:"DESCENDING"},id={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ip={and:"AND",or:"OR"};class ig{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function im(e,t){return e.useProto3Json||null==t?t:{value:t}}function iy(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function iv(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function iw(e){return e||tQ(),re.fromTimestamp(function(e){let t=rS(e);return new t9(t.seconds,t.nanos)}(e))}function ib(e,t){return iE(e,t).canonicalString()}function iE(e,t){let r=new rr(["projects",e.projectId,"databases",e.database]).child("documents");return void 0===t?r:r.child(t)}function i_(e){let t=rr.fromString(e);return iN(t)||tQ(),t}function iT(e,t){return ib(e.databaseId,t.path)}function iI(e,t){let r=i_(t);if(r.get(1)!==e.databaseId.projectId)throw new tX(tW.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+r.get(1)+" vs "+e.databaseId.projectId);if(r.get(3)!==e.databaseId.database)throw new tX(tW.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+r.get(3)+" vs "+e.databaseId.database);return new rs(ix(r))}function iS(e,t){return ib(e.databaseId,t)}function iC(e){return new rr(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function ix(e){return e.length>4&&"documents"===e.get(4)||tQ(),e.popFirst(5)}function iA(e,t,r){return{name:iT(e,t),fields:r.value.mapValue.fields}}function iD(e){return{fieldPath:e.canonicalString()}}function ik(e){return ri.fromServerFormat(e.fieldPath)}function iN(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}/**
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
 */class iR{constructor(e,t,r,n,i=re.min(),s=re.min(),o=rT.EMPTY_BYTE_STRING,a=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=n,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(e){return new iR(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new iR(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new iR(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new iR(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class iL{constructor(e){this.ht=e}}/**
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
 */class iO{constructor(){}dt(e,t){this.Et(e,t),t.At()}Et(e,t){if("nullValue"in e)this.Rt(t,5);else if("booleanValue"in e)this.Rt(t,10),t.Vt(+!!e.booleanValue);else if("integerValue"in e)this.Rt(t,15),t.Vt(rC(e.integerValue));else if("doubleValue"in e){let r=rC(e.doubleValue);isNaN(r)?this.Rt(t,13):(this.Rt(t,15),rf(r)?t.Vt(0):t.Vt(r))}else if("timestampValue"in e){let r=e.timestampValue;this.Rt(t,20),"string"==typeof r&&(r=rS(r)),t.ft(`${r.seconds||""}`),t.Vt(r.nanos||0)}else if("stringValue"in e)this.gt(e.stringValue,t),this.yt(t);else if("bytesValue"in e)this.Rt(t,30),t.wt(rx(e.bytesValue)),this.yt(t);else if("referenceValue"in e)this.St(e.referenceValue,t);else if("geoPointValue"in e){let r=e.geoPointValue;this.Rt(t,45),t.Vt(r.latitude||0),t.Vt(r.longitude||0)}else"mapValue"in e?rQ(e)?this.Rt(t,Number.MAX_SAFE_INTEGER):rK(e)?this.bt(e.mapValue,t):(this.Dt(e.mapValue,t),this.yt(t)):"arrayValue"in e?(this.vt(e.arrayValue,t),this.yt(t)):tQ()}gt(e,t){this.Rt(t,25),this.Ct(e,t)}Ct(e,t){t.ft(e)}Dt(e,t){let r=e.fields||{};for(let e of(this.Rt(t,55),Object.keys(r)))this.gt(e,t),this.Et(r[e],t)}bt(e,t){var r,n;let i=e.fields||{};this.Rt(t,53);let s="value",o=(null===(n=null===(r=i[s].arrayValue)||void 0===r?void 0:r.values)||void 0===n?void 0:n.length)||0;this.Rt(t,15),t.Vt(rC(o)),this.gt(s,t),this.Et(i[s],t)}vt(e,t){let r=e.values||[];for(let e of(this.Rt(t,50),r))this.Et(e,t)}St(e,t){this.Rt(t,37),rs.fromName(e).path.forEach(e=>{this.Rt(t,60),this.Ct(e,t)})}Rt(e,t){e.Vt(t)}yt(e){e.Vt(2)}}iO.Ft=new iO;/**
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
 */class iM{constructor(){this.ln=new iP}addToCollectionParentIndex(e,t){return this.ln.add(t),rh.resolve()}getCollectionParents(e,t){return rh.resolve(this.ln.getEntries(t))}addFieldIndex(e,t){return rh.resolve()}deleteFieldIndex(e,t){return rh.resolve()}deleteAllFieldIndexes(e){return rh.resolve()}createTargetIndexes(e,t){return rh.resolve()}getDocumentsMatchingTarget(e,t){return rh.resolve(null)}getIndexType(e,t){return rh.resolve(0)}getFieldIndexes(e,t){return rh.resolve([])}getNextCollectionGroupToUpdate(e){return rh.resolve(null)}getMinOffset(e,t){return rh.resolve(ro.min())}getMinOffsetFromCollectionGroup(e,t){return rh.resolve(ro.min())}updateCollectionGroup(e,t,r){return rh.resolve()}updateIndexEntries(e,t){return rh.resolve()}}class iP{constructor(){this.index={}}add(e){let t=e.lastSegment(),r=e.popLast(),n=this.index[t]||new rw(rr.comparator),i=!n.has(r);return this.index[t]=n.add(r),i}has(e){let t=e.lastSegment(),r=e.popLast(),n=this.index[t];return n&&n.has(r)}getEntries(e){return(this.index[e]||new rw(rr.comparator)).toArray()}}new Uint8Array(0);/**
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
 */const iU={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class iB{static withCacheSize(e){return new iB(e,iB.DEFAULT_COLLECTION_PERCENTILE,iB.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */iB.DEFAULT_COLLECTION_PERCENTILE=10,iB.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,iB.DEFAULT=new iB(0x2800000,iB.DEFAULT_COLLECTION_PERCENTILE,iB.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),iB.DISABLED=new iB(-1,0,0);/**
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
 */class iV{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new iV(0)}static Qn(){return new iV(-1)}}/**
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
 */function iF([e,t],[r,n]){let i=t4(e,r);return 0===i?t4(t,n):i}class ij{constructor(e){this.Gn=e,this.buffer=new rw(iF),this.zn=0}jn(){return++this.zn}Hn(e){let t=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(t);else{let e=this.buffer.last();0>iF(t,e)&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class iq{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Jn=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return null!==this.Jn}Yn(e){t$("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){ru(e)?t$("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",e):await rl(e)}await this.Yn(3e5)})}}class iz{constructor(e,t){this.Zn=e,this.params=t}calculateTargetCount(e,t){return this.Zn.Xn(e).next(e=>Math.floor(t/100*e))}nthSequenceNumber(e,t){if(0===t)return rh.resolve(rc.oe);let r=new ij(t);return this.Zn.forEachTarget(e,e=>r.Hn(e.sequenceNumber)).next(()=>this.Zn.er(e,e=>r.Hn(e))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Zn.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Zn.removeOrphanedDocuments(e,t)}collect(e,t){return -1===this.params.cacheSizeCollectionThreshold?(t$("LruGarbageCollector","Garbage collection skipped; disabled"),rh.resolve(iU)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(t$("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),iU):this.tr(e,t))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,t){let r,n,i,s,o,l,h;let u=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(t=>(t>this.params.maximumSequenceNumbersToCollect?(t$("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),n=this.params.maximumSequenceNumbersToCollect):n=t,s=Date.now(),this.nthSequenceNumber(e,n))).next(n=>(r=n,o=Date.now(),this.removeTargets(e,r,t))).next(t=>(i=t,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(e=>(h=Date.now(),tz()<=a.DEBUG&&t$("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${s-u}ms
	Determined least recently used ${n} in `+(o-s)+"ms\n"+`	Removed ${i} targets in `+(l-o)+"ms\n"+`	Removed ${e} documents in `+(h-l)+"ms\n"+`Total Duration: ${h-u}ms`),rh.resolve({didRun:!0,sequenceNumbersCollected:n,targetsRemoved:i,documentsRemoved:e})))}}/**
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
 */class i${constructor(){this.changes=new nw(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,rX.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();let r=this.changes.get(t);return void 0!==r?rh.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class iG{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class iK{constructor(e,t,r,n){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=n}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(n=>(r=n,this.remoteDocumentCache.getEntry(e,t))).next(e=>(null!==r&&nK(r.mutation,e,rE.empty(),t9.now()),e))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,nx()).next(()=>t))}getLocalViewOfDocuments(e,t,r=nx()){let n=nI();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,r).next(e=>{let t=n_();return e.forEach((e,r)=>{t=t.insert(e,r.overlayedDocument)}),t}))}getOverlayedDocuments(e,t){let r=nI();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,nx()))}populateOverlays(e,t,r){let n=[];return r.forEach(e=>{t.has(e)||n.push(e)}),this.documentOverlayCache.getOverlays(e,n).next(e=>{e.forEach((e,r)=>{t.set(e,r)})})}computeViews(e,t,r,n){let i=nb,s=nI(),o=nI();return t.forEach((e,t)=>{let o=r.get(t.key);n.has(t.key)&&(void 0===o||o.mutation instanceof nW)?i=i.insert(t.key,t):void 0!==o?(s.set(t.key,o.mutation.getFieldMask()),nK(o.mutation,t,o.mutation.getFieldMask(),t9.now())):s.set(t.key,rE.empty())}),this.recalculateAndSaveOverlays(e,i).next(e=>(e.forEach((e,t)=>s.set(e,t)),t.forEach((e,t)=>{var r;return o.set(e,new iG(t,null!==(r=s.get(e))&&void 0!==r?r:null))}),o))}recalculateAndSaveOverlays(e,t){let r=nI(),n=new rm((e,t)=>e-t),i=nx();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(let i of e)i.keys().forEach(e=>{let s=t.get(e);if(null===s)return;let o=r.get(e)||rE.empty();o=i.applyToLocalView(s,o),r.set(e,o);let a=(n.get(i.batchId)||nx()).add(e);n=n.insert(i.batchId,a)})}).next(()=>{let s=[],o=n.getReverseIterator();for(;o.hasNext();){let n=o.getNext(),a=n.key,l=n.value,h=nI();l.forEach(e=>{if(!i.has(e)){let n=nG(t.get(e),r.get(e));null!==n&&h.set(e,n),i=i.add(e)}}),s.push(this.documentOverlayCache.saveOverlays(e,a,h))}return rh.waitFor(s)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}getDocumentsMatchingQuery(e,t,r,n){return rs.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):null!==t.collectionGroup?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,n):this.getDocumentsMatchingCollectionQuery(e,t,r,n)}getNextDocuments(e,t,r,n){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,n).next(i=>{let s=n-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,n-i.size):rh.resolve(nI()),o=-1,a=i;return s.next(t=>rh.forEach(t,(t,r)=>(o<r.largestBatchId&&(o=r.largestBatchId),i.get(t)?rh.resolve():this.remoteDocumentCache.getEntry(e,t).next(e=>{a=a.insert(t,e)}))).next(()=>this.populateOverlays(e,t,i)).next(()=>this.computeViews(e,a,t,nx())).next(e=>({batchId:o,changes:nT(e)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new rs(t)).next(e=>{let t=n_();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,r,n){let i=t.collectionGroup,s=n_();return this.indexManager.getCollectionParents(e,i).next(o=>rh.forEach(o,o=>{let a=new nh(o.child(i),null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt);return this.getDocumentsMatchingCollectionQuery(e,a,r,n).next(e=>{e.forEach((e,t)=>{s=s.insert(e,t)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,t,r,n){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,n))).next(e=>{i.forEach((t,r)=>{let n=r.getKey();null===e.get(n)&&(e=e.insert(n,rX.newInvalidDocument(n)))});let r=n_();return e.forEach((e,n)=>{let s=i.get(e);void 0!==s&&nK(s.mutation,n,rE.empty(),t9.now()),ny(t,n)&&(r=r.insert(e,n))}),r})}}/**
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
 */class iH{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,t){return rh.resolve(this.Tr.get(t))}saveBundleMetadata(e,t){return this.Tr.set(t.id,{id:t.id,version:t.version,createTime:iw(t.createTime)}),rh.resolve()}getNamedQuery(e,t){return rh.resolve(this.Ir.get(t))}saveNamedQuery(e,t){return this.Ir.set(t.name,{name:t.name,query:function(e){let t=function(e){var t;let r,n=function(e){let t=i_(e);return 4===t.length?rr.emptyPath():ix(t)}(e.parent),i=e.structuredQuery,s=i.from?i.from.length:0,o=null;if(s>0){1===s||tQ();let e=i.from[0];e.allDescendants?o=e.collectionId:n=n.child(e.collectionId)}let a=[];i.where&&(a=function(e){var t;let r=function e(t){return void 0!==t.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":let t=ik(e.unaryFilter.field);return r2.create(t,"==",{doubleValue:NaN});case"IS_NULL":let r=ik(e.unaryFilter.field);return r2.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let n=ik(e.unaryFilter.field);return r2.create(n,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let i=ik(e.unaryFilter.field);return r2.create(i,"!=",{nullValue:"NULL_VALUE"});default:return tQ()}}(t):void 0!==t.fieldFilter?r2.create(ik(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return tQ()}}(t.fieldFilter.op),t.fieldFilter.value):void 0!==t.compositeFilter?r6.create(t.compositeFilter.filters.map(t=>e(t)),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return tQ()}}(t.compositeFilter.op)):tQ()}(e);return r instanceof r6&&r3(t=r)&&r5(t)?r.getFilters():[r]}(i.where));let l=[];i.orderBy&&(l=i.orderBy.map(e=>new r0(ik(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))));let h=null;i.limit&&(h=null==(r="object"==typeof(t=i.limit)?t.value:t)?null:r);let u=null;i.startAt&&(u=function(e){let t=!!e.before;return new rY(e.values||[],t)}(i.startAt));let c=null;return i.endAt&&(c=function(e){let t=!e.before;return new rY(e.values||[],t)}(i.endAt)),new nh(n,o,l,a,h,"F",u,c)}({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?nd(t,t.limit,"L"):t}(t.bundledQuery),readTime:iw(t.readTime)}),rh.resolve()}}/**
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
 */class iQ{constructor(){this.overlays=new rm(rs.comparator),this.dr=new Map}getOverlay(e,t){return rh.resolve(this.overlays.get(t))}getOverlays(e,t){let r=nI();return rh.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&r.set(t,e)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((r,n)=>{this.Tt(e,t,n)}),rh.resolve()}removeOverlaysForBatchId(e,t,r){let n=this.dr.get(r);return void 0!==n&&(n.forEach(e=>this.overlays=this.overlays.remove(e)),this.dr.delete(r)),rh.resolve()}getOverlaysForCollection(e,t,r){let n=nI(),i=t.length+1,s=new rs(t.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){let e=o.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>r&&n.set(e.getKey(),e)}return rh.resolve(n)}getOverlaysForCollectionGroup(e,t,r,n){let i=new rm((e,t)=>e-t),s=this.overlays.getIterator();for(;s.hasNext();){let e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>r){let t=i.get(e.largestBatchId);null===t&&(t=nI(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}let o=nI(),a=i.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach((e,t)=>o.set(e,t)),!(o.size()>=n)););return rh.resolve(o)}Tt(e,t,r){let n=this.overlays.get(r.key);if(null!==n){let e=this.dr.get(n.largestBatchId).delete(r.key);this.dr.set(n.largestBatchId,e)}this.overlays=this.overlays.insert(r.key,new n6(t,r));let i=this.dr.get(t);void 0===i&&(i=nx(),this.dr.set(t,i)),this.dr.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class iW{constructor(){this.sessionToken=rT.EMPTY_BYTE_STRING}getSessionToken(e){return rh.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,rh.resolve()}}/**
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
 */class iX{constructor(){this.Er=new rw(iY.Ar),this.Rr=new rw(iY.Vr)}isEmpty(){return this.Er.isEmpty()}addReference(e,t){let r=new iY(e,t);this.Er=this.Er.add(r),this.Rr=this.Rr.add(r)}mr(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.gr(new iY(e,t))}pr(e,t){e.forEach(e=>this.removeReference(e,t))}yr(e){let t=new rs(new rr([])),r=new iY(t,e),n=new iY(t,e+1),i=[];return this.Rr.forEachInRange([r,n],e=>{this.gr(e),i.push(e.key)}),i}wr(){this.Er.forEach(e=>this.gr(e))}gr(e){this.Er=this.Er.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){let t=new rs(new rr([])),r=new iY(t,e),n=new iY(t,e+1),i=nx();return this.Rr.forEachInRange([r,n],e=>{i=i.add(e.key)}),i}containsKey(e){let t=new iY(e,0),r=this.Er.firstAfterOrEqual(t);return null!==r&&e.isEqual(r.key)}}class iY{constructor(e,t){this.key=e,this.br=t}static Ar(e,t){return rs.comparator(e.key,t.key)||t4(e.br,t.br)}static Vr(e,t){return t4(e.br,t.br)||rs.comparator(e.key,t.key)}}/**
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
 */class iJ{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Dr=1,this.vr=new rw(iY.Ar)}checkEmpty(e){return rh.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,r,n){let i=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let s=new n1(i,t,r,n);for(let t of(this.mutationQueue.push(s),n))this.vr=this.vr.add(new iY(t.key,i)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return rh.resolve(s)}lookupMutationBatch(e,t){return rh.resolve(this.Cr(t))}getNextMutationBatchAfterBatchId(e,t){let r=this.Fr(t+1),n=r<0?0:r;return rh.resolve(this.mutationQueue.length>n?this.mutationQueue[n]:null)}getHighestUnacknowledgedBatchId(){return rh.resolve(0===this.mutationQueue.length?-1:this.Dr-1)}getAllMutationBatches(e){return rh.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let r=new iY(t,0),n=new iY(t,Number.POSITIVE_INFINITY),i=[];return this.vr.forEachInRange([r,n],e=>{let t=this.Cr(e.br);i.push(t)}),rh.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new rw(t4);return t.forEach(e=>{let t=new iY(e,0),n=new iY(e,Number.POSITIVE_INFINITY);this.vr.forEachInRange([t,n],e=>{r=r.add(e.br)})}),rh.resolve(this.Mr(r))}getAllMutationBatchesAffectingQuery(e,t){let r=t.path,n=r.length+1,i=r;rs.isDocumentKey(i)||(i=i.child(""));let s=new iY(new rs(i),0),o=new rw(t4);return this.vr.forEachWhile(e=>{let t=e.key.path;return!!r.isPrefixOf(t)&&(t.length===n&&(o=o.add(e.br)),!0)},s),rh.resolve(this.Mr(o))}Mr(e){let t=[];return e.forEach(e=>{let r=this.Cr(e);null!==r&&t.push(r)}),t}removeMutationBatch(e,t){0===this.Or(t.batchId,"removed")||tQ(),this.mutationQueue.shift();let r=this.vr;return rh.forEach(t.mutations,n=>{let i=new iY(n.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,n.key)}).next(()=>{this.vr=r})}Bn(e){}containsKey(e,t){let r=new iY(t,0),n=this.vr.firstAfterOrEqual(r);return rh.resolve(t.isEqual(n&&n.key))}performConsistencyCheck(e){return this.mutationQueue.length,rh.resolve()}Or(e,t){return this.Fr(e)}Fr(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Cr(e){let t=this.Fr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class iZ{constructor(e){this.Nr=e,this.docs=new rm(rs.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){let r=t.key,n=this.docs.get(r),i=n?n.size:0,s=this.Nr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let r=this.docs.get(t);return rh.resolve(r?r.document.mutableCopy():rX.newInvalidDocument(t))}getEntries(e,t){let r=nb;return t.forEach(e=>{let t=this.docs.get(e);r=r.insert(e,t?t.document.mutableCopy():rX.newInvalidDocument(e))}),rh.resolve(r)}getDocumentsMatchingQuery(e,t,r,n){let i=nb,s=t.path,o=new rs(s.child("__id-9223372036854775808__")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){let{key:e,value:{document:o}}=a.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||0>=function(e,t){let r=e.readTime.compareTo(t.readTime);return 0!==r?r:0!==(r=rs.comparator(e.documentKey,t.documentKey))?r:t4(e.largestBatchId,t.largestBatchId)}(new ro(o.readTime,o.key,-1),r)||(n.has(o.key)||ny(t,o))&&(i=i.insert(o.key,o.mutableCopy()))}return rh.resolve(i)}getAllFromCollectionGroup(e,t,r,n){tQ()}Br(e,t){return rh.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new i0(this)}getSize(e){return rh.resolve(this.size)}}class i0 extends i${constructor(e){super(),this.hr=e}applyChanges(e){let t=[];return this.changes.forEach((r,n)=>{n.isValidDocument()?t.push(this.hr.addEntry(e,n)):this.hr.removeEntry(r)}),rh.waitFor(t)}getFromCache(e,t){return this.hr.getEntry(e,t)}getAllFromCache(e,t){return this.hr.getEntries(e,t)}}/**
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
 */class i1{constructor(e){this.persistence=e,this.Lr=new nw(e=>no(e),na),this.lastRemoteSnapshotVersion=re.min(),this.highestTargetId=0,this.kr=0,this.qr=new iX,this.targetCount=0,this.Qr=iV.qn()}forEachTarget(e,t){return this.Lr.forEach((e,r)=>t(r)),rh.resolve()}getLastRemoteSnapshotVersion(e){return rh.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return rh.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),rh.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.kr&&(this.kr=t),rh.resolve()}Un(e){this.Lr.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this.Qr=new iV(t),this.highestTargetId=t),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,t){return this.Un(t),this.targetCount+=1,rh.resolve()}updateTargetData(e,t){return this.Un(t),rh.resolve()}removeTargetData(e,t){return this.Lr.delete(t.target),this.qr.yr(t.targetId),this.targetCount-=1,rh.resolve()}removeTargets(e,t,r){let n=0,i=[];return this.Lr.forEach((s,o)=>{o.sequenceNumber<=t&&null===r.get(o.targetId)&&(this.Lr.delete(s),i.push(this.removeMatchingKeysForTargetId(e,o.targetId)),n++)}),rh.waitFor(i).next(()=>n)}getTargetCount(e){return rh.resolve(this.targetCount)}getTargetData(e,t){let r=this.Lr.get(t)||null;return rh.resolve(r)}addMatchingKeys(e,t,r){return this.qr.mr(t,r),rh.resolve()}removeMatchingKeys(e,t,r){this.qr.pr(t,r);let n=this.persistence.referenceDelegate,i=[];return n&&t.forEach(t=>{i.push(n.markPotentiallyOrphaned(e,t))}),rh.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.qr.yr(t),rh.resolve()}getMatchingKeysForTargetId(e,t){let r=this.qr.Sr(t);return rh.resolve(r)}containsKey(e,t){return rh.resolve(this.qr.containsKey(t))}}/**
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
 */class i2{constructor(e,t){this.Kr={},this.overlays={},this.$r=new rc(0),this.Ur=!1,this.Ur=!0,this.Wr=new iW,this.referenceDelegate=e(this),this.Gr=new i1(this),this.indexManager=new iM,this.remoteDocumentCache=new iZ(e=>this.referenceDelegate.zr(e)),this.serializer=new iL(t),this.jr=new iH(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new iQ,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Kr[e.toKey()];return r||(r=new iJ(t,this.referenceDelegate),this.Kr[e.toKey()]=r),r}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,t,r){t$("MemoryPersistence","Starting transaction:",e);let n=new i6(this.$r.next());return this.referenceDelegate.Hr(),r(n).next(e=>this.referenceDelegate.Jr(n).next(()=>e)).toPromise().then(e=>(n.raiseOnCommittedEvent(),e))}Yr(e,t){return rh.or(Object.values(this.Kr).map(r=>()=>r.containsKey(e,t)))}}class i6 extends ra{constructor(e){super(),this.currentSequenceNumber=e}}class i5{constructor(e){this.persistence=e,this.Zr=new iX,this.Xr=null}static ei(e){return new i5(e)}get ti(){if(this.Xr)return this.Xr;throw tQ()}addReference(e,t,r){return this.Zr.addReference(r,t),this.ti.delete(r.toString()),rh.resolve()}removeReference(e,t,r){return this.Zr.removeReference(r,t),this.ti.add(r.toString()),rh.resolve()}markPotentiallyOrphaned(e,t){return this.ti.add(t.toString()),rh.resolve()}removeTarget(e,t){this.Zr.yr(t.targetId).forEach(e=>this.ti.add(e.toString()));let r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.ti.add(e.toString()))}).next(()=>r.removeTargetData(e,t))}Hr(){this.Xr=new Set}Jr(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return rh.forEach(this.ti,r=>{let n=rs.fromPath(r);return this.ni(e,n).next(e=>{e||t.removeEntry(n,re.min())})}).next(()=>(this.Xr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ni(e,t).next(e=>{e?this.ti.delete(t.toString()):this.ti.add(t.toString())})}zr(e){return 0}ni(e,t){return rh.or([()=>rh.resolve(this.Zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Yr(e,t)])}}class i3{constructor(e,t){this.persistence=e,this.ri=new nw(e=>/**
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
 */(function(e){let t="";for(let r=0;r<e.length;r++)t.length>0&&(t+="\x01\x01"),t=function(e,t){let r=t,n=e.length;for(let t=0;t<n;t++){let n=e.charAt(t);switch(n){case"\0":r+="\x01\x10";break;case"\x01":r+="\x01\x11";break;default:r+=n}}return r}(e.get(r),t);return t+"\x01\x01"})(e.path),(e,t)=>e.isEqual(t)),this.garbageCollector=new iz(this,t)}static ei(e,t){return new i3(e,t)}Hr(){}Jr(e){return rh.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Xn(e){let t=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(e=>t.next(t=>e+t))}nr(e){let t=0;return this.er(e,e=>{t++}).next(()=>t)}er(e,t){return rh.forEach(this.ri,(r,n)=>this.ir(e,r,n).next(e=>e?rh.resolve():t(n)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0,n=this.persistence.getRemoteDocumentCache(),i=n.newChangeBuffer();return n.Br(e,n=>this.ir(e,n,t).next(e=>{e||(r++,i.removeEntry(n,re.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.ri.set(t,e.currentSequenceNumber),rh.resolve()}removeTarget(e,t){let r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.ri.set(r,e.currentSequenceNumber),rh.resolve()}removeReference(e,t,r){return this.ri.set(r,e.currentSequenceNumber),rh.resolve()}updateLimboDocument(e,t){return this.ri.set(t,e.currentSequenceNumber),rh.resolve()}zr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=function e(t){switch(rO(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:let r=rD(t);return r?16+e(r):16;case 5:return 2*t.stringValue.length;case 6:return rx(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return(t.arrayValue.values||[]).reduce((t,r)=>t+e(r),0);case 10:case 11:var n;let i;return n=t.mapValue,i=0,rp(n.fields,(t,r)=>{i+=t.length+e(r)}),i;default:throw tQ()}}(e.data.value)),t}ir(e,t,r){return rh.or([()=>this.persistence.Yr(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{let e=this.ri.get(t);return rh.resolve(void 0!==e&&e>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class i8{constructor(e,t,r,n){this.targetId=e,this.fromCache=t,this.Wi=r,this.Gi=n}static zi(e,t){let r=nx(),n=nx();for(let e of t.docChanges)switch(e.type){case 0:r=r.add(e.doc.key);break;case 1:n=n.add(e.doc.key)}return new i8(e,t.fromCache,r,n)}}/**
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
 */class i4{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class i7{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=!function(){var e;let t=null===(e=J())||void 0===e?void 0:e.forceEnvironment;if("node"===t)return!0;if("browser"===t)return!1;try{return"[object process]"===Object.prototype.toString.call(C.process)}catch(e){return!1}}()&&navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")?8:function(e){let t=e.match(/Android ([\d.]+)/i);return Number(t?t[1].split(".").slice(0,2).join("."):"-1")}("undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:"")>0?6:4}initialize(e,t){this.Zi=e,this.indexManager=t,this.ji=!0}getDocumentsMatchingQuery(e,t,r,n){let i={result:null};return this.Xi(e,t).next(e=>{i.result=e}).next(()=>{if(!i.result)return this.es(e,t,n,r).next(e=>{i.result=e})}).next(()=>{if(i.result)return;let r=new i4;return this.ts(e,t,r).next(n=>{if(i.result=n,this.Hi)return this.ns(e,t,r,n.size)})}).next(()=>i.result)}ns(e,t,r,n){return r.documentReadCount<this.Ji?(tz()<=a.DEBUG&&t$("QueryEngine","SDK will not create cache indexes for query:",nm(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),rh.resolve()):(tz()<=a.DEBUG&&t$("QueryEngine","Query:",nm(t),"scans",r.documentReadCount,"local documents and returns",n,"documents as results."),r.documentReadCount>this.Yi*n?(tz()<=a.DEBUG&&t$("QueryEngine","The SDK decides to create cache indexes for query:",nm(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,nf(t))):rh.resolve())}Xi(e,t){if(nu(t))return rh.resolve(null);let r=nf(t);return this.indexManager.getIndexType(e,r).next(n=>0===n?null:(null!==t.limit&&1===n&&(r=nf(t=nd(t,null,"F"))),this.indexManager.getDocumentsMatchingTarget(e,r).next(n=>{let i=nx(...n);return this.Zi.getDocuments(e,i).next(n=>this.indexManager.getMinOffset(e,r).next(r=>{let s=this.rs(t,n);return this.ss(t,s,i,r.readTime)?this.Xi(e,nd(t,null,"F")):this.os(e,s,t,r)}))})))}es(e,t,r,n){return nu(t)||n.isEqual(re.min())?rh.resolve(null):this.Zi.getDocuments(e,r).next(i=>{let s=this.rs(t,i);return this.ss(t,s,r,n)?rh.resolve(null):(tz()<=a.DEBUG&&t$("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),nm(t)),this.os(e,s,t,function(e,t){let r=e.toTimestamp().seconds,n=e.toTimestamp().nanoseconds+1;return new ro(re.fromTimestamp(1e9===n?new t9(r+1,0):new t9(r,n)),rs.empty(),-1)}(n,0)).next(e=>e))})}rs(e,t){let r=new rw(nv(e));return t.forEach((t,n)=>{ny(e,n)&&(r=r.add(n))}),r}ss(e,t,r,n){if(null===e.limit)return!1;if(r.size!==t.size)return!0;let i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(n)>0)}ts(e,t,r){return tz()<=a.DEBUG&&t$("QueryEngine","Using full collection scan to execute query:",nm(t)),this.Zi.getDocumentsMatchingQuery(e,t,ro.min(),r)}os(e,t,r,n){return this.Zi.getDocumentsMatchingQuery(e,r,n).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}}/**
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
 */class i9{constructor(e,t,r,n){this.persistence=e,this._s=t,this.serializer=n,this.us=new rm(t4),this.cs=new nw(e=>no(e),na),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(r)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new iK(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.us))}}async function se(e,t){return await e.persistence.runTransaction("Handle user change","readonly",r=>{let n;return e.mutationQueue.getAllMutationBatches(r).next(i=>(n=i,e.Ps(t),e.mutationQueue.getAllMutationBatches(r))).next(t=>{let i=[],s=[],o=nx();for(let e of n)for(let t of(i.push(e.batchId),e.mutations))o=o.add(t.key);for(let e of t)for(let t of(s.push(e.batchId),e.mutations))o=o.add(t.key);return e.localDocuments.getDocuments(r,o).next(e=>({Ts:e,removedBatchIds:i,addedBatchIds:s}))})})}function st(e){return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Gr.getLastRemoteSnapshotVersion(t))}async function sr(e,t,r){let n=e.us.get(t);try{r||await e.persistence.runTransaction("Release target",r?"readwrite":"readwrite-primary",t=>e.persistence.referenceDelegate.removeTarget(t,n))}catch(e){if(!ru(e))throw e;t$("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}e.us=e.us.remove(t),e.cs.delete(n.target)}function sn(e,t,r){let n=re.min(),i=nx();return e.persistence.runTransaction("Execute query","readwrite",s=>(function(e,t,r){let n=e.cs.get(r);return void 0!==n?rh.resolve(e.us.get(n)):e.Gr.getTargetData(t,r)})(e,s,nf(t)).next(t=>{if(t)return n=t.lastLimboFreeSnapshotVersion,e.Gr.getMatchingKeysForTargetId(s,t.targetId).next(e=>{i=e})}).next(()=>e._s.getDocumentsMatchingQuery(s,t,r?n:re.min(),r?i:nx())).next(r=>{var n;let s;return n=t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2)),s=e.ls.get(n)||re.min(),r.forEach((e,t)=>{t.readTime.compareTo(s)>0&&(s=t.readTime)}),e.ls.set(n,s),{documents:r,Es:i}}))}class si{constructor(){this.activeTargetIds=nA}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){return JSON.stringify({activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()})}}class ss{constructor(){this._o=new si,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,t,r){this.ao[e]=t}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new si,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class so{uo(e){}shutdown(){}}/**
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
 */class sa{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){for(let e of(t$("ConnectivityMonitor","Network connectivity changed: AVAILABLE"),this.To))e(0)}Po(){for(let e of(t$("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE"),this.To))e(1)}static p(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}/**
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
 */let sl=null;function sh(){return null===sl?sl=0x10000000+Math.round(0x80000000*Math.random()):sl++,"0x"+sl.toString(16)}/**
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
 */const su={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class sc{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
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
 */const sf="WebChannelConnection";class sd extends class{get Co(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;let t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),n=encodeURIComponent(this.databaseId.database);this.Fo=t+"://"+e.host,this.Mo=`projects/${r}/databases/${n}`,this.xo="(default)"===this.databaseId.database?`project_id=${r}`:`project_id=${r}&database_id=${n}`}Oo(e,t,r,n,i){let s=sh(),o=this.No(e,t.toUriEncodedString());t$("RestConnection",`Sending RPC '${e}' ${s}:`,o,r);let a={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Bo(a,n,i),this.Lo(e,o,a,r).then(t=>(t$("RestConnection",`Received RPC '${e}' ${s}: `,t),t),t=>{throw tK("RestConnection",`RPC '${e}' ${s} failed with error: `,t,"url: ",o,"request:",r),t})}ko(e,t,r,n,i,s){return this.Oo(e,t,r,n,i)}Bo(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+tj}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,r)=>e[r]=t),r&&r.headers.forEach((t,r)=>e[r]=t)}No(e,t){let r=su[e];return`${this.Fo}/v1/${t}:${r}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Lo(e,t,r,n){let i=sh();return new Promise((s,o)=>{let a=new u;a.setWithCredentials(!0),a.listenOnce(f.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case d.NO_ERROR:let t=a.getResponseJson();t$(sf,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(t)),s(t);break;case d.TIMEOUT:t$(sf,`RPC '${e}' ${i} timed out`),o(new tX(tW.DEADLINE_EXCEEDED,"Request time out"));break;case d.HTTP_ERROR:let r=a.getStatus();if(t$(sf,`RPC '${e}' ${i} failed with status:`,r,"response text:",a.getResponseText()),r>0){let e=a.getResponseJson();Array.isArray(e)&&(e=e[0]);let t=null==e?void 0:e.error;if(t&&t.status&&t.message){let e=function(e){let t=e.toLowerCase().replace(/_/g,"-");return Object.values(tW).indexOf(t)>=0?t:tW.UNKNOWN}(t.status);o(new tX(e,t.message))}else o(new tX(tW.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new tX(tW.UNAVAILABLE,"Connection failed."));break;default:tQ()}}finally{t$(sf,`RPC '${e}' ${i} completed.`)}});let l=JSON.stringify(n);t$(sf,`RPC '${e}' ${i} sending request:`,n),a.send(t,"POST",l,r,15)})}qo(e,t,r){let n=sh(),i=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=y(),o=m(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;void 0!==l&&(a.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(a.useFetchStreams=!0),this.Bo(a.initMessageHeaders,t,r),a.encodeInitMessageHeaders=!0;let h=i.join("");t$(sf,`Creating RPC '${e}' stream ${n}: ${h}`,a);let u=s.createWebChannel(h,a),f=!1,d=!1,v=new sc({Eo:t=>{d?t$(sf,`Not sending because RPC '${e}' stream ${n} is closed:`,t):(f||(t$(sf,`Opening RPC '${e}' stream ${n} transport.`),u.open(),f=!0),t$(sf,`RPC '${e}' stream ${n} sending:`,t),u.send(t))},Ao:()=>u.close()}),w=(e,t,r)=>{e.listen(t,e=>{try{r(e)}catch(e){setTimeout(()=>{throw e},0)}})};return w(u,c.EventType.OPEN,()=>{d||(t$(sf,`RPC '${e}' stream ${n} transport opened.`),v.So())}),w(u,c.EventType.CLOSE,()=>{d||(d=!0,t$(sf,`RPC '${e}' stream ${n} transport closed`),v.Do())}),w(u,c.EventType.ERROR,t=>{d||(d=!0,tK(sf,`RPC '${e}' stream ${n} transport errored:`,t),v.Do(new tX(tW.UNAVAILABLE,"The operation could not be completed")))}),w(u,c.EventType.MESSAGE,t=>{var r;if(!d){let i=t.data[0];i||tQ();let s=(null==i?void 0:i.error)||(null===(r=i[0])||void 0===r?void 0:r.error);if(s){t$(sf,`RPC '${e}' stream ${n} received error:`,s);let t=s.status,r=function(e){let t=_[e];if(void 0!==t)return n3(t)}(t),i=s.message;void 0===r&&(r=tW.INTERNAL,i="Unknown error status: "+t+" with message "+s.message),d=!0,v.Do(new tX(r,i)),u.close()}else t$(sf,`RPC '${e}' stream ${n} received:`,i),v.vo(i)}}),w(o,g.STAT_EVENT,t=>{t.stat===p.PROXY?t$(sf,`RPC '${e}' stream ${n} detected buffering proxy`):t.stat===p.NOPROXY&&t$(sf,`RPC '${e}' stream ${n} detected no buffering proxy`)}),setTimeout(()=>{v.bo()},0),v}}function sp(){return"undefined"!=typeof document?document:null}/**
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
 */function sg(e){return new ig(e,!0)}/**
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
 */class sm{constructor(e,t,r=1e3,n=1.5,i=6e4){this.li=e,this.timerId=t,this.Qo=r,this.Ko=n,this.$o=i,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();let t=Math.floor(this.Uo+this.Ho()),r=Math.max(0,Date.now()-this.Go),n=Math.max(0,t-r);n>0&&t$("ExponentialBackoff",`Backing off for ${n} ms (base delay: ${this.Uo} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,n,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){null!==this.Wo&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){null!==this.Wo&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
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
 */class sy{constructor(e,t,r,n,i,s,o,a){this.li=e,this.Yo=r,this.Zo=n,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new sm(e,t)}i_(){return 1===this.state||5===this.state||this.s_()}s_(){return 2===this.state||3===this.state}start(){this.n_=0,4!==this.state?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&null===this.e_&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,t){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,4!==e?this.r_.reset():t&&t.code===tW.RESOURCE_EXHAUSTED?(tG(t.toString()),tG("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):t&&t.code===tW.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(t)}P_(){}auth(){this.state=1;let e=this.T_(this.Xo),t=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,r])=>{this.Xo===t&&this.I_(e,r)},t=>{e(()=>{let e=new tX(tW.UNKNOWN,"Fetching auth token failed: "+t.message);return this.d_(e)})})}I_(e,t){let r=this.T_(this.Xo);this.stream=this.E_(e,t),this.stream.Ro(()=>{r(()=>this.listener.Ro())}),this.stream.mo(()=>{r(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(e=>{r(()=>this.d_(e))}),this.stream.onMessage(e=>{r(()=>1==++this.n_?this.A_(e):this.onNext(e))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}d_(e){return t$("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return t=>{this.li.enqueueAndForget(()=>this.Xo===e?t():(t$("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class sv extends sy{constructor(e,t,r,n,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,n,s),this.serializer=i}E_(e,t){return this.connection.qo("Listen",e,t)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();let t=function(e,t){let r;if("targetChange"in t){var n,i;t.targetChange;let s="NO_CHANGE"===(n=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===n?1:"REMOVE"===n?2:"CURRENT"===n?3:"RESET"===n?4:tQ(),o=t.targetChange.targetIds||[],a=(i=t.targetChange.resumeToken,e.useProto3Json?(void 0===i||"string"==typeof i||tQ(),rT.fromBase64String(i||"")):(void 0===i||i instanceof ts||i instanceof Uint8Array||tQ(),rT.fromUint8Array(i||new Uint8Array))),l=t.targetChange.cause;r=new io(s,o,a,l&&new tX(void 0===l.code?tW.UNKNOWN:n3(l.code),l.message||"")||null)}else if("documentChange"in t){t.documentChange;let n=t.documentChange;n.document,n.document.name,n.document.updateTime;let i=iI(e,n.document.name),s=iw(n.document.updateTime),o=n.document.createTime?iw(n.document.createTime):re.min(),a=new rW({mapValue:{fields:n.document.fields}}),l=rX.newFoundDocument(i,s,o,a);r=new ii(n.targetIds||[],n.removedTargetIds||[],l.key,l)}else if("documentDelete"in t){t.documentDelete;let n=t.documentDelete;n.document;let i=iI(e,n.document),s=n.readTime?iw(n.readTime):re.min(),o=rX.newNoDocument(i,s);r=new ii([],n.removedTargetIds||[],o.key,o)}else if("documentRemove"in t){t.documentRemove;let n=t.documentRemove;n.document;let i=iI(e,n.document);r=new ii([],n.removedTargetIds||[],i,null)}else{if(!("filter"in t))return tQ();{t.filter;let e=t.filter;e.targetId;let{count:n=0,unchangedNames:i}=e,s=new n5(n,i);r=new is(e.targetId,s)}}return r}(this.serializer,e),r=function(e){if(!("targetChange"in e))return re.min();let t=e.targetChange;return t.targetIds&&t.targetIds.length?re.min():t.readTime?iw(t.readTime):re.min()}(e);return this.listener.R_(t,r)}V_(e){let t={};t.database=iC(this.serializer),t.addTarget=function(e,t){let r;let n=t.target;if((r=nl(n)?{documents:{documents:[iS(e,n.path)]}}:{query:function(e,t){var r,n;let i;let s={structuredQuery:{}},o=t.path;null!==t.collectionGroup?(i=o,s.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=o.popLast(),s.structuredQuery.from=[{collectionId:o.lastSegment()}]),s.parent=iS(e,i);let a=function(e){if(0!==e.length)return function e(t){return t instanceof r2?function(e){if("=="===e.op){if(r$(e.value))return{unaryFilter:{field:iD(e.field),op:"IS_NAN"}};if(rz(e.value))return{unaryFilter:{field:iD(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(r$(e.value))return{unaryFilter:{field:iD(e.field),op:"IS_NOT_NAN"}};if(rz(e.value))return{unaryFilter:{field:iD(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:iD(e.field),op:id[e.op],value:e.value}}}(t):t instanceof r6?function(t){let r=t.getFilters().map(t=>e(t));return 1===r.length?r[0]:{compositeFilter:{op:ip[t.op],filters:r}}}(t):tQ()}(r6.create(e,"and"))}(t.filters);a&&(s.structuredQuery.where=a);let l=function(e){if(0!==e.length)return e.map(e=>({field:iD(e.field),direction:ic[e.dir]}))}(t.orderBy);l&&(s.structuredQuery.orderBy=l);let h=im(e,t.limit);return null!==h&&(s.structuredQuery.limit=h),t.startAt&&(s.structuredQuery.startAt={before:(r=t.startAt).inclusive,values:r.position}),t.endAt&&(s.structuredQuery.endAt={before:!(n=t.endAt).inclusive,values:n.position}),{ct:s,parent:i}}(e,n).ct}).targetId=t.targetId,t.resumeToken.approximateByteSize()>0){r.resumeToken=iv(e,t.resumeToken);let n=im(e,t.expectedCount);null!==n&&(r.expectedCount=n)}else if(t.snapshotVersion.compareTo(re.min())>0){r.readTime=iy(e,t.snapshotVersion.toTimestamp());let n=im(e,t.expectedCount);null!==n&&(r.expectedCount=n)}return r}(this.serializer,e);let r=function(e,t){let r=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return tQ()}}(t.purpose);return null==r?null:{"goog-listen-tags":r}}(this.serializer,e);r&&(t.labels=r),this.c_(t)}m_(e){let t={};t.database=iC(this.serializer),t.removeTarget=e,this.c_(t)}}class sw extends sy{constructor(e,t,r,n,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,n,s),this.serializer=i}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}E_(e,t){return this.connection.qo("Write",e,t)}A_(e){return e.streamToken||tQ(),this.lastStreamToken=e.streamToken,e.writeResults&&0!==e.writeResults.length&&tQ(),this.listener.p_()}onNext(e){var t,r;e.streamToken||tQ(),this.lastStreamToken=e.streamToken,this.r_.reset();let n=(t=e.writeResults,r=e.commitTime,t&&t.length>0?(void 0!==r||tQ(),t.map(e=>{let t;return(t=e.updateTime?iw(e.updateTime):iw(r)).isEqual(re.min())&&(t=iw(r)),new nj(t,e.transformResults||[])})):[]),i=iw(e.commitTime);return this.listener.y_(i,n)}w_(){let e={};e.database=iC(this.serializer),this.c_(e)}g_(e){let t={streamToken:this.lastStreamToken,writes:e.map(e=>(function(e,t){var r;let n;if(t instanceof nQ)n={update:iA(e,t.key,t.value)};else if(t instanceof nZ)n={delete:iT(e,t.key)};else if(t instanceof nW)n={update:iA(e,t.key,t.data),updateMask:function(e){let t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}(t.fieldMask)};else{if(!(t instanceof n0))return tQ();n={verify:iT(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(e=>(function(e,t){let r=t.transform;if(r instanceof nL)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(r instanceof nO)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:r.elements}};if(r instanceof nP)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:r.elements}};if(r instanceof nB)return{fieldPath:t.field.canonicalString(),increment:r.Pe};throw tQ()})(0,e))),t.precondition.isNone||(n.currentDocument=void 0!==(r=t.precondition).updateTime?{updateTime:iy(e,r.updateTime.toTimestamp())}:void 0!==r.exists?{exists:r.exists}:tQ()),n})(this.serializer,e))};this.c_(t)}}/**
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
 */class sb extends class{}{constructor(e,t,r,n){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=n,this.S_=!1}b_(){if(this.S_)throw new tX(tW.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,t,r,n){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Oo(e,iE(t,r),n,i,s)).catch(e=>{throw"FirebaseError"===e.name?(e.code===tW.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new tX(tW.UNKNOWN,e.toString())})}ko(e,t,r,n,i){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.ko(e,iE(t,r),n,s,o,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===tW.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new tX(tW.UNKNOWN,e.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class sE{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){0===this.D_&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){"Online"===this.state?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,"Online"===e&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){let t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(tG(t),this.C_=!1):t$("OnlineStateTracker",t)}N_(){null!==this.v_&&(this.v_.cancel(),this.v_=null)}}/**
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
 */class s_{constructor(e,t,r,n,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.B_=[],this.L_=new Map,this.k_=new Set,this.q_=[],this.Q_=i,this.Q_.uo(e=>{r.enqueueAndForget(async()=>{sN(this)&&(t$("RemoteStore","Restarting streams for network reachability change."),await async function(e){e.k_.add(4),await sI(e),e.K_.set("Unknown"),e.k_.delete(4),await sT(e)}(this))})}),this.K_=new sE(r,n)}}async function sT(e){if(sN(e))for(let t of e.q_)await t(!0)}async function sI(e){for(let t of e.q_)await t(!1)}function sS(e,t){e.L_.has(t.targetId)||(e.L_.set(t.targetId,t),sk(e)?sD(e):sH(e).s_()&&sx(e,t))}function sC(e,t){let r=sH(e);e.L_.delete(t),r.s_()&&sA(e,t),0===e.L_.size&&(r.s_()?r.a_():sN(e)&&e.K_.set("Unknown"))}function sx(e,t){if(e.U_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(re.min())>0){let r=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(r)}sH(e).V_(t)}function sA(e,t){e.U_.xe(t),sH(e).m_(t)}function sD(e){e.U_=new il({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ut:t=>e.L_.get(t)||null,nt:()=>e.datastore.serializer.databaseId}),sH(e).start(),e.K_.F_()}function sk(e){return sN(e)&&!sH(e).i_()&&e.L_.size>0}function sN(e){return 0===e.k_.size}async function sR(e){e.K_.set("Online")}async function sL(e){e.L_.forEach((t,r)=>{sx(e,t)})}async function sO(e,t){e.U_=void 0,sk(e)?(e.K_.O_(t),sD(e)):e.K_.set("Unknown")}async function sM(e,t,r){if(e.K_.set("Online"),t instanceof io&&2===t.state&&t.cause)try{await async function(e,t){let r=t.cause;for(let n of t.targetIds)e.L_.has(n)&&(await e.remoteSyncer.rejectListen(n,r),e.L_.delete(n),e.U_.removeTarget(n))}(e,t)}catch(r){t$("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await sP(e,r)}else if(t instanceof ii?e.U_.$e(t):t instanceof is?e.U_.Je(t):e.U_.Ge(t),!r.isEqual(re.min()))try{let t=await st(e.localStore);r.compareTo(t)>=0&&await function(e,t){let r=e.U_.it(t);return r.targetChanges.forEach((r,n)=>{if(r.resumeToken.approximateByteSize()>0){let i=e.L_.get(n);i&&e.L_.set(n,i.withResumeToken(r.resumeToken,t))}}),r.targetMismatches.forEach((t,r)=>{let n=e.L_.get(t);if(!n)return;e.L_.set(t,n.withResumeToken(rT.EMPTY_BYTE_STRING,n.snapshotVersion)),sA(e,t);let i=new iR(n.target,t,r,n.sequenceNumber);sx(e,i)}),e.remoteSyncer.applyRemoteEvent(r)}(e,r)}catch(t){t$("RemoteStore","Failed to raise snapshot:",t),await sP(e,t)}}async function sP(e,t,r){if(!ru(t))throw t;e.k_.add(1),await sI(e),e.K_.set("Offline"),r||(r=()=>st(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{t$("RemoteStore","Retrying IndexedDB access"),await r(),e.k_.delete(1),await sT(e)})}function sU(e,t){return t().catch(r=>sP(e,r,t))}async function sB(e){let t=sQ(e),r=e.B_.length>0?e.B_[e.B_.length-1].batchId:-1;for(;sN(e)&&e.B_.length<10;)try{let n=await function(e,t){return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(void 0===t&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}(e.localStore,r);if(null===n){0===e.B_.length&&t.a_();break}r=n.batchId,function(e,t){e.B_.push(t);let r=sQ(e);r.s_()&&r.f_&&r.g_(t.mutations)}(e,n)}catch(t){await sP(e,t)}sV(e)&&sF(e)}function sV(e){return sN(e)&&!sQ(e).i_()&&e.B_.length>0}function sF(e){sQ(e).start()}async function sj(e){sQ(e).w_()}async function sq(e){let t=sQ(e);for(let r of e.B_)t.g_(r.mutations)}async function sz(e,t,r){let n=e.B_.shift(),i=n2.from(n,t,r);await sU(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await sB(e)}async function s$(e,t){t&&sQ(e).f_&&await async function(e,t){var r;if(function(e){switch(e){default:return tQ();case tW.CANCELLED:case tW.UNKNOWN:case tW.DEADLINE_EXCEEDED:case tW.RESOURCE_EXHAUSTED:case tW.INTERNAL:case tW.UNAVAILABLE:case tW.UNAUTHENTICATED:return!1;case tW.INVALID_ARGUMENT:case tW.NOT_FOUND:case tW.ALREADY_EXISTS:case tW.PERMISSION_DENIED:case tW.FAILED_PRECONDITION:case tW.ABORTED:case tW.OUT_OF_RANGE:case tW.UNIMPLEMENTED:case tW.DATA_LOSS:return!0}}(r=t.code)&&r!==tW.ABORTED){let r=e.B_.shift();sQ(e).__(),await sU(e,()=>e.remoteSyncer.rejectFailedWrite(r.batchId,t)),await sB(e)}}(e,t),sV(e)&&sF(e)}async function sG(e,t){e.asyncQueue.verifyOperationInProgress(),t$("RemoteStore","RemoteStore received new credentials");let r=sN(e);e.k_.add(3),await sI(e),r&&e.K_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.k_.delete(3),await sT(e)}async function sK(e,t){t?(e.k_.delete(2),await sT(e)):t||(e.k_.add(2),await sI(e),e.K_.set("Unknown"))}function sH(e){var t,r,n;return e.W_||(e.W_=(t=e.datastore,r=e.asyncQueue,n={Ro:sR.bind(null,e),mo:sL.bind(null,e),po:sO.bind(null,e),R_:sM.bind(null,e)},t.b_(),new sv(r,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,n)),e.q_.push(async t=>{t?(e.W_.__(),sk(e)?sD(e):e.K_.set("Unknown")):(await e.W_.stop(),e.U_=void 0)})),e.W_}function sQ(e){var t,r,n;return e.G_||(e.G_=(t=e.datastore,r=e.asyncQueue,n={Ro:()=>Promise.resolve(),mo:sj.bind(null,e),po:s$.bind(null,e),p_:sq.bind(null,e),y_:sz.bind(null,e)},t.b_(),new sw(r,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,n)),e.q_.push(async t=>{t?(e.G_.__(),await sB(e)):(await e.G_.stop(),e.B_.length>0&&(t$("RemoteStore",`Stopping write stream with ${e.B_.length} pending writes`),e.B_=[]))})),e.G_}/**
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
 */class sW{constructor(e,t,r,n,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=n,this.removalCallback=i,this.deferred=new tY,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,n,i){let s=new sW(e,t,Date.now()+r,n,i);return s.start(r),s}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new tX(tW.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function sX(e,t){if(tG("AsyncQueue",`${t}: ${e}`),ru(e))return new tX(tW.UNAVAILABLE,`${t}: ${e}`);throw e}/**
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
 */class sY{static emptySet(e){return new sY(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||rs.comparator(t.key,r.key):(e,t)=>rs.comparator(e.key,t.key),this.keyedMap=n_(),this.sortedSet=new rm(this.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){let t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){let t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){let t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof sY)||this.size!==e.size)return!1;let t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){let e=t.getNext().key,n=r.getNext().key;if(!e.isEqual(n))return!1}return!0}toString(){let e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){let r=new sY;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class sJ{constructor(){this.z_=new rm(rs.comparator)}track(e){let t=e.doc.key,r=this.z_.get(t);r?0!==e.type&&3===r.type?this.z_=this.z_.insert(t,e):3===e.type&&1!==r.type?this.z_=this.z_.insert(t,{type:r.type,doc:e.doc}):2===e.type&&2===r.type?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):2===e.type&&0===r.type?this.z_=this.z_.insert(t,{type:0,doc:e.doc}):1===e.type&&0===r.type?this.z_=this.z_.remove(t):1===e.type&&2===r.type?this.z_=this.z_.insert(t,{type:1,doc:r.doc}):0===e.type&&1===r.type?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):tQ():this.z_=this.z_.insert(t,e)}j_(){let e=[];return this.z_.inorderTraversal((t,r)=>{e.push(r)}),e}}class sZ{constructor(e,t,r,n,i,s,o,a,l){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=n,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=l}static fromInitialDocuments(e,t,r,n,i){let s=[];return t.forEach(e=>{s.push({type:0,doc:e})}),new sZ(e,t,sY.emptySet(t),s,r,n,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&np(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==r[e].type||!t[e].doc.isEqual(r[e].doc))return!1;return!0}}/**
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
 */class s0{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class s1{constructor(){this.queries=s2(),this.onlineState="Unknown",this.X_=new Set}terminate(){!function(e,t){let r=e.queries;e.queries=s2(),r.forEach((e,r)=>{for(let e of r.J_)e.onError(t)})}(this,new tX(tW.ABORTED,"Firestore shutting down"))}}function s2(){return new nw(e=>ng(e),np)}async function s6(e,t){let r=3,n=t.query,i=e.queries.get(n);i?!i.Y_()&&t.Z_()&&(r=2):(i=new s0,r=+!t.Z_());try{switch(r){case 0:i.H_=await e.onListen(n,!0);break;case 1:i.H_=await e.onListen(n,!1);break;case 2:await e.onFirstRemoteStoreListen(n)}}catch(r){let e=sX(r,`Initialization of query '${nm(t.query)}' failed`);return void t.onError(e)}e.queries.set(n,i),i.J_.push(t),t.ea(e.onlineState),i.H_&&t.ta(i.H_)&&s4(e)}async function s5(e,t){let r=t.query,n=3,i=e.queries.get(r);if(i){let e=i.J_.indexOf(t);e>=0&&(i.J_.splice(e,1),0===i.J_.length?n=+!t.Z_():!i.Y_()&&t.Z_()&&(n=2))}switch(n){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function s3(e,t){let r=!1;for(let n of t){let t=n.query,i=e.queries.get(t);if(i){for(let e of i.J_)e.ta(n)&&(r=!0);i.H_=n}}r&&s4(e)}function s8(e,t,r){let n=e.queries.get(t);if(n)for(let e of n.J_)e.onError(r);e.queries.delete(t)}function s4(e){e.X_.forEach(e=>{e.next()})}(S=I||(I={})).na="default",S.Cache="cache";class s7{constructor(e,t,r){this.query=e,this.ra=t,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=r||{}}ta(e){if(!this.options.includeMetadataChanges){let t=[];for(let r of e.docChanges)3!==r.type&&t.push(r);e=new sZ(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ia?this.oa(e)&&(this.ra.next(e),t=!0):this._a(e,this.onlineState)&&(this.aa(e),t=!0),this.sa=e,t}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let t=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),t=!0),t}_a(e,t){return!(e.fromCache&&this.Z_())||(!this.options.ua||!("Offline"!==t))&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}oa(e){if(e.docChanges.length>0)return!0;let t=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}aa(e){e=sZ.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==I.Cache}}/**
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
 */class s9{constructor(e){this.key=e}}class oe{constructor(e){this.key=e}}class ot{constructor(e,t){this.query=e,this.Ea=t,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=nx(),this.mutatedKeys=nx(),this.Va=nv(e),this.ma=new sY(this.Va)}get fa(){return this.Ea}ga(e,t){let r=t?t.pa:new sJ,n=t?t.ma:this.ma,i=t?t.mutatedKeys:this.mutatedKeys,s=n,o=!1,a="F"===this.query.limitType&&n.size===this.query.limit?n.last():null,l="L"===this.query.limitType&&n.size===this.query.limit?n.first():null;if(e.inorderTraversal((e,t)=>{let h=n.get(e),u=ny(this.query,t)?t:null,c=!!h&&this.mutatedKeys.has(h.key),f=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations),d=!1;h&&u?h.data.isEqual(u.data)?c!==f&&(r.track({type:3,doc:u}),d=!0):this.ya(h,u)||(r.track({type:2,doc:u}),d=!0,(a&&this.Va(u,a)>0||l&&0>this.Va(u,l))&&(o=!0)):!h&&u?(r.track({type:0,doc:u}),d=!0):h&&!u&&(r.track({type:1,doc:h}),d=!0,(a||l)&&(o=!0)),d&&(u?(s=s.add(u),i=f?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))}),null!==this.query.limit)for(;s.size>this.query.limit;){let e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),r.track({type:1,doc:e})}return{ma:s,pa:r,ss:o,mutatedKeys:i}}ya(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,n){let i=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;let s=e.pa.j_();s.sort((e,t)=>(function(e,t){let r=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return tQ()}};return r(e)-r(t)})(e.type,t.type)||this.Va(e.doc,t.doc)),this.wa(r),n=null!=n&&n;let o=t&&!n?this.Sa():[],a=+(0===this.Ra.size&&!!this.current&&!n),l=a!==this.Aa;return(this.Aa=a,0!==s.length||l)?{snapshot:new sZ(this.query,e.ma,i,s,e.mutatedKeys,0===a,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),ba:o}:{ba:o}}ea(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({ma:this.ma,pa:new sJ,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.Ea.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(e=>this.Ea=this.Ea.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.Ea=this.Ea.delete(e)),this.current=e.current)}Sa(){if(!this.current)return[];let e=this.Ra;this.Ra=nx(),this.ma.forEach(e=>{this.Da(e.key)&&(this.Ra=this.Ra.add(e.key))});let t=[];return e.forEach(e=>{this.Ra.has(e)||t.push(new oe(e))}),this.Ra.forEach(r=>{e.has(r)||t.push(new s9(r))}),t}va(e){this.Ea=e.Es,this.Ra=nx();let t=this.ga(e.documents);return this.applyChanges(t,!0)}Ca(){return sZ.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,0===this.Aa,this.hasCachedResults)}}class or{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class on{constructor(e){this.key=e,this.Fa=!1}}class oi{constructor(e,t,r,n,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=n,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.Ma={},this.xa=new nw(e=>ng(e),np),this.Oa=new Map,this.Na=new Set,this.Ba=new rm(rs.comparator),this.La=new Map,this.ka=new iX,this.qa={},this.Qa=new Map,this.Ka=iV.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return!0===this.$a}}async function os(e,t,r=!0){let n;let i=oC(e),s=i.xa.get(t);return s?(i.sharedClientState.addLocalQueryTarget(s.targetId),n=s.view.Ca()):n=await oa(i,t,r,!0),n}async function oo(e,t){let r=oC(e);await oa(r,t,!0,!1)}async function oa(e,t,r,n){var i,s;let o;let a=await (i=e.localStore,s=nf(t),i.persistence.runTransaction("Allocate target","readwrite",e=>{let t;return i.Gr.getTargetData(e,s).next(r=>r?(t=r,rh.resolve(t)):i.Gr.allocateTargetId(e).next(r=>(t=new iR(s,r,"TargetPurposeListen",e.currentSequenceNumber),i.Gr.addTargetData(e,t).next(()=>t))))}).then(e=>{let t=i.us.get(e.targetId);return(null===t||e.snapshotVersion.compareTo(t.snapshotVersion)>0)&&(i.us=i.us.insert(e.targetId,e),i.cs.set(s,e.targetId)),e})),l=a.targetId,h=e.sharedClientState.addLocalQueryTarget(l,r);return n&&(o=await ol(e,t,l,"current"===h,a.resumeToken)),e.isPrimaryClient&&r&&sS(e.remoteStore,a),o}async function ol(e,t,r,n,i){e.Ua=(t,r,n)=>(async function(e,t,r,n){let i=t.view.ga(r);i.ss&&(i=await sn(e.localStore,t.query,!1).then(({documents:e})=>t.view.ga(e,i)));let s=n&&n.targetChanges.get(t.targetId),o=n&&null!=n.targetMismatches.get(t.targetId),a=t.view.applyChanges(i,e.isPrimaryClient,s,o);return oE(e,t.targetId,a.ba),a.snapshot})(e,t,r,n);let s=await sn(e.localStore,t,!0),o=new ot(t,s.Es),a=o.ga(s.documents),l=ir.createSynthesizedTargetChangeForCurrentChange(r,n&&"Offline"!==e.onlineState,i),h=o.applyChanges(a,e.isPrimaryClient,l);oE(e,r,h.ba);let u=new or(t,r,o);return e.xa.set(t,u),e.Oa.has(r)?e.Oa.get(r).push(t):e.Oa.set(r,[t]),h.snapshot}async function oh(e,t,r){let n=e.xa.get(t),i=e.Oa.get(n.targetId);if(i.length>1)return e.Oa.set(n.targetId,i.filter(e=>!np(e,t))),void e.xa.delete(t);e.isPrimaryClient?(e.sharedClientState.removeLocalQueryTarget(n.targetId),e.sharedClientState.isActiveQueryTarget(n.targetId)||await sr(e.localStore,n.targetId,!1).then(()=>{e.sharedClientState.clearQueryState(n.targetId),r&&sC(e.remoteStore,n.targetId),ow(e,n.targetId)}).catch(rl)):(ow(e,n.targetId),await sr(e.localStore,n.targetId,!0))}async function ou(e,t){let r=e.xa.get(t),n=e.Oa.get(r.targetId);e.isPrimaryClient&&1===n.length&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),sC(e.remoteStore,r.targetId))}async function oc(e,t,r){var n;let i=(e.remoteStore.remoteSyncer.applySuccessfulWrite=og.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=om.bind(null,e),e);try{let e;let s=await function(e,t){let r,n;let i=t9.now(),s=t.reduce((e,t)=>e.add(t.key),nx());return e.persistence.runTransaction("Locally write mutations","readwrite",o=>{let a=nb,l=nx();return e.hs.getEntries(o,s).next(e=>{(a=e).forEach((e,t)=>{t.isValidDocument()||(l=l.add(e))})}).next(()=>e.localDocuments.getOverlayedDocuments(o,a)).next(n=>{r=n;let s=[];for(let e of t){let t=function(e,t){let r=null;for(let n of e.fieldTransforms){let e=t.data.field(n.field),i=nR(n.transform,e||null);null!=i&&(null===r&&(r=rW.empty()),r.set(n.field,i))}return r||null}(e,r.get(e.key).overlayedDocument);null!=t&&s.push(new nW(e.key,t,function e(t){let r=[];return rp(t.fields,(t,n)=>{let i=new ri([t]);if(rG(n)){let t=e(n.mapValue).fields;if(0===t.length)r.push(i);else for(let e of t)r.push(i.child(e))}else r.push(i)}),new rE(r)}(t.value.mapValue),nq.exists(!0)))}return e.mutationQueue.addMutationBatch(o,i,s,t)}).next(t=>{n=t;let i=t.applyToLocalDocumentSet(r,l);return e.documentOverlayCache.saveOverlays(o,t.batchId,i)})}).then(()=>({batchId:n.batchId,changes:nT(r)}))}(i.localStore,t);i.sharedClientState.addPendingMutation(s.batchId),n=s.batchId,(e=i.qa[i.currentUser.toKey()])||(e=new rm(t4)),e=e.insert(n,r),i.qa[i.currentUser.toKey()]=e,await oT(i,s.changes),await sB(i.remoteStore)}catch(t){let e=sX(t,"Failed to persist write");r.reject(e)}}async function of(e,t){try{let r=await function(e,t){let r=t.snapshotVersion,n=e.us;return e.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{var s;let o,a;let l=e.hs.newChangeBuffer({trackRemovals:!0});n=e.us;let h=[];t.targetChanges.forEach((s,o)=>{var a;let l=n.get(o);if(!l)return;h.push(e.Gr.removeMatchingKeys(i,s.removedDocuments,o).next(()=>e.Gr.addMatchingKeys(i,s.addedDocuments,o)));let u=l.withSequenceNumber(i.currentSequenceNumber);null!==t.targetMismatches.get(o)?u=u.withResumeToken(rT.EMPTY_BYTE_STRING,re.min()).withLastLimboFreeSnapshotVersion(re.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,r)),n=n.insert(o,u),a=u,(0===l.resumeToken.approximateByteSize()||a.snapshotVersion.toMicroseconds()-l.snapshotVersion.toMicroseconds()>=3e8||s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size>0)&&h.push(e.Gr.updateTargetData(i,u))});let u=nb,c=nx();if(t.documentUpdates.forEach(r=>{t.resolvedLimboDocuments.has(r)&&h.push(e.persistence.referenceDelegate.updateLimboDocument(i,r))}),h.push((s=t.documentUpdates,o=nx(),a=nx(),s.forEach(e=>o=o.add(e)),l.getEntries(i,o).next(e=>{let t=nb;return s.forEach((r,n)=>{let i=e.get(r);n.isFoundDocument()!==i.isFoundDocument()&&(a=a.add(r)),n.isNoDocument()&&n.version.isEqual(re.min())?(l.removeEntry(r,n.readTime),t=t.insert(r,n)):!i.isValidDocument()||n.version.compareTo(i.version)>0||0===n.version.compareTo(i.version)&&i.hasPendingWrites?(l.addEntry(n),t=t.insert(r,n)):t$("LocalStore","Ignoring outdated watch update for ",r,". Current version:",i.version," Watch version:",n.version)}),{Is:t,ds:a}})).next(e=>{u=e.Is,c=e.ds})),!r.isEqual(re.min())){let t=e.Gr.getLastRemoteSnapshotVersion(i).next(t=>e.Gr.setTargetsMetadata(i,i.currentSequenceNumber,r));h.push(t)}return rh.waitFor(h).next(()=>l.apply(i)).next(()=>e.localDocuments.getLocalViewOfDocuments(i,u,c)).next(()=>u)}).then(t=>(e.us=n,t))}(e.localStore,t);t.targetChanges.forEach((t,r)=>{let n=e.La.get(r);n&&(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1||tQ(),t.addedDocuments.size>0?n.Fa=!0:t.modifiedDocuments.size>0?n.Fa||tQ():t.removedDocuments.size>0&&(n.Fa||tQ(),n.Fa=!1))}),await oT(e,r,t)}catch(e){await rl(e)}}function od(e,t,r){var n;if(e.isPrimaryClient&&0===r||!e.isPrimaryClient&&1===r){let r;let i=[];e.xa.forEach((e,r)=>{let n=r.view.ea(t);n.snapshot&&i.push(n.snapshot)}),(n=e.eventManager).onlineState=t,r=!1,n.queries.forEach((e,n)=>{for(let e of n.J_)e.ea(t)&&(r=!0)}),r&&s4(n),i.length&&e.Ma.R_(i),e.onlineState=t,e.isPrimaryClient&&e.sharedClientState.setOnlineState(t)}}async function op(e,t,r){e.sharedClientState.updateQueryState(t,"rejected",r);let n=e.La.get(t),i=n&&n.key;if(i){let r=new rm(rs.comparator);r=r.insert(i,rX.newNoDocument(i,re.min()));let n=nx().add(i),s=new it(re.min(),new Map,new rm(t4),r,n);await of(e,s),e.Ba=e.Ba.remove(i),e.La.delete(t),o_(e)}else await sr(e.localStore,t,!1).then(()=>ow(e,t,r)).catch(rl)}async function og(e,t){var r;let n=t.batch.batchId;try{let i=await (r=e.localStore).persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{let n=t.batch.keys(),i=r.hs.newChangeBuffer({trackRemovals:!0});return(function(e,t,r,n){let i=r.batch,s=i.keys(),o=rh.resolve();return s.forEach(e=>{o=o.next(()=>n.getEntry(t,e)).next(t=>{let s=r.docVersions.get(e);null!==s||tQ(),0>t.version.compareTo(s)&&(i.applyToRemoteDocument(t,r),t.isValidDocument()&&(t.setReadTime(r.commitVersion),n.addEntry(t)))})}),o.next(()=>e.mutationQueue.removeMutationBatch(t,i))})(r,e,t,i).next(()=>i.apply(e)).next(()=>r.mutationQueue.performConsistencyCheck(e)).next(()=>r.documentOverlayCache.removeOverlaysForBatchId(e,n,t.batch.batchId)).next(()=>r.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=nx();for(let r=0;r<e.mutationResults.length;++r)e.mutationResults[r].transformResults.length>0&&(t=t.add(e.batch.mutations[r].key));return t}(t))).next(()=>r.localDocuments.getDocuments(e,n))});ov(e,n,null),oy(e,n),e.sharedClientState.updateMutationState(n,"acknowledged"),await oT(e,i)}catch(e){await rl(e)}}async function om(e,t,r){var n;try{let i=await (n=e.localStore).persistence.runTransaction("Reject batch","readwrite-primary",e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next(t=>(null!==t||tQ(),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t))).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r)).next(()=>n.localDocuments.getDocuments(e,r))});ov(e,t,r),oy(e,t),e.sharedClientState.updateMutationState(t,"rejected",r),await oT(e,i)}catch(e){await rl(e)}}function oy(e,t){(e.Qa.get(t)||[]).forEach(e=>{e.resolve()}),e.Qa.delete(t)}function ov(e,t,r){let n=e.qa[e.currentUser.toKey()];if(n){let i=n.get(t);i&&(r?i.reject(r):i.resolve(),n=n.remove(t)),e.qa[e.currentUser.toKey()]=n}}function ow(e,t,r=null){for(let n of(e.sharedClientState.removeLocalQueryTarget(t),e.Oa.get(t)))e.xa.delete(n),r&&e.Ma.Wa(n,r);e.Oa.delete(t),e.isPrimaryClient&&e.ka.yr(t).forEach(t=>{e.ka.containsKey(t)||ob(e,t)})}function ob(e,t){e.Na.delete(t.path.canonicalString());let r=e.Ba.get(t);null!==r&&(sC(e.remoteStore,r),e.Ba=e.Ba.remove(t),e.La.delete(r),o_(e))}function oE(e,t,r){for(let n of r)n instanceof s9?(e.ka.addReference(n.key,t),function(e,t){let r=t.key,n=r.path.canonicalString();e.Ba.get(r)||e.Na.has(n)||(t$("SyncEngine","New document in limbo: "+r),e.Na.add(n),o_(e))}(e,n)):n instanceof oe?(t$("SyncEngine","Document no longer in limbo: "+n.key),e.ka.removeReference(n.key,t),e.ka.containsKey(n.key)||ob(e,n.key)):tQ()}function o_(e){for(;e.Na.size>0&&e.Ba.size<e.maxConcurrentLimboResolutions;){let t=e.Na.values().next().value;e.Na.delete(t);let r=new rs(rr.fromString(t)),n=e.Ka.next();e.La.set(n,new on(r)),e.Ba=e.Ba.insert(r,n),sS(e.remoteStore,new iR(nf(new nh(r.path)),n,"TargetPurposeLimboResolution",rc.oe))}}async function oT(e,t,r){let n=[],i=[],s=[];e.xa.isEmpty()||(e.xa.forEach((o,a)=>{s.push(e.Ua(a,t,r).then(t=>{var s;if((t||r)&&e.isPrimaryClient){let n=t?!t.fromCache:null===(s=null==r?void 0:r.targetChanges.get(a.targetId))||void 0===s?void 0:s.current;e.sharedClientState.updateQueryState(a.targetId,n?"current":"not-current")}if(t){n.push(t);let e=i8.zi(a.targetId,t);i.push(e)}}))}),await Promise.all(s),e.Ma.R_(n),await async function(e,t){try{await e.persistence.runTransaction("notifyLocalViewChanges","readwrite",r=>rh.forEach(t,t=>rh.forEach(t.Wi,n=>e.persistence.referenceDelegate.addReference(r,t.targetId,n)).next(()=>rh.forEach(t.Gi,n=>e.persistence.referenceDelegate.removeReference(r,t.targetId,n)))))}catch(e){if(!ru(e))throw e;t$("LocalStore","Failed to update sequence numbers: "+e)}for(let r of t){let t=r.targetId;if(!r.fromCache){let r=e.us.get(t),n=r.snapshotVersion,i=r.withLastLimboFreeSnapshotVersion(n);e.us=e.us.insert(t,i)}}}(e.localStore,i))}async function oI(e,t){var r;if(!e.currentUser.isEqual(t)){t$("SyncEngine","User change. New user:",t.toKey());let n=await se(e.localStore,t);e.currentUser=t,r="'waitForPendingWrites' promise is rejected due to a user change.",e.Qa.forEach(e=>{e.forEach(e=>{e.reject(new tX(tW.CANCELLED,r))})}),e.Qa.clear(),e.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),await oT(e,n.Ts)}}function oS(e,t){let r=e.La.get(t);if(r&&r.Fa)return nx().add(r.key);{let r=nx(),n=e.Oa.get(t);if(!n)return r;for(let t of n){let n=e.xa.get(t);r=r.unionWith(n.view.fa)}return r}}function oC(e){return e.remoteStore.remoteSyncer.applyRemoteEvent=of.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=oS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=op.bind(null,e),e.Ma.R_=s3.bind(null,e.eventManager),e.Ma.Wa=s8.bind(null,e.eventManager),e}class ox{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=sg(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,t){return null}Ya(e,t){return null}Ha(e){var t;return t=this.persistence,new i9(t,new i7,e.initialUser,this.serializer)}ja(e){return new i2(i5.ei,this.serializer)}za(e){return new ss}async terminate(){var e,t;null===(e=this.gcScheduler)||void 0===e||e.stop(),null===(t=this.indexBackfillerScheduler)||void 0===t||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ox.provider={build:()=>new ox};class oA extends ox{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,t){return this.persistence.referenceDelegate instanceof i3||tQ(),new iq(this.persistence.referenceDelegate.garbageCollector,e.asyncQueue,t)}ja(e){let t=void 0!==this.cacheSizeBytes?iB.withCacheSize(this.cacheSizeBytes):iB.DEFAULT;return new i2(e=>i3.ei(e,t),this.serializer)}}class oD{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>od(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=oI.bind(null,this.syncEngine),await sK(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new s1}createDatastore(e){let t=sg(e.databaseInfo.databaseId),r=new sd(e.databaseInfo);return new sb(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){var t;return t=this.localStore,new s_(t,this.datastore,e.asyncQueue,e=>od(this.syncEngine,e,0),sa.p()?new sa:new so)}createSyncEngine(e,t){return function(e,t,r,n,i,s,o){let a=new oi(e,t,r,n,i,s);return o&&(a.$a=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(e){t$("RemoteStore","RemoteStore shutting down."),e.k_.add(5),await sI(e),e.Q_.shutdown(),e.K_.set("Unknown")}(this.remoteStore),null===(e=this.datastore)||void 0===e||e.terminate(),null===(t=this.eventManager)||void 0===t||t.terminate()}}oD.provider={build:()=>new oD};/**
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
 */class ok{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):tG("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class oN{constructor(e,t,r,n,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=n,this.user=tF.UNAUTHENTICATED,this.clientId=t8.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async e=>{t$("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(r,e=>(t$("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();let e=new tY;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(r){let t=sX(r,"Failed to shutdown persistence");e.reject(t)}}),e.promise}}async function oR(e,t){e.asyncQueue.verifyOperationInProgress(),t$("FirestoreClient","Initializing OfflineComponentProvider");let r=e.configuration;await t.initialize(r);let n=r.initialUser;e.setCredentialChangeListener(async e=>{n.isEqual(e)||(await se(t.localStore,e),n=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function oL(e,t){e.asyncQueue.verifyOperationInProgress();let r=await oO(e);t$("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(r,e.configuration),e.setCredentialChangeListener(e=>sG(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,r)=>sG(t.remoteStore,r)),e._onlineComponents=t}async function oO(e){if(!e._offlineComponents){if(e._uninitializedComponentsProvider){t$("FirestoreClient","Using user provided OfflineComponentProvider");try{await oR(e,e._uninitializedComponentsProvider._offline)}catch(t){if(!("FirebaseError"===t.name?t.code===tW.FAILED_PRECONDITION||t.code===tW.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code))throw t;tK("Error using user provided cache. Falling back to memory cache: "+t),await oR(e,new ox)}}else t$("FirestoreClient","Using default OfflineComponentProvider"),await oR(e,new oA(void 0))}return e._offlineComponents}async function oM(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(t$("FirestoreClient","Using user provided OnlineComponentProvider"),await oL(e,e._uninitializedComponentsProvider._online)):(t$("FirestoreClient","Using default OnlineComponentProvider"),await oL(e,new oD))),e._onlineComponents}async function oP(e){let t=await oM(e),r=t.eventManager;return r.onListen=os.bind(null,t.syncEngine),r.onUnlisten=oh.bind(null,t.syncEngine),r.onFirstRemoteStoreListen=oo.bind(null,t.syncEngine),r.onLastRemoteStoreUnlisten=ou.bind(null,t.syncEngine),r}/**
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
 */function oU(e){let t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
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
 */const oB=new Map;/**
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
 */function oV(e,t,r){if(!r)throw new tX(tW.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function oF(e){if(!rs.isDocumentKey(e))throw new tX(tW.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function oj(e){if(rs.isDocumentKey(e))throw new tX(tW.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function oq(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{var t;let r=(t=e).constructor?t.constructor.name:null;return r?`a custom ${r} object`:"an object"}}return"function"==typeof e?"a function":tQ()}function oz(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new tX(tW.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let r=oq(e);throw new tX(tW.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${r}`)}}return e}/**
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
 */class o${constructor(e){var t,r;if(void 0===e.host){if(void 0!==e.ssl)throw new tX(tW.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=0x2800000;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new tX(tW.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(e,t,r,n){if(!0===t&&!0===n)throw new tX(tW.INVALID_ARGUMENT,`${e} and ${r} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=oU(null!==(r=e.experimentalLongPollingOptions)&&void 0!==r?r:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new tX(tW.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new tX(tW.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new tX(tW.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){var t,r;return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,r=e.experimentalLongPollingOptions,t.timeoutSeconds===r.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class oG{constructor(e,t,r,n){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new o$({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new tX(tW.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return"notTerminated"!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new tX(tW.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new o$(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new tZ;switch(e.type){case"firstParty":return new t6(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new tX(tW.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return"notTerminated"===this._terminateTask&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){"notTerminated"===this._terminateTask?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){let t=oB.get(e);t&&(t$("ComponentProvider","Removing Datastore"),oB.delete(e),t.terminate())}(this),Promise.resolve()}}/**
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
 */class oK{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new oK(this.firestore,e,this._query)}}class oH{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new oQ(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new oH(this.firestore,e,this._key)}}class oQ extends oK{constructor(e,t,r){super(e,t,new nh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new oH(this.firestore,null,new rs(e))}withConverter(e){return new oQ(this.firestore,e,this._path)}}function oW(e,t,...r){if(e=el(e),oV("collection","path",t),e instanceof oG){let n=rr.fromString(t,...r);return oj(n),new oQ(e,null,n)}{if(!(e instanceof oH||e instanceof oQ))throw new tX(tW.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let n=e._path.child(rr.fromString(t,...r));return oj(n),new oQ(e.firestore,null,n)}}/**
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
 */class oX{constructor(e=Promise.resolve()){this.Iu=[],this.du=!1,this.Eu=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new sm(this,"async_queue_retry"),this.fu=()=>{let e=sp();e&&t$("AsyncQueue","Visibility state changed to "+e.visibilityState),this.r_.Jo()},this.gu=e;let t=sp();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.du}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.du){this.du=!0,this.Vu=e||!1;let t=sp();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.du)return new Promise(()=>{});let t=new tY;return this.yu(()=>this.du&&this.Vu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(0!==this.Iu.length){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!ru(e))throw e;t$("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){let t=this.gu.then(()=>(this.Ru=!0,e().catch(e=>{let t;throw this.Au=e,this.Ru=!1,tG("INTERNAL UNHANDLED ERROR: ",(t=e.message||"",e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t)),e}).then(e=>(this.Ru=!1,e))));return this.gu=t,t}enqueueAfterDelay(e,t,r){this.pu(),this.mu.indexOf(e)>-1&&(t=0);let n=sW.createAndSchedule(this,e,t,r,e=>this.Su(e));return this.Eu.push(n),n}pu(){this.Au&&tQ()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(let t of this.Eu)if(t.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{for(let t of(this.Eu.sort((e,t)=>e.targetTimeMs-t.targetTimeMs),this.Eu))if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){let t=this.Eu.indexOf(e);this.Eu.splice(t,1)}}class oY extends oG{constructor(e,t,r,n){super(e,t,r,n),this.type="firestore",this._queue=new oX,this._persistenceKey=(null==n?void 0:n.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){let e=this._firestoreClient.terminate();this._queue=new oX(e),this._firestoreClient=void 0,await e}}}function oJ(e){if(e._terminated)throw new tX(tW.FAILED_PRECONDITION,"The client has already been terminated.");return e._firestoreClient||function(e){var t,r,n,i;let s=e._freezeSettings(),o=(i=e._databaseId,new rN(i,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,oU(s.experimentalLongPollingOptions),s.useFetchStreams));e._componentsProvider||(null===(r=s.localCache)||void 0===r?void 0:r._offlineComponentProvider)&&(null===(n=s.localCache)||void 0===n?void 0:n._onlineComponentProvider)&&(e._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),e._firestoreClient=new oN(e._authCredentials,e._appCheckCredentials,e._queue,o,e._componentsProvider&&function(e){let t=null==e?void 0:e._online.build();return{_offline:null==e?void 0:e._offline.build(t),_online:t}}(e._componentsProvider))}(e),e._firestoreClient}/**
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
 */class oZ{constructor(e){this._byteString=e}static fromBase64String(e){try{return new oZ(rT.fromBase64String(e))}catch(e){throw new tX(tW.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new oZ(rT.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class o0{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new tX(tW.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ri(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class o1{constructor(e){this._methodName=e}}/**
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
 */class o2{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new tX(tW.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new tX(tW.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return t4(this._lat,e._lat)||t4(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class o6{constructor(e){this._values=(e||[]).map(e=>e)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(e,t){if(e.length!==t.length)return!1;for(let r=0;r<e.length;++r)if(e[r]!==t[r])return!1;return!0}(this._values,e._values)}}/**
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
 */const o5=/^__.*__$/;class o3{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return null!==this.fieldMask?new nW(e,this.data,this.fieldMask,t,this.fieldTransforms):new nQ(e,this.data,t,this.fieldTransforms)}}function o8(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw tQ()}}class o4{constructor(e,t,r,n,i,s){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=n,void 0===i&&this.Fu(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new o4(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var t;let r=null===(t=this.path)||void 0===t?void 0:t.child(e),n=this.xu({path:r,Nu:!1});return n.Bu(e),n}Lu(e){var t;let r=null===(t=this.path)||void 0===t?void 0:t.child(e),n=this.xu({path:r,Nu:!1});return n.Fu(),n}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return an(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Bu(this.path.get(e))}Bu(e){if(0===e.length)throw this.qu("Document fields must not be empty");if(o8(this.Mu)&&o5.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class o7{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||sg(e)}$u(e,t,r,n=!1){return new o4({Mu:e,methodName:t,Ku:r,path:ri.emptyPath(),Nu:!1,Qu:n},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function o9(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof t9||e instanceof o2||e instanceof oZ||e instanceof oH||e instanceof o1||e instanceof o6)}function ae(e,t,r){if(!o9(r)||!("object"==typeof r&&null!==r&&(Object.getPrototypeOf(r)===Object.prototype||null===Object.getPrototypeOf(r)))){let n=oq(r);throw"an object"===n?t.qu(e+" a custom object"):t.qu(e+" "+n)}}const at=RegExp("[~\\*/\\[\\]]");function ar(e,t,r){if(t.search(at)>=0)throw an(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,r);try{return new o0(...t.split("."))._internalPath}catch(n){throw an(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,r)}}function an(e,t,r,n,i){let s=n&&!n.isEmpty(),o=void 0!==i,a=`Function ${t}() called with invalid data`;r&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${n}`),o&&(l+=` in document ${i}`),l+=")"),new tX(tW.INVALID_ARGUMENT,a+e+l)}/**
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
 */class ai{constructor(e,t,r,n,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=n,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new oH(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){let e=new as(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){let t=this._document.data.field(ao("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class as extends ai{data(){return super.data()}}function ao(e,t){return"string"==typeof t?ar(e,t):t instanceof o0?t._internalPath:t._delegate._internalPath}class aa{convertValue(e,t="none"){switch(rO(e)){case 0:return null;case 1:return e.booleanValue;case 2:return rC(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(rx(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw tQ()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){let r={};return rp(e,(e,n)=>{r[e]=this.convertValue(n,t)}),r}convertVectorValue(e){var t,r,n;return new o6(null===(n=null===(r=null===(t=e.fields)||void 0===t?void 0:t.value.arrayValue)||void 0===r?void 0:r.values)||void 0===n?void 0:n.map(e=>rC(e.doubleValue)))}convertGeoPoint(e){return new o2(rC(e.latitude),rC(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":let r=rD(e);return null==r?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(rk(e));default:return null}}convertTimestamp(e){let t=rS(e);return new t9(t.seconds,t.nanos)}convertDocumentKey(e,t){let r=rr.fromString(e);iN(r)||tQ();let n=new rR(r.get(1),r.get(3)),i=new rs(r.popFirst(5));return n.isEqual(t)||tG(`Document ${i} contains a document reference within a different database (${n.projectId}/${n.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */class al{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ah extends ai{constructor(e,t,r,n,i,s){super(e,t,r,n,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){let t=new au(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){let r=this._document.data.field(ao("DocumentSnapshot.get",e));if(null!==r)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class au extends ah{data(e={}){return super.data(e)}}class ac{constructor(e,t,r,n){this._firestore=e,this._userDataWriter=t,this._snapshot=n,this.metadata=new al(n.hasPendingWrites,n.fromCache),this.query=r}get docs(){let e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new au(this._firestore,this._userDataWriter,r.key,r,new al(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){let t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new tX(tW.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map(r=>{let n=new au(e._firestore,e._userDataWriter,r.doc.key,r.doc,new al(e._snapshot.mutatedKeys.has(r.doc.key),e._snapshot.fromCache),e.query.converter);return r.doc,{type:"added",doc:n,oldIndex:-1,newIndex:t++}})}{let r=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{let n=new au(e._firestore,e._userDataWriter,t.doc.key,t.doc,new al(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter),i=-1,s=-1;return 0!==t.type&&(i=r.indexOf(t.doc.key),r=r.delete(t.doc.key)),1!==t.type&&(s=(r=r.add(t.doc)).indexOf(t.doc.key)),{type:function(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return tQ()}}(t.type),doc:n,oldIndex:i,newIndex:s}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}class af extends aa{constructor(e){super(),this.firestore=e}convertBytes(e){return new oZ(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new oH(this.firestore,null,t)}}new WeakMap,function(e=!0){tj="11.2.0",eq(new eh("firestore",(t,{instanceIdentifier:r,options:n})=>{let i=t.getProvider("app").getImmediate(),s=new oY(new t1(t.getProvider("auth-internal")),new t3(t.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new tX(tW.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new rR(e.options.projectId,t)}(i,r),i);return n=Object.assign({useFetchStreams:e},n),s._setSettings(n),s},"PUBLIC").setMultipleInstances(!0)),eK(tV,"4.7.6",void 0),eK(tV,"4.7.6","esm2017")}();const ad=document.getElementById("taskInput"),ap=document.getElementById("addTaskBtn"),ag=document.getElementById("taskList");async function am(e){await function(e,t){var r,n;let i=oz(e.firestore,oY),s=function(e,t,...r){if(e=el(e),1==arguments.length&&(t=t8.newId()),oV("doc","path",t),e instanceof oG){let n=rr.fromString(t,...r);return oF(n),new oH(e,null,new rs(n))}{if(!(e instanceof oH||e instanceof oQ))throw new tX(tW.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let n=e._path.child(rr.fromString(t,...r));return oF(n),new oH(e.firestore,e instanceof oQ?e.converter:null,new rs(n))}}(e),o=(r=e.converter)?r.toFirestore(t):t;return(n=[(function(e,t,r,n,i,s={}){let o,a;let l=e.$u(2*(!!s.merge||!!s.mergeFields),t,r,i);ae("Data must be an object, but it was:",l,n);let h=function e(t,r){let n={};return rg(t)?r.path&&r.path.length>0&&r.fieldMask.push(r.path):rp(t,(t,i)=>{let s=function t(r,n){if(o9(r=el(r)))return ae("Unsupported field value:",n,r),e(r,n);if(r instanceof o1)return function(e,t){if(!o8(t.Mu))throw t.qu(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.qu(`${e._methodName}() is not currently supported inside arrays`);let r=e._toFieldTransform(t);r&&t.fieldTransforms.push(r)}(r,n),null;if(void 0===r&&n.ignoreUndefinedProperties)return null;if(n.path&&n.fieldMask.push(n.path),r instanceof Array){if(n.settings.Nu&&4!==n.Mu)throw n.qu("Nested arrays are not supported");return function(e,r){let n=[],i=0;for(let s of e){let e=t(s,r.ku(i));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),i++}return{arrayValue:{values:n}}}(r,n)}return function(e,t){var r,n,i;if(null===(e=el(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return r=t.serializer,"number"==typeof(i=n=e)&&Number.isInteger(i)&&!rf(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER?nk(n):nD(r,n);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){let r=t9.fromDate(e);return{timestampValue:iy(t.serializer,r)}}if(e instanceof t9){let r=new t9(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:iy(t.serializer,r)}}if(e instanceof o2)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof oZ)return{bytesValue:iv(t.serializer,e._byteString)};if(e instanceof oH){let r=t.databaseId,n=e.firestore._databaseId;if(!n.isEqual(r))throw t.qu(`Document reference is for database ${n.projectId}/${n.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:ib(e.firestore._databaseId||t.databaseId,e._key.path)}}if(e instanceof o6)return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:e.toArray().map(e=>{if("number"!=typeof e)throw t.qu("VectorValues must only contain numeric values.");return nD(t.serializer,e)})}}}}};throw t.qu(`Unsupported field value: ${oq(e)}`)}(r,n)}(i,r.Ou(t));null!=s&&(n[t]=s)}),{mapValue:{fields:n}}}(n,l);if(s.merge)o=new rE(l.fieldMask),a=l.fieldTransforms;else if(s.mergeFields){let e=[];for(let n of s.mergeFields){let i=function(e,t,r){if((t=el(t))instanceof o0)return t._internalPath;if("string"==typeof t)return ar(e,t);throw an("Field path arguments must be of type string or ",e,!1,void 0,r)}(t,n,r);if(!l.contains(i))throw new tX(tW.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);(function(e,t){return e.some(e=>e.isEqual(t))})(e,i)||e.push(i)}o=new rE(e),a=l.fieldTransforms.filter(e=>o.covers(e.field))}else o=null,a=l.fieldTransforms;return new o3(new rW(h),o,a)})(function(e){let t=e._freezeSettings(),r=sg(e._databaseId);return new o7(e._databaseId,!!t.ignoreUndefinedProperties,r)}(e.firestore),"addDoc",s._key,o,null!==e.converter,{}).toMutation(s._key,nq.exists(!1))],function(e,t){let r=new tY;return e.asyncQueue.enqueueAndForget(async()=>oc(await oM(e).then(e=>e.syncEngine),t,r)),r.promise}(oJ(i),n)).then(()=>s)}(oW(aE,"todos"),{text:e,completed:!1})}async function ay(){var e=await av();ag.innerHTML="",e.forEach((e,t)=>{if(!e.data().completed){let t=document.createElement("li");t.id=e.id,t.textContent=e.data().text,ag.appendChild(t)}})}async function av(){var e=await function(e){e=oz(e,oK);let t=oz(e.firestore,oY),r=oJ(t),n=new af(t);return(/**
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
 */function(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new tX(tW.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}(e._query),(function(e,t,r={}){let n=new tY;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,r,n,i){let s=new ok({next:r=>{s.eu(),t.enqueueAndForget(()=>s5(e,o)),r.fromCache&&"server"===n.source?i.reject(new tX(tW.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(r)},error:e=>i.reject(e)}),o=new s7(r,s,{includeMetadataChanges:!0,ua:!0});return s6(e,o)})(await oP(e),e.asyncQueue,t,r,n)),n.promise})(r,e._query).then(r=>new ac(t,n,e,r)))}(oW(aE,"todos"));let t=[];return e.forEach(e=>{t.push(e)}),t}ap.addEventListener("click",async()=>{if(ad.value.trim()){let e=document.getElementById("taskInput"),t=function(e){let t=document.createElement("div");return t.textContent=e,t.innerHTML}(e.value.trim());t&&(await am(t),ay(),e.value=""),ay()}}),ag.addEventListener("click",e=>{"LI"===e.target.tagName&&e.target.remove()}),window.addEventListener("error",function(e){console.error("Error occurred: ",e.message)});var aw={};aw=new URL("service-worker.7763843c.js",import.meta.url).toString();const ab=new URL(aw);"serviceWorker"in navigator&&navigator.serviceWorker.register(ab.href,{scope:"/CheckList/"}).then(e=>console.log("Service Worker Registered for scope:",ab.href,"with","file:///app.js")).catch(e=>console.error("Service Worker Error:",e));const aE=function(e,t){let r=(function(e,t){let r=e.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),e.container.getProvider(t)})("object"==typeof e?e:function(e=eP){let t=eB.get(e);if(!t&&e===eP&&et())return eG();if(!t)throw ez.create("no-app",{appName:e});return t}(),"firestore").getImmediate({identifier:"string"==typeof e?e:"(default)"});if(!r._initialized){let e=ee("firestore");e&&function(e,t,r,n={}){var i;let s=(e=oz(e,oG))._getSettings(),o=`${t}:${r}`;if("firestore.googleapis.com"!==s.host&&s.host!==o&&tK("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),n.mockUserToken){let t,r;if("string"==typeof n.mockUserToken)t=n.mockUserToken,r=tF.MOCK_USER;else{t=function(e,t){if(e.uid)throw Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let r=t||"demo-project",n=e.iat||0,i=e.sub||e.user_id;if(!i)throw Error("mockUserToken must contain 'sub' or 'user_id' field!");let s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:n,exp:n+3600,auth_time:n,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[H(JSON.stringify({alg:"none",type:"JWT"})),H(JSON.stringify(s)),""].join(".")}(n.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);let s=n.mockUserToken.sub||n.mockUserToken.user_id;if(!s)throw new tX(tW.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");r=new tF(s)}e._authCredentials=new t0(new tJ(t,r))}}(r,...e)}return r}(eG({apiKey:"AIzaSyCqwa0ADZV-kFf5t1DjP3Sz63vLYjfMNeU",authDomain:"todo-7074b.firebaseapp.com",projectId:"todo-7074b",storageBucket:"todo-7074b.firebasestorage.app",messagingSenderId:"550243747442",appId:"1:550243747442:web:b9ffa4f530052ea8ce24eb"}));
//# sourceMappingURL=index.81659ee4.js.map
