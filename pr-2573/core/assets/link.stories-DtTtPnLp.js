import{h as t}from"./iframe-VzA9xZxk.js";import"./link-CzFQGwHI.js";import"./popover-DGvVyr8w.js";import"./flex-Bx_cgYYr.js";import"./card-CaQWnynJ.js";import"./text-RTWexD8r.js";import"./divider-Caw3pVwj.js";import"./magnifying-glass-BK8GF9t2.js";import"./star-CU8LI3sn.js";import"./arrow-right-DKJkQQIO.js";import"./chain-link-BvyHW7gi.js";import{a as i}from"./argTableProps-DrA3g6xw.js";import"./link.component-CDIQVNry.js";import"./props-link-t7iW3hXH.js";import"./popover.component-Bg6sQVdr.js";import"./localized-decorator-Bq_NlrVe.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-DvVj-bX9.js";import"./icon.component-CXqjLzyD.js";import"./flex.component-CtitCc60.js";import"./card.component-Dqs7PlX8.js";import"./default-typography.styles-DvEDDb3-.js";import"./divider.component-Ccdpx-99.js";import"./magnifying-glass.component-C-TrPG-R.js";import"./star.component-BJSveB5k.js";import"./arrow-right.component-Dx7tkJ7l.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
      <gds-icon-chain-link slot="lead"></gds-icon-chain-link>
      Link text
    </gds-link>`},_={...e,name:"Icon: Trail",render:()=>t` <gds-link href="#">
      Link text
      <gds-icon-arrow-right slot="trail"></gds-icon-arrow-right>
    </gds-link>`},C={...e,name:"Text Decoration",render:()=>t`
    <gds-flex gap="4xl" width="600px" flex-direction="column">
      <gds-flex gap="xl">
        <gds-flex flex-direction="column" gap="m" flex="1">
          <gds-text tag="small">Link with Underline</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
          <gds-link href="#" text-decoration="underline"> Link text </gds-link>
        </gds-flex>
        <gds-flex flex-direction="column" gap="m" flex="1">
          <gds-text tag="small">Link without Underline</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
          <gds-link href="#" text-decoration="none"> Link text </gds-link>
        </gds-flex>
      </gds-flex>

      <gds-flex gap="xl">
        <gds-flex flex-direction="column" gap="m" flex="1">
          <gds-text tag="small">Link with Underline on Hover and Icon</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
          <gds-link href="#">
            Link text
            <gds-icon-arrow-right slot="trail"></gds-icon-arrow-right>
          </gds-link>
        </gds-flex>

        <gds-flex flex-direction="column" gap="m" flex="1">
          <gds-text tag="small">Link with No Underline on Hover</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
          <gds-link href="#" text-decoration="underline; hover:none">
            Link text
          </gds-link>
        </gds-flex>
      </gds-flex>
    </gds-flex>
  `},E={...e,name:"Label",render:()=>t`
    <gds-link href="#" label="Aria label is used">
      Link with aria-label
    </gds-link>
  `},F=["Basic","Lead","Trail","TextDecoration","Label"];export{B as Basic,E as Label,P as Lead,C as TextDecoration,_ as Trail,F as __namedExportsOrder,A as default};
