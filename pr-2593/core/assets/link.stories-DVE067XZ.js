import{h as t}from"./iframe-DeD76d6T.js";import"./link-CmeGU4lv.js";import"./popover-BPz9V_H8.js";import"./flex-DDqUgCky.js";import"./card-C69xqXUD.js";import"./text-D6Z6RL40.js";import"./divider-DjFDUeBe.js";import"./magnifying-glass-Bp_gK54y.js";import"./star-DhrUEKhW.js";import"./arrow-right-BoasCI1_.js";import"./chain-link-BlU8FgJh.js";import{a as i}from"./argTableProps-BGfxXVL2.js";import"./link.component-CvNOmswa.js";import"./props-link-24wSrOh-.js";import"./popover.component--feL6tVk.js";import"./localized-decorator-DxP51tC8.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-BMf3X43J.js";import"./icon.component-BpXojplS.js";import"./flex.component-BHtdtXy8.js";import"./card.component-BqkU3JX6.js";import"./default-typography.styles-OTLSTH63.js";import"./divider.component-9_nZQuhC.js";import"./magnifying-glass.component-DPnui7H2.js";import"./star.component-CesquwFR.js";import"./arrow-right.component-CacL07J5.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
