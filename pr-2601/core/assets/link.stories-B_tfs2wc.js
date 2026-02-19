import{h as t}from"./iframe-gcKVotxS.js";import"./link-958fJi1c.js";import"./popover-DaEenUpV.js";import"./flex-BqOg4PnW.js";import"./card-DI0WDjW4.js";import"./text-Y4IP5tM7.js";import"./divider-BaLigS6c.js";import"./magnifying-glass-3gp0gvG1.js";import"./star-B3s9GQua.js";import"./arrow-right-D40uaCKi.js";import"./chain-link-Cs6R9knu.js";import{a as i}from"./argTableProps-BKvTm1Bt.js";import"./link.component-B6qEKCRn.js";import"./props-link-WftUx0sk.js";import"./popover.component-DhEUo93Z.js";import"./localized-decorator-Cb1FU_TN.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-Bf9zHEik.js";import"./icon.component-D1jrqd0e.js";import"./flex.component-sJHgSc4G.js";import"./card.component-vabm0gC2.js";import"./default-typography.styles-BtWnU41D.js";import"./divider.component-BIw5o9nx.js";import"./magnifying-glass.component-DUzqiCM1.js";import"./star.component-C_QkuHrc.js";import"./arrow-right.component-Cc_huepZ.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
