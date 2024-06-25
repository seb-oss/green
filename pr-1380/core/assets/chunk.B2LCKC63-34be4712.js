import{i as p}from"./lit-element-2a5e401f.js";import{t as n,_ as r,s,g as i,G as l,h as m}from"./chunk.ZQ4D5K7J-7699bbdd.js";import{n as g}from"./Reflect-a49e984a.js";var h=p`
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
`,y=h,e=class extends l{constructor(){super(...arguments),this.tag="p"}createTag(){const t=document.createElement(this.tag);return t.appendChild(document.createElement("slot")),t}render(){return m`${this.createTag()}`}};e.styles=[n,y];r([g({type:String})],e.prototype,"tag",2);r([s({valueTemplate:t=>`${t}`,styleTemplate:(t,o)=>{const a=o[0];return`font-size: var(--gds-text-size-${a}); line-height: var(--gds-sys-typography-line-height-${a});`}})],e.prototype,"size",2);r([s()],e.prototype,"margin",2);r([s({property:"text-wrap",valueTemplate:t=>t})],e.prototype,"wrap",2);r([s({property:"max-width",valueTemplate:t=>`${t}ch`})],e.prototype,"length",2);r([s({property:"font-family",valueTemplate:t=>t})],e.prototype,"font",2);e=r([i("gds-text")],e);
