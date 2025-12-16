import{i as g,t as d,n as y,s as p,G as c,B as f,D as m,g as u}from"./iframe-DFccSH9C.js";import{d as v}from"./default-typography.styles-DteksY2v.js";const x=g`
  :host {
    display: block;
  }

  [tag] {
    margin: 0;
    padding: 0;
    text-underline-offset: 0.2lh;
  }
`;var w=Object.defineProperty,b=Object.getOwnPropertyDescriptor,r=(e,s,a,l)=>{for(var o=l>1?void 0:l?b(s,a):s,n=e.length-1,i;n>=0;n--)(i=e[n])&&(o=(l?i(s,a,o):i(o))||o);return l&&o&&w(s,a,o),o};let t=class extends c{constructor(){super(...arguments),this.tag="span"}render(){const e=f(encodeURI(this.tag));return m`<${e} tag><slot></slot></${e}>`}};t.styles=[d,v,x];r([y({type:String})],t.prototype,"tag",2);r([p({selector:"[tag]",styleTemplate:(e,s)=>`font: var(--gds-sys-text-${s[0]});`})],t.prototype,"font",2);r([p({selector:"[tag]",valueTemplate:e=>`var(--gds-sys-text-weight-${e})`})],t.prototype,"font-weight",2);r([p()],t.prototype,"text-transform",2);r([p({selector:"[tag]"})],t.prototype,"text-decoration",2);r([p({selector:"[tag]",styleTemplate:(e,s)=>`overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: ${s[0]};
      -webkit-box-orient: vertical;`})],t.prototype,"lines",2);t=r([u("gds-text")],t);t.define();export{t as G};
