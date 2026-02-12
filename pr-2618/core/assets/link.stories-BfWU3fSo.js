import{h as t}from"./iframe-3rIzNoLA.js";import"./link-C1pO2NiI.js";import"./popover-BnbFm1z9.js";import"./flex-BFNpdl07.js";import"./card-fyje3Ait.js";import"./text-BS6qM3Xa.js";import"./divider-B9kLGMke.js";import"./magnifying-glass-C-f6GOk4.js";import"./star-dgjQQo1e.js";import"./arrow-right-DrIU_njQ.js";import"./chain-link-V2xKg8ri.js";import{a as i}from"./argTableProps-MjWkxVLw.js";import"./link.component-CPv3aGaZ.js";import"./props-link-BYltxLxr.js";import"./popover.component-DwlqHWHR.js";import"./localized-decorator-BD_IdVsx.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-D7p3lnJE.js";import"./icon.component-D5eym7mm.js";import"./flex.component-DRbWzKfG.js";import"./card.component-DrrYU94N.js";import"./default-typography.styles-BBUYTE10.js";import"./divider.component-BaBbsgaG.js";import"./magnifying-glass.component-AmU1NUWt.js";import"./star.component-DpBWh3rK.js";import"./arrow-right.component-Chsp831P.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
