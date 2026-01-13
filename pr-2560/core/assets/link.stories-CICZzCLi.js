import{h as t}from"./iframe-CqKMOIX5.js";import"./link-B8frYgXu.js";import"./popover-sRSHsLUY.js";import"./flex-DoXXs9cv.js";import"./card-C7ymr6ot.js";import"./text-Cxg9YR9j.js";import"./divider-B4eb7StG.js";import"./magnifying-glass-7JnHoCMj.js";import"./star-DaJdQBK_.js";import"./arrow-right-CQ-9d_ph.js";import"./chain-link-Bzitljmp.js";import{a as i}from"./argTableProps-P0oqvWTk.js";import"./link.component-DW8YkTTB.js";import"./props-link-BfWEWdf9.js";import"./popover.component-DZibbuew.js";import"./localized-decorator-CFtgwxVo.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-WZkpYNYY.js";import"./icon.component-BhjPPF0u.js";import"./flex.component-BwnCzdl3.js";import"./card.component-H7NZpziN.js";import"./default-typography.styles-MLMgocxS.js";import"./divider.component-Ct_SvqtG.js";import"./magnifying-glass.component-BnvMBMeI.js";import"./star.component-LvaC9x7s.js";import"./arrow-right.component-ageB71bM.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
