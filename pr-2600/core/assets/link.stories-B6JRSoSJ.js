import{h as t}from"./iframe-CWB-UUgA.js";import"./link-CokWKJCl.js";import"./popover-GJEMoU_e.js";import"./flex-BQc3gsH6.js";import"./card-Cp7mxoqm.js";import"./text-D3gmhwXg.js";import"./divider-B1Jx4QPl.js";import"./magnifying-glass-Cf7QNYv2.js";import"./star-B5eOzg2n.js";import"./arrow-right--YgaH3nJ.js";import"./chain-link-BuLJltSy.js";import{a as i}from"./argTableProps-CbapwQsW.js";import"./link.component-SbcyKthK.js";import"./props-link-DOv12V2W.js";import"./popover.component-DjL_3Zo4.js";import"./localized-decorator-DhqxWkEo.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-DURJYNWe.js";import"./icon.component-DzOkRgBV.js";import"./flex.component-D0qqtZ6S.js";import"./card.component-BstX9cht.js";import"./default-typography.styles-CtSbzbW1.js";import"./divider.component-NrNiJJUI.js";import"./magnifying-glass.component-Dul2AAto.js";import"./star.component-CKKXBQia.js";import"./arrow-right.component-DGh_-qsE.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
