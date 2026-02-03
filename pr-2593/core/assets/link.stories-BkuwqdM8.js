import{h as t}from"./iframe-Bnz-Jxbc.js";import"./link-lGmQqbe1.js";import"./popover-B0HT3jNI.js";import"./flex-BwwAP2Of.js";import"./card-C6iZArMl.js";import"./text-BJamJXgr.js";import"./divider-B-rWi3UA.js";import"./magnifying-glass-93f0egmi.js";import"./star-DdRCR5xp.js";import"./arrow-right-C_4OGAOF.js";import"./chain-link-B3xsJ5zv.js";import{a as i}from"./argTableProps-BpOl5AD1.js";import"./link.component-CuV-T_yD.js";import"./props-link-CF2Nh6B5.js";import"./popover.component-CkWt0eVK.js";import"./localized-decorator-DBBG6ALZ.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-CIqhkPC_.js";import"./icon.component-DzKqo047.js";import"./flex.component-BX2aWvL_.js";import"./card.component-oFDBdUNx.js";import"./default-typography.styles-BZp7ZTXG.js";import"./divider.component-H6IiOyaH.js";import"./magnifying-glass.component-Cto8Y1Qz.js";import"./star.component-nL7Mbs4J.js";import"./arrow-right.component-ozcr319g.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
