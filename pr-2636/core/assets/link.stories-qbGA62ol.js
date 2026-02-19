import{h as t}from"./iframe-RJwfSkMC.js";import"./link-wHH8YtG5.js";import"./popover-nxoYxa0S.js";import"./flex-D9kYoABr.js";import"./card-CwfQmVRH.js";import"./text-jEQP1ns7.js";import"./divider-BGNU2zoj.js";import"./magnifying-glass-Dgdmt_fe.js";import"./star-C1ed9Gms.js";import"./arrow-right-CFEgqFGH.js";import"./chain-link-Cc38Vv-d.js";import{a as i}from"./argTableProps-BW4Yyl4q.js";import"./link.component-D5RH9InL.js";import"./props-link-B_J9PBvo.js";import"./popover.component-DzJUABbz.js";import"./localized-decorator-BK9f9wtH.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-2s_5F5R8.js";import"./icon.component-Cupvf4Wr.js";import"./flex.component-BfiuFAFA.js";import"./card.component-BIpb3hIK.js";import"./default-typography.styles-DQY1pjKL.js";import"./divider.component-DRjAbHaH.js";import"./magnifying-glass.component-ByWYCtuX.js";import"./star.component-CqIaj8kT.js";import"./arrow-right.component-DtHkBZxN.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
