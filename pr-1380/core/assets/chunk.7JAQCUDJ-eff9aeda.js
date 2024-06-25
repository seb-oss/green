import{t as n,_ as e,s as r,g as i,G as y,h as m}from"./chunk.ZQ4D5K7J-2ca0ec85.js";import{i as g}from"./lit-element-2a5e401f.js";import{n as c}from"./Reflect-a49e984a.js";var h=g`
  :host {
    gap: var(--_gap-column) var(--_gap-row);
    box-sizing: border-box;
  }
`,v=h,p=class extends y{render(){return m`<slot></slot>`}};p.styles=[n,v];e([r({styleTemplate:(t,o)=>{const l=o[0],s=o[1]||l;return`--_gap-column: ${l}; --_gap-row: ${s};`}})],p.prototype,"gap",2);e([r({property:"--_row-gap",valueTemplate:t=>t})],p.prototype,"rowGap",2);e([r()],p.prototype,"padding",2);e([r()],p.prototype,"margin",2);e([r({property:"display",valueTemplate:t=>t})],p.prototype,"display",2);e([r({property:"position",valueTemplate:t=>t})],p.prototype,"position",2);e([r({property:"inset",valueTemplate:t=>t})],p.prototype,"inset",2);e([r({property:"overflow",valueTemplate:t=>t})],p.prototype,"overflow",2);e([r({property:"opacity",valueTemplate:t=>t})],p.prototype,"opacity",2);e([r({property:"align-items",valueTemplate:t=>t})],p.prototype,"align",2);e([r({property:"justify-content",valueTemplate:t=>t})],p.prototype,"justify",2);e([r({property:"flex-direction",valueTemplate:t=>t})],p.prototype,"direction",2);e([r({property:"grid-column",valueTemplate:t=>`${t}`})],p.prototype,"column",2);e([r({property:"grid-row",valueTemplate:t=>`${t}`})],p.prototype,"row",2);e([r({property:"backdrop-filter",valueTemplate:t=>`blur(${t})`})],p.prototype,"filter",2);e([r({property:"border-radius",valueTemplate:t=>`var(--gds-space-${t})`})],p.prototype,"radius",2);e([r({property:"background",valueTemplate:t=>t})],p.prototype,"background",2);e([r({valueTemplate:t=>`1px solid ${t}`,styleTemplate:(t,o)=>{const l=o[0],s=o.length>1?o[1]:l,d=o.length>2?o[2]:l,u=o.length>3?o[3]:l;return`border-top: ${l}; border-right: ${s}; border-bottom: ${d}; border-left: ${u};`}})],p.prototype,"border",2);e([r({property:"color",valueTemplate:t=>`var(--gds-sys-color-${t})`})],p.prototype,"color",2);e([r({property:"height",valueTemplate:t=>t})],p.prototype,"height",2);e([r({property:"width",valueTemplate:t=>t})],p.prototype,"width",2);e([r({property:"z-index",valueTemplate:t=>t})],p.prototype,"stack",2);e([r({property:"mask-image",valueTemplate:t=>`linear-gradient(to ${t}, currentColor 40%, transparent)`})],p.prototype,"mask",2);p=e([i("gds-container")],p);var T=g`
  :host {
    display: block;

    & > * {
      margin: unset;
      font-weight: normal;
      font-size: inherit;
      line-height: inherit;
      text-wrap: inherit;
    }
  }
`,f=T,a=class extends y{constructor(){super(...arguments),this.tag="p"}createTag(){const t=document.createElement(this.tag);return t.appendChild(document.createElement("slot")),t}render(){return m`${this.createTag()}`}};a.styles=[n,f];e([c({type:String})],a.prototype,"tag",2);e([r({valueTemplate:t=>`${t}`,styleTemplate:(t,o)=>{const l=o[0];return`font-size: var(--gds-text-size-${l}); line-height: var(--gds-sys-typography-line-height-${l});`}})],a.prototype,"size",2);e([r()],a.prototype,"margin",2);e([r({property:"text-wrap",valueTemplate:t=>t})],a.prototype,"wrap",2);e([r({property:"max-width",valueTemplate:t=>`${t}ch`})],a.prototype,"length",2);e([r({property:"min-width",valueTemplate:t=>`${t}ch`})],a.prototype,"min",2);e([r({property:"text-align",valueTemplate:t=>t})],a.prototype,"align",2);e([r({property:"font-family",valueTemplate:t=>t})],a.prototype,"font",2);a=e([i("gds-text")],a);
