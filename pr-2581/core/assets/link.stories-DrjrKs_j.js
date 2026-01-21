import{h as t}from"./iframe-DNCl8bwN.js";import"./link-BIDrznE0.js";import"./popover-CSDhmrZ8.js";import"./flex-CRILzedP.js";import"./card-53kzXfLU.js";import"./text-CVbgGQTd.js";import"./divider-DyE5Nghb.js";import"./magnifying-glass-fFUqX-7O.js";import"./star-BvU8qPwA.js";import"./arrow-right-CY9Wh5eo.js";import"./chain-link-MeXWKDbm.js";import{a as i}from"./argTableProps-CoNdzu2L.js";import"./link.component-DRA3fJXB.js";import"./props-link-DvQ2hC-m.js";import"./popover.component-v-zyXMBm.js";import"./localized-decorator-iH5IXUB9.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-BD3TlzIe.js";import"./icon.component-DIl6hTVy.js";import"./flex.component-C_-d_UZv.js";import"./card.component-5r6YovpM.js";import"./default-typography.styles-CF6mh9dY.js";import"./divider.component-BiFsssUy.js";import"./magnifying-glass.component-BnpUKgLH.js";import"./star.component-BFWR708p.js";import"./arrow-right.component-DC0dd9wx.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
