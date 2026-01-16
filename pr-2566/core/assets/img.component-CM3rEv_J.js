import{n as p,i as f,a5 as h,S as y,a0 as m,a4 as u,o as l,h as v,t as P,s as g,J as b,g as w}from"./iframe-UufRagcw.js";var _=Object.defineProperty,n=(t,e,r,d)=>{for(var s=void 0,o=t.length-1,a;o>=0;o--)(a=t[o])&&(s=a(e,r,s)||s);return s&&_(e,r,s),s};function $(t){class e extends t{constructor(){super(...arguments),this.loading="lazy",this.decoding="auto"}}return n([p({reflect:!1})],e.prototype,"src"),n([p({reflect:!1})],e.prototype,"srcset"),n([p({reflect:!1})],e.prototype,"sizes"),n([p({reflect:!1})],e.prototype,"alt"),n([p({reflect:!1})],e.prototype,"loading"),n([p({reflect:!1})],e.prototype,"decoding"),e}const x=f`
  :host {
    display: block;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 0;
    width: 100%;
    height: auto;
    overflow: hidden;
  }

  img {
    display: flex;
    width: 100%;
    height: 100%;
  }
`;var z=Object.defineProperty,j=Object.getOwnPropertyDescriptor,c=(t,e,r,d)=>{for(var s=d>1?void 0:d?j(e,r):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(s=(d?a(e,r,s):a(s))||s);return d&&s&&z(e,r,s),s};let i=class extends h(y(m(u($(b))))){render(){return v`<img
      src="${l(this.src)}"
      alt="${l(this.alt)}"
      srcset=${l(this.srcset)}
      sizes=${l(this.sizes)}
      loading=${l(this.loading)}
      decoding=${l(this.decoding)}
    />`}};i.styles=[P,x];c([g({selector:"img"})],i.prototype,"aspect-ratio",2);c([g({property:"border-radius",valueTemplate:t=>`var(--gds-sys-space-${t})`})],i.prototype,"border-radius",2);c([g({selector:"img"})],i.prototype,"object-fit",2);c([g({selector:"img"})],i.prototype,"object-position",2);i=c([w("gds-img")],i);export{i as G,$ as w};
