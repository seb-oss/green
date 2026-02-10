import{h as t}from"./iframe-BIlJ1H3j.js";import"./link-YoqKHD0y.js";import"./popover-0jDw7glo.js";import"./flex-DLu567hQ.js";import"./card-e-q1u49U.js";import"./text-CkfTOVpQ.js";import"./divider-BQ77Ptoj.js";import"./magnifying-glass-sQ_hRlEJ.js";import"./star-J04vsk55.js";import"./arrow-right-Dp1sFsiP.js";import"./chain-link-BShumlxf.js";import{a as i}from"./argTableProps-Cns_LyGz.js";import"./link.component-CzuhfBXR.js";import"./props-link-bso3P8rf.js";import"./popover.component-CKt1Y5VD.js";import"./localized-decorator-DbeAtEZe.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-BvJ8vi7U.js";import"./icon.component-DRkjPaKl.js";import"./flex.component-Bm698bf9.js";import"./card.component-Dyvl79JC.js";import"./default-typography.styles-DUj4f0nI.js";import"./divider.component-BNngbY0y.js";import"./magnifying-glass.component-Dd441T7U.js";import"./star.component-CYDgzg3h.js";import"./arrow-right.component-BCdIx9ih.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
