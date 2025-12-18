import{O as y,E as u,Q as d,ac as v,S as f,i as b,K as w,J as k,A as m,t as _,x as $,s as g,ad as S,n,V as x}from"./iframe-BOjKxah_.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class c extends y{constructor(t){if(super(t),this.it=u,t.type!==d.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===u||t==null)return this._t=void 0,this.it=t;if(t===v)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}c.directiveName="unsafeHTML",c.resultType=1;const A=f(c),C=b`
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
`;var T=Object.defineProperty,o=(l,t,e,r)=>{for(var i=void 0,a=l.length-1,h;a>=0;a--)(h=l[a])&&(i=h(t,e,i)||i);return i&&T(t,e,i),i};const p=class p extends w(k(m)){constructor(){super(...arguments),this.solid=!1,this.level="2",this.label=""}get svgAttributes(){const e={fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:this.constructor._viewBox,part:"icon"};return this.label?{...e,"aria-label":this.label}:{...e,role:"presentation"}}get svgContent(){const t=this.constructor;return this.solid?t._solidSVG:t._regularSVG}applyStroke(t){return this.stroke?t.replace(/<(path|rect|circle|ellipse|line|polyline|polygon)/g,`<$1 stroke-width="${this.stroke}"`):t}generateAttributesString(t){return Object.entries(t).filter(([e,r])=>r!==void 0).map(([e,r])=>`${e}="${r}"`).join(`
      `)}render(){const t=this.svgAttributes;let e=this.svgContent||"";this.stroke&&(e=this.applyStroke(e));const r=`
      <svg ${this.generateAttributesString(t)}>
        ${e}
      </svg>
    `;return $`${A(r)}`}};p.styles=[_,C];let s=p;o([g({...S,property:"height",selector:"svg"})],s.prototype,"size");o([n({type:Boolean})],s.prototype,"solid");o([n({type:Number})],s.prototype,"stroke");o([n()],s.prototype,"level");o([g(x("content"))],s.prototype,"color");o([n({type:String})],s.prototype,"label");export{s as G,A as o};
