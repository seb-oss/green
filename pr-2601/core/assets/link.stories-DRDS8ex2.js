import{h as t}from"./iframe-CDYwBWwb.js";import"./link-CZCrPSid.js";import"./popover-BTGzfi4H.js";import"./flex-B2lKDRk2.js";import"./card-BE6ML2c4.js";import"./text-BCzI95gP.js";import"./divider-DfhS7elz.js";import"./magnifying-glass-Dw4tFcJa.js";import"./star-CYcF9YXm.js";import"./arrow-right-BfVZ5aAr.js";import"./chain-link-CcquaYYS.js";import{a as i}from"./argTableProps-CdpJ1EVI.js";import"./link.component-B-MWnYiz.js";import"./props-link-Bl9urhyP.js";import"./popover.component-D26aIRBH.js";import"./localized-decorator-CTPpDN0m.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-DVIXh5fg.js";import"./icon.component-DsQvcCLO.js";import"./flex.component-Ci8HJepP.js";import"./card.component-CA9Ke_4r.js";import"./default-typography.styles-HUtEMzrC.js";import"./divider.component-BFknL2F1.js";import"./magnifying-glass.component-CT0bua8g.js";import"./star.component-D_f2jw6n.js";import"./arrow-right.component-VvjglSST.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
