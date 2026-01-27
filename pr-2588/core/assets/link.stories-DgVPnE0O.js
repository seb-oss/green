import{h as t}from"./iframe-CJRfEGsj.js";import"./link-FhINTK9O.js";import"./popover-zQfsgV-2.js";import"./flex-us9rEMon.js";import"./card-B98nCxRd.js";import"./text-BGW9-tDI.js";import"./divider-PVCPtN92.js";import"./magnifying-glass-D_vQYDLu.js";import"./star-DnuYKJBd.js";import"./arrow-right-CvWbcNji.js";import"./chain-link-C6-l-6WS.js";import{a as i}from"./argTableProps-D9-n2ZLu.js";import"./link.component-JdCAm33P.js";import"./props-link-Cv4TYsxD.js";import"./popover.component-lqDLou-6.js";import"./localized-decorator-bnc5vlTW.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-CrK2q8zh.js";import"./icon.component-HGYExgJl.js";import"./flex.component-g7nEBmBL.js";import"./card.component-CU8R5XfF.js";import"./default-typography.styles-1WVx0LJY.js";import"./divider.component-Tssxa1cK.js";import"./magnifying-glass.component-D9xe3XiY.js";import"./star.component-BZa6Rsfd.js";import"./arrow-right.component-DTU3a_nx.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
