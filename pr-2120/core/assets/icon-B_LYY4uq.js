import{E as c,T as u,i as y,x as d}from"./lit-element-Bx14lxc-.js";import{G as f,n as r}from"./custom-element-scoping-b4c89-hi.js";import{e as g,i as b,t as m}from"./directive-CF8sV3Lr.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class a extends b{constructor(t){if(super(t),this.it=c,t.type!==m.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===c||t==null)return this._t=void 0,this.it=t;if(t===u)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const i=[t];return i.raw=i,this._t={_$litType$:this.constructor.resultType,strings:i,values:[]}}}a.directiveName="unsafeHTML",a.resultType=1;const v=g(a),$=y`
  @layer icon;

  @layer icon {
    :host {
      display: inline-block;
    }

    svg {
      display: block;
    }
  }
`;var w=Object.defineProperty,o=(l,t,i,_)=>{for(var s=void 0,n=l.length-1,p;n>=0;n--)(p=l[n])&&(s=p(t,i,s)||s);return s&&w(t,i,s),s};const h=class h extends f{constructor(){super(...arguments),this.solid=!1,this.box=!1,this.label=""}render(){let t=`<svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="${this.width||24}"
      height="${this.height||24}"
      viewBox="${this.box||"0 0 24 24"}"
      ${this.label?`aria-label="${this.label}"`:`aria-label="${this.constructor._name}"`}
      role="graphics-symbol"
      part="icon"
    >
      ${this.solid?this.constructor._solidSVG:this.constructor._regularSVG}
    </svg>`;return this.stroke&&(t=t.replace(/<(path|rect|circle|ellipse|line|polyline|polygon)/g,`<$1 stroke-width="${this.stroke}"`)),d`${v(t)}`}};h.styles=[$];let e=h;o([r({type:Number})],e.prototype,"width");o([r({type:Number})],e.prototype,"height");o([r({type:Boolean})],e.prototype,"solid");o([r({type:Number})],e.prototype,"stroke");o([r({type:String})],e.prototype,"box");o([r({type:String})],e.prototype,"label");e.define();export{e as G,v as o};
