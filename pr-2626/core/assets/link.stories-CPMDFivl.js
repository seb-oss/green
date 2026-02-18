import{h as t}from"./iframe-Bc4_q3Ov.js";import"./link-CZuTp26S.js";import"./popover-BZnk262L.js";import"./flex-CPn0VONo.js";import"./card-CodVnfxr.js";import"./text-CxkV9x__.js";import"./divider-CSlYMEqM.js";import"./magnifying-glass-D1b9LY6_.js";import"./star-BgWgw5Wb.js";import"./arrow-right-DdhP8cMs.js";import"./chain-link-BXL8_IDz.js";import{a as i}from"./argTableProps-C310ZLIx.js";import"./link.component-D1PuJXhb.js";import"./props-link-CozUOZcG.js";import"./popover.component-DQ0-NZ8-.js";import"./localized-decorator-CqzOTSZg.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-fsTQxr41.js";import"./icon.component-CE4gJ_Rt.js";import"./flex.component-Cl6lWm1u.js";import"./card.component-CaiialMi.js";import"./default-typography.styles-BU0xi_Uu.js";import"./divider.component-DAWKwFDF.js";import"./magnifying-glass.component-BD4UqZOP.js";import"./star.component-CjyhNu0f.js";import"./arrow-right.component-BpDkblcw.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
