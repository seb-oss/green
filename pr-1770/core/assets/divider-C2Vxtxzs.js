import{n as m,g as u,G as v,h as d}from"./custom-element-scoping-b4lD3laR.js";import{t as h}from"./tokens.style-BMleC81K.js";import{s as c}from"./style-expression-property-CYg4CGI6.js";import{i as g}from"./lit-element-C_s9q329.js";const y=g`
  :host {
    display: block;
    border-radius: 200px;
    background: currentColor;
    font-size: 0;
    border: 0;
    height: 1px;
    width: 100%;
    margin-top: calc((var(--_size, 0) / 2) - (1px / 2));
    margin-bottom: calc((var(--_size, 0) / 2) - (1px / 2));
  }
`;var b=Object.defineProperty,f=Object.getOwnPropertyDescriptor,i=(s,a,p,l)=>{for(var e=l>1?void 0:l?f(a,p):a,n=s.length-1,t;n>=0;n--)(t=s[n])&&(e=(l?t(a,p,e):t(e))||e);return l&&e&&b(a,p,e),e};let o=class extends v{constructor(){super(...arguments),this.level="2"}render(){return d``}};o.styles=[h,y];i([m()],o.prototype,"level",2);i([c({valueTemplate:function(s){const[a,p]=s.split("/"),l=t=>{const r=t.trim();return r.startsWith("#")||r.startsWith("rgb(")||r.startsWith("rgba(")||r.startsWith("hsl(")||r.startsWith("hsla(")},e=(t,r)=>`var(--gds-color-l${t}-border-${r})`;return((t,r)=>l(t)?r?`color-mix(in srgb, ${t} ${parseFloat(r)*100}%, transparent 0%)`:t:e(this.level,t))(a,p)}})],o.prototype,"color",2);i([c({property:"--_size",valueTemplate:s=>`var(--gds-space-${s})`})],o.prototype,"size",2);i([c({property:"opacity",valueTemplate:s=>s})],o.prototype,"opacity",2);o=i([u("gds-divider")],o);
