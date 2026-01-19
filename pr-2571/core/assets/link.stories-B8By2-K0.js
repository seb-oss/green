import{h as t}from"./iframe-DMDyobL-.js";import"./link-BEaykeRo.js";import"./popover-DuOqn4vT.js";import"./flex-D8CHi21X.js";import"./card-BGcd2HbP.js";import"./text-B-vzt8Fz.js";import"./divider-geM_dtYR.js";import"./magnifying-glass-DXBl1oje.js";import"./star-fMckxcy8.js";import"./arrow-right-DhB2Rm9A.js";import"./chain-link-D9pMbHwa.js";import{a as i}from"./argTableProps-BVaUXf6e.js";import"./link.component-akv7dV3R.js";import"./props-link-CVpt_FmQ.js";import"./popover.component-D-9eA2uF.js";import"./localized-decorator-DmrrsYJI.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-DKrDzxP7.js";import"./icon.component-_ErWSD7Y.js";import"./flex.component-Wi0Fp2wR.js";import"./card.component-jNowQivA.js";import"./default-typography.styles-e6bvIdGX.js";import"./divider.component-66l9JqmQ.js";import"./magnifying-glass.component-bdKXBUP1.js";import"./star.component-DJx-Y_JY.js";import"./arrow-right.component-BNZBM6dI.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
