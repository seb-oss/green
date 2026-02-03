import{h as t}from"./iframe-Bk-MxZ0z.js";import"./link-48dQTGiK.js";import"./popover-VPmhDbUR.js";import"./flex-BYqjNQyT.js";import"./card-A8KzFDUm.js";import"./text-pbmOqtZ5.js";import"./divider-BpDimP5z.js";import"./magnifying-glass-Jj36_-G6.js";import"./star-C2VAxmj9.js";import"./arrow-right-C6m2vHEZ.js";import"./chain-link-Bt4J0ISu.js";import{a as i}from"./argTableProps-C-syCgfB.js";import"./link.component-CIOVENxW.js";import"./props-link-DFr-QyhT.js";import"./popover.component-D82SLCgx.js";import"./localized-decorator-B9bUXMXJ.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-BMf_QwWg.js";import"./icon.component-Eez9FLLu.js";import"./flex.component-DgzV2LW_.js";import"./card.component-CRa9AmYs.js";import"./default-typography.styles-BmxKMvdP.js";import"./divider.component-gI1COONZ.js";import"./magnifying-glass.component-CBui6t_T.js";import"./star.component-sT-vAZvf.js";import"./arrow-right.component-BIojcdHf.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
