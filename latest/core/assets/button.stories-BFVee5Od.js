import{b as e,A as b}from"./iframe-BfjVQBhS.js";import"./text-iN91Xt23.js";import"./divider-D-PF_mvR.js";import"./flex-CsQQXgbH.js";import"./credit-card-BGN-e8ga.js";import"./arrow-left-BYOiGiyH.js";import"./chevron-top-pdbAtnGa.js";import"./arrow-up-CJ8wrFM5.js";import"./arrow-down-BAMP3wl4.js";import"./arrow-right-K4mBbmmV.js";import{a as ft}from"./argTableProps-Qs7z-sFD.js";import"./preload-helper-Dp1pzeXC.js";import"./text.component-Cp7HIdtR.js";import"./default-typography.styles-DgBJUsWr.js";import"./flex.component-C3_-0YKv.js";import"./credit-card.component-BXdz2ZtQ.js";import"./icon.component-3GLbOB5p.js";import"./arrow-left.component-3T22lE86.js";import"./chevron-top.component-mWbdI5mp.js";import"./arrow-up.component-B71vIsq6.js";import"./arrow-down.component-DK8QaQZx.js";import"./arrow-right.component-whQsGOtD.js";const Mt={title:"Components/Button",component:"gds-button",parameters:{layout:"centered",docs:{description:{component:"A button can be tapped or clicked to perform an action."}}},tags:["autodocs"],argTypes:{...ft("gds-button"),rank:{options:["primary","secondary","tertiary"],control:{type:"select"}},variant:{options:["neutral","brand","positive","negative"],control:{type:"select"}},size:{options:["xs","small","medium","large"],control:{type:"select"}},target:{options:["_self","_blank","_parent","_top"],control:{type:"select"}},rel:{control:{type:"text"}},download:{control:{type:"text"}}}},n={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{innerText:"Button"}},p={...n},r={...n,name:"Ranks and variants",parameters:{...n.parameters,controls:{include:[]}},render:t=>e`
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
  `},o={...n,parameters:{...n.parameters,controls:{include:[]}},render:()=>e`
    <gds-flex gap="l">
      <gds-button disabled>Primary</gds-button>
      <gds-button rank="secondary" variant="positive" disabled>
        Secondary
      </gds-button>
      <gds-button rank="tertiary" disabled> Tertiary </gds-button>
    </gds-flex>
  `},i={...n,parameters:{...n.parameters,controls:{include:["href","target","rel","download"]}},args:{href:"https://github.com/seb-oss/green"},render:t=>e`
    <gds-button
      href=${t.href}
      target=${t.target||b}
      rel=${t.rel||b}
      download=${t!=null&&t.hasOwnProperty("download")?t.download:b}
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
  `},u={...n,name:"ARIA Controls",render:()=>e`
    <gds-flex flex-direction="column" gap="m" width="320px">
      <gds-button gds-aria-controls="controlled-panel">
        Toggle panel
      </gds-button>
      <div id="controlled-panel" role="region">
        This panel is controlled by the button above.
      </div>
    </gds-flex>
  `};var x,m,f;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(f=(m=n.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};var v,w,y;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`{
  ...DefaultParams
}`,...(y=(w=p.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var h,k,P,$,z;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(P=(k=r.parameters)==null?void 0:k.docs)==null?void 0:P.source},description:{story:`Buttons can have different ranks and variants. The rank defines the visual importance of the button,
while the variant defines the intent of the button.`,...(z=($=r.parameters)==null?void 0:$.docs)==null?void 0:z.description}}};var N,S,j,T,D;a.parameters={...a.parameters,docs:{...(N=a.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(j=(S=a.parameters)==null?void 0:S.docs)==null?void 0:j.source},description:{story:"Buttons can be small, medium or large. The default size is medium.",...(D=(T=a.parameters)==null?void 0:T.docs)==null?void 0:D.description}}};var A,B,L,I,W;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(L=(B=s.parameters)==null?void 0:B.docs)==null?void 0:L.source},description:{story:`Buttons can have an icon on the left or right side of the text. These are called leading or
trailing icons, and are added by placing a \`gds-icon\` component in either the \`lead\` or \`trail\`
slot.

Note that the icons themself does not have a label so if the icon have some meaning,
show that on the text or use the label attribute, for it to be read out on screen readers.
<a href="/docs/components-icon--docs#regular%20icons">
Icons</a> that can be used.`,...(W=(I=s.parameters)==null?void 0:I.docs)==null?void 0:W.description}}};var C,R,_,F,M;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(_=(R=d.parameters)==null?void 0:R.docs)==null?void 0:_.source},description:{story:`If a single \`gds-icon\` is the only child of a button, it will render as a circular
icon button. Note the icon does not have a aria-label so you have to set the label
attribute on the button so it reads more than just Button on screen readers.
<a href="/docs/components-icon--docs#regular%20icons">
Icons</a> that can be used.`,...(M=(F=d.parameters)==null?void 0:F.docs)==null?void 0:M.description}}};var X,E,O,U,V;o.parameters={...o.parameters,docs:{...(X=o.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(O=(E=o.parameters)==null?void 0:E.docs)==null?void 0:O.source},description:{story:`The buttons support a disabled state, but in general, it should not be used. It can be
hard for the user to understand why the button is disabled, so it is often better to
keep the button clickable and then show an error message instead.`,...(V=(U=o.parameters)==null?void 0:U.docs)==null?void 0:V.description}}};var Y,q,G,H,J;i.parameters={...i.parameters,docs:{...(Y=i.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(G=(q=i.parameters)==null?void 0:q.docs)==null?void 0:G.source},description:{story:"A link styled as a button.",...(J=(H=i.parameters)==null?void 0:H.docs)==null?void 0:J.description}}};var K,Q,Z,tt,nt;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(Z=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:Z.source},description:{story:"Button label will be wrapped if it does not fit.",...(nt=(tt=g.parameters)==null?void 0:tt.docs)==null?void 0:nt.description}}};var et,rt,at,st,dt;c.parameters={...c.parameters,docs:{...(et=c.parameters)==null?void 0:et.docs,source:{originalSource:`{
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
}`,...(at=(rt=c.parameters)==null?void 0:rt.docs)==null?void 0:at.source},description:{story:"Some attributes are forwarded to the inner button element by default.\n\nAria attributes such as `label`, `aria-haspopup`, and `aria-expanded` are forwarded to the inner button.\nIf you need to force a certain aria attribute on the inner button, use the `gds-aria-*` attributes on the\n`gds-button` element.\n\nThe `gds-tabindex` attribute can be used to control the inner button tabindex.",...(dt=(st=c.parameters)==null?void 0:st.docs)==null?void 0:dt.description}}};var ot,it,gt,ct,lt;l.parameters={...l.parameters,docs:{...(ot=l.parameters)==null?void 0:ot.docs,source:{originalSource:`{
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
}`,...(gt=(it=l.parameters)==null?void 0:it.docs)==null?void 0:gt.source},description:{story:`The \`justify-content\` property allows control over how content is distributed within buttons.<br/>
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
\`\`\``,...(lt=(ct=l.parameters)==null?void 0:ct.docs)==null?void 0:lt.description}}};var ut,pt,bt,xt,mt;u.parameters={...u.parameters,docs:{...(ut=u.parameters)==null?void 0:ut.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'ARIA Controls',
  render: () => html\`
    <gds-flex flex-direction="column" gap="m" width="320px">
      <gds-button gds-aria-controls="controlled-panel">
        Toggle panel
      </gds-button>
      <div id="controlled-panel" role="region">
        This panel is controlled by the button above.
      </div>
    </gds-flex>
  \`
}`,...(bt=(pt=u.parameters)==null?void 0:pt.docs)==null?void 0:bt.source},description:{story:"`gds-aria-*` attributes can be used to assign aria to the inner button or anchor element.",...(mt=(xt=u.parameters)==null?void 0:xt.docs)==null?void 0:mt.description}}};const Xt=["DefaultParams","Basic","RanksAndVariants","Sizes","WithIcon","IconButton","Disabled","Link","Wrapping","ForwardedAttributes","NextPrevious","AriaControls"];export{u as AriaControls,p as Basic,n as DefaultParams,o as Disabled,c as ForwardedAttributes,d as IconButton,i as Link,l as NextPrevious,r as RanksAndVariants,a as Sizes,s as WithIcon,g as Wrapping,Xt as __namedExportsOrder,Mt as default};
