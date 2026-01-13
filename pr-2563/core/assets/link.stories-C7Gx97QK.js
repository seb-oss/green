import{h as t}from"./iframe-CNFifxUN.js";import"./link-CV0qQRxZ.js";import"./popover-DV15Xj8O.js";import"./flex-BE0yi5Jb.js";import"./card-Dzvo_EE7.js";import"./text-BzQmIpb5.js";import"./divider-CLlCci5t.js";import"./magnifying-glass-Dgr2txyw.js";import"./star-DO0bBFCp.js";import"./arrow-right-ANaoblAx.js";import"./chain-link-BnLmvz1v.js";import{a as i}from"./argTableProps-tFz4Mgr1.js";import"./link.component-DL-wW2Ce.js";import"./props-link-Bo7xzo9o.js";import"./popover.component-BdcIQFHp.js";import"./localized-decorator-BTZE8_rm.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-nsCVYnC9.js";import"./icon.component-6pI-3bW1.js";import"./flex.component-CEqnAFZd.js";import"./card.component-BNTM-i5u.js";import"./default-typography.styles-CNHdqPyf.js";import"./divider.component-B5kXh8QP.js";import"./magnifying-glass.component-BdBly_Pd.js";import"./star.component-ByFhglO8.js";import"./arrow-right.component-k4xBzT6T.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
