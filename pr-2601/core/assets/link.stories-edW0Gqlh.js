import{h as t}from"./iframe-CZ05hS3M.js";import"./link-BXWHKXgG.js";import"./popover-CKqkWhPb.js";import"./flex-XqteE1sH.js";import"./card-DC3nFRR8.js";import"./text-Dg4esbyo.js";import"./divider-mNwPGmkk.js";import"./magnifying-glass-Crf_1CdR.js";import"./star-5RCr8OHV.js";import"./arrow-right-CwSuUV0g.js";import"./chain-link-CbGuGiJK.js";import{a as i}from"./argTableProps-BlnhksLA.js";import"./link.component-CSWDePDF.js";import"./props-link-D12rN0RV.js";import"./popover.component-B-0og8UC.js";import"./localized-decorator-DZttVeom.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-Cq-CWVFT.js";import"./icon.component-DB_HYxEe.js";import"./flex.component-COAKd3b7.js";import"./card.component-CjvQ4has.js";import"./default-typography.styles-DoQRGpyO.js";import"./divider.component-D2no2OZ9.js";import"./magnifying-glass.component-Dvz7x5aO.js";import"./star.component-z-MGkWwp.js";import"./arrow-right.component-BS05P0I8.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
