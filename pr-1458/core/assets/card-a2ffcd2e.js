import{g as c,h as d}from"./gds-element-86064462.js";import{t as m}from"./tokens.style-b5b8efd2.js";import{s as n}from"./style-expression-property-a96dbce8.js";import{G as b}from"./container-f57b0c68.js";import{i as g}from"./lit-element-1d72f0ce.js";const $=g`
  :host {
    display: block;
  }

  [backdrop] {
    inset: 0;
    z-index: -1;
    position: absolute;
    mask-size: cover;
    mask-repeat: no-repeat;
    mask-position: center;
  }

  [backdrop] + slot {
    z-index: 1;
  }
`;var y=Object.defineProperty,f=Object.getOwnPropertyDescriptor,a=(t,r,o,s)=>{for(var e=s>1?void 0:s?f(r,o):r,l=t.length-1,i;l>=0;l--)(i=t[l])&&(e=(s?i(r,o,e):i(e))||e);return s&&e&&y(r,o,e),e};let p=class extends b{render(){return d`${this.mask||this.filter?d`<div backdrop></div>`:""}<slot></slot>`}};p.styles=[m,$];a([n({property:"box-shadow",valueTemplate:t=>`var(--gds-shadow-${t})`})],p.prototype,"shadow",2);a([n({valueTemplate:t=>{const[r,o]=t.split("/");return`var(--gds-space-${r}) solid ${o?`var(--gds-color-${o})`:"currentColor"}`},styleTemplate:(t,r)=>{const o=r[0],s=r.length>1?r[1]:o,e=r.length>2?r[2]:o,l=r.length>3?r[3]:o;return`border-top: ${o}; border-right: ${s}; border-bottom: ${e}; border-left: ${l};`}})],p.prototype,"border",2);a([n({property:"border-radius",valueTemplate:t=>`var(--gds-space-${t})`})],p.prototype,"radius",2);a([n({property:"backdrop-filter",selector:"[backdrop]",valueTemplate:t=>`blur(${t})`})],p.prototype,"filter",2);a([n({valueTemplate:t=>{const[r,o,s]=t.split("/"),e=s?`color-mix(in srgb, var(--gds-color-${o}) ${parseFloat(s)*100}%, transparent 0%)`:`var(--gds-color-${o})`;return`mask-image: linear-gradient(to ${r}, rgba(0, 0, 0, 1) 40%, rgba(0, 0, 0, 0) 100%); background-color: ${e};`},styleTemplate:(t,r)=>{const[o]=r[0].split("/");return`[backdrop] { ${o} }`}})],p.prototype,"mask",2);p=a([c("gds-card")],p);
