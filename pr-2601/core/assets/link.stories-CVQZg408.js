import{h as t}from"./iframe-Cg-uRGyf.js";import"./link-DXLrcn7b.js";import"./popover-D5pm6JZ4.js";import"./flex-DMo5xvlQ.js";import"./card-C42GUX1E.js";import"./text-BMteJ2zy.js";import"./divider-BTFxYD9q.js";import"./magnifying-glass-BqeJgWsq.js";import"./star-C_VjcWjt.js";import"./arrow-right-C-EILQy_.js";import"./chain-link-DtbTabkz.js";import{a as i}from"./argTableProps-Dr8eZcy2.js";import"./link.component-D3ZbqBfw.js";import"./props-link-Dhngqfrc.js";import"./popover.component-Cw1WA-tO.js";import"./localized-decorator-CzsJr5KX.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-C1ztOO65.js";import"./icon.component-BnwNMKHB.js";import"./flex.component-DTgxc_ij.js";import"./card.component-Bp9JCaYI.js";import"./default-typography.styles-CAa_femO.js";import"./divider.component-CPbU3nlH.js";import"./magnifying-glass.component-Ba6V-LaC.js";import"./star.component-Doj1kY2h.js";import"./arrow-right.component-3rwdf8cE.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
