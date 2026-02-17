import{h as t}from"./iframe-BRqPtqKR.js";import"./link-DMj4z0cD.js";import"./popover-CfEQEDti.js";import"./flex-CkQlgCzk.js";import"./card-RljX6YKj.js";import"./text-DowpWU4n.js";import"./divider-oOB4VEr8.js";import"./magnifying-glass-j3Buw5Qm.js";import"./star-BXtvSUKp.js";import"./arrow-right-DSRgwta7.js";import"./chain-link-TpxXB6lH.js";import{a as i}from"./argTableProps-DrN1Zarc.js";import"./link.component-C138oZBm.js";import"./props-link-BL0Z3vNw.js";import"./popover.component-Dt-wMr7o.js";import"./localized-decorator-Cf9UBoAU.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-CGXAVpKW.js";import"./icon.component-DDxzZsAf.js";import"./flex.component-BjuBNezR.js";import"./card.component-DzI4v2FQ.js";import"./default-typography.styles-CCxG5D8D.js";import"./divider.component-QgxYNp4A.js";import"./magnifying-glass.component-B2IrQAhu.js";import"./star.component-I8I5Oj5q.js";import"./arrow-right.component-DIH2v-R1.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
