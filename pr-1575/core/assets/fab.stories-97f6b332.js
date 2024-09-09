import{g as G,G as E,h as f}from"./gds-element-24e794df.js";import{s as c}from"./style-expression-property-45d22dc5.js";import{G as R}from"./button-33f6b31b.js";import{i as $}from"./lit-element-2a5e401f.js";import"./chevron-bottom-27e6f9ff.js";import"./bubbles-12acac7e.js";import{n as U}from"./static-50b4adfb.js";import{t as V}from"./tokens.style-681e2422.js";import{DefaultParams as H}from"./button.stories-f9bde76c.js";import"./_commonjsHelpers-725317a4.js";import"./watch-c4961afe.js";import"./query-b9d3c2af.js";import"./when-cf7256a5.js";import"./if-defined-39fa3d49.js";import"./class-map-43969d56.js";import"./directive-12249aa5.js";import"./constrain-slots-08d8606c.js";import"./form-control-0ab31465.js";import"./lit-localize-87611c26.js";import"./transitional-styles-3f5f5b40.js";import"./icon-9eb1b5fc.js";import"./grid-9f03a256.js";import"./text-4850abf0.js";import"./divider-cd9c9ded.js";import"./flex-ee74ccc7.js";import"./container-e86e3029.js";import"./arrow-up-bbea11c9.js";import"./arrow-right-62764848.js";const L=$`
  :host {
    display: contents;
  }

  .button {
    box-shadow: var(--gds-shadow-m);
    position: fixed;
    inset: auto var(--gds-space-3xl) var(--gds-space-3xl) auto;
    block-size: calc(var(--_block-size) + var(--gds-space-xs));
  }
`;var M=Object.defineProperty,q=Object.getOwnPropertyDescriptor,m=(a,t,e,n)=>{for(var s=n>1?void 0:n?q(t,e):t,r=a.length-1,o;r>=0;r--)(o=a[r])&&(s=(n?o(t,e,s):o(s))||s);return n&&s&&M(t,e,s),s};let p=class extends R{connectedCallback(){super.connectedCallback(),this._dynamicStylesController.inject("FAB_styles",L)}};m([c({valueTemplate:a=>a})],p.prototype,"position",2);m([c({valueTemplate:a=>a})],p.prototype,"transform",2);m([c({valueTemplate:a=>a,selector:'[part="_button"]'})],p.prototype,"inset",2);p=m([G("gds-fab")],p);const J=$`
  :host {
    display: contents;
  }

  [part='signal'] {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 6px;
    height: 6px;
    border-radius: var(--gds-space-max);
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
`;var K=Object.defineProperty,N=Object.getOwnPropertyDescriptor,I=(a,t,e,n)=>{for(var s=n>1?void 0:n?N(t,e):t,r=a.length-1,o;r>=0;r--)(o=a[r])&&(s=(n?o(t,e,s):o(s))||s);return n&&s&&K(t,e,s),s};let u=class extends E{render(){return U`<div part="signal"></div>`}};u.styles=[V,J];I([c({valueTemplate:a=>`var(--gds-color-${a})`,selector:'[part="signal"]'})],u.prototype,"color",2);u=I([G("gds-signal")],u);const wa={title:"Docs/Components/Button/FAB",component:"gds-fab",tags:["autodocs"],parameters:{docs:{description:{component:`The Floating Action Button is used for functions central to the user experience, such as
support and help features that needs to be accessible at all times.

The button is always floating visible in the users viewport, typically in the lower right
corner. This button can be used with an icon only.`}}}},i={...H,parameters:{docs:{source:{format:!0,type:"dynamic"},story:{height:"200px"}},controls:{expanded:!0}},args:{innerHTML:`See what's new! <gds-signal slot="trail"></gds-signal>`}},b={...i},d={...i,name:"Signal ",parameters:{...i.parameters,controls:{include:[]}},render:a=>f`
    <gds-flex height="600px">
      <gds-fab inset="auto 100px 300px auto">
        Primary <gds-signal slot="trail"></gds-signal>
      </gds-fab>
      <gds-fab inset="auto 100px 200px auto" rank="secondary">
        Secondary <gds-signal slot="trail"></gds-signal>
      </gds-fab>
      <gds-fab inset="auto 100px 100px auto" rank="tertiary">
        Tertiary <gds-signal slot="trail"></gds-signal>
      </gds-fab>

      <gds-fab inset="auto 300px 300px auto" variant="positive">
        Primary <gds-signal slot="trail"></gds-signal>
      </gds-fab>
      <gds-fab
        inset="auto 300px 200px auto"
        variant="positive"
        rank="secondary"
      >
        Secondary <gds-signal slot="trail"></gds-signal>
      </gds-fab>
      <gds-fab inset="auto 300px 100px auto" variant="positive" rank="tertiary">
        Tertiary <gds-signal slot="trail"></gds-signal>
      </gds-fab>

      <gds-fab inset="auto 500px 300px auto" variant="negative">
        Primary <gds-signal slot="trail"></gds-signal>
      </gds-fab>
      <gds-fab
        inset="auto 500px 200px auto"
        variant="negative"
        rank="secondary"
      >
        Secondary <gds-signal slot="trail"></gds-signal>
      </gds-fab>
      <gds-fab inset="auto 500px 100px auto" variant="negative" rank="tertiary">
        Tertiary <gds-signal slot="trail"></gds-signal>
      </gds-fab>
    </gds-flex>
  `},l={...i,name:"Icon Button",parameters:{...i.parameters,controls:{include:[]}},render:a=>f`
    <gds-flex height="600px">
      <gds-fab inset="auto 100px 300px auto">
        <gds-icon-bubbles></gds-icon-bubbles>
      </gds-fab>
      <gds-fab inset="auto 100px 200px auto" rank="secondary">
        <gds-icon-bubbles></gds-icon-bubbles>
      </gds-fab>
      <gds-fab inset="auto 100px 100px auto" rank="tertiary">
        <gds-icon-bubbles></gds-icon-bubbles>
      </gds-fab>

      <gds-fab inset="auto 300px 300px auto" size="medium" variant="positive">
        <gds-icon-bubbles></gds-icon-bubbles>
      </gds-fab>
      <gds-fab
        inset="auto 300px 200px auto"
        size="medium"
        variant="positive"
        rank="secondary"
      >
        <gds-icon-bubbles></gds-icon-bubbles>
      </gds-fab>
      <gds-fab
        inset="auto 300px 100px auto"
        size="medium"
        variant="positive"
        rank="tertiary"
      >
        <gds-icon-bubbles></gds-icon-bubbles>
      </gds-fab>

      <gds-fab inset="auto 500px 300px auto" size="small" variant="negative">
        <gds-icon-bubbles></gds-icon-bubbles>
      </gds-fab>
      <gds-fab
        inset="auto 500px 200px auto"
        size="small"
        variant="negative"
        rank="secondary"
      >
        <gds-icon-bubbles></gds-icon-bubbles>
      </gds-fab>
      <gds-fab
        inset="auto 500px 100px auto"
        size="small"
        variant="negative"
        rank="tertiary"
      >
        <gds-icon-bubbles></gds-icon-bubbles>
      </gds-fab>
    </gds-flex>
  `},g={...i,name:"Color",parameters:{...i.parameters,controls:{include:[]}},render:a=>f`
    <gds-flex height="300px">
      <gds-fab inset="auto 48px 48px auto" rank="primary">
        Secondary
        <gds-signal slot="trail" color="l3c-content-positive"></gds-signal>
      </gds-fab>
    </gds-flex>
  `};var x,y,v;b.parameters={...b.parameters,docs:{...(x=b.parameters)==null?void 0:x.docs,source:{originalSource:`{
  ...DefaultParams
}`,...(v=(y=b.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var h,k,P,w,S;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
      <gds-fab inset="auto 100px 300px auto">
        Primary <gds-signal slot="trail"></gds-signal>
      </gds-fab>
      <gds-fab inset="auto 100px 200px auto" rank="secondary">
        Secondary <gds-signal slot="trail"></gds-signal>
      </gds-fab>
      <gds-fab inset="auto 100px 100px auto" rank="tertiary">
        Tertiary <gds-signal slot="trail"></gds-signal>
      </gds-fab>

      <gds-fab inset="auto 300px 300px auto" variant="positive">
        Primary <gds-signal slot="trail"></gds-signal>
      </gds-fab>
      <gds-fab
        inset="auto 300px 200px auto"
        variant="positive"
        rank="secondary"
      >
        Secondary <gds-signal slot="trail"></gds-signal>
      </gds-fab>
      <gds-fab inset="auto 300px 100px auto" variant="positive" rank="tertiary">
        Tertiary <gds-signal slot="trail"></gds-signal>
      </gds-fab>

      <gds-fab inset="auto 500px 300px auto" variant="negative">
        Primary <gds-signal slot="trail"></gds-signal>
      </gds-fab>
      <gds-fab
        inset="auto 500px 200px auto"
        variant="negative"
        rank="secondary"
      >
        Secondary <gds-signal slot="trail"></gds-signal>
      </gds-fab>
      <gds-fab inset="auto 500px 100px auto" variant="negative" rank="tertiary">
        Tertiary <gds-signal slot="trail"></gds-signal>
      </gds-fab>
    </gds-flex>
  \`
}`,...(P=(k=d.parameters)==null?void 0:k.docs)==null?void 0:P.source},description:{story:`The FAB can be used with a signal to indicate that there is something new or updated.

Signal style matches the button rank and variant.`,...(S=(w=d.parameters)==null?void 0:w.docs)==null?void 0:S.description}}};var _,D,T,z,C;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
      <gds-fab inset="auto 100px 300px auto">
        <gds-icon-bubbles></gds-icon-bubbles>
      </gds-fab>
      <gds-fab inset="auto 100px 200px auto" rank="secondary">
        <gds-icon-bubbles></gds-icon-bubbles>
      </gds-fab>
      <gds-fab inset="auto 100px 100px auto" rank="tertiary">
        <gds-icon-bubbles></gds-icon-bubbles>
      </gds-fab>

      <gds-fab inset="auto 300px 300px auto" size="medium" variant="positive">
        <gds-icon-bubbles></gds-icon-bubbles>
      </gds-fab>
      <gds-fab
        inset="auto 300px 200px auto"
        size="medium"
        variant="positive"
        rank="secondary"
      >
        <gds-icon-bubbles></gds-icon-bubbles>
      </gds-fab>
      <gds-fab
        inset="auto 300px 100px auto"
        size="medium"
        variant="positive"
        rank="tertiary"
      >
        <gds-icon-bubbles></gds-icon-bubbles>
      </gds-fab>

      <gds-fab inset="auto 500px 300px auto" size="small" variant="negative">
        <gds-icon-bubbles></gds-icon-bubbles>
      </gds-fab>
      <gds-fab
        inset="auto 500px 200px auto"
        size="small"
        variant="negative"
        rank="secondary"
      >
        <gds-icon-bubbles></gds-icon-bubbles>
      </gds-fab>
      <gds-fab
        inset="auto 500px 100px auto"
        size="small"
        variant="negative"
        rank="tertiary"
      >
        <gds-icon-bubbles></gds-icon-bubbles>
      </gds-fab>
    </gds-flex>
  \`
}`,...(T=(D=l.parameters)==null?void 0:D.docs)==null?void 0:T.source},description:{story:"The FAB can be used with all the `gds-button` properties.",...(C=(z=l.parameters)==null?void 0:z.docs)==null?void 0:C.description}}};var B,O,A,F,j;g.parameters={...g.parameters,docs:{...(B=g.parameters)==null?void 0:B.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Color',
  parameters: {
    ...DefaultParams.parameters,
    controls: {
      include: []
    }
  },
  render: args => html\`
    <gds-flex height="300px">
      <gds-fab inset="auto 48px 48px auto" rank="primary">
        Secondary
        <gds-signal slot="trail" color="l3c-content-positive"></gds-signal>
      </gds-fab>
    </gds-flex>
  \`
}`,...(A=(O=g.parameters)==null?void 0:O.docs)==null?void 0:A.source},description:{story:"Default color of the signal within the FAB is the same as the button color.\n\nIf you want to change the color of the signal, you can use the `color` property.",...(j=(F=g.parameters)==null?void 0:F.docs)==null?void 0:j.description}}};const Sa=["Usage","RanksAndVariants","IconButton","Color"];export{g as Color,l as IconButton,d as RanksAndVariants,b as Usage,Sa as __namedExportsOrder,wa as default};
