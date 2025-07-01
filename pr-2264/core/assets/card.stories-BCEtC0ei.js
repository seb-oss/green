import{x as n}from"./lit-element-Bx14lxc-.js";import{a as j}from"./argTableProps-CXNp4PNT.js";import"./card-MiDKuNOO.js";import"./img-DzEdPb5E.js";import"./video-B3lJZXKQ.js";import"./container-ByEDs9qO.js";import"./mask-DcLEe_RP.js";import"./flex-BIq9MOKg.js";import"./text-R0yvCfX7.js";import"./divider-Cm9Zqm69.js";import"./arrow-down-f68BWLgi.js";import"./arrow-right-BHrkoI1T.js";import"./circles-three-B_1LLBaQ.js";import"./custom-elements-YZ4z72rW.js";import"./card.component-Bf618pxZ.js";import"./tokens.style-C_w8vPoe.js";import"./gds-element-DKcDvDP5.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./declarative-layout-mixins-Bw_LIblW.js";import"./div.component-ivIBNdsI.js";import"./img.component-BMmzFOrN.js";import"./video.component-DNf2nDUl.js";import"./query-p8xgzTDt.js";import"./container.component-DWpeK1In.js";import"./mask.component-qgb0TMyG.js";import"./static-B8S6DEnV.js";import"./flex.component-BAh5h9we.js";import"./arrow-down.component-DPmT2NBJ.js";import"./icon-De87oteA.js";import"./directive-CF8sV3Lr.js";import"./arrow-right.component-OhJ1SiBc.js";import"./circles-three.component-Ds86AeZn.js";const rd={title:"Components/Card",component:"gds-card",tags:["autodocs"],argTypes:{...j("gds-card")},parameters:{docs:{description:{component:`The card groups related content into a single container.

\`gds-card\` inherits all properties from \`gds-div\`, but comes with some predefined defaults
and a shortcut property for specifiying different card variants.

@status beta

@extends \`gds-div\``}}}},r={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{disable:!0}}},s={...r,args:{innerHTML:"Card content",style:"max-width: 200px"}},d={...r,render:t=>n`
    <gds-flex gap="l" flex-direction="column">
      <gds-card variant="secondary">
        <gds-flex gap="l" flex-direction="column">
          <gds-text tag="h3">Light mode</gds-text>
          <gds-grid columns="2" gap="l">
            <gds-card variant="primary">Primary</gds-card>
            <gds-card variant="secondary">Secondary</gds-card>
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
        <gds-card>
          <gds-flex gap="l" flex-direction="column">
            <gds-text tag="h3">Dark mode</gds-text>
            <gds-grid columns="2" gap="l">
              <gds-card variant="primary">Primary</gds-card>
              <gds-card variant="secondary">Secondary</gds-card>
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
  `},a={...r,name:"Shadow",render:t=>n`<gds-grid columns="5" gap="l">
      <gds-card
        padding="s{xs} m{l} l{l}"
        shadow="xs"
        border-radius="xs"
        variant="secondary"
      >
        <gds-flex display="flex" align-items="center" justify-content="center">
          XS
        </gds-flex>
      </gds-card>
      <gds-card
        padding="s{xs} m{l} l{l}"
        shadow="s"
        border-radius="xs"
        variant="secondary"
      >
        <gds-flex display="flex" align-items="center" justify-content="center">
          S
        </gds-flex>
      </gds-card>
      <gds-card
        padding="s{xs} m{l} l{l}"
        shadow="m"
        border-radius="xs"
        variant="secondary"
      >
        <gds-flex display="flex" align-items="center" justify-content="center">
          M
        </gds-flex>
      </gds-card>
      <gds-card
        padding="s{xs} m{l} l{l}"
        shadow="l"
        border-radius="xs"
        variant="secondary"
      >
        <gds-flex display="flex" align-items="center" justify-content="center">
          L
        </gds-flex>
      </gds-card>
      <gds-card
        padding="s{xs} m{l} l{l}"
        shadow="xl"
        border-radius="xs"
        variant="secondary"
      >
        <gds-flex display="flex" align-items="center" justify-content="center">
          xl
        </gds-flex>
      </gds-card>
    </gds-grid>`},e={...r,name:"Using with Grid",render:t=>n` <gds-grid columns="4" gap="l">
      <gds-div>
        <gds-card border-radius="xs">
          <gds-flex gap="m" flex-direction="column" align-items="flex-start">
            <gds-text font-size="l{heading-s} m{heading-s} s{heading-s}">
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
            <gds-text font-size="heading-s"> Span Columns: [2 / -1]</gds-text>
            <gds-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </gds-text>
            <gds-text font-size="body-m">
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
            <gds-text font-size="heading-s">Span all columns [1 / -1]</gds-text>
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
}`,...(g=(o=s.parameters)==null?void 0:o.docs)==null?void 0:g.source}}};var c,l,m,u,p;d.parameters={...d.parameters,docs:{...(c=d.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-flex gap="l" flex-direction="column">
      <gds-card variant="secondary">
        <gds-flex gap="l" flex-direction="column">
          <gds-text tag="h3">Light mode</gds-text>
          <gds-grid columns="2" gap="l">
            <gds-card variant="primary">Primary</gds-card>
            <gds-card variant="secondary">Secondary</gds-card>
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
        <gds-card>
          <gds-flex gap="l" flex-direction="column">
            <gds-text tag="h3">Dark mode</gds-text>
            <gds-grid columns="2" gap="l">
              <gds-card variant="primary">Primary</gds-card>
              <gds-card variant="secondary">Secondary</gds-card>
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
}`,...(m=(l=d.parameters)==null?void 0:l.docs)==null?void 0:m.source},description:{story:"Examples of different color variants",...(p=(u=d.parameters)==null?void 0:u.docs)==null?void 0:p.description}}};var x,f,v,y,b;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Shadow',
  render: args => html\`<gds-grid columns="5" gap="l">
      <gds-card
        padding="s{xs} m{l} l{l}"
        shadow="xs"
        border-radius="xs"
        variant="secondary"
      >
        <gds-flex display="flex" align-items="center" justify-content="center">
          XS
        </gds-flex>
      </gds-card>
      <gds-card
        padding="s{xs} m{l} l{l}"
        shadow="s"
        border-radius="xs"
        variant="secondary"
      >
        <gds-flex display="flex" align-items="center" justify-content="center">
          S
        </gds-flex>
      </gds-card>
      <gds-card
        padding="s{xs} m{l} l{l}"
        shadow="m"
        border-radius="xs"
        variant="secondary"
      >
        <gds-flex display="flex" align-items="center" justify-content="center">
          M
        </gds-flex>
      </gds-card>
      <gds-card
        padding="s{xs} m{l} l{l}"
        shadow="l"
        border-radius="xs"
        variant="secondary"
      >
        <gds-flex display="flex" align-items="center" justify-content="center">
          L
        </gds-flex>
      </gds-card>
      <gds-card
        padding="s{xs} m{l} l{l}"
        shadow="xl"
        border-radius="xs"
        variant="secondary"
      >
        <gds-flex display="flex" align-items="center" justify-content="center">
          xl
        </gds-flex>
      </gds-card>
    </gds-grid>\`
}`,...(v=(f=a.parameters)==null?void 0:f.docs)==null?void 0:v.source},description:{story:`@property shadow

Controls the box-shadow property of the card.

Shadow styles are as specified on the design system that range from xl-2xl, can be used like this:

\`\`\`html
<gds-card shadow="s"
\`\`\`

The above example will apply the shadow style of xs for small devices, xs for medium devices, and s for large devices.
The shadow styles are predfied on the tokens file and will be applied automativally based on the token value.`,...(b=(y=a.parameters)==null?void 0:y.docs)==null?void 0:b.description}}};var h,w,S,q,L;e.parameters={...e.parameters,docs:{...(h=e.parameters)==null?void 0:h.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Using with Grid',
  render: args => html\` <gds-grid columns="4" gap="l">
      <gds-div>
        <gds-card border-radius="xs">
          <gds-flex gap="m" flex-direction="column" align-items="flex-start">
            <gds-text font-size="l{heading-s} m{heading-s} s{heading-s}">
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
            <gds-text font-size="heading-s"> Span Columns: [2 / -1]</gds-text>
            <gds-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </gds-text>
            <gds-text font-size="body-m">
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
            <gds-text font-size="heading-s">Span all columns [1 / -1]</gds-text>
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
}`,...(S=(w=e.parameters)==null?void 0:w.docs)==null?void 0:S.source},description:{story:'Using `gds-card` with `gds-grid`\nThe `gds-card` can be used with the `gds-grid` to create a card layout with multiple cards.\nThe `gds-card` and `gds-div` accept properties like `column` and `row` where you can specify the number of columns specified on the grid to span or rows to span in vertical axis like on this example:\n\n```html\n<gds-div grid-column="2 / -1" grid-row="1 / -1"></gds-div>\n```',...(L=(q=e.parameters)==null?void 0:q.docs)==null?void 0:L.description}}};const nd=["Card","Variants","Cardshadow","CardGrid"];export{s as Card,e as CardGrid,a as Cardshadow,d as Variants,nd as __namedExportsOrder,rd as default};
