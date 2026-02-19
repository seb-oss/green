import{h as t}from"./iframe-D9vAKIAs.js";import"./link-kA8pRZgB.js";import"./popover-gnLWCeuY.js";import"./flex-anx3d26R.js";import"./card-BK7Fp8pz.js";import"./text-BGf6PIQN.js";import"./divider-pJ4RB61o.js";import"./magnifying-glass-C2c8KIJs.js";import"./star-2xv6JkFJ.js";import"./arrow-right-CPRHrJBl.js";import"./chain-link-B5Ek0wFj.js";import{a as i}from"./argTableProps-DKtduvzU.js";import"./link.component-zSlB3mma.js";import"./props-link-DLywtEuB.js";import"./popover.component-Db_Msa0t.js";import"./localized-decorator-CW606twr.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-DOZaAP1o.js";import"./icon.component-fD0NACjC.js";import"./flex.component-CZ9qApdD.js";import"./card.component-QApxYYUS.js";import"./default-typography.styles-DhvZ45Mv.js";import"./divider.component-Df7gdRd1.js";import"./magnifying-glass.component-D8e64JqU.js";import"./star.component-DtrKO9Fd.js";import"./arrow-right.component-DTZI7_Xg.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
