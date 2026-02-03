import{h as t}from"./iframe-n1Dj8K3S.js";import"./link-DTH3EvLV.js";import"./popover-BWzwBmKo.js";import"./flex-Bi-ZIuoN.js";import"./card-B2rP9g62.js";import"./text-Cgk3KxdX.js";import"./divider-CBXECnMx.js";import"./magnifying-glass-DbH-1Ml4.js";import"./star-DfGmhGIf.js";import"./arrow-right-zfRE-H_X.js";import"./chain-link-CVE9lzqZ.js";import{a as i}from"./argTableProps-D56rPIji.js";import"./link.component-lXtPP0k0.js";import"./props-link-DBYajTFO.js";import"./popover.component-SpG8tFxh.js";import"./localized-decorator-ByBCMnLw.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-DHRswq-2.js";import"./icon.component-CHAW-RNs.js";import"./flex.component-C4rDnwBK.js";import"./card.component-CQJwQRLA.js";import"./default-typography.styles-CKPwKUI2.js";import"./divider.component-CZSO0vsv.js";import"./magnifying-glass.component-DV32g1cB.js";import"./star.component-C-9sCZLr.js";import"./arrow-right.component-qY9OxTej.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
