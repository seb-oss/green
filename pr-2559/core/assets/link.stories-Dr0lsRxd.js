import{h as t}from"./iframe-DXWmPRHc.js";import"./link-CC6awpnA.js";import"./popover-CuacS61q.js";import"./flex-B-_5FH9-.js";import"./card-CrNEhggm.js";import"./text-Bl0ogAiA.js";import"./divider-B_wvLmHZ.js";import"./magnifying-glass-CxJP_CqK.js";import"./star-UxnYHDAR.js";import"./arrow-right-qn4uFec1.js";import"./chain-link-DCt-qupv.js";import{a as i}from"./argTableProps-DnCbNmrO.js";import"./link.component-DPYEHHJf.js";import"./props-link-CTQgWqsg.js";import"./popover.component-B9CWbhKy.js";import"./localized-decorator-6pJKV14k.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-DVQsmPaB.js";import"./icon.component-D4hHTvoO.js";import"./flex.component-CA_YrKCB.js";import"./card.component-CSL_lt_n.js";import"./default-typography.styles-CgCi3xeb.js";import"./divider.component-DHieXqDN.js";import"./magnifying-glass.component-CaSLoz-5.js";import"./star.component-CvK31B5n.js";import"./arrow-right.component-Bdus4Cey.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
