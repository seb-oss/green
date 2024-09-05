import{g as h}from"./gds-element-d791ed3d.js";import{s as l}from"./style-expression-property-731c6e0d.js";import{G as f}from"./button-ad6aa2ab.js";import{i as b}from"./lit-element-1d72f0ce.js";import"./chevron-bottom-d68c2f0b.js";import{DefaultParams as g}from"./button.stories-3b64bbfa.js";import"./_commonjsHelpers-725317a4.js";import"./watch-c4961afe.js";import"./static-c0094392.js";import"./query-b9d3c2af.js";import"./when-748fcf30.js";import"./if-defined-5f576255.js";import"./class-map-f04c1558.js";import"./directive-dd518ee3.js";import"./constrain-slots-08d8606c.js";import"./transitional-styles-eca4d8b9.js";import"./tokens.style-711a3a94.js";import"./runtime-c06dc943.js";import"./icon-b442d341.js";import"./grid-68b430d7.js";import"./arrow-up-d0280f64.js";import"./arrow-right-23204178.js";const y=b`
  :host {
    position: fixed;
    inset: auto 2rem 2rem auto;
  }

  .button {
    box-shadow: var(--gds-shadow-m);
    height: calc(var(--_size) + 0.5rem);
  }
`;var v=Object.defineProperty,x=Object.getOwnPropertyDescriptor,i=(t,r,n,s)=>{for(var e=s>1?void 0:s?x(r,n):r,p=t.length-1,m;p>=0;p--)(m=t[p])&&(e=(s?m(r,n,e):m(e))||e);return s&&e&&v(r,n,e),e};let o=class extends f{connectedCallback(){super.connectedCallback(),this._dynamicStylesController.inject("FAB_styles",y)}};i([l({valueTemplate:t=>t})],o.prototype,"position",2);i([l({valueTemplate:t=>t})],o.prototype,"transform",2);i([l({valueTemplate:t=>t})],o.prototype,"inset",2);o=i([h("gds-fab")],o);const K={title:"Docs/Components/Button/FAB",component:"gds-fab",tags:["autodocs"],parameters:{docs:{description:{component:`The Floating Action Button is used for functions central to the user experience, such as
support and help features that needs to be accessible at all times.

The button is always floating visible in the users viewport, typically in the lower right
corner. This button can be used with an icon only.`}}}},w={...g,parameters:{docs:{source:{format:!0,type:"dynamic"},story:{height:"200px"}},controls:{expanded:!0}},args:{innerHTML:`See what's new! <div slot="trail" style="width:8px;height:8px;border-radius:8px;background-color:green;box-shadow:0 0 0 4px rgba(0,85,0,0.3)"></div>`}},a={...w};var c,u,d;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...DefaultParams
}`,...(d=(u=a.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const N=["Usage"];export{a as Usage,N as __namedExportsOrder,K as default};
