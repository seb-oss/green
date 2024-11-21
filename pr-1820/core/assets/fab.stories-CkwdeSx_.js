import{h as o}from"./custom-element-scoping-b4lD3laR.js";import"./fab-DVqCKLke.js";import"./chevron-bottom-CTTxLLl8.js";import"./bubbles-Dix-QY_0.js";import"./signal-DVgaf-6n.js";import{DefaultParams as _}from"./button.stories-DoEOtXYB.js";import"./lit-element-C_s9q329.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./style-expression-property-CYg4CGI6.js";import"./button-DE_BYt3a.js";import"./query-p8xgzTDt.js";import"./class-map-Bz98xO8-.js";import"./directive-CF8sV3Lr.js";import"./if-defined-Ct9lF4W9.js";import"./when-BR7zwNJC.js";import"./static-_ukc2i0J.js";import"./tokens.style-BpCJ0qXS.js";import"./transitional-styles-D3kSUer7.js";import"./observe-light-dom-CmJPHUQ4.js";import"./runtime-CMQcyTl6.js";import"./watch-tFciLXSI.js";import"./icon-BAGUC4Iy.js";import"./grid-COefTs6x.js";import"./container-CK26CIpB.js";import"./text-C_f3H6Qx.js";import"./default-typography.styles-Bl0hQgz1.js";import"./divider-Bmuiu3Tk.js";import"./flex-CCeRRtYR.js";import"./credit-card-V3vs1n1r.js";import"./arrow-up-BbHnO7aD.js";import"./arrow-down-xjx4uUN-.js";import"./arrow-right-STNOkwn4.js";const fa={title:"Components/FAB",component:"gds-fab",tags:["autodocs"],parameters:{docs:{description:{component:`The Floating Action Button is used for functions central to the user experience, such as
support and help features that needs to be accessible at all times.

The button is always floating visible in the users viewport, typically in the lower right
corner. This button can be used with an icon only.`}}}},a={..._,parameters:{docs:{source:{format:!0,type:"dynamic"},story:{height:"200px",position:"relative"}},controls:{expanded:!0}},args:{innerHTML:`See what's new! <gds-signal slot="trail"></gds-signal>`}},d={...a},s={...a,name:"Signal ",parameters:{...a.parameters,controls:{include:[]}},render:i=>o`
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
  `},n={...a,name:"Icon Button",parameters:{...a.parameters,controls:{include:[]}},render:i=>o`
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
  `},t={...a,name:"Color",parameters:{...a.parameters,controls:{include:[]}},render:i=>o`
    <gds-flex height="300px">
      <gds-fab inset="auto 48px 48px auto" rank="primary">
        Secondary
        <gds-signal slot="trail" level="3" color="positive"></gds-signal>
      </gds-fab>
    </gds-flex>
  `},e={...a,name:"Position",parameters:{...a.parameters,controls:{include:[]}},render:i=>o`
    <gds-flex height="300px">
      <gds-fab inset="auto 48px 48px auto"> I'm a FAB </gds-fab>
    </gds-flex>
  `},r={...a,name:"z-index",parameters:{...a.parameters,controls:{include:[]}},render:i=>o`
    <gds-flex height="300px">
      <gds-fab inset="auto 48px 48px auto" z-index="20" rank="secondary">
        Show aboce other things
      </gds-fab>
    </gds-flex>
  `};var g,l,p;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
  ...DefaultParams
}`,...(p=(l=d.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var b,u,c,m,f;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(c=(u=s.parameters)==null?void 0:u.docs)==null?void 0:c.source},description:{story:`The FAB can be used with a signal to indicate that there is something new or updated.

Signal style matches the button rank and variant.`,...(f=(m=s.parameters)==null?void 0:m.docs)==null?void 0:f.description}}};var x,h,y,v,k;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(y=(h=n.parameters)==null?void 0:h.docs)==null?void 0:y.source},description:{story:"The FAB can be used with all the `gds-button` properties.",...(k=(v=n.parameters)==null?void 0:v.docs)==null?void 0:k.description}}};var S,P,z,D,w;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
        <gds-signal slot="trail" level="3" color="positive"></gds-signal>
      </gds-fab>
    </gds-flex>
  \`
}`,...(z=(P=t.parameters)==null?void 0:P.docs)==null?void 0:z.source},description:{story:"Default color of the signal within the FAB is the same as the button color.\n\nIf you want to change the color of the signal, you can use the `color` property.",...(w=(D=t.parameters)==null?void 0:D.docs)==null?void 0:w.description}}};var B,T,A,I,F;e.parameters={...e.parameters,docs:{...(B=e.parameters)==null?void 0:B.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Position',
  parameters: {
    ...DefaultParams.parameters,
    controls: {
      include: []
    }
  },
  render: args => html\`
    <gds-flex height="300px">
      <gds-fab inset="auto 48px 48px auto"> I'm a FAB </gds-fab>
    </gds-flex>
  \`
}`,...(A=(T=e.parameters)==null?void 0:T.docs)==null?void 0:A.source},description:{story:`You can position the FAB using the \`inset\` property.
It takes all the default CSS inset values.

e.g

\`\`\`html
<gds-fab inset="auto 48px 48px auto">
   I'm a FAB
</gds-fab>
\`\`\``,...(F=(I=e.parameters)==null?void 0:I.docs)==null?void 0:F.description}}};var C,R,U,V,Z;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'z-index',
  parameters: {
    ...DefaultParams.parameters,
    controls: {
      include: []
    }
  },
  render: args => html\`
    <gds-flex height="300px">
      <gds-fab inset="auto 48px 48px auto" z-index="20" rank="secondary">
        Show aboce other things
      </gds-fab>
    </gds-flex>
  \`
}`,...(U=(R=r.parameters)==null?void 0:R.docs)==null?void 0:U.source},description:{story:'To change the z order fo the FAB you can use the `z-index` property.\nIt takes all the default CSS `z-index` values.\n\ne.g\n\n```html\n<gds-fab inset="auto 48px 48px auto" z-index="20">\n   Show above all\n</gds-fab>\n```',...(Z=(V=r.parameters)==null?void 0:V.docs)==null?void 0:Z.description}}};const xa=["Usage","RanksAndVariants","IconButton","Color","Position","ZIndex"];export{t as Color,n as IconButton,e as Position,s as RanksAndVariants,d as Usage,r as ZIndex,xa as __namedExportsOrder,fa as default};
