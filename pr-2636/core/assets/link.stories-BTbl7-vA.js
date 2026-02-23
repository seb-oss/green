import{h as t}from"./iframe-DRKs3nTV.js";import"./link-BcAYtgnz.js";import"./popover-C9nhq9-H.js";import"./flex-2hCV8jpf.js";import"./card-D8R_bGCP.js";import"./text-D6KuVJgU.js";import"./divider-C1DsRdfj.js";import"./magnifying-glass-i64pTzYf.js";import"./star-Z9ludFHn.js";import"./arrow-right-Dg8h4WOL.js";import"./chain-link-CkzGx-Ns.js";import{a as i}from"./argTableProps-B7LTRWY5.js";import"./link.component-BL-qU0OO.js";import"./props-link-CZ8dFtKg.js";import"./popover.component-L4afsyd-.js";import"./localized-decorator-QZA6ESDO.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-Dl3GskPt.js";import"./icon.component-B9rMDmtx.js";import"./flex.component-DrK28tAb.js";import"./card.component-DIPr--u9.js";import"./default-typography.styles-DiW_uU5w.js";import"./divider.component-v_P7wnGA.js";import"./magnifying-glass.component-DcNXzc1L.js";import"./star.component-BlOHezw-.js";import"./arrow-right.component-Bt-qf7L1.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
