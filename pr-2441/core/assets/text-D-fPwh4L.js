import{n as d}from"./Reflect-DJ7r0WLU.js";import{s as f,u as y}from"./static-B8S6DEnV.js";import{t as m}from"./tokens.style-CJKwYBen.js";import{s as n}from"./declarative-layout-mixins-XrCARJjW.js";import{g as x}from"./gds-element-DTROifYq.js";import{G as h}from"./div.component-CZSPsSo2.js";import{i as g}from"./lit-element-Bx14lxc-.js";const v=g`
  @layer defaults {
    a:link {
      color: currentColor;
      text-underline-offset: 0.1lh;
      font-weight: var(--gds-sys-text-weight-book);
    }

    a:visited {
      color: currentColor;
    }

    h1 {
      font: var(--gds-sys-text-heading-xl);
    }

    h2 {
      font: var(--gds-sys-text-heading-l);
    }

    h3 {
      font: var(--gds-sys-text-heading-m);
    }

    h4 {
      font: var(--gds-sys-text-heading-s);
    }

    h5 {
      font: var(--gds-sys-text-heading-xs);
    }

    h6 {
      font: var(--gds-sys-text-heading-2xs);
    }

    p,
    li {
      font: var(--gds-sys-text-body-book-m);
    }

    strong {
      font: var(--gds-sys-text-body-book-m);
      font-weight: var(--gds-sys-text-weight-medium);
    }
  }
`,c=g`
  :host {
    display: block;
  }

  [tag] {
    margin: 0;
    padding: 0;
    text-underline-offset: 0.2lh;
  }
`;var u=Object.defineProperty,b=Object.getOwnPropertyDescriptor,r=(e,s,a,i)=>{for(var o=i>1?void 0:i?b(s,a):s,l=e.length-1,p;l>=0;l--)(p=e[l])&&(o=(i?p(s,a,o):p(o))||o);return i&&o&&u(s,a,o),o};let t=class extends h{constructor(){super(...arguments),this.tag="span"}render(){const e=f(encodeURI(this.tag));return y`<${e} tag><slot></slot></${e}>`}};t.styles=[m,v,c];r([d({type:String})],t.prototype,"tag",2);r([n({selector:"[tag]",styleTemplate:(e,s)=>`font: var(--gds-sys-text-${s[0]});`})],t.prototype,"font",2);r([n({selector:"[tag]",valueTemplate:e=>`var(--gds-sys-text-weight-${e})`})],t.prototype,"font-weight",2);r([n()],t.prototype,"text-transform",2);r([n({selector:"[tag]"})],t.prototype,"text-decoration",2);r([n({selector:"[tag]",styleTemplate:(e,s)=>`overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: ${s[0]};
      -webkit-box-orient: vertical;`})],t.prototype,"lines",2);t=r([x("gds-text")],t);t.define();export{t as G,v as d};
