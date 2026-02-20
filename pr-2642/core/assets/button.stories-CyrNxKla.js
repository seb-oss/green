import{x as r,E as d}from"./iframe-DWU_JXmu.js";import"./text-C5h8O9fY.js";import"./divider-Bv_NpFXL.js";import"./flex-DRMheoAD.js";import"./credit-card-DZUSzpjy.js";import"./arrow-left-A5y8Bz2o.js";import"./chevron-top-BWurBgTQ.js";import"./arrow-up-BddFXlS5.js";import"./arrow-down-Dt7kM5Ow.js";import"./arrow-right-BH1OZwOR.js";import{a as n}from"./argTableProps-BAeAzYT0.js";import"./default-typography.styles-Bf9fcxHG.js";import"./divider.component-CI52EHP9.js";import"./flex.component-nwBDGrB1.js";import"./credit-card.component-0zTBRXX3.js";import"./icon.component-tf5hdNYz.js";import"./arrow-left.component-DwVlz9I_.js";import"./chevron-top.component-B5ZQJ0Rx.js";import"./arrow-up.component-BXy30qBQ.js";import"./arrow-down.component-dAPovX_W.js";import"./arrow-right.component-JIYwa6xZ.js";const N={title:"Components/Button",component:"gds-button",parameters:{layout:"centered",docs:{description:{component:"A button can be tapped or clicked to perform an action."}}},tags:["autodocs"],argTypes:{...n("gds-button"),rank:{options:["primary","secondary","tertiary"],control:{type:"select"}},variant:{options:["neutral","brand","positive","negative"],control:{type:"select"}},size:{options:["xs","small","medium","large"],control:{type:"select"}},target:{options:["_self","_blank","_parent","_top"],control:{type:"select"}},rel:{control:{type:"text"}},download:{control:{type:"text"}}}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{innerText:"Button"}},j={...e},S={...e,name:"Ranks and variants",parameters:{...e.parameters,controls:{include:[]}},render:t=>r`
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
  `},T={...e,parameters:{...e.parameters,controls:{include:["rank","variant"]}},render:t=>r`
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
  `},L={...e,name:"Using icons in button",parameters:{...e.parameters,controls:{include:["rank","variant","size"]}},render:t=>r`
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
  `},B={...e,name:"Icon button",parameters:{...e.parameters,controls:{include:["rank","variant"]}},render:t=>r`
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
  `},A={...e,parameters:{...e.parameters,controls:{include:[]}},render:()=>r`
    <gds-flex gap="l">
      <gds-button disabled>Primary</gds-button>
      <gds-button rank="secondary" variant="positive" disabled>
        Secondary
      </gds-button>
      <gds-button rank="tertiary" disabled> Tertiary </gds-button>
    </gds-flex>
  `},W={...e,parameters:{...e.parameters,controls:{include:["href","target","rel","download"]}},args:{href:"https://github.com/seb-oss/green"},render:t=>r`
    <gds-button
      href=${t.href}
      target=${t.target||d}
      rel=${t.rel||d}
      download=${t!=null&&t.hasOwnProperty("download")?t.download:d}
    >
      Link
    </gds-button>
  `},_={...e,parameters:{...e.parameters,controls:{include:[]}},render:t=>r`
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
  `},D={...e,parameters:{...e.parameters,controls:{include:[]}},render:()=>r`
    <gds-button
      label="This is a button"
      aria-haspopup="dialog"
      aria-expanded="false"
      gds-aria-description="This is a description"
    >
      Aria button
    </gds-button>
  `},I={...e,name:"Next & Previous",parameters:{...e.parameters,controls:{include:[]}},render:()=>r`
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
  `},R=["DefaultParams","Basic","RanksAndVariants","Sizes","WithIcon","IconButton","Disabled","Link","Wrapping","Aria","NextPrevious"];export{D as Aria,j as Basic,e as DefaultParams,A as Disabled,B as IconButton,W as Link,I as NextPrevious,S as RanksAndVariants,T as Sizes,L as WithIcon,_ as Wrapping,R as __namedExportsOrder,N as default};
