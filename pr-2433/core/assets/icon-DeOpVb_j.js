import{i as u,x as g}from"./lit-element-Bx14lxc-.js";import{n}from"./Reflect-DJ7r0WLU.js";import{o as y}from"./unsafe-html-CYO4avEf.js";import{G as f}from"./gds-element-DTROifYq.js";import{t as v}from"./tokens.style-CJKwYBen.js";import{b as m,d,s as h,i as b,f as k}from"./declarative-layout-mixins-DFPXvh_g.js";const w=u`
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
`;var S=Object.defineProperty,i=(a,t,e,o)=>{for(var s=void 0,l=a.length-1,c;l>=0;l--)(c=a[l])&&(s=c(t,e,s)||s);return s&&S(t,e,s),s};const p=class p extends m(d(f)){constructor(){super(...arguments),this.solid=!1,this.level="2",this.label=""}get svgAttributes(){const e={fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:this.constructor._viewBox,part:"icon"};return this.label?{...e,"aria-label":this.label}:{...e,role:"presentation"}}get svgContent(){const t=this.constructor;return this.solid?t._solidSVG:t._regularSVG}applyStroke(t){return this.stroke?t.replace(/<(path|rect|circle|ellipse|line|polyline|polygon)/g,`<$1 stroke-width="${this.stroke}"`):t}generateAttributesString(t){return Object.entries(t).filter(([e,o])=>o!==void 0).map(([e,o])=>`${e}="${o}"`).join(`
      `)}render(){const t=this.svgAttributes;let e=this.svgContent||"";this.stroke&&(e=this.applyStroke(e));const o=`
      <svg ${this.generateAttributesString(t)}>
        ${e}
      </svg>
    `;return g`${y(o)}`}};p.styles=[v,w];let r=p;i([h({...b,property:"height",selector:"svg"})],r.prototype,"size");i([n({type:Boolean})],r.prototype,"solid");i([n({type:Number})],r.prototype,"stroke");i([n()],r.prototype,"level");i([h(k("content"))],r.prototype,"color");i([n({type:String})],r.prototype,"label");r.define();export{r as G};
