import{x as r,T as u}from"./lit-element-71e04f06.js";import"./button-bb463435.js";import"./grid-a28ace9c.js";import"./arrow-up-b403b886.js";import"./arrow-right-f903942d.js";import"./static-ecb8bd0e.js";import"./gds-element-54cd6e2a.js";import"./_commonjsHelpers-725317a4.js";import"./query-b9d3c2af.js";import"./when-cf7256a5.js";import"./if-defined-e4b5fcf9.js";import"./class-map-4ef1884f.js";import"./directive-12249aa5.js";import"./constrain-slots-08d8606c.js";import"./transitional-styles-1a2d368e.js";import"./tokens.style-afd8926c.js";import"./lit-localize-87611c26.js";import"./watch-c4961afe.js";import"./style-expression-property-89161d08.js";import"./icon-cbb1cac4.js";const mn={title:"Docs/Components/Button",component:"gds-button",parameters:{layout:"centered",docs:{description:{component:`A button serve as an interactive element that enables users to perform an action or make
a choice with a simple click or tap. To decide which kind of button/buttons and putting
them in the right order is key to make sure users know how to take the right action.
A good rule of thumb is to use only one primary action in each context.`}}},tags:["autodocs"]},t={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},argTypes:{rank:{options:["primary","secondary","tertiary"],control:{type:"select"}},variant:{options:["neutral","positive","negative"],control:{type:"select"}},size:{options:["small","medium","large"],control:{type:"select"}},target:{options:["_self","_blank","_parent","_top"],control:{type:"select"}},rel:{control:{type:"text"}},download:{control:{type:"text"}}},args:{innerText:"Button"}},c={...t},a={...t,name:"Ranks and variants",parameters:{...t.parameters,controls:{include:[]}},render:n=>r`
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
  `},e={...t,parameters:{...t.parameters,controls:{include:["rank","variant"]}},render:n=>r`
    <gds-button .rank=${n.rank} .variant=${n.variant} size="small"
      >Small</gds-button
    >
    <gds-button .rank=${n.rank} .variant=${n.variant}>Medium</gds-button>
    <gds-button .rank=${n.rank} .variant=${n.variant} size="large"
      >Large</gds-button
    >
  `},o={...t,name:"Using icons in button",parameters:{...t.parameters,controls:{include:["rank","variant","size"]}},render:n=>r`
    <gds-button .rank=${n.rank} .variant=${n.variant} .size=${n.size}>
      <gds-icon-arrow-down slot="lead"></gds-icon-arrow-down>
      Leading icon
    </gds-button>

    <gds-button .rank=${n.rank} .variant=${n.variant} .size=${n.size}>
      Trailing icon
      <gds-icon-arrow-up slot="trail"></gds-icon-arrow-up>
    </gds-button>
  `},s={...t,name:"Icon button",parameters:{...t.parameters,controls:{include:["rank","variant"]}},render:n=>r`
    <gds-button .rank=${n.rank} .variant=${n.variant} size="small">
      <gds-icon-arrow-right />
    </gds-button>

    <gds-button .rank=${n.rank} .variant=${n.variant}>
      <gds-icon-arrow-right />
    </gds-button>

    <gds-button .rank=${n.rank} .variant=${n.variant} size="large">
      <gds-icon-arrow-right />
    </gds-button>
  `},i={...t,parameters:{...t.parameters,controls:{include:[]}},render:()=>r`<gds-button disabled>Primary</gds-button>

      <gds-button rank="secondary" variant="positive" disabled>
        Secondary
      </gds-button>

      <gds-button rank="tertiary" disabled> Tertiary </gds-button>`},d={...t,parameters:{...t.parameters,controls:{include:["href","target","rel","download"]}},args:{href:"https://github.com/seb-oss/green"},render:n=>r`
    <gds-button
      href=${n.href}
      target=${n.target||u}
      rel=${n.rel||u}
      download=${n!=null&&n.hasOwnProperty("download")?n.download:u}
    >
      Link
    </gds-button>
  `};var g,l,p;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        format: true,
        type: 'dynamic'
      }
    },
    controls: {
      expanded: true
    }
  },
  argTypes: {
    rank: {
      options: ['primary', 'secondary', 'tertiary'],
      control: {
        type: 'select'
      }
    },
    variant: {
      options: ['neutral', 'positive', 'negative'],
      control: {
        type: 'select'
      }
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: {
        type: 'select'
      }
    },
    target: {
      options: ['_self', '_blank', '_parent', '_top'],
      control: {
        type: 'select'
      }
    },
    rel: {
      control: {
        type: 'text'
      }
    },
    download: {
      control: {
        type: 'text'
      }
    }
  },
  args: {
    innerText: 'Button'
  }
}`,...(p=(l=t.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var m,v,b;c.parameters={...c.parameters,docs:{...(m=c.parameters)==null?void 0:m.docs,source:{originalSource:`{
  ...DefaultParams
}`,...(b=(v=c.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var y,k,h,f,$;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(h=(k=a.parameters)==null?void 0:k.docs)==null?void 0:h.source},description:{story:`Buttons can have different ranks and variants. The rank defines the visual importance of the button,
while the variant defines the intent of the button.`,...($=(f=a.parameters)==null?void 0:f.docs)==null?void 0:$.description}}};var w,P,z,D,S;e.parameters={...e.parameters,docs:{...(w=e.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(z=(P=e.parameters)==null?void 0:P.docs)==null?void 0:z.source},description:{story:"Buttons can be small, medium or large. The default size is medium.",...(S=(D=e.parameters)==null?void 0:D.docs)==null?void 0:S.description}}};var T,x,N,B,_;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(N=(x=o.parameters)==null?void 0:x.docs)==null?void 0:N.source},description:{story:"Buttons can have an icon on the left or right side of the text. These are called leading or trailing icons,\nand are added by placing a `gds-icon` component in either the `lead` or `trail` slot.",...(_=(B=o.parameters)==null?void 0:B.docs)==null?void 0:_.description}}};var I,L,A,R,O;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(A=(L=s.parameters)==null?void 0:L.docs)==null?void 0:A.source},description:{story:"If a single `gds-icon` is the only child of a button, it will render as a circular icon button.",...(O=(R=s.parameters)==null?void 0:R.docs)==null?void 0:O.description}}};var M,U,V,W,C;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(V=(U=i.parameters)==null?void 0:U.docs)==null?void 0:V.source},description:{story:`The buttons support a disabled state, but in general, it should not be used. It can be
hard for the user to understand why the button is disabled, so it is often better to
keep the button clickable and then show an error message instead.`,...(C=(W=i.parameters)==null?void 0:W.docs)==null?void 0:C.description}}};var E,j,q,F,G;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  ...DefaultParams,
  parameters: {
    ...DefaultParams.parameters,
    controls: {
      include: ['href', 'target', 'rel', 'download']
    }
  },
  args: {
    href: 'https://github.com/seb-oss/green'
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
}`,...(q=(j=d.parameters)==null?void 0:j.docs)==null?void 0:q.source},description:{story:"A link styled as a button.",...(G=(F=d.parameters)==null?void 0:F.docs)==null?void 0:G.description}}};const vn=["DefaultParams","Basic","RanksAndVariants","Sizes","WithIcon","IconButton","Disabled","Link"];export{c as Basic,t as DefaultParams,i as Disabled,s as IconButton,d as Link,a as RanksAndVariants,e as Sizes,o as WithIcon,vn as __namedExportsOrder,mn as default};
