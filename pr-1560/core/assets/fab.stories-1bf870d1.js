import{g as f}from"./gds-element-24e794df.js";import{s as l}from"./style-expression-property-45d22dc5.js";import{G as h}from"./button-22289109.js";import{i as b}from"./lit-element-2a5e401f.js";import"./chevron-bottom-27e6f9ff.js";import{DefaultParams as g}from"./button.stories-e98658a3.js";import"./_commonjsHelpers-725317a4.js";import"./watch-c4961afe.js";import"./static-50b4adfb.js";import"./query-b9d3c2af.js";import"./when-cf7256a5.js";import"./if-defined-39fa3d49.js";import"./constrain-slots-08d8606c.js";import"./form-control-0ab31465.js";import"./directive-12249aa5.js";import"./lit-localize-87611c26.js";import"./transitional-styles-3f5f5b40.js";import"./tokens.style-d981605a.js";import"./icon-9eb1b5fc.js";import"./grid-db0ce19f.js";import"./text-b8d2be69.js";import"./divider-31768189.js";import"./flex-2fee8e41.js";import"./arrow-up-bbea11c9.js";import"./arrow-right-62764848.js";const y=b`
  :host {
    display: inline-flex;
    position: fixed;
    inset: auto 2rem 2rem auto;
  }

  .button {
    box-shadow: var(--gds-shadow-m);
    height: calc(var(--_size) + 0.5rem);
  }
`;var v=Object.defineProperty,x=Object.getOwnPropertyDescriptor,i=(t,r,p,s)=>{for(var e=s>1?void 0:s?x(r,p):r,n=t.length-1,m;n>=0;n--)(m=t[n])&&(e=(s?m(r,p,e):m(e))||e);return s&&e&&v(r,p,e),e};let o=class extends h{connectedCallback(){super.connectedCallback(),this._dynamicStylesController.inject("FAB_styles",y)}};i([l({valueTemplate:t=>t})],o.prototype,"position",2);i([l({valueTemplate:t=>t})],o.prototype,"transform",2);i([l({valueTemplate:t=>t})],o.prototype,"inset",2);o=i([f("gds-fab")],o);const R={title:"Docs/Components/Button/FAB",component:"gds-fab",tags:["autodocs"],parameters:{docs:{description:{component:`The Floating Action Button is used for functions central to the user experience, such as
support and help features that needs to be accessible at all times.

The button is always floating visible in the users viewport, typically in the lower right
corner. This button can be used with an icon only.`}}}},w={...g,parameters:{docs:{source:{format:!0,type:"dynamic"},story:{height:"200px"}},controls:{expanded:!0}},args:{innerHTML:`See what's new! <div slot="trail" style="width:8px;height:8px;border-radius:8px;background-color:green;box-shadow:0 0 0 4px rgba(0,85,0,0.3)"></div>`}},a={...w};var c,u,d;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...DefaultParams
}`,...(d=(u=a.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const V=["Usage"];export{a as Usage,V as __namedExportsOrder,R as default};
