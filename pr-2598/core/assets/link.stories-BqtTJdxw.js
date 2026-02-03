import{h as t}from"./iframe-aXTL5SNE.js";import"./link-C09Fyggy.js";import"./popover-CIdbSZwO.js";import"./flex-BXEGbT5S.js";import"./card-CQ-gEn2R.js";import"./text-CI89AXus.js";import"./divider-d1vBfyKM.js";import"./magnifying-glass-DUKbhLIy.js";import"./star-C8Fj2cqv.js";import"./arrow-right-Cz0zeKw-.js";import"./chain-link-T87O6480.js";import{a as i}from"./argTableProps-BKoJbl0l.js";import"./link.component-CAVqQ1tE.js";import"./props-link-BQWWBWSF.js";import"./popover.component-NGi7o0wZ.js";import"./localized-decorator-CM3Vzjzt.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-ChwPojX4.js";import"./icon.component-DhFG2JS7.js";import"./flex.component-BzB6S2Pb.js";import"./card.component-2prNoFXS.js";import"./default-typography.styles-CZ5ASlZr.js";import"./divider.component-BFGfKkru.js";import"./magnifying-glass.component-DWl3YKEs.js";import"./star.component-BvwrVAWd.js";import"./arrow-right.component-CGjF7OMW.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
