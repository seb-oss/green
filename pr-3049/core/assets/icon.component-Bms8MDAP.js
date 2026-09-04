import{P as y,A as u,R as v,a4 as d,S as f,i as b,C as w,L as k,D as m,B as _,b as $,U as g,a5 as S,n,a6 as C}from"./iframe-Dcaup0t1.js";class c extends y{constructor(t){if(super(t),this.it=u,t.type!==v.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===u||t==null)return this._t=void 0,this.it=t;if(t===d)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}c.directiveName="unsafeHTML",c.resultType=1;const x=f(c),A=b`
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
    `;return $`${x(r)}`}};p.styles=[_,A];let s=p;o([g({...S,property:"height",selector:"svg"})],s.prototype,"size");o([n({type:Boolean})],s.prototype,"solid");o([n({type:Number})],s.prototype,"stroke");o([n()],s.prototype,"level");o([g(C("content"))],s.prototype,"color");o([n({type:String})],s.prototype,"label");export{s as G,x as o};
