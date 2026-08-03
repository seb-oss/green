import{i as g,v as y,n as c,R as p,G as d,B as f,D as v,g as m}from"./iframe-Cf5uhdy8.js";import{d as u}from"./default-typography.styles--wdxVXkk.js";const x=g`
  :host {
    display: block;
  }

  [tag] {
    margin: 0;
    padding: 0;
    text-underline-offset: 0.2lh;
  }
`;var h=Object.defineProperty,w=Object.getOwnPropertyDescriptor,r=(t,s,a,l)=>{for(var o=l>1?void 0:l?w(s,a):s,n=t.length-1,i;n>=0;n--)(i=t[n])&&(o=(l?i(s,a,o):i(o))||o);return l&&o&&h(s,a,o),o};let e=class extends d{constructor(){super(...arguments),this.tag="span"}render(){const t=f(encodeURI(this.tag));return v`<${t} tag><slot></slot></${t}>`}};e.styles=[y,u,x];r([c({type:String})],e.prototype,"tag",2);r([p({selector:":host, [tag]",styleTemplate:(t,s)=>`font: var(--gds-sys-text-${s[0]});`})],e.prototype,"font",2);r([p({selector:"[tag]",valueTemplate:t=>`var(--gds-sys-text-weight-${t})`})],e.prototype,"font-weight",2);r([p()],e.prototype,"text-transform",2);r([p({selector:"[tag]"})],e.prototype,"text-decoration",2);r([p({selector:"[tag]",styleTemplate:(t,s)=>`overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: ${s[0]};
      -webkit-box-orient: vertical;`})],e.prototype,"lines",2);e=r([m("gds-text")],e);export{e as G};
