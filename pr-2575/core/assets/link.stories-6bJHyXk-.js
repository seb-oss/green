import{h as t}from"./iframe-BjB7oDKT.js";import"./link-CSaeskHs.js";import"./popover-wn5jaMlO.js";import"./flex-CZsta-58.js";import"./card-Be4T82WB.js";import"./text-CGzplvtA.js";import"./divider-DM8an_yS.js";import"./magnifying-glass-_gowgYmG.js";import"./star-CMwl4kgy.js";import"./arrow-right-jSAdlGgK.js";import"./chain-link-e1c8dJPR.js";import{a as i}from"./argTableProps-CX7AXzvE.js";import"./link.component-C4BNd0DY.js";import"./props-link-BF8Fr0S1.js";import"./popover.component-DbSl4lKp.js";import"./localized-decorator-CWtqtl7U.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-BibNx_RM.js";import"./icon.component-DlGg0fkI.js";import"./flex.component-Z2JnHsVp.js";import"./card.component-CVQTQ-EQ.js";import"./default-typography.styles-BrFKFl9e.js";import"./divider.component-CJbKxQG6.js";import"./magnifying-glass.component-qkWJN_rp.js";import"./star.component-Bn6sxsCP.js";import"./arrow-right.component-BdnEplNE.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
