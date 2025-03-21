import{n as d,g as x}from"./custom-element-scoping-BOlwUH_F.js";import{s as p,u as f}from"./static-B8S6DEnV.js";import{t as v}from"./tokens.style-Db3B8yEB.js";import{s as n}from"./declarative-layout-mixins-CvhbdVQ9.js";import{G as m}from"./div-D-66otxp.js";import{i as l}from"./lit-element-Bx14lxc-.js";const w=l`
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
`;var u=Object.defineProperty,y=Object.getOwnPropertyDescriptor,r=(t,s,g,o)=>{for(var i=o>1?void 0:o?y(s,g):s,a=t.length-1,h;a>=0;a--)(h=t[a])&&(i=(o?h(s,g,i):h(i))||i);return o&&i&&u(s,g,i),i};let e=class extends m{constructor(){super(...arguments),this.tag="span"}render(){const t=p(encodeURI(this.tag));return f`<${t} tag><slot></slot></${t}>`}};e.styles=[v,w,c];r([d({type:String})],e.prototype,"tag",2);r([n({selector:"[tag]",styleTemplate:(t,s)=>{const g=s[0],o=`font-size: var(--gds-text-size-${g});`,i=`line-height: var(--gds-text-line-height-${g});`;return o+i}})],e.prototype,"font-size",2);r([n({selector:"[tag]",valueTemplate:t=>`var(--gds-text-weight-${t})`})],e.prototype,"font-weight",2);r([n()],e.prototype,"text-transform",2);r([n({selector:"[tag]"})],e.prototype,"text-decoration",2);r([n({selector:"[tag]",styleTemplate:(t,s)=>`overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: ${s[0]};
      -webkit-box-orient: vertical;`})],e.prototype,"lines",2);e=r([x("gds-text")],e);e.define();export{w as d};
