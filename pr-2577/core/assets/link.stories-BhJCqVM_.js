import{h as t}from"./iframe-Dju8L9ft.js";import"./link-Bi2Q2HS-.js";import"./popover-DMIIiWOm.js";import"./flex-BDtaEnw3.js";import"./card-BMmCeVZE.js";import"./text-B_8so0kG.js";import"./divider-0L3SPRUd.js";import"./magnifying-glass-CDx_Rq6Q.js";import"./star-2Ya3xVrZ.js";import"./arrow-right-BI9H8fEF.js";import"./chain-link-CDxHBicm.js";import{a as i}from"./argTableProps-Dt-czP5Y.js";import"./link.component-CT3m982P.js";import"./props-link-w25SBCJO.js";import"./popover.component-y8_ONLDF.js";import"./localized-decorator-CuXAXstt.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-BN4njoyB.js";import"./icon.component-CEYc1IuV.js";import"./flex.component-Cz6OeJgR.js";import"./card.component-B4Ap9MbW.js";import"./default-typography.styles-CJnZpXBU.js";import"./divider.component-3aYx5GDb.js";import"./magnifying-glass.component-BIojrXOu.js";import"./star.component-DkIJPo9p.js";import"./arrow-right.component-C37ZVUtt.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
