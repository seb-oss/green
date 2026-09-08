import{b as r}from"./iframe-BpAQ9VZy.js";import{a}from"./argTableProps-DPMZU9vQ.js";import"./card-Ccn8YV8P.js";import"./img-AGZ7lQs0.js";import"./video-DByxfY0b.js";import"./div-BGSQYPy2.js";import"./mask-Bch4C0HS.js";import"./flex-CROMUfRA.js";import"./text-DS3kuPe2.js";import"./divider-Cb3-4p_r.js";import"./segmented-control-DexaNTSj.js";import"./segment-zk-9aYEb.js";import"./dropdown-BIKvVJSz.js";import"./option-DW504acG.js";import"./menu-heading-LpHd--IU.js";import"./arrow-down-CDSrE4NU.js";import"./arrow-right-Doa8BAPo.js";import"./circles-three-D-yazhA5.js";import"./preload-helper-PPVm8Dsz.js";import"./card.component-Boby38wb.js";import"./img.component-DwE0ISL0.js";import"./video.component-DNXIaG04.js";import"./mask.component-DeG7b-1a.js";import"./flex.component-Dz9Dh_To.js";import"./text.component-jOb8FLYu.js";import"./default-typography.styles-CmnRFBOs.js";import"./localized-decorator-Ch6Yg0PK.js";import"./resize-observer-CfkbZofs.js";import"./chevron-left.component-B8JvpJ_y.js";import"./icon.component-WiGKzgyv.js";import"./chevron-right.component-DusGOr57.js";import"./dropdown.component-BGWtyJcM.js";import"./floating-ui.dom-DzQH3ivI.js";import"./form-control-host.style-BUMqQYTQ.js";import"./lock.component-wNB7nBir.js";import"./form-control-header.component-lfuNenIj.js";import"./badge.component-BIThsuWa.js";import"./triangle-exclamation.component-X8yktkSx.js";import"./circle-info.component-Bhpyt3nH.js";import"./menu-listbox.style-BSBtB7c_.js";import"./checkmark.component-DVLHqsa3.js";import"./chevron-bottom.component-B2Bd1lMC.js";import"./cross-small.component-D4eCNqWO.js";import"./popover.component-DCH3idzJ.js";import"./rbcb-toggle.template-CALnbk5A.js";import"./menu-heading.component-BDUEgBJV.js";import"./arrow-down.component-fFvxsQ2n.js";import"./arrow-right.component-DGO7CLF-.js";import"./circles-three.component-BED7JlLh.js";const nt={title:"Components/Card",component:"gds-card",tags:["autodocs"],argTypes:{...a("gds-card")},parameters:{docs:{description:{component:"The card groups related content into a single container.\n\n`gds-card` inherits all properties from `gds-div`, but comes with some predefined defaults\nand a shortcut property for specifiying different card variants.\n\n\n@extends `gds-div`"}}}},s={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{disable:!0}}},n={...s,args:{innerHTML:"Card content",style:"max-width: 200px"}},t={...s,render:()=>r`
    <gds-flex flex-direction="column" gap="4xl" width="860px" margin="0 auto">
      <gds-grid columns="2" gap="4xl">
        <gds-card variant="neutral-01" height="max-content">
          <gds-text>neutral-01</gds-text>
          <gds-card variant="neutral-01-2">
            <gds-text>neutral-01-2</gds-text>
          </gds-card>
        </gds-card>
        <gds-flex flex-direction="column" gap="4xl">
          <gds-card variant="neutral-02">
            <gds-text>neutral-02</gds-text>
            <gds-card variant="neutral-02-2">
              <gds-text>neutral-02-2</gds-text>
            </gds-card>
          </gds-card>
          <gds-card variant="neutral-02-outlined">
            <gds-text>neutral-02-outlined</gds-text>
          </gds-card>
        </gds-flex>
      </gds-grid>
      <gds-divider color="neutral-02"></gds-divider>
      <gds-grid columns="2" gap="4xl">
        <gds-card variant="brand-01">
          <gds-text>brand-01</gds-text>
        </gds-card>
        <gds-card variant="brand-02">
          <gds-text>brand-02</gds-text>
        </gds-card>
      </gds-grid>
    </gds-flex>
  `},e={...s,name:"Box shadow",render:i=>r`<gds-grid
      columns="1; s{6}"
      gap="2xl"
      padding="2xl"
      width="100%"
      box-sizing="border-box"
    >
      <gds-card
        padding="s{xs} m{l} l{l}"
        box-shadow="xs"
        border-radius="xs"
        variant="neutral-02"
        height="100px"
        justify-content="center"
        border-width="0"
      >
        <gds-flex display="flex" align-items="center" justify-content="center">
          XS
        </gds-flex>
      </gds-card>
      <gds-card
        padding="s{xs} m{l} l{l}"
        box-shadow="s"
        border-radius="xs"
        variant="neutral-02"
        height="100px"
        justify-content="center"
        border-width="0"
      >
        <gds-flex display="flex" align-items="center" justify-content="center">
          S
        </gds-flex>
      </gds-card>
      <gds-card
        padding="s{xs} m{l} l{l}"
        box-shadow="m"
        border-radius="xs"
        variant="neutral-02"
        height="100px"
        justify-content="center"
        border-width="0"
      >
        <gds-flex display="flex" align-items="center" justify-content="center">
          M
        </gds-flex>
      </gds-card>
      <gds-card
        padding="s{xs} m{l} l{l}"
        box-shadow="l"
        border-radius="xs"
        variant="neutral-02"
        height="100px"
        justify-content="center"
        border-width="0"
      >
        <gds-flex display="flex" align-items="center" justify-content="center">
          L
        </gds-flex>
      </gds-card>
      <gds-card
        padding="s{xs} m{l} l{l}"
        box-shadow="xl"
        border-radius="xs"
        variant="neutral-02"
        height="100px"
        justify-content="center"
        border-width="0"
      >
        <gds-flex display="flex" align-items="center" justify-content="center">
          XL
        </gds-flex>
      </gds-card>
      <gds-card
        padding="s{xs} m{l} l{l}"
        box-shadow="2xl"
        border-radius="xs"
        variant="neutral-02"
        height="100px"
        justify-content="center"
        border-width="0"
      >
        <gds-flex display="flex" align-items="center" justify-content="center">
          2XL
        </gds-flex>
      </gds-card>
    </gds-grid>`},d={...s,name:"Using with Grid",render:i=>r` <gds-grid columns="4" gap="l">
      <gds-div>
        <gds-card border-radius="xs">
          <gds-flex gap="m" flex-direction="column" align-items="flex-start">
            <gds-text font="l{heading-s} m{heading-s} s{heading-s}">
              Sidebar
            </gds-text>
            <gds-text text-wrap="balance">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </gds-text>
            <gds-button>Button</gds-button>
          </gds-flex>
        </gds-card>
      </gds-div>
      <gds-div grid-column="2 / -1" grid-row="1 / -1" display="flex">
        <gds-card border-radius="xs">
          <gds-flex
            flex-direction="column"
            align-items="flex-start"
            justify-content="center"
            gap="m"
          >
            <gds-text font="heading-s"> Span Columns: [2 / -1]</gds-text>
            <gds-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </gds-text>
            <gds-text font="body-m">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </gds-text>
            <gds-button>Button</gds-button>
          </gds-flex>
        </gds-card>
      </gds-div>
      <gds-div grid-column="1 / -1">
        <gds-card border-radius="xs">
          <gds-flex
            flex-direction="column"
            align-items="flex-start"
            justify-content="center"
            gap="m"
          >
            <gds-text font="heading-s">Span all columns [1 / -1]</gds-text>
            <gds-text text-wrap="balance" lines="3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </gds-text>
            <gds-button>Button</gds-button>
          </gds-flex>
        </gds-card>
      </gds-div>
    </gds-grid>`};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  args: {
    innerHTML: 'Card content',
    style: 'max-width: 200px'
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  render: () => html\`
    <gds-flex flex-direction="column" gap="4xl" width="860px" margin="0 auto">
      <gds-grid columns="2" gap="4xl">
        <gds-card variant="neutral-01" height="max-content">
          <gds-text>neutral-01</gds-text>
          <gds-card variant="neutral-01-2">
            <gds-text>neutral-01-2</gds-text>
          </gds-card>
        </gds-card>
        <gds-flex flex-direction="column" gap="4xl">
          <gds-card variant="neutral-02">
            <gds-text>neutral-02</gds-text>
            <gds-card variant="neutral-02-2">
              <gds-text>neutral-02-2</gds-text>
            </gds-card>
          </gds-card>
          <gds-card variant="neutral-02-outlined">
            <gds-text>neutral-02-outlined</gds-text>
          </gds-card>
        </gds-flex>
      </gds-grid>
      <gds-divider color="neutral-02"></gds-divider>
      <gds-grid columns="2" gap="4xl">
        <gds-card variant="brand-01">
          <gds-text>brand-01</gds-text>
        </gds-card>
        <gds-card variant="brand-02">
          <gds-text>brand-02</gds-text>
        </gds-card>
      </gds-grid>
    </gds-flex>
  \`
}`,...t.parameters?.docs?.source},description:{story:"Examples of different color variants",...t.parameters?.docs?.description}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Box shadow',
  render: args => html\`<gds-grid
      columns="1; s{6}"
      gap="2xl"
      padding="2xl"
      width="100%"
      box-sizing="border-box"
    >
      <gds-card
        padding="s{xs} m{l} l{l}"
        box-shadow="xs"
        border-radius="xs"
        variant="neutral-02"
        height="100px"
        justify-content="center"
        border-width="0"
      >
        <gds-flex display="flex" align-items="center" justify-content="center">
          XS
        </gds-flex>
      </gds-card>
      <gds-card
        padding="s{xs} m{l} l{l}"
        box-shadow="s"
        border-radius="xs"
        variant="neutral-02"
        height="100px"
        justify-content="center"
        border-width="0"
      >
        <gds-flex display="flex" align-items="center" justify-content="center">
          S
        </gds-flex>
      </gds-card>
      <gds-card
        padding="s{xs} m{l} l{l}"
        box-shadow="m"
        border-radius="xs"
        variant="neutral-02"
        height="100px"
        justify-content="center"
        border-width="0"
      >
        <gds-flex display="flex" align-items="center" justify-content="center">
          M
        </gds-flex>
      </gds-card>
      <gds-card
        padding="s{xs} m{l} l{l}"
        box-shadow="l"
        border-radius="xs"
        variant="neutral-02"
        height="100px"
        justify-content="center"
        border-width="0"
      >
        <gds-flex display="flex" align-items="center" justify-content="center">
          L
        </gds-flex>
      </gds-card>
      <gds-card
        padding="s{xs} m{l} l{l}"
        box-shadow="xl"
        border-radius="xs"
        variant="neutral-02"
        height="100px"
        justify-content="center"
        border-width="0"
      >
        <gds-flex display="flex" align-items="center" justify-content="center">
          XL
        </gds-flex>
      </gds-card>
      <gds-card
        padding="s{xs} m{l} l{l}"
        box-shadow="2xl"
        border-radius="xs"
        variant="neutral-02"
        height="100px"
        justify-content="center"
        border-width="0"
      >
        <gds-flex display="flex" align-items="center" justify-content="center">
          2XL
        </gds-flex>
      </gds-card>
    </gds-grid>\`
}`,...e.parameters?.docs?.source},description:{story:`@property box-shadow

Controls the box-shadow styling of the card.

Shadow styles are as specified on the design system that range from "s" to "xl" and can be used like this:

\`\`\`html
<gds-card box-shadow="s"></gds-card>
\`\`\`

The above example will apply the box-shadow style of "s" for small device sizes. The box-shadow style values are predefined in the design tokens.`,...e.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Using with Grid',
  render: args => html\` <gds-grid columns="4" gap="l">
      <gds-div>
        <gds-card border-radius="xs">
          <gds-flex gap="m" flex-direction="column" align-items="flex-start">
            <gds-text font="l{heading-s} m{heading-s} s{heading-s}">
              Sidebar
            </gds-text>
            <gds-text text-wrap="balance">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </gds-text>
            <gds-button>Button</gds-button>
          </gds-flex>
        </gds-card>
      </gds-div>
      <gds-div grid-column="2 / -1" grid-row="1 / -1" display="flex">
        <gds-card border-radius="xs">
          <gds-flex
            flex-direction="column"
            align-items="flex-start"
            justify-content="center"
            gap="m"
          >
            <gds-text font="heading-s"> Span Columns: [2 / -1]</gds-text>
            <gds-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </gds-text>
            <gds-text font="body-m">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </gds-text>
            <gds-button>Button</gds-button>
          </gds-flex>
        </gds-card>
      </gds-div>
      <gds-div grid-column="1 / -1">
        <gds-card border-radius="xs">
          <gds-flex
            flex-direction="column"
            align-items="flex-start"
            justify-content="center"
            gap="m"
          >
            <gds-text font="heading-s">Span all columns [1 / -1]</gds-text>
            <gds-text text-wrap="balance" lines="3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </gds-text>
            <gds-button>Button</gds-button>
          </gds-flex>
        </gds-card>
      </gds-div>
    </gds-grid>\`
}`,...d.parameters?.docs?.source},description:{story:'Using `gds-card` with `gds-grid`\nThe `gds-card` can be used with the `gds-grid` to create a card layout with multiple cards.\nThe `gds-card` and `gds-div` accept properties like `column` and `row` where you can specify the number of columns specified on the grid to span or rows to span in vertical axis like on this example:\n\n```html\n<gds-div grid-column="2 / -1" grid-row="1 / -1"></gds-div>\n```',...d.parameters?.docs?.description}}};const st=["Card","Variants","Cardshadow","CardGrid"];export{n as Card,d as CardGrid,e as Cardshadow,t as Variants,st as __namedExportsOrder,nt as default};
