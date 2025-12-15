import{x as r}from"./iframe-BZMmfzq-.js";import{a as q}from"./argTableProps-CWUlPtMf.js";import"./card-C3m2qafe.js";import"./img-DlE1PSHj.js";import"./details-MI8K3YKp.js";import"./input-C7izrgBp.js";import"./video-KlqSLK3Q.js";import"./div-BYtpONQp.js";import"./mask-FpLVx1Wd.js";import"./flex-DybpUiQt.js";import"./text-CuuZulEI.js";import"./divider-DvpAfmer.js";import"./arrow-down-Df4s4_6C.js";import"./arrow-right-DQAV-yWP.js";import"./circles-three-Aaw27XcM.js";import"./preload-helper-Dp1pzeXC.js";import"./card.component-ChRt9CDJ.js";import"./img.component-Byo2Ccwi.js";import"./input.component-B4km56Gp.js";import"./query-async-CEYj0IU2.js";import"./form-control-host.style-cODINajo.js";import"./form-control-header.component-C1fcFPBL.js";import"./badge.component-Bjgx_bYn.js";import"./flex.component-Cl84FKMs.js";import"./triangle-exclamation.component-pGryeODI.js";import"./icon.component-HYGESCJq.js";import"./cross-small.component-BBCU0PI-.js";import"./textarea.component-BhH2Dbed.js";import"./resize-observer-B9k8v2TZ.js";import"./video.component-iG8ds1gP.js";import"./mask.component-BLblNiay.js";import"./default-typography.styles-DS1iar7Q.js";import"./divider.component-C4ihM_aR.js";import"./arrow-down.component-D5y_HAk8.js";import"./arrow-right.component-CL1eAgyi.js";import"./circles-three.component-AzBn567j.js";const od={title:"Components/Card",component:"gds-card",tags:["autodocs"],argTypes:{...q("gds-card")},parameters:{docs:{description:{component:"The card groups related content into a single container.\n\n`gds-card` inherits all properties from `gds-div`, but comes with some predefined defaults\nand a shortcut property for specifiying different card variants.\n\n\n@extends `gds-div`"}}}},a={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{disable:!0}}},s={...a,args:{innerHTML:"Card content",style:"max-width: 200px"}},d={...a,render:e=>r`
    <gds-flex gap="l" flex-direction="column">
      <gds-card variant="secondary">
        <gds-flex gap="l" flex-direction="column">
          <gds-text tag="h3">Light mode</gds-text>
          <gds-grid columns="3" gap="l">
            <gds-card variant="primary">Primary</gds-card>
            <gds-card variant="secondary">Secondary</gds-card>
            <gds-card variant="tertiary">Tertiary</gds-card>
            <gds-card variant="brand-01">Brand-01</gds-card>
            <gds-card variant="brand-02">Brand-02</gds-card>
          </gds-grid>
          <gds-grid columns="1" gap="l">
            <gds-card variant="positive">Positive</gds-card>
            <gds-card variant="negative">Negative</gds-card>
            <gds-card variant="notice">Notice</gds-card>
            <gds-card variant="warning">Warning</gds-card>
            <gds-card variant="information">Information</gds-card>
          </gds-grid>
          <gds-grid columns="1" gap="l">
            <gds-card>Default</gds-card>
          </gds-grid>
        </gds-flex>
      </gds-card>
      <gds-theme color-scheme="dark">
        <gds-card level="1">
          <gds-flex gap="l" flex-direction="column">
            <gds-text tag="h3">Dark mode</gds-text>
            <gds-grid columns="3" gap="l">
              <gds-card variant="primary">Primary</gds-card>
              <gds-card variant="secondary">Secondary</gds-card>
              <gds-card variant="tertiary">Tertiary</gds-card>
              <gds-card variant="brand-01">Brand-01</gds-card>
              <gds-card variant="brand-02">Brand-02</gds-card>
            </gds-grid>
            <gds-grid columns="1" gap="l">
              <gds-card variant="positive">Positive</gds-card>
              <gds-card variant="negative">Negative</gds-card>
              <gds-card variant="notice">Notice</gds-card>
              <gds-card variant="warning">Warning</gds-card>
              <gds-card variant="information">Information</gds-card>
            </gds-grid>
            <gds-grid columns="1" gap="l">
              <gds-card>Default</gds-card>
            </gds-grid>
          </gds-flex>
        </gds-card>
      </gds-theme>
      <gds-theme color-scheme="light">
        <gds-grid columns="2" gap="s">
          <gds-card variant="neutral-01">
            <gds-card variant="neutral-01-2" height="100%">
              <gds-input plain></gds-input>
              <gds-flex gap="s">
                <gds-button>Button</gds-button>
                <gds-button rank="secondary">Button</gds-button>
              </gds-flex>
            </gds-card>
            <gds-details summary="test"></gds-details>
          </gds-card>
          <gds-card variant="neutral-02">
            <gds-card variant="neutral-02-2" height="100%">
              <gds-input plain></gds-input>
              <gds-flex gap="s">
                <gds-button>Button</gds-button>
                <gds-button rank="secondary">Button</gds-button>
              </gds-flex>
            </gds-card>
            <gds-details summary="test"></gds-details>
          </gds-card>
        </gds-grid>
      </gds-theme>
      <gds-theme color-scheme="dark">
        <gds-grid columns="2" gap="s">
          <gds-card variant="neutral-01" aspect-ratio="1/1">
            <gds-card variant="neutral-01-2" height="100%">
              <gds-input plain></gds-input>
              <gds-flex gap="s">
                <gds-button>Button</gds-button>
                <gds-button rank="secondary">Button</gds-button>
              </gds-flex>
            </gds-card>
          </gds-card>
          <gds-card variant="neutral-02" aspect-ratio="1/1">
            <gds-card variant="neutral-02-2" height="100%">
              <gds-input plain></gds-input>
              <gds-flex gap="s">
                <gds-button>Button</gds-button>
                <gds-button rank="secondary">Button</gds-button>
              </gds-flex>
            </gds-card>
          </gds-card>
        </gds-grid>
      </gds-theme>
    </gds-flex>
  `},t={...a,name:"Box shadow",render:e=>r`<gds-grid
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
        variant="secondary"
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
        variant="secondary"
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
        variant="secondary"
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
        variant="secondary"
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
        variant="secondary"
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
        variant="secondary"
        height="100px"
        justify-content="center"
        border-width="0"
      >
        <gds-flex display="flex" align-items="center" justify-content="center">
          2XL
        </gds-flex>
      </gds-card>
    </gds-grid>`},n={...a,name:"Using with Grid",render:e=>r` <gds-grid columns="4" gap="l">
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
    </gds-grid>`};var i,o,g;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  ...DefaultParams,
  args: {
    innerHTML: 'Card content',
    style: 'max-width: 200px'
  }
}`,...(g=(o=s.parameters)==null?void 0:o.docs)==null?void 0:g.source}}};var c,l,u,m,p;d.parameters={...d.parameters,docs:{...(c=d.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-flex gap="l" flex-direction="column">
      <gds-card variant="secondary">
        <gds-flex gap="l" flex-direction="column">
          <gds-text tag="h3">Light mode</gds-text>
          <gds-grid columns="3" gap="l">
            <gds-card variant="primary">Primary</gds-card>
            <gds-card variant="secondary">Secondary</gds-card>
            <gds-card variant="tertiary">Tertiary</gds-card>
            <gds-card variant="brand-01">Brand-01</gds-card>
            <gds-card variant="brand-02">Brand-02</gds-card>
          </gds-grid>
          <gds-grid columns="1" gap="l">
            <gds-card variant="positive">Positive</gds-card>
            <gds-card variant="negative">Negative</gds-card>
            <gds-card variant="notice">Notice</gds-card>
            <gds-card variant="warning">Warning</gds-card>
            <gds-card variant="information">Information</gds-card>
          </gds-grid>
          <gds-grid columns="1" gap="l">
            <gds-card>Default</gds-card>
          </gds-grid>
        </gds-flex>
      </gds-card>
      <gds-theme color-scheme="dark">
        <gds-card level="1">
          <gds-flex gap="l" flex-direction="column">
            <gds-text tag="h3">Dark mode</gds-text>
            <gds-grid columns="3" gap="l">
              <gds-card variant="primary">Primary</gds-card>
              <gds-card variant="secondary">Secondary</gds-card>
              <gds-card variant="tertiary">Tertiary</gds-card>
              <gds-card variant="brand-01">Brand-01</gds-card>
              <gds-card variant="brand-02">Brand-02</gds-card>
            </gds-grid>
            <gds-grid columns="1" gap="l">
              <gds-card variant="positive">Positive</gds-card>
              <gds-card variant="negative">Negative</gds-card>
              <gds-card variant="notice">Notice</gds-card>
              <gds-card variant="warning">Warning</gds-card>
              <gds-card variant="information">Information</gds-card>
            </gds-grid>
            <gds-grid columns="1" gap="l">
              <gds-card>Default</gds-card>
            </gds-grid>
          </gds-flex>
        </gds-card>
      </gds-theme>
      <gds-theme color-scheme="light">
        <gds-grid columns="2" gap="s">
          <gds-card variant="neutral-01">
            <gds-card variant="neutral-01-2" height="100%">
              <gds-input plain></gds-input>
              <gds-flex gap="s">
                <gds-button>Button</gds-button>
                <gds-button rank="secondary">Button</gds-button>
              </gds-flex>
            </gds-card>
            <gds-details summary="test"></gds-details>
          </gds-card>
          <gds-card variant="neutral-02">
            <gds-card variant="neutral-02-2" height="100%">
              <gds-input plain></gds-input>
              <gds-flex gap="s">
                <gds-button>Button</gds-button>
                <gds-button rank="secondary">Button</gds-button>
              </gds-flex>
            </gds-card>
            <gds-details summary="test"></gds-details>
          </gds-card>
        </gds-grid>
      </gds-theme>
      <gds-theme color-scheme="dark">
        <gds-grid columns="2" gap="s">
          <gds-card variant="neutral-01" aspect-ratio="1/1">
            <gds-card variant="neutral-01-2" height="100%">
              <gds-input plain></gds-input>
              <gds-flex gap="s">
                <gds-button>Button</gds-button>
                <gds-button rank="secondary">Button</gds-button>
              </gds-flex>
            </gds-card>
          </gds-card>
          <gds-card variant="neutral-02" aspect-ratio="1/1">
            <gds-card variant="neutral-02-2" height="100%">
              <gds-input plain></gds-input>
              <gds-flex gap="s">
                <gds-button>Button</gds-button>
                <gds-button rank="secondary">Button</gds-button>
              </gds-flex>
            </gds-card>
          </gds-card>
        </gds-grid>
      </gds-theme>
    </gds-flex>
  \`
}`,...(u=(l=d.parameters)==null?void 0:l.docs)==null?void 0:u.source},description:{story:"Examples of different color variants",...(p=(m=d.parameters)==null?void 0:m.docs)==null?void 0:p.description}}};var x,f,h,b,y;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
        variant="secondary"
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
        variant="secondary"
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
        variant="secondary"
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
        variant="secondary"
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
        variant="secondary"
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
        variant="secondary"
        height="100px"
        justify-content="center"
        border-width="0"
      >
        <gds-flex display="flex" align-items="center" justify-content="center">
          2XL
        </gds-flex>
      </gds-card>
    </gds-grid>\`
}`,...(h=(f=t.parameters)==null?void 0:f.docs)==null?void 0:h.source},description:{story:`@property box-shadow

Controls the box-shadow styling of the card.

Shadow styles are as specified on the design system that range from "s" to "xl" and can be used like this:

\`\`\`html
<gds-card box-shadow="s"></gds-card>
\`\`\`

The above example will apply the box-shadow style of "s" for small device sizes. The box-shadow style values are predefined in the design tokens.`,...(y=(b=t.parameters)==null?void 0:b.docs)==null?void 0:y.description}}};var v,w,B,j,L;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(B=(w=n.parameters)==null?void 0:w.docs)==null?void 0:B.source},description:{story:'Using `gds-card` with `gds-grid`\nThe `gds-card` can be used with the `gds-grid` to create a card layout with multiple cards.\nThe `gds-card` and `gds-div` accept properties like `column` and `row` where you can specify the number of columns specified on the grid to span or rows to span in vertical axis like on this example:\n\n```html\n<gds-div grid-column="2 / -1" grid-row="1 / -1"></gds-div>\n```',...(L=(j=n.parameters)==null?void 0:j.docs)==null?void 0:L.description}}};const gd=["Card","Variants","Cardshadow","CardGrid"];export{s as Card,n as CardGrid,t as Cardshadow,d as Variants,gd as __namedExportsOrder,od as default};
