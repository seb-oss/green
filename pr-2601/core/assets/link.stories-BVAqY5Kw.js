import{h as t}from"./iframe-DmRPdh8P.js";import"./link-d_xuv5MC.js";import"./popover-CsJfJxCZ.js";import"./flex-DkIrlto8.js";import"./card-GRuYr0Nz.js";import"./text-C5PMkCD7.js";import"./divider-DIx5-CmW.js";import"./magnifying-glass-CuXfhwkn.js";import"./star-ojX1m8_i.js";import"./arrow-right-DMyEdRZ_.js";import"./chain-link-BaJilH80.js";import{a as i}from"./argTableProps-BgONiX5m.js";import"./link.component-DVJXvfRn.js";import"./props-link-BqlcRSmT.js";import"./popover.component-D-e4bzYH.js";import"./localized-decorator-DybikGIz.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-K6P9nLNa.js";import"./icon.component-CzdM3tTD.js";import"./flex.component-D5IaVGuz.js";import"./card.component-B6gcHpMy.js";import"./default-typography.styles-TS5D8YDJ.js";import"./divider.component-UXVIZWvF.js";import"./magnifying-glass.component-JLFPb1Pk.js";import"./star.component-Co0tyqQm.js";import"./arrow-right.component-D9XyoV2x.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
