import{n as m,g as y,G as c}from"./custom-element-scoping-CpYtbs9r.js";import{s as g,u as v}from"./static-_ukc2i0J.js";import{t as u}from"./tokens.style-Dw60-dNf.js";import{s as p}from"./style-expression-property-C6V8xdlu.js";import{d}from"./default-typography.styles-Bl0hQgz1.js";import{i as f}from"./lit-element-C_s9q329.js";const h=f`
  :host {
    display: block;
  }

  [tag] {
    margin: 0;
    padding: 0;
    text-underline-offset: 0.2lh;
  }
`;var x=Object.defineProperty,w=Object.getOwnPropertyDescriptor,r=(t,o,l,a)=>{for(var s=a>1?void 0:a?w(o,l):o,n=t.length-1,i;n>=0;n--)(i=t[n])&&(s=(a?i(o,l,s):i(s))||s);return a&&s&&x(o,l,s),s};let e=class extends c{constructor(){super(...arguments),this.level="2",this.tag="span"}render(){const t=g(encodeURI(this.tag));return v`<${t} tag><slot></slot></${t}>`}};e.styles=[u,d,h];r([m()],e.prototype,"level",2);r([m({type:String})],e.prototype,"tag",2);r([p({valueTemplate:t=>`${t}`,selector:"[tag]",styleTemplate:(t,o)=>{const l=o[0],a=`font-size: var(--gds-text-size-${l});`,s=`line-height: var(--gds-text-line-height-${l});`;return a+s}})],e.prototype,"font-size",2);r([p({property:"font-weight",selector:"[tag]",valueTemplate:t=>`var(--gds-text-weight-${t})`})],e.prototype,"font-weight",2);r([p({property:"margin",valueTemplate:t=>t})],e.prototype,"margin",2);r([p({property:"text-wrap",valueTemplate:t=>t})],e.prototype,"text-wrap",2);r([p({property:"text-transform",valueTemplate:t=>t})],e.prototype,"text-transform",2);r([p({property:"max-width",valueTemplate:t=>`${t}ch`})],e.prototype,"max-width",2);r([p({property:"min-width",valueTemplate:t=>`${t}ch`})],e.prototype,"min-width",2);r([p({property:"text-align",valueTemplate:t=>t})],e.prototype,"text-align",2);r([p({valueTemplate:t=>t,selector:"[tag]"})],e.prototype,"text-decoration",2);r([p({valueTemplate:t=>t,styleTemplate:(t,o)=>`overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: ${o[0]};
      -webkit-box-orient: vertical;`})],e.prototype,"lines",2);r([p({property:"color",valueTemplate:function(t){const[o,l]=t.split("/");return l?`color-mix(in srgb, var(--gds-color-${"l"+this.level}-content-${o}) ${parseFloat(l)*100}%, transparent 0%)`:`var(--gds-color-${"l"+this.level}-content-${o})`}})],e.prototype,"color",2);e=r([y("gds-text")],e);
