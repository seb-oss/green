import{b as p,w as u,i as d,x as y}from"./lit-element-71e04f06.js";import{n as r,G as g}from"./gds-element-54cd6e2a.js";import{i as w,t as v,e as b}from"./directive-12249aa5.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class c extends w{constructor(t){if(super(t),this.it=p,t.type!==v.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===p||t==null)return this._t=void 0,this.it=t;if(t===u)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const s=[t];return s.raw=s,this._t={_$litType$:this.constructor.resultType,strings:s,values:[]}}}c.directiveName="unsafeHTML",c.resultType=1;const f=b(c),m=d`
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
`;var _=Object.defineProperty,$=Object.getOwnPropertyDescriptor,n=(l,t,s,o)=>{for(var e=o>1?void 0:o?$(t,s):t,h=l.length-1,a;h>=0;h--)(a=l[h])&&(e=(o?a(t,s,e):a(e))||e);return o&&e&&_(t,s,e),e};class i extends g{constructor(){super(...arguments),this.width=24,this.height=24,this.solid=!1,this.stroke=!1,this.box=!1,this.label=""}render(){const t=this.constructor._name==="seb",s=t?"55":this.width,o=t?"24":this.height,e=t?"0 0 55 24":this.box||"0 0 24 24",h=`<svg
      width="${s}"
      height="${o}"
      viewBox="${e}"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ${this.label?`aria-label="${this.label}"`:`aria-label="${this.constructor._name}"`}
      role="graphics-symbol"
      part="icon"
      stroke="${this.stroke}"
    >
      ${this.solid?this.constructor._solidSVG:this.constructor._regularSVG}
    </svg>`;return y`${f(h)}`}}i.styles=[m];n([r({type:Number})],i.prototype,"width",2);n([r({type:Number})],i.prototype,"height",2);n([r({type:Boolean})],i.prototype,"solid",2);n([r({type:Boolean})],i.prototype,"stroke",2);n([r({type:String})],i.prototype,"box",2);n([r({type:String})],i.prototype,"label",2);export{i as G,f as o};
