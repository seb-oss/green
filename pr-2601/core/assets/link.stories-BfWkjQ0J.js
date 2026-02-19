import{h as t}from"./iframe-DGztXBjb.js";import"./link-BwJvhN1L.js";import"./popover-BhBedSbo.js";import"./flex-vU-FIwLn.js";import"./card-Cg_r2Vh4.js";import"./text-BhubKi_I.js";import"./divider-DM1IjiIB.js";import"./magnifying-glass-BEJaJ7Si.js";import"./star-BsAPA7SW.js";import"./arrow-right-CHbCrqxd.js";import"./chain-link-CAVipgKF.js";import{a as i}from"./argTableProps-qIZCpOtF.js";import"./link.component-CFMj1HWw.js";import"./props-link-DhpZO8VO.js";import"./popover.component-ScE47tAH.js";import"./localized-decorator-DCYRoi_y.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-DsqCvZwm.js";import"./icon.component-J0zakHWz.js";import"./flex.component-DOCxKVTZ.js";import"./card.component-CY16MePX.js";import"./default-typography.styles-Db98ZhSe.js";import"./divider.component-BMEBDq4S.js";import"./magnifying-glass.component-4qSWXYLT.js";import"./star.component-CTTrH7Xj.js";import"./arrow-right.component-BtxNiWO4.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
