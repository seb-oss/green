import{E as u,T as g,i as y,x as d}from"./lit-element-Bx14lxc-.js";import{G as f,n as o}from"./custom-element-scoping-b4c89-hi.js";import{e as v,i as b,t as m}from"./directive-CF8sV3Lr.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class a extends b{constructor(t){if(super(t),this.it=u,t.type!==m.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===u||t==null)return this._t=void 0,this.it=t;if(t===g)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}a.directiveName="unsafeHTML",a.resultType=1;const w=v(a),_=y`
  @layer icon;

  @layer icon {
    :host {
      display: inline-block;
    }

    svg {
      display: block;
    }
  }
`;var $=Object.defineProperty,n=(l,t,e,s)=>{for(var i=void 0,h=l.length-1,c;h>=0;h--)(c=l[h])&&(i=c(t,e,i)||i);return i&&$(t,e,i),i};const p=class p extends f{constructor(){super(...arguments),this.solid=!1,this.box=!1,this.label=""}get svgAttributes(){const t=this.constructor,e={fill:"none",xmlns:"http://www.w3.org/2000/svg",width:this.width||t._width,height:this.height||t._height,viewBox:this.box||t._viewBox,part:"icon"};return this.label?{...e,"aria-label":this.label}:{...e,role:"presentation"}}get svgContent(){const t=this.constructor;return this.solid?t._solidSVG:t._regularSVG}applyStroke(t){return this.stroke?t.replace(/<(path|rect|circle|ellipse|line|polyline|polygon)/g,`<$1 stroke-width="${this.stroke}"`):t}generateAttributesString(t){return Object.entries(t).filter(([e,s])=>s!==void 0).map(([e,s])=>`${e}="${s}"`).join(`
      `)}render(){const t=this.svgAttributes;let e=this.svgContent||"";this.stroke&&(e=this.applyStroke(e));const s=`<svg
      ${this.generateAttributesString(t)}
    >${e}</svg>`;return d`${w(s)}`}};p.styles=[_];let r=p;n([o({type:Number})],r.prototype,"width");n([o({type:Number})],r.prototype,"height");n([o({type:Boolean})],r.prototype,"solid");n([o({type:Number})],r.prototype,"stroke");n([o({type:String})],r.prototype,"box");n([o({type:String})],r.prototype,"label");r.define();export{r as G,w as o};
