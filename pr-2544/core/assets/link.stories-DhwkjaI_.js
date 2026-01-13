import{h as t}from"./iframe-B1vn8YXe.js";import"./link-C5gC1OA5.js";import"./popover-DvNUD6DY.js";import"./flex-CGtGE8o9.js";import"./card-B7tt4U0J.js";import"./text-uaQIhtX6.js";import"./divider-BazSNxjq.js";import"./magnifying-glass-DJUMyUIN.js";import"./star-Cux5T6qH.js";import"./arrow-right-9_5x1dkp.js";import"./chain-link-mfW_npgJ.js";import{a as i}from"./argTableProps-CBieWvqJ.js";import"./link.component-BZdh_Xkn.js";import"./props-link-SF_LkQxb.js";import"./popover.component-DoozZEIJ.js";import"./localized-decorator-BdxueW-j.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-uYxDBT0P.js";import"./icon.component-DRbd6nhQ.js";import"./flex.component-zgxE1oym.js";import"./card.component-ByvfZq7l.js";import"./default-typography.styles-BwBH7Z3x.js";import"./divider.component-BM1Mci94.js";import"./magnifying-glass.component-CsmLmO5Y.js";import"./star.component-ysV83y7x.js";import"./arrow-right.component-5M8pK6gR.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
