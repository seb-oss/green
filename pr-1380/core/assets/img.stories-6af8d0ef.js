import{n as u}from"./Reflect-a49e984a.js";import{g as f,G as g,h as v}from"./gds-element-4f5906f2.js";import{t as h}from"./tokens.style-1e462ec5.js";import{s}from"./style-expression-property-b0ffca16.js";import{i as _}from"./lit-element-2a5e401f.js";import"./_commonjsHelpers-725317a4.js";import"./watch-c4961afe.js";const b=_`
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
    overflow: hidden;
    border-radius: inherit;
  }

  img {
    display: flex;
    object-fit: var(--_fit, cover);
    object-position: var(--_position, relative);
    width: 100%;
    height: 100%;
  }
`;var x=Object.defineProperty,P=Object.getOwnPropertyDescriptor,r=(t,a,n,i)=>{for(var o=i>1?void 0:i?P(a,n):a,l=t.length-1,m;l>=0;l--)(m=t[l])&&(o=(i?m(a,n,o):m(o))||o);return i&&o&&x(a,n,o),o};let e=class extends g{render(){return v`<figure><img src="${this.src}" alt="${this.alt}" /></figure>`}};e.styles=[h,b];r([s({property:"--_ratio",valueTemplate:t=>`${t}`})],e.prototype,"ratio",2);r([s({property:"--_position",valueTemplate:t=>t})],e.prototype,"position",2);r([s({property:"--_inset",valueTemplate:t=>t})],e.prototype,"inset",2);r([s({property:"--_opacity",valueTemplate:t=>t})],e.prototype,"opacity",2);r([s({property:"--_fit",valueTemplate:t=>t})],e.prototype,"fit",2);r([u()],e.prototype,"src",2);r([u()],e.prototype,"alt",2);r([s({property:"border-radius",valueTemplate:t=>`var(--gds-sys-radii-${t})`})],e.prototype,"radius",2);e=r([f("gds-img")],e);const G={title:"Components/Layouts/Image",component:"gds-img",tags:["autodocs"],parameters:{docs:{description:{component:"The `gds-img`\n\n## Usage"}}}},T={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{ratio:"16/9",fit:"cover",inset:"0",position:"relative",opacity:"1",src:"https://placehold.co/600x400",alt:"Placeholder"}},p={...T};var c,d,y;p.parameters={...p.parameters,docs:{...(c=p.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...DefaultParams
}`,...(y=(d=p.parameters)==null?void 0:d.docs)==null?void 0:y.source}}};const z=["Basic"];export{p as Basic,z as __namedExportsOrder,G as default};
