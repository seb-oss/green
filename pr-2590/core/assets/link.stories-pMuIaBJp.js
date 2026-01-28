import{h as t}from"./iframe-heokNkxx.js";import"./link-iSpWHCGS.js";import"./popover-ZEYqSD-u.js";import"./flex-Dt4RAh_7.js";import"./card-BqqNJDXw.js";import"./text-B1d0gPyV.js";import"./divider-DEqBPoF3.js";import"./magnifying-glass-ibtXwVhC.js";import"./star-C7WIs6bc.js";import"./arrow-right-BRsXAxJb.js";import"./chain-link-BtkVX6Nw.js";import{a as i}from"./argTableProps-BbAB0xrA.js";import"./link.component-DZX2skCB.js";import"./props-link-BCE1-fGK.js";import"./popover.component-DXU3GBtd.js";import"./localized-decorator-DxZVosJk.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-CBd3YNHE.js";import"./icon.component-BO162m1G.js";import"./flex.component-Dj4N-Nht.js";import"./card.component-Bjon-NZW.js";import"./default-typography.styles-BBUAg0tm.js";import"./divider.component-B0mqVvob.js";import"./magnifying-glass.component-BH3nimeS.js";import"./star.component-BQrWR7MD.js";import"./arrow-right.component-n3__vqe-.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
