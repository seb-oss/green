import{h as t}from"./iframe-FafrkK3S.js";import"./link-BPsM1ng4.js";import"./popover-DKAq6QtA.js";import"./flex-4ewrK_N2.js";import"./card-mOyTBaX6.js";import"./text-q6tCivHS.js";import"./divider-D_B7YucD.js";import"./magnifying-glass-Bus8-Vyt.js";import"./star-BYaq4muQ.js";import"./arrow-right-rt0JDp4s.js";import"./chain-link-I-oG1kw9.js";import{a as i}from"./argTableProps-bu5H_w8h.js";import"./link.component-DVBqB39R.js";import"./props-link-FxK83PT6.js";import"./popover.component-h5anco6T.js";import"./localized-decorator-DKsT7Tru.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-LaOZDcvC.js";import"./icon.component--v3QrMqc.js";import"./flex.component-DKe0Jep9.js";import"./card.component-_g7M70H6.js";import"./default-typography.styles-CqMN235t.js";import"./divider.component-BGI5ZYr1.js";import"./magnifying-glass.component-P06aaLj6.js";import"./star.component-DMN2cBg2.js";import"./arrow-right.component-7lg3FH2U.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
