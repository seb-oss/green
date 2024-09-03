import{g as f}from"./gds-element-54cd6e2a.js";import{s as l}from"./style-expression-property-89161d08.js";import{G as h}from"./button-3ca35517.js";import{i as x}from"./lit-element-71e04f06.js";import"./chevron-bottom-433ce854.js";import{DefaultParams as b}from"./button.stories-b12e2cd5.js";import"./_commonjsHelpers-725317a4.js";import"./watch-c4961afe.js";import"./static-ecb8bd0e.js";import"./query-b9d3c2af.js";import"./when-cf7256a5.js";import"./if-defined-e4b5fcf9.js";import"./class-map-4ef1884f.js";import"./directive-12249aa5.js";import"./constrain-slots-08d8606c.js";import"./transitional-styles-1a2d368e.js";import"./tokens.style-52086a88.js";import"./lit-localize-87611c26.js";import"./icon-cbb1cac4.js";import"./grid-16ded52a.js";import"./arrow-up-b403b886.js";import"./arrow-right-f903942d.js";const g=x`
  :host {
    position: fixed;
    inset: auto 2rem 2rem auto;
  }

  .button {
    /* TODO: Tokens! */
    box-shadow:
      0px 8px 12px 0px rgba(27, 27, 24, 0.15),
      0px 0px 1px 0px rgba(13, 13, 12, 0.3);
    height: calc(var(--_size) + 0.5rem);
  }
`;var y=Object.defineProperty,v=Object.getOwnPropertyDescriptor,p=(t,r,i,s)=>{for(var e=s>1?void 0:s?v(r,i):r,n=t.length-1,m;n>=0;n--)(m=t[n])&&(e=(s?m(r,i,e):m(e))||e);return s&&e&&y(r,i,e),e};let o=class extends h{connectedCallback(){super.connectedCallback(),this._dynamicStylesController.inject("FAB_styles",g)}};p([l({valueTemplate:t=>t})],o.prototype,"position",2);p([l({valueTemplate:t=>t})],o.prototype,"transform",2);p([l({valueTemplate:t=>t})],o.prototype,"inset",2);o=p([f("gds-fab")],o);const K={title:"Docs/Components/Button/FAB",component:"gds-fab",tags:["autodocs"],parameters:{docs:{description:{component:`The Floating Action Button is used for functions central to the user experience, such as
support and help features that needs to be accessible at all times.

The button is always floating visible in the users viewport, typically in the lower right
corner. This button can be used with an icon only.`}}}},w={...b,parameters:{docs:{source:{format:!0,type:"dynamic"},story:{height:"200px"}},controls:{expanded:!0}},args:{innerHTML:`See what's new! <div slot="trail" style="width:8px;height:8px;border-radius:8px;background-color:green;box-shadow:0 0 0 4px rgba(0,85,0,0.3)"></div>`}},a={...w};var c,u,d;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...DefaultParams
}`,...(d=(u=a.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const N=["Usage"];export{a as Usage,N as __namedExportsOrder,K as default};
