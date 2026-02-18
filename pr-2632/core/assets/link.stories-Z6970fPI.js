import{h as t}from"./iframe-g2RbAea7.js";import"./link-9fZhB07j.js";import"./popover-BZnbt_t8.js";import"./flex-I4T-OjO6.js";import"./card-DLa8VwWQ.js";import"./text-DNVqpZdS.js";import"./divider-MDff4jJt.js";import"./magnifying-glass-D8b582qc.js";import"./star-DQogZfpY.js";import"./arrow-right-pn36fFqJ.js";import"./chain-link-CdU8Ee9H.js";import{a as i}from"./argTableProps-B00LFve7.js";import"./link.component-B_BBM-t5.js";import"./props-link-Dbo_mNC1.js";import"./popover.component-D4NauEhP.js";import"./localized-decorator-CGK7UXPh.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-BUaC8pGO.js";import"./icon.component-D9LNjvT4.js";import"./flex.component-lJw3gVPm.js";import"./card.component-U-JgRhya.js";import"./default-typography.styles-D091n18q.js";import"./divider.component-Bd5jnzD6.js";import"./magnifying-glass.component-CxMTm4SX.js";import"./star.component-CTlq1WI5.js";import"./arrow-right.component-DJCmcSqe.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
