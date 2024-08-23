import{T as p,w as u,i as d,x as y}from"./lit-element-52f3de9a.js";import{n as r,G as g}from"./gds-element-d19a6729.js";import{i as w,t as v,e as f}from"./directive-12249aa5.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class a extends w{constructor(t){if(super(t),this.it=p,t.type!==v.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===p||t==null)return this._t=void 0,this.it=t;if(t===u)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}a.directiveName="unsafeHTML",a.resultType=1;const b=f(a),m=d`
  @layer icon;

  @layer icon {
    :host {
      display: contents;
    }

    :host([stroke]) {
      & > svg > * {
        stroke-width: inherit;
      }
    }

    :host(:not([width], [height])) {
      & > svg {
        height: 1lh;
        width: auto;
      }
    }
  }
`;var _=Object.defineProperty,$=Object.getOwnPropertyDescriptor,n=(l,t,e,o)=>{for(var s=o>1?void 0:o?$(t,e):t,h=l.length-1,c;h>=0;h--)(c=l[h])&&(s=(o?c(t,e,s):c(s))||s);return o&&s&&_(t,e,s),s};class i extends g{constructor(){super(...arguments),this.width=24,this.height=24,this.solid=!1,this.stroke=!1,this.box=!1,this.label=""}render(){const t=this.constructor._name==="seb",e=t?"55":this.width,o=t?"24":this.height,s=t?"0 0 55 24":this.box||"0 0 24 24",h=`<svg
      width="${e}"
      height="${o}"
      viewBox="${s}"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ${this.label?`aria-label="${this.label}"`:`aria-label="${this.constructor._name}"`}
      role="graphics-symbol"
      part="icon"
      stroke="${this.stroke}"
    >
      ${this.solid?this.constructor._solidSVG:this.constructor._regularSVG}
    </svg>`;return y`${b(h)}`}}i.styles=[m];n([r({type:Number})],i.prototype,"width",2);n([r({type:Number})],i.prototype,"height",2);n([r({type:Boolean})],i.prototype,"solid",2);n([r({type:Boolean})],i.prototype,"stroke",2);n([r({type:String})],i.prototype,"box",2);n([r({type:String})],i.prototype,"label",2);export{i as G,b as o};
