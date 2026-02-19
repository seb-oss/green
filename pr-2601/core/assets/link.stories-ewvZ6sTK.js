import{h as t}from"./iframe-2dTGah3T.js";import"./link-C8h9womn.js";import"./popover-BDn0avXh.js";import"./flex-DPZcif6m.js";import"./card-CjhXGhfo.js";import"./text-C6LcoToK.js";import"./divider-DYNcmBhD.js";import"./magnifying-glass-pMH0aPEU.js";import"./star-OOhBde8U.js";import"./arrow-right-Bvjp0edR.js";import"./chain-link-cga0s1IQ.js";import{a as i}from"./argTableProps-6Us_o-XZ.js";import"./link.component-BmfNKuFT.js";import"./props-link-DElLsykL.js";import"./popover.component-BeXOtCcN.js";import"./localized-decorator-CArX8uvN.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-Baan-69U.js";import"./icon.component-DJ3ofLYD.js";import"./flex.component-CB55hL76.js";import"./card.component-AWBCNw0n.js";import"./default-typography.styles-CtFv1FM2.js";import"./divider.component-fl_WTs9i.js";import"./magnifying-glass.component-FFLV0kkY.js";import"./star.component-CMBRwx4R.js";import"./arrow-right.component-pJD43l9U.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
