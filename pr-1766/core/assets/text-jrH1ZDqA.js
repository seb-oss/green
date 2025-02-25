import{n as d,g as p}from"./custom-element-scoping-BEGY3AqQ.js";import{s as x,u as v}from"./static-_ukc2i0J.js";import{t as f}from"./tokens.style-CFvqdzpw.js";import{s as a}from"./declarative-layout-mixins-Cg5fmtre.js";import{G as m}from"./div-Cnle9s5w.js";import{i as h}from"./lit-element-C_s9q329.js";const c=h`
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
      line-height: 22px;
    }

    strong {
      font-weight: var(--gds-text-weight-medium);
    }

    iframe {
      border: var(--gds-space-4xs) solid var(--gds-color-l2-border-primary);
      border-radius: var(--gds-space-xs);
      min-width: 100%;
      margin-bottom: var(--gds-space-l);
    }
  }
`,w=h`
  :host {
    display: block;
  }

  [tag] {
    margin: 0;
    padding: 0;
    text-underline-offset: 0.2lh;
  }
`;var u=Object.defineProperty,y=Object.getOwnPropertyDescriptor,s=(e,r,o,g)=>{for(var t=g>1?void 0:g?y(r,o):r,n=e.length-1,l;n>=0;n--)(l=e[n])&&(t=(g?l(r,o,t):l(t))||t);return g&&t&&u(r,o,t),t};let i=class extends m{constructor(){super(...arguments),this.tag="span"}render(){const e=x(encodeURI(this.tag));return v`<${e} tag><slot></slot></${e}>`}};i.styles=[f,c,w];s([d({type:String})],i.prototype,"tag",2);s([a({selector:"[tag]",styleTemplate:(e,r)=>{const o=r[0],g=`font-size: var(--gds-text-size-${o});`,t=`line-height: var(--gds-text-line-height-${o});`;return g+t}})],i.prototype,"font-size",2);s([a({selector:"[tag]",valueTemplate:e=>`var(--gds-text-weight-${e})`})],i.prototype,"font-weight",2);s([a()],i.prototype,"text-transform",2);s([a({selector:"[tag]"})],i.prototype,"text-decoration",2);s([a({styleTemplate:(e,r)=>`overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: ${r[0]};
      -webkit-box-orient: vertical;`})],i.prototype,"lines",2);i=s([p("gds-text")],i);export{c as d};
