import{h as t}from"./iframe-DGZYUm69.js";import"./link-D0-B-r8X.js";import"./popover-CKAVXyft.js";import"./flex-DfqPPlMQ.js";import"./card-B__EZ3-I.js";import"./text-AbLCoytC.js";import"./divider-CUt_lIge.js";import"./magnifying-glass-B8kTEs84.js";import"./star-DnL7QZdB.js";import"./arrow-right-C_pm9IYi.js";import"./chain-link-B2e4Nb-8.js";import{a as i}from"./argTableProps-Bd7W653B.js";import"./link.component-D66-YV25.js";import"./props-link-DN9g-6pC.js";import"./popover.component-ClJXDJwr.js";import"./localized-decorator-B9Pt1vYn.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-Cb-TaIy0.js";import"./icon.component-IHe_5eoj.js";import"./flex.component-CHXmzPnI.js";import"./card.component-3cgCKd7T.js";import"./default-typography.styles-C5H707uS.js";import"./divider.component-oJmyEbHS.js";import"./magnifying-glass.component-DY-fMEbs.js";import"./star.component-ClHmrJqD.js";import"./arrow-right.component-B56xtIdf.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
