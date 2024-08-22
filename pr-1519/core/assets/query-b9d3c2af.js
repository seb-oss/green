/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const i=(n,r,e)=>(e.configurable=!0,e.enumerable=!0,Reflect.decorate&&typeof r!="object"&&Object.defineProperty(n,r,e),e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function h(n,r){return(e,l,c)=>{const u=s=>{var o;return((o=s.renderRoot)==null?void 0:o.querySelector(n))??null};if(r){const{get:s,set:o}=typeof l=="object"?e:c??(()=>{const t=Symbol();return{get(){return this[t]},set(a){this[t]=a}}})();return i(e,l,{get(){let t=s.call(this);return t===void 0&&(t=u(this),(t!==null||this.hasUpdated)&&o.call(this,t)),t}})}return i(e,l,{get(){return u(this)}})}}export{h as a,i as e};
