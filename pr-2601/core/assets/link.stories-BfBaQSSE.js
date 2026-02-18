import{h as t}from"./iframe-CQ6C5171.js";import"./link-BtR8Fif0.js";import"./popover-BoavxKXn.js";import"./flex-CPbiCARk.js";import"./card-BZV32SAu.js";import"./text-CszMod1C.js";import"./divider-s92vxJ5z.js";import"./magnifying-glass-DFfzHp6E.js";import"./star-DHgvP37m.js";import"./arrow-right-BTqJgyEm.js";import"./chain-link-yj3DaSlE.js";import{a as i}from"./argTableProps-DPj_u8QI.js";import"./link.component-DpTUYnoq.js";import"./props-link-C3T_dU3s.js";import"./popover.component-CtKQiClK.js";import"./localized-decorator-Dv1M8wEZ.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-Dvrn8N-F.js";import"./icon.component-DN5ag0d3.js";import"./flex.component-DFXFpgUj.js";import"./card.component-C6dS-oCl.js";import"./default-typography.styles-DVh8uprT.js";import"./divider.component-2ygXj9zS.js";import"./magnifying-glass.component-IYPY1gal.js";import"./star.component-C9owtv_t.js";import"./arrow-right.component-CMDHjSSN.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
