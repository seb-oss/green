import{a as S}from"./lit-element-71e04f06.js";/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const u=Symbol.for(""),d=t=>{if((t==null?void 0:t.r)===u)return t==null?void 0:t._$litStatic$},m=t=>({_$litStatic$:t,r:u}),v=(t,...i)=>({_$litStatic$:i.reduce((r,a,l)=>r+(o=>{if(o._$litStatic$!==void 0)return o._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${o}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(a)+t[l+1],t[0]),r:u}),p=new Map,h=t=>(i,...r)=>{const a=r.length;let l,o;const s=[],$=[];let n,e=0,c=!1;for(;e<a;){for(n=i[e];e<a&&(o=r[e],(l=d(o))!==void 0);)n+=l+i[++e],c=!0;e!==a&&$.push(o),s.push(n),e++}if(e===a&&s.push(i[a]),c){const f=s.join("$$lit$$");(i=p.get(f))===void 0&&(s.raw=s,p.set(f,i=s)),r=$}return t(i,...r)},b=h(S);export{m as i,b as n,v as s};
