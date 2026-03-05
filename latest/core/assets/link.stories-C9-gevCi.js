import{h as t}from"./iframe-CoeSBRAZ.js";import"./link-CHPkLoZC.js";import"./popover-DXkfWHLx.js";import"./flex-C0fWOohi.js";import"./card-Sogq0cj6.js";import"./text-DuxmBuJm.js";import"./divider-DobugEsy.js";import"./magnifying-glass-CvW_FBQ9.js";import"./star-BwN7nMBU.js";import"./arrow-right-CgUckCsO.js";import"./chain-link-CzHcSAlZ.js";import{a as i}from"./argTableProps-DTyVduFY.js";import"./props-link-DYCUVOfw.js";import"./popover.component-Cz3ytIi8.js";import"./localized-decorator-DaoG_-Rv.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-BvME2u8o.js";import"./icon.component-uTRHruiP.js";import"./flex.component-DzRSufS9.js";import"./card.component-ScuPZKxv.js";import"./default-typography.styles-BFvv6EPf.js";import"./divider.component-CI5pwR4p.js";import"./magnifying-glass.component-BnuoqCO2.js";import"./star.component-BFRZfrDi.js";import"./arrow-right.component-D8y0LpbF.js";const I={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},A={...e},B={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
