import{h as t}from"./iframe-7i7lbGMR.js";import"./link-DgX3JWpO.js";import"./popover-Pf77tMkk.js";import"./flex-DdIb4vgO.js";import"./card-DeEbe1Xm.js";import"./text-D4tvslQK.js";import"./divider-cND-GNvK.js";import"./magnifying-glass-Clk6OL7v.js";import"./star-Co6CWm59.js";import"./arrow-right-BqC9MXjZ.js";import"./chain-link-DQFnnbD_.js";import{a as i}from"./argTableProps-BA-K5YhN.js";import"./link.component-BjUCxL5_.js";import"./props-link-BcjEHZRu.js";import"./popover.component-CKsc2RZG.js";import"./localized-decorator-Cvbd25nG.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-BI4tkiBk.js";import"./icon.component-jWB8-sWt.js";import"./flex.component-Bexu0K20.js";import"./card.component-AzsogQO4.js";import"./default-typography.styles-BHvGbRgn.js";import"./divider.component-lsNeK0zc.js";import"./magnifying-glass.component-xI63QCjo.js";import"./star.component-s0mjVuWP.js";import"./arrow-right.component-CO7c4RiX.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
