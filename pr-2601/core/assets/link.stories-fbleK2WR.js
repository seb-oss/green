import{h as t}from"./iframe-Dyp66QAI.js";import"./link-LMJ1KS-I.js";import"./popover-8JfMFvlz.js";import"./flex-_BP4Q3uA.js";import"./card-CKOKyKCm.js";import"./text-CCDJrdYw.js";import"./divider-DnzSJwFX.js";import"./magnifying-glass-B2GDDrcl.js";import"./star-qr3IYxsq.js";import"./arrow-right-DwF2QVo2.js";import"./chain-link-D5y-A6MV.js";import{a as i}from"./argTableProps-Chvf3EUj.js";import"./link.component-BxLFKUaM.js";import"./props-link-BtFxOBuh.js";import"./popover.component-B83dDhMU.js";import"./localized-decorator-CMm4RR_6.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-Chgvmx6e.js";import"./icon.component-DraLhdkX.js";import"./flex.component-rHWEU2RC.js";import"./card.component-DU9QvY6-.js";import"./default-typography.styles-B3IpUQw6.js";import"./divider.component-LdPxAvoI.js";import"./magnifying-glass.component-rGS2If7j.js";import"./star.component-5EOisg93.js";import"./arrow-right.component-BZHiJ2ys.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
