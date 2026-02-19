import{h as t}from"./iframe-DO2Efq0a.js";import"./link-p3srQAtZ.js";import"./popover-B14FkBJa.js";import"./flex-XGK10Ism.js";import"./card-SGqf8fdS.js";import"./text-f8tR8ZPQ.js";import"./divider-DjfB6ty1.js";import"./magnifying-glass-D8z3DpuL.js";import"./star-BG2l7AVo.js";import"./arrow-right-DTZrf3Mm.js";import"./chain-link-CJyUwA86.js";import{a as i}from"./argTableProps-SddMX800.js";import"./link.component-CpgaCkfX.js";import"./props-link-B2FpVICI.js";import"./popover.component-B1ZskfVI.js";import"./localized-decorator-B3_Tyg0A.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-BhdCM8xS.js";import"./icon.component-BSyRi1a6.js";import"./flex.component-BaAOsURn.js";import"./card.component-6kHHVfbR.js";import"./default-typography.styles-Cr4nr8M1.js";import"./divider.component-Bzn8WpIq.js";import"./magnifying-glass.component-CC-Ku9yA.js";import"./star.component-Dd1dCWai.js";import"./arrow-right.component-Ch0PgYYk.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
