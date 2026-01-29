import{h as t}from"./iframe-Log8YVZJ.js";import"./link-DrmJXs7_.js";import"./popover-DUmrje_s.js";import"./flex-BT_zBN5q.js";import"./card-C9uepfMu.js";import"./text-NXBM_2Bw.js";import"./divider-BbCq1Ryu.js";import"./magnifying-glass-BUFjmEi5.js";import"./star-CNUZ7ACN.js";import"./arrow-right-B9siMFfH.js";import"./chain-link-BSMr4q3F.js";import{a as i}from"./argTableProps-Bsy3o0b_.js";import"./link.component-CQ8eo5Bk.js";import"./props-link-DARFAYaW.js";import"./popover.component-byG2L-VM.js";import"./localized-decorator-DxuCzUTn.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-BsKUCbal.js";import"./icon.component-Dp0XZAbo.js";import"./flex.component-eClUdjnn.js";import"./card.component-BHD0fAQV.js";import"./default-typography.styles-ByeKdWmx.js";import"./divider.component-CtrM0npJ.js";import"./magnifying-glass.component-Bp1R0FN9.js";import"./star.component-oD2G08pH.js";import"./arrow-right.component-CKhPbC8O.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
