import{h as t}from"./iframe-Bq9RTfZq.js";import"./link-Bv7Tr_mA.js";import"./popover-Busk4ODI.js";import"./flex-CzK9Xn1s.js";import"./card-CUJG4-m1.js";import"./text-DZW7lia4.js";import"./divider-CJQ1v5J7.js";import"./magnifying-glass-CG-pNCNP.js";import"./star-DHP-hlGs.js";import"./arrow-right-D7_nrkSe.js";import"./chain-link-BOn2wikA.js";import{a as i}from"./argTableProps-BvHKU4bS.js";import"./link.component-DCFLbN36.js";import"./props-link-D9u46UQy.js";import"./popover.component-D8bHJrvT.js";import"./localized-decorator-CkX3xfcj.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-BuCWGvDE.js";import"./icon.component-BbZwV3DJ.js";import"./flex.component-DEey0ruJ.js";import"./card.component-DLocLk9G.js";import"./default-typography.styles-D1LRjJau.js";import"./divider.component-6KQnFgS-.js";import"./magnifying-glass.component-DqabWvhC.js";import"./star.component-C9fmnMne.js";import"./arrow-right.component-ClZRA_oy.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
