import{h as t}from"./iframe-CDTFv-C8.js";import"./link-DBOlkSlv.js";import"./popover-DiT1c_qB.js";import"./flex-Bk9zj1Ie.js";import"./card-BQE9D101.js";import"./text-Cpc0Aa2b.js";import"./divider-CRqjhkRc.js";import"./magnifying-glass-DNI6hREM.js";import"./star-Cz89lRU5.js";import"./arrow-right-Y-UNwKT4.js";import"./chain-link-0zs6PtlD.js";import{a as i}from"./argTableProps-D94_5j3M.js";import"./link.component-FY-2ZUwg.js";import"./props-link-Cz8mPJEA.js";import"./popover.component-Bh_0CVbR.js";import"./localized-decorator-De96p8FJ.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-BmAku09M.js";import"./icon.component-BD9gw1Q3.js";import"./flex.component-DealITh5.js";import"./card.component-CrPfjVg7.js";import"./default-typography.styles-BtSdAxzw.js";import"./divider.component-BatwwC8u.js";import"./magnifying-glass.component-Neurdvaf.js";import"./star.component-DarG0La3.js";import"./arrow-right.component-Dw-VKbYt.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
