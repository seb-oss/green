import{i as g,E as y,n as c,$ as p,G as d,J as f,L as m,g as u}from"./iframe-BPg3AppR.js";import{d as v}from"./default-typography.styles-CxCElSmj.js";const x=g`
  :host {
    display: block;
  }

  [tag] {
    margin: 0;
    padding: 0;
    text-underline-offset: 0.2lh;
  }
`;var w=Object.defineProperty,b=Object.getOwnPropertyDescriptor,r=(t,s,a,l)=>{for(var o=l>1?void 0:l?b(s,a):s,n=t.length-1,i;n>=0;n--)(i=t[n])&&(o=(l?i(s,a,o):i(o))||o);return l&&o&&w(s,a,o),o};let e=class extends d{constructor(){super(...arguments),this.tag="span"}render(){const t=f(encodeURI(this.tag));return m`<${t} tag><slot></slot></${t}>`}};e.styles=[y,v,x];r([c({type:String})],e.prototype,"tag",2);r([p({selector:"[tag]",styleTemplate:(t,s)=>`font: var(--gds-sys-text-${s[0]});`})],e.prototype,"font",2);r([p({selector:"[tag]",valueTemplate:t=>`var(--gds-sys-text-weight-${t})`})],e.prototype,"font-weight",2);r([p()],e.prototype,"text-transform",2);r([p({selector:"[tag]"})],e.prototype,"text-decoration",2);r([p({selector:"[tag]",styleTemplate:(t,s)=>`overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: ${s[0]};
      -webkit-box-orient: vertical;`})],e.prototype,"lines",2);e=r([u("gds-text")],e);export{e as G};
