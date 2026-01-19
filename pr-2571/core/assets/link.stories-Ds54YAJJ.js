import{h as t}from"./iframe-CIyCOr3z.js";import"./link-Du_4HEmQ.js";import"./popover-DxxlG46g.js";import"./flex-8tL0UkXf.js";import"./card-BoHx761Y.js";import"./text-D7D_rfNO.js";import"./divider-BoU5QXAR.js";import"./magnifying-glass-CNw05D02.js";import"./star-yzXqPTjp.js";import"./arrow-right-DuuL_Mw1.js";import"./chain-link-DyEEIrTS.js";import{a as i}from"./argTableProps-BBeIRQpF.js";import"./link.component-CJeqUKTg.js";import"./props-link-CVlPxnfq.js";import"./popover.component-BViakSQ8.js";import"./localized-decorator-BwT68XI3.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-B4VqYf58.js";import"./icon.component-BU7mvxId.js";import"./flex.component-zzL_HQIe.js";import"./card.component-DYSrcaMg.js";import"./default-typography.styles-6Y6NPAo5.js";import"./divider.component-Cc04zcGp.js";import"./magnifying-glass.component-XTHVpIXm.js";import"./star.component-CyJt0U_U.js";import"./arrow-right.component-D54VDRwc.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
