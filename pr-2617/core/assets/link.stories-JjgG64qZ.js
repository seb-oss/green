import{h as t}from"./iframe-DBW64OS2.js";import"./link-CDX0KoCM.js";import"./popover-B4SXX6u1.js";import"./flex-DPzRndwJ.js";import"./card-CJBCwjcV.js";import"./text-BJG-x9Wt.js";import"./divider-CfVZvU01.js";import"./magnifying-glass-CrAx_25h.js";import"./star-C938Nrbe.js";import"./arrow-right-L5OmJbTG.js";import"./chain-link-g5PTKyrZ.js";import{a as i}from"./argTableProps-maZYkxIi.js";import"./link.component-CKQ2wNUk.js";import"./props-link-ruzM32gV.js";import"./popover.component-Btoenqba.js";import"./localized-decorator-CxexuxZQ.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-CX6M_NkQ.js";import"./icon.component-POUIiQrW.js";import"./flex.component-xcxbZ-V6.js";import"./card.component-Bji3JkL7.js";import"./default-typography.styles-CTHBRRb4.js";import"./divider.component-CP9I7UIy.js";import"./magnifying-glass.component-DSoXvtRF.js";import"./star.component-irkm2Kxy.js";import"./arrow-right.component-CV_75kx3.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
