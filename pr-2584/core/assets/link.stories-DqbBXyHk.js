import{h as t}from"./iframe-BEPLVs1y.js";import"./link-CFXlvPdG.js";import"./popover-C0-cVaiH.js";import"./flex-D98huMmd.js";import"./card-CX0mu3ys.js";import"./text-CcYVKuCY.js";import"./divider-Dcz6iwNV.js";import"./magnifying-glass-CVHWMk3V.js";import"./star-DW9ZPTTP.js";import"./arrow-right-x0Ar_HMs.js";import"./chain-link-BOv-3uG7.js";import{a as i}from"./argTableProps-TLk4yset.js";import"./link.component-CPqHXixT.js";import"./props-link-CG2J5b4r.js";import"./popover.component-mQR_8C5Q.js";import"./localized-decorator-BmLDxFUn.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-Dh5cjwaB.js";import"./icon.component-ZivparLU.js";import"./flex.component-BiPoVA2f.js";import"./card.component-COuxVN8N.js";import"./default-typography.styles-D5_mwp4X.js";import"./divider.component-CfcrnvNB.js";import"./magnifying-glass.component-DIB4_E0I.js";import"./star.component-MUq1U4rN.js";import"./arrow-right.component-C7sJs3_W.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
