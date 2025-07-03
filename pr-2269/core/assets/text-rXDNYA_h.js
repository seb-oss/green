import{n as g,g as f}from"./gds-element-DKcDvDP5.js";import{s as y,u as m}from"./static-B8S6DEnV.js";import{t as x}from"./tokens.style-DBCwR12Q.js";import{s as n}from"./declarative-layout-mixins-Bw_LIblW.js";import{G as h}from"./div.component-BmNATssr.js";import{i as d}from"./lit-element-Bx14lxc-.js";const v=d`
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
`;var u=Object.defineProperty,b=Object.getOwnPropertyDescriptor,r=(e,s,a,l)=>{for(var o=l>1?void 0:l?b(s,a):s,i=e.length-1,p;i>=0;i--)(p=e[i])&&(o=(l?p(s,a,o):p(o))||o);return l&&o&&u(s,a,o),o};let t=class extends h{constructor(){super(...arguments),this.tag="span"}render(){const e=y(encodeURI(this.tag));return m`<${e} tag><slot></slot></${e}>`}};t.styles=[x,v,c];r([g({type:String})],t.prototype,"tag",2);r([n({selector:"[tag]",styleTemplate:(e,s)=>`font: var(--gds-sys-text-${s[0]});`})],t.prototype,"font",2);r([n({selector:"[tag]",valueTemplate:e=>`var(--gds-sys-text-weight-${e})`})],t.prototype,"font-weight",2);r([n()],t.prototype,"text-transform",2);r([n({selector:"[tag]"})],t.prototype,"text-decoration",2);r([n({selector:"[tag]",styleTemplate:(e,s)=>`overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: ${s[0]};
      -webkit-box-orient: vertical;`})],t.prototype,"lines",2);t=r([f("gds-text")],t);t.define();export{t as G,v as d};
