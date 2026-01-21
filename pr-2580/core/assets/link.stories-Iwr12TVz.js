import{h as t}from"./iframe-DCZi1hNl.js";import"./link-CzbLxMBW.js";import"./popover-BM9nmkJY.js";import"./flex-lUBsuVHj.js";import"./card-oSj1jAQh.js";import"./text-Dwg7KP8l.js";import"./divider-iARmqlxP.js";import"./magnifying-glass-x90Zz9Zr.js";import"./star-BCZeCf-3.js";import"./arrow-right-BxMB3-rB.js";import"./chain-link-CBM2uzIN.js";import{a as i}from"./argTableProps-CKfEYu_f.js";import"./link.component-2yvPFvSg.js";import"./props-link-CrUkxzlr.js";import"./popover.component-DkksO6QR.js";import"./localized-decorator-Cy9weBLt.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-ClJAay1H.js";import"./icon.component-vpRXZ3fA.js";import"./flex.component-CB4yYzq3.js";import"./card.component-CsDaW6EY.js";import"./default-typography.styles-ClwZ4FDN.js";import"./divider.component-DK1cbmfE.js";import"./magnifying-glass.component-GRUO_CHZ.js";import"./star.component-2EbaDLYu.js";import"./arrow-right.component-CfD1gNUf.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
