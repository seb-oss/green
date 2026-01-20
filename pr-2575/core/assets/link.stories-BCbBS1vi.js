import{h as t}from"./iframe-Ckb5JYy8.js";import"./link-jK_wP9Qd.js";import"./popover-Bl6vQWuO.js";import"./flex-C2S1XgmO.js";import"./card-5h2avVJV.js";import"./text-DbqlWi-X.js";import"./divider-Dg8eIlra.js";import"./magnifying-glass-hQq0nbmz.js";import"./star-CaGyRZbs.js";import"./arrow-right-BAUtX-y8.js";import"./chain-link-Bnaw165F.js";import{a as i}from"./argTableProps-MFub6R6M.js";import"./link.component-BPg_BN65.js";import"./props-link-Ccky55pA.js";import"./popover.component-B1YvKzTR.js";import"./localized-decorator-BKTLIKfh.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-sli8Z06C.js";import"./icon.component-4t6GFlNj.js";import"./flex.component-bq63keLP.js";import"./card.component-y7GisDGl.js";import"./default-typography.styles-LjEH_hAg.js";import"./divider.component-Bj_V2Es_.js";import"./magnifying-glass.component-BiZxx1gz.js";import"./star.component-DayPlQGf.js";import"./arrow-right.component-DzoGbvEi.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
