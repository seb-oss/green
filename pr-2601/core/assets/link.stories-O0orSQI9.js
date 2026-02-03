import{h as t}from"./iframe-DLqKMtk0.js";import"./link-CQzXYlTa.js";import"./popover-jVRdIxOf.js";import"./flex-DOoac8-e.js";import"./card-CZeJGyqc.js";import"./text-DR4TzMuQ.js";import"./divider-B0IVI7gy.js";import"./magnifying-glass-DlAXJ_yN.js";import"./star-C_MKB3hm.js";import"./arrow-right-keZBBYnW.js";import"./chain-link-ClPjpM9y.js";import{a as i}from"./argTableProps-C5Se0E7_.js";import"./link.component-BTStfQUA.js";import"./props-link-D4DQ1inn.js";import"./popover.component-D2U_gyG4.js";import"./localized-decorator-DOVk7XSQ.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-Bdgc3Vde.js";import"./icon.component-D1vcvTVf.js";import"./flex.component-DeoECx29.js";import"./card.component-HuMgwQrE.js";import"./default-typography.styles-NsglG_Ww.js";import"./divider.component-O7A8J25-.js";import"./magnifying-glass.component-Bic2LM_Y.js";import"./star.component-D39eEVGW.js";import"./arrow-right.component-D8TfDfC_.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
