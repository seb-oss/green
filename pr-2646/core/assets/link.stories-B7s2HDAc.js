import{h as t}from"./iframe-DVjfo5Ln.js";import"./link-7z0rc6jc.js";import"./popover-6b0VaG3W.js";import"./flex-DsCeaan8.js";import"./card-CbrbHwEO.js";import"./text-COZJ_Ib1.js";import"./divider-BOjLYbTD.js";import"./magnifying-glass-CPnNS9re.js";import"./star-BYRxUPIS.js";import"./arrow-right-C_FY5uZE.js";import"./chain-link-C5ZAiUYG.js";import{a as i}from"./argTableProps-CnpqC5LF.js";import"./link.component-D8Bh1enQ.js";import"./props-link-CFuCEScT.js";import"./popover.component-147-LKov.js";import"./localized-decorator-CZSlAWla.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-I1_hNyTG.js";import"./icon.component-BtBCgRf6.js";import"./flex.component-DZ5xRByU.js";import"./card.component-pTOYvxvj.js";import"./default-typography.styles-XHEVKs03.js";import"./divider.component-g4VfruKN.js";import"./magnifying-glass.component-6vdtp_jY.js";import"./star.component-Bp-rNdcO.js";import"./arrow-right.component-CkB3aKKg.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
