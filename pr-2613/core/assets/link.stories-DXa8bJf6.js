import{h as t}from"./iframe-DkyjKK95.js";import"./link-B6UHqWs0.js";import"./popover-9slw0Jda.js";import"./flex-BUhw6Tiy.js";import"./card-BmwMTyKe.js";import"./text-D-oP4EoO.js";import"./divider-B0_MmdkA.js";import"./magnifying-glass-BeNr_kks.js";import"./star-BBlOoXuy.js";import"./arrow-right-VBPEygrr.js";import"./chain-link-6MHRfLPJ.js";import{a as i}from"./argTableProps-D25Jo-W0.js";import"./link.component-Ck9UvwVI.js";import"./props-link-rnjCRezg.js";import"./popover.component-DZqZsUKQ.js";import"./localized-decorator-i059Ztse.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-B8nDVD9k.js";import"./icon.component-CmrnUAyG.js";import"./flex.component-u7T-zljG.js";import"./card.component-PNJ1cq8S.js";import"./default-typography.styles-BiVwMkpM.js";import"./divider.component-B5uvvH3l.js";import"./magnifying-glass.component-CLZ-95T5.js";import"./star.component-C6bqYjH7.js";import"./arrow-right.component-C9W3AZ3Y.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
