import{a as p,w as u,i as d,x as y}from"./lit-element-2a5e401f.js";import{n,G as g}from"./gds-element-24e794df.js";import{i as v,t as b,e as f}from"./directive-12249aa5.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class a extends v{constructor(t){if(super(t),this.it=p,t.type!==b.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===p||t==null)return this._t=void 0,this.it=t;if(t===u)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}a.directiveName="unsafeHTML",a.resultType=1;const w=f(a),m=d`
  @layer icon;

  @layer icon {
    :host {
      display: contents;
    }
  }
`;var $=Object.defineProperty,_=Object.getOwnPropertyDescriptor,l=(h,t,e,r)=>{for(var s=r>1?void 0:r?_(t,e):t,i=h.length-1,c;i>=0;i--)(c=h[i])&&(s=(r?c(t,e,s):c(s))||s);return r&&s&&$(t,e,s),s};class o extends g{constructor(){super(...arguments),this.solid=!1,this.box=!1,this.label=""}render(){const t=this.constructor._name==="seb",e=t?"55":this.width!==void 0?this.width.toString():void 0,r=t?"24":this.height!==void 0?this.height.toString():"1lh",s=t?"0 0 55 24":this.box||"0 0 24 24";let i=`<svg
      ${e?`width="${e}"`:""}
      height="${r}"
      viewBox="${s}"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ${this.label?`aria-label="${this.label}"`:`aria-label="${this.constructor._name}"`}
      role="graphics-symbol"
      part="icon" 
    >
      ${this.solid?this.constructor._solidSVG:this.constructor._regularSVG}
    </svg>`;return this.stroke&&(i=i.replace(/<(path|rect|circle|ellipse|line|polyline|polygon)/g,`<$1 stroke-width="${this.stroke}"`)),y`${w(i)}`}}o.styles=[m];l([n({type:Number})],o.prototype,"width",2);l([n({type:Number})],o.prototype,"height",2);l([n({type:Boolean})],o.prototype,"solid",2);l([n({type:Number})],o.prototype,"stroke",2);l([n({type:String})],o.prototype,"box",2);l([n({type:String})],o.prototype,"label",2);export{o as G,w as o};
