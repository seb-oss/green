import{h as t}from"./iframe-B9L5cDd9.js";import"./link-JgIOhkoo.js";import"./popover-BNLNeB3f.js";import"./flex-CXVIlJmq.js";import"./card-fwfV2NuJ.js";import"./text-DRjkuZcp.js";import"./divider-CQIDjoHv.js";import"./magnifying-glass-DBjHvuGS.js";import"./star-D1KFlWHg.js";import"./arrow-right-Vk_5DZVc.js";import"./chain-link-D4mP3NNU.js";import{a as i}from"./argTableProps-lQtjm2ap.js";import"./link.component-A56nEtiG.js";import"./props-link-BN6l13pZ.js";import"./popover.component-DAZCd1M1.js";import"./localized-decorator-suM3up7b.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-VsCMlNGP.js";import"./icon.component-DTf-Gz4F.js";import"./flex.component-CXSgO6r7.js";import"./card.component-CMuc6MV-.js";import"./default-typography.styles-DIPnyiOV.js";import"./divider.component-BnT5VIUx.js";import"./magnifying-glass.component-Zck7NdQJ.js";import"./star.component-ChKxQaON.js";import"./arrow-right.component-uQfQP-vM.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
