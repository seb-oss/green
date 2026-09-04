import{i as g,B as y,n as c,U as a,G as d,H as f,I as m,a as u}from"./iframe-BTEMi5uh.js";import{d as v}from"./default-typography.styles-BU1f2-fr.js";const x=g`
  :host {
    display: block;
  }

  [tag] {
    margin: 0;
    padding: 0;
    text-underline-offset: 0.2lh;
  }
`;var h=Object.defineProperty,w=Object.getOwnPropertyDescriptor,r=(t,s,p,l)=>{for(var o=l>1?void 0:l?w(s,p):s,n=t.length-1,i;n>=0;n--)(i=t[n])&&(o=(l?i(s,p,o):i(o))||o);return l&&o&&h(s,p,o),o};let e=class extends d{constructor(){super(...arguments),this.tag="span"}render(){const t=f(encodeURI(this.tag));return m`<${t} tag><slot></slot></${t}>`}};e.styles=[y,v,x];r([c({type:String})],e.prototype,"tag",2);r([a({selector:":host, [tag]",styleTemplate:(t,s)=>`font: var(--gds-sys-text-${s[0]});`})],e.prototype,"font",2);r([a({selector:"[tag]",valueTemplate:t=>`var(--gds-sys-text-weight-${t})`})],e.prototype,"font-weight",2);r([a()],e.prototype,"text-transform",2);r([a({selector:"[tag]"})],e.prototype,"text-decoration",2);r([a({selector:"[tag]",styleTemplate:(t,s)=>`overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: ${s[0]};
      -webkit-box-orient: vertical;`})],e.prototype,"lines",2);e=r([u("gds-text")],e);export{e as G};
