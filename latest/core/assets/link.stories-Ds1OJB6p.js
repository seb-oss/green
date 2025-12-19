import{h as t}from"./iframe-CaSnqVAO.js";import"./link-mQAIOzjd.js";import"./popover-DlA_QN79.js";import"./flex-Dg1XC8wP.js";import"./card-DR3vQbbj.js";import"./text-ChPVSlNm.js";import"./divider-CjwxrTpY.js";import"./magnifying-glass-CCNd_KYc.js";import"./star-x0QzO6NL.js";import"./arrow-right-DoUVHuTt.js";import"./chain-link-BnTpodJF.js";import{a as i}from"./argTableProps-C6iN36Xh.js";import"./link.component-D7_RaVsK.js";import"./props-link-B0QVWCw7.js";import"./popover.component-BWnqnfME.js";import"./localized-decorator-Bh06p6zl.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-CfK7DhBz.js";import"./icon.component-BdiabhnO.js";import"./flex.component-xmOxoKSe.js";import"./card.component-B05iLK3e.js";import"./default-typography.styles-JlCI9qIa.js";import"./divider.component-CuZ1iODG.js";import"./magnifying-glass.component-Q3Ct1NFr.js";import"./star.component-imandxRc.js";import"./arrow-right.component-BqyjqEiF.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
