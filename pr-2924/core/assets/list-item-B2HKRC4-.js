import{i,v as d,h as p,g as m,H as u,z as v}from"./iframe-BOeNwGVf.js";import{G as f}from"./flex.component-C7ncx85I.js";const g=i`
  :host {
    display: flex;
    flex-direction: column;
    gap: var(--gds-sys-space-m);
  }
`;var h=Object.getOwnPropertyDescriptor,y=(s,l,c,r)=>{for(var e=r>1?void 0:r?h(l,c):l,t=s.length-1,n;t>=0;t--)(n=s[t])&&(e=n(e)||e);return e};let o=class extends f{connectedCallback(){super.connectedCallback(),this.setAttribute("role","list")}render(){return p`<slot></slot>`}};o.styles=[d,g];o=y([m("gds-list")],o);o.define();const b=i`
  :host {
  }

  slot:not([name]) {
  }
`;var C=Object.getOwnPropertyDescriptor,_=(s,l,c,r)=>{for(var e=r>1?void 0:r?C(l,c):l,t=s.length-1,n;t>=0;t--)(n=s[t])&&(e=n(e)||e);return e};let a=class extends u(v){connectedCallback(){super.connectedCallback(),this.setAttribute("role","listitem")}render(){return p`<slot></slot>`}};a.styles=[d,b];a=_([m("gds-list-item")],a);a.define();export{a as G};
