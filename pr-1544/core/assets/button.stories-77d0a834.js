import{x as r,T as c}from"./lit-element-71e04f06.js";import"./button-4f199ecb.js";import"./grid-8c8887c4.js";import"./arrow-up-b403b886.js";import"./arrow-right-f903942d.js";import"./static-c6782857.js";import"./gds-element-54cd6e2a.js";import"./_commonjsHelpers-725317a4.js";import"./query-b9d3c2af.js";import"./when-cf7256a5.js";import"./if-defined-e4b5fcf9.js";import"./class-map-4ef1884f.js";import"./directive-12249aa5.js";import"./constrain-slots-08d8606c.js";import"./transitional-styles-dbd95809.js";import"./tokens.style-880811e7.js";import"./lit-localize-87611c26.js";import"./watch-c4961afe.js";import"./style-expression-property-89161d08.js";import"./icon-cbb1cac4.js";const ct={title:"Docs/Components/Button",component:"gds-button",parameters:{layout:"centered",docs:{description:{component:`A button serve as an interactive element that enables users to perform an action or make
a choice with a simple click or tap. To decide which kind of button/buttons and putting
them in the right order is key to make sure users know how to take the right action.
A good rule of thumb is to use only one primary action in each context.`}}},tags:["autodocs"]},n={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},argTypes:{rank:{options:["primary","secondary","tertiary"],control:{type:"select"}},variant:{options:["neutral","positive","negative"],control:{type:"select"}},size:{options:["small","medium","large"],control:{type:"select"}},target:{options:["_self","_blank","_parent","_top"],control:{type:"select"}},rel:{control:{type:"text"}},download:{control:{type:"text"}}},args:{innerText:"Button"}},u={...n},a={...n,name:"Ranks and variants",parameters:{...n.parameters,controls:{include:[]}},render:t=>r`
    <gds-grid columns="3" gap="m" row-gap="m">
      <div>
        <gds-button>Neutral primary</gds-button>
      </div>
      <div>
        <gds-button rank="secondary">Neutral secondary</gds-button>
      </div>
      <div>
        <gds-button rank="tertiary">Neutral tertiary</gds-button>
      </div>
      <div>
        <gds-button variant="positive">Positive primary</gds-button>
      </div>
      <div>
        <gds-button variant="positive" rank="secondary">
          Positive secondary
        </gds-button>
      </div>
      <div>
        <gds-button variant="positive" rank="tertiary">
          Positive tertiary
        </gds-button>
      </div>
      <div>
        <gds-button variant="negative">Negative primary</gds-button>
      </div>
      <div>
        <gds-button variant="negative" rank="secondary">
          Negative secondary
        </gds-button>
      </div>
      <div>
        <gds-button variant="negative" rank="tertiary">
          Negative tertiary
        </gds-button>
      </div>
    </gds-grid>
  `},e={...n,parameters:{...n.parameters,controls:{include:["rank","variant"]}},render:t=>r`
    <gds-button .rank=${t.rank} .variant=${t.variant} size="small"
      >Small</gds-button
    >
    <gds-button .rank=${t.rank} .variant=${t.variant}>Medium</gds-button>
    <gds-button .rank=${t.rank} .variant=${t.variant} size="large"
      >Large</gds-button
    >
  `},o={...n,name:"Using icons in button",parameters:{...n.parameters,controls:{include:["rank","variant","size"]}},render:t=>r`
    <gds-button .rank=${t.rank} .variant=${t.variant} .size=${t.size}>
      <gds-icon-arrow-down slot="lead"></gds-icon-arrow-down>
      Leading icon
    </gds-button>

    <gds-button .rank=${t.rank} .variant=${t.variant} .size=${t.size}>
      Trailing icon
      <gds-icon-arrow-up slot="trail"></gds-icon-arrow-up>
    </gds-button>
  `},s={...n,name:"Icon button",parameters:{...n.parameters,controls:{include:["rank","variant"]}},render:t=>r`
    <gds-button .rank=${t.rank} .variant=${t.variant} size="small">
      <gds-icon-arrow-right />
    </gds-button>

    <gds-button .rank=${t.rank} .variant=${t.variant}>
      <gds-icon-arrow-right />
    </gds-button>

    <gds-button .rank=${t.rank} .variant=${t.variant} size="large">
      <gds-icon-arrow-right />
    </gds-button>
  `},i={...n,parameters:{...n.parameters,controls:{include:[]}},render:()=>r`<gds-button disabled>Primary</gds-button>

      <gds-button rank="secondary" variant="positive" disabled>
        Secondary
      </gds-button>

      <gds-button rank="tertiary" disabled> Tertiary </gds-button>`},d={...n,parameters:{...n.parameters,controls:{include:["href","target","rel","download"]}},args:{href:"https://github.com/sebgroup/green"},render:t=>r`
    <gds-button
      href=${t.href}
      target=${t.target||c}
      rel=${t.rel||c}
      download=${t!=null&&t.hasOwnProperty("download")?t.download:c}
    >
      Link
    </gds-button>
  `};var g,l,m;u.parameters={...u.parameters,docs:{...(g=u.parameters)==null?void 0:g.docs,source:{originalSource:`{
  ...DefaultParams
}`,...(m=(l=u.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var p,v,b,k,h;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Ranks and variants',
  parameters: {
    ...DefaultParams.parameters,
    controls: {
      include: []
    }
  },
  render: args => html\`
    <gds-grid columns="3" gap="m" row-gap="m">
      <div>
        <gds-button>Neutral primary</gds-button>
      </div>
      <div>
        <gds-button rank="secondary">Neutral secondary</gds-button>
      </div>
      <div>
        <gds-button rank="tertiary">Neutral tertiary</gds-button>
      </div>
      <div>
        <gds-button variant="positive">Positive primary</gds-button>
      </div>
      <div>
        <gds-button variant="positive" rank="secondary">
          Positive secondary
        </gds-button>
      </div>
      <div>
        <gds-button variant="positive" rank="tertiary">
          Positive tertiary
        </gds-button>
      </div>
      <div>
        <gds-button variant="negative">Negative primary</gds-button>
      </div>
      <div>
        <gds-button variant="negative" rank="secondary">
          Negative secondary
        </gds-button>
      </div>
      <div>
        <gds-button variant="negative" rank="tertiary">
          Negative tertiary
        </gds-button>
      </div>
    </gds-grid>
  \`
}`,...(b=(v=a.parameters)==null?void 0:v.docs)==null?void 0:b.source},description:{story:`Buttons can have different ranks and variants. The rank defines the visual importance of the button,
while the variant defines the intent of the button.`,...(h=(k=a.parameters)==null?void 0:k.docs)==null?void 0:h.description}}};var y,$,f,w,P;e.parameters={...e.parameters,docs:{...(y=e.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...DefaultParams,
  parameters: {
    ...DefaultParams.parameters,
    controls: {
      include: ['rank', 'variant']
    }
  },
  render: args => html\`
    <gds-button .rank=\${args.rank} .variant=\${args.variant} size="small"
      >Small</gds-button
    >
    <gds-button .rank=\${args.rank} .variant=\${args.variant}>Medium</gds-button>
    <gds-button .rank=\${args.rank} .variant=\${args.variant} size="large"
      >Large</gds-button
    >
  \`
}`,...(f=($=e.parameters)==null?void 0:$.docs)==null?void 0:f.source},description:{story:"Buttons can be small, medium or large. The default size is medium.",...(P=(w=e.parameters)==null?void 0:w.docs)==null?void 0:P.description}}};var z,D,S,N,T;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Using icons in button',
  parameters: {
    ...DefaultParams.parameters,
    controls: {
      include: ['rank', 'variant', 'size']
    }
  },
  render: args => html\`
    <gds-button .rank=\${args.rank} .variant=\${args.variant} .size=\${args.size}>
      <gds-icon-arrow-down slot="lead"></gds-icon-arrow-down>
      Leading icon
    </gds-button>

    <gds-button .rank=\${args.rank} .variant=\${args.variant} .size=\${args.size}>
      Trailing icon
      <gds-icon-arrow-up slot="trail"></gds-icon-arrow-up>
    </gds-button>
  \`
}`,...(S=(D=o.parameters)==null?void 0:D.docs)==null?void 0:S.source},description:{story:"Buttons can have an icon on the left or right side of the text. These are called leading or trailing icons,\nand are added by placing a `gds-icon` component in either the `lead` or `trail` slot.",...(T=(N=o.parameters)==null?void 0:N.docs)==null?void 0:T.description}}};var x,B,I,L,_;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Icon button',
  parameters: {
    ...DefaultParams.parameters,
    controls: {
      include: ['rank', 'variant']
    }
  },
  render: args => html\`
    <gds-button .rank=\${args.rank} .variant=\${args.variant} size="small">
      <gds-icon-arrow-right />
    </gds-button>

    <gds-button .rank=\${args.rank} .variant=\${args.variant}>
      <gds-icon-arrow-right />
    </gds-button>

    <gds-button .rank=\${args.rank} .variant=\${args.variant} size="large">
      <gds-icon-arrow-right />
    </gds-button>
  \`
}`,...(I=(B=s.parameters)==null?void 0:B.docs)==null?void 0:I.source},description:{story:"If a single `gds-icon` is the only child of a button, it will render as a circular icon button.",...(_=(L=s.parameters)==null?void 0:L.docs)==null?void 0:_.description}}};var A,R,O,M,U;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  ...DefaultParams,
  parameters: {
    ...DefaultParams.parameters,
    controls: {
      include: []
    }
  },
  render: () => html\`<gds-button disabled>Primary</gds-button>

      <gds-button rank="secondary" variant="positive" disabled>
        Secondary
      </gds-button>

      <gds-button rank="tertiary" disabled> Tertiary </gds-button>\`
}`,...(O=(R=i.parameters)==null?void 0:R.docs)==null?void 0:O.source},description:{story:`The buttons support a disabled state, but in general, it should not be used. It can be
hard for the user to understand why the button is disabled, so it is often better to
keep the button clickable and then show an error message instead.`,...(U=(M=i.parameters)==null?void 0:M.docs)==null?void 0:U.description}}};var V,W,C,E,j;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  ...DefaultParams,
  parameters: {
    ...DefaultParams.parameters,
    controls: {
      include: ['href', 'target', 'rel', 'download']
    }
  },
  args: {
    href: 'https://github.com/sebgroup/green'
  },
  render: args => html\`
    <gds-button
      href=\${args.href}
      target=\${args.target || nothing}
      rel=\${args.rel || nothing}
      download=\${args?.hasOwnProperty('download') ? args.download : nothing}
    >
      Link
    </gds-button>
  \`
}`,...(C=(W=d.parameters)==null?void 0:W.docs)==null?void 0:C.source},description:{story:"A link styled as a button.",...(j=(E=d.parameters)==null?void 0:E.docs)==null?void 0:j.description}}};const gt=["Basic","RanksAndVariants","Sizes","WithIcon","IconButton","Disabled","Link"];export{u as Basic,i as Disabled,s as IconButton,d as Link,a as RanksAndVariants,e as Sizes,o as WithIcon,gt as __namedExportsOrder,ct as default};
