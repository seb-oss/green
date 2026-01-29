import{h as t}from"./iframe-BOpMewhg.js";import"./link-DdfqPa3p.js";import"./popover-ndPk7VM1.js";import"./flex-IKmaGDmd.js";import"./card-BOJJk3in.js";import"./text-Chqa-7h0.js";import"./divider-B7prl9oX.js";import"./magnifying-glass-bBt9bzmD.js";import"./star-BxsdhC0-.js";import"./arrow-right-CiYjEbEG.js";import"./chain-link-CxlbyErb.js";import{a as i}from"./argTableProps-DZz-TYRX.js";import"./link.component-BdUwi17J.js";import"./props-link-QM0eFkMh.js";import"./popover.component-D23Z55Xh.js";import"./localized-decorator-wGmHp73-.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-BajC_76i.js";import"./icon.component-c7RjI47s.js";import"./flex.component-CiLmuYhc.js";import"./card.component-CaDj0kgd.js";import"./default-typography.styles-BOZ0_len.js";import"./divider.component-BhF02Vvw.js";import"./magnifying-glass.component-DVj3WkWb.js";import"./star.component-CsRt5VEy.js";import"./arrow-right.component-DLNzYank.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
