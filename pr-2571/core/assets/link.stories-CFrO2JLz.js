import{h as t}from"./iframe-CGVjz2_e.js";import"./link-JWehxxXt.js";import"./popover-BOd8Xg-j.js";import"./flex-BJVW4MmU.js";import"./card-CgbkiNDT.js";import"./text-BVfPfYwA.js";import"./divider-DrlL2Hia.js";import"./magnifying-glass-DM2asDT_.js";import"./star-DlcF_PrH.js";import"./arrow-right-CFmlEuJ1.js";import"./chain-link-Bl4Y8GFu.js";import{a as i}from"./argTableProps-DOxNT6OO.js";import"./link.component-CrnUgSOS.js";import"./props-link-sb95zCV4.js";import"./popover.component-B3TqAnDJ.js";import"./localized-decorator-CnSFr7gy.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-DRElvAQH.js";import"./icon.component-Dnah42s8.js";import"./flex.component-tPhgzTIn.js";import"./card.component-BR-VdkaL.js";import"./default-typography.styles-ncjlrQKp.js";import"./divider.component-BqH14kn3.js";import"./magnifying-glass.component-DW_CoaSG.js";import"./star.component-BN1uZ_Cn.js";import"./arrow-right.component-07dcKK5f.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
