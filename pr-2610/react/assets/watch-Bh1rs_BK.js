/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const w=(e,r,t)=>(t.configurable=!0,t.enumerable=!0,Reflect.decorate&&typeof r!="object"&&Object.defineProperty(e,r,t),t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function y(e,r){return(t,n,d)=>{const a=s=>{var i;return((i=s.renderRoot)==null?void 0:i.querySelector(e))??null};return w(t,n,{get(){return a(this)}})}}function p(e,r){const t={waitUntilFirstUpdate:!1,...r};return(n,d,a)=>{const{update:s}=n,i=Array.isArray(e)?e:[e];n.update=function(o){i.forEach(h=>{var u;const l=h;if(o.has(l)){const c=o.get(l),f=this[l];c!==f&&(!t.waitUntilFirstUpdate||this.hasUpdated)&&((u=a.value)==null||u.call(this,c,f))}}),s.call(this,o)}}}export{w as a,y as e,p as w};
