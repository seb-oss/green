import{h as t}from"./iframe-BZT1zFLW.js";import"./link-C8jy4GqE.js";import"./popover-BFDE-MCs.js";import"./flex-DcffHiXI.js";import"./card-B8n1pUrM.js";import"./text-DCAtWyOV.js";import"./divider-BmW8Fj4N.js";import"./magnifying-glass-DUrEuFTm.js";import"./star-CNFF1zfF.js";import"./arrow-right-CFCQhwHt.js";import"./chain-link-CgNFDOYm.js";import{a as i}from"./argTableProps-ps-zQReG.js";import"./link.component-Bjb4SV4e.js";import"./props-link-BWji1RUR.js";import"./popover.component-DS5Gi422.js";import"./localized-decorator-CcBxja47.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-C3Y5f_gL.js";import"./icon.component-Bq1dliJE.js";import"./flex.component-qMZM1TSb.js";import"./card.component-iRV4bi_g.js";import"./default-typography.styles-fFf3-tfn.js";import"./divider.component-CvWLlsnC.js";import"./magnifying-glass.component-B6dQyu-O.js";import"./star.component-C_UKSGLx.js";import"./arrow-right.component-DG0nwJsT.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
