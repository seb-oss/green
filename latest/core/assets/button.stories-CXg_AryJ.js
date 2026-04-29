import{b as e,A as p}from"./iframe-BPg3AppR.js";import"./text-PA2IszVR.js";import"./divider-BkwJE0aL.js";import"./flex-Cja5NLyp.js";import"./credit-card-B2xiLOJK.js";import"./arrow-left-CMKmBLZl.js";import"./chevron-top-KuvWKIyc.js";import"./arrow-up-DzrOth14.js";import"./arrow-down-nbuUGhS_.js";import"./arrow-right-BPMgAfii.js";import{a as lt}from"./argTableProps-VDLpxmDJ.js";import"./preload-helper-Dp1pzeXC.js";import"./text.component-DiBI4Sow.js";import"./default-typography.styles-CxCElSmj.js";import"./divider.component-x3pdusnw.js";import"./flex.component-BkoQl3pW.js";import"./credit-card.component-DFgfkkO3.js";import"./icon.component-DSJcapvS.js";import"./arrow-left.component-CAlJte3t.js";import"./chevron-top.component-D4Q4ZuYY.js";import"./arrow-up.component-BI4q49Fx.js";import"./arrow-down.component-DtaYvU9k.js";import"./arrow-right.component-BK6WlWJO.js";const Wt={title:"Components/Button",component:"gds-button",parameters:{layout:"centered",docs:{description:{component:"A button can be tapped or clicked to perform an action."}}},tags:["autodocs"],argTypes:{...lt("gds-button"),rank:{options:["primary","secondary","tertiary"],control:{type:"select"}},variant:{options:["neutral","brand","positive","negative"],control:{type:"select"}},size:{options:["xs","small","medium","large"],control:{type:"select"}},target:{options:["_self","_blank","_parent","_top"],control:{type:"select"}},rel:{control:{type:"text"}},download:{control:{type:"text"}}}},n={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{innerText:"Button"}},u={...n},r={...n,name:"Ranks and variants",parameters:{...n.parameters,controls:{include:[]}},render:t=>e`
    <gds-flex flex-direction="column" gap="4xl" padding="4xl">
      <gds-flex flex-direction="column" gap="m">
        <gds-text>Neutral</gds-text>
        <gds-divider opacity="0.2"></gds-divider>
        <gds-flex gap="xl" align-items="center">
          <gds-button variant="neutral">
            <gds-icon-credit-card slot="lead" size="xl"></gds-icon-credit-card>
            Primary
          </gds-button>
          <gds-button variant="neutral" rank="secondary">
            <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
            Secondary
          </gds-button>
          <gds-button variant="neutral" rank="tertiary">
            <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
            Tertiary
          </gds-button>
        </gds-flex>
      </gds-flex>
      <gds-flex flex-direction="column" gap="m">
        <gds-text>Brand</gds-text>
        <gds-divider opacity="0.2"></gds-divider>
        <gds-flex gap="xl">
          <gds-button variant="brand">
            <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
            Primary
          </gds-button>
          <gds-button variant="brand" rank="secondary">
            <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
            Secondary
          </gds-button>
          <gds-button variant="brand" rank="tertiary">
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
      <gds-flex flex-direction="column" gap="m">
        <gds-text>Notice</gds-text>
        <gds-divider opacity="0.2"></gds-divider>
        <gds-flex gap="xl">
          <gds-button variant="notice">
            <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
            Primary</gds-button
          >
          <gds-button variant="notice" rank="secondary">
            <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
            Secondary</gds-button
          >
          <gds-button variant="notice" rank="tertiary">
            <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
            Tertiary</gds-button
          >
        </gds-flex>
      </gds-flex>
      <gds-flex flex-direction="column" gap="m">
        <gds-text>Warning</gds-text>
        <gds-divider opacity="0.2"></gds-divider>
        <gds-flex gap="xl">
          <gds-button variant="warning">
            <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
            Primary</gds-button
          >
          <gds-button variant="warning" rank="secondary">
            <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
            Secondary</gds-button
          >
          <gds-button variant="warning" rank="tertiary">
            <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
            Tertiary</gds-button
          >
        </gds-flex>
      </gds-flex>
    </gds-flex>
  `},a={...n,parameters:{...n.parameters,controls:{include:["rank","variant"]}},render:t=>e`
    <gds-flex flex-direction="column" gap="2xl">
      <gds-flex gap="l" align-items="center">
        <gds-button .rank=${t.rank} .variant=${t.variant} size="large">
          Large
        </gds-button>
        <gds-button .rank=${t.rank} .variant=${t.variant}>
          Medium
        </gds-button>
        <gds-button .rank=${t.rank} .variant=${t.variant} size="small">
          Small
        </gds-button>
        <gds-button .rank=${t.rank} .variant=${t.variant} size="xs">
          XS
        </gds-button>
      </gds-flex>
      <gds-flex gap="l" align-items="center">
        <gds-button .rank=${t.rank} .variant=${t.variant} size="large">
          <gds-icon-credit-card slot="lead" size="xl"></gds-icon-credit-card>
          Large
        </gds-button>
        <gds-button .rank=${t.rank} .variant=${t.variant}>
          <gds-icon-credit-card slot="lead" size="l"></gds-icon-credit-card>
          Medium
        </gds-button>
        <gds-button .rank=${t.rank} .variant=${t.variant} size="small">
          <gds-icon-credit-card slot="lead" size="m"></gds-icon-credit-card>
          Small
        </gds-button>
        <gds-button .rank=${t.rank} .variant=${t.variant} size="xs">
          <gds-icon-credit-card slot="lead" size="m"></gds-icon-credit-card>
          XS
        </gds-button>
      </gds-flex>
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
  `},d={...n,name:"Icon button",parameters:{...n.parameters,controls:{include:["rank","variant"]}},render:t=>e`
    <gds-flex gap="l" align-items="center">
      <gds-button
        .rank=${t.rank}
        .variant=${t.variant}
        size="xs"
        label="Next step 1"
      >
        <gds-icon-arrow-right size="s" />
      </gds-button>
      <gds-button
        .rank=${t.rank}
        .variant=${t.variant}
        size="small"
        label="Next step 2"
      >
        <gds-icon-arrow-right size="m" />
      </gds-button>
      <gds-button
        .rank=${t.rank}
        .variant=${t.variant}
        label="Next step 3"
      >
        <gds-icon-arrow-right size="l" />
      </gds-button>
      <gds-button
        .rank=${t.rank}
        .variant=${t.variant}
        size="large"
        label="Next step 4"
      >
        <gds-icon-arrow-right size="xl" />
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
  `},o={...n,parameters:{...n.parameters,controls:{include:["href","target","rel","download"]}},args:{href:"https://github.com/seb-oss/green"},render:t=>e`
    <gds-button
      href=${t.href}
      target=${t.target||p}
      rel=${t.rel||p}
      download=${t!=null&&t.hasOwnProperty("download")?t.download:p}
    >
      Link
    </gds-button>
  `},g={...n,parameters:{...n.parameters,controls:{include:[]}},render:t=>e`
    <gds-flex gap="xl" flex-direction="column" width="40ch" gap="2xl">
      <gds-flex flex-direction="column" gap="m" flex="1">
        <gds-flex flex-direction="column">
          <gds-text>Wrapped</gds-text>
          <gds-text color="neutral-02" tag="small">
            Text wraps to multiple lines when exceeding container width
          </gds-text>
        </gds-flex>
        <gds-button wrapped>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </gds-button>
      </gds-flex>
      <gds-divider></gds-divider>
      <gds-flex flex-direction="column" gap="m" flex="1">
        <gds-flex flex-direction="column">
          <gds-text>Default</gds-text>
          <gds-text color="neutral-02" tag="small">
            Text truncates with ellipsis when exceeding container width
          </gds-text>
        </gds-flex>
        <gds-button width="20ch">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </gds-button>
      </gds-flex>
    </gds-flex>
  `},c={...n,name:"Forwarded Attributes",parameters:{...n.parameters,controls:{include:[]}},render:()=>e`
    <gds-flex flex-direction="column" gap="xl" width="320px">
      <gds-flex flex-direction="column" gap="s">
        <gds-text tag="small">Aria attributes</gds-text>
        <gds-button
          label="This is a button"
          aria-haspopup="dialog"
          aria-expanded="false"
          gds-aria-description="This is a description"
        >
          Aria button
        </gds-button>
      </gds-flex>
      <gds-flex flex-direction="column" gap="s">
        <gds-text tag="small">Tabindex forwarding</gds-text>
        <gds-button gds-tabindex="-1">You can't tab this!</gds-button>
      </gds-flex>
    </gds-flex>
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
  `};var b,x,m;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(m=(x=n.parameters)==null?void 0:x.docs)==null?void 0:m.source}}};var f,v,w;u.parameters={...u.parameters,docs:{...(f=u.parameters)==null?void 0:f.docs,source:{originalSource:`{
  ...DefaultParams
}`,...(w=(v=u.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var y,h,k,$,P;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
        <gds-flex gap="xl" align-items="center">
          <gds-button variant="neutral">
            <gds-icon-credit-card slot="lead" size="xl"></gds-icon-credit-card>
            Primary
          </gds-button>
          <gds-button variant="neutral" rank="secondary">
            <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
            Secondary
          </gds-button>
          <gds-button variant="neutral" rank="tertiary">
            <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
            Tertiary
          </gds-button>
        </gds-flex>
      </gds-flex>
      <gds-flex flex-direction="column" gap="m">
        <gds-text>Brand</gds-text>
        <gds-divider opacity="0.2"></gds-divider>
        <gds-flex gap="xl">
          <gds-button variant="brand">
            <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
            Primary
          </gds-button>
          <gds-button variant="brand" rank="secondary">
            <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
            Secondary
          </gds-button>
          <gds-button variant="brand" rank="tertiary">
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
      <gds-flex flex-direction="column" gap="m">
        <gds-text>Notice</gds-text>
        <gds-divider opacity="0.2"></gds-divider>
        <gds-flex gap="xl">
          <gds-button variant="notice">
            <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
            Primary</gds-button
          >
          <gds-button variant="notice" rank="secondary">
            <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
            Secondary</gds-button
          >
          <gds-button variant="notice" rank="tertiary">
            <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
            Tertiary</gds-button
          >
        </gds-flex>
      </gds-flex>
      <gds-flex flex-direction="column" gap="m">
        <gds-text>Warning</gds-text>
        <gds-divider opacity="0.2"></gds-divider>
        <gds-flex gap="xl">
          <gds-button variant="warning">
            <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
            Primary</gds-button
          >
          <gds-button variant="warning" rank="secondary">
            <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
            Secondary</gds-button
          >
          <gds-button variant="warning" rank="tertiary">
            <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
            Tertiary</gds-button
          >
        </gds-flex>
      </gds-flex>
    </gds-flex>
  \`
}`,...(k=(h=r.parameters)==null?void 0:h.docs)==null?void 0:k.source},description:{story:`Buttons can have different ranks and variants. The rank defines the visual importance of the button,
while the variant defines the intent of the button.`,...(P=($=r.parameters)==null?void 0:$.docs)==null?void 0:P.description}}};var z,N,S,j,T;a.parameters={...a.parameters,docs:{...(z=a.parameters)==null?void 0:z.docs,source:{originalSource:`{
  ...DefaultParams,
  parameters: {
    ...DefaultParams.parameters,
    controls: {
      include: ['rank', 'variant']
    }
  },
  render: args => html\`
    <gds-flex flex-direction="column" gap="2xl">
      <gds-flex gap="l" align-items="center">
        <gds-button .rank=\${args.rank} .variant=\${args.variant} size="large">
          Large
        </gds-button>
        <gds-button .rank=\${args.rank} .variant=\${args.variant}>
          Medium
        </gds-button>
        <gds-button .rank=\${args.rank} .variant=\${args.variant} size="small">
          Small
        </gds-button>
        <gds-button .rank=\${args.rank} .variant=\${args.variant} size="xs">
          XS
        </gds-button>
      </gds-flex>
      <gds-flex gap="l" align-items="center">
        <gds-button .rank=\${args.rank} .variant=\${args.variant} size="large">
          <gds-icon-credit-card slot="lead" size="xl"></gds-icon-credit-card>
          Large
        </gds-button>
        <gds-button .rank=\${args.rank} .variant=\${args.variant}>
          <gds-icon-credit-card slot="lead" size="l"></gds-icon-credit-card>
          Medium
        </gds-button>
        <gds-button .rank=\${args.rank} .variant=\${args.variant} size="small">
          <gds-icon-credit-card slot="lead" size="m"></gds-icon-credit-card>
          Small
        </gds-button>
        <gds-button .rank=\${args.rank} .variant=\${args.variant} size="xs">
          <gds-icon-credit-card slot="lead" size="m"></gds-icon-credit-card>
          XS
        </gds-button>
      </gds-flex>
    </gds-flex>
  \`
}`,...(S=(N=a.parameters)==null?void 0:N.docs)==null?void 0:S.source},description:{story:"Buttons can be small, medium or large. The default size is medium.",...(T=(j=a.parameters)==null?void 0:j.docs)==null?void 0:T.description}}};var D,B,A,L,I;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(A=(B=s.parameters)==null?void 0:B.docs)==null?void 0:A.source},description:{story:`Buttons can have an icon on the left or right side of the text. These are called leading or
trailing icons, and are added by placing a \`gds-icon\` component in either the \`lead\` or \`trail\`
slot.

Note that the icons themself does not have a label so if the icon have some meaning,
show that on the text or use the label attribute, for it to be read out on screen readers.
<a href="/docs/components-icon--docs#regular%20icons">
Icons</a> that can be used.`,...(I=(L=s.parameters)==null?void 0:L.docs)==null?void 0:I.description}}};var W,_,F,M,R;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
        <gds-icon-arrow-right size="s" />
      </gds-button>
      <gds-button
        .rank=\${args.rank}
        .variant=\${args.variant}
        size="small"
        label="Next step 2"
      >
        <gds-icon-arrow-right size="m" />
      </gds-button>
      <gds-button
        .rank=\${args.rank}
        .variant=\${args.variant}
        label="Next step 3"
      >
        <gds-icon-arrow-right size="l" />
      </gds-button>
      <gds-button
        .rank=\${args.rank}
        .variant=\${args.variant}
        size="large"
        label="Next step 4"
      >
        <gds-icon-arrow-right size="xl" />
      </gds-button>
    </gds-flex>
  \`
}`,...(F=(_=d.parameters)==null?void 0:_.docs)==null?void 0:F.source},description:{story:`If a single \`gds-icon\` is the only child of a button, it will render as a circular
icon button. Note the icon does not have a aria-label so you have to set the label
attribute on the button so it reads more than just Button on screen readers.
<a href="/docs/components-icon--docs#regular%20icons">
Icons</a> that can be used.`,...(R=(M=d.parameters)==null?void 0:M.docs)==null?void 0:R.description}}};var X,E,O,U,C;i.parameters={...i.parameters,docs:{...(X=i.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(O=(E=i.parameters)==null?void 0:E.docs)==null?void 0:O.source},description:{story:`The buttons support a disabled state, but in general, it should not be used. It can be
hard for the user to understand why the button is disabled, so it is often better to
keep the button clickable and then show an error message instead.`,...(C=(U=i.parameters)==null?void 0:U.docs)==null?void 0:C.description}}};var V,Y,q,G,H;o.parameters={...o.parameters,docs:{...(V=o.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(q=(Y=o.parameters)==null?void 0:Y.docs)==null?void 0:q.source},description:{story:"A link styled as a button.",...(H=(G=o.parameters)==null?void 0:G.docs)==null?void 0:H.description}}};var J,K,Q,Z,tt;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`{
  ...DefaultParams,
  parameters: {
    ...DefaultParams.parameters,
    controls: {
      include: []
    }
  },
  render: args => html\`
    <gds-flex gap="xl" flex-direction="column" width="40ch" gap="2xl">
      <gds-flex flex-direction="column" gap="m" flex="1">
        <gds-flex flex-direction="column">
          <gds-text>Wrapped</gds-text>
          <gds-text color="neutral-02" tag="small">
            Text wraps to multiple lines when exceeding container width
          </gds-text>
        </gds-flex>
        <gds-button wrapped>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </gds-button>
      </gds-flex>
      <gds-divider></gds-divider>
      <gds-flex flex-direction="column" gap="m" flex="1">
        <gds-flex flex-direction="column">
          <gds-text>Default</gds-text>
          <gds-text color="neutral-02" tag="small">
            Text truncates with ellipsis when exceeding container width
          </gds-text>
        </gds-flex>
        <gds-button width="20ch">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </gds-button>
      </gds-flex>
    </gds-flex>
  \`
}`,...(Q=(K=g.parameters)==null?void 0:K.docs)==null?void 0:Q.source},description:{story:"Button label will be wrapped if it does not fit.",...(tt=(Z=g.parameters)==null?void 0:Z.docs)==null?void 0:tt.description}}};var nt,et,rt,at,st;c.parameters={...c.parameters,docs:{...(nt=c.parameters)==null?void 0:nt.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Forwarded Attributes',
  parameters: {
    ...DefaultParams.parameters,
    controls: {
      include: []
    }
  },
  render: () => html\`
    <gds-flex flex-direction="column" gap="xl" width="320px">
      <gds-flex flex-direction="column" gap="s">
        <gds-text tag="small">Aria attributes</gds-text>
        <gds-button
          label="This is a button"
          aria-haspopup="dialog"
          aria-expanded="false"
          gds-aria-description="This is a description"
        >
          Aria button
        </gds-button>
      </gds-flex>
      <gds-flex flex-direction="column" gap="s">
        <gds-text tag="small">Tabindex forwarding</gds-text>
        <gds-button gds-tabindex="-1">You can't tab this!</gds-button>
      </gds-flex>
    </gds-flex>
  \`
}`,...(rt=(et=c.parameters)==null?void 0:et.docs)==null?void 0:rt.source},description:{story:"Some attributes are forwarded to the inner button element by default.\n\nAria attributes such as `label`, `aria-haspopup`, and `aria-expanded` are forwarded to the inner button.\nIf you need to force a certain aria attribute on the inner button, use the `gds-aria-*` attributes on the\n`gds-button` element.\n\nThe `gds-tabindex` attribute can be used to control the inner button tabindex.",...(st=(at=c.parameters)==null?void 0:at.docs)==null?void 0:st.description}}};var dt,it,ot,gt,ct;l.parameters={...l.parameters,docs:{...(dt=l.parameters)==null?void 0:dt.docs,source:{originalSource:`{
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
}`,...(ot=(it=l.parameters)==null?void 0:it.docs)==null?void 0:ot.source},description:{story:`The \`justify-content\` property allows control over how content is distributed within buttons.<br/>
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
\`\`\``,...(ct=(gt=l.parameters)==null?void 0:gt.docs)==null?void 0:ct.description}}};const _t=["DefaultParams","Basic","RanksAndVariants","Sizes","WithIcon","IconButton","Disabled","Link","Wrapping","ForwardedAttributes","NextPrevious"];export{u as Basic,n as DefaultParams,i as Disabled,c as ForwardedAttributes,d as IconButton,o as Link,l as NextPrevious,r as RanksAndVariants,a as Sizes,s as WithIcon,g as Wrapping,_t as __namedExportsOrder,Wt as default};
