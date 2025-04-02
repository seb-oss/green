import{x as r,E as u}from"./lit-element-Bx14lxc-.js";import"./button-4ARUQBkb.js";import"./grid-DXG25E3T.js";import"./text-B-Xwfu7L.js";import"./divider-Bp-2OIb0.js";import"./flex-BWkMRSVU.js";import"./credit-card-ClH5rS3h.js";import"./arrow-up-BXFFP-1M.js";import"./arrow-down-Bsq4B7qm.js";import"./arrow-right-BG1E6xPR.js";import{a as st}from"./argTableProps-DMSbj-gb.js";import"./button.component-Z9yRxVMZ.js";import"./custom-element-scoping-b4c89-hi.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./query-p8xgzTDt.js";import"./class-map-CXsQwv0r.js";import"./directive-CF8sV3Lr.js";import"./if-defined-CVqwUuaf.js";import"./when-BR7zwNJC.js";import"./static-B8S6DEnV.js";import"./tokens.style-BScLRl5F.js";import"./transitional-styles-Dj-EwcI7.js";import"./observe-light-dom-CmJPHUQ4.js";import"./declarative-layout-mixins-BB4ZLY5n.js";import"./runtime-BL31MtW8.js";import"./watch-tFciLXSI.js";import"./div.component-C28DYOrM.js";import"./text.component-BND7Jax-.js";import"./flex.component-d_gd050y.js";import"./icon-TXeUf8MR.js";import"./custom-elements-QKQf3kXl.js";const Et={title:"Components/Button",component:"gds-button",parameters:{layout:"centered",docs:{description:{component:`A button serve as an interactive element that enables users to perform an action or make
a choice with a simple click or tap. To decide which kind of button/buttons and putting
them in the right order is key to make sure users know how to take the right action.
A good rule of thumb is to use only one primary action in each context.`}}},tags:["autodocs"],argTypes:{...st("gds-button"),rank:{options:["primary","secondary","tertiary"],control:{type:"select"}},variant:{options:["neutral","positive","negative"],control:{type:"select"}},size:{options:["small","medium","large"],control:{type:"select"}},target:{options:["_self","_blank","_parent","_top"],control:{type:"select"}},rel:{control:{type:"text"}},download:{control:{type:"text"}}}},n={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{innerText:"Button"}},l={...n},a={...n,name:"Ranks and variants",parameters:{...n.parameters,controls:{include:[]}},render:t=>r`
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
  `},e={...n,parameters:{...n.parameters,controls:{include:["rank","variant"]}},render:t=>r`
    <gds-flex gap="l" align-items="center">
      <gds-button .rank=${t.rank} .variant=${t.variant} size="xs">
        XS
      </gds-button>
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
      <gds-button .rank=${t.rank} .variant=${t.variant} size="xs">
        <gds-icon-arrow-right />
      </gds-button>
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
  `},g={...n,parameters:{...n.parameters,controls:{include:[]}},render:()=>r`
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
  args: {
    innerText: 'Button'
  }
}`,...(b=(m=n.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var f,v,h;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  ...DefaultParams
}`,...(h=(v=l.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var x,k,y,$,w;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(y=(k=a.parameters)==null?void 0:k.docs)==null?void 0:y.source},description:{story:`Buttons can have different ranks and variants. The rank defines the visual importance of the button,
while the variant defines the intent of the button.`,...(w=($=a.parameters)==null?void 0:$.docs)==null?void 0:w.description}}};var P,z,T,S,D;e.parameters={...e.parameters,docs:{...(P=e.parameters)==null?void 0:P.docs,source:{originalSource:`{
  ...DefaultParams,
  parameters: {
    ...DefaultParams.parameters,
    controls: {
      include: ['rank', 'variant']
    }
  },
  render: args => html\`
    <gds-flex gap="l" align-items="center">
      <gds-button .rank=\${args.rank} .variant=\${args.variant} size="xs">
        XS
      </gds-button>
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
}`,...(T=(z=e.parameters)==null?void 0:z.docs)==null?void 0:T.source},description:{story:"Buttons can be small, medium or large. The default size is medium.",...(D=(S=e.parameters)==null?void 0:S.docs)==null?void 0:D.description}}};var A,B,L,I,_;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(L=(B=s.parameters)==null?void 0:B.docs)==null?void 0:L.source},description:{story:"Buttons can have an icon on the left or right side of the text. These are called leading or trailing icons,\nand are added by placing a `gds-icon` component in either the `lead` or `trail` slot.",...(_=(I=s.parameters)==null?void 0:I.docs)==null?void 0:_.description}}};var N,R,O,E,M;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
      <gds-button .rank=\${args.rank} .variant=\${args.variant} size="xs">
        <gds-icon-arrow-right />
      </gds-button>
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
}`,...(O=(R=o.parameters)==null?void 0:R.docs)==null?void 0:O.source},description:{story:"If a single `gds-icon` is the only child of a button, it will render as a circular icon button.",...(M=(E=o.parameters)==null?void 0:E.docs)==null?void 0:M.description}}};var U,V,W,X,C;d.parameters={...d.parameters,docs:{...(U=d.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
keep the button clickable and then show an error message instead.`,...(C=(X=d.parameters)==null?void 0:X.docs)==null?void 0:C.description}}};var F,j,q,G,H;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(q=(j=i.parameters)==null?void 0:j.docs)==null?void 0:q.source},description:{story:"A link styled as a button.",...(H=(G=i.parameters)==null?void 0:G.docs)==null?void 0:H.description}}};var J,K,Q,Y,Z;c.parameters={...c.parameters,docs:{...(J=c.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Q=(K=c.parameters)==null?void 0:K.docs)==null?void 0:Q.source},description:{story:"Text content will get truncated if it does not fit.",...(Z=(Y=c.parameters)==null?void 0:Y.docs)==null?void 0:Z.description}}};var tt,nt,rt,at,et;g.parameters={...g.parameters,docs:{...(tt=g.parameters)==null?void 0:tt.docs,source:{originalSource:`{
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
}`,...(rt=(nt=g.parameters)==null?void 0:nt.docs)==null?void 0:rt.source},description:{story:"Some aria attributes are forwarded to the inner button element by default, but if you want to force a certain\naria-attribute on the inner button, you can use the `gds-aria-*` attributes on the `gds-button` element.\n\nAlso note that `label` will render as `aria-label` on the inner button element.",...(et=(at=g.parameters)==null?void 0:at.docs)==null?void 0:et.description}}};const Mt=["DefaultParams","Basic","RanksAndVariants","Sizes","WithIcon","IconButton","Disabled","Link","Length","Aria"];export{g as Aria,l as Basic,n as DefaultParams,d as Disabled,o as IconButton,c as Length,i as Link,a as RanksAndVariants,e as Sizes,s as WithIcon,Mt as __namedExportsOrder,Et as default};
