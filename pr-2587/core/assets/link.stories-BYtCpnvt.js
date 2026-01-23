import{h as t}from"./iframe--EOx3dpz.js";import"./link-C_x__JaF.js";import"./popover-Cs-Xd64c.js";import"./flex-CPqD0gaj.js";import"./card-Cl-UjOq3.js";import"./text-B_bMLspb.js";import"./divider-D-3woFov.js";import"./magnifying-glass-C_mKjyf_.js";import"./star-Bnm368i2.js";import"./arrow-right-DoEo-Nka.js";import"./chain-link-DaImNo90.js";import{a as i}from"./argTableProps-D49eYQj-.js";import"./link.component-rkWfwWBO.js";import"./props-link-BgmqH6qM.js";import"./popover.component-DpGJv4lM.js";import"./localized-decorator-DKJ1UTxE.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-oRxrF3J3.js";import"./icon.component-nGk6d9tl.js";import"./flex.component-DRomwThP.js";import"./card.component-CEO7KvUT.js";import"./default-typography.styles-ClFV1wzF.js";import"./divider.component-Bje7YDnK.js";import"./magnifying-glass.component-BtzZcpdQ.js";import"./star.component-604H6ViR.js";import"./arrow-right.component-y9BnTxIU.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
