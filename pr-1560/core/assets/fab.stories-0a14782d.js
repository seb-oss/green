import{g as D,G as O,h as B}from"./gds-element-24e794df.js";import{s as d}from"./style-expression-property-45d22dc5.js";import{G as A}from"./button-21417373.js";import{i as C}from"./lit-element-2a5e401f.js";import"./chevron-bottom-27e6f9ff.js";import"./bubbles-12acac7e.js";import{n as j}from"./static-50b4adfb.js";import{t as F}from"./tokens.style-681e2422.js";import{DefaultParams as G}from"./button.stories-3d5c6b11.js";import"./_commonjsHelpers-725317a4.js";import"./watch-c4961afe.js";import"./query-b9d3c2af.js";import"./when-cf7256a5.js";import"./if-defined-39fa3d49.js";import"./constrain-slots-08d8606c.js";import"./form-control-0ab31465.js";import"./directive-12249aa5.js";import"./lit-localize-87611c26.js";import"./transitional-styles-3f5f5b40.js";import"./icon-9eb1b5fc.js";import"./grid-9f03a256.js";import"./text-4850abf0.js";import"./divider-cd9c9ded.js";import"./flex-2da73efe.js";import"./arrow-up-bbea11c9.js";import"./arrow-right-62764848.js";const $=C`
  :host {
    display: contents;
  }

  .button {
    box-shadow: var(--gds-shadow-m);
    position: fixed;
    bottom: var(--gds-space-3xl);
    right: var(--gds-space-3xl);
    block-size: calc(var(--_block-size) + var(--gds-space-xs));
  }
`;var E=Object.defineProperty,I=Object.getOwnPropertyDescriptor,g=(s,t,e,n)=>{for(var a=n>1?void 0:n?I(t,e):t,o=s.length-1,i;o>=0;o--)(i=s[o])&&(a=(n?i(t,e,a):i(a))||a);return n&&a&&E(t,e,a),a};let r=class extends A{connectedCallback(){super.connectedCallback(),this._dynamicStylesController.inject("FAB_styles",$)}};g([d({valueTemplate:s=>s})],r.prototype,"position",2);g([d({valueTemplate:s=>s})],r.prototype,"transform",2);g([d({valueTemplate:s=>s,selector:'[part="_button"]'})],r.prototype,"top",2);g([d({valueTemplate:s=>s,selector:'[part="_button"]'})],r.prototype,"bottom",2);g([d({valueTemplate:s=>s,selector:'[part="_button"]'})],r.prototype,"left",2);g([d({valueTemplate:s=>s,selector:'[part="_button"]'})],r.prototype,"right",2);r=g([D("gds-fab")],r);const R=C`
  :host {
    display: contents;
  }

  :host-context([rank='primary']) [part='signal'] {
    background-color: var(--gds-color-l3-background-quarternary);

    &::before {
      background-color: var(--gds-color-l3-states-dark-hover);
    }
  }

  [part='signal'] {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 6px;
    height: 6px;
    border-radius: var(--gds-space-max);
    // background-color: var(--gds-color-l3c-background-positive);
    background-color: currentColor;
    transition: all 0.4s;

    &::before {
      display: flex;
      position: absolute;
      content: '';
      inset: -4px;
      border-radius: inherit;
      background-color: color-mix(in srgb, currentColor, transparent 80%);
      animation: signal 3s ease-in-out infinite;
    }
  }

  @keyframes signal {
    0% {
      transform: scale(2);
      opacity: 0;
    }
    60% {
      transform: scale(1);
      opacity: 1;
    }
    100% {
      transform: scale(3);
      opacity: 0;
    }
  }
`;var U=Object.defineProperty,V=Object.getOwnPropertyDescriptor,q=(s,t,e,n)=>{for(var a=n>1?void 0:n?V(t,e):t,o=s.length-1,i;o>=0;o--)(i=s[o])&&(a=(n?i(t,e,a):i(a))||a);return n&&a&&U(t,e,a),a};let m=class extends O{render(){return j`<div part="signal"></div>`}};m.styles=[F,R];m=q([D("gds-signal")],m);const fs={title:"Docs/Components/Button/FAB",component:"gds-fab",tags:["autodocs"],parameters:{docs:{description:{component:`The Floating Action Button is used for functions central to the user experience, such as
support and help features that needs to be accessible at all times.

The button is always floating visible in the users viewport, typically in the lower right
corner. This button can be used with an icon only.`}}}},p={...G,parameters:{docs:{source:{format:!0,type:"dynamic"},story:{height:"200px"}},controls:{expanded:!0}},args:{innerHTML:`See what's new! <gds-signal slot="trail"></gds-signal>`}},c={...p},b={...p,name:"Signal ",parameters:{...p.parameters,controls:{include:[]}},render:s=>B`
    <gds-flex height="600px">
      <gds-fab bottom="300px">
        Primary <gds-signal slot="trail"></gds-signal>
      </gds-fab>
      <gds-fab bottom="200px" rank="secondary">
        Secondary <gds-signal slot="trail"></gds-signal>
      </gds-fab>
      <gds-fab bottom="100px" rank="tertiary">
        Tertiary <gds-signal slot="trail"></gds-signal>
      </gds-fab>

      <gds-fab bottom="300px" right="300px" variant="positive">
        Primary <gds-signal slot="trail"></gds-signal>
      </gds-fab>
      <gds-fab bottom="200px" right="300px" variant="positive" rank="secondary">
        Secondary <gds-signal slot="trail"></gds-signal>
      </gds-fab>
      <gds-fab bottom="100px" right="300px" variant="positive" rank="tertiary">
        Tertiary <gds-signal slot="trail"></gds-signal>
      </gds-fab>

      <gds-fab bottom="300px" right="500px" variant="negative">
        Primary <gds-signal slot="trail"></gds-signal>
      </gds-fab>
      <gds-fab bottom="200px" right="500px" variant="negative" rank="secondary">
        Secondary <gds-signal slot="trail"></gds-signal>
      </gds-fab>
      <gds-fab bottom="100px" right="500px" variant="negative" rank="tertiary">
        Tertiary <gds-signal slot="trail"></gds-signal>
      </gds-fab>
    </gds-flex>
  `},l={...p,name:"Icon Button",parameters:{...p.parameters,controls:{include:[]}},render:s=>B`
    <gds-flex height="600px">
      <gds-fab bottom="300px">
        <gds-icon-bubbles></gds-icon-bubbles>
      </gds-fab>
      <gds-fab bottom="200px" rank="secondary">
        <gds-icon-bubbles></gds-icon-bubbles>
      </gds-fab>
      <gds-fab bottom="100px" rank="tertiary">
        <gds-icon-bubbles></gds-icon-bubbles>
      </gds-fab>

      <gds-fab bottom="300px" right="300px" size="medium" variant="positive">
        <gds-icon-bubbles></gds-icon-bubbles>
      </gds-fab>
      <gds-fab
        bottom="200px"
        right="300px"
        size="medium"
        variant="positive"
        rank="secondary"
      >
        <gds-icon-bubbles></gds-icon-bubbles>
      </gds-fab>
      <gds-fab
        bottom="100px"
        right="300px"
        size="medium"
        variant="positive"
        rank="tertiary"
      >
        <gds-icon-bubbles></gds-icon-bubbles>
      </gds-fab>

      <gds-fab bottom="300px" right="500px" size="small" variant="negative">
        <gds-icon-bubbles></gds-icon-bubbles>
      </gds-fab>
      <gds-fab
        bottom="200px"
        right="500px"
        size="small"
        variant="negative"
        rank="secondary"
      >
        <gds-icon-bubbles></gds-icon-bubbles>
      </gds-fab>
      <gds-fab
        bottom="100px"
        right="500px"
        size="small"
        variant="negative"
        rank="tertiary"
      >
        <gds-icon-bubbles></gds-icon-bubbles>
      </gds-fab>
    </gds-flex>
  `};var f,u,x;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  ...DefaultParams
}`,...(x=(u=c.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var v,y,h,k,P;b.parameters={...b.parameters,docs:{...(v=b.parameters)==null?void 0:v.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Signal ',
  parameters: {
    ...DefaultParams.parameters,
    controls: {
      include: []
    }
  },
  render: args => html\`
    <gds-flex height="600px">
      <gds-fab bottom="300px">
        Primary <gds-signal slot="trail"></gds-signal>
      </gds-fab>
      <gds-fab bottom="200px" rank="secondary">
        Secondary <gds-signal slot="trail"></gds-signal>
      </gds-fab>
      <gds-fab bottom="100px" rank="tertiary">
        Tertiary <gds-signal slot="trail"></gds-signal>
      </gds-fab>

      <gds-fab bottom="300px" right="300px" variant="positive">
        Primary <gds-signal slot="trail"></gds-signal>
      </gds-fab>
      <gds-fab bottom="200px" right="300px" variant="positive" rank="secondary">
        Secondary <gds-signal slot="trail"></gds-signal>
      </gds-fab>
      <gds-fab bottom="100px" right="300px" variant="positive" rank="tertiary">
        Tertiary <gds-signal slot="trail"></gds-signal>
      </gds-fab>

      <gds-fab bottom="300px" right="500px" variant="negative">
        Primary <gds-signal slot="trail"></gds-signal>
      </gds-fab>
      <gds-fab bottom="200px" right="500px" variant="negative" rank="secondary">
        Secondary <gds-signal slot="trail"></gds-signal>
      </gds-fab>
      <gds-fab bottom="100px" right="500px" variant="negative" rank="tertiary">
        Tertiary <gds-signal slot="trail"></gds-signal>
      </gds-fab>
    </gds-flex>
  \`
}`,...(h=(y=b.parameters)==null?void 0:y.docs)==null?void 0:h.source},description:{story:`The FAB can be used with a signal to indicate that there is something new or updated.

Signal style matches the button rank and variant.`,...(P=(k=b.parameters)==null?void 0:k.docs)==null?void 0:P.description}}};var _,T,w,S,z;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Icon Button',
  parameters: {
    ...DefaultParams.parameters,
    controls: {
      include: []
    }
  },
  render: args => html\`
    <gds-flex height="600px">
      <gds-fab bottom="300px">
        <gds-icon-bubbles></gds-icon-bubbles>
      </gds-fab>
      <gds-fab bottom="200px" rank="secondary">
        <gds-icon-bubbles></gds-icon-bubbles>
      </gds-fab>
      <gds-fab bottom="100px" rank="tertiary">
        <gds-icon-bubbles></gds-icon-bubbles>
      </gds-fab>

      <gds-fab bottom="300px" right="300px" size="medium" variant="positive">
        <gds-icon-bubbles></gds-icon-bubbles>
      </gds-fab>
      <gds-fab
        bottom="200px"
        right="300px"
        size="medium"
        variant="positive"
        rank="secondary"
      >
        <gds-icon-bubbles></gds-icon-bubbles>
      </gds-fab>
      <gds-fab
        bottom="100px"
        right="300px"
        size="medium"
        variant="positive"
        rank="tertiary"
      >
        <gds-icon-bubbles></gds-icon-bubbles>
      </gds-fab>

      <gds-fab bottom="300px" right="500px" size="small" variant="negative">
        <gds-icon-bubbles></gds-icon-bubbles>
      </gds-fab>
      <gds-fab
        bottom="200px"
        right="500px"
        size="small"
        variant="negative"
        rank="secondary"
      >
        <gds-icon-bubbles></gds-icon-bubbles>
      </gds-fab>
      <gds-fab
        bottom="100px"
        right="500px"
        size="small"
        variant="negative"
        rank="tertiary"
      >
        <gds-icon-bubbles></gds-icon-bubbles>
      </gds-fab>
    </gds-flex>
  \`
}`,...(w=(T=l.parameters)==null?void 0:T.docs)==null?void 0:w.source},description:{story:"The FAB can be used with all the `gds-button` properties.",...(z=(S=l.parameters)==null?void 0:S.docs)==null?void 0:z.description}}};const us=["Usage","RanksAndVariants","IconButton"];export{l as IconButton,b as RanksAndVariants,c as Usage,us as __namedExportsOrder,fs as default};
