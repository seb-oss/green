import{h as t}from"./iframe-Dq4KnV63.js";import"./link-kFeNIaNm.js";import"./popover-Vx8L-HXz.js";import"./flex-B9ezabvY.js";import"./card-DxE75Ocd.js";import"./text-x4kS8ocY.js";import"./divider-BfG-OuGV.js";import"./magnifying-glass-B8iuJBvW.js";import"./star-Cy7TrU9S.js";import"./arrow-right-CxeG-nze.js";import"./chain-link-CVv9gyPO.js";import{a as i}from"./argTableProps-n5KuER0n.js";import"./link.component-CLmhx7uQ.js";import"./props-link-C1GDGgbU.js";import"./popover.component-BXSvquuo.js";import"./localized-decorator-C-CcTGIl.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-C3NNzybn.js";import"./icon.component-BHGNAYjw.js";import"./flex.component-BnWYtpRs.js";import"./card.component-C6G7l2lb.js";import"./default-typography.styles-D_ltfjF3.js";import"./divider.component-85ZikNwJ.js";import"./magnifying-glass.component-aC9j3eAq.js";import"./star.component-JHe8O_Gs.js";import"./arrow-right.component-DN0Bvdg4.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
