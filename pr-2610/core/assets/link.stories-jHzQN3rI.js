import{h as t}from"./iframe-BA3TVzOL.js";import"./link-B0JIvIco.js";import"./popover-DnNGbCvP.js";import"./flex-BEV7UTdd.js";import"./card-Nh8N7JGo.js";import"./text-BSZQlWvp.js";import"./divider-6Tifejzr.js";import"./magnifying-glass-gsnuwGpv.js";import"./star-DQbAuMD5.js";import"./arrow-right-C46EEuqa.js";import"./chain-link-ByK8rVC6.js";import{a as i}from"./argTableProps-cE9rvP7h.js";import"./link.component-DNXTD8mB.js";import"./props-link-D23TEHAG.js";import"./popover.component-CIArKX3m.js";import"./localized-decorator-Bfa8DFiV.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-Bnt0RTcD.js";import"./icon.component-DNkU6CuX.js";import"./flex.component-DaRqz6HB.js";import"./card.component-kHBbkZHO.js";import"./default-typography.styles-D-ZQ6c8M.js";import"./divider.component-CvrUNjsM.js";import"./magnifying-glass.component-yo8Tzf0K.js";import"./star.component-CqwtX2xO.js";import"./arrow-right.component-CgGMYGbM.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
