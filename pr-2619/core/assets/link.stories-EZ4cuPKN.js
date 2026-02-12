import{h as t}from"./iframe-CFqsouBd.js";import"./link-BclfdYWX.js";import"./popover-DDE60LQN.js";import"./flex-D96bEdk7.js";import"./card-DEDbIsel.js";import"./text-CKpd57ZT.js";import"./divider-BP1hhkKc.js";import"./magnifying-glass-Hwou43NX.js";import"./star-DNbf5ctG.js";import"./arrow-right-DTcuCEjQ.js";import"./chain-link-CMIRJjeE.js";import{a as i}from"./argTableProps-R0keO9q2.js";import"./link.component-BApa1XZE.js";import"./props-link-D68CYvtQ.js";import"./popover.component-BP-p6y6g.js";import"./localized-decorator-CrkrOgMj.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-DaeMSyXp.js";import"./icon.component-C4uR9Pan.js";import"./flex.component-DW9Blz64.js";import"./card.component-C-3XsPe0.js";import"./default-typography.styles-BKWNFBB3.js";import"./divider.component-CXJPt87M.js";import"./magnifying-glass.component-CMIhVwpO.js";import"./star.component-q7N74MBe.js";import"./arrow-right.component-Cvz21IpJ.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
