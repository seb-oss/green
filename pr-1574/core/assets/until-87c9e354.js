import{w as C}from"./lit-element-2a5e401f.js";import{i as m}from"./directive-helpers-5872e68c.js";import{f as a}from"./async-directive-71ec3066.js";import{e as w}from"./directive-12249aa5.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class p{constructor(t){this.Y=t}disconnect(){this.Y=void 0}reconnect(t){this.Y=t}deref(){return this.Y}}class l{constructor(){this.Z=void 0,this.q=void 0}get(){return this.Z}pause(){this.Z??(this.Z=new Promise(t=>this.q=t))}resume(){var t;(t=this.q)==null||t.call(this),this.Z=this.q=void 0}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $=e=>!m(e)&&typeof e.then=="function",_=1073741823;class g extends a{constructor(){super(...arguments),this._$Cwt=_,this._$Cbt=[],this._$CK=new p(this),this._$CX=new l}render(...t){return t.find(i=>!$(i))??C}update(t,i){const h=this._$Cbt;let c=h.length;this._$Cbt=i;const u=this._$CK,d=this._$CX;this.isConnected||this.disconnected();for(let s=0;s<i.length&&!(s>this._$Cwt);s++){const n=i[s];if(!$(n))return this._$Cwt=s,n;s<c&&n===h[s]||(this._$Cwt=_,c=0,Promise.resolve(n).then(async f=>{for(;d.get();)await d.get();const o=u.deref();if(o!==void 0){const r=o._$Cbt.indexOf(n);r>-1&&r<o._$Cwt&&(o._$Cwt=r,o.setValue(f))}}))}return C}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}const X=w(g);export{X as m};
