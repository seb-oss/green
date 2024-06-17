import{a as r,w as s}from"./lit-element-2a5e401f.js";import{i as n,t as o,e as c}from"./directive-12249aa5.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class e extends n{constructor(t){if(super(t),this.it=r,t.type!==o.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===r||t==null)return this._t=void 0,this.it=t;if(t===s)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const i=[t];return i.raw=i,this._t={_$litType$:this.constructor.resultType,strings:i,values:[]}}}e.directiveName="unsafeHTML",e.resultType=1;const l=c(e);export{l as o};
