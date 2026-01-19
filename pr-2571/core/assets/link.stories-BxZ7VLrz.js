import{h as t}from"./iframe-BQ4eNaz6.js";import"./link-BG5kYF_Z.js";import"./popover-Ds-c-8Qt.js";import"./flex-DLRQzNAh.js";import"./card-DwB-XfN3.js";import"./text-CUz5McFs.js";import"./divider-DAIelm3P.js";import"./magnifying-glass-BVgOnuux.js";import"./star-CbZ0rpqT.js";import"./arrow-right-B2woF0Dm.js";import"./chain-link-Cu9UNRLh.js";import{a as i}from"./argTableProps--jdXpSJZ.js";import"./link.component-Bo0rwzDD.js";import"./props-link-DQHI8wPz.js";import"./popover.component-CuS54Khp.js";import"./localized-decorator-gl2Mi8lZ.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-D1IbJpKt.js";import"./icon.component-CjYBnmJh.js";import"./flex.component-BRb9Ckho.js";import"./card.component-B2Lp7-rO.js";import"./default-typography.styles-Cz8sT2uQ.js";import"./divider.component-BmLcqMwx.js";import"./magnifying-glass.component-BB1vRHX2.js";import"./star.component-BbW8JWjt.js";import"./arrow-right.component-DjoJFgB2.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
