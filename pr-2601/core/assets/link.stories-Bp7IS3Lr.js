import{h as t}from"./iframe-B_Sc2FD_.js";import"./link-B2DK3JdY.js";import"./popover-_rkKlfif.js";import"./flex-CK-KMwcg.js";import"./card-Brihcow9.js";import"./text-BmZzRDhG.js";import"./divider-D0Esp1mx.js";import"./magnifying-glass-DKHPm4sf.js";import"./star-cbAOixn3.js";import"./arrow-right-lgkDFDiX.js";import"./chain-link-CBN3-tGH.js";import{a as i}from"./argTableProps-BYn1nrRx.js";import"./link.component-COnWNtSP.js";import"./props-link-LAI6vEGh.js";import"./popover.component-B98PXTcZ.js";import"./localized-decorator-yp3xEb-A.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-iid_FxYQ.js";import"./icon.component-CO_afi3Z.js";import"./flex.component-7kB9yVhW.js";import"./card.component-DqqIVQ9y.js";import"./default-typography.styles-BPayJJs_.js";import"./divider.component-C5J3-bHz.js";import"./magnifying-glass.component-0WiSJlOs.js";import"./star.component-CLmSMInS.js";import"./arrow-right.component-BeKG7awp.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
