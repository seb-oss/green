import{E as d,T as u,i as y,x as g}from"./lit-element-Bx14lxc-.js";import{G as b,n as o}from"./custom-element-scoping-D6CCRyY9.js";import{e as v,i as f,t as m}from"./directive-CF8sV3Lr.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class h extends f{constructor(t){if(super(t),this.it=d,t.type!==m.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===d||t==null)return this._t=void 0,this.it=t;if(t===u)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}h.directiveName="unsafeHTML",h.resultType=1;const $=v(h),w=y`
  @layer icon;

  @layer icon {
    :host {
      display: inline-block;
    }

    svg {
      display: block;
    }
  }
`;var x=Object.defineProperty,n=(l,t,e,p)=>{for(var s=void 0,r=l.length-1,c;r>=0;r--)(c=l[r])&&(s=c(t,e,s)||s);return s&&x(t,e,s),s};const a=class a extends b{constructor(){super(...arguments),this.solid=!1,this.box=!1,this.label=""}render(){const t=this.constructor._name==="brand-seb",e=t?"55px":this.width!==void 0?`${this.width.toString()}px`:void 0,p=t?"24px":this.height!==void 0?`${this.height.toString()}px`:"1lh",s=t?"0 0 55 24":this.box||"0 0 24 24";let r=`<svg
      style="height:${p};${e?`width:${e};`:""}"
      viewBox="${s}"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ${this.label?`aria-label="${this.label}"`:`aria-label="${this.constructor._name}"`}
      role="graphics-symbol"
      part="icon"
    >
      ${this.solid?this.constructor._solidSVG:this.constructor._regularSVG}
    </svg>`;return this.stroke&&(r=r.replace(/<(path|rect|circle|ellipse|line|polyline|polygon)/g,`<$1 stroke-width="${this.stroke}"`)),g`${$(r)}`}};a.styles=[w];let i=a;n([o({type:Number})],i.prototype,"width");n([o({type:Number})],i.prototype,"height");n([o({type:Boolean})],i.prototype,"solid");n([o({type:Number})],i.prototype,"stroke");n([o({type:String})],i.prototype,"box");n([o({type:String})],i.prototype,"label");i.define();export{i as G,$ as o};
