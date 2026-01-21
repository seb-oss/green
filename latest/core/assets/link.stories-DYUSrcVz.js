import{h as t}from"./iframe-CASzBLiX.js";import"./link-D9radmLj.js";import"./popover-DskKUzzR.js";import"./flex-CXMNz55T.js";import"./card-CJxwlhHO.js";import"./text-Xggf-v9T.js";import"./divider-BDRKiwIN.js";import"./magnifying-glass-DbpuAgtL.js";import"./star-ClbYmwp4.js";import"./arrow-right-kXHjXboB.js";import"./chain-link-DmOWKtbE.js";import{a as i}from"./argTableProps-Crw-rEn1.js";import"./link.component-CCb7q_9C.js";import"./props-link-BIFQVcFB.js";import"./popover.component-BWvH1eIw.js";import"./localized-decorator-DF6OGrp7.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-C3uZ6q8R.js";import"./icon.component-BY-elVrn.js";import"./flex.component-J9b9vMFV.js";import"./card.component-qdMohuXC.js";import"./default-typography.styles-CaMl48YP.js";import"./divider.component-Cun9Iv8q.js";import"./magnifying-glass.component-euc2Ww-s.js";import"./star.component-fmWAwUKX.js";import"./arrow-right.component-9NZztp1w.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
