import{h as t}from"./iframe-hOF0QXhq.js";import"./link-CZCo1ckE.js";import"./popover-Yr7e2piw.js";import"./flex-CyDx8GLH.js";import"./card-BmMytm5A.js";import"./text-5qFwuNkx.js";import"./divider-CGc1m1kM.js";import"./magnifying-glass-CHfGCmVc.js";import"./star-CAQQTFE3.js";import"./arrow-right-CXaXe2Vm.js";import"./chain-link-CseYC_rf.js";import{a as i}from"./argTableProps-DrYJdFYi.js";import"./link.component-DzcYpxfX.js";import"./props-link-De3mCNfh.js";import"./popover.component-_RgAKYqt.js";import"./localized-decorator-Bg9TnhtJ.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-BtSanF3R.js";import"./icon.component-10D176rT.js";import"./flex.component-CBkQFOb4.js";import"./card.component-CKkLG6yj.js";import"./default-typography.styles-SVwKX1G6.js";import"./divider.component-Jl0DJkrB.js";import"./magnifying-glass.component-DriDzIKM.js";import"./star.component-CnhU6U1e.js";import"./arrow-right.component-B2J3YGOC.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
