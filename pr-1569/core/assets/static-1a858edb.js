import{x as S}from"./lit-element-da1d3957.js";/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const u=Symbol.for(""),d=t=>{if((t==null?void 0:t.r)===u)return t==null?void 0:t._$litStatic$},m=t=>({_$litStatic$:t,r:u}),v=(t,...i)=>({_$litStatic$:i.reduce((a,o,s)=>a+(r=>{if(r._$litStatic$!==void 0)return r._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${r}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(o)+t[s+1],t[0]),r:u}),p=new Map,h=t=>(i,...a)=>{const o=a.length;let s,r;const l=[],$=[];let n,e=0,c=!1;for(;e<o;){for(n=i[e];e<o&&(r=a[e],(s=d(r))!==void 0);)n+=s+i[++e],c=!0;e!==o&&$.push(r),l.push(n),e++}if(e===o&&l.push(i[o]),c){const f=l.join("$$lit$$");(i=p.get(f))===void 0&&(l.raw=l,p.set(f,i=l)),a=$}return t(i,...a)},b=h(S);export{m as i,b as n,v as s};
