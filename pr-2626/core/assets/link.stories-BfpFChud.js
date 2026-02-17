import{h as t}from"./iframe-BRHd-8xu.js";import"./link-w6_c0sN2.js";import"./popover-C8lh7oYv.js";import"./flex-CutkjKW5.js";import"./card-Dt2s6eX8.js";import"./text-Gx96_eCS.js";import"./divider-Bc_FBVHi.js";import"./magnifying-glass-BhlObvkA.js";import"./star-mXBzJExp.js";import"./arrow-right-BKgmrCLH.js";import"./chain-link-PwrxVOC_.js";import{a as i}from"./argTableProps-BxSqGFQx.js";import"./link.component-BdMc7ddx.js";import"./props-link-D4dukxdf.js";import"./popover.component-B3pnHN9n.js";import"./localized-decorator-D09VkCtY.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-DUbvF7d8.js";import"./icon.component-B25dK3_p.js";import"./flex.component-xbpp9NVQ.js";import"./card.component-CoBX20lT.js";import"./default-typography.styles-BrULXeAC.js";import"./divider.component-4I9mXr_T.js";import"./magnifying-glass.component-RFKmAmBA.js";import"./star.component-CSonOk7c.js";import"./arrow-right.component-DCjmfhIr.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
