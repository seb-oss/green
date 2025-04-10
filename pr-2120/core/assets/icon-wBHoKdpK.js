import{E as u,T as g,i as d,x as y}from"./lit-element-Bx14lxc-.js";import{G as f,n as o}from"./custom-element-scoping-b4c89-hi.js";import{e as v,i as b,t as w}from"./directive-CF8sV3Lr.js";import{b as m,d as _}from"./declarative-layout-mixins-BB4ZLY5n.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class a extends b{constructor(t){if(super(t),this.it=u,t.type!==w.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===u||t==null)return this._t=void 0,this.it=t;if(t===g)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}a.directiveName="unsafeHTML",a.resultType=1;const $=v(a),x=d`
  @layer icon;

  @layer icon {
    :host {
      display: inline-block;
    }

    svg {
      display: block;
    }

    :host(:not([width]):not([height])) svg {
      height: 1lh;
      width: auto;
    }
  }
`;var k=Object.defineProperty,n=(l,t,e,r)=>{for(var s=void 0,h=l.length-1,c;h>=0;h--)(c=l[h])&&(s=c(t,e,s)||s);return s&&k(t,e,s),s};const p=class p extends m(_(f)){constructor(){super(...arguments),this.solid=!1,this.box=!1,this.label=""}get svgAttributes(){const t=this.constructor,e={fill:"none",xmlns:"http://www.w3.org/2000/svg",width:this.width||t._width,height:this.height||t._height,viewBox:this.box||t._viewBox,part:"icon"};return this.label?{...e,"aria-label":this.label}:{...e,role:"presentation"}}get svgContent(){const t=this.constructor;return this.solid?t._solidSVG:t._regularSVG}applyStroke(t){return this.stroke?t.replace(/<(path|rect|circle|ellipse|line|polyline|polygon)/g,`<$1 stroke-width="${this.stroke}"`):t}generateAttributesString(t){return Object.entries(t).filter(([e,r])=>r!==void 0).map(([e,r])=>`${e}="${r}"`).join(`
      `)}render(){const t=this.svgAttributes;let e=this.svgContent||"";this.stroke&&(e=this.applyStroke(e));const r=`
      <svg ${this.generateAttributesString(t)}> 
        ${e}
      </svg>
    `;return y`${$(r)}`}};p.styles=[x];let i=p;n([o({type:Number})],i.prototype,"width");n([o({type:Number})],i.prototype,"height");n([o({type:Boolean})],i.prototype,"solid");n([o({type:Number})],i.prototype,"stroke");n([o({type:String})],i.prototype,"box");n([o({type:String})],i.prototype,"label");i.define();export{i as G,$ as o};
