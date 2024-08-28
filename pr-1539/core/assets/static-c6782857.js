import{a as S}from"./lit-element-71e04f06.js";/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const p=Symbol.for(""),d=t=>{if((t==null?void 0:t.r)===p)return t==null?void 0:t._$litStatic$},v=(t,...e)=>({_$litStatic$:e.reduce((r,o,l)=>r+(a=>{if(a._$litStatic$!==void 0)return a._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${a}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(o)+t[l+1],t[0]),r:p}),f=new Map,h=t=>(e,...r)=>{const o=r.length;let l,a;const s=[],u=[];let n,i=0,c=!1;for(;i<o;){for(n=e[i];i<o&&(a=r[i],(l=d(a))!==void 0);)n+=l+e[++i],c=!0;i!==o&&u.push(a),s.push(n),i++}if(i===o&&s.push(e[o]),c){const $=s.join("$$lit$$");(e=f.get($))===void 0&&(s.raw=s,f.set($,e=s)),r=u}return t(e,...r)},_=h(S);export{_ as n,v as s};
