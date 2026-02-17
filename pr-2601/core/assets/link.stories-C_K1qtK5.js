import{h as t}from"./iframe-B9-JWcQZ.js";import"./link-DCktirEw.js";import"./popover-Dp-jYFS-.js";import"./flex-DQiX8vKb.js";import"./card-BI2jVI3U.js";import"./text-DlBTdAx1.js";import"./divider-BzGxFQXx.js";import"./magnifying-glass-C9vcwUGX.js";import"./star-BLhuQxDd.js";import"./arrow-right-CmOpJwKe.js";import"./chain-link-BMG7vG4S.js";import{a as i}from"./argTableProps-DM-XBptL.js";import"./link.component-DuI0ggYD.js";import"./props-link-C2H30p-P.js";import"./popover.component-SHtaSH6i.js";import"./localized-decorator-iEOzc6E3.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-xQ-AhMCD.js";import"./icon.component-CYx4zgop.js";import"./flex.component-Bn7BNe8a.js";import"./card.component-D5Ge48lT.js";import"./default-typography.styles-Cd6ZlkfV.js";import"./divider.component-DJA4pd31.js";import"./magnifying-glass.component-aXnv46AG.js";import"./star.component-DBygr58p.js";import"./arrow-right.component-Cywi7N6h.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
