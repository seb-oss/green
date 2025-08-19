import{i as u,x as g}from"./lit-element-Bx14lxc-.js";import{G as y,n}from"./gds-element-DKcDvDP5.js";import{o as v}from"./unsafe-html-CYO4avEf.js";import{t as f}from"./tokens.style-Bfj-148u.js";import{b as d,d as b,s as h,h as m,g as k}from"./declarative-layout-mixins-DHam8wVT.js";const w=u`
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
`;var S=Object.defineProperty,i=(a,t,e,s)=>{for(var o=void 0,l=a.length-1,c;l>=0;l--)(c=a[l])&&(o=c(t,e,o)||o);return o&&S(t,e,o),o};const p=class p extends d(b(y)){constructor(){super(...arguments),this.solid=!1,this.level="2",this.label=""}get svgAttributes(){const e={fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:this.constructor._viewBox,part:"icon"};return this.label?{...e,"aria-label":this.label}:{...e,role:"presentation"}}get svgContent(){const t=this.constructor;return this.solid?t._solidSVG:t._regularSVG}applyStroke(t){return this.stroke?t.replace(/<(path|rect|circle|ellipse|line|polyline|polygon)/g,`<$1 stroke-width="${this.stroke}"`):t}generateAttributesString(t){return Object.entries(t).filter(([e,s])=>s!==void 0).map(([e,s])=>`${e}="${s}"`).join(`
      `)}render(){const t=this.svgAttributes;let e=this.svgContent||"";this.stroke&&(e=this.applyStroke(e));const s=`
      <svg ${this.generateAttributesString(t)}>
        ${e}
      </svg>
    `;return g`${v(s)}`}};p.styles=[f,w];let r=p;i([h({...m,property:"height",selector:"svg"})],r.prototype,"size");i([n({type:Boolean})],r.prototype,"solid");i([n({type:Number})],r.prototype,"stroke");i([n()],r.prototype,"level");i([h(k("content"))],r.prototype,"color");i([n({type:String})],r.prototype,"label");r.define();export{r as G};
