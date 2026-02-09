import{h as t}from"./iframe-BW-l_IqU.js";import"./link-Bh38WeP7.js";import"./popover-BAB6PTTo.js";import"./flex-2_Dtey6n.js";import"./card-CvaM2tTZ.js";import"./text-yiX1z59m.js";import"./divider-DT4sFvwT.js";import"./magnifying-glass-TMr3x-Pb.js";import"./star-DuyP49oU.js";import"./arrow-right-DIkzuRZU.js";import"./chain-link-B_ptebxA.js";import{a as i}from"./argTableProps-CuH1d52u.js";import"./link.component-Cy1hD2Dw.js";import"./props-link-Z-0G4hl4.js";import"./popover.component-D1LnUqHJ.js";import"./localized-decorator-eSEGARO4.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-C9qqoQ53.js";import"./icon.component-DgUzqp7i.js";import"./flex.component-Dh0WZ1Jk.js";import"./card.component-CCdCM00n.js";import"./default-typography.styles-BknD54WI.js";import"./divider.component-BA8D7_-F.js";import"./magnifying-glass.component-F8kvrMdG.js";import"./star.component-BJ6wt2zB.js";import"./arrow-right.component-B5ZXlcaP.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
