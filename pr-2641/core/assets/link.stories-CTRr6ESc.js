import{h as t}from"./iframe-B7YZgcKE.js";import"./link-Cs3LLHRg.js";import"./popover-BRJsWIj3.js";import"./flex-C2VXCqaF.js";import"./card-YvaiwYcA.js";import"./text-CmkhD6u4.js";import"./divider-TwoMsZMK.js";import"./magnifying-glass-CWRBbKhD.js";import"./star-D6hTeYot.js";import"./arrow-right-3V4DGnnT.js";import"./chain-link-D3PBPmQv.js";import{a as i}from"./argTableProps-8aT8fwsa.js";import"./link.component-zreo0nMc.js";import"./props-link-bXtMpFHZ.js";import"./popover.component-DNezKekH.js";import"./localized-decorator-aCGv7-Sm.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-BkkhB4rq.js";import"./icon.component-Dtfi0Lwn.js";import"./flex.component-B_v7FAOT.js";import"./card.component-B0_KtSxN.js";import"./default-typography.styles-s5GlUOOp.js";import"./divider.component-BGhK25Q4.js";import"./magnifying-glass.component-VYvTICKU.js";import"./star.component-C-BUHi8H.js";import"./arrow-right.component-DD-BPT4P.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
