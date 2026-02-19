import{h as t}from"./iframe-ClQhXCfa.js";import"./link-DLsgPFCY.js";import"./popover-P3k4HN6A.js";import"./flex-CZ59H1Zd.js";import"./card-VU1Q8UbJ.js";import"./text-oaJ4p7By.js";import"./divider-C5aeE7tb.js";import"./magnifying-glass-DgaJLW46.js";import"./star-CnxkwIGM.js";import"./arrow-right-CM6s9HzV.js";import"./chain-link-CXYkv7Gy.js";import{a as i}from"./argTableProps-BMTvtpp0.js";import"./link.component-Bsd0Dj0J.js";import"./props-link-DFYCtFba.js";import"./popover.component-BWjYtO69.js";import"./localized-decorator-Bl6LP6Xe.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-zppJ4jxB.js";import"./icon.component-TF5XNcxQ.js";import"./flex.component-fC1vQ49Q.js";import"./card.component-iVbpGFH9.js";import"./default-typography.styles-BYndY-pe.js";import"./divider.component-C-TgWTjA.js";import"./magnifying-glass.component-C6KRoSDv.js";import"./star.component-rS8Dzr7Z.js";import"./arrow-right.component-D5lSpyjd.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
