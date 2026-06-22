import{K as y,A as u,O as v,a6 as d,P as f,i as b,I as w,H as k,z as m,v as _,b as $,R as g,a3 as S,n,a7 as x}from"./iframe-BOeNwGVf.js";class c extends y{constructor(t){if(super(t),this.it=u,t.type!==v.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===u||t==null)return this._t=void 0,this.it=t;if(t===d)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}c.directiveName="unsafeHTML",c.resultType=1;const A=f(c),C=b`
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
`;var P=Object.defineProperty,o=(l,t,e,r)=>{for(var i=void 0,a=l.length-1,h;a>=0;a--)(h=l[a])&&(i=h(t,e,i)||i);return i&&P(t,e,i),i};const p=class p extends w(k(m)){constructor(){super(...arguments),this.solid=!1,this.level="2",this.label=""}get svgAttributes(){const e={fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:this.constructor._viewBox,part:"icon"};return this.label?{...e,"aria-label":this.label}:{...e,role:"presentation"}}get svgContent(){const t=this.constructor;return this.solid?t._solidSVG:t._regularSVG}applyStroke(t){return this.stroke?t.replace(/<(path|rect|circle|ellipse|line|polyline|polygon)/g,`<$1 stroke-width="${this.stroke}"`):t}generateAttributesString(t){return Object.entries(t).filter(([e,r])=>r!==void 0).map(([e,r])=>`${e}="${r}"`).join(`
      `)}render(){const t=this.svgAttributes;let e=this.svgContent||"";this.stroke&&(e=this.applyStroke(e));const r=`
      <svg ${this.generateAttributesString(t)}>
        ${e}
      </svg>
    `;return $`${A(r)}`}};p.styles=[_,C];let s=p;o([g({...S,property:"height",selector:"svg"})],s.prototype,"size");o([n({type:Boolean})],s.prototype,"solid");o([n({type:Number})],s.prototype,"stroke");o([n()],s.prototype,"level");o([g(x("content"))],s.prototype,"color");o([n({type:String})],s.prototype,"label");export{s as G,A as o};
