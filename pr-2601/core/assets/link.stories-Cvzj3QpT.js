import{h as t}from"./iframe-C8zps3Hr.js";import"./link-CDkrBVZV.js";import"./popover-CtSYVNFX.js";import"./flex-EOcB38rf.js";import"./card-CnbLwzG_.js";import"./text-BrFkZI3i.js";import"./divider-B_V_yzM2.js";import"./magnifying-glass-CEmSIa4c.js";import"./star-CnA0pymg.js";import"./arrow-right-dhKKJahs.js";import"./chain-link-3VeVx-0w.js";import{a as i}from"./argTableProps-BLdVJPJE.js";import"./link.component-CQr2Y_76.js";import"./props-link-D2HpXxXA.js";import"./popover.component-Cm-zfSgb.js";import"./localized-decorator-D8esT-iY.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-D2vnY7S-.js";import"./icon.component-Chb4T9tJ.js";import"./flex.component-CeiZ5H-k.js";import"./card.component-BPP-KrvG.js";import"./default-typography.styles-BAd40BYC.js";import"./divider.component-D7O_-rey.js";import"./magnifying-glass.component-CY5yUufJ.js";import"./star.component-5ZrYKwXH.js";import"./arrow-right.component-B4Oct6j7.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
