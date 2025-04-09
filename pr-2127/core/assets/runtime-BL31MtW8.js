/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const j="lit-localize-status";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const m=(e,...t)=>({strTag:!0,strings:e,values:t}),V=m,P=e=>typeof e!="string"&&"strTag"in e,_=(e,t,s)=>{let n=e[0];for(let r=1;r<e.length;r++)n+=t[s?s[r-1]:r-1],n+=e[r];return n};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const M=e=>P(e)?_(e.strings,e.values):e;let A=M,L=!1;function R(e){if(L)throw new Error("lit-localize can only be configured once");A=e,L=!0}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class y{constructor(){this.settled=!1,this.promise=new Promise((t,s)=>{this._resolve=t,this._reject=s})}resolve(t){this.settled=!0,this._resolve(t)}reject(t){this.settled=!0,this._reject(t)}}/**
 * @license
 * Copyright 2014 Travis Webb
 * SPDX-License-Identifier: MIT
 */const i=[];for(let e=0;e<256;e++)i[e]=(e>>4&15).toString(16)+(e&15).toString(16);function p(e){let t=0,s=8997,n=0,r=33826,o=0,a=40164,g=0,c=52210;for(let h=0;h<e.length;h++)s^=e.charCodeAt(h),t=s*435,n=r*435,o=a*435,g=c*435,o+=s<<8,g+=r<<8,n+=t>>>16,s=t&65535,o+=n>>>16,r=n&65535,c=g+(o>>>16)&65535,a=o&65535;return i[c>>8]+i[c&255]+i[a>>8]+i[a&255]+i[r>>8]+i[r&255]+i[s>>8]+i[s&255]}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const z="",C="h",H="s";function b(e,t){return(t?C:H)+p(typeof e=="string"?e:e.join(z))}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const S=new WeakMap,T=new Map;function q(e,t,s){if(e){const n=(s==null?void 0:s.id)??D(t),r=e[n];if(r){if(typeof r=="string")return r;if("strTag"in r)return _(r.strings,t.values,r.values);{let o=S.get(r);return o===void 0&&(o=r.values,S.set(r,o)),{...r,values:o.map(a=>t.values[a])}}}}return M(t)}function D(e){const t=typeof e=="string"?e:e.strings;let s=T.get(t);return s===void 0&&(s=b(t,typeof e!="string"&&!("strTag"in e)),T.set(t,s)),s}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function v(e){window.dispatchEvent(new CustomEvent(j,{detail:e}))}let d="",E,w,f,I,x,l=new y;l.resolve();let u=0;const X=e=>(R((t,s)=>q(x,t,s)),d=w=e.sourceLocale,f=new Set(e.targetLocales),f.add(e.sourceLocale),I=e.loadLocale,{getLocale:F,setLocale:N}),F=()=>d,N=e=>{if(e===(E??d))return l.promise;if(!f||!I)throw new Error("Internal error");if(!f.has(e))throw new Error("Invalid locale code");u++;const t=u;return E=e,l.settled&&(l=new y),v({status:"loading",loadingLocale:e}),(e===w?Promise.resolve({templates:void 0}):I(e)).then(n=>{u===t&&(d=e,E=void 0,x=n.templates,v({status:"ready",readyLocale:e}),l.resolve())},n=>{u===t&&(v({status:"error",errorLocale:e,errorMessage:n.toString()}),l.reject(n))}),l.promise};export{j as L,X as c,A as m,V as s};
