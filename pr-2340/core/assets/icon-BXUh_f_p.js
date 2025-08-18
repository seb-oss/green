import{i as g,x as y}from"./lit-element-Bx14lxc-.js";import{n as s,G as u}from"./gds-element-DKcDvDP5.js";import{o as d}from"./unsafe-html-CYO4avEf.js";import{t as b}from"./tokens.style-Cct4pBht.js";import{b as v,d as f,s as c,h as m,g as w}from"./declarative-layout-mixins-D-CzJZ0x.js";const k=g`
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
`;var x=Object.defineProperty,o=(h,t,e,i)=>{for(var n=void 0,l=h.length-1,a;l>=0;l--)(a=h[l])&&(n=a(t,e,n)||n);return n&&x(t,e,n),n};const p=class p extends v(f(u)){constructor(){super(...arguments),this.solid=!1,this.level="2",this.box=!1,this.label=""}get svgAttributes(){const t=this.constructor,e={fill:"none",xmlns:"http://www.w3.org/2000/svg",...this.size===void 0&&{width:this.width||t._width,height:this.width||t._height}||{},viewBox:this.box||t._viewBox,part:"icon"};return this.label?{...e,"aria-label":this.label}:{...e,role:"presentation"}}get svgContent(){const t=this.constructor;return this.solid?t._solidSVG:t._regularSVG}applyStroke(t){return this.stroke?t.replace(/<(path|rect|circle|ellipse|line|polyline|polygon)/g,`<$1 stroke-width="${this.stroke}"`):t}generateAttributesString(t){return Object.entries(t).filter(([e,i])=>i!==void 0).map(([e,i])=>`${e}="${i}"`).join(`
      `)}render(){const t=this.svgAttributes;let e=this.svgContent||"";this.stroke&&(e=this.applyStroke(e));const i=`
      <svg ${this.generateAttributesString(t)}>
        ${e}
      </svg>
    `;return y`${d(i)}`}};p.styles=[b,k];let r=p;o([c({...m,property:"height",selector:"svg"})],r.prototype,"size");o([s({type:Number})],r.prototype,"width");o([s({type:Number})],r.prototype,"height");o([s({type:Boolean})],r.prototype,"solid");o([s({type:Number})],r.prototype,"stroke");o([s()],r.prototype,"level");o([c(w("content"))],r.prototype,"color");o([s({type:String})],r.prototype,"box");o([s({type:String})],r.prototype,"label");r.define();export{r as G};
