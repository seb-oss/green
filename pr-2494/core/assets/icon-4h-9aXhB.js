import{i as u,L as g,K as y,A as v,t as d,ac as b,x as f,s as h,ad as k,n,V as w}from"./iframe-44dIHiuC.js";const m=u`
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
`;var S=Object.defineProperty,i=(p,t,e,r)=>{for(var o=void 0,l=p.length-1,c;l>=0;l--)(c=p[l])&&(o=c(t,e,o)||o);return o&&S(t,e,o),o};const a=class a extends g(y(v)){constructor(){super(...arguments),this.solid=!1,this.level="2",this.label=""}get svgAttributes(){const e={fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:this.constructor._viewBox,part:"icon"};return this.label?{...e,"aria-label":this.label}:{...e,role:"presentation"}}get svgContent(){const t=this.constructor;return this.solid?t._solidSVG:t._regularSVG}applyStroke(t){return this.stroke?t.replace(/<(path|rect|circle|ellipse|line|polyline|polygon)/g,`<$1 stroke-width="${this.stroke}"`):t}generateAttributesString(t){return Object.entries(t).filter(([e,r])=>r!==void 0).map(([e,r])=>`${e}="${r}"`).join(`
      `)}render(){const t=this.svgAttributes;let e=this.svgContent||"";this.stroke&&(e=this.applyStroke(e));const r=`
      <svg ${this.generateAttributesString(t)}>
        ${e}
      </svg>
    `;return f`${b(r)}`}};a.styles=[d,m];let s=a;i([h({...k,property:"height",selector:"svg"})],s.prototype,"size");i([n({type:Boolean})],s.prototype,"solid");i([n({type:Number})],s.prototype,"stroke");i([n()],s.prototype,"level");i([h(w("content"))],s.prototype,"color");i([n({type:String})],s.prototype,"label");s.define();export{s as G};
