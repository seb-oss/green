import{E as u,T as g,i as d,x as y}from"./lit-element-Bx14lxc-.js";import{G as v,n}from"./custom-element-scoping-b4c89-hi.js";import{e as f,i as b,t as m}from"./directive-CF8sV3Lr.js";import{b as w,d as _,s as $,h as k}from"./declarative-layout-mixins-CxeMR8ZJ.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class a extends b{constructor(t){if(super(t),this.it=u,t.type!==m.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===u||t==null)return this._t=void 0,this.it=t;if(t===g)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}a.directiveName="unsafeHTML",a.resultType=1;const x=f(a),S=d`
  @layer icon;

  @layer icon {
    :host {
      display: inline-block;
    }

    svg {
      display: block;
    }

    :host(:not([size])) svg {
      height: 1lh;
      width: auto;
    }
  }
`;var A=Object.defineProperty,o=(l,t,e,r)=>{for(var i=void 0,h=l.length-1,c;h>=0;h--)(c=l[h])&&(i=c(t,e,i)||i);return i&&A(t,e,i),i};const p=class p extends w(_(v)){constructor(){super(...arguments),this.solid=!1,this.label=""}get svgAttributes(){const t=this.constructor,e={fill:"none",xmlns:"http://www.w3.org/2000/svg",width:this.width||t._width,height:this.width||t._height,viewBox:t._viewBox,part:"icon"};return this.label?{...e,"aria-label":this.label}:{...e,role:"presentation"}}get svgContent(){const t=this.constructor;return this.solid?t._solidSVG:t._regularSVG}applyStroke(t){return this.stroke?t.replace(/<(path|rect|circle|ellipse|line|polyline|polygon)/g,`<$1 stroke-width="${this.stroke}"`):t}generateAttributesString(t){return Object.entries(t).filter(([e,r])=>r!==void 0).map(([e,r])=>`${e}="${r}"`).join(`
      `)}render(){const t=this.svgAttributes;let e=this.svgContent||"";this.stroke&&(e=this.applyStroke(e));const r=`
      <svg ${this.generateAttributesString(t)}> 
        ${e}
      </svg>
    `;return y`${x(r)}`}};p.styles=[S];let s=p;o([$({...k,property:"height",selector:"svg"})],s.prototype,"size");o([n({type:Number})],s.prototype,"width");o([n({type:Number})],s.prototype,"height");o([n({type:Boolean})],s.prototype,"solid");o([n({type:Number})],s.prototype,"stroke");o([n({type:String})],s.prototype,"label");s.define();export{s as G,x as o};
