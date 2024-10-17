import{R as u}from"./lit-element-BoQqPHl6.js";import{s as p}from"./directive-helpers-8zWUTkHM.js";import{$ as l}from"./async-directive-DPLqQocF.js";import{e as b}from"./directive-Ctav8iJK.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class g{constructor(t){this.Y=t}disconnect(){this.Y=void 0}reconnect(t){this.Y=t}deref(){return this.Y}}class v{constructor(){this.Z=void 0,this.q=void 0}get(){return this.Z}pause(){this.Z??(this.Z=new Promise(t=>this.q=t))}resume(){var t;(t=this.q)==null||t.call(this),this.Z=this.q=void 0}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const a=e=>!p(e)&&typeof e.then=="function",f=1073741823;class q extends l{constructor(){super(...arguments),this.wt=f,this.bt=[],this.K=new g(this),this.X=new v}render(...t){return t.find(i=>!a(i))??u}update(t,i){const h=this.bt;let c=h.length;this.bt=i;const m=this.K,d=this.X;this.isConnected||this.disconnected();for(let s=0;s<i.length&&!(s>this.wt);s++){const n=i[s];if(!a(n))return this.wt=s,n;s<c&&n===h[s]||(this.wt=f,c=0,Promise.resolve(n).then(async w=>{for(;d.get();)await d.get();const o=m.deref();if(o!==void 0){const r=o.bt.indexOf(n);r>-1&&r<o.wt&&(o.wt=r,o.setValue(w))}}))}return u}disconnected(){this.K.disconnect(),this.X.pause()}reconnected(){this.K.reconnect(this),this.X.resume()}}const x=b(q);export{x as b};
