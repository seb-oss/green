import{h as t}from"./iframe-diouKOJK.js";import"./link-k7n9BXwP.js";import"./popover-D4zBdHxN.js";import"./flex-CpgG1mMu.js";import"./card-C0a2nNcX.js";import"./text-CAgIgsZt.js";import"./divider-DcM7A4xV.js";import"./magnifying-glass-Brr6FAle.js";import"./star-BTh2ZgtY.js";import"./arrow-right-yKmWZ4JM.js";import"./chain-link-BQEQnYwV.js";import{a as i}from"./argTableProps-BW81qDo0.js";import"./link.component-BFNATtaM.js";import"./props-link-IxylF5OV.js";import"./popover.component-BOIvvIKM.js";import"./localized-decorator-DYC8F6RS.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-CKT4T82S.js";import"./icon.component-BYUZC0kd.js";import"./flex.component-B-jap3kC.js";import"./card.component-rlPQ_nNP.js";import"./default-typography.styles-Bp3p65xs.js";import"./divider.component-DLBc12g2.js";import"./magnifying-glass.component-CDpdQDMs.js";import"./star.component-E5lhg_vt.js";import"./arrow-right.component-B2CdhTUB.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
