import{h as t}from"./iframe-CcFU4emh.js";import"./link-Ca2Rqc6B.js";import"./popover-tN33qnkf.js";import"./flex-Cxajg43G.js";import"./card-C4KapWvm.js";import"./text-gIl1LXRH.js";import"./divider-DkPEKpYD.js";import"./magnifying-glass-CCzo82qQ.js";import"./star-CMKIbahb.js";import"./arrow-right-CnPX8D9k.js";import"./chain-link-EKyKnrWJ.js";import{a as i}from"./argTableProps-DPOdPo2o.js";import"./link.component-78hz7pVp.js";import"./props-link-L17QlhW6.js";import"./popover.component-DGYTtf9u.js";import"./localized-decorator-D5xzM0ED.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-DvU5-oOa.js";import"./icon.component-BLQGDtNO.js";import"./flex.component-hHq_mvyF.js";import"./card.component-DPlNLuYN.js";import"./default-typography.styles-OUL87_py.js";import"./divider.component-CjXvnZuS.js";import"./magnifying-glass.component-BxIRsLT6.js";import"./star.component-tNcrDpwz.js";import"./arrow-right.component-CHVBYJQr.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
