import{h as t}from"./iframe-CVFmexQP.js";import"./link-rjkt-GLb.js";import"./popover-CkorFNVY.js";import"./flex-gzUAHg-6.js";import"./card-Dz_7A01K.js";import"./text-Uw6uLsg0.js";import"./divider-B_s5qUZ8.js";import"./magnifying-glass-Bgq5RbhW.js";import"./star-D3iuI9mC.js";import"./arrow-right-BWG15bwi.js";import"./chain-link-NbdFbiW4.js";import{a as i}from"./argTableProps-DHpoDzPJ.js";import"./link.component-BbIbMP-M.js";import"./props-link-DAKMfx6l.js";import"./popover.component-ecYmGvc_.js";import"./localized-decorator-BNQExEAA.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-CqAFuBps.js";import"./icon.component-Da1jjeO2.js";import"./flex.component-CNFtT5Hn.js";import"./card.component-BfEPcx_t.js";import"./default-typography.styles-De6p4ggV.js";import"./divider.component-Boh8WERE.js";import"./magnifying-glass.component-BhLr5MMt.js";import"./star.component-CaAm7xh3.js";import"./arrow-right.component-BdwTI-c1.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
