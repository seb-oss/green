import{h as t}from"./iframe-lV-WZRkU.js";import"./link-CMdDQBiS.js";import"./popover-C0PcPA2C.js";import"./flex-YZeQ_2g9.js";import"./card-C5yV1ZNi.js";import"./text-0YceOCLr.js";import"./divider-B7m2jZQG.js";import"./magnifying-glass-BkOP7oAS.js";import"./star-2woUQ-mS.js";import"./arrow-right-CeAXZVbt.js";import"./chain-link-BmjGsLbg.js";import{a as i}from"./argTableProps-DTDyvJ8h.js";import"./link.component-BHDYgxAv.js";import"./props-link-BhhuQLiA.js";import"./popover.component-DW6lKZbC.js";import"./localized-decorator-Bfo8VZz8.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-q-71JxD2.js";import"./icon.component-BYc8JeYU.js";import"./flex.component-SMBXM1bE.js";import"./card.component-CeI5UucY.js";import"./default-typography.styles-sV3rw3P0.js";import"./divider.component-2ymRvs9o.js";import"./magnifying-glass.component-Cpj4rm1G.js";import"./star.component-kK0MJptY.js";import"./arrow-right.component-CWk8o-yT.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
