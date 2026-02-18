import{h as t}from"./iframe-Yrp1X1kH.js";import"./link-EYNS78am.js";import"./popover-BD_YNT63.js";import"./flex-RKQ-72Se.js";import"./card-B237yGwG.js";import"./text-orXs0WSO.js";import"./divider-C3u5CIxI.js";import"./magnifying-glass-BDtahUDO.js";import"./star-BI8x9jzS.js";import"./arrow-right-B2bW2Mky.js";import"./chain-link-B0dlIYgI.js";import{a as i}from"./argTableProps-PlP3t3mK.js";import"./link.component-Ds7d5HkU.js";import"./props-link-BhM9FLK5.js";import"./popover.component-BeW8a-TS.js";import"./localized-decorator-D1--hSX5.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-BJLzlvaP.js";import"./icon.component-BMfChpE-.js";import"./flex.component-B1o462z2.js";import"./card.component-Cy1jwRe-.js";import"./default-typography.styles-BjloZD7Z.js";import"./divider.component-DJ-ki1bX.js";import"./magnifying-glass.component-Cjr7h6IR.js";import"./star.component-P-edCbys.js";import"./arrow-right.component-DTlC7Drf.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
