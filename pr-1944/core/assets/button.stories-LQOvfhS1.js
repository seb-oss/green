import{x as r,E as u}from"./lit-element-C_s9q329.js";import"./button-CDrmz-Jw.js";import"./grid-CbadDEgp.js";import"./text-CtWCOoSP.js";import"./divider-sZ7SL8bD.js";import"./flex-CUclIPPQ.js";import"./credit-card-BCeRBQyq.js";import"./arrow-up-CrjW4old.js";import"./arrow-down-YCHuv-8M.js";import"./arrow-right-BCFgBI2g.js";import"./custom-element-scoping-BRwcB39g.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./query-p8xgzTDt.js";import"./class-map-Bz98xO8-.js";import"./directive-CF8sV3Lr.js";import"./if-defined-Ct9lF4W9.js";import"./when-BR7zwNJC.js";import"./static-_ukc2i0J.js";import"./tokens.style-0Ryfv1cT.js";import"./transitional-styles-jJnRxboM.js";import"./observe-light-dom-CmJPHUQ4.js";import"./runtime-CMQcyTl6.js";import"./watch-tFciLXSI.js";import"./style-expression-property-Dbto4vYM.js";import"./container-Bu7t0sID.js";import"./default-typography.styles-Bl0hQgz1.js";import"./icon-B0MZHPzy.js";const _t={title:"Components/Button",component:"gds-button",parameters:{layout:"centered",docs:{description:{component:`A button serve as an interactive element that enables users to perform an action or make
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
  `},o={...n,name:"Icon button",parameters:{...n.parameters,controls:{include:["rank","variant"]}},render:t=>r`
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
  `},d={...n,parameters:{...n.parameters,controls:{include:[]}},render:()=>r`
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
      target=${t.target||u}
      rel=${t.rel||u}
      download=${t!=null&&t.hasOwnProperty("download")?t.download:u}
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
  `},l={...n,parameters:{...n.parameters,controls:{include:[]}},render:()=>r`
    <gds-button
      label="This is a button"
      aria-haspopup="dialog"
      aria-expanded="false"
      gds-aria-description="This is a description"
    >
      Aria button
    </gds-button>
  `};var p,m,b;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(b=(m=n.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var f,v,h;g.parameters={...g.parameters,docs:{...(f=g.parameters)==null?void 0:f.docs,source:{originalSource:`{
  ...DefaultParams
}`,...(h=(v=g.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var y,x,k,$,w;e.parameters={...e.parameters,docs:{...(y=e.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(k=(x=e.parameters)==null?void 0:x.docs)==null?void 0:k.source},description:{story:`Buttons can have different ranks and variants. The rank defines the visual importance of the button,
while the variant defines the intent of the button.`,...(w=($=e.parameters)==null?void 0:$.docs)==null?void 0:w.description}}};var P,T,z,S,D;a.parameters={...a.parameters,docs:{...(P=a.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(z=(T=a.parameters)==null?void 0:T.docs)==null?void 0:z.source},description:{story:"Buttons can be small, medium or large. The default size is medium.",...(D=(S=a.parameters)==null?void 0:S.docs)==null?void 0:D.description}}};var A,B,L,_,I;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(L=(B=s.parameters)==null?void 0:B.docs)==null?void 0:L.source},description:{story:"Buttons can have an icon on the left or right side of the text. These are called leading or trailing icons,\nand are added by placing a `gds-icon` component in either the `lead` or `trail` slot.",...(I=(_=s.parameters)==null?void 0:_.docs)==null?void 0:I.description}}};var N,R,O,E,M;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(O=(R=o.parameters)==null?void 0:R.docs)==null?void 0:O.source},description:{story:"If a single `gds-icon` is the only child of a button, it will render as a circular icon button.",...(M=(E=o.parameters)==null?void 0:E.docs)==null?void 0:M.description}}};var U,V,W,C,j;d.parameters={...d.parameters,docs:{...(U=d.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(W=(V=d.parameters)==null?void 0:V.docs)==null?void 0:W.source},description:{story:`The buttons support a disabled state, but in general, it should not be used. It can be
hard for the user to understand why the button is disabled, so it is often better to
keep the button clickable and then show an error message instead.`,...(j=(C=d.parameters)==null?void 0:C.docs)==null?void 0:j.description}}};var q,F,G,H,J;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(G=(F=i.parameters)==null?void 0:F.docs)==null?void 0:G.source},description:{story:"A link styled as a button.",...(J=(H=i.parameters)==null?void 0:H.docs)==null?void 0:J.description}}};var K,Q,X,Y,Z;c.parameters={...c.parameters,docs:{...(K=c.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(X=(Q=c.parameters)==null?void 0:Q.docs)==null?void 0:X.source},description:{story:"Text content will get truncated if it does not fit.",...(Z=(Y=c.parameters)==null?void 0:Y.docs)==null?void 0:Z.description}}};var tt,nt,rt,et,at;l.parameters={...l.parameters,docs:{...(tt=l.parameters)==null?void 0:tt.docs,source:{originalSource:`{
  ...DefaultParams,
  parameters: {
    ...DefaultParams.parameters,
    controls: {
      include: []
    }
  },
  render: () => html\`
    <gds-button
      label="This is a button"
      aria-haspopup="dialog"
      aria-expanded="false"
      gds-aria-description="This is a description"
    >
      Aria button
    </gds-button>
  \`
}`,...(rt=(nt=l.parameters)==null?void 0:nt.docs)==null?void 0:rt.source},description:{story:"Some aria attributes are forwarded to the inner button element by default, but if you want to force a certain\naria-attribute on the inner button, you can use the `gds-aria-*` attributes on the `gds-button` element.\n\nAlso note that `label` will render as `aria-label` on the inner button element.",...(at=(et=l.parameters)==null?void 0:et.docs)==null?void 0:at.description}}};const It=["DefaultParams","Basic","RanksAndVariants","Sizes","WithIcon","IconButton","Disabled","Link","Length","Aria"];export{l as Aria,g as Basic,n as DefaultParams,d as Disabled,o as IconButton,c as Length,i as Link,e as RanksAndVariants,a as Sizes,s as WithIcon,It as __namedExportsOrder,_t as default};
