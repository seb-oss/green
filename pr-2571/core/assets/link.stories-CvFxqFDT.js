import{h as t}from"./iframe-DuOxvxMM.js";import"./link-jthUX_HN.js";import"./popover-Dr5DYDYQ.js";import"./flex-Df0myY6a.js";import"./card-DQQpCBDO.js";import"./text-Dasdv0et.js";import"./divider-C4nQEy7c.js";import"./magnifying-glass-CczDbhta.js";import"./star-DDmJQbPS.js";import"./arrow-right-DKZ204Fa.js";import"./chain-link-B3wlbtLk.js";import{a as i}from"./argTableProps-BLilrDpD.js";import"./link.component-DlJ8JC9d.js";import"./props-link-D2GP46ke.js";import"./popover.component-DqcSBbha.js";import"./localized-decorator-w0AHHsgk.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component--QHBwLvf.js";import"./icon.component-CUEcHyr6.js";import"./flex.component-Fp2Ol_1y.js";import"./card.component-D_CSQy-c.js";import"./default-typography.styles-CGfQ2Uxj.js";import"./divider.component-DLbl2Gq-.js";import"./magnifying-glass.component-BVdsaVsp.js";import"./star.component-C010Ka3W.js";import"./arrow-right.component-BkrmJ-NW.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
