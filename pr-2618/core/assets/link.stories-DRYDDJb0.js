import{h as t}from"./iframe-BVQPmz1L.js";import"./link-BJu6F2oO.js";import"./popover-BKzXFvUc.js";import"./flex-bRBOWHRh.js";import"./card-DneoacvF.js";import"./text-DjV4SDUl.js";import"./divider-79YSgwnn.js";import"./magnifying-glass-Bo18I0VL.js";import"./star-DSc4n-Mk.js";import"./arrow-right-ChxM3IWO.js";import"./chain-link-DvwWcD5g.js";import{a as i}from"./argTableProps-DWGLOIaK.js";import"./link.component-DVO02IeY.js";import"./props-link-DYDHwH54.js";import"./popover.component-BCjzx3NQ.js";import"./localized-decorator-zDTKedmw.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-CyTi_bLP.js";import"./icon.component-BfrKEkWA.js";import"./flex.component-CN3TaWsZ.js";import"./card.component-ubTEhPvl.js";import"./default-typography.styles-BWuvEL70.js";import"./divider.component-c9ZUVKsO.js";import"./magnifying-glass.component-DeJ_jHBr.js";import"./star.component-CNqURF2n.js";import"./arrow-right.component-mHYLkQ4t.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
