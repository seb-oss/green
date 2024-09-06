import{g as h}from"./gds-element-24e794df.js";import{s as l}from"./style-expression-property-45d22dc5.js";import{G as f}from"./button-b98d16b0.js";import{i as b}from"./lit-element-2a5e401f.js";import"./chevron-bottom-27e6f9ff.js";import{DefaultParams as g}from"./button.stories-e7a41f62.js";import"./_commonjsHelpers-725317a4.js";import"./watch-c4961afe.js";import"./static-50b4adfb.js";import"./query-b9d3c2af.js";import"./when-cf7256a5.js";import"./if-defined-39fa3d49.js";import"./class-map-43969d56.js";import"./directive-12249aa5.js";import"./constrain-slots-08d8606c.js";import"./form-control-0ab31465.js";import"./lit-localize-87611c26.js";import"./transitional-styles-3f5f5b40.js";import"./tokens.style-cc0690e8.js";import"./icon-9eb1b5fc.js";import"./grid-32df7810.js";import"./arrow-up-92a246cd.js";import"./arrow-right-62764848.js";const y=b`
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
