import{h as t}from"./iframe-B_dd3l6Z.js";import"./link-dkGWqswk.js";import"./popover-tig0m2A8.js";import"./flex-B9P-0j-3.js";import"./card-DM2X9igB.js";import"./text-DJg3lkN2.js";import"./divider-Bwm0GjRt.js";import"./magnifying-glass-BMjsF1ft.js";import"./star-D3MkJhhL.js";import"./arrow-right-CcR_xEt8.js";import"./chain-link-LzeAuK2s.js";import{a as i}from"./argTableProps-BQTkZNj4.js";import"./link.component-3HE8COm2.js";import"./props-link-BpSi-9Yg.js";import"./popover.component-enhYs_AV.js";import"./localized-decorator-C0mZFE-7.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-BhWv_wuS.js";import"./icon.component-BrjBapjD.js";import"./flex.component-DKud6WrH.js";import"./card.component-CCrFnE3X.js";import"./default-typography.styles-CBHVYBFU.js";import"./divider.component-Dy6yf24t.js";import"./magnifying-glass.component-Ccmb23j5.js";import"./star.component-WJFQSgET.js";import"./arrow-right.component-Dr7eYmzi.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
