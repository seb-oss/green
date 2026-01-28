import{h as t}from"./iframe-ByPMS9JH.js";import"./link-Dpzfiy94.js";import"./popover-BeB2UWoJ.js";import"./flex-nBIrz49p.js";import"./card-DE-esGdo.js";import"./text-BzAiAWlR.js";import"./divider-DqWSaz_d.js";import"./magnifying-glass-CEQamYp5.js";import"./star-DplbjQx5.js";import"./arrow-right-BDYMCJ0y.js";import"./chain-link-BGbpbM4P.js";import{a as i}from"./argTableProps-SHyGeyBT.js";import"./link.component-CERyoAdw.js";import"./props-link-DyQ2_3YV.js";import"./popover.component-Cz3zpmV1.js";import"./localized-decorator-rn65t7dM.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-CAct7bM3.js";import"./icon.component-D2m92_JM.js";import"./flex.component-DXQ-9hxN.js";import"./card.component-CrH3YPvY.js";import"./default-typography.styles-CY0bZKhT.js";import"./divider.component-CXCjgs7R.js";import"./magnifying-glass.component-DBCxMAea.js";import"./star.component-BBkz77ve.js";import"./arrow-right.component-DRFJvvbI.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
