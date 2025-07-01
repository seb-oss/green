/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _="lit-localize-status";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const z=(e,...t)=>({strTag:!0,strings:e,values:t}),X=z,m=e=>typeof e!="string"&&"strTag"in e,T=(e,t,s)=>{let n=e[0];for(let r=1;r<e.length;r++)n+=t[s?s[r-1]:r-1],n+=e[r];return n};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const y=e=>m(e)?T(e.strings,e.values):e;let p=y,I=!1;function j(e){if(I)throw new Error("lit-localize can only be configured once");p=e,I=!0}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class H{constructor(t){this.__litLocalizeEventHandler=s=>{s.detail.status==="ready"&&this.host.requestUpdate()},this.host=t}hostConnected(){window.addEventListener(_,this.__litLocalizeEventHandler)}hostDisconnected(){window.removeEventListener(_,this.__litLocalizeEventHandler)}}const P=e=>e.addController(new H(e)),A=P;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const k=()=>(e,t)=>(e.addInitializer(A),e);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class C{constructor(){this.settled=!1,this.promise=new Promise((t,s)=>{this._resolve=t,this._reject=s})}resolve(t){this.settled=!0,this._resolve(t)}reject(t){this.settled=!0,this._reject(t)}}/**
 * @license
 * Copyright 2014 Travis Webb
 * SPDX-License-Identifier: MIT
 */const i=[];for(let e=0;e<256;e++)i[e]=(e>>4&15).toString(16)+(e&15).toString(16);function R(e){let t=0,s=8997,n=0,r=33826,o=0,a=40164,h=0,c=52210;for(let g=0;g<e.length;g++)s^=e.charCodeAt(g),t=s*435,n=r*435,o=a*435,h=c*435,o+=s<<8,h+=r<<8,n+=t>>>16,s=t&65535,o+=n>>>16,r=n&65535,c=h+(o>>>16)&65535,a=o&65535;return i[c>>8]+i[c&255]+i[a>>8]+i[a&255]+i[r>>8]+i[r&255]+i[s>>8]+i[s&255]}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const q="",D="h",W="s";function b(e,t){return(t?D:W)+R(typeof e=="string"?e:e.join(q))}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const w=new WeakMap,S=new Map;function F(e,t,s){if(e){const n=(s==null?void 0:s.id)??N(t),r=e[n];if(r){if(typeof r=="string")return r;if("strTag"in r)return T(r.strings,t.values,r.values);{let o=w.get(r);return o===void 0&&(o=r.values,w.set(r,o)),{...r,values:o.map(a=>t.values[a])}}}}return y(t)}function N(e){const t=typeof e=="string"?e:e.strings;let s=S.get(t);return s===void 0&&(s=b(t,typeof e!="string"&&!("strTag"in e)),S.set(t,s)),s}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function v(e){window.dispatchEvent(new CustomEvent(_,{detail:e}))}let u="",L,M,f,E,x,l=new C;l.resolve();let d=0;const G=e=>(j((t,s)=>F(x,t,s)),u=M=e.sourceLocale,f=new Set(e.targetLocales),f.add(e.sourceLocale),E=e.loadLocale,{getLocale:U,setLocale:V}),U=()=>u,V=e=>{if(e===(L??u))return l.promise;if(!f||!E)throw new Error("Internal error");if(!f.has(e))throw new Error("Invalid locale code");d++;const t=d;return L=e,l.settled&&(l=new C),v({status:"loading",loadingLocale:e}),(e===M?Promise.resolve({templates:void 0}):E(e)).then(n=>{d===t&&(u=e,L=void 0,x=n.templates,v({status:"ready",readyLocale:e}),l.resolve())},n=>{d===t&&(v({status:"error",errorLocale:e,errorMessage:n.toString()}),l.reject(n))}),l.promise};export{G as c,k as l,p as m,X as s};
