import{b as S}from"./lit-element-2a5e401f.js";/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const u=Symbol.for(""),d=t=>{if((t==null?void 0:t.r)===u)return t==null?void 0:t._$litStatic$},b=t=>({_$litStatic$:t,r:u}),m=(t,...i)=>({_$litStatic$:i.reduce((a,o,l)=>a+(r=>{if(r._$litStatic$!==void 0)return r._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${r}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(o)+t[l+1],t[0]),r:u}),p=new Map,h=t=>(i,...a)=>{const o=a.length;let l,r;const s=[],$=[];let n,e=0,c=!1;for(;e<o;){for(n=i[e];e<o&&(r=a[e],(l=d(r))!==void 0);)n+=l+i[++e],c=!0;e!==o&&$.push(r),s.push(n),e++}if(e===o&&s.push(i[o]),c){const f=s.join("$$lit$$");(i=p.get(f))===void 0&&(s.raw=s,p.set(f,i=s)),a=$}return t(i,...a)},v=h(S);export{b as i,v as n,m as s};
