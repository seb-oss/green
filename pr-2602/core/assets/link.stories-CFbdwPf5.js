import{h as t}from"./iframe-C1rAZNES.js";import"./link-CNd2YUa8.js";import"./popover-BNWjzIOt.js";import"./flex-CYwYziz2.js";import"./card-C-woN3Ka.js";import"./text-BBacKgE1.js";import"./divider-mWcVxNkq.js";import"./magnifying-glass-CzPjnL12.js";import"./star-DZ2EFRUZ.js";import"./arrow-right-imf2TbFI.js";import"./chain-link-CTnVuPAC.js";import{a as i}from"./argTableProps-Dwm9i1L6.js";import"./link.component-DmpbFC_g.js";import"./props-link-DV0L9bpW.js";import"./popover.component-oEMiOJtE.js";import"./localized-decorator-BVfD1jcZ.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-D3q0fDXK.js";import"./icon.component-CK0E683U.js";import"./flex.component-DUe94c28.js";import"./card.component-CAtRNgbP.js";import"./default-typography.styles-DHKqdHM4.js";import"./divider.component-Bu-zGse2.js";import"./magnifying-glass.component-CxKwtG17.js";import"./star.component-Bj4pFPqa.js";import"./arrow-right.component-DcxH6_C6.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
