import{h as t}from"./iframe-CNQuyvRb.js";import"./link-eVcrzPpT.js";import"./popover-DFIxMgNW.js";import"./flex-Lm2Pcsl6.js";import"./card-BItlIG1A.js";import"./text-CN8k_8z1.js";import"./divider-DTccM5SX.js";import"./magnifying-glass-BzmnC2JK.js";import"./star-BPvp0Wj5.js";import"./arrow-right-BHYwN5O5.js";import"./chain-link-DeKfou_C.js";import{a as i}from"./argTableProps-BLnSuWwU.js";import"./link.component-Cb9FGXiP.js";import"./props-link-5oB28sTa.js";import"./popover.component-DTqnKVdx.js";import"./localized-decorator-BXyTGXnb.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-BwITJTLF.js";import"./icon.component-DaaHJEBV.js";import"./flex.component-BRTHS8Pd.js";import"./card.component-CIUZbWPA.js";import"./default-typography.styles-DhRKsXst.js";import"./divider.component-Dk-vtwuO.js";import"./magnifying-glass.component-DKRxypY_.js";import"./star.component-bdcPw9Lh.js";import"./arrow-right.component-BBuMSgLG.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
