import{h as t}from"./iframe-CGSLjpeR.js";import"./link-CuMFDzxL.js";import"./popover-DVeWJ0rA.js";import"./flex-D42WbMbX.js";import"./card-C3e_t8ig.js";import"./text-Uc6DVqcq.js";import"./divider-BcUP7KeN.js";import"./magnifying-glass-DTKVWYy2.js";import"./star-MaXf1kEF.js";import"./arrow-right-nMsoGzRq.js";import"./chain-link-CEWTow7J.js";import{a as i}from"./argTableProps-CGq1uyqY.js";import"./link.component-EYqRZ37v.js";import"./props-link-CY7FOKgG.js";import"./popover.component-mN0uwBNZ.js";import"./localized-decorator-BeZC_Pw3.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-BSEwZ0sF.js";import"./icon.component-Dwpe8fY6.js";import"./flex.component-9qGYLtSv.js";import"./card.component-CCf2EyhB.js";import"./default-typography.styles-YNOlami5.js";import"./divider.component-C0ZZHXzB.js";import"./magnifying-glass.component-BwbHNDSv.js";import"./star.component-CWG2wRk4.js";import"./arrow-right.component-D-flD2l7.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
