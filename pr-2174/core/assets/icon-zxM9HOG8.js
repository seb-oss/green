import{E as u,T as d,i as g,x as y}from"./lit-element-Bx14lxc-.js";import{G as f,n}from"./custom-element-scoping-CNGU1oQ0.js";import{e as v,i as b,t as m}from"./directive-CF8sV3Lr.js";import{t as w}from"./tokens.style-DQsNuKSy.js";import{b as _,d as k,s as x,h as $}from"./declarative-layout-mixins-D1Y0gyd7.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class a extends b{constructor(t){if(super(t),this.it=u,t.type!==m.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===u||t==null)return this._t=void 0,this.it=t;if(t===d)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}a.directiveName="unsafeHTML",a.resultType=1;const S=v(a),A=g`
  @layer icon;

  @layer icon {
    :host {
      display: inline-block;
    }

    svg {
      display: block;
      height: 1lh;
      width: auto;
    }
  }
`;var C=Object.defineProperty,r=(l,t,e,i)=>{for(var o=void 0,h=l.length-1,c;h>=0;h--)(c=l[h])&&(o=c(t,e,o)||o);return o&&C(t,e,o),o};const p=class p extends _(k(f)){constructor(){super(...arguments),this.solid=!1,this.box=!1,this.label=""}get svgAttributes(){const t=this.constructor,e={fill:"none",xmlns:"http://www.w3.org/2000/svg",...this.size===void 0&&{width:this.width||t._width,height:this.width||t._height}||{},viewBox:this.box||t._viewBox,part:"icon"};return this.label?{...e,"aria-label":this.label}:{...e,role:"presentation"}}get svgContent(){const t=this.constructor;return this.solid?t._solidSVG:t._regularSVG}applyStroke(t){return this.stroke?t.replace(/<(path|rect|circle|ellipse|line|polyline|polygon)/g,`<$1 stroke-width="${this.stroke}"`):t}generateAttributesString(t){return Object.entries(t).filter(([e,i])=>i!==void 0).map(([e,i])=>`${e}="${i}"`).join(`
      `)}render(){const t=this.svgAttributes;let e=this.svgContent||"";this.stroke&&(e=this.applyStroke(e));const i=`
      <svg ${this.generateAttributesString(t)}>
        ${e}
      </svg>
    `;return y`${S(i)}`}};p.styles=[w,A];let s=p;r([x({...$,property:"height",selector:"svg"})],s.prototype,"size");r([n({type:Number})],s.prototype,"width");r([n({type:Number})],s.prototype,"height");r([n({type:Boolean})],s.prototype,"solid");r([n({type:Number})],s.prototype,"stroke");r([n({type:String})],s.prototype,"box");r([n({type:String})],s.prototype,"label");s.define();export{s as G,S as o};
