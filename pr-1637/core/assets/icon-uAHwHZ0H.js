import{D as u,R as d,i as y,k as g}from"./lit-element-BoQqPHl6.js";import{G as v,n as o}from"./gds-element-QykLKB9o.js";import{e as b,i as f,t as m}from"./directive-Ctav8iJK.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class h extends f{constructor(t){if(super(t),this.it=u,t.type!==m.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===u||t==null)return this._t=void 0,this.it=t;if(t===d)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}h.directiveName="unsafeHTML",h.resultType=1;const w=b(h),$=y`
  @layer icon;

  @layer icon {
    :host {
      display: contents;
    }
  }
`;var _=Object.defineProperty,n=(l,t,e,c)=>{for(var i=void 0,s=l.length-1,p;s>=0;s--)(p=l[s])&&(i=p(t,e,i)||i);return i&&_(t,e,i),i};const a=class a extends v{constructor(){super(...arguments),this.solid=!1,this.box=!1,this.label=""}render(){const t=this.constructor._name==="brand-seb",e=t?"55":this.width!==void 0?this.width.toString():void 0,c=t?"24":this.height!==void 0?this.height.toString():"1lh",i=t?"0 0 55 24":this.box||"0 0 24 24";let s=`<svg
      ${e?`width="${e}"`:""}
      height="${c}"
      viewBox="${i}"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ${this.label?`aria-label="${this.label}"`:`aria-label="${this.constructor._name}"`}
      role="graphics-symbol"
      part="icon" 
    >
      ${this.solid?this.constructor._solidSVG:this.constructor._regularSVG}
    </svg>`;return this.stroke&&(s=s.replace(/<(path|rect|circle|ellipse|line|polyline|polygon)/g,`<$1 stroke-width="${this.stroke}"`)),g`${w(s)}`}};a.styles=[$];let r=a;n([o({type:Number})],r.prototype,"width");n([o({type:Number})],r.prototype,"height");n([o({type:Boolean})],r.prototype,"solid");n([o({type:Number})],r.prototype,"stroke");n([o({type:String})],r.prototype,"box");n([o({type:String})],r.prototype,"label");export{r as G,w as a};
