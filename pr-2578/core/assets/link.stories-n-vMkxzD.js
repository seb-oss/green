import{h as t}from"./iframe-DNTl48pd.js";import"./link-DXqpA5Y3.js";import"./popover-j0bvks94.js";import"./flex-HgAQ4PuB.js";import"./card-DAF9xHlj.js";import"./text-BKxLgXZ5.js";import"./divider-BKW-CWD6.js";import"./magnifying-glass-MgbPzQAR.js";import"./star-CxQS-J0e.js";import"./arrow-right-C8dHxBjN.js";import"./chain-link-DkuFSu1m.js";import{a as i}from"./argTableProps-DOxWWQo1.js";import"./link.component-CU9X52HT.js";import"./props-link-C_Awoauv.js";import"./popover.component-Borr-Qhb.js";import"./localized-decorator-D5Q6_2Fc.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-CXVeepsU.js";import"./icon.component-BacprXjV.js";import"./flex.component-QkSNFxkm.js";import"./card.component-CWIznfwY.js";import"./default-typography.styles-B0oS4x_X.js";import"./divider.component-B68hvdpO.js";import"./magnifying-glass.component-DfyCe90O.js";import"./star.component-BLxAhx_1.js";import"./arrow-right.component-Bh218JFB.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
