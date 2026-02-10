import{h as t}from"./iframe-BGqbqd8h.js";import"./link-DujabBvV.js";import"./popover-Dqc3WHbV.js";import"./flex-Dp-86o0X.js";import"./card-CQASjhSQ.js";import"./text-Qt3Pb9-c.js";import"./divider-H9Aa9l_Q.js";import"./magnifying-glass-3m2-CIiE.js";import"./star-BEYbbF0N.js";import"./arrow-right-BtNp8Gxn.js";import"./chain-link-Bb1vlZ4v.js";import{a as i}from"./argTableProps-CcX74XCV.js";import"./link.component-lMBGWMF4.js";import"./props-link-CZ6Dqd40.js";import"./popover.component-CiOdcKGa.js";import"./localized-decorator-CZpYH3pp.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-DRQk991G.js";import"./icon.component-B9o9Bgs_.js";import"./flex.component-5Rea7j4r.js";import"./card.component-DFTXL_Rs.js";import"./default-typography.styles-7b6NmtYf.js";import"./divider.component-DWK8zLoK.js";import"./magnifying-glass.component-BMEXb1YH.js";import"./star.component-DT1RdkeK.js";import"./arrow-right.component-DtWWtutn.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
