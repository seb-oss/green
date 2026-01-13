import{h as t}from"./iframe-DijEw74_.js";import"./link-CpdEFiEp.js";import"./popover-beID410t.js";import"./flex-DROMuK8R.js";import"./card-DlAGLCTJ.js";import"./text-OGOlOyOf.js";import"./divider-HihwoxiY.js";import"./magnifying-glass-CBL3LvcZ.js";import"./star-Do4upIUY.js";import"./arrow-right-C0kuUMig.js";import"./chain-link-DdxP8Lxz.js";import{a as i}from"./argTableProps-CiaERFqh.js";import"./link.component-D8hB7uhZ.js";import"./props-link-CGuVslD2.js";import"./popover.component-Dh7zNXtg.js";import"./localized-decorator-Cue1qFC5.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-Cr5f3_bC.js";import"./icon.component-ZyiLm2zQ.js";import"./flex.component-BmJ0jVPN.js";import"./card.component-GP9cGCKF.js";import"./default-typography.styles-VcMigb_n.js";import"./divider.component-B9AwaPGB.js";import"./magnifying-glass.component-FPdYUIuV.js";import"./star.component-CdmS8QtK.js";import"./arrow-right.component-qNhvidsf.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
