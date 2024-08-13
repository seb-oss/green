import{a as p,w as u,i as d,x as g}from"./lit-element-2a5e401f.js";import{n,G as y}from"./gds-element-24e794df.js";import{i as w,t as v,e as b}from"./directive-12249aa5.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class a extends w{constructor(t){if(super(t),this.it=p,t.type!==v.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===p||t==null)return this._t=void 0,this.it=t;if(t===u)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const s=[t];return s.raw=s,this._t={_$litType$:this.constructor.resultType,strings:s,values:[]}}}a.directiveName="unsafeHTML",a.resultType=1;const f=b(a),m=d`
  @layer icon;

  @layer icon {
    :host {
      display: contents;
    }

    :host(:not([width], [height])) {
      & > svg {
        height: 1lh;
        width: auto;
      }
    }
  }
`;var _=Object.defineProperty,$=Object.getOwnPropertyDescriptor,h=(l,t,s,i)=>{for(var e=i>1?void 0:i?$(t,s):t,r=l.length-1,c;r>=0;r--)(c=l[r])&&(e=(i?c(t,s,e):c(e))||e);return i&&e&&_(t,s,e),e};class o extends y{constructor(){super(...arguments),this.width=24,this.height=24,this.solid=!1,this.box=!1,this.label=""}render(){const t=this.constructor._name==="seb",s=t?"55":this.width,i=t?"24":this.height,e=t?"0 0 55 24":this.box||"0 0 24 24",r=`<svg
      width="${s}"
      height="${i}"
      viewBox="${e}"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ${this.label?`aria-label="${this.label}"`:`aria-label="${this.constructor._name}"`}
      role="graphics-symbol"
      part="icon"
    >
      ${this.solid?this.constructor._solidSVG:this.constructor._regularSVG}
    </svg>`;return g`${f(r)}`}}o.styles=[m];h([n({type:Number})],o.prototype,"width",2);h([n({type:Number})],o.prototype,"height",2);h([n({type:Boolean})],o.prototype,"solid",2);h([n({type:String})],o.prototype,"box",2);h([n({type:String})],o.prototype,"label",2);export{o as G,f as o};
