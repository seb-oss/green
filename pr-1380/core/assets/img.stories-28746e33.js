import{n as f}from"./Reflect-a49e984a.js";import{g,G as u,h as v}from"./gds-element-4f5906f2.js";import{t as _}from"./tokens.style-1e462ec5.js";import{s}from"./style-expression-property-b0ffca16.js";import{i as h}from"./lit-element-2a5e401f.js";import"./_commonjsHelpers-725317a4.js";import"./watch-c4961afe.js";const x=h`
  :host {
    display: contents;
  }

  figure {
    aspect-ratio: var(--_ratio, inital);
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 0;
    inset: var(--_inset, initial);
    width: 100%;
    height: auto;
    opacity: var(--_opacity, 1);
  }

  img {
    display: flex;
    object-fit: var(--_fit, cover);
    object-position: var(--_position, relative);
    width: 100%;
    height: 100%;
  }
`;var P=Object.defineProperty,b=Object.getOwnPropertyDescriptor,o=(t,a,n,i)=>{for(var r=i>1?void 0:i?b(a,n):a,m=t.length-1,c;m>=0;m--)(c=t[m])&&(r=(i?c(a,n,r):c(r))||r);return i&&r&&P(a,n,r),r};let e=class extends u{render(){return v`<figure><img src="${this.src}" alt="${this.alt}" /></figure>`}};e.styles=[_,x];o([s({property:"--_ratio",valueTemplate:t=>`${t}`})],e.prototype,"ratio",2);o([s({property:"--_position",valueTemplate:t=>t})],e.prototype,"position",2);o([s({property:"--_inset",valueTemplate:t=>t})],e.prototype,"inset",2);o([s({property:"--_opacity",valueTemplate:t=>t})],e.prototype,"opacity",2);o([s({property:"--_fit",valueTemplate:t=>t})],e.prototype,"fit",2);o([f()],e.prototype,"src",2);o([f()],e.prototype,"alt",2);e=o([g("gds-img")],e);const $={title:"Components/Layouts/Image",component:"gds-img",tags:["autodocs"],parameters:{docs:{description:{component:"The `gds-img`\n\n## Usage"}}}},T={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{ratio:"16/9",fit:"cover",inset:"0",position:"relative",opacity:"1",src:"https://placehold.co/600x400",alt:"Placeholder"}},p={...T};var l,d,y;p.parameters={...p.parameters,docs:{...(l=p.parameters)==null?void 0:l.docs,source:{originalSource:`{
  ...DefaultParams
}`,...(y=(d=p.parameters)==null?void 0:d.docs)==null?void 0:y.source}}};const z=["Basic"];export{p as Basic,z as __namedExportsOrder,$ as default};
