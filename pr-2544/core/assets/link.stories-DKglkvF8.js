import{h as t}from"./iframe-C_OmzNQG.js";import"./link-Bq_XffIE.js";import"./popover-Ds0GyrsH.js";import"./flex-COEZySN9.js";import"./card-CbTp-iDy.js";import"./text-Dm88LN5D.js";import"./divider-NalOSMeH.js";import"./magnifying-glass-hS-4oNFR.js";import"./star-2dO-RSzL.js";import"./arrow-right-CvnEeiCW.js";import"./chain-link-C-mqdgwL.js";import{a as i}from"./argTableProps-BSyDyMsP.js";import"./link.component-DT6TFzgI.js";import"./props-link-49nufMef.js";import"./popover.component-BDS7Y3zE.js";import"./localized-decorator-Bkv57jLL.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-B0KC1LKg.js";import"./icon.component-CTsCIeSH.js";import"./flex.component-HUb2oQeG.js";import"./card.component-BLV1vrIS.js";import"./default-typography.styles-BSjiPVPy.js";import"./divider.component-Ba8IQtAA.js";import"./magnifying-glass.component-BhiNptC0.js";import"./star.component-BXsB055Y.js";import"./arrow-right.component-DVRRZQ3w.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
