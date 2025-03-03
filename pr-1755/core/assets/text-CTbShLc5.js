import{n as m,g}from"./custom-element-scoping-BEGY3AqQ.js";import{s as f,u as c}from"./static-_ukc2i0J.js";import{t as d}from"./tokens.style-CFvqdzpw.js";import{s as l}from"./declarative-layout-mixins-Cg5fmtre.js";import{G as y}from"./div-Cnle9s5w.js";import{d as v}from"./default-typography.styles-CW-t1upr.js";import{i as u}from"./lit-element-C_s9q329.js";const x=u`
  :host {
    display: block;
  }

  [tag] {
    margin: 0;
    padding: 0;
    text-underline-offset: 0.2lh;
  }
`;var h=Object.defineProperty,w=Object.getOwnPropertyDescriptor,s=(t,r,i,p)=>{for(var e=p>1?void 0:p?w(r,i):r,n=t.length-1,a;n>=0;n--)(a=t[n])&&(e=(p?a(r,i,e):a(e))||e);return p&&e&&h(r,i,e),e};let o=class extends y{constructor(){super(...arguments),this.tag="span"}render(){const t=f(encodeURI(this.tag));return c`<${t} tag><slot></slot></${t}>`}};o.styles=[d,v,x];s([m({type:String})],o.prototype,"tag",2);s([l({selector:"[tag]",styleTemplate:(t,r)=>{const i=r[0],p=`font-size: var(--gds-text-size-${i});`,e=`line-height: var(--gds-text-line-height-${i});`;return p+e}})],o.prototype,"font-size",2);s([l({selector:"[tag]",valueTemplate:t=>`var(--gds-text-weight-${t})`})],o.prototype,"font-weight",2);s([l()],o.prototype,"text-transform",2);s([l({selector:"[tag]"})],o.prototype,"text-decoration",2);s([l({styleTemplate:(t,r)=>`overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: ${r[0]};
      -webkit-box-orient: vertical;`})],o.prototype,"lines",2);o=s([g("gds-text")],o);
