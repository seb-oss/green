import{i as s}from"./lit-element-2a5e401f.js";import{t as n,_ as r,s as a,g as i,G as l,h as m}from"./chunk.ZQ4D5K7J-1a209b3c.js";import{n as y}from"./Reflect-a49e984a.js";var g=s`
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
`,h=g,e=class extends l{constructor(){super(...arguments),this.tag="p"}createTag(){const t=document.createElement(this.tag);return t.appendChild(document.createElement("slot")),t}render(){return m`${this.createTag()}`}};e.styles=[n,h];r([y({type:String})],e.prototype,"tag",2);r([a({valueTemplate:t=>`${t}`,styleTemplate:(t,o)=>{const p=o[0];return`font-size: var(--gds-text-size-${p}); line-height: var(--gds-sys-typography-line-height-${p});`}})],e.prototype,"size",2);r([a()],e.prototype,"margin",2);r([a({property:"text-wrap",valueTemplate:t=>t})],e.prototype,"wrap",2);r([a({property:"max-width",valueTemplate:t=>`${t}ch`})],e.prototype,"length",2);r([a({property:"min-width",valueTemplate:t=>`${t}ch`})],e.prototype,"min",2);r([a({property:"text-align",valueTemplate:t=>t})],e.prototype,"align",2);r([a({property:"font-family",valueTemplate:t=>t})],e.prototype,"font",2);e=r([i("gds-text")],e);
