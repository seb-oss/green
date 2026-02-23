import{h as t}from"./iframe-ptTl63C5.js";import"./link-CHticsQg.js";import"./popover-NKae_qb8.js";import"./flex-C9y2mE1m.js";import"./card-4xXt3x6U.js";import"./text-Cd4eHWM5.js";import"./divider-DL0n4Dwa.js";import"./magnifying-glass-CuUjAEat.js";import"./star-BiY9Xqpp.js";import"./arrow-right-DWcS82vx.js";import"./chain-link-BMEGV96M.js";import{a as i}from"./argTableProps-CncuKXYX.js";import"./link.component-DiVYImQv.js";import"./props-link-_LHdvQyM.js";import"./popover.component-DTl5Bh9B.js";import"./localized-decorator-DptVLhNd.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-pjLjsZM1.js";import"./icon.component-C5NyBM3a.js";import"./flex.component-CzelF5f6.js";import"./card.component-Cf8IDD58.js";import"./default-typography.styles-Q0Uhwf2Y.js";import"./divider.component-CYfAC-84.js";import"./magnifying-glass.component-BV8bFR8W.js";import"./star.component-CWHEtG2B.js";import"./arrow-right.component-BZo7QFIf.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
