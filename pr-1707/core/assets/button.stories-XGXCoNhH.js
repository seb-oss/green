import{x as r,E as l}from"./lit-element-C_s9q329.js";import"./button-DmeQYB9j.js";import"./grid-C2BkcJ2O.js";import"./text-LNG_RezI.js";import"./divider-tua8V-qY.js";import"./flex-Czundhv_.js";import"./credit-card-DGDJRfCy.js";import"./arrow-up-COZ8UO4p.js";import"./arrow-right-tF2Jhvbv.js";import"./custom-element-scoping-CpYtbs9r.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./query-p8xgzTDt.js";import"./class-map-Bz98xO8-.js";import"./directive-CF8sV3Lr.js";import"./if-defined-Ct9lF4W9.js";import"./when-BR7zwNJC.js";import"./static-_ukc2i0J.js";import"./tokens.style-RalixZsd.js";import"./transitional-styles-Cc5JwJ9o.js";import"./runtime-CMQcyTl6.js";import"./watch-tFciLXSI.js";import"./style-expression-property-D0nhDdjH.js";import"./container-DfqgdK9B.js";import"./icon-C1rUgQqA.js";const wt={title:"Components/Button",component:"gds-button",parameters:{layout:"centered",docs:{description:{component:`A button serve as an interactive element that enables users to perform an action or make
a choice with a simple click or tap. To decide which kind of button/buttons and putting
them in the right order is key to make sure users know how to take the right action.
A good rule of thumb is to use only one primary action in each context.`}}},tags:["autodocs"]},n={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},argTypes:{rank:{options:["primary","secondary","tertiary"],control:{type:"select"}},variant:{options:["neutral","positive","negative"],control:{type:"select"}},size:{options:["small","medium","large"],control:{type:"select"}},target:{options:["_self","_blank","_parent","_top"],control:{type:"select"}},rel:{control:{type:"text"}},download:{control:{type:"text"}}},args:{innerText:"Button"}},g={...n},e={...n,name:"Ranks and variants",parameters:{...n.parameters,controls:{include:[]}},render:t=>r`
    <gds-flex flex-direction="column" gap="4xl" padding="4xl">
      <gds-flex flex-direction="column" gap="m">
        <gds-text>Neutral</gds-text>
        <gds-divider opacity="0.2"></gds-divider>
        <gds-flex gap="xl">
          <gds-button>
            <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
            Primary</gds-button>
          <gds-button rank="secondary">
            <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
            Secondary</gds-button>
          <gds-button rank="tertiary">
            <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
            Tertiary</gds-button>
        </gds-flex>
      </gds-flex>
      <gds-flex flex-direction="column" gap="m">
        <gds-text>Positive</gds-text>
        <gds-divider opacity="0.2"></gds-divider>
        <gds-flex gap="xl">
          <gds-button variant="positive">
            <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
            Primary</gds-button>
          <gds-button variant="positive" rank="secondary">
            <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
            Secondary</gds-button>
          <gds-button variant="positive" rank="tertiary">
            <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
            Tertiary</gds-button>
        </gds-flex>
      </gds-flex>
      <gds-flex flex-direction="column" gap="m">
        <gds-text>Negative</gds-text>
        <gds-divider opacity="0.2"></gds-divider>
        <gds-flex gap="xl">
          <gds-button variant="negative">
            <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
            Primary</gds-button>
          <gds-button variant="negative" rank="secondary">
            <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
            Secondary</gds-button>
          <gds-button variant="negative" rank="tertiary">
            <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
            Tertiary</gds-button>
        </gds-flex>
      </gds-flex>
    </gds-grid>
  `},a={...n,parameters:{...n.parameters,controls:{include:["rank","variant"]}},render:t=>r`
    <gds-flex gap="l" align-items="center">
      <gds-button .rank=${t.rank} .variant=${t.variant} size="small">
        Small
      </gds-button>
      <gds-button .rank=${t.rank} .variant=${t.variant}>
        Medium
      </gds-button>
      <gds-button .rank=${t.rank} .variant=${t.variant} size="large">
        Large
      </gds-button>
    </gds-flex>
  `},s={...n,name:"Using icons in button",parameters:{...n.parameters,controls:{include:["rank","variant","size"]}},render:t=>r`
    <gds-flex gap="l">
      <gds-button
        .rank=${t.rank}
        .variant=${t.variant}
        .size=${t.size}
      >
        <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
        Leading icon
      </gds-button>
      <gds-button
        .rank=${t.rank}
        .variant=${t.variant}
        .size=${t.size}
      >
        Trailing icon
        <gds-icon-credit-card slot="trail"></gds-icon-credit-card>
      </gds-button>
    </gds-flex>
  `},d={...n,name:"Icon button",parameters:{...n.parameters,controls:{include:["rank","variant"]}},render:t=>r`
    <gds-flex gap="l" align-items="center">
      <gds-button .rank=${t.rank} .variant=${t.variant} size="small">
        <gds-icon-arrow-right />
      </gds-button>
      <gds-button .rank=${t.rank} .variant=${t.variant}>
        <gds-icon-arrow-right />
      </gds-button>
      <gds-button .rank=${t.rank} .variant=${t.variant} size="large">
        <gds-icon-arrow-right />
      </gds-button>
    </gds-flex>
  `},o={...n,parameters:{...n.parameters,controls:{include:[]}},render:()=>r`
    <gds-flex gap="l">
      <gds-button disabled>Primary</gds-button>
      <gds-button rank="secondary" variant="positive" disabled>
        Secondary
      </gds-button>
      <gds-button rank="tertiary" disabled> Tertiary </gds-button>
    </gds-flex>
  `},i={...n,parameters:{...n.parameters,controls:{include:["href","target","rel","download"]}},args:{href:"https://github.com/seb-oss/green"},render:t=>r`
    <gds-button
      href=${t.href}
      target=${t.target||l}
      rel=${t.rel||l}
      download=${t!=null&&t.hasOwnProperty("download")?t.download:l}
    >
      Link
    </gds-button>
  `},c={...n,parameters:{...n.parameters,controls:{include:[]}},render:t=>r`
    <div style="width: 30ch">
      <gds-button>
        <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
        This is a long text that will truncated
      </gds-button>
    </div>
  `};var u,p,m;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(m=(p=n.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var b,v,f;g.parameters={...g.parameters,docs:{...(b=g.parameters)==null?void 0:b.docs,source:{originalSource:`{
  ...DefaultParams
}`,...(f=(v=g.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var y,x,h,k,$;e.parameters={...e.parameters,docs:{...(y=e.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Ranks and variants',
  parameters: {
    ...DefaultParams.parameters,
    controls: {
      include: []
    }
  },
  render: args => html\`
    <gds-flex flex-direction="column" gap="4xl" padding="4xl">
      <gds-flex flex-direction="column" gap="m">
        <gds-text>Neutral</gds-text>
        <gds-divider opacity="0.2"></gds-divider>
        <gds-flex gap="xl">
          <gds-button>
            <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
            Primary</gds-button>
          <gds-button rank="secondary">
            <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
            Secondary</gds-button>
          <gds-button rank="tertiary">
            <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
            Tertiary</gds-button>
        </gds-flex>
      </gds-flex>
      <gds-flex flex-direction="column" gap="m">
        <gds-text>Positive</gds-text>
        <gds-divider opacity="0.2"></gds-divider>
        <gds-flex gap="xl">
          <gds-button variant="positive">
            <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
            Primary</gds-button>
          <gds-button variant="positive" rank="secondary">
            <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
            Secondary</gds-button>
          <gds-button variant="positive" rank="tertiary">
            <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
            Tertiary</gds-button>
        </gds-flex>
      </gds-flex>
      <gds-flex flex-direction="column" gap="m">
        <gds-text>Negative</gds-text>
        <gds-divider opacity="0.2"></gds-divider>
        <gds-flex gap="xl">
          <gds-button variant="negative">
            <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
            Primary</gds-button>
          <gds-button variant="negative" rank="secondary">
            <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
            Secondary</gds-button>
          <gds-button variant="negative" rank="tertiary">
            <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
            Tertiary</gds-button>
        </gds-flex>
      </gds-flex>
    </gds-grid>
  \`
}`,...(h=(x=e.parameters)==null?void 0:x.docs)==null?void 0:h.source},description:{story:`Buttons can have different ranks and variants. The rank defines the visual importance of the button,
while the variant defines the intent of the button.`,...($=(k=e.parameters)==null?void 0:k.docs)==null?void 0:$.description}}};var w,P,z,T,S;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
  ...DefaultParams,
  parameters: {
    ...DefaultParams.parameters,
    controls: {
      include: ['rank', 'variant']
    }
  },
  render: args => html\`
    <gds-flex gap="l" align-items="center">
      <gds-button .rank=\${args.rank} .variant=\${args.variant} size="small">
        Small
      </gds-button>
      <gds-button .rank=\${args.rank} .variant=\${args.variant}>
        Medium
      </gds-button>
      <gds-button .rank=\${args.rank} .variant=\${args.variant} size="large">
        Large
      </gds-button>
    </gds-flex>
  \`
}`,...(z=(P=a.parameters)==null?void 0:P.docs)==null?void 0:z.source},description:{story:"Buttons can be small, medium or large. The default size is medium.",...(S=(T=a.parameters)==null?void 0:T.docs)==null?void 0:S.description}}};var D,B,L,_,I;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Using icons in button',
  parameters: {
    ...DefaultParams.parameters,
    controls: {
      include: ['rank', 'variant', 'size']
    }
  },
  render: args => html\`
    <gds-flex gap="l">
      <gds-button
        .rank=\${args.rank}
        .variant=\${args.variant}
        .size=\${args.size}
      >
        <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
        Leading icon
      </gds-button>
      <gds-button
        .rank=\${args.rank}
        .variant=\${args.variant}
        .size=\${args.size}
      >
        Trailing icon
        <gds-icon-credit-card slot="trail"></gds-icon-credit-card>
      </gds-button>
    </gds-flex>
  \`
}`,...(L=(B=s.parameters)==null?void 0:B.docs)==null?void 0:L.source},description:{story:"Buttons can have an icon on the left or right side of the text. These are called leading or trailing icons,\nand are added by placing a `gds-icon` component in either the `lead` or `trail` slot.",...(I=(_=s.parameters)==null?void 0:_.docs)==null?void 0:I.description}}};var A,N,R,O,E;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Icon button',
  parameters: {
    ...DefaultParams.parameters,
    controls: {
      include: ['rank', 'variant']
    }
  },
  render: args => html\`
    <gds-flex gap="l" align-items="center">
      <gds-button .rank=\${args.rank} .variant=\${args.variant} size="small">
        <gds-icon-arrow-right />
      </gds-button>
      <gds-button .rank=\${args.rank} .variant=\${args.variant}>
        <gds-icon-arrow-right />
      </gds-button>
      <gds-button .rank=\${args.rank} .variant=\${args.variant} size="large">
        <gds-icon-arrow-right />
      </gds-button>
    </gds-flex>
  \`
}`,...(R=(N=d.parameters)==null?void 0:N.docs)==null?void 0:R.source},description:{story:"If a single `gds-icon` is the only child of a button, it will render as a circular icon button.",...(E=(O=d.parameters)==null?void 0:O.docs)==null?void 0:E.description}}};var M,U,V,W,C;o.parameters={...o.parameters,docs:{...(M=o.parameters)==null?void 0:M.docs,source:{originalSource:`{
  ...DefaultParams,
  parameters: {
    ...DefaultParams.parameters,
    controls: {
      include: []
    }
  },
  render: () => html\`
    <gds-flex gap="l">
      <gds-button disabled>Primary</gds-button>
      <gds-button rank="secondary" variant="positive" disabled>
        Secondary
      </gds-button>
      <gds-button rank="tertiary" disabled> Tertiary </gds-button>
    </gds-flex>
  \`
}`,...(V=(U=o.parameters)==null?void 0:U.docs)==null?void 0:V.source},description:{story:`The buttons support a disabled state, but in general, it should not be used. It can be
hard for the user to understand why the button is disabled, so it is often better to
keep the button clickable and then show an error message instead.`,...(C=(W=o.parameters)==null?void 0:W.docs)==null?void 0:C.description}}};var j,q,F,G,H;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(F=(q=i.parameters)==null?void 0:q.docs)==null?void 0:F.source},description:{story:"A link styled as a button.",...(H=(G=i.parameters)==null?void 0:G.docs)==null?void 0:H.description}}};var J,K,Q,X,Y;c.parameters={...c.parameters,docs:{...(J=c.parameters)==null?void 0:J.docs,source:{originalSource:`{
  ...DefaultParams,
  parameters: {
    ...DefaultParams.parameters,
    controls: {
      include: []
    }
  },
  render: args => html\`
    <div style="width: 30ch">
      <gds-button>
        <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
        This is a long text that will truncated
      </gds-button>
    </div>
  \`
}`,...(Q=(K=c.parameters)==null?void 0:K.docs)==null?void 0:Q.source},description:{story:"Text content will get truncated if it does not fit.",...(Y=(X=c.parameters)==null?void 0:X.docs)==null?void 0:Y.description}}};const Pt=["DefaultParams","Basic","RanksAndVariants","Sizes","WithIcon","IconButton","Disabled","Link","Length"];export{g as Basic,n as DefaultParams,o as Disabled,d as IconButton,c as Length,i as Link,e as RanksAndVariants,a as Sizes,s as WithIcon,Pt as __namedExportsOrder,wt as default};
