import{h as t}from"./iframe-A1dnVg9O.js";import"./link-DC9HADY7.js";import"./popover-DgbxNJ0Z.js";import"./flex-Dc9jxAGK.js";import"./card-DFU4f3lg.js";import"./text-BLGu5NlF.js";import"./divider-C6t2EnGN.js";import"./magnifying-glass-DVPs55ci.js";import"./star-JHXzaeGh.js";import"./arrow-right-B_H42wB5.js";import"./chain-link-D4PkwYWA.js";import{a as i}from"./argTableProps-uW7596B4.js";import"./link.component-Ddjvnb8E.js";import"./props-link-z60UgTy3.js";import"./popover.component-Dv2CFL60.js";import"./localized-decorator-C8qrxAb-.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-BfZl0nDu.js";import"./icon.component-BJ9VgAdq.js";import"./flex.component-403VBaxF.js";import"./card.component-BD2dovE9.js";import"./default-typography.styles-BlGFNgRr.js";import"./divider.component-B49A2UAg.js";import"./magnifying-glass.component-98-mJ_Wb.js";import"./star.component-EMQwEVgJ.js";import"./arrow-right.component-AIyTOCXd.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
