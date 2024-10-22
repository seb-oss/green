import{T as C}from"./lit-element-C_s9q329.js";import{i as m}from"./directive-helpers-C6DiESt7.js";import{f as a}from"./async-directive-D5OLKesb.js";import{e as p}from"./directive-CF8sV3Lr.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class w{constructor(t){this.Y=t}disconnect(){this.Y=void 0}reconnect(t){this.Y=t}deref(){return this.Y}}class l{constructor(){this.Z=void 0,this.q=void 0}get(){return this.Z}pause(){this.Z??(this.Z=new Promise(t=>this.q=t))}resume(){var t;(t=this.q)==null||t.call(this),this.Z=this.q=void 0}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $=e=>!m(e)&&typeof e.then=="function",_=1073741823;class g extends a{constructor(){super(...arguments),this._$Cwt=_,this._$Cbt=[],this._$CK=new w(this),this._$CX=new l}render(...t){return t.find(i=>!$(i))??C}update(t,i){const h=this._$Cbt;let c=h.length;this._$Cbt=i;const u=this._$CK,d=this._$CX;this.isConnected||this.disconnected();for(let s=0;s<i.length&&!(s>this._$Cwt);s++){const n=i[s];if(!$(n))return this._$Cwt=s,n;s<c&&n===h[s]||(this._$Cwt=_,c=0,Promise.resolve(n).then(async f=>{for(;d.get();)await d.get();const o=u.deref();if(o!==void 0){const r=o._$Cbt.indexOf(n);r>-1&&r<o._$Cwt&&(o._$Cwt=r,o.setValue(f))}}))}return C}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}const X=p(g);export{X as m};
