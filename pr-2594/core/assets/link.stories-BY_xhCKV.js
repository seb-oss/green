import{h as t}from"./iframe-B5XfIKHB.js";import"./link-C7vwjYdV.js";import"./popover-BNxZ6mMm.js";import"./flex-CwsvSK0H.js";import"./card-BWPS_XN9.js";import"./text-DJtXkNo6.js";import"./divider-v16R3zWs.js";import"./magnifying-glass-CuNoSksl.js";import"./star-DcqVHZiF.js";import"./arrow-right-O5ILxs42.js";import"./chain-link-C4lTdYcS.js";import{a as i}from"./argTableProps-BKZRkOuV.js";import"./link.component-C5CtcPRf.js";import"./props-link-CP25TI-h.js";import"./popover.component-UorKMUgR.js";import"./localized-decorator-C2Lx7U-P.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-CXwO99n7.js";import"./icon.component-B3TdVrm3.js";import"./flex.component-DV0l-Z1E.js";import"./card.component-CxWAuNko.js";import"./default-typography.styles-MX8jWe3a.js";import"./divider.component-NdEVKpSa.js";import"./magnifying-glass.component-b72N_xRG.js";import"./star.component-BBkAvxtH.js";import"./arrow-right.component-BCGfK-gq.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
