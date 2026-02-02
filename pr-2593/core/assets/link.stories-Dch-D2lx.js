import{h as t}from"./iframe-DP9akqBZ.js";import"./link-DWgNwIfF.js";import"./popover-HolN3tz8.js";import"./flex-CmghNpu-.js";import"./card-U95lOQN5.js";import"./text-DpJqZUqo.js";import"./divider-D-dBI0Dj.js";import"./magnifying-glass-C4OykFP_.js";import"./star-CK0E8Cg-.js";import"./arrow-right-Bx4MIQde.js";import"./chain-link-DvQbSe7q.js";import{a as i}from"./argTableProps-i-gmEOqo.js";import"./link.component-BlrurYMB.js";import"./props-link-CVfHFMSL.js";import"./popover.component-CEdm7zWa.js";import"./localized-decorator-DjiVRTA8.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-j0vAr5j-.js";import"./icon.component-B1kgOlUX.js";import"./flex.component-BkeSN3lL.js";import"./card.component-lHB-B_as.js";import"./default-typography.styles-CmgmI0Qq.js";import"./divider.component-DwbEXDii.js";import"./magnifying-glass.component-G0rAGOoY.js";import"./star.component-Cnah8jtZ.js";import"./arrow-right.component-DKmZ-aYB.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
