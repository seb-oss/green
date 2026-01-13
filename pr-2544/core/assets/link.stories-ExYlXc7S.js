import{h as t}from"./iframe-Dhv-OfZF.js";import"./link-WsKtuGPp.js";import"./popover-Bw0UI6yb.js";import"./flex-D-9bf1Yd.js";import"./card-BJNQkEzK.js";import"./text-BsnbGYoF.js";import"./divider-Btyt6J0f.js";import"./magnifying-glass-BCY0hwS2.js";import"./star-uudc5YG1.js";import"./arrow-right-CMmiY5P0.js";import"./chain-link-PbPSU7wp.js";import{a as i}from"./argTableProps-BXGlUnOS.js";import"./link.component-C3mESw6K.js";import"./props-link-DMqSB4Tr.js";import"./popover.component-RTfAGIUX.js";import"./localized-decorator-CpXzMxQ1.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-D9iXPUQZ.js";import"./icon.component-pSs68CpH.js";import"./flex.component-DvkXtIAD.js";import"./card.component-B-_FoWIO.js";import"./default-typography.styles-CEYW3sbr.js";import"./divider.component-WBNePBYr.js";import"./magnifying-glass.component-Qi4uX2kl.js";import"./star.component-BDfUMUrs.js";import"./arrow-right.component-CkjhpKX5.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
