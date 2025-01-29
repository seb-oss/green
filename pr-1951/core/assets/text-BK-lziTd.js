import{n as m,g as c}from"./custom-element-scoping-DIxRjd2s.js";import{s as g,u as y}from"./static-_ukc2i0J.js";import{t as v}from"./tokens.style-C7dDtGNm.js";import{s as p}from"./style-expression-property-GOhAk6QC.js";import{G as f}from"./container-DJQReuFj.js";import{d as u}from"./default-typography.styles-Bl0hQgz1.js";import{i as d}from"./lit-element-C_s9q329.js";const x=d`
  :host {
    display: block;
  }

  [tag] {
    margin: 0;
    padding: 0;
    text-underline-offset: 0.2lh;
  }
`;var h=Object.defineProperty,w=Object.getOwnPropertyDescriptor,o=(t,r,s,a)=>{for(var l=a>1?void 0:a?w(r,s):r,n=t.length-1,i;n>=0;n--)(i=t[n])&&(l=(a?i(r,s,l):i(l))||l);return a&&l&&h(r,s,l),l};let e=class extends f{constructor(){super(...arguments),this.level="2",this.tag="span"}render(){const t=g(encodeURI(this.tag));return y`<${t} tag><slot></slot></${t}>`}};e.styles=[v,u,x];o([m()],e.prototype,"level",2);o([m({type:String})],e.prototype,"tag",2);o([p({valueTemplate:t=>`${t}`,selector:"[tag]",styleTemplate:(t,r)=>{const s=r[0],a=`font-size: var(--gds-text-size-${s});`,l=`line-height: var(--gds-text-line-height-${s});`;return a+l}})],e.prototype,"font-size",2);o([p({property:"font-weight",selector:"[tag]",valueTemplate:t=>`var(--gds-text-weight-${t})`})],e.prototype,"font-weight",2);o([p({property:"text-wrap",valueTemplate:t=>t})],e.prototype,"text-wrap",2);o([p({property:"text-transform",valueTemplate:t=>t})],e.prototype,"text-transform",2);o([p({property:"text-align",valueTemplate:t=>t})],e.prototype,"text-align",2);o([p({valueTemplate:t=>t,selector:"[tag]"})],e.prototype,"text-decoration",2);o([p({valueTemplate:t=>t,styleTemplate:(t,r)=>`overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: ${r[0]};
      -webkit-box-orient: vertical;`})],e.prototype,"lines",2);o([p({property:"color",valueTemplate:function(t){const[r,s]=t.split("/");return s?`color-mix(in srgb, var(--gds-color-${"l"+this.level}-content-${r}) ${parseFloat(s)*100}%, transparent 0%)`:`var(--gds-color-${"l"+this.level}-content-${r})`}})],e.prototype,"color",2);e=o([c("gds-text")],e);
