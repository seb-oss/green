import{g as h}from"./gds-element-54cd6e2a.js";import{s as c}from"./style-expression-property-89161d08.js";import{G as x}from"./button-0a12c907.js";import{i as b}from"./lit-element-71e04f06.js";import"./chevron-bottom-433ce854.js";import"./_commonjsHelpers-725317a4.js";import"./watch-c4961afe.js";import"./static-c6782857.js";import"./query-b9d3c2af.js";import"./when-cf7256a5.js";import"./if-defined-e4b5fcf9.js";import"./class-map-4ef1884f.js";import"./directive-12249aa5.js";import"./constrain-slots-08d8606c.js";import"./transitional-styles-dbd95809.js";import"./tokens.style-880811e7.js";import"./lit-localize-87611c26.js";import"./icon-cbb1cac4.js";const f=b`
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
`;var g=Object.defineProperty,y=Object.getOwnPropertyDescriptor,p=(t,r,n,s)=>{for(var e=s>1?void 0:s?y(r,n):r,i=t.length-1,m;i>=0;i--)(m=t[i])&&(e=(s?m(r,n,e):m(e))||e);return s&&e&&g(r,n,e),e};let o=class extends x{connectedCallback(){super.connectedCallback(),this._dynamicStylesController.inject("FAB_styles",f)}};p([c({valueTemplate:t=>t})],o.prototype,"position",2);p([c({valueTemplate:t=>t})],o.prototype,"transform",2);p([c({valueTemplate:t=>t})],o.prototype,"inset",2);o=p([h("gds-fab")],o);const M={title:"Docs/Components/Button/FAB",component:"gds-fab",tags:["autodocs"],parameters:{docs:{description:{component:`The Floating Action Button is used for functions central to the user experience, such as
support and help features that needs to be accessible at all times.

The button is always floating visible in the users viewport, typically in the lower right
corner. This button can be used with an icon only.`}}}},v={parameters:{docs:{source:{format:!0,type:"dynamic"},story:{height:"200px"}},controls:{expanded:!0}},args:{innerHTML:`See what's new! <div slot="trail" style="width:8px;height:8px;border-radius:8px;background-color:green;box-shadow:0 0 0 4px rgba(0,85,0,0.3)"></div>`}},a={...v};var l,u,d;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  ...DefaultParams
}`,...(d=(u=a.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const q=["Usage"];export{a as Usage,q as __namedExportsOrder,M as default};
