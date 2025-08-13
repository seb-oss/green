import{x as e,E as p}from"./lit-element-Bx14lxc-.js";import"./button-DGDHA82E.js";import"./grid-XojnAckp.js";import"./text-CuptJ2S6.js";import"./divider-BK3MyfWU.js";import"./flex-BNobuLJH.js";import"./credit-card-DPT201i1.js";import"./arrow-left-DHVqWDRg.js";import"./chevron-top-DEjifQg1.js";import"./arrow-down-CJkAwEnN.js";import"./arrow-right-Diqx6ulH.js";import{a as lt}from"./argTableProps-DBcNuup-.js";import"./button.component-BkjhbsKb.js";import"./gds-element-DKcDvDP5.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./query-p8xgzTDt.js";import"./class-map-CXsQwv0r.js";import"./directive-CF8sV3Lr.js";import"./if-defined-CVqwUuaf.js";import"./when-BR7zwNJC.js";import"./static-B8S6DEnV.js";import"./tokens.style-Cct4pBht.js";import"./transitional-styles-unlae3Cp.js";import"./observe-light-dom-CmJPHUQ4.js";import"./declarative-layout-mixins-D-CzJZ0x.js";import"./watch-tFciLXSI.js";import"./grid.component-CMUdk6Zw.js";import"./div.component-CLY16RHW.js";import"./text.component-LNrakRk-.js";import"./divider.component-BbGq62mG.js";import"./flex.component-BfKO9GTN.js";import"./credit-card.component-BzxVV7kW.js";import"./icon-BXUh_f_p.js";import"./unsafe-html-CYO4avEf.js";import"./arrow-left.component-sMYgzWQ-.js";import"./chevron-top.component-B9_MghOD.js";import"./arrow-down.component-D-Gx2MyA.js";import"./arrow-right.component-DSW388kA.js";import"./custom-elements-NyrRUpqh.js";const Qt={title:"Components/Button",component:"gds-button",parameters:{layout:"centered",docs:{description:{component:"A button can be tapped or clicked to perform an action."}}},tags:["autodocs"],argTypes:{...lt("gds-button"),rank:{options:["primary","secondary","tertiary"],control:{type:"select"}},variant:{options:["neutral","positive","negative"],control:{type:"select"}},size:{options:["small","medium","large"],control:{type:"select"}},target:{options:["_self","_blank","_parent","_top"],control:{type:"select"}},rel:{control:{type:"text"}},download:{control:{type:"text"}}}},n={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{innerText:"Button"}},u={...n},r={...n,name:"Ranks and variants",parameters:{...n.parameters,controls:{include:[]}},render:t=>e`
    <gds-flex flex-direction="column" gap="4xl" padding="4xl">
      <gds-flex flex-direction="column" gap="m">
        <gds-text>Neutral</gds-text>
        <gds-divider opacity="0.2"></gds-divider>
        <gds-flex gap="xl">
          <gds-button>
            <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
            Primary
          </gds-button>
          <gds-button rank="secondary">
            <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
            Secondary
          </gds-button>
          <gds-button rank="tertiary">
            <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
            Tertiary
          </gds-button>
        </gds-flex>
      </gds-flex>
      <gds-flex flex-direction="column" gap="m">
        <gds-text>Positive</gds-text>
        <gds-divider opacity="0.2"></gds-divider>
        <gds-flex gap="xl">
          <gds-button variant="positive">
            <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
            Primary
          </gds-button>
          <gds-button variant="positive" rank="secondary">
            <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
            Secondary
          </gds-button>
          <gds-button variant="positive" rank="tertiary">
            <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
            Tertiary
          </gds-button>
        </gds-flex>
      </gds-flex>
      <gds-flex flex-direction="column" gap="m">
        <gds-text>Negative</gds-text>
        <gds-divider opacity="0.2"></gds-divider>
        <gds-flex gap="xl">
          <gds-button variant="negative">
            <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
            Primary</gds-button
          >
          <gds-button variant="negative" rank="secondary">
            <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
            Secondary</gds-button
          >
          <gds-button variant="negative" rank="tertiary">
            <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
            Tertiary</gds-button
          >
        </gds-flex>
      </gds-flex>
    </gds-flex>
  `},a={...n,parameters:{...n.parameters,controls:{include:["rank","variant"]}},render:t=>e`
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
  `},s={...n,name:"Using icons in button",parameters:{...n.parameters,controls:{include:["rank","variant","size"]}},render:t=>e`
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
  `},o={...n,name:"Icon button",parameters:{...n.parameters,controls:{include:["rank","variant"]}},render:t=>e`
    <gds-flex gap="l" align-items="center">
      <gds-button
        .rank=${t.rank}
        .variant=${t.variant}
        size="xs"
        label="Next step 1"
      >
        <gds-icon-arrow-right />
      </gds-button>
      <gds-button
        .rank=${t.rank}
        .variant=${t.variant}
        size="small"
        label="Next step 2"
      >
        <gds-icon-arrow-right />
      </gds-button>
      <gds-button
        .rank=${t.rank}
        .variant=${t.variant}
        label="Next step 3"
      >
        <gds-icon-arrow-right />
      </gds-button>
      <gds-button
        .rank=${t.rank}
        .variant=${t.variant}
        size="large"
        label="Next step 4"
      >
        <gds-icon-arrow-right />
      </gds-button>
    </gds-flex>
  `},i={...n,parameters:{...n.parameters,controls:{include:[]}},render:()=>e`
    <gds-flex gap="l">
      <gds-button disabled>Primary</gds-button>
      <gds-button rank="secondary" variant="positive" disabled>
        Secondary
      </gds-button>
      <gds-button rank="tertiary" disabled> Tertiary </gds-button>
    </gds-flex>
  `},d={...n,parameters:{...n.parameters,controls:{include:["href","target","rel","download"]}},args:{href:"https://github.com/seb-oss/green"},render:t=>e`
    <gds-button
      href=${t.href}
      target=${t.target||p}
      rel=${t.rel||p}
      download=${t!=null&&t.hasOwnProperty("download")?t.download:p}
    >
      Link
    </gds-button>
  `},c={...n,parameters:{...n.parameters,controls:{include:[]}},render:t=>e`
    <div style="width: 30ch">
      <gds-button>
        <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
        This is a long text that will truncated
      </gds-button>
    </div>
  `},g={...n,parameters:{...n.parameters,controls:{include:[]}},render:()=>e`
    <gds-button
      label="This is a button"
      aria-haspopup="dialog"
      aria-expanded="false"
      gds-aria-description="This is a description"
    >
      Aria button
    </gds-button>
  `},l={...n,name:"Next & Previous",parameters:{...n.parameters,controls:{include:[]}},render:()=>e`
    <gds-flex gap="4xl" flex-direction="column" width="520px">
      <gds-flex flex-direction="column" gap="m" width="100%">
        <gds-text>Spread: Neutral</gds-text>
        <gds-divider opacity="0.2"></gds-divider>
        <gds-grid columns="3" gap="xl">
          <gds-button justify-content="space-between">
            <gds-icon-arrow-left slot="lead"></gds-icon-arrow-left>
            Previous
          </gds-button>
          <gds-button rank="secondary" justify-content="space-between">
            <gds-icon-arrow-left slot="lead"></gds-icon-arrow-left>
            Previous
          </gds-button>
          <gds-button rank="tertiary" justify-content="space-between">
            <gds-icon-arrow-left slot="lead"></gds-icon-arrow-left>
            Previous
          </gds-button>

          <gds-button justify-content="space-between">
            Next
            <gds-icon-arrow-right slot="trail"></gds-icon-arrow-right>
          </gds-button>
          <gds-button rank="secondary" justify-content="space-between">
            Next
            <gds-icon-arrow-right slot="trail"></gds-icon-arrow-right>
          </gds-button>
          <gds-button rank="tertiary" justify-content="space-between">
            Next
            <gds-icon-arrow-right slot="trail"></gds-icon-arrow-right>
          </gds-button>
        </gds-grid>
      </gds-flex>
      <gds-flex flex-direction="column" gap="m" width="100%">
        <gds-text>Spread: Positive</gds-text>
        <gds-divider opacity="0.2"></gds-divider>
        <gds-grid columns="3" gap="xl">
          <gds-button variant="positive" justify-content="space-between">
            <gds-icon-arrow-left slot="lead"></gds-icon-arrow-left>
            Previous
          </gds-button>
          <gds-button
            rank="secondary"
            variant="positive"
            justify-content="space-between"
          >
            <gds-icon-arrow-left slot="lead"></gds-icon-arrow-left>
            Previous
          </gds-button>
          <gds-button
            rank="tertiary"
            variant="positive"
            justify-content="space-between"
          >
            <gds-icon-arrow-left slot="lead"></gds-icon-arrow-left>
            Previous
          </gds-button>

          <gds-button variant="positive" justify-content="space-between">
            Next
            <gds-icon-arrow-right slot="trail"></gds-icon-arrow-right>
          </gds-button>
          <gds-button
            rank="secondary"
            variant="positive"
            justify-content="space-between"
          >
            Next
            <gds-icon-arrow-right slot="trail"></gds-icon-arrow-right>
          </gds-button>
          <gds-button
            rank="tertiary"
            variant="positive"
            justify-content="space-between"
          >
            Next
            <gds-icon-arrow-right slot="trail"></gds-icon-arrow-right>
          </gds-button>
        </gds-grid>
      </gds-flex>
      <gds-flex flex-direction="column" gap="m" width="100%">
        <gds-text>Spread: Negative</gds-text>
        <gds-divider opacity="0.2"></gds-divider>
        <gds-grid columns="3" gap="xl">
          <gds-button variant="negative" justify-content="space-between">
            <gds-icon-arrow-left slot="lead"></gds-icon-arrow-left>
            Previous
          </gds-button>
          <gds-button
            rank="secondary"
            variant="negative"
            justify-content="space-between"
          >
            <gds-icon-arrow-left slot="lead"></gds-icon-arrow-left>
            Previous
          </gds-button>
          <gds-button
            rank="tertiary"
            variant="negative"
            justify-content="space-between"
          >
            <gds-icon-arrow-left slot="lead"></gds-icon-arrow-left>
            Previous
          </gds-button>
          <gds-button variant="negative" justify-content="space-between">
            Next
            <gds-icon-arrow-right slot="trail"></gds-icon-arrow-right>
          </gds-button>
          <gds-button
            rank="secondary"
            variant="negative"
            justify-content="space-between"
          >
            Next
            <gds-icon-arrow-right slot="trail"></gds-icon-arrow-right>
          </gds-button>
          <gds-button
            rank="tertiary"
            variant="negative"
            justify-content="space-between"
          >
            Next
            <gds-icon-arrow-right slot="trail"></gds-icon-arrow-right>
          </gds-button>
        </gds-grid>
      </gds-flex>
    </gds-flex>
  `};var b,m,f;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(f=(m=n.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};var v,x,w;u.parameters={...u.parameters,docs:{...(v=u.parameters)==null?void 0:v.docs,source:{originalSource:`{
  ...DefaultParams
}`,...(w=(x=u.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};var h,y,k,P,$;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
            Primary
          </gds-button>
          <gds-button rank="secondary">
            <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
            Secondary
          </gds-button>
          <gds-button rank="tertiary">
            <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
            Tertiary
          </gds-button>
        </gds-flex>
      </gds-flex>
      <gds-flex flex-direction="column" gap="m">
        <gds-text>Positive</gds-text>
        <gds-divider opacity="0.2"></gds-divider>
        <gds-flex gap="xl">
          <gds-button variant="positive">
            <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
            Primary
          </gds-button>
          <gds-button variant="positive" rank="secondary">
            <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
            Secondary
          </gds-button>
          <gds-button variant="positive" rank="tertiary">
            <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
            Tertiary
          </gds-button>
        </gds-flex>
      </gds-flex>
      <gds-flex flex-direction="column" gap="m">
        <gds-text>Negative</gds-text>
        <gds-divider opacity="0.2"></gds-divider>
        <gds-flex gap="xl">
          <gds-button variant="negative">
            <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
            Primary</gds-button
          >
          <gds-button variant="negative" rank="secondary">
            <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
            Secondary</gds-button
          >
          <gds-button variant="negative" rank="tertiary">
            <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
            Tertiary</gds-button
          >
        </gds-flex>
      </gds-flex>
    </gds-flex>
  \`
}`,...(k=(y=r.parameters)==null?void 0:y.docs)==null?void 0:k.source},description:{story:`Buttons can have different ranks and variants. The rank defines the visual importance of the button,
while the variant defines the intent of the button.`,...($=(P=r.parameters)==null?void 0:P.docs)==null?void 0:$.description}}};var N,j,S,z,T;a.parameters={...a.parameters,docs:{...(N=a.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(S=(j=a.parameters)==null?void 0:j.docs)==null?void 0:S.source},description:{story:"Buttons can be small, medium or large. The default size is medium.",...(T=(z=a.parameters)==null?void 0:z.docs)==null?void 0:T.description}}};var D,B,I,L,A;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(I=(B=s.parameters)==null?void 0:B.docs)==null?void 0:I.source},description:{story:`Buttons can have an icon on the left or right side of the text. These are called leading or
trailing icons, and are added by placing a \`gds-icon\` component in either the \`lead\` or \`trail\`
slot.

Note that the icons themself does not have a label so if the icon have some meaning,
show that on the text or use the label attribute, for it to be read out on screen readers.
<a href="/docs/components-icon--docs#regular%20icons">
Icons</a> that can be used.`,...(A=(L=s.parameters)==null?void 0:L.docs)==null?void 0:A.description}}};var _,E,R,O,U;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
      <gds-button
        .rank=\${args.rank}
        .variant=\${args.variant}
        size="xs"
        label="Next step 1"
      >
        <gds-icon-arrow-right />
      </gds-button>
      <gds-button
        .rank=\${args.rank}
        .variant=\${args.variant}
        size="small"
        label="Next step 2"
      >
        <gds-icon-arrow-right />
      </gds-button>
      <gds-button
        .rank=\${args.rank}
        .variant=\${args.variant}
        label="Next step 3"
      >
        <gds-icon-arrow-right />
      </gds-button>
      <gds-button
        .rank=\${args.rank}
        .variant=\${args.variant}
        size="large"
        label="Next step 4"
      >
        <gds-icon-arrow-right />
      </gds-button>
    </gds-flex>
  \`
}`,...(R=(E=o.parameters)==null?void 0:E.docs)==null?void 0:R.source},description:{story:`If a single \`gds-icon\` is the only child of a button, it will render as a circular
icon button. Note the icon does not have a aria-label so you have to set the label
attribute on the button so it reads more than just Button on screen readers.
<a href="/docs/components-icon--docs#regular%20icons">
Icons</a> that can be used.`,...(U=(O=o.parameters)==null?void 0:O.docs)==null?void 0:U.description}}};var C,M,V,W,X;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(V=(M=i.parameters)==null?void 0:M.docs)==null?void 0:V.source},description:{story:`The buttons support a disabled state, but in general, it should not be used. It can be
hard for the user to understand why the button is disabled, so it is often better to
keep the button clickable and then show an error message instead.`,...(X=(W=i.parameters)==null?void 0:W.docs)==null?void 0:X.description}}};var F,q,G,H,J;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(G=(q=d.parameters)==null?void 0:q.docs)==null?void 0:G.source},description:{story:"A link styled as a button.",...(J=(H=d.parameters)==null?void 0:H.docs)==null?void 0:J.description}}};var K,Q,Y,Z,tt;c.parameters={...c.parameters,docs:{...(K=c.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(Y=(Q=c.parameters)==null?void 0:Q.docs)==null?void 0:Y.source},description:{story:"Text content will get truncated if it does not fit.",...(tt=(Z=c.parameters)==null?void 0:Z.docs)==null?void 0:tt.description}}};var nt,et,rt,at,st;g.parameters={...g.parameters,docs:{...(nt=g.parameters)==null?void 0:nt.docs,source:{originalSource:`{
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
}`,...(rt=(et=g.parameters)==null?void 0:et.docs)==null?void 0:rt.source},description:{story:"Some aria attributes are forwarded to the inner button element by default, but if you want to force a certain\naria-attribute on the inner button, you can use the `gds-aria-*` attributes on the `gds-button` element.\n\nAlso note that `label` will render as `aria-label` on the inner button element.",...(st=(at=g.parameters)==null?void 0:at.docs)==null?void 0:st.description}}};var ot,it,dt,ct,gt;l.parameters={...l.parameters,docs:{...(ot=l.parameters)==null?void 0:ot.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Next & Previous',
  parameters: {
    ...DefaultParams.parameters,
    controls: {
      include: []
    }
  },
  render: () => html\`
    <gds-flex gap="4xl" flex-direction="column" width="520px">
      <gds-flex flex-direction="column" gap="m" width="100%">
        <gds-text>Spread: Neutral</gds-text>
        <gds-divider opacity="0.2"></gds-divider>
        <gds-grid columns="3" gap="xl">
          <gds-button justify-content="space-between">
            <gds-icon-arrow-left slot="lead"></gds-icon-arrow-left>
            Previous
          </gds-button>
          <gds-button rank="secondary" justify-content="space-between">
            <gds-icon-arrow-left slot="lead"></gds-icon-arrow-left>
            Previous
          </gds-button>
          <gds-button rank="tertiary" justify-content="space-between">
            <gds-icon-arrow-left slot="lead"></gds-icon-arrow-left>
            Previous
          </gds-button>

          <gds-button justify-content="space-between">
            Next
            <gds-icon-arrow-right slot="trail"></gds-icon-arrow-right>
          </gds-button>
          <gds-button rank="secondary" justify-content="space-between">
            Next
            <gds-icon-arrow-right slot="trail"></gds-icon-arrow-right>
          </gds-button>
          <gds-button rank="tertiary" justify-content="space-between">
            Next
            <gds-icon-arrow-right slot="trail"></gds-icon-arrow-right>
          </gds-button>
        </gds-grid>
      </gds-flex>
      <gds-flex flex-direction="column" gap="m" width="100%">
        <gds-text>Spread: Positive</gds-text>
        <gds-divider opacity="0.2"></gds-divider>
        <gds-grid columns="3" gap="xl">
          <gds-button variant="positive" justify-content="space-between">
            <gds-icon-arrow-left slot="lead"></gds-icon-arrow-left>
            Previous
          </gds-button>
          <gds-button
            rank="secondary"
            variant="positive"
            justify-content="space-between"
          >
            <gds-icon-arrow-left slot="lead"></gds-icon-arrow-left>
            Previous
          </gds-button>
          <gds-button
            rank="tertiary"
            variant="positive"
            justify-content="space-between"
          >
            <gds-icon-arrow-left slot="lead"></gds-icon-arrow-left>
            Previous
          </gds-button>

          <gds-button variant="positive" justify-content="space-between">
            Next
            <gds-icon-arrow-right slot="trail"></gds-icon-arrow-right>
          </gds-button>
          <gds-button
            rank="secondary"
            variant="positive"
            justify-content="space-between"
          >
            Next
            <gds-icon-arrow-right slot="trail"></gds-icon-arrow-right>
          </gds-button>
          <gds-button
            rank="tertiary"
            variant="positive"
            justify-content="space-between"
          >
            Next
            <gds-icon-arrow-right slot="trail"></gds-icon-arrow-right>
          </gds-button>
        </gds-grid>
      </gds-flex>
      <gds-flex flex-direction="column" gap="m" width="100%">
        <gds-text>Spread: Negative</gds-text>
        <gds-divider opacity="0.2"></gds-divider>
        <gds-grid columns="3" gap="xl">
          <gds-button variant="negative" justify-content="space-between">
            <gds-icon-arrow-left slot="lead"></gds-icon-arrow-left>
            Previous
          </gds-button>
          <gds-button
            rank="secondary"
            variant="negative"
            justify-content="space-between"
          >
            <gds-icon-arrow-left slot="lead"></gds-icon-arrow-left>
            Previous
          </gds-button>
          <gds-button
            rank="tertiary"
            variant="negative"
            justify-content="space-between"
          >
            <gds-icon-arrow-left slot="lead"></gds-icon-arrow-left>
            Previous
          </gds-button>
          <gds-button variant="negative" justify-content="space-between">
            Next
            <gds-icon-arrow-right slot="trail"></gds-icon-arrow-right>
          </gds-button>
          <gds-button
            rank="secondary"
            variant="negative"
            justify-content="space-between"
          >
            Next
            <gds-icon-arrow-right slot="trail"></gds-icon-arrow-right>
          </gds-button>
          <gds-button
            rank="tertiary"
            variant="negative"
            justify-content="space-between"
          >
            Next
            <gds-icon-arrow-right slot="trail"></gds-icon-arrow-right>
          </gds-button>
        </gds-grid>
      </gds-flex>
    </gds-flex>
  \`
}`,...(dt=(it=l.parameters)==null?void 0:it.docs)==null?void 0:dt.source},description:{story:`The \`justify-content\` property allows control over how content is distributed within buttons.<br/>
This is particularly useful for navigation patterns like Next/Previous buttons where you want
consistent spacing between icons and text.

Uses \`justify-content="space-between"\` to maximize space between elements

Common use cases:
- Navigation buttons (Next/Previous)
- Buttons with leading/trailing icons that need specific spacing

e.g

\`\`\`html
<!-- Example of a button with leading icon and text -->
<gds-button justify-content="space-between">
  <gds-icon-arrow-left slot="lead"></gds-icon-arrow-left>
 Previous
</gds-button>

<!-- Example of a button with trailing icon and text -->
<gds-button justify-content="space-between">
  Next
  <gds-icon-arrow-right slot="trail"></gds-icon-arrow-right>
</gds-button>
\`\`\``,...(gt=(ct=l.parameters)==null?void 0:ct.docs)==null?void 0:gt.description}}};const Yt=["DefaultParams","Basic","RanksAndVariants","Sizes","WithIcon","IconButton","Disabled","Link","Length","Aria","NextPrevious"];export{g as Aria,u as Basic,n as DefaultParams,i as Disabled,o as IconButton,c as Length,d as Link,l as NextPrevious,r as RanksAndVariants,a as Sizes,s as WithIcon,Yt as __namedExportsOrder,Qt as default};
