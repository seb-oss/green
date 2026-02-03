import{h as t}from"./iframe-B9gqZTf9.js";import"./link-CcfZBZco.js";import"./popover-ChiJiLlr.js";import"./flex-Ce0-a2IN.js";import"./card-Bz3dCPWv.js";import"./text-ChrTVsCc.js";import"./divider-DvSbvjju.js";import"./magnifying-glass-o0QOPBXN.js";import"./star-Dglbd6_n.js";import"./arrow-right-BZPNAUh8.js";import"./chain-link-ysRtHNrC.js";import{a as i}from"./argTableProps-CvO9PM69.js";import"./link.component-fpHEU9nP.js";import"./props-link-8qFix4uM.js";import"./popover.component-D41CJr2_.js";import"./localized-decorator-DtQpAqut.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-CeTXbQTx.js";import"./icon.component-VxoP50OR.js";import"./flex.component-BFFdnvB3.js";import"./card.component-7KNh_NNT.js";import"./default-typography.styles-Dwz4F_-H.js";import"./divider.component-Bwh9-Nnc.js";import"./magnifying-glass.component-Dp0U1jP8.js";import"./star.component-CRnCLA2A.js";import"./arrow-right.component-7pTZoG3L.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
