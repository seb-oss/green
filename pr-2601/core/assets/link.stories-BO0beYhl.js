import{h as t}from"./iframe-DvHbIuuO.js";import"./link-V_6kNUvH.js";import"./popover-DgwOiq5G.js";import"./flex-MKvL57E0.js";import"./card-BPas4ieR.js";import"./text-C-v1PNuT.js";import"./divider-Cy5hlFOt.js";import"./magnifying-glass-CbgO9Awf.js";import"./star-DdGpuliL.js";import"./arrow-right-CZDjcAWg.js";import"./chain-link-iRC9BYfU.js";import{a as i}from"./argTableProps-Cnl2uSQy.js";import"./link.component-giZ8FMbI.js";import"./props-link-DERc8TZ8.js";import"./popover.component-D7DJ32yB.js";import"./localized-decorator-CIupvBuP.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-NQv0HgpX.js";import"./icon.component-sUnlcUx4.js";import"./flex.component-YrCAuDEy.js";import"./card.component-CLdwazrG.js";import"./default-typography.styles-kPD3Gu62.js";import"./divider.component-C28FIqbV.js";import"./magnifying-glass.component-ByX1Gjlw.js";import"./star.component-CpmYGKaO.js";import"./arrow-right.component-DZTEc5Ng.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
