import{n as d,g as x}from"./custom-element-scoping-b4c89-hi.js";import{s as p,u as f}from"./static-B8S6DEnV.js";import{t as v}from"./tokens.style-C9bLefPj.js";import{s as n}from"./declarative-layout-mixins-CxeMR8ZJ.js";import{G as m}from"./div.component-Diofk0s1.js";import{i as l}from"./lit-element-Bx14lxc-.js";const w=l`
  @layer defaults {
    a:link {
      color: currentColor;
      text-underline-offset: 0.1lh;
      font-weight: var(--gds-text-weight-book);
    }

    a:visited {
      color: currentColor;
    }

    h1 {
      font-size: var(--gds-text-size-heading-xl);
      line-height: var(--gds-text-line-height-heading-xl);
      font-weight: var(--gds-text-weight-regular);
    }

    h2 {
      font-size: var(--gds-text-size-heading-l);
      line-height: var(--gds-text-line-height-heading-l);
      font-weight: var(--gds-text-weight-regular);
    }

    h3 {
      font-size: var(--gds-text-size-heading-m);
      line-height: var(--gds-text-line-height-heading-m);
      font-weight: var(--gds-text-weight-regular);
    }

    h4 {
      font-size: var(--gds-text-size-heading-s);
      line-height: var(--gds-text-line-height-heading-s);
      font-weight: var(--gds-text-weight-regular);
    }

    h5 {
      font-size: var(--gds-text-size-heading-xs);
      line-height: var(--gds-text-line-height-heading-xs);
      font-weight: var(--gds-text-weight-regular);
    }

    h6 {
      font-size: var(--gds-text-size-heading-2xs);
      line-height: var(--gds-text-line-height-heading-2xs);
      font-weight: var(--gds-text-weight-regular);
    }

    p,
    li {
      font-size: var(--gds-text-size-body-m);
      line-height: var(--gds-text-line-height-body-m);
    }

    strong {
      font-weight: var(--gds-text-weight-medium);
    }
  }
`,c=l`
  :host {
    display: block;
  }

  [tag] {
    margin: 0;
    padding: 0;
    text-underline-offset: 0.2lh;
  }
`;var u=Object.defineProperty,y=Object.getOwnPropertyDescriptor,r=(e,s,g,o)=>{for(var t=o>1?void 0:o?y(s,g):s,a=e.length-1,h;a>=0;a--)(h=e[a])&&(t=(o?h(s,g,t):h(t))||t);return o&&t&&u(s,g,t),t};let i=class extends m{constructor(){super(...arguments),this.tag="span"}render(){const e=p(encodeURI(this.tag));return f`<${e} tag><slot></slot></${e}>`}};i.styles=[v,w,c];r([d({type:String})],i.prototype,"tag",2);r([n({selector:"[tag]",styleTemplate:(e,s)=>{const g=s[0],o=`font-size: var(--gds-text-size-${g});`,t=`line-height: var(--gds-text-line-height-${g});`;return o+t}})],i.prototype,"font-size",2);r([n({selector:"[tag]",valueTemplate:e=>`var(--gds-text-weight-${e})`})],i.prototype,"font-weight",2);r([n()],i.prototype,"text-transform",2);r([n({selector:"[tag]"})],i.prototype,"text-decoration",2);r([n({selector:"[tag]",styleTemplate:(e,s)=>`overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: ${s[0]};
      -webkit-box-orient: vertical;`})],i.prototype,"lines",2);i=r([x("gds-text")],i);export{i as G,w as d};
