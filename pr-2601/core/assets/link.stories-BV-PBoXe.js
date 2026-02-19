import{h as t}from"./iframe-CMGnU5sP.js";import"./link-37vX5q1R.js";import"./popover-7py2S4o1.js";import"./flex-BFeCZxoA.js";import"./card-vB4xlJMX.js";import"./text-B23rgik2.js";import"./divider-BNCrbX4G.js";import"./magnifying-glass-BWQ2azeY.js";import"./star-2FkLzzc9.js";import"./arrow-right-BCYftzKy.js";import"./chain-link-59c2rwRR.js";import{a as i}from"./argTableProps-Dl2p_p4C.js";import"./link.component-8Ac8uB9x.js";import"./props-link-D7CajDFU.js";import"./popover.component-BEibATNX.js";import"./localized-decorator-DJxu8cYG.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-CJ7OXW9c.js";import"./icon.component-DlWivA6j.js";import"./flex.component-CXaYjCBZ.js";import"./card.component-DplAei5N.js";import"./default-typography.styles-BGBaCfcR.js";import"./divider.component-x7pL7S2T.js";import"./magnifying-glass.component-EiqdsNmh.js";import"./star.component-DCD6GKYG.js";import"./arrow-right.component-CXA0TYKM.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
