import{n as d,g as y}from"./gds-element-DKcDvDP5.js";import{s as x,u as p}from"./static-B8S6DEnV.js";import{t as f}from"./tokens.style-DY0D4SO1.js";import{s as n}from"./declarative-layout-mixins-D-CzJZ0x.js";import{G as v}from"./div.component-CeZvfGos.js";import{i as l}from"./lit-element-Bx14lxc-.js";const m=l`
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
      font-size: var(--gds-sys-text-size-heading-xl);
      line-height: var(--gds-sys-text-line-height-heading-xl);
      font-weight: var(--gds-sys-text-weight-regular);
    }

    h2 {
      font-size: var(--gds-sys-text-size-heading-l);
      line-height: var(--gds-sys-text-line-height-heading-l);
      font-weight: var(--gds-sys-text-weight-regular);
    }

    h3 {
      font-size: var(--gds-sys-text-size-heading-m);
      line-height: var(--gds-sys-text-line-height-heading-m);
      font-weight: var(--gds-sys-text-weight-regular);
    }

    h4 {
      font-size: var(--gds-sys-text-size-heading-s);
      line-height: var(--gds-sys-text-line-height-heading-s);
      font-weight: var(--gds-sys-text-weight-regular);
    }

    h5 {
      font-size: var(--gds-sys-text-size-heading-xs);
      line-height: var(--gds-sys-text-line-height-heading-xs);
      font-weight: var(--gds-sys-text-weight-regular);
    }

    h6 {
      font-size: var(--gds-sys-text-size-heading-2xs);
      line-height: var(--gds-sys-text-line-height-heading-2xs);
      font-weight: var(--gds-sys-text-weight-regular);
    }

    p,
    li {
      font-size: var(--gds-sys-text-size-body-m);
      line-height: var(--gds-sys-text-line-height-body-m);
    }

    strong {
      font-weight: var(--gds-sys-text-weight-medium);
    }
  }
`,w=l`
  :host {
    display: block;
  }

  [tag] {
    margin: 0;
    padding: 0;
    text-underline-offset: 0.2lh;
  }
`;var c=Object.defineProperty,u=Object.getOwnPropertyDescriptor,r=(e,i,g,o)=>{for(var t=o>1?void 0:o?u(i,g):i,a=e.length-1,h;a>=0;a--)(h=e[a])&&(t=(o?h(i,g,t):h(t))||t);return o&&t&&c(i,g,t),t};let s=class extends v{constructor(){super(...arguments),this.tag="span"}render(){const e=x(encodeURI(this.tag));return p`<${e} tag><slot></slot></${e}>`}};s.styles=[f,m,w];r([d({type:String})],s.prototype,"tag",2);r([n({selector:"[tag]",styleTemplate:(e,i)=>{const g=i[0],o=`font-size: var(--gds-sys-text-size-${g});`,t=`line-height: var(--gds-sys-text-line-height-${g});`;return o+t}})],s.prototype,"font-size",2);r([n({selector:"[tag]",valueTemplate:e=>`var(--gds-sys-text-weight-${e})`})],s.prototype,"font-weight",2);r([n()],s.prototype,"text-transform",2);r([n({selector:"[tag]"})],s.prototype,"text-decoration",2);r([n({selector:"[tag]",styleTemplate:(e,i)=>`overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: ${i[0]};
      -webkit-box-orient: vertical;`})],s.prototype,"lines",2);s=r([y("gds-text")],s);export{s as G,m as d};
