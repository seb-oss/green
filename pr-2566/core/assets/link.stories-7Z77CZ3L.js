import{h as t}from"./iframe-UufRagcw.js";import"./link-CYyhK7VO.js";import"./popover-BVbIa-kL.js";import"./flex-Bf8Phv6Q.js";import"./card-DZpujI6Y.js";import"./text-DzeM1XLo.js";import"./divider-ozy9LIHQ.js";import"./magnifying-glass-xW7Unr3J.js";import"./star-D__-EsCY.js";import"./arrow-right-Xfj1xQiT.js";import"./chain-link-DzgHhiTY.js";import{a as i}from"./argTableProps-B4u898HN.js";import"./link.component-D4lp8Zds.js";import"./props-link-GcPMMbjB.js";import"./popover.component-C-780sMV.js";import"./localized-decorator-BUoGUc6x.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-BpA25poI.js";import"./icon.component-BoZS1-wn.js";import"./flex.component-DIL_0UE4.js";import"./card.component-DIqzDDlH.js";import"./default-typography.styles-3ONHKknA.js";import"./divider.component-DKuF9zpa.js";import"./magnifying-glass.component-DgdbOuOi.js";import"./star.component-DoBaMdHJ.js";import"./arrow-right.component-CHIEJTBK.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
