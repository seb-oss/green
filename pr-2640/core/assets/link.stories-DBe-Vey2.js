import{h as t}from"./iframe-BpRfpQgc.js";import"./link-DdqcGDQK.js";import"./popover-g30wCer_.js";import"./flex-FpcjRpsW.js";import"./card-C5l6eOlU.js";import"./text-LGMaWoae.js";import"./divider-D-XUzFgP.js";import"./magnifying-glass-27H_eE2f.js";import"./star-Cm5vvFPS.js";import"./arrow-right-CHJPw8jh.js";import"./chain-link-BtDDrpSt.js";import{a as i}from"./argTableProps-CjkUG-89.js";import"./link.component-QD6AA9En.js";import"./props-link-dRfXhzAs.js";import"./popover.component-CxEN711w.js";import"./localized-decorator--nY8YBZB.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-33K4dLZB.js";import"./icon.component-B0wjIJ1S.js";import"./flex.component-C8ubOOy0.js";import"./card.component-BExU1a2z.js";import"./default-typography.styles-CgH-ZL7d.js";import"./divider.component-BwBAfJ1G.js";import"./magnifying-glass.component-7sbM7vIH.js";import"./star.component-Bk6wJ_hB.js";import"./arrow-right.component-DBNRoFW9.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
