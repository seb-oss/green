import{h as t}from"./iframe-ByV2Hk15.js";import"./link-BMv1iYTQ.js";import"./popover-Bbr2_gG7.js";import"./flex-Dsd-7_IO.js";import"./card-Crg9S55n.js";import"./text-DRjIGOe5.js";import"./divider-D5i70urH.js";import"./magnifying-glass-CDJRYvb3.js";import"./star-9v8ZH3A2.js";import"./arrow-right-pFOIXZ2c.js";import"./chain-link-BTjJU-LF.js";import{a as i}from"./argTableProps-dh6_PC9d.js";import"./link.component-B5iRF9RX.js";import"./props-link-B3fxcSGy.js";import"./popover.component-DvZzjuOT.js";import"./localized-decorator-rFdNAhQz.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-BB1iPWPd.js";import"./icon.component-BopIGL_s.js";import"./flex.component-BRqfWEAh.js";import"./card.component-BoU0eflb.js";import"./default-typography.styles-5I6gCIbf.js";import"./divider.component-B2R9U5V1.js";import"./magnifying-glass.component-CqUhtLbT.js";import"./star.component-DsyUYg0h.js";import"./arrow-right.component-Cc5ciMXx.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
