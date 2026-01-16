import{h as t}from"./iframe-BQQroKqS.js";import"./link-D57eZsJn.js";import"./popover-CC5pWly9.js";import"./flex-AsELAJlj.js";import"./card-lbjjOHp9.js";import"./text-DuJw4k1K.js";import"./divider-kkUssttS.js";import"./magnifying-glass-B32mlYy8.js";import"./star-kKQTY9iC.js";import"./arrow-right-BSwx_YOM.js";import"./chain-link-n4gxwCD6.js";import{a as i}from"./argTableProps-198TiHdR.js";import"./link.component-CNtCwaPT.js";import"./props-link-D-zUp3yX.js";import"./popover.component-C9W5Jwe2.js";import"./localized-decorator-CI8jsUR1.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-CLHea3N6.js";import"./icon.component-CIBcNMH6.js";import"./flex.component-7T4du4Zy.js";import"./card.component-CqlmFwU6.js";import"./default-typography.styles-C_Gvzbyq.js";import"./divider.component-Bnqsg4JN.js";import"./magnifying-glass.component-CH8tZVGA.js";import"./star.component-DTHu9l7c.js";import"./arrow-right.component-Ckf9jEQ4.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
