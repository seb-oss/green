import{a as p,w as u,i as d,x as g}from"./lit-element-2a5e401f.js";import{n,G as y}from"./gds-element-24e794df.js";import{i as v,t as w,e as f}from"./directive-12249aa5.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class c extends v{constructor(t){if(super(t),this.it=p,t.type!==w.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===p||t==null)return this._t=void 0,this.it=t;if(t===u)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}c.directiveName="unsafeHTML",c.resultType=1;const m=f(c),b=d`
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
`;var _=Object.defineProperty,$=Object.getOwnPropertyDescriptor,h=(r,t,e,o)=>{for(var s=o>1?void 0:o?$(t,e):t,l=r.length-1,a;l>=0;l--)(a=r[l])&&(s=(o?a(t,e,s):a(s))||s);return o&&s&&_(t,e,s),s};class i extends y{constructor(){super(...arguments),this.width=24,this.height=24,this.solid=!1,this.label=""}render(){const t=`<svg
      width="${this.width}"
      height="${this.height}"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ${this.label?`aria-label="${this.label}"`:`aria-label="${this.constructor._name}"`}
      role="graphics-symbol"
    >
      ${this.solid?this.constructor._solidSVG:this.constructor._regularSVG}
    </svg>`;return g`${m(t)}`}}i.styles=[b];h([n({type:Number})],i.prototype,"width",2);h([n({type:Number})],i.prototype,"height",2);h([n({type:Boolean})],i.prototype,"solid",2);h([n({type:String})],i.prototype,"label",2);export{i as G,m as o};
