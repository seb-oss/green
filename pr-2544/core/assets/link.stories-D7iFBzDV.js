import{h as t}from"./iframe-C-vSePkR.js";import"./link-N1sXCLJU.js";import"./popover-iGfITPxQ.js";import"./flex-C4J0xRk9.js";import"./card-B79GTse1.js";import"./text-D3fs0Szs.js";import"./divider-aYL1RO3t.js";import"./magnifying-glass-vpXX8Ad_.js";import"./star-B5wsHAqi.js";import"./arrow-right-DyTkE6xM.js";import"./chain-link-DQoOzEgm.js";import{a as i}from"./argTableProps-CtVGYQM_.js";import"./link.component-BZ5L7GlQ.js";import"./props-link-Djm-4mcv.js";import"./popover.component-DqaIpsq4.js";import"./localized-decorator-KpgV2Yt6.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-svKLtk3x.js";import"./icon.component-Ca-hYHGF.js";import"./flex.component-C5LxecxV.js";import"./card.component-dplERBBH.js";import"./default-typography.styles-BCLwmegz.js";import"./divider.component-QcOmqhD4.js";import"./magnifying-glass.component-CuTutAIJ.js";import"./star.component-DE6VLkQQ.js";import"./arrow-right.component-BLGBYE51.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
