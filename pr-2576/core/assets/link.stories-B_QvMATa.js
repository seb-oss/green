import{h as t}from"./iframe-CmrrH2XL.js";import"./link-BiFuoRsc.js";import"./popover-Cn_SYY5f.js";import"./flex-BbNcfE9f.js";import"./card-BdmaW9zL.js";import"./text-CufSApbj.js";import"./divider-DiMEKbrR.js";import"./magnifying-glass-AFRsAkhu.js";import"./star--kdY2L48.js";import"./arrow-right-CkFHsjxa.js";import"./chain-link-8OdUrVTR.js";import{a as i}from"./argTableProps-B_GSohNW.js";import"./link.component-DIVz1U_2.js";import"./props-link-7mv6LLl-.js";import"./popover.component-BKAuFpFh.js";import"./localized-decorator-TsOf8-hd.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-DqKFYKsw.js";import"./icon.component-sO0eXaYd.js";import"./flex.component-D7AFLKmM.js";import"./card.component-skVbPrMS.js";import"./default-typography.styles-Fl8KvEhp.js";import"./divider.component-CRrkQuFe.js";import"./magnifying-glass.component-6AErnyn4.js";import"./star.component-P8ca2-RN.js";import"./arrow-right.component-B2_Dvxnx.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
