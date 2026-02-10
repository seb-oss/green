import{h as t}from"./iframe-Dza7UAsM.js";import"./link-B7OpEIc1.js";import"./popover-Fqr06fn5.js";import"./flex-DmHqFVk8.js";import"./card-CBDSn0H4.js";import"./text-B4bgFZwc.js";import"./divider-D_fNJ9c1.js";import"./magnifying-glass-CoDt5nBf.js";import"./star-C8d9zN0H.js";import"./arrow-right-DUC1ixSs.js";import"./chain-link-B69FUdJH.js";import{a as i}from"./argTableProps-lNCYVuPK.js";import"./link.component-CxnRIarB.js";import"./props-link--W1JjtQn.js";import"./popover.component-BmKY8279.js";import"./localized-decorator-D9HKVfyR.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-ByaUsE3o.js";import"./icon.component-DjJydk4a.js";import"./flex.component-C5bD0V58.js";import"./card.component-BH5v5fQe.js";import"./default-typography.styles-VV6fcM2w.js";import"./divider.component-Cj5bzGfO.js";import"./magnifying-glass.component-DtONKscu.js";import"./star.component-V2iuQriw.js";import"./arrow-right.component-CHnEKGh3.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
