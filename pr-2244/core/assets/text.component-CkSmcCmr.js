import{n as g,g as f}from"./gds-element-DKcDvDP5.js";import{s as y,u as m}from"./static-B8S6DEnV.js";import{t as x}from"./tokens.style-BebDwfJu.js";import{s as n}from"./declarative-layout-mixins-DHam8wVT.js";import{G as h}from"./div.component-DV4jT0Ib.js";import{i as d}from"./lit-element-Bx14lxc-.js";const v=d`
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
      font: var(--gds-sys-text-body-m);
    }

    strong {
      font: var(--gds-sys-text-body-m-medium);
    }
  }
`,c=d`
  :host {
    display: block;
  }

  [tag] {
    margin: 0;
    padding: 0;
    text-underline-offset: 0.2lh;
  }
`;var u=Object.defineProperty,b=Object.getOwnPropertyDescriptor,r=(t,s,a,l)=>{for(var o=l>1?void 0:l?b(s,a):s,i=t.length-1,p;i>=0;i--)(p=t[i])&&(o=(l?p(s,a,o):p(o))||o);return l&&o&&u(s,a,o),o};let e=class extends h{constructor(){super(...arguments),this.tag="span"}render(){const t=y(encodeURI(this.tag));return m`<${t} tag><slot></slot></${t}>`}};e.styles=[x,v,c];r([g({type:String})],e.prototype,"tag",2);r([n({selector:"[tag]",styleTemplate:(t,s)=>`font: var(--gds-sys-text-${s[0]});`})],e.prototype,"font",2);r([n({selector:"[tag]",valueTemplate:t=>`var(--gds-sys-text-weight-${t})`})],e.prototype,"font-weight",2);r([n()],e.prototype,"text-transform",2);r([n({selector:"[tag]"})],e.prototype,"text-decoration",2);r([n({selector:"[tag]",styleTemplate:(t,s)=>`overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: ${s[0]};
      -webkit-box-orient: vertical;`})],e.prototype,"lines",2);e=r([f("gds-text")],e);export{e as G,v as d};
