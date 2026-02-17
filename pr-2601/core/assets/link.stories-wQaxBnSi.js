import{h as t}from"./iframe-0DX4ZrJa.js";import"./link-CxYY5VzV.js";import"./popover-KsMPi0ON.js";import"./flex-969M4YG9.js";import"./card-BDGkdEVO.js";import"./text-roSAtP2A.js";import"./divider-BXWd5WXP.js";import"./magnifying-glass-CHahM7Yn.js";import"./star-Cbf_9Jjw.js";import"./arrow-right-DvrYlBZI.js";import"./chain-link-B7DVHw6L.js";import{a as i}from"./argTableProps-C0_5uOxq.js";import"./link.component-DkHkgTHu.js";import"./props-link-BqGlA2_X.js";import"./popover.component-BHy-l3YQ.js";import"./localized-decorator-Cc_5jBJl.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-DgdH7muA.js";import"./icon.component-B9Uw88l_.js";import"./flex.component-CD85IxOy.js";import"./card.component-D4cwreCw.js";import"./default-typography.styles-B9NXa1Bb.js";import"./divider.component-CmDSRx-Z.js";import"./magnifying-glass.component-BDm4FpOM.js";import"./star.component-BV4lq_Xn.js";import"./arrow-right.component-4DmxYuDa.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
