import{h as t}from"./iframe-C_i6AL_Q.js";import"./link-B9fDFbFz.js";import"./popover-DhuD6ol4.js";import"./flex-dRs-tAe1.js";import"./card-OYPQtiu0.js";import"./text-BxPDZb43.js";import"./divider-BYW_gCEP.js";import"./magnifying-glass-BU-FOK3S.js";import"./star-DYW-x-ar.js";import"./arrow-right-CKVdUx_J.js";import"./chain-link-CWdjXlGU.js";import{a as i}from"./argTableProps-ASXGYJz4.js";import"./link.component-CElYDpIU.js";import"./props-link-NEqi1ZfK.js";import"./popover.component-DtrObb_y.js";import"./localized-decorator-H-7TKaX0.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-DxGSSh45.js";import"./icon.component-Cxua7B4s.js";import"./flex.component-MfkHdtn5.js";import"./card.component-adkOUnoK.js";import"./default-typography.styles-BbGfJKw5.js";import"./divider.component-CqJBSd4t.js";import"./magnifying-glass.component-BjoGRQIk.js";import"./star.component-COh-lko5.js";import"./arrow-right.component-iqX6F7nX.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
