import{g as h}from"./gds-element-7aeb5dea.js";import{s as l}from"./style-expression-property-10f12bac.js";import{G as f}from"./button-948d0024.js";import{i as b}from"./lit-element-da1d3957.js";import"./chevron-bottom-9285428f.js";import{DefaultParams as g}from"./button.stories-6230c720.js";import"./_commonjsHelpers-725317a4.js";import"./watch-c4961afe.js";import"./static-1a858edb.js";import"./query-b9d3c2af.js";import"./when-cf7256a5.js";import"./if-defined-86aa62fe.js";import"./class-map-4d7ebbd7.js";import"./directive-12249aa5.js";import"./constrain-slots-08d8606c.js";import"./form-control-86c8becc.js";import"./lit-localize-87611c26.js";import"./transitional-styles-05c0db21.js";import"./tokens.style-8a0fa4c3.js";import"./icon-b03b5b36.js";import"./grid-cb55b538.js";import"./arrow-up-7484b04f.js";import"./arrow-right-fcfb40f5.js";const y=b`
  :host {
    position: fixed;
    inset: auto 2rem 2rem auto;
  }

  .button {
    box-shadow: var(--gds-shadow-m);
    height: calc(var(--_size) + 0.5rem);
  }
`;var v=Object.defineProperty,x=Object.getOwnPropertyDescriptor,i=(t,r,n,s)=>{for(var e=s>1?void 0:s?x(r,n):r,p=t.length-1,m;p>=0;p--)(m=t[p])&&(e=(s?m(r,n,e):m(e))||e);return s&&e&&v(r,n,e),e};let o=class extends f{connectedCallback(){super.connectedCallback(),this._dynamicStylesController.inject("FAB_styles",y)}};i([l({valueTemplate:t=>t})],o.prototype,"position",2);i([l({valueTemplate:t=>t})],o.prototype,"transform",2);i([l({valueTemplate:t=>t})],o.prototype,"inset",2);o=i([h("gds-fab")],o);const N={title:"Docs/Components/Button/FAB",component:"gds-fab",tags:["autodocs"],parameters:{docs:{description:{component:`The Floating Action Button is used for functions central to the user experience, such as
support and help features that needs to be accessible at all times.

The button is always floating visible in the users viewport, typically in the lower right
corner. This button can be used with an icon only.`}}}},w={...g,parameters:{docs:{source:{format:!0,type:"dynamic"},story:{height:"200px"}},controls:{expanded:!0}},args:{innerHTML:`See what's new! <div slot="trail" style="width:8px;height:8px;border-radius:8px;background-color:green;box-shadow:0 0 0 4px rgba(0,85,0,0.3)"></div>`}},a={...w};var c,u,d;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...DefaultParams
}`,...(d=(u=a.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const Q=["Usage"];export{a as Usage,Q as __namedExportsOrder,N as default};
