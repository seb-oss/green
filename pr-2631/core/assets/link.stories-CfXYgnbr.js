import{h as t}from"./iframe-YMtIRB43.js";import"./link-Dmzn6VzI.js";import"./popover-C0Bhxadc.js";import"./flex-bxGUU3Dm.js";import"./card-CNhsfV3i.js";import"./text-DFCchvyS.js";import"./divider-Duu6EBF1.js";import"./magnifying-glass-Dg81DTcs.js";import"./star-IBjytELb.js";import"./arrow-right-BzuhaEuX.js";import"./chain-link-MMHF6HWj.js";import{a as i}from"./argTableProps-T5Ml5YC2.js";import"./link.component-Cb_ggdqC.js";import"./props-link-DNA57bCo.js";import"./popover.component-CxGmkxVT.js";import"./localized-decorator-CEky2t5C.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-BRsLDS15.js";import"./icon.component-Di_d-Edb.js";import"./flex.component-CQ1kCPd9.js";import"./card.component-DQt45TEv.js";import"./default-typography.styles-Dq6tzE1r.js";import"./divider.component-CiS_BaCC.js";import"./magnifying-glass.component-DEaDlKXP.js";import"./star.component-C_fDs1l1.js";import"./arrow-right.component-B_zWwwlm.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
