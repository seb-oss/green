import{g as m,G as g,h as u}from"./gds-element-54cd6e2a.js";import{t as v}from"./tokens.style-880811e7.js";import{s as o}from"./style-expression-property-89161d08.js";import{i as d}from"./lit-element-71e04f06.js";const f=d`
  :host {
    box-sizing: border-box;
  }
`;var b=Object.defineProperty,T=Object.getOwnPropertyDescriptor,l=(e,t,p,a)=>{for(var s=a>1?void 0:a?T(t,p):t,n=e.length-1,i;n>=0;n--)(i=e[n])&&(s=(a?i(t,p,s):i(s))||s);return a&&s&&b(t,p,s),s};let r=class extends g{constructor(){super(...arguments),this.display="block"}render(){return u`<slot></slot>`}};r.styles=[v,f];l([o({valueTemplate:e=>e})],r.prototype,"display",2);l([o({valueTemplate:e=>{const[t,p]=e.split("/");return p?`color-mix(in srgb, var(--gds-sys-color-${t}) ${parseFloat(p)*100}%, transparent 0%)`:`var(--gds-sys-color-${t})`}})],r.prototype,"color",2);l([o({valueTemplate:e=>{const[t,p]=e.split("/");return p?`color-mix(in srgb, var(--gds-sys-color-${t}) ${parseFloat(p)*100}%, transparent 0%)`:`var(--gds-sys-color-${t})`}})],r.prototype,"background",2);l([o({valueTemplate:e=>e})],r.prototype,"opacity",2);l([o()],r.prototype,"padding",2);l([o()],r.prototype,"margin",2);l([o({valueTemplate:e=>e})],r.prototype,"position",2);l([o({valueTemplate:e=>e})],r.prototype,"inset",2);l([o({valueTemplate:e=>e})],r.prototype,"overflow",2);l([o({property:"grid-column",valueTemplate:e=>`${e}`})],r.prototype,"column",2);l([o({property:"grid-row",valueTemplate:e=>`${e}`})],r.prototype,"row",2);l([o({valueTemplate:e=>e})],r.prototype,"height",2);l([o({valueTemplate:e=>e})],r.prototype,"width",2);l([o({property:"z-index",valueTemplate:e=>e})],r.prototype,"stack",2);r=l([m("gds-container")],r);const x=d`
  :host {
    box-sizing: border-box;
  }
`;var $=Object.defineProperty,_=Object.getOwnPropertyDescriptor,c=(e,t,p,a)=>{for(var s=a>1?void 0:a?_(t,p):t,n=e.length-1,i;n>=0;n--)(i=e[n])&&(s=(a?i(t,p,s):i(s))||s);return a&&s&&$(t,p,s),s};let y=class extends r{connectedCallback(){super.connectedCallback(),this.display="flex"}render(){return u`<slot></slot>`}};y.styles=[v,x];c([o({styleTemplate:(e,t)=>{const p=t[0],a=t[1]||p;return`gap: ${p} ${a};`}})],y.prototype,"gap",2);c([o({property:"align-items",valueTemplate:e=>e})],y.prototype,"align",2);c([o({property:"justify-content",valueTemplate:e=>e})],y.prototype,"justify",2);c([o({property:"flex-direction",valueTemplate:e=>e})],y.prototype,"direction",2);y=c([m("gds-flex")],y);export{r as G};