import{h as t}from"./iframe-ivbVTJxO.js";import"./link-CgHzrSwR.js";import"./popover-B6frLOC-.js";import"./flex-B4A_ZbgA.js";import"./card-DL9HiaeH.js";import"./text-CMuIXejt.js";import"./divider-DiWEiSzZ.js";import"./magnifying-glass-BJlLmPCc.js";import"./star-ngBjKWVl.js";import"./arrow-right-cZv3QeuJ.js";import"./chain-link-DSn7G1dK.js";import{a as i}from"./argTableProps-ZXUeLddG.js";import"./link.component-DEj09DjE.js";import"./props-link-BkP0GewS.js";import"./popover.component-B5YD9oEZ.js";import"./localized-decorator-Dy8Y3IuT.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-qAO5-i7n.js";import"./icon.component-C_b0KA3_.js";import"./flex.component-B_f8mxUu.js";import"./card.component-YCIPbX_E.js";import"./default-typography.styles-C4jeh2De.js";import"./divider.component-DrsC7sqG.js";import"./magnifying-glass.component-Cry1DGpG.js";import"./star.component-EDSVcCLL.js";import"./arrow-right.component-BE7z18JG.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
