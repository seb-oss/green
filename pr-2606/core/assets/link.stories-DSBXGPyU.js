import{h as t}from"./iframe-DSf9_LvW.js";import"./link-zFq7ojQv.js";import"./popover-G43Xybjp.js";import"./flex-ChIeOriE.js";import"./card-DchccluB.js";import"./text-BLJABEjk.js";import"./divider-DGFm0om7.js";import"./magnifying-glass-BWv3osoE.js";import"./star-CmTdoHg_.js";import"./arrow-right-GSRMUiXm.js";import"./chain-link-D5sPyrpo.js";import{a as i}from"./argTableProps-CvLgaC2h.js";import"./link.component-Ljn7tmQu.js";import"./props-link-DcEd-zkC.js";import"./popover.component-BXksBs2q.js";import"./localized-decorator-BO2Z1bIQ.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-DlYNlu4M.js";import"./icon.component-C4RQA5n_.js";import"./flex.component-Du3E9zfb.js";import"./card.component-CItJSOYu.js";import"./default-typography.styles-AyUN2D44.js";import"./divider.component-Bq2E3Gsb.js";import"./magnifying-glass.component-fXhe_2BC.js";import"./star.component-CLU4HLSm.js";import"./arrow-right.component-DEFb8It9.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
