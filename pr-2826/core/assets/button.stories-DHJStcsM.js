import{b as e,A as m}from"./iframe-BOo9vEbG.js";import"./text-DLJEyDIG.js";import"./divider-DzMx_ZvL.js";import"./flex-CFcedw9F.js";import"./context-menu-BbvXNXQq.js";import"./menu-item-C81BRwdv.js";import"./menu-heading-FE8RgPt5.js";import"./credit-card-Cgpf34Z6.js";import"./chevron-bottom-BKgUThHx.js";import"./arrow-left-D9Sqn2g9.js";import"./chevron-top-C2JTh-OT.js";import"./arrow-up-C9VXUwHR.js";import"./arrow-down-DLnPMp61.js";import"./arrow-right-Ycqdeucy.js";import{a as x}from"./argTableProps-Bqde6FYP.js";import"./preload-helper-PPVm8Dsz.js";import"./text.component-CMenGhat.js";import"./default-typography.styles-DrysuhEG.js";import"./flex.component-Bg-EuoVd.js";import"./context-menu.component-CShR0NMb.js";import"./localized-decorator-DIPZWc8G.js";import"./menu-listbox.style-BMY75M73.js";import"./ref-C_y0BQ8I.js";import"./dot-grid-one-horizontal-DaKLqoRd.js";import"./icon.component-gq4FBYyg.js";import"./popover.component-wMDmYFLQ.js";import"./floating-ui.dom-DPpwG6Py.js";import"./cross-small.component-D9paxMsc.js";import"./menu-heading.component-C4-C0PXJ.js";import"./credit-card.component-Bg3Iy_EU.js";import"./chevron-bottom.component-D83kccxb.js";import"./arrow-left.component-CzdelgHr.js";import"./chevron-top.component-BlmSX0J1.js";import"./arrow-up.component-B4xOp5PV.js";import"./arrow-down.component-D6qY4LV_.js";import"./arrow-right.component-NILO_jDT.js";const Z={title:"Components/Button",component:"gds-button",parameters:{layout:"centered",docs:{description:{component:"A button can be tapped or clicked to perform an action."}}},tags:["autodocs"],argTypes:{...x("gds-button"),rank:{options:["primary","secondary","tertiary"],control:{type:"select"}},variant:{options:["neutral","brand","positive","negative"],control:{type:"select"}},size:{options:["xs","small","medium","large"],control:{type:"select"}},target:{options:["_self","_blank","_parent","_top"],control:{type:"select"}},rel:{control:{type:"text"}},download:{control:{type:"text"}}}},n={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{innerText:"Button"}},b={...n},r={...n,name:"Ranks and variants",parameters:{...n.parameters,controls:{include:[]}},render:t=>e`
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
  `},o={...n,name:"Split Button",render:()=>e`
    <gds-flex gap="xs">
      <gds-button>Label</gds-button>
      <gds-context-menu placement="bottom-end">
        <gds-button slot="trigger" aria-label="More options">
          <gds-icon-chevron-bottom></gds-icon-chevron-bottom>
        </gds-button>
        <gds-menu-item>Menu item 1</gds-menu-item>
        <gds-menu-item>Menu item 2</gds-menu-item>
        <gds-menu-item>Menu item 3</gds-menu-item>
      </gds-context-menu>
    </gds-flex>
  `},i={...n,parameters:{...n.parameters,controls:{include:[]}},render:()=>e`
    <gds-flex gap="l">
      <gds-button disabled>Primary</gds-button>
      <gds-button rank="secondary" variant="positive" disabled>
        Secondary
      </gds-button>
      <gds-button rank="tertiary" disabled> Tertiary </gds-button>
    </gds-flex>
  `},g={...n,parameters:{...n.parameters,controls:{include:["href","target","rel","download"]}},args:{href:"https://github.com/seb-oss/green"},render:t=>e`
    <gds-button
      href=${t.href}
      target=${t.target||m}
      rel=${t.rel||m}
      download=${t?.hasOwnProperty("download")?t.download:m}
    >
      Link
    </gds-button>
  `},c={...n,parameters:{...n.parameters,controls:{include:[]}},render:t=>e`
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
  `},l={...n,name:"Forwarded Attributes",parameters:{...n.parameters,controls:{include:[]}},render:()=>e`
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
  `},u={...n,name:"Next & Previous",parameters:{...n.parameters,controls:{include:[]}},render:()=>e`
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
  `},p={...n,name:"ARIA Controls",render:()=>e`
    <gds-flex flex-direction="column" gap="m" width="320px">
      <gds-button gds-aria-controls="controlled-panel">
        Toggle panel
      </gds-button>
      <div id="controlled-panel" role="region">
        This panel is controlled by the button above.
      </div>
    </gds-flex>
  `};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  ...DefaultParams
}`,...b.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source},description:{story:`Buttons can have different ranks and variants. The rank defines the visual importance of the button,
while the variant defines the intent of the button.`,...r.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source},description:{story:"Buttons can be small, medium or large. The default size is medium.",...a.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source},description:{story:`Buttons can have an icon on the left or right side of the text. These are called leading or
trailing icons, and are added by placing a \`gds-icon\` component in either the \`lead\` or \`trail\`
slot.

Note that the icons themself does not have a label so if the icon have some meaning,
show that on the text or use the label attribute, for it to be read out on screen readers.
<a href="/docs/components-icon--docs#regular%20icons">
Icons</a> that can be used.`,...s.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source},description:{story:`If a single \`gds-icon\` is the only child of a button, it will render as a circular
icon button. Note the icon does not have a aria-label so you have to set the label
attribute on the button so it reads more than just Button on screen readers.
<a href="/docs/components-icon--docs#regular%20icons">
Icons</a> that can be used.`,...d.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Split Button',
  render: () => html\`
    <gds-flex gap="xs">
      <gds-button>Label</gds-button>
      <gds-context-menu placement="bottom-end">
        <gds-button slot="trigger" aria-label="More options">
          <gds-icon-chevron-bottom></gds-icon-chevron-bottom>
        </gds-button>
        <gds-menu-item>Menu item 1</gds-menu-item>
        <gds-menu-item>Menu item 2</gds-menu-item>
        <gds-menu-item>Menu item 3</gds-menu-item>
      </gds-context-menu>
    </gds-flex>
  \`
}`,...o.parameters?.docs?.source},description:{story:"A button with a context menu for multiple actions using `gds-context-menu` and `gds-menu-item`.",...o.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source},description:{story:`The buttons support a disabled state, but in general, it should not be used. It can be
hard for the user to understand why the button is disabled, so it is often better to
keep the button clickable and then show an error message instead.`,...i.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source},description:{story:"A link styled as a button.",...g.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source},description:{story:"Button label will be wrapped if it does not fit.",...c.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source},description:{story:"Some attributes are forwarded to the inner button element by default.\n\nAria attributes such as `label`, `aria-haspopup`, and `aria-expanded` are forwarded to the inner button.\nIf you need to force a certain aria attribute on the inner button, use the `gds-aria-*` attributes on the\n`gds-button` element.\n\nThe `gds-tabindex` attribute can be used to control the inner button tabindex.",...l.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source},description:{story:`The \`justify-content\` property allows control over how content is distributed within buttons.<br/>
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
\`\`\``,...u.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source},description:{story:"`gds-aria-*` attributes can be used to assign aria to the inner button or anchor element.",...p.parameters?.docs?.description}}};const tt=["DefaultParams","Basic","RanksAndVariants","Sizes","WithIcon","IconButton","SplitButton","Disabled","Link","Wrapping","ForwardedAttributes","NextPrevious","AriaControls"];export{p as AriaControls,b as Basic,n as DefaultParams,i as Disabled,l as ForwardedAttributes,d as IconButton,g as Link,u as NextPrevious,r as RanksAndVariants,a as Sizes,o as SplitButton,s as WithIcon,c as Wrapping,tt as __namedExportsOrder,Z as default};
