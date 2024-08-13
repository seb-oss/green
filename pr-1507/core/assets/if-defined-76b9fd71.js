import{b as S,a as d}from"./lit-element-2a5e401f.js";/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const p=Symbol.for(""),h=t=>{if((t==null?void 0:t.r)===p)return t==null?void 0:t._$litStatic$},v=(t,...e)=>({_$litStatic$:e.reduce((a,i,l)=>a+(s=>{if(s._$litStatic$!==void 0)return s._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${s}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(i)+t[l+1],t[0]),r:p}),f=new Map,b=t=>(e,...a)=>{const i=a.length;let l,s;const r=[],u=[];let n,o=0,c=!1;for(;o<i;){for(n=e[o];o<i&&(s=a[o],(l=h(s))!==void 0);)n+=l+e[++o],c=!0;o!==i&&u.push(s),r.push(n),o++}if(o===i&&r.push(e[i]),c){const $=r.join("$$lit$$");(e=f.get($))===void 0&&(r.raw=r,f.set($,e=r)),a=u}return t(e,...a)},_=b(S);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const g=t=>t??d;export{_ as n,g as o,v as s};
