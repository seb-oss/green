import{i as n,B as v,h as b,a as d}from"./iframe-CrCFIEgk.js";const m=n`
  :host {
    --_blur: 5px;
  }

  .blur {
    filter: blur(var(--_blur));
  }
`;var p=Object.getOwnPropertyDescriptor,_=(l,t,o,a)=>{for(var r=a>1?void 0:a?p(t,o):t,s=l.length-1,u;s>=0;s--)(u=l[s])&&(r=u(r)||r);return r};let e=class extends v{render(){return b`<div class="blur"><slot></slot></div>`}};e.styles=m;e=_([d("gds-blur")],e);export{e as G};
