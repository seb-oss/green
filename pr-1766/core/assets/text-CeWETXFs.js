import{n as h,g as d}from"./custom-element-scoping-BEGY3AqQ.js";import{s as v,u as x}from"./static-_ukc2i0J.js";import{t as f}from"./tokens.style-CFvqdzpw.js";import{s as a}from"./style-expression-property-D7o6hSzp.js";import{G as m}from"./container-DDOcWLIX.js";import{i as p}from"./lit-element-C_s9q329.js";const c=p`
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
`,u=p`
  :host {
    display: block;
  }

  [tag] {
    margin: 0;
    padding: 0;
    text-underline-offset: 0.2lh;
  }
`;var y=Object.defineProperty,w=Object.getOwnPropertyDescriptor,i=(e,r,o,l)=>{for(var s=l>1?void 0:l?w(r,o):r,n=e.length-1,g;n>=0;n--)(g=e[n])&&(s=(l?g(r,o,s):g(s))||s);return l&&s&&y(r,o,s),s};let t=class extends m{constructor(){super(...arguments),this.level="2",this.tag="span"}render(){const e=v(encodeURI(this.tag));return x`<${e} tag><slot></slot></${e}>`}};t.styles=[f,c,u];i([h()],t.prototype,"level",2);i([h({type:String})],t.prototype,"tag",2);i([a({valueTemplate:e=>`${e}`,selector:"[tag]",styleTemplate:(e,r)=>{const o=r[0],l=`font-size: var(--gds-text-size-${o});`,s=`line-height: var(--gds-text-line-height-${o});`;return l+s}})],t.prototype,"font-size",2);i([a({property:"font-weight",selector:"[tag]",valueTemplate:e=>`var(--gds-text-weight-${e})`})],t.prototype,"font-weight",2);i([a({property:"text-wrap",valueTemplate:e=>e})],t.prototype,"text-wrap",2);i([a({property:"text-transform",valueTemplate:e=>e})],t.prototype,"text-transform",2);i([a({property:"text-align",valueTemplate:e=>e})],t.prototype,"text-align",2);i([a({valueTemplate:e=>e,selector:"[tag]"})],t.prototype,"text-decoration",2);i([a({valueTemplate:e=>e,styleTemplate:(e,r)=>`overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: ${r[0]};
      -webkit-box-orient: vertical;`})],t.prototype,"lines",2);i([a({property:"color",valueTemplate:function(e){const[r,o]=e.split("/");return o?`color-mix(in srgb, var(--gds-color-${"l"+this.level}-content-${r}) ${parseFloat(o)*100}%, transparent 0%)`:`var(--gds-color-${"l"+this.level}-content-${r})`}})],t.prototype,"color",2);t=i([d("gds-text")],t);export{c as d};
