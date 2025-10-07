import{x as n}from"./lit-element-Bx14lxc-.js";import{a as B}from"./argTableProps-FaJUGAjc.js";import"./card-Cttqai-A.js";import"./img-C2U5A16y.js";import"./video-B2UcV7M1.js";import"./div-B_tMMcBv.js";import"./mask-AQ8CS2YE.js";import"./flex-BaAIBfXD.js";import"./text-DuxhXJix.js";import"./divider-ByvUX1m1.js";import"./arrow-down-yM7I5uw3.js";import"./arrow-right-40Ye_-qO.js";import"./circles-three-rP_3i9h5.js";import"./custom-elements-BSCjErJm.js";import"./card.component-BnkWCxNn.js";import"./tokens.style-DPGnhRAf.js";import"./gds-element-DTROifYq.js";import"./Reflect-DJ7r0WLU.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./declarative-layout-mixins-DFPXvh_g.js";import"./div.component-7G7NeUNQ.js";import"./img.component-B5w1hZOx.js";import"./query-p8xgzTDt.js";import"./static-B8S6DEnV.js";import"./flex.component-BnfhCQqN.js";import"./default-typography.styles-DG7u6j1x.js";import"./icon-CmLqa9Fy.js";import"./unsafe-html-CYO4avEf.js";import"./directive-CF8sV3Lr.js";const ad={title:"Components/Card",component:"gds-card",tags:["autodocs"],argTypes:{...B("gds-card")},parameters:{docs:{description:{component:"The card groups related content into a single container.\n\n`gds-card` inherits all properties from `gds-div`, but comes with some predefined defaults\nand a shortcut property for specifiying different card variants.\n\n\n@extends `gds-div`"}}}},s={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{disable:!0}}},e={...s,args:{innerHTML:"Card content",style:"max-width: 200px"}},d={...s,render:t=>n`
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
    </gds-flex>
  `},a={...s,name:"Box shadow",render:t=>n`<gds-grid columns="4" gap="l">
      <gds-card
        padding="s{xs} m{l} l{l}"
        box-shadow="s"
        border-radius="xs"
        variant="secondary"
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
      >
        <gds-flex display="flex" align-items="center" justify-content="center">
          xl
        </gds-flex>
      </gds-card>
    </gds-grid>`},r={...s,name:"Using with Grid",render:t=>n` <gds-grid columns="4" gap="l">
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
    </gds-grid>`};var i,o,g;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  ...DefaultParams,
  args: {
    innerHTML: 'Card content',
    style: 'max-width: 200px'
  }
}`,...(g=(o=e.parameters)==null?void 0:o.docs)==null?void 0:g.source}}};var c,l,m,u,p;d.parameters={...d.parameters,docs:{...(c=d.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
    </gds-flex>
  \`
}`,...(m=(l=d.parameters)==null?void 0:l.docs)==null?void 0:m.source},description:{story:"Examples of different color variants",...(p=(u=d.parameters)==null?void 0:u.docs)==null?void 0:p.description}}};var x,f,v,b,y;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Box shadow',
  render: args => html\`<gds-grid columns="4" gap="l">
      <gds-card
        padding="s{xs} m{l} l{l}"
        box-shadow="s"
        border-radius="xs"
        variant="secondary"
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
      >
        <gds-flex display="flex" align-items="center" justify-content="center">
          xl
        </gds-flex>
      </gds-card>
    </gds-grid>\`
}`,...(v=(f=a.parameters)==null?void 0:f.docs)==null?void 0:v.source},description:{story:`@property box-shadow

Controls the box-shadow styling of the card.

Shadow styles are as specified on the design system that range from "s" to "xl" and can be used like this:

\`\`\`html
<gds-card box-shadow="s"></gds-card>
\`\`\`

The above example will apply the box-shadow style of "s" for small device sizes. The box-shadow style values are predefined in the design tokens.`,...(y=(b=a.parameters)==null?void 0:b.docs)==null?void 0:y.description}}};var h,w,q,L,S;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(q=(w=r.parameters)==null?void 0:w.docs)==null?void 0:q.source},description:{story:'Using `gds-card` with `gds-grid`\nThe `gds-card` can be used with the `gds-grid` to create a card layout with multiple cards.\nThe `gds-card` and `gds-div` accept properties like `column` and `row` where you can specify the number of columns specified on the grid to span or rows to span in vertical axis like on this example:\n\n```html\n<gds-div grid-column="2 / -1" grid-row="1 / -1"></gds-div>\n```',...(S=(L=r.parameters)==null?void 0:L.docs)==null?void 0:S.description}}};const rd=["Card","Variants","Cardshadow","CardGrid"];export{e as Card,r as CardGrid,a as Cardshadow,d as Variants,rd as __namedExportsOrder,ad as default};
