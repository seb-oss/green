import{h as t}from"./iframe-lN6_ugwX.js";import"./link-CvYQ5jcY.js";import"./popover-B_jGy0G3.js";import"./flex-Dk-FlpcE.js";import"./card-CnRU_dqU.js";import"./text-BnyIwtG1.js";import"./divider-BwcRfNbH.js";import"./magnifying-glass-GqVFpFbB.js";import"./star-C6H8LLka.js";import"./arrow-right-TR3pRxLw.js";import"./chain-link-B-CFBEYC.js";import{a as i}from"./argTableProps-CUHH72yP.js";import"./link.component-DY1ukxhd.js";import"./props-link-CGP-_Oo3.js";import"./popover.component-DM-Fqzl8.js";import"./localized-decorator-B52O1_F1.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-BGSqVWkt.js";import"./icon.component-BhPZNMJm.js";import"./flex.component-DPfdcRTn.js";import"./card.component-POqCae3K.js";import"./default-typography.styles-BT95qZUT.js";import"./divider.component-D1tuoEcE.js";import"./magnifying-glass.component-CBVUtUv3.js";import"./star.component-D3yS9TQn.js";import"./arrow-right.component-DM4DCvv2.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
