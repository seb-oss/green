import{k as h,t as p}from"./static-c0094392.js";import{n as d,g as x,G as v}from"./gds-element-86064462.js";import{t as m}from"./tokens.style-b5b8efd2.js";import{s}from"./style-expression-property-0e3d4d40.js";import{i as c}from"./lit-element-1d72f0ce.js";const f=c`
  :host {
    display: contents;
  }

  * {
    margin: unset;
    font-weight: inherit;
    font-size: inherit;
    line-height: inherit;
    text-wrap: inherit;
  }

  :host(:not([font-size])) {
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
    span,
    em,
    strong,
    mark {
      font-size: var(--gds-text-size-body-m);
      line-height: var(--gds-text-line-height-body-m);
    }

    small {
      font-size: var(--gds-text-size-detail-xs);
      line-height: var(--gds-text-line-height-detail-xs);
    }
  }

  :host(:not([font-weight])) {
    strong {
      font-weight: var(--gds-text-weight-book);
    }
  }

  :host([lines]) {
    * {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
      -webkit-line-clamp: var(--_lines);
    }
  }
`;var y=Object.defineProperty,w=Object.getOwnPropertyDescriptor,r=(t,i,o,n)=>{for(var a=n>1?void 0:n?w(i,o):i,g=t.length-1,l;g>=0;g--)(l=t[g])&&(a=(n?l(i,o,a):l(a))||a);return n&&a&&y(i,o,a),a};let e=class extends v{constructor(){super(...arguments),this.tag="span"}render(){const t=encodeURI(this.tag),i=p(t);return h`<${i} tag><slot></slot></${i}>`}};e.styles=[m,f];r([d({type:String})],e.prototype,"tag",2);r([s({valueTemplate:t=>`${t}`,selector:"[tag]",styleTemplate:(t,i)=>{const o=i[0],n=`font-size: var(--gds-text-size-${o});`,a=`line-height: var(--gds-text-line-height-${o});`;return n+a}})],e.prototype,"font-size",2);r([s({property:"font-weight",selector:"[tag]",valueTemplate:t=>`var(--gds-text-weight-${t})`})],e.prototype,"weight",2);r([s({property:"margin",selector:"[tag]",valueTemplate:t=>t})],e.prototype,"margin",2);r([s({selector:"[tag]",valueTemplate:t=>t})],e.prototype,"isolation",2);r([s({property:"text-wrap",selector:"[tag]",valueTemplate:t=>t})],e.prototype,"text-wrap",2);r([s({property:"text-transform",selector:"[tag]",valueTemplate:t=>t})],e.prototype,"text-transform",2);r([s({property:"max-width",selector:"[tag]",valueTemplate:t=>`${t}ch`})],e.prototype,"max-width",2);r([s({property:"min-width",selector:"[tag]",valueTemplate:t=>`${t}ch`})],e.prototype,"min-width",2);r([s({property:"text-align",selector:"[tag]",valueTemplate:t=>t})],e.prototype,"align",2);r([s({property:"--_lines",selector:"[tag]",valueTemplate:t=>t})],e.prototype,"lines",2);r([s({property:"color",selector:"[tag]",valueTemplate:t=>{const[i,o]=t.split("/");return o?`color-mix(in srgb, var(--gds-color-${i}) ${parseFloat(o)*100}%, transparent 0%)`:`var(--gds-color-${i})`}})],e.prototype,"color",2);e=r([x("gds-text")],e);
