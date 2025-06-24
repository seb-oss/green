import{E as u,T as g,i as d,x as f}from"./lit-element-Bx14lxc-.js";import{n as i,G as v}from"./gds-element-DKcDvDP5.js";import{e as b,i as m,t as w}from"./directive-CF8sV3Lr.js";import{t as _}from"./tokens.style-BxbMzGpH.js";import{b as k,w as x,s as y,h as $,g as S}from"./declarative-layout-mixins-mU9_fNeX.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class p extends m{constructor(t){if(super(t),this.it=u,t.type!==w.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===u||t==null)return this._t=void 0,this.it=t;if(t===g)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}p.directiveName="unsafeHTML",p.resultType=1;const C=b(p),T=d`
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
`;var A=Object.defineProperty,r=(l,t,e,o)=>{for(var n=void 0,h=l.length-1,c;h>=0;h--)(c=l[h])&&(n=c(t,e,n)||n);return n&&A(t,e,n),n};const a=class a extends k(x(v)){constructor(){super(...arguments),this.solid=!1,this.level="2",this.box=!1,this.label=""}get svgAttributes(){const t=this.constructor,e={fill:"none",xmlns:"http://www.w3.org/2000/svg",...this.size===void 0&&{width:this.width||t._width,height:this.width||t._height}||{},viewBox:this.box||t._viewBox,part:"icon"};return this.label?{...e,"aria-label":this.label}:{...e,role:"presentation"}}get svgContent(){const t=this.constructor;return this.solid?t._solidSVG:t._regularSVG}applyStroke(t){return this.stroke?t.replace(/<(path|rect|circle|ellipse|line|polyline|polygon)/g,`<$1 stroke-width="${this.stroke}"`):t}generateAttributesString(t){return Object.entries(t).filter(([e,o])=>o!==void 0).map(([e,o])=>`${e}="${o}"`).join(`
      `)}render(){const t=this.svgAttributes;let e=this.svgContent||"";this.stroke&&(e=this.applyStroke(e));const o=`
      <svg ${this.generateAttributesString(t)}>
        ${e}
      </svg>
    `;return f`${C(o)}`}};a.styles=[_,T];let s=a;r([y({...$,property:"height",selector:"svg"})],s.prototype,"size");r([i({type:Number})],s.prototype,"width");r([i({type:Number})],s.prototype,"height");r([i({type:Boolean})],s.prototype,"solid");r([i({type:Number})],s.prototype,"stroke");r([i()],s.prototype,"level");r([y(S("content"))],s.prototype,"color");r([i({type:String})],s.prototype,"box");r([i({type:String})],s.prototype,"label");s.define();export{s as G,C as o};
