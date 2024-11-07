import{n as p,g as d,G as v}from"./custom-element-scoping-b4lD3laR.js";import{s as x,u as m}from"./static-_ukc2i0J.js";import{t as f}from"./tokens.style-BMleC81K.js";import{s as o}from"./style-expression-property-CYg4CGI6.js";import{i as h}from"./lit-element-C_s9q329.js";const c=h`
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

    iframe {
      border: var(--gds-space-4xs) solid var(--gds-color-l2-border-primary);
      border-radius: var(--gds-space-xs);
      min-width: 100%;
      margin-bottom: var(--gds-space-l);
    }
  }
`,u=h`
  :host {
    display: block;
  }

  [tag] {
    margin: 0;
    padding: 0;
    text-underline-offset: 0.2lh;
  }
`;var y=Object.defineProperty,w=Object.getOwnPropertyDescriptor,r=(e,i,s,l)=>{for(var a=l>1?void 0:l?w(i,s):i,n=e.length-1,g;n>=0;n--)(g=e[n])&&(a=(l?g(i,s,a):g(a))||a);return l&&a&&y(i,s,a),a};let t=class extends v{constructor(){super(...arguments),this.level="2",this.tag="span"}render(){const e=x(encodeURI(this.tag));return m`<${e} tag><slot></slot></${e}>`}};t.styles=[f,c,u];r([p()],t.prototype,"level",2);r([p({type:String})],t.prototype,"tag",2);r([o({valueTemplate:e=>`${e}`,selector:"[tag]",styleTemplate:(e,i)=>{const s=i[0],l=`font-size: var(--gds-text-size-${s});`,a=`line-height: var(--gds-text-line-height-${s});`;return l+a}})],t.prototype,"font-size",2);r([o({property:"font-weight",selector:"[tag]",valueTemplate:e=>`var(--gds-text-weight-${e})`})],t.prototype,"font-weight",2);r([o({property:"margin",valueTemplate:e=>e})],t.prototype,"margin",2);r([o({property:"text-wrap",valueTemplate:e=>e})],t.prototype,"text-wrap",2);r([o({property:"text-transform",valueTemplate:e=>e})],t.prototype,"text-transform",2);r([o({property:"max-width",valueTemplate:e=>`${e}ch`})],t.prototype,"max-width",2);r([o({property:"min-width",valueTemplate:e=>`${e}ch`})],t.prototype,"min-width",2);r([o({property:"text-align",valueTemplate:e=>e})],t.prototype,"text-align",2);r([o({valueTemplate:e=>e,selector:"[tag]"})],t.prototype,"text-decoration",2);r([o({valueTemplate:e=>e,styleTemplate:(e,i)=>`overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: ${i[0]};
      -webkit-box-orient: vertical;`})],t.prototype,"lines",2);r([o({property:"color",valueTemplate:function(e){const[i,s]=e.split("/");return s?`color-mix(in srgb, var(--gds-color-${"l"+this.level}-content-${i}) ${parseFloat(s)*100}%, transparent 0%)`:`var(--gds-color-${"l"+this.level}-content-${i})`}})],t.prototype,"color",2);t=r([d("gds-text")],t);export{c as d};
