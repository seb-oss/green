import{h as t}from"./iframe-BMRmh1sA.js";import"./link-B6BWFbyj.js";import"./popover-BxueHsHB.js";import"./flex-B3ocQL6B.js";import"./card-DWb-jPRY.js";import"./text-DCt5ISf1.js";import"./divider-B16yyQ0O.js";import"./magnifying-glass-CrzPogDc.js";import"./star-DHP9c1ah.js";import"./arrow-right-TYAeFFk7.js";import"./chain-link-Bdem6p1_.js";import{a as i}from"./argTableProps-UAD20Ie1.js";import"./link.component-Dx9Vb1Ir.js";import"./props-link-Rr8CF34N.js";import"./popover.component-CfPjRnAB.js";import"./localized-decorator-Ci9FWaBk.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-BKfsuHmV.js";import"./icon.component-lh5XS7yf.js";import"./flex.component-DGXBPLOU.js";import"./card.component-C0Tmm-zx.js";import"./default-typography.styles-Cx0GaUs_.js";import"./divider.component-py7bxjve.js";import"./magnifying-glass.component-BfpbpsED.js";import"./star.component-C9r1rMqh.js";import"./arrow-right.component-DyM1z_vU.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
