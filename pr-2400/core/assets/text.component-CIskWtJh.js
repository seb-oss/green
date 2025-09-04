import{n as d}from"./Reflect-DJ7r0WLU.js";import{s as f,u as y}from"./static-B8S6DEnV.js";import{t as m}from"./tokens.style-DW_p3hws.js";import{s as n}from"./declarative-layout-mixins-CquYcIh8.js";import{g as x}from"./gds-element-DTROifYq.js";import{G as h}from"./div.component-DaQR1erW.js";import{i as g}from"./lit-element-Bx14lxc-.js";const v=g`
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
`;var u=Object.defineProperty,b=Object.getOwnPropertyDescriptor,r=(t,s,a,i)=>{for(var o=i>1?void 0:i?b(s,a):s,l=t.length-1,p;l>=0;l--)(p=t[l])&&(o=(i?p(s,a,o):p(o))||o);return i&&o&&u(s,a,o),o};let e=class extends h{constructor(){super(...arguments),this.tag="span"}render(){const t=f(encodeURI(this.tag));return y`<${t} tag><slot></slot></${t}>`}};e.styles=[m,v,c];r([d({type:String})],e.prototype,"tag",2);r([n({selector:"[tag]",styleTemplate:(t,s)=>`font: var(--gds-sys-text-${s[0]});`})],e.prototype,"font",2);r([n({selector:"[tag]",valueTemplate:t=>`var(--gds-sys-text-weight-${t})`})],e.prototype,"font-weight",2);r([n()],e.prototype,"text-transform",2);r([n({selector:"[tag]"})],e.prototype,"text-decoration",2);r([n({selector:"[tag]",styleTemplate:(t,s)=>`overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: ${s[0]};
      -webkit-box-orient: vertical;`})],e.prototype,"lines",2);e=r([x("gds-text")],e);export{e as G,v as d};
