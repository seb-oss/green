import{h as t}from"./iframe-CDmSi8W6.js";import"./link-ylkQFhoL.js";import"./popover-CJ4pmPcU.js";import"./flex-t22LT-cv.js";import"./card-B8ewlVFS.js";import"./text-Dm7bqOmx.js";import"./divider-D2XQfmzN.js";import"./magnifying-glass-Bzzn8Mvf.js";import"./star-BSy6ehP-.js";import"./arrow-right-Cz-X8Io4.js";import"./chain-link-DeGw_yz3.js";import{a as i}from"./argTableProps-m9REvccD.js";import"./link.component-D5lZ_QXf.js";import"./props-link-wIGiexMP.js";import"./popover.component-DXvOnWwT.js";import"./localized-decorator-CV3CwOWD.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-C3r-1Q2S.js";import"./icon.component-ZJ0CFeFx.js";import"./flex.component-vI19mTc0.js";import"./card.component-D1FWN4fX.js";import"./default-typography.styles-9sG9NIyK.js";import"./divider.component-BM60NLqc.js";import"./magnifying-glass.component-mvosOQnm.js";import"./star.component-D9RMh_8c.js";import"./arrow-right.component-BcC_igwR.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
