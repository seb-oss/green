import{i as m,n as y}from"./static-ecb8bd0e.js";import{n as h,g,G as v}from"./gds-element-54cd6e2a.js";import{t as c}from"./tokens.style-52086a88.js";import{s as o}from"./style-expression-property-89161d08.js";import{i as f}from"./lit-element-71e04f06.js";const u=f`
  :host {
    display: contents;
  }

  * {
    margin: unset;
    font-weight: inherit;
    font-size: inherit;
    line-height: inherit;
    text-wrap: inherit;
  }

  :host(:not([size])) {
    font-size: var(--font-size-body-m);
    line-height: var(--line-height-body-m);
  }

  :host([lines]) {
    * {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
      -webkit-line-clamp: var(--_lines);
    }
  }
`;var d=Object.defineProperty,w=Object.getOwnPropertyDescriptor,r=(t,s,p,n)=>{for(var i=n>1?void 0:n?w(s,p):s,l=t.length-1,a;l>=0;l--)(a=t[l])&&(i=(n?a(s,p,i):a(i))||i);return n&&i&&d(s,p,i),i};let e=class extends v{constructor(){super(...arguments),this.tag="p"}render(){const t=m(this.tag);return y`<${t}><slot></slot></${t}>`}};e.styles=[c,u];r([h({type:String})],e.prototype,"tag",2);r([o({valueTemplate:t=>`${t}`,styleTemplate:(t,s)=>{const p=s[0],n=`font-size: var(--gds-text-size-${p});`,i=`line-height: var(--gds-text-line-height-${p});`;return n+i}})],e.prototype,"size",2);r([o({property:"font-weight",valueTemplate:t=>`var(--gds-text-weight-${t})`})],e.prototype,"weight",2);r([o()],e.prototype,"margin",2);r([o({property:"text-wrap",valueTemplate:t=>t})],e.prototype,"wrap",2);r([o({property:"text-transform",valueTemplate:t=>t})],e.prototype,"transform",2);r([o({property:"max-width",valueTemplate:t=>`${t}ch`})],e.prototype,"length",2);r([o({property:"min-width",valueTemplate:t=>`${t}ch`})],e.prototype,"min",2);r([o({property:"text-align",valueTemplate:t=>t})],e.prototype,"align",2);r([o({property:"--_lines",valueTemplate:t=>t})],e.prototype,"lines",2);r([o({property:"color",valueTemplate:t=>{const[s,p]=t.split("/");return p?`color-mix(in srgb, var(--gds-sys-color-${s}) ${parseFloat(p)*100}%, transparent 0%)`:`var(--gds-sys-color-${s})`}})],e.prototype,"color",2);e=r([g("gds-text")],e);
