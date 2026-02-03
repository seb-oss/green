import{h as t}from"./iframe-LkT8NquK.js";import"./link-DCQyoQPY.js";import"./popover-CoZ7C_GK.js";import"./flex-oqJDwYhp.js";import"./card-BWtlthAr.js";import"./text-DQY7-3D7.js";import"./divider-DsxcBN3K.js";import"./magnifying-glass-BxqSY6XV.js";import"./star-DdkAJ62T.js";import"./arrow-right-B_eGjwpO.js";import"./chain-link-DlOePuSP.js";import{a as i}from"./argTableProps-CODBAdLs.js";import"./link.component-2A_dfGCD.js";import"./props-link-B9ddiXSp.js";import"./popover.component-C8i4UoS0.js";import"./localized-decorator-CuqxbbFR.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-BsYxiOB5.js";import"./icon.component-C7eGfAkH.js";import"./flex.component-D5Os17a3.js";import"./card.component-DomMnCME.js";import"./default-typography.styles-Bceb0tr3.js";import"./divider.component-C3lj_XzG.js";import"./magnifying-glass.component-Bz9wlH-_.js";import"./star.component-BkBoFJ83.js";import"./arrow-right.component-C2HwfXS9.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
