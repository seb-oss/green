import{h as t}from"./iframe-CpqjK228.js";import"./link-CalDSfBl.js";import"./popover-Ct7dZ7aP.js";import"./flex-CQad1IfU.js";import"./card-BykM8jEO.js";import"./text-DJlZz-OA.js";import"./divider-5jjIRu0H.js";import"./magnifying-glass-CrQuPxH-.js";import"./star-QBeBpGGm.js";import"./arrow-right-BmvuAv_t.js";import"./chain-link-BN-dlHAa.js";import{a as i}from"./argTableProps-DNo5QX-O.js";import"./link.component-BmUPh8Kj.js";import"./props-link-BjbYERIn.js";import"./popover.component-BGZBM3hK.js";import"./localized-decorator-DFl8Kj1T.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-B0Y9wkNt.js";import"./icon.component-DXkG6Wjx.js";import"./flex.component-DVPv3sYg.js";import"./card.component-Dy3OvPeW.js";import"./default-typography.styles-tcImCxvC.js";import"./divider.component-3LvM2quW.js";import"./magnifying-glass.component-D1YN4wtN.js";import"./star.component-DVw35pRE.js";import"./arrow-right.component-BWp2yGYe.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
