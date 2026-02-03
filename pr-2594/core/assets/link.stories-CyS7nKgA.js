import{h as t}from"./iframe-DjmpXFqH.js";import"./link-oAKdRy5O.js";import"./popover-DEkLl76-.js";import"./flex-D4gP1dlV.js";import"./card-C1NPxfBo.js";import"./text-DGFrR1JP.js";import"./divider-CN6MWUGN.js";import"./magnifying-glass-C9cWc8mv.js";import"./star-B2cQRrH0.js";import"./arrow-right-Baac7cAV.js";import"./chain-link-BD4S43Lq.js";import{a as i}from"./argTableProps-DZ-zJbZi.js";import"./link.component-CEs8Y2Ao.js";import"./props-link-CIX-8V7M.js";import"./popover.component-D0wlSGbw.js";import"./localized-decorator-YyVu2sHJ.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-DSyj6cJs.js";import"./icon.component-DMllZNXO.js";import"./flex.component-CUJrpbdn.js";import"./card.component-DjDji-0O.js";import"./default-typography.styles-DmjJ62Ei.js";import"./divider.component-MaTTR7gQ.js";import"./magnifying-glass.component-Dk_Oyqhn.js";import"./star.component-Br-BjJkA.js";import"./arrow-right.component-C4QATxyU.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
