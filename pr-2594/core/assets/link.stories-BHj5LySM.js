import{h as t}from"./iframe-BZbfo3FS.js";import"./link-BsSacYPI.js";import"./popover-DsNievZT.js";import"./flex-CcZddjDc.js";import"./card-BfeDOZxZ.js";import"./text-BKMkw5yD.js";import"./divider-Dzdar2Go.js";import"./magnifying-glass-BScIfdSr.js";import"./star-Bqaf3F6B.js";import"./arrow-right-D_TT_drW.js";import"./chain-link-Iy5c7RO1.js";import{a as i}from"./argTableProps-D5GLtkVL.js";import"./link.component-CZ5QTt4G.js";import"./props-link-B3Dyl7bv.js";import"./popover.component-CYz6lTfi.js";import"./localized-decorator-C82mW_OS.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-CZH6AROI.js";import"./icon.component-BTs3VFtx.js";import"./flex.component-BxowivKU.js";import"./card.component-B2M5jsjX.js";import"./default-typography.styles-DldTq0TZ.js";import"./divider.component-Bka5Mrut.js";import"./magnifying-glass.component-BqEA6FXX.js";import"./star.component-CmAFUq6K.js";import"./arrow-right.component-DJBa4L9M.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
