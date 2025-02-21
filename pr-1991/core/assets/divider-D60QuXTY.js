import{n as m,g as u,G as h,h as v}from"./custom-element-scoping-BEGY3AqQ.js";import{t as d}from"./tokens.style-CFvqdzpw.js";import{s as c}from"./style-expression-property-D7o6hSzp.js";import{i as g}from"./lit-element-C_s9q329.js";const y=g`
  :host {
    display: block;
  }

  hr {
    border-radius: 200px;
    background: currentColor;
    font-size: 0;
    border: 0;
    height: 1px;
    width: 100%;
    margin-top: calc((var(--_size, 0) / 2) - (1px / 2));
    margin-bottom: calc((var(--_size, 0) / 2) - (1px / 2));
  }
`;var b=Object.defineProperty,f=Object.getOwnPropertyDescriptor,i=(s,a,p,l)=>{for(var e=l>1?void 0:l?f(a,p):a,n=s.length-1,r;n>=0;n--)(r=s[n])&&(e=(l?r(a,p,e):r(e))||e);return l&&e&&b(a,p,e),e};let o=class extends h{constructor(){super(...arguments),this.level="2"}render(){return v`<hr />`}};o.styles=[d,y];i([m()],o.prototype,"level",2);i([c({valueTemplate:function(s){const[a,p]=s.split("/"),l=r=>{const t=r.trim();return t.startsWith("#")||t.startsWith("rgb(")||t.startsWith("rgba(")||t.startsWith("hsl(")||t.startsWith("hsla(")},e=(r,t)=>`var(--gds-color-l${r}-border-${t})`;return((r,t)=>l(r)?t?`color-mix(in srgb, ${r} ${parseFloat(t)*100}%, transparent 0%)`:r:e(this.level,r))(a,p)}})],o.prototype,"color",2);i([c({property:"--_size",valueTemplate:s=>`var(--gds-space-${s})`})],o.prototype,"size",2);i([c({property:"opacity",valueTemplate:s=>s})],o.prototype,"opacity",2);o=i([u("gds-divider")],o);
