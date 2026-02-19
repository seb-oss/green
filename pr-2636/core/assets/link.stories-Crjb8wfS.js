import{h as t}from"./iframe-tImQFrgz.js";import"./link-C5K-foYI.js";import"./popover-Cap_IuaF.js";import"./flex-D1p8Ohbi.js";import"./card-TlR4uAsW.js";import"./text-B4EHldaL.js";import"./divider-DZUx2TnM.js";import"./magnifying-glass-CdNft6fK.js";import"./star-Gx4QtIV0.js";import"./arrow-right-B3nJ4Z32.js";import"./chain-link-BVDRsKY4.js";import{a as i}from"./argTableProps-Dtf8yFit.js";import"./link.component-B5Vds1uz.js";import"./props-link-ChVefdvT.js";import"./popover.component-BwY7kHCN.js";import"./localized-decorator-BgbdySY8.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-CGs_8iOa.js";import"./icon.component-DBBujEUI.js";import"./flex.component-C_UUgzzz.js";import"./card.component-DYvjSiD3.js";import"./default-typography.styles-CcORt9NA.js";import"./divider.component-CBrlq5SZ.js";import"./magnifying-glass.component-Bg8GDXLv.js";import"./star.component-BEB9fpxL.js";import"./arrow-right.component-Blbwf7zg.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
