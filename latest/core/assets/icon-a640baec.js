import{D as p,R as u,i as d,k as y}from"./lit-element-1d72f0ce.js";import{n,G as g}from"./gds-element-86064462.js";import{i as v,t as b,e as f}from"./directive-dd518ee3.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class a extends v{constructor(t){if(super(t),this.it=p,t.type!==b.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===p||t==null)return this._t=void 0,this.it=t;if(t===u)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}a.directiveName="unsafeHTML",a.resultType=1;const m=f(a),w=d`
  @layer icon;

  @layer icon {
    :host {
      display: contents;
    }
  }
`;var _=Object.defineProperty,$=Object.getOwnPropertyDescriptor,l=(h,t,e,o)=>{for(var r=o>1?void 0:o?$(t,e):t,s=h.length-1,c;s>=0;s--)(c=h[s])&&(r=(o?c(t,e,r):c(r))||r);return o&&r&&_(t,e,r),r};class i extends g{constructor(){super(...arguments),this.solid=!1,this.box=!1,this.label=""}render(){const t=this.constructor._name==="brand-seb",e=t?"55":this.width!==void 0?this.width.toString():void 0,o=t?"24":this.height!==void 0?this.height.toString():"1lh",r=t?"0 0 55 24":this.box||"0 0 24 24";let s=`<svg
      ${e?`width="${e}"`:""}
      height="${o}"
      viewBox="${r}"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ${this.label?`aria-label="${this.label}"`:`aria-label="${this.constructor._name}"`}
      role="graphics-symbol"
      part="icon" 
    >
      ${this.solid?this.constructor._solidSVG:this.constructor._regularSVG}
    </svg>`;return this.stroke&&(s=s.replace(/<(path|rect|circle|ellipse|line|polyline|polygon)/g,`<$1 stroke-width="${this.stroke}"`)),y`${m(s)}`}}i.styles=[w];l([n({type:Number})],i.prototype,"width",2);l([n({type:Number})],i.prototype,"height",2);l([n({type:Boolean})],i.prototype,"solid",2);l([n({type:Number})],i.prototype,"stroke",2);l([n({type:String})],i.prototype,"box",2);l([n({type:String})],i.prototype,"label",2);export{i as G,m as a};
