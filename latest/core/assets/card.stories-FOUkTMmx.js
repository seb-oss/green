import{b as r}from"./iframe-BhBXWYpV.js";import{a as S}from"./argTableProps-B35avH1i.js";import"./card-BKUWI3Fo.js";import"./img-7zWX25kA.js";import"./video-D39xJsaR.js";import"./div-CUGPOH2T.js";import"./mask-RgsuRPQW.js";import"./flex-DJbfbMKc.js";import"./text-C7W8wmSq.js";import"./divider-Dcw3FQY4.js";import"./segmented-control-CpxSSKei.js";import"./segment-ChpMYwj3.js";import"./dropdown-DbwoobLF.js";import"./option-BXkt16K4.js";import"./menu-heading-BqZH9sWt.js";import"./arrow-down-Cc3g3cbH.js";import"./arrow-right-DUjmezpt.js";import"./circles-three-CA3tKEYq.js";import"./preload-helper-Dp1pzeXC.js";import"./card.component-BZcJNlkI.js";import"./img.component-CRrs4HLI.js";import"./video.component-DVjZY598.js";import"./mask.component-D27ZHoEQ.js";import"./flex.component-BoVuiBvi.js";import"./text.component-tWh0DdT1.js";import"./default-typography.styles-ErHUA9wN.js";import"./divider.component-CjE7VBzm.js";import"./localized-decorator-a0D3Chmm.js";import"./resize-observer-B9k8v2TZ.js";import"./chevron-left.component-BWeL6R5j.js";import"./icon.component-Cs4MsctY.js";import"./chevron-right.component-D8a6Kka-.js";import"./dropdown.component-DCaiC0cc.js";import"./query-async-CDvSyKzs.js";import"./floating-ui.dom-Ceeo7fpE.js";import"./form-control-host.style-CFDuinEw.js";import"./form-control-header.component-DqNbZ3Yf.js";import"./badge.component-BZo8oUbp.js";import"./triangle-exclamation.component-qbfqDxf4.js";import"./ref-DbWx7YNi.js";import"./unwrap-slots-DRr-Arif.js";import"./checkmark.component-T_ppsQ2L.js";import"./rbcb-toggle.template-C8Kf0uDt.js";import"./chevron-bottom.component-DieyWgt-.js";import"./cross-small.component-dDuB6uW5.js";import"./popover.component-CCk-bb3B.js";import"./menu-heading.component-CQd79GeS.js";import"./arrow-down.component-CPrUhsmg.js";import"./arrow-right.component-W47wbLrI.js";import"./circles-three.component-CeP6UW5G.js";const jt={title:"Components/Card",component:"gds-card",tags:["autodocs"],argTypes:{...S("gds-card")},parameters:{docs:{description:{component:"The card groups related content into a single container.\n\n`gds-card` inherits all properties from `gds-div`, but comes with some predefined defaults\nand a shortcut property for specifiying different card variants.\n\n\n@extends `gds-div`"}}}},s={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{disable:!0}}},n={...s,args:{innerHTML:"Card content",style:"max-width: 200px"}},t={...s,render:()=>r`
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
  `},e={...s,name:"Box shadow",render:q=>r`<gds-grid
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
    </gds-grid>`},d={...s,name:"Using with Grid",render:q=>r` <gds-grid columns="4" gap="l">
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
    </gds-grid>`};var i,a,o;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  ...DefaultParams,
  args: {
    innerHTML: 'Card content',
    style: 'max-width: 200px'
  }
}`,...(o=(a=n.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};var l,g,c,m,u;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(c=(g=t.parameters)==null?void 0:g.docs)==null?void 0:c.source},description:{story:"Examples of different color variants",...(u=(m=t.parameters)==null?void 0:m.docs)==null?void 0:u.description}}};var p,x,f,b,h;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(f=(x=e.parameters)==null?void 0:x.docs)==null?void 0:f.source},description:{story:`@property box-shadow

Controls the box-shadow styling of the card.

Shadow styles are as specified on the design system that range from "s" to "xl" and can be used like this:

\`\`\`html
<gds-card box-shadow="s"></gds-card>
\`\`\`

The above example will apply the box-shadow style of "s" for small device sizes. The box-shadow style values are predefined in the design tokens.`,...(h=(b=e.parameters)==null?void 0:b.docs)==null?void 0:h.description}}};var y,w,v,j,L;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(v=(w=d.parameters)==null?void 0:w.docs)==null?void 0:v.source},description:{story:'Using `gds-card` with `gds-grid`\nThe `gds-card` can be used with the `gds-grid` to create a card layout with multiple cards.\nThe `gds-card` and `gds-div` accept properties like `column` and `row` where you can specify the number of columns specified on the grid to span or rows to span in vertical axis like on this example:\n\n```html\n<gds-div grid-column="2 / -1" grid-row="1 / -1"></gds-div>\n```',...(L=(j=d.parameters)==null?void 0:j.docs)==null?void 0:L.description}}};const Lt=["Card","Variants","Cardshadow","CardGrid"];export{n as Card,d as CardGrid,e as Cardshadow,t as Variants,Lt as __namedExportsOrder,jt as default};
