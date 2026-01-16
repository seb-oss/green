import{h as t}from"./iframe-DDb3w5d7.js";import"./link-wIvnLZPL.js";import"./popover-_mY5uz4f.js";import"./flex-B-1ILSHc.js";import"./card-CKMzaqPQ.js";import"./text-B0SvEfg3.js";import"./divider-YHuJfDrO.js";import"./magnifying-glass-CiMCnddB.js";import"./star-B0Six1k5.js";import"./arrow-right-Bnu45BWc.js";import"./chain-link-DmSbvxOC.js";import{a as i}from"./argTableProps-zoI2F3Wn.js";import"./link.component-BbI96pA_.js";import"./props-link-CIi--pjn.js";import"./popover.component-DslyRozF.js";import"./localized-decorator-DSRvGx50.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-CgP5_gcJ.js";import"./icon.component-CD2cfMZJ.js";import"./flex.component-18DRtNZW.js";import"./card.component-BZZVbkVx.js";import"./default-typography.styles-Bn5dhJi-.js";import"./divider.component-o6riNaPG.js";import"./magnifying-glass.component-DcpldZwT.js";import"./star.component-C92b8jkl.js";import"./arrow-right.component-CECUmoo8.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
