import{h as t}from"./iframe--vWvZ7y_.js";import"./link-YQmDxRRL.js";import"./popover-1XHbe_WL.js";import"./flex-DxJoojJE.js";import"./card-Cbn3eHsn.js";import"./text-BHEoZvPg.js";import"./divider-C5qHgaJo.js";import"./magnifying-glass---0HlQvp.js";import"./star-BZWk2SWS.js";import"./arrow-right-DNxHNmaI.js";import"./chain-link-B3uhPqr4.js";import{a as i}from"./argTableProps-C-PfqTu8.js";import"./link.component-DeIxAxAi.js";import"./props-link-CawDpntt.js";import"./popover.component-HKG-Ha3y.js";import"./localized-decorator-DFTApz3b.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-B4nl_1Ce.js";import"./icon.component-CY3ew2P1.js";import"./flex.component-Bu9Fk6VG.js";import"./card.component-DVsY5IqQ.js";import"./default-typography.styles-BLmgj2CW.js";import"./divider.component-B8vTCgvF.js";import"./magnifying-glass.component-D3r-0MKa.js";import"./star.component-BTtB7eoX.js";import"./arrow-right.component-DUbIjej1.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
