import{h as t}from"./iframe-DZfCx1ov.js";import"./link-BjnW8JLi.js";import"./popover-DOPJlsj6.js";import"./flex-DQL0f5nx.js";import"./card-BRESDZCP.js";import"./text-CWJnAPn6.js";import"./divider-DNOPqKgG.js";import"./magnifying-glass-BCJGpdAG.js";import"./star-CKMl6HMZ.js";import"./arrow-right-DtG1yP6D.js";import"./chain-link-BkFOpFwR.js";import{a as i}from"./argTableProps-ChfjJlnJ.js";import"./link.component-5_1U6G3Z.js";import"./props-link-6RwasibN.js";import"./popover.component-Dbc0tYqd.js";import"./localized-decorator-1X_YDkor.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-Cg2CuOEF.js";import"./icon.component-I5R4l-On.js";import"./flex.component-DTmNbtRV.js";import"./card.component-BiYx90g4.js";import"./default-typography.styles-C_xj-fmf.js";import"./divider.component-DIKCHoVy.js";import"./magnifying-glass.component-CJwjEk1o.js";import"./star.component-DKWRp7ep.js";import"./arrow-right.component-CFk3fKTo.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
