import{h as t}from"./iframe-CTNWM5mu.js";import"./link-Br4-_Mt8.js";import"./popover-CN4vexd5.js";import"./flex-Bw1696ew.js";import"./card-2vIDpOWI.js";import"./text-CJcNaNdI.js";import"./divider-D7q4PW-v.js";import"./magnifying-glass-BdOk6C8k.js";import"./star-DapIpuAQ.js";import"./arrow-right-DYWnMJJa.js";import"./chain-link-EjHQYifY.js";import{a as i}from"./argTableProps-D99bc5Nh.js";import"./link.component-DcmAX2Jx.js";import"./props-link-CC9OdQJZ.js";import"./popover.component-B-i7Ggv1.js";import"./localized-decorator-BscK7hUg.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-BVqPcggV.js";import"./icon.component-wzSptf-L.js";import"./flex.component-DohOSJ5U.js";import"./card.component-DAlTngvE.js";import"./default-typography.styles-BOiYVLhx.js";import"./divider.component-2ctcEoOs.js";import"./magnifying-glass.component-DP78FLDd.js";import"./star.component-DmylGTJl.js";import"./arrow-right.component-CbvSwJro.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
