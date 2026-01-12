import{h as t}from"./iframe-CPczCUo-.js";import"./link-zpSHQRKd.js";import"./popover-Unz9zWBp.js";import"./flex-BDBlis32.js";import"./card-Dcw4VhlC.js";import"./text-CmL7eINf.js";import"./divider-Dzx3h-rk.js";import"./magnifying-glass-BwRiNFZy.js";import"./star-BW0Y-jEP.js";import"./arrow-right-B_V9i77n.js";import"./chain-link-DF9YvcXK.js";import{a as i}from"./argTableProps-CrQdz3qL.js";import"./link.component-BGAxwgdF.js";import"./props-link-DOIKV_uE.js";import"./popover.component-LxFOtxzO.js";import"./localized-decorator-DGBuiHzn.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-QYZ17nsG.js";import"./icon.component-Cq2Pzy0j.js";import"./flex.component-BjCQub8k.js";import"./card.component-C9FLvbvX.js";import"./default-typography.styles-CEojdXoX.js";import"./divider.component-CQl-f9Fs.js";import"./magnifying-glass.component-SaweX2s2.js";import"./star.component-B9U1G-O_.js";import"./arrow-right.component-BRRHOdcT.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
