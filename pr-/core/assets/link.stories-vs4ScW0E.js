import{h as t}from"./iframe-jJd2S8d1.js";import"./link-Bdm8YdaK.js";import"./popover-D4bbJVHo.js";import"./flex-DHpJcEhc.js";import"./card-CaXpixwf.js";import"./text-D_EVLm-k.js";import"./divider-BkusMcNA.js";import"./magnifying-glass-BgTSGMCV.js";import"./star-OPvkb7EQ.js";import"./arrow-right-DBuI2K4_.js";import"./chain-link-Bb8K3zgP.js";import{a as i}from"./argTableProps-CKOo-PSr.js";import"./props-link-Dmo8uskP.js";import"./popover.component-w6bLTZNX.js";import"./localized-decorator-hkSQEpRT.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-IiwyNvAy.js";import"./icon.component-BMfZdWM_.js";import"./flex.component-DS9_Kppk.js";import"./card.component-BETZzljT.js";import"./default-typography.styles-B_Uv9Rz-.js";import"./divider.component-BjOiKu3p.js";import"./magnifying-glass.component-RxcA6G6P.js";import"./star.component-CWKJNjCg.js";import"./arrow-right.component-CMKAnz7l.js";const I={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},A={...e},B={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
      <gds-icon-chain-link slot="lead"></gds-icon-chain-link>
      Link text
    </gds-link>`},P={...e,name:"Icon: Trail",render:()=>t` <gds-link href="#">
      Link text
      <gds-icon-arrow-right slot="trail"></gds-icon-arrow-right>
    </gds-link>`},_={...e,name:"Text Decoration",render:()=>t`
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
  `},C={...e,name:"Label",render:()=>t`
    <gds-link href="#" label="Aria label is used">
      Link with aria-label
    </gds-link>
  `},E=["Basic","Lead","Trail","TextDecoration","Label"];export{A as Basic,C as Label,B as Lead,_ as TextDecoration,P as Trail,E as __namedExportsOrder,I as default};
