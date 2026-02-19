import{h as t}from"./iframe-Cz3AnkGr.js";import"./link-DMTkTiOG.js";import"./popover-B0emqrSG.js";import"./flex-CIhTEAFk.js";import"./card-BmlGO84z.js";import"./text-Cxk__6Bp.js";import"./divider-Dq8LoVOx.js";import"./magnifying-glass-C7WCh156.js";import"./star-HeX_pBq4.js";import"./arrow-right-5n5_-TZq.js";import"./chain-link-BIH7JBME.js";import{a as i}from"./argTableProps-uL3iCL7t.js";import"./link.component-DxQCFGQ8.js";import"./props-link-DB_N5Cp5.js";import"./popover.component-BPK4uTAT.js";import"./localized-decorator-Cd6-Wn6w.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-uHeK7hp7.js";import"./icon.component-XMs54qH9.js";import"./flex.component-CnBVnkT5.js";import"./card.component-Di8ko5-K.js";import"./default-typography.styles-CysHEKWE.js";import"./divider.component-4JkXiPd2.js";import"./magnifying-glass.component-UmbKRsug.js";import"./star.component-BqfMwcXJ.js";import"./arrow-right.component-DMFx6wcd.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
