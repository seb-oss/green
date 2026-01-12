import{h as t}from"./iframe-BWeeOOFi.js";import"./link-nZouWE-B.js";import"./popover-C8Eky0to.js";import"./flex-B6C6sf3K.js";import"./card-CWQEF0ke.js";import"./text-aYvwp6JV.js";import"./divider-B4TnyTeM.js";import"./magnifying-glass-QgTbEISW.js";import"./star-B1BV1ZZ4.js";import"./arrow-right-CMbZQIej.js";import"./chain-link-Slavtaq9.js";import{a as i}from"./argTableProps-DoMfC7_9.js";import"./link.component-C7QO1Us7.js";import"./props-link-ZQZPuI49.js";import"./popover.component-21dmsMlX.js";import"./localized-decorator-D8vTWa50.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-CfCmvJZY.js";import"./icon.component-DxBrhgMI.js";import"./flex.component-B-Kp0bU1.js";import"./card.component-CoZNbfiW.js";import"./default-typography.styles-CDLmz-Jj.js";import"./divider.component-DgWKFRtO.js";import"./magnifying-glass.component-DSNYU3Wp.js";import"./star.component-DSwdCKWV.js";import"./arrow-right.component-BbInpZVY.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
