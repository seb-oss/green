import{h as t}from"./iframe-CiafQbDh.js";import"./link-BLwuDPl6.js";import"./popover-BUwaHTsk.js";import"./flex-CzCccVWM.js";import"./card-uvS1bNO8.js";import"./text-CGwEfmNj.js";import"./divider-DNQ6yNwQ.js";import"./magnifying-glass-Eyv0VGQJ.js";import"./star-C1ZWJTo1.js";import"./arrow-right-BWZc3wLH.js";import"./chain-link-D9NNT-2Z.js";import{a as i}from"./argTableProps-HGKLgTYS.js";import"./link.component-Yj5JFseO.js";import"./props-link--618zry9.js";import"./popover.component-D2gyFYBz.js";import"./localized-decorator-BfadPoab.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-Dia5meSO.js";import"./icon.component-DUnEPO_I.js";import"./flex.component-Cm4ZQlRX.js";import"./card.component-DBCk7HQI.js";import"./default-typography.styles-D9KPYcem.js";import"./divider.component-NAcJSnCG.js";import"./magnifying-glass.component-BU9xeucL.js";import"./star.component-Dh7qMLyU.js";import"./arrow-right.component-Bgcp2eM_.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
