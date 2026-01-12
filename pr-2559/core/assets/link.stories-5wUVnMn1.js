import{h as t}from"./iframe-D7LW9HlS.js";import"./link-BN_T7Re4.js";import"./popover-CVR86QI4.js";import"./flex-Dn5og5k9.js";import"./card-CqGEukbk.js";import"./text-DXVMu8g-.js";import"./divider-CV_rPx--.js";import"./magnifying-glass-p3fDQ3mT.js";import"./star-B6HBCZrF.js";import"./arrow-right-Cs9CPObb.js";import"./chain-link-KnOJGz6D.js";import{a as i}from"./argTableProps-B5Xfym_S.js";import"./link.component-D7Kr7W8a.js";import"./props-link-B50BMe9n.js";import"./popover.component-xqtD-veO.js";import"./localized-decorator-D2NO-b-n.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-Cq-2Duvv.js";import"./icon.component-CT-VwdJz.js";import"./flex.component-llKK8EQ2.js";import"./card.component-Bxf8mI4M.js";import"./default-typography.styles-D7s8x7Ey.js";import"./divider.component-f8rrdrle.js";import"./magnifying-glass.component-M6vzJX8S.js";import"./star.component-CgTnPvmQ.js";import"./arrow-right.component-DPPq4u3F.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
